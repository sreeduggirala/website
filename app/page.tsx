import Link from "next/link"

import { articles } from "./articles/articles"

export default function Home() {
  return (
    <main className="space-y-12">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="">Sree Duggirala</div>
        <nav className="space-x-4">
          <Link href="mailto:sree@dcg.co" className="hover:underline">
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
          <p className="mb-4">
            I&apos;m a Quantitative Developer Intern at Artemis and a senior in ECE at
            UT Austin.
          </p>
          <p>
            Prev. Research Analyst Intern at{" "}
            <Link href="https://dcg.co" className="text-[#E3C3C7] hover:text-[#E3C3C7]">
              Digital Currency Group
            </Link>
            , Software Engineer/AI Intern at{" "}
            <Link
              href="https://foundrydigital.com"
              className="text-[#E3C3C7] hover:text-[#E3C3C7]"
            >
              Foundry
            </Link>
            , Co-President of{" "}
            <Link
              href="https://www.texasblockchain.org"
              className="text-[#E3C3C7] hover:text-[#E3C3C7]"
            >
              Texas Blockchain
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Interests */}
      <section className="flex flex-col md:flex-row gap-4">
        <h2 className="section-title">Interests</h2>
        <div className="content">Quantitative Finance, Macroeconomics</div>
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

      {/* Projects */}
      <section className="flex flex-col md:flex-row gap-4">
        <h2 className="section-title">Projects</h2>
        <div className="content space-y-2">
          {[
            {
              name: "FantasyKOL — Fantasty sports game for copytrading",
              year: "2025",
              link: "https://github.com/sreeduggirala/ethdenver2025",
            },
            {
              name: "ammBT — Python-based backtesting engine for AMM LPs",
              year: "2026",
              link: "https://github.com/sreeduggirala/ammbt",
            },
            {
              name: "Burner — Solana-native mixer that breaks on-chain transaction linkability for SPL token transfers",
              year: "2026",
              link: "https://github.com/sreeduggirala/burner",
            },
            {
              name: "Checkmate — A CLI-based dual-agent coding assistant",
              year: "2026",
              link: "https://github.com/sreeduggirala/checkmate",
            },
            {
              name: "BitChat — RAG-based chatbot for the Bitcoin whitepaper",
              year: "2024",
              link: "https://github.com/sreeduggirala/bitchat",
            },
            {
              name: "Swoosh — Onchain payments and bill splitting",
              year: "2024",
              link: "https://github.com/sreeduggirala/swoosh",
            },
            {
              name: "Magizk Square — Privacy preserving Magic Square",
              year: "2023",
              link: "https://github.com/sreeduggirala/magizk-square",
            },
          ].map((project) => (
            <div key={project.name} className="flex justify-between items-baseline">
              <Link href={project.link || "#"} className="project-link">
                {project.name}
              </Link>
              <span className="year">{project.year}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
