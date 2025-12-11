import RealEstateCarousel from "@/features/real-estate/sections/real-estate-carousel";
import RealEstateFooter from "@/features/real-estate/sections/real-estate-footer";
import RealEstateHeader from "@/features/real-estate/sections/real-estate-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "TASK 3 - Recreate a Simple UI from Figma",
};

export default function Home() {
  return (
    <main id="real-estate" className="relative py-16 md:py-12 overflow-hidden">
      <RealEstateHeader />
      <RealEstateCarousel />
      <RealEstateFooter />
    </main>
  );
}
