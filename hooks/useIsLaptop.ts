"use client";
import { useEffect, useState } from "react";

export function useIsLaptop(minWidth = 1024) {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const check = () => setIsLaptop(window.innerWidth >= minWidth);
    check(); // run initially

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [minWidth]);

  return isLaptop;
}
