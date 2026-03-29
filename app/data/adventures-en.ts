export interface Adventure {
  id: string;
  slug: string;
  title: string;
  category: "popular" | "premium" | "day-trip" | "multi-day";
  location: string;
  shortDescription: string;
  aboutTour: string;
  duration: string;
  difficulty: string;
  price: string;
  groupSize: string;
  transport?: string;
  dates?: string[];
  discount?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  images?: { src: string; alt: string }[];
  highlights: string[];
  itinerary: { dayTitle: string; description: string }[];
  includes: string[];
  excludes: string[];
  faqs: { q: string; a: string }[];
}

export const adventuresEN: Adventure[] = [
  // POPULAR TOURS
  {
    id: "1",
    slug: "kampovanje-trnovacko-jezero-maglic",
    title: "Camping at Trnovačko Lake with Ascent to Maglić",
    category: "popular",
    location: "Sutjeska NP / Trnovačko Lake / Maglić",
    imagePosition: "center 75%",
    shortDescription: "An unforgettable adventure combining camping at one of the most beautiful lakes in the region with an ascent to the highest peak of Bosnia and Herzegovina.",
    aboutTour: "Camping at Trnovačko Lake and climbing Maglić is a unique mountain experience that combines the silence of a high-altitude camp, powerful nature, and the authentic way of life of the people of this region. During the tour we visit viewpoints above the Perućica rainforest, pass through traditional katuns where people still live as they did 300–400 years ago, and have breakfast with local hosts — freshly fried doughnuts, warm milk and homemade cream.\n\nFor three days we are without signal and electricity, relying on fire, camp and the mountain around us. Next to the camp there is a small mountain café where we can have a coffee, tea, beer or rakija and slowly end the day. Without rushing, with enough time for nature, conversation and a genuine experience of this place — this is a tour for those who want to feel the mountain, not just pass through it.",
    duration: "3 days / 2 nights",
    difficulty: "Moderate",
    price: "170€ per person",
    groupSize: "6–16 people",
    discount: "15% discount for groups of 4+ people",
    dates: [
      "29.-31.05.",
      "12.-14.06.",
      "03.-05.07",
      "31.-02.08.",
      "14.-16.08.",
      "21.-23.08.",
      "04.-06.09."
    ],
    image: "/images/tours/kampovanje-trnovacko/trnovacko-jezero-card.webp",
    imageAlt: "Camping at Trnovačko Lake with ascent to Maglić – Sutjeska NP, Trnovačko Lake",
    highlights: [
      "Trnovačko Lake",
      "Ascent to Maglić",
      "Camping",
      "Panoramic views",
      "Authentic katuns below Volujak",
      "Perućica rainforest viewpoints"
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival in Foča and camping at Trnovačko Lake",
        description: "Group meeting is at 12:30 in Foča. We recommend arriving 20–30 minutes early so we have time for introductions, gear check and a short briefing. At 13:00 we depart by off-road vehicles toward Prijevor, the starting point of the hike.\n\nThe drive takes around one and a half hours, after which we begin an easy mountain hike to Trnovačko Lake. The hike takes approximately 1.5 hours at a comfortable pace, adapted to the group, with breaks as needed.\n\nUpon arrival at Trnovačko Lake we set up camp — tents, sleeping bags and the rest of the gear. The remainder of the day is reserved for rest, socialising and getting to know the group, with free time for a walk around the lake and enjoying the surroundings. The evening is spent at camp, in the peace and quiet of the mountain."
      },
      {
        dayTitle: "Day 2 — Ascent to Maglić",
        description: "Early morning wake-up, as agreed with the guide. After breakfast and gear preparation, we set off toward Maglić. The ascent takes around 4 hours, from a starting elevation of approximately 1,520m to the summit at 2,386m above sea level. The terrain is more demanding with steeper sections and a longer climb, but we move at a safe and controlled pace with breaks for rest and hydration. A lunch pack is provided during the ascent.\n\nParticipants who do not wish or are unable to make the summit have the option of staying at Trnovačko Lake and spending the day with lighter activities — walking, resting, swimming in the lake or taking photos. On our return to camp a warm dinner (goulash) awaits, followed by free time to rest by the fire, talk and reflect on the day at Maglić.\n\nOvernight at camp."
      },
      {
        dayTitle: "Day 3 — Katuns, Perućica and return to Foča",
        description: "In the morning we rise early, pack up the camp (tents, sleeping bags and personal belongings) and take a short 15-minute walk to the nearby katuns, where local hosts welcome us.\n\nAt the hosts we have breakfast — freshly fried doughnuts, homemade cream and warm milk, with stories about life on the mountain and the way people have lived here for centuries.\n\nAfter breakfast we return toward Prijevor, where the off-road vehicles are parked. On the way back to Foča we make stops at viewpoints above the Perućica rainforest, with a short pause for photos.\n\nArrival in Foča is in the early afternoon, at the private vehicles, where the tour ends."
      }
    ],
    includes: [
      "Licensed guide",
      "Transfer from Foča and return",
      "2 nights camping",
      "4 meals during the tour (breakfast, lunch pack, dinner, breakfast)",
      "Basic camping equipment (tents, sleeping bags, mats)",
      "Entry fees for Sutjeska NP and Piva Nature Park",
      "Transport of camping equipment to Trnovačko Lake"
    ],
    excludes: [
      "Personal equipment (hiking boots, backpack)",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Is a special level of fitness required?",
        a: "For the stay and camping at Trnovačko Lake, no particular fitness is required — the approach is moderate and suitable for most participants. The ascent to Maglić, on the other hand, requires good basic fitness, as it involves several hours of uphill and downhill hiking on mountain terrain. The pace is adapted to the group and breaks are taken. Participants who do not wish or are unable to summit can stay at Trnovačko Lake, spending the day walking, swimming, resting and enjoying nature, without any pressure."
      },
      {
        q: "What should I bring?",
        a: "Hiking boots, backpack (min. 40L), water (min. 2L), energy food, clothing for all weather conditions, personal items. We will send a detailed packing list before the tour."
      },
      {
        q: "Will I receive additional information before departure?",
        a: "Yes. All participants will be added to the WhatsApp group for the Trnovačko Lake – Maglić tour a few days before departure. In that group you will receive precise information about the meeting point, schedule, gear list, weather forecast and all important instructions from the guide. We will also share the final details before departure and answer any questions."
      },
      {
        q: "What if the weather is bad?",
        a: "Weather conditions in the mountains can change quickly. The safety of participants is the priority and in the event of bad weather the guide may adjust the activity plan, postpone or delay the ascent to Maglić or offer an alternative route. All changes are communicated clearly and in advance, including via the WhatsApp group."
      }
    ]
  },
  {
    id: "2",
    slug: "kampovanje-zelengora-bregoč-jeep-safari",
    title: "Camping on Zelengora with Bregoč Summit + Jeep Safari",
    category: "popular",
    location: "Sutjeska NP / Zelengora",
    imagePosition: "center 70%",
    shortDescription: "A combined tour that brings together hiking, camping and an adventurous jeep safari through the beautiful Dinaric meadows.",
    aboutTour: "Camping on Zelengora with the Bregoč ascent is conceived as a three-day stay in the heart of the mountain — without rushing and without pressure — where the focus is on nature, movement and a shared experience. This tour combines a jeep safari, hiking and camping beside a lake, with plenty of time for rest, swimming and enjoying the landscapes that Zelengora is known for.",
    duration: "3 days / 2 nights",
    difficulty: "Easy - Moderate",
    price: "160€ per person",
    groupSize: "6–16 people",
    dates: [
      "05.-07.06.",
      "07.-09.08."
    ],
    image: "/images/tours/zelengora/zelengora-kampovanje-card.webp",
    imageAlt: "Camping on Zelengora with Bregoč summit and Jeep safari – Sutjeska NP, Zelengora",
    highlights: [
      "Orlovačko Lake",
      "Bregoč (highest peak of Zelengora)",
      "Jeep safari to Štirinsko Lake",
      "Camping",
      "Dinaric meadows",
      "Camping equipment provided"
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival and camping near Orlovačko Lake",
        description: "Meeting in Foča at around 14:00, from where we travel by off-road vehicles to Zelengora. Parking is arranged (at the location shared in the participants' WhatsApp group), and the first day is spent at a relaxed pace, setting up camp near Orlovačko Lake. The remainder of the day is dedicated to getting to know the terrain, walks to Orlovačko and Jugovo Lake, and relaxed socialising at camp. The first evening is without dinner and reserved for conversation and time by the fire, in the peace of the mountain."
      },
      {
        dayTitle: "Day 2 — Ascent to Bregoč, the highest peak of Zelengora",
        description: "The second day is the centrepiece of the tour. After breakfast we set off on the ascent to Bregoč, the highest peak of Zelengora. The climb takes around three hours and leads over the Kozije Strane ridge, from which wide, open panoramic views open up across the entire Zelengora massif, Maglić, Lebršnik and Volujak.\n\nA lunch pack is provided during the ascent. At the summit and along the route we take breaks for rest and photography, without forcing the pace. The whole day is spent on the mountain, returning to camp in the afternoon. On arrival there is free time for swimming in Orlovačko Lake, rest and relaxation, with dinner and socialising by the fire in the evening."
      },
      {
        dayTitle: "Day 3 — Jeep Safari and return",
        description: "The third day begins with breakfast and packing up camp. This is followed by a jeep safari, carried out in a special open-sided truck with benches, which allows unobstructed views and a genuine experience of driving through the mountain. The safari leads to panoramic points above Kotaričko Lake, after which there is a short hike to Štirinsko Lake. Here we take a break for rest and swimming for those who wish. After the excursion we return to camp, collect the equipment, get into the off-road vehicles and return to Foča, where the tour ends in the early afternoon.\n\nThis tour is designed for everyone who wants to experience Zelengora more slowly and more fully — with lakes, summits, silence and the feeling of truly being in the mountain, not just passing through it."
      }
    ],
    includes: [
      "Guide",
      "Transfer from Foča and return",
      "Jeep safari transfer",
      "2 nights camping",
      "4 meals",
      "Camping equipment",
      "Entry fees"
    ],
    excludes: [
      "Personal equipment",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Is the tour suitable for beginners?",
        a: "The tour is designed for people with moderate fitness. The ascent to Bregoč takes around three hours and is not technically demanding, but does involve longer walking on mountain terrain. The pace is adapted to the group and speed is not forced. If you have doubts about your readiness, feel free to contact us before booking."
      },
      {
        q: "Will I receive additional information before departure?",
        a: "Yes. All participants will be added to the Zelengora tour WhatsApp group a few days before departure. In the group you will receive precise information about the meeting point, schedule, gear list, weather forecast and all additional advice and instructions from the guide. We are also available for any questions before the tour."
      },
      {
        q: "What if the weather is bad?",
        a: "Mountain weather can change quickly. Safety is our priority and the programme is always adapted to conditions on the ground. In the event of bad weather the guide may adjust the order or content of activities, with participants informed in advance, including via the WhatsApp group."
      }
    ]
  },
  {
    id: "3",
    slug: "rafting-tarom-na-nas-nacin",
    title: "Rafting the Tara — Our Way",
    category: "popular",
    location: "Tara River / Foča",
    shortDescription: "A unique rafting adventure through the Tara River canyon with additional activities and unforgettable moments.",
    aboutTour: "This tour takes you through the spectacular Tara River canyon, combining the adrenaline of rafting with nature, great group energy and the feeling of having truly escaped the city.\n\nEverything is organised so that you can simply enjoy: we go in smaller groups, with licensed guides, clear safety rules and safety always first.\n\nThe price includes entry fees and all key organisational costs (rafting equipment, transfer), with no hidden charges. Drinks are not included.",
    duration: "3 days / 2 nights",
    difficulty: "Easy",
    price: "On request",
    groupSize: "6–16 people",
    dates: [
      "26.-28.06."
    ],
    image: "/images/tours/rafting-tara/rafting-hero-card.webp",
    imageAlt: "Rafting the Tara through the canyon – rapids, river and nature",
    highlights: [
      "25 km of rafting",
      "Swimming and jumps",
      "Lunch on the river",
      "Evening music",
      "Options with hiking/zipline/jeep safari"
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival at camp and evening socialising",
        description: "Participants arrive directly at the rafting camp, the exact location and directions for which are provided in advance via the participants' WhatsApp group. Arrival is planned for the afternoon and evening.\n\nOn arrival there is check-in, a short group introduction and dinner. The evening is reserved for relaxed socialising with live music, conversation and getting to know each other, without obligations or rushing. Overnight at camp."
      },
      {
        dayTitle: "Day 2 — Rafting adventure",
        description: "After a restful morning there is breakfast at camp. Then the complete rafting equipment is issued (wetsuits, life jackets, helmets) and a short safety briefing is held by the skippers and guides.\n\nWe then travel by off-road vehicles to the rafting starting point. The descent of the Tara takes the whole day and is organised at a relaxed pace, with stops for rest, swimming and photography. Lunch is organised on the river during the descent itself, which means the day passes without time pressure and without being tied to exact return times to camp.\n\nRafting is a combination of adrenaline, nature and enjoyment of the Tara canyon, with constant accompaniment from experienced skippers.\n\nAfter the descent we return to camp. Following showers and rest there is dinner, and the evening is again reserved for socialising and live music."
      },
      {
        dayTitle: "Day 3 — Breakfast and farewell",
        description: "In the morning we have breakfast at camp. After breakfast there is free time, packing and departure of participants, bringing the rafting arrangement to a close."
      }
    ],
    includes: [
      "Licensed skipper",
      "GoPro recording of the tour",
      "Rafting equipment (boat, paddles, life jacket, helmet)",
      "2 nights accommodation",
      "All meals during the tour",
      "Tourist taxes"
    ],
    excludes: [
      "Personal equipment (swimwear, shorts)",
      "Additional activities (hiking, zipline, jeep safari)",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Do I need rafting experience?",
        a: "No, this tour is suitable for beginners as well. Our guides will brief you on everything you need to know and ensure your safety throughout the tour."
      },
      {
        q: "Will I receive all information before arriving?",
        a: "Yes. All participants will be added to the Tara Rafting WhatsApp group a few days before arrival. In the group you will receive the exact camp location, directions, schedule, packing list and all important information and advice from the guides."
      },
      {
        q: "Where is lunch served during rafting?",
        a: "Lunch is organised on the river, during the descent itself. This is why the rafting day passes in a relaxed way, without rushing and without any obligation to return to camp at a specific time."
      },
      {
        q: "Why is the price 'On request'?",
        a: "The price is on request because it depends on the number of participants and the accommodation structure. Depending on whether more people share one bungalow or a smaller number of people per unit is preferred, the total price may differ. Larger groups and shared accommodation usually allow a lower price per person, while fewer people or a more comfortable arrangement affects the price upward. This way we can offer each team or group the most favourable and realistic option, with no hidden costs."
      }
    ]
  },
  {
    id: "4",
    slug: "porodicni-vikend-tjentiste-zelengora",
    title: "Family Weekend – Tjentište and Zelengora",
    category: "popular",
    location: "Tjentište / Zelengora",
    shortDescription: "A specially designed family tour that allows all family members to enjoy nature and learn about their surroundings.",
    aboutTour: "This family tour takes you through Tjentište and Zelengora — educational walks, activities for children and enjoyment of nature for the whole family.\n\nEverything is organised so that you can simply enjoy: we go in smaller groups, with licensed guides, clear safety rules and safety always first.\n\nThe price includes entry fees and all key organisational costs (transfer, camping equipment) — with no hidden charges. Drinks are not included.",
    duration: "3 days / 2 nights",
    difficulty: "Easy",
    price: "On request",
    groupSize: "4–30 people",
    dates: [
      "14.03.2026"
    ],
    image: "/images/tours/porodicni-vikend-tjentiste-zelengora/porodicni-vikend-zelengora-tjentiste1.webp",
    imageAlt: "Family weekend at Tjentište and Zelengora – nature and walks",
    highlights: [
      "Educational walks",
      "Family relaxation",
      "Tjentište monument",
      "Zelengora lakes"
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival and getting to know Tjentište",
        description: "Participants arrive at Tjentište in the afternoon. After check-in there is a relaxed group introduction and a walk through the Valley of Heroes, with a visit to the Sutjeska Battle Monument. The first day's programme is relaxed and family-friendly, without rushing or obligations.\n\nFor those who arrive early, there is the option of using the outdoor swimming pool at Tjentište, which is especially fun for children. The evening is reserved for socialising, rest and getting acquainted in the peaceful natural surroundings."
      },
      {
        dayTitle: "Day 2 — Zelengora and the lakes (easy family day)",
        description: "After breakfast we set off toward Zelengora. The day is designed as a light excursion, without demanding ascents or high elevations. We visit Orlovačko Lake and the surrounding area, with short walks and time in nature.\n\nThe programme is adapted for children — there is plenty of space for play, movement, breaks and time in clean mountain air. We do not go to summits or do demanding tours, but spend the day at a slow pace, walking, taking photos and enjoying the landscapes of Zelengora.\n\nReturn to Tjentište is planned for the afternoon. On return there is rest, free time and dinner. The evening is set aside for relaxation and family socialising."
      },
      {
        dayTitle: "Day 3 — Breakfast and end of the tour",
        description: "In the morning we have breakfast, after which the family weekend officially ends. For those who have time and wish to stay longer, there is the option of additional time at Tjentište, including swimming in the pool and relaxing before the journey home."
      }
    ],
    includes: [
      "Licensed guide",
      "Transfer from Tjentište and return",
      "2 nights",
      "3 meals",
      "All entry fees"
    ],
    excludes: [
      "Personal equipment",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "What ages of children is the tour suitable for?",
        a: "The tour is designed for children aged 4 to 14, but all family members can enjoy it. Activities are adapted for different age groups."
      },
      {
        q: "Is it safe for children?",
        a: "Absolutely. The terrain is easy and safe, and all activities are supervised."
      },
      {
        q: "What does the catering look like during the weekend?",
        a: "The price includes breakfasts and dinners at Tjentište. During the time on Zelengora there is no lunch pack, as the programme is light and adapted for children, and return to Tjentište is planned around dinner time. If the family has special dietary requirements, this is arranged in advance."
      },
      {
        q: "How does the pricing for children work?",
        a: "The price depends on the number of adults and children in the group. Contact us for a detailed offer tailored to your family."
      }
    ]
  },
  {
    id: "POP-01MAY-01",
    slug: "prvomajska-avantura",
    title: "MAY DAY ADVENTURE",
    category: "popular",
    location: "Tjentište / Sutjeska NP / Zelengora",
    image: "/images/tours/premium/ekipa-prvi-maj.webp",
    imageAlt: "May Day Adventure at Tjentište – bungalows, tours in Sutjeska and trip to Zelengora",
    imagePosition: "center 55%",
    shortDescription: "May Day arrangement in bungalows at Tjentište: accommodation, food, entry tickets and two great adventures — Saturday at Trnovačko Lake, Sunday a relaxed tour of Zelengora.",
    aboutTour: "This three-day adventure is designed as a blend of nature, easy movement and a genuine experience of the mountain — without rushing and without pressure. The focus is not on 'conquering' kilometres, but on being present in the space, socialising and the feeling of freedom that the mountain offers.",
    duration: "3 days / 2 nights",
    difficulty: "Moderate",
    price: "185€ per person",
    groupSize: "1–100+ people",
    discount: "5+ people - 10% discount\n\n10+ people - 15% discount",
    dates: ["01.05.2026"],
    highlights: [
      "Bungalows at Tjentište (2 nights)",
      "Saturday: Trnovačko Lake",
      "Sunday: Zelengora (Donje and Gornje Bare + Borić viewpoint) — easier tour",
      "Lunch packs for tours",
      "Saturday evening social gathering",
      "Entry tickets: Sutjeska NP + Piva Nature Park"
    ],
    itinerary: [
      {
        dayTitle: "Day 1 (Friday) — Arrival at Tjentište",
        description: "Participants arrive at Tjentište throughout the day. After check-in there is free time for rest and a first impression of Sutjeska National Park. A leisurely walk through the Valley of Heroes and a visit to the Sutjeska Battle Monument serve as an introduction to the days ahead, without rushing or pressure.\n\nThis is a day for settling in, meeting the group and enjoying the surroundings. In the evening, around 20:00, a communal dinner is planned. After dinner there is relaxed socialising at camp, conversation, introductions and unwinding in the natural surroundings, with a peaceful atmosphere and the feeling that the holiday has truly begun."
      },
      {
        dayTitle: "Day 2 (Saturday) — Trnovačko Lake, viewpoints and Perućica rainforest",
        description: "After breakfast we collect lunch packs and set off toward Trnovačko Lake. Arrival at the lake is planned for the late morning, where one of the most beautiful mountain lakes in the region awaits us. Here we have plenty of time for rest, a walk along the shore, photography and enjoying nature.\n\nFor those who want more activity, we offer options of an easy and moderate walk to viewpoints above the lake. The shorter variant involves around 15 minutes of walking, while the longer variant is approximately one and a half hours each way to the viewpoint from which the entire Trnovačko Lake in its recognisable heart shape can be seen. Everyone chooses their own pace and level.\n\nIn the afternoon, around 16:00, we set off toward Prijevor, where the off-road vehicles are waiting. We stop at a panoramic point below Maglić, with views toward Volujak, Zelengora, Jahorina, Lebršnik and Treskavica. We then visit viewpoints above the Perućica rainforest, subject to time and conditions.\n\nReturn to camp is in the evening, where dinner and relaxed socialising with quiet music await, along with reflection on the day."
      },
      {
        dayTitle: "Day 3 (Sunday) — Zelengora, lakes and end of the adventure",
        description: "The third day begins with breakfast, after which we head toward Zelengora. The drive takes around one to one and a half hours. The day is designed to be light and relaxing, without demanding ascents, with a focus on being in nature and enjoying the space.\n\nOn Zelengora we visit viewpoints, the Borić area and Donje Bare lakes, with the option of a walk to Gornje Bare for those who wish. The programme is flexible, adapted to the group and ideal for rounding off a multi-day adventure at a calm pace.\n\nIn the afternoon we begin the return journey, bringing the May Day programme to an official close.\n\nFor a detailed programme, pricing and all information about this May Day adventure, a PDF programme is available upon request via our Instagram page or directly on WhatsApp at +387 65 797 200."
      }
    ],
    includes: [
      "Accommodation in bungalows at Tjentište (2 nights)",
      "Dinner (Friday), breakfast + lunch pack (Saturday), dinner (Saturday), breakfast + lunch pack (Sunday)",
      "Entry tickets: Sutjeska NP and Piva Nature Park",
      "Tour organisation and guiding",
      "No hidden costs (drinks not included)"
    ],
    excludes: [
      "Drinks",
      "Personal costs outside the programme"
    ],
    faqs: [
      {
        q: "How can I get the detailed programme and price?",
        a: "The detailed programme, price and all additional information are available in PDF format upon request via our Instagram page or directly on WhatsApp at +387 65 797 200. After getting in touch we will send the complete programme and are available for any questions."
      },
      {
        q: "Is the tour physically demanding?",
        a: "The tour is designed to be accessible to most participants. The programme combines easy walks with the option of a moderate hike to viewpoints, but without any obligation to participate in all activities. Everyone chooses their own pace and level of activity."
      },
      {
        q: "Will we receive additional information and instructions before departure?",
        a: "Yes. All registered participants will be added to the May Day Adventure WhatsApp group, where they will receive precise information about the meeting point, schedule, equipment, weather forecast and all important instructions before departure."
      }
    ]
  },
  // PREMIUM TOURS
  {
    id: "5",
    slug: "tura-za-malo-jace-ljude-maglic-trnovacko-rafting",
    title: "For the Stronger Ones – Maglić, Trnovačko Lake and Tara Rafting",
    category: "premium",
    location: "Sutjeska NP / Trnovačko / Maglić / Tara",
    shortDescription: "A demanding combined tour that brings together hiking, camping and rafting for experienced adventurers seeking a real challenge.",
    aboutTour: "This tour is for those who want more than a classic adventure. The combination of Maglić, Trnovačko Lake and Tara rafting is a physically demanding but extraordinarily rich experience, with powerful landscapes, serious ascents and a complete departure from the comfort zone.\n\nThe group is intentionally small — a maximum of 8, possibly up to 15 participants — in order to maintain the quality of the experience, safety and a genuine team spirit. This is not a mass tour. This is an adventure for people who know why they come to the mountains.",
    duration: "3 days / 2 nights",
    difficulty: "Demanding",
    price: "235€",
    groupSize: "max 16",
    image: "/images/tours/premium/top-tura-rafting-tarom-maglic-perucica.webp",
    dates: ["19.-21.06.2026"],
    imageAlt: "Maglić, Trnovačko Lake and Tara rafting – premium nature adventure",
    highlights: [
      "Camping at Prijevor",
      "Ascent to Maglić",
      "Descent to Trnovačko Lake",
      "Tara rafting",
      "Perućica rainforest viewpoints"
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival in Foča and camping at Prijevor",
        description: "On the first day we arrive in Foča in the afternoon and continue toward Prijevor, at an elevation of over 1,500 metres. We pitch camp directly below Maglić, in a raw and powerful mountain setting. Together we prepare dinner, rest and sleep under the stars, in the complete silence of the mountain."
      },
      {
        dayTitle: "Day 2 — Ascent to Maglić – Trnovačko Lake",
        description: "The second day is the central and most demanding part of the tour. After breakfast we set off on a circular route toward Maglić, one of the most beautiful and attractive hiking routes in the region. The ascent takes around 2.5 hours and is physically demanding. This tour is not for basic fitness — good physical condition and the will for a serious climb are required.\n\nThe route passes through Sutjeska National Park and Piva Nature Park. From Maglić we continue to the viewpoint above Trnovačko Lake, then descend directly to the shore of the lake. Here we take a longer break for rest and refreshment — coffee, tea, beer or rakija — with lunch packs and time to take in the surroundings.\n\nAfter the rest we return toward Prijevor. In the late afternoon, at sunset, views open up toward Vranjak, Zelengora, Lebršnik, Jahorina and Treskavica. The evening is again spent at camp, with dinner, conversation and reflection on one of the most powerful hiking days you can experience."
      },
      {
        dayTitle: "Day 3 — Tara rafting and end of the adventure",
        description: "On the third day we rise early, pack up camp and set off toward the Tara. On arrival at the rafting camp there is breakfast, issuing of complete rafting equipment and preparation for the descent. Rafting the Tara takes the whole day, without rushing or time pressure. The river, the canyon, pauses, enjoyment and a complete contrast to the mountain.\n\nIn the late afternoon we return to camp, change, shower and end the tour.\n\nThis is a powerful, intense and unforgettable adventure. A tour full of contrasts — high summits, the most beautiful lake in the region and the mighty Tara River. Designed for those who want a real story, not just an excursion. Whoever joins this tour carries it with them long after returning home."
      }
    ],
    includes: [
      "Experienced licensed guide",
      "Transfer from Foča and return",
      "2 nights camping",
      "All meals during the tour (5 meals)",
      "Rafting equipment",
      "Camping equipment",
      "Entry tickets for Sutjeska NP and Piva Nature Park"
    ],
    excludes: [
      "Personal equipment (hiking boots, backpack, swimwear)",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Will we receive detailed information before departure?",
        a: "Yes. All participants will be added to the tour WhatsApp group a few days before departure. In the group you will receive precise information about equipment, weather forecast, logistics, schedule and all important instructions. We will also clarify the final details before arrival."
      },
      {
        q: "What is the group size and why is it small?",
        a: "The group is intentionally small — ideally 8 participants, maximum up to 15. A smaller group means greater safety, better organisation, a stronger team feeling and a higher quality experience on demanding terrain. This is not a mass tour and was never intended to be."
      },
      {
        q: "Is rafting demanding after the mountain section?",
        a: "Tara rafting is not technically demanding and represents a perfect contrast to the hiking part of the tour. The descent is organised with experienced skippers, in safe boats, with breaks and without rushing. After two days in the mountains, rafting comes as a powerful but enjoyable conclusion to the adventure."
      },
      {
        q: "What level of fitness is required?",
        a: "Good physical fitness is required for this tour, but it is not about extreme or technical mountaineering. The ascent to Maglić follows the most well-known and frequently used route, which is technically more demanding in certain sections and includes steeper terrain with fixed cables to assist movement.\n\nThe tour is demanding in terms of distance and elevation gain, but we move at a controlled pace, with breaks and clear instructions from the guide. With basic hiking experience, good fitness and the ability to move safely on steeper terrain, most physically prepared participants can complete this route without difficulty. It is important to feel stable on steeper ground and to be ready for a serious mountain day."
      }
    ]
  },
  {
    id: "P-hrcavka-perucica-01",
    slug: "hrcavka-perucica-kanjoning-prasuma-skakavac",
    title: "Hrčavka Canyoning + Perućica Rainforest and Skakavac Waterfall",
    category: "premium",
    location: "Tjentište / Sutjeska NP / Hrčavka Canyon / Perućica Rainforest",
    image: "/images/tours/premium/kanjoning-prasuma-perucica.webp",
    imageAlt: "Hrčavka canyoning and Perućica rainforest to Skakavac Waterfall – premium tour in Sutjeska NP",
    imagePosition: "center 55%",
    shortDescription: "Premium weekend arrangement: canyoning in Hrčavka and a visit to the Perućica rainforest and Skakavac Waterfall, with accommodation at Tjentište, meals and an evening by the fire.",
    aboutTour: "This adventure combines the wild Hrčavka canyon and the Perućica rainforest — two completely different but equally powerful natural units of Sutjeska National Park. The programme is designed for people who want an active, rich and authentic tour, without unnecessary strain, but with a genuine experience of nature.\n\nThe tour is dynamic, varied and full of contrasts — from water, rocks and jumps in the canyon, to the silence of the rainforest and the mighty Skakavac Waterfall. Ideal for those who want something more than a classic excursion, but without extreme risks.",
    duration: "3 days / 2 nights",
    difficulty: "Moderate",
    price: "255€ per person",
    groupSize: "8–13 people",
    discount: "4+ people - 10% discount",
    dates: ["10. - 12.07.2026", "28. - 30.08.2026"],
    highlights: [
      "Hrčavka canyoning (longer route, approx. 5–6 hours)",
      "Perućica rainforest",
      "Skakavac Waterfall",
      "Accommodation at Tjentište",
      "Evening socialising by the fire",
      "Complete canyoning equipment included (highest standards)"
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Arrival at Tjentište and a relaxed afternoon",
        description: "Participants arrive at Tjentište in the afternoon. After check-in into the bungalows there is a short break and free time. The first day is light and relaxed — a walk through the Valley of Heroes, a visit to the Sutjeska Battle Monument and getting to know the surroundings.\n\nIn the evening there is an organised dinner, followed by relaxed socialising and unwinding, without rushing, with conversation and enjoyment of the Tjentište atmosphere."
      },
      {
        dayTitle: "Day 2 — Hrčavka Canyoning (longer and more spectacular route)",
        description: "Breakfast. Departure for canyoning in Hrčavka (approx. 4 hours). Return to base, dinner and free time. Overnight."
      },
      {
        dayTitle: "Day 3 — Perućica Rainforest and Skakavac Waterfall",
        description: "The third day begins with breakfast, after which we set off to explore the Perućica rainforest. The walk leads toward Skakavac Waterfall, one of the most impressive natural sites in this area.\n\nIt takes around two hours to reach the waterfall, while the return is slightly longer, around two and a half hours. The terrain is more demanding in places, but with good trainers or hiking boots it is no problem for physically fit participants. We walk through dense forest, alongside streams and old trails, in a setting that leaves a strong impression.\n\nLunch packs are provided for this day. After returning from Perućica the tour ends, with a sense of a complete, powerful and rich adventure.\n\nThis tour is a superb combination of water, forest and canyon. It is not extreme, but it is intense and rich in experience. Ideal for those who want to feel the wild nature of Sutjeska from multiple perspectives and bring home a memory that stays with them."
      }
    ],
    includes: [
      "Accommodation at Tjentište (2 nights)",
      "Breakfast (Saturday), lunch pack, dinner (Saturday), breakfast (Sunday), lunch pack",
      "Licensed guide and tour organisation",
      "Complete canyoning equipment (highest standards)",
      "Safety briefing and support during activities"
    ],
    excludes: [
      "Drinks",
      "Personal equipment",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "How physically demanding is canyoning?",
        a: "Canyoning lasts around six hours and involves moving through water, crossing natural obstacles and constant movement, but without extreme technical sections. The pace is adapted to the group, with breaks. Solid fitness and readiness for a longer active day are required, but not peak physical condition."
      },
      {
        q: "What equipment is provided for canyoning?",
        a: "The price includes a wetsuit, helmet, safety vest and all necessary technical equipment for passing through the canyon. Participants need to bring swimwear, a towel and water shoes or trainers that can get wet. All detailed instructions about equipment are provided in advance."
      },
      {
        q: "Is the visit to Perućica demanding?",
        a: "The visit to the Perućica rainforest and Skakavac Waterfall is more demanding in hiking terms, but technically straightforward. The walk takes around two hours to the waterfall and around two and a half hours back. With good trainers or hiking boots, movement is safe and stable. No special technique is required, just attention and fitness."
      },
      {
        q: "Will we receive all information before arriving?",
        a: "Yes. All participants will be added to the tour WhatsApp group a few days before departure. In the group you will receive precise information about the programme, schedule, equipment, weather forecast and all important instructions. You can also ask questions and receive additional clarification there."
      }
    ]
  },
  {
    id: "P-durmitor-01",
    slug: "durmitorski-prsten-via-ferata-piva-prutas-kajk-pivsko-jezero",
    title: "Durmitor Ring + Via Ferrata Piva + Prutaš Summit + Kayaking on Piva Lake",
    category: "premium",
    location: "Durmitor / Piva (via ferrata) / Prutaš",
    image: "/images/tours/durmitor-aranzman/durmitor.webp",
    imageAlt: "Durmitor Ring, Via Ferrata Piva and Prutaš summit – premium adventure in Montenegro",
    imagePosition: "center 60%",
    shortDescription: "This premium tour combines a via ferrata, high mountain summits and calm water into one powerful, varied experience. Designed for those who want a real adventure — active, rich and unforgettable.",
    aboutTour: "This tour is pure adventure in the fullest sense of the word. A combination of rock, summits and water, designed for people who want to spend a few days being active, powerful and fully engaged, far from everyday life and routine.\n\nThrough Via Ferrata Piva, the ascent to Prutaš and kayaking on Piva Lake, we pass through three completely different natural worlds — vertical cliffs above the canyon, the wide Durmitor highlands and the calm, emerald water of the lake. Each day brings a new experience and a different rhythm, without repetition and without empty time.\n\nVia Ferrata Piva delivers a powerful sense of height and freedom, but with safety and control. It is a perfect introduction to the tour — adrenaline-fuelled but accessible, and challenging enough to awaken focus and team spirit. Driving the Durmitor Ring after the ferrata further amplifies the sense of space and the scale of the mountain.\n\nThe ascent to Prutaš is a day for real mountaineers. Long, open and visually powerful, with panoramas opening in every direction. This is a day that stays with you — not because of speed or numbers, but because of the feeling of moving through a vast mountain space and the views that remain in your mind long after returning.\n\nThe third day brings complete contrast. After rocks and heights, we come to water. Kayaking on Piva Lake is calm, easy and liberating — the ideal conclusion to the tour. Silence, water and a relaxed pace allow all impressions to settle and the adventure to close in the right way.\n\nThis is not a classic excursion or a tourist tour. This is an experience. A tour for people who want to feel nature with their whole body — to climb, walk, paddle and be part of the space they move through. Those who choose this adventure carry it with them long after returning home.",
    duration: "3 days / 2 nights",
    difficulty: "Moderate–Demanding",
    price: "On request",
    groupSize: "6–16 people",
    discount: "",
    dates: ["24. - 26.07.2026"],
    highlights: [
      "Durmitor Ring",
      "Via Ferrata Piva",
      "Prutaš summit",
      "Views of Durmitor",
      "Kayaking on Piva Lake"
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Via Ferrata Piva and arrival on Durmitor",
        description: "The group meets in the morning in Foča, from where we drive toward Plužine and the Via Ferrata Piva location. On arrival we collect complete ferrata equipment (harness, helmet, lanyards) and receive a short safety briefing from the guide.\n\nAfter preparation we begin the ascent of Via Ferrata Piva, an attractive and well-marked route that allows safe movement on steep cliffs above the canyon. The route delivers a powerful sense of height and freedom, but is technically well-secured and guided, with constant accompaniment from the guide.\n\nAfter completing the ferrata we return to the vehicles and continue along the Durmitor Ring, one of the most beautiful panoramic roads in the region. In the evening we arrive at accommodation on Durmitor, followed by dinner and rest after an active day."
      },
      {
        dayTitle: "Day 2 — Ascent to Prutaš (2,393m)",
        description: "After breakfast we set off on the ascent to Prutaš, one of the most beautiful and recognisable peaks of Durmitor. This day is entirely devoted to hiking. The ascent takes most of the day and follows open, clear trails, with constant views of the Durmitor peaks and the surrounding expanse.\n\nWe move at a controlled pace, with breaks for rest, hydration and photography. At the summit we take a longer pause to enjoy the panorama, and lunch packs are consumed during the day. After the descent we return to accommodation in the afternoon or evening, followed by dinner and a well-earned rest."
      },
      {
        dayTitle: "Day 3 — Kayaking on Piva Lake and return",
        description: "The third day begins with an early breakfast, after which we descend toward Piva Lake. This part of the tour brings a completely different rhythm — calm, water and relaxation.\n\nOn the lake we spend around 2 to 3 hours kayaking. The kayaking is easy and relaxing, with breaks for swimming, photography and enjoying the silence and colour of the water. After the activity we return toward Foča in our own vehicles, bringing the tour to a close.\n\nThis adventure is powerful, varied and exceptionally rich in experience. It combines rocks, summits and water into one whole and is ideal for those who want more than a classic excursion — three days of nature, movement and genuine adventure."
      }
    ],
    includes: [
      "Licensed guide for hiking and via ferrata",
      "Technical equipment for via ferrata (helmet, harness, lanyards)",
      "Transfers during the programme",
      "Accommodation (2 nights)",
      "Meals as agreed",
      "Kayak rental",
      "Tour organisation"
    ],
    excludes: [
      "Personal equipment (hiking boots, backpack)",
      "Drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Do I need via ferrata experience?",
        a: "We recommend basic fitness and a readiness for a challenge. The via ferrata is manageable with a guide — beginners can participate with proper equipment and instructions."
      },
      {
        q: "Is the technical equipment included?",
        a: "Yes. Helmet, harness and via ferrata set are included. You only need hiking boots and appropriate clothing."
      },
      {
        q: "How demanding is the tour?",
        a: "The tour is moderate to demanding — combining hiking, via ferrata and the ascent to Prutaš with kayaking on Piva Lake. We recommend regular physical activity before departure."
      },
      {
        q: "How do I book?",
        a: "Contact us with your preferred dates. We organise tours by arrangement for groups of 6 to 14 people."
      }
    ]
  },
  // DAY TRIPS
  {
    id: "6",
    slug: "zelengora-uspon-bregoč",
    title: "Zelengora – Bregoč Summit",
    category: "day-trip",
    location: "Sutjeska NP – Zelengora (Bregoč)",
    imagePosition: "center 70%",
    shortDescription: "A day hike to the highest peak of Zelengora with beautiful views of the surrounding mountains.",
    aboutTour: "The ascent to Bregoč, the highest peak of Zelengora, is a full-day hiking tour with one of the finest panoramic views in Bosnia and Herzegovina. The tour is designed for people who love hiking and want to spend a day in open space, away from the crowds, with views of Maglić, Volujak, Treskavica and Jahorina.",
    duration: "1 day",
    difficulty: "Easy - Moderate",
    price: "70€",
    groupSize: "4–50 people",
    image: "/images/tours/day-trips/zelengora-bregoc.webp",
    highlights: [
      "Bregoč (2017m)",
      "Panoramic views",
      "Zelengora lakes",
      "Dinaric meadows"
    ],
    itinerary: [
      {
        dayTitle: "Day tour",
        description: "Meeting and departure toward Zelengora by off-road vehicles. After arriving at the starting point the ascent to Bregoč begins at an easy and steady pace, with breaks. At the summit we take a longer break for rest, photography and lunch from the lunch pack. Return by the same route, arriving in the afternoon."
      }
    ],
    includes: [
      "Licensed guide",
      "Transfer from Foča and return",
      "Lunch pack",
      "Entry fees"
    ],
    excludes: [
      "Personal equipment",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "How long does the ascent take?",
        a: "The ascent to Bregoč takes around 2 hours, depending on the group's fitness. The descent takes around 1.5 hours."
      },
      {
        q: "Is special equipment required?",
        a: "No special equipment is required — comfortable footwear and a small backpack are all you need."
      },
      {
        q: "How do I book?",
        a: "Contact us with your preferred date. We organise tours by arrangement for groups of minimum 4 people."
      }
    ]
  },
  {
    id: "7",
    slug: "zelengora-jezera-vidikovci",
    title: "Zelengora – Lakes and Viewpoints",
    category: "day-trip",
    location: "Sutjeska NP – Zelengora",
    imagePosition: "center 70%",
    shortDescription: "A day walk through the most beautiful lakes of Zelengora with stunning viewpoints and photography opportunities.",
    aboutTour: "This tour is ideal for those who want a lighter day in nature, without major ascents. The focus is on the open spaces of Zelengora, the mountain lakes and viewpoints, with walking, rest and enjoyment of the clean air.",
    duration: "1 day",
    difficulty: "Easy",
    price: "70€",
    groupSize: "4–50 people",
    image: "/images/tours/day-trips/zelengora-jezera.webp",
    highlights: [
      "Donje Bare",
      "Gornje Bare",
      "Panoramic viewpoints",
      "Zelengora viewpoints"
    ],
    itinerary: [
      {
        dayTitle: "Day tour",
        description: "Departure toward Zelengora and a visit to Orlovačko Lake, Donje Bare and the viewpoints. For those who wish, there is the option of a short walk to Gornje Bare. The day passes without rushing, with breaks for rest, photography and the lunch pack. Return in the afternoon."
      }
    ],
    includes: [
      "Licensed guide",
      "Transfer from Foča and return",
      "Lunch pack",
      "Entry fees"
    ],
    excludes: [
      "Personal equipment",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Is the tour suitable for beginners?",
        a: "Yes, this tour is easy and suitable for all ages. The terrain is accessible and does not require any special physical fitness."
      },
      {
        q: "Is there the option of ascending to Uglješin vrh?",
        a: "Yes, absolutely. If the group wants to ascend to Uglješin vrh, this can be arranged and organised."
      }
    ]
  },
  {
    id: "8",
    slug: "prasuma-perucica-vodopad-skakavac",
    title: "Perućica Rainforest and Skakavac Waterfall",
    category: "day-trip",
    location: "Sutjeska NP – Perućica Rainforest",
    imagePosition: "center 70%",
    shortDescription: "A day tour through one of the oldest forests in Europe with a visit to the impressive Skakavac Waterfall.",
    aboutTour: "A unique tour through one of the oldest and largest primeval forests in Europe. Perućica and Skakavac Waterfall offer a powerful experience of untouched nature, dense forest and an impressive waterfall. Ideal for those who love nature and want to explore one of the most fascinating destinations in Bosnia and Herzegovina.",
    duration: "1 day",
    difficulty: "Easy",
    price: "90€",
    groupSize: "4–20 people",
    image: "/images/tours/day-trips/perucica-skakavac.webp",
    highlights: [
      "Perućica rainforest",
      "Skakavac Waterfall",
      "Educational walk",
      "Untouched nature"
    ],
    itinerary: [
      {
        dayTitle: "Day tour",
        description: "Departure is organised from Foča by off-road vehicles, or from Tjentište at the group's request, depending on the arrangement and logistics. The drive leads to the entrance of the Perućica rainforest, where the walking part of the tour begins.\n\nThe walk through the rainforest takes around two hours and leads through dense forest, along ancient trails, streams and impressive natural landscapes. We move at a moderate pace, with several short breaks for rest, photography and enjoying the silence of the forest.\n\nOn arriving at Skakavac Waterfall we take a longer rest. Time is set aside for relaxation, photos and lunch from the lunch pack, with views of the powerful waterfall and the nature surrounding it.\n\nAfter the rest we return by the same or an agreed trail, depending on conditions and the guide's assessment. Return is planned for the afternoon, with a sense of complete immersion in a unique natural setting."
      }
    ],
    includes: [
      "Licensed guide",
      "Transfer from Foča and return",
      "Lunch pack",
      "Entry fees",
      "Educational content"
    ],
    excludes: [
      "Personal equipment",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "What makes the Perućica rainforest special?",
        a: "Perućica is one of the oldest primeval forests in Europe, with trees over 300 years old. It is home to rare species of plants and animals. And the crown of Perućica is Skakavac Waterfall (75m)."
      },
      {
        q: "How long does the walk take?",
        a: "The walk through the rainforest takes around 3–4 hours, including the visit to the waterfall. Total tour time is around 6–7 hours."
      }
    ]
  },
  {
    id: "9",
    slug: "kanjoning-hrcavka",
    title: "Hrčavka Canyoning",
    category: "day-trip",
    location: "Sutjeska NP – Hrčavka Canyon",
    shortDescription: "An adrenaline-fuelled day canyoning adventure through the Hrčavka river canyon with jumps, swimming and abseiling.",
    aboutTour: "Canyoning in Hrčavka is a dynamic and highly attractive adventure through water, waterfalls and narrow passages. The tour is exciting but not extreme, and with guides and equipment provides a safe and powerful experience.",
    duration: "1 day",
    difficulty: "Moderate",
    price: "130€",
    groupSize: "4–12 people",
    image: "/images/tours/day-trips/kanjoning-hrcavka.webp",
    highlights: [
      "Canyoning through Hrčavka",
      "Cliff jumps",
      "Swimming in natural pools",
      "Abseiling down waterfalls"
    ],
    itinerary: [
      {
        dayTitle: "Day tour",
        description: "Arrival at the starting point, changing and collecting complete canyoning equipment. Entry into the canyon and passage through the longer, more varied route that takes several hours. Breaks are taken during the tour and the lunch pack is consumed inside the canyon. Exit from the canyon and return in the afternoon."
      }
    ],
    includes: [
      "Licensed guide",
      "Transfer from Foča and return",
      "Canyoning equipment (life jacket, helmet, wetsuit)",
      "Lunch packs",
      "Entry fees"
    ],
    excludes: [
      "Personal equipment (swimwear, etc.)",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Do I need canyoning experience?",
        a: "No, but we recommend good basic fitness and the ability to swim. Our guides will brief you on everything you need."
      },
      {
        q: "Is it safe?",
        a: "Yes, all activities are supervised by experienced licensed guides. We use professional equipment and adhere to all safety standards."
      },
      {
        q: "What should I bring?",
        a: "Swimwear, dry clothes for after the activity, and sun cream."
      }
    ]
  },
  {
    id: "10",
    slug: "trnovacko-jezero",
    title: "Trnovačko Lake",
    category: "day-trip",
    location: "Trnovačko Lake / Sutjeska NP",
    shortDescription: "A day tour to one of the most beautiful lakes in Bosnia and Herzegovina with stunning views and the option to swim.",
    aboutTour: "Trnovačko Lake is one of the most beautiful mountain lakes in the Balkans, known for its heart shape and setting amid high peaks. This tour is perfect for those who want a combination of hiking and time beside the lake.",
    duration: "1 day",
    difficulty: "Moderate",
    price: "75€",
    groupSize: "4–50 people",
    image: "/images/tours/day-trips/trnovacko-jezero.webp",
    highlights: [
      "Trnovačko Lake",
      "Viewpoints",
      "Swimming in the lake",
      "Entry fees included",
      "Time at Prijevor",
      "Perućica rainforest viewpoints"
    ],
    itinerary: [
      {
        dayTitle: "Day tour",
        description: "Departure by off-road vehicles toward Prijevor, followed by a hike to Trnovačko Lake (around one and a half hours). On arrival there is free time for walking, rest and lunch from the lunch pack. For those interested there is the option of a short walk to the viewpoint above the lake. Return by the same route."
      }
    ],
    includes: [
      "Licensed guide",
      "Transfer from Foča and return",
      "Lunch pack",
      "Entry fees for Sutjeska NP and Piva Nature Park"
    ],
    excludes: [
      "Personal equipment",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "How long is the walk to the lake?",
        a: "The walk to Trnovačko Lake takes around 1 hour 30 minutes, depending on the group's fitness. The return takes a similar amount of time."
      },
      {
        q: "Can you swim in the lake?",
        a: "Yes, the water in the lake is clean and refreshing, ideal for a swim during the summer months."
      },
      {
        q: "Is there somewhere to get a coffee?",
        a: "Of course — there is a mountain café at Trnovačko Lake where you can have coffee, tea, beer or rakija."
      }
    ]
  },
  {
    id: "11",
    slug: "maglic-trnovacko-jezero",
    title: "Maglić and Trnovačko Lake",
    category: "day-trip",
    location: "Sutjeska NP / Maglić / Trnovačko Lake",
    shortDescription: "A demanding day tour combining an ascent to the highest peak in Bosnia and Herzegovina with a visit to the beautiful Trnovačko Lake.",
    aboutTour: "This tour is a more demanding hiking adventure that combines a powerful ascent with the reward of spending time at one of the most beautiful mountain lakes in the region. We depart from Prijevor, climb toward Maglić, then descend directly to Trnovačko Lake. The tour is designed for physically fit participants who want a serious mountain day.",
    duration: "1 day",
    difficulty: "Demanding",
    price: "95€",
    groupSize: "4–20 people",
    image: "/images/tours/day-trips/maglic-trnovacko.webp",
    highlights: [
      "Maglić (2386m)",
      "Trnovačko Lake",
      "Panoramic views",
      "Demanding trail"
    ],
    itinerary: [
      {
        dayTitle: "Day tour",
        description: "Departure is organised toward Prijevor, from where the mountain ascent begins. The ascent to Mali Maglić follows clear hiking trails, with a gradual gain in elevation and a controlled pace, with breaks for rest and to accommodate the group.\n\nAfter reaching the summit of Mali Maglić we take a break for rest and photography, with open views of the Maglić massif and surrounding mountains. From the summit we continue the descent toward Trnovačko Lake, one of the most spectacular sections of the tour, where we have a longer stay, rest and lunch from the lunch pack.\n\nTime spent beside the lake allows for relaxation and enjoyment of the surroundings before returning by the same or agreed route toward Prijevor. Return is planned for the afternoon, after a full and physically demanding day in the mountains."
      }
    ],
    includes: [
      "Licensed guide",
      "Transfer from Foča and return",
      "Entry fees for Sutjeska NP and Piva Nature Park",
      "Lunch pack"
    ],
    excludes: [
      "Personal equipment (hiking boots, backpack, swimwear, etc.)",
      "Additional drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Why is this tour demanding?",
        a: "The tour combines a demanding ascent to Maglić and a descent to the lake in a single day. Total walking time is around 7 hours. Good physical fitness is required."
      },
      {
        q: "Is it suitable for beginners?",
        a: "No, this tour is not suitable for beginners. We recommend hiking experience and excellent physical fitness."
      },
      {
        q: "When does the tour start?",
        a: "The tour starts very early (6–7am) so that we have enough time for the ascent, descent and time to enjoy the lake."
      }
    ]
  },
  {
    id: "12",
    slug: "jeep-safari-zelengora",
    title: "Jeep Safari Zelengora",
    category: "day-trip",
    location: "Sutjeska NP – Zelengora",
    shortDescription: "A day jeep safari through the beautiful Dinaric meadows of Zelengora with stunning viewpoints and photography opportunities.",
    aboutTour: "The jeep safari is a relaxed but very varied tour that combines off-road driving and short walks at the finest spots on Zelengora. Suitable for families and those who prefer less walking.",
    duration: "1 day",
    difficulty: "Easy",
    price: "70€ per person",
    groupSize: "4–16 people",
    image: "/images/tours/day-trips/jeep-safari-zelengora.webp",
    highlights: [
      "Jeep safari",
      "Zelengora",
      "Viewpoints",
      "Lakes"
    ],
    itinerary: [
      {
        dayTitle: "Day tour",
        description: "Departure by off-road vehicles and a safari drive through Zelengora, with stops at viewpoints and by lakes. Short walks, photography breaks and the lunch pack. Return in the afternoon."
      }
    ],
    includes: [
      "Guide",
      "Tour organisation",
      "Lunch pack",
      "Entry fees"
    ],
    excludes: [
      "Personal costs"
    ],
    faqs: [
      {
        q: "Is special equipment required?",
        a: "No, trainers and layered clothing are recommended."
      }
    ]
  },
  {
    id: "13",
    slug: "via-ferata-piva",
    title: "Via Ferrata Piva",
    category: "day-trip",
    location: "Piva Nature Park",
    shortDescription: "A day via ferrata adventure in Piva Nature Park with beautiful panoramic views and a safe ascent with a guide.",
    aboutTour: "Via Ferrata Piva is an adrenaline tour that allows safe movement on steep and spectacular cliffs using fixed cables and footholds. Ideal for those who want something different and exciting.",
    duration: "1 day",
    difficulty: "Moderate",
    price: "65€ per person",
    groupSize: "4–16 people",
    image: "/images/tours/day-trips/via-ferata-piva.webp",
    highlights: [
      "Via ferrata",
      "Piva",
      "Panoramic views"
    ],
    itinerary: [
      {
        dayTitle: "Day tour",
        description: "Arrival at the starting point, equipment fitting and safety briefing. Movement along the via ferrata route with constant guide accompaniment. At the end of the route we take a break and have the lunch pack. Return and end of the tour in the afternoon."
      }
    ],
    includes: [
      "Guide",
      "Equipment (all necessary via ferrata equipment)",
      "Lunch pack",
      "Entry fees",
      "Transport"
    ],
    excludes: [
      "Drinks",
      "Costs outside the programme"
    ],
    faqs: [
      {
        q: "Is it safe for beginners?",
        a: "Yes, with a guide and proper equipment, the pace is adapted to the group."
      }
    ]
  },
  {
    id: "multi-srce-sutjeske-01",
    slug: "srce-sutjeske-5-dana",
    title: "Heart of Sutjeska – 5 Days",
    category: "multi-day",
    location: "Sutjeska NP / Maglić / Trnovačko Lake / Zelengora / Tjentište",
    image: "/images/tours/gallery/hiking-na-trnovacko-jezero.webp",
    imageAlt: "Heart of Sutjeska – 5 days of adventure in Sutjeska National Park",
    imagePosition: "center 60%",
    shortDescription:
      "Five days in the heart of Bosnia's largest national park. Maglić summit, camping at Trnovačko Lake, mountain homesteads, canyoning, Zelengora and the Valley of Heroes — authentic, unhurried, uncompromising.",
    aboutTour: `Some tours you visit. Others change you. This is the second kind.

Five days in Sutjeska National Park means five days without rush, without office emails and without false priorities. It means summiting Maglić, sleeping in a tent at Trnovačko Lake, having breakfast with people who live on a mountain homestead without electricity or signal, canyoning through Hrčavka, and walking Zelengora's ridges until nature simply brings you back to yourself.

What makes this tour different from anything else on the market isn't the itinerary on paper — it's the details that aren't on paper. Coffee with Miloš at Prijevor, a man who has spent his whole life here and knows every stone of this mountain. Breakfast at the katun — homemade cheese, kajmak, warm milk, prosciutto — prepared on the spot by people who still live the way people lived three hundred years ago. A cold beer from the spring by the fire in the evening, while Trnovačko Lake lies before you silent and perfect.

The tour is organised exclusively for private groups of 6 to 16 people. Transport to Foča is arranged separately — we organise transfers from Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb and Tirana by arrangement, not included in the price.

Petar is with you for all five days.`,
    duration: "5 days / 4 nights",
    difficulty: "Moderate",
    price: "550€ per person",
    groupSize: "6–16 people",
    transport: "By arrangement – Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb, Tirana",
    dates: [],
    highlights: [
      "Summit of Maglić (2,386m) — highest peak in BiH",
      "Camping at Trnovačko Lake",
      "Breakfast at a mountain homestead — homemade cheese, kajmak, warm milk, prosciutto",
      "Coffee with a local at Prijevor — authentic mountain life",
      "Perućica rainforest viewpoints and Skakavac waterfall",
      "Zelengora — lakes and panoramic viewpoints",
      "Hrčavka canyoning (full equipment included)",
      "Visit to the Battle of Sutjeska Memorial Complex",
      "Valley of Heroes",
      "Accommodation in bungalows at Tjentište (3 nights) + camping (1 night)",
      "11 meals included",
      "Private groups only — 6 to 16 people",
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Prijevor, Maglić summit and camping at Trnovačko Lake",
        description:
          "The group meets in Foča, from where we drive in off-road vehicles to Prijevor at around 1,520m elevation. While the camping equipment is transported to Trnovačko Lake, we set off on the ascent to Maglić.\n\nThe climb takes around 3.5 to 4 hours and is physically demanding. The terrain is steeper in places, but we move at a controlled pace with breaks for rest and hydration. Lunch packs are provided for the ascent. The view from the summit — Zelengora, Volujak, Lebršnik, Treskavica and the Adriatic in the distance — is a reward that justifies every step.\n\nFrom the summit we descend to Trnovačko Lake, where the camp and dinner await. We spend the evening by the fire on the shore of one of the most beautiful mountain lakes in the Balkans. No signal, no phones — just the fire, the group and the silence of the mountain.",
      },
      {
        dayTitle: "Day 2 — Mountain homestead, local host at Prijevor and Perućica viewpoints",
        description:
          "We wake up at Trnovačko Lake. A short 15-minute walk brings us to the nearby katun homesteads, where we are welcomed by hosts who still live without electricity or signal, in stone houses, with their livestock and a mountain rhythm unchanged for centuries.\n\nBreakfast is the real thing: fried dough, homemade kajmak, warm milk straight from the cow, prosciutto, cheese. We eat slowly, without rush, while the hosts share stories about life on the mountain.\n\nAfter breakfast we return to Prijevor. Here we meet Miloš — a man who has spent his whole life at Prijevor and knows every stone of this mountain. A sit-down with coffee, conversation and a first-hand account of what this place truly looks like from the inside is something no tour can manufacture.\n\nAfter coffee we drive to the Perućica rainforest viewpoints, from where Skakavac waterfall and the entire ancient forest spread out below us. We arrive at Tjentište in the afternoon, check into the bungalows and have dinner.",
      },
      {
        dayTitle: "Day 3 — Zelengora, lakes and viewpoints",
        description:
          "After breakfast at Tjentište we head towards Zelengora. The drive takes about an hour, and the day is designed as an easy, open-air hike without demanding ascents.\n\nWe visit Orlovačko Lake, Donje Bare and panoramic viewpoints overlooking Maglić, Volujak and Lebršnik. For those who want more movement, there is an option to walk to Gornje Bare. The programme is flexible and adapted to the group — the goal is to be present in the landscape, not to race through it.\n\nLunch is served in the open air on Zelengora. We return to Tjentište in the afternoon, with the evening reserved for rest, dinner and reflection.",
      },
      {
        dayTitle: "Day 4 — Hrčavka canyoning",
        description:
          "The fourth day is dedicated to canyoning through Hrčavka canyon — one of the most spectacular canyoning routes in the region. Hrčavka is not extreme, but it is intense and full of content: water, rock, natural pools, passages and jumps for those who want them.\n\nAfter breakfast at Tjentište we collect the full canyoning kit — wetsuit, helmet and safety vest. A short safety briefing, and we enter the canyon. Canyoning lasts several hours with breaks and lunch packs during the activity.\n\nWe return to Tjentište in the afternoon. After showering and resting, dinner and the last evening of the tour follow — conversation, laughter and five days worth of memories.",
      },
      {
        dayTitle: "Day 5 — Valley of Heroes and end of tour",
        description:
          "The last morning. Breakfast at Tjentište, then a gentle walk through the Battle of Sutjeska Memorial Complex. The Valley of Heroes, the Monument to the Fallen and the quiet of a place that carries one of the most powerful stories of this region — a calm and dignified end to the tour.\n\nNo rush, no pressure. We walk slowly, talk and close what we began on Maglić. The tour ends at Tjentište, from where everyone makes their own way home — but not in quite the same state they arrived.",
      },
    ],
    includes: [
      "Licensed guide Petar — all 5 days",
      "Off-road vehicle transfers throughout the tour",
      "1 night camping at Trnovačko Lake (tent, sleeping bag, mat)",
      "3 nights in bungalows at Tjentište",
      "11 meals (lunch packs Day 1 and Day 4, homestead breakfast Day 2, dinner Day 1 and Day 2, breakfast + lunch + dinner Day 3, breakfast + dinner Day 4, breakfast Day 5)",
      "Coffee and breakfast at the mountain homestead",
      "Full canyoning equipment (wetsuit, helmet, vest)",
      "Transport of camping equipment to Trnovačko Lake",
      "Sutjeska NP and Piva Nature Park entrance fees",
      "Residence taxes",
      "Transport by arrangement — Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb, Tirana (not included in price)",
    ],
    excludes: [
      "Personal equipment (hiking boots, backpack, swimwear)",
      "Drinks throughout the tour",
      "Transport to Foča and back (transfers from Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb and Tirana available by arrangement, not included in price)",
      "Expenses outside the programme",
    ],
    faqs: [
      {
        q: "What level of fitness is required?",
        a: "The Maglić ascent on Day 1 is the most demanding part of the tour and requires good physical fitness. The remaining days range from moderate to easy. We recommend regular physical activity before departure. If you have any doubts, contact us before booking — we will honestly tell you whether this tour is right for you.",
      },
      {
        q: "Can you organise transport from Belgrade, Sarajevo or other cities?",
        a: "Yes. We organise transfers from Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb and Tirana by arrangement. Transport is not included in the tour price — contact us with the number of people and departure point and we will send you options and pricing.",
      },
      {
        q: "Is this tour available for solo travellers or only for groups?",
        a: "The tour is organised exclusively for private groups of 6 to 16 people. If you are a smaller group or a couple, get in touch — we can sometimes combine groups with the same dates.",
      },
      {
        q: "What is breakfast at the mountain homestead like?",
        a: "Katun homesteads are mountain dwellings where people still live without electricity or signal, with their livestock and a traditional way of life. Breakfast there is not a restaurant meal — it is freshly made fried dough, homemade kajmak, warm milk, prosciutto and cheese, prepared on the spot. One of the most authentic moments of the entire tour.",
      },
      {
        q: "Will we receive information before departure?",
        a: "Yes. All participants will be added to the tour WhatsApp group a few days before departure. There you will receive exact information on timing, equipment, the weather forecast and all important instructions. We are also available for any questions before the tour.",
      },
    ],
  },
  {
    id: "multi-divlja-bosna-cg-01",
    slug: "divlja-bosna-i-crna-gora-7-dana",
    title: "Wild Bosnia & Montenegro – 7 Days",
    category: "multi-day",
    location: "Sutjeska NP / Tara / Durmitor / Piva Lake",
    image: "/images/tours/put-na-prutaš.webp",
    imageAlt: "Wild Bosnia and Montenegro – 7 days, Sutjeska, Tara, Durmitor, Piva Lake",
    imagePosition: "center 60%",
    shortDescription:
      "Seven days through the heart of the Balkans. Maglić, Trnovačko Lake, mountain homesteads, canyoning, rafting the Tara, Durmitor and kayaking on Piva Lake — one tour that covers everything this region has to offer.",
    aboutTour: `Seven days. Two countries. Several mountains. One river you remember for the rest of your life.

This tour begins where everything begins — on Maglić, the highest peak in Bosnia and Herzegovina. It continues through mountain homesteads where people still live without electricity or signal, through Hrčavka canyon, down the Tara river with skippers who know it like their own home, to the foot of Durmitor and finally to Piva Lake where 45 kilometres of silence between canyon walls await beneath kayak paddles.

This is not a tour for those who want a hotel and a minute-by-minute programme. This is a tour for those who want to feel the landscape — all of it. Mountain, river, canyon and lake. Petar is with you for all seven days, and he knows every detail of this terrain — he is a licensed guide and skipper with over ten years of experience on the Tara.

Transport to Foča is arranged separately — we organise transfers from Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb and Tirana by arrangement, not included in the price.`,
    duration: "7 days / 6 nights",
    difficulty: "Moderate",
    price: "960€ per person",
    groupSize: "6–16 people",
    transport: "By arrangement – Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb, Tirana",
    dates: [],
    highlights: [
      "Maglić summit (2,386m) — highest peak in BiH",
      "Camping at Trnovačko Lake",
      "Breakfast at a mountain homestead — homemade cheese, kajmak, warm milk, prosciutto",
      "Coffee with a local at Prijevor",
      "Perućica rainforest viewpoints",
      "Zelengora — lakes and panoramic viewpoints",
      "Hrčavka canyoning",
      "Rafting the Tara — our way (licensed skipper)",
      "Durmitor photo safari + Žabljak + Black Lake",
      "Kayaking on Piva Lake (45km, surrounded by canyon)",
      "Camp on the Tara riverbank",
      "Camp above Piva Lake",
      "16 meals included",
      "Private groups only — 6 to 16 people",
    ],
    itinerary: [
      {
        dayTitle: "Day 1 — Prijevor, Maglić summit and camping at Trnovačko Lake",
        description:
          "The group meets in Foča and we drive in off-road vehicles to Prijevor at around 1,520m. While the camping equipment is transported to Trnovačko Lake, we set off on the ascent to Maglić.\n\nThe climb takes around 3.5 to 4 hours and is physically demanding. We move at a controlled pace with breaks and lunch packs. The view from the summit — Zelengora, Volujak, Lebršnik, Treskavica and the Adriatic in the distance — is a reward that justifies every step.\n\nFrom the summit we descend to Trnovačko Lake, where the camp and dinner await. Evening by the fire on the shore of one of the most beautiful mountain lakes in the Balkans. No signal, no phones — just the fire, the group and the silence of the mountain.",
      },
      {
        dayTitle: "Day 2 — Mountain homestead, local host at Prijevor and Perućica viewpoints",
        description:
          "We wake up at Trnovačko Lake. A short 15-minute walk brings us to the katun homesteads where hosts live without electricity or signal, in stone houses with their livestock and an unchanged mountain rhythm.\n\nBreakfast: fried dough, homemade kajmak, warm milk, prosciutto, cheese. We eat slowly while the hosts share stories about life on the mountain.\n\nWe return to Prijevor where Miloš awaits — a man who has spent his whole life here and knows every stone of this mountain. Coffee, conversation and a first-hand account of what this place truly looks like from the inside.\n\nAfter coffee we drive to the Perućica rainforest viewpoints, from where Skakavac waterfall and the ancient forest spread out below. We arrive at Tjentište in the afternoon, check into bungalows and have dinner.",
      },
      {
        dayTitle: "Day 3 — Zelengora, lakes and viewpoints",
        description:
          "After breakfast at Tjentište we head to Zelengora. The day is easy and open — no demanding ascents, focused on being present in the landscape.\n\nWe visit Orlovačko Lake, Donje Bare and panoramic viewpoints overlooking Maglić, Volujak and Lebršnik. For those who want more movement, there is an option to walk to Gornje Bare. Lunch in the open air on Zelengora.\n\nWe return to Tjentište in the afternoon, with dinner and rest to follow.",
      },
      {
        dayTitle: "Day 4 — Hrčavka canyoning and camp on the Tara",
        description:
          "After breakfast at Tjentište we collect the canyoning kit — wetsuit, helmet and vest. A short briefing and we enter Hrčavka canyon. Canyoning lasts several hours with breaks and lunch packs. Water, rock, natural pools and jumps for those who want them — intense but not extreme.\n\nAfter canyoning we do not return to Tjentište. We drive directly to the camp on the Tara. Dinner and real relaxation by the sound of the river. This transition — from canyon to riverbank — is one of the most powerful moments of the tour.",
      },
      {
        dayTitle: "Day 5 — Rafting the Tara",
        description:
          "Breakfast at the camp on the Tara riverbank. We collect the rafting equipment and head to the put-in point.\n\nRafting the Tara our way means a full day on the river without rush or time pressure. We float through the canyon, stop where we like, swim, jump and have lunch directly on the river. Petar is a licensed skipper with over ten years of experience on the Tara — this is not a mass-market rafting tour, this is a day on the river with a crew that knows what it is doing.\n\nBack at camp, dinner and the quiet satisfaction of one of the freest days of the entire tour.",
      },
      {
        dayTitle: "Day 6 — Durmitor photo safari and camp above Piva Lake",
        description:
          "Breakfast at camp, pack up and drive towards Durmitor. The road passes through some of the most dramatic landscapes in the Balkans — canyon rims, black pine forests, limestone ridges and a sky that keeps getting closer.\n\nOn Durmitor we do a photo safari — viewpoints, Žabljak town and a walk to the Black Lake, a UNESCO World Heritage site. Emerald-green water beneath Međed peak, pine forest and the silence of the massif.\n\nIn the afternoon we drive to Plužine and the camp above Piva Lake. One of the most beautiful spots on the tour — a camp on a ridge with views over the lake and the canyons that surround it. Dinner and the last evening of the tour.",
      },
      {
        dayTitle: "Day 7 — Kayaking on Piva Lake and return to Foča",
        description:
          "The last morning. Breakfast at the camp above Piva Lake, then we make our way down to the water.\n\nPiva Lake stretches for 45 kilometres, surrounded by canyon walls and perfectly silent. Two hours of paddling through stillness between cliffs reflected in the water. No kayaking experience? Perfect — the water is calm and the guide is there.\n\nAfter kayaking we drive back to Foča. The tour ends where it began — but you are not the same as when you set out. Seven days of mountain, canyon, river and lake stay with you long after you get home.",
      },
    ],
    includes: [
      "Licensed guide and skipper Petar — all 7 days",
      "Off-road vehicle transfers throughout the tour",
      "1 night camping at Trnovačko Lake",
      "2 nights in bungalows at Tjentište",
      "1 night at the camp on the Tara riverbank",
      "1 night at the camp above Piva Lake",
      "16 meals throughout the tour",
      "Breakfast and coffee at the mountain homestead",
      "Full canyoning equipment",
      "Full rafting equipment",
      "Kayak equipment on Piva Lake",
      "Transport of camping equipment",
      "Sutjeska NP, Piva Nature Park and Durmitor NP entrance fees",
      "Residence taxes",
      "Transport by arrangement — Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb, Tirana (not included in price)",
    ],
    excludes: [
      "Personal equipment (hiking boots, backpack, swimwear)",
      "Drinks throughout the tour",
      "Transport to Foča and back (transfers available by arrangement, not included in price)",
      "Expenses outside the programme",
    ],
    faqs: [
      {
        q: "What level of fitness is required?",
        a: "The Maglić ascent on Day 1 is the most demanding part of the tour. The remaining days range from moderate to easy. Rafting and kayaking require no previous experience. We recommend regular physical activity before departure.",
      },
      {
        q: "Is the rafting safe?",
        a: "Yes. Petar is a licensed skipper with over ten years of experience on the Tara river. We run the rafting our way — without rush, in safe rafts, with full equipment. This is not extreme rafting; it is a day of enjoyment on one of Europe's most beautiful rivers.",
      },
      {
        q: "Can you organise transport from Belgrade, Sarajevo or other cities?",
        a: "Yes. We organise transfers from Belgrade, Sarajevo, Dubrovnik, Podgorica, Zagreb and Tirana by arrangement. Transport is not included in the tour price — contact us with the number of people and departure point.",
      },
      {
        q: "Will we receive information before departure?",
        a: "Yes. All participants will be added to the tour WhatsApp group a few days before departure with full information on equipment, timing and the weather forecast.",
      },
    ],
  },
];

export function getAdventureENBySlug(slug: string): Adventure | undefined {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return adventuresEN.find((a) => a.slug.trim().toLowerCase() === s);
}

export const popularAdventuresEN = adventuresEN.filter((a) => a.category === "popular");
export const premiumAdventuresEN = adventuresEN.filter((a) => a.category === "premium");
export const dayTripAdventuresEN = adventuresEN.filter((a) => a.category === "day-trip");
export const multiDayAdventuresEN = adventuresEN.filter((a) => a.category === "multi-day");
