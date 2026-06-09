export interface BlogPost {
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
  images?: { src: string; alt: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Trnovačko jezero: Kako doći, gdje spavati i zašto morate doći",
    slug: "trnovacko-jezero-vodic",
    excerpt:
      "Saznaj kako doći do Trnovačkog jezera, kada je najbolje vrijeme za posjetu, gdje kampovati i kako izgleda uspon na Maglić iznad jednog od najljepših jezera Balkana.",
    metadataTitle: "Trnovačko jezero: Kako doći, gdje spavati i zašto morate doći | Udahni Avanturu",
    metadataDescription:
      "Saznaj kako doći do Trnovačkog jezera, kada je najbolje vrijeme za posjetu, gdje kampovati i kako izgleda uspon na Maglić iznad jednog od najljepših jezera Balkana.",
    content: `
      <h2>Gdje se nalazi Trnovačko jezero</h2>
      
      <p>Trnovačko jezero nalazi se u Nacionalnom parku Sutjeska, na granici Bosne i Hercegovine i Crne Gore, ispod planine <a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">Maglić</a> koja je ujedno i najviši vrh Bosne i Hercegovine. Ovo ledenjačko jezero smješteno je na nadmorskoj visini od oko 1517 metara i poznato je po svom jedinstvenom obliku srca koji ga čini jednim od najfotografisanijih prirodnih lokaliteta na Balkanu. Pristup jezeru vodi kroz planinske staze iz pravca Foče i Prijevora, a u blizini se nalazi i prašuma Perućica – najstarija prašuma u Evropi.</p>

      <h2>Zašto je Trnovačko jezero posebno</h2>
      
      <p>Trnovačko jezero smatra se jednim od najljepših planinskih jezera u regionu zbog svoje boje, okruženja i pogleda na planinu Maglić. Okruženo je strmim planinskim padinama, zelenim livadama i kamenitim vrhovima koji stvaraju impresivan pejzaž.</p>
      <p>Tokom ljetnih mjeseci voda jezera poprima tirkizne nijanse, dok planinski vrhovi stvaraju dramatičnu pozadinu koja oduzima dah. Jezero je formirano tokom ledenog doba i proteže se na oko 500 metara dužine i 300 metara širine, sa maksimalnom dubinom od 15 metara. Kristalno čista voda reflektuje okolne planine – Maglić, Volujak i Bioč – stvarajući panorame koje ostaju u sjećanju svakog posjetioca.</p>

      <h2>Kako doći do Trnovačkog jezera</h2>
      
      <p>Postoji nekoliko načina da se dođe do Trnovačkog jezera.</p>
      <p><strong>1. Planinarska ruta iz pravca Prijevora.</strong> Jedna od najčešćih ruta vodi iz pravca Prijevora i traje oko 1:40min planinarenja kroz planinske pašnjake i staze.</p>
      <p><strong>2. Ruta iz pravca Crne Gore.</strong> Druga ruta vodi iz pravca sela Mratinje u Crnoj Gori i uključuje dužu planinarsku stazu oko 5 sati planinarenja.</p>
      <p><strong>3. Organizovana tura sa vodičem.</strong> Za mnoge posjetioce najjednostavniji način je dolazak uz organizovanu turu sa vodičem koji poznaje teren. Ruta iz Prijevora traje oko 1:40min planinarenja i zahtijeva normalnu fizičku kondiciju. Ruta iz Crne Gore je nešto duža i uključuje više sati hoda kroz planinske pašnjake i staze. U oba slučaja preporučujemo da provjerite vremensku prognozu i da budete pripremljeni za promjenu vremena u planinama.</p>

      <h2>Kampovanje na Trnovačkom jezeru</h2>
      
      <p>Kampovanje na Trnovačkom jezeru jedno je od najposebnijih iskustava koje planinari i ljubitelji prirode mogu doživjeti u Crnoj Gori.</p>
      <p>Noć pod zvijezdama, pogled na planinu Maglić i jutarnja magla iznad jezera stvaraju atmosferu koja ostaje u sjećanju cijeli život.</p>
      <p>Tokom ljeta mnogi planinari postavljaju šatore na livadama oko jezera i provode noć u prirodi. Uz jezero postoji planinska kafana gdje možete popiti kafu, čaj ili nešto jače dok uživate u pogledu. Za kampovanje potrebna vam je odgovarajuća oprema – šator, spavaća vreća prilagođena visini, karimat i topla odjeća, jer noći na 1500 metara mogu biti hladne čak i u ljetnim mjesecima.</p>

      <h2>Uspon na Maglić iznad Trnovačkog jezera</h2>
      
      <p><a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">Maglić</a>, najviši vrh Bosne i Hercegovine (2386 m), nalazi se iznad Trnovačkog jezera i predstavlja jedan od najatraktivnijih planinarskih ciljeva u regionu.</p>
      <p>Uspon na Maglić pruža spektakularne poglede na Trnovačko jezero, planine Volujak i Bioč, kao i prostranstva Nacionalnog parka Sutjeska.</p>
      <p>Za mnoge planinare kombinacija Trnovačko jezero + Maglić predstavlja jednu od najljepših avantura na Balkanu.</p>

      <h2>Kada je najbolje vrijeme za posjetu</h2>
      
      <p>Najbolji period za posjetu Trnovačkom jezeru je od juna do septembra, kada su planinske staze prohodne, a vremenski uslovi stabilniji. U tom periodu priroda je najživlja, a jezero ima svoju najljepšu boju. Jul i august su idealni za kupanje u hladnoj vodi jezera i za duže boravke u kampu. U ranom ljetu (jun) i ranoj jeseni (septembar) možete izbjeći gužve i uživati u tišini – ali budite svjesni da vremenske prilike mogu biti nestabilnije.</p>

      <h2>Šta ponijeti na turu</h2>
      
      <ul>
        <li>planinarske cipele</li>
        <li>dovoljno vode</li>
        <li>zaštitu od sunca</li>
        <li>laganu jaknu</li>
        <li>kameru ili telefon za fotografije</li>
      </ul>

      <h2>Mapa – gdje se nalazi Trnovačko jezero</h2>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.475!2d18.7358!3d43.2828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE2JzU4LjEiTiAxOMKwNDQnMDguOSJF!5e0!3m2!1ssr!2sba!4v1709308800" width="100%" height="400" style="border:0;max-width:100%;border-radius:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Lokacija Trnovačkog jezera"></iframe>

      <h2>Organizovana tura na Trnovačko jezero</h2>
      
      <p>Ako želiš doživjeti Trnovačko jezero na najbolji način, možeš se pridružiti organizovanoj turi sa vodičem.</p>
      <p>Organizovane ture obično uključuju:</p>
      <ul>
        <li>planinarenje do jezera</li>
        <li>kampovanje</li>
        <li>obilazak vidikovaca</li>
        <li>mogućnost uspona na Maglić</li>
      </ul>
      <p>Pogledaj našu <a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">turu na Trnovačko jezero sa kampovanjem i usponom na Maglić</a> – idealan izbor za one koji žele kompletnu avanturu u srcu NP Sutjeska.</p>

      <p>Također preporučujemo ture na <a href="/ture/zelengora-jezera-vidikovci" class="text-emerald-400 hover:text-emerald-300 underline">Zelengoru</a> i kroz <a href="/ture/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">prašumu Perućica</a> – sve u okviru Nacionalnog parka Sutjeska i parka prirode Piva.</p>
    `,
    author: "Petar Kostić",
    date: "2026-02-05",
    image: "/images/tours/blog/trnovacko-jezero-maglic-sutjeska.webp",
    imageAlt: "Trnovačko jezero ispod planine Maglić u Nacionalnom parku Sutjeska",
    coverImage: "/images/tours/blog/trnovacko-jezero-maglic-sutjeska.webp",
    coverAlt: "Trnovačko jezero ispod planine Maglić u Nacionalnom parku Sutjeska",
    tags: ["Trnovačko jezero", "NP Sutjeska", "planinarenje", "kampovanje"],
  },
  {
    id: "2",
    title: "Uspon na Maglić – savjeti",
    slug: "uspon-na-maglic-savjeti",
    excerpt:
      "Maglić je najviši vrh Bosne i Hercegovine sa 2386 metara. Saznajte sve što trebate znati o usponu na Maglić - od pripreme do sigurnosnih mjera i najboljih ruta.",
    content: `
      <h1>Uspon na Maglić – kompletan vodič sa savjetima</h1>
      
      <p>Maglić, sa svojih 2386 metara, je najviši vrh Bosne i Hercegovine. Uspon na ovaj impresivni vrh predstavlja jedan od najvećih izazova za planinare u regiji. Ovaj članak će vam pružiti sve potrebne informacije i savjete za uspješan i siguran uspon na Maglić.</p>

      <h2>O Magliću</h2>
      
      <p>Maglić se nalazi u Nacionalnom parku Sutjeska, na granici između Bosne i Hercegovine i Crne Gore. Ime "Maglić" dolazi od riječi "magla" (magla), što odražava česte maglovite uslove na vrhu. Planina je dio dinarskog masiva i predstavlja izazov za sve nivoe planinara.</p>

      <h2>Rute do Maglića</h2>
      
      <h3>Ruta iz Tjentišta</h3>
      <p>Najpopularnija ruta vodi iz Tjentišta, kroz prašumu Perućica, do Prijevora, a zatim usponom na Maglić. Ova ruta je zahtjevna i traje oko 6-7 sati hoda do vrha. Ukupno vrijeme (povratak uključen) je oko 10-12 sati.</p>

      <h3>Ruta iz Foče</h3>
      <p>Alternativna ruta vodi iz Foče, kroz selo Mrkalje, do Prijevora. Ova ruta je nešto kraća ali jednako zahtjevna. Preporučujemo organizovanu turu sa vodičem za obje rute.</p>

      <p>Naša <a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">tura na Maglić sa kampovanjem na Trnovačkom jezeru</a> kombinuje uspon na najviši vrh sa kampovanjem uz jedno od najljepših jezera u BiH, pružajući vam kompletnu avanturu.</p>

      <h2>Težina uspona</h2>
      
      <p>Uspon na Maglić je zahtjevan i zahtijeva dobru fizičku kondiciju. Ruta uključuje strme uspone, kamenite staze i izazovne terene. Preporučujemo da imate iskustvo u planinarenju prije pokušaja uspona na Maglić.</p>

      <h3>Fizička priprema</h3>
      <p>Prije uspona na Maglić, preporučujemo:</p>
      <ul>
        <li>Redovnu fizičku aktivnost najmanje mjesec dana prije</li>
        <li>Šetnje sa opterećenjem (ruksak sa težinom)</li>
        <li>Treninge za jačanje nogu i kardiovaskularnog sistema</li>
        <li>Aklimatizaciju na visinu (ako dolazite iz nižih predjela)</li>
      </ul>

      <h2>Oprema za uspon</h2>
      
      <h3>Obavezna oprema</h3>
      <ul>
        <li><strong>Planinske cipele</strong> - visoke cipele sa dobrom prijanjanjem i podrškom za gležanj</li>
        <li><strong>Ruksak</strong> - minimalno 40L sa ergonomskim ramenjacima</li>
        <li><strong>Voda</strong> - minimalno 3L po osobi (više u ljetnim mjesecima)</li>
        <li><strong>Hrana</strong> - energetski barovi, orašasti plodovi, sendviči</li>
        <li><strong>Odjeća</strong> - slojevi (bazni sloj, izolacioni sloj, vanjski sloj)</li>
        <li><strong>Kapa i rukavice</strong> - za zaštitu od sunca i hladnoće</li>
        <li><strong>Krema za sunce</strong> - SPF 50+ (UV zraci su jači na visini)</li>
        <li><strong>Prva pomoć</strong> - osnovni set sa zavojima, dezinfekcijom, i lijekovima</li>
      </ul>

      <h3>Preporučena dodatna oprema</h3>
      <ul>
        <li>Račve za planinarenje (posebno korisne na spustu)</li>
        <li>GPS uređaj ili aplikacija sa offline mapama</li>
        <li>Fenjer ili čarobna svjetiljka</li>
        <li>Rezervna odjeća</li>
        <li>Termo boca za toplu vodu</li>
      </ul>

      <h2>Najbolje vrijeme za uspon</h2>
      
      <p>Najbolje vrijeme za uspon na Maglić je od juna do septembra, kada su vremenske prilike najstabilnije. U ovom periodu snijeg je već otopljen, a temperature su prijatne za planinarenje. Izbjegavajte uspon u zimskim mjesecima osim ako niste iskusni planinar sa zimskom opremom.</p>

      <h3>Vremenske prilike</h3>
      <p>Vremenske prilike na Magliću mogu se brzo promijeniti. Uvijek provjerite prognozu prije polaska i budite spremni na promjene. Magla, kiša i vjetar su česti, pa je važno biti pripremljen.</p>

      <h2>Sigurnost</h2>
      
      <h3>Uvijek idite sa vodičem</h3>
      <p>Uspon na Maglić nije za samostalne planinare bez iskustva. Uvijek idite sa licenciranim vodičem koji poznaje rutu i može osigurati vašu sigurnost. Naši vodiči imaju godinama iskustva i poznaju sve opasnosti na ruti.</p>

      <h3>Sigurnosne mjere</h3>
      <ul>
        <li>Nikada ne idite sami</li>
        <li>Informišite nekoga o vašoj ruti i očekivanom vremenu povratka</li>
        <li>Poštujte instrukcije vodiča</li>
        <li>Ne odvajajte se od grupe</li>
        <li>Budite svjesni svojih ograničenja</li>
      </ul>

      <h2>Šta očekivati na ruti</h2>
      
      <p>Ruta do Maglića vodi kroz različite terene - od šumskih staza do kamenitih uspona. Posljednji dio uspona je najzahtjevniji, sa strmim kamenitim terenom. Vidici sa vrha su spektakularni - možete vidjeti okolne planine, jezera i daleke predjele.</p>

      <h2>Fotografisanje</h2>
      
      <p>Maglić pruža izuzetne prilike za fotografisanje. Najbolje fotografije možete napraviti sa vrha, gdje imate panoramski pogled na okolne planine. Ujutro i uveče svjetlost je najbolja za fotografisanje.</p>

      <h2>Zaključak</h2>
      
      <p>Uspon na Maglić je nezaboravno iskustvo koje zahtijeva pripremu, pravilnu opremu i iskusnog vodiča. Sa pravom pripremom, ovo može biti jedno od najboljih planinarskih iskustava u vašem životu.</p>

      <p>Ako želite iskusiti uspon na Maglić sa profesionalnim vodičem i sigurnošću, pogledajte naše <a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">ture na Maglić</a> ili kontaktirajte nas za više informacija.</p>
    `,
    author: "Petar Kostić",
    date: "2026-02-24",
    image: "/images/tours/blog/uspon-na-maglic-savjeti.webp",
    imageAlt: "Uspon na Maglić – savjeti",
    coverImage: "/images/tours/blog/uspon-na-maglic-savjeti.webp",
    coverAlt: "Uspon na Maglić – savjeti za rutu, opremu i sigurnost",
    tags: ["Maglić", "planinarenje", "NP Sutjeska", "savjeti"],
  },
  {
    id: "3",
    title: "Šta ponijeti u NP Sutjeska",
    slug: "sta-ponijeti-np-sutjeska",
    excerpt:
      "Kompletan vodič o opremi i pripremi za posjetu Nacionalnom parku Sutjeska. Saznajte šta je obavezno, šta je preporučeno i kako se pravilno pripremiti za avanturu u prirodi.",
    content: `
      <h1>Šta ponijeti u NP Sutjeska – kompletan vodič</h1>
      
      <p>Nacionalni park Sutjeska je jedno od najljepših i najzahtjevnijih mjesta za planinarenje u Bosni i Hercegovini. Sa najvišim vrhom Maglićem, prekrasnim jezerima i netaknutom prirodom, NP Sutjeska zahtijeva pravilnu pripremu i opremu. Ovaj vodič će vam pomoći da se pripremite za nezaboravnu avanturu.</p>

      <h2>Zašto je priprema važna?</h2>
      
      <p>NP Sutjeska je divlja i netaknuta priroda sa izazovnim terenima i promjenjivim vremenskim prilikama. Pravilna oprema i priprema mogu značiti razliku između nezaboravnog iskustva i neugodne situacije. Bez obzira da li planirate jednodnevnu šetnju ili višednevnu avanturu, priprema je ključna.</p>

      <h2>Osnovna oprema</h2>
      
      <h3>Obuća</h3>
      <p>Planinske cipele su apsolutno obavezne. Tražite cipele koje:</p>
      <ul>
        <li>Imaju dobru prijanjanje (grip) na mokrim i suvim površinama</li>
        <li>Pružaju podršku za gležanj (visoke cipele)</li>
        <li>Su vodootporne ali prozračne</li>
        <li>Su udobne za duže šetnje</li>
      </ul>
      <p>Izbjegavajte tenisice ili obične cipele - tereni u NP Sutjeska su zahtjevni i zahtijevaju profesionalnu obuću.</p>

      <h3>Ruksak</h3>
      <p>Za jednodnevne ture preporučujemo ruksak od 30-40L, dok za višednevne ture trebate ruksak od 50-70L. Važno je da ruksak ima:</p>
      <ul>
        <li>Ergonomske ramenjake sa podrškom</li>
        <li>Pojas za stabilnost</li>
        <li>Vanjške džepove za brz pristup</li>
        <li>Vodootporni pokrivač (ili ugrađenu vodootpornost)</li>
      </ul>

      <h3>Odjeća</h3>
      <p>Sistem slojeva je ključan za udobnost i sigurnost:</p>
      
      <h4>Bazni sloj</h4>
      <ul>
        <li>Termo majica (sintetička ili merino vuna)</li>
        <li>Termo gaćice</li>
        <li>Čarape od merino vune ili sintetike</li>
      </ul>

      <h4>Izolacioni sloj</h4>
      <ul>
        <li>Fleece jakna ili džemper</li>
        <li>Dodatni sloj za hladnije dane</li>
      </ul>

      <h4>Vanjski sloj</h4>
      <ul>
        <li>Vodootporna i vjetrootporna jakna (Gore-Tex ili slično)</li>
        <li>Vodootporne pantalone</li>
        <li>Rezervna odjeća u ruksaku</li>
      </ul>

      <h2>Hrana i voda</h2>
      
      <h3>Voda</h3>
      <p>Voda je kritična. Preporučujemo:</p>
      <ul>
        <li>Minimalno 2L vode po osobi za jednodnevne ture</li>
        <li>3-4L za višednevne ture</li>
        <li>Termo boca za toplu vodu (posebno u hladnijim mjesecima)</li>
        <li>Filtar za vodu ako planirate koristiti prirodne izvore</li>
      </ul>

      <h3>Hrana</h3>
      <p>Hrana treba biti laka, hranjiva i energetska:</p>
      <ul>
        <li>Energetski barovi</li>
        <li>Orašasti plodovi (bademi, lješnjaci, orasi)</li>
        <li>Sušeno voće</li>
        <li>Sendviči sa masnoćom i proteinima</li>
        <li>Čokolada za brzu energiju</li>
        <li>Za višednevne ture: instant obroci, pasta, riža</li>
      </ul>

      <h2>Oprema za kampovanje</h2>
      
      <p>Ako planirate kampovanje u NP Sutjeska, dodatno trebate:</p>
      
      <h3>Šator</h3>
      <ul>
        <li>Vodootporan šator sa dobrim provjetravanjem</li>
        <li>Vodootporna podloga (tarp ili footprint)</li>
        <li>Štapovi za šator (rezervni dio)</li>
      </ul>

      <h3>Spavanje</h3>
      <ul>
        <li>Spavaća vreća prilagođena najnižim temperaturama (do -5°C za ljeto, do -15°C za jesen/proljeće)</li>
        <li>Karimat ili dušek za izolaciju</li>
        <li>Jastuk (inflatable ili odjeća)</li>
      </ul>

      <h3>Kuhanje</h3>
      <ul>
        <li>Portabilna štednja</li>
        <li>Posuđe za kuhanje</li>
        <li>Šolje i pribor</li>
        <li>Upaljač ili šibice (u vodootpornom pakovanju)</li>
      </ul>

      <h2>Sigurnosna oprema</h2>
      
      <h3>Prva pomoć</h3>
      <p>Osnovni set prve pomoći treba uključivati:</p>
      <ul>
        <li>Zavoje različitih veličina</li>
        <li>Dezinfekcija</li>
        <li>Lijekovi protiv bolova</li>
        <li>Lijekovi protiv alergija</li>
        <li>Pinceta</li>
        <li>Škarice</li>
        <li>Aluminijumska folija (za toplotu)</li>
      </ul>

      <h3>Navigacija</h3>
      <ul>
        <li>GPS uređaj ili aplikacija sa offline mapama</li>
        <li>Kompas (rezervna opcija)</li>
        <li>Papirnate mape (rezervna opcija)</li>
        <li>Fenjer ili čarobna svjetiljka (sa rezervnim baterijama)</li>
      </ul>

      <h3>Komunikacija</h3>
      <ul>
        <li>Punjen telefon (power bank za višednevne ture)</li>
        <li>Satelitski telefon ili PLB (Personal Locator Beacon) za udaljene ture</li>
      </ul>

      <h2>Dodatna oprema</h2>
      
      <ul>
        <li><strong>Krema za sunce</strong> - SPF 50+ (UV zraci su jači na visini)</li>
        <li><strong>Naočale za sunce</strong> - sa UV zaštitom</li>
        <li><strong>Kapa</strong> - za zaštitu od sunca i hladnoće</li>
        <li><strong>Rukavice</strong> - lagane za ljeto, tople za jesen/proljeće</li>
        <li><strong>Račve za planinarenje</strong> - posebno korisne na spustu</li>
        <li><strong>Fotoaparat</strong> - sa rezervnim baterijama i memorijskim karticama</li>
        <li><strong>Multi-tool</strong> - švicarski nož ili slično</li>
      </ul>

      <h2>Šta ne ponijeti</h2>
      
      <p>Izbjegavajte:</p>
      <ul>
        <li>Tešku i nepotrebnu opremu</li>
        <li>Staklene boce (koristite plastične)</li>
        <li>Puno novih stvari koje niste testirali</li>
        <li>Skupocjene stvari koje možete izgubiti</li>
        <li>Višak hrane (planirajte realno)</li>
      </ul>

      <h2>Priprema prije polaska</h2>
      
      <h3>Provjera opreme</h3>
      <p>Prije polaska, provjerite:</p>
      <ul>
        <li>Da li sva oprema radi (fenjer, GPS, štednja)</li>
        <li>Da li je obuća udobna i pripremljena</li>
        <li>Da li imate sve potrebno</li>
        <li>Da li je ruksak pravilno upakovan (teže stvari gore, lakske dole)</li>
      </ul>

      <h3>Informisanje</h3>
      <ul>
        <li>Informišite nekoga o vašoj ruti i očekivanom vremenu povratka</li>
        <li>Provjerite vremensku prognozu</li>
        <li>Pregledajte mape i rute</li>
        <li>Kontaktirajte NP Sutjeska za najnovije informacije</li>
      </ul>

      <h2>Organizovane ture</h2>
      
      <p>Ako niste sigurni u svoju opremu ili pripremu, najbolje je ići sa organizovanom turom. Naše ture uključuju:</p>
      <ul>
        <li>Iskusnog vodiča sa licencom</li>
        <li>Osnovnu opremu za kampiranje</li>
        <li>Transfer i logistiku</li>
        <li>Osiguranje</li>
        <li>Obroke tokom ture</li>
      </ul>

      <p>Pogledajte naše <a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">ture u NP Sutjeska</a> ili kontaktirajte nas za više informacija o opremi i pripremi.</p>

      <h2>Zaključak</h2>
      
      <p>Pravilna oprema i priprema su ključni za sigurnu i ugodnu avanturu u NP Sutjeska. Ne štedite na kvalitetnoj opremi - to je investicija u vašu sigurnost i uživanje. Ako imate pitanja o opremi ili pripremi, kontaktirajte nas - rado ćemo pomoći.</p>
    `,
    author: "Nevena Matović",
    date: "2026-02-01",
    image: "/images/tours/blog/sta-popnijeti-u-np-sutjeska.webp",
    imageAlt: "Šta ponijeti u NP Sutjeska",
    coverImage: "/images/tours/blog/sta-popnijeti-u-np-sutjeska.webp",
    coverAlt: "Šta ponijeti u NP Sutjeska – spisak opreme za jednodnevne i višednevne ture",
    tags: ["NP Sutjeska", "oprema", "priprema", "savjeti"],
  },
  {
    id: "4",
    title: "Prašuma Perućica – šta treba znati",
    slug: "prasuma-perucica-sta-treba-znati",
    excerpt:
      "Prašuma Perućica je najstarija prašuma u Evropi i jedan od najvažnijih prirodnih spomenika u Bosni i Hercegovini. Otkrijte sve što trebate znati o ovoj netaknutoj prirodi.",
    content: `
      <h1>Prašuma Perućica – sve što trebate znati</h1>
      
      <p>Prašuma Perućica je jedan od najvažnijih prirodnih spomenika u Bosni i Hercegovini i najstarija prašuma u Evropi. Smještena u Nacionalnom parku Sutjeska, ova netaknuta priroda predstavlja pravi dragulj za sve ljubitelje prirode. Ovaj članak će vam pružiti sve potrebne informacije o prašumi Perućica.</p>

      <h2>Šta je prašuma Perućica?</h2>
      
      <p>Prašuma Perućica je stara šuma koja nikada nije bila podvrgnuta komercijalnoj eksploataciji. Sa površinom od oko 1.400 hektara, ova prašuma je dom brojnim vrstama biljaka i životinja koje su rijetke ili nestale u drugim dijelovima Evrope. Najstarija stabla u prašumi su stara preko 300 godina, a neka su visoka i do 60 metara.</p>

      <h2>Gdje se nalazi?</h2>
      
      <p>Prašuma Perućica se nalazi u Nacionalnom parku Sutjeska, u jugoistočnom dijelu Bosne i Hercegovine, blizu granice sa Crnom Gorom. Prašuma je dio šireg zaštićenog područja koje uključuje planinu Maglić i Trnovačko jezero.</p>

      <h2>Zašto je važna?</h2>
      
      <h3>Biodiverzitet</h3>
      <p>Prašuma Perućica je dom brojnim rijetkim i ugroženim vrstama. U prašumi možete pronaći:</p>
      <ul>
        <li>Preko 170 vrsta drveća i grmlja</li>
        <li>Brojne vrste gljiva</li>
        <li>Rijetke vrste ptica</li>
        <li>Divlje životinje (medvjedi, vukovi, divlje koze)</li>
        <li>Brojne vrste insekata i drugih životinja</li>
      </ul>

      <h3>Klimatska važnost</h3>
      <p>Prašume su ključne za kontrolu klimatskih promjena jer apsorbuju velike količine ugljen-dioksida iz atmosfere. Perućica, kao jedna od najstarijih prašuma u Evropi, ima posebnu važnost u ovom kontekstu.</p>

      <h3>Naučna važnost</h3>
      <p>Prašuma Perućica je važna za naučna istraživanja jer predstavlja prirodni ekosistem koji nije utjecao čovjek. Naučnici iz cijelog svijeta dolaze ovdje da proučavaju prirodne procese i biodiverzitet.</p>

      <h2>Kako doći do prašume Perućica?</h2>
      
      <p>Prašuma Perućica je pristupačna iz nekoliko smjerova:</p>
      
      <h3>Iz Tjentišta</h3>
      <p>Najpopularnija ruta vodi iz Tjentišta, kroz prašumu do vodopada Skakavac. Ova ruta je pristupačna i za početnike, sa dobro označenim stazama.</p>

      <h3>Iz Foče</h3>
      <p>Alternativna ruta vodi iz Foče, kroz NP Sutjeska. Ova ruta je nešto zahtjevnija ali pruža prekrasne vidike.</p>

      <p>Za najbolje iskustvo, preporučujemo organizovanu turu sa vodičem. Naša <a href="/ture/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">jednodnevna tura kroz prašumu Perućica sa posjetom vodopadu Skakavac</a> pruža vam mogućnost da istražite ovu netaknutu prirodu sa iskusnim vodičem.</p>

      <h2>Šta vidjeti u prašumi?</h2>
      
      <h3>Stara stabla</h3>
      <p>Najimpresivniji dio prašume su stara stabla, neka stara preko 300 godina. Ova stabla su visoka i do 60 metara, sa debelim deblima koja svjedoče o njihovoj starosti.</p>

      <h3>Vodopad Skakavac</h3>
      <p>Vodopad Skakavac je jedan od najljepših vodopada u BiH, sa visinom od 75 metara. Vodopad se nalazi unutar prašume i predstavlja spektakularan prirodni fenomen.</p>

      <h3>Flora i fauna</h3>
      <p>Prašuma je dom brojnim vrstama biljaka i životinja. U ljetnim mjesecima možete vidjeti različite vrste cvijeća, dok su okolne šume dom divljim životinjama.</p>

      <h2>Najbolje vrijeme za posjetu</h2>
      
      <p>Prašuma Perućica je pristupačna tokom cijele godine, ali najbolje vrijeme za posjetu je od maja do oktobra. U ovom periodu:</p>
      <ul>
        <li>Vremenske prilike su najstabilnije</li>
        <li>Staze su suhe i pristupačne</li>
        <li>Flora je u punom cvijetu</li>
        <li>Temperature su prijatne za šetnju</li>
      </ul>

      <h3>Zimski period</h3>
      <p>Zimi prašuma je prekrasna sa snijegom, ali zahtijeva dodatnu opremu i pripremu. Staze mogu biti klizave, pa je važno imati cipele sa dobrim prijanjanjem.</p>

      <h2>Šta ponijeti?</h2>
      
      <p>Za posjetu prašumi Perućica preporučujemo:</p>
      <ul>
        <li>Planinske cipele sa dobrim prijanjanjem</li>
        <li>Vodootporna jakna (kiša je česta)</li>
        <li>Ruksak sa vodom i hranom</li>
        <li>Krema za sunce i naočale</li>
        <li>Fotoaparat (prašuma je prekrasna za fotografisanje)</li>
        <li>Binokular (za posmatranje ptica i životinja)</li>
      </ul>

      <h2>Pravila i zaštita</h2>
      
      <p>Prašuma Perućica je zaštićeno područje, što znači da postoje posebna pravila:</p>
      
      <h3>Šta je dozvoljeno</h3>
      <ul>
        <li>Šetnja po označenim stazama</li>
        <li>Fotografisanje</li>
        <li>Posmatranje prirode</li>
        <li>Organizovane ture sa vodičem</li>
      </ul>

      <h3>Šta nije dozvoljeno</h3>
      <ul>
        <li>Skretanje sa označenih staza</li>
        <li>Branje biljaka ili uzimanje bilo čega iz prirode</li>
        <li>Paljenje vatre</li>
        <li>Ostavljanje smeća</li>
        <li>Bučno ponašanje koje može uznemiriti životinje</li>
        <li>Kampovanje van određenih mjesta</li>
      </ul>

      <h2>Edukativni sadržaj</h2>
      
      <p>Prašuma Perućica je odlično mjesto za učenje o prirodi i ekosistemima. Naše organizovane ture uključuju edukativni sadržaj gdje možete naučiti:</p>
      <ul>
        <li>O različitim vrstama drveća i biljaka</li>
        <li>O životinjama koje žive u prašumi</li>
        <li>O važnosti prašuma za ekosistem</li>
        <li>O zaštiti prirode</li>
      </ul>

      <h2>Fotografisanje</h2>
      
      <p>Prašuma Perućica je raj za fotografe. Najbolje fotografije možete napraviti:</p>
      <ul>
        <li>Ujutro, kada je svjetlost najbolja</li>
        <li>Uveče, za spektakularne zalaske sunca</li>
        <li>Poslije kiše, kada je priroda najživlja</li>
        <li>Zimi, kada snijeg čini sve magičnim</li>
      </ul>

      <h2>Organizovane ture</h2>
      
      <p>Ako želite iskusiti prašumu Perućica sa iskusnim vodičem i edukativnim sadržajem, naše ture su idealan izbor. Naša <a href="/ture/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">jednodnevna tura kroz prašumu Perućica</a> uključuje:</p>
      <ul>
        <li>Iskusnog vodiča sa licencom</li>
        <li>Edukativni sadržaj o prašumi</li>
        <li>Posjetu vodopadu Skakavac</li>
        <li>Transfer iz Foče</li>
        <li>Ručak u prirodi</li>
      </ul>

      <h2>Zaključak</h2>
      
      <p>Prašuma Perućica je jedno od najvažnijih prirodnih spomenika u Bosni i Hercegovini i mjesto koje svaki ljubitelj prirode mora posjetiti. Njena netaknuta priroda, bogat biodiverzitet i spektakularni vidici čine je idealnom destinacijom za avanturiste svih nivoa.</p>

      <p>Ako želite iskusiti prašumu Perućica sa profesionalnim vodičem i edukativnim sadržajem, pogledajte naše <a href="/ture/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">ture kroz prašumu Perućica</a> ili kontaktirajte nas za više informacija.</p>
    `,
    author: "Marko Petrović",
    date: "2026-01-28",
    image: "/images/tours/blog/skakavac.webp",
    imageAlt: "Prašuma Perućica i vodopad Skakavac – šta treba znati prije obilaska",
    tags: ["Prašuma Perućica", "NP Sutjeska", "priroda", "biodiverzitet"],
  },
  {
    id: "6",
    title: "Vodopad Skakavac u Perućici: šta treba znati prije ture",
    slug: "vodopad-skakavac-perucica-vodic",
    excerpt:
      "Vodopad Skakavac, visok 75 metara, nalazi se u prašumi Perućici. Evo svega što trebate znati prije posjete – rute, oprema, najbolje vrijeme.",
    content: `
      <h1>Vodopad Skakavac u Perućici: šta treba znati prije ture</h1>
      
      <p>Vodopad Skakavac je jedan od najimpresivnijih vodopada u Bosni i Hercegovini. Sa visinom od 75 metara, smješten je u prašumi Perućici, unutar Nacionalnog parka Sutjeska. Ovaj vodič će vam pomoći da se pripremite za posjetu i uživate u ovom spektakularnom prirodnom fenomenu.</p>

      <h2>Gdje se nalazi Skakavac?</h2>
      
      <p>Vodopad Skakavac se nalazi unutar prašume Perućica, najstarije prašume u Evropi. Pristup je moguć samo uz licenciranog vodiča, jer je prašuma striktno zaštićena. Ruta od ulaza do vodopada traje oko 2–3 sata lagane šetnje kroz netaknutu prirodu.</p>

      <h2>Šta vidjeti na putu?</h2>
      
      <p>Put do Skakavca vodi kroz stara stabla, bujnu vegetaciju i potoke. Prašuma sama po sebi je atrakcija – možete vidjeti stabla stara preko 300 godina i brojne vrste biljaka i životinja. Vodopad se otkriva naglo, nakon posljednjeg uspona – impresivan i bučan.</p>

      <h2>Najbolje vrijeme za posjetu</h2>
      
      <p>Pro proljeće i ljeto (maj–septembar) su idealni – voda je obilna, a priroda u punom cvijetu. U jesen je takođe lijepo zbog boja lišća. Zimi može biti opasno zbog klizavih staza.</p>

      <h2>Šta ponijeti?</h2>
      
      <ul>
        <li>Planinske cipele sa dobrim prijanjanjem (staze mogu biti vlažne)</li>
        <li>Vodootporna jakna (prašuma je vlažna, kiša moguća)</li>
        <li>Ruksak sa vodom i hranom</li>
        <li>Fotoaparat – Skakavac je spektakularan za fotografisanje</li>
      </ul>

      <h2>Organizovane ture</h2>
      
      <p>Pristup Perućici i Skakavcu je moguć samo uz vodiča. Naša <a href="/ture/prasuma-perucica-vodopad-skakavac" class="text-emerald-400 hover:text-emerald-300 underline">jednodnevna tura Prašuma Perućica i vodopad Skakavac</a> uključuje transfer, vodiča, ručak i edukativni sadržaj. Pogledajte datume i <a href="/#kontakt" class="text-emerald-400 hover:text-emerald-300 underline">kontaktirajte nas</a> za rezervaciju.</p>
    `,
    author: "Udahni Avanturu",
    date: "2026-02-12",
    image: "/images/tours/blog/djevojka-na-vodopadu-skakavac.webp",
    imageAlt: "Vodopad Skakavac u Perućici – šta treba znati",
    tags: ["Vodopad Skakavac", "Prašuma Perućica", "NP Sutjeska"],
  },
  {
    id: "7",
    title: "Prvomajska avantura: kako nam je bilo prošle godine",
    slug: "prvomajska-avantura-utisci",
    excerpt:
      "Prošlog prvog maja – skoro 70 učesnika, edukativni program u petak, odlična prognoza, Trnovačko i Zelengora. Kratak recap naše Prvomajske avanture.",
    content: `
      <h1>Prvomajska avantura: kako nam je bilo prošle godine</h1>
      
      <p>Prošlog prvog maja organizovali smo Prvomajsku avanturu na Tjentištu – aranžman u bungalovima sa turama po izboru (Trnovačko jezero ili Prašuma Perućica u subotu, Zelengora u nedjelju). Evo kratkog recap-a.</p>

      <h2>Brojke i atmosfera</h2>
      
      <p>Skoro 70 učesnika – grupa koju smo dugo željeli vidjeti. Petak je bio posvećen dolasku, smještaju i edukativnom programu o NP Sutjesci i prašumi Perućici. Vecera, druženje i priprema za subotu.</p>

      <h2>Subota – izbor avanture</h2>
      
      <p>Subota je bila dan za veliki izbor: ili Trnovačko jezero (srednje zahtjevno) ili Prašuma Perućica (zahtjevnije). Vrijeme je bilo odlično – sunce, vedro nebo. Grupe su se vratile zadovoljne, a uveče je bila žurka i druženje uz muziku.</p>

      <h2>Nedjelja – Zelengora</h2>
      
      <p>Nedjelja je bila rezervisana za laganu turu po Zelengori – Donje i Gornje bare, vidikovac Borić. Idealno za opuštanje prije povratka kući. Prognoza je i dalje bila odlična.</p>

      <h2>Šta nas čeka ove godine?</h2>
      
      <p>Ponovo organizujemo Prvomajsku avanturu – bungalovi, hrana, ulaznice, ture po izboru. Ako želite biti dio sljedeće ekipe, pogledajte naše <a href="/ture" class="text-emerald-400 hover:text-emerald-300 underline">ture</a> i <a href="/#kontakt" class="text-emerald-400 hover:text-emerald-300 underline">kontaktirajte nas</a> za rezervaciju.</p>
    `,
    author: "Udahni Avanturu",
    date: "2026-02-14",
    image: "/images/tours/blog/prvi-maj-blog.webp",
    imageAlt: "Prvomajska avantura – utisci",
    tags: ["Prvomajska", "Tjentište", "recap", "avantura"],
  },
  {
    id: "8",
    title: "Zašto je Sutjeska najbolja destinacija u Bosni i Hercegovini",
    slug: "zasto-je-sutjeska-najbolja-destinacija",
    excerpt:
      "Svako ko dođe u Sutjesku kaže isto: trebam ovdje sedam dana. Zašto je Nacionalni park Sutjeska jedinstven i zašto stranci to znaju bolje od nas.",
    metadataTitle: "Zašto je Sutjeska najbolja destinacija u BiH | Udahni Avanturu",
    metadataDescription:
      "Prašuma Perućica, Maglić, Trnovačko jezero, Via Dinarica i najveći bazen na Balkanu — otkrijte zašto je Sutjeska jedinstven nacionalni park.",
    content: `
    <h2>Najstariji nacionalni park u BiH — i još uvijek neotkriven</h2>
    <p>Sutjeska je proglašena nacionalnim parkom 1962. godine. Više od 60 godina zaštićena priroda, netaknuta šuma, rijeke koje se mogu piti direktno iz korita. I još uvijek — malo naših ljudi zna šta se tamo krije.</p>
    <p>Stranci to znaju bolje. Avanturisti iz cijele Evrope, planinari koji hodaju Via Dinaricu kroz sedam država, parovi koji traže nešto što nije Dubrovnik ni Sarajevo. Dolaze u Sutjesku i ostaju bez teksta. Odmah prepoznaju vrijednost — bez priče, bez uvoda. Samo stanu, pogledaju i ućute.</p>
    <p>Naši ljudi? Mnogi iz Foče nikad nisu bili na Magliću. A pred nosom im je.</p>

    <h2>Maglić gleda u Volujak</h2>
    <p>Maglić je najviši vrh Bosne i Hercegovine — 2.386 metara. Ali nije samo broj. Sa Maglića se vidi Volujak — drugi najviši vrh u BiH. Dvije planine koje se gledaju jedna u drugu kao da razgovaraju. Između njih — prostranstva Sutjeske, kanjon, prašuma, rijeka.</p>
    <p>Kada izvedeš grupu na taj pogled — nema pitanja, nema priče. Svi stoje i gledaju. To je Sutjeska.</p>

    <h2>Prašuma Perućica — jedina u Evropi</h2>
    <p>Perućica nije šuma. Perućica je živi muzej koji nitko nije gradio. Jedna od dvije preostale prašume u Evropi, gdje stabla rastu i padaju po vlastitim zakonima već hiljadama godina. Neka stabla imaju više od 300 godina. Neka su pala prije vijekova i još uvijek leže, obrasla mahovinom, vraćajući se polako u zemlju.</p>
    <p>I usred te tišine — Skakavac. Vodopad visok 75 metara koji čuješ prije nego ga vidiš.</p>
    <p>Na jednom izvoru u prašumi žive tri poskoka već više od deset godina. Uvijek su tu. Zovemo ih čuvari prašume Perućice.</p>

    <h2>Najveći otvoreni bazen na Balkanu</h2>
    <p>Na Tjentištu, u srcu nacionalnog parka, nalazi se najveći otvoreni bazen na Balkanu. Puni se direktno vodom iz rijeke Sutjeske — hladnom, providnom, planinom mirisnom. Djeca se kupaju, odrasli odmaraju, a okolo — NP Sutjeska.</p>
    <p>Nigdje drugdje na Balkanu ne možeš plivati u bazenu koji se puni vodom iz planinskog kanjona.</p>

    <h2>Historija koja se osjeća</h2>
    <p>Tjentište nije samo priroda. Dolina heroja i Spomenik Bitke na Sutjesci nose u sebi 1943. godinu — jednu od najdramatičnijih epizoda Drugog svjetskog rata na ovim prostorima. Stranci dolaze znajući historiju, pitaju, istražuju, fotografišu. Poštuju ono što vide.</p>
    <p>Sutjeska nije samo planina. Ona je priča o prirodi i ljudima, o otporu i ljepoti, o tome šta znači živjeti u ovom prostoru.</p>

    <h2>Via Dinarica — Sutjeska na mapi svijeta</h2>
    <p>Kroz Sutjesku prolazi Via Dinarica — planinska ruta koja spaja Alpe sa Dinaridima kroz sedam država. Planinari iz Njemačke, Austrije, Holandije, Skandinavije — hodaju kroz Sutjesku i pišu o njoj. Ona je već na mapi ozbiljnih avanturista.</p>
    <p>Mi ih srećemo na stazama. I uvijek kažu isto: ovo je jedan od najljepših dijelova cijele rute.</p>

    <h2>Sedam dana nije previše</h2>
    <p>Svaki dio Sutjeske ima svoju draž. Maglić i Trnovačko jezero — jedno iskustvo. Perućica i Skakavac — potpuno drugo. Zelengora sa devet jezera — treće. Kanjon Sutjeske — četvrto. Kanjoning Hrčavke — peto.</p>
    <p>Ne možeš to sve doživjeti za vikend. I to je možda najveći kompliment koji jedna destinacija može dobiti — da ti treba sedam dana, a imaš samo dva.</p>
    <p>Sutjeska te neće požuriti. Ona čeka. I uvijek ima više da pokaže.</p>
    <p>Pogledaj naše <a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">ture u NP Sutjeska</a> i uvjeri se sam.</p>
  `,
    author: "Petar & Nevena",
    date: "2026-03-23",
    image: "/images/tours/blog/blog-sutjeska.png",
    imageAlt: "Nacionalni park Sutjeska – priroda i pogledi",
    coverImage: "/images/tours/blog/blog-sutjeska.png",
    coverAlt: "Zašto je Sutjeska najbolja destinacija u BiH",
    tags: ["NP Sutjeska", "Maglić", "Perućica", "Via Dinarica", "BiH"],
  },
  {
    id: "9",
    title: "Zašto višednevna tura kroz BiH i Crnu Goru mijenja perspektivu",
    slug: "visednevne-avanture-bih-crna-gora",
    excerpt:
      "Postoje destinacije koje posjećuješ i destinacije koje te promijene. BiH i Crna Gora su druga vrsta. Ovdje ću ti ispričati zašto višednevna tura kroz ove dvije zemlje nije samo odmor — nego iskustvo koje nosiš sa sobom.",
    metadataTitle: "Višednevne avanture BiH i Crna Gora — perspektiva koja ostaje | Udahni Avanturu",
    metadataDescription:
      "Maglić, Trnovačko jezero, katuni, Zelengora, Hrčavka, Tara, Durmitor i Pivsko jezero — zašto višednevna tura kroz Bosnu i Hercegovinu i Crnu Goru mijenja način na koji gledaš putovanje.",
    content: `
    <p>Svake sezone me ljudi pitaju isto: &quot;Petar, zašto baš ovdje? Zašto ne Alpe, zašto ne Norveška, zašto ne neko &apos;poznatije&apos; mjesto?&quot;</p>
    <p>I svaki put im kažem isto: dođite jednom. Samo jednom. Pa mi recite.</p>
    <p>BiH i Crna Gora su dvije zemlje koje turistički svijet još uvijek nije sasvim otkrio. I upravo to ih čini posebnim. Ovdje nema gužvi na stazama, nema restorana na vrhovima planina, nema Instagram filtera koji bi popravili ono što priroda nije uspjela sama. Ovdje je sve sirovo, autentično i snažno — baš onako kako priroda treba da bude.</p>

    <h2>Maglić i Trnovačko jezero — gdje sve počinje</h2>
    <p>Svaka višednevna tura koju organizujemo počinje na Magliću. Najviši vrh Bosne i Hercegovine — 2.386 metara — nije tehnički zahtjevan kao neki alpski vrhovi, ali ima nešto što ti vrhovi nemaju: tišinu. Na Magliću nema gondola, nema kafića, nema organizovanih grupa od 50 ljudi. Samo ti, planina i pogled koji seže do Jadrana.</p>
    <p>A onda se spustiš na Trnovačko jezero. Jedno od najljepših planinskih jezera na Balkanu, u obliku srca, okruženo vrhovima. Šator na obali, vatra uveče, bez mreže i bez telefona. Mnogi mi kažu da je to prva noć u godinama da su stvarno spavali.</p>

    <h2>Katuni — autentični život koji nestaje</h2>
    <p>Drugi dan ture vodim ljude na katune. Kamene kućice, stoka, domaćini koji žive bez struje i mreže — ne zbog filozofije, nego zato što je to tu uvijek tako bilo. Doručak koji nam spreme: uštipci, kajmak, toplo mlijeko direktno od krave, pršut, sir.</p>
    <p>Jednom mi je jedan gost iz Berlina rekao: &quot;Ovo je prva hrana u godinama za koju znam odakle dolazi.&quot;</p>
    <p>To je ono što ne možeš kupiti ni na jednom drugom putovanju. To je ono zašto dolaze ljudi iz Njemačke, Holandije, Skandinavije — ne da vide planinu, nego da osjete da takav život još postoji.</p>

    <h2>Zelengora — planina koja liječi</h2>
    <p>Zelengora je drugačija od Maglića. Niža, zelenija, prostranija. Jezera, dinarske livade, vidikovci sa kojih se vidi pola Balkana. Ovo je dan za hodanje bez pritiska, za razgovor, za disanje.</p>
    <p>Nakon dva zahtjevna dana — Maglić i katuni — Zelengora dolazi kao poklon. Lagana tura, ručak u prirodi, povratak na Tjentište. Mnogi mi kažu da je ovo njihov omiljeni dan cijele ture.</p>

    <h2>Kanjoning Hrčavka — voda i stijene</h2>
    <p>Hrčavka nije ekstremna. Ali jeste intenzivna. Ulaz u kanjon, voda, stijene, prirodni bazeni, skokovi za one koji žele. Nekoliko sati potpunog fokusa na ono što je pred vama — ne možeš razmišljati o poslu kad se spaštaš niz vodopad.</p>
    <p>Ovo je dan koji grupu spoji. Uvijek. Bez izuzetka.</p>

    <h2>Rafting Tarom — deset godina na ovoj rijeci</h2>
    <p>Tara je posebna priča. Licencirani sam skipper sa više od deset godina iskustva na ovoj rijeci i mogu vam reći — svaki spust je drugačiji. Kanjon koji je drugi po dubini u svijetu, voda koja mijenja boju sa svjetlom, pauze na mjestima gdje nije stao ni jedan autobus turistima.</p>
    <p>Rafting radimo na naš način: bez žurbe, bez vremenskog pritiska, sa ručkom direktno na rijeci. Cijeli dan. To nije rafting tura za mase — to je dan na jednoj od najljepših rijeka u Evropi.</p>

    <h2>Durmitor i Pivsko jezero — Crna Gora kao finale</h2>
    <p>Durmitor je UNESCO svjetska baština i to s razlogom. Foto safari kroz masiv, Žabljak, Crno jezero ispod Medjeda — to je jedan od onih dana kad shvatiš koliko je ova regija zaista bogata.</p>
    <p>A onda Pivsko jezero. 45 kilometara dužine, okruženo kanjonima. Kajak ujutru, tišina između stijena koje se ogledaju u vodi. To je kraj ture — ali ne kraj iskustva.</p>

    <h2>Zašto BiH i Crna Gora a ne Alpe ili Skandinavija?</h2>
    <p>Alpe su lijepe. Skandinavija je spektakularna. Ali ni jedno ni drugo ti ne može dati ono što daju BiH i Crna Gora: autentičnost.</p>
    <p>Ovdje još uvijek možeš sjediti sa čovjekom koji je cijeli život proveo na planini i čuti priču koja se prenosi generacijama. Ovdje još uvijek možeš hodati satima bez da vidiš drugog čovjeka. Ovdje planina još nije postala produkt.</p>
    <p>I upravo zato, dok još traje — vrijedi doći.</p>
    <p>Ako te zanima neka od naših višednevnih tura, pogledaj <a href="/ture/srce-sutjeske-5-dana" class="text-emerald-400 hover:text-emerald-300 underline">Srce Sutjeske – 5 dana</a> ili <a href="/ture/divlja-bosna-i-crna-gora-7-dana" class="text-emerald-400 hover:text-emerald-300 underline">Divlja Bosna i Crna Gora – 7 dana</a>. Za sve informacije i rezervacije, slobodno nam se javi.</p>
  `,
    author: "Petar",
    date: "2026-03-29",
    image: "/images/tours/gallery/zelengora.webp",
    imageAlt: "Višednevne avanture u Bosni i Hercegovini i Crnoj Gori – Zelengora, Maglić, Durmitor",
    coverImage: "/images/tours/gallery/zelengora.webp",
    coverAlt: "Zašto višednevna tura kroz BiH i Crnu Goru mijenja perspektivu",
    tags: ["višednevne ture", "BiH", "Crna Gora", "Maglić", "Tara", "Durmitor"],
  },
  {
    id: "10",
    title: "Izlet iz Sarajeva do Maglića i Sutjeske — 2 sata i drugi svijet",
    slug: "izlet-iz-sarajeva-sutjeska-maglic",
    excerpt:
      "Iz Sarajeva do najvišeg vrha BiH i najstarije prašume Evrope — svega 2 sata vožnje. Većina Sarajlija ne zna da im je jedna od najljepših avantura na Balkanu doslovno iza leđa.",
    metadataTitle:
      "Izlet iz Sarajeva do Maglića i Sutjeske — 2 sata vožnje | Udahni Avanturu",
    metadataDescription:
      "Put Sarajevo–NP Sutjeska, Maglić, Trnovačko jezero, Perućica, vikend tura i kako doći autom, autobusom ili organizovanim transferom.",
    content: `
    <p>Jedna od najčešćih rečenica koju čujemo od gostiju iz Sarajeva je: &quot;Nisam znao da je ovo tako blizu.&quot;</p>

    <p>Dva sata. Toliko dijeli Sarajevo od Nacionalnog parka Sutjeska — od najvišeg vrha Bosne i Hercegovine, od najstarije prašume u Evropi, od planinskog jezera u obliku srca na 1.517 metara. Dva sata i — drugi svijet.</p>

    <h2>Put od Sarajeva do Tjentišta</h2>
    <p>Kreće se iz Sarajeva magistralnim putem prema Foči — kroz Kijevo, Trnovo, Dobro Polje, Miljevinu. Već na ovom dijelu puta počinje show: kanjon Bistrice. Stijene s obje strane, rijeka dolje, asfalt kroz sredinu. Nije to autoput — ali to mu je i prednost.</p>
    <p>Od Foče do Tjentišta je još 30 kilometara. Krivine, planine okolo, rijeka Sutjeska uz put. Kad stigneš na Tjentište i vidiš Dolinu heroja pred sobom — shvatiš zašto su ti rekli da dođeš.</p>
    <p><strong>Organizovani transfer:</strong> Ako ne voziš, organizujemo transfer iz Sarajeva direktno do Tjentišta. Sjedneš u kombi i budiš se u planini.</p>

    <h2>Šta radiš kad stigneš</h2>

    <h3>Jednodnevni izlet — Maglić i Trnovačko jezero (95€)</h3>
    <p>Ovo je naša najpoznatija tura u regiji i nije slučajno.</p>
    <p>Terenskim vozilom idemo do Prijevora na 1.520 metara. Odatle uspon na Maglić — 2.386 metara, najviši vrh BiH. Sa vrha se vide Durmitor, Zelengora, Jahorina, Volujak i — po lijepom vremenu — Jadransko more u daljini.</p>
    <p>Zatim silazimo direktno na Trnovačko jezero. Jezero u obliku srca, tirkizna voda, tišina. Kod Miloša i Ilije možeš popiti kafu, pivo ili rakiju — u kafani na skoro 1.520 metara, pivo hladi se u buretu od 100 litara na izvorskoj vodi.</p>
    <p>Tura traje cijeli dan. Fizički je zahtjevna ali nagrađujuća.</p>

    <h3>Jednodnevni izlet — Prašuma Perućica i vodopad Skakavac (90€)</h3>
    <p>Ako planinarenje nije tvoja stvar, ovo je alternativa koja ne prašta na impresivnosti.</p>
    <p>Perućica je jedna od dvije preostale prašume u Evropi. Stabla stara 300 godina, tišina kakvu u gradu nikad nisi čuo, i na kraju — Skakavac. Vodopad koji pada 75 metara slobodnog pada. Zvuk, prskanje, moć.</p>
    <p>Izlet traje oko 5-6 sati. Idealno za one koji žele prirodu bez zahtjevnog uspona.</p>

    <h3>Vikend — Maglić, Trnovačko jezero i katuni (170€)</h3>
    <p>Ovo je ono zbog čega se vraćaju.</p>
    <p>Petak uveče dolazak, subota uspon na Maglić i spust na Trnovačko jezero gdje postavljamo kamp. Spavaš uz jezero bez mreže, bez signala, bez žurbe. Nedjelja ujutro — šetnja do katuna. Kamene kućice bez struje, ovce, konji, domaćin koji pravi uštipce i toplo mlijeko. Život kakav se živio prije 400 godina, na 1.500 metara nadmorske visine.</p>
    <p>Nije to izlet. To je iskustvo koje nosiš sa sobom.</p>

    <h2>Priča koja govori sama za sebe</h2>
    <p>Prošle sezone stigao je Tim iz Holandije sa djevojkom — rezervisali jednodnevni izlet na Maglić i Trnovačko jezero. Standardna stvar.</p>
    <p>Na kraju dana — nisu otišli.</p>
    <p>Ostali su još četiri dana. Prvog dana Maglić i Trnovačko. Drugog Perućica i Skakavac. Trećeg Zelengora — jezera, vidikovci, tišina. Četvrtog — samo sjedili uz rijeku Sutjesku.</p>
    <p>Ove godine dolaze ponovo. Na rasporedu je Volujak.</p>
    <p>Nije ih zadržala infrastruktura ni hoteli. Zadržala ih je planina.</p>

    <h2>Usputan: Pješčane piramide u Foči</h2>
    <p>Ako kreneš autom iz Sarajeva, vrijedi napraviti kratku pauzu u Foči. Na izlazu iz grada, uz cestu, stoje prirodne pješčane piramide — geološka zanimljivost kakvu rijetko gdje možeš vidjeti. Desetak minuta zaustavljanja, fotografija i nastavljaš prema Tjentištu. Malo poznato mjesto, vrijedi vidjeti.</p>

    <h2>Kako doći iz Sarajeva</h2>
    <p><strong>Autom:</strong> Sarajevo → Kijevo → Trnovo → Dobro Polje → Miljevina → Foča → Tjentište. Oko 2 sata, 130 km.</p>
    <p><strong>Autobusom:</strong> Iz Istočnog Sarajeva svakodnevne linije prema Foči — polasci u 7:45, 8:00, 9:00, 11:00, 13:00, 14:00, 16:00, 18:00, 19:00, 20:00h. Sa Foče organizujemo transfer do Tjentišta.</p>
    <p><strong>Organizovani transfer:</strong> Direktan kombi iz Sarajeva do Tjentišta — organizujemo po dogovoru za grupe. Pitaj nas na WhatsApp +387 65 797 200.</p>
    <p><strong>Aerodrom Sarajevo</strong> je samo 85 km od Tjentišta — najbliži aerodrom za dolazak u NP Sutjeska.</p>

    <h2>Krenite</h2>
    <p>Sutjeska je za Sarajlije ono što Alpe nisu za Bečlije — blizu, ali neistraženo. Dvije trećine Bosanaca nikad nije bilo na Magliću, a pred nosom im je.</p>
    <p>Dođite jednom. Posle toga odlučite sami.</p>
  `,
    author: "Petar & Nevena",
    date: "2026-04-22",
    image: "/images/tours/blog/uspon-na-maglic-savjeti.webp",
    imageAlt: "Pogled sa Maglića na Trnovačko jezero — NP Sutjeska",
    coverImage: "/images/tours/blog/uspon-na-maglic-savjeti.webp",
    coverAlt: "Pogled sa Maglića na Trnovačko jezero — NP Sutjeska",
    tags: ["Sarajevo", "Maglić", "NP Sutjeska", "Trnovačko jezero", "izlet"],
  },
  {
    id: "11",
    slug: "zelengora-vodic-planina-bih",
    title: "Zelengora — kompletan vodič kroz najljepšu planinu bivše Jugoslavije",
    metadataTitle: "Zelengora — vodič, jezera, Bregoč i ture | Udahni Avanturu",
    metadataDescription:
      "Sve što trebaš znati o Zelengori — jezera, Bregoč uspon, Borić vidikovac, katuni, Titova vila i kako doći. Organizovane ture iz Foče od 70€.",
    excerpt:
      "Zelengora nije planina u uobičajenom smislu. Nema špicastih vrhova ni ledenih litica. Ima nešto drugačije — prostrane pašnjake zelene kao baršun, sedam planinskih jezera i tišinu koja te uvlači polako, bez nasilja.",
    content: `
    <h2>Zašto se zove Zelengora</h2>
<p>Ime nije metafora. Zelengora doslovno znači — Zelen Gora. Kad je Jovo Popović 1935. pisao o njoj u svojoj knjizi "Kroz planine Bosne i Hercegovine", opisao je planinu kakvu je rijetko gdje vidio: "Nema nijedne planine u našim krajevima, koju je priroda tako lijepo, pitomo-romantički nakitila." Devedeset godina kasnije — ništa se nije promijenilo.</p>

<p>Za razliku od Maglića koji te udari snagom i visinom, Zelengora te osvoji polako. Nema dramatičnih litica ni zahtjevnih uspona. Ima prostrane pašnjake, sedam jezera, stotine izvora bistre vode i — u avgustu — borovnice koje rastu uz stazu. Gosti koji ih prvi put vide ne mogu da vjeruju da im je dozvoljena da ih beru direktno sa planine.</p>

<h2>Jezera Zelengore — koja su i gdje se nalaze</h2>
<p>Zelengora ima sedam glacijalnih jezera. Popović ih je 1935. opisao precizno: Štirinsko je najveće, Kotlaničko najdublje, a Crno jezero najljepše po prirodnom položaju — mada bi se o tome dalo raspravljati.</p>

<p>Sa jedne strane planine, dostupne makadamskim putem (loš put, preporučujemo terensko vozilo), nalaze se: <strong>Orlovačko jezero, Kotlaničko jezero, Štirinsko jezero i Jugovo jezero</strong>. Do njih se dolazi iz pravca Kalinovika ili preko Tjentišta pa Čemerna. Orlovačko je "proglašeno" najljepšim jezerom Zelengore — uglavnom zato što je najdostupnije i najviše fotografisano. Mi se s tim ne bismo složili.</p>

<p>Sa druge strane planine, iz pravca Tjentišta, nalaze se <strong>Donje i Gornje Bare</strong> — dva jezera do kojih se dolazi sat vremena po lošem putu iz Tjentišta, isključivo terenskim vozilima. Ili pješice — što je prelijepa staza kroz šumu gdje smo vidjeli divokoze kako trče pored nas.</p>

<h2>Bregoč — uspon koji nije strašan</h2>
<p>Bregoč je najviši vrh Zelengore na 2.015 metara. Zvuči zastrašujuće — nije. Uspon traje nekih sat i četrdeset minuta laganog hoda i tehnički nije zahtjevan. Sa vrha se vidi sve: Maglić, Volujak, Jahorina, Treskavica, u daljini se nazire pravac prema Jadranskom moru.</p>

<p>Direktno preko puta Bregoča nalaze se <strong>Kozje strane</strong> — greben koji izgleda kao obična planinska stazica, ali sa obje strane su provalije. Naziv nije slučajan — samo koze (i iskusni planinari) se osjećaju sasvim sigurno. Ko ima smisla za adrenalin bez tehničkih poteškoća — Kozje strane su obavezan usputni posjet.</p>

<h2>Vidikovac Borić — naš favorit</h2>
<p>Trideset minuta hoda od Donjih bara nalazi se vidikovac Borić. Za nas — najljepši vidikovac na cijeloj Zelengori. Sa Borića se vidi kanjon rijeke Sutjeske, Maglić u pozadini, Volujak i Zelengora pred tobom. Fotografije koje odavde izađu ne trebaju nikakvu obradu.</p>

<p>Iznad Donjih bara odmah je Uglješin vrh — odakle se pruža fantastičan panoramski pogled na sve strane.</p>

<h2>Titova vila na Donjim barama</h2>
<p>Josip Broz Tito je znao birati mjesta. Na Donjim barama je imao vilu gdje je odmarao sa Jovankom. Tito je u Nacionalnom parku Sutjeska imao dvije vile — jedino mjesto u cijeloj Jugoslaviji gdje je to sebi dozvolio unutar granica nacionalnog parka. Donje bare su mu bile dovoljno lijepe da napravi izuzetak. Ostaci vile i danas stoje.</p>

<h2>Katuni — život koji se nije promijenio</h2>
<p>Po cijeloj Zelengori rasuti su katuni — ljetni pastirski stanovi gdje ljudi izlaze sa stokom u ljeto i ostaju do kasne jeseni. Kamene kućice, ovce, konji, dim iz dimnjaka. Jovo Popović ih je popisao 1935. — mnogi od tih katuna postoje i danas, na istim mjestima.</p>

<p>Kod domaćina na katunu možeš kupiti svježi kajmak, mlijeko, ponekad sir. Nije to prodavnica — to je kuća u kojoj neko živi. Svratiti, pozdraviti se, kupiti kajmak i popiti kafu — to je dio iskustva koje ne možeš naći u turističkim vodičima.</p>

<h2>Palićeve omorike — endemska vrsta</h2>
<p>Na stazi od Tjentišta prema Donjim barama prolazi se kroz šumu Palićevih omorika — endemske vrste drveta koja raste samo na ovim prostorima. Popović ih je zabilježio 1935. na Husad planini, ali ih ima i duž staze prema Donjim barama. Malo koji posjetilac zna što gleda — mi uvijek kažemo grupi šta je to i zašto je posebno.</p>

<h2>Borovnice u avgustu</h2>
<p>Ovo je detalj koji ne stoji ni u jednom turističkom opisu Zelengore. U avgustu, uz skoro sve staze na Zelengori, rastu divlje borovnice. Branje je slobodno — samo protegneš ruku i bereš. Gosti koji prvi put dođu ne mogu da vjeruju. Borovnice direktno sa planine, bez pesticida, bez plastičnih kutija — samo planina i ti.</p>

<h2>Čemerno — gdje se susreću dva mora</h2>
<p>Na prevoju Čemerno, koji presijecate na putu prema Zelengori, nalazi se jedna od najinteresantnijih geoloških tačaka u regionu. Sa jedne strane prevoja voda teče prema <strong>Jadranskom moru</strong> (u Neretvu). Sa druge strane — prema <strong>Crnom moru</strong> (u Drinu, pa Savu, pa Dunav). Dvije rijeke, dva mora, jedna planinska tačka. Malo koji turistički vodič pominje ovo.</p>

<h2>Kako doći na Zelengoru</h2>
<p>Zelengora je dostupna iz dva pravca:</p>

<p><strong>Iz pravca Tjentišta</strong> (prema Donjim i Gornjim barama i vidikovcu Borić) — sat vremena lošim makadamskim putem. Isključivo terenskim vozilima. Iz Foče je do Tjentišta 30km asfaltom, pa makadamom na planinu.</p>

<p><strong>Iz pravca Kalinovika</strong> (prema Orlovačkom, Štirinskom i Kotlaničkom jezeru) — loš makadamski put, ne preporučujemo osobnim automobilom. Dolazite ili kroz Kalinovik ili preko Čemerna.</p>

<p>Mi organizujemo prijevoz terenskim vozilima iz Foče — i na Donje bare i na Orlovačko jezero. Ne trebaš brinuti o putu.</p>

<h2>Kada ići na Zelengoru</h2>
<p>Zelengora je prelijepa od juna do oktobra. Juni donosi cvijeće i bujno zelenilo koje je planinu i nazvalo. Juli i august — borovnice, toplo, idealno za kampovanje. Septembar — možda najljepše: zlatne boje, manje posjetilaca, bistro nebo. Popović je 1935. pisao da je "najugodnija posjeta od juna do kraja septembra" — i danas vrijedi isto.</p>

<h2>Naše organizovane ture na Zelengoru</h2>
<p>Nudimo četiri formata tura da doživite Zelengoru:</p>

<p><strong>Jeep safari Zelengora</strong> (70€) — panoramska vožnja terenskim vozilima sa zaustavljanjima na jezerima i vidikovcima. Idealno za one koji žele vidjeti planinu bez dugog pješačenja. <a href="/ture/jeep-safari-zelengora" class="text-emerald-400 hover:text-emerald-300 underline">Pogledaj turu →</a></p>

<p><strong>Zelengora — jezera i vidikovci</strong> (70€) — lagana jednodnevna šetnja kroz Zelengoru. Donje bare, Gornje bare, vidikovac Borić. <a href="/ture/zelengora-jezera-vidikovci" class="text-emerald-400 hover:text-emerald-300 underline">Pogledaj turu →</a></p>

<p><strong>Zelengora — uspon na Bregoč</strong> (70€) — za one koji žele najviši vrh. Sat i četrdeset minuta do vrha, panorama na sve strane. <a href="/ture/zelengora-uspon-bregoč" class="text-emerald-400 hover:text-emerald-300 underline">Pogledaj turu →</a></p>

<p><strong>Kampovanje na Zelengori + Jeep safari</strong> (160€) — tri dana uz jezero, uspon na Bregoč i safari kroz planinu. <a href="/ture/kampovanje-zelengora-bregoč-jeep-safari" class="text-emerald-400 hover:text-emerald-300 underline">Pogledaj turu →</a></p>
`,
    author: "Petar & Nevena",
    date: "2026-05-10",
    image: "/images/tours/gallery/vidikovac-zelengora.webp",
    imageAlt: "Vidikovac Zelengora NP Sutjeska",
    coverImage: "/images/tours/gallery/vidikovac-zelengora.webp",
    coverAlt: "Vidikovac Zelengora NP Sutjeska",
    tags: ["zelengora", "planinarenje", "jezera", "np sutjeska", "bosna"],
  },
  {
    id: "12",
    slug: "perucica-zelengora-rafting-tara-iskustvo",
    title: "Ruskinja koja je obišla Antarktik i trojica Amerikanaca — ostali bez teksta u Perućici",
    metadataTitle: "Strani gosti u NP Sutjeska — Perućica, Zelengora i Rafting Tarom | Udahni Avanturu",
    metadataDescription:
      "Anastasija je obišla cijeli svijet uključujući Antarktik. Alex, Marco i Lin su Amerikanci japanskog porijekla. Svi su ostali bez teksta u Perućici. Evo šta se desilo.",
    excerpt:
      "Anastasija putuje po svijetu već godinama. Bila je na Antarktiku. A onda je stigla u Bosnu i rekla nešto što nisam zaboravio: 'Ne mogu da vjerujem šta sve imate na tako malom prostoru.'",
    content: `
<p>Anastasija putuje po svijetu već godinama. Bila je na Antarktiku. Vidjela je stvari koje većina nas nikad neće. A onda je stigla u Bosnu i rekla nešto što nisam zaboravio: "Ne mogu da vjerujem šta sve imate na tako malom prostoru."</p>

<p>Sa njom su bila tri prijatelja iz Amerike — Alex, Marco i Lin, japanskog porijekla. Četvero potpuno različitih ljudi, sa iskustvima iz cijeloga svijeta. I svi su ostali bez teksta na istom mjestu — ispred Skakavca.</p>

<h2>Kada počuješ vodopad prije nego ga vidiš</h2>

<p>Perućica te ne udari odmah. Ulazi se polako, kroz šumu koja postaje sve gušća, stabla sve viša, svjetlost sve rjeđa. A onda počneš čuti zvuk. Tiho, pa sve glasnije.</p>

<p>Alex je bio prvi koji je stao. "Ovo zvuči ludo" — rekao je, još uvijek kroz šumu, prije nego smo izašli na čistinu.</p>

<p>Taj dan je Skakavac bio u punom sjaju. Zima je ostavila dosta snijega, pritoci nabujali, i 75 metara vode padalo je s punom snagom. Prskanje se osjećalo na tri metra udaljenosti, vjetar od vodopada nosio je sitne kapljice i hladnoću koja para kožu.</p>

<p>Marco i Lin su odmah krenuli prema njemu. Htjeli su se kupati. Na tri metra od njega — zaustavili su se, nasmijali i odustali. Temperatura vode i vjetar nije ostavljao nikakvu drugu opciju. Što je vjerovatno i dobro.</p>

<h2>Prašuma koja nikad nije dotaknuta</h2>

<p>Japanci imaju poseban odnos prema prirodi i drevnosti. Kad smo im na putu kroz Perućicu pričali o stablu starom 300 godina koje stoji na nekoliko metara od nas, i o stablu pored njega koje je palo ko zna kada i polako se vraća u zemlju — Alex, Marco i Lin su prestali hodati.</p>

<p>Stali su. Gledali. Bila je tišina koju u gradu nikad ne čuješ.</p>

<p>"Dakle ovo niko nije dirao?" — pitao je Lin.</p>

<p>"Niko. Ni jedna ljudska ruka."</p>

<p>Ostali su zatečeni. U Japanu postoje drevne šume, ali većinom su upravljane, čuvane, dotjerivane. Prašuma koja živi i umire po sopstvenim pravilima — to je nešto drugo. To ih je ostavilo bez teksta više od samog vodopada.</p>

<h2>Anastasija i loši putevi</h2>

<p>Na jednom od naših puteva — a naši putevi su ono što jesu — Anastasija je gledala kroz prozor i rekla: "Petar, stvarno ne mogu da vjerujem kako su ovi putevi loši."</p>

<p>Rekao sam joj: "Misliš da bi bila ovako divlja priroda da su putevi dobri?"</p>

<p>Nasmijala se. Razmislila. "U pravu si. Da su dobri putevi, oko nas bi sada bilo još 100 ljudi. Ovako smo sami."</p>

<p>Anastasija je obišla Antarktik. Vidjela je mjesta do kojih se ne stiže ni dobrim putevima. I rekla je da Bosna ima veliki potencijal — ali i da je nešto posebno upravo u toj nedostupnosti. Da je divljina divlja jer je niko ne posjeduje ni ne uređuje.</p>

<h2>Rafting Tarom — od Brstenovice</h2>

<p>Rafting smo radili od Brstenovice — tačke od koje kreće pravi rafting, ne ona skraćena varijanta od pola trase. Imam preko deset godina iskustva na Tari, na njoj sam naučio plivati i skakati "laste", i znam je dovoljno dobro da znam kada je sigurno ići od početka i kada nije.</p>

<p>Taj dio koji većina izbjegava — nije izbjegan slučajno. Brzaci su veći, voda brža, camac manje predvidljiv. Ali mi smo bili dobra ekipa, i Tara nas je nagradila.</p>

<p>Na jednom od velikih brzaka — camac se nakrenuo, val je udario, voda pljusnula unutra. Anastasija je pala na dno camca, zgrabila veslo, sjela nazad na mjesto.</p>

<p>I rekla, glasno, dok smo se svi smijali: "Ovo je jebeno dobro. Ovo je jebeno ludilo."</p>

<p>Savršeno opisano.</p>

<h2>Maglić — sljedeći put</h2>

<p>Htjeli su na Maglić. Bila je jaka zima, snijeg i led na stazi, i nismo se penjali — sigurnost je uvijek ispred ambicije. Kada zemlja nije sigurna, ne idemo gore bez obzira koliko je nebo lijepo.</p>

<p>Anastasija je rekla da se vraća sljedeće godine. Sa prijateljicom koja se "odušila slikama i video snimcima". Maglić je na listi.</p>

<p>Alex, Marco i Lin — ko zna. Ali Perućica ih je promijenila na načine koje nisam očekivao. Kad čovjek koji je odrastao u japanskoj kulturi poštovanja prema prirodi stane ispred prašume stare hiljadama godina i kaže "niko ovo nije dirao" — i u tišini shvati šta to znači — tada znaš da je tvoj kraj nešto posebno.</p>

<h2>Što se mene tiče</h2>

<p>Vodim ture godinama. Vidio sam reakcije stotina ljudi. Ali ova ekipa me podsjetila zašto radim ovo što radim.</p>

<p>Anastasija koja je bila na Antarktiku — i odušila se Bosnom. Alex koji je čuo Skakavac kroz šumu i rekao "ovo zvuči ludo". Lin koji je stao ispred drevnog stabla i pitao da li ga je neko ikad dirao.</p>

<p>Nisu došli ovdje jer je lako doći. Došli su jer je vrijedno.</p>

<p>I to je, na kraju, jedini turistički vodič koji ikad ima smisla.</p>
    `,
    author: "Petar & Nevena",
    date: "2026-05-23",
    image: "/images/tours/blog-trnovacko-perucica-rafting/japanci-na-trnovackom-jezeru.webp",
    imageAlt: "Gosti na Trnovačkom jezeru NP Sutjeska",
    tags: ["NP Sutjeska", "Perućica", "Trnovačko jezero", "Zelengora", "rafting"],
    images: [
      { src: "/images/tours/blog-trnovacko-perucica-rafting/ekipa-prasuma.webp", alt: "Ekipa u Prašumi Perućica" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/odmor-perucica.webp", alt: "Odmor u Perućici" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/japanci-na-trnovackom-jezeru.webp", alt: "Japanci na Trnovačkom jezeru" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/alex-na-trnovackom-jezeru.webp", alt: "Alex na Trnovačkom jezeru" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/ekipa-na-trnovackom.webp", alt: "Ekipa na Trnovačkom jezeru" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/trnovacko-u-maju.webp", alt: "Trnovačko jezero u maju" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/zelengora-gornje-bare.webp", alt: "Zelengora Gornje bare" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/gornje-bare-anastasija.webp", alt: "Anastasija na Gornjim barama" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/put-za-boric-anastasija.webp", alt: "Put za Borić" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/boric-anastasija-pogled.webp", alt: "Pogled sa Borića" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/vidikovac-bešikta.webp", alt: "Vidikovac Bešikta" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/skakavac-vodopad-pogled.webp", alt: "Vodopad Skakavac" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/boric-pogled-maglic-perucica.webp", alt: "Pogled sa Borića na Maglić i Perućicu" },
      { src: "/images/tours/blog-trnovacko-perucica-rafting/pored-puta-za-tjentiste.webp", alt: "Pored puta za Tjentište" },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return blogPosts.find((post) => post.slug.trim().toLowerCase() === s);
}
