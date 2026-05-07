import type { Testimonial } from "@/types/sanity.d";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article data-component="testimonial-card">
      <blockquote>{testimonial.quote}</blockquote>
    </article>
  );
}
