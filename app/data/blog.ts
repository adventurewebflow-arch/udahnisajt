export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Trnovačko jezero – vodič",
    slug: "trnovacko-jezero-vodic",
    excerpt:
      "Sve što trebate znati o Trnovačkom jezeru - jednom od najljepših jezera u Bosni i Hercegovini. Otkrijte kako doći, šta vidjeti i kako se pripremiti za nezaboravnu avanturu.",
    content: `
      <h1>Trnovačko jezero – kompletan vodič za avanturiste</h1>
      
      <p>Trnovačko jezero je jedno od najljepših i najfotografisanijih jezera u Bosni i Hercegovini. Smješteno u srcu Nacionalnog parka Sutjeska, ovo prekrasno jezero predstavlja pravi dragulj dinarskih planina. Ako planirate posjetu ovom čarobnom mjestu, ovaj vodič će vam pomoći da se pripremite i uživate u svakom trenutku.</p>

      <h2>Gdje se nalazi Trnovačko jezero?</h2>
      
      <p>Trnovačko jezero se nalazi u Nacionalnom parku Sutjeska, na nadmorskoj visini od 1517 metara. Okruženo je planinama Maglić, Volujak i Bioč, što čini njegovu poziciju spektakularnom. Jezero je udaljeno oko 20 kilometara od Foče, što ga čini pristupačnim za planinare svih nivoa.</p>

      <h2>Kako doći do Trnovačkog jezera?</h2>
      
      <p>Postoje nekoliko načina da dođete do Trnovačkog jezera. Najpopularnija ruta vodi iz Tjentišta, kroz prašumu Perućica, do Prijevora, a zatim spustom do jezera. Ova ruta traje oko 3-4 sata hoda i zahtijeva srednju fizičku kondiciju. Alternativna ruta vodi iz Foče direktno do jezera, što je nešto kraća opcija.</p>

      <p>Za najbolje iskustvo, preporučujemo organizovanu turu sa iskusnim vodičem. Naša <a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">tura na Trnovačko jezero sa usponom na Maglić</a> kombinuje kampovanje uz jezero sa usponom na najviši vrh BiH, pružajući vam kompletnu avanturu u prirodi.</p>

      <h2>Šta čini Trnovačko jezero posebnim?</h2>
      
      <h3>Prirodna ljepota</h3>
      <p>Trnovačko jezero je prirodno jezero formirano tokom ledenog doba. Njegova kristalno čista voda reflektuje okolne planine, stvarajući spektakularne fotografije. Jezero je dugo oko 700 metara i široko oko 300 metara, sa maksimalnom dubinom od 15 metara.</p>

      <h3>Biodiverzitet</h3>
      <p>Okolina jezera je dom brojnim vrstama biljaka i životinja. U ljetnim mjesecima možete vidjeti različite vrste cvijeća, dok su okolne planine dom divljim životinjama kao što su medvjedi, vukovi i divlje koze.</p>

      <h2>Najbolje vrijeme za posjetu</h2>
      
      <p>Najbolje vrijeme za posjetu Trnovačkom jezeru je od maja do oktobra. U ovom periodu vremenske prilike su najstabilnije, a temperature su prijatne za planinarenje i kampovanje. Ljetni mjeseci (jul i august) su idealni za kupanje u hladnoj vodi jezera.</p>

      <h2>Šta ponijeti sa sobom?</h2>
      
      <h3>Osnovna oprema</h3>
      <p>Za posjetu Trnovačkom jezeru potrebno je ponijeti:</p>
      <ul>
        <li>Planinske cipele sa dobrom prijanjanjem</li>
        <li>Ruksak (minimalno 30L) sa vodom (minimalno 2L po osobi)</li>
        <li>Odjeća za sve vremenske prilike (slojevi su ključni)</li>
        <li>Hrana za snagu (energetski barovi, orašasti plodovi)</li>
        <li>Prva pomoć (osnovni set)</li>
        <li>Krema za sunce i naočale</li>
      </ul>

      <h3>Za kampovanje</h3>
      <p>Ako planirate kampovanje uz jezero, dodatno trebate:</p>
      <ul>
        <li>Šator sa vodootpornom podlogom</li>
        <li>Spavaća vreća prilagođena visini</li>
        <li>Karimat ili dušek</li>
        <li>Fenjer ili čarobna svjetiljka</li>
        <li>Kuhinjski pribor i hrana</li>
      </ul>

      <h2>Sigurnost i preporuke</h2>
      
      <p>Trnovačko jezero je prekrasno mjesto, ali zahtijeva poštovanje prirode i sigurnosnih mjera. Uvijek idite sa licenciranim vodičem, posebno ako ste početnik. Vremenske prilike u planinama mogu se brzo promijeniti, pa je važno biti pripremljen.</p>

      <p>Poštujte prirodu - ne ostavljajte smeće, ne palite vatru van određenih mjesta, i ne uzimajte ništa iz prirode. Trnovačko jezero je dio Nacionalnog parka Sutjeska, što znači da su posebne zaštitne mjere na snazi.</p>

      <h2>Fotografisanje</h2>
      
      <p>Trnovačko jezero je jedno od najfotografisanijih mjesta u BiH, i to sa razlogom. Najbolje fotografije možete napraviti ujutro ili uveče, kada je svjetlost najbolja. Zlatni sat (sunrise i sunset) pruža spektakularne prilike za fotografisanje.</p>

      <h2>Zaključak</h2>
      
      <p>Trnovačko jezero je mjesto koje svaki ljubitelj prirode mora posjetiti. Njegova prirodna ljepota, netaknuta okolina i spektakularni vidici čine ga idealnom destinacijom za avanturiste svih nivoa. Bez obzira da li dolazite sami ili sa organizovanom turom, ovo jezero će vas oduševiti.</p>

      <p>Ako želite iskusiti Trnovačko jezero sa iskusnim vodičem i u društvu avanturista, pogledajte naše <a href="/ture/kampovanje-trnovacko-jezero-maglic" class="text-emerald-400 hover:text-emerald-300 underline">ture na Trnovačko jezero</a> ili kontaktirajte nas za više informacija.</p>
    `,
    author: "Marko Petrović",
    date: "2026-02-05",
    image: "/images/blog/trnovacko.jpg",
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
    author: "Stefan Jovanović",
    date: "2026-02-03",
    image: "/images/blog/maglic.jpg",
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
    author: "Ana Marić",
    date: "2026-02-01",
    image: "/images/blog/oprema.jpg",
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
    image: "/images/blog/perucica.jpg",
    tags: ["Prašuma Perućica", "NP Sutjeska", "priroda", "biodiverzitet"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
