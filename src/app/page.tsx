import Feature from "@/app/components/Feature";
import Work from "@/app/components/Work";
import Testimonial from "@/app/components/Testimonial";
import Hero from "@/app/components/Hero"

export default function Home() {
  return (
    <>
    <Hero/>
      <Feature />
      <Work />
      <Testimonial />
    </>
  );
}
