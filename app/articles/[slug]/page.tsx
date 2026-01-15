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
        <Link href="/" className="text-sm text-neutral-500 hover:underline">
          Back to home
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
