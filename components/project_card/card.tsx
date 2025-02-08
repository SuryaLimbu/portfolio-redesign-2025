import { ArrowUpRight } from "lucide-react";
import React from "react";
interface ProjectCard {
  imageUrl: string;
  title: string;
  description: string;
  link?: string | null;
}
export default function ProjectCard({
  imageUrl,
  title,
  description,
  link = null,
}: ProjectCard) {
  return (
    <div className="card_bg p-4 gap-4">
      <img
        src={imageUrl}
        alt="Project Image"
        className=" object-cover rounded-3xl"
      />
      <div className="flex gap-6 items-center py-2">
        <h2 className=" text-2xl">{title}</h2>
        {link != null ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl p-1 bg-foreground/25 color-background"
          >
            <ArrowUpRight className=" text-sm" />
          </a>
        ) : (
          <span className="uppercase text-xs bg-green-600 rounded-3xl py-1 px-2">
            in progress
          </span>
        )}
      </div>

      <p className=" opacity-50">{description}</p>
    </div>
  );
}
