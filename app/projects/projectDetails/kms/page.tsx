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
  import { ChevronRight, ArrowUpRight, Github, ExternalLink } from "lucide-react";
  
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
              H&K Knowledge Management System
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground">
                Full-Stack Developer & System Architect
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  January 2024
                </span>
              </div>
            </div>
          </div>
  
          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/kms-dashboard.png"
              fill
              alt="KMS preview"
              className="object-cover"
            />
          </div>
  
          {/* Project Links */}
          <section className="">
            <div className="flex-row sm:flex-col space-y-6">
              <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
                <h2 className="text-3xl font-bold">Live System</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Enterprise-grade knowledge management platform with JWT authentication and role-based access control.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <a
                      href="https://knowledge-management-system.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Explore Live System
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://github.com/Suryalimbu/Knowledge-management-system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
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
              Developed for H&K Corporation, this enterprise system enables efficient management of users, projects, tasks, 
              and announcements through a secure, role-based interface built with modern web technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  MERN Stack (MongoDB, Express, React, Node.js)
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">
                  JWT Authentication with Refresh Tokens
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  Vercel + MongoDB Atlas
                </p>
              </div>
            </div>
          </section>
  
          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Core Functionality</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Role-Based Access Control",
                  description: "Hierarchical user roles with granular permissions",
                  icon: "👨💼",
                },
                {
                  title: "JWT Authentication",
                  description: "20-min access tokens with auto-refresh capability",
                  icon: "🔒",
                },
                {
                  title: "CRUD Operations",
                  description: "Full management of users, projects, tasks, and announcements",
                  icon: "🛠️",
                },
                {
                  title: "Real-time Updates",
                  description: "Instant data synchronization using Axios and Redux",
                  icon: "🔄",
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
  
          {/* Technical Stack */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Technical Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React 18",
                "Node.js 20",
                "Express.js",
                "MongoDB",
                "JWT",
                "Redux Toolkit",
                "Tailwind CSS",
                "Vercel",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
  
          {/* Role & Responsibilities */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">My Contributions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/50 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Full-Stack Development</h3>
                <ul className="space-y-3">
                  {[
                    "Designed MongoDB schema for 12+ entities",
                    "Implemented JWT authentication flow",
                    "Developed CRUD API endpoints with Express",
                    "Created dynamic React components",
                    "Configured Redux state management",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-muted/50 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Security Focus</h3>
                <ul className="space-y-3">
                  {[
                    "Dual-token authentication system",
                    "Role-based access control",
                    "CORS configuration",
                    "Environment variable management",
                    "Secure API endpoints",
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
  
          {/* Outcomes & Learnings */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold mb-4 text-green-800">
                  Technical Wins
                </h3>
                <ul className="space-y-2 text-green-700">
                  {[
                    "100% API endpoint test coverage",
                    "20% faster token refresh mechanism",
                    "Zero security vulnerabilities in audit",
                  ].map((item, index) => (
                    <li key={index} className="list-disc ml-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  Key Learnings
                </h3>
                <ul className="space-y-2 text-blue-700">
                  {[
                    "Token rotation best practices",
                    "MVC architecture implementation",
                    "Enterprise-grade security patterns",
                  ].map((item, index) => (
                    <li key={index} className="list-disc ml-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }