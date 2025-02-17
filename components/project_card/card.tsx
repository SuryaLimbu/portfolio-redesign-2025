import { ArrowRight, ExternalLink } from "lucide-react";
import React from "react";
interface ProjectCard {
  imageUrl: string;
  title: string;
  description: string;
  link?: string | null;
  live?: string | null;
}
export default function ProjectCard({
  imageUrl,
  title,
  description,
  link = null,
  live = null,
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
      </div>

      <p className=" opacity-50">{description}</p>

      <div className="flex gap-2 items-center">
        <div className="flex gap-6 items-center py-2">
          {link != null ? (
            <a
              href={link}
              className="flex items-center gap-2 text-green-600 hover:underline"
            >
              Read Case Study <ArrowRight width={15} />
            </a>
          ) : (
            <span className="uppercase text-xs bg-green-600 rounded-3xl py-1 px-2 text-background">
              in progress
            </span>
          )}
          {live != null ? (
            <a
              href={live}
              className="flex items-center gap-2 text-green-600 hover:underline"
            >
              View Project <ExternalLink width={15} />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
