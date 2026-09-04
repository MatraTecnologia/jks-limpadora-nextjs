"use client";

import { motion } from "motion/react";

type Props = {
  delay?: number;
  y?: number;
  as?: "div" | "li";
  className?: string;
  children?: React.ReactNode;
};

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const viewport = { once: true, margin: "0px 0px -10% 0px" };

export const Reveal = ({ delay = 0, y = 24, as = "div", className, children }: Props) => {
  const shared = {
    className,
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { ...transition, delay },
  };
  return as === "li" ? <motion.li {...shared}>{children}</motion.li> : <motion.div {...shared}>{children}</motion.div>;
};
