import type { Work } from "@/types/sanity.d";

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <article data-component="work-card">
      <h3>{work.title}</h3>
    </article>
  );
}
