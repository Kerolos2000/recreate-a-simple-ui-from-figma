"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import PropertyCard from "../components/property-card";
import { properties } from "../lib/mock/properties";

export default function RealEstateCarousel() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    direction: "ltr",
  });

  return (
    <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: property.id * 0.1 }}
              className="shrink-0 w-[320px] md:w-[360px] lg:w-[400px]"
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
          <div className="shrink-0 w-4 md:w-6 lg:w-8" />
        </div>
      </div>
    </div>
  );
}
