const SPARTIPS_DATA = [
  {
    heading: "Använd vattenbesparande duschmunstycke",
    text: "Ett vanligt duschmunstycke förbrukar upp till 20 liter vatten per minut. Med ett vattenbesparande duschmunstycke kan man reducera det flödet med upp till 50% och fortfarande känna att man fått sig en normal dusch.",
    example:
      "på att använda ett vattenbesparande duschmunsctycke under en dusch.",
    exampleYear: "På ett år med en dusch varje dag blir det",
    kWhDiff: 3.12,
    yearK: 365,
    imageUrl: "assets/images/spartips/shower.jpg",
    //  imageUrl: "https://source.unsplash.com/lJewNo29uf0",
    id: "1",
  },
  {
    heading: "Sänk rumstemperaturen med en grad",
    text: "Genom att sänka rumstemeraturen med en grad sparar du så mycket som 5% av eluppvärmningskostnaden.",
    example:
      "på att ha rustemperaturen en grad lägre över en dag. Räknat på en normalstor villa som värmer upp med el.",
    exampleYear: "På ett år blir det",
    kWhDiff: 1.6,
    yearK: 365,
    imageUrl: "assets/images/spartips/radiator-cat.jpg",
    //    imageUrl: "https://source.unsplash.com/CgxiEFxIuN0",
    id: "2",
  },
  {
    heading: "Titta på efffektförbrukningen när du köper elektronik",
    text: "Det kan skilja väldigt mycket på hur mycket olika elektriska apparater drar i ström. En TV kan dra allt ifrån 60w upp till 100w, beroende på storlek, typ och tillverkare.",
    example:
      "en kväll på att ha en TV med snål energiförbrukning jämfört med någon av TV-apparaterna från energiklass G",
    exampleYear: "På ett år räknat med 3 timmar TV varje dag blir det ",
    kWhDiff: 0.4,
    yearK: 3 * 365,
    imageUrl: "assets/images/spartips/television-small.jpg",
    //    imageUrl: "https://source.unsplash.com/KzGhmrQmB6I",
    id: "3",
  },
  {
    heading: "Byt till LED-lampor och lågenergilampor",
    text: "De flesta har fått med sig att glödlampan är en energibov och bytat ut mycket av sin belysning. Men det är värt att kolla en extra gång vad de olika lamporna i hemmet drar.",
    example: "på att byta ut en glödlampa med en LED-lampa under en dag.",
    exampleYear: "På ett år blir det",
    kWhDiff: 0.96 - 0.02,
    yearK: 365,
    imageUrl: "assets/images/spartips/bulb.jpg",
    //    imageUrl: "https://source.unsplash.com/-oXb5tA61wI",
    id: "4",
  },
  {
    heading: "Glöm inte locket på kastrullen!",
    text: "Visste du att det går åt 5 gånger mer energi att hålla vatten kokande utan lock än med? Glöm inte locket!",
    example:
      "på att ha en stor gryta kokandes på spisen med lock en timme, jämfört med utan.",
    exampleYear:
      "På ett år räknat med gryta kokandes 3 timmar i veckan blir det",
    kWhDiff: 2.2 - 0.4,
    yearK: 3 * 52,
    imageUrl: "assets/images/spartips/pot.jpg",
    //  imageUrl: "https://source.unsplash.com/hRwSIjkn-LE",
    id: "5",
  },
  {
    heading: "Torktumlaren drar mindre än torkskåpet",
    text: "Visste du att torktumlaren drar ganska mycket mindre än tokskåpet? Det kan variera en hel del beroende på hur ny torktumlare man har och om den drivs av värmepump eller ej, men en snittligt värde är att torkskåpet drar 50% mer ström för samma mängd kläder.",
    example: "på att torktumla en 4kg tvätt framför att hänga i torkskåp.",
    exampleYear: "På ett år räknat på två tvättar i veckan blir det",
    kWhDiff: 2,
    yearK: 2 * 52,
    imageUrl: "assets/images/spartips/dryer.jpg",
    //    imageUrl: "https://source.unsplash.com/R5NdfEnbcYo",
    id: "6",
  },
  {
    heading: "Använd mikron framför ungnen",
    text: "En ugn drar nästan dubbelt så mycket ström som en mikrovågsugn och samtidigt värms mat snabbare i en mikro. Om mat bara ska värmas upp är det en bra idé att använda mikron istället.",
    example: "på att värma en fiskgratäng i mikron istället för i ugnen.",
    exampleYear:
      "På ett år, räknat att man värmer i mikro istället för ugn 3 gånger i veckan blir det",
    kWhDiff: 1.08 - 0.18,
    yearK: 3 * 52,
    imageUrl: "assets/images/spartips/microwave-small.jpg",
    //  imageUrl: "https://source.unsplash.com/3k2g9ZYTGj4",
    id: "7",
  },
  {
    heading: "Koka upp vatten istället för att värma på spis",
    text: "Det går åt ungefär 0.11 kWh att koka upp en liter vatten i en vattenkokare. Så länge du inte har induktionshäll som drar ungefär lika mycket så är det 25% mindre än en vanlig spis. Och 50% mindre än en gjutjärnsplatta.",
    example:
      "på att koka upp en liter vatten i vattenkokaren framför att värma upp det på vanlig spisplatta.",
    exampleYear:
      "På ett år räknat med att koka upp 5 liter vatten i veckan blir det",
    kWhDiff: 0.36,
    yearK: 5 * 52,
    imageUrl: "assets/images/spartips/kettle.jpg",
    //  imageUrl: "https://source.unsplash.com/6Pd4M4L25DU",
    id: "8",
  },
  {
    heading: "Tvätta bara på 60 grader när du måste",
    text: "Man skulle kunna tro att en 60-graderstvätt bara drar 50% mer ström än en 40-graderstvätt, men sanningen är att den drar mer än dubbel så mycket. Fundera på om det går att tvätta i 40 grader istället.",
    example:
      "på att tvätta fyra kilo tvätt i en 40-graderstvätt istället för en 60-graders.",
    exampleYear: "På ett år räknat med två tvättar i veckan blir det",
    kWhDiff: 1.4 - 0.6,
    yearK: 2 * 52,
    imageUrl: "assets/images/spartips/washing-machine.jpg",
    //  imageUrl: "https://source.unsplash.com/5cpBWEl6y6c",
    id: "9",
  },
];

export default SPARTIPS_DATA;
