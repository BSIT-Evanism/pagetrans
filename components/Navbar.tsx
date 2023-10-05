"use client";
import React from "react";
import { useStore } from "@/context/store";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { state, setState } = useStore();
  const route = usePathname();
  return (
    <header className="flex flex-col md:flex-row w-screen justify-between items-center p-5">
      <h1>Logo</h1>
      <nav className="flex gap-10 p-5">
        <li
          className={route === "/" ? "text-red-500" : "cursor-pointer"}
          onClick={() => setState("/")}
        >
          Home
        </li>
        <li
          className={route === "/about" ? "text-red-500" : "cursor-pointer"}
          onClick={() => setState("/about")}
        >
          About
        </li>
        <li
          className={route === "/projects" ? "text-red-500" : "cursor-pointer"}
          onClick={() => setState("/projects")}
        >
          Projects
        </li>
      </nav>
    </header>
  );
}
