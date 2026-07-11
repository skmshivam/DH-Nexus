import { Hono } from "npm:hono";
import * as kv from "./kv_store.tsx";

const api = new Hono();

// ============================================
// VALIDATION HELPERS
// ============================================

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeString = (str: string): string => {
  if (!str) return "";
  return str.trim().slice(0, 5000); // Max 5000 chars
};

const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// ============================================
// ERROR HANDLING WRAPPER
// ============================================

const asyncHandler = (fn: Function) => {
  return async (c: any) => {
    try {
      return await fn(c);
    } catch (error) {
      console.error("API Error:", error);
      return c.json({ 
        error: "An unexpected error occurred. Please try again.", 
        details: error.message 
      }, 500);
    }
  };
};

// ============================================
// HEALTH CHECK
// ============================================

api.get("/health", asyncHandler(async (c) => {
  const stats = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime ? Math.floor(process.uptime()) : 0,
  };
  
  return c.json(stats);
}));

// ============================================
// CONTACT FORM SUBMISSIONS
// ============================================

api.post("/contact", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { name, email, subject, message, userType } = body;

  // Validation
  if (!name || name.length < 2) {
    return c.json({ error: "Name must be at least 2 characters" }, 400);
  }

  if (!email || !validateEmail(email)) {
    return c.json({ error: "Valid email is required" }, 400);
  }

  if (!message || message.length < 10) {
    return c.json({ error: "Message must be at least 10 characters" }, 400);
  }

  // Sanitize inputs
  const sanitizedData = {
    name: sanitizeString(name),
    email: email.toLowerCase().trim(),
    subject: sanitizeString(subject) || "No subject",
    message: sanitizeString(message),
    userType: userType || "general"
  };

  const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const contactData = {
    id: contactId,
    ...sanitizedData,
    timestamp: new Date().toISOString(),
    status: "unread",
  };

  await kv.set(contactId, contactData);

  return c.json({ 
    success: true, 
    message: "Thank you for contacting us! We'll get back to you within 24 hours.",
    contactId 
  });
}));

api.get("/contact/all", asyncHandler(async (c) => {
  const contacts = await kv.getByPrefix("contact_");
  const sortedContacts = contacts.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  return c.json({ contacts: sortedContacts, count: sortedContacts.length });
}));

// Mark contact as read
api.post("/contact/:id/read", asyncHandler(async (c) => {
  const contactId = c.req.param("id");
  const contact = await kv.get(contactId);
  
  if (!contact) {
    return c.json({ error: "Contact not found" }, 404);
  }

  contact.status = "read";
  contact.readAt = new Date().toISOString();
  await kv.set(contactId, contact);

  return c.json({ success: true, message: "Contact marked as read" });
}));

// ============================================
// NEWSLETTER SIGNUPS
// ============================================

api.post("/newsletter/subscribe", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { email, name, interests } = body;

  // Validation
  if (!email || !validateEmail(email)) {
    return c.json({ error: "Valid email is required" }, 400);
  }

  const sanitizedEmail = email.toLowerCase().trim();
  const subscriberId = `newsletter_${sanitizedEmail.replace(/[^a-z0-9]/g, '_')}`;
  
  // Check if already subscribed
  const existing = await kv.get(subscriberId);
  if (existing) {
    return c.json({ 
      success: true, 
      message: "You're already subscribed to our newsletter!",
      alreadySubscribed: true
    });
  }

  const subscriberData = {
    id: subscriberId,
    email: sanitizedEmail,
    name: sanitizeString(name) || "",
    interests: Array.isArray(interests) ? interests : [],
    subscribedAt: new Date().toISOString(),
    status: "active",
    source: "website"
  };

  await kv.set(subscriberId, subscriberData);

  return c.json({ 
    success: true, 
    message: "Successfully subscribed! Welcome to DH Nexus community. Check your email for confirmation." 
  });
}));

