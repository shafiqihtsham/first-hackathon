const nodes = [
  {
    id: "StartScreen",
    description:
      "Establishing Scene:\nIt is late-2016 - date of discovery\n“An announcement from Mt Lemmon Observatory (Arizona) is made of the discovery”\nWhat do you do?\n[We have only a rough idea of the certainty of impact: Year ~2100 <1%]",
    isEnd: false,
  },
  {
    id: "A_Impact",
    description:
      "[Intermediate Screen]\n“More research is done, we understand the issue better”\nExpected Impact: more specific date and impact scenario",
    isEnd: false,
  },
  {
    id: "PubResponse",
    description: "Public response is not positive..\nSpend time/money on PR?",
    isEnd: false,
  },
  {
    id: "NothingA",
    description:
      "An Amateur astronomer discovers it from their backyard and figures out it will impact\nPublic Fear!",
    isEnd: false,
  },
  {
    id: "SlowResearch",
    description: "Research is slow\nPublic support is difficult to maintain",
    isEnd: false,
  },
  {
    id: "ImpactKnown",
    description:
      "Impact is certain\nThe world is in panic, although many decades remain until impact\nWhat do we do?",
    isEnd: false,
  },
  {
    id: "CountriesA",
    description:
      "Other Countries come across the observing data.\nWord comes out that you haven’t acted.\nThey begin their own plans",
    isEnd: false,
  },
  {
    id: "UNint",
    description:
      "[Intermediate Screen]\nThe world comes together to discuss a solution\nDue to the disapproval of your country, there is little trust in your confidence.\nNo consensus is reached.",
    isEnd: false,
  },
  {
    id: "PubResponse",
    description:
      "Public response is not positive... \nShift efforts and funding to PR management?",
    isEnd: false,
  },
  {
    id: "Volunt",
    description:
      "[Other Country] volunteers to aid in R&D\nWe’ll send a rocket to intercept it, knocking it off course!\nBut do we send it now, or wait until its closer?",
    isEnd: false,
  },
  {
    id: "devA",
    description: "Development begins...",
    isEnd: false,
  },
  {
    id: "launch",
    description: "Launch!",
    isEnd: false,
  },
  {
    id: "LateResearch",
    description:
      "Research begins\n Time has been lost, but we need to do what we can!",
    isEnd: false,
  },


  {
   id: "Offer",
   description: "Offer to help...\nYou discovered it after all...",
   isEnd: false,
      },

  {
   id: "OfferNo"
   description: "No consensus is reached...\nOther countries begin independent efforts..."
   isEnd: false,

      },

  {
   id: "theBadEnding",
   description: "No action was taken in time, the asteroid destroys... the city it was headed towards...\nor another country/ies saved the world...?",
   isEnd: true,
      },


  {
   id: "win",
   description: "Crisis Averted!\nThe asteroid's path has been diverted, and the Earth has been saved",
   isEnd: true,
  },


];

const edges = [
  {
    from: "StartScreen",
    to: "A_Impact",
    optionText: "Investigate Further",
    effectDesc:
      "More resources are put towards research efforts, new observations are recorded, prediction confidence increases!",
    time: 3,
    money: -15,
    reputation: 5,
    defense: 0,
    research: 10,
  },
  {
    from: "StartScreen",
    to: "PubResponse",
    optionText: "Tell the Media",
    effectDesc:
      "A media package is released to publishers, news spreads online, people are uneasy",
    time: 0.5,
    money: 0,
    reputation: -10,
    defense: 0,
    research: 0,
  },
  {
    from: "StartScreen",
    to: "NothingA",
    optionText: "Do nothing, it'll all be fine.",
    effectDesc: "Life continues as it always has...",
    time: 5,
    money: 0,
    reputation: -10,
    defense: 0,
    research: 0,
  },
  {
    from: "NothingA",
    to: "SlowResearch",
    optionText: "Next",
    effectDesc: ". . .",
    time: 2,
    money: -20,
    reputation: 5,
    defense: 5,
    research: 5,
  },
  {
   from: "SlowResearch",
   to: "UNint",
   optionText: "Let the UN delegate the workload & cost",
   effectDesc: "",
   time: 2,
   money: 0,
   reputation: -2,
   defense: 2,
   research: 2,
      },


  {
   from: "SlowResearch",
   to: "CountriesA"
   optionText: "Next",
   effectDesc: ". . .",
   time: 1,
   money: 0,
   reputation: -10,
   defense: 0,
   research: 0,
      },

   {
    from: "UNint",
    to: "Offer",
    optionText: "Next",
    effectDesc: ". . .",
    time: 0,
    money: 0,
    reputation: 0,
    defense: 0,
    research: 0,


       },

  {
   from: "Offer"
   to: "OfferNo",
   optionText: "Decline to help",
   effectDesc: ". . .",
   time: 2,
   money: 0,
   reputation: -10,
   defense: 0,
   research: 0,

      },
  {
   from: "OfferNo",
   to: "theBadEnding",
   optionText: "Next",
   effectDesc: ". . . ",
   time: 100,
   money: -100,
   reputation: -100,
   defense: -100,
   research: -100,
      },
  {
    from: "A_Impact",
    to: "ImpactKnown",
    optionText: "Next",
    effectDesc: ". . .",
    time: 0,
    money: 0,
    reputation: 0,
    defense: 0,
    research: 0,
  },
  {
    from: "ImpactKnown",
    to: "Volunt",
    optionText: "Act Now?",
    effectDesc: ". . .",
    time: 2,
    money: 30,
    reputation: 5,
    defense: 5,
    research: 5,
  },
  {
    from: "Volunt",
    to: "devA",
    optionText: "Send a rendezvous mission early",
    effectDesc: ". . .",
    time: 10,
    money: 30,
    reputation: 5,
    defense: 5,
    research: 5,
  },
  {
    from: "devA",
    to: "launch",
    optionText: "Launch!",
    effectDesc: "Send the probe out to start its mission!",
    time: 2,
    money: -2,
    reputation: 10,
    defense: 10,
    research: 2,
  },
  {
    from: "CountriesA",
    to: "LateResearch",
    optionText: "Act Now on your own",
    effectDesc: "",
    time: 2,
    money: 0,
    reputation: -5,
    defense: 5,
      },
  {
    from: "LateResearch",
    to: "devA",
    optionText: "Send a rendezvous mission early",
    effectDesc: ". . .",
    time: 10,
    money: 30,
    reputation: 5,
    defense: 5,
    research: 5,

      },
];

export { nodes, edges };
