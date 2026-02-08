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
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        {post.image ? (
          <div className="absolute inset-0">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-gray-300 text-sm">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString("sr-RS")}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-0 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-gray-300 prose-li:mb-2 prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
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

          {/* CTAs */}
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            <Link
              href="/#popularne"
              className="px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors text-center"
            >
              Pogledaj ture
            </Link>
            <a
              href="#kontakt-form"
              className="px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors text-center"
            >
              Pošalji upit
            </a>
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
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Nazad na članke
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
