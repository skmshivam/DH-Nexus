import { Lightbulb, Code, BookOpen, Globe, Sparkles, TrendingUp, Heart, Zap, Database, Brain, Cpu, BarChart3, Network, Target, GitBranch, Layers, FileCode, Search, Shield, Workflow, Users, Building2, Newspaper, Smartphone, Radio, AlertCircle, CheckCircle2, ArrowRight, Factory, TrendingDown, Clock, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import dhVisualExplainer from 'figma:asset/70e70d405e3a7e62fe9b691cd16dc14e55eb48e1.png';

export function WhatIsDH() {
  return (
    <section id="what-is-dh" className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Introduction */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full mb-6">
            <Cpu className="w-5 h-5" />
            <span className="text-sm">The Authority Explainer</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
            What Exactly Is Digital Humanities?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            The complete guide to understanding Digital Humanities—from beginner basics to expert technical depth
          </p>
        </div>

        {/* Visual Explainer Image */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
            <img 
              src={dhVisualExplainer} 
              alt="DH Nexus - Bridging Human Insight & Digital Innovation" 
              className="w-full h-auto rounded-2xl"
              width="1200"
              height="675"
            />
            <p className="text-center text-slate-600 mt-6 text-lg">
              <span className="text-indigo-600 font-semibold">DH Nexus</span> bridges the gap between human understanding and digital innovation
            </p>
          </div>
        </div>

        {/* Simple Definition - For Beginners */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-10 border-2 border-green-300 shadow-lg overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY1ODczOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students studying"
                className="w-full h-full object-cover"
                width="1080"
                height="720"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-green-600 uppercase tracking-wide mb-1">For Beginners</div>
                  <h3 className="text-3xl text-slate-900">The Simple Definition</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 mb-6">
                <p className="text-2xl text-slate-800 mb-6 leading-relaxed">
                  Digital Humanities is <span className="text-green-600 font-semibold">using technology to understand people, culture, and society</span>. It's what happens when you apply the power of computers, AI, and data science to questions about human behavior, language, history, art, and social patterns.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Think of it this way: <span className="text-green-600">If Computer Science teaches you to build technology, Digital Humanities teaches you to build technology that understands humans.</span> It's the difference between creating an app and creating an app that truly knows what users need, how they communicate, and why they behave the way they do.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="text-lg text-slate-900 mb-2">What You Study</h4>
                  <p className="text-sm text-slate-700">Human-generated data: texts, social media, art, culture, history, languages, user behavior</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="text-3xl mb-3">🔧</div>
                  <h4 className="text-lg text-slate-900 mb-2">What You Use</h4>
                  <p className="text-sm text-slate-700">Coding, AI/ML, data analysis, visualization, databases, computational methods</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="text-3xl mb-3">💼</div>
                  <h4 className="text-lg text-slate-900 mb-2">Where You Work</h4>
                  <p className="text-sm text-slate-700">Tech companies, startups, research labs, media companies, consulting firms, anywhere dealing with content and users</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Definition - For Experts */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-10 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm text-cyan-300 uppercase tracking-wide mb-1">For Technical Audiences</div>
                <h3 className="text-3xl text-white">The Technical Definition</h3>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-6">
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Digital Humanities is the <span className="text-cyan-300">computational analysis of humanities data</span> using methods from computer science, data science, artificial intelligence, and information science. It applies <span className="text-cyan-300">algorithmic thinking, statistical modeling, and machine learning</span> to domains traditionally studied qualitatively—literature, history, culture, language, social networks, and human behavior.
              </p>
              <p className="text-lg text-purple-200 mb-6 leading-relaxed">
                At its core, DH addresses the <span className="text-yellow-300">"data science for unstructured, contextual, human-generated data"</span> problem. While traditional data science excels at numerical datasets, DH specializes in the messy reality of text, images, social interactions, cultural artifacts, and temporal patterns that require both computational rigor and interpretive nuance.
              </p>
              <p className="text-lg text-indigo-200 leading-relaxed">
                Methodologically, DH practitioners employ <span className="text-pink-300">natural language processing (NLP), network analysis, geospatial mapping, computer vision, topic modeling, sentiment analysis, and interactive visualization</span> to extract patterns from large-scale corpora that would be impossible to analyze manually. The discipline uniquely bridges the <span className="text-green-300">epistemological gap between quantitative and qualitative research</span>, producing hybrid insights that leverage both computational scale and humanistic interpretation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl text-cyan-300 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Core Computational Methods
                </h4>
                <ul className="space-y-2 text-indigo-100 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span><strong>NLP Pipeline:</strong> Tokenization, POS tagging, dependency parsing, named entity recognition, semantic role labeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Unsupervised Learning:</strong> Topic modeling (LDA, NMF), clustering, dimensionality reduction (PCA, t-SNE, UMAP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Deep Learning:</strong> Transformer architectures, BERT/GPT fine-tuning, sequence-to-sequence models, attention mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Network Science:</strong> Graph theory, centrality measures, community detection, influence propagation modeling</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl text-pink-300 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Data Infrastructure
                </h4>
                <ul className="space-y-2 text-purple-100 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Text Corpora:</strong> Multi-million document collections, OCR pipelines, metadata schemas, versioning systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Graph Databases:</strong> Neo4j, RDF stores, SPARQL queries, linked data frameworks, ontology engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Vector Stores:</strong> Embeddings databases, semantic search infrastructure, similarity algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-300 mt-0.5 flex-shrink-0" />
                    <span><strong>APIs & Scraping:</strong> RESTful data collection, rate limiting, ethical scraping, streaming data ingestion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-500/20 border border-yellow-300/30 rounded-xl p-6">
              <h4 className="text-xl text-yellow-300 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                The Unique Value Proposition
              </h4>
              <p className="text-yellow-100 leading-relaxed">
                Unlike pure CS (which optimizes algorithms) or pure humanities (which interprets meaning), DH creates <span className="text-white font-semibold">systems that scale human interpretation</span>. A DH professional doesn't just build a sentiment classifier—they build one that understands cultural context, irony, historical shifts in language, and bias in training data. This makes DH graduates uniquely valuable for any company dealing with content, users, language, or culture at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-5xl mb-4 text-slate-900">Real-World Applications</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Digital Humanities powers the products and services you use every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Social Media Platforms */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">Social Media Platforms</h4>
                  <p className="text-blue-600">Twitter, Instagram, TikTok, LinkedIn</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="text-sm text-blue-700 mb-2 uppercase tracking-wide">Content Moderation</h5>
                  <p className="text-sm text-slate-700">DH professionals build NLP systems that detect hate speech, misinformation, and harmful content across millions of posts in real-time. They understand linguistic nuance, cultural context, and evolving slang that simple keyword filters miss.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="text-sm text-blue-700 mb-2 uppercase tracking-wide">Recommendation Algorithms</h5>
                  <p className="text-sm text-slate-700">Your feed isn't random—DH experts design algorithms that understand user interests, content semantics, and social network dynamics to show you relevant posts, stories, and videos.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="text-sm text-blue-700 mb-2 uppercase tracking-wide">Trend Detection</h5>
                  <p className="text-sm text-slate-700">Identifying viral topics, emerging hashtags, and cultural moments requires analyzing social network graphs and temporal patterns—core DH skills.</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500 bg-slate-100 rounded p-3">
                <strong>DH Roles:</strong> Content Analyst, Trust & Safety Engineer, Social Data Scientist, Community Health Researcher
              </div>
            </div>

            {/* E-Commerce & Retail */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">E-Commerce & Retail</h4>
                  <p className="text-purple-600">Amazon, Flipkart, Shopify, Walmart</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="text-sm text-purple-700 mb-2 uppercase tracking-wide">Product Recommendations</h5>
                  <p className="text-sm text-slate-700">"Customers who bought this also bought..." systems use collaborative filtering, content similarity, and user behavior analysis—all DH methodologies applied at massive scale.</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="text-sm text-purple-700 mb-2 uppercase tracking-wide">Review Analysis</h5>
                  <p className="text-sm text-slate-700">DH experts extract insights from millions of customer reviews using sentiment analysis, aspect-based opinion mining, and topic modeling to improve products and identify issues.</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="text-sm text-purple-700 mb-2 uppercase tracking-wide">Search & Discovery</h5>
                  <p className="text-sm text-slate-700">Semantic search that understands "red dress for wedding" vs "burgundy evening gown" requires NLP and cultural understanding of language use.</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500 bg-slate-100 rounded p-3">
                <strong>DH Roles:</strong> Product Data Scientist, Search Engineer, Customer Insights Analyst, Personalization Specialist
              </div>
            </div>

            {/* Streaming & Entertainment */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-pink-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">Streaming & Entertainment</h4>
                  <p className="text-pink-600">Netflix, Spotify, YouTube, Disney+</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h5 className="text-sm text-pink-700 mb-2 uppercase tracking-wide">Content Personalization</h5>
                  <p className="text-sm text-slate-700">Netflix's "Because you watched..." recommendations analyze viewing patterns, content metadata, and cultural preferences across 200+ million users globally—pure DH at scale.</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <h5 className="text-sm text-pink-700 mb-2 uppercase tracking-wide">Subtitle & Localization</h5>
                  <p className="text-sm text-slate-700">Translating content for global audiences while preserving cultural nuances, idioms, and context requires computational linguistics expertise.</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <h5 className="text-sm text-pink-700 mb-2 uppercase tracking-wide">Audience Analytics</h5>
                  <p className="text-sm text-slate-700">Understanding what makes content engaging across different demographics, cultures, and regions uses mixed-method DH research approaches.</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500 bg-slate-100 rounded p-3">
                <strong>DH Roles:</strong> Content Analyst, Localization Engineer, Audience Researcher, Recommendation Systems Engineer
              </div>
            </div>

            {/* News & Media */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">News & Media</h4>
                  <p className="text-amber-600">NYT, BBC, Reuters, Associated Press</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h5 className="text-sm text-amber-700 mb-2 uppercase tracking-wide">Automated Journalism</h5>
                  <p className="text-sm text-slate-700">DH professionals build systems that generate news summaries, detect breaking stories from social media, and fact-check claims using NLP and knowledge graphs.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h5 className="text-sm text-amber-700 mb-2 uppercase tracking-wide">Misinformation Detection</h5>
                  <p className="text-sm text-slate-700">Identifying fake news, propaganda, and coordinated disinformation campaigns requires analyzing narrative patterns, source credibility, and social network structures.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h5 className="text-sm text-amber-700 mb-2 uppercase tracking-wide">Audience Engagement</h5>
                  <p className="text-sm text-slate-700">Understanding what stories resonate with readers through comment analysis, reading pattern tracking, and sentiment monitoring.</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500 bg-slate-100 rounded p-3">
                <strong>DH Roles:</strong> Computational Journalist, Fact-Checking Engineer, Audience Analytics Lead, News Recommender Systems
              </div>
            </div>

            {/* Healthcare & Research */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">Healthcare & Research</h4>
                  <p className="text-green-600">Medical informatics, Clinical research</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="text-sm text-green-700 mb-2 uppercase tracking-wide">Clinical Text Mining</h5>
                  <p className="text-sm text-slate-700">Extracting insights from millions of unstructured medical records, doctor's notes, and research papers to improve patient care and accelerate research.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="text-sm text-green-700 mb-2 uppercase tracking-wide">Patient Sentiment Analysis</h5>
                  <p className="text-sm text-slate-700">Analyzing patient feedback, reviews, and social media to understand healthcare experiences and improve service quality.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="text-sm text-green-700 mb-2 uppercase tracking-wide">Literature Review Automation</h5>
                  <p className="text-sm text-slate-700">DH methods help researchers find relevant studies across thousands of publications using semantic search and citation network analysis.</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500 bg-slate-100 rounded p-3">
                <strong>DH Roles:</strong> Clinical Informatics Specialist, Healthcare Data Analyst, Medical Text Mining Engineer
              </div>
            </div>

            {/* Enterprise & SaaS */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">Enterprise & SaaS</h4>
                  <p className="text-indigo-600">Microsoft, Salesforce, Slack, Notion</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h5 className="text-sm text-indigo-700 mb-2 uppercase tracking-wide">Document Intelligence</h5>
                  <p className="text-sm text-slate-700">Automatically categorizing, tagging, and extracting information from corporate documents, contracts, and emails using NLP pipelines.</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h5 className="text-sm text-indigo-700 mb-2 uppercase tracking-wide">Knowledge Management</h5>
                  <p className="text-sm text-slate-700">Building intelligent search systems, chatbots, and knowledge graphs that help employees find information across massive enterprise systems.</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h5 className="text-sm text-indigo-700 mb-2 uppercase tracking-wide">Customer Support Automation</h5>
                  <p className="text-sm text-slate-700">Analyzing support tickets to identify common issues, route requests, and generate automated responses while maintaining empathetic communication.</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500 bg-slate-100 rounded p-3">
                <strong>DH Roles:</strong> Knowledge Engineer, Document Intelligence Specialist, Conversational AI Designer
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 border-2 border-slate-300">
            <h4 className="text-2xl text-slate-900 mb-4 text-center">The Common Thread</h4>
            <p className="text-lg text-slate-700 text-center max-w-4xl mx-auto leading-relaxed">
              Every application above involves <span className="text-indigo-600 font-semibold">understanding human-generated data at scale</span>. Whether it's text, social interactions, cultural preferences, or behavioral patterns—DH provides the <span className="text-purple-600 font-semibold">methodology and technical tools</span> to turn this messy, unstructured, contextual data into actionable intelligence. This is why companies pay premium salaries for these skills.
            </p>
          </div>
        </div>

        {/* Why It Matters Now */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-5xl mb-4 text-slate-900">Why Digital Humanities Matters Now</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Five critical reasons why DH skills are more valuable than ever in 2024 and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* The AI Revolution Needs Human Understanding */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-2xl">The AI Revolution Needs Human Understanding</h4>
                </div>
              </div>
              <p className="text-indigo-100 mb-4 leading-relaxed">
                ChatGPT, Gemini, Claude—large language models are transforming industries. But these AI systems are only as good as the humans who train, evaluate, and deploy them. <span className="text-yellow-300 font-semibold">DH professionals are the bridge between raw AI power and responsible, culturally-aware applications.</span>
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h5 className="text-sm text-cyan-300 mb-2 uppercase tracking-wide">Real Impact:</h5>
                <ul className="space-y-2 text-sm text-indigo-100">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span>DH experts curate and evaluate training data to prevent bias in AI models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span>They design prompts and evaluation metrics that account for cultural context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span>They identify when AI outputs are culturally insensitive or factually incorrect</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Explosion = Content Chaos */}
            <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-yellow-300" />
                </div>
                <div>
                  <h4 className="text-2xl">Data Explosion = Content Chaos</h4>
                </div>
              </div>
              <p className="text-pink-100 mb-4 leading-relaxed">
                <span className="text-yellow-300 font-semibold">500 hours of video uploaded to YouTube every minute. 350,000 tweets per minute. 95 million photos posted on Instagram daily.</span> Traditional data science can't handle this flood of unstructured human content—but DH can.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h5 className="text-sm text-yellow-300 mb-2 uppercase tracking-wide">The Challenge:</h5>
                <ul className="space-y-2 text-sm text-pink-100">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>Companies drowning in customer feedback, reviews, support tickets, social mentions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>Most valuable insights locked in unstructured text, not neat spreadsheets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>DH provides tools to turn content chaos into competitive advantage</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Global Markets Need Cultural Intelligence */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-green-300" />
                </div>
                <div>
                  <h4 className="text-2xl">Global Markets Need Cultural Intelligence</h4>
                </div>
              </div>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Tech companies aren't just going global—they're going <span className="text-green-300 font-semibold">hyper-local</span>. Success in India, Brazil, Japan, or Nigeria requires understanding linguistic nuances, cultural norms, and regional behaviors. <span className="text-yellow-300 font-semibold">DH professionals bring this cultural-computational intelligence.</span>
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h5 className="text-sm text-green-300 mb-2 uppercase tracking-wide">Why This Matters:</h5>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Algorithms trained on English data fail spectacularly in other languages/cultures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>What's acceptable in one culture is offensive in another—DH experts navigate this</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>Localization isn't just translation—it's cultural adaptation at scale</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Trust & Safety Crisis */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-2xl">The Trust & Safety Crisis</h4>
                </div>
              </div>
              <p className="text-amber-100 mb-4 leading-relaxed">
                Misinformation, hate speech, cyberbullying, deepfakes—online platforms face existential threats to user trust. Governments worldwide are demanding accountability. <span className="text-yellow-300 font-semibold">DH professionals are on the frontlines of building safer digital spaces.</span>
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h5 className="text-sm text-cyan-300 mb-2 uppercase tracking-wide">Critical Roles:</h5>
                <ul className="space-y-2 text-sm text-amber-100">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span>Designing content moderation systems that balance free speech and safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span>Detecting coordinated disinformation campaigns using network analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span>Building AI systems that understand harmful context, not just keywords</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Bottom Line */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-10 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-3xl">The Bottom Line: Technology Can't Ignore Humanity Anymore</h4>
              </div>
            </div>
            <p className="text-xl text-indigo-100 mb-6 leading-relaxed">
              For decades, tech companies could afford to build products and "figure out the human stuff later." <span className="text-red-400 font-semibold">Those days are over.</span> Users demand personalization, governments demand accountability, markets demand cultural sensitivity. <span className="text-yellow-300 font-semibold">Digital Humanities is no longer a nice-to-have—it's a competitive necessity.</span>
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl text-green-300 mb-2">$120K+</div>
                <div className="text-indigo-200 text-sm">Average starting salary for DH graduates in tech roles (US market)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl text-cyan-300 mb-2">150%</div>
                <div className="text-indigo-200 text-sm">Growth in "AI Ethics" and "Content Intelligence" job postings (2022-2024)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl text-pink-300 mb-2">5 in 1</div>
                <div className="text-indigo-200 text-sm">DH graduates combine skills of data scientist, software engineer, researcher, UX analyst, and content strategist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl mb-6 text-slate-900">Ready to Dive Deeper?</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Explore DH programs worldwide, connect with the community, or discover how recruiters are actively seeking DH graduates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/global-dh"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              <Globe className="w-5 h-5" />
              Explore Global DH Programs
            </Link>
            <Link
              to="/for-recruiters"
              className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              For Recruiters: Why Hire DH Grads
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}