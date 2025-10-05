const nodes = [
  {
    id: "StartScreen",
    description:
      "Establishing Scene:\nIt is late-2016 - date of discovery\n“An announcement from Mt Lemmon Observatory (Arizona) is made of the discovery”\nWhat do you do?\n[We have only a rough idea of the certainty of impact: Year ~2100 <1%]",
    isEnd: false,
  },
  {
    id: "StartA",
    description:
      "[Intermediate Screen]\n“More research is done, we understand the issue better”\nExpected Impact: more specific date and impact scenario",
    isEnd: false,
  },
  {
    id: "StartB",
    description: "Public response is not positive..\nSpend time/money on PR?",
    isEnd: false,
  },
  {
    id: "StartC",
    description: "blah",
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
];

const edges = [
  {
    from: "StartScreen",
    to: "StartA",
    optionText: "Investigate Further",
    effectDesc:
      "More resources are put towards research efforts, new observations are recorded, prediction confidence increases!",
    time: 3,
    money: -15,
    reputation: 0,
    defense: 0,
    research: 0,
    effects: 0,
  },
  {
    from: "StartScreen",
    to: "StartB",
    optionText: "Tell the Media",
    effectDesc:
      "A media package is released to publishers, news spreads online, people are uneasy",
    time: 0.5,
    money: 0,
    reputation: -10,
    defense: 0,
    research: 0,
    effects: 0,
  },
  {
    from: "StartScreen",
    to: "StartC",
    optionText: "Do nothing, it'll all be fine.",
    effectDesc: "Life continues as it always has...",
    time: 5,
    money: 0,
    reputation: -10,
    defense: 0,
    research: 0,
    effects: 0,
  },
];

export { nodes, edges };
