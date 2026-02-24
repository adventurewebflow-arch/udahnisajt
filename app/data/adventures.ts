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
  /** description: use template literal with blank lines between paragraphs, e.g. description: `Paragraph 1...\n\nParagraph 2...`.trim() */
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
    shortDescription: "Nezaboravna avantura kombinujući kampovanje na jednom od najljepših jezera u Crnoj Gori sa usponom na najviši vrh Bosne i Hercegovine.",
    aboutTour: "Kampovanje na Trnovačkom jezeru i uspon na Maglić predstavljaju jedinstveno planinsko iskustvo koje spaja tišinu visokogorskog kampa, snažnu prirodu i autentičan život ljudi ovog kraja. Tokom ture posjećujemo vidikovce prašume Perućice, prolazimo katunima u kojima se i danas živi kao prije 300–400 godina i doručkujemo kod domaćina uz uštipke, toplo mlijeko i domaći kajmak.\n\n Tri dana smo bez mreže i struje, oslonjeni na vatru, kamp i planinu oko nas. Uz sam kamp nalazi se mala planinska kafana gdje možemo popiti kafu, čaj, pivo ili rakiju i polako završiti dan. Bez žurbe, sa dovoljno vremena za prirodu, razgovor i istinski doživljaj prostora, ovo je tura za one koji žele da osjete planinu, a ne samo da je obiđu.",
    duration: "3 dana / 2 noći",
    difficulty: "Srednja",
    price: "170€ po osobi",
    groupSize: "6–16 osoba",
    discount: "15% popusta za grupe od 4+ osoba",
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
    imageAlt: "Kampovanje na Trnovačkom jezeru s usponom na Maglić – NP Sutjeska, Trnovačko jezero",
    highlights: [
      "Trnovačko jezero",
      "Uspon na Maglić",
      "Kampovanje",
      "Panoramski pogledi",
      "Autenticni katuni ispod Volujaka",
      "Vidikovci prašume Perućice"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1 — Dolazak u Foču i kampovanje na Trnovačkom jezeru",
        description: "Okupljanje grupe je u 12:30 časova u Foči. Preporuka je da se dođe 20–30 minuta ranije, kako bismo na vrijeme obavili upoznavanje, provjeru opreme i kratki brifing. U 13:00 časova polazimo terenskim vozilima prema Prijevoru, početnoj tački pješačke ture.\n\n Vožnja traje oko sat i po vremena, nakon čega započinje lagani planinarski uspon prema Trnovačkom jezeru. Pješačenje traje približno 1,5 sat, umjerenog je tempa i prilagođeno grupi, uz pauze po potrebi. \n\n Po dolasku na Trnovačko jezero postavljamo kamp — šatore, vreće i ostalu opremu. Nakon toga ložimo vatru i ostatak dana je rezervisan za odmor, druženje i upoznavanje ekipe, uz slobodno vrijeme za šetnju oko jezera i uživanje u ambijentu. Veče provodimo u kampu, u miru i tišini planine."
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
      "4 obroka tokom ture (doručak, lunch paket, večera, doručak)",
      "Osnovna oprema za kampiranje (šatori, vreće za spavanje, podloške)",
      "Takse u NP Sutjeska i boravišne takse u Park prirode Piva",
      "Transport opreme za kampovanje na Trnovačko jezero"
    ],
    excludes: [
      "Lična oprema (planinske cipele, ruksak)",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li je potrebna posebna fizička kondicija?",
        a: "Za boravak i kampovanje na Trnovačkom jezeru nije potrebna naročita kondicija — pristup je umjeren i prilagođen većini učesnika. Uspon na Maglić, sa druge strane, zahtijeva dobru osnovnu kondiciju, jer podrazumijeva višesatno hodanje uz uspon i spust po planinskom terenu. Tempo je prilagođen grupi i prave se pauze. Učesnici koji ne žele ili ne mogu na uspon mogu ostati kod Trnovačkog jezera, provesti dan u šetnji, kupanju, odmoru i uživanju u prirodi, bez ikakvog pritiska."
      },
      {
        q: "Šta trebam ponijeti sa sobom?",
        a: "Planinske cipele, ruksak (min. 40L), voda (min. 2L), hrana za snagu, odjeća za sve vremenske prilike, osobne stvari. Detaljnu listu šaljemo prije ture."
      },
      {
        q: "Da li ću dobiti dodatne informacije prije polaska?",
        a: "Da. Svi učesnici biće dodani u WhatsApp grupu ture Trnovačko jezero – Maglić, nekoliko dana prije polaska. U toj grupi ćete dobiti tačne informacije o okupljanju, satnici, spisku opreme, vremenskoj prognozi i sve važne upute vodiča. Tu ćemo podijeliti i posljednje detalje uoči polaska, kao i odgovore na eventualna pitanja."
      },
      {
        q: "Šta ako je loše vrijeme?",
        a: "Vremenski uslovi u planini mogu se brzo promijeniti. Sigurnost učesnika je prioritet i u slučaju lošeg vremena vodič može izmijeniti plan aktivnosti, pomjeriti ili odgoditi uspon na Maglić ili ponuditi alternativnu rutu. Sve promjene se jasno i blagovremeno komuniciraju, uključujući i putem WhatsApp grupe."
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
    aboutTour: "Kampovanje na Zelengori uz uspon na Bregoč zamišljeno je kao trodnevni boravak u srcu planine, bez žurbe i bez pritiska, gdje je fokus na prirodi, kretanju i zajedničkom doživljaju. Ova tura kombinuje jeep safari, planinarenje i kampovanje pored jezera, uz dovoljno vremena za odmor, kupanje i uživanje u pejzažima po kojima je Zelengora poznata.",
    duration: "3 dana / 2 noći",
    difficulty: "Laka - Srednja",
    price: "160€ po osobi",
    groupSize: "6–16 osoba",
    dates: [
      "05.-07.06.",
      "07.-09.08.",
      
    ],
    image: "/images/tours/zelengora/zelengora-kampovanje-card.webp",
    imageAlt: "Kampovanje na Zelengori sa usponom na Bregoč i Jeep safari – NP Sutjeska, Zelengora",
    highlights: [
      "Orlovačko jezero",
      "Bregoč (najviši vrh Zelengore)",
      "Jeep safari Štirinsko jezero",
      "Kampovanje",
      "Dinarske livade",
      "Oprema za kampovanje, obezbjedjena",

    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Dolazak i kampovanje u blizini Orlovačkog jezeru",
        description: "Okupljanje je u Foči oko 14h, odakle se terenskim vozilima ide prema Zelengori. Parkiranje je obezbijeđeno (na lokaciji koju dobijete u Whatapp grupi učesnika), a već prvi dan provodimo u laganom ritmu, postavljajući kamp u blizini Olovačkog jezera. Ostatak dana namijenjen je upoznavanju terena, šetnjama do Olovačkog i Jugovog jezera i opuštenom druženju u kampu. Prvo veče je bez večere i rezervisano za razgovor i boravak oko vatre, u miru planine."
      },
      {
        dayTitle: "Dan 2: Uspon na Bregoč - najviši vrh Zelengore",
        description: "Drugi dan je centralni dio ture. Nakon doručka krećemo na uspon na Bregoč, koji je najviši vrh Zelengore. Uspon traje oko tri sata i vodi preko Kozijih strana, sa kojih se pružaju široki, otvoreni panoramski pogledi na cijeli masiv Zelengore, Maglića, Lebršnika, Volujaka.\n\n Tokom uspona obezbijeđen je lanč paket. Na vrhu i duž rute pravimo pauze za odmor i fotografisanje, bez forsiranja tempa. Cijeli dan provodimo na planini, uz povratak prema kampu u popodnevnim satima. Po dolasku slijedi slobodno vrijeme za kupanje u Olovačkom jezeru, odmor i opuštanje, a uveče je obezbijeđena večera i druženje oko vatre."
      },
      {
        dayTitle: "Dan 3: Jeep Safari i povratak",
        description: "Treći dan započinje doručkom i pakovanjem kampa. Nakon toga slijedi jeep safari, koji se realizuje specijalnim kamionom bez cerade, sa klupama, što omogućava otvoren pogled i pravi doživljaj vožnje kroz planinu. Safari vodi do panoramskih tačaka iznad Kotaričkog jezera, nakon čega se ide u kratki hiking do Štirickog jezera. Tu pravimo pauzu za odmor i kupanje za one koji to žele. Po završetku obilaska vraćamo se do kampa, uzimamo opremu, sjedamo u terenska vozila i vraćamo se u Foču, gdje tura završava u ranim popodnevnim satima.\n\n Ova tura je namijenjena svima koji žele da dožive Zelengoru sporije i potpunije,uz jezera, vrhove, tišinu i osjećaj boravka u planini, a ne samo prolaska kroz nju."
      }
    ],
    includes: [
      "Vodič",
      "Transfer iz Foče i povratak",
      "Jeep safari transfer",
      "2 noći kampovanja",
      "4 obroka",
      "Oprema za kampovanje",
      "Takse"
      
    ],
    excludes: [
      "Lična oprema",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li je tura pogodna za početnike?",
        a: "Tura je namijenjena osobama sa umjerenom kondicijom. Uspon na Bregoč traje oko tri sata i nije tehnički zahtjevan, ali podrazumijeva duže hodanje po planinskom terenu. Tempo je prilagođen grupi i ne forsira se brzina. Ako imate nedoumica oko svoje spremnosti, slobodno nam se javite prije prijave."
      },
      {
        q: "Da li ću dobiti dodatne informacije prije polaska?",
        a: "Da. Svi učesnici biće dodani u WhatsApp grupu ture Zelengora, nekoliko dana prije polaska. U grupi ćete dobiti tačne informacije o mjestu okupljanja, satnici, spisku opreme, vremenskoj prognozi, kao i sve dodatne savjete i upute vodiča. Tu smo i za sva pitanja prije same ture."
      },
      {
        q: "Šta ako bude loše vrijeme?",
        a: "Vremenske prilike u planini mogu se brzo promijeniti. Sigurnost nam je prioritet i program se uvijek prilagođava uslovima na terenu. U slučaju lošeg vremena, vodič može izmijeniti redoslijed aktivnosti ili dio ture, o čemu se učesnici blagovremeno obavještavaju, uključujući i putem WhatsApp grupe."
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
    aboutTour: "Ova tura vas vodi kroz spektakularni kanjon rijeke Tare i spaja adrenalin raftinga s prirodom, dobrom energijom ekipe i osjećajem da ste stvarno 'pobjegli' iz grada.\n\nSve je organizovano tako da vi samo uživate: idemo u manjim grupama, uz licencirane vodiče, jasna pravila kretanja i sigurnost na prvom mjestu.\n\nU cijenu su uključene ulaznice i svi ključni troškovi organizacije (rafting oprema, transfer), bez skrivenih troškova. Piće nije uključeno u cijenu.",
    duration: "3 dana / 2 noći",
    difficulty: "Lako",
    price: "Na upit",
    groupSize: "6–16 osoba",
    dates: [
      "19.-21.06.",
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
        dayTitle: "Dan 1 — Dolazak u kamp i večernje druženje",
        description: "Učesnici dolaze direktno u rafting kamp, čiju tačnu lokaciju i upute za dolazak dobijaju unaprijed putem WhatsApp grupe učesnika. Dolazak je planiran u popodnevnim i večernjim satima.\n\n Po dolasku slijedi smještaj u kampu, kratko upoznavanje ekipe i večera. Veče je rezervisano za opušteno druženje uz muziku uživo, razgovor i upoznavanje, bez obaveza i žurbe. Noćenje u kampu."
      },
      {
        dayTitle: "Dan 2: Rafting avantura",
        description: "Nakon odmornog jutra slijedi doručak u kampu. Zatim se preuzima kompletna rafting oprema (neopreni, prsluci, kacige) i održava kratak sigurnosni brifing od strane skipera i vodiča.\n\n Nakon toga terenskim vozilima krećemo prema početnoj tački raftinga. Spust Tarom traje cijeli dan i organizovan je u laganom ritmu, sa pauzama za odmor, kupanje i fotografisanje. Ručak je organizovan na rijeci, tokom samog spusta, što omogućava da dan protiče bez vremenskog pritiska i bez vezivanja za tačne termine povratka u kamp.\n\n Rafting je kombinacija adrenalina, prirode i uživanja u kanjonu Tare, uz stalnu pratnju iskusnih skipera.\n\n Po završetku spusta vraćamo se u kamp. Nakon tuširanja i odmora slijedi večera, a veče je ponovo rezervisano za druženje i muziku uživo."
      },
      {
        dayTitle: "Dan 3 — Doručak i rastanak",
        description: "Ujutru doručkujemo u kampu. Nakon doručka slijedi slobodno vrijeme, pakovanje i polazak učesnika, čime se rafting aranžman završava."
      }
    ],
    includes: [
      "Skiper sa licencom",
      "Go pro snimak ture",
      "Rafting oprema (čamac, vesla, prsluk, kaciga)",
      "2 noćenja",
      "Svi obroci tokom ture",
      "Boravišne takse"
    
    ],
    excludes: [
      "Lična oprema (kupaći kostim, šorc)",
      "Dodatne aktivnosti (hiking, zipline, jeep safari)",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li trebam imati iskustvo sa raftingom?",
        a: "Ne, ova tura je pogodna i za početnike. Naši vodiči će vas uputiti u sve potrebno i osigurati sigurnost tokom cijele ture."
      },
      {
        q: "Da li ću dobiti sve informacije prije dolaska?",
        a: "Da. Svi učesnici biće dodani u WhatsApp grupu raftinga Tara nekoliko dana prije dolaska. U grupi ćete dobiti tačnu lokaciju kampa, upute za dolazak, satnicu, spisak stvari koje treba ponijeti, kao i sve važne informacije i savjete vodiča."
      },
      {
        q: "Gdje se ruča tokom raftinga?",
        a: "Ručak je organizovan na rijeci, tokom samog spusta. Zbog toga rafting dan protiče opušteno, bez žurbe i bez obaveze da se u tačno vrijeme stiže nazad u kamp."
      },
      {
        q: "Zašto je cijena 'Na upit'?",
        a: "Cijena je na upit jer zavisi od broja učesnika i strukture smještaja. U zavisnosti od toga da li se više osoba smješta u jedan bungalov ili se bira manji broj osoba po smještajnoj jedinici, ukupna cijena se može razlikovati. Veće grupe i zajednički smještaj obično omogućavaju nižu cijenu po osobi, dok manji broj ljudi ili komforniji raspored utiče na višu cijenu. Na ovaj način možemo svakom timu ili grupi ponuditi najpovoljniju i najrealniju opciju, bez skrivenih troškova."
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
    aboutTour: "Ova porodična tura vas vodi kroz Tjentište i Zelengoru — edukativne šetnje, aktivnosti za djecu i uživanje u prirodi za cijelu porodicu.\n\nSve je organizovano tako da vi samo uživate: idemo u manjim grupama, uz licencirane vodiče, jasna pravila kretanja i sigurnost na prvom mjestu.\n\nU cijenu su uključene ulaznice i svi ključni troškovi organizacije (transfer, oprema za kampiranje) — bez skrivenih troškova. Piće nije uključeno u cijenu.",
    duration: "3 dana / 2 noći",
    difficulty: "Lako",
    price: "Na upit",
    groupSize: "4–30 osoba",
    dates: [
      "14.03.2026"
    
    ],
    image: "/images/tours/porodicni-vikend-tjentiste-zelengora/porodicni-vikend-zelengora-tjentiste.webp",
    imageAlt: "Porodični vikend na Tjentištu i Zelengori – priroda i šetnje",
    highlights: [
      "Edukativne šetnje",
      "Odmor za porodicu",
      "Tjentište spomenik",
      "Zelengora jezera"
      
    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Dolazak i upoznavanje sa Tjentištem",
        description: "Dolazak učesnika na Tjentište planiran je u popodnevnim satima. Nakon smještaja slijedi lagano upoznavanje grupe i šetnja Dolinom heroja, uz obilazak Spomenika Bitke na Sutjesci. Program prvog dana je opušten i prilagođen porodicama, bez žurbe i obaveza.\n\n Ukoliko se dođe ranije, postoji mogućnost korišćenja otvorenog bazena na Tjentištu, što je posebno zanimljivo za djecu. Veče je rezervisano za druženje, odmor i upoznavanje u mirnom ambijentu prirode."
      },
      {
        dayTitle: "Dan 2 — Zelengora i jezera (lagani porodični dan)",
        description: "Nakon doručka, polazimo prema Zelengori. Dan je osmišljen kao lagani izlet, bez zahtjevnih uspona i velikih nadmorskih visina. Obilazimo Olovačko jezero i okolne predjele, uz kratke šetnje i boravak u prirodi.\n\n Program je prilagođen djeci — ima dovoljno prostora za igru, kretanje, pauze i boravak na čistom planinskom vazduhu. Ne idemo na vrhove niti radimo zahtjevne ture, već provodimo dan u sporom ritmu, uz šetnju, fotografisanje i uživanje u pejzažima Zelengore.\n\n Povratak na Tjentište je planiran u popodnevnim satima. Po povratku slijedi odmor, slobodno vrijeme i večera. Veče je predviđeno za opuštanje i porodično druženje."
      },
      {
        dayTitle: "Dan 3 — Doručak i završetak ture",
        description: "Ujutru doručkujemo, nakon čega se porodični vikend zvanično završava. Za one koji imaju vremena i žele da ostanu duže, postoji mogućnost dodatnog boravka na Tjentištu, uključujući kupanje u bazenu i lagano uživanje prije povratka kući."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer sa Tjentišta i povratak",
      "2 noći",
      "3 obroka",
      "Sve takseS"
    ],
    excludes: [
      "Lična oprema",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Za koje uzraste djece je tura pogodna?",
        a: "Tura je dizajnirana za djecu od 4 do 14 godina, ali svi članovi porodice mogu uživati. Aktivnosti su prilagođene različitim uzrastima."
      },
      {
        q: "Da li je sigurno za djecu?",
        a: "Apsolutno.Tereni su laki i sigurni, a sve aktivnosti su pod nadzorom."
      },
      {
        q: "Kako izgleda ishrana tokom vikenda?",
        a: "U cijenu su uključeni doručci i večere na Tjentištu. Tokom boravka na Zelengori nema lanč paketa, jer je program lagan i prilagođen djeci, a povratak na Tjentište je planiran u vrijeme večere. Ukoliko porodica ima posebne prehrambene potrebe, to se dogovara unaprijed."
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
    shortDescription: "Prvomajski aranžman u bungalovima na Tjentištu: smještaj, hrana, ulaznice i dvije velike avanture, subota Trnovačko jezero, nedjelja lagana tura po Zelengori.",
    aboutTour: "Ova trodnevna avantura osmišljena je kao spoj prirode, laganog kretanja i istinskog doživljaja planine, bez žurbe i bez pritiska. Fokus nije na „osvajanju“ kilometara, već na boravku u prostoru, druženju i osjećaju slobode koji planina pruža.",
    duration: "3 dana / 2 noći",
    difficulty: "Srednja",
    price: "185€ po osobi",
    groupSize: "8–20 osoba",
    discount: "5+ osoba - 10% popusta \n\n 10+ osoba - 15% popusta",
    dates: ["01.05.2026"],
    highlights: [
      "Bungalovi na Tjentištu (2 noći)",
      "Subota: Trnovačko jezero",
      "Nedjelja: Zelengora (Donje i Gornje bare + vidikovac Borić) — lakša tura",
      "Lunch paketi za ture",
      "Subotnja mala žurka i druženje",
      "Ulaznice: NP Sutjeska + Park prirode Piva"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1 (petak): Dolazak na Tjentište",
        description: "Dolazak učesnika planiran je tokom dana na Tjentište. Nakon smještaja slijedi slobodno vrijeme za odmor i prvo upoznavanje sa ambijentom Nacionalnog parka Sutjeska. Lagana šetnja Dolinom heroja i obilazak Spomenika Bitke na Sutjesci uvod su u dane koji slijede, bez žurbe i bez pritiska.\n\n Ovo je dan za prilagođavanje, upoznavanje grupe i uživanje u prostoru. U večernjim satima, oko 20:00, planirana je zajednička večera. Nakon večere slijedi lagano druženje u kampu, razgovor, upoznavanje i opuštanje u prirodnom ambijentu, uz mirnu atmosferu i osjećaj da praznik zaista počinje."
      },
      {
        dayTitle: "Dan 2 (subota):Trnovačko jezero, vidikovci i prašuma Perućica",
        description: "Nakon doručka preuzimamo lanč pakete i krećemo prema Trnovačkom jezeru. Dolazak na jezero planiran je u prijepodnevnim satima, gdje nas dočekuje jedno od najljepših planinskih jezera regiona. Ovdje imamo dovoljno vremena za odmor, šetnju obalom, fotografisanje i uživanje u prirodi.\n\n Za one koji žele više aktivnosti, nudimo opcije laganog i srednje zahtjevnog hoda do vidikovaca iznad jezera. Kraća varijanta podrazumijeva oko 15 minuta hoda, dok je duža varijanta približno sat i po hoda u jednom pravcu, do vidikovca sa kojeg se vidi cijelo Trnovačko jezero u prepoznatljivom obliku srca. Svako bira tempo i mjeru po sopstvenim željama.\n\n U popodnevnim satima, oko 16:00, krećemo prema Prijevoru, gdje nas čekaju terenska vozila. Pravimo pauzu na panoramskoj tački ispod Maglića, sa pogledom prema Volujaku, Zelengori, Jahorini, Lebršniku i Treskavici. Nakon toga obilazimo vidikovce prašume Perućice, u skladu sa vremenom i uslovima na terenu.\n\n Povratak u kamp je u večernjim satima, gdje nas čeka večera i opušteno druženje uz tihu muziku, sabiranje utisaka i razgovor o danu koji je iza nas."
      },
      {
        dayTitle: "Dan 3 (nedjelja): Zelengora, jezera i završetak avanture",
        description: "Treći dan započinjemo doručkom, nakon čega krećemo prema Zelengori. Vožnja traje oko sat do sat i po vremena. Dan je osmišljen kao lagan i opuštajući, bez zahtjevnih uspona, sa fokusom na boravak u prirodi i uživanje u prostoru.\n\n Na Zelengori obilazimo vidikovce, područje Borić i jezera Donje bare, uz mogućnost šetnje do Gornjih Bara za one koji žele. Program je fleksibilan, prilagođen grupi i idealan za završetak višednevne avanture u mirnom ritmu.\n\n U popodnevnim satima započinjemo povratak, čime se program za 1. maj zvanično završava.\n\n Za detaljan program, cijenu i sve informacije o ovoj 1. maj avanturi, PDF program možete dobiti javljanjem putem Instagram stranice ili direktno na WhatsApp broj +387 65 797 200."
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
        q: "Kako mogu dobiti detaljan program i cijenu?",
        a: "Detaljan program, cijenu i sve dodatne informacije možete dobiti u PDF formatu javljanjem putem naše Instagram stranice ili direktno na WhatsApp broj +387 65 797 200. Nakon javljanja šaljemo kompletan program i stojimo na raspolaganju za sva pitanja."
      },
      {
        q: "Da li je tura fizički zahtjevna?",
        a: "Tura je osmišljena tako da bude pristupačna većini učesnika. Program kombinuje lagane šetnje i mogućnost srednje zahtjevnog hoda do vidikovaca, ali bez obaveze da svi učestvuju u svim aktivnostima. Svako bira tempo i nivo aktivnosti koji mu odgovara."
      },
      {
        q: "Da li ćemo prije polaska dobiti dodatne informacije i upute?",
        a: "Da. Svi prijavljeni učesnici biće dodani u WhatsApp grupu 1. maj avanture, gdje će dobiti tačne informacije o mjestu okupljanja, satnici, opremi, vremenskoj prognozi i svim važnim uputama prije polaska."
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
    aboutTour: "Ova tura je namijenjena onima koji žele više od klasične avanture. Kombinacija Maglića, Trnovačkog jezera i raftinga Tarom predstavlja fizički zahtjevno, ali izuzetno bogato iskustvo, sa snažnim pejzažima, ozbiljnim usponima i potpunim izlaskom iz zone komfora.\n\n Grupa je namjerno mala – maksimalno do 8, eventualno 15 učesnika – kako bi se zadržao kvalitet doživljaja, sigurnost i pravi timski duh. Ovo nije masovna tura. Ovo je avantura za ljude koji znaju zašto dolaze u planinu.",
    duration: "3 dana / 2 noći",
    difficulty: "Zahtjevna",
    price: "235€",
    groupSize: "max 16",
    image: "/images/tours/premium/top-tura-rafting-tarom-maglic-perucica.webp",
    dates: ["26.-28.06.2026"],
    imageAlt: "Maglić, Trnovačko jezero i rafting Tarom – premium avantura u prirodi",
    highlights: [
      "Kampovanje na Prijevoru",
      "Uspon na Maglić",
      "Spust na Trnovačko",
      "Rafting Tarom",
      "Vidikovci prašume Perućice"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Dolazak u Foču i kampovanje na Prijevoru",
        description: "Prvi dan dolazimo u Foču u popodnevnim satima i nastavljamo prema Prijevoru, na visinu od preko 1.500 metara. Kamp postavljamo direktno ispod Maglića, u sirovom i moćnom planinskom ambijentu. Tu zajedno spremamo večeru, odmaramo i noćimo pod zvijezdama, u potpunoj tišini planine."
      },
      {
        dayTitle: "Dan 2: Uspon na Maglić - Trnovačko jezero",
        description: "Drugi dan je centralni i najzahtjevniji dio ture. Nakon doručka krećemo na kružnu turu prema Magliću, jednom od najljepših i najatraktivnijih planinarskih pravaca u regionu. Uspon traje oko 2,5 sata i fizički je zahtjevan. Ova tura nije za osnovnu kondiciju – potrebna je dobra fizička spremnost i volja za ozbiljan uspon.\n\n Ruta prolazi kroz područje Nacionalnog parka Sutjeska i Parka prirode Piva. Sa Maglića nastavljamo prema vidikovcu iznad Trnovačkog jezera, a zatim se spuštamo direktno na obalu jezera. Tu pravimo dužu pauzu za odmor i osvježenje – kafa, čaj, pivo ili rakija – uz lanč pakete i vrijeme da se doživi prostor.\n\n Nakon odmora vraćamo se prema Prijevoru. U kasnim popodnevnim satima, uz zalazak sunca, pred nama se otvaraju pogledi prema Vranjaku, Zelengori, Lebršniku, Jahorini i Treskavici. Veče ponovo provodimo u kampu, uz večeru, razgovor i sabiranje utisaka jednog od najsnažnijih planinarskih dana koje možete doživjeti."
      },
      {
        dayTitle: "Dan 3: Rafting na Tari i kraj avanture",
        description: "Treći dan ustajemo rano, pakujemo kamp i krećemo prema Tari. Po dolasku u rafting kamp slijedi doručak, zaduživanje kompletne rafting opreme i priprema za spust. Rafting Tarom traje cijeli dan, bez žurbe i vremenskog pritiska. Rijeka, kanjon, pauze, uživanje i potpuni kontrast u odnosu na planinu.\n\n U kasnim popodnevnim satima dolazimo nazad u kamp, gdje se presvlačimo, tuširamo i završavamo turu.\n\n Ovo je snažna, intenzivna i nezaboravna avantura. Tura puna kontrasta, visoki vrhovi, najljepse jereo regiona i moćna rijeka Tara. Namijenjena onima koji žele pravu priču, a ne samo izlet. Ko krene na ovu turu, nosi je sa sobom dugo nakon povratka."
      }
    ],
    includes: [
      "Iskusni vodič sa licencom",
      "Transfer iz Foče i povratak",
      "2 noći kampovanja",
      "Svi obroci tokom ture (5 obroka)",
      "Rafting oprema",
      "Oprema za kampovanje",
      "Ulaznice u NP Sutjeska i Park prirode Piva",
      
    ],
    excludes: [
      "Lična oprema (planinske cipele, ruksak, kupaći kostim)",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li ćemo prije polaska dobiti detaljne informacije?",
        a: "Da. Svi učesnici biće dodani u WhatsApp grupu ture nekoliko dana prije polaska. U grupi ćete dobiti tačne informacije o opremi, vremenskoj prognozi, logistici, satnici i svim važnim uputama. Tu ćemo razjasniti i posljednje detalje prije dolaska."
      },
      {
        q: "Kolika je veličina grupe i zašto je mala?",
        a: "Grupa je namjerno mala – idealno 8 učesnika, maksimalno do 15. Manja grupa znači veću sigurnost, bolju organizaciju, jači timski osjećaj i kvalitetniji doživljaj na zahtjevnom terenu. Ovo nije masovna tura i tako je i zamišljena."
      },
      {
        q: "Da li je rafting zahtjevan nakon planine?",
        a: "Rafting Tarom nije tehnički zahtjevan i predstavlja savršen kontrast planinarskom dijelu ture. Spust je organizovan sa iskusnim skiperima, u sigurnim čamcima, uz pauze i bez žurbe. Nakon dva dana u planini, rafting dolazi kao snažan, ali prijatan završetak avanture."
      },
      {
        q: "Kakva kondicija je potrebna?",
        a: "Za ovu turu potrebna je dobra fizička spremnost, ali nije riječ o ekstremnoj ili tehničkoj alpinizmu. Uspon na Maglić vodi najpoznatijom i najčešće korišćenom rutom, koja je tehnički zahtjevnija na pojedinim dionicama i uključuje vertikalniji teren sa sajlama koje pomažu pri kretanju.\n\n Tura je zahtjevna u smislu dužine i visinske razlike, ali se krećemo kontrolisanim tempom, uz pauze i jasne instrukcije vodiča. Uz osnovno planinarsko iskustvo, dobru kondiciju i sposobnost sigurnog kretanja po planini, većina fizički spremnih učesnika može bez problema savladati ovu rutu. Važno je da se osjećate stabilno na strmijem terenu i da ste spremni na ozbiljniji planinarski dan."
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
    aboutTour: "Ova avantura spaja divlji kanjon Hrčavke i prašumu Perućicu, dvije potpuno različite, ali jednako snažne prirodne cjeline Nacionalnog parka Sutjeska. Program je osmišljen za ljude koji žele aktivnu, sadržajnu i autentičnu turu, bez nepotrebnog forsiranja, ali sa pravim doživljajem prirode.\n\nTura je dinamična, raznovrsna i puna kontrasta – od vode, stijena i skokova u kanjonu, do tišine prašume i moćnog vodopada Skakavac. Idealna je za one koji žele nešto više od klasičnog izleta, ali bez ekstremnih rizika.",
    duration: "3 dana / 2 noći",
    difficulty: "Srednja",
    price: "255€ po osobi",
    groupSize: "8–13 osoba",
    discount: "4+ osoba - 10% popusta",
    dates: ["10. - 12.07.2026",
      "28. - 30.08.2026"
    ],
    highlights: [
      "Kanjoning Hrčavka (duža ruta oko 5-6 sati kanjoninga)",
      "Prašuma Perućica",
      "Vodopad Skakavac",
      "Smještaj na Tjentištu",
      "Večernje druženje oko vatre",
      "Kompletna kanjoning oprema uključena (najviši standardi)"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1 — Dolazak na Tjentište i lagano popodne",
        description: "Dolazak učesnika planiran je na Tjentište u popodnevnim satima. Nakon smještaja u bungalove slijedi kratko osvježenje i slobodno vrijeme. Prvi dan je lagan i opušten – šetnja Dolinom heroja, obilazak Spomenika Bitke na Sutjesci i upoznavanje sa okruženjem.\n\n U večernjim satima organizovana je večera, nakon čega slijedi lagano druženje i opuštanje, bez žurbe, uz razgovor i uživanje u ambijentu Tjentišta."
      },
      {
        dayTitle: "Dan 2 — Kanjoning Hrčavka (duža i atraktivnija ruta)",
        description: "Doručak. Odlazak na kanjoning u Hrčavku (oko 4 sata). Povratak u bazu, večera i slobodno vrijeme. Noćenje."
      },
      {
        dayTitle: "Dan 3 — Prašuma Perućica i vodopad Skakavac",
        description: "Treći dan započinjemo doručkom, nakon čega krećemo u obilazak prašume Perućice. Šetnja vodi prema vodopadu Skakavac, jednom od najimpresivnijih prirodnih lokaliteta u ovom području.\n\nDo vodopada nam je potrebno oko dva sata hoda, dok je povratak nešto duži, oko dva i po sata. Teren je mjestimično zahtjevniji, ali uz dobre patike ili planinarske gojzerice ne predstavlja problem za fizički spremne učesnike. Hodamo kroz gustu šumu, uz potoke i stare staze, u ambijentu koji ostavlja snažan utisak.\n\nTokom ovog dana obezbijeđeni su lanč paketi. Nakon povratka iz Perućice tura se završava, uz osjećaj zaokružene, snažne i sadržajne avanture.\n\nOva tura je vrhunska kombinacija vode, šume i kanjona. Nije ekstremna, ali jeste intenzivna i bogata doživljajem. Idealna za one koji žele da osjete divlju prirodu Sutjeske iz više uglova i ponesu kući iskustvo koje se pamti."
      }
    ],
    includes: [
      "Smještaj na Tjentištu (2 noći)",
      "Doručak (subota), lunch paket, večera (subota), doručak (nedjelja), lunch paket",
      "Licencirani vodič i organizacija ture",
      "Kompletna oprema za kanjoning (najviši standardi)",
      "Sigurnosni brifing i podrška tokom aktivnosti"
    ],
    excludes: [
      "Piće",
      "Lična oprema",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Koliko je kanjoning fizički zahtjevan?",
        a: "Kanjoning traje oko šest sati i podrazumijeva kretanje kroz vodu, prelazak prirodnih prepreka i stalno kretanje, ali bez ekstremnih tehničkih dionica. Tempo je prilagođen grupi, uz pauze. Potrebna je solidna kondicija i spremnost na duži aktivan dan, ali ne i vrhunska fizička forma."
      },
      {
        q: "Kakva oprema je obezbijeđena za kanjoning?",
        a: "U cijenu su uključeni neopreno odijelo, kaciga, sigurnosni prsluk i sva neophodna tehnička oprema za prolazak kanjona. Učesnici treba da ponesu kupaći, peškir i obuću za vodu ili patike koje se mogu pokvasiti. Sve detaljne upute o opremi dobijate unaprijed."
      },
      {
        q: "Da li je obilazak Perućice zahtjevan?",
        a: "Obilazak prašume Perućice i vodopada Skakavac je planinarski zahtjevniji, ali tehnički jednostavan. Hod traje oko dva sata do vodopada i oko dva i po sata nazad. Uz dobre patike ili planinarske gojzerice, kretanje je sigurno i stabilno. Nije potrebna posebna tehnika, već pažnja i kondicija."
      },
      {
        q: "Da li ćemo prije dolaska dobiti sve informacije?",
        a: "Da. Svi učesnici biće dodani u WhatsApp grupu ture nekoliko dana prije polaska. U grupi ćete dobiti tačne informacije o programu, satnici, opremi, vremenskoj prognozi i svim važnim uputama. Tu možete postaviti pitanja i dobiti dodatna pojašnjenja."
      }
    ]
  },
  {
    id: "P-durmitor-01",
    slug: "durmitorski-prsten-via-ferata-piva-prutas",
    title: "Durmitorski prsten + Via ferrata Piva + uspon na Prutaš",
    category: "premium",
    location: "Durmitor / Piva (via ferrata) / Prutaš",
    image: "/images/tours/durmitor-aranzman/durmitor.webp",
    imageAlt: "Durmitorski prsten, via ferrata Piva i uspon na Prutaš – premium avantura u Crnoj Gori",
    imagePosition: "center 60%",
    shortDescription: "Premium višednevna avantura koja kombinuje Durmitorski prsten, via ferratu Piva i uspon na Prutaš – za ljubitelje zahtjevnih planinarskih i alpinističkih izazova.",
    aboutTour: "Ova premium tura vas vodi kroz Durmitorski prsten, via ferratu Piva i uspon na Prutaš — za ljubitelje zahtjevnih planinarskih i alpinističkih izazova.\n\nSve je organizovano tako da vi samo uživate: idemo u manjim grupama, uz licencirane vodiče, tehničku opremu i sigurnost na prvom mjestu.\n\nU cijenu su uključene ulaznice, oprema za via ferratu i smještaj — bez skrivenih troškova. Piće nije uključeno u cijenu.",
    duration: "3 dana / 2 noći",
    difficulty: "Srednja–zahtjevna",
    price: "Na upit",
    groupSize: "6–14 osoba",
    discount: "",
    dates: ["24. - 26.07.2026"],
    highlights: [
      "Durmitorski prsten",
      "Via ferrata Piva",
      "Uspon na Prutaš",
      "Pogledi na Durmitor"
    ],
    itinerary: [
      {
        dayTitle: "Dan 1: Dolazak i Durmitorski prsten",
        description: "Dolazak na početnu tačku. Početak obilaska Durmitorskog prstena – prekrasna planinska ruta koja otkriva najljepše vidikove na masiv Durmitora. Noćenje."
      },
      {
        dayTitle: "Dan 2: Via ferrata Piva",
        description: "Doručak. Transfer do Parka prirode Piva. Via ferrata avantura – siguran uspon uz vodiča, sa spektakularnim pogledima na jezero Piva i okolne stijene. Večera i noćenje."
      },
      {
        dayTitle: "Dan 3: Uspon na Prutaš i završetak",
        description: "Doručak. Uspon na Prutaš (2393m) – jedan od najimpresivnijih vrhova u regiji. Panoramski vidici na Durmitor, Piva i okolne planine. Povratak i završetak ture."
      }
    ],
    includes: [
      "Licencirani vodič za planinarenje i via ferrata",
      "Tehnička oprema za via ferratu (kaciga, pojas, užad)",
      "Transferi tokom programa",
      "Smještaj (2 noći)",
      "Obroci prema dogovoru",
      "Osiguranje",
      "Organizacija ture"
    ],
    excludes: [
      "Lična oprema (planinske cipele, ruksak)",
      "Piće",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li trebam iskustvo sa via ferratom?",
        a: "Preporučujemo osnovnu kondiciju i spremnost na izazov. Via ferrata je prilagođena uz vodiča – početnici mogu sudjelovati uz pravilnu opremu i instrukcije."
      },
      {
        q: "Je li tehnička oprema uključena?",
        a: "Da. Kaciga, pojas i via ferrata set su uključeni. Trebate samo planinske cipele i odgovarajuću odjeću."
      },
      {
        q: "Koliko je zahtjevna tura?",
        a: "Tura je srednje do zahtjevne – kombinuje planinarenje, via ferratu i uspon na Prutaš. Preporučujemo redovnu fizičku aktivnost prije polaska."
      },
      {
        q: "Kako rezervisati?",
        a: "Kontaktirajte nas sa željenim terminom. Organizujemo ture po dogovoru za grupe od 6 do 14 osoba."
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
    shortDescription: "Jednodnevna tura na najviši vrh Zelengore sa prekrasnim vidicima na okolne planine.",
    aboutTour: "Uspon na Bregoč, najviši vrh Zelengore, predstavlja cjelodnevnu planinarsku turu sa jednim od najljepših panoramskih pogleda u Bosni i Hercegovini. Tura je namijenjena osobama koje vole planinarenje i žele da provedu dan u otvorenom prostoru, daleko od gužve, uz pogled na Maglić, Volujak, Treskavicu i Jahorinu.",
    duration: "1 dan",
    difficulty: "Laka - Srednja",
    price: "70€",
    groupSize: "4–50 osoba",
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
        description: "Okupljanje i polazak prema Zelengori terenskim vozilima. Nakon dolaska na početnu tačku kreće uspon prema Bregoču laganim i stabilnim tempom, uz pauze. Na vrhu pravimo dužu pauzu za odmor, fotografisanje i ručak iz lunch paketa. Povratak istom rutom i dolazak u popodnevnim satima."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Lunch paket",
      "Takse"
    ],
    excludes: [
      "Lična oprema",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Koliko traje uspon?",
        a: "Uspon na Bregoč traje oko 2 sata, ovisno o kondiciji grupe. Spust traje oko sat ipo"
      },
      {
        q: "Da li je potrebna posebna oprema?",
        a: "Nije potrebna posebna oprema, udobna obuća, ruksak manji je sve što vam treba"
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
    aboutTour: "Ova tura je idealna za one koji žele laganiji dan u prirodi, bez velikih uspona. Fokus je na prostranstvima Zelengore, planinskim jezerima i vidikovcima, uz šetnju, odmor i uživanje u čistom vazduhu.",
    duration: "1 dan",
    difficulty: "Laka",
    price: "70€",
    groupSize: "4–50 osoba",
    image: "/images/tours/day-trips/zelengora-jezera.webp",
    highlights: [
      "Donje bare",
      "Gornje bare",
      "Panoramski vidikovci",
      "Vidikovci Zelengore"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Polazak prema Zelengori i obilazak Olovačkog jezera, Donjih Bara i vidikovaca. Za one koji žele, postoji mogućnost kraće šetnje do Gornjih Bara. Dan protiče bez žurbe, uz pauze za odmor, fotografisanje i lunch paket. Povratak u popodnevnim satima."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Lunch paket",
      "Takse"
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
        q: "Da li postoji mogućnost uspona na Uglješin vrh?",
        a: "Da, apsolutno. U slučaju da ekipa želi uspon na Uglješin vrh, može se dogovoriti i organizovati."
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
    aboutTour: "Jedinstvena tura kroz jednu od najstarijih i najvećih prašuma u Evropi. Perućica i vodopad Skakavac nude snažan doživljaj netaknute prirode, guste šume i impresivnog vodopada. Idealna za one koji vole prirodu i žele da istraže jednu od najzanimljivijih destinacija u Bosni i Hercegovini.",
    duration: "1 dan",
    difficulty: "Laka",
    price: "90€",
    groupSize: "4–20 osoba",
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
        description: "Polazak je organizovan iz Foče terenskim vozilima, a po želji grupe i sa Tjentišta, u zavisnosti od dogovora i logistike. Vožnja vodi do ulaza u prašumu Perućicu, gdje započinje pješački dio ture.\n\nPješačenje kroz prašumu traje oko dva sata i vodi kroz gustu šumu, uz stare staze, potoke i impresivne prirodne pejzaže. Krećemo se umjerenim tempom, uz više kraćih pauza za odmor, fotografisanje i uživanje u tišini prašume.\n\nDolaskom do vodopada Skakavac pravimo duži odmor. Vrijeme je predviđeno za opuštanje, fotografije i ručak iz lunch paketa, uz pogled na moćan vodopad i prirodu koja ga okružuje.\n\nNakon odmora vraćamo se istom ili dogovorenom stazom, u zavisnosti od uslova na terenu i procjene vodiča. Povratak je planiran u popodnevnim satima, sa osjećajem potpunog boravka u jedinstvenom prirodnom ambijentu."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Lunch paket",
      "Takse",
      "Edukativni sadržaj"
    ],
    excludes: [
      "Lična oprema",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Šta je posebno u prašumi Perućica?",
        a: "Perućica je najstarija prašuma u Evropi, sa stablima starijim od 300 godina. Dom je rijetkim vrstama biljaka i životinja. A kruna prašume Perućice je vodopad Skakavac(75m)"
      },
      {
        q: "Koliko traje šetnja?",
        a: "Šetnja kroz prašumu traje oko 3-4 sata, uključujući posjetu vodopadu. Ukupno vrijeme ture je oko 6-7 sati."
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
    aboutTour: "Kanjoning Hrčavkom je dinamična i izuzetno atraktivna avantura kroz vodu, slapove i uske prolaze. Tura je uzbudljiva, ali nije ekstremna, i uz vodiče i opremu pruža siguran i snažan doživljaj",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "130€",
    groupSize: "4–12 osoba",
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
        description: "Dolazak na početnu tačku, presvlačenje i zaduživanje kompletne kanjoning opreme. Ulazak u kanjon i prolazak duže, sadržajnije rute koja traje više sati. Tokom ture pravimo pauze, a lunch paket se konzumira u kanjonu. Izlazak iz kanjona i povratak u popodnevnim satima."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Kanjoning oprema (prsluk, kaciga, neopren)",
      "Lunch paketi",
      "Takse"
    ],
    excludes: [
      "Lična oprema (kupaći kostim, itd.)",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Da li trebam imati iskustvo sa kanjoningom?",
        a: "Ne, ali preporučujemo dobru osnovnu kondiciju i sposobnost plivanja. Naši vodiči će vas uputiti u sve potrebno."
      },
      {
        q: "Je li sigurno?",
        a: "Da, sve aktivnosti su pod nadzorom iskusnih vodiča sa licencom. Koristimo profesionalnu opremu i poštujemo sve sigurnosne standarde."
      },
      {
        q: "Šta trebam ponijeti?",
        a: "Kupaći kostim, suhu odjeću za nakon aktivnosti, i kremu za sunce."
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
    aboutTour: "Trnovačko jezero je jedno od najljepših planinskih jezera na Balkanu, poznato po svom obliku i okruženju visokih vrhova. Ova tura je savršena za one koji žele spoj planinarenja i boravka pored jezera",
    duration: "1 dan",
    difficulty: "Srednja",
    price: "75€",
    groupSize: "4–50 osoba",
    image: "/images/tours/day-trips/trnovacko-jezero.webp",
    highlights: [
      "Trnovačko jezero",
      "Vidikovci",
      "Kupanje u jezeru",
      "Takse",
      "Uživanje na Prijevoru",
      "Vidikovci prašume Perućice"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Polazak terenskim vozilima prema Prijevoru, odakle slijedi pješačenje do Trnovačkog jezera (oko sat i po). Po dolasku slobodno vrijeme za šetnju, odmor i ručak iz lunch paketa. Za zainteresovane postoji mogućnost kraće šetnje do vidikovca iznad jezera. Povratak istom rutom."
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Lunch paket",
      "Takse u NP Sutjeska i Park prirode Piva"
    ],
    excludes: [
      "Lična oprema",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Koliko traje šetnja do jezera?",
        a: "Šetnja do Trnovačkog jezera traje oko 1:30minuta, ovisno o kondiciji grupe. Povratak traje slično."
      },
      {
        q: "Može li se kupati u jezeru?",
        a: "Da, voda u jezeru je čista i topla, idealna za osvježenje tokom ljetnih mjeseci."
      },
      {
        q: "Da li se ima gdje kafa popiti?",
        a: "Naravno, na Trnovačkom jezeru se nalazi planinska kafana gdje možete popiti: kafu, čaj, pivo, rakiju."
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
    aboutTour: "Ova tura je zahtjevnija planinarska avantura koja spaja snažan uspon i nagradu u vidu boravka na jednom od najljepših planinskih jezera u regionu. Polazimo sa Prijevora, penjemo se prema Magliću, a zatim se spuštamo direktno na Trnovačko jezero. Tura je namijenjena fizički spremnim učesnicima koji žele ozbiljniji planinarski dan.",
    duration: "1 dan",
    difficulty: "Zahtjevna",
    price: "95€",
    groupSize: "4–20 osoba",
    image: "/images/tours/day-trips/maglic-trnovacko.webp",
    highlights: [
      "Maglić (2386m)",
      "Trnovačko jezero",
      "Panoramski vidici",
      "Zahtjevnija staza"
    ],
    itinerary: [
      {
        dayTitle: "Jednodnevna tura",
        description: "Polazak je organizovan prema Prijevoru, odakle započinje planinarski uspon. Uspon na Mali Maglić vodi preglednim planinarskim stazama, uz postepen dobitak na visini i kontrolisan tempo kretanja, sa pauzama za odmor i prilagođavanje grupi.\n\nNakon izlaska na vrh Malog Maglića pravimo pauzu za odmor i fotografisanje, uz otvorene poglede na masiv Maglića i okolne planine. Sa vrha nastavljamo spuštanje prema Trnovačkom jezeru, jednim od najatraktivnijih dijelova ture, gdje nas čeka duži boravak, odmor i ručak iz lunch paketa.\n\nVrijeme provedeno uz jezero omogućava opuštanje i uživanje u ambijentu prije povratka istom ili dogovorenom rutom prema Prijevoru. Povratak je planiran u popodnevnim satima, nakon ispunjenog i fizički zahtjevnog dana u planini"
      }
    ],
    includes: [
      "Vodič sa licencom",
      "Transfer iz Foče i povratak",
      "Takse u NP Sutjeska i Park prirode Piva",
      "Lunch paket"
    ],
    excludes: [
      "Lična oprema (planinske cipele, ruksak, kupaći kostim, itd.)",
      "Dodatna pića",
      "Troškovi van programa"
    ],
    faqs: [
      {
        q: "Zašto je ova tura zahtjevna?",
        a: "Tura kombinuje zahtjevni uspon na Maglić i spust do jezera u jednom danu. Ukupno vrijeme hoda je oko 7 sati. Zahtijeva dobru fizičku kondiciju."
      },
      {
        q: "Da li je pogodna za početnike?",
        a: "Ne, ova tura nije pogodna za početnike. Preporučujemo iskustvo u planinarenju i odličnu fizičku kondiciju."
      },
      {
        q: "Kada počinje tura?",
        a: "Tura počinje vrlo rano (6-7h ujutro) kako bismo imali dovoljno vremena za uspon, spust i uživanje na jezeru."
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
    aboutTour: "Jeep safari je opuštena, ali veoma sadržajna tura koja kombinuje vožnju terenskim vozilima i kratke šetnje na najljepšim tačkama Zelengore. Pogodna je za porodice i one koji žele manje hodanja.",
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
        description: "Polazak terenskim vozilima i safari vožnja kroz Zelengoru, sa zaustavljanjima na vidikovcima i kod jezera. Kratke šetnje, pauze za fotografisanje i lunch paket. Povratak u popodnevnim satima."
      }
    ],
    includes: [
      "Vodič",
      "Organizacija ture",
      "Lunch paket",
      "Takse"
    ],
    excludes: [
      "Lični troškovi"
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
    aboutTour: "Via Ferrata Piva je adrenalinska tura koja omogućava sigurno kretanje strmim i atraktivnim stijenama uz sajle i gazišta. Idealna je za one koji žele nešto drugačije i uzbudljivo.",
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
        description: "Dolazak na početnu tačku, opremanje i sigurnosni brifing. Kretanje via ferrata rutom uz stalnu pratnju vodiča. Na završetku rute pravimo pauzu i lunch paket. Povratak i završetak ture u popodnevnim satima."
      }
    ],
    includes: [
      "Vodič",
      "Oprema (sva potrebna oprema za via ferrata)",
      "Lunch paket",
      "Takse",
      "Prevoz"
    ],
    excludes: [
      "Piće",
      "Troškovi van programa"
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
