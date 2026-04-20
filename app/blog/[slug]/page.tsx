// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogArticles, getArticleBySlug } from '@/data/blog';
import { siteConfig } from '@/data/site';
import BlogArticleClient from './BlogArticleClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    };
  }

  const url = `${siteConfig.url}/blog/${article.slug}/`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title: article.title,
      description: article.excerpt,
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default function Page({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  return <BlogArticleClient params={params} />;
}
