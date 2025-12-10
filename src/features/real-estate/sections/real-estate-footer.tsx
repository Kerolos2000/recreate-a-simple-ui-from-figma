"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import Link from "next/link";

export default function RealEstateFooter() {
  return (
    <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-16 pr-4 md:pr-6 lg:pr-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-end mt-6"
      >
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-[#8B1538] transition-colors group"
        >
          See All Properties
          <ArrowDownLeft className="w-4 h-4 transition-transform group-hover:-rotate-180" />
        </Link>
      </motion.div>
    </div>
  );
}
