export type QuizQuestion = {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
};

export const fixingLevel1Questions: QuizQuestion[] = [
  {
    id: "FIX-L1-Q-001",
    question: "What is the main benefit of a security viewer?",
    options: [
    "See outside safely",
    "Let fresh air in",
    "Make door stronger",
    "Reduce outside noise"
  ],
  correctIndex: 0,
  explanation: "A viewer allows the occupant to see who is outside without opening the door."
},
{
  id: "FIX-L1-Q-002",
  question: "How does a security chain improve safety?",
  options: [
    "Locks door fully",
    "Allows small opening",
    "Strengthens hinges",
    "Stops key turning"
  ],
  correctIndex: 1,
  explanation: "It lets the door open slightly while preventing forced entry."
},
{
  id: "FIX-L1-Q-003",
  question: "Where is a letter plate commonly fitted?",
  options: [
    "Only at top",
    "In the frame",
    "Usually centred",
    "Handle height"
  ],
  correctIndex: 2,
  explanation: "Many are centred, though other positions are possible."
},
{
  id: "FIX-L1-Q-004",
  question: "Which modern tool is often used to cut letter plate openings?",
  options: [
    "Hand saw",
    "Jigsaw",
    "Plane",
    "Brace"
  ],
  correctIndex: 1,
  explanation: "A jigsaw or router with jig is common today."
},
{
  id: "FIX-L1-Q-005",
  question: "What is the purpose of a proprietary threshold?",
  options: [
    "Improve security",
    "Support hinges",
    "Create weather seal",
    "Reduce weight"
  ],
  correctIndex: 2,
  explanation: "Thresholds help seal the gap between door and cill."
},
{
  id: "FIX-L1-Q-006",
  question: "What should be applied under a threshold to improve sealing?",
  options: [
    "Adhesive",
    "Silicone",
    "Oil",
    "Wax"
  ],
  correctIndex: 1,
  explanation: "Silicone prevents water penetration."
},
{
  id: "FIX-L1-Q-007",
  question: "What do rain deflectors do?",
  options: [
    "Stop wind",
    "Block insects",
    "Move water away",
    "Strengthen bottom"
  ],
  correctIndex: 2,
  explanation: "They direct water away from the door."
},
{
  id: "FIX-L1-Q-008",
  question: "Why are trickle vents installed?",
  options: [
    "Provide ventilation",
    "Increase light",
    "Improve security",
    "Reduce cost"
  ],
  correctIndex: 0,
  explanation: "They allow controlled background airflow."
},
{
  id: "FIX-L1-Q-009",
  question: "What is a common mistake with trickle vents?",
  options: [
    "Opening too far",
    "Painting them",
    "Leaving shut",
    "Fitting high"
  ],
  correctIndex: 2,
  explanation: "They must allow airflow."
},
{
  id: "FIX-L1-Q-010",
  question: "What do weather seals mainly prevent?",
  options: [
    "Noise only",
    "Draughts and water",
    "Door movement",
    "Hinge wear"
  ],
  correctIndex: 1,
  explanation: "They block air and moisture."
},
{
  id: "FIX-L1-Q-011",
  question: "How are many weather seals held in place?",
  options: [
    "Glue",
    "Pins",
    "Friction in groove",
    "Staples"
  ],
  correctIndex: 2,
  explanation: "They push into a machined groove."
},
{
  id: "FIX-L1-Q-012",
  question: "Why are different seal colours available?",
  options: [
    "Identify size",
    "Match finish",
    "Show age",
    "Improve grip"
  ],
  correctIndex: 1,
  explanation: "They are chosen to suit appearance."
},
{
  id: "FIX-L1-Q-013",
  question: "Why are door closers fitted?",
  options: [
    "Hold open",
    "Self close",
    "Add weight",
    "Reduce height"
  ],
  correctIndex: 1,
  explanation: "They automatically close the door."
},
{
  id: "FIX-L1-Q-014",
  question: "Where are overhead closers normally located?",
  options: [
    "Bottom edge",
    "Top area",
    "Middle rail",
    "Inside lock"
  ],
  correctIndex: 1,
  explanation: "They sit at the top of the door or frame."
},
{
  id: "FIX-L1-Q-015",
  question: "What is an advantage of a concealed closer?",
  options: [
    "Cheaper",
    "Stronger",
    "Hidden view",
    "Faster fit"
  ],
  correctIndex: 2,
  explanation: "They improve appearance."
},
{
  id: "FIX-L1-Q-016",
  question: "How can some hinges act as closers?",
  options: [
    "Use magnets",
    "Contain springs",
    "Use weight",
    "Add chains"
  ],
  correctIndex: 1,
  explanation: "Spring hinges provide self-closing."
},
{
  id: "FIX-L1-Q-017",
  question: "Why must drawer runner length be correct?",
  options: [
    "Looks better",
    "Suit cabinet",
    "Reduce noise",
    "Save money"
  ],
  correctIndex: 1,
  explanation: "Size must match the unit."
},
{
  id: "FIX-L1-Q-018",
  question: "What is the benefit of full extension runners?",
  options: [
    "Less weight",
    "Better access",
    "Lower cost",
    "Quick fit"
  ],
  correctIndex: 1,
  explanation: "They allow full reach into drawer."
},
{
  id: "FIX-L1-Q-019",
  question: "What do ball bearing runners provide?",
  options: [
    "Extra strength",
    "Smooth travel",
    "More height",
    "Faster install"
  ],
  correctIndex: 1,
  explanation: "They give easy movement."
},
{
  id: "FIX-L1-Q-020",
  question: "What is the purpose of soft-close runners?",
  options: [
    "Increase speed",
    "Stop slamming",
    "Add weight",
    "Hold open"
  ],
  correctIndex: 1,
  explanation: "They protect drawer and cabinet."
  },
  {
    id: "FIX-L1-Q-021",
  question: "What do plinth feet allow you to adjust?",
  options: [
    "Door width",
    "Unit height",
    "Handle level",
    "Runner length"
  ],
  correctIndex: 1,
  explanation: "Plinth feet are used to level and set the height of kitchen units."
},
{
  id: "FIX-L1-Q-022",
  question: "What is the purpose of plinth clips?",
  options: [
    "Strengthen frame",
    "Attach plinth",
    "Seal gaps",
    "Hold hinges"
  ],
  correctIndex: 1,
  explanation: "They secure the plinth while allowing easy removal."
},
{
  id: "FIX-L1-Q-023",
  question: "At which stage is ironmongery normally installed?",
  options: [
    "Before trimming",
    "After delivery",
    "Stage three",
    "During swing"
  ],
  correctIndex: 2,
  explanation: "Stage 3 is the hardware installation stage."
},
{
  id: "FIX-L1-Q-024",
  question: "During Stage 1, what is done to the door?",
  options: [
    "Fit handles",
    "Install lock",
    "Trim to fit",
    "Mount keep"
  ],
  correctIndex: 2,
  explanation: "The door is prepared to suit the opening."
},
{
  id: "FIX-L1-Q-025",
  question: "What is checked during Stage 2?",
  options: [
    "Colour finish",
    "Opens freely",
    "Key fit",
    "Seal type"
  ],
  correctIndex: 1,
  explanation: "The door must swing without binding."
},
{
  id: "FIX-L1-Q-026",
  question: "What clearance is typical internally at the sides and top?",
  options: [
    "2 mm",
    "5 mm",
    "8 mm",
    "12 mm"
  ],
  correctIndex: 0,
  explanation: "Around 2 mm is normal internally."
},
{
  id: "FIX-L1-Q-027",
  question: "What is a common method for fitting butt hinges today?",
  options: [
    "Glue only",
    "Nails",
    "Jigs with tools",
    "Tape"
  ],
  correctIndex: 2,
  explanation: "Power tools with jigs are common in new builds."
},
{
  id: "FIX-L1-Q-028",
  question: "How should a door be supported for hinge work?",
  options: [
    "Against wall",
    "On floor",
    "In stand",
    "Across trestles"
  ],
  correctIndex: 2,
  explanation: "A stand keeps the door secure."
},
{
  id: "FIX-L1-Q-029",
  question: "Where is the top hinge often positioned?",
  options: [
    "75 mm down",
    "150 mm down",
    "300 mm down",
    "450 mm down"
  ],
  correctIndex: 1,
  explanation: "A common measurement is 150 mm from the top."
},
{
  id: "FIX-L1-Q-030",
  question: "What tool is used to score hinge positions accurately?",
  options: [
    "Pencil",
    "Marker",
    "Knife",
    "Bradawl"
  ],
  correctIndex: 2,
  explanation: "A marking knife provides precision."
},
{
  id: "FIX-L1-Q-031",
  question: "What should the hinge width gauge match?",
  options: [
    "Door thickness",
    "Leaf width",
    "Frame depth",
    "Screw size"
  ],
  correctIndex: 1,
  explanation: "Set the gauge to the hinge leaf."
},
{
  id: "FIX-L1-Q-032",
  question: "What determines the hinge recess depth?",
  options: [
    "Door width",
    "Leaf thickness",
    "Knuckle size",
    "Screw length"
  ],
  correctIndex: 1,
  explanation: "The recess equals the hinge leaf thickness."
},
{
  id: "FIX-L1-Q-033",
  question: "Why might deeper recessing be required?",
  options: [
    "Loose screws",
    "Large knuckle",
    "Soft timber",
    "Wide frame"
  ],
  correctIndex: 1,
  explanation: "Wide knuckles need more clearance."
},
{
  id: "FIX-L1-Q-034",
  question: "How should the chisel be held when cutting hinge ends?",
  options: [
    "Angled back",
    "Flat down",
    "Vertical",
    "Twisted"
  ],
  correctIndex: 2,
  explanation: "Keep it upright for accuracy."
},
{
  id: "FIX-L1-Q-035",
  question: "At what angle is waste commonly broken out?",
  options: [
    "10 degrees",
    "25 degrees",
    "45 degrees",
    "90 degrees"
  ],
  correctIndex: 2,
  explanation: "About 45° helps lift the grain."
},
{
  id: "FIX-L1-Q-036",
  question: "When paring the recess, what should you work to?",
  options: [
    "Door edge",
    "Gauge line",
    "Knuckle",
    "Screw hole"
  ],
  correctIndex: 1,
  explanation: "Finish cleanly to the marked line."
},
{
  id: "FIX-L1-Q-037",
  question: "What is the key safety rule when chiselling?",
  options: [
    "Work quickly",
    "Hands behind",
    "Use both hands",
    "Stand closer"
  ],
  correctIndex: 1,
  explanation: "Never place hands in front of the blade."
},
{
  id: "FIX-L1-Q-038",
  question: "Why should you trial fit the hinge?",
  options: [
    "Check colour",
    "Confirm seating",
    "Save time",
    "Warm metal"
  ],
  correctIndex: 1,
  explanation: "It ensures correct fit before screws."
},
{
  id: "FIX-L1-Q-039",
  question: "What does a hinge drill bit help achieve?",
  options: [
    "Bigger hole",
    "Central screw",
    "Faster cut",
    "Less noise"
  ],
  correctIndex: 1,
  explanation: "It keeps screws centred."
},
{
  id: "FIX-L1-Q-040",
  question: "Where should the leaf with most knuckles go?",
  options: [
    "Door",
    "Frame",
    "Top",
    "Bottom"
  ],
  correctIndex: 1,
  explanation: "Most to the post (frame)."
},
{
  id: "FIX-L1-Q-041",
  question: "What does a latch lock require that a latch does not?",
  options: [
    "Face plate",
    "Key hole",
    "Keep plate",
    "Strike box"
  ],
  correctIndex: 1,
  explanation: "A latch lock needs a key hole in addition to the latch."
},
{
  id: "FIX-L1-Q-042",
  question: "Why is a latch quicker to fit than a latch lock?",
  options: [
    "Fewer parts",
    "Less weight",
    "No key hole",
    "Short screws"
  ],
  correctIndex: 2,
  explanation: "No extra hole is needed for a key."
},
{
  id: "FIX-L1-Q-043",
  question: "What is the usual spindle height from the bottom of the door?",
  options: [
    "850 mm",
    "900 mm",
    "990 mm",
    "1100 mm"
  ],
  correctIndex: 2,
  explanation: "A common standard height is about 990 mm."
},
{
  id: "FIX-L1-Q-044",
  question: "What is the backset measurement taken from?",
  options: [
    "Top edge",
    "Bottom edge",
    "Door face",
    "Door edge"
  ],
  correctIndex: 3,
  explanation: "Backset is measured from the edge of the door."
},
{
  id: "FIX-L1-Q-045",
  question: "Why add about 3 mm above and below the case?",
  options: [
    "For paint",
    "For packing",
    "For clearance",
    "For looks"
  ],
  correctIndex: 2,
  explanation: "It provides fitting tolerance."
},
{
  id: "FIX-L1-Q-046",
  question: "How should spindle holes be drilled?",
  options: [
    "From top",
    "One side",
    "Both sides",
    "At angle"
  ],
  correctIndex: 2,
  explanation: "Drilling both sides avoids breakout."
},
{
  id: "FIX-L1-Q-047",
  question: "What size is commonly used for spindle clearance?",
  options: [
    "12 mm",
    "16 mm",
    "20 mm",
    "25 mm"
  ],
  correctIndex: 2,
  explanation: "20 mm is often used."
},
{
  id: "FIX-L1-Q-048",
  question: "Why is the large round keyhole sometimes criticised?",
  options: [
    "Too slow",
    "Weak look",
    "Bad practice",
    "Hard cut"
  ],
  correctIndex: 2,
  explanation: "Some consider it poor workmanship."
},
{
  id: "FIX-L1-Q-049",
  question: "What tools traditionally shape a keyhole?",
  options: [
    "Plane and rasp",
    "Padsaw and file",
    "Drill and knife",
    "Router and jig"
  ],
  correctIndex: 1,
  explanation: "They create the correct profile."
},
{
  id: "FIX-L1-Q-050",
  question: "When drilling the mortice, which holes are made first?",
  options: [
    "Middle",
    "Ends",
    "Top",
    "Random"
  ],
  correctIndex: 1,
  explanation: "Drilling ends helps define the length."
},
{
  id: "FIX-L1-Q-051",
  question: "How can drilling depth be controlled?",
  options: [
    "By eye",
    "With tape",
    "By speed",
    "By angle"
  ],
  correctIndex: 1,
  explanation: "Tape or a stop prevents over drilling."
},
{
  id: "FIX-L1-Q-052",
  question: "How many holes are needed for a latch only?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correctIndex: 0,
  explanation: "A single hole is usually enough."
},
{
  id: "FIX-L1-Q-053",
  question: "Why run mortice gauge lines?",
  options: [
    "Decoration",
    "Paint guide",
    "Chisel guide",
    "Handle line"
  ],
  correctIndex: 2,
  explanation: "They guide accurate cleaning."
},
{
  id: "FIX-L1-Q-054",
  question: "Why drill face holes before cutting the mortice?",
  options: [
    "Save time",
    "Reduce splinter",
    "Make larger",
    "Hide errors"
  ],
  correctIndex: 1,
  explanation: "It helps prevent damage."
},
{
  id: "FIX-L1-Q-055",
  question: "What is commonly supplied with many locks?",
  options: [
    "Extra screws",
    "Paper template",
    "Glue pack",
    "Drill bit"
  ],
  correctIndex: 1,
  explanation: "Templates help accurate marking."
},
{
  id: "FIX-L1-Q-056",
  question: "Before fitting, what must be removed from the mortice?",
  options: [
    "Dust only",
    "Loose waste",
    "Old paint",
    "Door stop"
  ],
  correctIndex: 1,
  explanation: "The recess must be clean."
},
{
  id: "FIX-L1-Q-057",
  question: "Why test fit the latch or lock?",
  options: [
    "Warm metal",
    "Check size",
    "Line screws",
    "Mark paint"
  ],
  correctIndex: 1,
  explanation: "It confirms the opening is correct."
},
{
  id: "FIX-L1-Q-058",
  question: "How should the forend be marked?",
  options: [
    "Pencil",
    "Chalk",
    "Knife",
    "Awl"
  ],
  correctIndex: 2,
  explanation: "Knife lines give accuracy."
},
{
  id: "FIX-L1-Q-059",
  question: "When cutting the forend recess, what is vital?",
  options: [
    "Deep cut",
    "Follow line",
    "Use drill",
    "Round edge"
  ],
  correctIndex: 1,
  explanation: "Stay exactly to the marks."
},
{
  id: "FIX-L1-Q-060",
  question: "How should the lock body sit when refitted?",
  options: [
    "Loose",
    "Proud",
    "Flush",
    "Angled"
  ],
  correctIndex: 2,
  explanation: "It must sit properly within the mortice."
},
{
  id: "FIX-L1-Q-061",
  question: "What is used to operate lever handles?",
  options: [
    "Face plate",
    "Spindle bar",
    "Strike box",
    "Keep plate"
  ],
  correctIndex: 1,
  explanation: "A spindle passes through the lock to connect both handles."
},
{
  id: "FIX-L1-Q-062",
  question: "Where must lever handles normally be fitted?",
  options: [
    "One side",
    "Both sides",
    "Top only",
    "Edge only"
  ],
  correctIndex: 1,
  explanation: "Handles are required on each face of the door."
},
{
  id: "FIX-L1-Q-063",
  question: "How should straight lever furniture usually sit?",
  options: [
    "Angled down",
    "Angled up",
    "Vertical",
    "Loose"
  ],
  correctIndex: 2,
  explanation: "Straight furniture is fitted vertically."
},
{
  id: "FIX-L1-Q-064",
  question: "How should round lever furniture usually sit?",
  options: [
    "Vertical",
    "Horizontal",
    "Upside down",
    "Offset"
  ],
  correctIndex: 1,
  explanation: "Round types are positioned horizontally."
},
{
  id: "FIX-L1-Q-065",
  question: "What is the main purpose of a cylinder night latch?",
  options: [
    "Hold open",
    "Control entry",
    "Stop noise",
    "Add weight"
  ],
  correctIndex: 1,
  explanation: "It secures entry from the outside."
},
{
  id: "FIX-L1-Q-066",
  question: "How is a night latch opened from outside?",
  options: [
    "Push bar",
    "Handle",
    "Key",
    "Thumb turn"
  ],
  correctIndex: 2,
  explanation: "A key is required externally."
},
{
  id: "FIX-L1-Q-067",
  question: "How is a night latch opened from inside?",
  options: [
    "Key",
    "Lever",
    "Button",
    "Handle"
  ],
  correctIndex: 3,
  explanation: "It allows easy exit without a key."
},
{
  id: "FIX-L1-Q-068",
  question: "Night latches are usually fitted to which doors?",
  options: [
    "Outward",
    "Sliding",
    "Inward",
    "Folding"
  ],
  correctIndex: 2,
  explanation: "They are common on inward opening doors."
},
{
  id: "FIX-L1-Q-069",
  question: "What normally helps position a night latch correctly?",
  options: [
    "Spirit level",
    "Paper template",
    "Chalk line",
    "Square block"
  ],
  correctIndex: 1,
  explanation: "Manufacturers often supply templates."
},
{
  id: "FIX-L1-Q-070",
  question: "What is a typical height range for the top of a night latch?",
  options: [
    "700–900 mm",
    "900–1100 mm",
    "1200–1500 mm",
    "1600–1800 mm"
  ],
  correctIndex: 2,
  explanation: "This is the usual recommended range."
},
{
  id: "FIX-L1-Q-071",
  question: "What are common backset sizes for cylinders?",
  options: [
    "20 or 30",
    "30 or 50",
    "40 or 60",
    "70 or 90"
  ],
  correctIndex: 2,
  explanation: "40 mm and 60 mm are typical."
},
{
  id: "FIX-L1-Q-072",
  question: "What diameter is often drilled for the cylinder hole?",
  options: [
    "20 mm",
    "25 mm",
    "32 mm",
    "40 mm"
  ],
  correctIndex: 2,
  explanation: "32 mm is common practice."
},
{
  id: "FIX-L1-Q-073",
  question: "How should the cylinder hole be drilled?",
  options: [
    "One pass",
    "From inside",
    "Both sides",
    "At angle"
  ],
  correctIndex: 2,
  explanation: "This prevents breakout."
},
{
  id: "FIX-L1-Q-074",
  question: "Why leave extra length on the connector bar?",
  options: [
    "For grip",
    "For strength",
    "For fitting",
    "For colour"
  ],
  correctIndex: 2,
  explanation: "It ensures proper engagement."
},
{
  id: "FIX-L1-Q-075",
  question: "How should the key sit after the cylinder is fitted?",
  options: [
    "Flat",
    "Vertical",
    "Loose",
    "Angled"
  ],
  correctIndex: 1,
  explanation: "The key should be upright."
},
{
  id: "FIX-L1-Q-076",
  question: "What secures the night latch body finally?",
  options: [
    "Glue",
    "Pins",
    "Tape",
    "Screws"
  ],
  correctIndex: 3,
  explanation: "It is screwed to the back plate."
},
{
  id: "FIX-L1-Q-077",
  question: "A rack bolt is often chosen instead of what?",
  options: [
    "Butt hinge",
    "Barrel bolt",
    "Night latch",
    "Closer"
  ],
  correctIndex: 1,
  explanation: "It is an alternative fixing."
},
{
  id: "FIX-L1-Q-078",
  question: "Why might a rack bolt be preferred?",
  options: [
    "Cheaper",
    "Faster",
    "Hidden",
    "Heavier"
  ],
  correctIndex: 2,
  explanation: "It avoids visible surface hardware."
},
{
  id: "FIX-L1-Q-079",
  question: "When choosing a rack bolt position, what must be avoided?",
  options: [
    "Paint",
    "Joints",
    "Knots",
    "Handles"
  ],
  correctIndex: 1,
  explanation: "Cutting through joints weakens the door."
},
{
  id: "FIX-L1-Q-080",
  question: "How should rack key holes be drilled?",
  options: [
    "One side",
    "At angle",
    "Both sides",
    "Half depth"
  ],
  correctIndex: 2,
  explanation: "This prevents surface damage."
},
{
  id: "FIX-L1-Q-081",
  question: "Where is the hole drilled for the rack bolt body?",
  options: [
    "Door face",
    "Top rail",
    "Edge centre",
    "Hinge side"
  ],
  correctIndex: 2,
  explanation: "The rack body is drilled centrally in the edge."
},
{
  id: "FIX-L1-Q-082",
  question: "Why must the rack bolt hole stay central?",
  options: [
    "Looks better",
    "Keeps strength",
    "Less drilling",
    "Saves time"
  ],
  correctIndex: 1,
  explanation: "Off-centre drilling can weaken the door."
},
{
  id: "FIX-L1-Q-083",
  question: "What is done after inserting the rack bolt?",
  options: [
    "Paint",
    "Glue",
    "Screw",
    "Oil"
  ],
  correctIndex: 2,
  explanation: "It must be secured firmly."
},
{
  id: "FIX-L1-Q-084",
  question: "How should the rack faceplate be positioned before marking?",
  options: [
    "Angled",
    "Loose",
    "Square",
    "Offset"
  ],
  correctIndex: 2,
  explanation: "It should be square to the edge."
},
{
  id: "FIX-L1-Q-085",
  question: "What tool is used to outline the rack faceplate?",
  options: [
    "Pencil",
    "Knife",
    "Chalk",
    "Marker"
  ],
  correctIndex: 1,
  explanation: "A knife gives a clean, accurate line."
},
{
  id: "FIX-L1-Q-086",
  question: "After marking the plate, what is added next?",
  options: [
    "Glue",
    "Paint",
    "Gauge lines",
    "Screws"
  ],
  correctIndex: 2,
  explanation: "Gauge lines guide the recess."
},
{
  id: "FIX-L1-Q-087",
  question: "How should the faceplate recess be cut?",
  options: [
    "Freehand",
    "Deep",
    "To lines",
    "Rough"
  ],
  correctIndex: 2,
  explanation: "Always work accurately to the marks."
},
{
  id: "FIX-L1-Q-088",
  question: "What is the danger of cutting too deep?",
  options: [
    "Looks fine",
    "Weaker fit",
    "Faster job",
    "Better swing"
  ],
  correctIndex: 1,
  explanation: "Over-cutting reduces support."
},
{
  id: "FIX-L1-Q-089",
  question: "What must happen once the rack bolt is inserted?",
  options: [
    "Leave it",
    "Oil it",
    "Screw tight",
    "Paint it"
  ],
  correctIndex: 2,
  explanation: "It must be fixed securely."
},
{
  id: "FIX-L1-Q-090",
  question: "Why fit an escutcheon?",
  options: [
    "Decoration",
    "Weight",
    "Cover hole",
    "Noise"
  ],
  correctIndex: 2,
  explanation: "It hides and protects the opening."
},
{
  id: "FIX-L1-Q-091",
  question: "What helps align the escutcheon correctly?",
  options: [
    "Glue",
    "Key",
    "Tape",
    "String"
  ],
  correctIndex: 1,
  explanation: "The key ensures proper positioning."
},
{
  id: "FIX-L1-Q-092",
  question: "How is the keep position normally found?",
  options: [
    "Measure",
    "Guess",
    "Use bolt",
    "Template"
  ],
  correctIndex: 2,
  explanation: "Turning the bolt marks the spot."
},
{
  id: "FIX-L1-Q-093",
  question: "After marking the keep, what follows?",
  options: [
    "Oil",
    "Cut recess",
    "Paint",
    "Leave"
  ],
  correctIndex: 1,
  explanation: "A recess is required for it to sit."
},
{
  id: "FIX-L1-Q-094",
  question: "Why is guessing the keep position bad?",
  options: [
    "Too slow",
    "May misalign",
    "Looks odd",
    "Costs more"
  ],
  correctIndex: 1,
  explanation: "Incorrect alignment affects locking."
},
{
  id: "FIX-L1-Q-095",
  question: "What should be confirmed before fitting a rack bolt?",
  options: [
    "Colour",
    "Gap",
    "Handle",
    "Height"
  ],
  correctIndex: 1,
  explanation: "Correct clearance is essential."
},
{
  id: "FIX-L1-Q-096",
  question: "Why check the gap first?",
  options: [
    "Speed",
    "Strength",
    "May change",
    "Finish"
  ],
  correctIndex: 2,
  explanation: "Adjustments later could ruin alignment."
},
{
  id: "FIX-L1-Q-097",
  question: "Before starting hardware work, what is required?",
  options: [
    "Coffee",
    "Permission",
    "Paint",
    "Delivery"
  ],
  correctIndex: 1,
  explanation: "Authorisation is necessary."
},
{
  id: "FIX-L1-Q-098",
  question: "Which documents guide safe working?",
  options: [
    "Invoice",
    "Drawing",
    "Risk assessment",
    "Poster"
  ],
  correctIndex: 2,
  explanation: "They define hazards and controls."
},
{
  id: "FIX-L1-Q-099",
  question: "If unsure about the task, what should you do?",
  options: [
    "Ignore",
    "Guess",
    "Ask",
    "Leave"
  ],
  correctIndex: 2,
  explanation: "Always seek clarification."
},
{
  id: "FIX-L1-Q-100",
  question: "After completing the job, what is expected?",
  options: [
    "Leave",
    "Report",
    "Clean",
    "Photograph"
  ],
  correctIndex: 2,
  explanation: "The area should be left tidy."
},
{
  id: "FIX-L1-Q-201",
  question: "What is one purpose of a screw cup?",
  options: [
    "Increase speed",
    "Decorate fixing",
    "Reduce depth",
    "Hide threads"
  ],
  correctIndex: 1,
  explanation: "Screw cups provide a decorative finish."
},
{
  id: "FIX-L1-Q-202",
  question: "Besides appearance, what else does a screw cup do?",
  options: [
    "Shortens screw",
    "Spreads load",
    "Stops rust",
    "Adds grip"
  ],
  correctIndex: 1,
  explanation: "It spreads the load over a wider area."
},
{
  id: "FIX-L1-Q-203",
  question: "What finish do black japanned screws have?",
  options: [
    "Chrome",
    "Brass",
    "Black",
    "Zinc"
  ],
  correctIndex: 2,
  explanation: "They have a black lacquered finish."
},
{
  id: "FIX-L1-Q-204",
  question: "Black japanned screws are commonly used with what?",
  options: [
    "PVCu",
    "Bright steel",
    "Black ironmongery",
    "Aluminium"
  ],
  correctIndex: 2,
  explanation: "They match traditional black ironmongery."
},
{
  id: "FIX-L1-Q-205",
  question: "Do concrete screws need a wall plug?",
  options: [
    "Always",
    "Sometimes",
    "No",
    "Only outside"
  ],
  correctIndex: 2,
  explanation: "Concrete screws cut directly into masonry."
},
{
  id: "FIX-L1-Q-206",
  question: "What gives a concrete screw its grip?",
  options: [
    "Glue",
    "Plug",
    "Thread",
    "Washer"
  ],
  correctIndex: 2,
  explanation: "The thread cuts into the masonry."
},
{
  id: "FIX-L1-Q-207",
  question: "Brass screws are well known for being what?",
  options: [
    "Magnetic",
    "Flexible",
    "Corrosion resistant",
    "Hardened"
  ],
  correctIndex: 2,
  explanation: "They resist corrosion well."
},
{
  id: "FIX-L1-Q-208",
  question: "What is a weakness of brass screws?",
  options: [
    "Too shiny",
    "Too short",
    "Relatively soft",
    "Too heavy"
  ],
  correctIndex: 2,
  explanation: "They are softer and can break."
},
{
  id: "FIX-L1-Q-209",
  question: "What can be driven first to help prevent brass screw breakage?",
  options: [
    "Plug",
    "Steel screw",
    "Washer",
    "Nail"
  ],
  correctIndex: 1,
  explanation: "A steel screw can cut the thread first."
},
{
  id: "FIX-L1-Q-210",
  question: "Why apply wax or jelly to a brass screw?",
  options: [
    "Shine",
    "Colour",
    "Lubrication",
    "Grip"
  ],
  correctIndex: 2,
  explanation: "Lubrication helps driving and prevents breakage."
},
{
  id: "FIX-L1-Q-211",
  question: "Why must the driver bit match the screw?",
  options: [
    "Looks tidy",
    "Prevents damage",
    "Saves money",
    "Reduces noise"
  ],
  correctIndex: 1,
  explanation: "Wrong bits damage the head."
},
{
  id: "FIX-L1-Q-212",
  question: "What shape is a slotted screw head?",
  options: [
    "Star",
    "Cross",
    "Square",
    "Single slot"
  ],
  correctIndex: 3,
  explanation: "It has one straight slot."
},
{
  id: "FIX-L1-Q-213",
  question: "How should a traditional slotted screw finish?",
  options: [
    "Horizontal",
    "Angled",
    "Vertical",
    "Random"
  ],
  correctIndex: 2,
  explanation: "The slot should be vertical."
},
{
  id: "FIX-L1-Q-214",
  question: "Phillips heads improve on slotted by giving what?",
  options: [
    "Colour",
    "Grip",
    "Length",
    "Weight"
  ],
  correctIndex: 1,
  explanation: "They provide better driver grip."
},
{
  id: "FIX-L1-Q-215",
  question: "How can you identify a Pozidriv screw?",
  options: [
    "Round hole",
    "Two crosses",
    "Triangle",
    "Flat top"
  ],
  correctIndex: 1,
  explanation: "It has an extra shallow cross."
},
{
  id: "FIX-L1-Q-216",
  question: "Which Pozidriv size is most common?",
  options: [
    "0",
    "1",
    "2",
    "4"
  ],
  correctIndex: 2,
  explanation: "Size 2 is the most used."
},
{
  id: "FIX-L1-Q-217",
  question: "What is the main advantage of Torx screws?",
  options: [
    "Colour match",
    "Higher torque",
    "Cheaper",
    "Shorter"
  ],
  correctIndex: 1,
  explanation: "They allow greater torque and grip."
},
{
  id: "FIX-L1-Q-218",
  question: "What shape is a Robertson recess?",
  options: [
    "Star",
    "Square",
    "Round",
    "Cross"
  ],
  correctIndex: 1,
  explanation: "It uses a square socket."
},
{
  id: "FIX-L1-Q-219",
  question: "A hex recess is driven using what?",
  options: [
    "Pozidriv",
    "Torx",
    "Allen key",
    "Spanner"
  ],
  correctIndex: 2,
  explanation: "It requires a hex or Allen key."
},
{
  id: "FIX-L1-Q-220",
  question: "What problem comes from using the wrong bit?",
  options: [
    "Rust",
    "Slipping",
    "Short life",
    "Loose hinge"
  ],
  correctIndex: 1,
  explanation: "Incorrect bits tend to slip."
},
{
  id: "FIX-L1-Q-221",
  question: "A 4.5 mm screw usually matches which driver size?",
  options: [
    "Size 0",
    "Size 1",
    "Size 2",
    "Size 3"
  ],
  correctIndex: 2,
  explanation: "4.0–4.5 mm screws use size 2."
},
{
  id: "FIX-L1-Q-222",
  question: "Which screw size range normally uses a size 0 driver?",
  options: [
    "3.0 mm and smaller",
    "3.5 mm only",
    "4.0–4.5 mm range",
    "5.0 mm and larger"
  ],
  correctIndex: 0,
  explanation: "3.0 mm and smaller is size 0."
},
{
  id: "FIX-L1-Q-223",
  question: "When might filler and paint not be the best method to hide screws?",
  options: [
    "Clear finish work",
    "Temporary work",
    "Heavy framing",
    "Outdoor decking"
  ],
  correctIndex: 0,
  explanation: "Clear finishes need better concealment methods."
},
{
  id: "FIX-L1-Q-224",
  question: "What is one reason timber pellets are used?",
  options: [
    "Increase torque",
    "Hide screw heads",
    "Prevent rust",
    "Reduce drilling"
  ],
  correctIndex: 1,
  explanation: "Pellets are used to conceal screw heads."
},
{
  id: "FIX-L1-Q-225",
  question: "When fitting timber pellets, what should match the surrounding timber?",
  options: [
    "The colour code",
    "The grain direction",
    "The screw length",
    "The hinge type"
  ],
  correctIndex: 1,
  explanation: "Pellets are chosen so the grain follows the timber."
},
{
  id: "FIX-L1-Q-226",
  question: "How can pellets be made if they are not bought ready-made?",
  options: [
    "Using plug cutters",
    "Using wall plugs",
    "Using a router jig",
    "Using a countersink"
  ],
  correctIndex: 0,
  explanation: "Pellets can be produced with plug cutters."
},
{
  id: "FIX-L1-Q-227",
  question: "What is the minimum depth allowance given for a pellet?",
  options: [
    "At least 4 mm",
    "At least 5 mm",
    "At least 6 mm",
    "At least 8 mm"
  ],
  correctIndex: 2,
  explanation: "Pellet depth should be at least 6 mm."
},
{
  id: "FIX-L1-Q-228",
  question: "When should pellets be glued into place?",
  options: [
    "Before any screws",
    "After screws are driven",
    "Before marking out",
    "Before drilling holes"
  ],
  correctIndex: 1,
  explanation: "Screws are driven first, then pellets are glued."
},
{
  id: "FIX-L1-Q-229",
  question: "What is the correct order for finishing pellets flush?",
  options: [
    "Trim, glue, sand",
    "Glue, sand, trim",
    "Glue, trim, sand",
    "Sand, glue, trim"
  ],
  correctIndex: 2,
  explanation: "Let glue set, trim, then finish with abrasive."
},
{
  id: "FIX-L1-Q-230",
  question: "Which fixing has a large hex head and a part-threaded shank?",
  options: [
    "Coach bolt",
    "Coach screw",
    "Concrete screw",
    "Black japanned screw"
  ],
  correctIndex: 1,
  explanation: "Coach screws are heavy-duty with a hex head."
},
{
  id: "FIX-L1-Q-231",
  question: "Coach screws are mainly used for what type of work?",
  options: [
    "Heavy timbers",
    "Thin panels",
    "Fine mouldings",
    "Light cabinets"
  ],
  correctIndex: 0,
  explanation: "They are used for heavy timber work."
},
{
  id: "FIX-L1-Q-232",
  question: "What drilling step is always stated for coach screw use?",
  options: [
    "No drilling needed",
    "Drill a suitable clearance hole",
    "Drill only from one side",
    "Drill smaller than the screw"
  ],
  correctIndex: 1,
  explanation: "A suitable clearance hole should always be drilled."
},
{
  id: "FIX-L1-Q-233",
  question: "What feature sits under the head of a coach bolt?",
  options: [
    "A washer groove",
    "A square section",
    "A star recess",
    "A tapered thread"
  ],
  correctIndex: 1,
  explanation: "Coach bolts have a square section under the head."
},
{
  id: "FIX-L1-Q-234",
  question: "What is the main function of a coach bolt?",
  options: [
    "Cut threads into brick",
    "Clamp materials together tightly",
    "Provide decorative finish",
    "Self-close a door"
  ],
  correctIndex: 1,
  explanation: "Coach bolts are used to clamp materials together."
},
{
  id: "FIX-L1-Q-235",
  question: "Where do dog tooth connectors sit in a joint?",
  options: [
    "On top of the screw head",
    "Between timbers on the bolt",
    "Inside the hinge knuckle",
    "Under the latch keep"
  ],
  correctIndex: 1,
  explanation: "They fit between the timbers around the bolt."
},
{
  id: "FIX-L1-Q-236",
  question: "What do the teeth on a dog tooth connector do?",
  options: [
    "Grip the timber",
    "Cut the screw",
    "Seal the joint",
    "Mark the centre"
  ],
  correctIndex: 0,
  explanation: "The teeth bite in to help prevent slipping."
},
{
  id: "FIX-L1-Q-237",
  question: "Why are wall plugs needed in masonry?",
  options: [
    "Masonry is too smooth",
    "Wood screws cannot grip properly",
    "Plugs prevent paint damage",
    "Plugs shorten the screw"
  ],
  correctIndex: 1,
  explanation: "Masonry is porous and brittle so the plug lets the screw hold."
},
{
  id: "FIX-L1-Q-238",
  question: "What material are most wall plugs made from today?",
  options: [
    "Steel",
    "Nylon",
    "Fibre",
    "Timber"
  ],
  correctIndex: 1,
  explanation: "Most modern plugs are nylon."
},
{
  id: "FIX-L1-Q-239",
  question: "What should the drilled hole match when using a wall plug?",
  options: [
    "Screw head size",
    "Plug diameter",
    "Wall thickness",
    "Driver bit size"
  ],
  correctIndex: 1,
  explanation: "The hole should match the plug diameter."
},
{
  id: "FIX-L1-Q-240",
  question: "If masonry is weak or crumbly, what adjustment is suggested?",
  options: [
    "Use a slightly smaller hole",
    "Use a much larger hole",
    "Avoid drilling completely",
    "Use a longer screw only"
  ],
  correctIndex: 0,
  explanation: "A slightly smaller hole can help in porous masonry."
},
{
  id: "FIX-L1-Q-261",
  question: "Hinges are classed as which type of item?",
  options: [
    "Fixings",
    "Ironmongery",
    "Adhesives",
    "Sealants"
  ],
  correctIndex: 1,
  explanation: "Hinges are hardware items, so they are ironmongery."
},
{
  id: "FIX-L1-Q-262",
  question: "Which of the following is considered a fixing?",
  options: [
    "Handle",
    "Hinge",
    "Screw",
    "Latch"
  ],
  correctIndex: 2,
  explanation: "Screws are classed as fixings."
},
{
  id: "FIX-L1-Q-263",
  question: "Choosing the correct fixing or ironmongery affects:",
  options: [
    "Only the colour",
    "Look and performance",
    "Delivery time",
    "Tool storage"
  ],
  correctIndex: 1,
  explanation: "Choice influences both appearance and how it works."
},
{
  id: "FIX-L1-Q-264",
  question: "Most fixings and ironmongery are made from:",
  options: [
    "Plastic only",
    "Ferrous or non-ferrous metal",
    "Concrete",
    "Timber"
  ],
  correctIndex: 1,
  explanation: "They are mainly metal based."
},
{
  id: "FIX-L1-Q-265",
  question: "Ferrous metals contain:",
  options: [
    "Copper",
    "Iron",
    "Aluminium",
    "Zinc"
  ],
  correctIndex: 1,
  explanation: "Ferrous means iron is present."
},
{
  id: "FIX-L1-Q-266",
  question: "What is the main risk with ferrous metals in damp conditions?",
  options: [
    "Bending",
    "Rust",
    "Stretching",
    "Melting"
  ],
  correctIndex: 1,
  explanation: "They can corrode."
},
{
  id: "FIX-L1-Q-267",
  question: "Mild steel is usually:",
  options: [
    "The cheapest option",
    "Non-metallic",
    "Plastic coated",
    "Very soft"
  ],
  correctIndex: 0,
  explanation: "It is normally the most economical."
},
{
  id: "FIX-L1-Q-268",
  question: "Adding brass or zinc plating mainly helps to:",
  options: [
    "Increase weight",
    "Prevent corrosion",
    "Change thread size",
    "Make it magnetic"
  ],
  correctIndex: 1,
  explanation: "The coating improves resistance to rust."
},
{
  id: "FIX-L1-Q-269",
  question: "Iron or steel may stain which timber?",
  options: [
    "Pine",
    "Oak",
    "MDF",
    "Plywood"
  ],
  correctIndex: 1,
  explanation: "Acidic timbers like oak can react."
},
{
  id: "FIX-L1-Q-270",
  question: "Stainless steel is suitable for external use because it is:",
  options: [
    "Painted",
    "Lightweight",
    "Rust resistant",
    "Cheap"
  ],
  correctIndex: 2,
  explanation: "Its manufacture makes it highly corrosion resistant."
},
{
  id: "FIX-L1-Q-271",
  question: "Non-ferrous metals contain:",
  options: [
    "Iron",
    "Carbon",
    "No iron",
    "Magnetite"
  ],
  correctIndex: 2,
  explanation: "They are metals without iron."
},
{
  id: "FIX-L1-Q-272",
  question: "Brass and aluminium are generally:",
  options: [
    "Harder than steel",
    "Softer than steel",
    "Magnetic",
    "Brittle"
  ],
  correctIndex: 1,
  explanation: "They can shear more easily."
},
{
  id: "FIX-L1-Q-273",
  question: "Why can brass screws fail in hardwood?",
  options: [
    "They are too long",
    "They are soft",
    "They rust fast",
    "They expand"
  ],
  correctIndex: 1,
  explanation: "Brass is weaker than steel."
},
{
  id: "FIX-L1-Q-274",
  question: "Which of these is a main fixing category?",
  options: [
    "Hinges",
    "Locks",
    "Adhesives",
    "Knobs"
  ],
  correctIndex: 2,
  explanation: "Adhesives are a fixing type."
},
{
  id: "FIX-L1-Q-275",
  question: "Cut clasp nails are also known as:",
  options: [
    "Panel pins",
    "Floor brads",
    "Lost heads",
    "Clouts"
  ],
  correctIndex: 1,
  explanation: "That is their common name."
},
{
  id: "FIX-L1-Q-276",
  question: "The blunt point of a cut clasp nail helps reduce:",
  options: [
    "Noise",
    "Splitting",
    "Corrosion",
    "Weight"
  ],
  correctIndex: 1,
  explanation: "It is less likely to split timber."
},
{
  id: "FIX-L1-Q-277",
  question: "Lost head nails are chosen mainly to:",
  options: [
    "Increase strength",
    "Hide the head",
    "Speed up drilling",
    "Resist rust"
  ],
  correctIndex: 1,
  explanation: "They can be punched below the surface."
},
{
  id: "FIX-L1-Q-278",
  question: "Compared with oval nails, round head nails usually:",
  options: [
    "Hold better",
    "Are invisible",
    "Cost less",
    "Rust quicker"
  ],
  correctIndex: 0,
  explanation: "They give greater holding power."
},
{
  id: "FIX-L1-Q-279",
  question: "What feature improves pull-out resistance in ring shank nails?",
  options: [
    "Sharp tips",
    "Large heads",
    "Raised ridges",
    "Extra length"
  ],
  correctIndex: 2,
  explanation: "The ridges grip the timber."
},
{
  id: "FIX-L1-Q-280",
  question: "Galvanised clout nails are mainly used:",
  options: [
    "Inside cupboards",
    "Outside",
    "In furniture joints",
    "With glue only"
  ],
  correctIndex: 1,
  explanation: "They are intended for external work."
},
{
  id: "FIX-L1-Q-281",
  question: "Collated nails are normally supplied as:",
  options: [
    "Loose in a box",
    "Welded to washers",
    "Glued into strips",
    "Tied with wire"
  ],
  correctIndex: 2,
  explanation: "They are held together in strips for nailers."
},
{
  id: "FIX-L1-Q-282",
  question: "Collated nails are driven using:",
  options: [
    "A hammer",
    "A power fastener",
    "A screwdriver",
    "A spanner"
  ],
  correctIndex: 1,
  explanation: "They are designed for nail guns."
},
{
  id: "FIX-L1-Q-283",
  question: "Heavy, long collated nails are typically used for:",
  options: [
    "Picture frames",
    "Roof members",
    "Cabinet backs",
    "Drawer bottoms"
  ],
  correctIndex: 1,
  explanation: "They are suitable for structural work."
},
{
  id: "FIX-L1-Q-284",
  question: "Light gauge collated brads are common for:",
  options: [
    "Concrete",
    "Roof trusses",
    "Skirting and architraves",
    "Steel beams"
  ],
  correctIndex: 2,
  explanation: "Used for lighter finishing work."
},
{
  id: "FIX-L1-Q-285",
  question: "Masonry nails are made for fixing into:",
  options: [
    "Oak",
    "Plywood",
    "Brickwork",
    "Plasterboard"
  ],
  correctIndex: 2,
  explanation: "They are hardened for masonry."
},
{
  id: "FIX-L1-Q-286",
  question: "PVCu fixing nails are usually:",
  options: [
    "Aluminium",
    "Copper",
    "Stainless steel",
    "Brass"
  ],
  correctIndex: 2,
  explanation: "They must resist corrosion."
},
{
  id: "FIX-L1-Q-287",
  question: "What improves pull resistance on PVCu nails?",
  options: [
    "Painted heads",
    "Annular rings",
    "Extra glue",
    "Flat points"
  ],
  correctIndex: 1,
  explanation: "The rings grip once fitted."
},
{
  id: "FIX-L1-Q-288",
  question: "The 2½ rule helps decide:",
  options: [
    "Drill speed",
    "Nail length",
    "Head type",
    "Driver size"
  ],
  correctIndex: 1,
  explanation: "Length should be about 2.5 times thickness."
},
{
  id: "FIX-L1-Q-289",
  question: "If timber is 20 mm thick, the nail should be about:",
  options: [
    "20 mm",
    "30 mm",
    "40 mm",
    "50 mm"
  ],
  correctIndex: 3,
  explanation: "2.5 × 20 mm ≈ 50 mm."
},
{
  id: "FIX-L1-Q-290",
  question: "Screws differ mainly in:",
  options: [
    "Colour only",
    "Size, material and head shape",
    "Weight",
    "Brand"
  ],
  correctIndex: 1,
  explanation: "These determine suitability."
},
{
  id: "FIX-L1-Q-291",
  question: "Using the correct driver bit is important to avoid:",
  options: [
    "Rust",
    "Noise",
    "Head damage",
    "Overheating"
  ],
  correctIndex: 2,
  explanation: "Wrong bits ruin the recess."
},
{
  id: "FIX-L1-Q-292",
  question: "In metric screw sizing, the first number gives:",
  options: [
    "Length",
    "Diameter",
    "Head depth",
    "Thread type"
  ],
  correctIndex: 1,
  explanation: "It is the diameter in mm."
},
{
  id: "FIX-L1-Q-293",
  question: "A bigger screw number usually means:",
  options: [
    "Longer",
    "Thicker",
    "Shinier",
    "Lighter"
  ],
  correctIndex: 1,
  explanation: "Higher number = greater diameter."
},
{
  id: "FIX-L1-Q-294",
  question: "Screw length measurement does NOT include:",
  options: [
    "The thread",
    "The tip",
    "A raised head",
    "The shank"
  ],
  correctIndex: 2,
  explanation: "Head height is excluded."
},
{
  id: "FIX-L1-Q-295",
  question: "Which is NOT a main part of a screw?",
  options: [
    "Head",
    "Thread",
    "Pin",
    "Tip"
  ],
  correctIndex: 2,
  explanation: "Pin is not a screw component."
},
{
  id: "FIX-L1-Q-296",
  question: "A countersunk screw is designed to finish:",
  options: [
    "Proud",
    "Flush",
    "Loose",
    "Rounded"
  ],
  correctIndex: 1,
  explanation: "It sits level or slightly below."
},
{
  id: "FIX-L1-Q-297",
  question: "Raised or pan heads are meant to:",
  options: [
    "Disappear",
    "Sit proud",
    "Be hidden",
    "Split timber"
  ],
  correctIndex: 1,
  explanation: "They remain visible."
},
{
  id: "FIX-L1-Q-298",
  question: "Washer heads help mainly to:",
  options: [
    "Decorate",
    "Reduce splitting",
    "Shorten length",
    "Hide holes"
  ],
  correctIndex: 1,
  explanation: "They spread the load."
},
{
  id: "FIX-L1-Q-299",
  question: "Round head screws have a top that is:",
  options: [
    "Flat",
    "Domed",
    "Sharp",
    "Indented"
  ],
  correctIndex: 1,
  explanation: "They are curved."
},
{
  id: "FIX-L1-Q-300",
  question: "Bulge heads are useful in plasterboard because they reduce:",
  options: [
    "Weight",
    "Paper tearing",
    "Noise",
    "Cost"
  ],
  correctIndex: 1,
  explanation: "The curve protects the surface."
},
{
  id: "FIX-L1-Q-301",
  question: "The thread on a screw mainly:",
  options: [
    "Supports the head",
    "Pulls it into material",
    "Stops rust forming",
    "Holds the driver"
  ],
  correctIndex: 1,
  explanation: "The thread draws the screw into the work."
},
{
  id: "FIX-L1-Q-302",
  question: "Part-thread screws leave plain shank near the:",
  options: [
    "Tip",
    "Middle",
    "Head",
    "Point"
  ],
  correctIndex: 2,
  explanation: "The smooth section is close to the head."
},
{
  id: "FIX-L1-Q-303",
  question: "Fully threaded screws may reduce contact unless you drill a:",
  options: [
    "Pilot hole",
    "Counterbore",
    "Clearance hole",
    "Slot"
  ],
  correctIndex: 2,
  explanation: "Clearance lets parts pull tight."
},
{
  id: "FIX-L1-Q-304",
  question: "A clearance hole should be drilled in the:",
  options: [
    "Bottom piece",
    "Top piece",
    "Both pieces",
    "Frame only"
  ],
  correctIndex: 1,
  explanation: "It allows the screw to pass freely."
},
{
  id: "FIX-L1-Q-305",
  question: "A clearance hole is usually:",
  options: [
    "Smaller than screw",
    "Same as screw",
    "Bigger than screw",
    "Half size"
  ],
  correctIndex: 2,
  explanation: "The screw must not bind."
},
{
  id: "FIX-L1-Q-306",
  question: "Twin thread screws generally:",
  options: [
    "Drive slower",
    "Need glue",
    "Drive faster",
    "Are weaker"
  ],
  correctIndex: 2,
  explanation: "Two spirals increase speed."
},
{
  id: "FIX-L1-Q-307",
  question: "Twin thread screws are often:",
  options: [
    "Cheaper",
    "Weaker",
    "Stronger",
    "Shorter"
  ],
  correctIndex: 2,
  explanation: "They usually grip better."
},
{
  id: "FIX-L1-Q-308",
  question: "Serrated threads require:",
  options: [
    "More force",
    "Less force",
    "Extra glue",
    "Hammer blows"
  ],
  correctIndex: 1,
  explanation: "They cut more easily."
},
{
  id: "FIX-L1-Q-309",
  question: "Self-cutting tips help reduce:",
  options: [
    "Cost",
    "Noise",
    "Splitting",
    "Weight"
  ],
  correctIndex: 2,
  explanation: "They ease entry near ends."
},
{
  id: "FIX-L1-Q-310",
  question: "With part-thread screws, good practice is to:",
  options: [
    "Avoid drilling",
    "Use clearance",
    "Shorten screw",
    "Use glue"
  ],
  correctIndex: 1,
  explanation: "It ensures tight contact."
},
{
  id: "FIX-L1-Q-311",
  question: "Which is a common screw material?",
  options: [
    "Plastic",
    "Carbon steel",
    "Glass",
    "Rubber"
  ],
  correctIndex: 1,
  explanation: "Very widely used."
},
{
  id: "FIX-L1-Q-312",
  question: "Yellow passivated screws are usually:",
  options: [
    "Untreated",
    "Zinc coated",
    "Copper plated",
    "Painted"
  ],
  correctIndex: 1,
  explanation: "They have a protective finish."
},
{
  id: "FIX-L1-Q-313",
  question: "Yellow passivated screws are suitable for:",
  options: [
    "Inside only",
    "Outside only",
    "Both locations",
    "Dry storage"
  ],
  correctIndex: 2,
  explanation: "They resist corrosion well."
},
{
  id: "FIX-L1-Q-314",
  question: "Quicksilver screws are mainly for:",
  options: [
    "Exterior decks",
    "Interior use",
    "Concrete",
    "Roof tiles"
  ],
  correctIndex: 1,
  explanation: "They are general indoor screws."
},
{
  id: "FIX-L1-Q-315",
  question: "Stainless screws are ideal for:",
  options: [
    "Temporary jobs",
    "Hidden joints",
    "Damp conditions",
    "Softwood only"
  ],
  correctIndex: 2,
  explanation: "They resist corrosion."
},
{
  id: "FIX-L1-Q-316",
  question: "Stainless steel will stain oak:",
  options: [
    "Always",
    "Sometimes",
    "Never",
    "Quickly"
  ],
  correctIndex: 2,
  explanation: "It avoids the reaction."
},
{
  id: "FIX-L1-Q-317",
  question: "Brass screws are known for being:",
  options: [
    "Very hard",
    "Very soft",
    "Magnetic",
    "Cheap"
  ],
  correctIndex: 1,
  explanation: "They can shear easily."
},
{
  id: "FIX-L1-Q-318",
  question: "Driving brass into hardwood without prep may cause:",
  options: [
    "Better grip",
    "Breakage",
    "Rust",
    "Noise"
  ],
  correctIndex: 1,
  explanation: "They can snap."
},
{
  id: "FIX-L1-Q-319",
  question: "A steel screw can be driven first to:",
  options: [
    "Decorate",
    "Lubricate",
    "Form thread",
    "Shorten hole"
  ],
  correctIndex: 2,
  explanation: "It prepares the path."
},
{
  id: "FIX-L1-Q-320",
  question: "Wax on a brass screw helps to:",
  options: [
    "Colour match",
    "Prevent breakage",
    "Increase size",
    "Hide head"
  ],
  correctIndex: 1,
  explanation: "It makes driving easier."
},
{
  id: "FIX-L1-Q-321",
  question: "A slotted screw head contains:",
  options: [
    "Two crosses",
    "A square hole",
    "One straight slot",
    "A star shape"
  ],
  correctIndex: 2,
  explanation: "Traditional single slot design."
},
{
  id: "FIX-L1-Q-322",
  question: "A common problem with slotted screws is:",
  options: [
    "Too strong",
    "Driver slipping",
    "Too expensive",
    "Too deep"
  ],
  correctIndex: 1,
  explanation: "The blade can easily slip out."
},
{
  id: "FIX-L1-Q-323",
  question: "When finished, a slotted screw should be left:",
  options: [
    "Horizontal",
    "Angled",
    "Vertical",
    "Hidden"
  ],
  correctIndex: 2,
  explanation: "Vertical alignment is the neat finish."
},
{
  id: "FIX-L1-Q-324",
  question: "Phillips screws are identified by a:",
  options: [
    "Straight line",
    "Cross recess",
    "Square hole",
    "Hexagon"
  ],
  correctIndex: 1,
  explanation: "They have a cross shape."
},
{
  id: "FIX-L1-Q-325",
  question: "Compared to slotted screws, Phillips provide:",
  options: [
    "Less grip",
    "More slipping",
    "Better grip",
    "More rust"
  ],
  correctIndex: 2,
  explanation: "The driver holds better."
},
{
  id: "FIX-L1-Q-326",
  question: "Pozidriv screws can be recognised by:",
  options: [
    "Single slot",
    "Two crosses",
    "Round hole",
    "Star points"
  ],
  correctIndex: 1,
  explanation: "They include a secondary cross."
},
{
  id: "FIX-L1-Q-327",
  question: "The most common Pozidriv size is:",
  options: [
    "Size 0",
    "Size 1",
    "Size 2",
    "Size 4"
  ],
  correctIndex: 2,
  explanation: "PZ2 is the everyday size."
},
{
  id: "FIX-L1-Q-328",
  question: "Mixing Phillips and Pozidriv bits usually causes:",
  options: [
    "Faster driving",
    "Head damage",
    "Better finish",
    "Less torque"
  ],
  correctIndex: 1,
  explanation: "The fit is incorrect."
},
{
  id: "FIX-L1-Q-329",
  question: "Torx screws are shaped like a:",
  options: [
    "Triangle",
    "Star",
    "Circle",
    "Square"
  ],
  correctIndex: 1,
  explanation: "They have a six-point star."
},
{
  id: "FIX-L1-Q-330",
  question: "The main advantage of Torx is:",
  options: [
    "Lower cost",
    "Higher torque",
    "Shorter length",
    "Softer metal"
  ],
  correctIndex: 1,
  explanation: "They transfer more turning force."
},
{
  id: "FIX-L1-Q-331",
  question: "Square recess screws are common in:",
  options: [
    "Concrete",
    "Furniture",
    "Roofing",
    "Brickwork"
  ],
  correctIndex: 1,
  explanation: "Often used with jigs."
},
{
  id: "FIX-L1-Q-332",
  question: "A hex recess screw is driven with a:",
  options: [
    "Phillips bit",
    "Flat blade",
    "Allen key",
    "Punch"
  ],
  correctIndex: 2,
  explanation: "Also called a hex key."
},
{
  id: "FIX-L1-Q-333",
  question: "Using the wrong driver bit can make removal:",
  options: [
    "Easier",
    "Harder",
    "Cleaner",
    "Silent"
  ],
  correctIndex: 1,
  explanation: "Damage makes gripping difficult."
},
{
  id: "FIX-L1-Q-334",
  question: "If a screw head must not be visible, you can:",
  options: [
    "Polish it",
    "Paint it",
    "Fill it",
    "Hammer it"
  ],
  correctIndex: 2,
  explanation: "Filler hides the fixing."
},
{
  id: "FIX-L1-Q-335",
  question: "For clear finishes, fillers are often:",
  options: [
    "Ideal",
    "Invisible",
    "Unsuitable",
    "Required"
  ],
  correctIndex: 2,
  explanation: "Better concealment methods are needed."
},
{
  id: "FIX-L1-Q-336",
  question: "Timber pellets are mainly used to:",
  options: [
    "Strengthen hinges",
    "Hide screw heads",
    "Shorten screws",
    "Seal gaps"
  ],
  correctIndex: 1,
  explanation: "They conceal the fixing."
},
{
  id: "FIX-L1-Q-337",
  question: "Pellet grain should:",
  options: [
    "Run opposite",
    "Be random",
    "Match surrounding",
    "Be darker"
  ],
  correctIndex: 2,
  explanation: "So it blends in."
},
{
  id: "FIX-L1-Q-338",
  question: "Pellets can be produced using:",
  options: [
    "A chisel",
    "A plug cutter",
    "A rasp",
    "A clamp"
  ],
  correctIndex: 1,
  explanation: "This makes matching plugs."
},
{
  id: "FIX-L1-Q-339",
  question: "Minimum depth for a pellet is about:",
  options: [
    "3 mm",
    "4 mm",
    "6 mm",
    "10 mm"
  ],
  correctIndex: 2,
  explanation: "Enough room must be left."
},
{
  id: "FIX-L1-Q-340",
  question: "Pellets should be glued in:",
  options: [
    "Before fixing",
    "While loose",
    "After checking",
    "Before drilling"
  ],
  correctIndex: 2,
  explanation: "Fit once position is confirmed."
},
{
  id: "FIX-L1-Q-341",
  question: "After gluing pellets, trimming should happen:",
  options: [
    "Immediately",
    "Before fitting",
    "After glue sets",
    "During fixing"
  ],
  correctIndex: 2,
  explanation: "Cutting too early can pull them out."
},
{
  id: "FIX-L1-Q-342",
  question: "Pellets are normally finished flush using:",
  options: [
    "A hammer",
    "A chisel or plane",
    "A screwdriver",
    "A drill"
  ],
  correctIndex: 1,
  explanation: "Then sanded smooth."
},
{
  id: "FIX-L1-Q-343",
  question: "Coach screws are considered:",
  options: [
    "Light duty",
    "Decorative",
    "Heavy duty",
    "Temporary"
  ],
  correctIndex: 2,
  explanation: "They are used for strong structural fixing."
},
{
  id: "FIX-L1-Q-344",
  question: "A coach screw usually has what head?",
  options: [
    "Round",
    "Hex",
    "Raised",
    "Countersunk"
  ],
  correctIndex: 1,
  explanation: "Driven with a spanner or socket."
},
{
  id: "FIX-L1-Q-345",
  question: "Coach screws fixing heavy timbers require:",
  options: [
    "No drilling",
    "A clearance hole",
    "Glue only",
    "A washer only"
  ],
  correctIndex: 1,
  explanation: "Prevents splitting and aids tightening."
},
{
  id: "FIX-L1-Q-346",
  question: "Coach bolts are identified by a:",
  options: [
    "Slotted head",
    "Domed head",
    "Flat top",
    "Cross recess"
  ],
  correctIndex: 1,
  explanation: "Often rounded."
},
{
  id: "FIX-L1-Q-347",
  question: "Under the head of a coach bolt is a:",
  options: [
    "Thread",
    "Square section",
    "Washer",
    "Slot"
  ],
  correctIndex: 1,
  explanation: "Stops rotation."
},
{
  id: "FIX-L1-Q-348",
  question: "Coach bolts tighten using a:",
  options: [
    "Glue line",
    "Nail",
    "Nut and washer",
    "Clip"
  ],
  correctIndex: 2,
  explanation: "They clamp materials together."
},
{
  id: "FIX-L1-Q-349",
  question: "Dog tooth connectors are fitted:",
  options: [
    "On the head",
    "Between timbers",
    "In the thread",
    "Under hinges"
  ],
  correctIndex: 1,
  explanation: "They sit on the bolt."
},
{
  id: "FIX-L1-Q-350",
  question: "The teeth on the connector help to:",
  options: [
    "Decorate",
    "Grip timber",
    "Shorten bolts",
    "Seal joints"
  ],
  correctIndex: 1,
  explanation: "They prevent slipping."
},
{
  id: "FIX-L1-Q-351",
  question: "Masonry is difficult for wood screws because it is:",
  options: [
    "Too soft",
    "Too smooth",
    "Porous and brittle",
    "Too thin"
  ],
  correctIndex: 2,
  explanation: "Threads cannot bite properly."
},
{
  id: "FIX-L1-Q-352",
  question: "A wall plug allows the screw to:",
  options: [
    "Spin freely",
    "Look neat",
    "Hold securely",
    "Shorten"
  ],
  correctIndex: 2,
  explanation: "It provides grip."
},
{
  id: "FIX-L1-Q-353",
  question: "Most modern wall plugs are made from:",
  options: [
    "Rubber",
    "Steel",
    "Nylon",
    "Copper"
  ],
  correctIndex: 2,
  explanation: "Earlier ones were timber or fibre."
},
{
  id: "FIX-L1-Q-354",
  question: "The drilled hole for a plug must match the:",
  options: [
    "Screw length",
    "Plug diameter",
    "Wall height",
    "Head shape"
  ],
  correctIndex: 1,
  explanation: "Too loose and it will fail."
},
{
  id: "FIX-L1-Q-355",
  question: "In weak or crumbly masonry you should drill:",
  options: [
    "Slightly smaller",
    "Much larger",
    "Deeper only",
    "At an angle"
  ],
  correctIndex: 0,
  explanation: "Gives a tighter fit."
},
{
  id: "FIX-L1-Q-356",
  question: "Yellow wall plugs suit screws of around:",
  options: [
    "3 mm",
    "5 mm",
    "7 mm",
    "10 mm"
  ],
  correctIndex: 0,
  explanation: "Small general fixings."
},
{
  id: "FIX-L1-Q-357",
  question: "Red plugs normally take screws up to about:",
  options: [
    "2 mm",
    "4 mm",
    "6 mm",
    "8 mm"
  ],
  correctIndex: 1,
  explanation: "Mid-range size."
},
{
  id: "FIX-L1-Q-358",
  question: "Brown plugs usually require a hole near:",
  options: [
    "4 mm",
    "5 mm",
    "7 mm",
    "12 mm"
  ],
  correctIndex: 2,
  explanation: "Larger fixing."
},
{
  id: "FIX-L1-Q-359",
  question: "Standard masonry plugs are weak in:",
  options: [
    "Oak",
    "Concrete",
    "Cavity walls",
    "Steel"
  ],
  correctIndex: 2,
  explanation: "They need spreading types."
},
{
  id: "FIX-L1-Q-360",
  question: "Cavity fixings work by:",
  options: [
    "Melting",
    "Spreading load",
    "Shortening screws",
    "Cutting threads"
  ],
  correctIndex: 1,
  explanation: "They grip behind the board."
},
{
  id: "FIX-L1-Q-341",
  question: "After gluing pellets, trimming should happen:",
  options: [
    "Immediately",
    "Before fitting",
    "After glue sets",
    "During fixing"
  ],
  correctIndex: 2,
  explanation: "Cutting too early can pull them out."
},
{
  id: "FIX-L1-Q-342",
  question: "Pellets are normally finished flush using:",
  options: [
    "A hammer",
    "A chisel or plane",
    "A screwdriver",
    "A drill"
  ],
  correctIndex: 1,
  explanation: "Then sanded smooth."
},
{
  id: "FIX-L1-Q-343",
  question: "Coach screws are considered:",
  options: [
    "Light duty",
    "Decorative",
    "Heavy duty",
    "Temporary"
  ],
  correctIndex: 2,
  explanation: "They are used for strong structural fixing."
},
{
  id: "FIX-L1-Q-344",
  question: "A coach screw usually has what head?",
  options: [
    "Round",
    "Hex",
    "Raised",
    "Countersunk"
  ],
  correctIndex: 1,
  explanation: "Driven with a spanner or socket."
},
{
  id: "FIX-L1-Q-345",
  question: "Coach screws fixing heavy timbers require:",
  options: [
    "No drilling",
    "A clearance hole",
    "Glue only",
    "A washer only"
  ],
  correctIndex: 1,
  explanation: "Prevents splitting and aids tightening."
},
{
  id: "FIX-L1-Q-346",
  question: "Coach bolts are identified by a:",
  options: [
    "Slotted head",
    "Domed head",
    "Flat top",
    "Cross recess"
  ],
  correctIndex: 1,
  explanation: "Often rounded."
},
{
  id: "FIX-L1-Q-347",
  question: "Under the head of a coach bolt is a:",
  options: [
    "Thread",
    "Square section",
    "Washer",
    "Slot"
  ],
  correctIndex: 1,
  explanation: "Stops rotation."
},
{
  id: "FIX-L1-Q-348",
  question: "Coach bolts tighten using a:",
  options: [
    "Glue line",
    "Nail",
    "Nut and washer",
    "Clip"
  ],
  correctIndex: 2,
  explanation: "They clamp materials together."
},
{
  id: "FIX-L1-Q-349",
  question: "Dog tooth connectors are fitted:",
  options: [
    "On the head",
    "Between timbers",
    "In the thread",
    "Under hinges"
  ],
  correctIndex: 1,
  explanation: "They sit on the bolt."
},
{
  id: "FIX-L1-Q-350",
  question: "The teeth on the connector help to:",
  options: [
    "Decorate",
    "Grip timber",
    "Shorten bolts",
    "Seal joints"
  ],
  correctIndex: 1,
  explanation: "They prevent slipping."
},
{
  id: "FIX-L1-Q-351",
  question: "Masonry is difficult for wood screws because it is:",
  options: [
    "Too soft",
    "Too smooth",
    "Porous and brittle",
    "Too thin"
  ],
  correctIndex: 2,
  explanation: "Threads cannot bite properly."
},
{
  id: "FIX-L1-Q-352",
  question: "A wall plug allows the screw to:",
  options: [
    "Spin freely",
    "Look neat",
    "Hold securely",
    "Shorten"
  ],
  correctIndex: 2,
  explanation: "It provides grip."
},
{
  id: "FIX-L1-Q-353",
  question: "Most modern wall plugs are made from:",
  options: [
    "Rubber",
    "Steel",
    "Nylon",
    "Copper"
  ],
  correctIndex: 2,
  explanation: "Earlier ones were timber or fibre."
},
{
  id: "FIX-L1-Q-354",
  question: "The drilled hole for a plug must match the:",
  options: [
    "Screw length",
    "Plug diameter",
    "Wall height",
    "Head shape"
  ],
  correctIndex: 1,
  explanation: "Too loose and it will fail."
},
{
  id: "FIX-L1-Q-355",
  question: "In weak or crumbly masonry you should drill:",
  options: [
    "Slightly smaller",
    "Much larger",
    "Deeper only",
    "At an angle"
  ],
  correctIndex: 0,
  explanation: "Gives a tighter fit."
},
{
  id: "FIX-L1-Q-356",
  question: "Yellow wall plugs suit screws of around:",
  options: [
    "3 mm",
    "5 mm",
    "7 mm",
    "10 mm"
  ],
  correctIndex: 0,
  explanation: "Small general fixings."
},
{
  id: "FIX-L1-Q-357",
  question: "Red plugs normally take screws up to about:",
  options: [
    "2 mm",
    "4 mm",
    "6 mm",
    "8 mm"
  ],
  correctIndex: 1,
  explanation: "Mid-range size."
},
{
  id: "FIX-L1-Q-358",
  question: "Brown plugs usually require a hole near:",
  options: [
    "4 mm",
    "5 mm",
    "7 mm",
    "12 mm"
  ],
  correctIndex: 2,
  explanation: "Larger fixing."
},
{
  id: "FIX-L1-Q-359",
  question: "Standard masonry plugs are weak in:",
  options: [
    "Oak",
    "Concrete",
    "Cavity walls",
    "Steel"
  ],
  correctIndex: 2,
  explanation: "They need spreading types."
},
{
  id: "FIX-L1-Q-360",
  question: "Cavity fixings work by:",
  options: [
    "Melting",
    "Spreading load",
    "Shortening screws",
    "Cutting threads"
  ],
  correctIndex: 1,
  explanation: "They grip behind the board."
},
{
  id: "FIX-L1-Q-361",
  question: "Nylon expanding anchors are best described as:",
  options: [
    "High cost",
    "Plastic fixing",
    "Decorative item",
    "Steel bolt"
  ],
  correctIndex: 1,
  explanation: "They expand as the screw tightens."
},
{
  id: "FIX-L1-Q-362",
  question: "Nylon anchors are NOT suitable for:",
  options: [
    "Light loads",
    "Medium loads",
    "Heavy loads",
    "Timber boards"
  ],
  correctIndex: 2,
  explanation: "They are simple and cheap."
},
{
  id: "FIX-L1-Q-363",
  question: "Metal expanding anchors require a:",
  options: [
    "Setting tool",
    "Hammer only",
    "Adhesive",
    "Punch"
  ],
  correctIndex: 0,
  explanation: "Used to expand behind the board."
},
{
  id: "FIX-L1-Q-364",
  question: "Compared with nylon versions, metal anchors are:",
  options: [
    "Weaker",
    "Faster",
    "Stronger",
    "Shorter"
  ],
  correctIndex: 2,
  explanation: "They carry heavier loads."
},
{
  id: "FIX-L1-Q-365",
  question: "Self-drilling plasterboard anchors should be fitted:",
  options: [
    "By machine",
    "With glue",
    "By hand",
    "With hammer"
  ],
  correctIndex: 2,
  explanation: "Power drivers can strip the board."
},
{
  id: "FIX-L1-Q-366",
  question: "Self-drilling anchors cut:",
  options: [
    "Nothing",
    "Their own hole",
    "A steel plate",
    "A timber plug"
  ],
  correctIndex: 1,
  explanation: "No predrilling needed."
},
{
  id: "FIX-L1-Q-367",
  question: "Gripit fixings include:",
  options: [
    "Glue pads",
    "Anti-rotation fins",
    "Loose washers",
    "Steel wedges"
  ],
  correctIndex: 1,
  explanation: "They stop spinning."
},
{
  id: "FIX-L1-Q-368",
  question: "Gripit fixings are generally:",
  options: [
    "Cheap",
    "Disposable",
    "More expensive",
    "Temporary"
  ],
  correctIndex: 2,
  explanation: "Premium option."
},
{
  id: "FIX-L1-Q-369",
  question: "Bench adhesives usually:",
  options: [
    "Grab instantly",
    "Need clamping",
    "Melt",
    "Dry without pressure"
  ],
  correctIndex: 1,
  explanation: "Often slower setting."
},
{
  id: "FIX-L1-Q-370",
  question: "Site adhesives are often chosen because they:",
  options: [
    "Look better",
    "Set faster",
    "Are cheaper",
    "Need mixing"
  ],
  correctIndex: 1,
  explanation: "Useful for quick work."
},
{
  id: "FIX-L1-Q-371",
  question: "PVA adhesive dries mainly because:",
  options: [
    "It cools",
    "Water leaves",
    "Air heats it",
    "Pressure sets it"
  ],
  correctIndex: 1,
  explanation: "Moisture evaporates or absorbs."
},
{
  id: "FIX-L1-Q-372",
  question: "If PVA squeeze-out is left it may:",
  options: [
    "Strengthen",
    "Discolour",
    "Harden metal",
    "Stop curing"
  ],
  correctIndex: 1,
  explanation: "Especially on hardwoods."
},
{
  id: "FIX-L1-Q-373",
  question: "PU adhesive reacts when exposed to:",
  options: [
    "Oil",
    "Light",
    "Air",
    "Dust"
  ],
  correctIndex: 2,
  explanation: "It foams."
},
{
  id: "FIX-L1-Q-374",
  question: "PU excess should be removed:",
  options: [
    "Immediately",
    "Before fitting",
    "After it dries",
    "While wet"
  ],
  correctIndex: 2,
  explanation: "Easier to scrape."
},
{
  id: "FIX-L1-Q-375",
  question: "When using PU adhesive you should wear:",
  options: [
    "Glasses",
    "Apron",
    "Gloves",
    "Helmet"
  ],
  correctIndex: 2,
  explanation: "Avoid skin bonding."
},
{
  id: "FIX-L1-Q-376",
  question: "UF adhesive comes as a:",
  options: [
    "Liquid",
    "Powder",
    "Foam",
    "Gel"
  ],
  correctIndex: 1,
  explanation: "Mixed with water."
},
{
  id: "FIX-L1-Q-377",
  question: "UF adhesive is popular for high-quality work because it:",
  options: [
    "Sets slowly",
    "Does not stain",
    "Foams",
    "Is flexible"
  ],
  correctIndex: 1,
  explanation: "Clean appearance."
},
{
  id: "FIX-L1-Q-378",
  question: "Grab adhesive is normally applied with a:",
  options: [
    "Brush",
    "Roller",
    "Skeleton gun",
    "Knife"
  ],
  correctIndex: 2,
  explanation: "Comes in cartridges."
},
{
  id: "FIX-L1-Q-379",
  question: "Grab adhesive is often used for:",
  options: [
    "Roof tiles",
    "Architraves",
    "Metal welding",
    "Glass"
  ],
  correctIndex: 1,
  explanation: "Helps on uneven walls."
},
{
  id: "FIX-L1-Q-380",
  question: "Contact adhesive bonds when:",
  options: [
    "Cold",
    "Screwed",
    "Touch dry",
    "Painted"
  ],
  correctIndex: 2,
  explanation: "Bond is instant."
},
{
  id: "FIX-L1-Q-401",
  question: "Loose pin butt hinges allow the door to:",
  options: [
    "Slide away",
    "Lift off",
    "Lock tight",
    "Fold flat"
  ],
  correctIndex: 1,
  explanation: "Pin removal lets the door lift clear."
},
{
  id: "FIX-L1-Q-402",
  question: "Loose pin hinges should NOT be used on:",
  options: [
    "Cupboards",
    "Internal doors",
    "Outward external doors",
    "Light frames"
  ],
  correctIndex: 2,
  explanation: "Security risk."
},
{
  id: "FIX-L1-Q-403",
  question: "Lift-off hinges are handed:",
  options: [
    "No",
    "Sometimes",
    "Yes",
    "Rarely"
  ],
  correctIndex: 2,
  explanation: "Left or right versions."
},
{
  id: "FIX-L1-Q-404",
  question: "On lift-off hinges the long pin is usually at the:",
  options: [
    "Top",
    "Bottom",
    "Side",
    "Centre"
  ],
  correctIndex: 1,
  explanation: "Short pin top."
},
{
  id: "FIX-L1-Q-405",
  question: "Rising butt hinges help doors clear:",
  options: [
    "Paint",
    "Frames",
    "Carpets",
    "Stops"
  ],
  correctIndex: 2,
  explanation: "Door lifts as it opens."
},
{
  id: "FIX-L1-Q-406",
  question: "Rising hinges provide what extra action?",
  options: [
    "Locking",
    "Sliding",
    "Self closing",
    "Damping"
  ],
  correctIndex: 2,
  explanation: "Gravity helps shut."
},
{
  id: "FIX-L1-Q-407",
  question: "Parliament hinges are extra wide to:",
  options: [
    "Look good",
    "Clear wall",
    "Hide gaps",
    "Stop wear"
  ],
  correctIndex: 1,
  explanation: "Allows door to fold back."
},
{
  id: "FIX-L1-Q-408",
  question: "Flush hinges are normally used on:",
  options: [
    "Heavy doors",
    "Fire doors",
    "Lightweight doors",
    "External gates"
  ],
  correctIndex: 2,
  explanation: "Surface mounted."
},
{
  id: "FIX-L1-Q-409",
  question: "Flush hinges require:",
  options: [
    "Deep mortice",
    "Large drill",
    "No recess",
    "Steel plate"
  ],
  correctIndex: 2,
  explanation: "They sit on surface."
},
{
  id: "FIX-L1-Q-410",
  question: "Spring hinges are designed to:",
  options: [
    "Hold open",
    "Self close",
    "Lift up",
    "Slide"
  ],
  correctIndex: 1,
  explanation: "Automatic return."
},
{
  id: "FIX-L1-Q-411",
  question: "Single-action spring hinges open:",
  options: [
    "Both ways",
    "One way",
    "Upward",
    "Sideways"
  ],
  correctIndex: 1,
  explanation: "Return same path."
},
{
  id: "FIX-L1-Q-412",
  question: "Double-action spring hinges can open:",
  options: [
    "Halfway",
    "One way",
    "Both directions",
    "Up only"
  ],
  correctIndex: 2,
  explanation: "Two-way swing."
},
{
  id: "FIX-L1-Q-413",
  question: "Double-action hinges are common in:",
  options: [
    "Bedrooms",
    "Sheds",
    "Corridors",
    "Cupboards"
  ],
  correctIndex: 2,
  explanation: "High traffic."
},
{
  id: "FIX-L1-Q-414",
  question: "Tee hinges are often used on:",
  options: [
    "Gates",
    "Steel doors",
    "Fire exits",
    "Glazed doors"
  ],
  correctIndex: 0,
  explanation: "Matchboard and gate work."
},
{
  id: "FIX-L1-Q-415",
  question: "Hook and band hinges are:",
  options: [
    "Decorative",
    "Light duty",
    "Heavy duty",
    "Hidden"
  ],
  correctIndex: 2,
  explanation: "For big doors."
},
{
  id: "FIX-L1-Q-416",
  question: "Concealed cupboard hinges use a bored recess in the:",
  options: [
    "Frame",
    "Floor",
    "Door",
    "Architrave"
  ],
  correctIndex: 2,
  explanation: "Inside face."
},
{
  id: "FIX-L1-Q-417",
  question: "The most common concealed hinge bore size is:",
  options: [
    "26 mm",
    "30 mm",
    "35 mm",
    "40 mm"
  ],
  correctIndex: 2,
  explanation: "Standard kitchen size."
},
{
  id: "FIX-L1-Q-418",
  question: "Soss hinges are visible when the door is:",
  options: [
    "Closed",
    "Painted",
    "Open",
    "Locked"
  ],
  correctIndex: 2,
  explanation: "Hidden when shut."
},
{
  id: "FIX-L1-Q-419",
  question: "Wrong hinge choice may cause a door to:",
  options: [
    "Shine",
    "Sag",
    "Open faster",
    "Lighten"
  ],
  correctIndex: 1,
  explanation: "Drop over time."
},
{
  id: "FIX-L1-Q-420",
  question: "Most fire doors normally require:",
  options: [
    "Two hinges",
    "Three hinges",
    "One hinge",
    "Four minimum"
  ],
  correctIndex: 1,
  explanation: "Standard requirement."
}
];

