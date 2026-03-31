const BASE = "https://www.udahniavanturu.com";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  image?: string;
  imageAlt?: string;
  excerpt: string;
}

interface BlogPostSchemaProps {
  post: BlogPost;
  lang?: "sr" | "en";
}

export default function BlogPostSchema({ post, lang = "sr" }: BlogPostSchemaProps) {
  const url = lang === "en"
    ? `${BASE}/en/blog/${post.slug}`
    : `${BASE}/vodici/${post.slug}`;

  const authorPage = lang === "en" ? `${BASE}/en/o-nama` : `${BASE}/o-nama`;

  const blogPosting: Record<string, unknown> = {
    "@type": "BlogPosting",
    "@id": url,
    "headline": post.title,
    "description": post.excerpt,
    "url": url,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": authorPage
    },
    "publisher": {
      "@type": "Organization",
      "name": "Udahni Avanturu",
      "url": BASE,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE}/logo-icon.png`
      }
    },
    "inLanguage": lang === "en" ? "en" : "sr"
  };

  if (post.image) {
    blogPosting.image = {
      "@type": "ImageObject",
      "url": `${BASE}${post.image}`,
      "description": post.imageAlt ?? post.title
    };
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      blogPosting,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": lang === "en" ? "Home" : "Početna",
            "item": lang === "en" ? `${BASE}/en` : BASE
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": lang === "en" ? `${BASE}/en/blog` : `${BASE}/vodici`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": url
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
