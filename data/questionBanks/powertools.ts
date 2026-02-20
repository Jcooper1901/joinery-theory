export type QuizQuestion = {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
};

export const powertoolsQuestions: QuizQuestion[] = [
  {
    id: "PT-Q-001",
    question: "Which planer bed sets how much material is removed?",
    options: [
      "The guard",
      "The infeed bed",
      "The outfeed bed",
      "The fence"
    ],
    correctIndex: 1,
    explanation: "The front adjustable bed controls depth."
  },
  {
    id: "PT-Q-002",
    question: "The outfeed bed is normally:",
    options: [
      "Adjustable",
      "Fixed",
      "Removable",
      "Spring loaded"
    ],
    correctIndex: 1,
    explanation: "It supports the finished surface."
  },
  {
    id: "PT-Q-003",
    question: "Planer cutters are commonly known as:",
    options: [
      "Blades",
      "Knives",
      "Bits",
      "Teeth"
    ],
    correctIndex: 1,
    explanation: "That is the standard term."
  },
  {
    id: "PT-Q-004",
    question: "Most planer knives usually have how many edges?",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correctIndex: 1,
    explanation: "They can be turned when blunt."
  },
  {
    id: "PT-Q-005",
    question: "Before changing knives you must:",
    options: [
      "Check depth",
      "Disconnect power",
      "Clean timber",
      "Adjust fence"
    ],
    correctIndex: 1,
    explanation: "Never work on live equipment."
  },
  {
    id: "PT-Q-006",
    question: "What is loosened to remove planer knives?",
    options: [
      "The guard",
      "The bolts",
      "The switch",
      "The bed"
    ],
    correctIndex: 1,
    explanation: "They clamp the knife assembly."
  },
  {
    id: "PT-Q-007",
    question: "Before fitting knives you should remove:",
    options: [
      "Oil",
      "Dust and resin",
      "Paint",
      "Grease"
    ],
    correctIndex: 1,
    explanation: "Clean seating ensures accuracy."
  },
  {
    id: "PT-Q-008",
    question: "Knife alignment is achieved using:",
    options: [
      "Magnets",
      "Pins",
      "Glue",
      "Tape"
    ],
    correctIndex: 1,
    explanation: "The holes locate over them."
  },
  {
    id: "PT-Q-009",
    question: "After positioning the knife you must:",
    options: [
      "Oil it",
      "Fully tighten bolts",
      "Spin by hand",
      "Test cut"
    ],
    correctIndex: 1,
    explanation: "Loose knives are dangerous."
  },
  {
    id: "PT-Q-010",
    question: "Taking too deep a cut may result in:",
    options: [
      "Smooth finish",
      "Chatter marks",
      "Cleaner edges",
      "Less noise"
    ],
    correctIndex: 1,
    explanation: "Heavy cuts cause vibration."
  },
  {
    id: "PT-Q-011",
    question: "Large pitch marks are caused by:",
    options: [
      "Slow feed",
      "Fast travel speed",
      "Sharp knives",
      "Light cuts"
    ],
    correctIndex: 1,
    explanation: "Moving too fast creates bumps."
  },
  {
    id: "PT-Q-012",
    question: "Tear out is often due to:",
    options: [
      "Slow cutting",
      "Feeding too fast",
      "Sharp tools",
      "Short passes"
    ],
    correctIndex: 1,
    explanation: "Speed damages fibres."
  },
  {
    id: "PT-Q-013",
    question: "End grain breakout happens as the cutter:",
    options: [
      "Starts",
      "Exits the timber",
      "Slows down",
      "Warms up"
    ],
    correctIndex: 1,
    explanation: "Support is lost at the end."
  },
  {
    id: "PT-Q-014",
    question: "To prevent splitting, the first short cut is about:",
    options: [
      "5 mm",
      "20 mm",
      "50 mm",
      "100 mm"
    ],
    correctIndex: 1,
    explanation: "This forms a relief."
  },
  {
    id: "PT-Q-015",
    question: "Damaged planer knives often leave:",
    options: [
      "Burns",
      "Raised lines",
      "Wet patches",
      "Dust piles"
    ],
    correctIndex: 1,
    explanation: "Sometimes called tram lines."
  },
  {
    id: "PT-Q-016",
    question: "Many planer knives are made from:",
    options: [
      "Brass",
      "Tungsten carbide",
      "Aluminium",
      "Plastic"
    ],
    correctIndex: 1,
    explanation: "Hard but brittle material."
  },
  {
    id: "PT-Q-017",
    question: "A bevel cut runs:",
    options: [
      "Part way",
      "Fully across",
      "In a curve",
      "At random"
    ],
    correctIndex: 1,
    explanation: "It creates two edges."
  },
  {
    id: "PT-Q-018",
    question: "A chamfer normally uses:",
    options: [
      "Two edges",
      "One edge",
      "No edges",
      "Four edges"
    ],
    correctIndex: 1,
    explanation: "It is smaller than a bevel."
  },
  {
    id: "PT-Q-019",
    question: "A rebate requires which accessory?",
    options: [
      "Guard",
      "Side fence",
      "Clamp",
      "Rail"
    ],
    correctIndex: 1,
    explanation: "It guides the depth and width."
  },
  {
    id: "PT-Q-020",
    question: "If a rebate is too deep you should:",
    options: [
      "Push harder",
      "Use multiple passes",
      "Speed up",
      "Tilt the tool"
    ],
    correctIndex: 1,
    explanation: "Build to the final size."
  },
  {
    id: "PT-Q-021",
    question: "Which planer bed supports the timber after it has been cut?",
    options: [
      "Infeed bed",
      "Fence",
      "Outfeed bed",
      "Guard"
    ],
    correctIndex: 2,
    explanation: "The rear bed supports the finished surface."
  },
  {
    id: "PT-Q-022",
    question: "If one edge of a disposable knife becomes blunt you should:",
    options: [
      "Sharpen it",
      "Replace the machine",
      "Turn it around",
      "Reduce speed"
    ],
    correctIndex: 2,
    explanation: "Most knives have two edges."
  },
  {
    id: "PT-Q-023",
    question: "What is unsafe when changing planer knives?",
    options: [
      "Cleaning resin",
      "Working while connected",
      "Using gloves",
      "Turning the blade"
    ],
    correctIndex: 1,
    explanation: "Power must be disconnected."
  },
  {
    id: "PT-Q-024",
    question: "What should be cleaned before reinstalling a knife?",
    options: [
      "Drive belt",
      "Switch",
      "Seating areas",
      "Cable"
    ],
    correctIndex: 2,
    explanation: "Dirt affects accuracy."
  },
  {
    id: "PT-Q-025",
    question: "What happens if fixing bolts are left loose?",
    options: [
      "Better finish",
      "Reduced noise",
      "Dangerous movement",
      "Slower cutting"
    ],
    correctIndex: 2,
    explanation: "The knife may shift."
  },
  {
    id: "PT-Q-026",
    question: "Good practice maximum planer cut depth is around:",
    options: [
      "10 mm",
      "2 mm",
      "6 mm",
      "15 mm"
    ],
    correctIndex: 1,
    explanation: "Use several passes instead."
  },
  {
    id: "PT-Q-027",
    question: "Machine jumping during planing usually indicates:",
    options: [
      "Blunt pencil",
      "Deep cut",
      "Low voltage",
      "Wet timber"
    ],
    correctIndex: 1,
    explanation: "Heavy cuts cause chatter."
  },
  {
    id: "PT-Q-028",
    question: "Moving too quickly with a planer can create:",
    options: [
      "Gloss finish",
      "Pitch marks",
      "Long fibres",
      "Flat spots"
    ],
    correctIndex: 1,
    explanation: "Fast travel causes bumps."
  },
  {
    id: "PT-Q-029",
    question: "Surface fibre damage from fast feeding is called:",
    options: [
      "Chamfering",
      "Bevelling",
      "Tear out",
      "Feathering"
    ],
    correctIndex: 2,
    explanation: "Speed can rip fibres."
  },
  {
    id: "PT-Q-030",
    question: "Where is end grain most likely to split?",
    options: [
      "Middle",
      "Start",
      "Finishing end",
      "Along the face"
    ],
    correctIndex: 2,
    explanation: "It happens as the cutter exits."
  },
  {
    id: "PT-Q-031",
    question: "Why make a short relief cut first?",
    options: [
      "Increase speed",
      "Reduce noise",
      "Prevent breakout",
      "Warm the tool"
    ],
    correctIndex: 2,
    explanation: "It protects the final edge."
  },
  {
    id: "PT-Q-032",
    question: "Tram lines usually mean:",
    options: [
      "Wet timber",
      "Poor lighting",
      "Damaged knives",
      "Low power"
    ],
    correctIndex: 2,
    explanation: "Edges may be chipped."
  },
  {
    id: "PT-Q-033",
    question: "Why must hidden staples be avoided?",
    options: [
      "They polish knives",
      "They slow feed",
      "They chip edges",
      "They cool blades"
    ],
    correctIndex: 2,
    explanation: "Carbide is brittle."
  },
  {
    id: "PT-Q-034",
    question: "How many corner edges are formed by a bevel?",
    options: [
      "One",
      "Two",
      "Three",
      "None"
    ],
    correctIndex: 1,
    explanation: "It runs across the surface."
  },
  {
    id: "PT-Q-035",
    question: "A chamfer should normally:",
    options: [
      "Cross fully",
      "Use one edge",
      "Be stepped",
      "Be curved"
    ],
    correctIndex: 1,
    explanation: "It is smaller than a bevel."
  },
  {
    id: "PT-Q-036",
    question: "Trying to rebate freehand can lead to:",
    options: [
      "Better finish",
      "Loss of accuracy",
      "Faster work",
      "Cleaner edges"
    ],
    correctIndex: 1,
    explanation: "Guidance is required."
  },
  {
    id: "PT-Q-037",
    question: "A planer removes stock:",
    options: [
      "Very slowly",
      "Very quickly",
      "Only sideways",
      "Only lightly"
    ],
    correctIndex: 1,
    explanation: "Depth must be controlled."
  },
  {
    id: "PT-Q-038",
    question: "What fits into the wedge bar holes?",
    options: [
      "Screws",
      "Pins",
      "Nails",
      "Plates"
    ],
    correctIndex: 1,
    explanation: "They align the knife."
  },
  {
    id: "PT-Q-039",
    question: "If you want more than 2 mm removed you should:",
    options: [
      "Force it",
      "Use several passes",
      "Increase speed",
      "Tilt machine"
    ],
    correctIndex: 1,
    explanation: "Heavy cuts damage finish."
  },
  {
    id: "PT-Q-040",
    question: "Fluffy surfaces after planing suggest:",
    options: [
      "Sharp knives",
      "Damaged knives",
      "Correct speed",
      "Dry timber"
    ],
    correctIndex: 1,
    explanation: "Edges may be worn."
  },
  {
    id: "PT-Q-041",
    question: "Which planer bed controls how much material is removed?",
    options: ["Outfeed bed", "Rear bed", "Infeed bed", "Base plate"],
    correctIndex: 2,
    explanation: "The front (infeed) bed is adjustable and sets the depth of cut."
  },
  {
    id: "PT-Q-042",
    question: "Planer knives are often:",
    options: ["Single-edged only", "Disposable", "Made from wood", "Always resharpened by hand"],
    correctIndex: 1,
    explanation: "Many planer knives are disposable and have two usable edges."
  },
  {
    id: "PT-Q-043",
    question: "What must you do before any planer knife change?",
    options: ["Tighten the fence", "Disconnect from the power", "Increase the depth", "Clamp the timber"],
    correctIndex: 1,
    explanation: "Never work on live equipment—disconnect the power first."
  },
  {
    id: "PT-Q-044",
    question: "To remove old planer knives you should:",
    options: ["Loosen the fixing bolts", "Hammer the knife out", "Cut the wedge bar", "Twist the base"],
    correctIndex: 0,
    explanation: "The bolts are loosened so the knife and wedge bar can slide out."
  },
  {
    id: "PT-Q-045",
    question: "Before fitting a knife, what should be removed?",
    options: ["Glue and varnish", "Dust and resin", "Rust and paint", "Water and oil"],
    correctIndex: 1,
    explanation: "Dust and resin must be cleaned from seating areas and wedge bars."
  },
  {
    id: "PT-Q-046",
    question: "What helps position a planer knife accurately?",
    options: ["Pins in the wedge bar", "A push stick", "The outfeed bed", "The power cable"],
    correctIndex: 0,
    explanation: "Small holes in the knife locate onto pins for accurate alignment."
  },
  {
    id: "PT-Q-047",
    question: "If bolts are not fully tightened after fitting knives, the main risk is:",
    options: ["A quieter cut", "Loss of grip", "Knife movement", "Extra resin build-up"],
    correctIndex: 2,
    explanation: "Bolts must be fully tightened to secure the assembly in the block."
  },
  {
    id: "PT-Q-048",
    question: "Taking heavy cuts with a planer is most likely to cause:",
    options: ["Chatter marks", "Better finish", "More stability", "Lower vibration"],
    correctIndex: 0,
    explanation: "Heavy deep cuts can make the planer jump and leave chatter marks."
  },
  {
    id: "PT-Q-049",
    question: "Large pitch marks are caused by:",
    options: ["Too slow travel speed", "High travel speed", "Too sharp knives", "Too much cleaning"],
    correctIndex: 1,
    explanation: "Moving too fast can create bumps and hollows known as pitch marks."
  },
  {
    id: "PT-Q-050",
    question: "Fast feeding with a planer can also cause:",
    options: ["Tear out", "Hardening", "Stronger joints", "Improved glue strength"],
    correctIndex: 0,
    explanation: "Moving too quickly can damage surface fibres and cause tear out."
  },
  {
    id: "PT-Q-051",
    question: "End grain splitting during trimming is most likely when:",
    options: ["The cutter exits the timber", "The machine is unplugged", "Knives are cleaned", "The outfeed bed is fixed"],
    correctIndex: 0,
    explanation: "Splitting often occurs at the outfeed end as the cutter exits the work."
  },
  {
    id: "PT-Q-052",
    question: "To prevent end grain splitting the first step is to:",
    options: ["Plane full length immediately", "Make a short cut at the finishing end", "Increase depth to 5 mm", "Use climb cutting"],
    correctIndex: 1,
    explanation: "A short relief cut of about 20 mm is made at the finishing end first."
  },
  {
    id: "PT-Q-053",
    question: "How long is the short relief cut used to prevent splitting?",
    options: ["About 5 mm", "About 20 mm", "About 200 mm", "About 300 mm"],
    correctIndex: 1,
    explanation: "The guidance states the first cut is about 20 mm long."
  },
  {
    id: "PT-Q-054",
    question: "After the short cut, the correct next step is to:",
    options: ["Stop before the cut line", "Return and plane full length past the first cut", "Turn the timber over", "Increase the feed speed"],
    correctIndex: 1,
    explanation: "Plane from the starting end and run through past the relief cut to remove breakout risk."
  },
  {
    id: "PT-Q-055",
    question: "Raised lines along a planed surface usually indicate:",
    options: ["Correct depth", "Damaged knives", "Perfect feed rate", "High timber moisture"],
    correctIndex: 1,
    explanation: "Tram lines are a common sign of damaged knives."
  },
  {
    id: "PT-Q-056",
    question: "Planer knives are often made from:",
    options: ["Tungsten carbide", "Aluminium", "Plastic resin", "Copper"],
    correctIndex: 0,
    explanation: "Tungsten carbide knives are common but very brittle."
  },
  {
    id: "PT-Q-057",
    question: "Why can staples cause planing problems?",
    options: ["They reduce cutting speed", "They chip the knife edge", "They lubricate the cut", "They flatten the timber"],
    correctIndex: 1,
    explanation: "Carbide is brittle and staples can chip the edge, leaving lines."
  },
  {
    id: "PT-Q-058",
    question: "A bevel made with a planer:",
    options: ["Uses one corner edge", "Runs only on the edge", "Runs fully across the surface", "Always makes a curved shape"],
    correctIndex: 2,
    explanation: "A bevel runs fully across the surface and forms two corner edges."
  },
  {
    id: "PT-Q-059",
    question: "A chamfer made with a planer:",
    options: ["Runs part way across the surface", "Always crosses fully", "Uses two corner edges", "Cannot be guided"],
    correctIndex: 0,
    explanation: "A chamfer runs part way across and uses one corner edge."
  },
  {
    id: "PT-Q-060",
    question: "A rebate made with a planer is best guided using:",
    options: ["A side fence", "Freehand pressure", "A trammel", "A guide bush"],
    correctIndex: 0,
    explanation: "Rebates require the side fence for controlled guidance."
  },
  {
    id: "PT-Q-061",
    question: "If a rebate is too deep for one cut you should:",
    options: ["Use one heavy pass", "Make several passes to final depth", "Increase cutter size beyond limits", "Cut past the fence"],
    correctIndex: 1,
    explanation: "Deep rebates are built in stages using several smaller cuts."
  },
  {
    id: "PT-Q-062",
    question: "Which statement about routers is correct?",
    options: ["Routers are only for edges", "Routers perform many operations", "Routers only cut circles", "Routers cannot cut rebates"],
    correctIndex: 1,
    explanation: "Routers are described as one of the most versatile tools."
  },
  {
    id: "PT-Q-063",
    question: "Which of these is a job a router can do?",
    options: ["Cut grooves", "Season timber", "Stress grade timber", "Debark trunks"],
    correctIndex: 0,
    explanation: "Routers can cut grooves, rebates, housings, circles, and profiles."
  },
  {
    id: "PT-Q-064",
    question: "The router cutter is held in the:",
    options: ["Fence", "Collet", "Turret", "Guard"],
    correctIndex: 1,
    explanation: "The cutter connects to the motor and is held in a collet."
  },
  {
    id: "PT-Q-065",
    question: "Router cuts are controlled using:",
    options: ["Fences and guide bushes", "Infeed beds and outfeed beds", "Piling sticks and bearers", "Knots and shakes"],
    correctIndex: 0,
    explanation: "Fences guide position and guide bushes control the path."
  },
  {
    id: "PT-Q-066",
    question: "Large router cutters should generally run:",
    options: ["Faster", "Slower", "At one fixed speed always", "Only above 22000 rpm"],
    correctIndex: 1,
    explanation: "Large cutters must run slower to maintain safe rpm and control."
  },
  {
    id: "PT-Q-067",
    question: "A typical router speed range is about:",
    options: ["500–2000 rpm", "10000–22000 rpm", "22000–50000 rpm", "100–500 rpm"],
    correctIndex: 1,
    explanation: "The typical range is about 10000 to 22000 rpm."
  },
  {
    id: "PT-Q-068",
    question: "What does a soft start feature do?",
    options: ["Stops instantly", "Builds speed gradually", "Increases cutter diameter", "Locks the depth automatically"],
    correctIndex: 1,
    explanation: "Soft start reduces the sudden jolt and improves control."
  },
  {
    id: "PT-Q-069",
    question: "When starting a router, the cutter should:",
    options: ["Be touching the timber", "Be clear of the work", "Be locked into the fence", "Be plunged fully down"],
    correctIndex: 1,
    explanation: "Do not start the router with the cutter touching the work."
  },
  {
    id: "PT-Q-070",
    question: "Modern routers often have braking so the cutter stops:",
    options: ["In seconds", "In 5 minutes", "Only when unplugged", "Only when cooled"],
    correctIndex: 0,
    explanation: "Modern routers brake quickly within seconds."
  },
  {
    id: "PTX-001",
    question: "Why are power tools popular in site carpentry?",
    options: [
      "They remove the need for thinking",
      "They always require no setup",
      "They help work faster with good finish",
      "They are lighter than hand tools"
    ],
    correctIndex: 2,
    explanation: "They increase speed and help achieve better finishes."
  },
  {
    id: "PTX-002",
    question: "Which responsibility is required besides using the tool?",
    options: [
      "Painting it weekly",
      "Maintaining and inspecting it",
      "Sharpening every day",
      "Replacing it monthly"
    ],
    correctIndex: 1,
    explanation: "Tools must be maintained and inspected."
  },
  {
    id: "PTX-003",
    question: "Why might a professional choose a good brand?",
    options: [
      "Because it is colourful",
      "Because it is heavier",
      "Because it is cheaper long term",
      "Because it needs no repair"
    ],
    correctIndex: 2,
    explanation: "Quality tools often cost less over time."
  },
  {
    id: "PTX-004",
    question: "What must match the power supply?",
    options: [
      "The operator",
      "The battery colour",
      "The tool being used",
      "The job price"
    ],
    correctIndex: 2,
    explanation: "Always confirm the tool matches the available supply."
  },
  {
    id: "PTX-005",
    question: "Why is site voltage often reduced to 110 V?",
    options: [
      "To save electricity",
      "To reduce shock risk",
      "To make tools lighter",
      "To improve speed"
    ],
    correctIndex: 1,
    explanation: "Lower voltage helps reduce danger of fatal electric shock."
  },
  {
    id: "PTX-006",
    question: "What colour identifies 415 V sockets?",
    options: ["Blue", "Yellow", "White", "Red"],
    correctIndex: 3,
    explanation: "Three-phase workshop sockets are red."
  },
  {
    id: "PTX-007",
    question: "What does an RCD do during a fault?",
    options: [
      "Speeds the motor",
      "Cuts off the supply",
      "Strengthens the cable",
      "Locks the switch"
    ],
    correctIndex: 1,
    explanation: "It trips and disconnects the power."
  },
  {
    id: "PTX-008",
    question: "What is the purpose of double insulation?",
    options: [
      "Improves tool weight",
      "Separates live parts from casing",
      "Makes charging faster",
      "Prevents overheating"
    ],
    correctIndex: 1,
    explanation: "It keeps electrical components away from the outer body."
  },
  {
    id: "PTX-009",
    question: "Where should the transformer normally be placed?",
    options: [
      "Beside the tool",
      "Near the mains supply",
      "At the cutting line",
      "Outside the building"
    ],
    correctIndex: 1,
    explanation: "Run 110 V from the transformer to the tool."
  },
  {
    id: "PTX-010",
    question: "Why should extension leads be stored neatly?",
    options: [
      "So they look tidy only",
      "To make them longer",
      "To reduce damage and trip risks",
      "So they coil faster"
    ],
    correctIndex: 2,
    explanation: "Neat storage prevents hazards."
  },
  {
    id: "PTX-011",
    question: "Why must a lead be fully uncoiled?",
    options: [
      "To make it lighter",
      "To prevent overheating",
      "To improve voltage",
      "To reduce noise"
    ],
    correctIndex: 1,
    explanation: "Coiled leads can overheat and cause fire."
  },
  {
    id: "PTX-012",
    question: "What helps protect leads in walkways?",
    options: [
      "Cable ties",
      "Paint markings",
      "Lead sleeves",
      "Extra tape"
    ],
    correctIndex: 2,
    explanation: "Sleeves protect cables and reduce trips."
  },
  {
    id: "PTX-013",
    question: "Higher battery voltage means:",
    options: [
      "More run time",
      "More charging",
      "More power",
      "Less weight"
    ],
    correctIndex: 2,
    explanation: "Voltage relates to power output."
  },
  {
    id: "PTX-014",
    question: "Higher amp rating means:",
    options: [
      "Longer use before charging",
      "Higher cutting speed",
      "More torque",
      "More noise"
    ],
    correctIndex: 0,
    explanation: "Amp hours relate to run time."
  },
  {
    id: "PTX-015",
    question: "Why are two batteries normally needed?",
    options: [
      "To increase weight",
      "To double the voltage",
      "So one can charge while one is used",
      "To prevent overheating"
    ],
    correctIndex: 2,
    explanation: "Keeps you working without downtime."
  },
  {
    id: "PTX-016",
    question: "Can batteries always fit different brands?",
    options: [
      "Yes always",
      "Only on new tools",
      "No they usually cannot",
      "Only with adapters"
    ],
    correctIndex: 2,
    explanation: "Most manufacturers use their own systems."
  },
  {
    id: "PTX-017",
    question: "What ignites the gas in a gas nailer?",
    options: [
      "Air pressure",
      "A battery spark",
      "Friction",
      "Heat from timber"
    ],
    correctIndex: 1,
    explanation: "The battery creates the ignition spark."
  },
  {
    id: "PTX-018",
    question: "How must gas canisters be disposed of?",
    options: [
      "Burn them",
      "Throw in scrap",
      "Follow manufacturer guidance",
      "Crush them"
    ],
    correctIndex: 2,
    explanation: "Improper disposal is dangerous."
  },
  {
    id: "PTX-019",
    question: "Where is compressed air mainly found?",
    options: [
      "Domestic houses",
      "Workshops",
      "Roof spaces",
      "Vehicles"
    ],
    correctIndex: 1,
    explanation: "Air systems are usually workshop based."
  },
  {
    id: "PTX-020",
    question: "Why should airlines never be blown at people?",
    options: [
      "They are dirty",
      "They damage clothing",
      "They can be fatal",
      "They waste air"
    ],
    correctIndex: 2,
    explanation: "Air entering the bloodstream can kill."
  },
  {
    id: "PTX-021",
    question: "What is the main benefit of hiring tools?",
    options: [
      "They never break",
      "They remove training needs",
      "They can reduce long term cost",
      "They use less electricity"
    ],
    correctIndex: 2,
    explanation: "Hiring can be cheaper than buying."
  },
  {
    id: "PTX-022",
    question: "What is a common mistake about fast work?",
    options: [
      "Thinking setup is still important",
      "Thinking speed removes setup care",
      "Checking tools too often",
      "Using the manual"
    ],
    correctIndex: 1,
    explanation: "Speed never replaces correct setup."
  },
  {
    id: "PTX-023",
    question: "What colour plug is used for 110 V?",
    options: ["Yellow", "Blue", "Red", "Black"],
    correctIndex: 0,
    explanation: "110 V site equipment uses yellow plugs."
  },
  {
    id: "PTX-024",
    question: "What is the main risk of 230 V?",
    options: [
      "Slow speed",
      "Overheating",
      "Electrocution",
      "Tool wear"
    ],
    correctIndex: 2,
    explanation: "Higher voltage increases shock danger."
  },
  {
    id: "PTX-025",
    question: "What should you do with damaged PPE?",
    options: [
      "Tape it",
      "Ignore small damage",
      "Replace it",
      "Use it carefully"
    ],
    correctIndex: 2,
    explanation: "Damaged PPE must be replaced."
  },
  {
    id: "PTX-026",
    question: "What must you check on eye protection?",
    options: [
      "The colour",
      "The weight",
      "That you like it",
      "It is clear"
    ],
    correctIndex: 3,
    explanation: "Vision must not be impaired."
  },
  {
    id: "PTX-027",
    question: "What should happen if the tool casing is cracked?",
    options: [
      "Carry on carefully",
      "Report and remove it",
      "Tape it up",
      "Use it once more"
    ],
    correctIndex: 1,
    explanation: "Damaged tools must not be used."
  },
  {
    id: "PTX-028",
    question: "If a plug is loose or damaged you should:",
    options: [
      "Tighten it yourself",
      "Ignore it",
      "Use another socket",
      "Take it out of service"
    ],
    correctIndex: 3,
    explanation: "Faulty electrics require proper repair."
  },
  {
    id: "PTX-029",
    question: "Can a tool be used with missing guards?",
    options: [
      "Yes if careful",
      "Yes for quick cuts",
      "No",
      "Only by supervisors"
    ],
    correctIndex: 2,
    explanation: "Never use without guards."
  },
  {
    id: "PTX-030",
    question: "What condition must tooling be in?",
    options: [
      "Clean only",
      "New",
      "Sharp and suitable",
      "Expensive"
    ],
    correctIndex: 2,
    explanation: "Blunt or wrong tooling is dangerous."
  },
  {
    id: "PTX-031",
    question: "If start or stop controls fail you must:",
    options: [
      "Finish the cut",
      "Press harder",
      "Report and stop",
      "Switch sockets"
    ],
    correctIndex: 2,
    explanation: "Faulty controls are unsafe."
  },
  {
    id: "PTX-032",
    question: "What if there is no PAT label?",
    options: [
      "Use anyway",
      "Use with RCD",
      "Test it yourself",
      "Do not use"
    ],
    correctIndex: 3,
    explanation: "PAT confirms electrical safety."
  },
  {
    id: "PTX-033",
    question: "PPE choice depends on:",
    options: [
      "Only the tool",
      "Only the supervisor",
      "Several job factors",
      "Personal comfort"
    ],
    correctIndex: 2,
    explanation: "Material, place and duration all matter."
  },
  {
    id: "PTX-034",
    question: "What removes dust at the source?",
    options: [
      "A broom",
      "LEV",
      "Opening a window",
      "A fan"
    ],
    correctIndex: 1,
    explanation: "Local exhaust ventilation extracts dust."
  },
  {
    id: "PTX-035",
    question: "If noise cannot be reduced you must:",
    options: [
      "Stop work",
      "Wear ear protection",
      "Move faster",
      "Close doors"
    ],
    correctIndex: 1,
    explanation: "Hearing protection is required."
  },
  {
    id: "PTX-036",
    question: "Are safety glasses required for small jobs?",
    options: [
      "No",
      "Only outside",
      "Yes",
      "Only when cutting metal"
    ],
    correctIndex: 2,
    explanation: "Eye protection is basic PPE."
  },
  {
    id: "PTX-037",
    question: "Why wear close fitting gloves?",
    options: [
      "For fashion",
      "To prevent slips and splinters",
      "To grip controls",
      "To stay warm"
    ],
    correctIndex: 1,
    explanation: "They protect hands without snagging."
  },
  {
    id: "PTX-038",
    question: "When is hi-vis needed?",
    options: [
      "During rain",
      "Where traffic is present",
      "Inside buildings",
      "At night only"
    ],
    correctIndex: 1,
    explanation: "It improves visibility around vehicles."
  },
  {
    id: "PTX-039",
    question: "How can vibration exposure be reduced?",
    options: [
      "Work faster",
      "Hold tighter",
      "Limit time and rotate tasks",
      "Increase speed"
    ],
    correctIndex: 2,
    explanation: "Breaks reduce HAVS risk."
  },
  {
    id: "PTX-040",
    question: "Before work you should check:",
    options: [
      "The weather",
      "Your phone",
      "The risk assessment",
      "Other trades"
    ],
    correctIndex: 2,
    explanation: "It states precautions and PPE."
  },
  {
    id: "PTX-041",
    question: "Power tools are dangerous, so safe practice is:",
    options: [
      "Optional",
      "Only for beginners",
      "A legal requirement",
      "Up to the supervisor"
    ],
    correctIndex: 2,
    explanation: "Working safely is required by law."
  },
  {
    id: "PTX-042",
    question: "Loose clothing near cutters is:",
    options: [
      "Recommended",
      "Acceptable in heat",
      "Safer with gloves",
      "Not allowed"
    ],
    correctIndex: 3,
    explanation: "It can catch and pull you in."
  },
  {
    id: "PTX-043",
    question: "Before changing tooling you must:",
    options: [
      "Increase speed",
      "Disconnect power",
      "Hold the trigger",
      "Wear gloves"
    ],
    correctIndex: 1,
    explanation: "Always isolate the supply first."
  },
  {
    id: "PTX-044",
    question: "Which tools are relied on daily?",
    options: [
      "Planers",
      "Breakers",
      "Drill/drivers and impacts",
      "Pillar drills"
    ],
    correctIndex: 2,
    explanation: "They are core kit for most trades."
  },
  {
    id: "PTX-045",
    question: "A keyless chuck needs:",
    options: [
      "A spanner",
      "A hex key",
      "No key",
      "A hammer"
    ],
    correctIndex: 2,
    explanation: "It tightens by hand."
  },
  {
    id: "PTX-046",
    question: "SDS bits grip well because of:",
    options: [
      "Magnets",
      "Grooves",
      "Extra weight",
      "Higher speed"
    ],
    correctIndex: 1,
    explanation: "Slots prevent slipping."
  },
  {
    id: "PTX-047",
    question: "What part of the bit goes in the chuck?",
    options: [
      "The flute",
      "The tip",
      "The shank",
      "The thread"
    ],
    correctIndex: 2,
    explanation: "The shank is clamped."
  },
  {
    id: "PTX-048",
    question: "Hammer drills are mainly for:",
    options: [
      "Fine screws",
      "Masonry work",
      "Polishing",
      "Painting"
    ],
    correctIndex: 1,
    explanation: "They suit brick and concrete."
  },
  {
    id: "PTX-049",
    question: "Hammer only mode can act like:",
    options: [
      "A sander",
      "A planer",
      "A breaker",
      "A router"
    ],
    correctIndex: 2,
    explanation: "It delivers impact without rotation."
  },
  {
    id: "PTX-050",
    question: "Impact drivers use which shank?",
    options: [
      "Round",
      "SDS",
      "Spline",
      "Quarter hex"
    ],
    correctIndex: 3,
    explanation: "¼ inch hex is standard."
  },
  {
    id: "PTX-051",
    question: "A pillar drill is normally found:",
    options: [
      "On scaffolds",
      "In workshops",
      "In vans",
      "On roofs"
    ],
    correctIndex: 1,
    explanation: "It is a fixed machine."
  },
  {
    id: "PTX-052",
    question: "Why fit a fence to a pillar drill?",
    options: [
      "For colour",
      "To reduce noise",
      "For repeat accuracy",
      "To slow speed"
    ],
    correctIndex: 2,
    explanation: "It keeps hole positions consistent."
  },
  {
    id: "PTX-053",
    question: "Large drill bits require:",
    options: [
      "Higher speed",
      "Slower speed",
      "Extra oil",
      "No guard"
    ],
    correctIndex: 1,
    explanation: "Big diameters must run slower."
  },
  {
    id: "PTX-054",
    question: "Small work on a pillar drill should be held with:",
    options: [
      "Your hand",
      "Tape",
      "A vice",
      "Glue"
    ],
    correctIndex: 2,
    explanation: "Never hold by hand."
  },
  {
    id: "PTX-055",
    question: "A breaker is designed for:",
    options: [
      "Drilling pilot holes",
      "Fine joinery",
      "Demolition",
      "Polishing"
    ],
    correctIndex: 2,
    explanation: "It is for heavy removal."
  },
  {
    id: "PTX-056",
    question: "If a bit slips in the chuck you should:",
    options: [
      "Push harder",
      "Increase pressure",
      "Clear waste",
      "Ignore it"
    ],
    correctIndex: 2,
    explanation: "Debris can stop proper cutting."
  },
  {
    id: "PTX-057",
    question: "To stop breakout you can:",
    options: [
      "Go faster",
      "Clamp backing timber",
      "Use more torque",
      "Lean on it"
    ],
    correctIndex: 1,
    explanation: "Support the exit face."
  },
  {
    id: "PTX-058",
    question: "If a battery tool stalls:",
    options: [
      "Throw it away",
      "Force harder",
      "Increase torque or charge",
      "Turn it off"
    ],
    correctIndex: 2,
    explanation: "Power or settings may be wrong."
  },
  {
    id: "PTX-059",
    question: "If a screw jumps out you should:",
    options: [
      "Use the correct bit",
      "Push faster",
      "Hit it",
      "Add oil"
    ],
    correctIndex: 0,
    explanation: "Match the bit to the screw."
  },
  {
    id: "PTX-060",
    question: "To prevent splitting you should:",
    options: [
      "Drive quicker",
      "Use glue",
      "Drill a clearance hole",
      "Change colour"
    ],
    correctIndex: 2,
    explanation: "It relieves pressure in the timber."
  },
  {
    id: "PTX-061",
    question: "Which surface of the planer supports the finished cut?",
    options: [
      "Front shoe",
      "Blade guard",
      "Rear bed",
      "Depth knob"
    ],
    correctIndex: 2,
    explanation: "The rear bed runs on the finished surface."
  },
  {
    id: "PTX-062",
    question: "Material removal on a planer is adjusted by:",
    options: [
      "Rear bed height",
      "Infeed bed setting",
      "Knife angle",
      "Fence tilt"
    ],
    correctIndex: 1,
    explanation: "The front/infeed bed controls depth."
  },
  {
    id: "PTX-063",
    question: "Disposable planer knives usually have:",
    options: [
      "Four edges",
      "Three edges",
      "One edge",
      "Two edges"
    ],
    correctIndex: 3,
    explanation: "They are reversed when one edge dulls."
  },
  {
    id: "PTX-064",
    question: "After loosening bolts, knives are removed by:",
    options: [
      "Sliding them out",
      "Hammering free",
      "Heating first",
      "Cutting away"
    ],
    correctIndex: 0,
    explanation: "They slide from the block."
  },
  {
    id: "PTX-065",
    question: "Before fitting knives you must clean:",
    options: [
      "Only the handles",
      "The motor vents",
      "Dust and resin away",
      "The cable ends"
    ],
    correctIndex: 2,
    explanation: "Dirt affects seating and accuracy."
  },
  {
    id: "PTX-066",
    question: "Knife alignment is achieved by:",
    options: [
      "Eye judgement",
      "Pins in the wedge bar",
      "Measuring tape",
      "Running slowly"
    ],
    correctIndex: 1,
    explanation: "Pins locate the knife correctly."
  },
  {
    id: "PTX-067",
    question: "Bolts after knife fitting must be:",
    options: [
      "Painted",
      "Part tight",
      "Left loose",
      "Fully tightened"
    ],
    correctIndex: 3,
    explanation: "Loose bolts are dangerous."
  },
  {
    id: "PTX-068",
    question: "Heavy cuts with a planer may cause:",
    options: [
      "Better finish",
      "Chatter marks",
      "Cooler motor",
      "Less noise"
    ],
    correctIndex: 1,
    explanation: "Deep cuts can make the machine jump."
  },
  {
    id: "PTX-069",
    question: "Moving too fast while planing creates:",
    options: [
      "Pitch marks",
      "Straighter edges",
      "Extra shine",
      "Sharper blades"
    ],
    correctIndex: 0,
    explanation: "Fast travel leaves bumps."
  },
  {
    id: "PTX-070",
    question: "Tear out is damage to:",
    options: [
      "The motor",
      "Surface fibres",
      "The cable",
      "The fence"
    ],
    correctIndex: 1,
    explanation: "Fibres are ripped instead of cut."
  },
  {
    id: "PTX-071",
    question: "End grain breakout happens as the cutter:",
    options: [
      "Starts cutting",
      "Enters slowly",
      "Exits the timber",
      "Stops spinning"
    ],
    correctIndex: 2,
    explanation: "Support is lost at the exit."
  },
  {
    id: "PTX-072",
    question: "A short relief cut is about:",
    options: [
      "5 mm",
      "100 mm",
      "20 mm",
      "Half length"
    ],
    correctIndex: 2,
    explanation: "It protects the finishing end."
  },
  {
    id: "PTX-073",
    question: "After the relief cut you should:",
    options: [
      "Plane full length",
      "Stop immediately",
      "Increase depth",
      "Turn the board"
    ],
    correctIndex: 0,
    explanation: "Run past the short cut."
  },
  {
    id: "PTX-074",
    question: "Raised lines after planing often mean:",
    options: [
      "Hard timber",
      "Wet wood",
      "Damaged knives",
      "Low speed"
    ],
    correctIndex: 2,
    explanation: "Chipped edges leave tram lines."
  },
  {
    id: "PTX-075",
    question: "Tungsten carbide edges are:",
    options: [
      "Soft",
      "Flexible",
      "Brittle",
      "Plastic"
    ],
    correctIndex: 2,
    explanation: "They chip if they hit metal."
  },
  {
    id: "PTX-076",
    question: "A bevel runs:",
    options: [
      "Part across",
      "Fully across",
      "Only in corners",
      "Down the centre"
    ],
    correctIndex: 1,
    explanation: "It forms two edges."
  },
  {
    id: "PTX-077",
    question: "A chamfer uses:",
    options: [
      "One edge",
      "Two edges",
      "Four edges",
      "No edge"
    ],
    correctIndex: 0,
    explanation: "It removes a single corner."
  },
  {
    id: "PTX-078",
    question: "Cutting a rebate usually needs:",
    options: [
      "Freehand control",
      "A guide fence",
      "Higher rpm",
      "Glue blocks"
    ],
    correctIndex: 1,
    explanation: "The fence controls width."
  },
  {
    id: "PTX-079",
    question: "Deep rebates should be formed by:",
    options: [
      "One heavy pass",
      "Higher pressure",
      "Several passes",
      "Extra speed"
    ],
    correctIndex: 2,
    explanation: "Build depth gradually."
  },
  {
    id: "PTX-080",
    question: "A planer removes stock:",
    options: [
      "Very slowly",
      "Only by hand",
      "Quite quickly",
      "With heat"
    ],
    correctIndex: 2,
    explanation: "It can take off a lot fast."
  },
  {
    id: "PTX-081",
    question: "Which part of the router holds the cutter?",
    options: [
      "The base plate",
      "The fence rods",
      "The collet",
      "The handle grip"
    ],
    correctIndex: 2,
    explanation: "The cutter is clamped inside the collet."
  },
  {
    id: "PTX-082",
    question: "Before switching on a router, the cutter should:",
    options: [
      "Touch the timber",
      "Be clear of the work",
      "Be half buried",
      "Rest on the fence"
    ],
    correctIndex: 1,
    explanation: "Starting in contact can cause kick."
  },
  {
    id: "PTX-083",
    question: "Soft start on a router helps to:",
    options: [
      "Increase power",
      "Reduce sudden jolts",
      "Spin faster",
      "Cool the motor"
    ],
    correctIndex: 1,
    explanation: "The motor builds speed gradually."
  },
  {
    id: "PTX-084",
    question: "Most routers will stop quickly because they:",
    options: [
      "Use air brakes",
      "Have electric braking",
      "Reverse direction",
      "Reduce voltage"
    ],
    correctIndex: 1,
    explanation: "Modern machines brake in seconds."
  },
  {
    id: "PTX-085",
    question: "Router handles are mainly for:",
    options: [
      "Decorative finish",
      "Cable support",
      "Grip and control",
      "Depth marking"
    ],
    correctIndex: 2,
    explanation: "They steady the tool."
  },
  {
    id: "PTX-086",
    question: "The router base:",
    options: [
      "Holds the switch",
      "Rests on the timber",
      "Stores cutters",
      "Adjusts rpm"
    ],
    correctIndex: 1,
    explanation: "It is the contact surface."
  },
  {
    id: "PTX-087",
    question: "A turret system allows:",
    options: [
      "Multiple preset depths",
      "Faster rotation",
      "Dust control",
      "Edge trimming"
    ],
    correctIndex: 0,
    explanation: "You can rotate between settings."
  },
  {
    id: "PTX-088",
    question: "If the fence is set, you must:",
    options: [
      "Oil it",
      "Leave it loose",
      "Tighten it",
      "Heat it"
    ],
    correctIndex: 2,
    explanation: "Loose fences ruin accuracy."
  },
  {
    id: "PTX-089",
    question: "A straight flute cutter is often used for:",
    options: [
      "Decorative carving",
      "Grooves and rebates",
      "Polishing",
      "Rounding corners"
    ],
    correctIndex: 1,
    explanation: "It is the common straight cutter."
  },
  {
    id: "PTX-090",
    question: "TCT cutters are popular because they are:",
    options: [
      "Weak",
      "Cheap plastic",
      "Suitable for many materials",
      "Only decorative"
    ],
    correctIndex: 2,
    explanation: "They handle hard and soft timber."
  },
  {
    id: "PTX-091",
    question: "HSS cutters should mainly be used on:",
    options: [
      "Hardwood",
      "MDF",
      "Softwood",
      "Plywood"
    ],
    correctIndex: 2,
    explanation: "They dull quickly in harder boards."
  },
  {
    id: "PTX-092",
    question: "PCD cutters are normally found on:",
    options: [
      "Small trimmers",
      "Site routers",
      "CNC machines",
      "Cordless tools"
    ],
    correctIndex: 2,
    explanation: "They are expensive and for production."
  },
  {
    id: "PTX-093",
    question: "A bearing guided cutter:",
    options: [
      "Needs no jig",
      "Needs two fences",
      "Cuts randomly",
      "Sets rpm"
    ],
    correctIndex: 0,
    explanation: "The bearing follows the edge."
  },
  {
    id: "PTX-094",
    question: "Changing bearing size will:",
    options: [
      "Alter the profile",
      "Slow the motor",
      "Shorten the shank",
      "Stop vibration"
    ],
    correctIndex: 0,
    explanation: "It changes the cut shape."
  },
  {
    id: "PTX-095",
    question: "Larger router cutters should run:",
    options: [
      "Faster",
      "Slower",
      "Sideways",
      "Intermittently"
    ],
    correctIndex: 1,
    explanation: "Big diameter = lower rpm."
  },
  {
    id: "PTX-096",
    question: "Cutter diameters over about 50 mm should be used:",
    options: [
      "Handheld",
      "Without guards",
      "In router tables",
      "At full rpm"
    ],
    correctIndex: 2,
    explanation: "Too dangerous freehand."
  },
  {
    id: "PTX-097",
    question: "If a router struggles and vibrates, you should:",
    options: [
      "Increase depth",
      "Keep pushing",
      "Reduce the cut",
      "Change direction"
    ],
    correctIndex: 2,
    explanation: "The pass is too heavy."
  },
  {
    id: "PTX-098",
    question: "Correct peripheral speed provides:",
    options: [
      "A good finish",
      "Higher noise",
      "More sparks",
      "Less control"
    ],
    correctIndex: 0,
    explanation: "Speed affects quality."
  },
  {
    id: "PTX-099",
    question: "One factor influencing speed choice is:",
    options: [
      "Paint colour",
      "Cable length",
      "Material hardness",
      "Handle shape"
    ],
    correctIndex: 2,
    explanation: "Harder materials need care."
  },
  {
    id: "PTX-100",
    question: "Router power is measured in:",
    options: [
      "Volts",
      "Watts",
      "Amps",
      "Metres"
    ],
    correctIndex: 1,
    explanation: "Higher wattage = more capacity."
  },
  {
    id: "PTX-101",
    question: "Using a fence when routing mainly controls:",
    options: [
      "Motor speed",
      "Width of cut",
      "Dust levels",
      "Cutter angle"
    ],
    correctIndex: 1,
    explanation: "The fence sets how far the cutter is from the edge."
  },
  {
    id: "PTX-102",
    question: "A guide bush is primarily used with:",
    options: [
      "Templates",
      "Hand pressure",
      "Free routing",
      "Bench stops"
    ],
    correctIndex: 0,
    explanation: "It follows the jig or template shape."
  },
  {
    id: "PTX-103",
    question: "A trammel attachment helps produce:",
    options: [
      "Grooves",
      "Bevels",
      "Radius cuts",
      "Rebates"
    ],
    correctIndex: 2,
    explanation: "It is used for circular work."
  },
  {
    id: "PTX-104",
    question: "A straight fence accessory runs along:",
    options: [
      "The air flow",
      "The material edge",
      "The cable",
      "The collet nut"
    ],
    correctIndex: 1,
    explanation: "It guides the router in a straight line."
  },
  {
    id: "PTX-105",
    question: "Disposable insert cutters are useful because:",
    options: [
      "They are plastic",
      "You replace the motor",
      "Edges can be rotated",
      "They cut deeper"
    ],
    correctIndex: 2,
    explanation: "Turn the insert when blunt."
  },
  {
    id: "PTX-106",
    question: "Common router shank sizes include:",
    options: [
      "2 mm",
      "6 mm",
      "30 mm",
      "75 mm"
    ],
    correctIndex: 1,
    explanation: "6 mm and ¼ inch are typical."
  },
  {
    id: "PTX-107",
    question: "Large cutters usually require:",
    options: [
      "Smaller shanks",
      "Lower speeds",
      "Extra guards removed",
      "Faster feeding"
    ],
    correctIndex: 1,
    explanation: "Diameter up = rpm down."
  },
  {
    id: "PTX-108",
    question: "Trying to remove too much in one pass may:",
    options: [
      "Improve accuracy",
      "Polish the timber",
      "Strain the motor",
      "Reduce vibration"
    ],
    correctIndex: 2,
    explanation: "Heavy loads slow the machine."
  },
  {
    id: "PTX-109",
    question: "When routing hardwood you should:",
    options: [
      "Cut deeper",
      "Use shallower passes",
      "Increase feed speed",
      "Ignore limits"
    ],
    correctIndex: 1,
    explanation: "Hardwoods require lighter cuts."
  },
  {
    id: "PTX-110",
    question: "High vibration during routing means:",
    options: [
      "Perfect setting",
      "The guard works",
      "The cut is too heavy",
      "Speed is correct"
    ],
    correctIndex: 2,
    explanation: "Back off and reduce material."
  },
  {
    id: "PTX-111",
    question: "Smaller cutters are more likely to:",
    options: [
      "Last forever",
      "Break if overloaded",
      "Run cooler",
      "Self sharpen"
    ],
    correctIndex: 1,
    explanation: "They cannot handle extreme force."
  },
  {
    id: "PTX-112",
    question: "Material type affects:",
    options: [
      "Paint colour",
      "Safe cutting depth",
      "Plug position",
      "Cable rating"
    ],
    correctIndex: 1,
    explanation: "Different timbers behave differently."
  },
  {
    id: "PTX-113",
    question: "On a router table you should feed:",
    options: [
      "With rotation",
      "Against rotation",
      "Randomly",
      "Backwards"
    ],
    correctIndex: 1,
    explanation: "Same rule as handheld routing."
  },
  {
    id: "PTX-114",
    question: "Passing the cutter centre in one cut is:",
    options: [
      "Recommended",
      "Safer",
      "Not allowed",
      "Faster"
    ],
    correctIndex: 2,
    explanation: "It increases splinter risk."
  },
  {
    id: "PTX-115",
    question: "Push cutting is safer because it:",
    options: [
      "Feeds itself",
      "Gives control",
      "Spins slower",
      "Needs no fence"
    ],
    correctIndex: 1,
    explanation: "You resist the cutter."
  },
  {
    id: "PTX-116",
    question: "Climb cutting often results in:",
    options: [
      "Excellent finish",
      "Better speed",
      "Loss of control",
      "Less effort"
    ],
    correctIndex: 2,
    explanation: "The tool can grab."
  },
  {
    id: "PTX-117",
    question: "When climb cutting the machine tends to:",
    options: [
      "Slow down",
      "Self feed",
      "Shut off",
      "Lock up"
    ],
    correctIndex: 1,
    explanation: "It pulls itself forward."
  },
  {
    id: "PTX-118",
    question: "During router table use, guards should be:",
    options: [
      "Removed",
      "Optional",
      "Always fitted",
      "Stored away"
    ],
    correctIndex: 2,
    explanation: "They reduce risk."
  },
  {
    id: "PTX-119",
    question: "A push stick is recommended for the last:",
    options: [
      "50 mm",
      "100 mm",
      "300 mm",
      "600 mm"
    ],
    correctIndex: 2,
    explanation: "Keeps hands away from the cutter."
  },
  {
    id: "PTX-120",
    question: "Splintering during rebates is often caused by:",
    options: [
      "Too many passes",
      "Crossing the centre",
      "Sharp cutters",
      "Low rpm"
    ],
    correctIndex: 1,
    explanation: "Never go past centre in one cut."
  }
];

