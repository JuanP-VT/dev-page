"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  imgSrc: string;
  imgSrcDark?: string;
};

export default function ThemeImage({ imgSrc, imgSrcDark }: Props) {
  const { theme = "dark" } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    //Return placeholder to prevent flickering
    return (
      <Image
        src={"/placeholder.webp"}
        alt="Onsite 2 Screenshot"
        width={800}
        height={400}
        className="w-full rounded-lg border shadow-lg"
      />
    );
  }
  // avoid rendering during SSR
  return (
    <Image
      src={theme === "light" ? imgSrc : imgSrcDark ? imgSrcDark : imgSrc}
      alt="Onsite 2 Screenshot"
      width={800}
      height={400}
      className="w-full rounded-lg border shadow-lg"
    />
  );
}
