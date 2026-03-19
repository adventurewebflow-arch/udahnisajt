export interface Adventure {
  id: string;
  slug: string;
  title: string;
  category: "popular" | "premium" | "day-trip";
  location: string;
  shortDescription: string;
  aboutTour: string;
  duration: string;
  difficulty: string;
  price: string;
  groupSize: string;
  dates?: string[];
  discount?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  highlights: string[];
  itinerary: { dayTitle: string; description: string }[];
  includes: string[];
  excludes: string[];
  faqs: { q: string; a: string }[];
}

export const adventuresEN: Adventure[] = [
  {
    id: "1",
    slug: "kampovanje-trnovacko-jezero-maglic",
    title: "Camping at Trnovačko Lake with ascent to Maglić",
    category: "popular",
    location: "Sutjeska NP / Trnovačko Lake / Maglić",
    imagePosition: "center 75%",
    shortDescription:
      "An unforgettable adventure combining camping at one of the most beautiful lakes in Montenegro with an ascent to the highest peak of Bosnia and Herzegovina.",
    aboutTour:
      "Camping at Trnovačko Lake and climbing Maglić is a unique mountain experience that combines the silence of a high-altitude camp, powerful nature, and authentic local life. During the tour we visit viewpoints above the Perućica rainforest, pass through traditional katuns where people still live as they did centuries ago, and have breakfast with local hosts.\n\nFor three days we are without signal and electricity, relying on fire, camp, and the mountain around us. Next to the camp there is a small mountain cafe where we can have coffee, tea, beer, or rakija and slowly close the day.",
    duration: "3 days / 2 nights",
    difficulty: "Moderate",
    price: "170€ per person",
    groupSize: "6–16 people",
    discount: "15% discount for groups of 4+ people",
    dates: ["29.-31.05.", "12.-14.06.", "03.-05.07", "31.-02.08.", "14.-16.08.", "21.-23.08.", "04.-06.09."],
    image: "/images/tours/kampovanje-trnovacko/trnovacko-jezero-card.webp",
    imageAlt: "Kampovanje na Trnovačkom jezeru s usponom na Maglić – NP Sutjeska, Trnovačko jezero",
    highlights: [
      "Trnovačko Lake",
      "Ascent to Maglić",
      "Camping",
      "Panoramic views",
      "Authentic katuns below Volujak",
      "Perućica rainforest viewpoints",
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival in Foča and camping at Trnovačko Lake",
        description:
          "Group meeting is at 12:30 in Foča. We recommend arriving 20–30 minutes early for introductions, gear check, and a short briefing. At 13:00 we leave by off-road vehicles toward Prijevor, the starting point of the hike.\n\nThe drive takes around 1.5 hours, followed by an easy hike to Trnovačko Lake. Upon arrival we set up camp and spend the evening relaxing and enjoying the mountain atmosphere.",
      },
      {
        dayTitle: "Day 2 — Ascent to Maglić",
        description:
          "After breakfast and preparation we begin the ascent toward Maglić. The climb takes around 4 hours from about 1,520m to 2,386m. Terrain is more demanding with steeper sections, but we move at a controlled pace with breaks.\n\nParticipants who do not wish to climb can stay at Trnovačko Lake and enjoy a relaxed day with walking, swimming, and photos.",
      },
      {
        dayTitle: "Day 3 — Katuns, Perućica viewpoints, return to Foča",
        description:
          "In the morning we pack camp and walk to nearby katuns where local hosts welcome us for breakfast. After that we return toward Prijevor and continue to Foča, with stops at Perućica viewpoints for photos.",
      },
    ],
    includes: [
      "Licensed guide",
      "Transfer from Foča and return",
      "2 nights of camping",
      "4 meals during the tour (breakfast, lunch pack, dinner, breakfast)",
      "Basic camping equipment (tents, sleeping bags, mats)",
      "Fees for Sutjeska NP and Piva Nature Park",
      "Transport of camping gear to Trnovačko Lake",
    ],
    excludes: ["Personal gear (hiking boots, backpack)", "Additional drinks", "Costs outside the program"],
    faqs: [
      {
        q: "Is special physical fitness required?",
        a: "For staying and camping at Trnovačko Lake, no special fitness is needed. The Maglić ascent requires good basic fitness due to several hours of hiking.",
      },
      {
        q: "What should I bring?",
        a: "Hiking boots, backpack (min. 40L), water (min. 2L), snacks, weather-appropriate clothing, and personal items. We send a detailed list before departure.",
      },
      {
        q: "Will I get additional info before departure?",
        a: "Yes. All participants are added to a WhatsApp group a few days before departure with exact meeting details, schedule, equipment list, weather forecast, and guide instructions.",
      },
      {
        q: "What if weather is bad?",
        a: "Mountain weather can change quickly. Safety is our priority and the guide may adjust the plan, postpone the ascent, or provide an alternative route.",
      },
    ],
  },
  {
    id: "2",
    slug: "kampovanje-zelengora-bregoč-jeep-safari",
    title: "Camping on Zelengora with ascent to Bregoč + Jeep safari",
    category: "popular",
    location: "Sutjeska NP / Zelengora",
    imagePosition: "center 70%",
    shortDescription:
      "A combined tour that connects hiking, camping, and an adventurous jeep safari across beautiful Dinaric meadows.",
    aboutTour:
      "This is a three-day stay in the heart of the mountain without rush or pressure. The tour combines jeep safari, hiking, and lakeside camping, with enough time for rest, swimming, and enjoying the landscapes Zelengora is known for.",
    duration: "3 days / 2 nights",
    difficulty: "Easy-Moderate",
    price: "160€ per person",
    groupSize: "6–16 people",
    dates: ["05.-07.06.", "07.-09.08."],
    image: "/images/tours/zelengora/zelengora-kampovanje-card.webp",
    imageAlt: "Kampovanje na Zelengori sa usponom na Bregoč i Jeep safari – NP Sutjeska, Zelengora",
    highlights: [
      "Orlovačko Lake",
      "Bregoč (highest peak of Zelengora)",
      "Jeep safari to Štirinsko Lake",
      "Camping",
      "Dinaric meadows",
      "Camping equipment provided",
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival and camping near Orlovačko Lake",
        description:
          "Meeting in Foča around 14:00, then off-road transfer to Zelengora. We set up camp near Orlovačko Lake and spend the rest of the day with easy walks and relaxed social time.",
      },
      {
        dayTitle: "Day 2 — Ascent to Bregoč",
        description:
          "After breakfast we hike to Bregoč, the highest peak of Zelengora. The ascent takes about three hours with panoramic views. Lunch pack is provided, and after returning to camp there is free time for swimming and evening gathering.",
      },
      {
        dayTitle: "Day 3 — Jeep safari and return",
        description:
          "After breakfast and camp packing we do a jeep safari to panoramic points and short hike to Štirinsko Lake. After the tour we return to Foča in the early afternoon.",
      },
    ],
    includes: ["Guide", "Transfer from Foča and return", "Jeep safari transfer", "2 nights of camping", "4 meals", "Camping gear", "Fees"],
    excludes: ["Personal gear", "Additional drinks", "Costs outside the program"],
    faqs: [
      {
        q: "Is the tour suitable for beginners?",
        a: "The tour is for participants with moderate fitness. The Bregoč ascent is not technical but includes several hours of walking.",
      },
      {
        q: "Will I get information before departure?",
        a: "Yes, all participants are added to a WhatsApp group with meeting point, schedule, equipment list, weather forecast, and guide instructions.",
      },
      {
        q: "What if weather is bad?",
        a: "Safety is the priority. In bad weather, the guide may adjust activity order or modify parts of the program.",
      },
    ],
  },
  {
    id: "3",
    slug: "rafting-tarom-na-nas-nacin",
    title: "Tara Rafting — our way",
    category: "popular",
    location: "Tara River / Foča",
    shortDescription: "A unique rafting adventure through Tara canyon with extra activities and unforgettable moments.",
    aboutTour:
      "This tour takes you through the spectacular Tara River canyon and combines rafting adrenaline with nature and great group energy. Everything is organized so you can just enjoy.",
    duration: "3 days / 2 nights",
    difficulty: "Easy",
    price: "On request",
    groupSize: "6–16 people",
    dates: ["26.-28.06."],
    image: "/images/tours/rafting-tara/rafting-hero-card.webp",
    imageAlt: "Rafting Tarom kroz kanjon – brzaci, rijeka i priroda",
    highlights: ["25 km of rafting", "Swimming and jumps", "River lunch", "Evening music", "Options with hiking/zipline/jeep safari"],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival to camp and evening socializing",
        description: "Participants arrive directly to the rafting camp. After check-in, dinner and relaxed socializing follow. Overnight in camp.",
      },
      {
        dayTitle: "Day 2 — Rafting adventure",
        description:
          "After breakfast we collect full rafting equipment and have a safety briefing. Then we move to the start point. The Tara descent lasts all day with breaks for rest, swimming, and photos. River lunch is included.",
      },
      {
        dayTitle: "Day 3 — Breakfast and departure",
        description: "Breakfast in camp, free time, packing, and departure.",
      },
    ],
    includes: ["Licensed skipper", "GoPro recording", "Rafting equipment", "2 nights", "All meals during the tour", "Tourist taxes"],
    excludes: ["Personal gear (swimsuit, shorts)", "Additional activities", "Additional drinks", "Costs outside the program"],
    faqs: [
      { q: "Do I need rafting experience?", a: "No, this tour is suitable for beginners as well." },
      { q: "Will I receive all information before arrival?", a: "Yes, all participants receive full logistics in a WhatsApp group before arrival." },
      { q: "Where is lunch during rafting?", a: "Lunch is served on the river during the descent." },
      { q: "Why is the price 'On request'?", a: "It depends on group size and accommodation setup, so we provide the best custom offer." },
    ],
  },
  {
    id: "4",
    slug: "porodicni-vikend-tjentiste-zelengora",
    title: "Family weekend — Tjentište and Zelengora",
    category: "popular",
    location: "Tjentište / Zelengora",
    shortDescription: "A specially designed family tour that lets all family members enjoy nature and learn about the area.",
    aboutTour:
      "A family-focused tour through Tjentište and Zelengora with educational walks, activities for children, and nature time for all generations.",
    duration: "3 days / 2 nights",
    difficulty: "Easy",
    price: "On request",
    groupSize: "4–30 people",
    dates: ["14.03.2026"],
    image: "/images/tours/porodicni-vikend-tjentiste-zelengora/porodicni-vikend-zelengora-tjentiste1.webp",
    imageAlt: "Porodični vikend na Tjentištu i Zelengori – priroda i šetnje",
    highlights: ["Educational walks", "Family relaxation", "Tjentište monument", "Zelengora lakes"],
    itinerary: [
      { dayTitle: "Day 1 — Arrival and introduction to Tjentište", description: "Arrival in the afternoon, light walk in the Valley of Heroes, and relaxed family evening." },
      { dayTitle: "Day 2 — Zelengora and lakes (easy family day)", description: "Easy day trip with short walks and plenty of rest, designed for children and families." },
      { dayTitle: "Day 3 — Breakfast and end of the tour", description: "Breakfast and official end of program, with optional extra free time at Tjentište." },
    ],
    includes: ["Licensed guide", "Transfer from Tjentište and return", "2 nights", "3 meals", "All fees"],
    excludes: ["Personal gear", "Additional drinks", "Costs outside the program"],
    faqs: [
      { q: "For what ages is this tour suitable?", a: "Designed for children 4–14, but suitable for all family members." },
      { q: "Is it safe for children?", a: "Yes. Terrain is easy and activities are supervised." },
      { q: "How does food work?", a: "Breakfasts and dinners are included. Program is light and family-adapted." },
      { q: "How does child pricing work?", a: "Pricing depends on number of adults and children in your group." },
    ],
  },
  {
    id: "POP-01MAY-01",
    slug: "prvomajska-avantura",
    title: "MAY DAY ADVENTURE",
    category: "popular",
    location: "Tjentište / Sutjeska NP / Zelengora",
    image: "/images/tours/premium/ekipa-prvi-maj.webp",
    imageAlt: "Prvomajska avantura na Tjentištu – bungalovi, ture po Sutjesci i izlet na Zelengoru",
    imagePosition: "center 55%",
    shortDescription:
      "May Day package in bungalows at Tjentište: accommodation, food, park tickets, and two big adventures — Saturday Trnovačko Lake, Sunday easy Zelengora route.",
    aboutTour:
      "This three-day adventure combines nature, easy movement, and authentic mountain experience without rush. Focus is on being in the landscape and enjoying freedom.",
    duration: "3 days / 2 nights",
    difficulty: "Moderate",
    price: "185€ per person",
    groupSize: "1–100+ people",
    discount: "5+ people - 10% discount\n\n10+ people - 15% discount",
    dates: ["01.05.2026"],
    highlights: [
      "Bungalows at Tjentište (2 nights)",
      "Saturday: Trnovačko Lake",
      "Sunday: Zelengora (Donje and Gornje Bare + Borić viewpoint) — easier route",
      "Lunch packs for tours",
      "Saturday evening social gathering",
      "Tickets: Sutjeska NP + Piva Nature Park",
    ],
    itinerary: [
      { dayTitle: "Day 1 (Friday) — Arrival to Tjentište", description: "Arrival during the day, check-in, easy walk, dinner, and evening socializing." },
      {
        dayTitle: "Day 2 (Saturday) — Trnovačko Lake, viewpoints, and Perućica",
        description:
          "After breakfast we head to Trnovačko Lake. Optional easier and moderate viewpoints are available. In the afternoon we return via panoramic points below Maglić and Perućica viewpoints.",
      },
      { dayTitle: "Day 3 (Sunday) — Zelengora and end of adventure", description: "Easy day in Zelengora area with lakes and viewpoints, then return in the afternoon." },
    ],
    includes: [
      "Bungalow accommodation at Tjentište (2 nights)",
      "Dinner Friday, breakfast + lunch pack Saturday, dinner Saturday, breakfast + lunch pack Sunday",
      "Tickets for Sutjeska NP and Piva Nature Park",
      "Tour organization and guiding",
      "No hidden costs (drinks not included)",
    ],
    excludes: ["Drinks", "Personal expenses outside the program"],
    faqs: [
      { q: "How can I get detailed program and price?", a: "Contact us via Instagram or WhatsApp +387 65 797 200 and we will send the full PDF program." },
      { q: "Is the tour physically demanding?", a: "Designed to be accessible for most participants, with optional moderate sections." },
      { q: "Will we receive instructions before departure?", a: "Yes, all participants are added to a WhatsApp group with full instructions." },
    ],
  },
  {
    id: "5",
    slug: "tura-za-malo-jace-ljude-maglic-trnovacko-rafting",
    title: "For stronger hikers — Maglić, Trnovačko Lake and Tara rafting",
    category: "premium",
    location: "Sutjeska NP / Trnovačko / Maglić / Tara",
    shortDescription:
      "A demanding combined tour with hiking, camping, and rafting for experienced adventurers looking for challenge.",
    aboutTour:
      "This tour is for those who want more than a classic adventure. The Maglić + Trnovačko + Tara combination is physically demanding but very rewarding, with strong landscapes and serious ascents.",
    duration: "3 days / 2 nights",
    difficulty: "Demanding",
    price: "235€",
    groupSize: "max 16",
    image: "/images/tours/premium/top-tura-rafting-tarom-maglic-perucica.webp",
    dates: ["19.-21.06.2026"],
    imageAlt: "Maglić, Trnovačko jezero i rafting Tarom – premium avantura u prirodi",
    highlights: ["Camping at Prijevor", "Maglić ascent", "Descent to Trnovačko", "Tara rafting", "Perućica viewpoints"],
    itinerary: [
      { dayTitle: "Day 1 — Arrival in Foča and camp at Prijevor", description: "Arrival in Foča, transfer to Prijevor, camp setup below Maglić, dinner, and overnight under the stars." },
      {
        dayTitle: "Day 2 — Maglić ascent and Trnovačko Lake",
        description:
          "Main demanding day with circular route to Maglić and descent to Trnovačko Lake for rest and lunch packs, then return to camp.",
      },
      { dayTitle: "Day 3 — Tara rafting and end of adventure", description: "Morning transfer to rafting camp, all-day Tara descent, then tour finish." },
    ],
    includes: [
      "Experienced licensed guide",
      "Transfer from Foča and return",
      "2 nights of camping",
      "All meals during the tour (5 meals)",
      "Rafting equipment",
      "Camping equipment",
      "Tickets for Sutjeska NP and Piva Nature Park",
    ],
    excludes: ["Personal gear (hiking boots, backpack, swimsuit)", "Additional drinks", "Costs outside the program"],
    faqs: [
      { q: "Will we receive detailed information before departure?", a: "Yes, all participants get complete logistics and instructions via WhatsApp group." },
      { q: "Why is the group small?", a: "Smaller groups improve safety, flow, and overall quality on demanding terrain." },
      { q: "Is rafting demanding after mountain days?", a: "No, rafting is technically easier and a perfect contrast after mountain hiking." },
      { q: "What fitness level is required?", a: "Good physical condition and basic mountain experience are required." },
    ],
  },
  {
    id: "P-hrcavka-perucica-01",
    slug: "hrcavka-perucica-kanjoning-prasuma-skakavac",
    title: "Hrčavka canyoning + Perućica rainforest and Skakavac waterfall",
    category: "premium",
    location: "Tjentište / Sutjeska NP / Hrčavka Canyon / Perućica Rainforest",
    image: "/images/tours/premium/kanjoning-prasuma-perucica.webp",
    imageAlt: "Kanjoning Hrčavka i prašuma Perućica do vodopada Skakavac – premium tura u Nacionalnom parku Sutjeska",
    imagePosition: "center 55%",
    shortDescription:
      "Premium weekend package: canyoning in Hrčavka and tour of the Perućica rainforest to Skakavac waterfall, with accommodation at Tjentište and meals included.",
    aboutTour:
      "This adventure combines wild Hrčavka canyon and Perućica rainforest, two very different but equally strong natural units of Sutjeska NP. Dynamic and full of contrast.",
    duration: "3 days / 2 nights",
    difficulty: "Moderate",
    price: "255€ per person",
    groupSize: "8–13 people",
    discount: "4+ people - 10% discount",
    dates: ["10. - 12.07.2026", "28. - 30.08.2026"],
    highlights: [
      "Hrčavka canyoning (longer 5–6h route)",
      "Perućica rainforest",
      "Skakavac waterfall",
      "Accommodation at Tjentište",
      "Evening campfire socializing",
      "Full canyoning equipment included (highest standards)",
    ],
    itinerary: [
      { dayTitle: "Day 1 — Arrival to Tjentište", description: "Arrival, check-in, easy walk through Valley of Heroes, dinner, and relaxed evening." },
      { dayTitle: "Day 2 — Hrčavka canyoning", description: "Breakfast, canyoning activity, return to base, dinner and free time." },
      { dayTitle: "Day 3 — Perućica and Skakavac", description: "Hike through Perućica to Skakavac waterfall with lunch packs, then tour finish." },
    ],
    includes: [
      "Accommodation at Tjentište (2 nights)",
      "Meals according to program",
      "Licensed guide and tour organization",
      "Complete canyoning equipment",
      "Safety briefing and support during activities",
    ],
    excludes: ["Drinks", "Personal gear", "Costs outside the program"],
    faqs: [
      { q: "How demanding is canyoning?", a: "It lasts around six hours and requires solid fitness, but no extreme technical skills." },
      { q: "What canyoning equipment is provided?", a: "Neoprene suit, helmet, vest, and all technical safety gear are included." },
      { q: "Is Perućica hike demanding?", a: "Moderately demanding hiking day, technically simple with proper footwear." },
      { q: "Will we get all info before arrival?", a: "Yes, all details are sent in WhatsApp group before departure." },
    ],
  },
  {
    id: "P-durmitor-01",
    slug: "durmitorski-prsten-via-ferata-piva-prutas-kajk-pivsko-jezero",
    title: "Durmitor ring + Via ferrata Piva + Prutaš ascent + kayaking on Piva Lake",
    category: "premium",
    location: "Durmitor / Piva (via ferrata) / Prutaš",
    image: "/images/tours/durmitor-aranzman/durmitor.webp",
    imageAlt: "Durmitorski prsten, via ferrata Piva i uspon na Prutaš – premium avantura u Crnoj Gori",
    imagePosition: "center 60%",
    shortDescription:
      "A premium tour combining via ferrata, high mountain peaks, and calm lake water into one diverse and unforgettable adventure.",
    aboutTour:
      "A full adventure that combines rock, peaks, and water. Through Via Ferrata Piva, Prutaš ascent, and kayaking on Piva Lake, each day offers a different rhythm and landscape.",
    duration: "3 days / 2 nights",
    difficulty: "Moderate-Demanding",
    price: "On request",
    groupSize: "6–16 people",
    discount: "",
    dates: ["24. - 26.07.2026"],
    highlights: ["Durmitor Ring", "Via ferrata Piva", "Prutaš ascent", "Durmitor viewpoints", "Kayaking on Piva Lake"],
    itinerary: [
      { dayTitle: "Day 1 — Via Ferrata Piva and arrival to Durmitor", description: "Morning meeting in Foča, transfer to ferrata location, safety briefing, ferrata climb, scenic drive, dinner and overnight." },
      { dayTitle: "Day 2 — Prutaš ascent (2,393 m)", description: "Full-day hiking ascent to Prutaš with lunch packs and panoramic views, then return for dinner." },
      { dayTitle: "Day 3 — Kayaking on Piva Lake and return", description: "Morning transfer to lake, 2–3 hours of relaxed kayaking with breaks, then return to Foča." },
    ],
    includes: [
      "Licensed mountain and via ferrata guide",
      "Via ferrata technical equipment",
      "Transfers during program",
      "Accommodation (2 nights)",
      "Meals by arrangement",
      "Kayak rental",
      "Tour organization",
    ],
    excludes: ["Personal gear (hiking boots, backpack)", "Drinks", "Costs outside the program"],
    faqs: [
      { q: "Do I need via ferrata experience?", a: "Basic fitness is recommended; beginners can join with guide supervision." },
      { q: "Is technical equipment included?", a: "Yes, helmet, harness, and ferrata set are included." },
      { q: "How demanding is this tour?", a: "Moderate to demanding, combining ferrata, mountain ascent, and kayaking." },
      { q: "How to book?", a: "Contact us with your preferred date; group bookings are arranged on request." },
    ],
  },
  {
    id: "6",
    slug: "zelengora-uspon-bregoč",
    title: "Zelengora — ascent to Bregoč",
    category: "day-trip",
    location: "Sutjeska NP — Zelengora (Bregoč)",
    imagePosition: "center 70%",
    shortDescription: "A day tour to the highest peak of Zelengora with beautiful panoramic mountain views.",
    aboutTour:
      "A full-day hiking tour to Bregoč, the highest peak of Zelengora, with one of the most beautiful panoramas in Bosnia and Herzegovina.",
    duration: "1 day",
    difficulty: "Easy-Moderate",
    price: "70€",
    groupSize: "4–50 people",
    image: "/images/tours/day-trips/zelengora-bregoc.webp",
    highlights: ["Bregoč (2017m)", "Panoramic viewpoints", "Zelengora lakes", "Dinaric meadows"],
    itinerary: [{ dayTitle: "Day trip", description: "Transfer to Zelengora, ascent to Bregoč with breaks, summit rest and lunch pack, then return in the afternoon." }],
    includes: ["Licensed guide", "Transfer from Foča and return", "Lunch pack", "Fees"],
    excludes: ["Personal gear", "Additional drinks", "Costs outside the program"],
    faqs: [
      { q: "How long does the ascent take?", a: "Around 2 hours depending on group fitness, descent about 1.5 hours." },
      { q: "Is special equipment required?", a: "No special equipment, comfortable shoes and a small backpack are enough." },
      { q: "How to book?", a: "Contact us with desired date. Tours are arranged for groups of minimum 4 people." },
    ],
  },
  {
    id: "7",
    slug: "zelengora-jezera-vidikovci",
    title: "Zelengora — lakes and viewpoints",
    category: "day-trip",
    location: "Sutjeska NP — Zelengora",
    imagePosition: "center 70%",
    shortDescription: "An easy day walk through the most beautiful Zelengora lakes with excellent viewpoints and photo opportunities.",
    aboutTour:
      "Ideal for those who want an easier day in nature without big ascents, focused on open landscapes, mountain lakes, and viewpoints.",
    duration: "1 day",
    difficulty: "Easy",
    price: "70€",
    groupSize: "4–50 people",
    image: "/images/tours/day-trips/zelengora-jezera.webp",
    highlights: ["Donje Bare", "Gornje Bare", "Panoramic viewpoints", "Zelengora viewpoints"],
    itinerary: [{ dayTitle: "Day trip", description: "Visit Orlovačko Lake, Donje Bare and viewpoints; optional short walk to Gornje Bare; return in afternoon." }],
    includes: ["Licensed guide", "Transfer from Foča and return", "Lunch pack", "Fees"],
    excludes: ["Personal gear", "Additional drinks", "Costs outside the program"],
    faqs: [
      { q: "Is the tour beginner-friendly?", a: "Yes, this is an easy route suitable for all ages." },
      { q: "Can we add ascent to Uglješin peak?", a: "Yes, that can be arranged if the group wants it." },
    ],
  },
  {
    id: "8",
    slug: "prasuma-perucica-vodopad-skakavac",
    title: "Perućica rainforest and Skakavac waterfall",
    category: "day-trip",
    location: "Sutjeska NP — Perućica Rainforest",
    imagePosition: "center 70%",
    shortDescription: "A day tour through one of Europe's oldest rainforests with a visit to the impressive Skakavac waterfall.",
    aboutTour:
      "A unique tour through one of Europe's oldest and largest primeval forests. Perućica and Skakavac offer a powerful experience of untouched nature.",
    duration: "1 day",
    difficulty: "Easy",
    price: "90€",
    groupSize: "4–20 people",
    image: "/images/tours/day-trips/perucica-skakavac.webp",
    highlights: ["Perućica rainforest", "Skakavac waterfall", "Educational walk", "Untouched nature"],
    itinerary: [
      {
        dayTitle: "Day trip",
        description:
          "Departure from Foča by off-road vehicles to Perućica entry point. About two-hour walk through forest trails with breaks, then longer stop at Skakavac for lunch pack and photos. Return in afternoon.",
      },
    ],
    includes: ["Licensed guide", "Transfer from Foča and return", "Lunch pack", "Fees", "Educational content"],
    excludes: ["Personal gear", "Costs outside the program"],
    faqs: [
      { q: "What is special about Perućica?", a: "It is one of Europe's oldest primeval forests with trees over 300 years old, crowned by Skakavac waterfall (75m)." },
      { q: "How long is the walk?", a: "The rainforest walk is around 3–4 hours; total tour duration is around 6–7 hours." },
    ],
  },
  {
    id: "9",
    slug: "kanjoning-hrcavka",
    title: "Hrčavka canyoning",
    category: "day-trip",
    location: "Sutjeska NP — Hrčavka canyon",
    shortDescription: "An adrenaline day canyoning adventure through Hrčavka canyon with jumps, swimming, and waterfall descents.",
    aboutTour:
      "Hrčavka canyoning is dynamic and very attractive, moving through water, falls, and narrow passages. Exciting but not extreme.",
    duration: "1 day",
    difficulty: "Moderate",
    price: "130€",
    groupSize: "4–12 people",
    image: "/images/tours/day-trips/kanjoning-hrcavka.webp",
    highlights: ["Canyoning through Hrčavka", "Rock jumps", "Swimming in natural pools", "Waterfall descents"],
    itinerary: [{ dayTitle: "Day trip", description: "Gear handover and briefing, canyon entry and longer route crossing with breaks and lunch pack, return in afternoon." }],
    includes: ["Licensed guide", "Transfer from Foča and return", "Canyoning equipment (vest, helmet, neoprene)", "Lunch packs", "Fees"],
    excludes: ["Personal gear (swimsuit etc.)", "Additional drinks", "Costs outside the program"],
    faqs: [
      { q: "Do I need canyoning experience?", a: "No, but basic fitness and ability to swim are recommended." },
      { q: "Is it safe?", a: "Yes, all activities are supervised by licensed guides with professional equipment." },
      { q: "What should I bring?", a: "Swimsuit, dry clothes for after activity, and sunscreen." },
    ],
  },
  {
    id: "10",
    slug: "trnovacko-jezero",
    title: "Trnovačko Lake",
    category: "day-trip",
    location: "Trnovačko Lake / Sutjeska NP",
    shortDescription: "A day tour to one of the most beautiful lakes in Bosnia and Herzegovina with viewpoints and optional swimming.",
    aboutTour:
      "Trnovačko Lake is one of the most beautiful mountain lakes in the Balkans, known for its shape and surrounding high peaks. Perfect for combining hiking and lakeside time.",
    duration: "1 day",
    difficulty: "Moderate",
    price: "75€",
    groupSize: "4–50 people",
    image: "/images/tours/day-trips/trnovacko-jezero.webp",
    highlights: ["Trnovačko Lake", "Viewpoints", "Swimming in the lake", "Fees", "Enjoying Prijevor", "Perućica viewpoints"],
    itinerary: [{ dayTitle: "Day trip", description: "Off-road transfer to Prijevor, hike to Trnovačko Lake (~1.5h), free time and lunch pack, optional viewpoint walk, return." }],
    includes: ["Licensed guide", "Transfer from Foča and return", "Lunch pack", "Fees in Sutjeska NP and Piva Nature Park"],
    excludes: ["Personal gear", "Additional drinks", "Costs outside the program"],
    faqs: [
      { q: "How long is the walk to the lake?", a: "Around 1.5 hours depending on the group pace." },
      { q: "Can we swim in the lake?", a: "Yes, during summer months the lake is suitable for refreshing swims." },
      { q: "Is there a place for coffee?", a: "Yes, there is a mountain cafe at Trnovačko Lake." },
    ],
  },
  {
    id: "11",
    slug: "maglic-trnovacko-jezero",
    title: "Maglić and Trnovačko Lake",
    category: "day-trip",
    location: "Sutjeska NP / Maglić / Trnovačko Lake",
    shortDescription:
      "A demanding day tour that combines ascent to Bosnia's highest peak with a visit to beautiful Trnovačko Lake.",
    aboutTour:
      "A demanding hiking adventure that combines a strong ascent with the reward of spending time at one of the region's most beautiful mountain lakes.",
    duration: "1 day",
    difficulty: "Demanding",
    price: "95€",
    groupSize: "4–20 people",
    image: "/images/tours/day-trips/maglic-trnovacko.webp",
    highlights: ["Maglić (2386m)", "Trnovačko Lake", "Panoramic views", "Demanding trail"],
    itinerary: [
      {
        dayTitle: "Day trip",
        description:
          "Transfer to Prijevor and hiking ascent. After reaching the summit area we descend toward Trnovačko Lake for longer rest and lunch pack, then return in afternoon.",
      },
    ],
    includes: ["Licensed guide", "Transfer from Foča and return", "Fees in Sutjeska NP and Piva Nature Park", "Lunch pack"],
    excludes: ["Personal gear (hiking boots, backpack, swimsuit, etc.)", "Additional drinks", "Costs outside the program"],
    faqs: [
      { q: "Why is this tour demanding?", a: "It combines a demanding ascent and descent in one day, around 7 hours of total hiking." },
      { q: "Is it suitable for beginners?", a: "No, previous hiking experience and good fitness are recommended." },
      { q: "When does the tour start?", a: "Very early (around 6–7 AM) to ensure enough time for the full route." },
    ],
  },
  {
    id: "12",
    slug: "jeep-safari-zelengora",
    title: "Zelengora Jeep safari",
    category: "day-trip",
    location: "Sutjeska NP — Zelengora",
    shortDescription:
      "A day jeep safari through beautiful Dinaric meadows of Zelengora with viewpoints and photography stops.",
    aboutTour:
      "A relaxed but content-rich tour combining off-road driving with short walks at the best points of Zelengora. Suitable for families and those who prefer less walking.",
    duration: "1 day",
    difficulty: "Easy",
    price: "70€ per person",
    groupSize: "4–16 people",
    image: "/images/tours/day-trips/jeep-safari-zelengora.webp",
    highlights: ["Jeep safari", "Zelengora", "Viewpoints", "Lakes"],
    itinerary: [{ dayTitle: "Day trip", description: "Jeep safari route through Zelengora with stops at lakes and viewpoints, short walks, lunch pack, and afternoon return." }],
    includes: ["Guide", "Tour organization", "Lunch pack", "Fees"],
    excludes: ["Personal expenses"],
    faqs: [{ q: "Is special equipment needed?", a: "No, sneakers and layered clothing are recommended." }],
  },
  {
    id: "13",
    slug: "via-ferata-piva",
    title: "Via ferrata Piva",
    category: "day-trip",
    location: "Piva Nature Park",
    shortDescription:
      "A day via ferrata adventure in Piva Nature Park with panoramic views and a safe guided climb.",
    aboutTour:
      "Via Ferrata Piva is an adrenaline route that allows safe movement on steep attractive rock using cables and footholds. Ideal for those wanting something different and exciting.",
    duration: "1 day",
    difficulty: "Moderate",
    price: "65€ per person",
    groupSize: "4–16 people",
    image: "/images/tours/day-trips/via-ferata-piva.webp",
    highlights: ["Via ferrata", "Piva", "Panoramic views"],
    itinerary: [{ dayTitle: "Day trip", description: "Arrival, gear setup and safety briefing, ferrata route with guide support, lunch break, and afternoon finish." }],
    includes: ["Guide", "Equipment (all required via ferrata gear)", "Lunch pack", "Fees", "Transport"],
    excludes: ["Drinks", "Costs outside the program"],
    faqs: [{ q: "Is it safe for beginners?", a: "Yes, with guide supervision and proper equipment, pace is adapted to the group." }],
  },
];

export function getAdventureENBySlug(slug: string): Adventure | undefined {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return adventuresEN.find((a) => a.slug.trim().toLowerCase() === s);
}

export const popularAdventuresEN = adventuresEN.filter((a) => a.category === "popular");
export const premiumAdventuresEN = adventuresEN.filter((a) => a.category === "premium");
export const dayTripAdventuresEN = adventuresEN.filter((a) => a.category === "day-trip");
