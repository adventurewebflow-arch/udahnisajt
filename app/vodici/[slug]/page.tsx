import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "../../data/blog";
import BlogPostSchema from "../../components/BlogPostSchema";
import InquiryForm from "../../components/InquiryForm";
import TourGallery from "../../components/TourGallery";
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
    title: post.metadataTitle ?? `${post.title} - Udahni Avanturu`,
    description: post.metadataDescription ?? post.excerpt,
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

  const coverSrc = post.image;

  return (
    <main className="min-h-screen pt-20">
      <BlogPostSchema post={post} lang="sr" />
      {/* Hero cover image */}
      <section className="relative h-[55vh] min-h-[360px] lg:h-[65vh] lg:min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          {coverSrc ? (
            <Image
              src={coverSrc}
              alt={post.imageAlt ?? post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-10 md:pb-14">
          <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-widest mb-3 font-medium">
            <span>Blog</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString("sr-RS")}</span>
            <span>·</span>
            <span>~{readingTime} min čitanja</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Excerpt below hero */}
        {post.excerpt && (
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
            {post.excerpt}
          </p>
        )}

        {/* Article content */}
        <article className="ua-article">
          <div
            className="ua-article"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {post.images && post.images.length > 0 && (
          <div className="mt-10">
            <TourGallery images={post.images} />
          </div>
        )}

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

        {slug === "trnovacko-jezero-vodic" && (
          <div className="mt-8">
            <Link
              href="/trnovacko-jezero"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Saznaj više o Trnovačkom jezeru →
            </Link>
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
