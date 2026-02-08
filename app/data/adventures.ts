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
    image: "/images/tours/trnovacko-maglic.jpg",
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
    image: "/images/tours/zelengora-bregoč.jpg",
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
    image: "/images/tours/rafting-tara.jpg",
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
    image: "/images/tours/porodicni-vikend.jpg",
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
    image: "/images/tours/premium-maglic-tara.jpg",
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
  // DAY TRIPS
  {
    id: "6",
    slug: "zelengora-uspon-bregoč",
    title: "Zelengora – uspon na Bregoč",
    category: "day-trip",
    location: "Zelengora / Bregoč",
    shortDescription: "Jednodnevna tura na najviši vrh Zelengore sa prekrasnim vidicima na okolna jezera i planine.",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "Na upit",
    groupSize: "6–16 osoba",
    image: "/images/tours/day-bregoč.jpg",
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
    location: "Zelengora",
    shortDescription: "Jednodnevna šetnja kroz najljepša jezera Zelengore sa prekrasnim vidikovcima i fotografskim prilikama.",
    duration: "1 dan",
    difficulty: "Laka",
    price: "Na upit",
    groupSize: "6–20 osoba",
    image: "/images/tours/day-zelengora-jezera.jpg",
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
    location: "NP Sutjeska / Perućica",
    shortDescription: "Jednodnevna tura kroz najstariju prašumu u Evropi sa posjetom impresivnom vodopadu Skakavac.",
    duration: "1 dan",
    difficulty: "Laka",
    price: "Na upit",
    groupSize: "6–20 osoba",
    image: "/images/tours/day-perucica.jpg",
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
    location: "Hrčavka / Foča",
    shortDescription: "Adrenalinška jednodnevna kanjoning avantura kroz kanjon rijeke Hrčavke sa skokovima, plivanjem i spuštanjem.",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "Na upit",
    groupSize: "6–12 osoba",
    image: "/images/tours/day-kanjoning.jpg",
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
    location: "NP Sutjeska / Trnovačko jezero",
    shortDescription: "Jednodnevna tura do jednog od najljepših jezera u BiH sa prekrasnim vidicima i mogućnošću kupanja.",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "Na upit",
    groupSize: "6–16 osoba",
    image: "/images/tours/day-trnovacko.jpg",
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
    image: "/images/tours/day-maglic-trnovacko.jpg",
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
  }
];

export function getAdventureBySlug(slug: string): Adventure | undefined {
  return adventures.find((a) => a.slug === slug);
}

export const popularAdventures = adventures.filter((a) => a.category === "popular");
export const premiumAdventures = adventures.filter((a) => a.category === "premium");
export const dayTripAdventures = adventures.filter((a) => a.category === "day-trip");
