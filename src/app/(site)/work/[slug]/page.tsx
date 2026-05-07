interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  return <main><h1>Case Study: {slug}</h1></main>;
}
