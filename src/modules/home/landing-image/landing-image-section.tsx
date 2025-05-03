import Image from "next/image";

export function LandingImage() {
  return (
    <section className="max-w-screen-2xl w-full aspect-[5/1] h-auto mb-25 mx-auto">
      <Image
        src={"/landing-image.webp"}
        alt="Landing-Image"
        width={1920}
        height={1080}
        className="h-auto object-cover mt-20"
      />
    </section>
  );
}
