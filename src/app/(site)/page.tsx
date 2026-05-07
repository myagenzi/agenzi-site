import { Hero }         from "@/components/sections/Hero";
import { WorkGrid }     from "@/components/sections/WorkGrid";
import { Stats }        from "@/components/sections/Stats";
import { Services }     from "@/components/sections/Services";
import { Benefits }     from "@/components/sections/Benefits";
import { Pricing }      from "@/components/sections/Pricing";
import { FAQ }          from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { Journal }      from "@/components/sections/Journal";
import { CTABanner }    from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorkGrid />
      <Stats />
      <Services />
      <Benefits />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Journal />
      <CTABanner />
    </main>
  );
}
