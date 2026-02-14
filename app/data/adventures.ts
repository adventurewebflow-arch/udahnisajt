export interface Adventure {
  id: string;
  slug: string;
  title: string;
  category: "popular" | "premium" | "day-trip";
  location: string;
  shortDescription: string;
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

export const adventures: Adventure[] = [
  // POPULAR TOURS
  {
    id: "1",
    slug: "kampovanje-trnovacko-jezero-maglic",
    title: "Kampovanje na Trnovačkom jezeru s usponom na Maglić",
    category: "popular",
    location: "NP Sutjeska / Trnovačko jezero / Maglić",
    imagePosition: "center 75%",
    shortDescription: "Nezaboravna avantura kombinujući kampovanje na jednom od najljepših jezera u BiH sa usponom na najviši vrh zemlje.",
    duration: "3 dana / 2 noći",
    difficulty: "Srednja",
    price: "170€ po osobi",
    groupSize: "6–16 osoba",
    discount: "15% popusta za grupe od 4+ osoba",
    dates: [
      "15.03.2026",
      "22.03.2026",
      "05.04.2026",
      "12.04.2026",
      "19.04.2026",
      "26.04.2026",
      "03.05.2026"
    ],
    image: "/images/tours/kampovanje-trnovacko/trnovacko-jezero-card.webp",
    imageAlt: "Kampovanje na Trnovačkom jezeru s usponom na Maglić – NP Sutjeska, Trnovačko jezero",
    highlights: [
      "Trnovačko jezero",
      "Uspon na Maglić",
      "Kampovanje",
      "Panoramski pogledi"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Dolazak i kampovanje na Trnovačkom jezeru",
        description: "Sastanak u Foči ujutro. Transfer do NP Sutjeska i šetnja do Trnovačkog jezera. Postavljanje kampa i upoznavanje sa grupom. Večera uz jezero i uživanje u prekrasnom zalasku sunca."
      },
      {
        dayTitle: "Dan 2: Uspon na Maglić",
        description: "Rani početak sa doručkom. Uspon na Maglić (2386m) uz iskusnog vodiča. Prekrasni panoramski vidici na okolne planine i jezera. Povratak u kamp i večera."
      },
      {
        dayTitle: "Dan 3: Posljednji dan i povratak",
        description: "Lagani doručak i pakovanje. Kratka šetnja oko jezera i fotografisanje. Povratak u Foču sa nezaboravnim uspomenama."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "2 noći kampovanja",
      "Svi obroci tokom ture",
      "Osnovna oprema za kampiranje (šatori, spavaće vreće)",
      "Osiguranje",
      "Osnovna oprema za planinarenje"
    ],
    excludes: [
      "Lična oprema (planinske cipele, ruksak)",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li je potrebna posebna fizička kondicija?",
        a: "Tura je srednje težine. Preporučujemo redovnu fizičku aktivnost najmanje mjesec dana prije ture. Uspon na Maglić traje oko 6-7 sati."
      },
      {
        q: "Šta trebam ponijeti sa sobom?",
        a: "Planinske cipele, ruksak (min. 40L), voda (min. 2L), hrana za snagu, odjeća za sve vremenske prilike, osobne stvari. Detaljnu listu šaljemo prije ture."
      },
      {
        q: "Kako funkcioniše popust za grupe?",
        a: "Grupe od 4 ili više osoba dobijaju 15% popusta na cijenu. Popust se primjenjuje automatski pri rezervaciji."
      },
      {
        q: "Šta ako je loše vrijeme?",
        a: "Ako očekujemo loše vrijeme, javljamo vam 48 sati prije ture. U takvim slučajevima možemo reorganizovati termin ili vratiti uplatu."
      }
    ]
  },
  {
    id: "2",
    slug: "kampovanje-zelengora-bregoč-jeep-safari",
    title: "Kampovanje na Zelengori sa usponom na Bregoč + Jeep safari",
    category: "popular",
    location: "NP Sutjeska / Zelengora",
    imagePosition: "center 70%",
    shortDescription: "Kombinovana tura koja spaja planinarenje, kampovanje i avanturistički jeep safari kroz prekrasne dinarske livade.",
    duration: "3 dana / 2 noći",
    difficulty: "Laka",
    price: "150€ po osobi",
    groupSize: "6–16 osoba",
    dates: [
      "08.03.2026",
      "15.03.2026",
      "22.03.2026",
      "29.03.2026",
      "05.04.2026",
      "12.04.2026",
      "19.04.2026"
    ],
    image: "/images/tours/zelengora/zelengora-kampovanje-card.webp",
    imageAlt: "Kampovanje na Zelengori sa usponom na Bregoč i Jeep safari – NP Sutjeska, Zelengora",
    highlights: [
      "Orlovačko jezero",
      "Bregoč (najviši vrh Zelengore)",
      "Jeep safari Štirinsko jezero",
      "Kampovanje",
      "Dinarske livade"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Dolazak i kampovanje na Orlovačkom jezeru",
        description: "Sastanak u Foči ujutro. Transfer do Zelengore i šetnja do Orlovačkog jezera. Postavljanje kampa i upoznavanje sa grupom. Večera uz jezero."
      },
      {
        dayTitle: "Dan 2: Uspon na Bregoč i jeep safari",
        description: "Rani početak sa doručkom. Uspon na Bregoč (2017m) - najviši vrh Zelengore. Prekrasni vidici na okolna jezera i planine. Poslijepodne jeep safari do Štirinskog jezera kroz dinarske livade. Večera u kampu."
      },
      {
        dayTitle: "Dan 3: Posljednji dan i povratak",
        description: "Lagani doručak i pakovanje. Kratka šetnja oko jezera. Povratak u Foču."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Jeep safari transfer",
      "2 noći kampovanja",
      "Svi obroci tokom ture",
      "Osnovna oprema za kampiranje",
      "Osiguranje"
    ],
    excludes: [
      "Lična oprema",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li je tura pogodna za početnike?",
        a: "Da, ova tura je laka i pogodna za sve uzraste. Uspon na Bregoč je pristupačan i ne zahtijeva posebnu fizičku kondiciju."
      },
      {
        q: "Šta je uključeno u jeep safari?",
        a: "Jeep safari uključuje transfer do Štirinskog jezera kroz prekrasne dinarske livade, sa mogućnošću fotografisanja divlje prirode i uživanja u prekrasnim vidicima."
      },
      {
        q: "Gdje se kampuje?",
        a: "Kampovanje je na Orlovačkom jezeru, jednom od najljepših jezera na Zelengori, sa prekrasnim vidicima i pristupom vodi."
      }
    ]
  },
  {
    id: "3",
    slug: "rafting-tarom-na-nas-nacin",
    title: "Rafting Tarom – na naš način",
    category: "popular",
    location: "Rijeka Tara / Foča",
    shortDescription: "Jedinstvena rafting avantura kroz kanjon rijeke Tare sa dodatnim aktivnostima i nezaboravnim trenutcima.",
    duration: "3 dana / 2 noći",
    difficulty: "Lako",
    price: "Na upit",
    groupSize: "6–16 osoba",
    dates: [
      "10.03.2026",
      "17.03.2026",
      "24.03.2026",
      "31.03.2026",
      "07.04.2026",
      "14.04.2026",
      "21.04.2026"
    ],
    image: "/images/tours/rafting-tara/rafting-hero-card.webp",
    imageAlt: "Rafting Tarom kroz kanjon – brzaci, rijeka i priroda",
    highlights: [
      "25 km raftinga",
      "Kupanje i skokovi",
      "Ručak na rijeci",
      "Muzika uveče",
      "Kombinacije sa hiking/zipline/jeep safari"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Dolazak i upoznavanje sa Tarom",
        description: "Sastanak u Foči ujutro. Transfer do rijeke Tare. Upoznavanje sa opremom i sigurnosnim procedurama. Kratka probna vožnja. Večera i noćenje."
      },
      {
        dayTitle: "Dan 2: Rafting avantura",
        description: "Rani početak sa doručkom. Cjelodnevni rafting kroz kanjon Tare (25 km) sa pauzama za kupanje i skokove sa stijena. Ručak na rijeci. Večera i uživanje uz muziku."
      },
      {
        dayTitle: "Dan 3: Dodatne aktivnosti i povratak",
        description: "Doručak i izbor dodatnih aktivnosti: hiking, zipline ili jeep safari (opciono). Ručak i povratak u Foču."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Rafting oprema (čamac, vesla, prsluk, kaciga)",
      "2 noćenja",
      "Svi obroci tokom ture",
      "Osiguranje",
      "Profesionalni fotograf"
    ],
    excludes: [
      "Lična oprema (kupaći kostim, obuća za vodu)",
      "Dodatne aktivnosti (hiking, zipline, jeep safari)",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li trebam imati iskustvo sa raftingom?",
        a: "Ne, ova tura je pogodna i za početnike. Naši vodiči će vas uputiti u sve potrebno i osigurati sigurnost tokom cijele ture."
      },
      {
        q: "Šta trebam ponijeti za rafting?",
        a: "Kupaći kostim, obuću koja se može mokra (ne cipele), sunčane naočale sa vezom, kremu za sunce, i suhu odjeću za nakon raftinga."
      },
      {
        q: "Kako funkcionišu dodatne aktivnosti?",
        a: "Dodatne aktivnosti (hiking, zipline, jeep safari) su opcione i mogu se rezervisati na licu mjesta ili unaprijed. Cijene se razlikuju po aktivnosti."
      },
      {
        q: "Zašto je cijena 'Na upit'?",
        a: "Cijena zavisi od broja učesnika, datuma i dodatnih aktivnosti. Kontaktirajte nas za tačnu ponudu prilagođenu vašim potrebama."
      }
    ]
  },
  {
    id: "4",
    slug: "porodicni-vikend-tjentiste-zelengora",
    title: "Porodični vikend – Tjentište i Zelengora",
    category: "popular",
    location: "Tjentište / Zelengora",
    shortDescription: "Specijalno dizajnirana porodična tura koja omogućava svim članovima porodice da uživaju u prirodi i uče o okolini.",
    duration: "3 dana / 2 noći",
    difficulty: "Lako",
    price: "Na upit",
    groupSize: "6–20 osoba",
    dates: [
      "14.03.2026",
      "21.03.2026",
      "28.03.2026",
      "04.04.2026",
      "11.04.2026",
      "18.04.2026",
      "25.04.2026"
    ],
    image: "/images/tours/porodicni-vikend-tjentiste-zelengora/porodicni-vikend-zelengora-tjentiste.webp",
    imageAlt: "Porodični vikend na Tjentištu i Zelengori – priroda i šetnje",
    highlights: [
      "Edukativne šetnje",
      "Aktivnosti za djecu",
      "Tjentište spomenik",
      "Zelengora jezera",
      "Porodično kampovanje"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Dolazak i upoznavanje sa Tjentištem",
        description: "Sastanak u Foči ujutro. Transfer do Tjentišta. Posjeta spomeniku i edukativna šetnja sa vodičem. Postavljanje kampa i upoznavanje sa grupom. Večera i aktivnosti za djecu."
      },
      {
        dayTitle: "Dan 2: Istraživanje Zelengore",
        description: "Doručak i transfer do Zelengore. Edukativna šetnja kroz prirodu sa fokusom na floru i faunu. Posjeta jezerima i uživanje u prirodi. Aktivnosti prilagođene djeci. Večera u kampu."
      },
      {
        dayTitle: "Dan 3: Finalne aktivnosti i povratak",
        description: "Lagani doručak i pakovanje. Kratke igre i aktivnosti za djecu. Ručak i povratak u Foču sa nezaboravnim uspomenama."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "2 noći kampovanja",
      "Svi obroci tokom ture",
      "Edukativne šetnje",
      "Aktivnosti za djecu",
      "Osnovna oprema za kampiranje",
      "Osiguranje"
    ],
    excludes: [
      "Lična oprema",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Za koje uzraste djece je tura pogodna?",
        a: "Tura je dizajnirana za djecu od 4 do 14 godina, ali svi članovi porodice mogu uživati. Aktivnosti su prilagođene različitim uzrastima."
      },
      {
        q: "Da li je sigurno za djecu?",
        a: "Apsolutno. Svi naši vodiči su obučeni za rad sa djecom i porodicama. Tereni su laki i sigurni, a sve aktivnosti su pod nadzorom."
      },
      {
        q: "Šta uključuju edukativne šetnje?",
        a: "Edukativne šetnje uključuju učenje o lokalnoj flori i fauni, geologiji, istoriji regije i važnosti očuvanja prirode na način razumljiv djeci."
      },
      {
        q: "Kako funkcioniše cijena za djecu?",
        a: "Cijena zavisi od broja odraslih i djece u grupi. Kontaktirajte nas za detaljnu ponudu prilagođenu vašoj porodici."
      }
    ]
  },
  {
    id: "POP-01MAY-01",
    slug: "prvomajska-avantura",
    title: "PRVOMAJSKA AVANTURA",
    category: "popular",
    location: "Tjentište / NP Sutjeska / Zelengora",
    image: "/images/tours/premium/ekipa-prvi-maj.webp",
    imageAlt: "Prvomajska avantura na Tjentištu – bungalovi, ture po Sutjesci i izlet na Zelengoru",
    imagePosition: "center 55%",
    shortDescription: "Prvomajski aranžman u bungalovima na Tjentištu: smještaj, hrana, ulaznice i dvije velike avanture — subota po izboru (Trnovačko jezero ili Prašuma Perućica), nedjelja lagana tura po Zelengori.",
    duration: "3 dana / 2 noći",
    difficulty: "Srednja",
    price: "165€ po osobi",
    groupSize: "8–20 osoba",
    discount: "",
    dates: ["01.05.2026"],
    highlights: [
      "Bungalovi na Tjentištu (2 noći)",
      "Subota: Trnovačko jezero (srednje) ili Prašuma Perućica (zahtjevnije)",
      "Nedjelja: Zelengora (Donje i Gornje bare + vidikovac Borić) — lakša tura",
      "Lunch paketi za ture",
      "Subotnja žurka i druženje",
      "Ulaznice: NP Sutjeska + Park prirode Piva"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1 (petak): Dolazak na Tjentište",
        description: "Dolazak i smještaj u bungalove na Tjentištu. Večera, upoznavanje grupe i opušteno druženje."
      },
      {
        dayTitle: "Dan 2 (subota): Izbor avanture + žurka",
        description: "Doručak. Odlazak na jednu od opcija: Trnovačko jezero (srednje zahtjevno) ili Prašuma Perućica (zahtjevnije). Lunch paket. Povratak, večera i žurka/druženje."
      },
      {
        dayTitle: "Dan 3 (nedjelja): Zelengora (lakša tura) i završetak",
        description: "Doručak. Lakša tura po Zelengori: Donje i Gornje bare + vidikovac Borić. Lunch paket. Povratak na Tjentište i završetak aranžmana."
      }
    ],
    includes: [
      "Smještaj u bungalovima na Tjentištu (2 noći)",
      "Večera (petak), doručak + lunch paket (subota), večera (subota), doručak + lunch paket (nedjelja)",
      "Ulaznice: NP Sutjeska i Park prirode Piva",
      "Organizacija i vođenje ture",
      "Bez skrivenih troškova (piće nije uključeno)"
    ],
    excludes: [
      "Piće",
      "Lični troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li moram izabrati opciju unaprijed (Trnovačko ili Perućica)?",
        a: "Preporučujemo da izbor potvrdite ranije radi organizacije, ali se u dogovoru može uskladiti."
      },
      {
        q: "Koja opcija je lakša u subotu?",
        a: "Trnovačko jezero je srednje zahtjevno, dok je Prašuma Perućica zahtjevnija."
      },
      {
        q: "Šta je uključeno u cijenu?",
        a: "Smještaj, hrana, lunch paketi, ulaznice i organizacija — bez skrivenih troškova. Piće nije uključeno."
      }
    ]
  },
  // PREMIUM TOUR
  {
    id: "5",
    slug: "tura-za-malo-jace-ljude-maglic-trnovacko-rafting",
    title: "Tura za malo jače ljude – Maglić, Trnovačko jezero i rafting Tarom",
    category: "premium",
    location: "NP Sutjeska / Trnovačko / Maglić / Tara",
    shortDescription: "Zahtjevna kombinovana tura koja spaja planinarenje, kampovanje i rafting za iskusne avanturiste koji traže izazov.",
    duration: "3 dana / 2 noći",
    difficulty: "Zahtjevna",
    price: "220€",
    groupSize: "max 16",
    image: "/images/tours/premium/top-tura-rafting-tarom-maglic-perucica.webp",
    imageAlt: "Maglić, Trnovačko jezero i rafting Tarom – premium avantura u prirodi",
    highlights: [
      "Kampovanje na Prijevoru",
      "Uspon na Maglić",
      "Spust na Trnovačko",
      "Rafting Tarom"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Uspon na Maglić i kampovanje na Prijevoru",
        description: "Rani sastanak u Foči. Transfer do NP Sutjeska i direktan uspon na Maglić (2386m). Zahtjevna staza za iskusne planinare. Kampovanje na Prijevoru sa prekrasnim vidicima. Večera."
      },
      {
        dayTitle: "Dan 2: Spust na Trnovačko jezero i rafting",
        description: "Doručak i spust do Trnovačkog jezera. Kupanje i uživanje u prekrasnom okruženju. Transfer do rijeke Tare i rafting kroz kanjon. Večera i noćenje."
      },
      {
        dayTitle: "Dan 3: Finalni rafting i povratak",
        description: "Doručak i nastavak rafting avanture. Ručak na rijeci. Povratak u Foču sa nezaboravnim uspomenama izazovne ture."
      }
    ],
    includes: [
      "Iskusni vodič sa licencom",
      "Transfer iz Foče i povratak",
      "2 noći kampovanja",
      "Svi obroci tokom ture",
      "Rafting oprema",
      "Premium oprema za kampiranje",
      "Osiguranje",
      "Profesionalni fotograf"
    ],
    excludes: [
      "Lična oprema (planinske cipele, ruksak min. 50L)",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Zašto je ova tura zahtjevna?",
        a: "Tura kombinuje zahtjevni uspon na Maglić, spust sa opterećenjem, i rafting. Zahtijeva dobru fizičku kondiciju i iskustvo u planinarenju."
      },
      {
        q: "Da li trebam imati iskustvo?",
        a: "Da, preporučujemo iskustvo u planinarenju i dobru fizičku kondiciju. Ova tura nije pogodna za početnike."
      },
      {
        q: "Zašto nema fiksnih datuma?",
        a: "Premium ture organizujemo po dogovoru kako bismo osigurali optimalne vremenske uslove i personalizovani pristup svakoj grupi."
      },
      {
        q: "Kako rezervisati premium turu?",
        a: "Kontaktirajte nas direktno sa željenim terminom i brojem osoba. Organizujemo ture za grupe od minimum 4 osobe."
      }
    ]
  },
  {
    id: "P-hrcavka-perucica-01",
    slug: "hrcavka-perucica-kanjoning-prasuma-skakavac",
    title: "Hrčavka kanjoning + Prašuma Perućica i vodopad Skakavac",
    category: "premium",
    location: "Tjentište / NP Sutjeska / Kanjon Hrčavke / Prašuma Perućica",
    image: "/images/tours/premium/kanjoning-prasuma-perucica.webp",
    imageAlt: "Kanjoning Hrčavka i prašuma Perućica do vodopada Skakavac – premium tura u Nacionalnom parku Sutjeska",
    imagePosition: "center 55%",
    shortDescription: "Premium vikend aranžman: kanjoning u Hrčavki i obilazak prašume Perućice do vodopada Skakavac, uz smještaj na Tjentištu, obroke i druženje oko vatre.",
    duration: "3 dana / 2 noći",
    difficulty: "Srednja",
    price: "270€ po osobi",
    groupSize: "8–13 osoba",
    discount: "",
    dates: ["18.07.2026", "19.07.2026"],
    highlights: [
      "Kanjoning Hrčavka (oko 4 sata)",
      "Prašuma Perućica",
      "Vodopad Skakavac",
      "Smještaj na Tjentištu",
      "Večernje druženje oko vatre",
      "Kompletna kanjoning oprema uključena (najviši standardi)"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1 (petak): Dolazak na Tjentište",
        description: "Dolazak i smještaj na Tjentištu. Večera, slobodno vrijeme i druženje oko vatre. Noćenje."
      },
      {
        dayTitle: "Dan 2 (subota): Kanjoning Hrčavka",
        description: "Doručak. Odlazak na kanjoning u Hrčavku (oko 4 sata). Povratak u bazu, večera i slobodno vrijeme. Noćenje."
      },
      {
        dayTitle: "Dan 3 (nedjelja): Prašuma Perućica i Skakavac",
        description: "Doručak. Odlazak u prašumu Perućicu i obilazak do vodopada Skakavac. Povratak na Tjentište i završetak ture."
      }
    ],
    includes: [
      "Smještaj na Tjentištu (2 noći)",
      "Večera (petak), doručak (subota), večera (subota), doručak (nedjelja)",
      "Licencirani vodič i organizacija ture",
      "Kompletna oprema za kanjoning (najviši standardi)",
      "Sigurnosni brifing i podrška tokom aktivnosti"
    ],
    excludes: [
      "Piće",
      "Lična oprema (obuća/odjeća)",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li je tura fizički zahtjevna?",
        a: "Tura je srednje zahtjevna. Kanjoning traje oko 4 sata i zahtijeva osnovnu kondiciju i spremnost na boravak u prirodi."
      },
      {
        q: "Da li je oprema za kanjoning uključena?",
        a: "Da. Kompletna oprema za kanjoning je uključena, po najvišim standardima."
      },
      {
        q: "Šta ponijeti?",
        a: "Rezervnu odjeću, peškir, slojevitu odjeću za večernje sate i lične stvari. Detaljnu listu šaljemo prije polaska."
      },
      {
        q: "Šta ako je loše vrijeme?",
        a: "U slučaju nepovoljnih uslova, tura se prilagođava ili se dogovara novi termin."
      }
    ]
  },
  // DAY TRIPS
  {
    id: "6",
    slug: "zelengora-uspon-bregoč",
    title: "Zelengora – uspon na Bregoč",
    category: "day-trip",
    location: "NP Sutjeska – Zelengora (Bregoč)",
    imagePosition: "center 70%",
    shortDescription: "Jednodnevna tura na najviši vrh Zelengore sa prekrasnim vidicima na okolna jezera i planine.",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "Na upit",
    groupSize: "6–16 osoba",
    image: "/images/tours/day-trips/zelengora-bregoc.webp",
    highlights: [
      "Bregoč (2017m)",
      "Panoramski vidici",
      "Zelengora jezera",
      "Dinarske livade"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Sastanak u Foči ujutro. Transfer do Zelengore i početak uspona na Bregoč. Uspon traje oko 4-5 sati uz vodiča. Prekrasni vidici na okolna jezera i planine. Ručak na vrhu ili u kampu. Povratak u Foču uveče."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Ručak",
      "Osiguranje"
    ],
    excludes: [
      "Lična oprema",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Koliko traje uspon?",
        a: "Uspon na Bregoč traje oko 4-5 sati, ovisno o kondiciji grupe. Spust traje oko 3 sata."
      },
      {
        q: "Da li je potrebna posebna oprema?",
        a: "Potrebne su planinske cipele, ruksak sa vodom i hranom, i odjeća za sve vremenske prilike."
      },
      {
        q: "Kako rezervisati?",
        a: "Kontaktirajte nas sa željenim datumom. Organizujemo ture po dogovoru za grupe od minimum 4 osobe."
      }
    ]
  },
  {
    id: "7",
    slug: "zelengora-jezera-vidikovci",
    title: "Zelengora – jezera i vidikovci",
    category: "day-trip",
    location: "NP Sutjeska – Zelengora",
    imagePosition: "center 70%",
    shortDescription: "Jednodnevna šetnja kroz najljepša jezera Zelengore sa prekrasnim vidikovcima i fotografskim prilikama.",
    duration: "1 dan",
    difficulty: "Laka",
    price: "Na upit",
    groupSize: "6–20 osoba",
    image: "/images/tours/day-trips/zelengora-jezera.webp",
    highlights: [
      "Orlovačko jezero",
      "Štirinsko jezero",
      "Panoramski vidikovci",
      "Fotografiranje prirode"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Sastanak u Foči ujutro. Transfer do Zelengore. Šetnja kroz prekrasna jezera - Orlovačko, Štirinsko i druga. Uživanje u vidikovcima i fotografisanje. Ručak uz jezero. Povratak u Foču uveče."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Ručak",
      "Osiguranje"
    ],
    excludes: [
      "Lična oprema",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li je tura pogodna za početnike?",
        a: "Da, ova tura je laka i pogodna za sve uzraste. Tereni su pristupačni i ne zahtijevaju posebnu fizičku kondiciju."
      },
      {
        q: "Koliko jezera posjećujemo?",
        a: "Posjećujemo najmanje 3-4 jezera, uključujući Orlovačko i Štirinsko, ovisno o vremenu i kondiciji grupe."
      }
    ]
  },
  {
    id: "8",
    slug: "prasuma-perucica-vodopad-skakavac",
    title: "Prašuma Perućica i vodopad Skakavac",
    category: "day-trip",
    location: "NP Sutjeska – Prašuma Perućica",
    imagePosition: "center 70%",
    shortDescription: "Jednodnevna tura kroz najstariju prašumu u Evropi sa posjetom impresivnom vodopadu Skakavac.",
    duration: "1 dan",
    difficulty: "Laka",
    price: "Na upit",
    groupSize: "6–20 osoba",
    image: "/images/tours/day-trips/perucica-skakavac.webp",
    highlights: [
      "Prašuma Perućica",
      "Vodopad Skakavac",
      "Edukativna šetnja",
      "Netaknuta priroda"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Sastanak u Foči ujutro. Transfer do NP Sutjeska. Edukativna šetnja kroz prašumu Perućica sa vodičem koji objašnjava značaj i historiju prašume. Posjeta vodopadu Skakavac (75m). Ručak u prirodi. Povratak u Foču uveče."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Ručak",
      "Osiguranje",
      "Edukativni sadržaj"
    ],
    excludes: [
      "Lična oprema",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Šta je posebno u prašumi Perućica?",
        a: "Perućica je najstarija prašuma u Evropi, sa stablima starijim od 300 godina. Dom je rijetkim vrstama biljaka i životinja."
      },
      {
        q: "Koliko traje šetnja?",
        a: "Šetnja kroz prašumu traje oko 3-4 sata, uključujući posjetu vodopadu. Ukupno vrijeme ture je oko 8 sati."
      }
    ]
  },
  {
    id: "9",
    slug: "kanjoning-hrcavka",
    title: "Kanjoning Hrčavka",
    category: "day-trip",
    location: "NP Sutjeska – kanjon Hrčavke",
    shortDescription: "Adrenalinška jednodnevna kanjoning avantura kroz kanjon rijeke Hrčavke sa skokovima, plivanjem i spuštanjem.",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "Na upit",
    groupSize: "6–12 osoba",
    image: "/images/tours/day-trips/kanjoning-hrcavka.webp",
    highlights: [
      "Kanjoning kroz Hrčavku",
      "Skokovi sa stijena",
      "Plivanje u prirodnim bazenima",
      "Spuštanje niz vodopade"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Sastanak u Foči ujutro. Transfer do rijeke Hrčavke. Upoznavanje sa opremom i sigurnosnim procedurama. Kanjoning kroz kanjon sa skokovima, plivanjem i spuštanjem niz vodopade. Ručak uz rijeku. Povratak u Foču uveče."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Kanjoning oprema (prsluk, kaciga, neopren)",
      "Ručak",
      "Osiguranje"
    ],
    excludes: [
      "Lična oprema (kupaći kostim, obuća za vodu)",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li trebam imati iskustvo sa kanjoningom?",
        a: "Ne, ali preporučujemo dobru fizičku kondiciju i sposobnost plivanja. Naši vodiči će vas uputiti u sve potrebno."
      },
      {
        q: "Je li sigurno?",
        a: "Da, sve aktivnosti su pod nadzorom iskusnih vodiča sa licencom. Koristimo profesionalnu opremu i poštujemo sve sigurnosne standarde."
      },
      {
        q: "Šta trebam ponijeti?",
        a: "Kupaći kostim, obuću koja se može mokra, suhu odjeću za nakon aktivnosti, i kremu za sunce."
      }
    ]
  },
  {
    id: "10",
    slug: "trnovacko-jezero",
    title: "Trnovačko jezero",
    category: "day-trip",
    location: "Trnovačko jezero / NP Sutjeska",
    shortDescription: "Jednodnevna tura do jednog od najljepših jezera u BiH sa prekrasnim vidicima i mogućnošću kupanja.",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "Na upit",
    groupSize: "6–16 osoba",
    image: "/images/tours/day-trips/trnovacko-jezero.webp",
    highlights: [
      "Trnovačko jezero",
      "Panoramski vidici",
      "Kupanje u jezeru",
      "Fotografiranje"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Sastanak u Foči ujutro. Transfer do NP Sutjeska i šetnja do Trnovačkog jezera (oko 2-3 sata). Uživanje u prekrasnom okruženju, kupanje i fotografisanje. Ručak uz jezero. Povratak u Foču uveče."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Ručak",
      "Osiguranje"
    ],
    excludes: [
      "Lična oprema",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Koliko traje šetnja do jezera?",
        a: "Šetnja do Trnovačkog jezera traje oko 2-3 sata, ovisno o kondiciji grupe. Povratak traje slično."
      },
      {
        q: "Može li se kupati u jezeru?",
        a: "Da, voda u jezeru je čista i hladna, idealna za osvježenje tokom ljetnih mjeseci."
      }
    ]
  },
  {
    id: "11",
    slug: "maglic-trnovacko-jezero",
    title: "Maglić i Trnovačko jezero",
    category: "day-trip",
    location: "NP Sutjeska / Maglić / Trnovačko jezero",
    shortDescription: "Zahtjevna jednodnevna tura koja kombinuje uspon na najviši vrh BiH sa posjetom prekrasnom Trnovačkom jezeru.",
    duration: "1 dan",
    difficulty: "Zahtjevna",
    price: "Na upit",
    groupSize: "6–12 osoba",
    image: "/images/tours/day-trips/maglic-trnovacko.webp",
    highlights: [
      "Maglić (2386m)",
      "Trnovačko jezero",
      "Panoramski vidici",
      "Zahtjevna staza"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Vrlo rani sastanak u Foči (5-6h). Transfer do NP Sutjeska. Uspon na Maglić (2386m) - najviši vrh BiH. Spust do Trnovačkog jezera. Kratko uživanje uz jezero. Povratak u Foču uveče (oko 20h). Zahtjevna tura za iskusne planinare."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Ručak",
      "Osiguranje"
    ],
    excludes: [
      "Lična oprema (planinske cipele, ruksak min. 40L)",
      "Dodatne pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Zašto je ova tura zahtjevna?",
        a: "Tura kombinuje zahtjevni uspon na Maglić i spust do jezera u jednom danu. Ukupno vrijeme hoda je oko 10-12 sati. Zahtijeva odličnu fizičku kondiciju i iskustvo u planinarenju."
      },
      {
        q: "Da li je pogodna za početnike?",
        a: "Ne, ova tura nije pogodna za početnike. Preporučujemo iskustvo u planinarenju i odličnu fizičku kondiciju."
      },
      {
        q: "Kada počinje tura?",
        a: "Tura počinje vrlo rano (5-6h ujutro) kako bismo imali dovoljno vremena za uspon, spust i povratak prije mraka."
      }
    ]
  },
  {
    id: "12",
    slug: "jeep-safari-zelengora",
    title: "Jeep safari Zelengora",
    category: "day-trip",
    location: "NP Sutjeska – Zelengora",
    shortDescription: "Jednodnevna jeep safari tura kroz prekrasne dinarske livade Zelengore sa prekrasnim vidikovcima i mogućnošću fotografisanja.",
    duration: "1 dan",
    difficulty: "Lako",
    price: "70€ po osobi",
    groupSize: "4–16 osoba",
    image: "/images/tours/day-trips/jeep-safari-zelengora.webp",
    highlights: [
      "Jeep safari",
      "Zelengora",
      "Vidikovci",
      "Jezera"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Polazak i dolazak na Zelengoru. Jeep ruta i vidikovci. Pauze za fotografije. Povratak."
      }
    ],
    includes: [
      "Vodič",
      "Organizacija ture"
    ],
    excludes: [
      "Lični troškovi",
      "Osiguranje (po želji)"
    ],
    faqs: [
      {
        q: "Da li je potrebna posebna oprema?",
        a: "Ne, preporučene su patike i slojevita odjeća."
      }
    ]
  },
  {
    id: "13",
    slug: "via-ferata-piva",
    title: "Via ferrata Piva",
    category: "day-trip",
    location: "Park prirode Piva",
    shortDescription: "Jednodnevna via ferrata avantura u Parku prirode Piva sa prekrasnim panoramskim pogledima i sigurnim usponom uz vodiča.",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "65€ po osobi",
    groupSize: "4–16 osoba",
    image: "/images/tours/day-trips/via-ferata-piva.webp",
    highlights: [
      "Via ferrata",
      "Piva",
      "Panoramski pogledi"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Okupljanje i brifing. Oprema i sigurnosne instrukcije. Uspon via ferratom. Pauza i povratak."
      }
    ],
    includes: [
      "Vodič",
      "Osnovna oprema (kaciga/pojas)"
    ],
    excludes: [
      "Prevoz",
      "Hrana i piće"
    ],
    faqs: [
      {
        q: "Da li je sigurno za početnike?",
        a: "Da, uz vodiča i pravilnu opremu, tempo se prilagođava grupi."
      }
    ]
  }
];

export function getAdventureBySlug(slug: string): Adventure | undefined {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return adventures.find((a) => a.slug.trim().toLowerCase() === s);
}

export const popularAdventures = adventures.filter((a) => a.category === "popular");
export const premiumAdventures = adventures.filter((a) => a.category === "premium");
export const dayTripAdventures = adventures.filter((a) => a.category === "day-trip");
