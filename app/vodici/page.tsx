import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../data/blog";

export const metadata = {
  title: "Blog - Udahni Avanturu",
  description:
    "Korisni vodiči, savjeti i priče sa naših avantura. Planinarenje, NP Sutjeska, Zelengora, Perućica i više.",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300">
            Korisni vodiči, savjeti i priče sa naših avantura. Planinarenje, NP Sutjeska, Zelengora, Perućica i više.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Najnoviji članci</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/vodici/${post.slug}`}>
                <article className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {post.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-700">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString("sr-RS")}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
