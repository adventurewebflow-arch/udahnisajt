export interface BlogPostEN {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  imageAlt?: string;
  coverImage?: string;
  coverAlt?: string;
  tags: string[];
  metadataTitle?: string;
  metadataDescription?: string;
}

export const blogPostsEN: BlogPostEN[] = [
  {
    id: "1",
    title: "Trnovačko Lake – Complete Guide to One of the Balkans' Most Beautiful Lakes",
    slug: "trnovacko-lake-guide",
    excerpt:
      "Find out how to reach Trnovačko Lake, the best time to visit, where to camp, and what the ascent of Maglić looks like above one of the most beautiful lakes in the Balkans.",
    metadataTitle: "Trnovačko Lake – Guide, Camping & Maglić Hike | Sutjeska National Park",
    metadataDescription:
      "Find out how to reach Trnovačko Lake, the best time to visit, where to camp, and what the ascent of Maglić looks like above one of the most beautiful lakes in the Balkans.",
    content: `
      <h2>Where is Trnovačko Lake?</h2>

      <p>Trnovačko Lake lies within Sutjeska National Park, on the border between Bosnia and Herzegovina and Montenegro, beneath <a href="/en/tours/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">Maglić</a> — the highest peak in Bosnia and Herzegovina. This glacial lake sits at around 1,517 metres above sea level and is famous for its distinctive heart shape, making it one of the most photographed natural sites in the Balkans. Access routes lead through mountain trails from Foča and Prijevor, and the ancient Perućica rainforest — one of the oldest primeval forests in Europe — lies nearby.</p>

      <h2>Why Trnovačko Lake is Special</h2>

      <p>Trnovačko Lake is considered one of the most beautiful mountain lakes in the region because of its colour, surroundings and views towards Maglić. It is ringed by steep mountain slopes, green meadows and rocky peaks that together create a breathtaking landscape.</p>
      <p>During the summer months the water takes on turquoise hues, while the mountain peaks provide a dramatic backdrop. The lake was formed during the last ice age and stretches roughly 700 metres in length and 300 metres in width, with a maximum depth of 15 metres. Its crystal-clear water reflects the surrounding peaks — Maglić, Volujak and Bioč — creating panoramas that stay with every visitor long after they leave.</p>

      <h2>How to Get to Trnovačko Lake</h2>

      <p>There are several ways to reach Trnovačko Lake.</p>
      <p><strong>1. Hiking route from Prijevor.</strong> One of the most common routes starts from Prijevor and involves several hours of hiking through mountain pastures and trails.</p>
      <p><strong>2. Route from Montenegro.</strong> A second route comes from the village of Mratinje in Montenegro and follows a longer mountain trail.</p>
      <p><strong>3. Guided organised tour.</strong> For many visitors, the easiest option is joining an organised tour with a guide who knows the terrain. The route from Prijevor takes around 3–4 hours of hiking and requires moderate fitness. The Montenegrin route is slightly longer. In both cases we recommend checking the weather forecast and being prepared for rapidly changing mountain conditions.</p>

      <h2>Camping at Trnovačko Lake</h2>

      <p>Camping at Trnovačko Lake is one of the most special experiences hikers and nature lovers can have in Bosnia and Herzegovina.</p>
      <p>A night under the stars, views of Maglić and morning mist rising over the lake create an atmosphere that stays with you for a lifetime.</p>
      <p>In summer many hikers pitch tents on the meadows around the lake and spend the night in nature. There is a mountain café by the lake where you can enjoy a coffee or tea while taking in the view. For camping you will need suitable gear — a tent, a sleeping bag rated for altitude, a sleeping mat and warm clothing, as nights at 1,500 metres can be cold even in summer.</p>

      <h2>Hiking Maglić Above Trnovačko Lake</h2>

      <p><a href="/en/tours/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">Maglić</a>, the highest peak in Bosnia and Herzegovina at 2,386 metres, rises directly above Trnovačko Lake and is one of the most attractive hiking goals in the region.</p>
      <p>The ascent offers spectacular views of the lake, the peaks of Volujak and Bioč, and the vast expanse of Sutjeska National Park.</p>
      <p>For many hikers, the combination of Trnovačko Lake and Maglić represents one of the finest adventures in the Balkans.</p>

      <h2>Best Time to Visit</h2>

      <p>The best period to visit Trnovačko Lake is from June to September, when mountain trails are passable and weather conditions are more stable. The nature is at its most vibrant and the lake has its most beautiful colour. July and August are ideal for swimming in the cold water and for longer stays at camp. In early summer (June) and early autumn (September) you can avoid the crowds and enjoy the quiet — but be aware that weather can be less predictable.</p>

      <h2>What to Bring</h2>

      <ul>
        <li>Hiking boots</li>
        <li>Enough water</li>
        <li>Sun protection</li>
        <li>A light jacket</li>
        <li>A camera or phone for photos</li>
      </ul>

      <h2>Map – Where is Trnovačko Lake?</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.475!2d18.7358!3d43.2828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE2JzU4LjEiTiAxOMKwNDQnMDguOSJF!5e0!3m2!1ssr!2sba!4v1709308800" width="100%" height="400" style="border:0;max-width:100%;border-radius:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Trnovačko Lake location"></iframe>

      <h2>Organised Tour to Trnovačko Lake</h2>

      <p>If you want to experience Trnovačko Lake at its best, you can join an organised guided tour.</p>
      <p>Organised tours typically include:</p>
      <ul>
        <li>Hiking to the lake</li>
        <li>Camping overnight</li>
        <li>Visits to viewpoints</li>
        <li>Option to summit Maglić</li>
      </ul>
      <p>Check out our <a href="/en/tours/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">Trnovačko Lake camping and Maglić summit tour</a> — the ideal choice for those who want a complete adventure in the heart of Sutjeska NP.</p>

      <p>We also recommend tours to <a href="/en/tours/zelengora-jezera-vidikovci" class="text-emerald-400 hover:text-emerald-300 underline">Zelengora</a> and through the <a href="/en/tours/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">Perućica rainforest</a> — all within Sutjeska National Park and Piva Nature Park.</p>
    `,
    author: "Petar & Nevena",
    date: "2026-02-05",
    image: "/images/tours/blog/trnovacko-jezero-maglic-sutjeska.webp",
    imageAlt: "Trnovačko Lake beneath Maglić peak in Sutjeska National Park",
    coverImage: "/images/tours/blog/trnovacko-jezero-maglic-sutjeska.webp",
    coverAlt: "Trnovačko Lake beneath Maglić peak in Sutjeska National Park",
    tags: ["Trnovačko Lake", "Sutjeska NP", "hiking", "camping"],
  },
  {
    id: "2",
    title: "Maglić Hike – Complete Guide & Tips for Bosnia's Highest Peak",
    slug: "maglic-hike-guide",
    excerpt:
      "Maglić is the highest peak in Bosnia and Herzegovina at 2,386 metres. Everything you need to know about the hike — from preparation to safety and the best routes.",
    metadataTitle: "Maglić Hike – Bosnia's Highest Peak | Sutjeska National Park",
    metadataDescription:
      "Complete guide to hiking Maglić (2,386m), the highest peak in Bosnia and Herzegovina. Routes, gear, safety tips and best time to go.",
    content: `
      <h2>About Maglić</h2>

      <p>Maglić, at 2,386 metres, is the highest peak in Bosnia and Herzegovina. Located in Sutjeska National Park on the border with Montenegro, its name comes from the word for "fog" — a fitting description given the frequent mist that settles on the summit. The mountain is part of the Dinaric Alps and offers a genuine challenge for hikers of all experience levels.</p>

      <h2>Routes to Maglić</h2>

      <h3>Route from Tjentište</h3>
      <p>The most popular route starts from Tjentište, passes through the Perućica rainforest to Prijevor, and then climbs to the summit. This route is demanding and takes around 6–7 hours to the top, with a total round-trip time of 10–12 hours.</p>

      <h3>Route from Foča</h3>
      <p>An alternative route departs from Foča, through the village of Mrkalje to Prijevor. Slightly shorter but equally demanding. We recommend a guided tour for both routes.</p>

      <p>Our <a href="/en/tours/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">Maglić summit and Trnovačko Lake camping tour</a> combines the ascent of the highest peak with a night beside one of the most beautiful lakes in Bosnia — a complete adventure in one trip.</p>

      <h2>Difficulty</h2>

      <p>The Maglić hike is demanding and requires good physical fitness. The route includes steep ascents, rocky trails and technically challenging terrain. We recommend having prior hiking experience before attempting Maglić.</p>

      <h3>Physical Preparation</h3>
      <p>Before the hike we recommend:</p>
      <ul>
        <li>Regular physical activity for at least a month beforehand</li>
        <li>Walks with a loaded backpack</li>
        <li>Leg-strengthening and cardiovascular training</li>
        <li>Altitude acclimatisation if you are coming from lower elevations</li>
      </ul>

      <h2>Gear</h2>

      <h3>Essential Equipment</h3>
      <ul>
        <li><strong>Hiking boots</strong> — high-cut with good grip and ankle support</li>
        <li><strong>Backpack</strong> — minimum 40L with ergonomic shoulder straps</li>
        <li><strong>Water</strong> — minimum 3L per person (more in summer)</li>
        <li><strong>Food</strong> — energy bars, nuts, sandwiches</li>
        <li><strong>Clothing</strong> — layered system (base, insulation, shell)</li>
        <li><strong>Hat and gloves</strong> — for sun and cold protection</li>
        <li><strong>Sun cream</strong> — SPF 50+ (UV is stronger at altitude)</li>
        <li><strong>First aid kit</strong> — bandages, antiseptic, basic medication</li>
      </ul>

      <h3>Recommended Additional Gear</h3>
      <ul>
        <li>Trekking poles (especially useful on the descent)</li>
        <li>GPS device or app with offline maps</li>
        <li>Headlamp with spare batteries</li>
        <li>Spare clothing</li>
        <li>Insulated flask for hot drinks</li>
      </ul>

      <h2>Best Time to Go</h2>

      <p>The best time to hike Maglić is from June to September, when conditions are most stable, snow has melted and temperatures are comfortable. Avoid winter ascents unless you are an experienced mountaineer with full winter equipment.</p>

      <h3>Weather</h3>
      <p>Mountain weather on Maglić can change rapidly. Always check the forecast before you set off and be prepared for fog, rain and strong winds.</p>

      <h2>Safety</h2>

      <h3>Always Go with a Guide</h3>
      <p>Maglić is not suitable for inexperienced hikers going solo. Always go with a licensed guide who knows the route and can ensure your safety. Our guides have years of experience on the mountain.</p>

      <h3>Safety Rules</h3>
      <ul>
        <li>Never go alone</li>
        <li>Tell someone your route and expected return time</li>
        <li>Follow your guide's instructions</li>
        <li>Do not separate from the group</li>
        <li>Know your limits</li>
      </ul>

      <h2>What to Expect on the Route</h2>

      <p>The trail to Maglić passes through varied terrain — forest paths, open meadows and rocky ascents. The final section to the summit is the most demanding, with steep rocky ground requiring care. Views from the top are spectacular — on clear days you can see surrounding peaks, lakes and distant valleys.</p>

      <h2>Photography</h2>

      <p>Maglić offers exceptional photography opportunities. The best shots come from the summit, where a 360-degree panorama opens up. Morning and evening light offer the most dramatic conditions.</p>

      <h2>Conclusion</h2>

      <p>Hiking Maglić is an unforgettable experience that requires preparation, proper gear and an experienced guide. With the right approach, it can be one of the finest mountain experiences of your life.</p>

      <p>If you want to summit Maglić with a professional guide, take a look at our <a href="/en/tours/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">Maglić tours</a> or contact us for more information.</p>
    `,
    author: "Petar & Nevena",
    date: "2026-02-24",
    image: "/images/tours/blog/uspon-na-maglic-savjeti.webp",
    imageAlt: "Maglić hike – tips for the route, gear and safety",
    coverImage: "/images/tours/blog/uspon-na-maglic-savjeti.webp",
    coverAlt: "Maglić hike – tips for the route, gear and safety",
    tags: ["Maglić", "hiking", "Sutjeska NP", "tips"],
  },
  {
    id: "3",
    title: "What to Pack for Sutjeska National Park – Complete Gear Guide",
    slug: "what-to-pack-sutjeska-national-park",
    excerpt:
      "A complete guide to gear and preparation for visiting Sutjeska National Park. Find out what is essential, what is recommended, and how to prepare properly for an adventure in nature.",
    metadataTitle: "What to Pack for Sutjeska NP – Hiking Gear Guide | Bosnia",
    metadataDescription:
      "Complete packing list and gear guide for hiking in Sutjeska National Park, Bosnia and Herzegovina. Essentials, camping gear, safety equipment and tips.",
    content: `
      <h2>Why Preparation Matters</h2>

      <p>Sutjeska National Park is wild, unspoiled nature with challenging terrain and unpredictable weather. The right gear and preparation can be the difference between an unforgettable experience and a difficult situation. Whether you are planning a day hike or a multi-day adventure, preparation is everything.</p>

      <h2>Footwear</h2>

      <p>Hiking boots are absolutely essential. Look for boots that:</p>
      <ul>
        <li>Have good grip on both wet and dry surfaces</li>
        <li>Provide ankle support (high-cut)</li>
        <li>Are waterproof yet breathable</li>
        <li>Are comfortable for long days on your feet</li>
      </ul>
      <p>Avoid trainers or casual shoes — the terrain in Sutjeska NP is demanding and requires proper footwear.</p>

      <h2>Backpack</h2>

      <p>For day hikes we recommend a 30–40L pack; for multi-day tours a 50–70L pack. Key features:</p>
      <ul>
        <li>Ergonomic shoulder straps with support</li>
        <li>Hip belt for stability</li>
        <li>External pockets for quick access</li>
        <li>Waterproof cover or built-in waterproofing</li>
      </ul>

      <h2>Clothing – The Layering System</h2>

      <h3>Base Layer</h3>
      <ul>
        <li>Synthetic or merino wool thermal top</li>
        <li>Thermal leggings</li>
        <li>Merino wool or synthetic socks</li>
      </ul>

      <h3>Mid Layer</h3>
      <ul>
        <li>Fleece jacket or warm jumper</li>
        <li>Extra insulation for colder days</li>
      </ul>

      <h3>Shell Layer</h3>
      <ul>
        <li>Waterproof and windproof jacket (Gore-Tex or equivalent)</li>
        <li>Waterproof trousers</li>
        <li>Spare clothing packed inside your bag</li>
      </ul>

      <h2>Food and Water</h2>

      <h3>Water</h3>
      <ul>
        <li>Minimum 2L per person for day hikes</li>
        <li>3–4L for multi-day tours</li>
        <li>Insulated flask for hot drinks (especially in cooler months)</li>
        <li>Water filter if you plan to use natural sources</li>
      </ul>

      <h3>Food</h3>
      <ul>
        <li>Energy bars</li>
        <li>Nuts (almonds, hazelnuts, walnuts)</li>
        <li>Dried fruit</li>
        <li>Sandwiches with fat and protein</li>
        <li>Chocolate for quick energy</li>
        <li>For multi-day tours: instant meals, pasta, rice</li>
      </ul>

      <h2>Camping Gear</h2>

      <h3>Tent</h3>
      <ul>
        <li>Waterproof tent with good ventilation</li>
        <li>Waterproof groundsheet (tarp or footprint)</li>
        <li>Spare tent poles</li>
      </ul>

      <h3>Sleep System</h3>
      <ul>
        <li>Sleeping bag rated for the lowest expected temperatures (to -5°C for summer, to -15°C for autumn/spring)</li>
        <li>Sleeping mat or inflatable pad for insulation</li>
        <li>Pillow (inflatable or use spare clothing)</li>
      </ul>

      <h3>Cooking</h3>
      <ul>
        <li>Portable camp stove</li>
        <li>Lightweight cookware</li>
        <li>Cup and utensils</li>
        <li>Lighter or matches (in a waterproof container)</li>
      </ul>

      <h2>Safety Equipment</h2>

      <h3>First Aid Kit</h3>
      <ul>
        <li>Bandages in various sizes</li>
        <li>Antiseptic</li>
        <li>Pain relief medication</li>
        <li>Antihistamine</li>
        <li>Tweezers and scissors</li>
        <li>Emergency foil blanket</li>
      </ul>

      <h3>Navigation</h3>
      <ul>
        <li>GPS device or app with offline maps</li>
        <li>Compass (backup)</li>
        <li>Paper maps (backup)</li>
        <li>Headlamp with spare batteries</li>
      </ul>

      <h3>Communication</h3>
      <ul>
        <li>Fully charged phone with a power bank for longer trips</li>
        <li>Satellite communicator or PLB for remote routes</li>
      </ul>

      <h2>Additional Essentials</h2>

      <ul>
        <li><strong>Sun cream</strong> — SPF 50+ (UV is stronger at altitude)</li>
        <li><strong>Sunglasses</strong> — with UV protection</li>
        <li><strong>Hat</strong> — for sun and cold protection</li>
        <li><strong>Gloves</strong> — light for summer, warm for autumn/spring</li>
        <li><strong>Trekking poles</strong> — especially useful on descents</li>
        <li><strong>Camera</strong> — with spare batteries and memory cards</li>
        <li><strong>Multi-tool</strong> — Swiss army knife or equivalent</li>
      </ul>

      <h2>What Not to Bring</h2>

      <ul>
        <li>Heavy, unnecessary equipment</li>
        <li>Glass bottles (use plastic or metal)</li>
        <li>Lots of untested new gear</li>
        <li>Valuables you cannot afford to lose</li>
        <li>Excess food (plan realistically)</li>
      </ul>

      <h2>Before You Leave</h2>

      <ul>
        <li>Check all equipment works (headlamp, GPS, stove)</li>
        <li>Make sure your boots are broken in</li>
        <li>Pack your bag correctly — heavier items higher and closer to your back</li>
        <li>Tell someone your route and expected return time</li>
        <li>Check the weather forecast</li>
        <li>Contact Sutjeska NP for the latest trail conditions</li>
      </ul>

      <h2>Organised Tours</h2>

      <p>If you are unsure about your gear or preparation, the best option is to join an organised tour. Our tours include an experienced licensed guide, camping equipment, transfers, insurance and meals.</p>

      <p>Check out our <a href="/en/tours/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">tours in Sutjeska NP</a> or contact us for advice on gear and preparation.</p>
    `,
    author: "Petar & Nevena",
    date: "2026-02-01",
    image: "/images/tours/blog/sta-popnijeti-u-np-sutjeska.webp",
    imageAlt: "What to pack for Sutjeska National Park – hiking gear guide",
    coverImage: "/images/tours/blog/sta-popnijeti-u-np-sutjeska.webp",
    coverAlt: "What to pack for Sutjeska National Park – gear list for day hikes and multi-day tours",
    tags: ["Sutjeska NP", "gear", "preparation", "hiking tips"],
  },
  {
    id: "4",
    title: "Perućica Rainforest – Everything You Need to Know",
    slug: "perucica-rainforest-guide",
    excerpt:
      "Perućica is one of the last primeval forests in Europe and one of the most important natural monuments in Bosnia and Herzegovina. Discover everything you need to know about this untouched wilderness.",
    metadataTitle: "Perućica Rainforest Guide – Europe's Ancient Primeval Forest | Bosnia",
    metadataDescription:
      "Complete guide to Perućica primeval rainforest in Sutjeska National Park, Bosnia. What to see, how to get there, best time to visit and organised tours.",
    content: `
      <h2>What is Perućica?</h2>

      <p>Perućica is an ancient forest that has never been subject to commercial logging. Covering around 1,400 hectares, it is home to plant and animal species that are rare or extinct elsewhere in Europe. The oldest trees are over 300 years old and some reach 60 metres in height. It is one of only two remaining primeval forests in Europe and a UNESCO World Heritage site as part of Sutjeska National Park.</p>

      <h2>Where is it?</h2>

      <p>Perućica lies within Sutjeska National Park in south-eastern Bosnia and Herzegovina, close to the border with Montenegro. The forest is part of a wider protected area that also includes Maglić mountain and Trnovačko Lake.</p>

      <h2>Why is it Important?</h2>

      <h3>Biodiversity</h3>
      <p>Perućica is home to a remarkable range of rare and endangered species:</p>
      <ul>
        <li>Over 170 species of trees and shrubs</li>
        <li>Numerous fungi species</li>
        <li>Rare bird species</li>
        <li>Large mammals including bears, wolves and chamois</li>
        <li>A wealth of insects and other wildlife</li>
      </ul>

      <h3>Climate Importance</h3>
      <p>Primeval forests are critical for absorbing carbon dioxide. As one of the oldest forests in Europe, Perućica plays a particularly important role in this context.</p>

      <h3>Scientific Value</h3>
      <p>Perućica is invaluable for scientific research as a natural ecosystem largely untouched by human activity. Researchers from around the world come here to study natural processes and biodiversity.</p>

      <h2>How to Get There</h2>

      <h3>From Tjentište</h3>
      <p>The most popular route departs from Tjentište and leads through the forest to Skakavac Waterfall. This route is accessible to beginners, with well-marked trails.</p>

      <h3>From Foča</h3>
      <p>An alternative route starts from Foča through Sutjeska NP. Slightly more demanding but rewarding.</p>

      <p>For the best experience we strongly recommend a guided tour. Access to the forest is strictly controlled and entry is only permitted with a licensed guide. Our <a href="/en/tours/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">Perućica Rainforest and Skakavac Waterfall day tour</a> lets you explore this untouched wilderness safely and responsibly.</p>

      <h2>What to See</h2>

      <h3>Ancient Trees</h3>
      <p>The most impressive feature of the forest is its ancient trees — some over 300 years old, reaching 60 metres in height, with trunks of extraordinary girth.</p>

      <h3>Skakavac Waterfall</h3>
      <p>At 75 metres, Skakavac is one of the tallest waterfalls in Bosnia and Herzegovina. Set deep within the forest, it is a spectacular natural phenomenon.</p>

      <h3>Flora and Fauna</h3>
      <p>The forest is home to numerous plant and animal species. In summer you can see wildflowers in bloom, while the surrounding woodland shelters bears, wolves and many bird species.</p>

      <h2>Best Time to Visit</h2>

      <p>Perućica is accessible year-round, but the best time to visit is May to October:</p>
      <ul>
        <li>Weather conditions are most stable</li>
        <li>Trails are dry and passable</li>
        <li>Flora is in full bloom</li>
        <li>Temperatures are comfortable for walking</li>
      </ul>

      <h2>What to Bring</h2>

      <ul>
        <li>Hiking boots with good grip (trails can be wet)</li>
        <li>Waterproof jacket (the forest is humid)</li>
        <li>Backpack with water and food</li>
        <li>Sun cream and sunglasses</li>
        <li>Camera — the forest is stunning to photograph</li>
        <li>Binoculars for birdwatching</li>
      </ul>

      <h2>Rules and Protection</h2>

      <h3>What is Allowed</h3>
      <ul>
        <li>Walking on marked trails</li>
        <li>Photography</li>
        <li>Nature observation</li>
        <li>Organised tours with a licensed guide</li>
      </ul>

      <h3>What is Not Allowed</h3>
      <ul>
        <li>Leaving marked trails</li>
        <li>Picking plants or taking anything from nature</li>
        <li>Lighting fires</li>
        <li>Leaving litter</li>
        <li>Loud behaviour that may disturb wildlife</li>
        <li>Camping outside designated areas</li>
      </ul>

      <h2>Organised Tours</h2>

      <p>Our <a href="/en/tours/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">Perućica Rainforest day tour</a> includes a licensed guide, educational content about the forest, a visit to Skakavac Waterfall, transfer from Foča and lunch in nature.</p>

      <p>If you want to combine the rainforest with other highlights of the park, take a look at our <a href="/en/tours/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">Trnovačko Lake and Maglić tour</a> or <a href="/en/tours/zelengora-jezera-vidikovci" class="text-emerald-400 hover:text-emerald-300 underline">Zelengora lakes tour</a>.</p>
    `,
    author: "Petar & Nevena",
    date: "2026-01-28",
    image: "/images/tours/blog/skakavac.webp",
    imageAlt: "Perućica primeval rainforest and Skakavac Waterfall – what to know before your visit",
    tags: ["Perućica Rainforest", "Sutjeska NP", "nature", "biodiversity"],
  },
  {
    id: "5",
    title: "Zelengora: Lakes, Viewpoints and the Best Hiking Routes",
    slug: "zelengora-lakes-hiking-guide",
    excerpt:
      "Zelengora offers over nine beautiful lakes, spectacular viewpoints and routes for all levels. A complete guide to this mountain in the heart of Sutjeska National Park.",
    metadataTitle: "Zelengora Hiking Guide – Lakes, Viewpoints & Routes | Sutjeska NP Bosnia",
    metadataDescription:
      "Complete guide to hiking Zelengora mountain in Sutjeska National Park. Nine mountain lakes, viewpoints, the Bregoč summit and routes for all fitness levels.",
    content: `
      <h2>Why Zelengora?</h2>

      <p>Zelengora is a mountain in the heart of Sutjeska National Park that offers over nine natural lakes — Orlovačko, Štirinsko, Kotlaničko, Donje and Gornje Bare and others. Each lake has its own character, and the trails connecting them pass through meadows, forests and rocky terrain. The mountain is accessible to beginners on the easier routes and to more experienced hikers on the summit route to Bregoč (2,017m).</p>

      <h2>Most Popular Routes</h2>

      <h3>Lakes and Viewpoints (Easy)</h3>
      <p>A route passing Orlovačko, Štirinsko and other lakes, with stops at the finest viewpoints. Ideal for a day trip and for photographers. Duration: 4–6 hours.</p>

      <h3>Bregoč Summit (Moderate)</h3>
      <p>Bregoč is the highest peak on Zelengora at 2,017 metres. The route takes around 4–5 hours of ascent, with spectacular views of the surrounding lakes and peaks. Requires moderate fitness.</p>

      <h2>When to Go</h2>

      <p>The best time is May to October. Summers are warm and sunny; autumn brings golden colours. In winter additional equipment and experience are required.</p>

      <h2>What to Bring</h2>

      <p>Hiking boots, a backpack with at least 2L of water, layered clothing, sun cream and sunglasses. For longer routes — energy food and spare clothing.</p>

      <h2>Organised Tours</h2>

      <p>If you would like to experience Zelengora with a guide, take a look at our <a href="/en/tours/zelengora-jezera-vidikovci" class="text-emerald-400 hover:text-emerald-300 underline">Zelengora Lakes and Viewpoints day tour</a> or the <a href="/en/tours/zelengora-uspon-bregoč" class="text-emerald-400 hover:text-emerald-300 underline">Bregoč summit hike</a>. We also offer a <a href="/en/tours/kampovanje-zelengora-bregoč-jeep-safari" class="text-emerald-400 hover:text-emerald-300 underline">Zelengora camping and jeep safari</a> package.</p>

      <p>For all enquiries and bookings, <a href="/en#contact" class="text-emerald-400 hover:text-emerald-300 underline">contact us</a>.</p>
    `,
    author: "Petar & Nevena",
    date: "2026-02-10",
    image: "/images/tours/blog/zelengora-jezera-vidikovci.webp",
    imageAlt: "Zelengora mountain lakes and viewpoints – hiking guide",
    tags: ["Zelengora", "Sutjeska NP", "lakes", "Bregoč", "hiking"],
  },
  {
    id: "6",
    title: "Skakavac Waterfall in Perućica – What to Know Before You Visit",
    slug: "skakavac-waterfall-guide",
    excerpt:
      "Skakavac Waterfall, standing 75 metres tall, lies deep within the Perućica rainforest. Everything you need to know before your visit — routes, gear and the best time to go.",
    metadataTitle: "Skakavac Waterfall Perućica – Hiking Guide | Sutjeska NP Bosnia",
    metadataDescription:
      "Guide to visiting Skakavac Waterfall (75m) in the Perućica rainforest, Sutjeska National Park. Routes, what to bring and how to book a guided tour.",
    content: `
      <h2>Where is Skakavac Waterfall?</h2>

      <p>Skakavac Waterfall is located within the Perućica primeval forest — one of the oldest forests in Europe — inside Sutjeska National Park. Access is only possible with a licensed guide, as the forest is strictly protected. The route from the entrance to the waterfall takes around 2–3 hours of easy walking through untouched wilderness.</p>

      <h2>What to See Along the Way</h2>

      <p>The path to Skakavac passes ancient trees, lush vegetation and mountain streams. The forest itself is an attraction — you can see trees over 300 years old and countless plant and bird species. The waterfall reveals itself suddenly after the final climb — impressive and thunderous.</p>

      <h2>Best Time to Visit</h2>

      <p>Spring and summer (May–September) are ideal — the water flow is at its strongest and nature is in full bloom. Autumn is also beautiful, with vivid foliage. Winter can be dangerous due to icy trails.</p>

      <h2>What to Bring</h2>

      <ul>
        <li>Hiking boots with good grip (trails can be wet)</li>
        <li>Waterproof jacket (the forest is humid and rain is possible)</li>
        <li>Backpack with water and food</li>
        <li>Camera — Skakavac is spectacular to photograph</li>
      </ul>

      <h2>Organised Tours</h2>

      <p>Access to Perućica and Skakavac is only possible with a guide. Our <a href="/en/tours/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">Perućica Rainforest and Skakavac Waterfall day tour</a> includes transfer, a licensed guide, lunch and educational content about the forest. Check available dates and <a href="/en#contact" class="text-emerald-400 hover:text-emerald-300 underline">contact us</a> to book.</p>
    `,
    author: "Petar & Nevena",
    date: "2026-02-12",
    image: "/images/tours/blog/djevojka-na-vodopadu-skakavac.webp",
    imageAlt: "Skakavac Waterfall in Perućica rainforest – what to know before your visit",
    tags: ["Skakavac Waterfall", "Perućica Rainforest", "Sutjeska NP"],
  },
  {
    id: "7",
    title: "May Day Adventure – Last Year's Recap",
    slug: "may-day-adventure-recap",
    excerpt:
      "Last May Day — nearly 70 participants, an educational programme on Friday, perfect weather, Trnovačko Lake and Zelengora. A short recap of our May Day Adventure.",
    metadataTitle: "May Day Adventure Recap – Hiking in Sutjeska NP | Breathe Adventure",
    metadataDescription:
      "How our May Day Adventure went last year — 70 participants, bungalows at Tjentište, Trnovačko Lake hike and Zelengora. Join us this year.",
    content: `
      <h2>Numbers and Atmosphere</h2>

      <p>Nearly 70 participants — the kind of group we had long hoped to see. Friday was dedicated to arrivals, settling in and an educational programme about Sutjeska NP and the Perućica rainforest. Dinner, good company and preparations for Saturday.</p>

      <h2>Saturday – Choose Your Adventure</h2>

      <p>Saturday brought a big choice: Trnovačko Lake (moderate) or Perućica Rainforest (more demanding). The weather was perfect — sunshine and clear skies. Both groups returned happy, and the evening brought music and socialising around the camp.</p>

      <h2>Sunday – Zelengora</h2>

      <p>Sunday was reserved for a relaxed hike on Zelengora — Donje and Gornje Bare lakes, the Borić viewpoint. Perfect for unwinding before the drive home. The weather held throughout.</p>

      <h2>What's Coming This Year?</h2>

      <p>We are organising the May Day Adventure again — bungalows, food, park tickets and tours of your choice. If you want to be part of the next crew, check out our <a href="/en/tours/prvomajska-avantura" class="text-emerald-400 hover:text-emerald-300 underline">May Day Adventure</a> and <a href="/en#contact" class="text-emerald-400 hover:text-emerald-300 underline">get in touch</a> to book your spot.</p>
    `,
    author: "Petar & Nevena",
    date: "2026-02-14",
    image: "/images/tours/blog/prvi-maj-blog.webp",
    imageAlt: "May Day Adventure – recap from Sutjeska National Park",
    tags: ["May Day", "Tjentište", "recap", "adventure"],
  },
];

export function getBlogPostENBySlug(slug: string): BlogPostEN | undefined {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return blogPostsEN.find((post) => post.slug.trim().toLowerCase() === s);
}
