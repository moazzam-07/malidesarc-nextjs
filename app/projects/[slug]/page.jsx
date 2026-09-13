import { redirect } from 'next/navigation';

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params;
  redirect(`/${slug}/`);
}

