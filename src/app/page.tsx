import { HomePageModule } from "@/modules/home-module";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageModule />
    </Suspense>
  );
}
