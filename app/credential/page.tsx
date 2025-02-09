'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Dribbble, Instagram, Linkedin } from "lucide-react";

const width = 28;

const height = 28;
const Behence = () => (
  <svg width={width} height={height} viewBox="0 0 128 128">
   
   
    <path
      fill="currentColor"
      d="M52.63 60.28s10.5-.78 10.5-13.09-8.59-18.32-19.47-18.32H7.86v68.8h35.8s21.85.69 21.85-20.31c0 0 .96-17.08-12.88-17.08zm-29-19.18h20s4.87 0 4.87 7.16-2.86 8.2-6.11 8.2H23.64zm19.1 44.34H23.64V67.06h20s7.25-.1 7.25 9.45c.02 7.95-5.28 8.85-8.15 8.93zM94.66 46.38c-26.46 0-26.43 26.43-26.43 26.43s-1.82 26.3 26.43 26.3c0 0 23.54 1.34 23.54-18.29h-12.1s.4 7.4-11 7.4c0 0-12.11.81-12.11-12h35.65s3.87-29.84-23.98-29.84zm10.76 20.68h-22.6s1.48-10.6 12.11-10.6 10.49 10.6 10.49 10.6zM79.86 32.93h28.38v8.47H79.86z"
    ></path>
  </svg>
);
const contactData = [
  {
    icons: <Behence />,
    name: "Behance",
    url: "https://www.behance.net/suryamankedem",
  },
  {
    icons: <Instagram />,
    name: "Instagram",
    url: "https://www.instagram.com/suryamankedem/",

  },
  {
    icons: <Dribbble />,
    name: "Dribbble",
    url: "https://www.dribbble.com/suryamankedem",
  },
  {
    icons: <Linkedin />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/suryamankedem/",
  }
];
export default function page() {
  return (
    <div className="grid sm:grid-cols-3 gap-10">
      <div className=" card_bg p-10">
        <div className=" flex items-center justify-center">
          <Image src="/_DSC8303.png" alt="profile" width={250} height={100} />
        </div>
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Surya Man Kedem</h1>
          <p>
            <a href="mailto:your-email@example.com" className="opacity-50">
              @suryamankedem
            </a>
          </p>

          <p className="flex gap-4 items-center justify-center">
            {contactData.map((contact, index) => (
              <a href={contact.url} key={index} className="card_bg p-1">
                {contact.icons}
              </a>
            ))}
          </p>
          <Button className=" cursor-pointer z-50">
            <a href="/contactUs">Contact Me</a>
          </Button>
        </div>
      </div>
      <div className="grid sm:col-span-2 gap-10">
        <div className="grid">
          <h1 className=" text-3xl uppercase font-bold">About me</h1>
          <p>
            Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
            porttitor rhoncus dolor purus non enim praesent in elementum sahas
            facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
            etisam dignissim diam quis enim lobortis viverra orci sagittis eu
            volutpat odio facilisis mauris sit. Scelerisque fermentum duisi
            faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus
            magna fringilla zac urna, porttitor rhoncus dolor purus non enim
            praesent cuz elementum sahas facilisis leot.
          </p>
        </div>
        <div className="grid">
          <h1 className="text-3xl uppercase">My skills</h1>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
