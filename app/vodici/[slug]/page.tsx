import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "../../data/blog";
import InquiryForm from "../../components/InquiryForm";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Članak nije pronađen",
    };
  }

  return {
    title: `${post.title} - Udahni Avanturu`,
    description: post.excerpt,
  };
}

function estimateReadingTime(content: string): number {
  const text = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = estimateReadingTime(post.content);

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Cover image */}
        {post.image ? (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-gray-800">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        ) : null}

        {/* Article header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <span>{new Date(post.date).toLocaleDateString("sr-RS")}</span>
            <span>•</span>
            <span>~{readingTime} min čitanja</span>
          </div>
          {post.excerpt ? (
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          ) : null}
        </header>

        {/* Article content */}
        <article className="ua-article">
          <div
            className="ua-article"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA box */}
        <div className="mt-12 p-8 rounded-2xl bg-gray-900/60 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-2">Spreman za svoju avanturu?</h3>
          <p className="text-gray-400 mb-6">
            Pogledaj našu ponudu tura ili nas kontaktiraj za više informacija.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#ture"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors text-center"
            >
              Pogledaj ture
            </Link>
            <a
              href="#kontakt-form"
              className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg border border-white/10 transition-colors text-center"
            >
              Kontaktiraj
            </a>
          </div>
        </div>

        {/* Inquiry Form */}
        <div id="kontakt-form" className="mt-12">
          <InquiryForm />
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/vodici"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Nazad na članke
          </Link>
        </div>
      </div>
    </main>
  );
}
