const rawQuestions = [
{
  id: "PWJ-JOINTS-Q-501",
  question: "A frame is square when its diagonals are:",
  options: [
    "Different lengths",
    "Equal lengths",
    "Both curved",
    "Slightly offset"
  ],
  correctIndex: 1,
  explanation: "Matching diagonals confirm squareness."
},
{
  id: "PWJ-JOINTS-Q-502",
  question: "When gluing up, sash clamps are used mainly to:",
  options: [
    "Add decoration",
    "Pull joints together",
    "Cut horn waste",
    "Mark gauge lines"
  ],
  correctIndex: 1,
  explanation: "Clamps draw the assembly tight."
},
{
  id: "PWJ-JOINTS-Q-503",
  question: "Before driving wedges into a frame you should first:",
  options: [
    "Paint the edges",
    "Check it is not twisted",
    "Remove architraves",
    "Fit the hinges"
  ],
  correctIndex: 1,
  explanation: "Twist check comes before wedging."
},
{
  id: "PWJ-JOINTS-Q-504",
  question: "After glue-up, clamps are removed before you:",
  options: [
    "Plane joints flush",
    "Drill pilot holes",
    "Cut housing depth",
    "Mark face sides"
  ],
  correctIndex: 0,
  explanation: "Flush planing follows clamp removal."
},
{
  id: "PWJ-JOINTS-Q-505",
  question: "Sanding smooth should be done using correct:",
  options: [
    "PPE",
    "Wax",
    "Plugs",
    "Bearers"
  ],
  correctIndex: 0,
  explanation: "PPE is required for safe sanding."
},
{
  id: "PWJ-JOINTS-Q-506",
  question: "Good housekeeping reduces the risk of:",
  options: [
    "Warping",
    "Accidents",
    "Staining",
    "Shrinkage"
  ],
  correctIndex: 1,
  explanation: "Clearing debris helps prevent accidents."
},
{
  id: "PWJ-JOINTS-Q-507",
  question: "Reusable timber should be returned to:",
  options: [
    "General waste",
    "Stores",
    "A burn pile",
    "Tool bay"
  ],
  correctIndex: 1,
  explanation: "Reusable material goes back to stores."
},
{
  id: "PWJ-JOINTS-Q-508",
  question: "Before storing tools after use you should:",
  options: [
    "Leave them wet",
    "Clean and check for damage",
    "Sharpen every blade",
    "Label every clamp"
  ],
  correctIndex: 1,
  explanation: "Clean and inspect, then store ready."
},
{
  id: "PWJ-JOINTS-Q-509",
  question: "Damaged tools should be removed from use and:",
  options: [
    "Hidden away",
    "Reported to supervisor or tutor",
    "Used carefully",
    "Returned to stores"
  ],
  correctIndex: 1,
  explanation: "Faults must be reported promptly."
},
{
  id: "PWJ-JOINTS-Q-510",
  question: "A hatch lining is similar in purpose to a:",
  options: [
    "Window sill",
    "Door lining",
    "Roof truss",
    "Floor bearer"
  ],
  correctIndex: 1,
  explanation: "It is built like a lining for loft access."
},
{
  id: "PWJ-JOINTS-Q-511",
  question: "Loft hatches may be made as a removable panel or a:",
  options: [
    "Sliding gate",
    "Hinged door",
    "Fixed board",
    "Mitred frame"
  ],
  correctIndex: 1,
  explanation: "Two common hatch options are listed."
},
{
  id: "PWJ-JOINTS-Q-512",
  question: "Loft hatches are often hung on:",
  options: [
    "Tee hinges",
    "Butt hinges",
    "Spring hinges",
    "Soss hinges"
  ],
  correctIndex: 1,
  explanation: "Butt hinges are the typical choice here."
},
{
  id: "PWJ-JOINTS-Q-513",
  question: "Recommended minimum loft hatch opening is:",
  options: [
    "400 × 400 mm",
    "530 × 530 mm",
    "600 × 450 mm",
    "750 × 750 mm"
  ],
  correctIndex: 1,
  explanation: "Guidance suggests 530 mm by 530 mm."
},
{
  id: "PWJ-JOINTS-Q-514",
  question: "When allowing fitting tolerance you should leave at least:",
  options: [
    "2 mm",
    "15 mm",
    "6 mm",
    "25 mm"
  ],
  correctIndex: 1,
  explanation: "15 mm gives adjustment room."
},
{
  id: "PWJ-JOINTS-Q-515",
  question: "A setting-out rod is mainly used to create a:",
  options: [
    "Cutting list",
    "Glue schedule",
    "Tool inventory",
    "Mitre angle"
  ],
  correctIndex: 0,
  explanation: "Rod helps organise sizes for cutting."
},
{
  id: "PWJ-JOINTS-Q-516",
  question: "For hatch marking, defects should be kept to the:",
  options: [
    "Inside faces",
    "Outside",
    "Hinge edge",
    "Centre line"
  ],
  correctIndex: 1,
  explanation: "Show faces should be cleaner."
},
{
  id: "PWJ-JOINTS-Q-517",
  question: "Tongued housings are used because they are:",
  options: [
    "Quicker",
    "Stronger",
    "Cheaper",
    "Painted"
  ],
  correctIndex: 1,
  explanation: "Tongues add joint strength."
},
{
  id: "PWJ-JOINTS-Q-518",
  question: "When pairing hatch pieces, clamping helps you:",
  options: [
    "Match positions accurately",
    "Reduce glue time",
    "Avoid sanding",
    "Cut horns faster"
  ],
  correctIndex: 0,
  explanation: "Clamping aids consistent transfer."
},
{
  id: "PWJ-JOINTS-Q-519",
  question: "To mark housing depth you set a:",
  options: [
    "Sliding bevel",
    "Marking gauge",
    "Combination square",
    "Spirit level"
  ],
  correctIndex: 1,
  explanation: "Gauge is set to the housing depth."
},
{
  id: "PWJ-JOINTS-Q-520",
  question: "When sawing housings you should stay:",
  options: [
    "On the finished line",
    "In the waste",
    "Outside the marks",
    "Across the grain"
  ],
  correctIndex: 1,
  explanation: "Cuts must remain within waste area."
},
{
  id: "PWJ-JOINTS-Q-521",
  question: "Housing waste removal should be worked from both sides to:",
  options: [
    "Save glue",
    "Prevent break-out",
    "Increase margin",
    "Reduce twist"
  ],
  correctIndex: 1,
  explanation: "Two-side work avoids breakout damage."
},
{
  id: "PWJ-JOINTS-Q-522",
  question: "Blocks between clamp and timber are used to:",
  options: [
    "Increase pressure",
    "Stop clamp marks",
    "Set mitre angles",
    "Hide screw heads"
  ],
  correctIndex: 1,
  explanation: "Blocks protect the timber face."
},
{
  id: "PWJ-JOINTS-Q-523",
  question: "A dry fit is done to check fit and confirm:",
  options: [
    "Screw length",
    "Overall size",
    "Paint colour",
    "Tool sharpness"
  ],
  correctIndex: 1,
  explanation: "Dry fit checks joints and size."
},
{
  id: "PWJ-JOINTS-Q-524",
  question: "Before gluing, pencil and machining marks should be:",
  options: [
    "Painted over",
    "Removed",
    "Deepened",
    "Waxed"
  ],
  correctIndex: 1,
  explanation: "Surfaces should be clean for glue."
},
{
  id: "PWJ-JOINTS-Q-525",
  question: "When fixing hatch joints you should drill pilot holes mainly to:",
  options: [
    "Prevent splitting",
    "Increase twist",
    "Make gaps",
    "Raise fibres"
  ],
  correctIndex: 0,
  explanation: "Pilot holes reduce splitting risk."
},
{
  id: "PWJ-JOINTS-Q-526",
  question: "To check for twist you sight across opposite edges; parallel means:",
  options: [
    "Twisted",
    "Flat",
    "Oversized",
    "Out of square"
  ],
  correctIndex: 1,
  explanation: "Parallel edges indicate no twist."
},
{
  id: "PWJ-JOINTS-Q-527",
  question: "Stops or beads are fixed using oval nails and the heads should be:",
  options: [
    "Left proud",
    "Punched below surface",
    "Filed sharp",
    "Waxed clean"
  ],
  correctIndex: 1,
  explanation: "Punching gives a neat finish."
},
{
  id: "PWJ-JOINTS-Q-528",
  question: "When fitting a hatch panel or door you should leave an even gap of:",
  options: [
    "0.5 mm",
    "2 mm",
    "6 mm",
    "15 mm"
  ],
  correctIndex: 1,
  explanation: "2 mm clearance is specified."
},
{
  id: "PWJ-JOINTS-Q-529",
  question: "Architrave margins are usually set between:",
  options: [
    "2–4 mm",
    "6–9 mm",
    "10–15 mm",
    "20–25 mm"
  ],
  correctIndex: 1,
  explanation: "Typical margin range is 6–9 mm."
},
{
  id: "PWJ-JOINTS-Q-530",
  question: "Margins matter because they allow ironmongery recessing and prevent:",
  options: [
    "Rusting",
    "Binding",
    "Splitting",
    "Staining"
  ],
  correctIndex: 1,
  explanation: "Clearance reduces binding issues."
},
[
{
  id: "PWJ-JOINTS-Q-531",
  question: "To assemble a glued frame during glue-up you may use a:",
  options: [
    "Handsaw",
    "Mallet",
    "Bradawl",
    "Plumb bob"
  ],
  correctIndex: 1,
  explanation: "A mallet helps assemble joints during glue-up."
},
{
  id: "PWJ-JOINTS-Q-532",
  question: "A frame is adjusted during glue-up until the diagonals are:",
  options: [
    "Uneven",
    "Equal",
    "Opposite",
    "Angled"
  ],
  correctIndex: 1,
  explanation: "Equal diagonals indicate the frame is square."
},
{
  id: "PWJ-JOINTS-Q-533",
  question: "After glue-up, excess wedge length should be:",
  options: [
    "Left proud",
    "Trimmed off",
    "Sanded only",
    "Painted over"
  ],
  correctIndex: 1,
  explanation: "Wedges are driven in then trimmed to length."
},
{
  id: "PWJ-JOINTS-Q-534",
  question: "A final finishing step on frames includes easing:",
  options: [
    "Knuckles",
    "Arrises",
    "Backsets",
    "Bearers"
  ],
  correctIndex: 1,
  explanation: "Arrises are eased with abrasive for a better finish."
},
{
  id: "PWJ-JOINTS-Q-535",
  question: "Good housekeeping includes disposing of debris:",
  options: [
    "Randomly",
    "Correctly",
    "Only weekly",
    "In tool boxes"
  ],
  correctIndex: 1,
  explanation: "Debris should be disposed of correctly per procedure."
},
{
  id: "PWJ-JOINTS-Q-536",
  question: "Small timber sections that are not reusable should be:",
  options: [
    "Recycled",
    "Re-nailed",
    "Waxed",
    "Kept on site"
  ],
  correctIndex: 0,
  explanation: "Small sections are recycled where possible."
},
{
  id: "PWJ-JOINTS-Q-537",
  question: "Tools should be stored after use so they are ready for the:",
  options: [
    "Next job",
    "Next delivery",
    "Next inspection only",
    "Next timber order"
  ],
  correctIndex: 0,
  explanation: "Clean, check, then store ready for the next job."
},
{
  id: "PWJ-JOINTS-Q-538",
  question: "A loft hatch lining is commonly finished with:",
  options: [
    "Thresholds",
    "Architraves",
    "Plinth feet",
    "Skirting only"
  ],
  correctIndex: 1,
  explanation: "Hatch linings are finished with architraves."
},
{
  id: "PWJ-JOINTS-Q-539",
  question: "A loft hatch may be secured using a push latch or a:",
  options: [
    "Rim lock",
    "Euro cylinder",
    "Escutcheon",
    "Sash clamp"
  ],
  correctIndex: 0,
  explanation: "Loft hatches may use a push latch or rim lock."
},
{
  id: "PWJ-JOINTS-Q-540",
  question: "When checking an opening before making a hatch, you should confirm it is:",
  options: [
    "Rust proof",
    "Square",
    "Galvanised",
    "Paint grade"
  ],
  correctIndex: 1,
  explanation: "You should check the opening is square."
},
{
  id: "PWJ-JOINTS-Q-541",
  question: "Experienced joiners may skip making a rod because it is mainly for:",
  options: [
    "A cutting list",
    "A risk assessment",
    "A sanding guide",
    "A hinge schedule"
  ],
  correctIndex: 0,
  explanation: "The rod mainly helps create a cutting list."
},
{
  id: "PWJ-JOINTS-Q-542",
  question: "Typical hatch work includes tools like chisels and a:",
  options: [
    "Mallet",
    "Soldering iron",
    "Angle grinder",
    "Paint sprayer"
  ],
  correctIndex: 0,
  explanation: "Chisels and a mallet are listed as typical tools."
},
{
  id: "PWJ-JOINTS-Q-543",
  question: "Using a rod for hatch marking helps transfer:",
  options: [
    "Housing positions",
    "Paint colours",
    "Screw threads",
    "Sandpaper grades"
  ],
  correctIndex: 0,
  explanation: "A rod is used to transfer housing positions."
},
{
  id: "PWJ-JOINTS-Q-544",
  question: "When marking left and right hatch parts, they should be clamped together and lines transferred using a:",
  options: [
    "Try square",
    "Tape measure",
    "Spirit level",
    "Countersink bit"
  ],
  correctIndex: 0,
  explanation: "A try square is used to transfer lines accurately."
},
{
  id: "PWJ-JOINTS-Q-545",
  question: "If using a tongued housing, an extra marking step is to mark the tongue:",
  options: [
    "Colour",
    "Thickness",
    "Length only",
    "Grain direction"
  ],
  correctIndex: 1,
  explanation: "Tongue thickness is marked on the ends."
},
{
  id: "PWJ-JOINTS-Q-546",
  question: "When chiselling housings, working towards the centre helps prevent:",
  options: [
    "Break-out",
    "Rust",
    "Staining",
    "Warping"
  ],
  correctIndex: 0,
  explanation: "Chiselling towards the centre reduces break-out."
},
{
  id: "PWJ-JOINTS-Q-547",
  question: "During dry fit you should assemble the hatch but you should not:",
  options: [
    "Measure it",
    "Glue it",
    "Check joint fit",
    "Confirm size"
  ],
  correctIndex: 1,
  explanation: "Dry fitting is done without glue."
},
{
  id: "PWJ-JOINTS-Q-548",
  question: "When fixing hatch joints, screws should be countersunk mainly so you can:",
  options: [
    "Increase backset",
    "Wipe glue easier",
    "Keep them flush for finishing",
    "Make the joint weaker"
  ],
  correctIndex: 2,
  explanation: "Countersinking helps keep fixings below surface for finishing."
},
{
  id: "PWJ-JOINTS-Q-549",
  question: "A temporary brace is used mainly to hold the frame while the glue:",
  options: [
    "Evaporates",
    "Sets",
    "Stains",
    "Softens"
  ],
  correctIndex: 1,
  explanation: "A brace holds it while glue sets."
},
{
  id: "PWJ-JOINTS-Q-550",
  question: "Stops or beads can be butt jointed, but should be mitred if they are:",
  options: [
    "Moulded",
    "Painted",
    "Hardwood",
    "Recessed"
  ],
  correctIndex: 0,
  explanation: "Mitres are used when the stop/bead is moulded."
},
{
  id: "PWJ-JOINTS-Q-551",
  question: "For drop hatches, the hinge type specified is:",
  options: [
    "Butt hinge",
    "Parliament hinge",
    "Flush hinge",
    "Rising butt hinge"
  ],
  correctIndex: 0,
  explanation: "Drop hatches are fitted with butt hinges."
},
{
  id: "PWJ-JOINTS-Q-552",
  question: "To set the architrave margin, the tool used is a:",
  options: [
    "Combination square",
    "Marking gauge",
    "Sash clamp",
    "Tenon saw"
  ],
  correctIndex: 0,
  explanation: "Combination square is used to set and mark the margin."
},
{
  id: "PWJ-JOINTS-Q-553",
  question: "Easing arrises helps give a professional finish and improves:",
  options: [
    "Paint adhesion",
    "Lock security",
    "Thread grip",
    "Backset size"
  ],
  correctIndex: 0,
  explanation: "Eased edges help paint adhere and look better."
},
{
  id: "PWJ-JOINTS-Q-554",
  question: "Before lifting a hatch into position you should first:",
  options: [
    "Glue the architrave on",
    "Measure and compare to opening",
    "Fit skirting boards",
    "Punch nails below surface"
  ],
  correctIndex: 1,
  explanation: "Measure hatch and compare with opening before lifting."
},
{
  id: "PWJ-JOINTS-Q-555",
  question: "If the ceiling edge is not plastered, the architrave should project about:",
  options: [
    "0.5 mm",
    "2 mm",
    "6 mm",
    "15 mm"
  ],
  correctIndex: 1,
  explanation: "It should project about 2 mm if unplastered."
},
{
  id: "PWJ-JOINTS-Q-556",
  question: "When packing and levelling, gaps are filled using packers or:",
  options: [
    "Wedges",
    "Washers",
    "Pellets",
    "Shims for locks"
  ],
  correctIndex: 0,
  explanation: "Packers or wedges fill gaps before tightening."
},
{
  id: "PWJ-JOINTS-Q-557",
  question: "Architraves should be fitted:",
  options: [
    "Before plastering",
    "After plastering",
    "Before skirting only",
    "Before the hatch is made"
  ],
  correctIndex: 1,
  explanation: "They are fitted after plastering to cover gaps."
},
{
  id: "PWJ-JOINTS-Q-558",
  question: "Working at height can cause dust to fall into eyes, so you should wear:",
  options: [
    "Goggles",
    "Ear plugs",
    "Steel toe caps",
    "Knee pads"
  ],
  correctIndex: 0,
  explanation: "Goggles protect eyes from falling dust."
},
{
  id: "PWJ-JOINTS-Q-559",
  question: "Skirting is fitted to protect walls at floor level and to cover:",
  options: [
    "Keyholes",
    "Expansion gaps",
    "Hinge recesses",
    "Plug holes"
  ],
  correctIndex: 1,
  explanation: "Skirting hides expansion gaps and gives a neat finish."
},
{
  id: "PWJ-JOINTS-Q-560",
  question: "The correct order is to fit architraves before:",
  options: [
    "Skirting",
    "Stops",
    "Hinges",
    "Pellets"
  ],
  correctIndex: 0,
  explanation: "Skirting butts into architrave, so architrave goes first."
},
{
  id: "PWJ-JOINTS-Q-561",
  question: "Architrave moulding profiles should face the:",
  options: [
    "Wall",
    "Door opening",
    "Ceiling void",
    "Outside corner"
  ],
  correctIndex: 1,
  explanation: "The profile faces the door opening."
},
{
  id: "PWJ-JOINTS-Q-562",
  question: "Starting with the head or one leg is recommended because it avoids doing:",
  options: [
    "Two mitres together",
    "Any measuring",
    "Any sanding",
    "Any nailing"
  ],
  correctIndex: 0,
  explanation: "It reduces the difficulty of two simultaneous mitres."
},
{
  id: "PWJ-JOINTS-Q-563",
  question: "The first mitre on the head architrave is cut at:",
  options: [
    "30°",
    "45°",
    "60°",
    "90°"
  ],
  correctIndex: 1,
  explanation: "A standard head mitre is 45°."
},
{
  id: "PWJ-JOINTS-Q-564",
  question: "When hand fixing architrave, nails should be:",
  options: [
    "Left proud temporarily",
    "Removed immediately",
    "Set below surface immediately",
    "Bent over for grip"
  ],
  correctIndex: 0,
  explanation: "Hand fixing leaves nails proud until final punching."
},
{
  id: "PWJ-JOINTS-Q-565",
  question: "Best practice is to nail through the fillet or quirk because:",
  options: [
    "It strengthens the hinge",
    "Shadows hide the holes",
    "It makes glue dry faster",
    "It increases the margin"
  ],
  correctIndex: 1,
  explanation: "Shadows help conceal nail holes."
},
{
  id: "PWJ-JOINTS-Q-566",
  question: "Permanent fixing of architrave legs uses glue and nails spaced about:",
  options: [
    "50–100 mm",
    "200–300 mm",
    "400–600 mm",
    "900–1000 mm"
  ],
  correctIndex: 1,
  explanation: "Fixings are typically 200–300 mm apart."
}
],
[
{
  id: "PWJ-JOINTS-Q-567",
  question: "Nails should be punched below the surface to make them ready for:",
  options: [
    "Polishing",
    "Filling",
    "Sawing",
    "Clamping"
  ],
  correctIndex: 1,
  explanation: "Punching leaves the head below the surface so it can be filled."
},
{
  id: "PWJ-JOINTS-Q-568",
  question: "Nailing too close to the end of timber can cause it to:",
  options: [
    "Harden",
    "Split",
    "Twist",
    "Shrink"
  ],
  correctIndex: 1,
  explanation: "Fixing near the end risks splitting the timber."
},
{
  id: "PWJ-JOINTS-Q-569",
  question: "One way to reduce splitting when nailing is to:",
  options: [
    "Use longer nails",
    "Drill a pilot hole",
    "Add more glue",
    "Hit harder"
  ],
  correctIndex: 1,
  explanation: "A pilot hole helps prevent the timber from splitting."
},
{
  id: "PWJ-JOINTS-Q-570",
  question: "When working with MDF mitres you should avoid:",
  options: [
    "Gluing",
    "Painting",
    "Nailing",
    "Clamping"
  ],
  correctIndex: 2,
  explanation: "MDF fibres can split, so nailing mitres is avoided."
},
{
  id: "PWJ-JOINTS-Q-571",
  question: "Quick setting mitre adhesive is recommended mainly to:",
  options: [
    "Change colour",
    "Add strength",
    "Reduce weight",
    "Allow movement"
  ],
  correctIndex: 1,
  explanation: "It provides strength and helps conceal fixings."
},
{
  id: "PWJ-JOINTS-Q-572",
  question: "If a room corner is not square, mitres should be cut by:",
  options: [
    "Guesswork",
    "Using 45° anyway",
    "Bisecting the angle",
    "Packing the gap"
  ],
  correctIndex: 2,
  explanation: "You must bisect the real angle."
},
{
  id: "PWJ-JOINTS-Q-573",
  question: "To set the bisected angle you would normally use a:",
  options: [
    "Spirit level",
    "Sliding bevel",
    "Rule",
    "Bradawl"
  ],
  correctIndex: 1,
  explanation: "A sliding bevel is used to set the angle."
},
{
  id: "PWJ-JOINTS-Q-574",
  question: "On an external skirting corner the joint type is usually a:",
  options: [
    "Butt",
    "Housing",
    "Mitre",
    "Lap"
  ],
  correctIndex: 2,
  explanation: "External corners are mitred."
},
{
  id: "PWJ-JOINTS-Q-575",
  question: "Internal skirting corners should normally be:",
  options: [
    "Mitred",
    "Scribed",
    "Butted",
    "Pinned"
  ],
  correctIndex: 1,
  explanation: "Internal corners are scribed, not mitred."
},
{
  id: "PWJ-JOINTS-Q-576",
  question: "When scribing, the front edge should be tight while the back:",
  options: [
    "Is packed",
    "Is undercut",
    "Is mitred",
    "Is glued"
  ],
  correctIndex: 1,
  explanation: "Undercutting allows for out-of-square walls."
},
{
  id: "PWJ-JOINTS-Q-577",
  question: "To lengthen skirting, the preferred joint is a:",
  options: [
    "Butt joint",
    "Mitre joint",
    "Splayed heading joint",
    "Housing joint"
  ],
  correctIndex: 2,
  explanation: "A splayed heading joint is stronger and neater."
},
{
  id: "PWJ-JOINTS-Q-578",
  question: "After fixing a splayed joint you should sand it:",
  options: [
    "Rough",
    "Flush",
    "Curved",
    "Shorter"
  ],
  correctIndex: 1,
  explanation: "The joint should be sanded flush."
},
{
  id: "PWJ-JOINTS-Q-579",
  question: "Scribing a bullnose profile is risky because the top edge may:",
  options: [
    "Shine",
    "Break",
    "Bend",
    "Rust"
  ],
  correctIndex: 1,
  explanation: "The top can break due to weakness."
},
{
  id: "PWJ-JOINTS-Q-580",
  question: "A false mitre improves strength by mitring the top and:",
  options: [
    "Leaving the rest square",
    "Scribing the lower part",
    "Adding glue blocks",
    "Using screws"
  ],
  correctIndex: 1,
  explanation: "The lower section is scribed."
},
{
  id: "PWJ-JOINTS-Q-581",
  question: "Cutting the longest runs first helps mainly to:",
  options: [
    "Increase waste",
    "Reduce joints",
    "Slow the job",
    "Match colours"
  ],
  correctIndex: 1,
  explanation: "It reduces the total number of joints."
},
{
  id: "PWJ-JOINTS-Q-582",
  question: "Skirting is normally fixed with grab adhesive plus:",
  options: [
    "Tape",
    "Pins",
    "Nails",
    "Dowels"
  ],
  correctIndex: 2,
  explanation: "Mechanical fixing is still required."
},
{
  id: "PWJ-JOINTS-Q-583",
  question: "When fixing skirting to masonry, you should drill and use:",
  options: [
    "Glue only",
    "Plugs and screws",
    "Annular nails",
    "Mitre adhesive"
  ],
  correctIndex: 1,
  explanation: "Masonry requires plugs and screws."
},
{
  id: "PWJ-JOINTS-Q-584",
  question: "For a paint finish, screw heads should be:",
  options: [
    "Left proud",
    "Countersunk",
    "Waxed",
    "Polished"
  ],
  correctIndex: 1,
  explanation: "Countersinking allows them to be filled."
},
{
  id: "PWJ-JOINTS-Q-585",
  question: "For clear finishes, screw heads are hidden using a timber:",
  options: [
    "Plug",
    "Pellet",
    "Wedge",
    "Bearer"
  ],
  correctIndex: 1,
  explanation: "Matching pellets conceal the screw."
},
{
  id: "PWJ-JOINTS-Q-586",
  question: "Using a nail gun into masonry can damage the tool and cause a:",
  options: [
    "Twist",
    "Misfire",
    "Polish",
    "Bend"
  ],
  correctIndex: 1,
  explanation: "It may lead to a dangerous misfire."
},
{
  id: "PWJ-JOINTS-Q-587",
  question: "A ricochet hazard means the nail could:",
  options: [
    "Disappear",
    "Bounce back",
    "Lock in place",
    "Turn sideways"
  ],
  correctIndex: 1,
  explanation: "It may rebound toward the operator."
},
{
  id: "PWJ-JOINTS-Q-588",
  question: "Modern new builds often use simpler profiles because they are:",
  options: [
    "Stronger",
    "Faster to fit",
    "More traditional",
    "Harder to cut"
  ],
  correctIndex: 1,
  explanation: "Simple shapes are quicker and cheaper."
},
{
  id: "PWJ-JOINTS-Q-589",
  question: "The acceptable maximum joint gap is usually:",
  options: [
    "0.5 mm",
    "2 mm",
    "5 mm",
    "10 mm"
  ],
  correctIndex: 0,
  explanation: "Gaps should not exceed about 0.5 mm."
},
{
  id: "PWJ-JOINTS-Q-590",
  question: "Before signing off, a frame should be checked to ensure it is flat and:",
  options: [
    "Painted",
    "Square",
    "Heavy",
    "Primed"
  ],
  correctIndex: 1,
  explanation: "Flat and square are the key checks."
},
{
  id: "PWJ-JOINTS-Q-591",
  question: "Seasoning timber may be done by air drying or:",
  options: [
    "Painting",
    "Kiln drying",
    "Soaking",
    "Steaming only"
  ],
  correctIndex: 1,
  explanation: "Kiln drying is another main method."
},
{
  id: "PWJ-JOINTS-Q-592",
  question: "Timber should be stored off the ground using:",
  options: [
    "Bearers",
    "Hinges",
    "Pellets",
    "Plugs"
  ],
  correctIndex: 0,
  explanation: "Bearers keep timber clear of the ground."
},
{
  id: "PWJ-JOINTS-Q-593",
  question: "A squaring rod is mainly used to:",
  options: [
    "Measure width",
    "Check diagonals",
    "Cut mitres",
    "Mark margins"
  ],
  correctIndex: 1,
  explanation: "It measures diagonals to confirm square."
},
{
  id: "PWJ-JOINTS-Q-594",
  question: "For dovetails, a typical softwood ratio is:",
  options: [
    "1:4",
    "1:6",
    "1:8",
    "1:10"
  ],
  correctIndex: 1,
  explanation: "Softwood dovetails are commonly 1:6."
},
{
  id: "PWJ-JOINTS-Q-595",
  question: "The sharp corner of timber is known as the:",
  options: [
    "Edge",
    "Arris",
    "Fillet",
    "Face"
  ],
  correctIndex: 1,
  explanation: "Arris is the correct term."
},
{
  id: "PWJ-JOINTS-Q-596",
  question: "Joint classifications include widening, lengthening and:",
  options: [
    "Framing",
    "Housing",
    "Mitres",
    "Tongues"
  ],
  correctIndex: 0,
  explanation: "Framing is one of the main groups."
}
],
[
{
  id: "PWJ-JOINTS-Q-597",
  question: "When gluing a frame, it is square when:",
  options: [
    "The clamps feel tight",
    "The joints look straight",
    "The diagonals match",
    "The glue has dried"
  ],
  correctIndex: 2,
  explanation: "Equal diagonals confirm the frame is square."
},
{
  id: "PWJ-JOINTS-Q-598",
  question: "Before driving wedges you should first check the frame is not:",
  options: [
    "Loose",
    "Painted",
    "Twisted",
    "Heavy"
  ],
  correctIndex: 2,
  explanation: "Always confirm the frame is free from twist."
},
{
  id: "PWJ-JOINTS-Q-599",
  question: "After trimming wedges, the next aim is usually to:",
  options: [
    "Leave them proud",
    "Apply finish",
    "Make them flush",
    "Soak in water"
  ],
  correctIndex: 2,
  explanation: "Wedges are trimmed flush."
},
{
  id: "PWJ-JOINTS-Q-600",
  question: "Horns on a frame are normally:",
  options: [
    "Left in place",
    "Painted",
    "Cut off",
    "Rounded"
  ],
  correctIndex: 2,
  explanation: "Horns are sawn off during finishing."
},
{
  id: "PWJ-JOINTS-Q-601",
  question: "Arrises are eased mainly to:",
  options: [
    "Reduce weight",
    "Improve finish",
    "Help cutting",
    "Change size"
  ],
  correctIndex: 1,
  explanation: "Easing gives a professional finish and helps paint."
},
{
  id: "PWJ-JOINTS-Q-602",
  question: "Good housekeeping at the end of a job helps to:",
  options: [
    "Increase noise",
    "Avoid accidents",
    "Save timber",
    "Reduce cost"
  ],
  correctIndex: 1,
  explanation: "Clearing waste reduces accident risk."
},
{
  id: "PWJ-JOINTS-Q-603",
  question: "Reusable timber should be returned to:",
  options: [
    "The skip",
    "General waste",
    "The stores",
    "Another trade"
  ],
  correctIndex: 2,
  explanation: "Good material goes back to stores."
},
{
  id: "PWJ-JOINTS-Q-604",
  question: "Before storing tools you should:",
  options: [
    "Sharpen them",
    "Clean and check",
    "Oil everything",
    "Paint handles"
  ],
  correctIndex: 1,
  explanation: "Tools must be clean and inspected."
},
{
  id: "PWJ-JOINTS-Q-605",
  question: "If equipment is damaged you must:",
  options: [
    "Carry on using it",
    "Hide it away",
    "Remove and report",
    "Repair it yourself"
  ],
  correctIndex: 2,
  explanation: "Take it out of service and inform a supervisor."
},
{
  id: "PWJ-JOINTS-Q-606",
  question: "A hatch lining is similar in construction to a:",
  options: [
    "Window board",
    "Door lining",
    "Floor frame",
    "Roof truss"
  ],
  correctIndex: 1,
  explanation: "It follows the same principles as a door lining."
},
{
  id: "PWJ-JOINTS-Q-607",
  question: "Many loft hatches are hung using:",
  options: [
    "T hinges",
    "Butt hinges",
    "Piano hinges",
    "Strap hinges"
  ],
  correctIndex: 1,
  explanation: "Butt hinges are common."
},
{
  id: "PWJ-JOINTS-Q-608",
  question: "The recommended minimum loft hatch opening is about:",
  options: [
    "300 × 300 mm",
    "450 × 450 mm",
    "530 × 530 mm",
    "700 × 700 mm"
  ],
  correctIndex: 2,
  explanation: "530 × 530 mm is commonly recommended."
},
{
  id: "PWJ-JOINTS-Q-609",
  question: "A fitting tolerance around a hatch should be at least:",
  options: [
    "5 mm",
    "10 mm",
    "15 mm",
    "25 mm"
  ],
  correctIndex: 2,
  explanation: "This allows room for adjustment."
},
{
  id: "PWJ-JOINTS-Q-610",
  question: "An experienced joiner may skip making a rod because:",
  options: [
    "It wastes timber",
    "It is too slow",
    "The job is simple",
    "It is unsafe"
  ],
  correctIndex: 2,
  explanation: "Simple work may not require one."
},
{
  id: "PWJ-JOINTS-Q-611",
  question: "When marking out, visible defects should face:",
  options: [
    "Inside",
    "Outside",
    "Upwards",
    "Downwards"
  ],
  correctIndex: 1,
  explanation: "Keep defects away from show faces."
},
{
  id: "PWJ-JOINTS-Q-612",
  question: "Tongued housings are preferred because they are:",
  options: [
    "Faster",
    "Cheaper",
    "Stronger",
    "Lighter"
  ],
  correctIndex: 2,
  explanation: "They provide greater strength."
},
{
  id: "PWJ-JOINTS-Q-613",
  question: "Pairing components together while marking helps to:",
  options: [
    "Save glue",
    "Match positions",
    "Reduce weight",
    "Improve colour"
  ],
  correctIndex: 1,
  explanation: "Both pieces receive identical marks."
},
{
  id: "PWJ-JOINTS-Q-614",
  question: "Housing depth is set using a:",
  options: [
    "Tape",
    "Rule",
    "Marking gauge",
    "Level"
  ],
  correctIndex: 2,
  explanation: "The gauge ensures accuracy."
},
{
  id: "PWJ-JOINTS-Q-615",
  question: "When sawing housings you must stay:",
  options: [
    "On the line",
    "In the waste",
    "Outside it",
    "Above it"
  ],
  correctIndex: 1,
  explanation: "Always keep to the waste side."
},
{
  id: "PWJ-JOINTS-Q-616",
  question: "Working from both sides with a chisel helps prevent:",
  options: [
    "Noise",
    "Break-out",
    "Rust",
    "Bending"
  ],
  correctIndex: 1,
  explanation: "It protects the finished edges."
}
],
[
  {
    id: "PWJ-Q-901",
    question: "A tape measure with a crease should be replaced because it can:",
    options: [
      "Mark timber too dark",
      "Give inaccurate readings and may break",
      "Make joints stronger",
      "Stop the rod being full size"
    ],
    correctIndex: 1,
    explanation: "A crease creates weakness, can break, and gives inaccurate readings."
  },
  {
    id: "PWJ-Q-902",
    question: "If a tape measure is not recoiling properly, the most likely cause is:",
    options: [
      "The hook is too large",
      "The spring is probably broken",
      "The blade is too clean",
      "The casing is too heavy"
    ],
    correctIndex: 1,
    explanation: "A tape that won’t recoil usually has a failed spring."
  },
  {
    id: "PWJ-Q-903",
    question: "Setting out rods are used mainly when:",
    options: [
      "Drawings lack detail",
      "Only one component is needed",
      "You want a quicker pencil line",
      "You are fitting skirting"
    ],
    correctIndex: 0,
    explanation: "Rods are used to add full-size detail when drawings are not detailed enough."
  },
  {
    id: "PWJ-Q-904",
    question: "A setting out rod is best described as:",
    options: [
      "A half-scale sketch",
      "A full size drawing used as a master reference",
      "A cutting tool for joints",
      "A tool used to tighten clamps"
    ],
    correctIndex: 1,
    explanation: "Rods are full size drawings used as the master reference."
  },
  {
    id: "PWJ-Q-905",
    question: "A supervisor should check a rod early because:",
    options: [
      "Mistakes are cheaper to fix before cutting",
      "Glue sets faster",
      "Timber becomes thicker",
      "It saves sanding"
    ],
    correctIndex: 0,
    explanation: "Errors are easy and cheap to correct before cutting starts."
  },
  {
    id: "PWJ-Q-906",
    question: "A specification is usually:",
    options: [
      "A written document with extra details not shown on drawings",
      "A type of clamp",
      "A way to sharpen chisels",
      "A method of sanding joints"
    ],
    correctIndex: 0,
    explanation: "Specifications add details such as timber type, ironmongery, and finish."
  },
  {
    id: "PWJ-Q-907",
    question: "For routine, square and standard joinery work, a rod may not be needed because:",
    options: [
      "Joints and mouldings can be marked directly",
      "Ironmongery is not used",
      "Timber does not move",
      "Only softwood can be used"
    ],
    correctIndex: 0,
    explanation: "Standard work can often be marked out directly without a rod."
  },
  {
    id: "PWJ-Q-908",
    question: "A cutting list is produced mainly to:",
    options: [
      "Record sizes and quantities for machining",
      "Decide paint colours",
      "Replace a tape measure",
      "Set dovetail angles"
    ],
    correctIndex: 0,
    explanation: "It records lengths, widths, thicknesses and quantities for the machinist."
  },
  {
    id: "PWJ-Q-909",
    question: "Who is the cutting list normally given to?",
    options: [
      "Bricklayer",
      "Wood machinist",
      "Electrician",
      "Plasterer"
    ],
    correctIndex: 1,
    explanation: "The machinist uses it to cut and plane timber."
  },
  {
    id: "PWJ-Q-910",
    question: "Nominal timber size is normally:",
    options: [
      "Smaller than finished size",
      "The same as finished size",
      "Bigger than finished size to allow planing",
      "Only used for plywood"
    ],
    correctIndex: 2,
    explanation: "Nominal is rough sawn and usually 5–6 mm bigger than finished."
  },
  {
    id: "PWJ-Q-911",
    question: "Referring back to the rod during batch work helps to:",
    options: [
      "Keep sizes consistent across items",
      "Increase timber moisture",
      "Stop adhesives curing",
      "Reduce PPE requirements"
    ],
    correctIndex: 0,
    explanation: "The rod is the master reference for consistent repeating work."
  },
  {
    id: "PWJ-Q-912",
    question: "The best material for setting out rods is usually:",
    options: [
      "Loose paper sheets",
      "Smooth timber-based sheet material",
      "Cardboard boxes",
      "Scrap insulation board"
    ],
    correctIndex: 1,
    explanation: "Sheet material is more accurate and less affected by humidity than paper."
  },
  {
    id: "PWJ-Q-913",
    question: "A cutting list commonly includes:",
    options: [
      "Component name, species, quantities, nominal and finished sizes",
      "Only the finished colour",
      "Only the joint type",
      "Only the glue brand"
    ],
    correctIndex: 0,
    explanation: "It includes component info, timber species, quantities and sizes plus comments."
  },
  {
    id: "PWJ-Q-914",
    question: "In joinery, a 'profile' means:",
    options: [
      "The length of the timber",
      "The shape of the timber section",
      "The weight of the board",
      "The moisture content only"
    ],
    correctIndex: 1,
    explanation: "Profile refers to the section shape, e.g., rebates and mouldings."
  },
  {
    id: "PWJ-Q-915",
    question: "Which pencil grade is preferred for rod work?",
    options: [
      "2H",
      "HB",
      "6B",
      "Marker pen"
    ],
    correctIndex: 0,
    explanation: "2H gives a fine, clear line."
  },
  {
    id: "PWJ-Q-916",
    question: "Which tool transfers an angle accurately?",
    options: [
      "Sliding bevel",
      "Tape measure",
      "Spirit level",
      "Bradawl"
    ],
    correctIndex: 0,
    explanation: "A sliding bevel transfers angles from one place to another."
  },
  {
    id: "PWJ-Q-917",
    question: "Which tool is used for large arcs where a compass is too small?",
    options: [
      "Trammel heads",
      "Try square",
      "Mortice gauge",
      "Block plane"
    ],
    correctIndex: 0,
    explanation: "Trammel heads are used for large circles and arcs."
  },
  {
    id: "PWJ-Q-918",
    question: "When setting out a frame, the first step is to:",
    options: [
      "Cut all shoulders",
      "Inspect timber and mark face side and face edge",
      "Glue and clamp immediately",
      "Fit ironmongery"
    ],
    correctIndex: 1,
    explanation: "You inspect defects and mark the best face and edge using a 2H pencil."
  },
  {
    id: "PWJ-Q-919",
    question: "When positioning parts on the rod, face edges should point:",
    options: [
      "Toward the centre",
      "Toward the outside",
      "Up to the ceiling",
      "Down to the floor"
    ],
    correctIndex: 0,
    explanation: "Components are placed face sides up and face edges toward the centre."
  },
  {
    id: "PWJ-Q-920",
    question: "Side members of a frame are called:",
    options: [
      "Stiles",
      "Rails",
      "Horns",
      "Bearers"
    ],
    correctIndex: 0,
    explanation: "The side members are called stiles."
  },
  {
    id: "PWJ-Q-921",
    question: "Pairing jambs during marking out is done to:",
    options: [
      "Increase glue squeeze-out",
      "Make mortices match exactly",
      "Reduce timber thickness",
      "Avoid using a square"
    ],
    correctIndex: 1,
    explanation: "Marking as a pair helps copy positions so joints match."
  },
  {
    id: "PWJ-Q-922",
    question: "The 'golden rule' of marking out is to always mark from:",
    options: [
      "Random edges",
      "Face sides and face edges",
      "The end grain only",
      "The roughest face"
    ],
    correctIndex: 1,
    explanation: "Using the same reference faces prevents poor fit."
  },
  {
    id: "PWJ-Q-923",
    question: "A mortice gauge is used to mark:",
    options: [
      "One line across the grain",
      "Two parallel lines with the grain",
      "Circles and arcs",
      "A 45° mitre"
    ],
    correctIndex: 1,
    explanation: "Mortice gauges mark parallel lines along the grain."
  },
  {
    id: "PWJ-Q-924",
    question: "A marking knife is mainly used because it:",
    options: [
      "Cuts fibres across the grain for accuracy",
      "Makes the timber thicker",
      "Stops adhesives curing",
      "Measures angles directly"
    ],
    correctIndex: 0,
    explanation: "It cuts fibres for a crisp, accurate line."
  },
  {
    id: "PWJ-Q-925",
    question: "A wheel gauge improves accuracy mainly because:",
    options: [
      "It has a sharp cutter that helps prevent tear-out",
      "It uses soft pencil lead",
      "It replaces the need for a rod",
      "It makes timber waterproof"
    ],
    correctIndex: 0,
    explanation: "The cutter is sharp and reduces tearing for cleaner marking."
  },
  {
    id: "PWJ-Q-926",
    question: "In marking out, the work area should be:",
    options: [
      "Cluttered for easy access",
      "Free of trip hazards with clear air from dust and fumes",
      "Dark for better pencil visibility",
      "Noisy so people keep away"
    ],
    correctIndex: 1,
    explanation: "Safe working requires clear walkways and good air quality."
  },
  {
    id: "PWJ-Q-927",
    question: "A common sheet material size is approximately:",
    options: [
      "1200 × 600 mm",
      "2000 × 1000 mm",
      "2440 × 1220 mm",
      "3000 × 3000 mm"
    ],
    correctIndex: 2,
    explanation: "Sheet materials are commonly around 2440 × 1220 mm."
  },
  {
    id: "PWJ-Q-928",
    question: "MR board stands for:",
    options: [
      "Machine ready",
      "Moisture resistant",
      "Mortice routed",
      "Medium rough"
    ],
    correctIndex: 1,
    explanation: "MR means moisture resistant."
  },
  {
    id: "PWJ-Q-929",
    question: "WBP board is best described as:",
    options: [
      "Weather and boil proof, suitable for outside",
      "Only suitable for dry internal rooms",
      "A finish applied to ironmongery",
      "A type of pencil"
    ],
    correctIndex: 0,
    explanation: "WBP is designed for weather exposure; outside use is suitable."
  },
  {
    id: "PWJ-Q-930",
    question: "OSB stands for:",
    options: [
      "Oriented strand board",
      "Outdoor structural board",
      "Open section batten",
      "Over square board"
    ],
    correctIndex: 0,
    explanation: "OSB means oriented strand board."
  }
],
[
  {
    id: "PWJ-Q-931",
    question: "Standard chipboard exposed to moisture will usually:",
    options: [
      "Shrink and harden",
      "Swell and break down",
      "Become fire resistant",
      "Turn into marine ply"
    ],
    correctIndex: 1,
    explanation: "Standard chipboard swells if wet; MR grade is used in moist areas."
  },
  {
    id: "PWJ-Q-932",
    question: "Plywood is normally made from:",
    options: [
      "An even number of veneers",
      "An odd number of veneers",
      "One thick solid layer",
      "Wood fibres and resin only"
    ],
    correctIndex: 1,
    explanation: "Plywood is made from an odd number of veneers."
  },
  {
    id: "PWJ-Q-933",
    question: "In plywood, each veneer layer is arranged:",
    options: [
      "In the same direction as the previous layer",
      "At right angles to the previous layer",
      "Randomly with no pattern",
      "Only parallel to the long edge"
    ],
    correctIndex: 1,
    explanation: "Layers are laid at right angles for stability and strength."
  },
  {
    id: "PWJ-Q-934",
    question: "More veneers in plywood generally means it is:",
    options: [
      "Thinner and weaker",
      "Thicker and stronger",
      "Only suitable for internal use",
      "Less stable"
    ],
    correctIndex: 1,
    explanation: "More veneers usually increases thickness and strength."
  },
  {
    id: "PWJ-Q-935",
    question: "Marine plywood can:",
    options: [
      "Only be used indoors",
      "Be submerged in water",
      "Never be painted",
      "Only be used for furniture"
    ],
    correctIndex: 1,
    explanation: "Marine ply can be submerged and is common in boat building."
  },
  {
    id: "PWJ-Q-936",
    question: "WBP plywood is:",
    options: [
      "Only for dry rooms",
      "Usable in wet areas but usually needs paint or stain",
      "Always submersible",
      "A type of MDF"
    ],
    correctIndex: 1,
    explanation: "WBP can be used in wet areas but typically needs protection like paint or stain."
  },
  {
    id: "PWJ-Q-937",
    question: "Flexi ply bends easily mainly because:",
    options: [
      "All layers run at 45°",
      "The outer laminates run the same direction and an inner layer is at 90°",
      "It contains rubber sheets",
      "It is made from wood particles"
    ],
    correctIndex: 1,
    explanation: "Flexi ply’s laminate layout creates a flexible sheet for curved work."
  },
  {
    id: "PWJ-Q-938",
    question: "Flexible MDF bends because:",
    options: [
      "It is soaked in water",
      "Grooves are cut on one side",
      "It has extra veneers",
      "It is made from strands"
    ],
    correctIndex: 1,
    explanation: "Grooves on one face allow the board to bend for curved units."
  },
  {
    id: "PWJ-Q-939",
    question: "Hardboard is best described as:",
    options: [
      "External structural sheathing",
      "Internal, lightweight, and non-structural",
      "A waterproof flooring board",
      "A fire door core only"
    ],
    correctIndex: 1,
    explanation: "Hardboard is for internal use and is not structural."
  },
  {
    id: "PWJ-Q-940",
    question: "Hardboard is commonly used for:",
    options: [
      "Roof trusses",
      "Backs of units and drawer bottoms",
      "External cladding without coating",
      "Structural beams"
    ],
    correctIndex: 1,
    explanation: "Typical uses include backs and drawer bottoms."
  },
  {
    id: "PWJ-Q-941",
    question: "Laminated panels are made by:",
    options: [
      "Bonding wood fibres with resin into dust",
      "Gluing narrow solid pieces together to make wider panels",
      "Layering veneers at right angles",
      "Bonding wood strands with water-resistant resin"
    ],
    correctIndex: 1,
    explanation: "Laminated panels are narrow solid strips glued together and worked like normal timber."
  },
  {
    id: "PWJ-Q-942",
    question: "Laminated panels can be up to about:",
    options: [
      "100 mm wide",
      "300 mm wide",
      "600 mm wide",
      "1200 mm wide"
    ],
    correctIndex: 2,
    explanation: "They can be made up to about 600 mm wide."
  },
  {
    id: "PWJ-Q-943",
    question: "OSB is made from:",
    options: [
      "Wood fibres and resin",
      "Bonded wood particles",
      "Wood strands bonded with water resistant resin",
      "Solid timber strips glued edge to edge"
    ],
    correctIndex: 2,
    explanation: "OSB uses wood strands with water resistant resin."
  },
  {
    id: "PWJ-Q-944",
    question: "OSB used outdoors must be:",
    options: [
      "Left unfinished to breathe",
      "Sealed against the weather",
      "Soaked in oil",
      "Only nailed, never screwed"
    ],
    correctIndex: 1,
    explanation: "OSB must be sealed to protect it from weather exposure."
  },
  {
    id: "PWJ-Q-945",
    question: "Which regulation area covers hazardous substances?",
    options: [
      "COSHH",
      "PUWER",
      "HASAWA only",
      "PPE regulations only"
    ],
    correctIndex: 0,
    explanation: "COSHH relates to hazardous substances."
  },
  {
    id: "PWJ-Q-946",
    question: "PUWER is mainly concerned with:",
    options: [
      "Timber movement",
      "Equipment safety",
      "Choosing adhesives",
      "Painting finishes"
    ],
    correctIndex: 1,
    explanation: "PUWER covers the safe use of work equipment."
  },
  {
    id: "PWJ-Q-947",
    question: "A woodworking joint is:",
    options: [
      "Only a glued connection",
      "Only a nailed connection",
      "A connection between two timbers, using adhesive and/or fixings",
      "A type of sheet material"
    ],
    correctIndex: 2,
    explanation: "A joint connects two timbers and may use adhesive and/or fixings like nails or screws."
  },
  {
    id: "PWJ-Q-948",
    question: "Which factor can affect joint choice?",
    options: [
      "Strength, appearance, and material type",
      "Only paint colour",
      "Only the timber species name",
      "Only whether a rod is used"
    ],
    correctIndex: 0,
    explanation: "Choice depends on strength, toughness, flexibility, appearance, and material type."
  },
  {
    id: "PWJ-Q-949",
    question: "Complex joints usually:",
    options: [
      "Take longer and cost more",
      "Are always weaker",
      "Are only used outside",
      "Remove the need for marking out"
    ],
    correctIndex: 0,
    explanation: "More complex joints take longer to make and increase cost."
  },
  {
    id: "PWJ-Q-950",
    question: "Widening joints are used to:",
    options: [
      "Join timbers end to end",
      "Join boards side by side to make wider panels",
      "Fix hinges to doors",
      "Cut shoulders across the grain"
    ],
    correctIndex: 1,
    explanation: "Widening joints join boards edge to edge to form wider panels or tops."
  },
  {
    id: "PWJ-Q-951",
    question: "To improve stability in wide panels you should:",
    options: [
      "Use one thin wide board",
      "Use narrower boards and alternate growth ring direction",
      "Keep growth rings all the same way",
      "Only use tangential boards"
    ],
    correctIndex: 1,
    explanation: "Alternating growth rings and using narrower boards helps reduce cupping."
  },
  {
    id: "PWJ-Q-952",
    question: "A butt widening joint is:",
    options: [
      "The slowest method",
      "Quick but harder to keep faces flush while clamping",
      "Always the strongest option",
      "Used only for structural beams"
    ],
    correctIndex: 1,
    explanation: "It is quick but alignment during clamping is harder."
  },
  {
    id: "PWJ-Q-953",
    question: "Tongue and groove widening joints:",
    options: [
      "Make boards wider after profiling",
      "Help alignment and improve strength but reduce board width after profiling",
      "Are only for external use",
      "Cannot be glued"
    ],
    correctIndex: 1,
    explanation: "T&G aids alignment/strength but boards become narrower after profiling."
  },
  {
    id: "PWJ-Q-954",
    question: "The loose tongue method involves:",
    options: [
      "Cutting a full tongue on every board",
      "Grooving both edges and inserting a thin timber or ply tongue",
      "Only sanding edges",
      "Fixing boards with nails only"
    ],
    correctIndex: 1,
    explanation: "A groove is cut in each edge and a loose tongue is inserted and glued."
  },
  {
    id: "PWJ-Q-955",
    question: "Which tool makes slots for biscuits?",
    options: [
      "Domino jointer",
      "Biscuit jointer",
      "Try square",
      "Mortice gauge"
    ],
    correctIndex: 1,
    explanation: "A biscuit jointer cuts the biscuit slots."
  },
  {
    id: "PWJ-Q-956",
    question: "Rubbing boards together after applying glue helps because it:",
    options: [
      "Removes the need for clamps",
      "Pushes adhesive into the grain and spreads it evenly",
      "Makes timber waterproof",
      "Stops wood movement completely"
    ],
    correctIndex: 1,
    explanation: "Rubbing helps spread glue evenly and creates a stronger bond."
  },
  {
    id: "PWJ-Q-957",
    question: "Lengthening (heading) joints are mainly used to:",
    options: [
      "Join timbers end to end",
      "Join boards side by side",
      "Cut mouldings around corners",
      "Make panels more stable by alternating rings"
    ],
    correctIndex: 0,
    explanation: "Lengthening joints join timber end to end (often called heading joints)."
  },
  {
    id: "PWJ-Q-958",
    question: "Most heading joints are usually:",
    options: [
      "Highly structural and load-bearing",
      "Non-structural",
      "Used only in doors",
      "Only made with bolts"
    ],
    correctIndex: 1,
    explanation: "Heading joints are usually non-structural."
  },
  {
    id: "PWJ-Q-959",
    question: "Structural lengthening of load-bearing timbers requires:",
    options: [
      "A scarf joint (often with bolts or plates)",
      "A simple butt joint only",
      "A mitre joint with glue only",
      "A pencil gauge and eraser"
    ],
    correctIndex: 0,
    explanation: "Scarf joints are used for load-bearing lengthening and may need bolts/plates."
  },
  {
    id: "PWJ-Q-960",
    question: "Framing joints are commonly used in:",
    options: [
      "Windows, doors, and cabinets",
      "Only roofing felt",
      "Only curved work",
      "Only drawer bottoms"
    ],
    correctIndex: 0,
    explanation: "Framing joints are used in windows, doors, and cabinets."
  }
],
[
  {
    id: "PWJ-Q-961",
    question: "A basic butt joint is normally set at:",
    options: [
      "45 degrees",
      "90 degrees",
      "60 degrees",
      "Any angle only"
    ],
    correctIndex: 1,
    explanation: "Butt joints are most commonly formed at 90°."
  },
  {
    id: "PWJ-Q-962",
    question: "A butt joint on site is popular mainly because it is:",
    options: [
      "Decorative and complex",
      "Quick and simple to cut",
      "Always self-locking",
      "Hidden from view"
    ],
    correctIndex: 1,
    explanation: "It is widely used because it is fast and simple."
  },
  {
    id: "PWJ-Q-963",
    question: "A butt joint usually needs extra strength from:",
    options: [
      "Air drying only",
      "Nails, screws, or metal brackets",
      "A marking rod",
      "Growth rings"
    ],
    correctIndex: 1,
    explanation: "Butt joints normally require mechanical reinforcement."
  },
  {
    id: "PWJ-Q-964",
    question: "Skew (dovetail) nailing improves the joint because it:",
    options: [
      "Looks neater",
      "Resists pulling apart",
      "Removes the need for glue",
      "Prevents shrinkage"
    ],
    correctIndex: 1,
    explanation: "Angling the nails increases resistance to withdrawal."
  },
  {
    id: "PWJ-Q-965",
    question: "A bridle joint is similar to a mortice and tenon but is:",
    options: [
      "Fully enclosed",
      "Open ended",
      "Only decorative",
      "Used only outside"
    ],
    correctIndex: 1,
    explanation: "Unlike M&T, the bridle is open at the end."
  },
  {
    id: "PWJ-Q-966",
    question: "Bridle joints are often used in:",
    options: [
      "Roof tiles",
      "Door frames and cupboards",
      "Concrete formwork only",
      "Sheet storage"
    ],
    correctIndex: 1,
    explanation: "Common applications include doors, furniture, and cupboards."
  },
  {
    id: "PWJ-Q-967",
    question: "A mitred bridle joint mainly helps to:",
    options: [
      "Speed up production",
      "Hide end grain",
      "Avoid glue",
      "Reduce thickness"
    ],
    correctIndex: 1,
    explanation: "The mitre conceals much of the end grain."
  },
  {
    id: "PWJ-Q-968",
    question: "Dovetail joints are popular in drawers because they are:",
    options: [
      "Fast and temporary",
      "Very strong and attractive",
      "Invisible from all sides",
      "Used without glue"
    ],
    correctIndex: 1,
    explanation: "They provide excellent strength and visual quality."
  },
  {
    id: "PWJ-Q-969",
    question: "Through dovetails are normally found at the:",
    options: [
      "Front of a drawer",
      "Back of a drawer",
      "Top of a door",
      "Centre of a panel"
    ],
    correctIndex: 1,
    explanation: "Through dovetails usually appear at the drawer back."
  },
  {
    id: "PWJ-Q-970",
    question: "Lapped dovetails are used at the front because they:",
    options: [
      "Cut faster",
      "Hide the end grain",
      "Use less timber",
      "Need no glue"
    ],
    correctIndex: 1,
    explanation: "Lapped dovetails conceal the end grain at the front."
  },
  {
    id: "PWJ-Q-971",
    question: "Repeated trial assembly of dovetails can make the joint:",
    options: [
      "Stronger",
      "Looser and weaker",
      "Waterproof",
      "Self-clamping"
    ],
    correctIndex: 1,
    explanation: "Too many test fits can loosen the accuracy of the joint."
  },
  {
    id: "PWJ-Q-972",
    question: "A halving joint is also known as a:",
    options: [
      "Scarf joint",
      "Lap joint",
      "Mitre joint",
      "Housing joint"
    ],
    correctIndex: 1,
    explanation: "Halving joints are commonly called lap joints."
  },
  {
    id: "PWJ-Q-973",
    question: "In a halving joint the timbers:",
    options: [
      "Meet without overlap",
      "Overlap each other",
      "Are glued edge to edge",
      "Form a trench"
    ],
    correctIndex: 1,
    explanation: "One member overlaps the other."
  },
  {
    id: "PWJ-Q-974",
    question: "A dovetail halving joint is chosen mainly to:",
    options: [
      "Reduce cutting time",
      "Increase strength",
      "Save material",
      "Improve painting"
    ],
    correctIndex: 1,
    explanation: "The dovetail form improves resistance to pulling apart."
  },
  {
    id: "PWJ-Q-975",
    question: "A housing joint is formed by cutting:",
    options: [
      "Along the grain",
      "A trench across the grain",
      "Only at 45 degrees",
      "Through the full depth always"
    ],
    correctIndex: 1,
    explanation: "A housing (trench) is cut across the grain."
  },
  {
    id: "PWJ-Q-976",
    question: "The depth of a housing joint is often about:",
    options: [
      "Full depth",
      "One-third to one-half depth",
      "Only 1 mm",
      "Twice the timber thickness"
    ],
    correctIndex: 1,
    explanation: "Common practice is roughly one-third or half depth."
  },
  {
    id: "PWJ-Q-977",
    question: "A stopped housing is preferred when you want to:",
    options: [
      "Speed up cutting",
      "Hide the joint at the edge",
      "Reduce glue use",
      "Avoid marking out"
    ],
    correctIndex: 1,
    explanation: "Stopped housings do not show on the outside edge."
  },
  {
    id: "PWJ-Q-978",
    question: "A tongued housing helps prevent the joint from:",
    options: [
      "Being visible",
      "Pulling apart",
      "Getting wet",
      "Needing clamps"
    ],
    correctIndex: 1,
    explanation: "The tongue or shoulder resists separation."
  },
  {
    id: "PWJ-Q-979",
    question: "Housing joints are commonly used in:",
    options: [
      "Shelving and linings",
      "Concrete beams",
      "Roof tiles",
      "Steel frames"
    ],
    correctIndex: 0,
    explanation: "Typical uses include shelves, linings, stairs, and hatches."
  },
  {
    id: "PWJ-Q-980",
    question: "A mitre joint is mainly chosen to:",
    options: [
      "Make assembly quicker",
      "Hide end grain and keep the profile running",
      "Avoid using tools",
      "Increase timber width"
    ],
    correctIndex: 1,
    explanation: "Mitres create neat corners and conceal end grain."
  },
  {
    id: "PWJ-Q-981",
    question: "Cutting accurate mitres by hand is difficult, so you often use a:",
    options: [
      "Brace and bit",
      "Mitre box or saw",
      "Marking gauge",
      "Wheel gauge"
    ],
    correctIndex: 1,
    explanation: "Mitre boxes and saws improve cutting accuracy."
  },
  {
    id: "PWJ-Q-982",
    question: "Mitre joints are normally held together primarily with:",
    options: [
      "Adhesive",
      "No fixing at all",
      "Only wedges",
      "Pencil lines"
    ],
    correctIndex: 0,
    explanation: "Glue provides the main bond, sometimes with added reinforcement."
  },
  {
    id: "PWJ-Q-983",
    question: "A shooting board helps to:",
    options: [
      "Drill holes",
      "Fine tune mitres accurately",
      "Cut mortices",
      "Mark gauges"
    ],
    correctIndex: 1,
    explanation: "It allows very accurate trimming, often with a 45° stop."
  },
  {
    id: "PWJ-Q-984",
    question: "In a mortice and tenon joint, the tenon is the:",
    options: [
      "Female part",
      "Male part",
      "Waste area",
      "Profile"
    ],
    correctIndex: 1,
    explanation: "The tenon fits into the mortice, making it the male part."
  },
  {
    id: "PWJ-Q-985",
    question: "Mortice and tenon joints are common in:",
    options: [
      "Doors and frames",
      "Loose insulation",
      "Brickwork",
      "Roof felt"
    ],
    correctIndex: 0,
    explanation: "They are widely used in doors, frames, windows, and stairs."
  },
  {
    id: "PWJ-Q-986",
    question: "A wedged mortice and tenon increases:",
    options: [
      "Decoration only",
      "Strength",
      "Moisture content",
      "Cutting speed"
    ],
    correctIndex: 1,
    explanation: "Wedging tightens and strengthens the joint."
  },
  {
    id: "PWJ-Q-987",
    question: "A stub mortice and tenon is used when you want to:",
    options: [
      "Show end grain",
      "Keep the end grain hidden",
      "Cut faster",
      "Avoid glue"
    ],
    correctIndex: 1,
    explanation: "The blind design keeps the end grain out of sight."
  },
  {
    id: "PWJ-Q-988",
    question: "Rip cutting means sawing:",
    options: [
      "Across the grain",
      "Along the grain",
      "At 45 degrees",
      "Across laminations"
    ],
    correctIndex: 1,
    explanation: "Rip cuts follow the direction of the grain."
  },
  {
    id: "PWJ-Q-989",
    question: "Crosscutting is mainly used to form:",
    options: [
      "Cheeks",
      "Shoulders",
      "Grooves",
      "Tongues"
    ],
    correctIndex: 1,
    explanation: "Shoulders are created by cutting across the grain."
  },
  {
    id: "PWJ-Q-990",
    question: "You should always cut in the waste because:",
    options: [
      "It looks better",
      "You can remove more but cannot put timber back",
      "It saves marking time",
      "It prevents glue failure"
    ],
    correctIndex: 1,
    explanation: "Material can be removed later, but it cannot be replaced."
  }
],
[
  {
    id: "PWJ-Q-991",
    question: "A sharp tool is safer than a blunt one because it:",
    options: [
      "Looks more professional",
      "Requires less force to use",
      "Makes deeper cuts",
      "Is newer"
    ],
    correctIndex: 1,
    explanation: "Blunt tools need extra force which increases accident risk."
  },
  {
    id: "PWJ-Q-992",
    question: "Before cutting, timber should be secured using:",
    options: [
      "Your knee",
      "A vice or clamps",
      "One hand only",
      "A pencil line"
    ],
    correctIndex: 1,
    explanation: "Timber must not move while being worked."
  },
  {
    id: "PWJ-Q-993",
    question: "Why should waste be clearly marked?",
    options: [
      "To improve appearance",
      "To avoid cutting the wrong part",
      "To help glue dry",
      "To save timber"
    ],
    correctIndex: 1,
    explanation: "Clear hatching prevents mistakes."
  },
  {
    id: "PWJ-Q-994",
    question: "Rip sawing is mainly used to create:",
    options: [
      "Mitres",
      "Tenon cheeks",
      "Mouldings",
      "Margins"
    ],
    correctIndex: 1,
    explanation: "Rip cuts run along the grain forming cheeks."
  },
  {
    id: "PWJ-Q-995",
    question: "When starting a rip cut, the saw should begin:",
    options: [
      "On the finished line",
      "Inside the waste area",
      "Past the gauge line",
      "In the centre"
    ],
    correctIndex: 1,
    explanation: "Starting in the waste allows later adjustment."
  },
  {
    id: "PWJ-Q-996",
    question: "Near the shoulder line you should:",
    options: [
      "Speed up",
      "Slow down",
      "Twist the saw",
      "Change hands"
    ],
    correctIndex: 1,
    explanation: "Slowing improves control and accuracy."
  },
  {
    id: "PWJ-Q-997",
    question: "Crosscutting is done:",
    options: [
      "Along the grain",
      "Across the grain",
      "With the growth rings",
      "On the waste only"
    ],
    correctIndex: 1,
    explanation: "Crosscuts run across fibres."
  },
  {
    id: "PWJ-Q-998",
    question: "After the kerf is started in a crosscut you should:",
    options: [
      "Remove your guiding hand",
      "Press harder",
      "Lean closer",
      "Turn the timber"
    ],
    correctIndex: 0,
    explanation: "Hands must be kept clear for safety."
  },
  {
    id: "PWJ-Q-999",
    question: "Standing at the end of the bench when ripping helps you:",
    options: [
      "Work faster",
      "Keep the cut vertical",
      "See the waste",
      "Reduce noise"
    ],
    correctIndex: 1,
    explanation: "This position helps maintain square cuts."
  },
  {
    id: "PWJ-Q-1000",
    question: "When sighting along the saw spine you should see:",
    options: [
      "Only one side",
      "Both sides equally",
      "The teeth only",
      "Your reflection"
    ],
    correctIndex: 1,
    explanation: "Seeing both sides means the blade is upright."
  },
  {
    id: "PWJ-Q-1001",
    question: "Your hands should always be positioned:",
    options: [
      "Ahead of the blade",
      "Behind the cutting edge",
      "Under the timber",
      "Near the teeth"
    ],
    correctIndex: 1,
    explanation: "This reduces injury risk."
  },
  {
    id: "PWJ-Q-1002",
    question: "When sawing a housing, the cut should stop at:",
    options: [
      "Halfway",
      "The gauge line",
      "The edge",
      "Any mark"
    ],
    correctIndex: 1,
    explanation: "Cutting below weakens the joint."
  },
  {
    id: "PWJ-Q-1003",
    question: "Extra saw cuts in a housing help to:",
    options: [
      "Make it deeper",
      "Remove waste easier",
      "Hide the joint",
      "Reduce glue"
    ],
    correctIndex: 1,
    explanation: "Relief cuts make chiselling quicker."
  },
  {
    id: "PWJ-Q-1004",
    question: "A chisel for a housing should be:",
    options: [
      "Wider than the trench",
      "Slightly narrower",
      "Exactly double",
      "Very blunt"
    ],
    correctIndex: 1,
    explanation: "A slightly smaller chisel prevents damage."
  },
  {
    id: "PWJ-Q-1005",
    question: "A high spot left in the centre of a housing should be:",
    options: [
      "Ignored",
      "Levelled flat",
      "Painted",
      "Drilled"
    ],
    correctIndex: 1,
    explanation: "The bottom must be even for a good fit."
  },
  {
    id: "PWJ-Q-1006",
    question: "A simple way to find high points in a housing is to:",
    options: [
      "Blow on it",
      "Use pencil on a try square",
      "Add glue",
      "Measure again"
    ],
    correctIndex: 1,
    explanation: "Pencil marks highlight raised areas."
  },
  {
    id: "PWJ-Q-1007",
    question: "When producing many housings, the faster method is:",
    options: [
      "Handsaw only",
      "Router with a jig",
      "Hammer only",
      "Freehand chisel"
    ],
    correctIndex: 1,
    explanation: "Jigs improve speed and repeatability."
  },
  {
    id: "PWJ-Q-1008",
    question: "A mortice chisel is preferred because it has:",
    options: [
      "Rounded sides",
      "Strong square edges",
      "Short handle",
      "No bevel"
    ],
    correctIndex: 1,
    explanation: "Square edges help produce clean mortices."
  },
  {
    id: "PWJ-Q-1009",
    question: "When hand morticing you should start:",
    options: [
      "On the line",
      "Just inside the line",
      "Outside it",
      "At the corner"
    ],
    correctIndex: 1,
    explanation: "This protects the finished size."
  },
  {
    id: "PWJ-Q-1010",
    question: "Each mortice chisel strike is usually about:",
    options: [
      "1 mm",
      "10–12 mm",
      "50 mm",
      "Half the timber"
    ],
    correctIndex: 1,
    explanation: "Small steps maintain control."
  }
],
[
  {
    id: "PWJ-Q-1011",
    question: "For a through mortice, after working from one side you should:",
    options: [
      "Glue immediately",
      "Turn timber over",
      "Cut deeper",
      "Add wedges"
    ],
    correctIndex: 1,
    explanation: "Working from both sides prevents breakout."
  },
  {
    id: "PWJ-Q-1012",
    question: "Mortices may be made longer at the back edge to allow:",
    options: [
      "Painting",
      "Wedging",
      "Sanding",
      "Measuring"
    ],
    correctIndex: 1,
    explanation: "Extra space allows wedges to spread the tenon."
  },
  {
    id: "PWJ-Q-1013",
    question: "A time-saving method for wedges is to cut them from:",
    options: [
      "Scrap plywood",
      "Tenon waste",
      "New timber",
      "Flooring"
    ],
    correctIndex: 1,
    explanation: "This keeps wedges accurate and saves time."
  },
  {
    id: "PWJ-Q-1014",
    question: "When setting out dovetails, angles are often set using:",
    options: [
      "A tape",
      "A sliding bevel",
      "A rule",
      "Dividers"
    ],
    correctIndex: 1,
    explanation: "The bevel transfers the correct ratio."
  },
  {
    id: "PWJ-Q-1015",
    question: "The line marking timber thickness on a dovetail is the:",
    options: [
      "Face line",
      "Shoulder line",
      "Margin",
      "Datum"
    ],
    correctIndex: 1,
    explanation: "It shows how deep to cut."
  },
  {
    id: "PWJ-Q-1016",
    question: "Why should waste be marked on dovetails?",
    options: [
      "To look tidy",
      "To avoid errors",
      "To guide glue",
      "To help sanding"
    ],
    correctIndex: 1,
    explanation: "Clear waste marks prevent wrong cuts."
  },
  {
    id: "PWJ-Q-1017",
    question: "When cutting dovetail cheeks, the timber should be held in:",
    options: [
      "Your lap",
      "A vice",
      "Mid air",
      "A clamp"
    ],
    correctIndex: 1,
    explanation: "Secure work improves safety and accuracy."
  },
  {
    id: "PWJ-Q-1018",
    question: "The waste between tails is often removed using:",
    options: [
      "A tenon saw",
      "A coping saw",
      "A rip saw",
      "A plane"
    ],
    correctIndex: 1,
    explanation: "It quickly clears the middle section."
  },
  {
    id: "PWJ-Q-1019",
    question: "When paring dovetail shoulders, timber should sit on:",
    options: [
      "The bench top",
      "A scrap piece",
      "Your boot",
      "The vice"
    ],
    correctIndex: 1,
    explanation: "Scrap protects the bench."
  },
  {
    id: "PWJ-Q-1020",
    question: "Pins are marked by using:",
    options: [
      "A ruler",
      "The tails as a template",
      "A tape",
      "Guesswork"
    ],
    correctIndex: 1,
    explanation: "Transferring gives the most accurate match."
  },
  {
    id: "PWJ-Q-1021",
    question: "When cutting pins, the technique should be:",
    options: [
      "Different",
      "The same as tails",
      "Faster",
      "Shallower"
    ],
    correctIndex: 1,
    explanation: "Consistency keeps the fit correct."
  },
  {
    id: "PWJ-Q-1022",
    question: "During assembly of dovetails, a block is used to:",
    options: [
      "Increase force",
      "Protect the joint",
      "Hold glue",
      "Mark lines"
    ],
    correctIndex: 1,
    explanation: "It prevents bruising the timber."
  },
  {
    id: "PWJ-Q-1023",
    question: "A dry fit means assembling:",
    options: [
      "With wedges",
      "Without glue",
      "With nails",
      "With clamps"
    ],
    correctIndex: 1,
    explanation: "It checks everything before bonding."
  },
  {
    id: "PWJ-Q-1024",
    question: "Before gluing, internal edges should be:",
    options: [
      "Painted",
      "Sanded",
      "Oiled",
      "Cut"
    ],
    correctIndex: 1,
    explanation: "Preparation improves finish and bonding."
  },
  {
    id: "PWJ-Q-1025",
    question: "Recommended abrasive for hardwood in prep is about:",
    options: [
      "40 grit",
      "120 grit",
      "400 grit",
      "Any grit"
    ],
    correctIndex: 1,
    explanation: "Hardwood uses a finer grade."
  },
  {
    id: "PWJ-Q-1026",
    question: "PVA adhesive normally dries:",
    options: [
      "Black",
      "Clear",
      "Yellow",
      "Brown"
    ],
    correctIndex: 1,
    explanation: "It starts white and becomes transparent."
  },
  {
    id: "PWJ-Q-1027",
    question: "Excess PVA should be removed using:",
    options: [
      "A chisel",
      "A damp cloth",
      "Sandpaper",
      "Air"
    ],
    correctIndex: 1,
    explanation: "Wipe it before it hardens."
  },
  {
    id: "PWJ-Q-1028",
    question: "PU adhesive is known for:",
    options: [
      "Staying thin",
      "Foaming",
      "Drying slowly",
      "Being weak"
    ],
    correctIndex: 1,
    explanation: "The foam helps fill gaps."
  },
  {
    id: "PWJ-Q-1029",
    question: "PU adhesive squeeze-out should be removed:",
    options: [
      "Immediately",
      "After curing",
      "Before clamping",
      "With water"
    ],
    correctIndex: 1,
    explanation: "Let it harden then pare away."
  },
  {
    id: "PWJ-Q-1030",
    question: "UF adhesive comes as:",
    options: [
      "Liquid",
      "Powder",
      "Foam",
      "Paste"
    ],
    correctIndex: 1,
    explanation: "It must be mixed before use."
  }
],
[
  {
    id: "PWJ-Q-1031",
    question: "UF adhesive normally begins to set in about:",
    options: [
      "10 minutes",
      "1–2 hours",
      "24 hours",
      "Two days"
    ],
    correctIndex: 1,
    explanation: "It starts reacting after mixing."
  },
  {
    id: "PWJ-Q-1032",
    question: "UF adhesive should be cleaned off:",
    options: [
      "After sanding",
      "While wet",
      "Next day",
      "After painting"
    ],
    correctIndex: 1,
    explanation: "It is easier before curing."
  },
  {
    id: "PWJ-Q-1033",
    question: "Before using adhesives you must follow:",
    options: [
      "Your guess",
      "Manufacturer instructions",
      "Old habits",
      "Other trades"
    ],
    correctIndex: 1,
    explanation: "Guidance ensures safety and performance."
  },
  {
    id: "PWJ-Q-1034",
    question: "Gloves may be required when:",
    options: [
      "Measuring",
      "Handling adhesives",
      "Sweeping",
      "Marking"
    ],
    correctIndex: 1,
    explanation: "Some products can irritate skin."
  },
  {
    id: "PWJ-Q-1035",
    question: "Bench bearers are used during glue up to:",
    options: [
      "Store tools",
      "Support the frame",
      "Cut joints",
      "Hold screws"
    ],
    correctIndex: 1,
    explanation: "They provide a stable base."
  },
  {
    id: "PWJ-Q-1036",
    question: "If the bearers are twisted you should:",
    options: [
      "Ignore it",
      "Pack them level",
      "Cut them",
      "Glue them"
    ],
    correctIndex: 1,
    explanation: "A level base prevents distortion."
  },
  {
    id: "PWJ-Q-1037",
    question: "When clamping a frame, diagonals should be:",
    options: [
      "Estimated",
      "Equal",
      "Short",
      "Ignored"
    ],
    correctIndex: 1,
    explanation: "Matching diagonals mean square."
  },
  {
    id: "PWJ-Q-1038",
    question: "A frame is square when the diagonals:",
    options: [
      "Look right",
      "Match",
      "Are longer",
      "Are marked"
    ],
    correctIndex: 1,
    explanation: "Equality confirms accuracy."
  },
  {
    id: "PWJ-Q-1039",
    question: "Before driving wedges you must check for:",
    options: [
      "Glue colour",
      "Twist",
      "Length",
      "Weight"
    ],
    correctIndex: 1,
    explanation: "Twist would lock the frame out of true."
  },
  {
    id: "PWJ-Q-1040",
    question: "After wedges are fitted, the excess should be:",
    options: [
      "Painted",
      "Trimmed off",
      "Burned",
      "Left proud"
    ],
    correctIndex: 1,
    explanation: "They must not obstruct finishing."
  },
  {
    id: "PWJ-Q-1041",
    question: "After glue has cured, clamps should be:",
    options: [
      "Hammered",
      "Removed",
      "Oiled",
      "Stored wet"
    ],
    correctIndex: 1,
    explanation: "Work can then be finished."
  },
  {
    id: "PWJ-Q-1042",
    question: "Horns on a frame are normally:",
    options: [
      "Extended",
      "Cut off",
      "Painted",
      "Bent"
    ],
    correctIndex: 1,
    explanation: "They are temporary aids."
  },
  {
    id: "PWJ-Q-1043",
    question: "Arrises are eased mainly to:",
    options: [
      "Increase weight",
      "Improve finish",
      "Hold glue",
      "Change size"
    ],
    correctIndex: 1,
    explanation: "It looks better and is safer."
  },
  {
    id: "PWJ-Q-1044",
    question: "Good housekeeping helps to:",
    options: [
      "Slow work",
      "Reduce accidents",
      "Use materials",
      "Create noise"
    ],
    correctIndex: 1,
    explanation: "Clear areas are safer."
  },
  {
    id: "PWJ-Q-1045",
    question: "Reusable timber should be sent:",
    options: [
      "To waste",
      "Back to stores",
      "Outside",
      "To scrap"
    ],
    correctIndex: 1,
    explanation: "It can be used again."
  },
  {
    id: "PWJ-Q-1046",
    question: "After use, tools should be:",
    options: [
      "Hidden",
      "Cleaned and checked",
      "Sharpened always",
      "Left out"
    ],
    correctIndex: 1,
    explanation: "Ready for the next task."
  },
  {
    id: "PWJ-Q-1047",
    question: "Damaged tools must be:",
    options: [
      "Sharpened",
      "Removed from use",
      "Borrowed",
      "Ignored"
    ],
    correctIndex: 1,
    explanation: "They are unsafe."
  },
  {
    id: "PWJ-Q-1048",
    question: "A hatch lining is built similarly to:",
    options: [
      "A floor",
      "A door lining",
      "A roof",
      "A stair"
    ],
    correctIndex: 1,
    explanation: "Construction principles are alike."
  },
  {
    id: "PWJ-Q-1049",
    question: "Many loft hatches are hung using:",
    options: [
      "Hook bands",
      "Butt hinges",
      "Piano hinges",
      "Pins"
    ],
    correctIndex: 1,
    explanation: "They are common and reliable."
  },
  {
    id: "PWJ-Q-1050",
    question: "A recommended minimum loft opening is about:",
    options: [
      "300 × 300",
      "530 × 530",
      "900 × 900",
      "1200 × 600"
    ],
    correctIndex: 1,
    explanation: "This provides practical access."
  }
],
[
  {
    id: "PWJ-Q-1051",
    question: "A rod is mainly used to:",
    options: [
      "Estimate costs",
      "Provide full size setting out",
      "Sharpen tools",
      "Store timber"
    ],
    correctIndex: 1,
    explanation: "It shows work at actual size."
  },
  {
    id: "PWJ-Q-1052",
    question: "Errors on the rod are cheapest to fix:",
    options: [
      "After assembly",
      "Before cutting",
      "During finishing",
      "After delivery"
    ],
    correctIndex: 1,
    explanation: "Mistakes later waste material."
  },
  {
    id: "PWJ-Q-1053",
    question: "The rod should be checked by:",
    options: [
      "Anyone nearby",
      "A supervisor",
      "The painter",
      "The client"
    ],
    correctIndex: 1,
    explanation: "Approval avoids costly errors."
  },
  {
    id: "PWJ-Q-1054",
    question: "A specification provides:",
    options: [
      "Less information",
      "Extra written detail",
      "Only prices",
      "Delivery dates"
    ],
    correctIndex: 1,
    explanation: "It adds what drawings may miss."
  },
  {
    id: "PWJ-Q-1055",
    question: "For routine square work a rod is:",
    options: [
      "Always essential",
      "Not always needed",
      "Illegal",
      "For designers"
    ],
    correctIndex: 1,
    explanation: "Simple items can be marked directly."
  },
  {
    id: "PWJ-Q-1056",
    question: "A cutting list is mainly used by:",
    options: [
      "Electrician",
      "Wood machinist",
      "Plumber",
      "Decorator"
    ],
    correctIndex: 1,
    explanation: "They prepare the timber."
  },
  {
    id: "PWJ-Q-1057",
    question: "Nominal size timber is usually:",
    options: [
      "Finished size",
      "Slightly bigger",
      "Too small",
      "Exact length"
    ],
    correctIndex: 1,
    explanation: "Planing reduces it."
  },
  {
    id: "PWJ-Q-1058",
    question: "Using the rod repeatedly ensures:",
    options: [
      "Less marking",
      "Consistency",
      "More waste",
      "Higher cost"
    ],
    correctIndex: 1,
    explanation: "Every item matches."
  },
  {
    id: "PWJ-Q-1059",
    question: "Sheet material is preferred for rods because it:",
    options: [
      "Is colourful",
      "Stays stable",
      "Is lighter",
      "Is cheaper"
    ],
    correctIndex: 1,
    explanation: "It moves less than paper."
  },
  {
    id: "PWJ-Q-1060",
    question: "A timber profile refers to its:",
    options: [
      "Weight",
      "Section shape",
      "Length",
      "Colour"
    ],
    correctIndex: 1,
    explanation: "Examples include rebates."
  },
  {
    id: "PWJ-Q-1061",
    question: "A 2H pencil is preferred because it gives:",
    options: [
      "Dark marks",
      "Fine clear lines",
      "Soft shading",
      "Wide lines"
    ],
    correctIndex: 1,
    explanation: "Accuracy improves."
  },
  {
    id: "PWJ-Q-1062",
    question: "A sliding bevel is used to:",
    options: [
      "Cut curves",
      "Transfer angles",
      "Measure length",
      "Mark circles"
    ],
    correctIndex: 1,
    explanation: "It copies existing angles."
  },
  {
    id: "PWJ-Q-1063",
    question: "Dividers are mainly used to:",
    options: [
      "Draw lines",
      "Step equal spaces",
      "Cut joints",
      "Hold timber"
    ],
    correctIndex: 1,
    explanation: "They repeat distances."
  },
  {
    id: "PWJ-Q-1064",
    question: "Face sides are chosen after checking for:",
    options: [
      "Price",
      "Defects",
      "Moisture",
      "Paint"
    ],
    correctIndex: 1,
    explanation: "Best surfaces are selected."
  },
  {
    id: "PWJ-Q-1065",
    question: "When placing parts on the rod, face edges should:",
    options: [
      "Point outwards",
      "Point inward",
      "Be hidden",
      "Be random"
    ],
    correctIndex: 1,
    explanation: "This reflects assembly."
  },
  {
    id: "PWJ-Q-1066",
    question: "Frame sides are called:",
    options: [
      "Rails",
      "Stiles",
      "Posts",
      "Boards"
    ],
    correctIndex: 1,
    explanation: "They run vertically."
  },
  {
    id: "PWJ-Q-1067",
    question: "Pairing components helps to:",
    options: [
      "Save timber",
      "Keep joints matching",
      "Cut faster",
      "Reduce glue"
    ],
    correctIndex: 1,
    explanation: "Marks are identical."
  },
  {
    id: "PWJ-Q-1068",
    question: "The try square stock must sit firmly against the:",
    options: [
      "Bench",
      "Face side or edge",
      "Blade",
      "Air"
    ],
    correctIndex: 1,
    explanation: "This keeps lines true."
  },
  {
    id: "PWJ-Q-1069",
    question: "Shoulder lines should be carried:",
    options: [
      "On one face",
      "All around",
      "Halfway",
      "Nowhere"
    ],
    correctIndex: 1,
    explanation: "It guides accurate cutting."
  },
  {
    id: "PWJ-Q-1070",
    question: "The golden rule is always mark from:",
    options: [
      "Any edge",
      "Face references",
      "Centre",
      "Opposite ends"
    ],
    correctIndex: 1,
    explanation: "Consistency prevents errors."
  }
],
[
  {
    id: "PWJ-Q-1071",
    question: "Joint knowledge is still needed even when using machinery because:",
    options: [
      "Machines remove the need to understand joints",
      "You still must design and form strong joints",
      "Only designers need joint knowledge",
      "Joints are not part of daily work"
    ],
    correctIndex: 1,
    explanation: "Tools help efficiency, but basics are still required."
  },
  {
    id: "PWJ-Q-1072",
    question: "When choosing a joint, you must match its strength to:",
    options: [
      "The colour of the timber",
      "The task in hand",
      "The season",
      "The brand of adhesive"
    ],
    correctIndex: 1,
    explanation: "Joint strength must suit the job."
  },
  {
    id: "PWJ-Q-1073",
    question: "Structural timber should usually have:",
    options: [
      "Wild grain for decoration",
      "Straighter grain",
      "Large knots",
      "High moisture content"
    ],
    correctIndex: 1,
    explanation: "Straight grain helps maintain shape and strength under load."
  },
  {
    id: "PWJ-Q-1074",
    question: "Joinery timber may be chosen for:",
    options: [
      "Decorative quality and durability",
      "Only straightest grain",
      "Only cheapest price",
      "Only internal use"
    ],
    correctIndex: 0,
    explanation: "Joinery selection considers appearance and durability."
  },
  {
    id: "PWJ-Q-1075",
    question: "Less durable timber should be treated with preservatives to prevent:",
    options: [
      "Bleaching",
      "Rotting",
      "Cupping",
      "Case hardening"
    ],
    correctIndex: 1,
    explanation: "Preservatives help stop decay."
  },
  {
    id: "PWJ-Q-1076",
    question: "A timber merchant can advise you on:",
    options: [
      "Paint colours only",
      "Suitable timbers for the job",
      "Nail sizes only",
      "How to use a bench grinder"
    ],
    correctIndex: 1,
    explanation: "Merchants can guide timber suitability."
  },
  {
    id: "PWJ-Q-1077",
    question: "Timber exposed for 0–5 years is classed as:",
    options: [
      "Durable",
      "Perishable",
      "Exceptionally durable",
      "Moderately durable"
    ],
    correctIndex: 1,
    explanation: "0–5 years exposed = perishable."
  },
  {
    id: "PWJ-Q-1078",
    question: "Timber exposed for 25+ years is classed as:",
    options: [
      "Non-durable",
      "Exceptionally durable",
      "Moderately durable",
      "Perishable"
    ],
    correctIndex: 1,
    explanation: "25+ years exposed = exceptionally durable."
  },
  {
    id: "PWJ-Q-1079",
    question: "Before timber reaches the supplier it is usually:",
    options: [
      "Only painted",
      "Converted and dried to suitable moisture content",
      "Always laminated",
      "Only debarked"
    ],
    correctIndex: 1,
    explanation: "Conversion and drying happen before supply."
  },
  {
    id: "PWJ-Q-1080",
    question: "In timber conversion, “converted” means:",
    options: [
      "Turned into plywood",
      "Sawn along the grain to produce boards",
      "Dried in a kiln",
      "Coated in preservative"
    ],
    correctIndex: 1,
    explanation: "Conversion starts after trees are felled and boards are sawn."
  },
  {
    id: "PWJ-Q-1081",
    question: "Softwood comes from:",
    options: [
      "Deciduous trees",
      "Coniferous trees",
      "Tropical shrubs",
      "Fruit trees only"
    ],
    correctIndex: 1,
    explanation: "Softwood is from coniferous trees such as pine."
  },
  {
    id: "PWJ-Q-1082",
    question: "Hardwood comes from:",
    options: [
      "Coniferous trees",
      "Deciduous trees",
      "Evergreen trees only",
      "Palm trees only"
    ],
    correctIndex: 1,
    explanation: "Hardwood is from deciduous trees such as oak."
  },
  {
    id: "PWJ-Q-1083",
    question: "At the sawmill, removing bark from trunks is called:",
    options: [
      "Scanning",
      "Debarking",
      "Seasoning",
      "Planing"
    ],
    correctIndex: 1,
    explanation: "Debarking is the bark removal stage."
  },
  {
    id: "PWJ-Q-1084",
    question: "Timber is scanned at the sawmill to check:",
    options: [
      "Colour and smell",
      "Size and strength",
      "Only moisture",
      "Only grain pattern"
    ],
    correctIndex: 1,
    explanation: "Machines scan for size and strength."
  },
  {
    id: "PWJ-Q-1085",
    question: "The lowest quality softwood grade described is:",
    options: [
      "Firsts / grade 1",
      "Sixth grade",
      "Second grade",
      "Premium select"
    ],
    correctIndex: 1,
    explanation: "Sixth grade is the lowest quality."
  },
  {
    id: "PWJ-Q-1086",
    question: "Sixth grade softwood often contains:",
    options: [
      "Perfectly straight grain only",
      "Large knots and defects",
      "No knots at all",
      "Only radial boards"
    ],
    correctIndex: 1,
    explanation: "Lowest grade commonly has defects."
  },
  {
    id: "PWJ-Q-1087",
    question: "Shrinkage in timber is very small:",
    options: [
      "Along the length",
      "Along the growth rings",
      "Across the growth rings",
      "At the surface only"
    ],
    correctIndex: 0,
    explanation: "Length shrinkage is minimal."
  },
  {
    id: "PWJ-Q-1088",
    question: "Shrinkage is greatest:",
    options: [
      "Along the length",
      "Along the growth rings",
      "Across the growth rings",
      "At the bark"
    ],
    correctIndex: 1,
    explanation: "Growth ring direction has the most movement."
  },
  {
    id: "PWJ-Q-1089",
    question: "A tangential board is identified by grain angle:",
    options: [
      "Above 45°",
      "45° or less",
      "Exactly 90°",
      "Any angle is tangential"
    ],
    correctIndex: 1,
    explanation: "45° or less = tangential."
  },
  {
    id: "PWJ-Q-1090",
    question: "A radial (quarter sawn) board has grain angle:",
    options: [
      "45° or less",
      "Above 45°",
      "Exactly 10°",
      "Always 0°"
    ],
    correctIndex: 1,
    explanation: "Above 45° = radial/quarter sawn."
  },
  {
    id: "PWJ-Q-1091",
    question: "Tangential boards may cup because they shrink:",
    options: [
      "Towards the centre",
      "Away from the tree centre",
      "Only along the length",
      "Only at the ends"
    ],
    correctIndex: 1,
    explanation: "Tangential shrinkage pattern can cause cupping."
  },
  {
    id: "PWJ-Q-1092",
    question: "Timber dries until it reaches equilibrium, meaning:",
    options: [
      "It becomes waterproof",
      "Its moisture matches the environment",
      "It reaches 0% moisture",
      "It becomes stronger than steel"
    ],
    correctIndex: 1,
    explanation: "Equilibrium moisture content matches surroundings."
  },
  {
    id: "PWJ-Q-1093",
    question: "Putting wet timber into a dry room can cause joints to develop:",
    options: [
      "Perfect alignment",
      "Gaps",
      "Extra glue strength",
      "No change"
    ],
    correctIndex: 1,
    explanation: "Fast shrinkage can open gaps."
  },
  {
    id: "PWJ-Q-1094",
    question: "Through and through sawing is also called:",
    options: [
      "Quarter sawing",
      "Slab / flat sawing",
      "Boxed heart conversion",
      "Microwave seasoning"
    ],
    correctIndex: 1,
    explanation: "Through and through = slab/flat sawing."
  },
  {
    id: "PWJ-Q-1095",
    question: "Quarter sawn timber is more expensive mainly because:",
    options: [
      "It uses less labour",
      "It creates waste and takes extra time rotating the trunk",
      "It is always green timber",
      "It cannot be dried"
    ],
    correctIndex: 1,
    explanation: "Extra waste and time raise cost."
  },
  {
    id: "PWJ-Q-1096",
    question: "Radial boards are less likely to:",
    options: [
      "Wear well",
      "Distort",
      "Be used in joinery",
      "Be used in flooring"
    ],
    correctIndex: 1,
    explanation: "Radial boards resist distortion."
  },
  {
    id: "PWJ-Q-1097",
    question: "Tangential cut timber is preferred for load-bearing joists and beams because it is:",
    options: [
      "The strongest",
      "The weakest",
      "Always moisture resistant",
      "Always quarter sawn"
    ],
    correctIndex: 0,
    explanation: "Tangential boards are described as strongest."
  },
  {
    id: "PWJ-Q-1098",
    question: "To reduce movement in a widened panel, you should:",
    options: [
      "Keep all growth rings the same way",
      "Alternate the end grain pattern",
      "Glue only one edge",
      "Use only very wide boards"
    ],
    correctIndex: 1,
    explanation: "Alternating helps balance cupping."
  },
  {
    id: "PWJ-Q-1099",
    question: "Timber must be seasoned so moisture content is below:",
    options: [
      "5%",
      "20%",
      "35%",
      "60%"
    ],
    correctIndex: 1,
    explanation: "Above 20% increases dry rot risk."
  },
  {
    id: "PWJ-Q-1100",
    question: "Unseasoned timber is called:",
    options: [
      "Radial",
      "Green",
      "Kilned",
      "PSE"
    ],
    correctIndex: 1,
    explanation: "Green timber = unseasoned."
  }
],
[
  {
    id: "PWJ-Q-1101",
    question: "Green oak is often used for timber frames because:",
    options: [
      "It is already fully seasoned",
      "High moisture makes it softer and easier to cut joints",
      "It never shrinks",
      "It cannot develop shakes"
    ],
    correctIndex: 1,
    explanation: "Higher moisture makes green oak softer, so joints are easier to cut."
  },
  {
    id: "PWJ-Q-1102",
    question: "As green oak dries it will usually:",
    options: [
      "Harden and shrink",
      "Get softer and swell",
      "Stay the same size forever",
      "Turn into plywood"
    ],
    correctIndex: 0,
    explanation: "Drying makes it harden and shrink."
  },
  {
    id: "PWJ-Q-1103",
    question: "Surface shakes that appear as green oak dries are often seen as:",
    options: [
      "Always a failure",
      "Attractive",
      "A sign of insect attack",
      "Proof it was kiln dried"
    ],
    correctIndex: 1,
    explanation: "Shakes can be considered attractive in green oak work."
  },
  {
    id: "PWJ-Q-1104",
    question: "External construction timber may not be seasoned because:",
    options: [
      "It will be exposed to weather and acclimatise naturally",
      "It must stay above 20% moisture",
      "Seasoning is illegal outdoors",
      "It cannot shrink"
    ],
    correctIndex: 0,
    explanation: "External timber can acclimatise outdoors."
  },
  {
    id: "PWJ-Q-1105",
    question: "One benefit of seasoning internal timber is that it becomes:",
    options: [
      "Heavier",
      "Lighter",
      "More likely to warp",
      "Too brittle to machine"
    ],
    correctIndex: 1,
    explanation: "Dry timber is lighter."
  },
  {
    id: "PWJ-Q-1106",
    question: "Finishes generally adhere better to:",
    options: [
      "Wet timber",
      "Seasoned timber",
      "Green timber only",
      "Timber stored outdoors"
    ],
    correctIndex: 1,
    explanation: "Seasoned timber takes finishes better."
  },
  {
    id: "PWJ-Q-1107",
    question: "Typical moisture content for external joinery is:",
    options: [
      "20% or less",
      "15–18%",
      "10–15%",
      "8–10%"
    ],
    correctIndex: 1,
    explanation: "External joinery is listed as 15–18%."
  },
  {
    id: "PWJ-Q-1108",
    question: "Most internal timber should be around:",
    options: [
      "25–30%",
      "10–15%",
      "15–18%",
      "0–5%"
    ],
    correctIndex: 1,
    explanation: "Most internal timber is 10–15%."
  },
  {
    id: "PWJ-Q-1109",
    question: "Timber used near heat or constant heating is typically dried to:",
    options: [
      "8–10%",
      "10–15%",
      "15–18%",
      "20% or less"
    ],
    correctIndex: 0,
    explanation: "Near heat/constant heating = 8–10%."
  },
  {
    id: "PWJ-Q-1110",
    question: "Moisture content is checked using:",
    options: [
      "A combination square",
      "A moisture meter",
      "A sliding bevel",
      "A marking knife"
    ],
    correctIndex: 1,
    explanation: "A moisture meter is used."
  },
  {
    id: "PWJ-Q-1111",
    question: "A moisture meter works because:",
    options: [
      "Wet timber blocks electricity",
      "More moisture allows electricity to flow more easily",
      "It measures colour changes",
      "It checks growth ring angles"
    ],
    correctIndex: 1,
    explanation: "Higher moisture increases conductivity, giving a higher reading."
  },
  {
    id: "PWJ-Q-1112",
    question: "The three seasoning methods listed are:",
    options: [
      "Debarking, scanning, grading",
      "Air drying, kiln drying, microwave vacuum seasoning",
      "Planing, sanding, varnishing",
      "Cupping, bowing, springing"
    ],
    correctIndex: 1,
    explanation: "Those are the methods given."
  },
  {
    id: "PWJ-Q-1113",
    question: "Air drying timber is usually done by stacking it:",
    options: [
      "In open-sided sheds with piling sticks",
      "In sealed plastic bags",
      "Directly on wet ground",
      "In a heated oven"
    ],
    correctIndex: 0,
    explanation: "Piling sticks allow airflow in open-sided sheds."
  },
  {
    id: "PWJ-Q-1114",
    question: "A key disadvantage of air drying is that it:",
    options: [
      "Always causes twisting",
      "Can take months or years",
      "Cannot produce stable timber",
      "Requires pressure tanks"
    ],
    correctIndex: 1,
    explanation: "Air drying can be very slow."
  },
  {
    id: "PWJ-Q-1115",
    question: "Kiln drying removes moist air mainly by:",
    options: [
      "Ventilation",
      "Piling sticks",
      "Debarking",
      "Hand planing"
    ],
    correctIndex: 0,
    explanation: "Ventilation removes moist air from the kiln."
  },
  {
    id: "PWJ-Q-1116",
    question: "Case hardening happens when:",
    options: [
      "Timber dries too slowly",
      "Timber dries too quickly and moisture is trapped inside",
      "Timber is painted",
      "Timber is quarter sawn"
    ],
    correctIndex: 1,
    explanation: "Fast drying can trap moisture in the core."
  },
  {
    id: "PWJ-Q-1117",
    question: "Microwave vacuum seasoning is different because it:",
    options: [
      "Only heats the outside first",
      "Heats inside and outside at the same time",
      "Always takes months",
      "Creates more seasoning defects"
    ],
    correctIndex: 1,
    explanation: "It heats throughout, reducing defect risk."
  },
  {
    id: "PWJ-Q-1118",
    question: "Poor storage can cause timber to become waterlogged and also:",
    options: [
      "Lighter and easier to cut",
      "Stained, heavier, and harder to cut",
      "Stronger and straighter",
      "Naturally preservative treated"
    ],
    correctIndex: 1,
    explanation: "Saturated timber is heavier and harder to work."
  },
  {
    id: "PWJ-Q-1119",
    question: "Direct sunlight can change timber colour; this is called:",
    options: [
      "Seasoning",
      "Bleaching",
      "Debarking",
      "Scanning"
    ],
    correctIndex: 1,
    explanation: "UV colour change is bleaching."
  },
  {
    id: "PWJ-Q-1120",
    question: "Second seasoning for internal work helps timber reach:",
    options: [
      "Case hardening",
      "Equilibrium",
      "Cupping",
      "Resin bleed"
    ],
    correctIndex: 1,
    explanation: "Second seasoning helps acclimatise timber to the fitting environment."
  }
],
[
  {
    id: "PWJ-Q-1121",
    question: "CLS timber is mainly used for:",
    options: [
      "Fine cabinet making",
      "Structural carcassing work",
      "Decorative veneers",
      "Outdoor cladding only"
    ],
    correctIndex: 1,
    explanation: "CLS is typically used for carcassing and structural framing."
  },
  {
    id: "PWJ-Q-1122",
    question: "A key feature of CLS timber is:",
    options: [
      "Very rough surfaces",
      "Rounded corners",
      "Live waney edges",
      "Unplaned faces"
    ],
    correctIndex: 1,
    explanation: "CLS is planed with rounded corners."
  },
  {
    id: "PWJ-Q-1123",
    question: "Stress grading is required because timber will:",
    options: [
      "Be used decoratively",
      "Carry structural loads",
      "Always be painted",
      "Never contain defects"
    ],
    correctIndex: 1,
    explanation: "Structural timber must be strong enough to carry loads."
  },
  {
    id: "PWJ-Q-1124",
    question: "Common softwood structural grades include:",
    options: [
      "A1 and A2",
      "C16 and C32",
      "S1 and S2",
      "B and Q"
    ],
    correctIndex: 1,
    explanation: "C16 and C32 are standard strength classes."
  },
  {
    id: "PWJ-Q-1125",
    question: "In hardwood grading, a higher D number means:",
    options: [
      "Lower strength",
      "Higher strength",
      "More moisture",
      "Less durability"
    ],
    correctIndex: 1,
    explanation: "Higher numbers indicate stronger timber."
  },
  {
    id: "PWJ-Q-1126",
    question: "Dead knots may become a problem because they can:",
    options: [
      "Increase strength",
      "Loosen or fall out",
      "Prevent shrinkage",
      "Improve appearance"
    ],
    correctIndex: 1,
    explanation: "Dead knots are not fully bonded and may drop out."
  },
  {
    id: "PWJ-Q-1127",
    question: "Waney edge means:",
    options: [
      "A machine mark",
      "Bark remaining on the edge",
      "A fungal stain",
      "A twist in the board"
    ],
    correctIndex: 1,
    explanation: "Waney edge is where bark remains."
  },
  {
    id: "PWJ-Q-1128",
    question: "A heart shake is identified by:",
    options: [
      "Many cracks from the centre",
      "A single split through the pith",
      "Blue staining",
      "Edge cupping"
    ],
    correctIndex: 1,
    explanation: "Heart shake is one main crack."
  },
  {
    id: "PWJ-Q-1129",
    question: "Star shake differs from heart shake because it has:",
    options: [
      "No cracks",
      "Three or more splits",
      "Only surface marks",
      "Damage from insects"
    ],
    correctIndex: 1,
    explanation: "Star shake has multiple radiating splits."
  },
  {
    id: "PWJ-Q-1130",
    question: "Blue stain affects timber by:",
    options: [
      "Reducing strength",
      "Changing colour only",
      "Causing rot",
      "Softening fibres"
    ],
    correctIndex: 1,
    explanation: "Blue stain is mainly visual."
  },
  {
    id: "PWJ-Q-1131",
    question: "Sloping grain timber is generally:",
    options: [
      "Stronger",
      "Weaker",
      "More stable",
      "Always decorative"
    ],
    correctIndex: 1,
    explanation: "It reduces strength."
  },
  {
    id: "PWJ-Q-1132",
    question: "Twisting in boards is usually caused by:",
    options: [
      "Correct storage",
      "Poor stacking during seasoning",
      "Too much planing",
      "Painting too early"
    ],
    correctIndex: 1,
    explanation: "Bad stacking leads to twist."
  },
  {
    id: "PWJ-Q-1133",
    question: "Once timber has twisted it can be:",
    options: [
      "Easily repaired",
      "Not corrected",
      "Fixed with glue",
      "Straightened with clamps"
    ],
    correctIndex: 1,
    explanation: "Twist is permanent."
  },
  {
    id: "PWJ-Q-1134",
    question: "Cupping is most common in:",
    options: [
      "Radial boards",
      "Tangential boards",
      "Plywood",
      "MDF"
    ],
    correctIndex: 1,
    explanation: "Tangential cuts tend to cup."
  },
  {
    id: "PWJ-Q-1135",
    question: "In springing, the curve is found on the:",
    options: [
      "Face",
      "Edge",
      "End grain",
      "Corner"
    ],
    correctIndex: 1,
    explanation: "Spring shows along the edge."
  },
  {
    id: "PWJ-Q-1136",
    question: "In bowing, the curve appears on the:",
    options: [
      "Edge",
      "Face",
      "Arris",
      "Joint line"
    ],
    correctIndex: 1,
    explanation: "Bowing affects the face."
  },
  {
    id: "PWJ-Q-1137",
    question: "Dry rot becomes likely when moisture content is:",
    options: [
      "Below 10%",
      "Above 20%",
      "Exactly 15%",
      "Under 5%"
    ],
    correctIndex: 1,
    explanation: "Above 20% encourages fungal attack."
  },
  {
    id: "PWJ-Q-1138",
    question: "Transit damage usually happens because timber is:",
    options: [
      "Too dry",
      "Not supported or tied down",
      "Too expensive",
      "Pressure treated"
    ],
    correctIndex: 1,
    explanation: "Poor transport security causes movement."
  },
  {
    id: "PWJ-Q-1139",
    question: "Foreign bodies like staples are dangerous because they can:",
    options: [
      "Improve strength",
      "Damage tools",
      "Reduce weight",
      "Help seasoning"
    ],
    correctIndex: 1,
    explanation: "Metal can break blades and become a hazard."
  },
  {
    id: "PWJ-Q-1140",
    question: "Recycled timber should be checked with:",
    options: [
      "A try square",
      "A metal detector",
      "A moisture meter",
      "A sliding bevel"
    ],
    correctIndex: 1,
    explanation: "Metal detectors help find hidden objects."
  }
],
[
  {
    id: "PWJ-Q-1141",
    question: "Employees must report defective tools to:",
    options: [
      "Other workers",
      "Their employer or supervisor",
      "The supplier",
      "No one"
    ],
    correctIndex: 1,
    explanation: "Employees are responsible for reporting faults."
  },
  {
    id: "PWJ-Q-1142",
    question: "If a tool cannot be repaired it should be:",
    options: [
      "Used carefully",
      "Labelled out of action",
      "Stored quietly",
      "Given away"
    ],
    correctIndex: 1,
    explanation: "Unsafe tools must not remain in use."
  },
  {
    id: "PWJ-Q-1143",
    question: "Sharpening cutting edges is considered:",
    options: [
      "Rare maintenance",
      "Routine maintenance",
      "Unnecessary",
      "A last resort"
    ],
    correctIndex: 1,
    explanation: "Edges wear naturally and need regular care."
  },
  {
    id: "PWJ-Q-1144",
    question: "Maintenance records are important because:",
    options: [
      "They increase speed",
      "Authorities may inspect them",
      "They sharpen tools",
      "They reduce cost"
    ],
    correctIndex: 1,
    explanation: "Investigators may request proof of safe upkeep."
  },
  {
    id: "PWJ-Q-1145",
    question: "The correct action for a blunt chisel is to:",
    options: [
      "Push harder",
      "Resharpen it",
      "Oil it",
      "Replace handle"
    ],
    correctIndex: 1,
    explanation: "Sharp edges are essential for safe work."
  },
  {
    id: "PWJ-Q-1146",
    question: "When grinding a damaged chisel you must wear:",
    options: [
      "Gloves",
      "Impact-resistant goggles",
      "Ear defenders",
      "A dust mask"
    ],
    correctIndex: 1,
    explanation: "Eye protection is mandatory at the grinder."
  },
  {
    id: "PWJ-Q-1147",
    question: "A split chisel handle means you should:",
    options: [
      "Tape it",
      "Replace the tool",
      "Turn it around",
      "Keep using it"
    ],
    correctIndex: 1,
    explanation: "Split handles are unsafe."
  },
  {
    id: "PWJ-Q-1148",
    question: "A bent chisel should be:",
    options: [
      "Straightened",
      "Replaced",
      "Filed",
      "Sharpened"
    ],
    correctIndex: 1,
    explanation: "Bending weakens the steel."
  },
  {
    id: "PWJ-Q-1149",
    question: "If a mallet face is damaged you should:",
    options: [
      "Ignore it",
      "Recut it flat",
      "Paint it",
      "Soak it"
    ],
    correctIndex: 1,
    explanation: "A flat face ensures accurate striking."
  },
  {
    id: "PWJ-Q-1150",
    question: "If a mallet head becomes weak you must:",
    options: [
      "Use lighter blows",
      "Replace it",
      "Wrap tape",
      "Sand it"
    ],
    correctIndex: 1,
    explanation: "Weak heads can fail unexpectedly."
  },
  {
    id: "PWJ-Q-1151",
    question: "A handsaw with lost set will:",
    options: [
      "Cut faster",
      "Jam in the cut",
      "Polish wood",
      "Stay sharp longer"
    ],
    correctIndex: 1,
    explanation: "Without set, the blade binds."
  },
  {
    id: "PWJ-Q-1152",
    question: "If a hardpoint saw becomes blunt you should:",
    options: [
      "File it",
      "Replace it",
      "Oil it",
      "Heat it"
    ],
    correctIndex: 1,
    explanation: "Hardpoint teeth are not resharpened."
  },
  {
    id: "PWJ-Q-1153",
    question: "A hammer with a dirty face should be:",
    options: [
      "Ignored",
      "Sanded clean and flat",
      "Painted",
      "Replaced"
    ],
    correctIndex: 1,
    explanation: "A clean face prevents marking."
  },
  {
    id: "PWJ-Q-1154",
    question: "A loose hammer head can be fixed by:",
    options: [
      "Glue only",
      "Rehandling or wedging",
      "Hitting harder",
      "Cooling it"
    ],
    correctIndex: 1,
    explanation: "Proper refitting keeps it secure."
  },
  {
    id: "PWJ-Q-1155",
    question: "If a plane iron is blunt the answer is:",
    options: [
      "Increase depth",
      "Resharpen",
      "Push harder",
      "Oil it"
    ],
    correctIndex: 1,
    explanation: "Sharpness determines performance."
  },
  {
    id: "PWJ-Q-1156",
    question: "To stop clogging, the cap iron should be:",
    options: [
      "Far back",
      "0.5–1.5 mm from the edge",
      "Loose",
      "Removed"
    ],
    correctIndex: 1,
    explanation: "Correct setting improves shaving flow."
  },
  {
    id: "PWJ-Q-1157",
    question: "A chipped plane iron should be honed at:",
    options: [
      "20°",
      "30°",
      "45°",
      "60°"
    ],
    correctIndex: 1,
    explanation: "30° is the finishing angle."
  },
  {
    id: "PWJ-Q-1158",
    question: "Uneven planing usually means the iron needs:",
    options: [
      "Oiling",
      "Side adjustment",
      "Replacing",
      "Cooling"
    ],
    correctIndex: 1,
    explanation: "Use the lever to centre the cut."
  },
  {
    id: "PWJ-Q-1159",
    question: "If the plane takes no shavings you should:",
    options: [
      "Push harder",
      "Wind the iron out",
      "Add oil",
      "Change timber"
    ],
    correctIndex: 1,
    explanation: "Increase projection."
  },
  {
    id: "PWJ-Q-1160",
    question: "After removing rust from a plane you should:",
    options: [
      "Leave it dry",
      "Wipe with light oil",
      "Wash it",
      "Grind it"
    ],
    correctIndex: 1,
    explanation: "Oil helps prevent further corrosion."
  }
],
[
  {
    id: "PWJ-Q-1161",
    question: "Blunt drill bits will:",
    options: [
      "Cut smoothly",
      "Cut poorly",
      "Increase speed",
      "Polish holes"
    ],
    correctIndex: 1,
    explanation: "Dull edges reduce cutting efficiency."
  },
  {
    id: "PWJ-Q-1162",
    question: "Twist drill bits are normally sharpened using a:",
    options: [
      "Oil stone",
      "Bench grinder",
      "File card",
      "Sandpaper"
    ],
    correctIndex: 1,
    explanation: "Grinding restores the cutting lips."
  },
  {
    id: "PWJ-Q-1163",
    question: "Auger bits are sharpened with a:",
    options: [
      "Flat file",
      "Triangular file",
      "Grinding wheel",
      "Rasp"
    ],
    correctIndex: 1,
    explanation: "The shape suits the cutter profile."
  },
  {
    id: "PWJ-Q-1164",
    question: "If a drill bit wobbles it may be:",
    options: [
      "Too sharp",
      "Off centre in the chuck",
      "Too clean",
      "Too short"
    ],
    correctIndex: 1,
    explanation: "Incorrect seating causes run-out."
  },
  {
    id: "PWJ-Q-1165",
    question: "A bent drill bit should be:",
    options: [
      "Straightened",
      "Replaced",
      "Oiled",
      "Sharpened"
    ],
    correctIndex: 1,
    explanation: "Bent bits cannot drill accurately."
  },
  {
    id: "PWJ-Q-1166",
    question: "To prevent spelching you should:",
    options: [
      "Drill faster",
      "Support with waste timber",
      "Use more force",
      "Heat the bit"
    ],
    correctIndex: 1,
    explanation: "Backing prevents breakout."
  },
  {
    id: "PWJ-Q-1167",
    question: "If a square cannot be recalibrated it should be:",
    options: [
      "Adjusted by eye",
      "Replaced",
      "Filed",
      "Stored away"
    ],
    correctIndex: 1,
    explanation: "Accuracy is essential in marking out."
  },
  {
    id: "PWJ-Q-1168",
    question: "A screwdriver with a bent shaft should be:",
    options: [
      "Heated",
      "Replaced",
      "Filed",
      "Shortened"
    ],
    correctIndex: 1,
    explanation: "Bending weakens the tool."
  },
  {
    id: "PWJ-Q-1169",
    question: "A split screwdriver handle means:",
    options: [
      "Carry on",
      "Replace it",
      "Glue it",
      "Tape it"
    ],
    correctIndex: 1,
    explanation: "Damaged handles are unsafe."
  },
  {
    id: "PWJ-Q-1170",
    question: "A damaged slotted screwdriver tip can sometimes be:",
    options: [
      "Painted",
      "Reground",
      "Bent back",
      "Ignored"
    ],
    correctIndex: 1,
    explanation: "Flat tips may be restored."
  },
  {
    id: "PWJ-Q-1171",
    question: "Blunt gauge pins should be sharpened with a:",
    options: [
      "Grinder",
      "Needle file",
      "Hammer",
      "Plane"
    ],
    correctIndex: 1,
    explanation: "This restores a fine point."
  },
  {
    id: "PWJ-Q-1172",
    question: "Mortice gauge pins must be:",
    options: [
      "Different heights",
      "The same height",
      "Loose",
      "Rounded"
    ],
    correctIndex: 1,
    explanation: "Matching height ensures accuracy."
  },
  {
    id: "PWJ-Q-1173",
    question: "If pins differ in height you should file:",
    options: [
      "Both",
      "The higher one",
      "The lower one",
      "Neither"
    ],
    correctIndex: 1,
    explanation: "Bring them level, then resharpen."
  },
  {
    id: "PWJ-Q-1174",
    question: "If a cutting gauge tears the grain you should:",
    options: [
      "Press harder",
      "Resharpen the cutter",
      "Use pencil",
      "Ignore it"
    ],
    correctIndex: 1,
    explanation: "Sharp cutters slice cleanly."
  },
  {
    id: "PWJ-Q-1175",
    question: "What holds the cutting gauge blade in place?",
    options: [
      "Glue",
      "A wedge",
      "A screw",
      "A clip"
    ],
    correctIndex: 1,
    explanation: "The wedge secures the cutter."
  },
  {
    id: "PWJ-Q-1176",
    question: "If the gauge stock wobbles the likely cause is:",
    options: [
      "Moisture",
      "A worn stem",
      "Heat",
      "Paint"
    ],
    correctIndex: 1,
    explanation: "Wear creates inaccuracy."
  },
  {
    id: "PWJ-Q-1177",
    question: "If the stem cannot be replaced you should:",
    options: [
      "Glue it",
      "Replace the gauge",
      "Tape it",
      "Ignore it"
    ],
    correctIndex: 1,
    explanation: "Faulty marking tools ruin accuracy."
  },
  {
    id: "PWJ-Q-1178",
    question: "If tape markings are worn you should:",
    options: [
      "Estimate",
      "Replace the tape",
      "Rewrite them",
      "Use chalk"
    ],
    correctIndex: 1,
    explanation: "Unreadable tapes cause mistakes."
  },
  {
    id: "PWJ-Q-1179",
    question: "Excess hook movement on a tape will affect:",
    options: [
      "Speed",
      "Accuracy",
      "Colour",
      "Grip"
    ],
    correctIndex: 1,
    explanation: "Movement changes measurements."
  },
  {
    id: "PWJ-Q-1180",
    question: "A bent tape hook can often be fixed using:",
    options: [
      "Glue",
      "A vice and light taps",
      "Heat",
      "Oil"
    ],
    correctIndex: 1,
    explanation: "Careful straightening may restore it."
  }
],
[
  {
    id: "PWJ-Q-1181",
    question: "Transit damage usually occurs when timber is:",
    options: [
      "Stored indoors",
      "Poorly supported in transport",
      "Kiln dried",
      "Machine graded"
    ],
    correctIndex: 1,
    explanation: "Lack of restraint allows movement."
  },
  {
    id: "PWJ-Q-1182",
    question: "Timber stored directly on the ground may:",
    options: [
      "Dry evenly",
      "Absorb moisture and dirt",
      "Improve strength",
      "Remain stable"
    ],
    correctIndex: 1,
    explanation: "Ground contact increases contamination."
  },
  {
    id: "PWJ-Q-1183",
    question: "What helps keep outdoor timber dry?",
    options: [
      "Painting ends",
      "Using a waterproof cover",
      "Leaving uncovered",
      "Stacking flat"
    ],
    correctIndex: 1,
    explanation: "Protection reduces water uptake."
  },
  {
    id: "PWJ-Q-1184",
    question: "Bearers are used to:",
    options: [
      "Improve colour",
      "Lift timber off the ground",
      "Speed cutting",
      "Reduce weight"
    ],
    correctIndex: 1,
    explanation: "They prevent damp contact."
  },
  {
    id: "PWJ-Q-1185",
    question: "Poor storage can make timber:",
    options: [
      "Lighter",
      "Waterlogged and heavy",
      "Stronger",
      "Straighter"
    ],
    correctIndex: 1,
    explanation: "Absorbed water increases mass."
  },
  {
    id: "PWJ-Q-1186",
    question: "Sunlight can change timber colour through:",
    options: [
      "Heating",
      "Bleaching",
      "Polishing",
      "Hardening"
    ],
    correctIndex: 1,
    explanation: "UV exposure alters appearance."
  },
  {
    id: "PWJ-Q-1187",
    question: "Decorative timber should be protected from:",
    options: [
      "Cold",
      "Direct sunlight",
      "Wind",
      "Dust"
    ],
    correctIndex: 1,
    explanation: "Prevents bleaching."
  },
  {
    id: "PWJ-Q-1188",
    question: "A designated timber area improves:",
    options: [
      "Colour",
      "Organisation and security",
      "Moisture",
      "Weight"
    ],
    correctIndex: 1,
    explanation: "Planning reduces loss."
  },
  {
    id: "PWJ-Q-1189",
    question: "Keeping timber near the work area:",
    options: [
      "Weakens it",
      "Improves access",
      "Changes grade",
      "Dries it"
    ],
    correctIndex: 1,
    explanation: "Less handling required."
  },
  {
    id: "PWJ-Q-1190",
    question: "Hardwood comes from:",
    options: [
      "Needle trees",
      "Deciduous trees",
      "Young trees",
      "Wet areas"
    ],
    correctIndex: 1,
    explanation: "They lose leaves seasonally."
  },
  {
    id: "PWJ-Q-1191",
    question: "Softwood trees normally:",
    options: [
      "Lose leaves",
      "Keep needles year round",
      "Grow slowly",
      "Produce fruit"
    ],
    correctIndex: 1,
    explanation: "Conifers stay evergreen."
  },
  {
    id: "PWJ-Q-1192",
    question: "Cedar resists weather because it contains:",
    options: [
      "Water",
      "Natural oils",
      "Resin glue",
      "Hard fibres"
    ],
    correctIndex: 1,
    explanation: "Oils protect against decay."
  },
  {
    id: "PWJ-Q-1193",
    question: "Douglas fir is known for being:",
    options: [
      "Very soft",
      "Strong",
      "Non structural",
      "Short grained"
    ],
    correctIndex: 1,
    explanation: "It can serve load roles."
  },
  {
    id: "PWJ-Q-1194",
    question: "European redwood is ideal for:",
    options: [
      "Firewood",
      "Machining and joinery",
      "Temporary work",
      "Ground contact"
    ],
    correctIndex: 1,
    explanation: "It works cleanly."
  },
  {
    id: "PWJ-Q-1195",
    question: "Whitewood is mainly for:",
    options: [
      "Exterior use",
      "Internal work",
      "Boat decks",
      "Cladding"
    ],
    correctIndex: 1,
    explanation: "It lacks durability outside."
  },
  {
    id: "PWJ-Q-1196",
    question: "Ash is popular because it:",
    options: [
      "Resists water",
      "Bends well",
      "Is cheap",
      "Is light"
    ],
    correctIndex: 1,
    explanation: "Flexibility suits shaping."
  },
  {
    id: "PWJ-Q-1197",
    question: "Steaming beech changes its:",
    options: [
      "Strength",
      "Colour",
      "Weight",
      "Length"
    ],
    correctIndex: 1,
    explanation: "It becomes pinker."
  },
  {
    id: "PWJ-Q-1198",
    question: "Maple is widely used for:",
    options: [
      "Roofing",
      "Flooring",
      "Fencing",
      "Scaffolds"
    ],
    correctIndex: 1,
    explanation: "It is hard wearing."
  },
  {
    id: "PWJ-Q-1199",
    question: "Quarter sawn oak is valued for:",
    options: [
      "Low cost",
      "Grain quality",
      "Softness",
      "Lightness"
    ],
    correctIndex: 1,
    explanation: "Appearance is premium."
  },
  {
    id: "PWJ-Q-1200",
    question: "Sapele is sometimes used in:",
    options: [
      "Bridges",
      "Boat building",
      "Pallets",
      "Stud walls"
    ],
    correctIndex: 1,
    explanation: "It suits marine work."
  }
],

];

export const questions = rawQuestions.flat(Infinity);
