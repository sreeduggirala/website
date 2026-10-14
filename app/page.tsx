import Link from "next/link"

import { articles } from "./articles/articles"

export default function Home() {
  return (
    <main className="space-y-12">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="">Sree Duggirala</div>
        <nav className="space-x-4">
          <Link href="mailto:sree@duggirala.co" className="hover:underline">
            Email
          </Link>
          <Link href="https://x.com/sreevanth" className="hover:underline">
            Twitter
          </Link>
          <Link href="https://github.com/sreeduggirala" className="hover:underline">
            GitHub
          </Link>
        </nav>
      </header>

      {/* About */}
      <section className="flex flex-col md:flex-row gap-4">
        <h2 className="section-title">About</h2>
        <div className="content">
          <p>
            I&apos;m a Quantitative Trading Analyst at{" "}
            <Link
              href="https://flowdesk.co"
              className="bg-[#E3C3C7] text-black box-decoration-clone"
            >
              Flowdesk
            </Link>{" "}
            and studied ECE at UT Austin (c/o 2026).
          </p>
        </div>
      </section>

      {/* Interests */}
      <section className="flex flex-col md:flex-row gap-4">
        <h2 className="section-title">Interests</h2>
        <div className="content">Prediction Markets, Texas Hold &apos;Em, Jazz Saxophone, Surfing</div>
      </section>

      {/* Articles */}
      <section className="flex flex-col md:flex-row gap-4">
        <h2 className="section-title">Articles</h2>
        <div className="content space-y-2">
          {articles.map((article) => (
            <div key={article.title} className="flex justify-between items-baseline">
              <Link href={`/articles/${article.slug}`} className="project-link">
                {article.title}
              </Link>
              <span className="year">{article.year}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
