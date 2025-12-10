import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Property } from "../types/property";
import { PropertyStats } from "./property-stats";

export function PropertyInfo({ property }: { property: Property }) {
  const {
    price,
    company_logo,
    badge,
    title,
    description,
    location,
    sqft,
    rooms,
    bath,
  } = property;
  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 md:p-5 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg md:text-xl font-bold text-rose-800">
          {price}
        </span>

        <div className="flex items-center gap-2">
          <Image
            src={company_logo}
            width={48}
            height={48}
            alt={badge}
            className="shadow-md rounded-full"
          />
          <Badge className="bg-rose-100 text-rose-800 text-xs font-medium px-3 py-0.5 rounded-full">
            {badge}
          </Badge>
        </div>
      </div>

      <h3 className="font-semibold text-foreground text-base md:text-lg mb-1">
        {title}
      </h3>

      <p className="text-muted-foreground text-xs md:text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <Separator className="mb-4" />

      <div className="flex items-center justify-between mb-4 text-xs md:text-sm">
        <span className="text-muted-foreground">{location}</span>
        <PropertyStats sqft={sqft} rooms={rooms} bath={bath} />
      </div>

      <Button className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white font-medium py-5 rounded-lg">
        View Property Details
      </Button>
    </div>
  );
}
