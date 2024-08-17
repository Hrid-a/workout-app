"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

// this was a mistake this should be on a new branch""
function ChoosePlanBtn({
  planType,
  setPlanType,
}: {
  planType: string;
  setPlanType: React.Dispatch<React.SetStateAction<string>>;
}) {
  const AnimatedBG = () => (
    <AnimatePresence>
      <motion.span
        className="absolute inset-0 h-full w-full bg-primary block  rounded-lg -z-10"
        layoutId="hoverBackground"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.15 },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.15, delay: 0.2 },
        }}
      />
    </AnimatePresence>
  );
  return (
    <div className="flex gap-4 bg-white p-4 w-fit mx-auto -translate-y-1/2 rounded-xl">
      <button
        className={cn(
          "block  px-4 py-3 relative rounded-lg  bg-transparent text-primary bg-white border border-white/25 z-10 text-xl font-medium transition-colors ",
          planType === "monthly" && "text-white"
        )}
        onClick={() => setPlanType("monthly")}
      >
        Monthly
        {planType === "monthly" && <AnimatedBG />}
      </button>
      <button
        className={cn(
          "block  px-4 py-3 relative rounded-lg  bg-transparent text-primary bg-white border border-white/25 z-10 text-xl font-medium transition-colors ",
          planType === "yearly" && "text-white"
        )}
        onClick={() => setPlanType("yearly")}
      >
        Yearly
        {planType === "yearly" && <AnimatedBG />}
      </button>
    </div>
  );
}

export default ChoosePlanBtn;
