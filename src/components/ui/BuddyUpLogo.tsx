import Image from "next/image";
import { buddyupBrand } from "@/config/buddyup";

const sizeStyles = {
  xs: "h-3.5 w-auto",
  sm: "h-[18px] w-auto",
  md: "h-[22px] w-auto",
  lg: "h-8 w-auto",
} as const;

type BuddyUpLogoProps = {
  size?: keyof typeof sizeStyles;
  className?: string;
};

export default function BuddyUpLogo({
  size = "sm",
  className = "",
}: BuddyUpLogoProps) {
  return (
    <Image
      src={buddyupBrand.logoSrc}
      alt={buddyupBrand.logoAlt}
      width={120}
      height={120}
      className={`${sizeStyles[size]} shrink-0 object-contain brightness-0 invert opacity-90 ${className}`}
    />
  );
}
