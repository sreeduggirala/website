export type ArticleSection = {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
  equation?: string
  image?: {
    src: string
    alt: string
  }
}

export type Article = {
  slug: string
  title: string
  subtitle?: string
  year: string
  date?: string
  author?: string
  summary?: string
  sections: ArticleSection[]
}

export const articles: Article[] = [
  {
    slug: "convexity-is-all-you-need",
    title: "Convexity is All You Need",
    year: "2026",
    sections: [
      {
        paragraphs: [
          "Crypto's derivatives market has a $86 trillion problem. Daily perp volume dwarfs spot, yet the instrument itself is fundamentally unsuited for anything beyond short-term speculation. Meanwhile, the infrastructure that makes every other asset class complete — volatility indices, insurance layers, convex payoffs — remains conspicuously absent.",
          "While options were previously dismissed in crypto due to the latter's nascency, perhaps this is the cycle for them to emerge onchain.",
        ],
      },
      {
        heading: "Perps are flawed",
        paragraphs: [
          "Perpetual futures have become crypto's default leverage instrument by accident of history. They solve one problem well — simple, expiration-free leverage — but introduce two fatal flaws.",
        ],
      },
      {
        heading: "1. Path dependence = maximum pain.",
        paragraphs: [
          "Perps require continuous margin maintenance. A 50% drawdown liquidates 2x positions regardless of where price ends up afterward. You can be directionally correct and still lose everything because you couldn't survive the path. This makes perps atrocious — especially long-term — hedges.",
        ],
      },
      {
        image: {
          src: "/articles/convexity/watcher-guru.jpeg",
          alt: "Watcher.Guru post highlighting large liquidations",
        },
      },
      {
        heading: "2. Linearity is capital inefficient.",
        paragraphs: [
          "Consider a simple outcome. Bitcoin rallies from $100k to $150k over six months.",
          "A 3x leveraged perp position using $33k of margin earns roughly $50k in profit assuming no liquidation — a ~150% return on capital.",
          "The $120k call — let's say at $8k cost — settles at $30k intrinsic value. That's a ~$22k profit — nearly a 275% return on capital — with no liquidation risk.",
        ],
      },
      {
        heading: "A need for insurance",
        paragraphs: [
          "In equities, the VIX and VVIX provide real-time barometers of fear and tail risk. In rates markets, swaptions allow institutions to hedge duration exposure without unwinding positions.",
          "Crypto has no equivalent. And the absence is felt most acutely by those who can't exit.",
          "Validators or liquid stakers have ETH, SOL, etc. exposure with no efficient way to reduce delta without unstaking — defeating the purpose. A covered call strategy or protective put would let them monetize volatility or cap losses while maintaining staking rewards. Alternatively, a crypto VIX could insure future swings.",
        ],
      },
      {
        paragraphs: [
          "AMM LPs face impermanent loss that's purely path-dependent. Uniswap v3 concentrated liquidity positions are effectively short gamma — they lose money when volatility spikes. However, there's no way to purchase convexity to offset this. A straddle or variance swap would let LPs hedge their implicit short vol exposure.",
          "Without options, vaults, LPs, and traders either accept unhedgeable risk or deploy capital-intensive workarounds (e.g., short perps that get liquidated in a squeeze).",
        ],
      },
      {
        image: {
          src: "/articles/convexity/uniswap-v3.jpeg",
          alt: "Uniswap v3 liquidity range interface",
        },
      },
      {
        heading: "Bitcoin's volatility compression",
        paragraphs: [
          "Since the 2018 cycle, Bitcoin's annualized volatility has persistently declined. Although cycles still harbor episodic spikes, the baseline has trended lower as liquidity deepened and market structure improved.",
          "To contextualize: as of late December 2025, Bitcoin's 30-day historical volatility sat at approximately 45% annualized. Compare this to major equities with comparable or smaller market caps:",
        ],
        bullets: [
          "Apple (AAPL): ~14% 30-day HV, $4.0T market cap",
          "Tesla (TSLA): ~39% 30-day HV, $1.5T market cap",
          "NVIDIA (NVDA): ~12% 30-day HV (using recent rolling data), $4.5T market cap",
          "S&P 500 (SPY): ~9% 30-day HV, representing $45T+ in aggregate market cap",
          "Bitcoin (BTC): ~45% 30-day HV, $1.8T market cap",
        ],
      },
      {
        paragraphs: [
          "Bitcoin now trades with volatility in line with Tesla — a $1.5 trillion company considered among the most volatile mega-caps. This indicates a radical shift from the 90-150% HV regime from 2017-2022.",
          "Lower, more predictable volatility creates the foundational conditions for liquid options markets:",
        ],
        bullets: [
          "Pricing stability: when realized vol compresses and stabilizes, implied vol surfaces become easier to calibrate. Market makers can warehouse vega risk without getting blown out by 50-point overnight moves.",
          "Longer-dated viability: 3-month and 6-month calls/puts become economically feasible. In a 150% vol regime, theta decay and gamma risk make long-dated contracts prohibitively expensive to hedge. At 45-60% vol, structured products like covered calls, collars, and put spreads become attractive.",
          "Variance risk premium: as vol stabilizes, the gap between implied and realized vol (the variance risk premium) becomes harvestable. Volatility sellers can profitably underwrite insurance when the underlying isn't prone to 20% overnight gaps.",
        ],
      },
      {
        image: {
          src: "/articles/convexity/btc-annualized-vol.jpeg",
          alt: "Annualized BTC volatility chart over time",
        },
      },
      {
        heading: "Crypto's implicit options",
        paragraphs: [
          "In many ways, crypto has (not so secretly) been trading options for years.",
          "A Polymarket binary contract priced at $0.10 for a 25bps FFR hike is functionally a call, entailing a deterministic resolution with an expiration date. Give prediction markets' recent proliferation, users comprehend path independence, expiration, and asymmetric payoffs. They're trading options; the interface just says \"Yes\" and \"No\". A recent paper by @DaedalusRsch formalized this equivalence, even proposing a mathematical model to standardize contract pricing.",
        ],
      },
      {
        image: {
          src: "/articles/convexity/polymarket-chart.jpeg",
          alt: "Polymarket chart for a Fed decision market",
        },
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Options — unironically — are not optional in capital markets. Every mature market runs on them because linear exposure is a liability. Crypto possesses the volume, the volatility profile, and now a user base that already comprehends binaries and expirations. Furthermore, the introduction of nonlinear derivatives could fundamentally redesign onchain yield for LPs, vaults, directional trades, and arbitrage.",
          "With that said, options introduce complexity. Greeks interact, hedging is non-trivial, and poorly designed markets can fracture liquidity. Market making options is objectively harder than quoting perps or spot.",
          "However, crypto market makers already price and warehouse exotic contracts through OTC desks for institutional clients. The opportunity is not inventing new math, but productizing convexity in a way that scales on-chain.",
          "Thank you, @flowdesk_co, @KohorstLucas, @owenswill14, @TheiaResearch, @OxBroze, @CabronElBufon, @curiousgurnoor, for your valuable feedback.",
        ],
      },
    ],
  },
  {
    slug: "what-is-market-making",
    title: "What is Market Making?",
    year: "2025",
    date: "November 15th, 2025",
    author: "Sree Duggirala",
    summary:
      "This article introduces the core idea of market making: providing continuous liquidity by posting both buy and sell limit orders.",
    sections: [
      {
        heading: "What This Topic Is About",
        paragraphs: [
          "Before discussing models or code, we need to understand what a market maker is actually paid for and why this role involves substantial risk.",
        ],
      },
      {
        heading: "Why Market Making Exists",
        paragraphs: [
          "Financial markets function only when buyers and sellers can trade at any time. However, they rarely arrive simultaneously or agree on the same price. A market maker solves this mismatch by continuously quoting:",
        ],
        bullets: [
          "Bid: price at which the market maker will buy.",
          "Ask: price at which it will sell.",
        ],
      },
      {
        paragraphs: ["For example:"],
        bullets: ["Bid = 99", "Ask = 101"],
      },
      {
        paragraphs: ["Any participant can immediately:"],
        bullets: [
          "sell to the market maker at 99,",
          "or buy from the market maker at 101.",
        ],
      },
      {
        paragraphs: [
          "The difference between these prices, the spread, represents potential profit.",
        ],
      },
      {
        heading: "What Market Makers Get Paid For",
        paragraphs: [
          "A market maker earns money by capturing the spread. However, earning this spread is not risk-free. Posting two-sided quotes exposes the market maker to two types of risk: inventory risk and execution risk. Managing these risks is the fundamental challenge in market making.",
        ],
        equation: "Spread = Ask - Bid",
      },
      {
        heading: "Risk #1: Inventory Risk",
        paragraphs: [
          "When a market maker's quotes are hit, it accumulates a position called inventory. If the price moves adversely, this inventory can cause losses that outweigh the spread captured.",
          "Example:",
        ],
        bullets: [
          "The market maker buys at 99 (its bid is filled).",
          "The mid-price then drops to 95.",
          "The market maker loses 4 per share, even though it may eventually sell at 101 for a spread of 2.",
        ],
      },
      {
        paragraphs: [
          "Inventory risk is asymmetric: the potential loss from price movement may far exceed the spread earned.",
        ],
      },
      {
        heading: "Risk #2: Execution Risk",
        paragraphs: [
          "If a market maker quotes too conservatively (far from the mid-price), its orders may not fill at all. If it quotes too aggressively (too close to mid), it may:",
        ],
        bullets: [
          "accumulate excessive inventory,",
          "be exposed to large swings in price,",
          "or experience fills from informed traders.",
        ],
      },
      {
        paragraphs: [
          "Execution risk reflects the trade-off between receiving desirable fills and avoiding harmful ones.",
        ],
      },
      {
        heading: "Adversarial (Toxic) Order Flow",
        paragraphs: [
          "Adversarial order flow refers to trades that occur when the counterparty possesses superior information or reacts to information faster than the market maker. Such traders transact only when it is favorable to them and unfavorable to the market maker.",
          "Examples:",
        ],
        bullets: [
          "A fast trader hits your stale quote just before the price drops.",
          "A trader with private information buys from you just before positive news.",
        ],
      },
      {
        paragraphs: [
          "In both cases, the market maker is picked off. This is a major source of losses and becomes more severe when quoting tight spreads or in high-volatility conditions.",
        ],
      },
      {
        heading: "Market Making as a Balancing Problem",
        paragraphs: ["At every moment, a market maker must balance:"],
        bullets: [
          "Profit motive: capturing the spread,",
          "Risk management: limiting inventory exposure,",
          "Execution quality: avoiding adverse selection and toxic flow.",
        ],
      },
      {
        paragraphs: [
          "Because of these competing objectives, market makers do not quote symmetrically around the mid-price. They modify quotes based on inventory, volatility, order flow, and time horizon.",
        ],
      },
      {
        heading: "The Fundamental P&L Equation",
        equation: "P&L = Spread Capture - Inventory Loss",
        bullets: [
          "Spread Capture: profit earned through buying at the bid and selling at the ask.",
          "Inventory Loss (or Gain): profit or loss from holding a position while prices fluctuate. Inventory P&L often dominates spread P&L, especially during volatile periods.",
        ],
      },
      {
        heading: "Why Volatility Matters",
        paragraphs: ["Holding inventory is riskier when:"],
        bullets: [
          "volatility sigma is high,",
          "the position size q is large,",
          "the time horizon T - t is long.",
        ],
      },
      {
        paragraphs: [
          "This relationship appears explicitly in quantitative models, such as the reservation price formula of Avellaneda-Stoikov.",
        ],
      },
      {
        heading: "How Market Makers Blow Up",
        paragraphs: ["Most failures follow the same trajectory:"],
        bullets: [
          "1. Inventory accumulates too quickly.",
          "2. Price moves sharply and unexpectedly.",
          "3. Losses exceed spread capture.",
          "4. The strategy fails to reduce risk in time.",
        ],
      },
      {
        paragraphs: [
          "Successful market makers focus on minimizing catastrophic losses rather than maximizing short-term profit.",
        ],
      },
      {
        heading: "Summary",
        paragraphs: ["Market making is not about predicting prices. It is fundamentally the business of:"],
        bullets: [
          "providing liquidity,",
          "capturing small profits repeatedly,",
          "managing inventory risk,",
          "and avoiding toxic order flow.",
        ],
      },
      {
        paragraphs: [
          "A good market maker quotes dynamically, adjusts for inventory and volatility, and incorporates safeguards against informed trading.",
        ],
      },
    ],
  },
  {
    slug: "hodlers-fallacy",
    title: "The HODLer's Fallacy: Rethinking Conviction in a Naturally Extractive Market",
    year: "2025",
    sections: [
      {
        paragraphs: [
          "Thesis: Crypto is pure arbitrage masquerading as an investment market.",
          "The HODLer’s Fallacy is the belief that time in the market leads to long-term upside. This article unpacks why crypto rewards execution and not conviction.",
        ],
      },
      {
        heading: "The Problem with HODLing",
        paragraphs: [
          "The crypto industry has built itself around a fundamental misconception: that superior returns come from selecting superior assets. Retail investors, venture capitalists, and index builders all fall into the same trap: trying to identify long-term winners in a market that systematically punishes selection.",
        ],
      },
      {
        paragraphs: [
          "In reality, crypto is a wealth extraction system disguised as investing.",
        ],
      },
      {
        paragraphs: [
          "In this sector, the software is often incidental and the token is the product. This harbors a perverse dynamic: protocols are built to justify tokens, not the other way around. The result is a massive token overproduction where retail investors become exit liquidity for private round gains.",
          "Token Survival Rate After 75% or Greater MDD",
          "Of 16,000+ tokens analyzed, just 3.7% have ever recovered from a 75%+ drawdown, with recovery defined as revisiting the midpoint between their all-time high and low. This isn't a bear market phenomenon or poor timing...it's empirical evidence that the system is working as intended: to transfer wealth from public buyers to private sellers.",
        ],
      },
      {
        paragraphs: [
          "Furthermore, Bitcoin’s rising market cap dominance since 2023 highlights a critical trend: most altcoins underperform BTC over time.",
          "In traditional markets, sector-, geography-, and business model-level diversification exists because companies generate independent cash flows. However, most of crypto operates as a homogenous asset class: speculative tokens driven by identical factors (liquidity, narrative, momentum).",
          "Any altcoin-heavy crypto index systematically loses to Bitcoin because diversification doesn’t exist in a single-factor market. Consequently, indices that are underweight on Bitcoin like the CoinDesk 20 (CD20) have materially underperformed.",
        ],
      },
      {
        paragraphs: [
          "This mirrors the difficulty of long-term alpha generation in equities. According to the SPIVA U.S. Year-End 2024 report, roughly 65% of active large-cap U.S. funds underperformed the S&P 500 in 2023. Furthermore, over the 15-year period ending in December 2024, no equity category saw a majority of active managers beat their benchmark.",
          "The implication is similar in crypto: beating the benchmark is arduous, especially for long-only strategies that rely on asset selection without access to hedging, leverage, or rebalancing.",
        ],
      },
      {
        heading: "The Illusion of Value",
        paragraphs: [
          "The recent “revenue meta,” where protocols are now evaluated based on actual onchain fee accrual, reflects a growing discomfort with baseless, narrative-driven valuations that defined prior cycles.",
          "For years, tokens were priced on storytelling, market size projections, and speculative roadmaps. Fundamentals like usage, monetization, and margin structure were secondary at best. But in a market where most assets decay and supply outpaces demand, capital is seeking sustenance and evident paths to value accrual.",
          "The systematic destruction is measurable. Since Q1 2024, nearly 86% of tokens at $500M+ launch FDV experienced at least a 75% drawdown, with around 53% tokens down over 90% to date. Still, many trade at structurally overpriced revenue multiples and face continuous unlocks.",
        ],
      },
      {
        paragraphs: [
          "What appears to be a discount is often just a slower path to zero.",
          "This is visible across L1 and L2 fundraises, with valuations that assumed product-market fit. Hence, these platforms were priced for mass adoption before any fee capture materialized.",
          "In contrast, some of the clear winners this cycle were revenue-generating protocols:",
        ],
        bullets: [
          "Hyperliquid generates ~ $927M in annualized revenue; HYPE is up 525.14% since Q4 2024.",
          "Maple generates ~ $15.6M in annualized revenue; SYRUP is up 114.49% since Q4 2024.",
          "Aave generates ~ $584M in annualized revenue; AAVE is up 94.36% since Q4 2024.",
        ],
      },
      {
        paragraphs: [
          "These outcomes suggest that fundamentals do matter, but only for a narrow subset of protocols. Ironically, these “winners” were often fairly or even fully valued, not undiscovered gems.",
          "The takeaway isn’t that value can’t be found; it’s that most participants are poor at identifying it, and worse at entering at attractive valuations. Fundamentals may guide the best-in-class tokens, but they're the exception, not the norm.",
          "Note: Annualized revenue was based on the 30D revenue SMA.",
        ],
      },
      {
        heading: "Why Venture Capital Fails Long-term",
        paragraphs: [
          "Venture capital in crypto fails because it applies equity investing logic to speculation tokens. VCs analyze teams, technology, and total addressable markets as if they're buying shares in cash-generating businesses. Tokens aren't equity — they're speculation instruments with terminal decay.",
          "This isn't improper timing or due diligence — it's the inevitable result of VC-driven bloat and “low float, high FDV” launch models.",
          "Small VCs occasionally succeed — not because they pick better tokens — but because they exploit structure:",
        ],
        bullets: [
          "Early access",
          "Information asymmetry",
          "Pre-liquidity optionality",
        ],
      },
      {
        paragraphs: [
          "But these advantages disappear when funds scale. As firms raise larger vehicles, they're forced to write bigger checks into later rounds, at higher valuations, with longer lockups. The result is predictable and cyclical: every bull market mints a new generation of “successful” early-stage funds, which then raise larger AUM and fail in the subsequent cycles.",
          "Lastly, long-only liquid funds represent the worst risk-reward tradeoff in the ecosystem. They:",
        ],
        bullets: [
          "Take early-stage risk (unproven protocols)",
          "Without early-stage advantages (no information asymmetry)",
          "While exposed to public market volatility",
          "Without hedge fund tools (no shorting, no dynamic rebalancing)",
        ],
      },
      {
        paragraphs: [
          "They forego seed-stage upside yet lack the flexibility to actively manage downside. Most end up locked into semi-liquid altcoin positions with decaying narratives, thin liquidity, and limited optionality.",
          "That said, their one advantage is mobility: they can exit faster than illiquid venture positions. But speed is not a substitute for edge.",
          "In theory, the optimal crypto VC model is simple: maintain small AUM, write pre-seed or seed checks, and fully exit positions upon TGE or public listing. Venture capital — regardless of size or pedigree — is fundamentally unequipped to manage publicly traded assets.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "In practice, the winners in crypto are those who systematically extract value without directional exposure:",
        ],
        bullets: [
          "Market makers (MMs) earn the bid-ask spread while providing liquidity.",
          "High-frequency traders (HFT) exploit microprice discrepancies millions of times per day.",
          "MEV bots extract value via block building, DEX-to-DEX arbitrage, sandwiching, and liquidations.",
          "Delta-neutral strategies capture funding premiums, volatility, and mispriced risk across venues.",
          "Centralized and decentralized exchanges monetize throughput via fees on cyclical — but persistent — trading volumes.",
        ],
      },
      {
        paragraphs: [
          "These models succeed not because they bet on the right assets but because these models are market-neutral, profitable irrespective of market conditions.",
          "VCs exploit storytelling and early access, hedge funds leverage information asymmetries and discounted deals, market makers capture spreads, and arbitrageurs extract delta-neutral profits. The critical error isn't choosing the 'wrong' strategy: it's applying one strategy while having the structural position for another.",
          "Crypto rewards different strategies based on structural position — participants simply need to understand which version they're equipped to play.",
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug) ?? null
}
