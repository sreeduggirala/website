import Link from "next/link"

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
              className="bg-[#C3D5E8] text-black box-decoration-clone"
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
          {[
            {
              title: "A Practical Guide to Power Markets",
              year: "2026",
              link: "https://x.com/sreevanth/status/2110428082444108136",
            },
            {
              title: "Keeping Score",
              year: "2026",
              link: "https://x.com/sreevanth/status/2045469648531890374",
            },
            {
              title: "Convexity is All You Need",
              year: "2026",
              link: "https://x.com/sreevanth/status/2007215315046879262",
            },
            {
              title:
                "The HODLer's Fallacy: Rethinking Conviction in a Naturally Extractive Market",
              year: "2025",
              link: "https://x.com/sreevanth/status/1968789871025176786",
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
    </main>
  )
}
