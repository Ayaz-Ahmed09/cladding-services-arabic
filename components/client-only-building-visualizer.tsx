"use client";

import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";

// Step 1: Dynamically import the component (SSR disabled)
const BuildingVisualizer = dynamic(
  () => import("@/components/BuildingVisualizer"),
  {
    ssr: false,
  }
);

// Step 2: Wrap with media query logic
export default function ClientOnlyBuildingVisualizer() {
  const isLaptopOrLarger = useMediaQuery({ query: "(min-width: 1024px)" });

  if (!isLaptopOrLarger) {
    return null;
  }

  return <BuildingVisualizer />;
}
