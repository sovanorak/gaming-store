import { categories } from "@/constants/categories";
import { CategoryCard } from "./components/category-card";

export function ListingCategory() {
  return (
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8">
      {categories.map((category, index) => (
        <CategoryCard
          srcImage={category.srcImage}
          category={category.category}
          key={index}
        />
      ))}
    </div>
  );
}