api.get("/newsletter/all", asyncHandler(async (c) => {
  const subscribers = await kv.getByPrefix("newsletter_");
  const activeSubscribers = subscribers.filter(s => s.status === "active");
  return c.json({ 
    subscribers: activeSubscribers,
    count: activeSubscribers.length 
  });
}));

// Unsubscribe
api.post("/newsletter/unsubscribe", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { email } = body;

  if (!email || !validateEmail(email)) {
    return c.json({ error: "Valid email is required" }, 400);
  }

  const subscriberId = `newsletter_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
  const subscriber = await kv.get(subscriberId);
  
  if (!subscriber) {
    return c.json({ error: "Email not found in our records" }, 404);
  }

  subscriber.status = "unsubscribed";
  subscriber.unsubscribedAt = new Date().toISOString();
  await kv.set(subscriberId, subscriber);

  return c.json({ 
    success: true, 
    message: "Successfully unsubscribed. Sorry to see you go!" 
  });
}));

// ============================================
// STUDENT PROFILES (Talent Network)
// ============================================

api.post("/students/profile", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { 
    email, 
    name, 
    institute, 
    program,
    graduationYear,
    skills, 
    bio,
    linkedin,
    github,
    portfolio,
    resume,
    lookingFor,
    location,
    interests
  } = body;

  // Validation
  if (!email || !validateEmail(email)) {
    return c.json({ error: "Valid email is required" }, 400);
  }

  if (!name || name.length < 2) {
    return c.json({ error: "Name must be at least 2 characters" }, 400);
  }

  if (!Array.isArray(skills) || skills.length === 0) {
    return c.json({ error: "At least one skill is required" }, 400);
  }

  // Validate URLs if provided
  if (linkedin && linkedin.trim() && !validateUrl(linkedin)) {
    return c.json({ error: "Invalid LinkedIn URL" }, 400);
  }
  if (github && github.trim() && !validateUrl(github)) {
    return c.json({ error: "Invalid GitHub URL" }, 400);
  }
  if (portfolio && portfolio.trim() && !validateUrl(portfolio)) {
    return c.json({ error: "Invalid portfolio URL" }, 400);
  }

  const sanitizedEmail = email.toLowerCase().trim();
  const profileId = `student_${sanitizedEmail.replace(/[^a-z0-9]/g, '_')}`;
  
  // Check if updating existing profile
  const existingProfile = await kv.get(profileId);
  
  const profileData = {
    id: profileId,
    email: sanitizedEmail,
    name: sanitizeString(name),
    institute: sanitizeString(institute) || "",
    program: sanitizeString(program) || "",
    graduationYear: graduationYear || "",
    skills: skills.slice(0, 20).map(s => sanitizeString(s)), // Max 20 skills
    bio: sanitizeString(bio) || "",
    linkedin: linkedin?.trim() || "",
    github: github?.trim() || "",
    portfolio: portfolio?.trim() || "",
    resume: resume?.trim() || "",
    lookingFor: lookingFor || "opportunities",
    location: sanitizeString(location) || "",
    interests: Array.isArray(interests) ? interests.slice(0, 10) : [],
    createdAt: existingProfile?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "active",
    profileComplete: !!(name && bio && skills?.length > 0 && institute),
    views: existingProfile?.views || 0
  };

  await kv.set(profileId, profileData);

  return c.json({ 
    success: true, 
    message: existingProfile ? "Profile updated successfully!" : "Profile created successfully!",
    profile: profileData
  });
}));

api.get("/students/profile/:email", asyncHandler(async (c) => {
  const email = c.req.param("email");
  
  if (!validateEmail(email)) {
    return c.json({ error: "Invalid email format" }, 400);
  }
  
  const profileId = `student_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
  const profile = await kv.get(profileId);
  
  if (!profile) {
    return c.json({ error: "Profile not found" }, 404);
  }

  // Increment views
  profile.views = (profile.views || 0) + 1;
  await kv.set(profileId, profile);

  return c.json({ profile });
}));

