"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const darkLogo = "/logo/logo.png";
  const lightLogo = "/logo/logo-light.png";
  const menuItems = [
    { label: "All", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/credential" },
    
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className=" sticky top-0 py-6 z-50 position: -webkit-sticky;">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={resolvedTheme === "dark" ? darkLogo : lightLogo}
            alt="Logo"
            width={32}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 bg-background/5  backdrop-blur-sm z-50 -webkit-backdrop-filter: blur(4px); rounded-3xl p-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-3xl transition-colors ${
                pathname === item.href
                  ? "bg-foreground text-background"
                  : "hover:bg-foreground/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-foreground/10"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-background/5  backdrop-blur-sm z-50 -webkit-backdrop-filter: blur(4px); border-t">
            <div className="container mx-auto p-4 flex flex-col items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full text-center py-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-foreground text-background"
                      : "hover:bg-foreground/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}