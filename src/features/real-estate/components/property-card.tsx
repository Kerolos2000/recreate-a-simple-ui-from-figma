import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Property } from "../types/property";
import { PropertyActions } from "./property-actions";
import { PropertyInfo } from "./property-info";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="relative select-none overflow-hidden rounded-2xl h-[520px] md:h-[560px] lg:h-[580px] bg-cover bg-center">
      <Image
        src={property.image}
        alt={property.title}
        fill
        className="object-cover"
        priority
      />
      <PropertyActions />
      <PropertyInfo property={property} />
    </Card>
  );
}
