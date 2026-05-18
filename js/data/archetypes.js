// Global — loaded as a plain script, no imports needed.
// 8 archetypes: 5 base types + 3 combination types.

var ARCHETYPES = {

  // ── Base five ─────────────────────────────────────────────

  sage: {
    id: "sage",
    name: "The Illuminator",
    tagline: "You turn fog into maps.",
    icon: "🔮",
    color: "#7c5cbf",
    paths: ["Knowledge products", "Newsletter / blog", "Consulting", "Online courses", "Market research writing"],
    description:
      "Your natural power is translation — you take complexity and make it navigable. Where others see confusion, you see patterns. This gift is rare and genuinely valuable online: clarity is one of the most consistently paid-for things in the digital economy. The Illuminator's challenge isn't capability — it's deployment. You tend to wait until the understanding feels complete before sharing, which means your insights stay inside longer than they should.",
    traits: [
      "Sees patterns others miss",
      "Explains complexity simply",
      "Over-researches before acting",
      "Uses depth to avoid shipping",
      "Knowledge products are your natural currency",
    ],
    actionPlan: [
      {
        title: "Name the confusion you already understand",
        description: "Identify one problem your peers consistently struggle with that feels obvious to you. That gap between their confusion and your clarity is your first product."
      },
      {
        title: "Publish before it's perfect",
        description: "Your standard for 'ready' is too high. Set a rule: if you can explain it to a friend, it's ready to publish. Start there."
      },
      {
        title: "Turn one insight into a paid asset this month",
        description: "Write a 5-page guide, record a 30-minute walkthrough, or offer a one-hour clarity session. Price it. Test it. Your knowledge is already worth something — the only missing variable is shipping."
      }
    ],
    warningSign: "You keep learning but nothing ever goes out.",
    firstMove: "Turn one real confusion into a small paid knowledge asset — a guide, diagnostic, or clarity session."
  },

  builder: {
    id: "builder",
    name: "The Forge",
    tagline: "You build what lasts.",
    icon: "⚙️",
    color: "#c9a84c",
    paths: ["SaaS / digital tools", "Templates & systems", "AI automations", "Notion / Airtable products", "Long-term investing"],
    description:
      "You create value through structure. Where others see a problem, you see a system that could solve it — and you have the rare ability to actually build that system. The digital economy rewards builders disproportionately because good tools work while you sleep. Your challenge is the perfectionism that delays shipping: you tend to add one more feature before letting the world respond. The result is polished work that arrives late — or never.",
    traits: [
      "Systems thinker and executor",
      "Turns chaos into repeatable process",
      "Perfectionism delays shipping",
      "Builds before validating demand",
      "Tools and systems are your natural currency",
    ],
    actionPlan: [
      {
        title: "Define 'version 1.0' with a hard ceiling",
        description: "Before building anything, write down exactly what the smallest useful version includes — and commit to not adding to it. Ship that. Improvement comes after people respond."
      },
      {
        title: "Validate before you build",
        description: "Describe what you plan to build to 10 potential users before creating anything. If fewer than 3 want it badly, redesign."
      },
      {
        title: "Build one thing this month that someone pays for",
        description: "A template, a Notion system, a workflow automation, a small tool. Package it, price it, sell it. One real transaction is the goal."
      }
    ],
    warningSign: "You keep building, but no real person is actually using any of it.",
    firstMove: "Build one useful tool or template — then sell it before improving it."
  },

  creator: {
    id: "creator",
    name: "The Signal",
    tagline: "You make people feel something.",
    icon: "✦",
    color: "#bf5c8a",
    paths: ["Content brand / YouTube", "Paid newsletter", "Workshops & experiences", "Personal brand consulting", "Community around a theme"],
    description:
      "Attention is the currency of the internet, and you know how to earn it authentically. Your voice, perspective, and way of seeing the world create a kind of cultural gravity — people don't just follow you for information, they follow you for how your content makes them feel. The Signal's blind spot is consistency: you thrive on the spark of something new but struggle to maintain the signal once it becomes routine. Creators who build lasting economic value are the ones who solve this — not by forcing enthusiasm, but by finding a way to repeat what matters.",
    traits: [
      "Original voice that cuts through noise",
      "Creates emotional resonance, not just information",
      "Inconsistency is the main liability",
      "Needs creative novelty to sustain energy",
      "Audience and personal brand are your natural currency",
    ],
    actionPlan: [
      {
        title: "Choose one theme and lock in for 90 days",
        description: "Pick the topic at the intersection of what you understand, what you care about, and what your audience needs. Commit to publishing around it for 90 days regardless of how inspired you feel."
      },
      {
        title: "Build a content system, not just a content habit",
        description: "Your creative energy is variable — your output can't afford to be. Batch-create multiple pieces in one session, then schedule them across the week."
      },
      {
        title: "Attach one offer to your existing voice",
        description: "You likely already have attention. The missing step is monetization. Add one simple offer to your content — a workshop, a session, a product — and mention it consistently."
      }
    ],
    warningSign: "You have to perform publicly every day and you're running on empty.",
    firstMove: "Publish one theme consistently for 14 days and attach one simple offer to it."
  },

  connector: {
    id: "connector",
    name: "The Anchor",
    tagline: "People trust you before they trust the idea.",
    icon: "◎",
    color: "#5c9ec9",
    paths: ["Coaching & mentorship", "Paid community / membership", "Facilitated group programs", "Partnerships & collaboration", "Trust-based consulting"],
    description:
      "Trust is your superpower — and it's genuinely scarce. In a world full of transactional relationships, your ability to make people feel genuinely seen and safe is rare and economically valuable. People pay for the feeling of not being alone, and you create that feeling naturally. The Anchor's core challenge is the giving pattern: you tend to offer significant value before establishing a boundary or a price. This means your most powerful asset — your relational credibility — often goes unmonetized.",
    traits: [
      "High relational intelligence and trust capital",
      "People feel safe and seen with you",
      "Gives value before establishing price",
      "Struggles to charge what you're worth",
      "Community and trust-based processes are your natural currency",
    ],
    actionPlan: [
      {
        title: "Name your value exchange explicitly",
        description: "List five relationships where you contribute significantly. For each one: is the exchange balanced? If not, that imbalance is your pricing problem made visible."
      },
      {
        title: "Create a paid container for what you give freely",
        description: "Whatever you currently offer informally — advice, support, facilitation, guidance — design a simple, paid version of it. One cohort, one program, one monthly circle."
      },
      {
        title: "Make one real ask this week",
        description: "Ask someone directly for money, a referral, or a commitment. Not as a test — as a practice. Anchors who learn to ask build businesses; those who don't stay in relationships that don't compound."
      }
    ],
    warningSign: "You're an emotional container for others with no boundaries and no price.",
    firstMove: "Invite 10 people into a small paid pilot — a circle, program, or guided process."
  },

  hunter: {
    id: "hunter",
    name: "The Edge",
    tagline: "You see the move before the crowd.",
    icon: "◈",
    color: "#5cbfaa",
    paths: ["Lead generation", "Affiliate & distribution", "Crypto / market research", "Market gap testing", "Fast-cycle business models"],
    description:
      "Your competitive advantage is timing. While others are still analyzing, you've already identified the asymmetry and moved. This instinct has likely created real opportunities in your life — but it also generates a pattern: you move to the next opening before the current one has had time to compound. The Edge's paradox is that the freedom you're chasing actually requires staying in one place long enough to build something that runs without you.",
    traits: [
      "Fast pattern recognition and timing instinct",
      "Moves before others see the window",
      "Tends to switch before anything compounds",
      "Confuses exits with strategy",
      "Leverage and arbitrage are your natural currency",
    ],
    actionPlan: [
      {
        title: "Run a 30-day single-track experiment",
        description: "Choose one opportunity — one channel, one market, one bet. Define your success metrics before you start. Run it for 30 full days without switching. You'll learn more from depth than from speed."
      },
      {
        title: "Build rules before you enter",
        description: "Before any new opportunity, write: what would make this a clear success? What would make it a clear exit? Define both in advance — this is how you separate strategy from impulse."
      },
      {
        title: "Compound one existing move",
        description: "Look at the last thing that actually worked for you — even partially. Instead of moving on, ask: what would it look like to double down on this for another 60 days?"
      }
    ],
    warningSign: "You keep jumping between opportunities and nothing ever compounds.",
    firstMove: "Choose one narrow opportunity, set rules and success metrics, and test it for 30 days straight."
  },

  // ── Combination three ─────────────────────────────────────

  visionary: {
    id: "visionary",
    name: "The Visionary",
    tagline: "You see what's coming — and move before the crowd.",
    icon: "🌐",
    color: "#8a5cbf",
    paths: ["Thought leadership", "Trend-forward content / newsletter", "Early-stage advisory", "Emerging-market research", "Future-focused consulting"],
    description:
      "You combine two rare qualities: the ability to read deep patterns and the willingness to act on them before consensus forms. Where the Illuminator stays to explain and the Edge moves without fully understanding, you do both — you synthesize insight into timing. This makes you genuinely valuable in markets, ideas, and early-stage opportunities. Your challenge is the same breadth that makes you powerful: you're drawn to the next horizon before the current one has delivered. The Visionary who learns to go deep on one idea for long enough builds compounding leverage; the one who doesn't stays perpetually ahead but never cashes in.",
    traits: [
      "Reads patterns and acts on them early",
      "Comfortable with uncertainty and ambiguity",
      "Restless once something becomes mainstream",
      "Excellent at narrative around emerging trends",
      "Tends to leave value on the table by moving on too soon",
    ],
    actionPlan: [
      {
        title: "Write your thesis, not just your observations",
        description: "The difference between a smart observer and a Visionary with leverage is a specific, falsifiable thesis. Pick one trend you believe in and write a 500-word argument for it. Publish it. Make yourself accountable."
      },
      {
        title: "Stay in the room for 90 days",
        description: "Choose one space where you see early signal — a market, a technology, an idea — and commit to being the person who tracks it for 90 days. Depth over breadth for one defined cycle."
      },
      {
        title: "Monetize the thesis before it's obvious",
        description: "A newsletter, a paid report, an advisory engagement — pick one way to get paid for seeing early. Your advantage is the gap between what you see and what the market prices."
      }
    ],
    warningSign: "You're always early and always right — but never actually building anything on it.",
    firstMove: "Publish one forward-looking thesis publicly. Be specific. Make the prediction. That's how Visionaries create credibility."
  },

  alchemist: {
    id: "alchemist",
    name: "The Alchemist",
    tagline: "You make the complex feel inevitable.",
    icon: "⚗️",
    color: "#bf845c",
    paths: ["Signature frameworks & methodologies", "Premium courses", "Intellectual brand / writing", "High-end workshops", "Original research products"],
    description:
      "You turn knowledge into something more than information — you turn it into art. Most people can explain or create. You do both in the same breath, and the result is work that doesn't just inform or entertain: it reframes how people see a problem entirely. This is one of the rarest capabilities online and commands serious attention and premium pricing. Your challenge is repeatability: the very sophistication that makes your work powerful also makes it feel impossible to reproduce. The Alchemist who cracks their own creative process builds something extraordinary and scalable; the one who doesn't stays brilliant but bottlenecked.",
    traits: [
      "Synthesizes knowledge into original insight",
      "Turns complexity into elegant simplicity",
      "Hard to replicate own creative process",
      "Commands premium but struggles with volume",
      "Works best in depth, not breadth",
    ],
    actionPlan: [
      {
        title: "Map your creative process — once",
        description: "You likely can't explain how you do what you do. That's the bottleneck. Spend one week documenting your thinking process on one project in real time. The map you create becomes your framework."
      },
      {
        title: "Package your perspective, not just your output",
        description: "People don't just want the result — they want to see the world the way you see it. Build one product (a course, a workshop, a guide) that teaches your lens, not just your conclusions."
      },
      {
        title: "Charge for the reframe, not the information",
        description: "Most knowledge products compete on content volume. Yours should compete on perspective shift. What does someone see differently after working with you? That's the price anchor."
      }
    ],
    warningSign: "You produce brilliant things sporadically but can't build on them consistently.",
    firstMove: "Document how you solved one hard problem — then sell that documented process as a guide or workshop."
  },

  sovereign: {
    id: "sovereign",
    name: "The Sovereign",
    tagline: "You build the room everyone wants to be in.",
    icon: "♛",
    color: "#5c7fbf",
    paths: ["Membership communities", "SaaS with community layer", "High-value masterminds", "B2B community-led growth", "Platform businesses"],
    description:
      "You build infrastructure for trust at scale. Where the Forge creates tools and the Anchor creates belonging, you do both — you build the platform that holds a community together, combining product thinking with relational intelligence. This positions you at the intersection of systems and people, which is where some of the most durable online businesses live. Your challenge is scope: you can see the full ecosystem you want to build, which makes starting small feel like failing. The Sovereign who launches with 10 people in a rough product beats the one still designing the perfect platform.",
    traits: [
      "Sees the full ecosystem, not just individual parts",
      "Bridges product thinking and relational intelligence",
      "Can over-engineer before launching",
      "Builds for permanence and retention",
      "Excellent at seeing what holds a community together",
    ],
    actionPlan: [
      {
        title: "Launch before the platform is ready",
        description: "The platform you're envisioning will take months. The community you need can start with a WhatsApp group or a weekly call. Start the relationship layer now. Build the infrastructure around people, not before them."
      },
      {
        title: "Define the transformation, not the features",
        description: "What does someone's professional or financial life look like 6 months after joining what you build? That transformation is what you sell — not the Slack workspace or the Notion templates."
      },
      {
        title: "Recruit your founding 10 by invitation",
        description: "Sovereigns don't launch to the public first — they recruit the founding cohort by hand. Identify 10 people for whom this would be the obvious thing. Invite them personally. Build with them."
      }
    ],
    warningSign: "You're designing the palace while the foundations are still empty.",
    firstMove: "Start the community before the platform. 10 people, a clear transformation, and a price. Ship it in the next 30 days."
  }

};

// ── Archetype classification ──────────────────────────────
// Returns one of 8 archetype keys based on scores.
// If two types are close, returns the relevant combo archetype.

function classifyArchetype(scores) {
  var sorted = Object.entries(scores).sort(function(a, b) { return b[1] - a[1]; });
  if (sorted.length === 0) return 'sage';

  var first  = sorted[0];
  var second = sorted[1] || [null, 0];
  var gap    = first[1] - second[1];

  // Within 3 points → check for combo archetype
  if (gap <= 3 && second[0]) {
    var pair = [first[0], second[0]].sort().join('+');
    var combos = {
      'hunter+sage':     'visionary',
      'creator+sage':    'alchemist',
      'builder+connector': 'sovereign',
      'connector+sage':  'alchemist',   // sage-connector leans toward alchemist
      'builder+hunter':  'visionary',   // builder-hunter leans toward visionary
      'connector+creator': 'sovereign', // creator-connector leans toward sovereign
    };
    if (combos[pair]) return combos[pair];
  }

  return first[0];
}
