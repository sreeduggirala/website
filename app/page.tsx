import Link from "next/link"

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
          <Link href="https://twitter.com/sreethereum" className="hover:underline">
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
            I&apos;m a Research Analyst Intern at{" "}
            <Link href="https://dcg.co" className="underline">
              Digital Currency Group
            </Link>
            and Co-President of {" "}
            <Link href="https://www.texasblockchain.com" className="underline">
              Texas Blockchain
            </Link>
            at the University of Texas at Austin.
          </p>
          <p>
            Prev. Software Engineer/AI Intern at{" "}
            <Link href="https://foundrydigital.com" className="underline">
              Foundry
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
          {[
            {
              title: "The HODLer's Fallacy",
              year: "2025",
              link: "https://mirror.xyz/sreevanth.eth/6unQ_oX9sQFkvjPi3yehVi6M7Ak2t1V5hzyWYs9yUi4",
            },
          ].map((article) => (
            <div key={article.title} className="flex justify-between items-baseline">
              <Link href={article.link} className="project-link">
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
              name: "FantasyKOL — Fantasty sports game for crypto influencers/whales",
              year: "2025",
              link: "https://github.com/sreeduggirala/ethdenver2025",
            },
            {
              name: "BitChat — RAG-based chatbot for the Bitcoin whitepaper",
              year: "2024",
              link: "https://github.com/sreeduggirala/bitchat",
            },
            {
              name: "Loop — Token incentivized crowdsourced RLHF platform",
              year: "2024",
              link: "https://github.com/shreybirmiwal/Loop-ethSF2024",
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

      {/* Reading */}
      <section className="flex flex-col md:flex-row gap-4">
        <h2 className="section-title">Reading</h2>
        <div className="content space-y-2">
          {[
            {
              title: "Market Microstructure Theory",
              author: "Maureen O'Hara",
            },
            {
              title: "Options Volatility and Pricing",
              author: "Sheldon Natenberg",
            },
          ].map((article) => (
            <div key={article.title} className="flex justify-between items-baseline">
              <span>{article.title}</span>
              <span className="author">{article.author}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

