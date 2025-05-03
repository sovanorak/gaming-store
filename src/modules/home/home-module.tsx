import { SectionCategory } from "./category/section-category";
import { LandingImage } from "./landing-image/landing-image-section";

export function HomePageModule() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <LandingImage />
      <SectionCategory />
    </div>
  );
}