api.get("/students/all", asyncHandler(async (c) => {
  const profiles = await kv.getByPrefix("student_");
  
  // Filter only active and complete profiles
  const activeProfiles = profiles
    .filter(p => p.status === "active" && p.profileComplete)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return c.json({ 
    profiles: activeProfiles,
    count: activeProfiles.length 
  });
}));

api.post("/students/search", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { skills, location, graduationYear, lookingFor } = body;

  const allProfiles = await kv.getByPrefix("student_");
  
  let filtered = allProfiles.filter(p => p.status === "active" && p.profileComplete);

  if (skills && Array.isArray(skills) && skills.length > 0) {
    filtered = filtered.filter(p => 
      skills.some((skill: string) => 
        p.skills?.some((s: string) => 
          s.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
  }

  if (location) {
    filtered = filtered.filter(p => 
      p.location?.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (graduationYear) {
    filtered = filtered.filter(p => p.graduationYear === graduationYear);
  }

  if (lookingFor) {
    filtered = filtered.filter(p => p.lookingFor === lookingFor);
  }

  return c.json({ 
    profiles: filtered,
    count: filtered.length 
  });
}));

// Delete profile
api.delete("/students/profile/:email", asyncHandler(async (c) => {
  const email = c.req.param("email");
  
  if (!validateEmail(email)) {
    return c.json({ error: "Invalid email format" }, 400);
  }
  
  const profileId = `student_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
  const profile = await kv.get(profileId);
  
  if (!profile) {
    return c.json({ error: "Profile not found" }, 404);
  }

  await kv.del(profileId);

  return c.json({ 
    success: true, 
    message: "Profile deleted successfully" 
  });
}));

// ============================================
// JOB POSTINGS
// ============================================

api.post("/jobs", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { 
    companyName,
    companyEmail,
    jobTitle,
    description,
    requirements,
    location,
    jobType,
    salary,
    applyUrl,
    contactEmail
  } = body;

  // Validation
  if (!companyName || companyName.length < 2) {
    return c.json({ error: "Company name is required" }, 400);
  }

  if (!jobTitle || jobTitle.length < 3) {
    return c.json({ error: "Job title must be at least 3 characters" }, 400);
  }

  if (!description || description.length < 20) {
    return c.json({ error: "Job description must be at least 20 characters" }, 400);
  }

  if (companyEmail && !validateEmail(companyEmail)) {
    return c.json({ error: "Invalid company email" }, 400);
  }

  if (contactEmail && !validateEmail(contactEmail)) {
    return c.json({ error: "Invalid contact email" }, 400);
  }

  if (applyUrl && applyUrl.trim() && !validateUrl(applyUrl)) {
    return c.json({ error: "Invalid application URL" }, 400);
  }

  const jobId = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const jobData = {
    id: jobId,
    companyName: sanitizeString(companyName),
    companyEmail: companyEmail?.toLowerCase().trim() || "",
    jobTitle: sanitizeString(jobTitle),
    description: sanitizeString(description),
    requirements: Array.isArray(requirements) ? requirements.slice(0, 20) : [],
    location: sanitizeString(location) || "Remote",
    jobType: jobType || "Full-time",
    salary: sanitizeString(salary) || "",
    applyUrl: applyUrl?.trim() || "",
    contactEmail: contactEmail?.toLowerCase().trim() || companyEmail?.toLowerCase().trim() || "",
    postedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days
    status: "active",
    applicationsCount: 0,
    views: 0
  };

  await kv.set(jobId, jobData);

  return c.json({ 
    success: true, 
    message: "Job posted successfully! It's now live on the platform.",
    jobId,
    job: jobData
  });
}));

api.get("/jobs/all", asyncHandler(async (c) => {
  const jobs = await kv.getByPrefix("job_");
  
  const now = new Date().getTime();
  const activeJobs = jobs
    .filter(j => {
      const isActive = j.status === "active";
      const notExpired = new Date(j.expiresAt).getTime() > now;
      return isActive && notExpired;
    })
    .sort((a, b) => 
      new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    );

  return c.json({ 
    jobs: activeJobs,
    count: activeJobs.length 
  });
}));

api.get("/jobs/:id", asyncHandler(async (c) => {
  const jobId = c.req.param("id");
  const job = await kv.get(jobId);
  
  if (!job) {
    return c.json({ error: "Job not found" }, 404);
  }

  // Check if expired
  if (new Date(job.expiresAt).getTime() < new Date().getTime()) {
    job.status = "expired";
    await kv.set(jobId, job);
    return c.json({ error: "This job posting has expired" }, 410);
  }

  // Increment views
  job.views = (job.views || 0) + 1;
  await kv.set(jobId, job);

  return c.json({ job });
}));

// Search jobs
api.post("/jobs/search", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { keywords, location, jobType, requirements } = body;

  const allJobs = await kv.getByPrefix("job_");
  const now = new Date().getTime();
  
  let filtered = allJobs.filter(j => {
    const isActive = j.status === "active";
    const notExpired = new Date(j.expiresAt).getTime() > now;
    return isActive && notExpired;
  });

  if (keywords) {
    const searchTerm = keywords.toLowerCase();
    filtered = filtered.filter(j => 
      j.jobTitle.toLowerCase().includes(searchTerm) ||
      j.description.toLowerCase().includes(searchTerm) ||
      j.companyName.toLowerCase().includes(searchTerm)
    );
  }

  if (location) {
    filtered = filtered.filter(j => 
      j.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (jobType && jobType !== "all") {
    filtered = filtered.filter(j => j.jobType === jobType);
  }

  if (requirements && Array.isArray(requirements) && requirements.length > 0) {
    filtered = filtered.filter(j => 
      requirements.some((req: string) => 
        j.requirements?.some((r: string) => 
          r.toLowerCase().includes(req.toLowerCase())
        )
      )
    );
  }

  return c.json({ 
    jobs: filtered,
    count: filtered.length 
  });
}));

// Close/delete job
api.delete("/jobs/:id", asyncHandler(async (c) => {
  const jobId = c.req.param("id");
  const job = await kv.get(jobId);
  
  if (!job) {
    return c.json({ error: "Job not found" }, 404);
  }

  job.status = "closed";
  job.closedAt = new Date().toISOString();
  await kv.set(jobId, job);

  return c.json({ 
    success: true, 
    message: "Job posting closed successfully" 
  });
}));

// ============================================
// JOB APPLICATIONS
// ============================================

api.post("/applications", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { 
    jobId,
    studentEmail,
    studentName,
    resume,
    coverLetter,
    linkedin,
    portfolio,
    phone
  } = body;

  // Validation
  if (!jobId) {
    return c.json({ error: "Job ID is required" }, 400);
  }

  if (!studentEmail || !validateEmail(studentEmail)) {
    return c.json({ error: "Valid email is required" }, 400);
  }

  if (!studentName || studentName.length < 2) {
    return c.json({ error: "Name must be at least 2 characters" }, 400);
  }

  // Check if job exists
  const job = await kv.get(jobId);
  if (!job) {
    return c.json({ error: "Job not found" }, 404);
  }

  if (job.status !== "active") {
    return c.json({ error: "This job is no longer accepting applications" }, 400);
  }

  const sanitizedEmail = studentEmail.toLowerCase().trim();
  const applicationId = `application_${jobId}_${sanitizedEmail.replace(/[^a-z0-9]/g, '_')}`;
  
  // Check if already applied
  const existing = await kv.get(applicationId);
  if (existing) {
    return c.json({ 
      error: "You have already applied to this job",
      appliedAt: existing.appliedAt
    }, 400);
  }

  const applicationData = {
    id: applicationId,
    jobId,
    jobTitle: job.jobTitle,
    companyName: job.companyName,
    studentEmail: sanitizedEmail,
    studentName: sanitizeString(studentName),
    phone: sanitizeString(phone) || "",
    resume: resume?.trim() || "",
    coverLetter: sanitizeString(coverLetter) || "",
    linkedin: linkedin?.trim() || "",
    portfolio: portfolio?.trim() || "",
    appliedAt: new Date().toISOString(),
    status: "submitted",
    viewed: false
  };

  await kv.set(applicationId, applicationData);

  // Increment job applications count
  job.applicationsCount = (job.applicationsCount || 0) + 1;
  await kv.set(jobId, job);

  return c.json({ 
    success: true, 
    message: "Application submitted successfully! The company will review your application and contact you if interested.",
    applicationId 
  });
}));

api.get("/applications/job/:jobId", asyncHandler(async (c) => {
  const jobId = c.req.param("jobId");
  const allApplications = await kv.getByPrefix(`application_${jobId}_`);
  
  const sortedApplications = allApplications.sort((a, b) => 
    new Date(b.appliedAt).getTime() - new Date(a.appliedAt).getTime()
  );
  
  return c.json({ 
    applications: sortedApplications,
    count: sortedApplications.length 
  });
}));

api.get("/applications/student/:email", asyncHandler(async (c) => {
  const email = c.req.param("email");
  
  if (!validateEmail(email)) {
    return c.json({ error: "Invalid email format" }, 400);
  }
  
  const allApplications = await kv.getByPrefix("application_");
  
  const studentApplications = allApplications
    .filter(app => app.studentEmail === email.toLowerCase())
    .sort((a, b) => 
      new Date(b.appliedAt).getTime() - new Date(a.appliedAt).getTime()
    );

  return c.json({ 
    applications: studentApplications,
    count: studentApplications.length 
  });
}));

// Update application status
api.post("/applications/:id/status", asyncHandler(async (c) => {
  const applicationId = c.req.param("id");
  const body = await c.req.json();
  const { status } = body;

  const validStatuses = ["submitted", "reviewing", "shortlisted", "rejected", "hired"];
  if (!validStatuses.includes(status)) {
    return c.json({ error: "Invalid status" }, 400);
  }

  const application = await kv.get(applicationId);
  
  if (!application) {
    return c.json({ error: "Application not found" }, 404);
  }

  application.status = status;
  application.statusUpdatedAt = new Date().toISOString();
  await kv.set(applicationId, application);

  return c.json({ 
    success: true, 
    message: "Application status updated",
    application 
  });
}));

// ============================================
// RESOURCE SUBMISSIONS
// ============================================

api.post("/resources", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { 
    title,
    url,
    description,
    category,
    submittedBy,
    submitterEmail,
    tags
  } = body;

  // Validation
  if (!title || title.length < 3) {
    return c.json({ error: "Title must be at least 3 characters" }, 400);
  }

  if (!url || !validateUrl(url)) {
    return c.json({ error: "Valid URL is required" }, 400);
  }

  if (submitterEmail && !validateEmail(submitterEmail)) {
    return c.json({ error: "Invalid email" }, 400);
  }

  const resourceId = `resource_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const resourceData = {
    id: resourceId,
    title: sanitizeString(title),
    url: url.trim(),
    description: sanitizeString(description) || "",
    category: category || "general",
    submittedBy: sanitizeString(submittedBy) || "Anonymous",
    submitterEmail: submitterEmail?.toLowerCase().trim() || "",
    tags: Array.isArray(tags) ? tags.slice(0, 10) : [],
    submittedAt: new Date().toISOString(),
    status: "pending", // pending, approved, rejected
    upvotes: 0,
    views: 0
  };

  await kv.set(resourceId, resourceData);

  return c.json({ 
    success: true, 
    message: "Resource submitted successfully! It will be reviewed and published soon.",
    resourceId 
  });
}));

api.post("/resources/:id/approve", asyncHandler(async (c) => {
  const resourceId = c.req.param("id");
  const resource = await kv.get(resourceId);
  
  if (!resource) {
    return c.json({ error: "Resource not found" }, 404);
  }

  resource.status = "approved";
  resource.approvedAt = new Date().toISOString();
  await kv.set(resourceId, resource);

  return c.json({ 
    success: true, 
    message: "Resource approved and published",
    resource 
  });
}));

api.post("/resources/:id/reject", asyncHandler(async (c) => {
  const resourceId = c.req.param("id");
  const body = await c.req.json();
  const { reason } = body;
  
  const resource = await kv.get(resourceId);
  
  if (!resource) {
    return c.json({ error: "Resource not found" }, 404);
  }

  resource.status = "rejected";
  resource.rejectedAt = new Date().toISOString();
  resource.rejectionReason = reason || "";
  await kv.set(resourceId, resource);

  return c.json({ 
    success: true, 
    message: "Resource rejected",
    resource 
  });
}));

api.get("/resources/all", asyncHandler(async (c) => {
  const resources = await kv.getByPrefix("resource_");
  
  const approvedResources = resources
    .filter(r => r.status === "approved")
    .sort((a, b) => b.upvotes - a.upvotes);

  return c.json({ 
    resources: approvedResources,
    count: approvedResources.length 
  });
}));

api.get("/resources/pending", asyncHandler(async (c) => {
  const resources = await kv.getByPrefix("resource_");
  
  const pendingResources = resources
    .filter(r => r.status === "pending")
    .sort((a, b) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

  return c.json({ 
    resources: pendingResources,
    count: pendingResources.length 
  });
}));

api.post("/resources/:id/upvote", asyncHandler(async (c) => {
  const resourceId = c.req.param("id");
  const resource = await kv.get(resourceId);
  
  if (!resource) {
    return c.json({ error: "Resource not found" }, 404);
  }

  if (resource.status !== "approved") {
    return c.json({ error: "Resource is not published" }, 400);
  }

  resource.upvotes = (resource.upvotes || 0) + 1;
  await kv.set(resourceId, resource);

  return c.json({ 
    success: true, 
    upvotes: resource.upvotes 
  });
}));

// ============================================
// EVENT REGISTRATIONS
// ============================================

api.post("/events/register", asyncHandler(async (c) => {
  const body = await c.req.json();
  const { 
    eventId,
    eventName,
    name,
    email,
    institute,
    phone,
    dietaryRestrictions,
    questions
  } = body;

  // Validation
  if (!eventId) {
    return c.json({ error: "Event ID is required" }, 400);
  }

  if (!name || name.length < 2) {
    return c.json({ error: "Name must be at least 2 characters" }, 400);
  }

  if (!email || !validateEmail(email)) {
    return c.json({ error: "Valid email is required" }, 400);
  }

  const sanitizedEmail = email.toLowerCase().trim();
  const registrationId = `registration_${eventId}_${sanitizedEmail.replace(/[^a-z0-9]/g, '_')}`;
  
  // Check if already registered
  const existing = await kv.get(registrationId);
  if (existing) {
    return c.json({ 
      error: "You are already registered for this event",
      registeredAt: existing.registeredAt
    }, 400);
  }

  const registrationData = {
    id: registrationId,
    eventId,
    eventName: sanitizeString(eventName) || "",
    name: sanitizeString(name),
    email: sanitizedEmail,
    institute: sanitizeString(institute) || "",
    phone: sanitizeString(phone) || "",
    dietaryRestrictions: sanitizeString(dietaryRestrictions) || "",
    questions: sanitizeString(questions) || "",
    registeredAt: new Date().toISOString(),
    status: "confirmed",
    attended: false,
    reminderSent: false
  };

  await kv.set(registrationId, registrationData);

  return c.json({ 
    success: true, 
    message: "Successfully registered for the event! You'll receive a confirmation email shortly.",
    registrationId 
  });
}));

api.get("/events/:eventId/registrations", asyncHandler(async (c) => {
  const eventId = c.req.param("eventId");
  const registrations = await kv.getByPrefix(`registration_${eventId}_`);
  
  const sortedRegistrations = registrations.sort((a, b) => 
    new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime()
  );
  
  return c.json({ 
    registrations: sortedRegistrations,
    count: sortedRegistrations.length 
  });
}));

// Mark attendance
api.post("/events/registrations/:id/attend", asyncHandler(async (c) => {
  const registrationId = c.req.param("id");
  const registration = await kv.get(registrationId);
  
  if (!registration) {
    return c.json({ error: "Registration not found" }, 404);
  }

  registration.attended = true;
  registration.attendedAt = new Date().toISOString();
  await kv.set(registrationId, registration);

  return c.json({ 
    success: true, 
    message: "Attendance marked successfully" 
  });
}));

// ============================================
// ANALYTICS & STATS
// ============================================

api.get("/stats", asyncHandler(async (c) => {
  const [
    students,
    jobs,
    applications,
    contacts,
    subscribers,
    resources,
    registrations
  ] = await Promise.all([
    kv.getByPrefix("student_"),
    kv.getByPrefix("job_"),
    kv.getByPrefix("application_"),
    kv.getByPrefix("contact_"),
    kv.getByPrefix("newsletter_"),
    kv.getByPrefix("resource_"),
    kv.getByPrefix("registration_")
  ]);

  const stats = {
    totalStudents: students.length,
    activeProfiles: students.filter(s => s.profileComplete).length,
    totalJobs: jobs.length,
    activeJobs: jobs.filter(j => j.status === "active").length,
    totalApplications: applications.length,
    applicationsByStatus: {
      submitted: applications.filter(a => a.status === "submitted").length,
      reviewing: applications.filter(a => a.status === "reviewing").length,
      shortlisted: applications.filter(a => a.status === "shortlisted").length,
      hired: applications.filter(a => a.status === "hired").length,
      rejected: applications.filter(a => a.status === "rejected").length,
    },
    totalContacts: contacts.length,
    unreadContacts: contacts.filter(c => c.status === "unread").length,
    totalSubscribers: subscribers.length,
    activeSubscribers: subscribers.filter(s => s.status === "active").length,
    totalResources: resources.length,
    approvedResources: resources.filter(r => r.status === "approved").length,
    pendingResources: resources.filter(r => r.status === "pending").length,
    totalRegistrations: registrations.length,
    upcomingEvents: registrations.filter(r => r.status === "confirmed").length,
    lastUpdated: new Date().toISOString()
  };

  return c.json({ stats });
}));

// ============================================
// ADMIN UTILITIES
// ============================================

// Bulk delete expired jobs
api.post("/admin/cleanup/jobs", asyncHandler(async (c) => {
  const jobs = await kv.getByPrefix("job_");
  const now = new Date().getTime();
  
  let cleanedCount = 0;
  for (const job of jobs) {
    if (new Date(job.expiresAt).getTime() < now && job.status === "active") {
      job.status = "expired";
      await kv.set(job.id, job);
      cleanedCount++;
    }
  }

  return c.json({ 
    success: true, 
    message: `Cleaned up ${cleanedCount} expired jobs`,
    cleanedCount 
  });
}));

// Get all data keys (admin only)
api.get("/admin/keys", asyncHandler(async (c) => {
  const [
    students,
    jobs,
    applications,
    contacts,
    subscribers,
    resources,
    registrations
  ] = await Promise.all([
    kv.getByPrefix("student_"),
    kv.getByPrefix("job_"),
    kv.getByPrefix("application_"),
    kv.getByPrefix("contact_"),
    kv.getByPrefix("newsletter_"),
    kv.getByPrefix("resource_"),
    kv.getByPrefix("registration_")
  ]);

  return c.json({
    keys: {
      students: students.length,
      jobs: jobs.length,
      applications: applications.length,
      contacts: contacts.length,
      subscribers: subscribers.length,
      resources: resources.length,
      registrations: registrations.length,
      total: students.length + jobs.length + applications.length + 
             contacts.length + subscribers.length + resources.length + registrations.length
    }
  });
}));

export default api;
