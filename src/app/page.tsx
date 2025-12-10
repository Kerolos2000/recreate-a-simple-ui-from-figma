import RealEstateCarousel from "@/features/real-estate/sections/real-estate-carousel";
import RealEstateFooter from "@/features/real-estate/sections/real-estate-footer";
import RealEstateHeader from "@/features/real-estate/sections/real-estate-header";

export default function Home() {
  return (
    <main id="real-estate" className="relative py-12 overflow-hidden">
      <RealEstateHeader />
      <RealEstateCarousel />
      <RealEstateFooter />
    </main>
  );
}
