import Image, { StaticImageData } from "next/image";

interface TechIconProps {
  src: StaticImageData; // For images imported via `next/image`
  alt?: string; // Optional alt text
  size?: number; // Optional size for width and height
  className?: string; // Optional additional CSS classes
}

export const TechIcon: React.FC<TechIconProps> = ({
  src,
  alt = "Tech Icon",
  size = 40, // Default size
  className = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-md ${className}`} // Allow additional class names
    />
  );
};
