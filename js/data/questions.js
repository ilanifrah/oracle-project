// Global — loaded as a plain script, no imports needed.

var STAGE_LABELS = {
  1: "Opening",
  2: "Repeating Patterns",
  3: "Real Life",
  4: "Choice",
  5: "Money Direction",
};

var QUESTIONS = [

  // ── Stage 1: Opening (8 questions) ───────────────────────

  {
    id: 1, stage: 1,
    text: "You have a quiet month with no financial pressure. What do you almost automatically start doing?",
    options: [
      { label: "A", text: "Writing or mapping an idea that organizes my thinking — and other people's.", type: "sage" },
      { label: "B", text: "Building a small tool or system that fixes something that's been annoying me.", type: "builder" },
      { label: "C", text: "Creating something alive — text, video, a workshop, an idea with a personal voice.", type: "creator" },
      { label: "D", text: "Inviting people into a conversation or space where we can think together.", type: "connector" },
      { label: "E", text: "Testing an opportunity that looks open before others get in.", type: "hunter" },
    ]
  },
  {
    id: 2, stage: 1,
    text: "A friend says: 'There's something in you that people would pay for.' What part of you hopes they see?",
    options: [
      { label: "A", text: "My ability to understand things deeply and explain them simply.", type: "sage" },
      { label: "B", text: "My ability to turn chaos into something organized that actually works.", type: "builder" },
      { label: "C", text: "My personal voice — something that can't be copied from me.", type: "creator" },
      { label: "D", text: "My ability to make people feel safe and truly understood.", type: "connector" },
      { label: "E", text: "My instinct for identifying openings and turning them into moves.", type: "hunter" },
    ]
  },
  {
    id: 3, stage: 1,
    text: "What compliment would stay with you for days?",
    options: [
      { label: "A", text: "\"I finally understood something that had been vague to me for years.\"", type: "sage" },
      { label: "B", text: "\"Because of you, this became simple, organized, and possible to execute.\"", type: "builder" },
      { label: "C", text: "\"What you created moved something in me. It felt real.\"", type: "creator" },
      { label: "D", text: "\"With you I felt I wasn't alone and that I could speak honestly.\"", type: "connector" },
      { label: "E", text: "\"You saw before everyone else where this was going, and had the courage to move.\"", type: "hunter" },
    ]
  },
  {
    id: 4, stage: 1,
    text: "What feels like success without feeling fake?",
    options: [
      { label: "A", text: "Being recognized for clarity, depth, and language that people keep coming back to.", type: "sage" },
      { label: "B", text: "Holding a useful system that runs even when I'm not pushing hard.", type: "builder" },
      { label: "C", text: "Building an audience that connects to my personal voice — not just my tips.", type: "creator" },
      { label: "D", text: "Creating a space that people trust and genuinely want to return to.", type: "connector" },
      { label: "E", text: "Earning through smart movement, good timing, and reading opportunity.", type: "hunter" },
    ]
  },
  {
    id: 5, stage: 1,
    text: "When you're at your best, what becomes easier for others?",
    options: [
      { label: "A", text: "Understanding what's actually happening — and what the logical next step is.", type: "sage" },
      { label: "B", text: "Acting within clear order instead of drowning in details.", type: "builder" },
      { label: "C", text: "Feeling excitement, courage, or connection to what they want to create.", type: "creator" },
      { label: "D", text: "Opening up, feeling trusted, and daring to be honest.", type: "connector" },
      { label: "E", text: "Seeing a window for action and stopping getting stuck in discussions.", type: "hunter" },
    ]
  },
  {
    id: 6, stage: 1,
    text: "What do you protect when you pull back?",
    options: [
      { label: "A", text: "My mental quiet — and the need to understand before I move.", type: "sage" },
      { label: "B", text: "My sense of control — and the desire for things not to fall apart.", type: "builder" },
      { label: "C", text: "My creative pulse — keeping it from becoming a heavy obligation.", type: "creator" },
      { label: "D", text: "My emotional boundaries — people can drain me if I let them.", type: "connector" },
      { label: "E", text: "My freedom to choose a different direction if I feel the window has shifted.", type: "hunter" },
    ]
  },
  {
    id: 7, stage: 1,
    text: "Where do people usually miss your value?",
    options: [
      { label: "A", text: "They see me thinking a lot, but don't see how much clarity it actually produces.", type: "sage" },
      { label: "B", text: "They see me organizing things, but don't understand how much energy and money that saves.", type: "builder" },
      { label: "C", text: "They see emotion or style, but not the ability to pull real sustained attention.", type: "creator" },
      { label: "D", text: "They see me listening, but don't grasp how much trust that quietly builds.", type: "connector" },
      { label: "E", text: "They see me moving fast, but miss the sense for timing underneath it.", type: "hunter" },
    ]
  },
  {
    id: 8, stage: 1,
    text: "Which version of yourself do you trust most?",
    options: [
      { label: "A", text: "The one that reads the pattern before reacting.", type: "sage" },
      { label: "B", text: "The one that builds a process instead of panicking at the mess.", type: "builder" },
      { label: "C", text: "The one that dares to say something alive and unengineered.", type: "creator" },
      { label: "D", text: "The one that feels people without losing itself.", type: "connector" },
      { label: "E", text: "The one that spots an opening and moves without waiting for full approval.", type: "hunter" },
    ]
  },

  // ── Stage 2: Repeating Patterns (8 questions) ────────────

  {
    id: 9, stage: 2,
    text: "A good idea appears. What usually happens after the first excitement?",
    options: [
      { label: "A", text: "I keep researching until action gradually moves further away.", type: "sage" },
      { label: "B", text: "I build too much around it before checking if anyone actually wants it.", type: "builder" },
      { label: "C", text: "I tell it well, but struggle to hold it once the spark fades.", type: "creator" },
      { label: "D", text: "I look for someone to believe in it with me before I move forward alone.", type: "connector" },
      { label: "E", text: "I jump fast, then discover I didn't set clear enough limits.", type: "hunter" },
    ]
  },
  {
    id: 10, stage: 2,
    text: "When does your momentum drop?",
    options: [
      { label: "A", text: "When new information arrives and makes me reopen everything I thought was settled.", type: "sage" },
      { label: "B", text: "When there are too many open parts and no clear process to follow.", type: "builder" },
      { label: "C", text: "When the work becomes technical, repetitive, or loses its aliveness.", type: "creator" },
      { label: "D", text: "When I feel unseen, unsupported, or too alone in it.", type: "connector" },
      { label: "E", text: "When a new option appears that seems sharper than what I'm currently in.", type: "hunter" },
    ]
  },
  {
    id: 11, stage: 2,
    text: "What task do you delay the longest?",
    options: [
      { label: "A", text: "One that will expose whether I truly understand enough.", type: "sage" },
      { label: "B", text: "One that requires releasing an imperfect version.", type: "builder" },
      { label: "C", text: "One that requires repeating the same message after the excitement is gone.", type: "creator" },
      { label: "D", text: "One that requires asking for something directly from another person.", type: "connector" },
      { label: "E", text: "One that closes options and forces me to commit to one path.", type: "hunter" },
    ]
  },
  {
    id: 12, stage: 2,
    text: "What makes you actually finish something hard?",
    options: [
      { label: "A", text: "A clear reason that still feels right even after the excitement is gone.", type: "sage" },
      { label: "B", text: "A short list of steps and a defined endpoint I can see from here.", type: "builder" },
      { label: "C", text: "A deadline with real emotional meaning — not just external pressure.", type: "creator" },
      { label: "D", text: "A real person waiting on the result who genuinely trusts me.", type: "connector" },
      { label: "E", text: "A narrow window of opportunity I'm unwilling to miss.", type: "hunter" },
    ]
  },
  {
    id: 13, stage: 2,
    text: "What routine can you genuinely live with?",
    options: [
      { label: "A", text: "One with time to think, write, and distill ideas without interruption.", type: "sage" },
      { label: "B", text: "One with simple order, clear metrics, and non-oppressive repetition.", type: "builder" },
      { label: "C", text: "One that allows change, expression, and creative breathing room.", type: "creator" },
      { label: "D", text: "One with real human contact but also boundaries that protect me.", type: "connector" },
      { label: "E", text: "Short, fast, with checkpoints and a sense of constant forward movement.", type: "hunter" },
    ]
  },
  {
    id: 14, stage: 2,
    text: "What feedback lands hardest?",
    options: [
      { label: "A", text: "\"This isn't clear.\" Because I care deeply about being understood.", type: "sage" },
      { label: "B", text: "\"This is too clunky.\" Because I tried to build it properly.", type: "builder" },
      { label: "C", text: "\"This doesn't feel real.\" Because I want to move people, not just explain.", type: "creator" },
      { label: "D", text: "\"I don't trust this.\" Because trust is the foundation I build from.", type: "connector" },
      { label: "E", text: "\"You moved too fast.\" Because I felt the window was already closing.", type: "hunter" },
    ]
  },
  {
    id: 15, stage: 2,
    text: "What do you do when something starts working?",
    options: [
      { label: "A", text: "Re-examine the assumptions instead of just continuing forward.", type: "sage" },
      { label: "B", text: "Try to improve the system before getting the most from the current version.", type: "builder" },
      { label: "C", text: "Start to lose interest because it's become less new.", type: "creator" },
      { label: "D", text: "Worry that people will expect more from me than I can sustainably hold.", type: "connector" },
      { label: "E", text: "Look for the next big move instead of compounding on what's already there.", type: "hunter" },
    ]
  },
  {
    id: 16, stage: 2,
    text: "What old pattern is starting to cost you?",
    options: [
      { label: "A", text: "Knowing enough — then waiting for more certainty before acting.", type: "sage" },
      { label: "B", text: "Adding another layer instead of shipping a first version.", type: "builder" },
      { label: "C", text: "Starting with fire, then disappearing when the work becomes maintenance.", type: "creator" },
      { label: "D", text: "Giving more support than I price or receive in return.", type: "connector" },
      { label: "E", text: "Changing direction just when something starts becoming real.", type: "hunter" },
    ]
  },

  // ── Stage 3: Real Life (8 questions) ─────────────────────

  {
    id: 17, stage: 3,
    text: "You promised yourself you'd start tomorrow. Tomorrow arrives. What actually gets in the way?",
    options: [
      { label: "A", text: "I want to understand a little more before I do something visible.", type: "sage" },
      { label: "B", text: "It still doesn't feel organized enough to begin.", type: "builder" },
      { label: "C", text: "I don't have the energy I felt yesterday.", type: "creator" },
      { label: "D", text: "I need someone to witness the start with me.", type: "connector" },
      { label: "E", text: "A different direction appeared that suddenly seems smarter.", type: "hunter" },
    ]
  },
  {
    id: 18, stage: 3,
    text: "Someone offers to help you. What's your first internal reaction?",
    options: [
      { label: "A", text: "I want to know if they truly understand the problem.", type: "sage" },
      { label: "B", text: "I immediately start thinking about how to divide roles and structure.", type: "builder" },
      { label: "C", text: "I get excited — but worried it will limit my freedom.", type: "creator" },
      { label: "D", text: "Relief. Maybe I won't have to carry everything alone.", type: "connector" },
      { label: "E", text: "I check whether they can open a door or shorten a path for me.", type: "hunter" },
    ]
  },
  {
    id: 19, stage: 3,
    text: "You need to show someone unfinished work. What happens in your body?",
    options: [
      { label: "A", text: "A tightening — I haven't explained it well enough yet.", type: "sage" },
      { label: "B", text: "An urge to fix a few more things before anyone sees it.", type: "builder" },
      { label: "C", text: "Worry that it won't convey the feeling I intended.", type: "creator" },
      { label: "D", text: "I scan for a sign that they're with me and not judging.", type: "connector" },
      { label: "E", text: "Readiness — if it moves a decision forward, let's go.", type: "hunter" },
    ]
  },
  {
    id: 20, stage: 3,
    text: "A new opportunity appears while you're already building something. What tempts you?",
    options: [
      { label: "A", text: "Maybe it explains better what I was trying to understand.", type: "sage" },
      { label: "B", text: "Maybe it has a cleaner structure than what I've been building.", type: "builder" },
      { label: "C", text: "Maybe it will bring back the excitement I've been missing.", type: "creator" },
      { label: "D", text: "Maybe the right people are over there.", type: "connector" },
      { label: "E", text: "Maybe this is the real window — and if I don't move, I'll miss it.", type: "hunter" },
    ]
  },
  {
    id: 21, stage: 3,
    text: "You received an indirect 'no'. What do you do next?",
    options: [
      { label: "A", text: "Try to understand exactly what wasn't clear or precise.", type: "sage" },
      { label: "B", text: "Check what needs to improve in the structure or the offer.", type: "builder" },
      { label: "C", text: "Absorb the hit — then work to reclaim my voice.", type: "creator" },
      { label: "D", text: "Take it more personally than I'd like to admit.", type: "connector" },
      { label: "E", text: "Move quickly to the next option to avoid getting stuck.", type: "hunter" },
    ]
  },
  {
    id: 22, stage: 3,
    text: "You have two hours of clean focus. What do you naturally use them for?",
    options: [
      { label: "A", text: "Distilling an idea, writing, explaining, or understanding something deeply.", type: "sage" },
      { label: "B", text: "Building, organizing, fixing, or creating a repeatable process.", type: "builder" },
      { label: "C", text: "Creating something felt — text, content, a concept, a video.", type: "creator" },
      { label: "D", text: "Talking with the right person, connecting people, or opening a space.", type: "connector" },
      { label: "E", text: "Scanning an opportunity, sending messages, comparing options, moving.", type: "hunter" },
    ]
  },
  {
    id: 23, stage: 3,
    text: "What pressure makes you disappear?",
    options: [
      { label: "A", text: "Pressure to answer quickly before I've truly understood.", type: "sage" },
      { label: "B", text: "Pressure to release something when it's still messy.", type: "builder" },
      { label: "C", text: "Pressure to be present and interesting all the time.", type: "creator" },
      { label: "D", text: "Emotional weight from people who need too much from me.", type: "connector" },
      { label: "E", text: "Pressure to commit to one path too early.", type: "hunter" },
    ]
  },
  {
    id: 24, stage: 3,
    text: "What gives you a sense of quiet power?",
    options: [
      { label: "A", text: "When I understand something others haven't articulated yet.", type: "sage" },
      { label: "B", text: "When I see a system beginning to work without drama.", type: "builder" },
      { label: "C", text: "When I say something true and someone actually feels it.", type: "creator" },
      { label: "D", text: "When trust forms in a room and people start to open up.", type: "connector" },
      { label: "E", text: "When I identify the right timing and move in time.", type: "hunter" },
    ]
  },

  // ── Stage 4: Choice (8 questions) ────────────────────────

  {
    id: 25, stage: 4,
    text: "What uncomfortable sentence might actually be true about you?",
    options: [
      { label: "A", text: "I use depth sometimes to avoid going public.", type: "sage" },
      { label: "B", text: "I use professionalism sometimes to avoid being judged.", type: "builder" },
      { label: "C", text: "I call inconsistency freedom.", type: "creator" },
      { label: "D", text: "I call needing approval connection.", type: "connector" },
      { label: "E", text: "I call escape opportunity.", type: "hunter" },
    ]
  },
  {
    id: 26, stage: 4,
    text: "What are you tired of calling 'not ready'?",
    options: [
      { label: "A", text: "A thought that's already clear enough to test.", type: "sage" },
      { label: "B", text: "A first version people could already use.", type: "builder" },
      { label: "C", text: "A message that only feels ordinary because it's authentic.", type: "creator" },
      { label: "D", text: "A clean ask I keep being afraid to make.", type: "connector" },
      { label: "E", text: "An imperfect but alive direction.", type: "hunter" },
    ]
  },
  {
    id: 27, stage: 4,
    text: "Where do you confuse freedom with avoidance?",
    options: [
      { label: "A", text: "When I stay in learning mode instead of choosing a frame and going public.", type: "sage" },
      { label: "B", text: "When I keep improving instead of letting reality respond.", type: "builder" },
      { label: "C", text: "When I wait for inspiration instead of repeating what already matters.", type: "creator" },
      { label: "D", text: "When I don't ask because I don't want to feel dependent.", type: "connector" },
      { label: "E", text: "When I leave everything open so nothing ever compounds.", type: "hunter" },
    ]
  },
  {
    id: 28, stage: 4,
    text: "What would make your life more honest within 30 days?",
    options: [
      { label: "A", text: "Publishing one explanation before it's perfect.", type: "sage" },
      { label: "B", text: "Shipping a simple version instead of adding another layer.", type: "builder" },
      { label: "C", text: "Repeating one message even after the initial spark is gone.", type: "creator" },
      { label: "D", text: "Asking for help, money, or commitment without apologizing.", type: "connector" },
      { label: "E", text: "Choosing one path and measuring it before jumping elsewhere.", type: "hunter" },
    ]
  },
  {
    id: 29, stage: 4,
    text: "What should you stop adding?",
    options: [
      { label: "A", text: "More explanations before first action.", type: "sage" },
      { label: "B", text: "More features before anyone has used what's already there.", type: "builder" },
      { label: "C", text: "More style before there's a consistent message.", type: "creator" },
      { label: "D", text: "More giving before there's a boundary or a price.", type: "connector" },
      { label: "E", text: "More options before testing one all the way through.", type: "hunter" },
    ]
  },
  {
    id: 30, stage: 4,
    text: "What should you stop waiting for?",
    options: [
      { label: "A", text: "Full certainty.", type: "sage" },
      { label: "B", text: "The perfect version.", type: "builder" },
      { label: "C", text: "A moment when I'll always feel like it.", type: "creator" },
      { label: "D", text: "Everyone's approval.", type: "connector" },
      { label: "E", text: "An opportunity that doesn't require choosing.", type: "hunter" },
    ]
  },
  {
    id: 31, stage: 4,
    text: "What choice would both scare you and relieve you?",
    options: [
      { label: "A", text: "Choosing one idea and explaining it publicly.", type: "sage" },
      { label: "B", text: "Shipping a small version and letting people actually use it.", type: "builder" },
      { label: "C", text: "Being identified with one topic for a defined period.", type: "creator" },
      { label: "D", text: "Inviting people into a paid process.", type: "connector" },
      { label: "E", text: "Committing to one direction for 30 days without escaping.", type: "hunter" },
    ]
  },
  {
    id: 32, stage: 4,
    text: "What do you already know, but keep negotiating with yourself about?",
    options: [
      { label: "A", text: "That I know enough to start testing.", type: "sage" },
      { label: "B", text: "That it doesn't need to be perfect to be useful.", type: "builder" },
      { label: "C", text: "That without consistency, my voice won't compound.", type: "creator" },
      { label: "D", text: "That trust won't become income if I don't ask.", type: "connector" },
      { label: "E", text: "That freedom comes from choosing — not from more options.", type: "hunter" },
    ]
  },

  // ── Stage 5: Money Direction (16 questions) ───────────────

  {
    id: 33, stage: 5,
    text: "Which online path feels least fake to you?",
    options: [
      { label: "A", text: "Explaining, teaching, writing, or mapping a problem people genuinely feel.", type: "sage" },
      { label: "B", text: "Building a tool, template, or system that saves real time and pain.", type: "builder" },
      { label: "C", text: "Creating content or experiences around a personal voice people recognize.", type: "creator" },
      { label: "D", text: "Leading a group, community, or process built on trust.", type: "connector" },
      { label: "E", text: "Testing market gaps, leads, affiliate plays, or opportunities fast.", type: "hunter" },
    ]
  },
  {
    id: 34, stage: 5,
    text: "What kind of first offer would make you feel proud to sell?",
    options: [
      { label: "A", text: "A diagnostic, map, guide, or session that creates immediate clarity.", type: "sage" },
      { label: "B", text: "A tool or process that saves someone real work, confusion, or mistakes.", type: "builder" },
      { label: "C", text: "A workshop, content product, or experience that feels personal and unreplicable.", type: "creator" },
      { label: "D", text: "A guided process where people genuinely feel held and cared for.", type: "connector" },
      { label: "E", text: "Access to an opportunity, a lead list, market research, or a fast test.", type: "hunter" },
    ]
  },
  {
    id: 35, stage: 5,
    text: "Who is the first buyer you could serve best?",
    options: [
      { label: "A", text: "Someone confused who needs clarity — a map to get unstuck.", type: "sage" },
      { label: "B", text: "Someone overwhelmed who needs one clear tool to start moving.", type: "builder" },
      { label: "C", text: "Someone looking for inspiration, voice, or identity they can connect with.", type: "creator" },
      { label: "D", text: "Someone who needs trust, guidance, and the feeling of not being alone.", type: "connector" },
      { label: "E", text: "Someone who wants to spot an opportunity and move faster.", type: "hunter" },
    ]
  },
  {
    id: 36, stage: 5,
    text: "What kind of asset could you genuinely maintain for years?",
    options: [
      { label: "A", text: "A knowledge body: articles, maps, guides, research, or a newsletter.", type: "sage" },
      { label: "B", text: "A library of templates, tools, processes, or automations.", type: "builder" },
      { label: "C", text: "An audience built around an emotional theme, personal style, or ongoing story.", type: "creator" },
      { label: "D", text: "A community, circle, or recurring guided process.", type: "connector" },
      { label: "E", text: "A lead engine, distribution system, deals flow, or opportunity research.", type: "hunter" },
    ]
  },
  {
    id: 37, stage: 5,
    text: "What path is better not to start from?",
    options: [
      { label: "A", text: "One that demands infinite certainty before every move.", type: "sage" },
      { label: "B", text: "One where I'll build for months before anyone pays or uses anything.", type: "builder" },
      { label: "C", text: "One that forces me to perform publicly every single day without recovery.", type: "creator" },
      { label: "D", text: "One where everyone receives my emotional energy at no cost or boundary.", type: "connector" },
      { label: "E", text: "One that turns every new idea into a fresh start.", type: "hunter" },
    ]
  },
  {
    id: 38, stage: 5,
    text: "If money came through content, what kind wouldn't drain you?",
    options: [
      { label: "A", text: "Content that explains in depth and distills real confusion.", type: "sage" },
      { label: "B", text: "Content that shows a process, tool, before-and-after, or method.", type: "builder" },
      { label: "C", text: "Personal, alive content with a clear voice and authentic emotion.", type: "creator" },
      { label: "D", text: "Content that creates dialogue, trust, and a sense of being together.", type: "connector" },
      { label: "E", text: "Content that identifies trends, opportunities, or moves in real time.", type: "hunter" },
    ]
  },
  {
    id: 39, stage: 5,
    text: "If money came through investing, which role would fit you?",
    options: [
      { label: "A", text: "Researcher who distills complex ideas into a clear thesis.", type: "sage" },
      { label: "B", text: "Process builder who creates consistent rules, tracking, and discipline.", type: "builder" },
      { label: "C", text: "Public educator who turns learning into accessible, engaging content.", type: "creator" },
      { label: "D", text: "Coach who helps others stay calm and not act from fear.", type: "connector" },
      { label: "E", text: "Signal reader who moves only with strict rules and risk management.", type: "hunter" },
    ]
  },
  {
    id: 40, stage: 5,
    text: "What is your first real money move for the next 30 days?",
    options: [
      { label: "A", text: "Turn one real confusion into a small paid knowledge asset.", type: "sage" },
      { label: "B", text: "Build one useful tool or template — then sell it before improving it.", type: "builder" },
      { label: "C", text: "Publish one topic consistently and attach a simple offer to it.", type: "creator" },
      { label: "D", text: "Invite 10 people into a small paid pilot.", type: "connector" },
      { label: "E", text: "Test one narrow opportunity with a target, rules, and measurement.", type: "hunter" },
    ]
  },
  {
    id: 41, stage: 5,
    text: "What sign would show you that you're on the right path?",
    options: [
      { label: "A", text: "People say they understand themselves or the problem better.", type: "sage" },
      { label: "B", text: "People use what I built and come back to it.", type: "builder" },
      { label: "C", text: "People respond to my voice as if it says something they'd been feeling.", type: "creator" },
      { label: "D", text: "People stay in touch because real trust was built.", type: "connector" },
      { label: "E", text: "People get a signal or opening from me that they couldn't have seen alone.", type: "hunter" },
    ]
  },
  {
    id: 42, stage: 5,
    text: "What would be a warning sign you're on the wrong path?",
    options: [
      { label: "A", text: "I keep learning but nothing ever goes out.", type: "sage" },
      { label: "B", text: "I keep building but no real person is actually using any of it.", type: "builder" },
      { label: "C", text: "I have to perform publicly every day and I'm running on empty.", type: "creator" },
      { label: "D", text: "I'm an emotional container for others with no boundaries and no price.", type: "connector" },
      { label: "E", text: "I keep jumping between opportunities and nothing compounds.", type: "hunter" },
    ]
  },
  {
    id: 43, stage: 5,
    text: "What type of passive income makes the most sense to start building?",
    options: [
      { label: "A", text: "A knowledge asset that can be sold again and again.", type: "sage" },
      { label: "B", text: "A tool, template, or system people use independently.", type: "builder" },
      { label: "C", text: "A content product or audience built around a recognized voice.", type: "creator" },
      { label: "D", text: "A community or subscription with ongoing value.", type: "connector" },
      { label: "E", text: "A lead engine, distribution, affiliate, or opportunity research system.", type: "hunter" },
    ]
  },
  {
    id: 44, stage: 5,
    text: "What market would be most natural for you to understand?",
    options: [
      { label: "A", text: "One where people are confused and need good explanations.", type: "sage" },
      { label: "B", text: "One where people are overwhelmed and need practical solutions.", type: "builder" },
      { label: "C", text: "One where people seek a voice, inspiration, or identity.", type: "creator" },
      { label: "D", text: "One where people need trust, belonging, and guidance.", type: "connector" },
      { label: "E", text: "One with a gap, trend, or opportunity that can be tested quickly.", type: "hunter" },
    ]
  },
  {
    id: 45, stage: 5,
    text: "If you had to choose only one channel for the next month, what would you choose?",
    options: [
      { label: "A", text: "Deep writing: a post, newsletter, guide, or article.", type: "sage" },
      { label: "B", text: "Building one useful thing and presenting it to relevant people.", type: "builder" },
      { label: "C", text: "Video, story, or personal-voice content with a clear theme.", type: "creator" },
      { label: "D", text: "Conversations with people and an invitation into a small group or process.", type: "connector" },
      { label: "E", text: "Fast market test: messages, offers, leads, or opportunity research.", type: "hunter" },
    ]
  },
  {
    id: 46, stage: 5,
    text: "What's the most honest first product to test?",
    options: [
      { label: "A", text: "A clarity map or short paid diagnostic.", type: "sage" },
      { label: "B", text: "A template or tool with a clear, tangible result.", type: "builder" },
      { label: "C", text: "A workshop or content product built around something that feels alive.", type: "creator" },
      { label: "D", text: "A small paid circle or guided group process.", type: "connector" },
      { label: "E", text: "An opportunity list, lead research, or market gap test.", type: "hunter" },
    ]
  },
  {
    id: 47, stage: 5,
    text: "What role is best for you to take at the start?",
    options: [
      { label: "A", text: "The Clarifier — the one who explains and distills.", type: "sage" },
      { label: "B", text: "The Builder — the one who turns ideas into working systems.", type: "builder" },
      { label: "C", text: "The Voice — the one who attracts through authentic expression.", type: "creator" },
      { label: "D", text: "The Connector — the one who holds trust and people.", type: "connector" },
      { label: "E", text: "The Scout — the one who finds openings and runs the tests.", type: "hunter" },
    ]
  },
  {
    id: 48, stage: 5,
    text: "What's the most honest sentence to start from?",
    options: [
      { label: "A", text: "I don't need to know everything — I need to explain one thing well.", type: "sage" },
      { label: "B", text: "I don't need to build an empire — I need to build one useful thing.", type: "builder" },
      { label: "C", text: "I don't need to be perfect — I need to be alive and consistent.", type: "creator" },
      { label: "D", text: "I don't need to save everyone — I need to offer a real space with a real boundary.", type: "connector" },
      { label: "E", text: "I don't need to chase everything — I need to test one opportunity properly.", type: "hunter" },
    ]
  },

];
