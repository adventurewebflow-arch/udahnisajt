export type Lang = "sr" | "en";

export interface Review {
  name: string;
  orig: Lang;
  date: Record<Lang, string>;
  tag?: Record<Lang, string>;
  featured?: boolean;
  text: Record<Lang, string>;
}

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=udahni+avanturu+-+hiking+%26+adventure+tours+sutjeska";

export const reviewStats = { rating: "5.0", count: "60+" };

export const reviews: Review[] = [
  {
    name: "Tanja A.",
    orig: "sr",
    featured: true,
    date: { sr: "avgust 2026.", en: "August 2026" },
    tag: { sr: "Zelengora · porodični dan", en: "Zelengora · family day" },
    text: {
      sr: `Početkom jula imali smo zadovoljstvo da sa ekipom Udahni avanturu provedemo jedan predivan dan na Zelengori i iskustvo je bilo za svaku preporuku.

Nevena i Petar su sve organizovali besprekorno i u potpunosti prilagodili našoj grupi. Petar je svojim znanjem učinio da planina oživi pred nama – upoznao nas je sa okolnim vrhovima, jezerima i planinama, pa izlet nije bio samo šetnja već pravo malo putovanje kroz prirodu. Nevena je pokazala neverovatno strpljenje i energiju – uspela je da četvoro dece tokom celog dana drži zainteresovanim, radoznalim i nasmejanim, što je zaista podvig.

Usput nam je pukla guma na kombiju, ali je i ta nepredviđena situacija rešena brzo, profesionalno i bez ikakvog stresa za nas. Na kraju smo se čak i tome smejali, jer je, na neki način, i to postalo deo avanture.

Hvala vam na divnom danu, odličnoj organizaciji i atmosferi. Radujemo se nekoj narednoj avanturi sa vama!`,
      en: `At the beginning of July we had the pleasure of spending a wonderful day on Zelengora with the Udahni Avanturu team, and the experience deserves every recommendation.

Nevena and Petar organised everything flawlessly and fully adapted it to our group. With his knowledge, Petar brought the mountain to life in front of us. He introduced us to the surrounding peaks, lakes and mountains, so the trip wasn't just a walk but a real little journey through nature. Nevena showed incredible patience and energy. She managed to keep four children interested, curious and smiling all day long, which is truly an achievement.

On the way we got a flat tyre on the van, but even that unexpected situation was solved quickly, professionally and without any stress for us. In the end we even laughed about it, because in a way it became part of the adventure too.

Thank you for a wonderful day, excellent organisation and atmosphere. We look forward to our next adventure with you!`,
    },
  },
  {
    name: "Nuno N.",
    orig: "en",
    date: { sr: "jul 2026.", en: "July 2026" },
    tag: { sr: "Perućica, Trnovačko, Zelengora", en: "Perućica, Trnovačko, Zelengora" },
    text: {
      en: `I had a great experience with this company. I had 3 big days out hiking in Perućica, Trnovacko and Zelengora and the guides (can call them friends) were awesome in every way. I recomend for sure booking with them.`,
      sr: `Imao sam sjajno iskustvo sa ovom agencijom. Proveo sam 3 velika dana planinareći po Perućici, Trnovačkom i Zelengori, a vodiči (mogu ih zvati prijateljima) su bili sjajni u svakom smislu. Svakako preporučujem rezervaciju kod njih.`,
    },
  },
  {
    name: "Danil",
    orig: "sr",
    date: { sr: "jul 2026.", en: "July 2026" },
    tag: { sr: "Kampovanje · dvaput sa nama", en: "Camping · came back twice" },
    text: {
      sr: `Želim da izrazim veliku zahvalnost i divljenje Neveni i Petru na odličnoj organizaciji!

Ovo nisu samo ture – ovo su putovanja na kojima se zaista oseća briga o svakom učesniku. Uvek su otvoreni za predloge, pažljivo slušaju povratne informacije i trude se da svima bude prijatno.

Posebno bih pohvalio opremu. Šatori, vreće za spavanje i podloge su čisti, sveži i prijatnog mirisa. Iskreno, imao sam osećaj kao da spavam kod kuće u sveže opranoj posteljini.

A hrana je posebna priča! Višnjina gibanica je, bez ikakvog preterivanja, bila najukusnija koju sam ikada jeo.

Sa njima sam bio već dva puta i siguran sam da ovo nije poslednji put. Vidimo se uskoro, prijatelji! ❤️🏔️`,
      en: `I want to express my great gratitude and admiration to Nevena and Petar for the excellent organisation!

These are not just tours, they are trips where you truly feel that every participant is cared for. They are always open to suggestions, listen carefully to feedback and make sure everyone feels comfortable.

I especially want to praise the equipment. The tents, sleeping bags and mats are clean, fresh and smell nice. Honestly, I felt like I was sleeping at home in freshly washed bed linen.

And the food is a story of its own! The sour cherry pie was, without any exaggeration, the tastiest I have ever eaten.

I have been with them twice already and I'm sure it won't be the last time. See you soon, friends! ❤️🏔️`,
    },
  },
  {
    name: "Dejan V.",
    orig: "sr",
    date: { sr: "septembar 2026.", en: "September 2026" },
    tag: { sr: "Trnovačko jezero · 3 dana", en: "Trnovačko Lake · 3 days" },
    text: {
      sr: `Momci pravi profesionalci, od organizatora, do samih vodiča. Ovih tri dana provedenih na fenomenalno Trnovačkom Jezeru, NIKAD neću zaboraviti. A ekipa učesnika je bila, kao da se godinama znamo.
Jedva čekam sledeću avanturu.`,
      en: `The guys are true professionals, from the organisers to the guides themselves. I will NEVER forget these three days at the phenomenal Trnovačko Lake. And the group felt like we had known each other for years.
I can't wait for the next adventure.`,
    },
  },
  {
    name: "Pavlina P.",
    orig: "sr",
    date: { sr: "avgust 2026.", en: "August 2026" },
    tag: { sr: "Trnovačko + Maglić", en: "Trnovačko + Maglić" },
    text: {
      sr: `Ovog vikenda bili smo na 3 dana, 2 noci na Trnovackom jezeru i penjali Maglic u organizaciji Udahniavantura. Veoma dobra organizacija, tacni, uvek predusretljivi , ukusna i domaca hrana. Nastavite samo tako !`,
      en: `This weekend we spent 3 days and 2 nights at Trnovačko Lake and climbed Maglić with Udahni Avanturu. Very good organisation, punctual, always helpful, tasty home-made food. Keep it up!`,
    },
  },
  {
    name: "Mirjana M.",
    orig: "sr",
    date: { sr: "avgust 2026.", en: "August 2026" },
    tag: { sr: "Trnovačko + Maglić", en: "Trnovačko + Maglić" },
    text: {
      sr: `Sve preporuke za organizatore, tura i predeli koji se pamte ceo život! Uspon na Maglić sa kampovanjem na Trnovačkom jezeru je za svaku preporuku.`,
      en: `Highly recommend the organisers, a tour and landscapes you remember for the rest of your life! The Maglić climb with camping at Trnovačko Lake is well worth it.`,
    },
  },
  {
    name: "Vanja C.",
    orig: "sr",
    date: { sr: "avgust 2026.", en: "August 2026" },
    text: {
      sr: `Predivno iskustvo . ❤️ Vodiči su bili izuzetno druželjubivi, profesionalni i pažljivi tokom cijele avanture. 🏕️✨
Sve preporuke za ekipu Udahni avanturu! Definitivno iskustvo koje bih rado ponovila. 🥰`,
      en: `A wonderful experience ❤️ The guides were extremely friendly, professional and attentive throughout the whole adventure. 🏕️✨
Highly recommend the Udahni Avanturu team! Definitely an experience I'd gladly repeat. 🥰`,
    },
  },
  {
    name: "Andjela A.",
    orig: "sr",
    date: { sr: "avgust 2026.", en: "August 2026" },
    text: {
      sr: `Najjaca ekipa. Najbolji organizatori, nemaju konkurenciju, sve preporuke🥳🥰`,
      en: `The best crew. The best organisers, no competition, highly recommended 🥳🥰`,
    },
  },
];
