import Image from "next/image";

interface IconProps {
    src: any;
    size: number;
    alt: string;
}

export function Icon({src, size, alt}:IconProps) {
    return (
      <Image src={src} width={size} height={size} alt={alt}/>
    )
}