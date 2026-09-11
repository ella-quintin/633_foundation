import { Hero } from "@/components/hero";
import { Programs } from "@/components/programs";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Programs />
    </>
  );
}
