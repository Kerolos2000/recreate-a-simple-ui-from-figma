import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface ActionIconButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

export function ActionIconButton({ children, ...rest }: ActionIconButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white cursor-pointer"
      aria-label="action button"
      {...rest}
    >
      {children}
    </motion.button>
  );
}
