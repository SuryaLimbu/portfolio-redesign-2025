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
            Low-Cost Airline Booking System
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-muted-foreground">
              Full-Stack Developer & Systems Designer
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                April 2024 – May 2024
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/projects/flight.png"
            fill
            alt="Project preview"
            className="object-cover"
          />
        </div>
        <section className="">
          <div className=" flex-row sm:flex-col space-y-6">
            {/* System Prototype */}
            <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
              <h2 className="text-3xl font-bold">System Prototype</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A fully functional flight booking system deployed on Vercel.
                Explore the live demo to experience the seamless booking process
                and seat allocation algorithm in action.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a
                    href="https://online-flight-booking-system.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo: Online Ticket Booking System
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
                    href="https://github.com/SuryaLimbu/online-flight-booking-system"
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
            Developed as part of the Advanced Topics in Software Engineering
            module at the University of West London, this project involved
            designing and implementing a low-cost flight booking system with a
            focus on usability, performance, and security.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Methodology</h3>
              <p className="text-sm text-muted-foreground">
                Waterfall Model with TDD/BDD
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Team</h3>
              <p className="text-sm text-muted-foreground">Solo Project</p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-sm text-muted-foreground">Vercel</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Seat Allocation Algorithm",
                description:
                  "Implemented algorithms to allocate seats efficiently and avoid single scattered seats",
                icon: "🧮",
              },
              {
                title: "Dynamic Pricing",
                description:
                  "Real-time pricing adjustments based on demand and availability",
                icon: "💸",
              },
              {
                title: "Secure Authentication",
                description: "JWT tokens and encrypted data storage in MongoDB",
                icon: "🔐",
              },
              {
                title: "Admin Dashboard",
                description:
                  "Flight management, seat control, and booking administration",
                icon: "👨💻",
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
              "MongoDB",
              "JWT",
              "Vercel",
              "GitHub CI/CD",
              "Jest",
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
          <h2 className="text-3xl font-bold">My Role</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-muted/50 rounded-xl border">
              <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
              <ul className="space-y-3">
                {[
                  "Full-stack development with Next.js",
                  "Seat allocation algorithm design",
                  "Test case development with Jest",
                  "GitHub repository management",
                  "UML system modeling",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-muted/50 rounded-xl border">
              <h3 className="text-xl font-semibold mb-4">Specialization</h3>
              <ul className="space-y-3">
                {[
                  "Algorithm optimization",
                  "Security implementation",
                  "Performance tuning",
                  "CI/CD pipelines",
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
                  "Delivered fully functional prototype",
                  "Improved seat allocation efficiency by 40%",
                  "Achieved 100% test coverage",
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
                  "Waterfall model documentation benefits",
                  "Importance of TDD in complex systems",
                  "CI/CD best practices",
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
