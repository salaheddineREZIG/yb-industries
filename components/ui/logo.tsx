import Image from "next/image";

// Intrinsic size of public/images/brand/logo.png (square).
const LOGO_SIZE = 830;

type LogoProps = {
  /** Sizing classes, for example "w-16 md:w-24". Height follows the width. */
  className?: string;
  /** Use alt="" when the company name is already written next to the logo. */
  alt?: string;
  priority?: boolean;
};

export function Logo({
  className = "w-24",
  alt = "Logo YB INDUSTRIES",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/images/brand/logo.png"
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      alt={alt}
      priority={priority}
      className={`h-auto ${className}`}
    />
  );
}
