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
            Uni-Thrift: Secondhand Shop Platform
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-muted-foreground">
              Frontend Developer & UI/UX Designer
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                March 2024 – April 2024
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/uni-thrift-dashboard.png"
            fill
            alt="Uni-Thrift preview"
            className="object-cover"
          />
        </div>

        {/* Project Links */}
        <section className="">
          <div className="flex-row sm:flex-col space-y-6">
            <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
              <h2 className="text-3xl font-bold">Live Deployment</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A student-focused marketplace with secure transactions and
                Agile-driven development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a
                    href="https://uni-thrift.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Explore Uni-Thrift Marketplace
                  </a>
                </Button>
              </div>
            </div>
            {/* GitHub Repository */}
            <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
              <h2 className="text-3xl font-bold">GitHub Repository</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The codebase for this project is publicly accessible on GitHub.
                Feel free to explore the implementation details, contribute, or
                use it as a reference for your own projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/SuryaLimbu/uni-thrift"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
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
            Developed as part of the Advanced Software Engineering module at
            University of West London, Uni-Thrift is a collaborative Agile
            project combining modern web development with DevOps practices.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Methodology</h3>
              <p className="text-sm text-muted-foreground">
                Agile Scrum (3 Sprints)
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Team</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Surya Man Kedem (Frontend)</p>
                <p>Pramish Thapa (Scrum Master)</p>
                <p>Mahesh Subedi (Backend)</p>
              </div>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-sm text-muted-foreground">
                AWS Amplify + Azure
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
                title: "Agile Dashboard",
                description: "Sprint tracking and task management integration",
                icon: "📊",
              },
              {
                title: "Product CRUD Operations",
                description: "User-friendly interface for item management",
                icon: "🛍️",
              },
              {
                title: "Secure Auth System",
                description: "JWT-based authentication with .NET backend",
                icon: "🔐",
              },
              {
                title: "CI/CD Pipelines",
                description: "Automated deployment with Azure DevOps",
                icon: "⚙️",
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
              "Next.js 14",
              "Tailwind CSS",
              ".NET Core",
              "Azure DevOps",
              "AWS Amplify",
              "SQL Server",
              "Swagger Hub",
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
              <h3 className="text-xl font-semibold mb-4">Frontend Focus</h3>
              <ul className="space-y-3">
                {[
                  "Designed UI/UX with Figma prototypes",
                  "Implemented responsive layouts",
                  "API integration with .NET backend",
                  "Agile collaboration with team",
                  "Cross-browser compatibility fixes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-muted/50 rounded-xl border">
              <h3 className="text-xl font-semibold mb-4">
                Special Achievements
              </h3>
              <ul className="space-y-3">
                {[
                  "100% sprint task completion",
                  "Zero UI-related bugs in final release",
                  "Mobile-first responsive design",
                  "Streamlined Git workflow",
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
          <h2 className="text-3xl font-bold">Outcomes & Learnings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Successes
              </h3>
              <ul className="space-y-2 text-green-700">
                {[
                  "Deployed production-ready platform",
                  "40% faster UI rendering",
                  "95% user satisfaction in testing",
                ].map((item, index) => (
                  <li key={index} className="list-disc ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Learnings
              </h3>
              <ul className="space-y-2 text-blue-700">
                {[
                  "Agile team coordination",
                  "CI/CD best practices",
                  "Cross-functional collaboration",
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
