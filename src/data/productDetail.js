import dprint1 from "../assets/images/3dprint1.png";
import dprint2 from "../assets/images/3dprint2.png";
import dprint3 from "../assets/images/3dprint3.png";
import dprint4 from "../assets/images/3dprint4.png";
import magasin from "../assets/images/magasin.png";
import oak from "../assets/images/oak.png";
import oakui from "../assets/images/oak-ui.png";





const productDetail = [
  {
    id: 1,
    name: "Cross Media Design",
    experiences: [
      {
        year: "2007-2009",
        school: "Fridhems Folkhögskolan",
        description:
          "På folkhögskolan lärde jag grundläggande och fördjupning kunskaper i grafisk form och kommunikation bland annat med att skapa affischer, broschyrer, illustration med Adobe Photoshop, Indesign och Illustrator. Under två års studier på Fridhems folkhögskola har jag utvecklat mitt grafiska hantverk genom både praktiskt och teoretiskt arbete. Jag har lärt mig grunderna i klassisk teckning och digital design, fördjupat mina kunskaper inom typografi, layout, illustration och visuell berättarteknik. Utbildningen gav mig möjlighet att analysera, utveckla och förverkliga idéer både enskilt och i grupp, vilket stärkte min kreativitet och konstnärliga uttryck. Genom arbete med branschstandardprogram som Photoshop, Illustrator och InDesign byggde jag en solid teknisk grund. Det tvärkonstnärliga samarbetet med andra kulturlinjer berikade min lärandeupplevelse och utvecklade mitt kritiska perspektiv på visuell kommunikation. Utbildningen fungerade som en språngbräda för vidare studier och arbete, och jag känner mig väl rustad för framtida utmaningar.",
      },
    ],
  },
  {
    id: 2,
    name: "Projekter",
    experiences: [
      {
        year: "Fridhems Folkhögskola",
        school: "Tidningsmagasin",
        description:
          " Tidningsmagasin, jag fördjupade mina kunskaper i grafisk form och visuell kommunikation genom både praktiskt och teoretiskt arbete och hjälpte andra med sina projekt. Mina uppgifter med affischer, broschyrer och illustrationer i Adobe Photoshop, Illustrator och InDesign, samt lärde mig grunderna i teckning, layout, typografi och digital design. Utbildningen stärkte min kreativitet, tekniska färdigheter och förmåga att arbeta både självständigt och i grupp. Det tvärkonstnärliga samarbetet gav nya perspektiv och breddade min förståelse för visuell kommunikation",
       links: [{ label: "Magasin", url: "/Magasin.pdf" }],
        images: [magasin], 
      },
      {
        year: "Chas Academy",
        school: "Gymplanerare",
        description:
          "Som UX-designer hade jag möjligheten att genomföra ett projekt tillsammans med mina skolkamrater, där målet var att hitta ett sätt att skapa empati med användaren. Vi fokuserade på att förstå användarens behov, hur vi kunde uppnå målet och tillgodose alla behov för att slutligen nå en lösning som var minimalistisk, enkel och effektiv. ",
        links: [
          { label: "oak-UX", url: "/OAK-UX.pdf" },
          { label: "oak-UI", url: "/OAK-UI.pdf" }
        ],
        images: [oak, oakui],
      },
      {
        year: "Chas Academy",
        school: "E-handelprojekt",
        description:
          " Som frontendutvecklare har jag arbetat med projekt både självständigt och i grupp. Min erfarenhet av HTML, CSS och JavaScript väckte min nyfikenhet för kodspråk och viljan att lära mig mer inom området. Trots att det är ett omfattande ämne anser jag att kunskap i JavaScript och React är avgörande för att UI, UX och frontend ska kunna samverka och skapa en bättre förståelse för designprocessen. I vårt grupprojekt, som baserades på API och databaser, var det grundläggande att följa flera steg – från att skapa designen i Figma till att bygga komponenterna i React, med fokus på responsivitet och användarvänlighet. Användningen av GitHub var också avgörande för vårt e-handelsprojekt, eftersom det gjorde det möjligt för oss att samarbeta, justera och förbättra sidan kontinuerligt.",
      },
    ],
    links: [
      { label: "Solenia", url: "https://solenia.netlify.app/" },
      {
        label: "Github",
        url: "https://github.com/LordNelson83/Nelson_Portfolio",
      },
    ],
  },
  {
    id: 3,
    name: "3D print & Design",
    experiences: [
      {
        year: "2018-2019",
        school: "Xenter",
        description:
          "Min passion för design och grafisk produktion har lett mig till att utforska nya teknologier, där 3D-printing har blivit en naturlig vidareutveckling. 3D-printing är en innovativ och kreativ metod för att förverkliga egna designer med olika material, många av dem miljövänliga. Genom att använda avancerade 3D-program kan jag skapa digitala modeller och sedan förverkliga dem genom utskrifter, vilket skapar en direkt koppling mellan idé och fysisk produkt. Som 3D-tekniker arbetar jag i en bransch där utvecklingen sker snabbt både inom processer och material. Additiv tillverkning öppnar möjligheter för att skapa komplexa former som annars vore omöjliga att producera med traditionella metoder. Med den senaste tekniken kan jag ta en produkt från koncept till färdig utskrift på bara några timmar. Allt fler industrier inser fördelarna med 3D-teknik, från arkitektur och produktutveckling till medicinsk och fordonsindustri. Mitt mål är att kombinera min designkompetens med avancerad 3D-teknik för att skapa innovativa och hållbara lösningar.",
      },
    ],
    links: [
    { label: "Pinterest", url: "https://es.pinterest.com/NP3Design/3d-design-3dprint/" },
  ],
  images: [dprint1, dprint2, dprint3, dprint4], 
},
  {
    id: 4,
    name: "UX/UI Design & Frontend",
    experiences: [
      {
        year: "2024 -2026",
        school: "Chas Academy",
        description:
          "Jag studerar UX-design och frontendutveckling på Chas Academy, där jag utvecklar djupgående kunskaper i webbutveckling (JavaScript) och UX-design. Kombinationen av design, kodning och agila metoder ger mig insikt i hur en UX-designer skapar intuitiva och tillgängliga digitala lösningar. Jag brinner för att förstå användarnas behov och designa gränssnitt som förmedlar rätt känsla och guidar dem smidigt genom digitala miljöer. Under utbildningen har jag arbetat med tillgänglighet enligt EU-krav och utforskat hur AI kan effektivisera designprocesser. Genom projektledning och agila arbetsmetoder har jag fått erfarenhet av att leda team och driva projekt från idé till lansering. Efter utbildningen är jag redo för roller som frontendutvecklare eller UX-designer med teknisk kompetens – med målet att skapa engagerande och användarvänliga digitala produkter.",
      },
      {
        year: "2024 -2026",
        school: "Frontend",
        description:
          "Kodning handlar om mer än bara programmering – det är ett sätt att kommunicera genom färg, rörelse och interaktion mellan människa och maskin. Jag har lärt mig att kombinera logiskt tänkande med kreativ design för att skapa funktionella och visuellt tilltalande webbupplevelser. Genom att arbeta med HTML, CSS och JavaScript bygger jag responsiva webbplatser och fördjupar mig i client-server-arkitektur, API:er och CMS-system. Jag har även utvecklat en förståelse för webbtillgänglighet och säkerhet, vilket säkerställer att digitala tjänster blir både användarvänliga och hållbara. Utöver tekniska färdigheter har jag erfarenhet av automatiseringsverktyg för att effektivisera utvecklingsprocessen. Min utbildning kombinerar teori och praktik, vilket ger mig en stark grund inom frontendutveckling och förbereder mig för att skapa moderna och dynamiska webbapplikationer.",
      },
    ],
  },
];

export default productDetail;