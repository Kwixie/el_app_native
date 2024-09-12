interface DeviceData {
  id: number;
  device: string;
  power: number;
  icon: string;
  duration: number;
  description: string;
}

const POWER_DATA: DeviceData[] = [
  {
    id: 2,
    device: "elbilsbatteri",
    power: 7200,
    icon: "directions-car",
    duration: 6,
    description: "Ladda ett elbilsbatteri",
  },
  {
    id: 1,
    device: "dush",
    power: 25000,
    icon: "shower",
    duration: 0.2,
    description: "Ta en dusch",
  },
  {
    id: 3,
    device: "bastu",
    power: 5000,
    icon: "cabin",
    duration: 1,
    description: "Basta en timme",
  },
  {
    id: 11,
    device: "elcykelladdare",
    power: 500,
    icon: "pedal-bike",
    duration: 6,
    description: "Ladda ett elcykelbatteri",
  },
  {
    id: 19,
    device: "frys",
    power: 125,
    icon: "ac-unit",
    duration: 24,
    description: "Frysen på ett dygn",
  },
  {
    id: 21,
    device: "kyl",
    power: 100,
    icon: "kitchen",
    duration: 24,
    description: "Kylen på ett dygn",
  },
  {
    id: 6,
    device: "tvättmaskin",
    power: 2000,
    icon: "local-laundry-service",
    duration: 0.8,
    description: "En 40-graders tvätt",
  },
  {
    id: 22,
    device: "diskmaskin",
    power: 700,
    icon: "wash",
    duration: 2,
    description: "Köra en diskmaskin",
  },
  {
    id: 4,
    device: "ugn",
    power: 1800,
    icon: "set-meal",
    duration: 0.6,
    description: "Göra en fiskgratäng i ugnen",
  },
  {
    id: 13,
    device: "glödlampa",
    power: 60,
    icon: "emoji-objects",
    duration: 16,
    description: "Glödlampa tänd en dag",
  },
  {
    id: 9,
    device: "dammsugare",
    power: 1000,
    icon: "cleaning-services",
    duration: 0.33,
    description: "Damsuga",
  },
  {
    id: 7,
    device: "hårtork",
    power: 1500,
    icon: "air",
    duration: 0.2,
    description: "Föna håret",
  },
  {
    id: 5,
    device: "vattenkokare",
    power: 2000,
    icon: "emoji-food-beverage",
    duration: 0.1,
    description: "Koka upp en liter vatten",
  },
  {
    id: 12,
    device: "TV",
    power: 100,
    icon: "tv",
    duration: 2,
    description: "Kolla på TV i två timmar",
  },
  {
    id: 8,
    device: "mikrovågsugn",
    power: 1200,
    icon: "microwave",
    duration: 0.15,
    description: "Mikra en fiskgratäng",
  },
  {
    id: 15,
    device: "energilampa",
    power: 7,
    icon: "lightbulb",
    duration: 16,
    description: "Energilampa tänd en dag",
  },
  {
    id: 10,
    device: "kaffebryggare",
    power: 800,
    icon: "coffee",
    duration: 0.1,
    description: "Brygga en kopp kaffe",
  },
  {
    id: 14,
    device: "laptop",
    power: 40,
    icon: "laptop-mac",
    duration: 2,
    description: "Sitta vid datorn två timmar",
  },
  {
    id: 20,
    device: "brödrost",
    power: 900,
    icon: "breakfast-dining",
    duration: 0.05,
    description: "Rosta en smörgås",
  },
  {
    id: 18,
    device: "LED-lampa",
    power: 1,
    icon: "tips-and-updates",
    duration: 16,
    description: "LED-lampa tänd en dag",
  },
  {
    id: 16,
    device: "mobilladdare",
    power: 5,
    icon: "charging-station",
    duration: 3,
    description: "En mobilladdning",
  },
  {
    id: 17,
    device: "eltandborste",
    power: 2,
    icon: "electric-bolt",
    duration: 3,
    description: "Ladda eltandborsten",
  },
];

export default POWER_DATA;

/*[
  {
    category: "kök",
    devices: [
      {
        id: 1,
        device: "spis",
        power: 2300,
        icon: "Oven Gen",
      },
      {
        id: 2,
        device: "mikrovågsugn",
        power: 1200,
        icon: "Microwave",
      },
      {
        id: 3,
        device: "vattenkokare",
        power: 2000,
        icon: "Kettle",
      },
      {
        id: 4,
        device: "kaffebryggare",
        power: 800,
        icon: "Coffee",
      },
    ],
  },
  {
    category: "badrum",
    devices: [
      {
        id: 5,
        device: "hårtork",
        power: 1500,
        icon: "Mode Fan",
      },
      {
        id: 6,
        device: "eltandborste",
        power: 2,
        icon: "Dentristy",
      },
      {
        id: 7,
        device: "dush",
        power: 25000,
        icon: "Shower",
      },
      {
        id: 8,
        device: "tvättmaskin",
        power: 2000,
        icon: "Local Laundry Service",
      },
    ],
  },
  {
    category: "vardagsrum",
    devices: [
      {
        id: 9,
        device: "TV",
        power: 100,
        icon: "Tv",
      },
    ],
  },
  {
    category: "belsyning",
    devices: [
      {
        id: 10,
        device: "glödlampa",
        power: 60,
        icon: "Emoji Objects",
      },
      {
        id: 11,
        device: "lågenergilampa",
        power: 7,
        icon: "Lightbulb",
      },
      {
        id: 12,
        device: "LED-lampa",
        power: 1,
        icon: "Tips And Updates",
      },
    ],
  },
  {
    category: "transport",
    devices: [
      {
        id: 13,
        device: "elcykelladdare",
        power: 500,
        icon: "Pedal Bike",
      },
      {
        id: 14,
        device: "elbilsbatteri",
        power: 7200,
        icon: "Directions Car",
      },
    ],
  },
  {
    category: "övrigt",
    devices: [
      {
        id: 15,
        device: "dammsugare",
        power: 1000,
        icon: "Mop",
      },
      {
        id: 16,
        device: "laptop",
        power: 40,
        icon: "Laptop Mac",
      },
      {
        id: 17,
        device: "mobilladdare",
        power: 5,
        icon: "Charging Station",
      },
      {
        id: 18,
        device: "bastu",
        power: 5000,
        icon: "Cabin",
      },
    ],
  },
];



En tvätt 40 grader
En mobilladdning
En dusch (10 minuter)
Koka upp en liter vatten 
Kolla TV 1 timme 
Ladda elbilen 
Ladda elcykeln 
Mikra en fiskgratäng (10 min)
En fiskgratäng i ugnen (30 min)
Eltandborste morgon och kväll 
Bastu 1 timme
Glödlampa (60W) 16h
Lågenergilampa (11W) 16h
LED-lampa (1W) 16h
Laptop (40W) 1 timme 
Hårtork 10 minuter 
Dammsugare 20 minuter */
