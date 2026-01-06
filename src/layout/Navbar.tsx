"use client";

import "../index.css";
import { cn } from "@/lib/utils";
import { MenuIcon, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { type FormEvent, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

import { CommandInput, CommandDialog } from "../components/ui/command";
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
    label: "Activity",
    href: "/activity",
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
      <SheetContent side="right" className="w-64 ">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="px-4 grid grid-cols-1 gap-6">
          {NavigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="  rounded-md px-3 py-2
    text-sm font-medium
    text-muted-foreground
    transition-colors duration-200
    hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

type SearcCommentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SearcCommentDialog = ({
  onOpenChange,
  open,
}: SearcCommentDialogProps) => {
  const handleSeachSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <form onSubmit={handleSeachSubmit}>
        <CommandInput placeholder="Search products..." />
      </form>
    </CommandDialog>
  );
};

export const Navbar = () => {
  const [searchCommandDialogIsOpen, setSearchCommadDialogIsOpen] =
    useState(false);
  return (
    <nav
      className={cn(
        "sticky top-0 z-50",
        "flex items-center justify-between",
        "h-17 px-8",
        "border-b",
        "bg-background/60 backdrop-blur-md",
        "transition-colors duration-300"
      )}
    >
      {/* left side */}
      <div className="flex items-center justify-center gap-6 ">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Waves className="text-primary" />
            <h1 className="text-xl font-bold">Lawata</h1>
          </Link>
        </div>
        <div className=" hidden lg:flex items-center gap-1 text-sm font-medium">
          {NavigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className=" font-bold relative px-3 py-2 rounded-md text-muted-foreground transition-colors duration-120 hover:text-foreground hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={() => setSearchCommadDialogIsOpen(true)}
          size="icon"
          variant="ghost"
          className="lg:hidden"
        ></Button>
        <Button size="icon-sm" variant="ghost"></Button>
        <ModeToggle />
        <NavigationSheet />
      </div>
      <SearcCommentDialog
        open={searchCommandDialogIsOpen}
        onOpenChange={setSearchCommadDialogIsOpen}
      />
    </nav>
  );
};
