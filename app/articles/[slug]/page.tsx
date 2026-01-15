import Link from "next/link"
import { notFound } from "next/navigation"

import { getArticleBySlug } from "../articles"

type ArticlePageProps = {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="max-w-3xl mx-auto px-4 md:px-0 space-y-10">
      <header className="space-y-3">
        <Link
          href="/"
          className="inline-flex items-center text-neutral-500 hover:text-neutral-700"
          aria-label="Back to home"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        {article.subtitle ? (
          <div className="text-xs uppercase tracking-widest text-neutral-400">
            {article.subtitle}
          </div>
        ) : null}
        <h1 className="text-3xl md:text-4xl font-semibold">{article.title}</h1>
        <div className="text-sm text-neutral-500">
          {article.author ? `${article.author} · ` : ""}
          {article.date ?? article.year}
        </div>
        {article.summary ? (
          <p className="text-lg text-neutral-600">{article.summary}</p>
        ) : null}
      </header>

      <article className="space-y-10 text-base md:text-lg leading-relaxed text-neutral-800">
        {article.sections.map((section, sectionIndex) => (
          <section key={`${article.slug}-${sectionIndex}`} className="space-y-4">
            {section.heading ? (
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
                {section.heading}
              </h2>
            ) : null}
            {section.equation ? (
              <div className="rounded-md bg-neutral-100 px-4 py-3 font-mono text-sm md:text-base">
                {section.equation}
              </div>
            ) : null}
            {section.image ? (
              <div className="rounded-md border border-neutral-200 overflow-hidden bg-neutral-100">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="w-full h-auto"
                />
              </div>
            ) : null}
            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <p key={`${article.slug}-${sectionIndex}-${paragraphIndex}`}>
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="list-disc pl-5 space-y-2">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={`${article.slug}-${sectionIndex}-bullet-${bulletIndex}`}>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  )
}
