"use client";
import React from "react";
import { useStore } from "@/context/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Transition() {
  const [transition, setTransition] = useState(false);
  const { state } = useStore();
  const route = useRouter();
  const transform = transition ? 0 : "100vh";

  useEffect(() => {
    setTransition(true);

    setTimeout(() => {
      route.push(state);
    }, 1000);

    setTimeout(() => {
      setTransition(false);
    }, 1000);
  }, [state, route]);

  return (
    <>
      <motion.div
        className="w-screen h-screen flex justify-center items-center absolute bg-slate-500 pointer-events-none"
        animate={{ y: transform }}
        transition={{ duration: 1, type: "tween", ease: "backOut" }}
      >
        <h1 className="text-8xl text-white font-bold">navigating to {state}</h1>
      </motion.div>
    </>
  );
}
