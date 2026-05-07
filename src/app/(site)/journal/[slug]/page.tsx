interface JournalDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function JournalDetailPage({ params }: JournalDetailPageProps) {
  const { slug } = await params;
  return <main><h1>Post: {slug}</h1></main>;
}
