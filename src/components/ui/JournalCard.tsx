import type { JournalPost } from "@/types/sanity.d";

interface JournalCardProps {
  post: JournalPost;
}

export function JournalCard({ post }: JournalCardProps) {
  return (
    <article data-component="journal-card">
      <h3>{post.title}</h3>
    </article>
  );
}
