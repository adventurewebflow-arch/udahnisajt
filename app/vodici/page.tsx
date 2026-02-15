import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../data/blog";

export const metadata = {
  title: "Blog - Udahni Avanturu",
  description:
    "Korisni vodiči, savjeti i priče sa naših avantura. Planinarenje, NP Sutjeska, Zelengora, Perućica i više.",
};

function estimateReadingTime(content: string): number {
  const text = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / 200));
}

export default function GuidesPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-12">
          Korisni vodiči, savjeti i priče sa naših avantura. Planinarenje, NP Sutjeska, Zelengora, Perućica i više.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/vodici/${post.slug}`}>
              <article className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-gray-900/40 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 cursor-pointer">
                {post.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full rounded-t-2xl bg-gradient-to-br from-gray-800 to-gray-900" />
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-white mb-2 hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString("sr-RS")}</span>
                    <span>~{estimateReadingTime(post.content)} min čitanja</span>
                  </div>
                  <span className="mt-4 inline-flex items-center text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors">
                    Pročitaj
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
