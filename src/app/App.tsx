import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { SocialMediaBar } from "./components/SocialMediaBar";
import { NewsletterPopup } from "./components/NewsletterPopup";
import { DHNexusBrand } from "./components/DHNexusBrand";
import { SEO, SEOConfig } from "./components/SEO";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GlobalDHPage } from "./pages/GlobalDHPage";
import { DHatIITJPage } from "./pages/DHatIITJPage";
import { IndustryPage } from "./pages/IndustryPage";
import { HireTalentPage } from "./pages/HireTalentPage";
import { JoinTalentPage } from "./pages/JoinTalentPage";
import { TalentDirectoryPage } from "./pages/TalentDirectoryPage";
import { JobBoardPage } from "./pages/JobBoardPage";
import { SubmitResourcePage } from "./pages/SubmitResourcePage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { SuccessStoriesPage } from "./pages/SuccessStoriesPage";
import { ResearchPage } from "./pages/ResearchPage";
import { EventsPage } from "./pages/EventsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { PartnerPage } from "./pages/PartnerPage";
import { WhatIsDHPage } from "./pages/WhatIsDHPage";
import { ForRecruitersPage } from "./pages/ForRecruitersPage";
import { HelpUsBuildPage } from "./pages/HelpUsBuildPage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { FAQPage } from "./pages/FAQPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { SitemapPage } from "./pages/SitemapPage";
import { CareerResourcesPage } from "./pages/CareerResourcesPage";
import { AltacCareersPage } from "./pages/AltacCareersPage";
import { InteractiveMapPage } from "./pages/InteractiveMapPage";
import { TimelinePage } from "./pages/TimelinePage";
import { MentorshipPage } from "./pages/MentorshipPage";

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen flex flex-col">
          <DHNexusBrand />
          <Navigation />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/what-is-dh"
                element={<WhatIsDHPage />}
              />
              <Route
                path="/for-recruiters"
                element={<ForRecruitersPage />}
              />
              <Route
                path="/global-dh"
                element={<GlobalDHPage />}
              />
              <Route
                path="/dh-at-iitj"
                element={<DHatIITJPage />}
              />
              <Route
                path="/industry"
                element={<IndustryPage />}
              />
              <Route
                path="/hire-talent"
                element={<HireTalentPage />}
              />
              <Route
                path="/join-talent"
                element={<JoinTalentPage />}
              />
              <Route
                path="/talent-directory"
                element={<TalentDirectoryPage />}
              />
              <Route path="/jobs" element={<JobBoardPage />} />
              <Route
                path="/submit-resource"
                element={<SubmitResourcePage />}
              />
              <Route
                path="/admin"
                element={<AdminDashboardPage />}
              />
              <Route
                path="/success-stories"
                element={<SuccessStoriesPage />}
              />
              <Route
                path="/research"
                element={<ResearchPage />}
              />
              <Route path="/events" element={<EventsPage />} />
              <Route
                path="/resources"
                element={<ResourcesPage />}
              />
              <Route path="/partner" element={<PartnerPage />} />
              <Route
                path="/help-build"
                element={<HelpUsBuildPage />}
              />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* New Pages */}
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/career-resources" element={<CareerResourcesPage />} />
              <Route path="/altac-careers" element={<AltacCareersPage />} />
              <Route path="/interactive-map" element={<InteractiveMapPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/mentorship" element={<MentorshipPage />} />
              
              {/* 404 - Must be last */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
          <ScrollToTop />
          <SocialMediaBar />
          <NewsletterPopup />
        </div>
      </Router>
    </ErrorBoundary>
  );
}