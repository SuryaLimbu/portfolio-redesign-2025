import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
  } from "@/components/ui/breadcrumb";
  import React from "react";
  import Image from "next/image";
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { ChevronRight, ArrowUpRight, ExternalLink } from "lucide-react";
  
  export default function Page() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollProgress />
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </BreadcrumbItem>
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
              <BreadcrumbItem className="font-medium">Project</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
  
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold bg-primary bg-clip-text text-transparent">
              H&L E-Voting System
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground">
                UI/UX Designer & Accessibility Specialist
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  Team Project: Jan 2024
                </span>
              </div>
            </div>
          </div>
  
          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/evoting-prototype.png"
              fill
              alt="E-Voting prototype"
              className="object-cover"
            />
          </div>
  
          {/* Project Links */}
          <section className="">
            <div className="flex-row sm:flex-col space-y-6">
              <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
                <h2 className="text-3xl font-bold">Design Assets</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  28-screen PICTIVE prototype covering admin web interface and mobile voter experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <a
                      href="https://www.figma.com/proto/cU7s51526mqBEMgRo4pcYh/evoting-system-design?node-id=1-2&starting-point-node-id=1%3A2&t=cDZhc6mY4PjvOrPD-1"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Prototype Walkthrough
                      
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
  
          {/* Project Overview */}
          <section className="space-y-6 bg-muted/50 p-8 rounded-xl border">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The H&L E-Voting System is a secure, accessible, and user-friendly platform designed for Hargreaves Lansdown shareholders to participate in corporate elections. The project features dual interfaces: a web-based admin panel for election management and a mobile app for shareholders to vote securely. The design emphasizes accessibility, security, and ease of use, ensuring compliance with WCAG 2.1 AA standards.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-sm text-muted-foreground">
                  Surya Kedem (UI/UX)<br/>
                  Pramish Thapa (Research)<br/>
                  Mahesh Subedi (Testing)
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Figma, Adobe XD<br/>
                  PICTIVE Design<br/>
                  WCAG 2.1 Guidelines
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-sm text-muted-foreground">
                  January 2024
                </p>
              </div>
            </div>
          </section>
  
          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Dual Interface Design",
                  description: "Web admin panel + mobile voter experience",
                  icon: "📱",
                },
                {
                  title: "Secure Voting Flow",
                  description: "OTP verification + encrypted vote receipts",
                  icon: "🔐",
                },
                {
                  title: "Accessibility Suite",
                  description: "Text-to-speech, high-contrast modes, XL text",
                  icon: "👁️",
                },
                {
                  title: "Real-Time Analytics",
                  description: "Live election tracking & result generation",
                  icon: "📊",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-muted/50 rounded-xl border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Design Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Design Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-muted/50 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Research & Ideation</h3>
                <ul className="space-y-3">
                  {[
                    "Conducted user research to understand shareholder needs",
                    "Created user personas for admins and voters",
                    "Developed user journey maps for key workflows",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-muted/50 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Wireframing & Prototyping</h3>
                <ul className="space-y-3">
                  {[
                    "Designed 28 screens using PICTIVE design methodology",
                    "Created low-fidelity wireframes",
                    "Developed high-fidelity prototypes in Figma and Adobe XD",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-muted/50 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Usability Testing</h3>
                <ul className="space-y-3">
                  {[
                    "Conducted 3 usability tests with real users",
                    "Identified navigation pain points",
                    "Improved text legibility by 40%",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
  
          {/* Results & Impact */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold mb-4 text-green-800">
                  Key Improvements
                </h3>
                <ul className="space-y-2 text-green-700">
                  {[
                    "65% reduction in navigation errors",
                    "100% compliance with WCAG 2.1 AA standards",
                    "45% increase in test completion rate",
                  ].map((item, index) => (
                    <li key={index} className="list-disc ml-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  Testimonials
                </h3>
                <blockquote className="text-blue-700 italic">
                  &quot; The e-voting system is incredibly intuitive and accessible. The team did an excellent job balancing security with ease of use.&quot;
                  <br />
                  <span className="font-semibold">— Hargreaves Lansdown Stakeholder</span>
                </blockquote>
              </div>
            </div>
          </section>
  
          {/* Next Steps */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Next Steps</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Expand the system to support multi-language voting",
                "Integrate blockchain technology for enhanced security",
                "Develop a voter education module within the app",
              ].map((step, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary/10"
                >
                  {step}
                </Badge>
              ))}
            </div>
          </section>
  
          {/* Let’s Connect */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Let’s Connect!</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href="mailto:surya.kedem@example.com"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/surya-kedem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.behance.net/surya-kedem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Behance
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    );
  }