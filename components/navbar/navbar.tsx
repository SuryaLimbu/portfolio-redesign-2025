"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "next-themes";
// import { MagicCard } from "../ui/magic-card";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const darkLogo = "/logo/logo.png";
  const lightLogo = "/logo/logo-light.png";
  const menuItems = [
    { label: "All", href: "/" },
    { label: "Projects", href: "/projects" },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Skills",
      href: "/skills",
    },
  ];
  // Ensure the component mounts before rendering
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="sticky grid grid-flow-col py-6 justify-between z-10 items-center">
        <div>
          <Link href="/">
            {" "}
            <Image
              src={!mounted ? darkLogo : lightLogo}
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="sm:flex items-center hidden card_bg p-2 backdrop-opacity-5">
          <div className="flex gap-2 font-normal">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className=" px-4 py-2 rounded-3xl hover:bg-foreground/80  hover:text-background"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
