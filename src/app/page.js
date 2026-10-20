import { Hero } from "@/components/hero";
import { Meetings } from "@/components/meetings";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Meetings />
    </>
  );
}
