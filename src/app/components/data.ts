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
    description: "[Other Country] volunteers to aid in R&D\nWe’ll send a rocket to intercept it, knocking it off course!\nBut do we send it now, or wait until its closer?",
    isEnd: false,
      },
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
    id: "LateResearch"
    description: "Research begins\n Time has been lost, but we need to do what we can!",
    isEnd: false
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
    money:  0,
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
    to: "Volun",
    optionText: "Act Now?",
    effectDesc: ". . .",
    time: 2,
    money: 30,
    reputation: 5,
    defense: 5,
    research: 5,

  },
  {
    from: "Volun",
    to: "DevA",
    optionText: "Act Now?",
    effectDesc: ". . .",
    time: 2,
    money: 30,
    reputation: 5,
    defense: 5,
    research: 5,
      }
];

export { nodes, edges };
