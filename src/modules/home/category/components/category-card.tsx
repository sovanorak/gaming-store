import Image from "next/image";
import { Card } from "@/components/ui/card";

type CategoryCardProps = {
  srcImage: string;
  category?: string;
};

export function CategoryCard({ srcImage, category }: CategoryCardProps) {
  return (
    <Card
      className="w-full bg-slate-100 aspect-square rounded-xl relative shadow-sm
      transition-transform duration-300 hover:-translate-y-2
    "
    >
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <Image
          src={srcImage}
          alt="product-image"
          width={1900}
          height={1900}
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
        <span className="text-sm font-medium">{category}</span>
      </div>
    </Card>
  );
}
