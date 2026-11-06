export type GuideKey = "trnovacko" | "maglic" | "zelengora" | "perucica" | "sutjeska";

export const GUIDES: Record<GuideKey, { sr: { href: string; label: string }; en: { href: string; label: string } }> = {
  trnovacko: { sr: { href: "/trnovacko-jezero", label: "Vodič: Trnovačko jezero" }, en: { href: "/en/trnovacko-lake", label: "Trnovačko Lake guide" } },
  maglic:    { sr: { href: "/maglic-planina", label: "Vodič: uspon na Maglić" },  en: { href: "/en/maglic-hike", label: "Maglić hike guide" } },
  zelengora: { sr: { href: "/zelengora", label: "Vodič: Zelengora" },              en: { href: "/en/zelengora-lakes", label: "Zelengora guide" } },
  perucica:  { sr: { href: "/perucica", label: "Vodič: prašuma Perućica" },        en: { href: "/en/perucica-rainforest", label: "Perućica rainforest guide" } },
  sutjeska:  { sr: { href: "/sutjeska-nacionalni-park", label: "Vodič: NP Sutjeska" }, en: { href: "/en/sutjeska-national-park", label: "Sutjeska National Park guide" } },
};

export const TOUR_GUIDES: Record<string, GuideKey[]> = {
  "kampovanje-trnovacko-jezero-maglic": ["trnovacko", "maglic"],
  "kampovanje-zelengora-bregoč-jeep-safari": ["zelengora", "sutjeska"],
  "porodicni-vikend-tjentiste-zelengora": ["zelengora", "sutjeska"],
  "vikend-u-divljini": ["trnovacko", "perucica"],
  "tura-za-malo-jace-ljude-maglic-trnovacko-rafting": ["maglic", "trnovacko"],
  "hrcavka-perucica-kanjoning-prasuma-skakavac": ["perucica", "sutjeska"],
  "teambuilding-sutjeska": ["sutjeska", "trnovacko"],
  "zelengora-uspon-bregoč": ["zelengora", "sutjeska"],
  "zelengora-jezera-vidikovci": ["zelengora", "sutjeska"],
  "prasuma-perucica-vodopad-skakavac": ["perucica", "sutjeska"],
  "kanjoning-hrcavka": ["sutjeska", "perucica"],
  "trnovacko-jezero": ["trnovacko", "maglic"],
  "maglic-trnovacko-jezero": ["maglic", "trnovacko"],
  "jeep-safari-zelengora": ["zelengora", "sutjeska"],
  "srce-sutjeske-5-dana": ["sutjeska", "maglic", "perucica"],
  "divlja-bosna-i-crna-gora-7-dana": ["sutjeska", "trnovacko"],
  "grand-tour-balkan-9-dana": ["sutjeska", "maglic"],
};
