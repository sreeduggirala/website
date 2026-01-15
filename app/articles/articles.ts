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
    slug: "what-is-market-making",
    title: "What is Market Making?",
    subtitle: "Market Making 101",
    year: "2025",
    date: "November 15th, 2025",
    author: "Sree Duggirala",
    summary:
      "This first chapter introduces the core idea of market making: providing continuous liquidity by posting both buy and sell limit orders.",
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
          "Full article content coming soon.",
        ],
      },
    ],
  },
  {
    slug: "convexity-is-all-you-need",
    title: "Convexity is All You Need",
    year: "2026",
    sections: [
      {
        paragraphs: [
          "Crypto's derivatives market has a $86 trillion problem. Daily perp volume dwarfs spot, yet the instrument itself is fundamentally unsuited for anything beyond short-term speculation. Meanwhile, the infrastructure that makes every other asset class complete -- volatility indices, insurance layers, convex payoffs -- remains conspicuously absent.",
          "While options were previously dismissed in crypto due to the latter's nascency, perhaps this is the cycle for them to emerge onchain.",
        ],
      },
      {
        heading: "Perps are flawed",
        paragraphs: [
          "Perpetual futures have become crypto's default leverage instrument by accident of history. They solve one problem well -- simple, expiration-free leverage -- but introduce two fatal flaws.",
        ],
      },
      {
        heading: "1. Path dependence = maximum pain.",
        paragraphs: [
          "Perps require continuous margin maintenance. A 50% drawdown liquidates 2x positions regardless of where price ends up afterward. You can be directionally correct and still lose everything because you couldn't survive the path. This makes perps atrocious -- especially long-term -- hedges.",
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
          "A 3x leveraged perp position using $33k of margin earns roughly $50k in profit assuming no liquidation -- a ~150% return on capital.",
          "The $120k call -- let's say at $8k cost -- settles at $30k intrinsic value. That's a ~$22k profit -- nearly a 275% return on capital -- with no liquidation risk.",
        ],
      },
      {
        heading: "A need for insurance",
        paragraphs: [
          "In equities, the VIX and VVIX provide real-time barometers of fear and tail risk. In rates markets, swaptions allow institutions to hedge duration exposure without unwinding positions.",
          "Crypto has no equivalent. And the absence is felt most acutely by those who can't exit.",
          "Validators or liquid stakers have ETH, SOL, etc. exposure with no efficient way to reduce delta without unstaking -- defeating the purpose. A covered call strategy or protective put would let them monetize volatility or cap losses while maintaining staking rewards. Alternatively, a crypto VIX could insure future swings.",
        ],
      },
      {
        paragraphs: [
          "AMM LPs face impermanent loss that's purely path-dependent. Uniswap v3 concentrated liquidity positions are effectively short gamma -- they lose money when volatility spikes. However, there's no way to purchase convexity to offset this. A straddle or variance swap would let LPs hedge their implicit short vol exposure.",
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
          "Bitcoin now trades with volatility in line with Tesla -- a $1.5 trillion company considered among the most volatile mega-caps. This indicates a radical shift from the 90-150% HV regime from 2017-2022.",
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
          "Options -- unironically -- are not optional in capital markets. Every mature market runs on them because linear exposure is a liability. Crypto possesses the volume, the volatility profile, and now a user base that already comprehends binaries and expirations. Furthermore, the introduction of nonlinear derivatives could fundamentally redesign onchain yield for LPs, vaults, directional trades, and arbitrage.",
          "With that said, options introduce complexity. Greeks interact, hedging is non-trivial, and poorly designed markets can fracture liquidity. Market making options is objectively harder than quoting perps or spot.",
          "However, crypto market makers already price and warehouse exotic contracts through OTC desks for institutional clients. The opportunity is not inventing new math, but productizing convexity in a way that scales on-chain.",
          "Thank you, @flowdesk_co, @KohorstLucas, @owenswill14, @TheiaResearch, @OxBroze, @CabronElBufon, @curiousgurnoor, for your valuable feedback.",
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug) ?? null
}
