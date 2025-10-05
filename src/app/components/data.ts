const nodes = [
  {
    id: "StartScreen",
    description:
      "Establishing Scene:\nIt is late-2016 - date of discovery\n“An announcement from Mt Lemmon Observatory (Arizona) is made of the discovery”\nWhat do you do?\n[We have only a rough idea of the certainty of impact: Year ~2100 <1%]",
    isEnd: false,
    factText:
      "It is very hard to predict the path of an asteroid as soon as it has been discovered - these objects travel at several kilometers per second, and over such long times and distances\nOrbital space missions can take many years to plan, and many more to achieve a goal.\n“For a hypothetical Earth-threatening body, even such a tiny change could be sufficient to mitigate or prevent an impact, if applied early enough. As the diameter of Earth is around 13,000 kilometers, a hypothetical asteroid impact could be avoided with as little of a shift as half of that (6,500 kilometers). A 2cm/s velocity change accumulates to that distance in approximately 10 years.” \n [wikipedia https://w.wiki/FYHx]",
  },
  {
    id: "A_Impact",
    description:
      "[Intermediate Screen]\n“More research is done, we understand the issue better”\nExpected Impact: more specific date and impact scenario",
    isEnd: false,
    factText:
      "Making more observations over a longer time period increase the accuracy and precision of measurements significantly.\nObjects in space tend to move very slowly compared to the observer’s view - 10 weekly measurements can give much more information than 10 hourly measurements\nInitial predictions may be uncertain if something will even end up on earth - refined measurements may give impact predictions to within",
  },
  {
    id: "PubResponse",
    description: "Public response is not positive..\nSpend time/money on PR?",
    isEnd: false,
    factText:
      " “Scientists discover time-traveling particles!” News media often exaggerate scientific outcomes, warping the truth and creating distrust in science when corrections are made.",
  },
  {
    id: "NothingA",
    description:
      "An Amateur astronomer discovers it from their backyard and figures out it will impact\nPublic Fear!",
    isEnd: false,
    factText:
      "Independent researchers contribute significantly to many scientific fields!\nResearchers often compete for access to resources (eg. telescope time) and are more focused on a particular goal.\nMinor Planets and asteroids can often be found in past images and data after being officially discovered.\n[https://science.nasa.gov/citizen-science/five-extraordinary-citizen-science-discoveries]",
  },
  {
    id: "SlowResearch",
    description: "Research is slow\nPublic support is difficult to maintain",
    isEnd: false,
    factText:
      "If people already have strong opinions on a topic or research area, it can be difficult to win back support.\nScience isnt about having the most popular outcomes, but raw facts aren’t often enough to change public opinion",
  },
  {
    id: "ImpactKnown",
    description:
      "Impact is certain\nThe world is in panic, although many decades remain until impact\nWhat do we do?",
    isEnd: false,
    factText:
      "Publicising information that could create fear and negative feelings in the public must be managed alongside assuring news of plans and solutions",
  },
  {
    id: "CountriesA",
    description:
      "Other Countries come across the observing data.\nWord comes out that you haven’t acted.\nThey begin their own plans",
    isEnd: false,
    factText:
      "International politics can be a significant factor in decision making and progress\nSharing knowledge and intent allows others to understand the situation more clearly",
  },

  {
    id: "UNint",
    description:
      "[Intermediate Screen]\nThe world comes together to discuss a solution\nDue to the disapproval of your country, there is little trust in your confidence.\nNo consensus is reached.",
    isEnd: false,
    factText: "",
  },
  {
    id: "Volunt",
    description:
      "[Other Country] volunteers to aid in R&D\nWe’ll send a rocket to intercept it, knocking it off course!\nBut do we send it now, or wait until its closer?",
    isEnd: false,
    factText:
      "The earlier that action is made, the less needs to be done to change an objects path in space\nA very minor nudge could result in an object passing by harmlessly millions of kilometers away instead of colliding with the earth, if done many years/orbits ahead of schedule",
  },
  {
    id: "devA",
    description: "Development begins...",
    isEnd: false,
    factText:
      "This Asteroid takes about 4.5 years to go around the sun, it is often safer and more efficient to wait for particular times in their orbital path to launch a probe and plan maneuvers.",
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
    id: "OfferNo",
    description:
      "No consensus is reached...\nOther countries begin independent efforts...",
    isEnd: false,
  },

  {
    id: "theBadEnding",
    description:
      "No action was taken in time, [the asteroid destroy the city it was headed towards]\n[or another country/ies saved the world]",
    isEnd: true,
  },

  {
    id: "win",
    description:
      "Crisis Averted!\nThe asteroid's path has been diverted, and the Earth has been saved",
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
    to: "NothingA",
    optionText: "Do Nothing...",
    effectDesc: "It'll all be fine... Nothing ever happens..",
    time: 2,
    money: 0,
    reputation: 0,
    defense: 0,
    research: 0,
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
    from: "PubResponse",
    to: "NothingA",
    optionText: "Tell them it will all be fine...",
    effectDesc: ". . .",
    time: 3,
    money: 0,
    reputation: -5,
    defense: 0,
    research: 0,
  },
  {
    from: "PubResponse",
    to: "A_Impact",
    optionText: "Work on PR image and start researching?",
    effectDesc: ". . .",
    time: -20,
    money: 0,
    reputation: 5,
    defense: 0,
    research: 0,
  },
  {
    from: "NothingA",
    to: "SlowResearch",
    optionText: "Admit you knew - Start acting on it",
    effectDesc: ". . .",
    time: 2,
    money: -20,
    reputation: 5,
    defense: 5,
    research: 5,
  },
  {
    from: "NothingA",
    to: "CountriesA",
    optionText: "Call their Bluff and do nothing",
    effectDesc: ". . .",
    time: 5,
    money: 0,
    reputation: -10,
    defense: 0,
    research: 0,
  },

  {
    from: "CountriesA",
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
    to: "CountriesA",
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
    from: "Offer",
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
    from: "Offer",
    to: "LateResearch",
    optionText: "Agree to help",
    effectDesc: ". . .",
    time: 2,
    money: -5,
    reputation: +5,
    defense: 5,
    research: 5,
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
    from: "ImpactKnown",
    to: "CountriesA",
    optionText: "Continue Researching?",
    effectDesc: ". . .",
    time: 2,
    money: -15,
    reputation: -5,
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
    from: "Launch",
    to: "win",
    optionText: "Next!",
    effectDesc: " . . .",
    time: 0,
    money: 0,
    reputation: 0,
    defense: 0,
    research: 0,
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
    research: 0,
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
