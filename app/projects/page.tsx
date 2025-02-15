'use client'
import ProjectCard from "@/components/project_card/card";
import React from "react";

export default function page() {
  return (
    <div className="grid sm:grid-cols-3 gap-10">
      {/* left column */}
      <div className="grid grid-flow-row gap-10 order-2 sm:order-1">
        <div>
          <ProjectCard
            link={null}
            title="cryptosea"
            description="Next gen bot for crypto-currencies."
            imageUrl="https://necatikcl.dev/images/works/cryptosea.png"
          />
        </div>
        <div>
          <ProjectCard
            link={null}
            title="cryptosea"
            description="Next gen bot for crypto-currencies."
            imageUrl="https://necatikcl.dev/images/works/cryptosea.png"
          />
        </div>
      </div>
      {/* right column */}
      <div className="grid sm:col-span-2 order-1 sm:order-2 gap-10">
        <div className="flex items-center justify-center">
          <h1 className="uppercase text-4xl font-bold">All Projects</h1>
        </div>
        <div className=" grid sm:grid-cols-2 gap-10">
          <div>
            <ProjectCard
              link="/projects/projectDetails/airlineProject"
              title="Low-Cost Airline Booking System"
              description="Next gen bot for crypto-currencies."
              imageUrl="https://necatikcl.dev/images/works/cryptosea.png"
              
            />
          </div>
          <div>
            <ProjectCard
              link={null}
              title="cryptosea"
              description="Next gen bot for crypto-currencies."
              imageUrl="https://necatikcl.dev/images/works/cryptosea.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
