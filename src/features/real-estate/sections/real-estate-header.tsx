"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RealEstateHeader() {
  return (
    <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-16 mb-8 md:mb-10 relative">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute -top-8 right-0 w-28 h-28 md:w-32 md:h-32 lg:w-42 lg:h-42"
      >
        <Image src="/pattern.png" alt="pattern" fill />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1">
          Discover The
        </h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-rose-800 font-light italic mb-3">
          Newest Real Estate Offerings
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Stay ahead with our newest real estate opportunities .
        </p>
      </motion.div>
    </div>
  );
}
