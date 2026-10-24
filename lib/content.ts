// All copy lives here. Edit this file to rebrand the whole page.

export const BRAND = {
  name: "Chatterbox English",
  short: "Chatterbox",
  tutor: "Chris",
  email: "hello@chatterbox-english.com",
  whatsappLink: "https://wa.me/10000000000",
  whatsappLabel: "+1 000 000 0000",
};

export const NAV = [
  { label: "Who it's for", href: "#goals" },
  { label: "How it works", href: "#how" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const GOALS = [
  {
    id: "work",
    label: "Work and interviews",
    headline: "Sound confident in meetings, emails and interviews.",
    blurb:
      "We practise the conversations you actually have at work: presenting, negotiating, and small talk by the coffee machine.",
    session: [
      "Role-play a real interview or stand-up",
      "Rewrite your emails so they sound clear and polite",
      "Learn the phrases your industry uses every day",
    ],
    before: "I am agree with your proposal.",
    after: "I agree with your proposal.",
  },
  {
    id: "exams",
    label: "IELTS and TOEFL",
    headline: "Know exactly what the examiner wants.",
    blurb:
      "Timed practice, honest scoring and a study plan built around your test date, so nothing on exam day is a surprise.",
    session: [
      "Timed speaking and writing practice",
      "Feedback on your band score, task by task",
      "A weekly plan that fits your test date",
    ],
    before: "The graph show a increase.",
    after: "The graph shows an increase.",
  },
  {
    id: "travel",
    label: "Travel and daily life",
    headline: "Handle the airport, the landlord and the dinner party.",
    blurb:
      "Real situations, real speed. You practise ordering, asking, complaining and making friends until it feels natural.",
    session: [
      "Practise real situations: ordering, asking, solving problems",
      "Understand fast, natural speech",
      "Build the small talk that turns strangers into friends",
    ],
    before: "Where is toilet?",
    after: "Excuse me, where is the restroom?",
  },
  {
    id: "kids",
    label: "Kids and teens",
    headline: "Lessons they ask to join.",
    blurb:
      "Games, stories and music make speaking feel like play. Parents get a short progress note every month.",
    session: [
      "Play-based speaking practice",
      "Monthly progress notes for parents",
      "Homework help and school exam prep",
    ],
    before: "She don't like apples.",
    after: "She doesn't like apples.",
  },
];

export const STEPS = [
  {
    title: "Book a free lesson",
    text: "Pick a time that suits you. We chat for 25 minutes to find your level and your goals.",
  },
  {
    title: "Get your learning plan",
    text: "Within a day you get a simple plan: what to practise, how often, and what progress to expect.",
  },
  {
    title: "Start speaking",
    text: "Live one-to-one lessons, with written notes after every session so nothing gets lost.",
  },
];

// Sample testimonials. Replace with real student stories before launch.
export const STORIES = [
  {
    name: "Priya S.",
    role: "Product manager",
    before: "I have 5 years of experience in handling the team.",
    after: "I have five years of experience leading a team.",
    quote:
      "I got the job offer six weeks in. Every lesson used the questions I'd really be asked.",
  },
  {
    name: "Mateo R.",
    role: "IELTS student",
    before: "Technology is good but also it have problems.",
    after: "Technology has benefits, but it also brings problems.",
    quote:
      "My speaking score went from 6.0 to 7.5. The feedback was specific, never vague.",
  },
  {
    name: "Hana K.",
    role: "Moved abroad",
    before: "I want to book a table for four person.",
    after: "Could I book a table for four, please?",
    quote:
      "I stopped rehearsing every sentence in my head before I spoke. That changed everything.",
  },
];

// Sample prices. Replace with your own.
export const PLANS = [
  {
    name: "Free trial lesson",
    price: "Free",
    unit: "25 minutes",
    features: [
      "Level check",
      "Goal-setting chat",
      "Your personal learning plan",
    ],
    cta: "Book my free lesson",
    featured: false,
  },
  {
    name: "4-lesson pack",
    price: "$90",
    unit: "4 lessons, 50 minutes each",
    features: [
      "Live one-to-one lessons",
      "Written notes after each lesson",
      "Chat support between lessons",
    ],
    cta: "Choose the 4-lesson pack",
    featured: false,
  },
  {
    name: "Monthly plan",
    price: "$160",
    unit: "per month, 8 lessons",
    features: [
      "Two lessons every week",
      "Homework with personal feedback",
      "Monthly progress review",
      "Pause or cancel any time",
    ],
    cta: "Choose the monthly plan",
    featured: true,
  },
];

export const FAQS = [
  {
    q: "What if I'm a complete beginner?",
    a: "That's fine. Lessons start exactly where you are, with simple English and lots of patience. Many students begin at level A1.",
  },
  {
    q: "How does the free trial lesson work?",
    a: "You book a 25-minute video call. We talk about your goals, check your level and try a short practice. There is no payment and no card needed.",
  },
  {
    q: "Which tools do I need?",
    a: "A phone, tablet or computer with a camera and a stable internet connection. We use Zoom or Google Meet, whichever you prefer.",
  },
  {
    q: "Can I change the time of a lesson?",
    a: "Yes. Tell us at least 12 hours before and we'll move it for free.",
  },
  {
    q: "Do you teach children?",
    a: "Yes. Kids and teens learn through games and stories, and parents receive a short progress note every month.",
  },
];

export const LEVELS = [
  "Beginner (A1-A2)",
  "Intermediate (B1-B2)",
  "Advanced (C1-C2)",
  "Not sure yet",
];

export const TIMES = ["Mornings", "Afternoons", "Evenings", "Weekends"];
