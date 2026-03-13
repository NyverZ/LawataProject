"use client";

import { useEffect, useState } from "react";
import "../index.css";
import { cn } from "@/lib/utils";
import { MenuIcon, Waves } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

import { ModeToggle } from "@/components/ModeToggle";

const NavigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Facility",
    href: "/facility",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 border-white/20 bg-background/95 backdrop-blur-2xl">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-1 gap-4 px-4">
          {NavigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-accent text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 flex h-[4.25rem] items-center justify-between border-b px-5 md:px-8",
        "backdrop-blur-xl transition-all duration-500",
        isScrolled
          ? "border-white/15 bg-background/80 shadow-[0_16px_40px_-28px_rgba(12,40,74,0.9)]"
          : "border-transparent bg-background/60"
      )}
    >
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Waves className="text-primary" />
            <h1 className="text-xl font-bold">Lawata</h1>
          </Link>
        </div>
        <div className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {NavigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "relative rounded-md px-3 py-2 font-semibold transition-colors duration-300",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="lawata-nav-indicator"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-linear-to-r from-sky-400 to-amber-300"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <ModeToggle />
        <NavigationSheet />
      </div>
    </nav>
  );
};
