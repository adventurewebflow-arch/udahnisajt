/**
 * Content for the B2B experience sub-pages (/en/partners/<slug>).
 *
 * One entry drives three things: the card in the Experiences gallery on
 * /en/partners, the hero of the detail page, and its metadata. The array order
 * is the gallery order from design-reference/partneri-prototip.html.
 */

export const PARTNER_IMAGE_BASE = "/images/b2b-partner";

export type Experience = {
  slug: string;
  /** Detail page H1. */
  title: string;
  tagline: string;
  /** Shot brief, kept as the PhotoSlot fallback label. */
  heroLabel: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { h: string; body: string }[];
  facts: { duration: string; difficulty: string; season: string };
  /** Gallery card copy and grid footprint, verbatim from the prototype. */
  card: {
    kicker: string;
    title: string;
    span: "tall-wide" | "wide" | "single";
    variant: "a" | "b";
  };
};

export const partnerExperiences: Experience[] = [
  {
    slug: "trnovacko",
    title: "Trnovačko Wild Camp",
    tagline: "Two nights off the grid on a heart-shaped lake.",
    heroLabel: "Trnovačko wild camp at dawn",
    image: `${PARTNER_IMAGE_BASE}/trnovacko-jezero-maglic.webp`,
    imageAlt: "Wild camp beside Trnovačko Lake under Maglić peak",
    intro:
      "Glacial lake at 1,517m beneath Maglić, on the Bosnia–Montenegro border. Two nights wild camping on the shore, a Maglić summit push, shepherd breakfast, and no phone signal.",
    sections: [
      {
        h: "The route",
        body: "We walk in from Prijevor and set camp on the lake shore for two nights. The second day is the Maglić summit push for whoever wants it, while the rest of the group keeps an easier day around the lake and the surrounding ridges.",
      },
      {
        h: "What your group gets",
        body: "Licensed local guides, camping gear and permits, transfers to and from the trailhead, and a shepherd breakfast at altitude. Meals are prepared on site.",
      },
      {
        h: "Good to know",
        body: "There is no phone signal at the lake and no fixed infrastructure — this is genuine wild camping. Mixed-ability groups work here because the summit day splits with separate guides.",
      },
    ],
    facts: { duration: "3 days / 2 nights", difficulty: "Moderate–hard", season: "Jun–Sep" },
    card: {
      kicker: "Signature — Trnovačko Wild Camp",
      title: "Two nights off the grid on a heart-shaped lake",
      span: "tall-wide",
      variant: "a",
    },
  },
  {
    slug: "tara",
    title: "Tara Rafting",
    tagline: "One of the deepest canyons in Europe.",
    heroLabel: "Tara rafting",
    image: `${PARTNER_IMAGE_BASE}/rafting-tarom.webp`,
    imageAlt: "Rafting the Tara river canyon",
    intro:
      "Half-day on the Tara from Šćepan Polje, class II–IV depending on the season. Works as an add-on to any itinerary and suits mixed-ability groups.",
    sections: [
      {
        h: "The run",
        body: "We put in at Šćepan Polje, where the Tara meets the Piva, and raft the lower canyon. Water level sets the grade — class IV in the spring melt, an easier class II–III through the summer.",
      },
      {
        h: "How it fits an itinerary",
        body: "It is a half day, so it pairs with a morning hike or a transfer day without costing you a night. Skippers and all gear — boat, helmet, wetsuit and life jacket — are ours.",
      },
      {
        h: "Good to know",
        body: "No previous experience needed, which is why it works for mixed-ability groups and families. The Tara canyon is one of the deepest in Europe.",
      },
    ],
    facts: { duration: "Half day", difficulty: "Easy–moderate", season: "May–Oct" },
    card: {
      kicker: "Tara Rafting",
      title: "One of the deepest canyons in Europe",
      span: "single",
      variant: "b",
    },
  },
  {
    slug: "canyoning",
    title: "Hrčavka Canyoning",
    tagline: "Jumps, slides, turquoise pools.",
    heroLabel: "Canyoning Hrčavka",
    image: `${PARTNER_IMAGE_BASE}/kanjon-hrcavka.webp`,
    imageAlt: "Canyoning in the Hrčavka canyon",
    intro:
      "Jumps, natural rock slides and cold turquoise pools in the Hrčavka canyon. All gear and guides provided.",
    sections: [
      {
        h: "The descent",
        body: "We work down the Hrčavka canyon on jumps, natural rock slides and swims through turquoise pools. Every jump has a walk-around, so nobody is pushed into anything.",
      },
      {
        h: "Gear and guiding",
        body: "Wetsuit, helmet, harness and canyoning guides are all provided. No previous experience needed.",
      },
      {
        h: "Good to know",
        body: "A half day at moderate effort. The water stays cold all season — that is part of it.",
      },
    ],
    facts: { duration: "Half day", difficulty: "Moderate", season: "Jun–Sep" },
    card: {
      kicker: "Canyoning",
      title: "Jumps, slides, turquoise pools",
      span: "single",
      variant: "a",
    },
  },
  {
    slug: "maglic",
    title: "Maglić Circular",
    tagline: "The roof of Bosnia, 2,386m.",
    heroLabel: "Maglić summit group",
    image: `${PARTNER_IMAGE_BASE}/prijevor-trnovacko-jezero.webp`,
    imageAlt: "View from Prijevor toward Maglić and Trnovačko Lake",
    intro:
      "The highest peak in Bosnia and Herzegovina. A circular route from Prijevor with exposed sections and views over Trnovačko Lake, Volujak and the whole park.",
    sections: [
      {
        h: "The route",
        body: "A circular from Prijevor to the 2,386m summit and back. There are exposed sections near the top, and the summit looks over Trnovačko Lake, Volujak and the length of the park.",
      },
      {
        h: "Who it suits",
        body: "A hard full day where fitness matters more than technique. The exposure does not suit everyone in a large group, so we run an easier parallel day from the same base and nobody is left waiting.",
      },
      {
        h: "Good to know",
        body: "July to September is the reliable window. Weather on the ridge turns fast, so the guide always keeps a lower alternative in reserve.",
      },
    ],
    facts: { duration: "Full day", difficulty: "Hard", season: "Jul–Sep" },
    card: {
      kicker: "Maglić Circular",
      title: "The roof of Bosnia, 2,386m",
      span: "single",
      variant: "b",
    },
  },
  {
    slug: "perucica",
    title: "Perućica Primeval Forest",
    tagline: "Permit and guide only.",
    heroLabel: "Perućica / Skakavac waterfall",
    image: `${PARTNER_IMAGE_BASE}/kroz_perucicu_staza.webp`,
    imageAlt: "Trail through Perućica primeval forest, Sutjeska",
    intro:
      "One of only two remaining primeval forests in Europe — around 1,400 ha, trees over 300 years old and up to 60m tall, and the 75m Skakavac waterfall. Entered only with a licensed guide, with viewpoints from Prijevor.",
    sections: [
      {
        h: "Access and permits",
        body: "Perućica is a strict reserve. Entry is only with a licensed guide and a permit, which we arrange for your group — this is not somewhere travellers can walk on their own.",
      },
      {
        h: "What you see",
        body: "Around 1,400 hectares of untouched forest, trees over 300 years old and up to 60 metres tall, and the Skakavac waterfall dropping 75 metres. Viewpoints over the whole reserve from Prijevor.",
      },
      {
        h: "Good to know",
        body: "A full day at moderate effort. Numbers inside the reserve are limited, so we confirm group size with the park in advance.",
      },
    ],
    facts: { duration: "Full day", difficulty: "Moderate", season: "Jun–Oct" },
    card: {
      kicker: "Perućica",
      title: "Primeval forest — permit & guide only",
      span: "single",
      variant: "a",
    },
  },
  {
    slug: "zelengora",
    title: "Zelengora Lakes",
    tagline: "Glacial lakes, meadows, wild horses.",
    heroLabel: "Zelengora lakes & meadows",
    image: `${PARTNER_IMAGE_BASE}/zelengora-safari.webp`,
    imageAlt: "Jeep safari on Zelengora mountain, Sutjeska National Park",
    intro:
      "The “Green Mountain” — seven glacial lakes (Gornja and Donja Bara), Dinaric meadows, the Uglješin vrh viewpoint and free-roaming horses. On foot, by jeep, or combined — flexible for mixed groups.",
    sections: [
      {
        h: "How you cover it",
        body: "On foot, by jeep, or the two combined. That flexibility is why Zelengora works for mixed groups — walkers get a full day on the trails while everyone else reaches the same lakes and viewpoints by vehicle.",
      },
      {
        h: "What you see",
        body: "Seven glacial lakes, Gornja and Donja Bara among them, open Dinaric meadows, the viewpoint from Uglješin vrh, and horses roaming free.",
      },
      {
        h: "Good to know",
        body: "A full day, easy to moderate depending on how much of it you walk. Best from June to October.",
      },
    ],
    facts: { duration: "Full day", difficulty: "Easy–moderate", season: "Jun–Oct" },
    card: {
      kicker: "Zelengora",
      title: "Glacial lakes, Dinaric meadows, wild horses",
      span: "wide",
      variant: "b",
    },
  },
];

export function getPartnerExperience(slug: string): Experience | undefined {
  return partnerExperiences.find((experience) => experience.slug === slug);
}
