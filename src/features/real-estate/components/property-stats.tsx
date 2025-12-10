import { Separator } from "@/components/ui/separator";
import { Property } from "../types/property";

export function PropertyStats({
  sqft,
  rooms,
  bath,
}: Pick<Property, "sqft" | "rooms" | "bath">) {
  return (
    <div className="flex items-center gap-4 text-muted-foreground text-xs md:text-sm h-6">
      <div className="text-center">
        <span className="font-semibold text-foreground">{sqft}</span>
        <span className="block text-[10px] md:text-xs">Sq.ft</span>
      </div>
      <Separator orientation="vertical" />
      <div className="text-center">
        <span className="font-semibold text-foreground">{rooms}</span>
        <span className="block text-[10px] md:text-xs">Rooms</span>
      </div>
      <Separator orientation="vertical" />
      <div className="text-center">
        <span className="font-semibold text-foreground">{bath}</span>
        <span className="block text-[10px] md:text-xs">Bath</span>
      </div>
    </div>
  );
}
