import { ActionIconButton } from "@/components/ui/action-icon-button";
import { Heart, MessageCircleMore, Phone } from "lucide-react";
import { useState } from "react";

export function PropertyActions() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
      <div className="flex gap-2">
        <ActionIconButton>
          <Phone className="w-4 h-4 text-rose-800" />
        </ActionIconButton>

        <ActionIconButton>
          <MessageCircleMore className="w-5 h-5 text-[#25D366]" />
        </ActionIconButton>
      </div>

      <ActionIconButton onClick={handleToggleFavorite}>
        <Heart
          className={`w-4 h-4 text-rose-800 ${isFavorite && "fill-rose-800"}`}
        />
      </ActionIconButton>
    </div>
  );
}
