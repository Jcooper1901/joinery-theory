export type MicroLesson = {
  id: string;
  title: string;
  topic: string;
  topicOrder: number;
  keywords: string[];
  examFocus: string[];
  keyPoints: string[];
  commonMistakes: string[];
  miniCheck?: { question: string; answer: string }[];
};

export const level1Lessons: MicroLesson[] = [
  {
    "id": "workplace-information-construction-drawings",
    "title": "Construction Information and Working Drawings",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "working drawings",
      "technical drawings",
      "scale drawings",
      "2D drawings",
      "3D drawings",
      "British Standards"
    ],
    "examFocus": [
      "Identify main sources of workplace information",
      "Understand why technical drawings are used",
      "Know how drawings support accurate construction work"
    ],
    "keyPoints": [
      "Construction work depends on clear information to keep jobs accurate, safe and compliant.",
      "Architects, engineers and designers produce technical drawings to share building details.",
      "British Standards make symbols, hatching and abbreviations consistent across the building team.",
      "Many drawings are reduced to scale because full-size drawings would be too large to handle.",
      "Working drawings are used to calculate costs and quantities of materials.",
      "Carpenters use working drawings during first fixing and second fixing.",
      "Joiners use working drawings for pricing work, estimating materials and preparing full-size setting out rods.",
      "Construction drawings may be 2D or 3D depending on the information needed.",
      "Large printed construction drawings were traditionally called blueprints."
    ],
    "commonMistakes": [
      "Misreading scaled drawings.",
      "Ignoring standard symbols and abbreviations.",
      "Using drawings without checking whether they apply to first fixing or second fixing."
    ],
    "miniCheck": [
      {
        "question": "Why are many construction drawings produced to a scale?",
        "answer": "Because full-size drawings are often too large to fit on paper."
      },
      {
        "question": "What are working drawings used for?",
        "answer": "They help with costing, material quantities and carrying out building work."
      },
      {
        "question": "What is the difference between 2D and 3D drawings?",
        "answer": "2D shows length and width, while 3D shows length, width and depth."
      }
    ]
  },
  {
    "id": "building-regulations-specifications-schedules",
    "title": "Building Regulations, Specifications and Schedules",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "Building Regulations",
      "specification",
      "schedule",
      "local authority approval",
      "door schedule",
      "construction documents"
    ],
    "examFocus": [
      "Recognise documents used alongside drawings",
      "Understand the purpose of specifications and schedules",
      "Know why approval and regulations matter before work starts"
    ],
    "keyPoints": [
      "Building projects often need plans, site information and elevation drawings before work can begin.",
      "These documents are usually submitted to the local authority for approval.",
      "All construction work must meet recognised Building Regulations.",
      "Building Regulations cover the whole build, from foundations to roof level.",
      "Not all project details can fit on a drawing, so extra information is written in a specification.",
      "Specifications describe materials, products, dimensions and the quality of work required.",
      "Large projects also use schedules to organise details about specific items.",
      "Schedules may cover doors, windows, kitchens and sanitary fittings.",
      "Schedules help with estimating, ordering and fitting components.",
      "Items on drawings are often linked to schedules by references such as D1."
    ],
    "commonMistakes": [
      "Starting work before the required documents are approved.",
      "Relying only on drawings and ignoring the specification.",
      "Failing to match drawing references to the correct schedule item."
    ],
    "miniCheck": [
      {
        "question": "Why is a specification used on a construction project?",
        "answer": "To give extra details that cannot be fully shown on drawings."
      },
      {
        "question": "What does a schedule help with?",
        "answer": "It helps organise, estimate, order and install project items."
      },
      {
        "question": "What must construction work comply with?",
        "answer": "Building Regulations."
      }
    ]
  },
  {
    "id": "types-of-technical-drawings-in-construction",
    "title": "Types of Technical Drawings in Construction",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "technical drawings",
      "component range drawing",
      "section drawing",
      "elevation drawing",
      "floor plan"
    ],
    "examFocus": [
      "Identify common construction drawing types",
      "Understand what each drawing shows",
      "Know how trades use drawings on site"
    ],
    "keyPoints": [
      "Different technical drawings are used to show different parts of a building project.",
      "Component range drawings show all versions of one item, such as windows, with sizes and opening positions.",
      "Section drawings show a cut-through view of a building or structure.",
      "Section drawings help workers understand how building parts fit together.",
      "A section drawing may show foundation depth, window heights and roof pitch.",
      "Elevation drawings show the outside of a building from each side.",
      "Elevation drawings show the positions of doors, windows and the roof shape.",
      "Joiners may use elevation drawings to measure items for estimates.",
      "Floor plans show the layout of walls and rooms on each storey.",
      "Floor plans also show doors, windows, stairs, kitchens and bathrooms.",
      "Carpenters may check floor plans to see door positions and swing direction.",
      "Some floor plans also include heating and ventilation duct routes."
    ],
    "commonMistakes": [
      "Using the wrong drawing type for the job.",
      "Confusing a floor plan with an elevation or section.",
      "Missing details such as door swing direction or roof pitch."
    ],
    "miniCheck": [
      {
        "question": "What does a section drawing show?",
        "answer": "A cut-through view that shows how parts of the building fit together."
      },
      {
        "question": "What does an elevation drawing show?",
        "answer": "The outside view of a building from each side."
      },
      {
        "question": "What information does a floor plan give?",
        "answer": "It shows the room layout and positions of items like doors, windows and stairs."
      }
    ]
  },
  {
    "id": "site-plans-block-plans-and-drawing-symbols",
    "title": "Site Plans, Block Plans and Drawing Symbols",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "site plan",
      "block plan",
      "north point",
      "drawing symbols",
      "hatchings",
      "BSI"
    ],
    "examFocus": [
      "Understand the purpose of location drawings",
      "Recognise what site plans and block plans show",
      "Know why standard symbols and hatchings are important"
    ],
    "keyPoints": [
      "Site plans give a bird’s eye view of a building plot or a larger site.",
      "They can show boundaries, roads, parking, footpaths, waterways and existing trees.",
      "Site plans also show services such as water, drains, electricity, gas and communication lines.",
      "Block plans show how a building plot relates to the surrounding area.",
      "Block plans are used when plans are submitted to the local authority for planning approval.",
      "The top of a drawing does not always mean north.",
      "A north symbol is used to show the true direction of north on a drawing.",
      "Symbols, hatchings and abbreviations help show materials and objects without overcrowding the drawing.",
      "Standard symbols make drawings easier for everyone in the industry to understand.",
      "The British Standards Institute sets the benchmark for the symbols used in construction drawings."
    ],
    "commonMistakes": [
      "Assuming the top of every drawing is north.",
      "Ignoring site services shown on the plan.",
      "Misunderstanding symbols because standard conventions were not checked."
    ],
    "miniCheck": [
      {
        "question": "What does a site plan show?",
        "answer": "A bird’s eye view of the plot, including boundaries, features and services."
      },
      {
        "question": "Why is a north symbol important on a drawing?",
        "answer": "It shows the true direction of north because the drawing may not be aligned that way."
      },
      {
        "question": "Why are standard symbols and hatchings used?",
        "answer": "They make drawings clear and easy for everyone to understand."
      }
    ]
  },
  {
    "id": "sustainable-heating-materials-and-building-design",
    "title": "Sustainable Heating, Materials and Building Design",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "ground source heating",
      "air source heating",
      "sustainable materials",
      "managed timber",
      "deforestation",
      "energy efficient design"
    ],
    "examFocus": [
      "Understand basic sustainable heating systems",
      "Recognise why material sourcing matters",
      "Know how building design can improve efficiency"
    ],
    "keyPoints": [
      "Ground source heating collects low heat from the ground through buried pipes.",
      "A compressor raises that heat to a usable temperature for space heating and hot water.",
      "Air source heating takes heat from the air and transfers it into the building.",
      "Air source systems need electricity to run, but they can reduce overall energy use.",
      "Using local building materials cuts transport emissions.",
      "Material choice should consider where the product comes from and its environmental impact.",
      "Timber can be sustainable if it comes from a managed source.",
      "Managed timber means trees are replanted after felling.",
      "Deforestation happens when large areas of trees are cleared and not replaced.",
      "Good building design can lower energy use.",
      "Large efficient windows or skylights can increase daylight and reduce artificial lighting.",
      "A well-designed building should also provide fresh air through natural or mechanical ventilation."
    ],
    "commonMistakes": [
      "Assuming all timber is sustainable without checking its source.",
      "Ignoring transport distance when choosing materials.",
      "Focusing only on heating and forgetting ventilation and natural light."
    ],
    "miniCheck": [
      {
        "question": "How does ground source heating help warm a building?",
        "answer": "It takes heat from the ground and raises it to a higher temperature for heating and hot water."
      },
      {
        "question": "Why is locally sourced material better for the environment?",
        "answer": "It reduces carbon emissions from transport."
      },
      {
        "question": "What does managed timber mean?",
        "answer": "It means trees are replanted after they are cut down."
      }
    ]
  },
  {
    "id": "heat-loss-and-common-insulation-methods",
    "title": "Heat Loss and Common Insulation Methods",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "heat loss",
      "insulation",
      "draught excluder",
      "double glazing",
      "triple glazing",
      "energy conservation"
    ],
    "examFocus": [
      "Identify where heat is lost from a building",
      "Understand why insulation is important",
      "Know common methods used to reduce heat loss"
    ],
    "keyPoints": [
      "Insulation reduces heat loss and helps save energy.",
      "The largest heat loss area shown is through the walls at 33 percent.",
      "Heat is also lost through the roof at 26 percent.",
      "Windows account for 18 percent of heat loss.",
      "Draughts cause 12 percent of heat loss.",
      "Floors account for 8 percent of heat loss.",
      "Doors account for 3 percent of heat loss.",
      "Draught excluders seal gaps around doors, frames and windows.",
      "They help stop warm air escaping and cold air entering.",
      "Draught excluders are commonly made from foam or soft rubber.",
      "Modern homes use double or triple glazing in windows and doors.",
      "Double and triple glazing reduce heat loss through glass."
    ],
    "commonMistakes": [
      "Thinking most heat is only lost through windows.",
      "Leaving gaps around doors and windows unsealed.",
      "Overlooking walls and roofs when improving insulation."
    ],
    "miniCheck": [
      {
        "question": "Which part of the building loses the most heat in the diagram?",
        "answer": "The walls."
      },
      {
        "question": "What is the job of a draught excluder?",
        "answer": "It seals gaps to stop warm air escaping and cold air entering."
      },
      {
        "question": "Why are double or triple glazed windows used?",
        "answer": "They reduce heat loss through windows and doors."
      }
    ]
  },
  {
    "id": "trench-fill-and-raft-foundations",
    "title": "Trench Fill and Raft Foundations",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "trench fill foundation",
      "raft foundation",
      "stable ground",
      "load-bearing capacity",
      "reinforced concrete",
      "subsidence"
    ],
    "examFocus": [
      "Understand when trench fill foundations are used",
      "Recognise why raft foundations are needed",
      "Know how subsidence can affect a building"
    ],
    "keyPoints": [
      "A trench fill foundation is used when a strip foundation must go deeper to reach firm ground.",
      "Deep narrow trenches may be unsafe or impractical to work in.",
      "In this case, the trench is filled with concrete to just below ground level.",
      "A raft foundation is used when the soil is too weak for a strip foundation.",
      "A raft foundation spreads across the full footprint of the building, not just under load-bearing walls.",
      "This type of foundation helps spread the building load over a larger area.",
      "Raft foundations are reinforced with steel and concrete.",
      "The reinforcement helps reduce cracking caused by uneven subsidence.",
      "Subsidence happens when the weight of a building causes the ground to sink."
    ],
    "commonMistakes": [
      "Assuming strip foundations are suitable for all ground conditions.",
      "Not recognising the safety issues of deep narrow trenches.",
      "Forgetting that weak ground may need a foundation that spreads the load wider."
    ],
    "miniCheck": [
      {
        "question": "Why is a trench fill foundation used?",
        "answer": "Because the foundation needs to go deeper to reach firm ground and a deep trench may be unsafe to work in."
      },
      {
        "question": "Where does a raft foundation extend?",
        "answer": "Across the whole footprint of the building."
      },
      {
        "question": "What is subsidence?",
        "answer": "It is when the ground sinks under the weight of a building."
      }
    ]
  },
  {
    "id": "pile-and-pad-foundations",
    "title": "Pile and Pad Foundations",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "pile foundation",
      "replacement piles",
      "displacement piles",
      "pad foundation",
      "steel frame building",
      "pier"
    ],
    "examFocus": [
      "Identify when pile foundations are used",
      "Know the difference between pile types",
      "Understand where pad foundations are commonly used"
    ],
    "keyPoints": [
      "Pile foundations are used for high-rise buildings or where the ground is too weak to carry the load.",
      "One method is to drill deep holes, fill them with concrete and reinforce them with steel.",
      "These are called replacement or non-displacement piles.",
      "Another method is to drive hollow piles into the ground and then reinforce them with concrete and steel.",
      "These are called displacement piles.",
      "Pad foundations are often used under steel frame structures such as warehouses and industrial buildings.",
      "They are placed where the main frame loads meet the ground.",
      "Pad foundations may also support separate structures such as piers.",
      "A pier is a brick, block or concrete pillar that stands alone and is not joined to a wall.",
      "Tree roots can damage foundations, paths and underground pipes if trees are planted too close to buildings."
    ],
    "commonMistakes": [
      "Using shallow foundations where the ground is too weak.",
      "Confusing replacement piles with displacement piles.",
      "Ignoring the effect of tree roots near foundations."
    ],
    "miniCheck": [
      {
        "question": "When are pile foundations commonly used?",
        "answer": "For tall buildings or on ground that is not strong enough to support the load."
      },
      {
        "question": "What is the difference between replacement and displacement piles?",
        "answer": "Replacement piles are formed in drilled holes, while displacement piles are driven into the ground."
      },
      {
        "question": "Where are pad foundations usually placed?",
        "answer": "Under points where heavy frame loads meet the ground."
      }
    ]
  },
  {
    "id": "external-walls-timber-frame-and-cavity-construction",
    "title": "External Walls and Timber Frame Construction",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "cavity wall",
      "traditional timber frame",
      "modern timber frame",
      "mortice and tenon",
      "wattle and daub",
      "watertight"
    ],
    "examFocus": [
      "Understand basic external wall construction methods",
      "Recognise the difference between traditional and modern timber framing",
      "Know why modern timber frame systems are efficient"
    ],
    "keyPoints": [
      "A cavity wall has an inner leaf, an outer leaf, insulation and wall ties.",
      "Traditional timber-framed buildings used large timber beams joined with mortice and tenon joints.",
      "The spaces between the main timbers were filled with brickwork or wooden strips and covered with wattle and daub.",
      "Wattle and daub is a mix of wet soil, clay and sand.",
      "Modern heavy timber frames can still give a traditional look but use improved materials and insulation.",
      "Modern timber frame construction can use a timber inner wall with a brick or block outer skin.",
      "Factory-made wall, floor and roof sections can be delivered to site ready for assembly.",
      "Prefabrication helps reduce costs and speeds up the build.",
      "This method helps make the building watertight quickly.",
      "Getting watertight early reduces delays caused by bad weather.",
      "Breathable felt stops water getting in from outside while allowing air to pass through from inside."
    ],
    "commonMistakes": [
      "Confusing traditional timber frame with modern timber frame systems.",
      "Forgetting that modern timber frame buildings can still have an outer masonry skin.",
      "Not understanding that making a building watertight quickly helps keep work on schedule."
    ],
    "miniCheck": [
      {
        "question": "What are the main parts shown in a cavity wall?",
        "answer": "An inner leaf, outer leaf, insulation and wall ties."
      },
      {
        "question": "How were traditional timber frames joined together?",
        "answer": "With mortice and tenon joints."
      },
      {
        "question": "Why is modern timber frame construction often quicker?",
        "answer": "Because sections can be prefabricated in a factory and assembled quickly on site."
      }
    ]
  },
  {
    "id": "internal-partition-walls-and-stud-construction",
    "title": "Internal Partition Walls and Stud Construction",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "partition wall",
      "load-bearing partition",
      "stud partition",
      "head plate",
      "sole plate",
      "noggins",
      "dry lining"
    ],
    "examFocus": [
      "Identify different types of internal partition walls",
      "Understand the main parts of a stud partition",
      "Know how partitions are strengthened and finished"
    ],
    "keyPoints": [
      "A partition wall divides a larger room into smaller spaces.",
      "Load-bearing partitions are commonly made from dense concrete blocks.",
      "Non-load-bearing partitions usually run parallel to the joists.",
      "Non-load-bearing walls can be made from lightweight blocks, timber studs or metal studs.",
      "The main parts of a stud partition are the head plate, sole plate and vertical studs.",
      "Timber stud partitions are strengthened with noggins fixed between the studs.",
      "Heavy items such as kitchen units and basins should be fixed into studs or noggins where possible.",
      "Extra noggins should be added before plasterboarding if support is needed at a certain height.",
      "Metal stud partitions are quick to build and do not have natural defects like timber can.",
      "Stud partitions are usually covered on both sides with plasterboard.",
      "Plasterboard gives strength and creates a smooth surface for plaster.",
      "Dry lining means taping and filling the plasterboard joints instead of applying wet plaster."
    ],
    "commonMistakes": [
      "Fixing heavy fittings only to the plasterboard on a hollow wall.",
      "Forgetting to add noggins before the wall is boarded.",
      "Mixing up load-bearing and non-load-bearing partitions."
    ],
    "miniCheck": [
      {
        "question": "What is the purpose of a partition wall?",
        "answer": "To divide a room into smaller spaces."
      },
      {
        "question": "What are noggins used for in a timber stud wall?",
        "answer": "They strengthen the wall and provide fixing points."
      },
      {
        "question": "What is dry lining?",
        "answer": "It is taping and filling plasterboard joints to create a finished surface."
      }
    ]
  },
  {
    "id": "internal-wall-materials-and-stud-wall-components",
    "title": "Materials Used for Internal Walls",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "timber stud",
      "metal stud",
      "low density blockwork",
      "CLS timber",
      "head plate",
      "sole plate",
      "noggins"
    ],
    "examFocus": [
      "Identify common materials used for internal walls",
      "Understand the main parts of timber and metal stud walls",
      "Know why some materials are chosen over others"
    ],
    "keyPoints": [
      "Timber stud walls are built with vertical studs fixed between a head plate and a sole plate.",
      "Stud spacing is usually set to suit plasterboard, commonly at 400 mm or 600 mm centres.",
      "Noggins are fitted between timber studs to stop them twisting.",
      "Timber internal walls are often made from fir, spruce or pine.",
      "CLS timber is often preferred because it is more uniform in size, smoother to handle and easier to install.",
      "Common rough sawn stud sizes include 75 mm × 50 mm and 100 mm × 50 mm.",
      "Metal stud walls use the same basic layout of head, sole and studs.",
      "Metal systems usually use U-shaped head and sole sections with C-shaped studs fitted between them.",
      "Metal stud walls do not usually need noggins.",
      "Low density concrete blocks are lighter than standard blocks, making them easier to handle.",
      "Low density blockwork can improve insulation in load-bearing walls up to two storeys high."
    ],
    "commonMistakes": [
      "Forgetting that stud spacing must suit the plasterboard size.",
      "Confusing timber stud walls with metal stud walls.",
      "Assuming all timber is the same size without checking whether it is rough sawn or CLS."
    ],
    "miniCheck": [
      {
        "question": "What are noggins used for in a timber stud wall?",
        "answer": "They help stop the studs from twisting."
      },
      {
        "question": "Why is CLS often preferred for internal stud walls?",
        "answer": "Because it is uniform in size, smoother and easier to handle."
      },
      {
        "question": "What is a key difference between metal and timber stud walls?",
        "answer": "Metal stud walls do not usually use noggins."
      }
    ]
  },
  {
    "id": "wall-finishes-plasterboard-and-area-calculation",
    "title": "Wall Finishes, Plasterboard and Wall Area Calculation",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "render",
      "plaster",
      "plasterboard",
      "drywall",
      "wall area",
      "square metres"
    ],
    "examFocus": [
      "Recognise common wall finishing materials",
      "Understand the purpose of plaster and plasterboard",
      "Know how to calculate wall area"
    ],
    "keyPoints": [
      "Render is made from sand, cement and water.",
      "The first render coat is called the scratch coat and is usually 10 to 15 mm thick.",
      "Extra coats of render may be added if needed.",
      "Cement render can take a long time to dry fully.",
      "Plaster is used to create a flat, smooth wall surface.",
      "Some plaster types are applied thickly to rendered walls, while others are used in thin coats over plasterboard.",
      "Plaster is usually mixed from powder and water, although ready-mixed versions can be used for small repairs.",
      "Old plaster can set too quickly if it is past its use-by date.",
      "Plasterboard, also called drywall, is used to cover stud partitions and concrete walls.",
      "Plasterboard is made from gypsum plaster with paper on both faces for strength.",
      "A common plasterboard size is 2400 mm × 1200 mm × 12 mm.",
      "Plasterboard can be fixed with drywall screws to studs or glued to concrete walls with adhesive.",
      "Wall area is calculated by multiplying length by height.",
      "Wall area is measured in square metres."
    ],
    "commonMistakes": [
      "Using out-of-date plaster that sets too fast.",
      "Mixing up plaster, render and plasterboard.",
      "Forgetting to calculate wall area in square metres."
    ],
    "miniCheck": [
      {
        "question": "What is the first coat of render called?",
        "answer": "The scratch coat."
      },
      {
        "question": "What is plasterboard made from?",
        "answer": "Gypsum plaster covered with paper on both sides."
      },
      {
        "question": "How do you calculate the area of a wall?",
        "answer": "Multiply the wall length by the wall height."
      }
    ]
  },
  {
    "id": "solid-concrete-ground-floors-and-their-components",
    "title": "Solid Concrete Ground Floors and Their Components",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "solid concrete floor",
      "hardcore",
      "sand blinding",
      "damp-proof membrane",
      "insulation",
      "screed"
    ],
    "examFocus": [
      "Identify the main layers in a solid concrete ground floor",
      "Understand the purpose of each floor component",
      "Know the difference between dry mix screed and liquid screed"
    ],
    "keyPoints": [
      "A solid concrete ground floor is built in layers, with each layer doing a specific job.",
      "Hardcore forms the firm base under the floor.",
      "Hardcore can be made from crushed brick, tiles, rock, gravel or MOT Type 1.",
      "The hardcore must be compacted to stop movement and floor cracking.",
      "Sand blinding is spread over the hardcore to protect the damp-proof membrane from sharp edges.",
      "A damp-proof membrane stops moisture and weeds coming up through the floor.",
      "Concrete is laid over the DPM to form a strong base.",
      "Insulation is placed above the concrete to reduce heat loss into the ground.",
      "Screed creates a flat and level finished floor surface.",
      "Dry mix screed is made from cement, sand and a small amount of water, and is laid by hand.",
      "Liquid screed is pumped into place and levels itself.",
      "Underfloor heating can be installed above the insulation and is energy efficient because it warms the whole room from the floor."
    ],
    "commonMistakes": [
      "Forgetting to compact the hardcore properly.",
      "Damaging the damp-proof membrane with sharp material underneath.",
      "Mixing up the purpose of concrete and screed."
    ],
    "miniCheck": [
      {
        "question": "What is the purpose of hardcore in a solid floor?",
        "answer": "It provides a firm base to support the floor."
      },
      {
        "question": "Why is sand blinding used?",
        "answer": "It protects the damp-proof membrane from sharp edges."
      },
      {
        "question": "What does screed do?",
        "answer": "It makes the floor surface flat and level."
      }
    ]
  },
  {
    "id": "timber-ground-floors-and-upper-floor-components",
    "title": "Timber Ground Floors and Upper Floor Components",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "timber floor",
      "sleeper wall",
      "wall plate",
      "damp-proof course",
      "joists",
      "chipboard flooring"
    ],
    "examFocus": [
      "Identify the main parts of a timber floor",
      "Understand how timber suspended floors are supported",
      "Know why insulation and floor coverings are used"
    ],
    "keyPoints": [
      "Timber ground floors and upper floors are built on joists.",
      "Joists can be solid timber or engineered beams.",
      "Joists are usually spaced at 400 mm to 600 mm centres to suit floor coverings and plasterboard.",
      "Upper floors are often covered underneath with plasterboard to form the ceiling below.",
      "Suspended timber floors can be insulated for heat, sound and fire protection.",
      "Oversite concrete is built under the footprint of the building.",
      "Oversite concrete supports sleeper walls, stops weed growth and helps stop moisture entering.",
      "Sleeper walls are low walls built under suspended timber floors to support joists at mid-span.",
      "Sleeper walls have gaps to allow air to move through the floor void.",
      "Wall plates sit on top of sleeper walls and spread the joist load evenly.",
      "A damp-proof course is placed between the sleeper wall and wall plate to protect timber from moisture.",
      "Modern timber floors are commonly covered with tongue-and-groove chipboard sheets rather than narrow boards."
    ],
    "commonMistakes": [
      "Forgetting that sleeper walls need ventilation openings.",
      "Leaving out the damp-proof course under wall plates.",
      "Not matching joist spacing to the floor covering and plasterboard sizes."
    ],
    "miniCheck": [
      {
        "question": "What is the purpose of a sleeper wall?",
        "answer": "It supports the floor joists at mid-span under a suspended timber floor."
      },
      {
        "question": "Why is a damp-proof course used above sleeper walls?",
        "answer": "To stop moisture reaching the timber wall plates and joists."
      },
      {
        "question": "What floor covering is commonly used on timber joists today?",
        "answer": "Tongue-and-groove chipboard sheets."
      }
    ]
  },
  {
    "id": "modern-methods-of-construction",
    "title": "Modern Methods of Construction",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "modern construction methods",
      "prefabrication",
      "sectional construction",
      "pods",
      "modular construction",
      "offsite manufacturing"
    ],
    "examFocus": [
      "Understand why modern construction methods are used",
      "Identify common offsite construction methods",
      "Recognise the benefits of factory-built building parts"
    ],
    "keyPoints": [
      "Modern construction methods reduce the amount of work done on site.",
      "These methods improve efficiency and productivity.",
      "Many building parts are made in controlled factory conditions.",
      "Offsite manufacturing can improve quality and standards.",
      "It can also reduce the time skilled tradespeople spend on site.",
      "Using factory-made parts can lower overall building costs.",
      "Prefabrication means components or sections are made in a factory and assembled on site.",
      "Roof trusses are an example of prefabrication.",
      "Sectional or pod construction means parts of a building, such as en-suites or kitchens, are built offsite.",
      "Modular construction means whole buildings or homes are made in factories and fitted out before delivery."
    ],
    "commonMistakes": [
      "Confusing prefabrication with full modular construction.",
      "Thinking modern methods always mean the whole building is made offsite.",
      "Overlooking the quality and time-saving benefits of factory production."
    ],
    "miniCheck": [
      {
        "question": "What is the main aim of modern construction methods?",
        "answer": "To reduce on-site work and improve efficiency."
      },
      {
        "question": "What is an example of prefabrication?",
        "answer": "Roof trusses made in a factory and assembled on site."
      },
      {
        "question": "What is modular construction?",
        "answer": "It is when buildings or homes are made in factories and fitted out before delivery."
      }
    ]
  },
  {
    "id": "linear-measurement-and-fascia-calculations",
    "title": "Linear Measurement and Fascia Board Calculations",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "linear measurement",
      "fascia board",
      "soffit",
      "perimeter",
      "metric units",
      "millimetres"
    ],
    "examFocus": [
      "Understand linear measurement in construction",
      "Know the main metric and imperial conversions given",
      "Use perimeter to calculate fascia or soffit quantities"
    ],
    "keyPoints": [
      "Carpenters and joiners regularly calculate materials, sizes, costs and time.",
      "Linear measurement is used when exact cut lengths are not practical to list individually.",
      "The linear amount needed is often found by calculating the perimeter.",
      "For fascia boards, the total length required is the same as the external perimeter of the building.",
      "Metric units used in UK construction are metres and millimetres.",
      "Centimetres should be avoided in construction work to reduce confusion.",
      "1 metre equals 1000 millimetres.",
      "1 centimetre equals 10 millimetres.",
      "1 inch equals 25.4 millimetres.",
      "1 foot equals 304.8 millimetres.",
      "To find the perimeter, add together the lengths of all outside sides.",
      "Where a side length is missing, it can be found by subtracting a known shorter length from a longer matching side."
    ],
    "commonMistakes": [
      "Using centimetres instead of metres or millimetres.",
      "Forgetting that fascia quantity is based on the full outside perimeter.",
      "Not working out missing side lengths before adding the perimeter."
    ],
    "miniCheck": [
      {
        "question": "What does linear measurement mean in this context?",
        "answer": "It means the total running length of material needed."
      },
      {
        "question": "How do you calculate the amount of fascia board needed?",
        "answer": "Find the building perimeter by adding all the outside sides."
      },
      {
        "question": "How many millimetres are in 1 metre?",
        "answer": "1000 millimetres."
      }
    ]
  },
  {
    "id": "the-building-team-and-their-roles",
    "title": "The Building Team and Their Roles",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "client",
      "architect",
      "structural engineer",
      "quantity surveyor",
      "construction manager",
      "carpenter",
      "joiner",
      "labourer"
    ],
    "examFocus": [
      "Identify key members of the building team",
      "Understand the job of professionals, trades and operatives",
      "Know how different roles support a construction project"
    ],
    "keyPoints": [
      "The client starts the project idea, arranges drawings and usually provides the funding.",
      "Architects produce technical drawings and may guide the client through the project.",
      "Structural engineers design the strength and stability of buildings and structures.",
      "Building control inspectors check work for health, safety and Building Regulations compliance.",
      "Quantity surveyors calculate costs and help control the budget.",
      "Civil engineers plan major infrastructure such as roads, bridges, railways and airports.",
      "Construction managers organise programmes and oversee the day-to-day running of the site.",
      "The clerk of works checks quality and makes sure plans and specifications are followed.",
      "Supervisors oversee the quality of work for trades on site.",
      "Surveyors measure and set out levels and boundaries.",
      "Estimators calculate likely project costs before work starts.",
      "Buyers source and purchase materials at the best price.",
      "Carpenters carry out site work such as floors, roofs, doors, kitchens and stairs.",
      "Joiners mainly make items in workshops, such as doors, windows and staircases.",
      "Other key trades include plumbers, electricians, plasterers, bricklayers, roofers and painters.",
      "Plant operators use heavy machinery, while labourers support trades with manual work and site tasks."
    ],
    "commonMistakes": [
      "Mixing up the roles of a carpenter and a joiner.",
      "Thinking only tradespeople are part of the building team.",
      "Confusing a quantity surveyor with a surveyor who sets out boundaries and levels."
    ],
    "miniCheck": [
      {
        "question": "Who usually starts the building project and funds it?",
        "answer": "The client."
      },
      {
        "question": "What does a structural engineer do?",
        "answer": "They design the strength and stability of buildings and structures."
      },
      {
        "question": "What is the main difference between a carpenter and a joiner?",
        "answer": "Carpenters mainly work on site, while joiners mainly make items in a workshop."
      }
    ]
  },
  {
    "id": "communication-in-construction-workplaces",
    "title": "Communication in Construction Workplaces",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "workplace communication",
      "site meetings",
      "positive communication",
      "negative communication",
      "teamwork",
      "construction safety"
    ],
    "examFocus": [
      "Understand why communication matters in construction",
      "Recognise the effects of positive communication",
      "Know the risks caused by negative communication"
    ],
    "keyPoints": [
      "Clear communication helps keep construction work safe and reduces mistakes.",
      "Tradespeople, supervisors and managers must work closely together every day.",
      "Good working relationships help avoid conflict and errors.",
      "Site meetings are used to share progress, updates and important information.",
      "Meetings may involve managers, supervisors, clients and designers.",
      "Smaller projects may still have regular meetings, even if they are less formal.",
      "The way you speak, behave and present yourself affects how others respond to you.",
      "Positive communication can help prevent accidents and near misses.",
      "It can improve motivation, morale, teamwork and customer service.",
      "It can also increase confidence, productivity and efficiency.",
      "Negative communication can reduce productivity and lead to mistakes.",
      "It can also damage morale, cause conflict, increase stress and create an unpleasant workplace."
    ],
    "commonMistakes": [
      "Failing to share important information with the team.",
      "Using poor communication that causes tension or confusion.",
      "Assuming informal sites do not need regular communication."
    ],
    "miniCheck": [
      {
        "question": "Why is communication important in construction?",
        "answer": "It helps keep people safe, avoids mistakes and supports teamwork."
      },
      {
        "question": "What is one benefit of positive communication?",
        "answer": "It can improve safety, morale or productivity."
      },
      {
        "question": "What can negative communication cause?",
        "answer": "It can cause mistakes, conflict, stress and lower productivity."
      }
    ]
  },
  {
    "id": "principles-specifications-cavity-walling",
    "title": "Specifications for Cavity Wall Construction",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 1,
    "keywords": [
      "specification",
      "cavity wall",
      "wall ties",
      "dpc",
      "lintels",
      "mortar"
    ],
    "examFocus": [
      "Understand what a building specification includes",
      "Recognise key parts of cavity wall construction",
      "Identify common materials and components listed in specifications"
    ],
    "keyPoints": [
      "A specification gives the details needed to build each part of the job correctly.",
      "Below ground walling can use concrete-filled cavity wall construction.",
      "At ground floor level, a DPC is included to stop moisture rising.",
      "Above ground, the external leaf can be built with facing bricks in Flemish bond.",
      "The internal leaf can be built with aerated concrete blocks.",
      "Different mortar strengths may be used, such as Class M6 and Class M4.",
      "Insulation-retaining wall ties hold both wall leaves together and help support insulation.",
      "Full-fill cavity insulation is placed inside the cavity.",
      "Ventilation can be provided by air bricks and sub-floor ventilation ducts.",
      "Openings may include manufactured stone lintels, cavity closers and sills.",
      "Sills can be made from manufactured stone, natural stone or precast concrete.",
      "Flexible cavity trays and insulated DPCs are used to help control moisture.",
      "Flashings and cavity tray covers are fitted as shown on the drawings.",
      "External joints can have a bucket handle finish."
    ],
    "commonMistakes": [
      "Missing key items in the specification such as DPCs, wall ties or insulation.",
      "Using the wrong materials or mortar type for the wall build-up.",
      "Ignoring the drawings when installing cavity trays, flashings or covers."
    ],
    "miniCheck": [
      {
        "question": "What is the purpose of a building specification?",
        "answer": "To give the materials, components and construction details for the job."
      },
      {
        "question": "What type of insulation is listed for the cavity?",
        "answer": "Full-fill cavity insulation."
      },
      {
        "question": "What joint finish is used on the external face?",
        "answer": "Bucket handle."
      }
    ]
  },
  {
    "id": "principles-door-schedules-and-programmes",
    "title": "Door Schedules and Programmes of Work",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 2,
    "keywords": [
      "door schedule",
      "programme of work",
      "contract",
      "gantt chart",
      "construction planning",
      "fire door"
    ],
    "examFocus": [
      "Understand what information a door schedule provides",
      "Know why a programme of work is used on site",
      "Recognise how contracts and timings affect construction projects"
    ],
    "keyPoints": [
      "A door schedule lists important details for each door in a building.",
      "It can include door reference, door size, structural opening width and height, lintel type, fire rating, self-closing requirement and floor level.",
      "Some doors are marked FD30, which shows they are fire doors.",
      "Some doors also need self-closing devices, depending on the schedule.",
      "Door information can vary between ground, first and second floors.",
      "A building project should have an agreed start date and completion date written into a contract.",
      "A contract may include a penalty clause if the work finishes late.",
      "A programme of work sets out the jobs that must be done and how long each should take.",
      "This helps the site manager plan materials, labour, resources and trades in the right order.",
      "A Gantt chart is one way to show the sequence and timing of tasks.",
      "Example tasks include preparing the ground, laying foundations, installing service cables and building walls up to DPC level."
    ],
    "commonMistakes": [
      "Reading the wrong door details from the schedule.",
      "Forgetting to check if a door needs fire protection or self-closing.",
      "Poor planning of labour, materials or task order on the programme of work."
    ],
    "miniCheck": [
      {
        "question": "What does a door schedule tell you?",
        "answer": "It gives key details such as door size, opening size, fire rating and floor level."
      },
      {
        "question": "Why is a programme of work used?",
        "answer": "To plan tasks, time, labour and materials in the correct order."
      },
      {
        "question": "What can happen if work is not finished on time under the contract?",
        "answer": "The contractor may have to pay compensation if there is a penalty clause."
      }
    ]
  },
  {
    "id": "principles-drawing-symbols-and-abbreviations",
    "title": "Symbols, Hatchings and Abbreviations on Drawings",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 3,
    "keywords": [
      "drawing symbols",
      "hatchings",
      "abbreviations",
      "technical drawings",
      "construction drawings",
      "plans"
    ],
    "examFocus": [
      "Recognise common symbols used on technical drawings",
      "Understand basic hatchings for building materials",
      "Know common abbreviations used in construction drawings"
    ],
    "keyPoints": [
      "Technical drawings use symbols to show fittings, materials and building parts clearly.",
      "Common symbols can show items such as toilets, sinks, wash basins, baths, shower trays, windows, doors, radiators, lamps, switches and sockets.",
      "Other symbols can show stair direction, north point and window hinging position.",
      "Hatching is used to identify materials on a drawing.",
      "Typical hatchings can represent brickwork, blockwork, concrete, insulation, stonework, earth, cement screed, hardcore and timber.",
      "Softwood and hardwood may be shown separately on drawings.",
      "Common abbreviations save space and speed up reading technical information.",
      "C/C means centre to centre.",
      "DPC means damp-proof course.",
      "DPM means damp-proof membrane.",
      "H/W means hardwood and S/W means softwood.",
      "PSE means planed square edged timber.",
      "PAR means planed all round timber.",
      "BLK means blockwork.",
      "FFL means finished floor level.",
      "MDF means medium density fibreboard."
    ],
    "commonMistakes": [
      "Confusing drawing symbols with material hatchings.",
      "Misreading abbreviations on plans.",
      "Ignoring stair direction, north point or window hinging details."
    ],
    "miniCheck": [
      {
        "question": "What is hatching used for on a drawing?",
        "answer": "To show different materials."
      },
      {
        "question": "What does DPC stand for?",
        "answer": "Damp-proof course."
      },
      {
        "question": "What does FFL mean?",
        "answer": "Finished floor level."
      }
    ]
  },
  {
    "id": "principles-datums-and-benchmarks",
    "title": "Datums and Benchmarks in Construction",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 4,
    "keywords": [
      "datum",
      "benchmark",
      "tbm",
      "obm",
      "laser level",
      "site setting out"
    ],
    "examFocus": [
      "Understand what a datum is",
      "Know how temporary benchmarks are used on site",
      "Recognise why datum lines improve accuracy"
    ],
    "keyPoints": [
      "A datum is a fixed reference point used to measure and transfer levels.",
      "On a construction site, a temporary benchmark (TBM) is set up as the main level reference.",
      "The TBM height is recorded in metres above mean sea level at Newlyn in Cornwall.",
      "This reference allows foundation, floor, window and roof heights to be checked from the same point.",
      "Older sites sometimes used ordnance benchmarks marked on public buildings or churches.",
      "Modern site setting out is often carried out by surveyors using GPS.",
      "Carpenters and joiners use datums when fitting first fix and second fix items.",
      "A temporary datum line is often marked around a room about 1 metre above floor level.",
      "This line can be set out with a long spirit level or a laser level.",
      "The datum line is then used to mark accurate heights for items such as door frames and kitchen units.",
      "Using a datum is more accurate than measuring from an unfinished or uneven floor.",
      "Green laser lines are easier to see and are more accurate than red laser lines."
    ],
    "commonMistakes": [
      "Measuring heights from an uneven floor instead of a datum line.",
      "Using different reference points for the same job.",
      "Failing to transfer the datum line accurately around the room."
    ],
    "miniCheck": [
      {
        "question": "What is a datum?",
        "answer": "A reference point used to measure and transfer levels."
      },
      {
        "question": "Why is a datum line better than measuring from the floor?",
        "answer": "Because the floor may be unfinished or uneven."
      },
      {
        "question": "What tool can be used to mark a datum line around a room?",
        "answer": "A spirit level or a laser level."
      }
    ]
  },
  {
    "id": "principles-insulation-energy-and-water-saving",
    "title": "Insulation, Energy Use and Water Saving",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 5,
    "keywords": [
      "insulation",
      "mineral wool",
      "reflective foil",
      "energy saving",
      "rainwater harvesting",
      "water conservation"
    ],
    "examFocus": [
      "Recognise different types of insulation and how they work",
      "Understand simple ways to reduce energy use",
      "Know how water-saving systems help reduce waste and cost"
    ],
    "keyPoints": [
      "Insulation helps keep heat inside a building and improves energy efficiency.",
      "Mineral wool is made from molten rock and works by trapping air.",
      "Blue jean insulation is made from recycled denim and lamb’s wool comes from sheep’s wool.",
      "Blue jean and lamb’s wool insulation also hold pockets of air to reduce heat loss.",
      "These natural fibre insulations need greater thickness to match the performance of reflective foil products.",
      "Reflective foil insulation board is made from rigid PIR with foil faces.",
      "Foil-faced boards reduce heat loss by reflecting heat back into the building.",
      "Typical foil board sheet size is 1200 mm by 2400 mm, with thicknesses from 12 mm to 150 mm.",
      "Multifoil insulation works in a similar way to foil board but comes in rolls and is much thinner.",
      "Energy-saving appliances can cost more at first but can lower running costs over time.",
      "Energy-saving washing machines use a cold-water supply and less water.",
      "LED lighting uses up to 90% less power than conventional lighting and lasts longer.",
      "Clean mains water takes energy to filter, treat and pump, so it should not be wasted.",
      "Rainwater from roofs can be collected and reused.",
      "This reused water is known here as brown water and can be used for toilets or watering plants.",
      "Rainwater harvesting helps cut water use, lower bills and save energy."
    ],
    "commonMistakes": [
      "Assuming all insulation types give the same performance at the same thickness.",
      "Wasting water that could be reduced or reused.",
      "Choosing products without considering long-term energy savings."
    ],
    "miniCheck": [
      {
        "question": "How does mineral wool reduce heat loss?",
        "answer": "By trapping air within the material."
      },
      {
        "question": "What is reflective foil insulation board made from?",
        "answer": "Rigid polyisocyanurate (PIR) with foil faces."
      },
      {
        "question": "What is rainwater harvesting used for?",
        "answer": "Collecting roof water for reuse, such as flushing toilets or watering plants."
      }
    ]
  },
  {
    "id": "principles-waste-management-and-foundations",
    "title": "Waste Management and the Purpose of Foundations",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 6,
    "keywords": [
      "waste management",
      "recycling",
      "landfill",
      "plasterboard",
      "foundations",
      "dead load"
    ],
    "examFocus": [
      "Understand why waste is separated on site",
      "Know how to reduce construction waste",
      "Recognise the purpose of foundations and the loads they support"
    ],
    "keyPoints": [
      "Construction waste is costly to remove, so sites often separate waste into different skips and bins.",
      "Single-material skips are usually cheaper to hire and empty than mixed-waste skips.",
      "Materials such as glass, metal, bricks, blocks, plasterboard and timber can be reused or recycled.",
      "Plasterboard must not be sent to landfill with mixed waste.",
      "Plasterboard contains gypsum, which can create toxic hydrogen sulphide gas if mixed with biodegradable waste.",
      "Landfill is a poor waste solution because many materials do not break down in the ground.",
      "Some materials that do break down can release harmful gases.",
      "Waste can be reduced by not ordering too much material.",
      "Waste can also be reduced by accurate measuring and cutting.",
      "Correct storage helps prevent material damage and waste.",
      "Reusing materials and recycling waste lowers disposal needs.",
      "Foundations provide the solid base that supports a structure.",
      "Without suitable foundations, a building can sink and become unstable.",
      "Foundation size and shape must be designed accurately by a structural engineer.",
      "Foundations must support the dead load of the building and the live loads applied during use.",
      "Dead load means the weight of the building materials.",
      "Live loads include added forces such as people, furniture, wind and snow."
    ],
    "commonMistakes": [
      "Putting mixed waste into the wrong skip.",
      "Sending plasterboard to landfill with other waste.",
      "Forgetting that foundations must support both dead loads and live loads."
    ],
    "miniCheck": [
      {
        "question": "Why are different skips used on construction sites?",
        "answer": "To separate materials for cheaper disposal, reuse and recycling."
      },
      {
        "question": "Why should plasterboard not be mixed with landfill waste?",
        "answer": "Because its gypsum can produce toxic hydrogen sulphide gas."
      },
      {
        "question": "What is the difference between dead load and live load?",
        "answer": "Dead load is the weight of the building materials, while live load is the extra load during use, such as people, furniture, wind and snow."
      }
    ]
  },
  {
    "id": "principles-concrete-materials-and-mixing",
    "title": "Concrete Materials, Mixing and Workability",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 7,
    "keywords": [
      "concrete",
      "aggregate",
      "hydration",
      "plasticiser",
      "mortar",
      "compaction"
    ],
    "examFocus": [
      "Understand what concrete is made from",
      "Know how mix ratios affect concrete strength",
      "Recognise how additives and compaction improve performance"
    ],
    "keyPoints": [
      "Concrete is made from aggregate, cement and water, and it can also be reinforced with steel.",
      "Aggregate means crushed rock in different sizes.",
      "Sand is called fine aggregate.",
      "Gravel or crushed stone is called coarse aggregate.",
      "When cement and water are mixed, they form a paste that binds the aggregate together.",
      "The hardening process is called hydration.",
      "Fine and coarse aggregates help strengthen concrete and reduce cracking.",
      "If the mix ratio is wrong, concrete can crack or fail under load.",
      "Grade M5 uses 1 part cement, 5 parts sand and 10 parts gravel, plus water.",
      "Grade M10 uses 1 part cement, 3 parts sand and 6 parts gravel, plus water.",
      "Grade M20 uses 1 part cement, 1.5 parts sand and 3 parts gravel, plus water.",
      "Too much water weakens the concrete mix.",
      "Too little water makes concrete hard to place and work.",
      "Additives can control setting time, improve durability and help reduce cracking.",
      "Plasticiser is used to make concrete and mortar easier to work with.",
      "Standard mortar mix is 4 parts building sand to 1 part cement, plus water.",
      "Plasticiser in mortar helps reduce the amount of water needed by trapping air in the mix.",
      "Concrete can be delivered ready-mixed to site or mixed in smaller amounts by machine or by hand.",
      "Air pockets in wet concrete weaken it and must be removed before it cures.",
      "Tamping helps remove some trapped air and level the surface.",
      "A vibrating concrete poker removes air more effectively by vibrating the wet concrete."
    ],
    "commonMistakes": [
      "Adding too much water to make the mix easier to use.",
      "Using the wrong concrete ratio for the job.",
      "Failing to remove trapped air before the concrete cures."
    ],
    "miniCheck": [
      {
        "question": "What are the main ingredients in concrete?",
        "answer": "Aggregate, cement and water."
      },
      {
        "question": "What is hydration?",
        "answer": "The chemical reaction that happens when water is added to cement and it hardens."
      },
      {
        "question": "What tool removes trapped air from wet concrete most effectively?",
        "answer": "A vibrating concrete poker."
      }
    ]
  },
  {
    "id": "principles-calculating-concrete-volume",
    "title": "Calculating Concrete Volume for Strip Foundations",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 8,
    "keywords": [
      "volume",
      "strip foundation",
      "cubic metres",
      "quantity surveying",
      "concrete calculation",
      "foundations"
    ],
    "examFocus": [
      "Understand why concrete quantities must be calculated accurately",
      "Know the formula for finding concrete volume",
      "Recognise the risks of overestimating or underestimating materials"
    ],
    "keyPoints": [
      "Concrete quantity must be worked out accurately before starting foundation work.",
      "The information needed for calculations comes from drawings and the specification.",
      "If you underestimate the amount of concrete, you may underprice the job.",
      "Running short of concrete can delay the programme of work.",
      "If the foundation cannot be finished in one pour, a joint may be needed and this can create a weak point.",
      "If you overestimate the concrete needed, profits can be reduced and leftover material may be wasted.",
      "Concrete volume is measured in cubic metres.",
      "The formula for volume is length × width × depth.",
      "For a strip foundation 9.00 m long, 0.450 m wide and 0.200 m deep, the volume is 0.810 m³.",
      "Accurate measuring helps control cost, reduce waste and avoid delays."
    ],
    "commonMistakes": [
      "Using the wrong foundation measurements.",
      "Forgetting that volume is measured in cubic metres.",
      "Ordering too little or too much concrete."
    ],
    "miniCheck": [
      {
        "question": "What formula is used to calculate concrete volume?",
        "answer": "Length × width × depth."
      },
      {
        "question": "What unit is used for concrete volume?",
        "answer": "Cubic metres (m³)."
      },
      {
        "question": "Why is it a problem if a strip foundation cannot be completed in one pour?",
        "answer": "A joint may be needed, which can weaken the foundation."
      }
    ]
  },
  {
    "id": "principles-service-routes-and-wall-fixings",
    "title": "Service Routes and Fixings for Different Walls",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 9,
    "keywords": [
      "services",
      "pipes",
      "cables",
      "trunking",
      "chasing",
      "wall fixings"
    ],
    "examFocus": [
      "Understand how pipes and cables are hidden in buildings",
      "Know the difference between trunking and chasing",
      "Recognise suitable fixings for different wall types"
    ],
    "keyPoints": [
      "Service pipes and cables should be hidden where possible to keep the building neat and safe.",
      "They can be run between joists in floors and ceilings to reach the point of use.",
      "In solid walls, services can be fixed to the wall surface and covered with trunking or conduit.",
      "Services can also be chased into a solid wall and then covered over.",
      "Stud partition walls make it easier to hide pipes and cables inside the wall void.",
      "This can be done in both timber stud walls and metal stud walls.",
      "Trunking is a hollow plastic box or tube used to cover and protect services.",
      "Some trunking has a removable cover so the services can be accessed later.",
      "Chasing means cutting a channel into a wall so pipes or cables can be buried in it.",
      "Different wall types need different fixings.",
      "A timber stud partition wall commonly uses a wood screw.",
      "A concrete block partition wall can use a brown plastic plug with a screw or a concrete screw.",
      "A metal stud partition wall can use a cavity fixing.",
      "A brick and block cavity wall can also use a cavity fixing, depending on where the fixing is placed."
    ],
    "commonMistakes": [
      "Leaving pipes and cables exposed when they could be hidden.",
      "Using the wrong fixing for the wall type.",
      "Confusing trunking with chasing."
    ],
    "miniCheck": [
      {
        "question": "What does chasing mean?",
        "answer": "Cutting a channel into a wall so pipes or cables can be buried in it."
      },
      {
        "question": "Where can services be hidden easily in a stud wall?",
        "answer": "In the hollow space inside the wall."
      },
      {
        "question": "What fixing is commonly used in a timber stud partition wall?",
        "answer": "A wood screw."
      }
    ]
  },
  {
    "id": "principles-wall-building-materials-and-insulation",
    "title": "Wall Materials and Their Uses",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 10,
    "keywords": [
      "brick",
      "block",
      "stone",
      "timber",
      "insulation",
      "cavity wall"
    ],
    "examFocus": [
      "Recognise common materials used to build walls",
      "Understand the main uses and properties of bricks, blocks, stone and timber",
      "Know why insulation is added to walls"
    ],
    "keyPoints": [
      "Different wall materials are chosen for strength, cost, appearance and thermal performance.",
      "A standard brick measures 215 mm × 102.5 mm × 65 mm.",
      "Bricks are mainly made from clay, but can also be made from concrete or calcium silicate.",
      "Face bricks are used where appearance matters and come in different colours and textures.",
      "Mortar colour can also be changed with dyes for decorative effect.",
      "Engineering bricks are stronger, heavier and non-porous.",
      "Engineering bricks are often used in foundations and structural columns.",
      "A standard concrete block measures 440 mm × 100 mm × 215 mm.",
      "Blocks are cheaper than bricks and quicker to lay.",
      "Blocks are often used where the wall will be covered or where appearance is less important.",
      "Concrete blocks are available in ultra-low, medium and high density.",
      "Stone such as limestone, granite and sandstone can be used for external walls.",
      "Stone walling is more expensive because the pieces are often irregular and slower to lay.",
      "Structural timber for external walls must be suitable grade and free from major defects.",
      "Common structural softwood grades listed are C16 and C32.",
      "Timber exposed to damp or weather should be pressure treated with preservative.",
      "This treated timber is known as tanalised timber.",
      "Planed structural timber with rounded edges is called CLS.",
      "Insulation is required in walls, floors and roofs to reduce heat loss and improve energy efficiency.",
      "Reflective foil insulation is often used in cavity walls and roof spaces.",
      "Mineral wool is often used between floor joists and ceiling joists.",
      "Reflective foil works by reflecting heat back into the building.",
      "Mineral wool works by trapping air to hold heat."
    ],
    "commonMistakes": [
      "Using the wrong wall material for the job.",
      "Assuming blocks are used only because of strength, not speed or cost.",
      "Forgetting that insulation is required to reduce heat loss."
    ],
    "miniCheck": [
      {
        "question": "What is the main difference between face bricks and engineering bricks?",
        "answer": "Face bricks are chosen for appearance, while engineering bricks are stronger and non-porous."
      },
      {
        "question": "Why are concrete blocks often used instead of bricks?",
        "answer": "Because they are cheaper and quicker to build with."
      },
      {
        "question": "How does mineral wool keep heat in?",
        "answer": "By trapping air within the material."
      }
    ]
  },
  {
    "id": "principles-calculating-wall-area-and-board-quantities",
    "title": "Calculating Wall Area and Sheet Quantities",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 11,
    "keywords": [
      "area",
      "wall area",
      "triangle",
      "plasterboard",
      "sheet calculation",
      "measurements"
    ],
    "examFocus": [
      "Understand how to calculate the area of an irregular wall",
      "Know how to subtract a missing section from a full area",
      "Recognise why accurate area calculations matter when ordering materials"
    ],
    "keyPoints": [
      "To find the area of an irregular wall, first work out the area of the full shape.",
      "Then calculate the area of the missing part and subtract it.",
      "In the example, the full wall area is found by multiplying 5.3 m by 3 m.",
      "That gives a full area of 15.9 m².",
      "The missing corner is found by subtracting the top length from the bottom length.",
      "5.3 m minus 4.9 m gives 0.4 m.",
      "The missing section is a triangle, not a square.",
      "First find the square area: 0.4 m × 0.4 m = 0.16 m².",
      "Then divide by 2 to get the triangle area: 0.08 m².",
      "Subtract the missing triangle from the full wall area.",
      "15.9 m² minus 0.08 m² gives a final wall area of 15.82 m².",
      "Area calculations are important when working out how many materials, such as plasterboard sheets, are needed.",
      "Accurate measuring helps avoid waste and shortages."
    ],
    "commonMistakes": [
      "Forgetting to subtract the missing section.",
      "Using the area of the square instead of halving it for the triangle.",
      "Ordering materials without checking the actual wall area."
    ],
    "miniCheck": [
      {
        "question": "What do you do after finding the area of the full wall shape?",
        "answer": "Work out the missing section and subtract it."
      },
      {
        "question": "Why was 0.16 m² divided by 2 in the example?",
        "answer": "Because the missing corner was a triangle, not a square."
      },
      {
        "question": "What was the final area of the wall in the example?",
        "answer": "15.82 m²."
      }
    ]
  },
  {
    "id": "principles-paint-systems-for-new-plaster",
    "title": "Paint Systems for Newly Plastered Walls",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 12,
    "keywords": [
      "new plaster",
      "mist coat",
      "breathable paint",
      "porous surface",
      "emulsion",
      "decoration"
    ],
    "examFocus": [
      "Understand why new plaster must dry before decorating",
      "Know the purpose of a mist coat",
      "Recognise suitable paint choices for newly plastered walls"
    ],
    "keyPoints": [
      "Fresh plaster must be fully dry before painting or wallpapering.",
      "If plaster is still wet, finishes may not stick properly.",
      "Wet plaster on plasterboard can take around 2 to 3 days to dry, depending on climate and thickness.",
      "Plaster on rendered walls or over backing plaster can take longer to dry.",
      "New plaster is porous, which means it absorbs moisture.",
      "Because of this, paint may not stick well unless the surface is sealed first.",
      "A mist coat is used to seal new plaster before the final coats are applied.",
      "A mist coat is made from 70% emulsion paint and 30% water.",
      "The water helps the paint soak into the plaster and reduce absorbency.",
      "This creates a good base for later coats of paint.",
      "An alternative is breathable or microporous paint made for new plaster.",
      "Breathable paint does not need watering down and usually drips less.",
      "It also allows the plaster to keep drying after painting.",
      "Its main disadvantage is higher cost.",
      "After the first coat dries, the wall can be checked for areas that need filling and sanding.",
      "Matt emulsion is often used on walls and ceilings and helps hide uneven surfaces.",
      "Eggshell has a low-sheen finish and is suitable for rooms such as bedrooms and living rooms.",
      "Always follow the manufacturer’s instructions for transport, use, storage and disposal of paint products.",
      "Some paints may need PPE and some may be flammable, so avoid naked flames and smoking nearby."
    ],
    "commonMistakes": [
      "Painting plaster before it has dried fully.",
      "Skipping the mist coat on a porous new wall.",
      "Ignoring paint safety instructions or flammability warnings."
    ],
    "miniCheck": [
      {
        "question": "Why does new plaster need a mist coat?",
        "answer": "To seal the porous surface so paint sticks properly."
      },
      {
        "question": "What is the mix for a mist coat?",
        "answer": "70% emulsion paint and 30% water."
      },
      {
        "question": "What is one advantage of breathable paint?",
        "answer": "It lets the plaster continue drying after application."
      }
    ]
  },
  {
    "id": "principles-roof-types-flat-and-pitched",
    "title": "Roof Types and Their Main Features",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 13,
    "keywords": [
      "roof types",
      "flat roof",
      "pitched roof",
      "gable roof",
      "mono-pitch",
      "lean-to"
    ],
    "examFocus": [
      "Understand the purpose of a roof",
      "Recognise the difference between flat and pitched roofs",
      "Identify common roof shapes and when they are used"
    ],
    "keyPoints": [
      "A roof protects a building from weather and helps control temperature inside.",
      "Roof shape is often chosen by cost and building design.",
      "A flat roof is the simplest and cheapest roof type.",
      "Flat roofs are not fully level and must have a fall so water can drain away.",
      "A flat roof can have a maximum pitch of 10°.",
      "If the roof angle is more than 10°, it is classed as a pitched roof.",
      "Flat roofs cannot be finished with slates or tiles because the slope is too low.",
      "Common flat roof coverings include bitumen felt, lead, copper, zinc, EPDM rubber, fibreglass and green roof systems.",
      "A pitched roof has a slope greater than 10°.",
      "A roof with one slope is called a mono-pitch.",
      "If a single-slope roof is built against an existing building, it is called a lean-to.",
      "A double roof uses two pitches and can be more economical on wider buildings.",
      "As roof spans increase, rafters may need to be larger or supported by purlins.",
      "A gable-ended roof has an end wall that rises up to the roof apex.",
      "Gable roofs are common because they are simple and quick to build."
    ],
    "commonMistakes": [
      "Thinking a flat roof is completely level.",
      "Using tiles or slates on a roof with too little pitch.",
      "Confusing a mono-pitch roof with a gable roof."
    ],
    "miniCheck": [
      {
        "question": "What is the maximum pitch for a flat roof?",
        "answer": "10°."
      },
      {
        "question": "What is a mono-pitch roof?",
        "answer": "A roof with one sloping face."
      },
      {
        "question": "Why are gable-ended roofs common?",
        "answer": "Because they are simple and quick to erect."
      }
    ]
  },
  {
    "id": "principles-roof-coverings-and-special-roof-forms",
    "title": "Roof Coverings, Hips, Valleys and Loft Space",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 14,
    "keywords": [
      "roof coverings",
      "epdm",
      "green roof",
      "hip",
      "valley",
      "dormer"
    ],
    "examFocus": [
      "Know common materials used on flat roofs",
      "Understand what hips and valleys are",
      "Recognise ways to create usable loft space and natural light"
    ],
    "keyPoints": [
      "Bitumen felt is a low-cost flat roof covering often used on sheds and outbuildings.",
      "Bitumen felt is less durable than other options and needs regular maintenance.",
      "Lead and copper can last for hundreds of years, but they are expensive and need skilled installation.",
      "These traditional materials are often used on historic or listed buildings.",
      "EPDM is a modern rubber flat roof covering supplied in rolls.",
      "It is cut to size and glued to the decking below.",
      "An EPDM flat roof can last more than 50 years.",
      "Fibreglass roofs are very strong, but they cost more than EPDM and have a shorter lifespan.",
      "Zinc is lightweight, corrosion resistant and suitable for flat or pitched roofs.",
      "Zinc is easy to shape, has a long life, is fully recyclable and takes less energy to produce than some other roof materials.",
      "A green flat roof has plants growing over a waterproof membrane.",
      "Green roofs can absorb pollution and carbon dioxide.",
      "They also help keep buildings cooler in summer and warmer in winter.",
      "Where a building changes direction, the inside meeting of roof slopes forms a valley.",
      "The outside meeting of roof slopes forms a hip.",
      "Hip and valley roofs are harder to build and usually cost more.",
      "They can improve the appearance and character of a building.",
      "Some roofs have enough loft space to create extra rooms if regulations are met.",
      "Roof windows can be fitted between rafters for natural light.",
      "Dormers are often better because they increase headroom.",
      "Rafters are the main structural timbers that support the roof covering."
    ],
    "commonMistakes": [
      "Choosing a roof covering without considering lifespan or cost.",
      "Mixing up hips and valleys.",
      "Forgetting that loft conversions and dormers must meet regulations."
    ],
    "miniCheck": [
      {
        "question": "What is one main advantage of EPDM?",
        "answer": "It is durable and can last over 50 years."
      },
      {
        "question": "What is a valley in a roof?",
        "answer": "The inside junction where two roof slopes meet."
      },
      {
        "question": "Why are dormers often preferred over roof windows alone?",
        "answer": "Because they increase headroom."
      }
    ]
  },
  {
    "id": "principles-perimeter-fascia-and-waste-calculations",
    "title": "Perimeter, Fascia Lengths and Waste Allowance",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 15,
    "keywords": [
      "perimeter",
      "fascia",
      "soffit",
      "linear metres",
      "waste allowance",
      "percentages"
    ],
    "examFocus": [
      "Understand how perimeter is used to calculate roof trim lengths",
      "Know why extra material is added for waste",
      "Recognise different ways to calculate percentages"
    ],
    "keyPoints": [
      "The perimeter of a building is found by adding the lengths of all outside sides.",
      "Perimeter measurements are used to work out how much soffit or fascia is needed.",
      "In the example, all side lengths are added together to give 54.4 m.",
      "This means 54.4 linear metres of soffit are required.",
      "Fascia is also measured in linear metres around the roof edge.",
      "Extra material should be ordered to allow for corner joints, lengthening joints and off-cuts.",
      "This extra amount is called waste.",
      "A waste allowance is usually between 5% and 10%.",
      "One way to find 10% is to divide the total by 10.",
      "Another method is to find 1% by dividing by 100, then multiply by the percentage needed.",
      "Percentages can also be worked out by changing the percentage into a decimal and multiplying.",
      "For example, 7% becomes 0.07.",
      "A quick way to include waste is to multiply the total by 1 plus the waste percentage as a decimal.",
      "For example, 200 m with 9% waste is 200 × 1.09 = 218 m.",
      "Accurate calculations help prevent shortages, reduce waste and avoid extra cost."
    ],
    "commonMistakes": [
      "Missing out one side when calculating perimeter.",
      "Forgetting to add extra material for waste.",
      "Using percentages incorrectly when converting to decimals."
    ],
    "miniCheck": [
      {
        "question": "What is perimeter used for in these examples?",
        "answer": "To calculate the total linear metres of soffit or fascia needed."
      },
      {
        "question": "Why is extra material added to fascia calculations?",
        "answer": "To allow for joints, cuts and waste."
      },
      {
        "question": "What do you multiply by to add 9% waste to a total?",
        "answer": "1.09."
      }
    ]
  },
  {
    "id": "principles-paint-systems-for-timber",
    "title": "Paint Systems for Timber",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 16,
    "keywords": [
      "timber paint",
      "water-based paint",
      "solvent-based paint",
      "preservative",
      "spray finish",
      "working at height"
    ],
    "examFocus": [
      "Understand why exposed timber needs protection",
      "Know the difference between water-based and solvent-based paints",
      "Recognise safe and correct methods when painting timber"
    ],
    "keyPoints": [
      "Timber exposed to weather will decay over time if left untreated.",
      "Preservative, paint or wood stain helps protect timber from the elements.",
      "Roof parts such as fascias, soffits and barge boards are especially exposed to weather.",
      "If timber is prepared and maintained properly, it can last for many years.",
      "Paint on site is usually applied with a brush or roller.",
      "Brushes and rollers can leave brush marks and a slightly textured finish.",
      "Spraying paint gives a smoother finish and is often used for high-quality joinery.",
      "Spray painting is usually done in a spray booth with extraction to remove paint mist safely.",
      "Most paint used in construction is now water-based.",
      "Solvent-based paint is very durable and can give a better appearance.",
      "Solvent-based paint takes much longer to dry, often around 16 to 24 hours.",
      "Brushes used with solvent-based paint must be cleaned with white spirit.",
      "Making and disposing of solvent-based paints is more harmful to the environment.",
      "Water-based paints are preferred because they dry faster in the right conditions.",
      "Tools used with water-based paint can be cleaned with water.",
      "Water-based paint also has less strong smell than solvent-based paint.",
      "When using a brush, apply paint in the direction of the grain for a better finish.",
      "Before painting at height, workers must understand the employer’s risk assessment.",
      "Working at height should only be done after other safer options have been considered."
    ],
    "commonMistakes": [
      "Leaving external timber unprotected.",
      "Painting across the grain instead of along it.",
      "Ignoring drying times, cleaning rules or work-at-height safety controls."
    ],
    "miniCheck": [
      {
        "question": "Why does external timber need paint, stain or preservative?",
        "answer": "To protect it from weather and decay."
      },
      {
        "question": "What is one advantage of water-based paint?",
        "answer": "It dries faster in the right conditions and tools clean with water."
      },
      {
        "question": "How should paint be brushed onto timber for a good finish?",
        "answer": "In the direction of the grain."
      }
    ]
  },
  {
    "id": "principles-equality-and-workplace-communication",
    "title": "Equality and Communication at Work",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 17,
    "keywords": [
      "equality",
      "respect",
      "discrimination",
      "communication",
      "workplace behaviour",
      "equality act 2010"
    ],
    "examFocus": [
      "Understand the importance of fair treatment in the workplace",
      "Recognise unlawful discrimination",
      "Know common communication methods used in construction"
    ],
    "keyPoints": [
      "Everyone at work should be treated fairly, respectfully and given equal opportunities.",
      "Discrimination because of race, gender, religion or sexuality is not acceptable and is against the law.",
      "The Equality Act 2010 protects people from unfair treatment.",
      "If discrimination happens, it should be reported to a trusted person such as a parent, carer, tutor, teacher, friend or support worker.",
      "Construction uses many ways to pass information between workers and companies.",
      "Drawings are used to communicate information clearly and can be checked again later.",
      "Many technical drawings are produced using CAD because they are accurate, easy to store, change and share.",
      "Emails are used to send professional information such as drawings, quotes and invoices.",
      "Memos are short written messages used inside a business.",
      "Radios or walkie-talkies allow quick verbal communication on site without dialling numbers.",
      "Safety signs, posters and notices communicate health, safety and welfare information.",
      "Mobile phones are useful for fast verbal communication but need charge and signal.",
      "Text messages are a quick informal way to send short messages.",
      "Social media can be used by companies to advertise, recruit staff and connect with other businesses.",
      "Verbal communication can be checked straight away, but it leaves no record.",
      "Written communication is useful because it can be understood later and referred back to."
    ],
    "commonMistakes": [
      "Ignoring discrimination instead of reporting it.",
      "Choosing a poor communication method for important information.",
      "Relying only on verbal messages when a written record is needed."
    ],
    "miniCheck": [
      {
        "question": "What law protects people from discrimination at work?",
        "answer": "The Equality Act 2010."
      },
      {
        "question": "Why are drawings useful for communication?",
        "answer": "They show information clearly and can be referred to later."
      },
      {
        "question": "What is one disadvantage of verbal communication?",
        "answer": "There is no record to check later."
      }
    ]
  },
  {
    "id": "principles-taking-and-recording-work-messages",
    "title": "Taking and Recording Messages at Work",
    "topic": "Principles of building construction, information and communication",
    "topicOrder": 18,
    "keywords": [
      "phone message",
      "recording information",
      "professional communication",
      "message taking",
      "workplace calls",
      "written record"
    ],
    "examFocus": [
      "Know how to take a message professionally",
      "Understand what details must be recorded",
      "Recognise why accurate records matter"
    ],
    "keyPoints": [
      "Workers may need to take messages from clients, managers, suppliers or designers.",
      "When answering a call, speak clearly and professionally.",
      "Start with a greeting such as good morning or good afternoon.",
      "Then give your name and the company name.",
      "A simple question such as 'How can I help?' helps begin the conversation professionally.",
      "If the area is noisy or the message is unclear, politely ask the caller to repeat the information.",
      "When taking a message, always record the date.",
      "You should also record the time of the call.",
      "Write down the name of the person the message is for.",
      "Record the caller’s name.",
      "Record the name of the person who received the call.",
      "Take a contact phone number.",
      "Write the full message content clearly.",
      "Messages must be written accurately and legibly.",
      "Poor message recording can lead to confusion, delays or important information being missed.",
      "When taking messages, remember you are representing the company."
    ],
    "commonMistakes": [
      "Forgetting to record key details such as time or contact number.",
      "Writing messages so badly that others cannot read them.",
      "Failing to ask the caller to repeat unclear information."
    ],
    "miniCheck": [
      {
        "question": "What should you say after greeting the caller?",
        "answer": "Your name and the company name."
      },
      {
        "question": "Name two details that must be recorded when taking a message.",
        "answer": "Any two of these: date, time, caller’s name, contact number, who the message is for, who took the call, or the message content."
      },
      {
        "question": "Why is accurate message recording important?",
        "answer": "Because unclear or missing details can cause misunderstandings or lost information."
      }
    ]
  },
  {
  "id": "documents-used-in-construction-communication",
  "title": "Construction Documents and Why They Matter",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 1,
  "keywords": [
    "bill of quantities",
    "delivery note",
    "invoice",
    "job sheet",
    "requisition order",
    "site diary",
    "statement",
    "timesheet",
    "variation order"
  ],
  "examFocus": [
    "Identify common documents used in construction",
    "Understand what each document is used for",
    "Recognise why accurate records help control work, costs and materials"
  ],
  "keyPoints": [
    "Materials delivered too early can create storage problems and may be lost, damaged or stolen.",
    "A bill of quantities lists parts of the project so contractors can price the work during tendering.",
    "A delivery note travels with materials and should be checked for damage, correct type, missing items and correct quantity before signing.",
    "An invoice shows the cost of goods or services supplied on credit.",
    "A job sheet explains the work to be done, and may include materials and the time allowed.",
    "A requisition order is used to request materials and keep a record of purchases for each job.",
    "A site diary records daily site events such as weather, inspections and deliveries.",
    "A statement lists invoices sent on a credit account and shows the total amount to be paid.",
    "A timesheet records hours worked and is used for wages and future labour cost estimates.",
    "If contract terms change during the job, the change must be recorded in writing using an architect’s instruction or variation order before work continues.",
    "Ordering materials just in time helps avoid waste, theft, damage and lack of storage space.",
    "Lead time is the time from starting a process to finishing it."
  ],
  "commonMistakes": [
    "Signing for materials before checking them properly.",
    "Ordering materials too early and causing storage issues on site.",
    "Making changes to contracted work without written approval.",
    "Failing to keep records of time worked or materials ordered."
  ],
  "miniCheck": [
    {
      "question": "What is the purpose of a bill of quantities?",
      "answer": "It breaks down the work so contractors can price the job."
    },
    {
      "question": "What should be checked before signing a delivery note?",
      "answer": "Damage, correct materials, missing items and correct quantities."
    },
    {
      "question": "Why are materials often ordered just in time?",
      "answer": "To reduce storage problems and lower the risk of loss, damage or theft."
    }
  ]
},
{
  "id": "technical-drawings-scales-and-information-storage",
  "title": "Drawing Scales, Technical Drawings and Secure Information",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 2,
  "keywords": [
    "technical drawings",
    "scale",
    "1:1",
    "setting out rod",
    "assembly drawing",
    "scale rule",
    "GDPR",
    "confidential documents"
  ],
  "examFocus": [
    "Understand why scale is used on construction drawings",
    "Recognise examples of technical drawings and their purpose",
    "Know why records and personal information must be stored securely"
  ],
  "keyPoints": [
    "Buildings are too large to draw full size on paper, so drawings are produced using scale.",
    "A scale of 1:1 means full size, where the drawing matches the real item exactly.",
    "A scale of 1:2 means one unit on the drawing represents two units in real life.",
    "Measurements can be taken from scaled drawings with a scale rule or by measuring and applying the scale.",
    "A full-size setting out rod is normally drawn at 1:1 and is used by bench joiners to mark out components.",
    "Assembly drawings are often produced at 1:5, 1:10 or 1:20 to show how parts fit together.",
    "Assembly drawings help show details such as joints and corners where components meet.",
    "Construction records and documents must be stored carefully to stop them being lost or damaged.",
    "Confidential documents must be kept secure so unauthorised people cannot view them.",
    "Examples of confidential records include bank details, health records, accident reports and employment records.",
    "Under GDPR, personal data must only be used for the reason it was collected."
  ],
  "commonMistakes": [
    "Reading a scaled drawing as if it were full size.",
    "Using the wrong scale when measuring from a drawing.",
    "Leaving confidential records where others can see them.",
    "Using personal data for reasons not linked to its original purpose."
  ],
  "miniCheck": [
    {
      "question": "What does a 1:1 scale mean?",
      "answer": "The drawing is full size."
    },
    {
      "question": "What is an assembly drawing used for?",
      "answer": "To show how components fit together in detail."
    },
    {
      "question": "What does GDPR require for personal data?",
      "answer": "It must be kept secure and only used for the purpose it was collected."
    }
  ]
},
{
  "id": "environmental-impact-of-construction-and-climate-change",
  "title": "Construction, Carbon Emissions and Climate Effects",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 3,
  "keywords": [
    "CO2",
    "greenhouse gases",
    "global warming",
    "construction impact",
    "sea level rise",
    "coastal flooding",
    "climate change",
    "wildlife habitats"
  ],
  "examFocus": [
    "Understand how construction affects the environment",
    "Recognise the link between greenhouse gases and global warming",
    "Know some effects of climate change on land, weather and wildlife"
  ],
  "keyPoints": [
    "Construction creates large amounts of carbon dioxide during the making and transport of materials.",
    "Carbon dioxide and other greenhouse gases harm the environment and add to global warming.",
    "Global warming means the Earth's temperature is rising quickly because of increased pollution in the atmosphere.",
    "Snow and ice help reflect the Sun’s heat and help control the Earth’s temperature.",
    "As temperatures rise, ice caps melt and this causes sea levels to rise.",
    "Rising sea levels increase the risk of coastal flooding.",
    "Climate change can lead to more extreme wet and dry weather.",
    "These changing weather patterns can cause both flooding and droughts.",
    "Warmer seas and changing climates affect wildlife and damage habitats.",
    "Some species may not survive because they cannot adapt to new conditions."
  ],
  "commonMistakes": [
    "Thinking construction only affects the environment on site.",
    "Forgetting that manufacturing and transport also produce emissions.",
    "Assuming climate change only affects weather and not wildlife or sea levels."
  ],
  "miniCheck": [
    {
      "question": "What gas from construction is a major cause of global warming?",
      "answer": "Carbon dioxide."
    },
    {
      "question": "What can melting ice caps cause?",
      "answer": "Rising sea levels and coastal flooding."
    },
    {
      "question": "How can climate change affect wildlife?",
      "answer": "Habitats change and some species cannot adapt or survive."
    }
  ]
},
{
  "id": "energy-sources-and-renewable-power-in-construction",
  "title": "Energy Use in Buildings and Renewable Power Sources",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 4,
  "keywords": [
    "energy sources",
    "fossil fuels",
    "renewable energy",
    "wind power",
    "solar power",
    "tidal power",
    "hydroelectric",
    "biomass heating",
    "National Grid",
    "LED lights"
  ],
  "examFocus": [
    "Know common energy sources used in buildings",
    "Understand the difference between fossil fuels and renewable energy",
    "Recognise examples of renewable power used in construction and homes"
  ],
  "keyPoints": [
    "Buildings commonly use electricity and gas for heating, lighting, sockets and appliances.",
    "Mains electricity is supplied through the National Grid.",
    "Traditional power stations generate electricity by burning coal or oil to make steam, which turns turbines.",
    "Coal and oil are fossil fuels formed in the ground over millions of years.",
    "Fossil fuels are non-renewable, so once used they cannot be replaced.",
    "Fossil fuels also damage the environment.",
    "As demand grows, supplies of coal, gas and oil are running down.",
    "Renewable energy is being used more often to power buildings and vehicles.",
    "Wind power uses turbines, often grouped in wind farms in coastal or offshore areas.",
    "Solar energy can heat water through solar panels or generate electricity through photovoltaic panels.",
    "Water power can create electricity using tidal systems or hydroelectric dams.",
    "Biomass boilers burn recycled wood pellets to provide heat and hot water.",
    "Unused electricity from renewable systems can be sold back to the National Grid.",
    "Energy use for lighting can be reduced by using LED lights.",
    "Oil use can also be reduced by sharing transport, using public transport and recycling plastic."
  ],
  "commonMistakes": [
    "Confusing fossil fuels with renewable energy sources.",
    "Assuming electricity from the grid is always renewable.",
    "Forgetting that solar panels can provide heat or electricity depending on the system.",
    "Ignoring simple ways to reduce energy use, such as switching to LED lighting."
  ],
  "miniCheck": [
    {
      "question": "Why are coal and oil described as non-renewable?",
      "answer": "Because they cannot be replaced once they have been used."
    },
    {
      "question": "Name two renewable energy sources used for buildings.",
      "answer": "Examples include wind, solar, water and biomass."
    },
    {
      "question": "How can lighting energy use be reduced?",
      "answer": "By switching to LED lights."
    }
  ]
},
{
  "id": "foundation-types-and-ground-conditions",
  "title": "Ground Conditions and Main Foundation Types",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 5,
  "keywords": [
    "foundations",
    "ground conditions",
    "soil types",
    "ground heave",
    "strip foundation",
    "raft foundation",
    "pile foundation",
    "pad foundation"
  ],
  "examFocus": [
    "Understand how ground conditions affect foundation choice",
    "Recognise common soil problems on building sites",
    "Know the four main foundation types used in construction"
  ],
  "keyPoints": [
    "The type of foundation depends on the weight of the building and the ground conditions.",
    "Site factors such as slopes, nearby rivers and heavy traffic can affect foundation strength.",
    "Rock such as granite and limestone provides strong and stable ground.",
    "Rock can be difficult and expensive to excavate.",
    "Firm clay is a poor ground condition because it can expand and swell.",
    "Upward ground movement caused by swelling soil is called ground heave.",
    "Soils containing gravel, sand or peat can be unstable.",
    "Unstable ground may need deeper or more expensive foundations.",
    "Before building starts, soil samples are tested to find the most suitable foundation type.",
    "The four main foundation types are strip, raft, pile and pad.",
    "Strip foundations can also include wide strip and deep fill versions."
  ],
  "commonMistakes": [
    "Choosing foundations without checking soil conditions first.",
    "Assuming all ground is stable enough for the same type of foundation.",
    "Forgetting that nearby site conditions can affect foundation performance."
  ],
  "miniCheck": [
    {
      "question": "What is ground heave?",
      "answer": "Upward ground movement caused by soil swelling."
    },
    {
      "question": "Why are soil samples taken before building starts?",
      "answer": "To decide which foundation type is most suitable."
    },
    {
      "question": "What are the four main foundation types?",
      "answer": "Strip, raft, pile and pad."
    }
  ]
},
{
  "id": "strip-and-wide-strip-foundations",
  "title": "Strip Foundations and Wide Strip Foundations",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 6,
  "keywords": [
    "strip foundation",
    "wide strip foundation",
    "substructure",
    "bearing capacity",
    "building control officer",
    "damp-proof course",
    "engineering bricks",
    "trench blocks",
    "reinforced concrete"
  ],
  "examFocus": [
    "Understand how strip foundations are built",
    "Know when a wide strip foundation is used",
    "Recognise key materials and safety points linked to foundation trenches"
  ],
  "keyPoints": [
    "Low-rise homes such as houses and bungalows commonly use strip foundations.",
    "A strip foundation is made by digging a trench to a depth set by planning requirements or soil test results.",
    "The depth depends on the ground’s bearing capacity.",
    "Before concrete is placed, the trench must be approved by a building control officer.",
    "The trench is then filled with around 150 to 500 mm of concrete.",
    "After the concrete sets, walling is built from the trench to about 150 mm above ground level.",
    "Below ground level, special engineering bricks and trench blocks are used because they resist moisture and frost damage.",
    "A damp-proof course is laid above this level to stop damp rising through the wall.",
    "The foundation and walling up to this stage are called the substructure.",
    "If the ground is weak, a normal strip foundation may not be enough.",
    "One option is to dig deeper until firmer ground is found, but this can increase cost.",
    "Another option is to make the trench wider and strengthen the concrete with steel reinforcement.",
    "A reinforced, wider foundation is called a wide strip foundation.",
    "Foundation trenches are dangerous because the sides can collapse, flood or have low oxygen levels.",
    "Work in a trench should only happen after a risk assessment and proper safety controls are in place."
  ],
  "commonMistakes": [
    "Starting concrete work before the trench has been checked and approved.",
    "Using standard bricks below ground where moisture or frost can cause damage.",
    "Forgetting to install a damp-proof course above substructure level.",
    "Treating trench work as low risk."
  ],
  "miniCheck": [
    {
      "question": "What type of building commonly uses a strip foundation?",
      "answer": "Low-rise domestic buildings such as houses and bungalows."
    },
    {
      "question": "Why is a damp-proof course fitted above the substructure?",
      "answer": "To stop damp rising through the wall."
    },
    {
      "question": "When is a wide strip foundation used?",
      "answer": "When ground conditions are weak and extra width and reinforcement are needed."
    }
  ]
},
{
  "id": "calculating-concrete-and-load-bearing-walls",
  "title": "Concrete Quantities and Load-Bearing Walls",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 7,
  "keywords": [
    "concrete volume",
    "foundation calculations",
    "load-bearing wall",
    "structural engineer",
    "internal walls",
    "external walls"
  ],
  "examFocus": [
    "Understand how concrete quantities are calculated for foundations",
    "Recognise the purpose of internal and external walls",
    "Know what a load-bearing wall is and why it must not be removed without checks"
  ],
  "keyPoints": [
    "Concrete volume is worked out by multiplying length by width by depth.",
    "When calculating separate foundation runs, corner overlaps must not be counted twice.",
    "Accurate quantity calculations help order the right amount of concrete.",
    "External walls support upper floors and the roof.",
    "External walls also help keep the building secure, warm and dry.",
    "Some internal walls carry structural loads, while others only divide rooms and provide privacy.",
    "A load-bearing wall supports weight from parts of the building above or around it.",
    "Load-bearing elements can include walls, floors, roofs and chimneys.",
    "Internal or external load-bearing walls must not be removed without advice from a structural engineer."
  ],
  "commonMistakes": [
    "Counting foundation corners twice when working out concrete volume.",
    "Ordering materials without checking measurements carefully.",
    "Assuming all internal walls are non-structural.",
    "Removing a wall without confirming whether it is load-bearing."
  ],
  "miniCheck": [
    {
      "question": "How do you calculate the volume of concrete?",
      "answer": "Multiply length by width by depth."
    },
    {
      "question": "Why must corner overlaps be checked in foundation calculations?",
      "answer": "To avoid counting the same area twice."
    },
    {
      "question": "Who should be consulted before removing a load-bearing wall?",
      "answer": "A structural engineer."
    }
  ]
},
{
  "id": "solid-walls-and-masonry-cavity-walls",
  "title": "Solid External Walls and Masonry Cavity Walls",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 8,
  "keywords": [
    "solid wall",
    "cavity wall",
    "wall ties",
    "cavity tray",
    "weep holes",
    "thermal insulation",
    "air gap",
    "loose fill insulation"
  ],
  "examFocus": [
    "Identify common materials used for solid external walls",
    "Understand how masonry cavity walls prevent damp",
    "Recognise the role of insulation, wall ties and ventilation in cavity construction"
  ],
  "keyPoints": [
    "Older buildings may have solid external walls made from a single skin or leaf.",
    "Solid walls can be built from stone, timber, straw bales, concrete, masonry, cob or rammed earth.",
    "The mass of a solid wall can help keep heat in during winter and keep interiors cooler in summer.",
    "Even with good thermal performance, moisture can still pass through solid walls.",
    "Damp inside a building can create unhealthy conditions and damage the structure.",
    "To reduce damp problems, an inner wall is built to form a cavity, usually around 100 to 150 mm wide.",
    "The inner leaf of a cavity wall often supports the roof and upper floors.",
    "In a masonry cavity wall, water that passes through the outer leaf runs down the inside face and is directed out by a cavity tray and weep holes.",
    "The inner and outer leaves are linked with stainless steel wall ties to improve stability.",
    "Wall ties are shaped to help stop water crossing from the outer leaf to the inner leaf.",
    "The cavity is usually partly filled with thermal insulation while still leaving an air gap for ventilation.",
    "Rigid insulation boards are fixed against the inner leaf with retaining clips fitted to the wall ties.",
    "If insulation is not kept in the correct position, moisture may cross the cavity and cause damp or mould.",
    "Older walls without insulation can sometimes be upgraded by drilling holes and injecting loose fill insulation.",
    "Injected insulation must be used carefully so it does not create a route for moisture to travel indoors."
  ],
  "commonMistakes": [
    "Assuming solid walls always prevent damp.",
    "Blocking the cavity so it can no longer drain or ventilate properly.",
    "Fitting insulation badly and allowing moisture to bridge across the cavity.",
    "Forgetting the purpose of cavity trays, weep holes and wall ties."
  ],
  "miniCheck": [
    {
      "question": "What is a cavity wall?",
      "answer": "A wall made of two leaves with a gap between them."
    },
    {
      "question": "How is water removed from a masonry cavity wall?",
      "answer": "By a cavity tray and weep holes."
    },
    {
      "question": "Why is an air gap left in a cavity wall?",
      "answer": "To help ventilation and reduce the risk of damp."
    }
  ]
},
{
  "id": "wall-components-that-control-moisture-and-support-openings",
  "title": "Wall Components: DPC, Wall Ties, Lintels and Render",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 9,
  "keywords": [
    "damp-proof course",
    "DPC",
    "wall ties",
    "lintels",
    "render",
    "rising damp",
    "bridging",
    "cavity wall"
  ],
  "examFocus": [
    "Know the purpose of common wall components",
    "Understand how moisture is controlled in external walls",
    "Recognise how openings in walls are supported"
  ],
  "keyPoints": [
    "A damp-proof course, or DPC, is placed in external walls about 150 mm above ground level.",
    "The DPC stops moisture rising from the ground through brick, block or stone walls.",
    "DPC is usually a plastic material supplied in rolls to match wall thickness.",
    "DPC can also be fitted vertically around doors and windows to stop moisture bridging across a cavity.",
    "Wall ties connect the inner and outer leaves of a cavity wall and improve wall strength.",
    "Wall ties are built into the mortar joints as the wall is constructed.",
    "Wall ties can also be used in timber frame construction.",
    "Wall tie spacing should be no more than 900 mm horizontally and 450 mm vertically.",
    "A lintel is a support placed over openings such as doors, windows and walkways.",
    "Modern lintels are commonly made from reinforced concrete or galvanised steel.",
    "Older buildings may use stone or timber lintels, but timber can decay over time.",
    "Some arches and curved openings are self-supporting, so a lintel may not always be needed.",
    "Render is a plaster-like coating used on masonry walls to create a flat surface for decoration.",
    "Render can also be used internally as a base before finishing plaster is applied.",
    "Bridging happens when moisture travels across a cavity through materials such as badly fitted insulation or wall ties."
  ],
  "commonMistakes": [
    "Forgetting that DPC must be positioned above ground level.",
    "Installing materials in a way that allows moisture to bridge the cavity.",
    "Using incorrect wall tie spacing.",
    "Assuming every wall opening must use the same type of lintel."
  ],
  "miniCheck": [
    {
      "question": "What is the main job of a DPC?",
      "answer": "To stop moisture rising up through the wall."
    },
    {
      "question": "What do wall ties do in a cavity wall?",
      "answer": "They connect the two leaves and strengthen the wall."
    },
    {
      "question": "What is a lintel used for?",
      "answer": "To support the wall above an opening."
    }
  ]
},
{
  "id": "brick-bonds-and-staggered-joints",
  "title": "Brick Bonds and Why Joints Must Be Staggered",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 10,
  "keywords": [
    "brick bond",
    "stretcher bond",
    "vertical joints",
    "mortar joints",
    "courses",
    "bricklaying"
  ],
  "examFocus": [
    "Understand why bricks and blocks are bonded in patterns",
    "Know what happens if vertical joints line up",
    "Recognise stretcher bond and the meaning of courses"
  ],
  "keyPoints": [
    "Bricks and blocks are laid so the vertical joints do not line up.",
    "Staggering the joints makes the wall stronger.",
    "If vertical joints are aligned, the wall or column becomes weaker.",
    "Poor joint arrangement can lead to cracking in the mortar joints.",
    "The pattern used to arrange brickwork is called the bond.",
    "Different brick bonds are used in house building.",
    "Stretcher bond is one of the simplest and most common brick bonds.",
    "In stretcher bond, each course is centred over the vertical joints in the row below.",
    "A course is a row of bricks or blocks laid by the bricklayer."
  ],
  "commonMistakes": [
    "Lining up vertical joints through several courses.",
    "Confusing a brick bond with the mortar itself.",
    "Forgetting that the bond pattern affects wall strength."
  ],
  "miniCheck": [
    {
      "question": "Why are vertical joints staggered in brickwork?",
      "answer": "To make the wall stronger and reduce cracking."
    },
    {
      "question": "What is the name for the pattern of brickwork?",
      "answer": "The bond."
    },
    {
      "question": "What is stretcher bond?",
      "answer": "A bond where each course is centred over the joints in the course below."
    }
  ]
},
{
  "id": "paint-finishes-and-floor-basics",
  "title": "Paint Finishes and Basic Floor Construction",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 11,
  "keywords": [
    "vinyl silk",
    "satin paint",
    "spray gun",
    "masking up",
    "cutting in",
    "ground floor",
    "upper floor"
  ],
  "examFocus": [
    "Recognise common paint finishes and where they are suitable",
    "Understand basic differences between ground floors and upper floors",
    "Know why some painting methods need more preparation"
  ],
  "keyPoints": [
    "Vinyl silk has a shiny, washable finish, so it suits busy areas such as hallways and staircases.",
    "Because vinyl silk reflects light, it can highlight uneven wall surfaces.",
    "Satin gives a soft-sheen finish and is tougher than matt emulsion.",
    "Satin-painted surfaces can be cleaned with a damp cloth.",
    "Emulsion can be applied with a roller, brush or spray gun.",
    "Brushes are commonly used for cutting in around edges and different surfaces.",
    "Spraying can give a better finish than other methods.",
    "Spraying also takes longer to prepare because nearby surfaces must be masked to protect them from overspray.",
    "Floors provide a flat and level surface for living and working.",
    "The two main floor groups are ground floors and upper floors.",
    "Ground floors are built differently from upper floors because they must resist moisture from the ground and reduce heat loss.",
    "Upper floors usually span longer distances without support and often include openings for staircases."
  ],
  "commonMistakes": [
    "Using vinyl silk on uneven walls where defects will show.",
    "Forgetting to mask nearby surfaces before spraying paint.",
    "Assuming ground floors and upper floors are built the same way."
  ],
  "miniCheck": [
    {
      "question": "Why is vinyl silk not ideal for uneven walls?",
      "answer": "Because its shiny finish reflects light and shows imperfections."
    },
    {
      "question": "What is cutting in?",
      "answer": "Carefully painting up to an edge or surface with a brush."
    },
    {
      "question": "Why are ground floors built differently from upper floors?",
      "answer": "Because they must stop moisture rising from the ground and reduce heat loss."
    }
  ]
},
{
  "id": "ground-floors-and-upper-floor-construction",
  "title": "Ground Floors, Suspended Floors and Upper Floor Joists",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 12,
  "keywords": [
    "solid floor",
    "suspended floor",
    "sleeper wall",
    "block and beam",
    "air bricks",
    "upper floors",
    "joists",
    "joist hangers",
    "engineered joists",
    "concrete slab"
  ],
  "examFocus": [
    "Know the main types of ground floor construction",
    "Understand the advantages and limits of timber, block and beam and concrete floors",
    "Recognise how upper floors are supported"
  ],
  "keyPoints": [
    "Ground floors are usually built as either solid floors or suspended floors.",
    "Solid concrete floors are more suitable on flatter sites because less material is needed to level them.",
    "Concrete cures slowly at about 1 mm per day.",
    "A 100 mm concrete floor can take more than three months to fully harden.",
    "Solid concrete floors can be walked on after 24 hours, but they are still vulnerable to damage while curing.",
    "Suspended floors are often preferred because they are quicker to install and can be used straight away.",
    "Older suspended ground floors often used timber joists supported by low walls called sleeper walls.",
    "Timber built into walls can rot if ventilation is poor and moisture builds up below the floor.",
    "Modern suspended ground floors often use reinforced concrete beams with concrete blocks between them.",
    "This system is called block and beam.",
    "Block and beam floors have fewer maintenance problems than timber suspended floors.",
    "The void under a suspended floor must be ventilated using air bricks in the external walls.",
    "Air bricks must be kept clear and must not be blocked by raised ground levels or later building work.",
    "Upper floors are usually built with timber joists spanning between load-bearing walls.",
    "The ends of upper floor joists are supported in metal joist hangers.",
    "Upper floor joists are less likely to rot than ground floor joists because they are further from damp ground.",
    "Engineered joists such as eco joists and I-joists can span longer distances than solid timber joists.",
    "Pipes and cables can pass through engineered joists without weakening them with extra holes or notches.",
    "Block and beam systems and reinforced concrete slabs can also be used for upper floors.",
    "Concrete upper floors are heavier than timber floors and may need larger foundations."
  ],
  "commonMistakes": [
    "Assuming concrete floors are ready for full use as soon as they can be walked on.",
    "Blocking air bricks and causing moisture build-up under suspended floors.",
    "Using timber floor details without considering rot risk and ventilation.",
    "Forgetting that heavier upper floors may need stronger foundations."
  ],
  "miniCheck": [
    {
      "question": "What are the two main methods of ground floor construction?",
      "answer": "Solid and suspended."
    },
    {
      "question": "Why must air bricks be kept clear?",
      "answer": "To ventilate the space under the floor and prevent moisture build-up."
    },
    {
      "question": "What supports the ends of timber joists on upper floors?",
      "answer": "Metal joist hangers."
    }
  ]
},
{
  "id": "pitched-roofs-cut-roofs-and-trusses",
  "title": "Pitched Roofs: Cut Roofs, Trusses and Main Structure",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 13,
  "keywords": [
    "pitched roof",
    "cut roof",
    "trussed roof",
    "rafters",
    "ridge",
    "joists",
    "wall plate",
    "ridge board"
  ],
  "examFocus": [
    "Understand the difference between cut roofs and trussed roofs",
    "Recognise the main structural parts of a pitched roof",
    "Know the purpose of joists and wall plates in roof construction"
  ],
  "keyPoints": [
    "Traditional pitched roofs can be built with pairs of rafters fixed to a wall plate and a central ridge.",
    "A roof built by cutting and fixing each part on site is called a cut roof.",
    "Cut roofs need more site work because the carpenter cuts and fits the roof timbers by hand.",
    "Trusses are factory-made roof sections delivered to site ready for erection.",
    "Trussed roofs need less cutting on site than cut roofs.",
    "Trusses usually use less timber and can be installed faster and at lower cost.",
    "Cut roofs may still be chosen when the roof shape is more complex.",
    "Joists create a level ceiling by spanning from one external wall to another.",
    "Trusses already include joists as part of the roof unit.",
    "In a cut roof, joists must be cut and fixed during construction.",
    "The underside of ceiling joists is commonly covered with plasterboard to form a smooth ceiling surface.",
    "A wall plate is a timber fixed on top of a structural wall.",
    "Wall plates give a fixing point for rafters and joists.",
    "Wall plates help spread the roof load evenly along the wall and down to the foundations.",
    "Wall plates for roofs are secured with metal restraint straps."
  ],
  "commonMistakes": [
    "Confusing a cut roof with a trussed roof.",
    "Assuming all roofs are built the same way on site.",
    "Forgetting that wall plates help spread the roof load.",
    "Thinking joists are only used in floors."
  ],
  "miniCheck": [
    {
      "question": "What is a cut roof?",
      "answer": "A roof where the components are cut and fixed on site by hand."
    },
    {
      "question": "Why are trusses often preferred?",
      "answer": "Because they use less timber and can be erected faster and more cheaply."
    },
    {
      "question": "What is the purpose of a wall plate?",
      "answer": "To provide a fixing point for roof timbers and spread the load along the wall."
    }
  ]
},
{
  "id": "roof-coverings-and-pitched-roof-components",
  "title": "Roof Components, Roof Coverings and Roof Safety",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 14,
  "keywords": [
    "underlay",
    "breathable membrane",
    "battens",
    "fascia",
    "soffit",
    "undercloaking",
    "barge board",
    "slates",
    "tiles",
    "shingles",
    "thatch"
  ],
  "examFocus": [
    "Know the purpose of common pitched roof components",
    "Recognise different roof covering materials and their features",
    "Understand key maintenance and safety points linked to roof work"
  ],
  "keyPoints": [
    "Underlay is fitted beneath tiles or slates to provide a second barrier against moisture.",
    "Roof underlay on pitched roofs is usually a breathable or semi-permeable membrane.",
    "A breathable membrane helps ventilate the roof space and reduce the risk of roof timbers rotting.",
    "Roof battens, also called laths, are fixed across the rafters over the membrane.",
    "Battens support the tiles or slates and provide a fixing point for them.",
    "A fascia board is fixed at the eaves and helps protect the lower edge of the roof.",
    "The fascia also carries the brackets for guttering.",
    "Soffits cover the underside of the eaves where the rafters project past the wall.",
    "Timber fascia and soffits need regular maintenance to stop rot.",
    "uPVC fascia and soffits are lower maintenance than timber.",
    "Undercloaking is a fibre cement board used under overhanging battens at the verge.",
    "Undercloaking protects the battens and supports the mortar beneath tiles or slates at the verge.",
    "A barge board is like a fascia board that runs along the gable end of a roof.",
    "Slates can be natural or man-made, and natural slate can last over 150 years.",
    "Reclaimed natural slate is often reused, which makes it a sustainable roof covering.",
    "Clay tiles are durable and fire-resistant and have been used for thousands of years.",
    "Concrete tiles can copy the look of clay tiles, but they are less sustainable because of pollution from manufacturing.",
    "Shingles are lightweight and cheaper than traditional tiles, but they are not commonly used on UK homes because of the wet climate.",
    "Thatch is a natural roof covering that also helps weatherproof and insulate a building.",
    "A well-maintained thatched roof can last up to 40 years depending on material, location and damage from birds or vermin.",
    "Older cement-based undercloaking boards may contain asbestos if the building was constructed before 2000.",
    "Buildings built before 2000 should be checked with an asbestos survey and risk assessment before roof work starts."
  ],
  "commonMistakes": [
    "Mixing up the jobs of fascia, soffit and barge board.",
    "Forgetting that underlay is a second moisture barrier, not the main roof finish.",
    "Assuming all tile materials have the same environmental impact.",
    "Starting work on older roofs without checking for possible asbestos."
  ],
  "miniCheck": [
    {
      "question": "What is the purpose of a breathable membrane?",
      "answer": "To provide a moisture barrier while still allowing the roof space to ventilate."
    },
    {
      "question": "What do roof battens do?",
      "answer": "They support and provide a fixing point for tiles or slates."
    },
    {
      "question": "Why is natural slate considered sustainable?",
      "answer": "Because it lasts a long time and can be reclaimed and reused."
    }
  ]
},
{
  "id": "preparing-bare-timber-for-an-external-painted-finish",
  "title": "Preparing Bare Timber for Paint",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 15,
  "keywords": [
    "bare timber",
    "preservative",
    "knotting",
    "primer",
    "undercoat",
    "topcoat",
    "external joinery",
    "surface preparation"
  ],
  "examFocus": [
    "Know the correct order for preparing bare timber for paint",
    "Understand the purpose of preservative, knotting, primer, undercoat and topcoat",
    "Recognise good practice when painting timber for external use"
  ],
  "keyPoints": [
    "External softwood joinery such as doors and windows should be treated with clear preservative before painting.",
    "Preservative must soak well into the timber and each coat must dry before the next one is applied.",
    "Knots in redwood can show through paint later, so they are treated with knotting before painting.",
    "Knotting helps stop knots from staining or showing through the final finish.",
    "Bare timber should be primed to seal the grain and help later coats stick properly.",
    "After the primer dries, the surface should be lightly sanded and dust removed before the next coat.",
    "Previously painted timber does not usually need primer again.",
    "Before undercoat is applied, the surface should be lightly sanded and cleaned of dust.",
    "Undercoat helps prepare the surface for the final paint layer and gives extra moisture protection.",
    "Grey primer or undercoat is better under dark topcoats because a white base may show through.",
    "After another light sanding and dusting, the timber is ready for the topcoat.",
    "The topcoat gives the final colour and finish, such as matt, satinwood, eggshell or gloss.",
    "Fascia, soffits and barge boards are easier to protect if most coats are applied before cutting and fixing.",
    "Any cut ends must be treated because exposed end grain can absorb moisture and rot.",
    "Paint should be poured into a small kettle instead of using it straight from the tin to help keep the tin clean and easy to reseal."
  ],
  "commonMistakes": [
    "Skipping preservative on external softwood.",
    "Painting over knots without using knotting first.",
    "Applying coats before the previous one has dried properly.",
    "Failing to sand and remove dust between coats.",
    "Leaving cut ends untreated on external timber."
  ],
  "miniCheck": [
    {
      "question": "Why is primer applied to bare timber?",
      "answer": "To seal the grain and help later coats stick."
    },
    {
      "question": "What is knotting used for?",
      "answer": "To stop knots showing through the paint finish."
    },
    {
      "question": "Why must cut ends of external timber be treated?",
      "answer": "Because exposed grain can absorb moisture and rot."
    }
  ]
},
{
  "id": "communication-methods-and-job-roles-in-construction",
  "title": "Communication in Construction and the Building Team",
  "topic": "Principles of building construction, information and communication",
  "topicOrder": 16,
  "keywords": [
    "workplace communication",
    "verbal communication",
    "written communication",
    "drawings",
    "body language",
    "hand signals",
    "building team",
    "client"
  ],
  "examFocus": [
    "Understand why good communication matters on construction projects",
    "Recognise different ways information is communicated in the workplace",
    "Know the importance of the client and the building team"
  ],
  "keyPoints": [
    "Good communication between different job roles helps a building project run smoothly.",
    "Poor communication can lead to delays, mistakes and missed deadlines.",
    "People can communicate without speaking by using body language or hand signals.",
    "Hand signals are often used to direct site traffic and crane movements.",
    "Non-verbal signals can work well for simple instructions but are not suitable for detailed technical information.",
    "Verbal communication is quick and easy but can be forgotten or misunderstood.",
    "Written information is a clear way to pass on building details.",
    "Drawings are also useful because they can show technical information clearly and be checked again later.",
    "Recording information in writing helps avoid mistakes and gives a future reference.",
    "Everyone involved in a project is part of the building team.",
    "The client is the most important person in the building team because they provide the project and its funding.",
    "The building team includes professionals, technicians, tradespeople and general operatives.",
    "Mobile phones can help communication, but unnecessary personal use at work can be distracting and unsafe."
  ],
  "commonMistakes": [
    "Relying only on spoken instructions for important technical details.",
    "Using hand signals for information that should be written down or drawn.",
    "Not passing information clearly between different job roles.",
    "Using mobile phones in a way that distracts from safe working."
  ],
  "miniCheck": [
    {
      "question": "Why is good communication important on a construction project?",
      "answer": "It helps prevent delays, mistakes and missed deadlines."
    },
    {
      "question": "Why is written communication useful on site?",
      "answer": "Because it is clear and can be referred to later."
    },
    {
      "question": "Who is the most important person in the building team?",
      "answer": "The client."
    }
  ]
  },
  {
    "id": "carpentry-hand-tools-safety-basics",
    "title": "Hand Tool Safety Basics",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 1,
    "keywords": [
      "hand tool safety",
      "PPE",
      "secure materials",
      "correct tool",
      "safe working area"
    ],
    "examFocus": [
      "Understand basic safety rules for hand tools",
      "Recognise safe handling and passing of tools",
      "Know how to reduce accidents when working with cutting tools"
    ],
    "keyPoints": [
      "Wear the right PPE for the job, following the risk assessment.",
      "Remove or control loose clothing, jewellery and trailing earphone wires.",
      "Make sure the material is held firmly and correctly before starting work.",
      "Keep hands, arms and legs clear of cutting edges at all times.",
      "Use the correct hand tool for the task.",
      "Do not force a tool if it is not cutting or moving properly.",
      "Pass tools handle first, never blade or cutting edge first.",
      "Keep the work area clean, tidy and safe.",
      "Hand tools are commonly grouped into measuring and levelling tools, marking-out tools, saws, planes, chisels and knives, drills and screwdrivers, and other hand tools."
    ],
    "commonMistakes": [
      "Using the wrong tool for the job.",
      "Working with unsecured material.",
      "Passing a sharp tool cutting edge first.",
      "Ignoring loose clothing or jewellery hazards.",
      "Leaving the work area untidy."
    ],
    "miniCheck": [
      {
        "question": "What should you wear before using hand tools?",
        "answer": "The correct PPE for the task."
      },
      {
        "question": "How should you pass a sharp hand tool to someone?",
        "answer": "Handle first."
      },
      {
        "question": "What should you do if a tool will not cut or move easily?",
        "answer": "Do not force it; check why."
      }
    ]
  },
  {
    "id": "carpentry-measuring-tapes-and-laser-measures",
    "title": "Tape Measures and Laser Distance Tools",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 2,
    "keywords": [
      "tape measure",
      "measuring tape hook",
      "100 mm mark",
      "laser distance measure",
      "accurate measuring"
    ],
    "examFocus": [
      "Understand how a tape measure hook works",
      "Know good practice for accurate measuring",
      "Recognise safe use of laser measuring tools"
    ],
    "keyPoints": [
      "Tape measures usually come in lengths from 2 m to 10 m.",
      "Longer tape measures are bulkier and are often used by site carpenters.",
      "The hook at the end moves by the thickness of the hook so it can measure inside and outside distances accurately.",
      "Some hooks have wide wings to grip different edges of the material.",
      "Some hooks include a slot to fit over a nail or screw head for measuring from a fixed point.",
      "Some hooks are magnetic so they can attach to steel surfaces.",
      "A bent or damaged hook reduces measuring accuracy.",
      "For setting out or when accuracy matters, start from the 100 mm mark on the tape and subtract 100 mm from the final reading.",
      "A laser distance measure is useful for longer distances, but accuracy can reduce as the distance increases.",
      "Never shine a laser into anyone’s eyes because it can cause serious injury."
    ],
    "commonMistakes": [
      "Using a tape with a damaged or bent hook.",
      "Forgetting to subtract 100 mm when measuring from that mark.",
      "Assuming a laser measure stays equally accurate over all distances.",
      "Shining a laser towards someone’s eyes."
    ],
    "miniCheck": [
      {
        "question": "Why does the tape measure hook move slightly?",
        "answer": "So it can measure both internal and external distances accurately."
      },
      {
        "question": "What must you do if you measure from the 100 mm mark?",
        "answer": "Subtract 100 mm from the final measurement."
      },
      {
        "question": "What is the main safety rule for a laser distance measure?",
        "answer": "Never shine the laser into anyone’s eyes."
      }
    ]
  },
  {
    "id": "carpentry-angle-marking-tools",
    "title": "Tools for Angles, Curves and Marking Out",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 3,
    "keywords": [
      "protractor",
      "compass",
      "dividers",
      "trammel heads",
      "carpenters pencil"
    ],
    "examFocus": [
      "Identify hand tools used for angles, curves and transferring sizes",
      "Understand the main use of protractors, compasses, dividers and trammel heads",
      "Know which pencil type is suitable for general setting out"
    ],
    "keyPoints": [
      "A protractor is used to measure angles or read angles from drawings.",
      "A larger protractor is easier to read and gives better measuring control.",
      "A compass is mainly used to draw small curves and radiuses.",
      "Better-quality compasses often have a centre wheel for easier adjustment and more accurate curves.",
      "Compasses and dividers can also be used to create angles and split angles into equal parts.",
      "Dividers are used to transfer sizes accurately from drawings or setting out rods onto the workpiece.",
      "Dividers can also divide distances equally and scribe arcs on material.",
      "Trammel heads with a beam are used for larger curves or for stepping off repeated measurements.",
      "Trammel heads can hold either a pencil or a metal point.",
      "Pencil grade affects the quality of marking out.",
      "For general setting out, a 2H pencil is suitable.",
      "Carpenters’ pencils are flat so they do not roll easily, which is useful when working at height.",
      "Carpenters’ pencils are mainly used for general carpentry marking out, where extreme accuracy is not always needed.",
      "An obtuse angle is more than 90° and less than 180°.",
      "An acute angle is less than 90°."
    ],
    "commonMistakes": [
      "Using the wrong tool for the type of angle or curve needed.",
      "Choosing a poor-quality or unsuitable pencil for marking out.",
      "Assuming a carpenter’s pencil gives the same fine accuracy as a harder setting-out pencil.",
      "Mixing up acute and obtuse angles."
    ],
    "miniCheck": [
      {
        "question": "What tool is used to measure an angle from a drawing?",
        "answer": "A protractor."
      },
      {
        "question": "What are dividers mainly used for?",
        "answer": "To transfer dimensions accurately and divide distances equally."
      },
      {
        "question": "Which pencil grade is suitable for general purpose setting out?",
        "answer": "2H."
      }
    ]
  },
  {
    "id": "carpentry-producing-and-bisecting-angles",
    "title": "Producing and Bisecting Angles",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 4,
    "keywords": [
      "90 degree angle",
      "45 degree angle",
      "bisecting angles",
      "compass work",
      "circle sectors"
    ],
    "examFocus": [
      "Understand how to form a 90° angle with a compass",
      "Know how to bisect a right angle to produce 45°",
      "Recognise how circles can be used to create equal angle sectors"
    ],
    "keyPoints": [
      "A 90° angle can be set out by drawing arcs from a chosen point on a straight line and joining the arc intersections.",
      "The larger the compass setting, the more accurate the angle is likely to be, as long as the compass is not fully opened.",
      "To create a 45° angle, bisect the 90° angle using further compass arcs.",
      "The same bisecting method can be used again to produce 22½°.",
      "A circle can be used to form equal angles.",
      "If the compass stays at the same radius used to draw the circle, that radius fits around the circumference six times.",
      "This divides the circle into six equal sectors.",
      "Each of the six sectors is 60°.",
      "By bisecting sectors, smaller angles such as 15°, 45° and 22½° can be produced.",
      "Larger circles are easier to mark out accurately."
    ],
    "commonMistakes": [
      "Changing the compass width when it should stay the same.",
      "Using a very small circle or arc, which reduces accuracy.",
      "Forgetting that six equal sectors in a circle are 60° each.",
      "Drawing lines that do not pass exactly through the arc intersection points."
    ],
    "miniCheck": [
      {
        "question": "How can you make a 45° angle from a 90° angle?",
        "answer": "By bisecting the 90° angle."
      },
      {
        "question": "How many equal sectors are made when a circle is stepped off with its own radius?",
        "answer": "Six."
      },
      {
        "question": "What is the angle of each of those six sectors?",
        "answer": "60°."
      }
    ]
  },
  {
    "id": "carpentry-hand-saws-and-hardpoint-saws",
    "title": "Hand Saws and Hardpoint Saws",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 5,
    "keywords": [
      "hardpoint handsaw",
      "panel saw",
      "crosscutting",
      "fleam tooth",
      "tooth count"
    ],
    "examFocus": [
      "Understand what hardpoint handsaws are used for",
      "Know how tooth count affects the type of cut",
      "Recognise features of crosscut and fleam-style teeth"
    ],
    "keyPoints": [
      "Crosscutting means cutting across the grain.",
      "Crosscut saw teeth are shaped to cut timber fibres cleanly across the grain.",
      "Fleam-style teeth are bevelled to give a cleaner cutting action.",
      "The fleam tooth pattern came from the traditional Japanese pull saw and is now used in many hardpoint handsaws.",
      "Hardpoint handsaws are often called general purpose saws or panel saws.",
      "They can cut with the grain, across the grain, and through sheet materials such as plywood and MDF.",
      "Most hardpoint handsaws have triple-ground teeth for fast cutting.",
      "Use a higher tooth count per 25 mm for finer work and thinner sheet materials.",
      "Use fewer teeth per 25 mm for thicker timber and treated timber.",
      "Many hardpoint handsaws have a low-friction, rust-resistant PTFE coating.",
      "This coating helps when working outdoors and when cutting treated timber.",
      "Fleam-cut tooth handsaws can cut on both the push and the pull stroke.",
      "Common hardpoint handsaw lengths are 500 mm and 550 mm, with about 8 to 10 teeth per 25 mm."
    ],
    "commonMistakes": [
      "Using a coarse saw for fine sheet materials.",
      "Using a high-tooth-count saw on thick timber where a coarser saw is better.",
      "Assuming all saws only cut in one direction.",
      "Choosing the wrong saw for the material being cut."
    ],
    "miniCheck": [
      {
        "question": "What does crosscutting mean?",
        "answer": "Cutting across the grain."
      },
      {
        "question": "Which type of saw is often called a general purpose or panel saw?",
        "answer": "A hardpoint handsaw."
      },
      {
        "question": "When should you use a saw with more teeth per 25 mm?",
        "answer": "For finer work and thinner sheet materials."
      }
    ]
  },
  {
    "id": "carpentry-ripsaws-crosscut-saws-and-backed-saws",
    "title": "Ripsaws, Crosscut Saws and Backed Saws",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 6,
    "keywords": [
      "ripsaw",
      "crosscut saw",
      "backed handsaw",
      "tenon saw",
      "fine cutting"
    ],
    "examFocus": [
      "Know the difference between ripsaws and crosscut saws",
      "Understand the purpose of backed handsaws",
      "Recognise the main uses of a tenon saw"
    ],
    "keyPoints": [
      "A ripsaw is designed for cutting along the grain.",
      "Ripsaws are not commonly used today because ripping is usually done more efficiently by machine.",
      "A ripsaw is one of the largest hand saws used in carpentry and joinery.",
      "Typical ripsaw length is about 650 mm to 750 mm.",
      "Ripsaws have coarse teeth, around 3 to 5 teeth per 25 mm.",
      "A ripsaw cuts on the downward stroke.",
      "Its teeth are filed square to the blade and cut with a chisel-like action.",
      "A crosscut saw is more common than a ripsaw, although it has also largely been replaced by power tools and hardpoint saws.",
      "Crosscut saws usually have smaller teeth than ripsaws, about 6 to 8 teeth per 25 mm.",
      "Crosscut teeth are shaped to sever timber fibres and leave a better finish.",
      "If ripsaw tooth design were used for crosscutting, the saw would jump and tear the fibres.",
      "Backed handsaws have a steel or brass strip along the top edge.",
      "The back keeps the blade straight and adds weight.",
      "Better-quality backed saws usually have a heavy brass back.",
      "Backed handsaws are used for fine, accurate work such as cutting joints.",
      "They can cut both with and across the grain.",
      "A tenon saw is a type of backed saw used for joints such as tenons, halving joints, bridle joints and architrave.",
      "A tenon saw usually has around 13 teeth per 25 mm.",
      "Hardpoint versions are available, while traditional versions need sharpening and setting.",
      "A little candle wax on the side of a saw can help reduce blade binding during the cut."
    ],
    "commonMistakes": [
      "Using a ripsaw for crosscutting and expecting a clean finish.",
      "Using the wrong saw for joint cutting.",
      "Ignoring blade binding during the cut.",
      "Assuming all backed saws are only for one direction of grain."
    ],
    "miniCheck": [
      {
        "question": "What type of cut is a ripsaw made for?",
        "answer": "Cutting along the grain."
      },
      {
        "question": "Why do backed handsaws have a metal strip on top?",
        "answer": "To keep the blade straight and add weight."
      },
      {
        "question": "What is a tenon saw mainly used for?",
        "answer": "Fine joint cutting."
      }
    ]
  },
  {
    "id": "carpentry-using-backed-handsaws-safely",
    "title": "Safe Setup for Using a Backed Handsaw",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 7,
    "keywords": [
      "backed handsaw",
      "tenon saw",
      "vice",
      "starting cut",
      "waste side"
    ],
    "examFocus": [
      "Understand how to position timber before cutting with a backed handsaw",
      "Know the correct body and hand position when starting a tenon saw cut",
      "Recognise how to begin the cut safely and accurately"
    ],
    "keyPoints": [
      "Clamp the timber firmly in a vice with the end to be cut set square to the vice.",
      "Stand slightly to one side of the vice, not directly in front of it.",
      "Hold the tenon saw with the index finger extended along the side of the handle for control.",
      "Start the cut using your thumb or index finger as a guide.",
      "Place the saw on the waste side of the gauge line, not on the line itself.",
      "Once the saw starts cutting, move your guiding hand away from the blade.",
      "Let the weight of the saw do the work instead of forcing the cut.",
      "Cut to about 5 mm deep before changing the position of the timber."
    ],
    "commonMistakes": [
      "Standing directly in front of the vice.",
      "Starting the cut on the gauge line instead of the waste side.",
      "Keeping fingers near the blade after the cut has started.",
      "Forcing the saw instead of letting it cut naturally."
    ],
    "miniCheck": [
      {
        "question": "Where should the saw be placed in relation to the gauge line?",
        "answer": "On the waste side of the gauge line."
      },
      {
        "question": "Should you stand directly in front of the vice?",
        "answer": "No, stand slightly to one side."
      },
      {
        "question": "What should do the cutting at the start of the saw cut?",
        "answer": "The weight of the saw."
      }
    ]
  },
  {
    "id": "carpentry-cutting-a-tenon-with-a-backed-handsaw",
    "title": "Cutting a Tenon with a Backed Handsaw",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 8,
    "keywords": [
      "tenon cutting",
      "diagonal cut",
      "bench hook",
      "shoulder cut",
      "tenon cheek"
    ],
    "examFocus": [
      "Understand the sequence for cutting a tenon accurately",
      "Know how changing the timber position helps control the cut",
      "Recognise how to remove the tenon cheeks"
    ],
    "keyPoints": [
      "After the first shallow cut, remove the saw when the cut is about 5 mm deep.",
      "Reposition the timber in the vice at about 45°.",
      "Cut diagonally from one corner to the other to help form a straight side on the tenon.",
      "Turn the timber around and repeat the diagonal cut from the other side.",
      "Place the timber back square in the vice and finish the cut to the required depth.",
      "To remove the tenon cheeks, place a bench hook in the vice.",
      "Hold the timber firmly against the side support of the bench hook.",
      "Start the shoulder cut using your thumb as a guide.",
      "Move your thumb away once the cut has started.",
      "Cut down the shoulder until the cheek falls away."
    ],
    "commonMistakes": [
      "Skipping the 45° diagonal cuts.",
      "Not turning the timber to repeat the cut from the other side.",
      "Holding the timber loosely against the bench hook.",
      "Leaving your thumb in place after the saw starts cutting."
    ],
    "miniCheck": [
      {
        "question": "At what angle is the timber repositioned to make the diagonal cut?",
        "answer": "About 45°."
      },
      {
        "question": "What tool supports the timber when removing the tenon cheeks?",
        "answer": "A bench hook."
      },
      {
        "question": "When should you move your thumb away during the shoulder cut?",
        "answer": "As soon as the cut has started."
      }
    ]
  },
  {
    "id": "carpentry-block-and-specialist-plane-uses",
    "title": "Block Planes and Specialist Planes",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 9,
    "keywords": [
      "block plane",
      "specialist planes",
      "rebate plane",
      "plough plane",
      "shoulder plane"
    ],
    "examFocus": [
      "Know the typical jobs a block plane is used for",
      "Recognise common types of specialist planes",
      "Understand why many specialist planes have been replaced by power tools"
    ],
    "keyPoints": [
      "A block plane is useful for end grain work such as adjusting mitres and cleaning frame ends.",
      "It is also used for fine cleaning up of joints.",
      "Block planes work well on short timber and timber with difficult grain.",
      "They can also trim laminate edges on worktops.",
      "Specialist planes are mainly workshop tools.",
      "Many specialist planes have been replaced by power tools such as routers and vertical spindle moulders.",
      "Power tools are often preferred because they give quick and accurate results.",
      "Common specialist planes include the rebate plane, plough plane, bullnose plane, shoulder plane, side rebate plane, router plane, compass plane and spokeshave."
    ],
    "commonMistakes": [
      "Using a general plane when a specialist plane is better suited to the task.",
      "Not recognising that block planes are useful for end grain and fine trimming.",
      "Confusing the purpose of different specialist planes."
    ],
    "miniCheck": [
      {
        "question": "What type of work is a block plane often used for on frames?",
        "answer": "Cleaning up end grain and adjusting mitres."
      },
      {
        "question": "Why have many specialist planes been replaced by power tools?",
        "answer": "Because power tools are quicker and more accurate."
      },
      {
        "question": "Name one common specialist plane.",
        "answer": "Rebate plane."
      }
    ]
  },
  {
    "id": "carpentry-rebate-and-specialist-plane-functions",
    "title": "Rebate Planes and Other Specialist Plane Functions",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 10,
    "keywords": [
      "rebate plane",
      "bullnose plane",
      "shoulder plane",
      "side rebate plane",
      "plough plane"
    ],
    "examFocus": [
      "Understand how a rebate plane is set and used",
      "Know the purpose of the fence, depth stop and spur cutter",
      "Recognise the uses of bullnose, shoulder and side rebate planes"
    ],
    "keyPoints": [
      "A rebate plane cuts a rebate along the length of timber.",
      "Its fence controls the width of the rebate.",
      "Its depth stop controls the finished depth of the rebate.",
      "When using a rebate plane, start at the far end of the timber and work back gradually.",
      "The rebate should finish flat and at a constant depth.",
      "A common setup fault is having the blade too far out or not far enough out.",
      "Poor blade setting can cause an uneven rebate and rough finish.",
      "The plane iron must not project further than the spur cutter.",
      "The spur cutter scores the side of the rebate for a cleaner finish.",
      "If the iron projects past the spur cutter, the side of the rebate will be rough.",
      "If the iron is set too far back from the spur cutter, the rebate can become stepped.",
      "The rebate plane iron is square and straight, with the bevel facing down.",
      "The iron can be set in a standard central position or a forward position for stopped rebates.",
      "A combination or plough plane works in a similar way to a rebate plane.",
      "These planes use thin irons to cut grooves or decorative profiles along timber.",
      "A bullnose plane has its iron close to the front and is used for working into corners or adjusting rebates.",
      "On a bullnose plane, the grinding angle faces up, like a block plane.",
      "A shoulder plane is used to finish tenons by hand.",
      "Its low cutting angle helps give a clean finish across the grain.",
      "Because the iron is flush with the side of the plane, it can cut right up to the tenon shoulder.",
      "A shoulder plane can also adjust or widen rebates.",
      "A side rebate plane is used to plane the side wall of a groove or rebate to make it wider.",
      "Plane soles are usually cast iron, which is hard but brittle, so planes must be handled and stored carefully."
    ],
    "commonMistakes": [
      "Setting the rebate plane iron too far out or too far in.",
      "Starting the rebate at the near end instead of the far end.",
      "Allowing the iron to project past the spur cutter.",
      "Using the wrong specialist plane for the adjustment needed.",
      "Dropping a plane and damaging the cast iron sole."
    ],
    "miniCheck": [
      {
        "question": "What controls the width of a rebate on a rebate plane?",
        "answer": "The fence."
      },
      {
        "question": "What does the spur cutter do?",
        "answer": "It scores the side of the rebate for a cleaner finish."
      },
      {
        "question": "Which plane is used to finish a tenon by hand?",
        "answer": "A shoulder plane."
      }
    ]
  },
  {
    "id": "carpentry-plane-storage-and-grain-direction",
    "title": "Storing Planes and Planing with the Grain",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 11,
    "keywords": [
      "plane storage",
      "bevel up planes",
      "planing with the grain",
      "torn grain",
      "frog and mouth"
    ],
    "examFocus": [
      "Know which planes have the grinding angle facing up",
      "Understand how to store and transport planes safely",
      "Recognise why grain direction matters when planing timber"
    ],
    "keyPoints": [
      "The following planes have the grinding angle facing up: block plane, bullnose plane, shoulder plane, side rebate plane and router plane.",
      "When a plane is not being used, the cutting edge should not rest on the bench, floor or timber.",
      "On a workbench, a plane can be rested so the cutting edge stays clear of the surface.",
      "A plane can also be laid on its side to help prevent damage and reduce the chance of it being knocked off the bench.",
      "On site, the same care should be taken to protect the cutting edge when the plane is not in use.",
      "For storage or transport, wind the iron back into the plane body.",
      "Planes can be wrapped in cloth and protected with rust-prevention spray.",
      "Storage boxes can be used to protect planes.",
      "Before using the plane again, remove oil or rust protection so the timber does not get stained.",
      "Before planing, check the grain direction and the type of grain.",
      "Where possible, plane in the direction the grain rises away from you.",
      "Planing against the grain can tear and damage the timber surface.",
      "Areas with knots, interlocking grain or cross-grain need extra care.",
      "To reduce tearing, use a very sharp iron, a fine setting and a small mouth opening."
    ],
    "commonMistakes": [
      "Resting a plane on its cutting edge.",
      "Leaving the iron exposed during storage or transport.",
      "Using a plane with oil still on it and staining the timber.",
      "Planing against the grain and tearing the surface.",
      "Using a blunt or heavily set iron around knots."
    ],
    "miniCheck": [
      {
        "question": "Name one plane with the grinding angle facing up.",
        "answer": "Block plane."
      },
      {
        "question": "What should you do with the iron before long-term storage?",
        "answer": "Wind it back into the plane body."
      },
      {
        "question": "What usually happens if you plane against the grain?",
        "answer": "The timber surface can tear or become damaged."
      }
    ]
  },
  {
    "id": "carpentry-planing-timber-to-size-by-hand",
    "title": "Planing Timber to Size by Hand",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 12,
    "keywords": [
      "planing allowance",
      "face side",
      "winding sticks",
      "twist in timber",
      "jack plane"
    ],
    "examFocus": [
      "Understand the basic process of planing sawn timber to size",
      "Know what planing allowance means",
      "Recognise how to check for flatness and twist"
    ],
    "keyPoints": [
      "Power tools now do most timber sizing, but hand planing is still an important skill.",
      "Sawn timber is supplied in standard widths and thicknesses.",
      "A planing allowance of 3 mm per face is used when preparing sawn timber.",
      "For example, timber sized at 100 mm by 50 mm is finished at 94 mm by 44 mm.",
      "This allowance removes saw marks, flattens the faces and helps produce square, parallel timber.",
      "Choose the largest edge with the fewest defects to become the face side.",
      "Place this face up in the vice.",
      "Use a jack plane to remove saw marks and create a flat clean surface.",
      "The surface should be free from twist, hollows and rounded ends.",
      "Check flatness along the length and across the width with a straight edge or the sole edge of the plane.",
      "Use winding sticks to check whether the timber is twisted along its length.",
      "If one winding stick appears higher or lower than the other, the timber is in twist.",
      "Remove high spots by planing diagonally across them, then take a few longer shavings along the length.",
      "Keep checking until the winding sticks are parallel.",
      "Once the first true face is complete, mark it with a face mark as the reference side."
    ],
    "commonMistakes": [
      "Starting from a poor face with defects instead of the best available side.",
      "Ignoring planing allowance when working to finished size.",
      "Not checking for twist with winding sticks.",
      "Only planing along the length and not removing high spots properly.",
      "Forgetting to mark the finished face side."
    ],
    "miniCheck": [
      {
        "question": "How much planing allowance is allowed per face?",
        "answer": "3 mm per face."
      },
      {
        "question": "What tool is used to check for twist in timber?",
        "answer": "Winding sticks."
      },
      {
        "question": "What is the first true surface called after planing?",
        "answer": "The face side."
      }
    ]
  },
  {
    "id": "carpentry-paring-and-checking-a-hinge-recess",
    "title": "Paring a Recess and Checking the Fit",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 13,
    "keywords": [
      "paring",
      "hinge recess",
      "gauge lines",
      "shear cut",
      "tight fit"
    ],
    "examFocus": [
      "Understand how to finish a recess accurately",
      "Know why a shear cut gives a better finish",
      "Recognise the importance of checking the fit"
    ],
    "keyPoints": [
      "Pare carefully back to the gauge lines to bring the recess to its final size.",
      "Use controlled cuts to avoid removing too much material.",
      "A slight angled paring cut, known as a shear cut, gives a cleaner finish.",
      "The recess should be neat and accurate so the hinge fits tightly.",
      "Always test the hinge in the recess after paring."
    ],
    "commonMistakes": [
      "Paring past the gauge lines.",
      "Taking off too much material and making the recess loose.",
      "Using straight heavy cuts instead of a controlled shear cut.",
      "Not checking the hinge fit before finishing."
    ],
    "miniCheck": [
      {
        "question": "What line should you pare back to?",
        "answer": "The gauge lines."
      },
      {
        "question": "What type of cut helps give a better finish when paring?",
        "answer": "A shear cut."
      },
      {
        "question": "What should you do after paring the recess?",
        "answer": "Check that the hinge fits."
      }
    ]
  },
  {
    "id": "carpentry-forming-a-mortice-by-hand",
    "title": "Forming a Mortice by Hand",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 14,
    "keywords": [
      "mortice",
      "chisel",
      "mallet",
      "waste removal",
      "whiskers"
    ],
    "examFocus": [
      "Understand the correct sequence for cutting a mortice",
      "Know how to remove waste without splitting the timber",
      "Recognise how to clean and finish the mortice accurately"
    ],
    "keyPoints": [
      "Start at the end furthest from you and work towards the other end.",
      "Hold the flat side of the chisel vertical against the marking-out line.",
      "Strike the chisel handle with a mallet to begin cutting the mortice.",
      "Turn the chisel and repeat the process as you move along the mortice.",
      "After each strike, lever the chisel forward to break the grain and loosen the waste.",
      "Cut only slightly more than halfway through from one side.",
      "Turn the timber over and repeat from the other side.",
      "Do not drive the chisel all the way through from one side, as this can split the timber.",
      "Clean out the ends of the joint carefully.",
      "After cutting from both sides, clear the mortice with a blunt tool such as a rule or the end of a combination square.",
      "Make the back of the mortice slightly wider to provide a starting point for wedges.",
      "Once the waste is removed, place the mortice on the bench and clean away any whiskers.",
      "Whiskers are small fibres left after cutting and can stop the joint fitting properly.",
      "Do not make the mortice wider than needed when cleaning it out."
    ],
    "commonMistakes": [
      "Starting at the wrong end and losing control of the cut.",
      "Cutting right through from one side and splitting the timber.",
      "Removing too much material and making the mortice too wide.",
      "Leaving whiskers in the joint.",
      "Failing to widen the back of the mortice slightly for wedges."
    ],
    "miniCheck": [
      {
        "question": "How far should you chop before turning the timber over?",
        "answer": "Just over halfway through."
      },
      {
        "question": "Why should you not chop right through from one side?",
        "answer": "Because it can split the wood."
      },
      {
        "question": "What are whiskers?",
        "answer": "Small wood fibres left after cutting the joint."
      }
    ]
  },
  {
    "id": "carpentry-grinding-ppe-and-sharpening-stones",
    "title": "Grinding Safety and Sharpening Stones",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 15,
    "keywords": [
      "grindstone PPE",
      "oil stone",
      "water stone",
      "diamond stone",
      "sharpening safety"
    ],
    "examFocus": [
      "Know the minimum PPE needed when using a grindstone",
      "Understand the main types of sharpening stone",
      "Recognise the advantages and limits of each sharpening stone"
    ],
    "keyPoints": [
      "When using a grindstone, wear safety glasses even if the machine has a safety screen.",
      "Use barrier cream or protective gloves for your hands.",
      "Wear a face mask, especially during dry grinding.",
      "Wear protective clothing such as an apron or overalls.",
      "Before grinding, have coolant ready so the plane iron or chisel can be dipped and kept cool.",
      "Grinding sets the iron or chisel to 25°, then honing sharpens it to 30°.",
      "Sharpening can be done on an oil stone, water stone or diamond stone.",
      "Oil stones are the most common sharpening stones.",
      "Oil stones can be natural or man-made.",
      "Man-made oil stones are often aluminium oxide stones, commonly called India stones.",
      "Natural oil stones are often called Washita stones.",
      "Many man-made oil stones are double-sided, usually with medium grit on one side and fine grit on the other.",
      "Fine grit is the side most often used.",
      "Oil stones are fragile and should be stored in a wooden box.",
      "Oil stones need light machine oil as a lubricant.",
      "Water stones look similar to oil stones and are made from natural stone.",
      "Water stones remove less metal and polish while sharpening, giving a very sharp edge.",
      "Water stones can be used with water or oil, but once oil is used they cannot go back to water.",
      "Oil and water stones wear hollow and need regular flattening.",
      "Diamond stones are popular, especially with site carpenters.",
      "Diamond stones usually cost more at first but need very little maintenance.",
      "Their surface stays flat and they are less likely to break.",
      "Diamond stones can cut quickly and are available in different grit grades.",
      "Diamond stones should be used with water, often applied as a spray mist, and wiped clean after use."
    ],
    "commonMistakes": [
      "Using a grindstone without the correct PPE.",
      "Grinding without coolant and overheating the cutting edge.",
      "Using the wrong lubricant on a sharpening stone.",
      "Using a water stone with oil and expecting to return to water later.",
      "Ignoring wear and hollowing on oil or water stones."
    ],
    "miniCheck": [
      {
        "question": "What angle is the iron or chisel ground to before honing?",
        "answer": "25°."
      },
      {
        "question": "Which sharpening stone stays flat and needs little maintenance?",
        "answer": "Diamond stone."
      },
      {
        "question": "What lubricant is used on an oil stone?",
        "answer": "Light machine oil."
      }
    ]
  },
  {
    "id": "carpentry-honing-plane-irons-and-chisels",
    "title": "Honing Plane Irons and Chisels",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 16,
    "keywords": [
      "honing",
      "plane iron",
      "30 degree angle",
      "regrinding",
      "sharpening process"
    ],
    "examFocus": [
      "Understand the difference between grinding and honing angles",
      "Know when an iron needs regrinding",
      "Recognise the first stages of the honing process"
    ],
    "keyPoints": [
      "After grinding to 25°, the iron or chisel is honed to 30°.",
      "Honing is done by rubbing the iron on the sharpening stone at the front edge of the grinding angle.",
      "This changes the front edge from the 25° grinding angle to a 30° sharpening angle.",
      "Repeated honing gradually increases the length of the 30° sharpening angle.",
      "When the sharpening angle becomes too long, the iron must be reground.",
      "Regrinding is needed when the honed area reaches about half the length of the original grinding angle.",
      "The honing process starts by lubricating the stone with the correct lubricant, either thin oil or water.",
      "Place the iron on the stone point first.",
      "Slowly lower the iron until the grinding angle sits flat on the stone.",
      "You can usually tell it is flat when the lubricant moves out at the back and the iron feels firmly seated on the stone."
    ],
    "commonMistakes": [
      "Trying to hone without first setting the iron flat on the stone.",
      "Using the wrong angle when honing.",
      "Letting the honed edge grow too long before regrinding.",
      "Forgetting to lubricate the stone before sharpening."
    ],
    "miniCheck": [
      {
        "question": "What angle is used for honing?",
        "answer": "30°."
      },
      {
        "question": "When should the iron be reground?",
        "answer": "When the sharpening angle becomes about half the length of the original grinding angle."
      },
      {
        "question": "How is the iron first placed on the sharpening stone?",
        "answer": "Point first."
      }
    ]
  },
  {
    "id": "carpentry-drill-bits-for-boring-and-fixings",
    "title": "Common Drill Bits and Their Uses",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 17,
    "keywords": [
      "flat bit",
      "spade bit",
      "counter bore drill",
      "plug cutter",
      "hole saw"
    ],
    "examFocus": [
      "Identify common drill bits and their uses",
      "Know which drill bits are used for large holes and concealed fixings",
      "Recognise the type of drill used with these bits"
    ],
    "keyPoints": [
      "A flat or spade bit is used to bore larger holes in softwood where a neat finish is not important.",
      "Flat or spade bits are available in sizes from 6 mm to 50 mm.",
      "A drill and counter bore is a combined bit.",
      "It drills a clearance hole for the screw and a wider hole for a wooden plug.",
      "This allows the screw fixing to be hidden after the plug is inserted.",
      "Plug cutters are used to make wooden plugs for counterbored holes.",
      "Common plug cutter sizes are 10 mm, 13 mm and 16 mm.",
      "A hole saw is used to bore large holes, usually through thinner materials.",
      "Hole saws are useful for running services through pre-fixed kitchen units.",
      "Hole saw sizes range from 16 mm to 152 mm.",
      "All of these bits are used with a power drill."
    ],
    "commonMistakes": [
      "Using a flat bit where a clean finish is needed.",
      "Forgetting that a counter bore drill makes space for both the screw and the plug.",
      "Using the wrong size plug cutter for the counterbored hole.",
      "Choosing the wrong bit for a large hole."
    ],
    "miniCheck": [
      {
        "question": "Which bit is used for large holes in softwood where finish is not important?",
        "answer": "A flat or spade bit."
      },
      {
        "question": "What is a plug cutter used for?",
        "answer": "To make wooden plugs that hide screw fixings."
      },
      {
        "question": "What type of drill is used with these bits?",
        "answer": "A power drill."
      }
    ]
  },
  {
    "id": "carpentry-screwdrivers-and-screw-heads",
    "title": "Screwdrivers, Screw Heads and Safe Use",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 18,
    "keywords": [
      "screwdrivers",
      "Pozidriv",
      "Phillips",
      "Yankee screwdriver",
      "torque"
    ],
    "examFocus": [
      "Identify common screw head types",
      "Understand how Pozidriv differs from Phillips",
      "Know the safe use of spiral or pump action screwdrivers"
    ],
    "keyPoints": [
      "Screwdrivers must match the type and size of the screw head.",
      "Common screw head types include slotted, Phillips, Pozidriv, Torx, security T and hexagon.",
      "Pozidriv is the most common screw head type.",
      "Pozidriv is an improved version of the Phillips head.",
      "The difference is that Pozidriv has extra smaller ribs set at 45° to the main slots.",
      "Pozidriv driver sizes are 1, 2 and 3.",
      "Size 1 is generally used for 3.0 gauge screws.",
      "Size 2 is generally used for 3.5 to 4.5 gauge screws.",
      "Size 3 is generally used for 5 and 6 gauge screws.",
      "Some screw manufacturers make their own special driver bits for their screws.",
      "Most screws are now driven with powered drivers, often with an impact action.",
      "Modern hand screwdrivers usually have plastic soft-grip handles.",
      "Spiral or pump action screwdrivers are used less today but can still be useful.",
      "A Yankee screwdriver is a type of spiral pump action screwdriver.",
      "Larger Yankee screwdrivers are used with larger screws because they can apply high torque.",
      "Torque means the turning force used to rotate an object.",
      "The bits in a Yankee screwdriver can be changed to suit different screw heads and sizes.",
      "When using a spiral or pump action screwdriver at height, a slipping bit can make you lose balance.",
      "These screwdrivers can easily jump out of the screw head if pumped too quickly.",
      "They are especially difficult to use with slotted screws."
    ],
    "commonMistakes": [
      "Using the wrong screwdriver size for the screw head.",
      "Confusing Phillips and Pozidriv heads.",
      "Pumping a spiral screwdriver too quickly and slipping out of the screw head.",
      "Using pump action screwdrivers carelessly while working at height."
    ],
    "miniCheck": [
      {
        "question": "What is the most common screw head type?",
        "answer": "Pozidriv."
      },
      {
        "question": "What extra feature does a Pozidriv head have compared with Phillips?",
        "answer": "Smaller ribs at 45° to the main slots."
      },
      {
        "question": "What does torque mean?",
        "answer": "The turning force used to rotate an object."
      }
    ]
  },
  {
    "id": "carpentry-trestles-and-adhesive-basics",
    "title": "Trestles, Sawhorses and Common Adhesives",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 19,
    "keywords": [
      "trestles",
      "sawhorses",
      "temporary workbench",
      "PVA glue",
      "PU glue"
    ],
    "examFocus": [
      "Understand how trestles and sawhorses support safe working",
      "Know the main properties of common carpentry adhesives",
      "Recognise where different adhesives are typically used"
    ],
    "keyPoints": [
      "Materials must be supported properly for storage and while being worked on.",
      "Strong trestles or sawhorses can support materials safely and accurately.",
      "Trestles can be turned into a temporary workbench by laying plywood or similar boards across them.",
      "Solid supports help with jobs such as cutting worktops and using hand or power tools.",
      "Modern trestles are strong, stable and often fold flat for easy transport.",
      "Traditional sawhorses are homemade supports used for similar purposes.",
      "PVA glue is water-based and dries as the water evaporates.",
      "PVA is available in internal and external grades.",
      "PVA gives a strong permanent bond and fills gaps well.",
      "PVA dries clear but can leave marks if not cleaned off before varnishing or staining.",
      "PVA can react with some hardwoods and leave black marks or joints.",
      "PU glue foams when exposed to air and forms a strong water-resistant bond.",
      "PU glue has very good gap-filling properties and can be used on damp timber.",
      "Timber must be held firmly while PU glue sets or the foam can push the joint apart.",
      "Excess PU glue should only be scraped off after it has dried.",
      "Disposable gloves should always be worn when using PU glue.",
      "UF glue is mixed with water before use and sets by chemical reaction.",
      "UF glue forms a strong water-resistant bond and is used for high-quality work.",
      "UF glue does not stain the timber being joined."
    ],
    "commonMistakes": [
      "Working on unsupported material.",
      "Using weak or unstable trestles.",
      "Not securing timber while PU glue expands.",
      "Trying to wipe off PU glue before it has dried.",
      "Leaving PVA residue on timber before finishing."
    ],
    "miniCheck": [
      {
        "question": "How can trestles be turned into a temporary workbench?",
        "answer": "By placing plywood or a similar board across them."
      },
      {
        "question": "What can happen if PU glue is used without securing the joint?",
        "answer": "The foaming glue can force the joint apart."
      },
      {
        "question": "Which glue is often used for high-quality work because it does not stain timber?",
        "answer": "UF glue."
      }
    ]
  },
  {
    "id": "carpentry-site-adhesives-and-tool-storage",
    "title": "Site Adhesives and Safe Tool Storage",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 20,
    "keywords": [
      "grab adhesive",
      "contact adhesive",
      "fixing foam",
      "tool storage",
      "storage tote"
    ],
    "examFocus": [
      "Know the uses of site adhesives and fixing foams",
      "Understand safe storage and transport of hand tools",
      "Recognise ways to reduce damage and rust during transport"
    ],
    "keyPoints": [
      "Synthetic resin grab adhesive comes in a tube and is applied with a skeleton gun.",
      "Grab adhesive is mainly used on site for fixing items such as panels and skirting to walls.",
      "Some grab adhesives form a skin quickly when exposed to air, which can reduce bonding.",
      "Some grab adhesives are very thick and may leave a visible gap in the joint.",
      "Contact adhesive, super glue or mitre bond is a fast-setting adhesive.",
      "It is used for items such as cornices, pelmets, plinths and skirting boards.",
      "A thin layer is applied to one surface and an activator spray to the other.",
      "The parts are then brought together and held for about 15 seconds.",
      "Polyurethane fixing foam is widely used on site for fixing frames such as doors, windows and linings.",
      "It has similar bonding properties to PU glue but is applied with an applicator gun.",
      "Expanding foam adhesive fills and bonds many different materials and surfaces.",
      "Different foam grades may also provide sound insulation, heat insulation or fire resistance.",
      "Hand tools are expensive and last longer if stored and transported carefully.",
      "Bench joiners often store tools in tool chests, which may be wooden, metal or plastic.",
      "Site joiners need storage that allows safe, quick and easy transport and access.",
      "Van storage may include racking, storage boxes, lighting and power points.",
      "Poor tool storage can damage tools and create a safety hazard during transport.",
      "Silica gel packs can help prevent rust during storage.",
      "Tools are commonly moved from the van to the work area in tool bags or tool trolleys.",
      "A storage tote is a lightweight open tool bag that is useful but limited in the number and size of tools it can carry."
    ],
    "commonMistakes": [
      "Using grab adhesive without considering skinning or joint gaps.",
      "Not holding mitre bond joints together long enough to set.",
      "Using poor storage that allows tools to move around during transport.",
      "Ignoring rust prevention during storage.",
      "Overloading a storage tote with too many or oversized tools."
    ],
    "miniCheck": [
      {
        "question": "What is grab adhesive commonly used for on site?",
        "answer": "Fixing items like panels and skirting to walls."
      },
      {
        "question": "How long is contact adhesive or mitre bond typically held to form a bond?",
        "answer": "About 15 seconds."
      },
      {
        "question": "What can be used in storage to help stop tools from rusting?",
        "answer": "Silica gel packs."
      }
    ]
  },
  {
    "id": "carpentry-rules-measuring-and-dividing",
    "title": "Rules for measuring and setting out",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 1,
    "keywords": ["steel rule", "scale rule", "folding rule", "measuring", "equal divisions", "setting out"],
    "examFocus": [
      "Know what different rules are used for",
      "Understand why steel rules are useful for accurate work",
      "Learn how to divide a measurement into equal parts"
    ],
    "keyPoints": [
      "A steel rule is used for accurate measuring and drawing straight lines over short distances.",
      "Steel rules come in different lengths, from 150 mm to 2000 mm.",
      "Scale rules are used for reading scaled drawings and producing them.",
      "Taking sizes directly from scaled drawings can be inaccurate, especially on larger scales.",
      "Drawings should show written dimensions instead of relying only on scale measurements.",
      "Folding 1 m rules were common in the past, usually made from timber or plastic.",
      "Folding rules are bulky, so they are used less often today.",
      "A steel rule can also help divide timber into equal parts.",
      "To split an awkward size into equal sections, place the rule at an angle and use a number that divides easily.",
      "Example: if a 70 mm width needs 3 equal divisions, angle the rule so 75 mm fits across the width, then mark at 25 mm intervals."
    ],
    "commonMistakes": [
      "Relying on scaled drawings instead of written dimensions.",
      "Using a bulky folding rule where a steel rule is more practical.",
      "Trying to divide awkward measurements directly instead of using the angled rule method."
    ],
    "miniCheck": [
      {
        "question": "What is a steel rule mainly used for?",
        "answer": "Accurate measuring and marking straight lines over short distances."
      },
      {
        "question": "Why can scale rules be unreliable for taking measurements?",
        "answer": "Because measurements taken from scaled drawings can be inaccurate, especially on larger scales."
      },
      {
        "question": "How can you divide a difficult measurement into equal parts with a steel rule?",
        "answer": "Angle the rule across the material and use a number that divides easily."
      }
    ]
  },
  {
    "id": "carpentry-levels-types-and-uses",
    "title": "Levels and checking lines",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 2,
    "keywords": ["level", "spirit level", "laser level", "inclinometer", "water level", "horizontal", "vertical"],
    "examFocus": [
      "Know the purpose of levels in carpentry and joinery",
      "Recognise the different types of level",
      "Understand how to check a spirit level is accurate"
    ],
    "keyPoints": [
      "Levels are used to check angles, mainly horizontal and vertical lines.",
      "Horizontal means flat and level.",
      "Vertical means straight up and down, like a plumb line.",
      "A spirit level shows level or upright positions when the bubble sits between the marks.",
      "Spirit levels can give false readings if damaged or knocked out of level.",
      "To test a spirit level, mark a line with it, turn it end for end, and test again.",
      "If the second line does not match the first, the level is inaccurate and should be replaced.",
      "Laser levels can project horizontal and vertical lines around a room.",
      "Better laser levels are self-levelling and work over longer distances.",
      "Laser levels are often used for setting out stud walls, kitchens and dado rails.",
      "Inclinometers can measure and transfer any angle.",
      "Water levels use water inside connected tubing to transfer level points, but they are used less often today."
    ],
    "commonMistakes": [
      "Using a damaged spirit level without checking it first.",
      "Thinking all levels only check horizontal lines.",
      "Choosing older or less suitable tools when a laser level would be more efficient."
    ],
    "miniCheck": [
      {
        "question": "What does it mean if the bubble is centered in a spirit level?",
        "answer": "The surface or line is level or vertical, depending on how the tool is positioned."
      },
      {
        "question": "How do you check if a spirit level is accurate?",
        "answer": "Mark a level line, turn the level end for end, and check whether the new line matches."
      },
      {
        "question": "What is an inclinometer used for?",
        "answer": "Measuring and transferring any angle."
      }
    ]
  },
  {
    "id": "carpentry-bisecting-angles-with-compass",
    "title": "Bisecting an angle with a compass",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 3,
    "keywords": ["bisecting", "angle", "compass", "arcs", "setting out", "skirting boards"],
    "examFocus": [
      "Understand what bisecting an angle means",
      "Know the basic steps for bisecting an angle with a compass",
      "Recognise where this method is useful in carpentry work"
    ],
    "keyPoints": [
      "Bisecting means splitting an angle into two equal parts.",
      "Start by drawing the angle you need to divide.",
      "Use a compass to mark the same distance along both sides of the angle.",
      "From each of those points, draw arcs with the compass set to the same width.",
      "Do not change the compass setting while drawing the second pair of arcs.",
      "The two arcs will cross at one point.",
      "Draw a line from the corner of the angle through the crossing point.",
      "That line is the angle bisector.",
      "This method is useful when working out cutting angles.",
      "It is especially helpful when fitting skirting boards."
    ],
    "commonMistakes": [
      "Changing the compass width during the construction.",
      "Marking different distances on each side of the angle.",
      "Drawing the final line to the wrong point instead of the arc intersection."
    ],
    "miniCheck": [
      {
        "question": "What does it mean to bisect an angle?",
        "answer": "To divide it into two equal angles."
      },
      {
        "question": "Should the compass setting be changed when drawing the second pair of arcs?",
        "answer": "No."
      },
      {
        "question": "What is the final step when bisecting an angle?",
        "answer": "Draw a line from the angle corner through the point where the arcs cross."
      }
    ]
  },
  {
    "id": "carpentry-gauges-for-marking-out",
    "title": "Gauges used for marking out",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 4,
    "keywords": ["marking gauge", "mortice gauge", "combination gauge", "cutting gauge", "parallel lines", "marking out"],
    "examFocus": [
      "Know the purpose of common gauges",
      "Recognise the differences between marking, mortice, combination and cutting gauges",
      "Understand why gauges improve accuracy when marking out"
    ],
    "keyPoints": [
      "A marking gauge is used to mark a line parallel to an edge.",
      "It is useful for setting out joints and hinge recesses.",
      "Better-quality marking gauges often have brass wear strips to protect the stock.",
      "A mortice gauge has two pins, one fixed and one adjustable.",
      "It is mainly used for marking mortices and tenons.",
      "A mortice gauge can also mark any two parallel lines.",
      "Both pins on a mortice gauge must stay at the same height for equal line depth.",
      "A combination gauge has one side with a single pin and the other with two pins.",
      "It does the job of both a marking gauge and a mortice gauge.",
      "Some combination gauges have a fine adjustment screw for setting the pin gap.",
      "Pin points must be kept sharp for accurate marking.",
      "A cutting gauge uses a knife instead of a pin.",
      "It gives a cleaner line across the grain by cutting the timber fibres instead of tearing them.",
      "A cutting gauge is especially useful for marking dovetails.",
      "Using gauges is usually more accurate and faster than measuring each line with a rule or tape."
    ],
    "commonMistakes": [
      "Using blunt pins and getting unclear marking lines.",
      "Letting mortice gauge pins sit at different heights.",
      "Using a pin gauge across the grain when a cutting gauge would give a cleaner result."
    ],
    "miniCheck": [
      {
        "question": "What is a marking gauge used for?",
        "answer": "Marking a line parallel to an edge."
      },
      {
        "question": "Why is a cutting gauge better across the grain?",
        "answer": "Because the knife cuts the fibres cleanly instead of tearing them."
      },
      {
        "question": "What is the main use of a mortice gauge?",
        "answer": "Marking mortices and tenons."
      }
    ]
  },
  {
    "id": "carpentry-fine-and-specialist-handsaws",
    "title": "Fine and specialist handsaws",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 5,
    "keywords": ["dovetail saw", "gents saw", "coping saw", "mitre saw", "pad saw", "Japanese handsaw"],
    "examFocus": [
      "Recognise different fine and specialist handsaws",
      "Know the main use of each saw",
      "Understand the limits and care needed with these tools"
    ],
    "keyPoints": [
      "A dovetail saw is a small backed saw used for fine joinery, especially dovetail joints.",
      "It has more teeth than a tenon saw, about 15 teeth per 25 mm, for a finer cut.",
      "Its blade is thin, so it can be damaged if used on work that is too large.",
      "A gents saw is an even finer backed saw with a turned handle.",
      "It is made for delicate, detailed work only.",
      "A coping saw has a narrow blade held under tension in a metal frame.",
      "It is used for removing waste from dovetail and bridle joints.",
      "It is also useful for curved cuts and scribing mouldings such as skirting and dado rails.",
      "The size of cut a coping saw can make is limited by the depth of its frame.",
      "Blade tension should be released after use to avoid stressing the blade and frame.",
      "A mitre saw or frame saw has a deeper hardened blade held in a frame.",
      "It is used for cutting mitres with preset angles, but is less common now because power tools usually do this job.",
      "A pad saw is useful for small internal cuts, shaped keyholes, plasterboard work and cutting holes.",
      "Its retractable blade can be adjusted for depth.",
      "A pad saw cuts on the forward stroke and the blade bends easily, so careful use is important.",
      "A Japanese handsaw gives a very fine, clean cut.",
      "It mainly cuts on the pull stroke, which keeps the thin blade in tension for straighter cutting.",
      "It is often used in workshop joinery where fine accuracy is needed.",
      "Japanese handsaws need careful use and storage to avoid damage."
    ],
    "commonMistakes": [
      "Using a dovetail or gents saw on timber that is too large or heavy for the blade.",
      "Forgetting to release coping saw blade tension after use.",
      "Bending a pad saw blade by forcing the cut.",
      "Storing a Japanese handsaw carelessly and damaging the blade."
    ],
    "miniCheck": [
      {
        "question": "What is a dovetail saw mainly used for?",
        "answer": "Fine work such as cutting dovetail joints."
      },
      {
        "question": "Why should blade tension be released on a coping saw after use?",
        "answer": "To prevent strain on the blade and frame."
      },
      {
        "question": "Which saw usually cuts on the pull stroke for a fine, straight cut?",
        "answer": "The Japanese handsaw."
      }
    ]
  },
  {
    "id": "carpentry-maintaining-handsaws",
    "title": "Maintaining handsaws",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 6,
    "keywords": ["handsaw maintenance", "sharpening", "saw doctor", "clamping", "saw care"],
    "examFocus": [
      "Understand basic care of handsaws",
      "Know why many tradespeople do not sharpen saws by hand",
      "Recognise the first step in preparing a saw for sharpening"
    ],
    "keyPoints": [
      "Many carpenters and joiners do not sharpen their own saws because the job is difficult and takes time.",
      "Blunt saws can be sent to a saw doctor for machine sharpening.",
      "Professional sharpening can be expensive.",
      "If a saw is away for sharpening, you may need another saw of the same type to keep working.",
      "This is one reason disposable saws are popular.",
      "A good quality saw that can be resharpened can last for many years if looked after properly.",
      "When preparing to sharpen a handsaw, clamp the saw securely with the teeth facing upward.",
      "The full length of the blade should be supported and held firmly.",
      "Timber can be used to hold the blade before clamping it in a vice.",
      "Not every sharpening stage is needed each time the saw is maintained."
    ],
    "commonMistakes": [
      "Trying to sharpen a saw without securing the blade properly.",
      "Using a blunt saw for too long instead of maintaining it.",
      "Assuming every maintenance job needs the full sharpening process."
    ],
    "miniCheck": [
      {
        "question": "Why do many tradespeople not sharpen their own saws?",
        "answer": "Because it is time-consuming and difficult."
      },
      {
        "question": "Who can sharpen a blunt saw on a machine?",
        "answer": "A saw doctor."
      },
      {
        "question": "How should a saw be positioned before sharpening?",
        "answer": "Clamped securely with the teeth facing upward."
      }
    ]
  },
  {
    "id": "carpentry-bench-hook-and-tenon-saw-use",
    "title": "Bench hook and controlled saw cuts",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 7,
    "keywords": ["bench hook", "tenon saw", "sawing support", "shoulder cut", "control", "accuracy"],
    "examFocus": [
      "Know the purpose of a bench hook",
      "Understand how support improves sawing accuracy",
      "Recognise the use of a tenon saw for shoulder cuts"
    ],
    "keyPoints": [
      "A bench hook is used to support timber while cutting by hand.",
      "It helps control the workpiece and makes sawing safer and more accurate.",
      "Good support reduces movement during the cut.",
      "Repositioning the timber can help complete a cut cleanly.",
      "A tenon saw is used for accurate joinery cuts.",
      "It is suitable for cutting down the shoulder of a tenon.",
      "Controlled cutting and correct support improve the finish.",
      "Using the right support tool helps prevent poor cuts and damage to the work."
    ],
    "commonMistakes": [
      "Trying to cut timber without supporting it properly.",
      "Letting the work move during the saw cut.",
      "Using poor control when cutting a tenon shoulder."
    ],
    "miniCheck": [
      {
        "question": "What is a bench hook used for?",
        "answer": "To support timber and improve control when sawing."
      },
      {
        "question": "Why is support important during hand sawing?",
        "answer": "It keeps the work steady and helps produce a more accurate cut."
      },
      {
        "question": "What type of cut is a tenon saw shown being used for?",
        "answer": "Cutting down the shoulder of a tenon."
      }
    ]
  },
  {
    "id": "carpentry-hand-held-planes-basics",
    "title": "Hand-held planes: purpose and main types",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 8,
    "keywords": ["hand plane", "bench plane", "specialist plane", "smoothing plane", "plane iron", "sole"],
    "examFocus": [
      "Understand what hand-held planes do",
      "Know the two main categories of hand-held planes",
      "Recognise common plane sizes and basic bench plane parts"
    ],
    "keyPoints": [
      "Hand-held planes remove wood in thin shavings and leave a smooth surface.",
      "Different planes are designed for different jobs.",
      "Some planes are made for curved surfaces, such as the compass plane and spokeshave.",
      "Other planes are designed to form profiles like grooves or rebates.",
      "Sharp, well-maintained planes give the best finish and are safer to use.",
      "Planes work best when set up correctly with a sharp plane iron.",
      "Planes are often identified by pattern number, which usually relates to plane length.",
      "A number 1 plane is very small, while a number 8 plane is very long.",
      "The most common smoothing planes are the number 4 and 4½.",
      "The number 4½ is the same length as the number 4 but is wider and heavier.",
      "Hand-held planes are grouped into two main types: bench planes and specialist planes.",
      "Bench planes are common tools and should be part of a standard carpentry tool kit.",
      "The type and size of plane needed depends on the work being done.",
      "Main bench plane parts include the toe, heel, sole, mouth, plane iron, frog, handle and adjustment controls.",
      "The sole of a plane can be used as a straight edge to check for hollows and high spots in timber."
    ],
    "commonMistakes": [
      "Using a plane with a blunt iron.",
      "Trying to plane timber with a poorly adjusted tool.",
      "Choosing the wrong type or size of plane for the task.",
      "Ignoring the sole of the plane as a quick way to check straightness."
    ],
    "miniCheck": [
      {
        "question": "What does a hand-held plane do?",
        "answer": "It removes thin shavings of wood to leave a smooth surface."
      },
      {
        "question": "What are the two main categories of hand-held planes?",
        "answer": "Bench planes and specialist planes."
      },
      {
        "question": "Which smoothing plane is wider and heavier, the number 4 or 4½?",
        "answer": "The number 4½."
      }
    ]
  },
  {
    "id": "carpentry-router-compass-and-spokeshave",
    "title": "Router planes, compass planes and spokeshaves",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 9,
    "keywords": ["router plane", "thumb router", "compass plane", "spokeshave", "curved surfaces", "ironmongery"],
    "examFocus": [
      "Know the use of router planes, compass planes and spokeshaves",
      "Understand which tools are used on curved work",
      "Recognise how grain direction affects planing"
    ],
    "keyPoints": [
      "Router planes come in two sizes.",
      "The small version is called a thumb router.",
      "A thumb router is useful for recessing ironmongery, such as a lock faceplate.",
      "The larger router plane is used to level the bottom of housings to a consistent depth.",
      "A compass plane is used to shape curved joinery accurately.",
      "Its sole can be adjusted to suit convex or concave curves.",
      "The compass plane is the only specialist plane fitted with a back iron.",
      "When planing curved timber, the grain direction changes along the curve.",
      "To avoid tearing the wood, the direction of planing must be changed as needed.",
      "A spokeshave is used to clean and smooth curved surfaces.",
      "A flat-bottom spokeshave is used on convex outside curves.",
      "A curved-bottom spokeshave is used on concave inside curves.",
      "A spokeshave should follow the grain as much as possible.",
      "Spokeshaves are difficult to master at first and need careful control.",
      "The cutting edge must be sharp and not set too deep.",
      "For best results, hold the spokeshave slightly at an angle so it slices across the fibres."
    ],
    "commonMistakes": [
      "Using the wrong spokeshave bottom for the shape being worked.",
      "Planing curved timber in one direction only and tearing the grain.",
      "Setting the spokeshave iron too aggressively.",
      "Using a dull cutting edge on curved work."
    ],
    "miniCheck": [
      {
        "question": "What is a thumb router mainly used for?",
        "answer": "Letting in ironmongery such as a lock faceplate."
      },
      {
        "question": "Which spokeshave is used on concave internal curves?",
        "answer": "A curved-bottom spokeshave."
      },
      {
        "question": "Why must the planing direction be changed on curved timber?",
        "answer": "To avoid tearing the grain."
      }
    ]
  },
  {
    "id": "carpentry-maintaining-planes-and-frog-adjustment",
    "title": "Maintaining planes and setting the frog",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 10,
    "keywords": ["plane maintenance", "plane iron", "sole", "frog", "mouth gap", "adjustment"],
    "examFocus": [
      "Understand why plane maintenance matters",
      "Know how to check and flatten the sole",
      "Learn the purpose of frog adjustment and mouth gap settings"
    ],
    "keyPoints": [
      "A plane works best when the body and cutting iron are sharp, clean and set correctly.",
      "Small defects can reduce performance and spoil the finish.",
      "A sharp iron that is badly set can still give poor results.",
      "The sole of the plane must be kept clean and free from damage.",
      "Nicks, twist or high spots on the sole will stop the plane working properly.",
      "To flatten the sole, place fine emery paper or 180 to 240 grit abrasive paper on a flat surface such as MDF or glass.",
      "Remove the cutting iron before rubbing the plane on the abrasive surface.",
      "High spots wear first, making hollows easy to identify.",
      "When the whole sole is flat, clean the plane and continue with the next stage.",
      "The frog holds the cutting iron and can be adjusted.",
      "Adjusting the frog changes the size of the mouth gap.",
      "Use a larger mouth gap for damp timber and rough preparation work.",
      "Use a smaller mouth gap for fine smoothing and end grain planing.",
      "Before adjusting the frog, slacken the two fixing screws.",
      "After setting the frog, tighten the screws and make sure the frog is not twisted.",
      "If the frog is twisted, the cutting iron will sit at an angle in the plane."
    ],
    "commonMistakes": [
      "Using a plane with a damaged or uneven sole.",
      "Trying to adjust the frog without loosening the fixing screws first.",
      "Using the wrong mouth gap for the type of work.",
      "Leaving the frog twisted so the iron sits unevenly."
    ],
    "miniCheck": [
      {
        "question": "Why must the sole of a plane be flat?",
        "answer": "So the plane performs properly and leaves a smooth flat surface."
      },
      {
        "question": "What mouth gap is better for fine smoothing work?",
        "answer": "A small mouth gap."
      },
      {
        "question": "What should you do before adjusting the frog?",
        "answer": "Loosen the two frog fixing screws."
      }
    ]
  },
  {
    "id": "carpentry-planing-to-width-and-thickness",
    "title": "Planing timber to width and thickness",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 11,
    "keywords": ["face edge", "face side", "marking gauge", "planing", "width", "thickness"],
    "examFocus": [
      "Understand how timber is planed to size",
      "Know how face side and face edge are formed and marked",
      "Recognise how marking gauges are used to control width and thickness"
    ],
    "keyPoints": [
      "After one face is prepared, plane one edge straight and square to that face.",
      "Check the edge with a straight edge or the sole of the plane, and use a try square or combination square to test for square.",
      "Once finished, this edge becomes the face edge and should be marked.",
      "Mark the required width from the face edge using a marking gauge.",
      "Gauge both sides of the timber before planing.",
      "Place the timber in the vice with the gauge lines facing up and plane down carefully to the lines.",
      "Keep checking both ends so the new edge stays parallel and straight.",
      "Mark the required thickness from the face side using a marking gauge.",
      "Gauge both edges before removing material.",
      "Plane the waste side down to the gauge lines without going past them.",
      "Working from the face side and face edge helps keep the timber accurate.",
      "Careful planing and regular checking are needed to keep the timber to size."
    ],
    "commonMistakes": [
      "Not checking that the face edge is square to the face side.",
      "Planing past the gauge lines.",
      "Failing to keep the edge parallel when planing to width.",
      "Marking from the wrong reference face or edge."
    ],
    "miniCheck": [
      {
        "question": "What is the face edge?",
        "answer": "The straight, square edge planed true to the face side."
      },
      {
        "question": "What tool is used to mark the finished width and thickness?",
        "answer": "A marking gauge."
      },
      {
        "question": "What should you avoid when planing down to gauge lines?",
        "answer": "Going past the lines."
      }
    ]
  },
  {
    "id": "carpentry-planing-end-grain-and-flushing-frames",
    "title": "Planing end grain and flushing frame shoulders",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 12,
    "keywords": ["end grain", "spelching", "shooting board", "sacrificial timber", "flushing", "shoulders"],
    "examFocus": [
      "Understand the difficulty of planing end grain",
      "Know how to prevent spelching",
      "Recognise how shoulder joints are flushed flat on an assembled frame"
    ],
    "keyPoints": [
      "Planing end grain is harder than planing with the grain.",
      "A finer plane setting is usually needed for end grain work.",
      "More forward pressure is needed to stop the plane juddering and leaving a rough finish.",
      "If the far edge is unsupported, the timber can break out.",
      "This breakout is called spelching.",
      "One way to prevent spelching is to plane from both ends toward the centre.",
      "A shooting board can also be used to support the far edge and help square the end grain.",
      "Another method is to clamp a sacrificial piece of timber to the far edge.",
      "Flushing shoulders means levelling the shoulders of joints with a smoothing plane.",
      "The edge of the plane can be used to find high spots.",
      "High areas are removed gradually using a circular planing motion until the surface is flat.",
      "Take care not to over-plane the frame corners, or they will become rounded.",
      "Do not let the front or back of the plane drop inside the frame edge while working."
    ],
    "commonMistakes": [
      "Planing unsupported end grain and causing spelching.",
      "Using too coarse a setting on the plane for end grain.",
      "Over-planing the corners of a frame and rounding them off.",
      "Letting the plane tip into the inside edge of the frame."
    ],
    "miniCheck": [
      {
        "question": "What is spelching?",
        "answer": "Uncontrolled breakout of timber at the edge."
      },
      {
        "question": "Name one way to stop end grain from breaking out.",
        "answer": "Use a shooting board, clamp sacrificial timber, or plane from both ends to the centre."
      },
      {
        "question": "What does flushing shoulders mean?",
        "answer": "Levelling the shoulders of joints so the surface is flat."
      }
    ]
  },
  {
    "id": "carpentry-knives-and-their-uses",
    "title": "Utility knives and marking knives",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 13,
    "keywords": ["utility knife", "marking knife", "bench knife", "hinge marking", "accurate lines", "site tools"],
    "examFocus": [
      "Know the difference between a utility knife and a marking knife",
      "Understand the main use of each knife",
      "Recognise safety points linked to knife use"
    ],
    "keyPoints": [
      "Knives used in carpentry generally fall into two types: utility knives and marking knives.",
      "A utility knife has either a retractable blade or a folding blade.",
      "Its blade is disposable and extremely sharp.",
      "Utility knives are commonly used on site for cutting packaging, plastic banding and wrapping materials.",
      "This tool can only be bought by someone over 18 years old.",
      "A marking knife is mainly used as a bench knife, but it can also be used on site.",
      "It is often used to mark hinge positions on doors and frames.",
      "The blade is ground and sharpened on one side only.",
      "This lets the knife sit tightly against a square for accurate marking.",
      "A marking knife is used to mark or cut a light line across the grain.",
      "It is available in left-handed and right-handed versions.",
      "It is useful where very accurate lines are needed, such as for dovetails and high-quality joinery."
    ],
    "commonMistakes": [
      "Using a utility knife without proper care because the blade is very sharp.",
      "Using the wrong knife when a precise marking line is needed.",
      "Not choosing the correct left-handed or right-handed marking knife."
    ],
    "miniCheck": [
      {
        "question": "What are utility knives mainly used for on site?",
        "answer": "Cutting packaging, plastic banding and wrapping."
      },
      {
        "question": "Why is a marking knife ground on one side only?",
        "answer": "So it can sit tight against a square for accurate marking."
      },
      {
        "question": "What joinery task often uses a marking knife?",
        "answer": "Marking hinge positions or setting out dovetails."
      }
    ]
  },
  {
    "id": "carpentry-chisel-safety-and-cutting-recesses",
    "title": "Chisel safety and cutting a recess",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 14,
    "keywords": ["chisel", "recess", "hinge recess", "bevel edge chisel", "walking method", "safety"],
    "examFocus": [
      "Understand safe chisel use",
      "Know common jobs chisels are used for",
      "Learn the basic method for cutting a recess"
    ],
    "keyPoints": [
      "Both blunt and sharp chisels can be dangerous if used badly.",
      "The main safety rule is to keep both hands away from the cutting edge.",
      "Chisels are used for many tasks during construction.",
      "Common uses include easing joints, chopping hinge recesses, cleaning recesses, trimming packers, removing extra material and scraping off pencil marks.",
      "A bevel edge or firmer chisel is often used to cut a recess such as a hinge recess.",
      "First mark out the recess with marking gauges, a square and a marking knife.",
      "Start at the end of the marked area with the bevel facing toward you.",
      "Use a walking method to chop out the recess.",
      "After the first cut, hold the chisel at about 45 degrees.",
      "This lifts the grain and makes the waste easier to remove.",
      "For the final cut on the marked line, turn the chisel so the bevel faces away from you.",
      "The chisel should be vertical for the last cut to leave a clean edge."
    ],
    "commonMistakes": [
      "Letting a hand move in front of the chisel edge.",
      "Using a chisel without proper control.",
      "Failing to mark out the recess clearly before cutting.",
      "Using the wrong chisel angle when finishing the marked line."
    ],
    "miniCheck": [
      {
        "question": "What is the main safety rule when using a chisel?",
        "answer": "Keep both hands away from the cutting edge."
      },
      {
        "question": "What chisel is often used to cut a hinge recess?",
        "answer": "A bevel edge chisel or firmer chisel."
      },
      {
        "question": "How should the chisel be held for the final cut on the marking line?",
        "answer": "Vertical, with the bevel facing away from you."
      }
    ]
  },
  {
    "id": "carpentry-sharpening-plane-irons",
    "title": "Sharpening a plane iron",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 15,
    "keywords": ["plane iron", "sharpening stone", "30 degree angle", "burr", "jig", "sharpening motion"],
    "examFocus": [
      "Understand the basic method for sharpening a plane iron",
      "Know how the sharpening angle is formed",
      "Recognise when the iron is sharp enough and how to remove the burr"
    ],
    "keyPoints": [
      "Keep the point of the iron on the sharpening stone and raise the back slightly to form about a 30 degree sharpening angle.",
      "Only a small lift is needed to reach the correct angle.",
      "Move the iron back and forward on the stone using firm downward pressure.",
      "Use the full surface of the stone so it does not wear hollow in the middle.",
      "The sharpening motion can be done in a figure-of-eight pattern or long vee strokes.",
      "If the figure-of-eight motion is not controlled well, it can round the cutting edge.",
      "A sharpening jig can help hold the iron at the correct angle.",
      "Keep sharpening until the sharpening angle reaches the front edge and a small wire burr appears.",
      "The burr shows that the edge has been sharpened through fully.",
      "To remove the burr, place the flat back of the iron flat on the stone and rub it while keeping it level.",
      "Start with the burr overhanging the edge of the stone, then draw the edge onto the stone.",
      "Any remaining burr can be removed by moving the sharpened edge back and forward over a piece of cloth.",
      "Do not drag the cutting edge over the corner of timber, because trapped burr can damage the edge during use.",
      "After sharpening, clean the stone and store it safely."
    ],
    "commonMistakes": [
      "Lifting the iron too high and changing the sharpening angle.",
      "Only using the middle of the stone and wearing it hollow.",
      "Rounding the edge during figure-of-eight sharpening.",
      "Failing to remove the burr fully after sharpening."
    ],
    "miniCheck": [
      {
        "question": "What angle is the plane iron raised to for sharpening?",
        "answer": "About 30 degrees."
      },
      {
        "question": "What shows that the cutting edge has been sharpened through properly?",
        "answer": "A thin wire burr forms on the edge."
      },
      {
        "question": "How should the burr be removed from the back of the iron?",
        "answer": "Lay the back flat on the stone and rub it while keeping it flat."
      }
    ]
  },
  {
    "id": "carpentry-plane-iron-edges-and-sharpening-gouges",
    "title": "Plane iron edge shapes and sharpening gouges",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 16,
    "keywords": ["square edge", "slightly convex", "softened corners", "gouge sharpening", "slip stone", "scribing gouge"],
    "examFocus": [
      "Know the common cutting edge shapes used on plane irons",
      "Match edge shapes to the correct plane types",
      "Understand the basic method for sharpening gouges"
    ],
    "keyPoints": [
      "Plane irons are not always sharpened square across the edge.",
      "Different planes need different cutting edge shapes depending on the job.",
      "A square cutting edge is used on try, shoulder, rebate, bullnose, plough and router planes.",
      "A slightly convex edge is commonly used on block planes, jack planes and spokeshaves.",
      "Softened corners are used on smoothing planes.",
      "Softened corners help reduce plane marks on the finished surface.",
      "Gouges are sharpened differently from chisels and plane irons.",
      "A scribing gouge is ground on its inside face.",
      "The grinding wheel must have a suitable radius to match the curve of the gouge.",
      "The gouge is sharpened using a slip stone with a matching radius.",
      "The slip stone can be held in a vice while the gouge is moved over it.",
      "Or the gouge can be held steady while the slip stone is moved over the cutting edge."
    ],
    "commonMistakes": [
      "Sharpening every plane iron with the same edge shape.",
      "Using a square edge where softened corners or a slight curve are needed.",
      "Using the wrong radius stone when sharpening a gouge.",
      "Sharpening a gouge the same way as a flat chisel."
    ],
    "miniCheck": [
      {
        "question": "Which planes use a square cutting edge?",
        "answer": "Try, shoulder, rebate, bullnose, plough and router planes."
      },
      {
        "question": "Why do smoothing planes have softened corners?",
        "answer": "To reduce the risk of leaving plane marks on the timber."
      },
      {
        "question": "What type of stone is used to sharpen a gouge?",
        "answer": "A slip stone with a radius that matches the gouge."
      }
    ]
  },
  {
    "id": "carpentry-drill-bits-and-screw-holes",
    "title": "Drill bits, pilot holes and clearance holes",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 17,
    "keywords": ["drill bits", "clearance hole", "pilot hole", "countersink", "screws", "auger bit"],
    "examFocus": [
      "Understand the stages of preparing timber for screws",
      "Know how to choose pilot and clearance hole sizes",
      "Recognise how to avoid splintering when drilling through timber"
    ],
    "keyPoints": [
      "Traditionally, fixing two timber parts with screws involved three steps: drill the clearance hole, form the countersink, then drill the pilot hole.",
      "The clearance hole must match the screw size properly so the top piece pulls tightly onto the bottom piece.",
      "For metric screws, the clearance hole is the same size as the screw thickness.",
      "For metric screws, the pilot hole is half the screw thickness.",
      "Example: a 4 × 50 mm screw needs a 4 mm clearance hole and a 2 mm pilot hole.",
      "For imperial screws, half the screw gauge gives the clearance hole size in millimetres.",
      "For imperial screws, half of the clearance hole size gives the pilot hole size.",
      "Example: an 8 × 2 inch screw uses a 4 mm clearance hole and a 2 mm pilot hole.",
      "With modern easy-drive screws, pilot holes and countersinks are usually only needed in hardwoods or with large gauge screws.",
      "When drilling a large hole right through timber, mark the hole centre on both sides first.",
      "Drill until the point just breaks through the far side.",
      "Then finish the hole from the opposite side using the marked centre.",
      "This method helps prevent splintering on the back face."
    ],
    "commonMistakes": [
      "Using the wrong drill bit size for the screw.",
      "Skipping pilot holes in hardwood when they are needed.",
      "Drilling right through from one side and causing splintering on the back.",
      "Using the wrong method for metric and imperial screw sizes."
    ],
    "miniCheck": [
      {
        "question": "What are the three traditional stages before inserting a screw?",
        "answer": "Drill the clearance hole, form the countersink, then drill the pilot hole."
      },
      {
        "question": "What pilot hole is needed for a 4 mm metric screw?",
        "answer": "2 mm."
      },
      {
        "question": "How can you reduce splintering when drilling a large hole through timber?",
        "answer": "Mark both sides, drill until the point just comes through, then finish from the other side."
      }
    ]
  },
  {
    "id": "carpentry-sharpening-augers-and-using-hammers",
    "title": "Sharpening auger bits and using hammers",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 18,
    "keywords": ["auger bit", "sharpening", "claw hammer", "Warrington hammer", "pin hammer", "tool safety"],
    "examFocus": [
      "Know which drill bits are usually replaced rather than sharpened",
      "Understand the basic method for sharpening a traditional auger bit",
      "Recognise common hammer types and their uses"
    ],
    "keyPoints": [
      "Most twist bits, lip and spur bits, and some auger bits are treated as disposable.",
      "They are difficult to sharpen because the cutting area is small.",
      "Their low cost usually makes sharpening not worth the effort.",
      "Traditional auger bits such as Jennings and Irwin patterns can be sharpened with a small flat or triangular file.",
      "Clamp the auger stem in a vice with the cutting end held as low as possible to reduce vibration.",
      "File the top of the cutting edge, not the underside.",
      "Keep the original shape of the cutting edge and remove as little metal as possible.",
      "The spur should be filed on its inner edge, never the outside edge.",
      "The rounded shape of the spur should be kept.",
      "The spur must project past the flat cutting edge to work properly.",
      "When the spur wears back so it no longer projects beyond the cutter, the auger should be replaced.",
      "A claw hammer is used for driving nails, wedges, pins and dowels.",
      "A curved claw is used for pulling nails, while a straight claw is used for removing larger nails in framing work.",
      "A Warrington hammer is useful for small nails, pins and wedges.",
      "Its narrow pein helps start small nails without hitting your fingers.",
      "A pin hammer is a light hammer for small pins, but it is less common now because nail and pin guns are often used.",
      "Hammer faces should be kept clean so they do not slip or mark finished surfaces.",
      "Never strike two hammer faces together because the hardened faces can splinter."
    ],
    "commonMistakes": [
      "Trying to sharpen disposable drill bits without the right equipment.",
      "Filing the underside or outer edge of an auger spur.",
      "Using an auger after the spur no longer projects past the cutter.",
      "Using a dirty hammer face and marking the work.",
      "Hitting two hammer faces together."
    ],
    "miniCheck": [
      {
        "question": "Which edge of a traditional auger spur should be filed?",
        "answer": "The inner edge."
      },
      {
        "question": "When should a traditional auger bit be replaced?",
        "answer": "When the spur no longer sticks out past the flat cutting edge."
      },
      {
        "question": "What is a Warrington hammer mainly useful for?",
        "answer": "Starting and driving small nails, pins and wedges."
      }
    ]
  },
  {
    "id": "carpentry-tool-storage-and-organisation",
    "title": "Storing and organising hand tools",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 19,
    "keywords": ["tool chest", "tool safe", "tool trolley", "tool storage", "tool organisation", "sharp tools"],
    "examFocus": [
      "Know common ways to store and transport tools",
      "Understand why tool organisation matters",
      "Recognise how storage helps protect tools and equipment"
    ],
    "keyPoints": [
      "Bench joiners traditionally used wooden tool chests to store tools.",
      "These chests often had trays and compartments sized to fit specific tools.",
      "The lid was often used to store large saws.",
      "Tool safes are lockable steel boxes used to store tools securely in vans.",
      "They are usually fixed permanently inside the vehicle.",
      "Portable toolboxes and tool trolleys often include trays, drawers and compartments.",
      "Separate storage helps keep sharp tools away from other equipment.",
      "This makes tools easier to find and helps stop sharp edges from becoming blunt or damaging other items.",
      "Many tool trolleys have lift-off boxes.",
      "Lift-off sections make the load easier to carry when the trolley cannot be wheeled."
    ],
    "commonMistakes": [
      "Mixing sharp tools with other equipment.",
      "Storing tools loosely so edges become damaged or blunt.",
      "Using poor storage that makes tools hard to find quickly."
    ],
    "miniCheck": [
      {
        "question": "What is a tool safe usually made from?",
        "answer": "Lockable steel."
      },
      {
        "question": "Why should sharp-edged tools be stored separately?",
        "answer": "To protect the edges and prevent damage to other equipment."
      },
      {
        "question": "What is useful about a tool trolley with lift-off boxes?",
        "answer": "The load can be split and carried when the trolley cannot be wheeled."
      }
    ]
  },
  {
    "id": "carpentry-jack-plane-task-and-core-checks",
    "title": "Jack plane setup and practical checks",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 20,
    "keywords": ["jack plane", "plane iron", "grinding", "honing", "PPE", "safe working"],
    "examFocus": [
      "Understand the main stages of preparing and using a jack plane",
      "Know the checks expected in a practical task",
      "Recognise the importance of safe working and correct storage"
    ],
    "keyPoints": [
      "A practical jack plane task includes removing the iron assembly, grinding and honing the iron, refitting it and producing a smooth flat surface on softwood.",
      "Work should begin only after permission is given by the tutor or trainer.",
      "A completed risk assessment is required before starting the task.",
      "Correct PPE must be selected for grinding and honing work.",
      "Grinding equipment must be set up correctly with guards in place.",
      "The plane iron must be ground to the correct angle and shape without leaving a burr.",
      "The iron must then be honed on a diamond stone or oil stone to the correct angle and shape.",
      "All traces of burr must be removed after honing.",
      "The iron must be reassembled correctly with the backing iron and fitted back into the plane.",
      "The iron projection must be adjusted for smooth fine planing of softwood.",
      "The finished task should produce a smooth flat surface.",
      "After use, the plane must be stored safely with the iron retracted to prevent damage.",
      "All work must follow current health and safety rules and safe working practices."
    ],
    "commonMistakes": [
      "Starting work without permission or a risk assessment.",
      "Using grinding equipment without correct guarding.",
      "Leaving burr on the plane iron after honing.",
      "Setting the iron projection too deep for fine planing.",
      "Storing the plane without retracting the iron."
    ],
    "miniCheck": [
      {
        "question": "What must be selected before starting the jack plane task?",
        "answer": "The correct PPE."
      },
      {
        "question": "What should be removed after honing the plane iron?",
        "answer": "All traces of burr."
      },
      {
        "question": "How should the plane be stored after use?",
        "answer": "Safely, with the iron retracted."
      }
    ]
  },
  {
    "id": "carpentry-joinery-marking-tools-squares",
    "title": "Squares for Marking Out",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 1,
    "keywords": [
      "set square",
      "tee square",
      "combination square",
      "try square",
      "mitre square",
      "90 degree",
      "45 degree",
      "marking out"
    ],
    "examFocus": [
      "Know which square is used for 90° and 45° marking",
      "Understand why accurate marking out matters",
      "Recognise how a combination square improves on older squares"
    ],
    "keyPoints": [
      "Marking-out tools are used to set lines and angles accurately.",
      "Set squares and tee squares are commonly used with a drawing board.",
      "Using squares helps keep lines straight, parallel and accurate.",
      "Poor marking out can lead to an inaccurate finished job.",
      "A try square is used to mark a 90° angle.",
      "A mitre square is used to mark a 45° angle.",
      "A combination square can do both jobs and has an adjustable blade."
    ],
    "commonMistakes": [
      "Marking out without checking lines stay parallel.",
      "Using the wrong square for the angle needed.",
      "Assuming inaccurate setting out will not affect the finished work."
    ],
    "miniCheck": [
      {
        "question": "What angle does a try square mark?",
        "answer": "90°."
      },
      {
        "question": "What angle does a mitre square mark?",
        "answer": "45°."
      },
      {
        "question": "Why is accurate marking out important?",
        "answer": "Because poor setting out can make the finished job inaccurate."
      }
    ]
  },
  {
    "id": "carpentry-joinery-special-marking-tools",
    "title": "Checking and Using Special Marking Tools",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 2,
    "keywords": [
      "roofing square",
      "box square",
      "sliding bevel",
      "check square",
      "profiled timber",
      "stairs",
      "roofing work",
      "angle transfer"
    ],
    "examFocus": [
      "Know how to test whether a square is accurate",
      "Recognise the use of roofing squares, box squares and sliding bevels",
      "Understand when special marking tools are needed"
    ],
    "keyPoints": [
      "A square must be accurate to produce a true 90° angle.",
      "To test a square, mark a line against a straight timber edge, turn the square 180°, and check it against the same line.",
      "If both positions match the line, the square is accurate.",
      "A roofing square is used for large setting out, roofing and stair work.",
      "A batten can be fixed to a roofing square to act as a fence when setting out stairs.",
      "A box square is used to mark around profiled timber where ordinary squares are not suitable.",
      "A sliding bevel is used to set, measure and transfer angles.",
      "Sliding bevels are useful for roofing work and for setting out dovetails."
    ],
    "commonMistakes": [
      "Using a square without checking it is true.",
      "Trying to mark profiled timber with the wrong type of square.",
      "Allowing the sliding bevel blade to move before the angle is transferred."
    ],
    "miniCheck": [
      {
        "question": "How do you check if a square is accurate?",
        "answer": "Draw a line, turn the square 180°, and see if it still matches the same line."
      },
      {
        "question": "What is a roofing square mainly used for?",
        "answer": "Large setting out, roofing and staircase work."
      },
      {
        "question": "What is a sliding bevel used for?",
        "answer": "Measuring and transferring angles."
      }
    ]
  },
  {
    "id": "carpentry-joinery-mortice-gauge-setup",
    "title": "Setting and Using a Mortice Gauge",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 3,
    "keywords": [
      "mortice gauge",
      "mortice and tenon",
      "mortice chisel",
      "gauge pins",
      "marking out",
      "tram lines",
      "stock",
      "thumbscrew"
    ],
    "examFocus": [
      "Know how to set a mortice gauge for a mortice and tenon joint",
      "Understand how to centre the mortice in the timber",
      "Recognise correct gauge use to avoid marking errors"
    ],
    "keyPoints": [
      "Choose a mortice chisel that is close to one-third of the timber thickness.",
      "Set the gauge pins to match the width of the mortice chisel.",
      "Adjust the stock until the mortice is centred in the material.",
      "Check the centre by making small pin marks from both sides until they meet.",
      "Tighten the thumbscrew fully and check the setting again.",
      "The gauge pins must trail in the direction of travel.",
      "Hold the stock firmly against the timber when marking.",
      "The pins create light tram lines to show the position of the mortice or tenon.",
      "Start and stop within the marked lines to avoid unwanted scratches past the joint."
    ],
    "commonMistakes": [
      "Setting the pins to the wrong width.",
      "Failing to centre the mortice in the timber.",
      "Pushing or pulling the gauge with the pins facing the wrong way.",
      "Overshooting the marked lines and leaving visible marks."
    ],
    "miniCheck": [
      {
        "question": "What should the distance between the gauge pins match?",
        "answer": "The width of the mortice chisel."
      },
      {
        "question": "How do you check that the mortice is centred?",
        "answer": "Make small pin marks from both sides until they fall into the same holes."
      },
      {
        "question": "Why must you stop within the marked lines?",
        "answer": "To avoid extra marks that spoil the timber surface."
      }
    ]
  },
  {
    "id": "carpentry-joinery-hand-held-saws-basics",
    "title": "Hand-held Saws, Teeth and Cutting Action",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 4,
    "keywords": [
      "hardpoint saw",
      "ripsaw",
      "crosscut saw",
      "backed saw",
      "saw teeth",
      "set",
      "kerf",
      "binding"
    ],
    "examFocus": [
      "Know the main types of hand-held saw",
      "Understand the difference between rip and crosscut cutting action",
      "Recognise the meaning of set, kerf and binding"
    ],
    "keyPoints": [
      "Modern hand-held saws are often made with hardened teeth for longer cutting life.",
      "These hardened saws are called hardpoint saws.",
      "Hardpoint saws stay sharp for longer but cannot be resharpened.",
      "They are useful for timber and man-made boards such as plywood and MDF.",
      "Main hand-held saw types include hardpoint saws, ripsaws, crosscut saws and backed saws.",
      "A ripsaw cuts with the grain and the teeth work like small chisels.",
      "A crosscut saw cuts across the grain and the teeth work like knife cuts that slice the fibres.",
      "Saws with fewer teeth cut faster because the teeth are larger.",
      "Larger teeth usually leave a rougher finish.",
      "Set is the sideways clearance that stops the saw sticking in the cut.",
      "Kerf is the full width of the cut made by the saw.",
      "Binding happens when the saw rubs or sticks in the material instead of moving freely."
    ],
    "commonMistakes": [
      "Using the wrong saw for cutting with or across the grain.",
      "Assuming hardpoint saws can be sharpened like traditional saws.",
      "Choosing a fast-cutting coarse saw when a cleaner finish is needed.",
      "Ignoring set and causing the saw to bind in the cut."
    ],
    "miniCheck": [
      {
        "question": "What is a hardpoint saw?",
        "answer": "A saw with hardened teeth that stays sharp longer but cannot be resharpened."
      },
      {
        "question": "Which saw is used for cutting with the grain?",
        "answer": "A ripsaw."
      },
      {
        "question": "What does kerf mean?",
        "answer": "The total width of the cut made by the saw."
      }
    ]
  },
  {
    "id": "carpentry-joinery-saw-sharpening-process",
    "title": "Saw Sharpening Steps",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 5,
    "keywords": [
      "topping",
      "shaping",
      "setting",
      "sharpening",
      "saw set",
      "triangle file",
      "mill file",
      "kerf"
    ],
    "examFocus": [
      "Know the main stages of sharpening a saw",
      "Understand why topping and setting are important",
      "Recognise different filing angles for rip and crosscut saws"
    ],
    "keyPoints": [
      "Topping is used after several sharpening sessions to level the tooth tips.",
      "A large double-cut flat mill file is run across the tops of the teeth to make them even.",
      "Topping corrects teeth that have become uneven from earlier filing.",
      "Shaping is only needed after topping and restores the teeth to the correct form and size.",
      "Setting bends alternate teeth left and right to create side clearance.",
      "This side clearance helps the blade move freely in the cut.",
      "The full width of the saw cut is called the kerf.",
      "Sharpening is done with a triangle file to restore the correct tooth shape and angle.",
      "Marking blue can be put on the saw tips to show which teeth have already been filed.",
      "Rip saw teeth are filed straight across at right angles to the blade.",
      "Crosscut saw teeth are filed at about 75° to 80° to the saw blade.",
      "File the teeth set to one side first, then turn the saw and file the teeth set to the other side."
    ],
    "commonMistakes": [
      "Skipping topping when the teeth are uneven.",
      "Forgetting that shaping is only needed after topping.",
      "Using the wrong filing angle for the type of saw.",
      "Failing to set the teeth evenly and causing poor clearance."
    ],
    "miniCheck": [
      {
        "question": "What is the purpose of topping?",
        "answer": "To level the tops of the saw teeth."
      },
      {
        "question": "What does setting do to the teeth?",
        "answer": "It bends alternate teeth left and right to create side clearance."
      },
      {
        "question": "At what angle are crosscut saw teeth filed?",
        "answer": "Around 75° to 80° to the saw blade."
      }
    ]
  },
  {
    "id": "carpentry-joinery-safe-handsaw-use",
    "title": "Safe and Accurate Handsaw Use",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 6,
    "keywords": [
      "handsaw safety",
      "panel saw",
      "cutting angle",
      "saw control",
      "sharp saw",
      "material support",
      "vice",
      "hand position"
    ],
    "examFocus": [
      "Understand safe working methods when using a handsaw",
      "Know the correct grip and cutting angle for panel saws",
      "Recognise how to reduce the risk of injury and poor cuts"
    ],
    "keyPoints": [
      "Always use the correct saw for the job.",
      "A handsaw must be sharp and well maintained for safe use.",
      "Blunt saws need more effort and are more likely to jump out of the cut.",
      "Support or secure the material before cutting to stop it moving.",
      "Hold the saw with the index finger pointing along the handle for better control.",
      "Grip the rest of the handle firmly with the other fingers.",
      "For panel saws, keep the cutting angle between about 45° and 60°.",
      "Use long, steady strokes instead of short fast strokes for better control and accuracy.",
      "Keep the non-cutting hand clear of the teeth once the cut has started.",
      "Your thumb and index finger can help guide the start of the cut, but move them away immediately after the saw enters the timber.",
      "Light finger pressure on the side of the blade can help guide the cut.",
      "When using a vice, place the timber low in the vice to reduce vibration."
    ],
    "commonMistakes": [
      "Using a blunt saw.",
      "Cutting unsupported material.",
      "Leaving the free hand close to the blade after starting the cut.",
      "Using short rushed strokes instead of controlled full strokes.",
      "Holding the timber too high in the vice and causing vibration."
    ],
    "miniCheck": [
      {
        "question": "Why is a blunt saw more dangerous?",
        "answer": "Because it needs more force and is more likely to jump out of the cut."
      },
      {
        "question": "What cutting angle is recommended for panel saws?",
        "answer": "Between 45° and 60°."
      },
      {
        "question": "When should the non-cutting hand be moved away from the blade?",
        "answer": "As soon as the cut has started."
      }
    ]
  },
  {
    "id": "carpentry-joinery-bench-planes-overview",
    "title": "Bench Planes and Their Uses",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 7,
    "keywords": [
      "try plane",
      "jointer",
      "jack plane",
      "smoothing plane",
      "bench plane",
      "flattening timber",
      "straightening timber",
      "planing"
    ],
    "examFocus": [
      "Know the main uses of try planes, jointers, jack planes and smoothing planes",
      "Understand how plane length affects the finish",
      "Recognise which planes are used for flattening and which are used for finishing"
    ],
    "keyPoints": [
      "Try planes and jointers are long planes used to flatten and straighten timber.",
      "Their long sole rides on high spots and cuts these down before reaching low areas.",
      "These planes are less common now because machines often do this work more accurately.",
      "The try plane and jointer have the iron fitted with the bevel facing down.",
      "A jack plane is used for general straightening and preparing sawn timber.",
      "On site, a jack plane is often used to trim doors so they fit frames.",
      "A jack plane should not be used to clean up joints because its length rides over high spots.",
      "The jack plane iron has a slight curve across the edge.",
      "This curved edge helps stop visible stepped lines between passes.",
      "A smoothing plane is used for cleaning joints and finishing timber before assembly.",
      "It removes machine marks, pencil lines and handling marks.",
      "Because it is short, a smoothing plane follows the existing shape of the timber and does not flatten long lengths.",
      "The smoothing plane iron is sharpened flat across, with the corners slightly eased.",
      "This helps produce a flat finish without leaving obvious marks.",
      "Smoothing planes are common and important tools in a carpenter’s or joiner’s kit."
    ],
    "commonMistakes": [
      "Using a short smoothing plane to flatten long timber.",
      "Using a jack plane to clean up joints.",
      "Choosing the wrong plane for the type of finish needed.",
      "Ignoring how plane length affects accuracy."
    ],
    "miniCheck": [
      {
        "question": "Which planes are used to flatten and straighten long timber?",
        "answer": "Try planes and jointers."
      },
      {
        "question": "What is a jack plane mainly used for?",
        "answer": "General straightening and preparing sawn timber."
      },
      {
        "question": "Why is a smoothing plane not suitable for flattening long timber?",
        "answer": "Because its short length follows the timber’s existing shape."
      }
    ]
  },
  {
    "id": "carpentry-joinery-block-plane-features",
    "title": "Block Plane Features and Best Uses",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 8,
    "keywords": [
      "block plane",
      "bevel up",
      "mouth adjustment",
      "end grain",
      "interlocking grain",
      "low angle plane",
      "hardwood",
      "plane mouth"
    ],
    "examFocus": [
      "Know how a block plane differs from other bench planes",
      "Understand why a low cutting angle is useful",
      "Recognise when to adjust the mouth opening"
    ],
    "keyPoints": [
      "A block plane is smaller than a jack plane or smoothing plane.",
      "Its iron is fitted with the bevel facing up.",
      "Most other bench planes have the bevel facing down.",
      "The block plane has a low iron seating angle, usually 20° or sometimes 12°.",
      "Most bench planes use a much steeper angle of about 45°.",
      "This low angle makes the block plane useful for cutting end grain.",
      "It also works well on hardwoods and timber with interlocking grain.",
      "The block plane has an adjustable mouth.",
      "A small mouth opening helps reduce breakout and surface damage on difficult timber.",
      "Open the mouth only as much as needed for clean work.",
      "The mouth should be made wider when planing damp or rough sawn timber."
    ],
    "commonMistakes": [
      "Using too large a mouth opening on timber that is likely to split or tear.",
      "Forgetting that the block plane iron is bevel up.",
      "Using the wrong plane for end grain work.",
      "Leaving the mouth too tight when planing damp or rough timber."
    ],
    "miniCheck": [
      {
        "question": "How is the iron fitted in a block plane?",
        "answer": "With the bevel facing up."
      },
      {
        "question": "Why is a block plane good for end grain?",
        "answer": "Because it has a low cutting angle."
      },
      {
        "question": "When should the mouth opening be made larger?",
        "answer": "When planing damp or sawn timber."
      }
    ]
  },
  {
    "id": "carpentry-joinery-plane-back-iron-adjustment",
    "title": "Back Iron and Plane Iron Alignment",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 9,
    "keywords": [
      "back iron",
      "cutting iron",
      "plane adjustment",
      "clogging",
      "chatter",
      "adjustment lever",
      "sole",
      "fine finishing"
    ],
    "examFocus": [
      "Know the purpose of the back iron",
      "Understand how to set the back iron correctly",
      "Recognise how the adjustment lever aligns the cutting iron"
    ],
    "keyPoints": [
      "The back iron supports the cutting iron near the cutting edge.",
      "It helps reduce chatter during planing.",
      "It also helps curl the shaving as it leaves the cut.",
      "The front edge of the back iron must sit flat against the cutting iron.",
      "If there is a gap between the back iron and cutting iron, the plane can clog.",
      "The back iron should be set square to the cutting iron.",
      "It should usually be positioned 0.5 mm to 1.5 mm back from the cutting edge.",
      "Use a smaller gap for fine finishing work and end grain.",
      "Use a larger gap for preparation work and damp timber.",
      "The adjustment lever is used to make the cutting iron parallel to the sole.",
      "A parallel iron gives an even cut across the width of the plane.",
      "The iron can be set slightly off-parallel when more material needs removing from one side.",
      "To check alignment, look down the sole and inspect how far the iron projects."
    ],
    "commonMistakes": [
      "Leaving a gap between the back iron and cutting iron.",
      "Setting the back iron too far from the edge for fine work.",
      "Failing to check that the cutting iron is parallel to the sole.",
      "Ignoring chatter or clogging caused by poor setup."
    ],
    "miniCheck": [
      {
        "question": "What are the main jobs of the back iron?",
        "answer": "To support the cutting iron, reduce chatter and help curl the shaving."
      },
      {
        "question": "How far back should the back iron usually be set?",
        "answer": "About 0.5 mm to 1.5 mm from the cutting edge."
      },
      {
        "question": "What is the adjustment lever used for?",
        "answer": "To align the cutting iron so it is parallel to the sole."
      }
    ]
  },
  {
    "id": "carpentry-joinery-plane-depth-and-cutter-position",
    "title": "Depth of Cut and Cutter Positioning",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 10,
    "keywords": [
      "depth of cut",
      "adjuster wheel",
      "thin shaving",
      "cutting iron projection",
      "bevel down",
      "bench plane",
      "rebate plane",
      "spokeshave"
    ],
    "examFocus": [
      "Know how to set the depth of cut on a plane",
      "Understand why lighter cuts are better than heavy cuts",
      "Recognise which planes use the bevel-down cutter position"
    ],
    "keyPoints": [
      "The amount the cutting iron projects controls how much material is removed.",
      "Lighter cuts give better control and a smoother finish.",
      "Two light cuts are usually better than one heavy cut.",
      "A good starting projection is about 0.5 mm to 1 mm.",
      "Adjust the depth using the adjuster wheel.",
      "Turn the wheel to increase or reduce how far the iron projects from the sole.",
      "The final turn of the adjuster wheel should be clockwise.",
      "This takes up slack and helps stop the iron moving further by accident.",
      "Some planes use the cutting iron with the bevel facing down.",
      "Planes with bevel-down irons include bench planes, rebate planes, combination or plough planes, compass planes and spokeshaves."
    ],
    "commonMistakes": [
      "Setting the iron too deep and trying to remove too much at once.",
      "Using heavy cuts when a smoother finish is needed.",
      "Forgetting to finish the adjustment with a clockwise turn.",
      "Putting the cutter in the wrong position for the type of plane."
    ],
    "miniCheck": [
      {
        "question": "Why are light cuts usually better than heavy cuts?",
        "answer": "They give better control, smoother planing and a better finish."
      },
      {
        "question": "What is a good starting projection for the cutting iron?",
        "answer": "About 0.5 mm to 1 mm."
      },
      {
        "question": "Which way should the final adjuster wheel movement be made?",
        "answer": "Clockwise."
      }
    ]
  },
  {
    "id": "carpentry-joinery-chisels-safety-and-parts",
    "title": "Chisel Safety and Main Parts",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 11,
    "keywords": [
      "chisel safety",
      "chisel parts",
      "blade",
      "tang",
      "ferrule",
      "washer",
      "metal insert",
      "mallet"
    ],
    "examFocus": [
      "Know the basic safety rules when using chisels",
      "Understand which chisels can be struck with a hammer or mallet",
      "Recognise the main parts of a woodworking chisel"
    ],
    "keyPoints": [
      "Chisels come with wooden handles, plastic handles or handles with metal inserts.",
      "Wooden and plastic-handled chisels should be struck with a mallet, not a metal hammer.",
      "Using a metal hammer on the wrong handle can split or damage it.",
      "Chisels with a metal insert in the handle end can be used with a metal hammer.",
      "Keep both hands behind the cutting edge when using a chisel.",
      "Always pass a chisel to another person handle first.",
      "Good-quality chisels are long-lasting tools and are worth buying.",
      "The blade is the sharpened cutting part of the chisel.",
      "The tang is the non-cutting part that fits into the handle.",
      "A washer between blade and handle helps absorb impact.",
      "The ferrule helps stop the handle splitting near the tang.",
      "A metal insert at the end of the handle allows hammer use on some chisels."
    ],
    "commonMistakes": [
      "Hitting a wooden or plastic-handled chisel with a metal hammer.",
      "Letting hands move in front of the cutting edge.",
      "Passing a chisel blade first.",
      "Ignoring handle damage or splitting."
    ],
    "miniCheck": [
      {
        "question": "What should wooden and plastic-handled chisels be struck with?",
        "answer": "A mallet."
      },
      {
        "question": "Where should your hands stay when using a chisel?",
        "answer": "Behind the cutting edge."
      },
      {
        "question": "What is the tang?",
        "answer": "The non-cutting end of the chisel that fits into the handle."
      }
    ]
  },
  {
    "id": "carpentry-joinery-types-of-wood-chisel",
    "title": "Types of Wood Chisel and Their Uses",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 12,
    "keywords": [
      "bevel edge chisel",
      "firmer chisel",
      "mortice chisel",
      "gouge",
      "paring",
      "recessing",
      "dovetails",
      "mortices"
    ],
    "examFocus": [
      "Know the common types of woodworking chisel",
      "Understand what each chisel is mainly used for",
      "Recognise which chisel suits fine work and which suits heavier work"
    ],
    "keyPoints": [
      "The main wood chisels are bevel edge chisels, firmer chisels, mortice chisels and gouges.",
      "A bevel edge chisel is a common general-purpose chisel.",
      "Its bevelled sides make it useful for tight corners.",
      "It is often used for paring, recessing and cutting dovetail sockets.",
      "A firmer chisel has square sides and a stronger shape than a bevel edge chisel.",
      "It is better suited to heavier site work.",
      "A mortice chisel is a strong chisel made for chopping mortices.",
      "Its deep rectangular or square section gives extra strength for heavy mallet blows and levering.",
      "Gouges come in different sizes and curves.",
      "They are mainly used for cutting curved shapes.",
      "A gouge ground on the inside is used for work such as scribes and stair housings.",
      "Gouges ground on the outside are commonly used for turning and carving."
    ],
    "commonMistakes": [
      "Using a light bevel edge chisel for heavy mortice work.",
      "Choosing the wrong chisel for tight corners.",
      "Using the wrong gouge shape for curved work.",
      "Treating all chisels as if they do the same job."
    ],
    "miniCheck": [
      {
        "question": "Which chisel is commonly used for dovetail sockets?",
        "answer": "A bevel edge chisel."
      },
      {
        "question": "Which chisel is designed for chopping mortices?",
        "answer": "A mortice chisel."
      },
      {
        "question": "What are gouges mainly used for?",
        "answer": "Cutting curved shapes."
      }
    ]
  },
  {
    "id": "carpentry-joinery-forming-a-housing-joint",
    "title": "Forming a Housing Joint",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 13,
    "keywords": [
      "housing joint",
      "tenon saw",
      "bevel edge chisel",
      "gauge lines",
      "waste removal",
      "crosscut",
      "joint making",
      "chisel control"
    ],
    "examFocus": [
      "Know the main steps for forming a housing joint",
      "Understand how to remove waste safely without splitting the timber",
      "Recognise the tools used when cutting a housing"
    ],
    "keyPoints": [
      "Start by crosscutting down to the gauge lines with a tenon saw.",
      "Extra cuts can be made in the waste to make removal easier.",
      "This is especially helpful if there is a lot of waste or a knot in the timber.",
      "Use a bevel edge chisel to cut inwards towards the centre of the joint.",
      "Do not chop right through from one side because the timber may split.",
      "Turn the timber over and repeat from the other side.",
      "This leaves a small raised section in the middle.",
      "Remove the middle waste carefully with the chisel.",
      "Keep control of the chisel and avoid cutting past the joint lines.",
      "The finished result is a clean housing joint with flat sides and base."
    ],
    "commonMistakes": [
      "Cutting straight through from one side and splitting the timber.",
      "Removing too much waste at once.",
      "Not making relief cuts when the waste area is large.",
      "Letting the chisel run past the joint lines."
    ],
    "miniCheck": [
      {
        "question": "Which saw is used first to cut down to the gauge lines?",
        "answer": "A tenon saw."
      },
      {
        "question": "Why should you not chop right through from one side?",
        "answer": "Because the timber can split."
      },
      {
        "question": "What chisel is used to remove the waste in a housing joint?",
        "answer": "A bevel edge chisel."
      }
    ]
  },
  {
    "id": "carpentry-joinery-sharpening-plane-irons-and-chisels",
    "title": "Sharpening Plane Irons and Chisels",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 14,
    "keywords": [
      "plane iron",
      "chisel sharpening",
      "grinding angle",
      "bench grinder",
      "water-cooled grinder",
      "burning edge",
      "25 degree",
      "honing"
    ],
    "examFocus": [
      "Know when plane irons and chisels need grinding or sharpening",
      "Understand the problems caused by a dull cutting edge",
      "Recognise safe grinding practice and the correct grinding angle"
    ],
    "keyPoints": [
      "Sharp plane irons and chisels cut more safely and efficiently.",
      "How often they need sharpening depends on use, material, damage and previous sharpening quality.",
      "A dull or damaged edge needs more force to use.",
      "A blunt edge makes it harder to produce fine shavings.",
      "Poor edges can cause clogging in the plane mouth.",
      "Chipped edges can leave ridges on the timber surface.",
      "Sharpening can involve two stages: grinding and honing.",
      "Grinding is only needed when the edge is damaged or has been honed so much that the bevel needs resetting.",
      "Plane irons should be ground to about 25°.",
      "Grinding can be done on a dry bench grinder or a water-cooled grinder.",
      "The cutting edge must not overheat or turn blue, as heat damages the temper of the steel.",
      "When dry grinding, cool the iron often in water.",
      "Water-cooled grinders reduce overheating by keeping the stone wet.",
      "Set the tool rest close to the stone and grind with steady pressure for better accuracy.",
      "Only use grinding equipment if trained and authorised."
    ],
    "commonMistakes": [
      "Grinding when honing would be enough.",
      "Letting the cutting edge overheat and burn.",
      "Using the wrong grinding angle.",
      "Applying uneven pressure on the grinder.",
      "Using grinding equipment without proper training or authorisation."
    ],
    "miniCheck": [
      {
        "question": "What grinding angle is used for plane irons?",
        "answer": "25°."
      },
      {
        "question": "What can happen if the cutting edge overheats during grinding?",
        "answer": "The steel loses its temper and will not hold a sharp edge as well."
      },
      {
        "question": "When is grinding needed instead of just honing?",
        "answer": "When the edge is damaged or the bevel needs resetting."
      }
    ]
  },
  {
    "id": "carpentry-joinery-hand-drills",
    "title": "Traditional Hand Drills",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 15,
    "keywords": [
      "wheel brace",
      "swing brace",
      "hand drill",
      "ratchet brace",
      "boring holes",
      "countersink",
      "binding",
      "slotted screws"
    ],
    "examFocus": [
      "Know the main types of traditional hand-operated drills",
      "Understand what size holes each drill is used for",
      "Recognise safe and correct use to avoid binding"
    ],
    "keyPoints": [
      "Traditional hand drills are used less often now because power drills are quicker.",
      "Two main hand-operated drills are the wheel brace and the swing brace.",
      "A wheel brace is used for small holes, usually from 1 mm to 8 mm.",
      "It can also be used for countersinking.",
      "The cutting action of a wheel brace is slow.",
      "The hole should be cleared regularly to stop the bit binding.",
      "To clear waste, remove the bit while still turning it clockwise.",
      "A swing brace is used for larger holes.",
      "Its wider turning arc gives more power and makes boring easier.",
      "Many swing braces have a ratchet feature for drilling near an obstruction.",
      "The swing brace was also used for driving and removing large slotted screws."
    ],
    "commonMistakes": [
      "Using a wheel brace for holes that are too large.",
      "Letting waste build up in the hole and causing the bit to bind.",
      "Stopping rotation when withdrawing the bit instead of clearing the waste.",
      "Ignoring the ratchet feature when working near an obstruction."
    ],
    "miniCheck": [
      {
        "question": "Which traditional hand drill is used for smaller holes?",
        "answer": "The wheel brace."
      },
      {
        "question": "What helps stop a drill bit binding in the hole?",
        "answer": "Clearing the hole regularly by withdrawing the bit while still turning it clockwise."
      },
      {
        "question": "What is the swing brace mainly used for?",
        "answer": "Boring larger holes."
      }
    ]
  },
  {
    "id": "carpentry-joinery-common-drill-bits",
    "title": "Common Drill Bits and Their Uses",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 16,
    "keywords": [
      "twist bit",
      "lip and spur",
      "countersink bit",
      "masonry bit",
      "auger bit",
      "forstner bit",
      "power drill",
      "drill bit types"
    ],
    "examFocus": [
      "Know the common drill bit types and their uses",
      "Understand which materials each bit is suited to",
      "Recognise which drills are used with different bits"
    ],
    "keyPoints": [
      "Twist bits are used for drilling wood, metal and plastic.",
      "Twist bits are commonly used in wheel braces and power drills.",
      "Lip and spur bits are used only on timber products.",
      "They give a cleaner cut and more accurate centre location because of the pointed centre.",
      "Countersink bits are used to form a countersunk hole for a screw head.",
      "Countersink bits can be used with wheel braces, swing braces and power drills.",
      "Masonry bits have a tungsten carbide tip for drilling brick, block and concrete.",
      "Masonry bits are often used for holes that take plastic wall plugs.",
      "They are used in a power drill with hammer action.",
      "Auger bits are used for deep holes in timber, such as lock fitting.",
      "Augers can be used with swing braces and power drills.",
      "Forstner bits are used for shallow blind holes.",
      "Their short centre point allows drilling close to the back face without breaking through.",
      "Forstner bits are useful for fitting concealed hinges."
    ],
    "commonMistakes": [
      "Using a lip and spur bit on metal or masonry.",
      "Using the wrong bit for the material being drilled.",
      "Using a masonry bit without a hammer-action power drill.",
      "Using a standard bit when a blind hole is needed instead of a Forstner bit."
    ],
    "miniCheck": [
      {
        "question": "Which bit is best for a clean, accurate hole in timber?",
        "answer": "A lip and spur bit."
      },
      {
        "question": "What is a countersink bit used for?",
        "answer": "To make a recess for the head of a screw."
      },
      {
        "question": "Which bit is commonly used for shallow blind holes for concealed hinges?",
        "answer": "A Forstner bit."
      }
    ]
  },
  {
    "id": "carpentry-joinery-mallets-and-clamps",
    "title": "Mallets and Clamping Equipment",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 17,
    "keywords": [
      "mallet",
      "sash clamp",
      "T bar clamp",
      "G clamp",
      "F clamp",
      "quick-release clamp",
      "vice",
      "clamping"
    ],
    "examFocus": [
      "Know the main uses of a mallet",
      "Understand safe and effective tool holding",
      "Recognise common clamps and when they are used"
    ],
    "keyPoints": [
      "A mallet is used for assembly work and for striking chisels.",
      "Mallets are made from wood or rubber and are less likely to mark the surface than a hammer.",
      "Hold a mallet or hammer at the end of the handle for better leverage and less effort.",
      "Holding too close to the head is called choking and should be avoided.",
      "Clamps and holding equipment keep materials safe and secure during cutting, assembly and fitting.",
      "A sash clamp is used for assembling small frames such as window sashes.",
      "Use timber packing with sash clamps to protect the work from damage.",
      "A T bar clamp is stronger and used for larger frames, doors and shopfronts.",
      "A G clamp gives strong pressure for holding materials tightly together.",
      "An F clamp is useful for holding materials down and clamping glue joints.",
      "Quick-release clamps are suitable for light temporary holding and can often be used one-handed.",
      "A vice is an essential bench tool for holding timber while it is being worked.",
      "A vice should be lined with timber or plywood to avoid marking the work."
    ],
    "commonMistakes": [
      "Choking the mallet or hammer by holding it too close to the head.",
      "Using light quick-release clamps for heavy glue-up work.",
      "Clamping timber without protective blocks and marking the surface.",
      "Using a vice without soft linings and denting the material."
    ],
    "miniCheck": [
      {
        "question": "What is a mallet mainly used for?",
        "answer": "Assembly work and striking chisels."
      },
      {
        "question": "Why should you hold a mallet near the end of the handle?",
        "answer": "To get more leverage and use less effort."
      },
      {
        "question": "Which clamp is commonly used for small frame assembly?",
        "answer": "A sash clamp."
      }
    ]
  },
  {
    "id": "carpentry-joinery-air-bags-and-abrasive-paper",
    "title": "Air Bags and Abrasive Paper Grades",
    "topic": "Carpentry and joinery hand tools",
    "topicOrder": 18,
    "keywords": [
      "air bags",
      "wind wedges",
      "abrasive paper",
      "grit size",
      "P60",
      "P120",
      "P240",
      "dust extraction"
    ],
    "examFocus": [
      "Know what air bags are used for in carpentry work",
      "Understand how abrasive paper is graded",
      "Recognise which grit sizes suit roughing, preparation and fine finishing"
    ],
    "keyPoints": [
      "Air bags, also called windbags or wind wedges, are used to level and wedge items during fitting work.",
      "They are useful when hanging doors, fitting windows and installing appliances.",
      "The bag is pumped up until the correct gap or level is reached.",
      "To remove the bag, release the air using the bleed valve.",
      "They are often used in pairs.",
      "Abrasive paper is graded by grit size.",
      "A lower grit number is coarser and removes material faster.",
      "A higher grit number is finer and gives a smoother finish.",
      "The letter P means the abrasive has been graded to a common standard.",
      "P60 to P80 is used for rough work and heavy material removal.",
      "P100 to P120 is used for general work and preparation before the final finish.",
      "P180 to P240 is used for very fine finishing, especially on hardwoods.",
      "When using abrasive paper, dust should be controlled with extraction or a suitable dust mask."
    ],
    "commonMistakes": [
      "Using a fine grit when heavy material removal is needed.",
      "Using a coarse grit for final finishing work.",
      "Using only one air bag when better support is needed from a pair.",
      "Sanding without dust extraction or suitable respiratory protection."
    ],
    "miniCheck": [
      {
        "question": "What are air bags used for?",
        "answer": "To level and wedge items such as doors, windows and appliances during fitting."
      },
      {
        "question": "Which is coarser, P60 or P240?",
        "answer": "P60."
      },
      {
        "question": "What grit range is commonly used for very fine finishing?",
        "answer": "P180 to P240."
      }
    ]
  },
  {
    "id": "power-tools-power-sources-overview",
    "title": "Power sources for tools",
    "topic": "Power tools",
    "topicOrder": 1,
    "keywords": ["electricity", "battery tools", "gas tools", "compressed air", "power source types"],
    "examFocus": [
      "Know the main power sources used for power tools",
      "Understand basic differences between power options",
      "Recognise why battery tools are widely used"
    ],
    "keyPoints": [
      "Common power sources for tools are electricity, battery, gas and compressed air.",
      "Electric tools are widely used by carpenters and joiners, especially on site.",
      "Site power may come from the mains supply or from a mobile generator.",
      "Battery tools are often the first choice for many trades because they are easy to use and portable.",
      "Battery size affects performance: higher voltage gives more power.",
      "Higher amp ratings mean the battery runs for longer before recharging."
    ],
    "commonMistakes": [
      "Thinking all power sources offer the same level of convenience.",
      "Confusing battery voltage with battery run time.",
      "Assuming site tools always run from mains electricity."
    ],
    "miniCheck": [
      {
        "question": "What are the four common power sources for power tools?",
        "answer": "Electricity, battery, gas and compressed air."
      },
      {
        "question": "What does a higher battery voltage usually mean?",
        "answer": "More power."
      },
      {
        "question": "What does a higher battery amp rating usually mean?",
        "answer": "Longer running time before recharge."
      }
    ]
  },
  {
    "id": "power-tools-electric-tools-and-extension-leads",
    "title": "Electrical tools and lead safety",
    "topic": "Power tools",
    "topicOrder": 2,
    "keywords": ["110V tools", "230V supply", "RCD", "double insulation", "extension lead safety", "transformer"],
    "examFocus": [
      "Understand safe voltages used for electrical tools",
      "Know the purpose of transformers and RCDs",
      "Recognise safe extension lead practice"
    ],
    "keyPoints": [
      "Domestic mains electricity is 230V and can be fatal if touched.",
      "Tool supplies on site are often reduced to 110V to lower the risk of serious electric shock.",
      "A yellow transformer is used to reduce the voltage for 110V tools.",
      "110V tools use yellow plugs and connect to matching transformer sockets.",
      "415V three-phase supplies are normally used in workshops for large woodworking machines.",
      "230V tools are often used with an RCD, which cuts the power if a fault is detected.",
      "RCDs help protect users from electric shock, such as if a cable is cut during use.",
      "Hand-held electrical tools may have a double insulation symbol, meaning live parts are separated from the outer casing.",
      "Place 110V transformers close to the mains supply and run a 110V extension lead to the tool.",
      "Do not use a 230V extension lead between the power source and a 110V transformer.",
      "Always store extension leads neatly to help prevent damage.",
      "Keep leads from creating trip hazards and run them overhead where possible.",
      "Never use an extension lead while it is still coiled because it can overheat.",
      "Check extension leads regularly and have damaged ones repaired before use.",
      "Use a lead protection sleeve where people or vehicles may pass over the cable."
    ],
    "commonMistakes": [
      "Using a lift voltage lead setup incorrectly.",
      "Leaving extension leads coiled while in use.",
      "Ignoring damaged cables or trip hazards.",
      "Using the wrong extension lead with a 110V transformer."
    ],
    "miniCheck": [
      {
        "question": "Why are 110V tools commonly used on site?",
        "answer": "They reduce the risk of serious electric shock compared with 230V."
      },
      {
        "question": "What does an RCD do?",
        "answer": "It switches off the power when it detects a fault."
      },
      {
        "question": "Why should an extension lead be fully uncoiled before use?",
        "answer": "To stop it overheating and becoming a fire risk."
      }
    ]
  },
  {
    "id": "power-tools-general-safety-guidelines",
    "title": "Safe use of power tools",
    "topic": "Power tools",
    "topicOrder": 3,
    "keywords": ["PPE", "power tool safety", "safe working", "disconnect power", "tool maintenance"],
    "examFocus": [
      "Understand basic safety rules for power tools",
      "Know how to reduce injury risks when working",
      "Recognise why maintenance and correct tool choice matter"
    ],
    "keyPoints": [
      "Safe working with power tools is essential and is a legal requirement.",
      "Wear the correct PPE for the task as stated in the risk assessment.",
      "Keep loose clothing, jewellery and trailing wires away from moving parts.",
      "Make sure the material is held securely before starting work.",
      "Keep hands, arms and legs clear of blades, bits and cutting edges.",
      "Use the correct tool for the job to reduce the chance of accidents.",
      "Do not force a tool if it is not cutting or moving properly.",
      "Keep the work area clean, tidy and safe.",
      "Disconnect the power supply before changing blades, bits or other tooling.",
      "Blunt, damaged or poorly maintained tools are more dangerous than sharp, well-kept ones.",
      "Well-maintained tools with the correct sharp tooling are safer and give a better finish."
    ],
    "commonMistakes": [
      "Using the wrong tool for the task.",
      "Working with blunt or damaged tooling.",
      "Changing tooling without disconnecting the power.",
      "Letting clutter build up around the work area."
    ],
    "miniCheck": [
      {
        "question": "What should you do before changing tooling on a power tool?",
        "answer": "Disconnect the power source."
      },
      {
        "question": "Why is a blunt power tool more dangerous?",
        "answer": "It is harder to control and increases the risk of accidents."
      },
      {
        "question": "What must you wear when the risk assessment says it is needed?",
        "answer": "The correct PPE."
      }
    ]
  },
  {
    "id": "power-tools-drills-hammer-drills-and-impact-drivers",
    "title": "Drills, hammer drills and impact drivers",
    "topic": "Power tools",
    "topicOrder": 4,
    "keywords": ["drill driver", "hammer drill", "impact driver", "torque setting", "2-speed gearbox"],
    "examFocus": [
      "Know the difference between drills, hammer drills and impact drivers",
      "Understand how speed and torque affect performance",
      "Recognise suitable uses for each tool type"
    ],
    "keyPoints": [
      "A drill is often one of the first power tools a tradesperson buys.",
      "Cabled drills suit bench work, while battery drills are often preferred on site.",
      "Most drill/drivers have a 2-speed gearbox.",
      "Speed 1 is generally used for screwdriving.",
      "Speed 2 is generally used for drilling holes.",
      "Torque settings control how much turning force is sent to the chuck.",
      "A higher torque setting gives more force.",
      "Hard materials usually need slower speed and higher torque when driving screws.",
      "Softwood often needs lower torque to stop screws going too deep or splitting the timber.",
      "A standard drill mainly uses rotational force to turn the bit.",
      "A hammer drill adds a hammering action to help drill into masonry such as brick, stone and concrete.",
      "Impact drivers are mainly used for driving and removing screws and bolts with the correct bit.",
      "Drill/drivers may allow switching between drilling, screwdriving and hammer drilling.",
      "Hammer drills are usually heavier and bulkier than standard drill/drivers."
    ],
    "commonMistakes": [
      "Using the wrong speed setting for the task.",
      "Using too much torque in softwood.",
      "Using a standard drill when a hammer drill is needed for masonry.",
      "Confusing an impact driver with a drill."
    ],
    "miniCheck": [
      {
        "question": "Which speed is usually used for screwdriving on a drill/driver?",
        "answer": "Speed 1."
      },
      {
        "question": "What is an impact driver mainly used for?",
        "answer": "Driving and removing screws and bolts."
      },
      {
        "question": "When is a hammer drill usually needed?",
        "answer": "When drilling masonry such as brick, stone or concrete."
      }
    ]
  },
  {
    "id": "power-tools-mobile-extraction-units",
    "title": "Mobile extraction units and dust control",
    "topic": "Power tools",
    "topicOrder": 5,
    "keywords": ["mobile extraction unit", "LEV", "dust control", "fine dust", "vacuuming", "local exhaust ventilation"],
    "examFocus": [
      "Understand the purpose of mobile extraction units",
      "Know how extraction improves health and safety",
      "Recognise why vacuuming is safer than sweeping"
    ],
    "keyPoints": [
      "A mobile extraction unit is an important tool when using both power tools and hand tools.",
      "Basic dust bags fitted to some tools collect dust poorly and fill up quickly.",
      "A mobile extraction unit, also called local exhaust ventilation (LEV), uses strong suction to collect dust and debris.",
      "Fine filters trap small dust particles before air is released back out.",
      "Extraction helps keep the work area cleaner and reduces dust in the air.",
      "Less dust in the atmosphere creates healthier working conditions.",
      "Using extraction also cuts down cleaning time after the job.",
      "Dust removal can improve the quality of the cut by stopping debris building up.",
      "Using extraction shows safe working practice and may be required by a risk assessment.",
      "Many extraction units are portable and can also be used to vacuum floors.",
      "Vacuuming dust is safer than sweeping because sweeping throws more harmful dust into the air."
    ],
    "commonMistakes": [
      "Relying only on the small dust bag fitted to the tool.",
      "Sweeping up dust instead of vacuuming it.",
      "Ignoring fine airborne dust in the work area.",
      "Not using extraction when the risk assessment requires it."
    ],
    "miniCheck": [
      {
        "question": "What does LEV stand for?",
        "answer": "Local exhaust ventilation."
      },
      {
        "question": "Why is vacuuming better than sweeping up dust?",
        "answer": "It reduces harmful dust going back into the air."
      },
      {
        "question": "How can mobile extraction improve the job finish?",
        "answer": "It removes dust and debris that could affect the cut."
      }
    ]
  },
  {
    "id": "power-tools-power-saws-and-saw-blades",
    "title": "Power saws and blade types",
    "topic": "Power tools",
    "topicOrder": 6,
    "keywords": ["power saws", "circular saw blade", "TCT", "ripsaw blade", "crosscut blade", "general purpose blade", "hook angle", "rake angle"],
    "examFocus": [
      "Know the main types of portable power saws",
      "Understand the difference between blade categories",
      "Recognise the correct blade for ripping and crosscutting"
    ],
    "keyPoints": [
      "Hand-held power saws save time and can produce neat, accurate cuts.",
      "Portable power saws fall into two main groups: circular blade saws and flat blade stroke saws.",
      "Circular blade saws cut by spinning a round blade at speed.",
      "Examples of circular blade saws include plunge saws, sliding mitre or chop saws, rail or track saws and table saws.",
      "Flat blade stroke saws cut with a repeated push and pull action.",
      "Examples of flat blade saws include jigsaws, multi-tools and reciprocating saws.",
      "Saw blades have teeth with tungsten carbide tips (TCT), which are hard-wearing and suited to abrasive materials.",
      "More teeth usually give a finer finish.",
      "Tooth shape is more important than tooth number when choosing the blade for the job.",
      "A blade with a positive hook or rake angle is used for ripping along the grain.",
      "A blade with a negative hook or rake angle is used for crosscutting across the grain.",
      "A blade with a zero hook or rake angle is a general-purpose blade and is common on plunge saws.",
      "Do not use a positive hook or rake blade for crosscutting because it can snatch and become hard to control."
    ],
    "commonMistakes": [
      "Choosing a blade by tooth number only.",
      "Using a ripping blade for crosscutting.",
      "Ignoring the hook or rake angle of the saw blade.",
      "Using the wrong saw type for the cutting task."
    ],
    "miniCheck": [
      {
        "question": "What type of blade is used for cutting along the grain?",
        "answer": "A ripsaw blade with a positive hook or rake angle."
      },
      {
        "question": "What type of blade is used for cutting across the grain?",
        "answer": "A crosscut blade with a negative hook or rake angle."
      },
      {
        "question": "Why is a zero hook or rake blade often used in plunge saws?",
        "answer": "Because it is a general-purpose blade with a finer cutting action."
      }
    ]
  },
  {
    "id": "power-tools-plunge-saws-and-jigsaw-blades",
    "title": "Plunge saw depth and jigsaw blade types",
    "topic": "Power tools",
    "topicOrder": 7,
    "keywords": ["plunge saw", "cutting depth", "jigsaw blade", "up-cut blade", "down-cut blade", "splinter-free cut"],
    "examFocus": [
      "Understand safe plunge saw blade depth",
      "Know the difference between up-cut and down-cut jigsaw blades",
      "Recognise which blade gives a cleaner top surface"
    ],
    "keyPoints": [
      "When using a plunge saw, set the blade depth so it only passes 3 mm to 4 mm through the material.",
      "Keeping blade projection to a minimum reduces the chance of contact with the teeth.",
      "Jigsaw blades are commonly grouped into up-cut and down-cut types.",
      "An up-cut jigsaw blade cuts on the upward stroke.",
      "Up-cut blades can splinter the top face of the material.",
      "Up-cut blades are commonly used for cutting timber.",
      "A down-cut jigsaw blade cuts on the downward stroke.",
      "Down-cut blades leave the top surface cleaner and with less splintering.",
      "Down-cut blades are useful for laminated materials, such as kitchen fitting surfaces.",
      "Jigsaw blades can be used to cut wood, plastic and metal."
    ],
    "commonMistakes": [
      "Setting the plunge saw blade deeper than needed.",
      "Using the wrong jigsaw blade for a laminated surface.",
      "Ignoring the risk of top-surface splintering when choosing a blade."
    ],
    "miniCheck": [
      {
        "question": "How far should a plunge saw blade normally project below the material on a full-depth cut?",
        "answer": "About 3 mm to 4 mm."
      },
      {
        "question": "Which jigsaw blade leaves the top face cleaner?",
        "answer": "A down-cut blade."
      },
      {
        "question": "Which jigsaw blade is typically used for timber?",
        "answer": "An up-cut blade."
      }
    ]
  },
  {
    "id": "power-tools-multi-reciprocating-and-sliding-mitre-saws",
    "title": "Multi-tools, reciprocating saws and sliding mitre saws",
    "topic": "Power tools",
    "topicOrder": 8,
    "keywords": ["multi-tool blade", "reciprocating saw", "sliding mitre saw", "chop saw", "compound cut", "high tooth count"],
    "examFocus": [
      "Know the uses of multi-tool and reciprocating saw blades",
      "Understand the difference between a chop saw and a sliding mitre saw",
      "Recognise the main cuts a sliding mitre saw can produce"
    ],
    "keyPoints": [
      "Multi-tool blades come in different shapes, including straight and semi-circular edges.",
      "Depending on the blade fitted, a multi-tool can cut timber, plastic and metal.",
      "Multi-tool blades have fine teeth and are useful for cutting in tight spaces.",
      "A common use for a multi-tool is trimming the bottom of a door lining when laying laminate flooring.",
      "Reciprocating saw blades are similar to jigsaw blades but are usually longer and stronger.",
      "Reciprocating saw blades are available for different materials.",
      "Sliding mitre saws and chop saws both use circular saw blades.",
      "Blades with more teeth usually give a finer cut finish.",
      "A chop saw only cuts in a downward movement.",
      "A sliding mitre saw cuts downward and also slides forward, allowing a larger cut capacity.",
      "Because of its larger cutting range, the sliding mitre saw is often preferred by professionals.",
      "These saws can produce square cuts, mitre cuts, bevel cuts and compound cuts.",
      "A compound cut combines a mitre angle and a bevel angle in the same cut.",
      "When cutting laminate-faced materials, use a blade with a high tooth count.",
      "Try to position decorative surfaces so the teeth cut into that face first."
    ],
    "commonMistakes": [
      "Using a low-tooth blade where a fine finish is needed.",
      "Choosing a chop saw when a larger cutting width is required.",
      "Using the wrong blade for the material.",
      "Cutting decorative laminate faces the wrong way and causing damage."
    ],
    "miniCheck": [
      {
        "question": "Why is a sliding mitre saw more versatile than a chop saw?",
        "answer": "It can slide forward as well as cut downward, so it can cut a larger area."
      },
      {
        "question": "What type of cut combines a mitre angle and a bevel angle?",
        "answer": "A compound cut."
      },
      {
        "question": "What kind of blade is best for laminate-faced materials?",
        "answer": "A high tooth count blade."
      }
    ]
  },
  {
    "id": "power-tools-table-ripsaw-safety",
    "title": "Table ripsaw safety rules",
    "topic": "Power tools",
    "topicOrder": 9,
    "keywords": ["table ripsaw", "crown guard", "riving knife", "push stick", "kickback", "case hardening", "outfeed safety"],
    "examFocus": [
      "Understand key safety checks for table ripsaws",
      "Know how to reduce kickback risk",
      "Recognise correct use of push sticks and safe operator positions"
    ],
    "keyPoints": [
      "Do not use badly twisted timber if it looks unsafe or you are unsure.",
      "Timber can close onto the blade during cutting and create friction.",
      "This closing action is often linked to case hardening in the timber.",
      "If the timber grips the blade, it can be thrown back towards the operator.",
      "To help stop the cut closing, drive a wedge into the saw cut behind the riving knife.",
      "Set the crown guard as close as possible to the top of the material.",
      "Make sure the riving knife is correctly positioned behind the blade.",
      "The riving knife must be no more than 8 mm from the saw teeth.",
      "Support the material fully on the machine bed and use extension tables or rollers when needed.",
      "Use dust extraction to collect sawdust during cutting.",
      "Have a suitable push stick ready and use it for the final 300 mm of the cut.",
      "Anyone taking material from the rear of the saw must stay at least 1200 mm from the centre of the blade."
    ],
    "commonMistakes": [
      "Using twisted timber when it may bind on the blade.",
      "Setting the crown guard too high above the material.",
      "Not using a push stick for the final part of the cut.",
      "Letting a rear operator stand too close to the blade."
    ],
    "miniCheck": [
      {
        "question": "How close should the riving knife be to the saw teeth?",
        "answer": "No more than 8 mm away."
      },
      {
        "question": "When should a push stick be used on a table ripsaw?",
        "answer": "For the last 300 mm of material fed through the cut."
      },
      {
        "question": "How far back must someone stand when removing timber from the rear of the saw?",
        "answer": "At least 1200 mm from the centre of the blade."
      }
    ]
  },
  {
    "id": "power-tools-jigsaw-use-and-pendulum-action",
    "title": "Using a jigsaw safely",
    "topic": "Power tools",
    "topicOrder": 10,
    "keywords": ["jigsaw", "pendulum action", "orbital action", "curved cuts", "aperture cutting", "blade control"],
    "examFocus": [
      "Know the main uses of a jigsaw",
      "Understand safe starting and cutting methods",
      "Recognise how pendulum action affects speed and accuracy"
    ],
    "keyPoints": [
      "A jigsaw is mainly used for curved and irregular cuts.",
      "Its narrow blade allows it to turn tightly during a cut.",
      "Make sure the blade is moving before it touches the material.",
      "Starting the cut with a still blade can cause sudden movement and bend the blade.",
      "When cutting an opening in a surface like a worktop, drill a hole first so the blade can enter the material.",
      "Most jigsaws have a quick-release system for changing blades without tools.",
      "The blade cuts with an up-and-down movement.",
      "Many jigsaws have an adjustable pendulum or orbital action.",
      "Pendulum action adds a forward swing on the upward stroke and helps clear dust from the cut.",
      "A higher pendulum setting usually makes cutting faster.",
      "Pendulum action is commonly used when cutting timber.",
      "Higher pendulum settings are often used for deeper cuts.",
      "A high pendulum setting can reduce cutting accuracy.",
      "For tight curves and neater cuts, more control is needed and too much pendulum action can be a disadvantage."
    ],
    "commonMistakes": [
      "Letting the blade touch the material before it starts moving.",
      "Trying to cut an internal opening without drilling a starter hole.",
      "Using too much pendulum action when a neat, accurate cut is needed.",
      "Forcing the blade around tight turns."
    ],
    "miniCheck": [
      {
        "question": "What type of cuts is a jigsaw mainly used for?",
        "answer": "Curved and irregular shaped cuts."
      },
      {
        "question": "Why should the blade be moving before it touches the material?",
        "answer": "To avoid sudden movement and reduce the risk of bending the blade."
      },
      {
        "question": "What is the effect of a higher pendulum setting?",
        "answer": "It usually cuts faster but can reduce accuracy."
      }
    ]
  },
  {
    "id": "power-tools-power-planer-cut-types",
    "title": "Power planer cut variations",
    "topic": "Power tools",
    "topicOrder": 11,
    "keywords": ["power planer", "bevel", "chamfer", "rebate", "planing cuts", "flat surfaces"],
    "examFocus": [
      "Know the different cuts a power planer can produce",
      "Understand the difference between bevels, chamfers and rebates",
      "Recognise when multiple passes are needed"
    ],
    "keyPoints": [
      "A power planer is used to make smooth, flat surfaces.",
      "It can also form shaped cuts, not just reduce material thickness.",
      "A bevel is a flat angled cut that runs fully across the face from one edge to the other.",
      "A bevel includes two corner edges.",
      "A chamfer is an angled cut that removes part of one corner only.",
      "A chamfer does not run all the way across the face like a bevel.",
      "A rebate is a right-angled recess cut into one corner of the material.",
      "The planer fence is needed when cutting a rebate.",
      "If the rebate depth is greater than the planer cutting depth, several passes are needed.",
      "Using smaller cuts helps reach the final size more safely and accurately."
    ],
    "commonMistakes": [
      "Mixing up a bevel and a chamfer.",
      "Trying to cut a deep rebate in one pass.",
      "Forgetting to use the fence when forming a rebate."
    ],
    "miniCheck": [
      {
        "question": "What is the difference between a bevel and a chamfer?",
        "answer": "A bevel runs fully across the face, while a chamfer removes part of one corner."
      },
      {
        "question": "What type of cut is a rebate?",
        "answer": "A right-angled recess cut into one corner of the material."
      },
      {
        "question": "Why are several cuts sometimes needed when making a rebate?",
        "answer": "Because the required depth can be greater than the planer’s cutting depth."
      }
    ]
  },
  {
    "id": "power-tools-router-parts-and-functions",
    "title": "Routers and their main parts",
    "topic": "Power tools",
    "topicOrder": 12,
    "keywords": ["router", "collet", "depth stop", "fence", "speed control", "soft start", "grooves", "housings", "profiles"],
    "examFocus": [
      "Understand what a portable router is used for",
      "Know the main parts of a router",
      "Recognise how speed, depth and width of cut are controlled"
    ],
    "keyPoints": [
      "A portable router is one of the most versatile power tools used by carpenters and joiners.",
      "It can cut grooves, rebates, housings, circles and decorative profiles.",
      "The cutter is held in a collet and driven directly by the motor.",
      "Fences, guide bushes and stops help control the cut.",
      "Most routers have variable speed control.",
      "Large diameter cutters must run at a slower speed for safety.",
      "Many routers work in a speed range of about 10,000 to 22,000 rpm.",
      "Variable speed also gives a soft start, which reduces sudden jolting when the tool starts.",
      "Do not start the router with the cutter touching the material.",
      "Modern routers are fitted with a braking system so the cutter stops quickly after switch-off.",
      "The handles are used to hold the router firmly during use.",
      "The body contains the motor.",
      "The base is the part of the router that sits on the workpiece.",
      "The depth stop controls how deep the cutter plunges.",
      "A turret or multi-position depth stop allows different depth settings to be selected.",
      "The fence is used to control the width of cut."
    ],
    "commonMistakes": [
      "Starting the router while the cutter is already touching the work.",
      "Using a large cutter at too high a speed.",
      "Confusing the depth stop with the fence.",
      "Not setting the router accurately before cutting."
    ],
    "miniCheck": [
      {
        "question": "What holds the router cutter in place?",
        "answer": "The collet."
      },
      {
        "question": "Why should a large cutter be used at a slower speed?",
        "answer": "For safety."
      },
      {
        "question": "What controls the depth of cut on a router?",
        "answer": "The depth stop."
      }
    ]
  },
  {
    "id": "power-tools-bearing-guided-cutters-and-guide-rails",
    "title": "Bearing guided cutters and guide rails",
    "topic": "Power tools",
    "topicOrder": 13,
    "keywords": ["bearing guided cutter", "router guide rail", "router accuracy", "outer edge routing", "router offset"],
    "examFocus": [
      "Understand how bearing guided router cutters are used",
      "Know the purpose of a router guide rail system",
      "Recognise when guide rails are better than a fence"
    ],
    "keyPoints": [
      "Bearing guided router cutters run directly against the workpiece.",
      "Because the bearing guides the cutter, a jig or template is not needed.",
      "These cutters are useful when working along the outer edge of the material.",
      "A router can also be used with a guide rail system if the correct attachment is fitted.",
      "The guide rail must be set in the correct position, allowing for the router offset.",
      "The router attachment then locates onto the guide rail for controlled cutting.",
      "Guide rails help produce accurate and stable cuts.",
      "A guide rail allows routing away from the outer edge of the board.",
      "Guide rails also avoid the distance limits of a normal router fence."
    ],
    "commonMistakes": [
      "Forgetting to allow for the router offset when positioning the guide rail.",
      "Assuming a fence is always the best option for internal cuts.",
      "Using the wrong setup when routing away from the board edge."
    ],
    "miniCheck": [
      {
        "question": "What is the main advantage of a bearing guided router cutter?",
        "answer": "It guides directly on the material, so a jig or template is not needed."
      },
      {
        "question": "What must be considered when setting a router guide rail?",
        "answer": "The router offset."
      },
      {
        "question": "Why can a guide rail be better than a fence?",
        "answer": "It allows accurate routing anywhere on the material, not just near the edge."
      }
    ]
  },
  {
    "id": "power-tools-router-jigs-templates-and-router-tables",
    "title": "Router jigs, templates and router tables",
    "topic": "Power tools",
    "topicOrder": 14,
    "keywords": ["router jig", "router template", "worktop jig", "hinge recessing jig", "dovetail jig", "trammel", "router table"],
    "examFocus": [
      "Know common jigs and templates used with routers",
      "Understand what a router table is",
      "Recognise the safety importance of router table use"
    ],
    "keyPoints": [
      "Portable routers can be used with different jigs and templates for specific tasks.",
      "Common examples include worktop jigs, hinge recessing jigs and dovetail jigs.",
      "A trammel can be used with a router to cut circles.",
      "A router table is made by fixing a portable router upside down into a special table.",
      "Router tables are mainly used in workshops because they are not easy to move.",
      "When fitted into a router table, the router works in a similar way to a vertical spindle moulder.",
      "Using a router in a table setup requires the same safety features and safety rules used for vertical spindle moulders."
    ],
    "commonMistakes": [
      "Using the wrong jig for the task.",
      "Treating a router table like a basic portable setup.",
      "Ignoring the extra safety rules needed for router table work."
    ],
    "miniCheck": [
      {
        "question": "What can a trammel be used for with a router?",
        "answer": "Cutting circles."
      },
      {
        "question": "How is a router table made?",
        "answer": "By mounting a portable router upside down in a special table."
      },
      {
        "question": "What machine does a router table work like?",
        "answer": "A vertical spindle moulder."
      }
    ]
  },
  {
    "id": "power-tools-router-table-feed-and-cutting-rules",
    "title": "Router table feed direction and safe cutting",
    "topic": "Power tools",
    "topicOrder": 15,
    "keywords": ["router table", "feed direction", "cutting depth", "push stick", "burn marks", "loose knots"],
    "examFocus": [
      "Understand safe feed direction on a router table",
      "Know why cutting depth must be controlled",
      "Recognise common hazards when using a router table"
    ],
    "keyPoints": [
      "Do not exceed the recommended cutting depth for one pass, especially with small diameter cutters.",
      "The material type and its condition affect how deep each pass can be made safely.",
      "When using a router table, always feed the material against the direction of the revolving cutter.",
      "Never cut beyond the centre line of the cutter in one pass.",
      "Use a push stick to help control the material safely.",
      "Loose or dead knots on the edge of the timber can break away and cause injury if the cutter hits them.",
      "Feeding the timber too slowly can leave burn marks on the finished surface."
    ],
    "commonMistakes": [
      "Taking too much depth in one pass.",
      "Feeding the material in the wrong direction.",
      "Cutting beyond the centre line of the cutter in one go.",
      "Ignoring loose knots on the timber edge.",
      "Feeding too slowly and scorching the work."
    ],
    "miniCheck": [
      {
        "question": "Which way should material be fed on a router table?",
        "answer": "Into the direction of the revolving cutter."
      },
      {
        "question": "Why should cutting depth be limited in one pass?",
        "answer": "To reduce the risk of breaking the cutter."
      },
      {
        "question": "What can happen if you feed the router too slowly?",
        "answer": "It can leave burn marks on the material."
      }
    ]
  },
  {
    "id": "power-tools-biscuit-and-domino-jointers",
    "title": "Biscuit jointers and domino jointers",
    "topic": "Power tools",
    "topicOrder": 16,
    "keywords": ["biscuit jointer", "domino jointer", "biscuit joint", "mortice", "loose tenon", "jointing tools"],
    "examFocus": [
      "Know the two main types of jointer",
      "Understand how biscuit and domino joints are formed",
      "Recognise why domino joints are often preferred"
    ],
    "keyPoints": [
      "Jointers are used to join timber parts together for frames, furniture, worktops and longer sections.",
      "The two main jointer types are biscuit jointers and domino jointers.",
      "Both tools can be used for similar jointing tasks.",
      "A biscuit jointer cuts matching grooves in each piece of material.",
      "Oval biscuits fit into these grooves to align and join the parts.",
      "A domino jointer cuts a round-ended slot called a mortice.",
      "A loose tenon, called a domino, fits into the mortice to form the joint.",
      "Domino jointers are widely seen as more accurate than biscuit jointers.",
      "Domino joints are also considered stronger than biscuit joints.",
      "Domino jointers are useful for frames, furniture and general jointing work.",
      "They are valued in workshops that do not have larger jointing machines.",
      "Domino jointers can also be used on site, including for worktop jointing."
    ],
    "commonMistakes": [
      "Assuming biscuit joints are always as strong as domino joints.",
      "Confusing a biscuit with a loose tenon.",
      "Using the wrong jointing system for heavier joinery work."
    ],
    "miniCheck": [
      {
        "question": "What are the two main types of jointer?",
        "answer": "Biscuit jointers and domino jointers."
      },
      {
        "question": "What fits into the slot cut by a domino jointer?",
        "answer": "A loose tenon called a domino."
      },
      {
        "question": "Which jointing system is generally stronger and more accurate?",
        "answer": "The domino jointing system."
      }
    ]
  },
  {
    "id": "power-tools-powered-nailers-and-fixings",
    "title": "Powered nailers and nail safety",
    "topic": "Power tools",
    "topicOrder": 17,
    "keywords": ["powered nailer", "collated nails", "ring shank nails", "brad nails", "contact nose", "nailer safety"],
    "examFocus": [
      "Know the types of nails used in powered nailers",
      "Understand how a powered nailer fires safely",
      "Recognise the main injury risks when nailing"
    ],
    "keyPoints": [
      "Powered nailers use collated nails held together in strips.",
      "These nails can have galvanised, passivated or bright steel finishes.",
      "Nailer nails are available as smooth shank or ring shank types.",
      "Ring shank nails have ridges on the shank to improve grip and resist pull-out.",
      "Brad nails are small finishing nails with no head or a very small head.",
      "Brad nails can be driven below the surface without needing a nail punch.",
      "A powered nailer fires one nail at high speed and force.",
      "The contact nose must be fully pressed in before the trigger can fire the nail.",
      "After each nail is fired, the contact nose must reset before another nail can be driven.",
      "If the contact nose is not fully depressed, the nailer will not fire.",
      "Take extra care near knots because the force of the nail can loosen them.",
      "A nail can also deflect from its path and throw out debris.",
      "Keep your free hand well away from the nailing area.",
      "Never fire a nail towards a hand that is supporting the material."
    ],
    "commonMistakes": [
      "Holding the material too close to the nail path.",
      "Ignoring the risk of nail deflection near knots.",
      "Assuming the trigger alone fires the nailer.",
      "Using the wrong nail type for the job."
    ],
    "miniCheck": [
      {
        "question": "What type of nails are used in powered nailers?",
        "answer": "Collated nails."
      },
      {
        "question": "What must happen before the trigger will fire the nailer?",
        "answer": "The contact nose must be fully depressed."
      },
      {
        "question": "Why are ring shank nails used?",
        "answer": "They grip better and resist pulling out."
      }
    ]
  },
  {
    "id": "power-tools-sanders-and-belt-sander-safety",
    "title": "Sanders and belt sander use",
    "topic": "Power tools",
    "topicOrder": 18,
    "keywords": ["sander", "belt sander", "abrasive paper", "tracking", "surface finish", "coarse grit"],
    "examFocus": [
      "Understand the purpose of sanders",
      "Know the main portable sander types",
      "Recognise how to use a belt sander safely and effectively"
    ],
    "keyPoints": [
      "Sanders are used to create a smooth, high-quality surface finish.",
      "The finish needed depends on the final coating being applied.",
      "Polished finishes usually need a finer surface than painted finishes.",
      "Sanders use different abrasive paper grades to produce smoother finishes.",
      "The four main portable sanders are belt, random orbital, orbital and detail sanders.",
      "A belt sander is the largest and heaviest hand-held sander.",
      "It usually needs both hands for control.",
      "A belt sander uses a continuous loop of abrasive paper running over rollers and a flat bed.",
      "The front roller helps keep the belt aligned in the centre.",
      "Adjusting the belt so it runs centrally is called tracking.",
      "Belt sanders are mainly used for fast removal of large amounts of material with coarse abrasive belts.",
      "If used carelessly, a belt sander can cause dips in the surface and round over corners.",
      "Keep the sander moving at a steady pace to improve the finish and avoid surface damage.",
      "Make sure loose clothing or loose material cannot get caught in the moving belt."
    ],
    "commonMistakes": [
      "Holding a belt sander still for too long in one spot.",
      "Removing too much material too quickly.",
      "Failing to track the belt correctly.",
      "Allowing loose clothing near the rotating belt."
    ],
    "miniCheck": [
      {
        "question": "What is tracking on a belt sander?",
        "answer": "Adjusting the front roller so the abrasive belt runs centrally."
      },
      {
        "question": "What can happen if a belt sander is not moved properly?",
        "answer": "It can create dips and round over edges."
      },
      {
        "question": "Which portable sander is the largest and heaviest?",
        "answer": "The belt sander."
      }
    ]
  },
  {
    "id": "power-tools-oscillating-multi-tool-basics",
    "title": "Oscillating multi-tool and blade features",
    "topic": "Power tools",
    "topicOrder": 19,
    "keywords": ["oscillating multi-tool", "multi-tool blade", "quick release", "blade position", "sanding attachment", "oscillation"],
    "examFocus": [
      "Understand how an oscillating multi-tool works",
      "Know the main blade and accessory features",
      "Recognise why blade condition matters"
    ],
    "keyPoints": [
      "A multi-tool works by oscillating the blade or attachment side to side in a small arc.",
      "This creates a narrow cutting action at very high speed.",
      "Multi-tool blades can be changed quickly using a quick-release lever.",
      "The blade can be positioned around the tool through a full 360 degrees.",
      "This flexible blade positioning helps the tool work in awkward spaces and different angles.",
      "Different blades allow the tool to cut timber, timber-based boards, plastics and metals.",
      "A sanding pad attachment can also be fitted for sanding work.",
      "Abrasive blades can be used for jobs such as removing grout from tile joints.",
      "Blades come in different widths to suit different tasks.",
      "Worn or blunt blades can burn the cut, create smoke and increase noise.",
      "Blades should be replaced regularly to keep the tool working safely and cleanly."
    ],
    "commonMistakes": [
      "Using a blunt blade for too long.",
      "Choosing the wrong blade for the material.",
      "Ignoring heavy smoke or burning during the cut.",
      "Forgetting that blade position can be adjusted for better access."
    ],
    "miniCheck": [
      {
        "question": "How does a multi-tool blade move when cutting?",
        "answer": "It moves side to side in a small oscillating arc."
      },
      {
        "question": "What feature allows fast blade changes on a multi-tool?",
        "answer": "A quick-release lever."
      },
      {
        "question": "What can a worn multi-tool blade cause?",
        "answer": "Burning, smoke and high noise."
      }
    ]
  },
  {
    "id": "power-tools-multi-tool-uses-and-blade-safety",
    "title": "Multi-tool uses and worn blade risks",
    "topic": "Power tools",
    "topicOrder": 20,
    "keywords": ["undercutting door frames", "door jamb cutting", "laminate flooring", "multi-tool safety", "blade wear", "smoke alarms"],
    "examFocus": [
      "Know common uses for oscillating multi-tools",
      "Understand why the tool is useful for flooring work",
      "Recognise the safety issues caused by worn blades"
    ],
    "keyPoints": [
      "Multi-tools are useful for undercutting door frames and linings.",
      "They are often used to cut the bottom of door jambs when fitting tiles or laminate flooring.",
      "Using the flooring offcut as a guide helps create an accurate cut height.",
      "Cutting the frame to let flooring slide underneath gives a neater, more professional finish.",
      "Half-moon and plunge-cut blades can be selected for different cutting tasks.",
      "The correct blade must be fitted for the material being cut.",
      "Worn blades can create very high noise levels, especially in confined spaces.",
      "Old blades can also make enough smoke to trigger smoke alarms.",
      "Replacing worn blades improves cut quality and helps reduce noise and smoke."
    ],
    "commonMistakes": [
      "Trying to fit flooring around the frame instead of undercutting it neatly.",
      "Using the wrong blade shape for the task.",
      "Continuing to use a blade that is noisy, smoky or burning the cut.",
      "Not using an offcut to set the correct cut height."
    ],
    "miniCheck": [
      {
        "question": "Why is a multi-tool useful when laying laminate or tile flooring?",
        "answer": "It can undercut door frames and jambs so the flooring fits neatly underneath."
      },
      {
        "question": "What simple guide can be used to set the correct cut height?",
        "answer": "An offcut of the flooring."
      },
      {
        "question": "Why should worn multi-tool blades be replaced?",
        "answer": "They create more noise, smoke and poor-quality cuts."
      }
    ]
  },
  {
    "id": "power-tools-practical-task-router-moulded-table-top",
    "title": "Practical task: cut and mould an MDF table top",
    "topic": "Power tools",
    "topicOrder": 21,
    "keywords": ["MDF", "plunge saw", "guide rail", "router", "bearing guided cutter", "dust extraction", "PPE"],
    "examFocus": [
      "Understand the main steps in a practical routing task",
      "Know the equipment needed to cut and mould MDF safely",
      "Recognise the checks used to judge safe and accurate work"
    ],
    "keyPoints": [
      "The task is to cut 18 mm MDF to a finished size of 400 mm × 300 mm.",
      "A moulding must then be formed around the top outer edge using a portable router and a bearing guided cutter.",
      "Permission from the tutor or trainer must be given before starting.",
      "Work must follow the risk assessment and health, safety and environmental rules.",
      "The MDF must be marked out accurately before cutting.",
      "A plunge saw and guide rail system are used to cut the board to size.",
      "The router cutter must be fitted correctly and matched to the correct collet size.",
      "The router must be set correctly before moulding the edge.",
      "Clamps should be used to hold the material securely when needed.",
      "Mobile dust extraction and the correct PPE must be used during the task.",
      "The cut should be clean, without burning.",
      "The moulded edge should be smooth, without burn marks or a rough, bumpy finish.",
      "All tools must be stored safely and the work area left clean and tidy after the task."
    ],
    "commonMistakes": [
      "Marking out the MDF inaccurately.",
      "Setting the guide rail incorrectly.",
      "Producing burn marks during cutting or routing.",
      "Fitting the wrong cutter or collet.",
      "Not using PPE or dust extraction.",
      "Leaving the area untidy after the task."
    ],
    "miniCheck": [
      {
        "question": "What finished size must the MDF table top be cut to?",
        "answer": "400 mm × 300 mm."
      },
      {
        "question": "What type of router cutter is used to shape the outer edge?",
        "answer": "A bearing guided router cutter."
      },
      {
        "question": "What should the finished moulding be free from?",
        "answer": "Burn marks and a rough or bumpy surface."
      }
    ]
  },
  {
    "id": "power-tools-practical-task-decorative-shelf",
    "title": "Practical task: produce a decorative shelf",
    "topic": "Power tools",
    "topicOrder": 22,
    "keywords": ["decorative shelf", "sliding mitre saw", "plunge saw", "guide rail", "router", "profile cutter", "portable sander"],
    "examFocus": [
      "Understand the sequence for making a decorative shelf",
      "Know which portable tools are needed for sizing and profiling",
      "Recognise the role of safe setup, clamping and PPE"
    ],
    "keyPoints": [
      "The task is to make a shelf with a decorative moulding on both ends and the front edge.",
      "The starting timber is planed softwood measuring 20 mm × 194 mm × 1000 mm.",
      "The timber must first be cut to a finished length of 950 mm using a sliding mitre saw.",
      "The timber must then be ripped to a finished width of 180 mm using a plunge saw and guide rail.",
      "A portable router with a suitable bearing guided profile cutter is used to form the decorative edge.",
      "The moulding is formed along one long edge and both ends of the shelf.",
      "The required equipment includes a completed risk assessment, suitable PPE, clamps and the correct portable tools.",
      "A portable sander with graded abrasive sheets is included for finishing work.",
      "The material should be held securely with suitable clamps when needed.",
      "Work should only begin after permission is given by the tutor or trainer.",
      "Feedback is given after the task and retraining may be needed if standards are not met."
    ],
    "commonMistakes": [
      "Cutting the timber to the wrong finished length.",
      "Ripping the board to the wrong width.",
      "Using the wrong profile cutter.",
      "Forgetting to clamp the material securely.",
      "Starting work without following the risk assessment or wearing the correct PPE."
    ],
    "miniCheck": [
      {
        "question": "What finished length must the shelf be cut to?",
        "answer": "950 mm."
      },
      {
        "question": "What finished width must the shelf be ripped to?",
        "answer": "180 mm."
      },
      {
        "question": "Which edges receive the decorative moulding?",
        "answer": "Both ends and the front edge."
      }
    ]
  },
{
"id": "power-tools-battery-gas-air-sources",
"title": "Power Sources for Tools",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["li-ion batteries", "gas tools", "compressed air", "power source", "tool advantages"],
"examFocus": [
"Know the main power sources used for power tools",
"Recognise key advantages and drawbacks of each source",
"Understand safe points linked to gas and compressed air"
],
"keyPoints": [
"Li-ion batteries give strong power without adding much weight, so tools are lighter and easier to handle.",
"Battery tools need charging, so extra batteries are often needed when working for long periods.",
"Batteries and chargers usually only match tools from the same manufacturer.",
"Gas-powered tools are mainly used for fixing tools such as nailers.",
"Gas tools still use a battery to create the spark that ignites the gas.",
"Used gas canisters must be thrown away safely and never burned on a bonfire.",
"Compressed air is mostly used in workshops where tools connect to an air supply from a compressor.",
"Air-powered tools can be very noisy, heavy to move, and only work where there is an air supply.",
"Compressed air must never be used to blow dust off people or work areas because it can cause serious or fatal harm."
],
"commonMistakes": [
"Thinking battery packs can be swapped between all brands.",
"Disposing of gas canisters carelessly.",
"Using compressed air to clean yourself or your bench."
],
"miniCheck": [
{"question": "Why are Li-ion batteries popular in power tools?",
"answer": "They provide good power while keeping the tool lighter."},
{"question": "What extra item is often needed with battery tools?",
"answer": "A second battery for charging and swapping over."},
{"question": "Why should compressed air not be used to blow dust off people?",
"answer": "It can force air or dust into the body and cause serious injury or death."}
]
},
{"id": "power-tools-safety-training-basics",
"title": "Power Tool Safety Basics",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["power tool safety", "training", "authorisation", "PPE", "safe operation"],
"examFocus": [
"Understand what must happen before using power tools",
"Know the key areas covered in power tool training",
"Recognise the importance of authorisation and safe use"
],
"keyPoints": [
"You must be trained before using power tools.",
"You should also be authorised to use the equipment.",
"Training should explain what PPE is needed.",
"Training should cover how to use the tool safely.",
"Training should include which tooling or attachments can be used.",
"Training should explain the risks linked to the equipment."
],
"commonMistakes": [
"Using a power tool without training.",
"Using a tool without being authorised.",
"Fitting the wrong tooling or attachments."
],
"miniCheck": [
{
"question": "What must happen before you use a power tool?",
"answer": "You must be trained and authorised."
},
{
"question": "Should power tool training include PPE requirements?",
"answer": "Yes."
},
{
"question": "Should training explain the risks of the equipment?",
"answer": "Yes."
}
]
},
{
"id": "power-tools-chuck-types",
"title": "Chuck Types",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["chuck types", "keyless chuck", "keyed chuck", "SDS chuck", "drill bit shank"],
"examFocus": [
"Know the main types of drill chuck",
"Understand how keyless and SDS chucks work",
"Recognise why SDS chucks give better grip"
],
"keyPoints": [
"A chuck is the part of the drill that holds the drill bit.",
"The shank is the non-cutting end of the bit that fits into the chuck.",
"Most hand-held drills use a keyless chuck.",
"A keyless chuck is tightened or loosened by turning the collar at the front of the drill.",
"Keyless chucks are quicker to use because they do not need a chuck key.",
"Keyed chucks need a chuck key, which can get damaged or slow down bit changes.",
"Many hammer drills use an SDS chuck.",
"An SDS chuck grips the bit more securely because the bit has slotted grooves.",
"Some SDS chucks can be fitted into a standard drill chuck to change it into an SDS-style setup."
],
"commonMistakes": [
"Using the wrong chuck type for the job.",
"Thinking all drill bits fit every chuck.",
"Wasting time with damaged or missing chuck keys."
],
"miniCheck": [
{
"question": "What part of the drill holds the bit?",
"answer": "The chuck."
},
{
"question": "What is the main benefit of a keyless chuck?",
"answer": "It does not need a chuck key and is quicker to use."
},
{
"question": "Why does an SDS chuck hold better?",
"answer": "Because the bit has slotted grooves that improve grip."
}
]
},
{
"id": "power-tools-common-drills-and-drivers",
"title": "Common Drills and Drivers",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["drill driver", "hammer drill", "impact driver", "hex bits", "tool functions"],
"examFocus": [
"Identify common types of drills and drivers",
"Know what each tool is mainly used for",
"Understand the main features of hammer drills and impact drivers"
],
"keyPoints": [
"A drill/driver is a versatile tool that can be used for screwdriving, rotary drilling and hammer drilling.",
"Drill/drivers usually have a 2-speed gearbox and adjustable torque settings.",
"Hammer drills are used for larger and deeper holes in masonry and concrete.",
"Hammer drills usually have three modes: drill only, hammer drill, and hammer only.",
"Hammer-only mode can be used for light breaking or chasing work in blockwork and concrete.",
"Hammer drills often use an SDS chuck to stop the bit slipping.",
"Impact drivers are designed for driving screws quickly.",
"Impact drivers use 1/4-inch hex bits.",
"You must choose the correct bit type and size for the screw being used."
],
"commonMistakes": [
"Using a drill/driver when a heavier hammer drill is needed.",
"Using the wrong mode on a hammer drill.",
"Choosing the wrong hex bit for the screw."
],
"miniCheck": [
{
"question": "What jobs can a drill/driver usually do?",
"answer": "Screwdriving, rotary drilling and hammer drilling."
},
{
"question": "What material is a hammer drill mainly used on?",
"answer": "Masonry and concrete."
},
{
"question": "What type of bit does an impact driver use?",
"answer": "A 1/4-inch hex bit."
}
]
},
{
"id": "power-tools-circular-saw-blades",
"title": "Circular Saw Blades and Tooth Types",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["TCT blade", "ripsaw blade", "crosscut blade", "general purpose blade", "saw teeth"],
"examFocus": [
"Know that different circular saw blades are designed for different cuts",
"Understand how tooth numbers affect the finish",
"Recognise why the correct blade must be used for the task"
],
"keyPoints": [
"TCT saw blades are made for specific cutting jobs, so the correct blade must be chosen for the material and type of cut.",
"Rip blades, crosscut blades and general-purpose blades have different tooth shapes and hook angles.",
"The number of teeth affects the finish of the cut.",
"Blades with more teeth give a smoother and finer finish.",
"Blades with fewer teeth are better for faster and deeper cutting in timber.",
"A blade around 160 mm with about 48 teeth is suitable where a neat finish is needed.",
"A blade with about 18 teeth is more suitable for deeper timber cuts.",
"Using the wrong blade can give a rough finish and poorer cutting performance.",
"TCT tips are durable but brittle and can chip if they hit nails, screws or other metal."
],
"commonMistakes": [
"Using one blade for every cutting job.",
"Choosing a low-tooth blade when a fine finish is needed.",
"Letting the blade hit hidden nails or screws."
],
"miniCheck": [
{
"question": "What usually gives a smoother cut: more teeth or fewer teeth?",
"answer": "More teeth."
},
{
"question": "What type of cut are fewer teeth better for?",
"answer": "Fast, deep cuts in timber."
},
{
"question": "Why must TCT blades be kept away from nails and screws?",
"answer": "Because the tips can chip or break."
}
]
},
{
"id": "power-tools-plunge-saw-basics",
"title": "Plunge Saw Basics and Safety",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["plunge saw", "guide rail", "splinter guard", "depth of cut", "kickback"],
"examFocus": [
"Understand what a plunge saw is used for",
"Know the main advantages of plunge saws and guide rails",
"Recognise important safety points when using hand-held circular saws"
],
"keyPoints": [
"A plunge saw is a hand-held circular saw used for cutting timber, plywood, MDF and laminated boards.",
"It can make full-length straight cuts, plunge cuts, angled cuts, compound cuts, grooves and close cuts near walls.",
"The blade starts inside the casing and is lowered into the material, which improves safety.",
"Guide rails help keep the cut straight and accurate.",
"A splinter guard helps stop the top face of the material from chipping.",
"This makes plunge saws useful for faced boards, kitchen panels and worktops where a neat finish matters.",
"The plunge action allows safer starting and stopping part way through the cut.",
"Depth of cut can be adjusted accurately for precise work.",
"Many plunge saws have an electronic brake for faster blade stopping.",
"Hand-held circular saws are dangerous if used incorrectly and should only be used by trained and authorised people."
],
"commonMistakes": [
"Trying to start or stop a cut midway with an older circular saw instead of a plunge saw.",
"Using the saw without guide rails when an accurate finish is needed.",
"Using a hand-held circular saw without training or authorisation."
],
"miniCheck": [
{
"question": "What does the splinter guard help prevent?",
"answer": "Chipping on the top face of the material."
},
{
"question": "Why is a plunge saw safer than older hand-held circular saws for mid-cut starts?",
"answer": "Because the plunge action reduces the risk of kickback."
},
{
"question": "Who should use a hand-held circular saw?",
"answer": "Only someone who is trained and authorised."
}
]
},
{
"id": "power-tools-sliding-mitre-saw-cuts",
"title": "Sliding Mitre Saw Cuts and Safe Setup",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["sliding mitre saw", "square cut", "mitre cut", "bevel cut", "compound cut"],
"examFocus": [
"Know the main cuts a sliding mitre saw can make",
"Understand safe hand position and fence setup",
"Recognise the correct blade type for this saw"
],
"keyPoints": [
"A sliding mitre saw is used for fast and accurate cutting on site.",
"It can make square cuts, mitre cuts, bevel cuts and compound cuts.",
"Square cuts are made at 0° mitre and 0° bevel.",
"Mitre cuts are usually set between 0° and 50° in either direction.",
"Bevel cuts are usually set between 0° and 50° in either direction.",
"Compound cuts combine both a mitre angle and a bevel angle.",
"A 300 mm hands-free zone should be marked in front of the cutting area.",
"When making mitre or compound cuts, the hands-free zone follows the new cutting line.",
"The back fence should be kept as close to the cut as possible to support the material.",
"For bevel or compound cuts, the fence may need moving so the blade does not strike it.",
"Sliding mitre saws must use a crosscut blade with a negative tooth angle, not a rip blade."
],
"commonMistakes": [
"Putting hands inside the 300 mm hands-free zone.",
"Leaving the back fence too far from the workpiece.",
"Using a rip blade instead of a crosscut blade."
],
"miniCheck": [
{
"question": "What four main cuts can a sliding mitre saw make?",
"answer": "Square, mitre, bevel and compound cuts."
},
{
"question": "How large should the hands-free zone be?",
"answer": "300 mm."
},
{
"question": "What blade type should a sliding mitre saw use?",
"answer": "A crosscut blade with a negative tooth angle."
}
]
},
{
"id": "table-ripsaw-safety",
"title": "Table Ripsaw Use and Safety",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["table ripsaw", "rip fence", "cross-cut fence", "support material", "saw bench safety"],
"examFocus": [
"Understand what a table ripsaw is mainly used for",
"Know who is allowed to use a table ripsaw",
"Recognise the need to support material safely during cutting"
],
"keyPoints": [
"A table ripsaw is a portable version of a workshop circular saw.",
"It is mainly used for ripping timber along the grain.",
"Some models can also be fitted with a small sliding crosscut fence.",
"These machines carry high risks and should not be used by inexperienced workers.",
"You must be trained and authorised before using a table ripsaw.",
"The same safety standards used for larger industrial circular saws apply to table ripsaws.",
"Material must be fully supported at the infeed end and the outfeed end.",
"Poor support can cause the machine to tip when cutting heavy materials.",
"Long lengths must always be supported properly during cutting."
],
"commonMistakes": [
"Using a table ripsaw without training.",
"Trying to cut heavy or long material without support.",
"Treating a portable table ripsaw as low risk."
],
"miniCheck": [
{
"question": "What is a table ripsaw mainly used for?",
"answer": "Ripping timber along the grain."
},
{
"question": "Who should not use a table ripsaw?",
"answer": "An inexperienced worker."
},
{
"question": "What must be supported when using a table ripsaw?",
"answer": "The material at both the infeed and outfeed ends."
}
]
},
{
"id": "power-tools-jigsaw-cutting-and-blade-control",
"title": "Jigsaw Cutting and Blade Control",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["jigsaw", "pendulum setting", "zero pendulum", "blade bending", "undercut edge"],
"examFocus": [
"Understand how jigsaw cutting action affects the finish",
"Know when to use a zero-pendulum setting",
"Recognise the causes and effects of blade bending"
],
"keyPoints": [
"For a neater finish, use a zero-pendulum setting.",
"Zero pendulum gives a steadier and more controlled cut.",
"Too much friction on the side of the blade can burn the cut edge.",
"A common jigsaw problem is the blade bending during the cut.",
"Blade bending is more likely on deep cuts and with a high pendulum setting.",
"A bent blade can leave an undercut edge and affect the size and shape of the cut.",
"Blunt or dull blades bend more easily.",
"Replace dull blades with sharp ones to keep cuts accurate."
],
"commonMistakes": [
"Using a high pendulum setting when a clean finish is needed.",
"Continuing to use a dull blade.",
"Ignoring blade bend and ending up with an undercut edge."
],
"miniCheck": [
{
"question": "What setting is best when a fine finish is required on a jigsaw?",
"answer": "A zero-pendulum setting."
},
{
"question": "What can happen if the jigsaw blade bends during cutting?",
"answer": "It can create an undercut edge."
},
{
"question": "What should you do with a dull jigsaw blade?",
"answer": "Replace it with a new sharp blade."
}
]
},
{
"id": "power-tools-reciprocating-saw-and-planer-basics",
"title": "Reciprocating Saws and Planer Basics",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["reciprocating saw", "power planer", "planer knives", "depth of cut", "wedge bar"],
"examFocus": [
"Know what a reciprocating saw is used for",
"Understand the basic function of a power planer",
"Recognise safe steps when changing planer knives"
],
"keyPoints": [
"A reciprocating saw is a versatile tool that can cut many different materials when fitted with the correct blade.",
"It is often used by window and door installers to cut through fixings and remove frames.",
"The reciprocating saw cuts with a push-and-pull action.",
"Its blades are similar to jigsaw blades but are longer and stronger.",
"A power planer is used to make surfaces smooth and flat or reduce material thickness.",
"The planer cuts by moving revolving cutters along the material.",
"The front bed is adjustable and controls how much material is removed in each pass.",
"The rear bed supports the planer on the finished surface during cutting.",
"Planer cutters are called planer knives and are often disposable with two usable cutting edges.",
"Before changing planer knives, disconnect the planer from the power source.",
"When replacing knives, clean off resin and dust before fitting and tightening the knife assembly."
],
"commonMistakes": [
"Using the wrong blade in a reciprocating saw.",
"Changing planer knives without disconnecting the power.",
"Failing to clean the knife seating area before fitting a blade."
],
"miniCheck": [
{
"question": "What type of cutting action does a reciprocating saw use?",
"answer": "A push-and-pull action."
},
{
"question": "What does the front bed of a power planer control?",
"answer": "How much material is removed in each pass."
},
{
"question": "What must you do before changing planer knives?",
"answer": "Disconnect the planer from the power source."
}
]
},
{
"id": "power-tools-router-accessories-and-uses",
"title": "Router Accessories and Their Uses",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["router accessories", "guide bush", "straight fence", "trammel", "roller fence"],
"examFocus": [
"Know the main accessories used with a portable router",
"Understand what common router accessories are used for",
"Recognise how accessories help control router cuts"
],
"keyPoints": [
"Portable routers are usually supplied with basic accessories such as a guide fence, guide bush and collets.",
"Extra accessories and jigs can be added for different routing tasks.",
"A roller fence or bearing guide is used for trimming and curved work.",
"The spanner supplied with the router should be used to avoid overtightening.",
"A guide bush is used with jigs and templates and comes in different sizes.",
"A trammel is used to cut radius shapes.",
"A straight fence helps guide the router for straight cuts along the material.",
"A fine fence adjustment helps improve accuracy."
],
"commonMistakes": [
"Using the wrong accessory for the job.",
"Using a different spanner and overtightening the router.",
"Trying to guide straight work without using the fence."
],
"miniCheck": [
{
"question": "What is a guide bush mainly used with?",
"answer": "Jigs and templates."
},
{
"question": "What accessory is used to make radius shapes?",
"answer": "A trammel."
},
{
"question": "Why should you use the spanner supplied with the router?",
"answer": "To help prevent overtightening."
}
]
},
{
"id": "power-tools-router-cutters-and-safe-selection",
"title": "Router Cutters and Safe Selection",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["router cutters", "TCT cutter", "HSS cutter", "PCD cutter", "shank sizes"],
"examFocus": [
"Know the main types of router cutter material",
"Understand which cutters suit different materials",
"Recognise safe limits for cutter size in portable routers"
],
"keyPoints": [
"Router cutters are made for specific profiles and different jig or template work.",
"A straight flute cutter is one of the most commonly used types.",
"Straight flute cutters are used for jobs such as grooves, rebates, trimming and cleaning edges.",
"Router cutters are used on hardwoods, softwoods and man-made boards.",
"TCT cutters are the most suitable choice for hand-held routers.",
"TCT cutters work well on both hard abrasive materials and softer materials.",
"Some TCT cutters have disposable rotating cutting edges that can be turned when blunt.",
"PCD cutters can cut softwoods, hardwoods and man-made boards, but they are very expensive and mainly used on CNC routers.",
"HSS cutters are only suitable for softwoods.",
"Using HSS cutters on hard or abrasive materials quickly damages the edge and gives a poor finish.",
"Common router shank sizes include 6 mm, 1/4 inch, 12 mm and 1/2 inch.",
"Large-diameter cutters should not be used in portable hand-held routers.",
"Cutters over 50 mm diameter should only be used in fixed router tables, not portable routers.",
"If the router slows down or becomes hard to feed, make the cut in several passes instead of one heavy cut."
],
"commonMistakes": [
"Using HSS cutters on hard or abrasive materials.",
"Fitting oversized cutters in a portable router.",
"Trying to remove too much material in one pass."
],
"miniCheck": [
{
"question": "Which cutter type is most suitable for a hand-held router?",
"answer": "TCT cutters."
},
{
"question": "What type of material should HSS cutters be used on?",
"answer": "Softwood only."
},
{
"question": "What should you do if the router starts slowing down during a cut?",
"answer": "Reduce the cut size and complete the job in multiple passes."
}
]
},
{
"id": "power-tools-router-feed-direction-and-table-safety",
"title": "Router Feed Direction and Table Safety",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["router feed direction", "push cutting", "climb cutting", "router table", "push stick"],
"examFocus": [
"Understand the correct feed direction for a hand-held router",
"Know the difference between push cutting and climb cutting",
"Recognise key safety rules when using a router table"
],
"keyPoints": [
"A router cutter rotates clockwise when viewed from above.",
"The correct method is push cutting, where the forward-rotating edge of the cutter does the work.",
"For safe control, the router should be fed in the correct direction to match the cutter rotation.",
"If the router is fed the wrong way, this is called climb cutting.",
"Climb cutting can make the cutter dig into the material.",
"This can cause the router to pull itself along, which can lead to loss of control.",
"Feeding the router the wrong way can also leave a poor or uneven finish.",
"When using a router table, guards must always be in place.",
"A push stick should be used for the last 300 mm of material fed through the router table.",
"Using a push stick helps keep hands and fingers away from the cutter."
],
"commonMistakes": [
"Feeding the router in the wrong direction.",
"Allowing the router to climb cut and self-feed.",
"Using a router table without guards or without a push stick for the last part of the cut."
],
"miniCheck": [
{
"question": "What is the correct cutting method called when feeding a hand-held router properly?",
"answer": "Push cutting."
},
{
"question": "What can happen during climb cutting?",
"answer": "The cutter can dig in and pull the router along."
},
{
"question": "What should be used for the last 300 mm on a router table?",
"answer": "A push stick."
}
]
},
{
"id": "power-tools-forming-rebates-in-multiple-passes",
"title": "Forming Rebates in Multiple Passes",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["rebate", "router cutter radius", "multiple passes", "splintering", "spelching"],
"examFocus": [
"Understand why rebates should not be cut too heavily in one pass",
"Know the maximum cut size for one pass",
"Recognise how multiple passes improve safety and finish quality"
],
"keyPoints": [
"When forming a rebate, cutting too far in one pass can cause splintering or spelching on the edge.",
"To avoid this, do not cut beyond the centre line of the router cutter in one pass.",
"The maximum cut in one pass should be no more than the radius of the cutter.",
"For example, a 6 mm cutter should cut no deeper than 3 mm in one pass.",
"A 10 mm cutter should cut no deeper than 5 mm in one pass.",
"A 12 mm cutter should cut no deeper than 6 mm in one pass.",
"When working on hardwoods, the cut per pass should be reduced even further.",
"If the rebate width is greater than the cutter radius, the cut must be completed in multiple passes.",
"Example: with a 25 mm cutter, the maximum cut in one pass is 12.5 mm.",
"To make an 18 mm rebate with a 25 mm cutter, use two passes of 9 mm instead of one heavy cut.",
"If the router becomes hard to control, vibrates heavily or gets very noisy, too much material is likely being removed in one pass."
],
"commonMistakes": [
"Trying to cut a full rebate width in one pass.",
"Cutting beyond the centre line of the cutter in one go.",
"Ignoring heavy vibration, noise or poor control during routing."
],
"miniCheck": [
{
"question": "What is the maximum amount a router cutter should remove in one pass?",
"answer": "No more than the cutter’s radius."
},
{
"question": "Why are multiple passes used when forming a wide rebate?",
"answer": "To avoid cutting beyond the cutter centre line in one pass."
},
{
"question": "What can heavy vibration and poor control mean when routing?",
"answer": "Too much material is being removed in one pass."
}
]
},
{
"id": "power-tools-domino-and-biscuit-jointer-basics",
"title": "Domino and Biscuit Jointer Basics",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["domino jointer", "biscuit jointer", "mortice", "domino sizes", "biscuit sizes"],
"examFocus": [
"Know the basic difference between domino and biscuit jointing",
"Understand the sizes used with dominoes and biscuits",
"Recognise the strength limits of biscuit jointing"
],
"keyPoints": [
"Domino cutters come in 4 mm, 5 mm, 6 mm, 8 mm and 10 mm sizes to match the domino and mortice needed.",
"The domino jointer cuts a mortice slot for the domino to fit into.",
"A good guide is that the mortice should be about one-third of the material thickness.",
"Biscuit jointers use thin compressed biscuits made from fine compressed wood material.",
"Biscuits are 4 mm thick and come in standard sizes such as 0, 10 and 20.",
"Biscuit joints can be weaker because biscuits may split across their width.",
"The domino jointer uses an oscillating cutting action, which allows different mortice widths and thicknesses.",
"Domino systems can produce a wider range of joint sizes than biscuit jointers."
],
"commonMistakes": [
"Choosing the wrong domino cutter size for the joint.",
"Making the mortice the wrong size for the material thickness.",
"Assuming biscuit joints are always as strong as domino joints."
],
"miniCheck": [
{
"question": "What sizes are domino cutters available in?",
"answer": "4 mm, 5 mm, 6 mm, 8 mm and 10 mm."
},
{
"question": "About how thick should a mortice be compared with the material?",
"answer": "About one-third of the material thickness."
},
{
"question": "Why can biscuit joints be weaker?",
"answer": "Because the biscuits can split across their width."
}
]
},
{
"id": "power-tools-using-jointers-safely",
"title": "Using Jointers Safely",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["jointer safety", "sharp cutter", "secure workpiece", "two hands", "manufacturer instructions"],
"examFocus": [
"Understand safe working rules for jointers",
"Know how to hold and control the machine correctly",
"Recognise why cutter condition and workpiece security matter"
],
"keyPoints": [
"Always check that the jointer cutter is sharp and in good condition before use.",
"Dull or damaged cutters can give a poor finish and may cause the machine to move during the cut.",
"The workpiece must be secured so it cannot move while cutting.",
"Hold the jointer with both hands in the correct positions.",
"One hand should be on the motor housing near the start-stop switch.",
"The other hand should be on the front handle.",
"Use a steady, firm push to make the cut accurately and keep the machine under control.",
"Do not remove the jointer until the cutter has stopped and retracted into the housing.",
"Always follow the manufacturer’s instructions for the jointer being used."
],
"commonMistakes": [
"Using a jointer with a dull cutter.",
"Cutting without securing the workpiece.",
"Lifting the jointer away before the cutter has fully stopped."
],
"miniCheck": [
{
"question": "What condition should the cutter be in before using a jointer?",
"answer": "Sharp and undamaged."
},
{
"question": "How should you hold a jointer during use?",
"answer": "With both hands in the correct positions."
},
{
"question": "When should you remove the jointer from the material?",
"answer": "Only after the cutter has stopped and retracted."
}
]
},
{
"id": "power-tools-random-orbital-sander-use",
"title": "Random Orbital Sander Use",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["random orbital sander", "eccentric circles", "dust extraction", "sanding speed", "surface finish"],
"examFocus": [
"Understand how a random orbital sander works",
"Know how to use it for a good surface finish",
"Recognise the importance of dust extraction and correct abrasive fitting"
],
"keyPoints": [
"A random orbital sander is small, light and can usually be controlled with one hand.",
"It is mainly used for finishing surfaces.",
"The pad both spins and moves in eccentric circles.",
"This dual action helps produce a high-quality finish without obvious swirl marks.",
"Higher speed settings remove material faster.",
"Lower speed settings can reduce vibration, lower heat build-up and help the pad follow shaped surfaces.",
"The sanding pad and abrasive disc must be the same size.",
"The holes in the abrasive disc must line up with the holes in the pad for good dust extraction.",
"Hook-and-loop abrasive discs are used to attach the sanding paper.",
"Use slow movements with very little downward pressure.",
"Keep the sander flat to avoid dips and leave a smooth, even surface.",
"When connected to dust extraction, this is one of the safest sanding methods because it leaves very little dust."
],
"commonMistakes": [
"Pressing down too hard while sanding.",
"Using abrasive discs without matching holes or the correct size.",
"Tilting the sander and creating dips in the surface."
],
"miniCheck": [
{
"question": "What makes a random orbital sander leave fewer swirl marks?",
"answer": "Its pad both spins and moves in eccentric circles."
},
{
"question": "Why must the holes in the abrasive disc line up with the pad holes?",
"answer": "To allow proper dust extraction."
},
{
"question": "How should you move a random orbital sander across the work?",
"answer": "Slowly, with little downward pressure, while keeping it flat."
}
]
},
{
"id": "power-tools-orbital-sander-and-dust-safety",
"title": "Orbital Sanders and Dust Safety",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["orbital sander", "dust extraction", "dust mask", "swirl marks", "abrasive paper clips"],
"examFocus": [
"Know how an orbital sander differs from a random orbital sander",
"Understand how abrasive paper is fitted",
"Recognise the health risks from sanding dust"
],
"keyPoints": [
"An orbital sander has a square or rectangular sanding base.",
"Unlike a random orbital sander, its pad vibrates but does not rotate.",
"Because of this movement, it can leave fine swirl marks on the surface.",
"The abrasive paper is held in place by spring-loaded clips.",
"All sanders create fine dust particles.",
"This dust can cause serious breathing problems.",
"A dust collection system should always be used, even for short jobs.",
"A dust mask should be worn where needed.",
"A portable dust extractor is better than relying only on a dust bag."
],
"commonMistakes": [
"Using an orbital sander without dust extraction.",
"Ignoring the risk from fine sanding dust.",
"Expecting the same finish quality as a random orbital sander."
],
"miniCheck": [
{
"question": "How does an orbital sander move differently from a random orbital sander?",
"answer": "It vibrates but does not rotate."
},
{
"question": "What can an orbital sander leave on the surface?",
"answer": "Fine swirl marks."
},
{
"question": "What should always be used when sanding to control fine dust?",
"answer": "A dust collection system."
}
]
},
{
"id": "power-tools-multi-tool-uses-and-cuts",
"title": "Multi-Tool Uses and Cutting Jobs",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["multi-tool", "plunge cuts", "flush cuts", "half-moon blade", "notching"],
"examFocus": [
"Know the main cutting jobs a multi-tool can do",
"Understand what plunge cuts are used for",
"Recognise how blade choice affects the task"
],
"keyPoints": [
"A multi-tool can make plunge cuts when fitted with the correct blade.",
"Plunge cuts are useful in plasterboard for services, in timber for notches, and for cutting skirting boards.",
"A half-moon blade is useful for longer flush cuts in timber and timber-based boards.",
"The wider shape of the half-moon blade helps keep the cut straighter.",
"A multi-tool can also be used for door and window repairs.",
"It can sand timber and metal.",
"It can remove old tiles and glued carpets.",
"It can cut metal such as nail ends.",
"It can remove rotten timber and trim plastic pipe."
],
"commonMistakes": [
"Using the wrong blade for plunge or flush cutting.",
"Trying to make long straight cuts without a half-moon blade.",
"Forgetting that the multi-tool can be used on different materials and tasks."
],
"miniCheck": [
{
"question": "What kind of cut can a multi-tool make easily with the correct blade?",
"answer": "A plunge cut."
},
{
"question": "What blade is useful for longer flush cuts in timber?",
"answer": "A half-moon blade."
},
{
"question": "Can a multi-tool cut metal such as nail ends?",
"answer": "Yes."
}
]
},
{
"id": "power-tools-angle-grinders-and-detectors",
"title": "Angle Grinders and Detectors",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["angle grinder", "flap disc", "scribe joint", "scanner", "voltage indicator pen"],
"examFocus": [
"Know what materials angle grinders can work on",
"Understand what a flap disc is used for",
"Recognise the purpose of scanners and detectors"
],
"keyPoints": [
"Smaller angle grinders are useful for carpentry and joinery work.",
"Angle grinders use rotating discs to cut or grind material.",
"With the correct disc, they can cut stone, brick, concrete, steel, plastic and timber.",
"When fitted with a flap disc, an angle grinder can be used as a very aggressive sander.",
"Flap discs are made from overlapping abrasive pieces and are available in different grit grades.",
"They are useful for sanding shaped profiles, such as skirting board scribes.",
"A flap disc can remove waste material much faster than a coping saw in some profile work.",
"Hand-held scanners and detectors are used to find hidden services.",
"They can detect pipework, electric cables, data cables and phone cables behind surfaces.",
"They can also help locate hidden metal or timber studs.",
"Voltage indicator pens are used to check whether electrical cables are live."
],
"commonMistakes": [
"Using the wrong disc in an angle grinder.",
"Missing hidden services before cutting into walls or boards.",
"Assuming a cable is safe without checking it with a detector or voltage pen."
],
"miniCheck": [
{
"question": "What does an angle grinder use to cut or grind material?",
"answer": "A rotating disc."
},
{
"question": "What is a flap disc mainly used for?",
"answer": "Aggressive sanding or grinding, especially on shaped work."
},
{
"question": "What is a voltage indicator pen used for?",
"answer": "To check if electrical cables are live."
}
]
},
{
"id": "power-tools-practical-task-and-safe-working",
"title": "Power Tool Practical Task and Safe Working",
"topic": "Power tools",
"topicOrder": 1,
"keywords": ["risk assessment", "PPE", "sliding mitre saw", "plunge saw", "orbital sander"],
"examFocus": [
"Understand the key steps in a practical power tool task",
"Know the importance of correct tool setup and safe working",
"Recognise that work must be completed safely and left tidy"
],
"keyPoints": [
"Work must be carried out to a given risk assessment.",
"The correct PPE must be selected for the task.",
"A sliding mitre saw should be set up correctly to trim both ends square and finish the material to 950 mm long.",
"A plunge saw with guide rails should be set up correctly to cut the material to a finished width of 180 mm.",
"A portable router should be set up correctly to form a decorative finish along one edge and both ends.",
"An orbital sander and suitable abrasive paper should be used to prepare the surface for a clear varnish finish.",
"All work must follow current health and safety rules and safe working methods.",
"The work area must be left clean and tidy.",
"Tools and equipment must be stored away safely after use."
],
"commonMistakes": [
"Starting work without following the risk assessment.",
"Using the wrong PPE or abrasive paper.",
"Leaving the area untidy or storing tools unsafely after the task."
],
"miniCheck": [
{
"question": "What must the work follow before and during the task?",
"answer": "A given risk assessment and safe working practices."
},
{
"question": "What tool is used to cut the board to 180 mm width?",
"answer": "A plunge saw with guide rails."
},
{
"question": "How should the work area be left at the end?",
"answer": "Clean, tidy and with tools stored safely."
}
]
},
{
"id": "power-tools-test-knowledge-focus",
"title": "Power Tool Test Knowledge Focus",
"topic": "Power tools",
"topicOrder": 2,
"keywords": ["SDS chuck", "TCT", "PAT label", "110V", "negative tooth blade"],
"examFocus": [
"Recall key facts about common power tools and accessories",
"Recognise important safety and site-use knowledge",
"Prepare for typical multiple-choice style questions"
],
"keyPoints": [
"An SDS chuck is used on a hammer drill.",
"TCT saw tips are used because they are hard-wearing.",
"A PAT test label shows the date of inspection.",
"The recommended voltage for use on site is 110 V.",
"Mobile LEV or extraction units help reduce small dust particles.",
"A riving knife is found on a table ripsaw.",
"A sliding mitre saw is the most suitable saw for cutting material to length.",
"A collet is found on a router.",
"A negative tooth profile saw blade is used on a sliding compound saw.",
"P120 abrasive paper gives a finer finish than P60, P80 or P100."
],
"commonMistakes": [
"Confusing SDS chucks with other drill types.",
"Forgetting what a PAT label shows.",
"Choosing a coarser abrasive when a finer finish is needed."
],
"miniCheck": [
{
"question": "Which tool uses an SDS chuck?",
"answer": "A hammer drill."
},
{
"question": "What does a PAT label tell you?",
"answer": "The date of inspection."
},
{
"question": "Which abrasive grade gives the finest finish out of P60, P80, P100 and P120?",
"answer": "P120."
}
]
},
  {
    "id": "power-tools-pre-use-checks",
    "title": "Pre-Use Checks for Power Tools",
    "topic": "Power tools",
    "topicOrder": 1,
    "keywords": ["power tool checks", "PPE inspection", "tool damage", "PAT label", "guards and cables"],
    "examFocus": [
      "Know the checks to make before using a power tool",
      "Understand when a tool must be taken out of use",
      "Recognise why PPE and safety labels matter"
    ],
    "keyPoints": [
      "Check you have the right PPE for the job and that it is not damaged.",
      "Replace worn or faulty PPE before starting work.",
      "Inspect the tool body for cracks, splits or broken parts.",
      "Check cables for cuts, damage or poor repairs.",
      "Inspect plugs for damage and loose cable connections.",
      "Make sure guards are fitted, undamaged and move properly.",
      "Never use a power tool with missing, damaged or stuck guards.",
      "Check the tool accessory is the correct type, sharp and in good condition.",
      "Make sure control parts such as fences, depth stops and riving knives are fitted where needed.",
      "Test the start and stop controls to make sure they work correctly.",
      "Check the tool has a current PAT safety label before use.",
      "If a tool is unsafe, report it and remove it from use until repaired."
    ],
    "commonMistakes": [
      "Using damaged PPE.",
      "Using a tool with a faulty cable or plug.",
      "Working with missing or damaged guards.",
      "Using blunt or wrong accessories.",
      "Ignoring a missing PAT label."
    ],
    "miniCheck": [
      {
        "question": "What should you do if a power tool has a damaged guard?",
        "answer": "Report it and take it out of use until repaired."
      },
      {
        "question": "Should you use a tool with no current PAT label visible?",
        "answer": "No."
      },
      {
        "question": "What should you check before using any power tool?",
        "answer": "PPE, tool condition, cables, plug, guards, accessories, controls and PAT label."
      }
    ]
  },
  {
    "id": "power-tools-ppe-and-hazards",
    "title": "PPE and Hazards When Using Power Tools",
    "topic": "Power tools",
    "topicOrder": 2,
    "keywords": ["PPE", "dust mask", "ear protection", "HAVS", "eye protection"],
    "examFocus": [
      "Recognise common hazards linked to portable power tools",
      "Know what PPE helps reduce each hazard",
      "Understand how to reduce exposure to dust, noise and vibration"
    ],
    "keyPoints": [
      "The PPE needed depends on the tool, material, location, time of use, weather and ventilation.",
      "Dust from cutting should be controlled with local exhaust ventilation and a suitable dust mask.",
      "Noise should be reduced where possible and suitable hearing protection worn when needed.",
      "Flying debris means eye protection is essential.",
      "Safety glasses are treated as a basic minimum in work areas.",
      "Gloves help protect against splinters and contaminants.",
      "Close-fitting nonslip gloves are suitable for everyday power tool work.",
      "Wear high-visibility clothing where vehicles or site traffic are present.",
      "Use hard hats and suitable footwear where there is a risk of falling objects.",
      "Vibration from tools can cause Hand-Arm Vibration Syndrome, often called vibration white finger.",
      "Reduce vibration risk by limiting tool use time and changing to other tasks between periods of exposure.",
      "Good lighting is important, and flashing or flickering lights must be avoided because they can make rotating blades look still or slow."
    ],
    "commonMistakes": [
      "Using power tools without eye or ear protection.",
      "Ignoring dust control and respiratory protection.",
      "Using vibrating tools for too long without a break.",
      "Working in poor or flickering lighting.",
      "Not checking the risk assessment before starting."
    ],
    "miniCheck": [
      {
        "question": "What should be used to control dust from cutting?",
        "answer": "Local exhaust ventilation and a suitable dust mask."
      },
      {
        "question": "What health problem can be caused by vibration from power tools?",
        "answer": "Hand-Arm Vibration Syndrome."
      },
      {
        "question": "Why is flickering light dangerous near rotating tools?",
        "answer": "It can make the tool appear still, slow or moving backwards."
      }
    ]
  },
  {
    "id": "power-tools-pillar-drill-basics",
    "title": "Pillar Drill Safety and Use",
    "topic": "Power tools",
    "topicOrder": 3,
    "keywords": ["pillar drill", "drill vice", "drill guard", "pulley speeds", "accurate drilling"],
    "examFocus": [
      "Understand what a pillar drill is used for",
      "Know the main safety rules when using a pillar drill",
      "Recognise how speed and holding devices improve safe drilling"
    ],
    "keyPoints": [
      "A pillar drill is a fixed workshop drill used for accurate and repeated hole drilling.",
      "The drill head is lowered into the material using a handle.",
      "The table or bed can move up and down to suit the work.",
      "Fences and stops can be fitted to help keep hole positions accurate.",
      "Pillar drills are useful when the same hole position needs to be repeated.",
      "These machines produce strong turning force and must be used with care.",
      "Large drill bits should run at slower speeds.",
      "Speed guidance is normally shown on the machine drive system.",
      "When drilling small items, use a drill vice or another secure holding device.",
      "Use the drop-down drill guard when operating the machine.",
      "Wear safety glasses when using a pillar drill.",
      "Keep loose clothing and hair away from rotating parts."
    ],
    "commonMistakes": [
      "Holding small pieces by hand instead of using a vice.",
      "Using the wrong drill speed for the bit size.",
      "Not using guards, fences or stops.",
      "Letting loose clothing or hair get near moving parts."
    ],
    "miniCheck": [
      {
        "question": "What should you use to hold small workpieces on a pillar drill?",
        "answer": "A drill vice or another suitable holding device."
      },
      {
        "question": "Should larger drill bits be used at faster or slower speeds?",
        "answer": "Slower speeds."
      },
      {
        "question": "Why are fences and stops useful on a pillar drill?",
        "answer": "They help improve safety, speed and accuracy."
      }
    ]
  },
  {
    "id": "power-tools-drilling-and-driving-problems",
    "title": "Common Problems with Drills and Drivers",
    "topic": "Power tools",
    "topicOrder": 4,
    "keywords": ["drilling faults", "impact driver", "spelching", "torque setting", "screwdriver bit"],
    "examFocus": [
      "Recognise common drilling and driving problems",
      "Know simple fixes for faults when working in timber",
      "Understand how speed, torque and setup affect results"
    ],
    "keyPoints": [
      "If the drill bit slips in the chuck, clear waste from the hole regularly during drilling.",
      "Adjust the drilling speed if the bit is not cutting properly.",
      "If needed, use an SDS drill or an SDS conversion chuck.",
      "Spelching on the back of timber can be reduced by clamping scrap timber behind the work.",
      "If possible, mark out and drill from both sides to reduce breakout.",
      "If a battery drill stalls, switch to the drill setting.",
      "Increase the torque setting if more driving force is needed.",
      "Recharge the battery if power is low.",
      "If the screwdriver bit slips out of the screw head, use the correct bit type and size.",
      "Set the speed lower when driving screws.",
      "Keep the bit lined up straight with the screw head.",
      "Replace screws with damaged heads.",
      "If screws split timber, drill a clearance hole first.",
      "If screws go in too far, lower the torque setting.",
      "If screws do not go fully in, increase the torque setting."
    ],
    "commonMistakes": [
      "Using the wrong screwdriver bit.",
      "Driving screws too fast.",
      "Not drilling a clearance hole in timber that may split.",
      "Leaving the torque setting too high or too low.",
      "Ignoring battery charge when performance drops."
    ],
    "miniCheck": [
      {
        "question": "How can you reduce spelching on the back of timber?",
        "answer": "Clamp a sacrificial piece of timber behind it."
      },
      {
        "question": "What should you do if a screwdriver bit keeps jumping out of the screw head?",
        "answer": "Use the correct bit, slow the speed and line it up properly."
      },
      {
        "question": "What can help stop timber splitting when driving screws?",
        "answer": "Drill a clearance hole."
      }
    ]
  },
  {
    "id": "power-tools-plunge-saw-features-and-blade-safety",
    "title": "Plunge Saw Features and Blade Safety",
    "topic": "Power tools",
    "topicOrder": 5,
    "keywords": ["plunge saw", "guide rail", "circular saw blade", "blade change", "saw safety"],
    "examFocus": [
      "Recognise key safety and accuracy features of a modern plunge saw",
      "Know why the correct blade size matters",
      "Understand safe blade-changing rules"
    ],
    "keyPoints": [
      "Guide rails help keep the saw straight and stop it wandering during cuts.",
      "Modern plunge saws can cut close to walls, usually to about 15 mm.",
      "Modern saw designs make blade changing safer and quicker.",
      "Keep at least two blades of each type so one can be used while the other is being sharpened.",
      "Always make sure the blade size matches the saw.",
      "A blade that is too small lowers blade speed.",
      "Reduced blade speed can increase the risk of injury.",
      "Disconnect the power before fitting or removing a saw blade."
    ],
    "commonMistakes": [
      "Using the wrong size blade.",
      "Changing blades while the saw is still connected to the power supply.",
      "Trying to cut straight lines without using the guide rail.",
      "Using only one blade and carrying on when it becomes dull."
    ],
    "miniCheck": [
      {
        "question": "What helps a plunge saw cut straight without wandering?",
        "answer": "A guide rail."
      },
      {
        "question": "What should you do before changing a circular saw blade?",
        "answer": "Disconnect the power supply."
      },
      {
        "question": "Why is a blade that is too small unsafe?",
        "answer": "It reduces blade speed and can increase injury risk."
      }
    ]
  },
  {
    "id": "power-tools-circular-saw-blade-direction-riving-knife-and-dust-control",
    "title": "Blade Direction, Riving Knife and Dust Control",
    "topic": "Power tools",
    "topicOrder": 6,
    "keywords": ["blade direction", "riving knife", "kerf", "dust extraction", "circular saw"],
    "examFocus": [
      "Know how a circular saw blade must be fitted",
      "Understand the job of the riving knife",
      "Recognise the importance of proper dust extraction"
    ],
    "keyPoints": [
      "Fit the saw blade so the arrow on the blade matches the saw’s direction of rotation.",
      "The blade teeth should rotate upwards towards the front of the saw base.",
      "This cutting action helps pull the saw down onto the material.",
      "A circular saw must be fitted with a riving knife behind the blade.",
      "The riving knife should follow the shape of the blade.",
      "It should be positioned as close as possible to the back of the teeth and no more than 8 mm away.",
      "The riving knife acts as a rear guard.",
      "It also helps stop material pinching or binding on the blade during cutting.",
      "The riving knife is slightly thicker than the blade body but thinner than the saw cut width.",
      "Use a dust collection system when operating the saw.",
      "A dust bag has limited collection ability.",
      "A mobile dust extraction unit is a better option for removing dust."
    ],
    "commonMistakes": [
      "Fitting the blade in the wrong direction.",
      "Using the saw without a riving knife.",
      "Setting the riving knife too far from the blade.",
      "Relying only on a dust bag when better extraction is available."
    ],
    "miniCheck": [
      {
        "question": "How far should the riving knife be from the back of the saw teeth?",
        "answer": "No more than 8 mm away."
      },
      {
        "question": "What are the two main jobs of the riving knife?",
        "answer": "To act as a rear guard and help prevent the material binding on the blade."
      },
      {
        "question": "What is better than a dust bag for collecting saw dust?",
        "answer": "A mobile dust extraction unit."
      }
    ]
  },
  {
    "id": "power-tools-circular-ripsaw-basic-operations",
    "title": "Basic Operations on a Circular Ripsaw",
    "topic": "Power tools",
    "topicOrder": 7,
    "keywords": ["circular ripsaw", "flatting", "deeping", "angled cutting", "saddle jig"],
    "examFocus": [
      "Know the three main cutting operations on a circular ripsaw",
      "Understand how angled cutting is carried out safely",
      "Recognise why work support and offcut control matter"
    ],
    "keyPoints": [
      "Circular ripsaws are mainly used for flatting, deeping and angled cutting.",
      "Flatting means ripping timber along its length through the thinnest section to get the required width.",
      "Deeping means ripping timber along its length through the thickest section to get the required thickness.",
      "Angled cutting is done with the timber supported on a saddle or jig.",
      "The saddle keeps the material stable during the cut.",
      "Using a saddle helps produce an accurate angle.",
      "A saddle also helps feed the material safely through the saw.",
      "Good support improves control of both the workpiece and the offcut."
    ],
    "commonMistakes": [
      "Confusing flatting with deeping.",
      "Trying to cut angles without a saddle or jig.",
      "Not controlling the offcut during angled cuts.",
      "Feeding unsupported material through the saw."
    ],
    "miniCheck": [
      {
        "question": "What does flatting mean on a circular ripsaw?",
        "answer": "Ripping timber along its length through its thinnest section to get the required width."
      },
      {
        "question": "What is deeping?",
        "answer": "Ripping timber along its length through its thickest section to get the required thickness."
      },
      {
        "question": "Why is a saddle used for angled cutting?",
        "answer": "It holds the timber steady, improves accuracy and helps keep the cut safe."
      }
    ]
  },
  {
    "id": "power-tools-positioning-timber-with-movement-on-saw-benches",
    "title": "Positioning Timber with Movement on Saw Benches",
    "topic": "Power tools",
    "topicOrder": 8,
    "keywords": ["timber movement", "cupping", "bowing", "springing", "saw bench positioning"],
    "examFocus": [
      "Recognise common forms of timber movement",
      "Know how to position distorted timber safely on a circular saw",
      "Understand why correct presentation to the blade and fence matters"
    ],
    "keyPoints": [
      "Timber must be presented correctly to the saw bench for safe cutting.",
      "Storage and seasoning can cause timber to change shape.",
      "Common movement includes cupping, bowing, springing and twisting.",
      "Cupping is when the board curves across its face.",
      "Bowing is a curve along the face from one end to the other.",
      "Springing is a curve along the edge from one end to the other.",
      "Twisting is when the board turns along its length like a propeller.",
      "When flatting cupped timber, place the cupped side uppermost.",
      "When deeping cupped timber, keep the cupped side against the fence as shown for safe contact.",
      "For bowed timber, position the convex side to the fence.",
      "For sprung timber, the timber must stay in contact with the machine bed at the point of cutting.",
      "A straight batten fixed to the face can help give safer and more accurate cutting."
    ],
    "commonMistakes": [
      "Feeding twisted or curved timber without checking its position first.",
      "Placing cupped timber the wrong way during cutting.",
      "Allowing timber to lose contact with the bed or fence.",
      "Ignoring simple supports like a straight batten for safer cuts."
    ],
    "miniCheck": [
      {
        "question": "Name four common types of timber movement.",
        "answer": "Cupping, bowing, springing and twisting."
      },
      {
        "question": "How should cupped timber be positioned when flatting?",
        "answer": "With the cupped side facing upwards."
      },
      {
        "question": "Why is correct timber positioning important on a saw bench?",
        "answer": "It helps keep the cut accurate and makes the operation safer."
      }
    ]
  },
  {
    "id": "power-tools-hand-held-power-planer-cut-depth-and-finish",
    "title": "Power Planer Cut Depth and Surface Finish",
    "topic": "Power tools",
    "topicOrder": 9,
    "keywords": ["power planer", "cut depth", "chatter marks", "pitch marks", "feed speed"],
    "examFocus": [
      "Know the recommended cutting depth for a hand-held power planer",
      "Understand how feed speed affects surface finish",
      "Recognise common signs of poor planing technique"
    ],
    "keyPoints": [
      "A power planer removes material quickly, so it must be used with control.",
      "Limit the depth of cut to a maximum of 2 mm for good results.",
      "If more material needs removing, use several light cuts instead of one heavy cut.",
      "Cuts deeper than 2 mm can cause chatter marks.",
      "Chatter marks happen when the planer jumps slightly during use.",
      "Moving the planer too fast can leave pitch marks on the timber surface.",
      "Pitch marks show as bumps and hollows left by the rotating cutters.",
      "Fast feed speed can also cause tear out on the surface.",
      "Slower feed speed produces smaller pitch marks and a better finish.",
      "Damaged planer knives can leave raised tram lines in the cut.",
      "Other signs of damaged knives include torn grain and a fluffy surface."
    ],
    "commonMistakes": [
      "Trying to remove too much material in one pass.",
      "Setting the cut deeper than 2 mm.",
      "Pushing the planer too fast over the timber.",
      "Ignoring damaged knives when the finish quality drops."
    ],
    "miniCheck": [
      {
        "question": "What is the maximum recommended depth of cut for a hand-held power planer?",
        "answer": "2 mm."
      },
      {
        "question": "What can happen if you plane too fast?",
        "answer": "Pitch marks and tear out can appear on the surface."
      },
      {
        "question": "What may cause chatter marks?",
        "answer": "Heavy cuts that make the planer jump slightly during use."
      }
    ]
  },
  {
    "id": "power-tools-preventing-splitting-and-knife-damage-when-planing",
    "title": "Preventing Splitting and Knife Damage When Planing",
    "topic": "Power tools",
    "topicOrder": 10,
    "keywords": ["end grain", "spelching", "splitting", "planer knives", "tungsten carbide"],
    "examFocus": [
      "Know how to reduce splitting when planing end grain",
      "Recognise why planer knives become damaged",
      "Understand how damaged knives affect the finish"
    ],
    "keyPoints": [
      "A hand-held power planer can cause splitting or spelching at the outfeed end when planing end grain.",
      "To reduce this risk, start with a small cut at the finishing end first.",
      "This first cut only needs to be about 20 mm long.",
      "The first cut should be the same depth as the main cut.",
      "After that, plane from the starting end right through and past the first cut.",
      "This helps the final cut line meet cleanly and reduces end grain breakout.",
      "Portable planer knives are usually made from tungsten carbide.",
      "Tungsten carbide is hard but brittle.",
      "Avoid planing into metal such as staples often found in doors.",
      "Hitting metal can chip the cutting edge.",
      "Chipped knives leave small raised lines along the planed surface."
    ],
    "commonMistakes": [
      "Planing straight through end grain without making a short relieving cut first.",
      "Forgetting to match the depth of the first cut to the main pass.",
      "Planing over hidden metal like staples.",
      "Continuing to use chipped knives."
    ],
    "miniCheck": [
      {
        "question": "How long should the first relieving cut be when trying to stop end grain splitting?",
        "answer": "About 20 mm."
      },
      {
        "question": "What should you do after making the short cut at the finishing end?",
        "answer": "Plane from the starting end through the full length and past the first cut."
      },
      {
        "question": "Why should you avoid planing over staples or other metal?",
        "answer": "They can chip the planer knives and spoil the finish."
      }
    ]
  },
  {
    "id": "power-tools-router-cutter-speed-and-control",
    "title": "Router Cutter Speed and Safe Control",
    "topic": "Power tools",
    "topicOrder": 11,
    "keywords": ["router speed", "peripheral speed", "cutter diameter", "router control", "safe router use"],
    "examFocus": [
      "Understand why correct router speed matters",
      "Recognise factors that affect cutter speed and finish",
      "Know the rule for matching cutter size to router speed"
    ],
    "keyPoints": [
      "Using the correct cutter speed is important for both safety and surface finish.",
      "If cutter speed is too low, the finish can be poor.",
      "If cutter speed is too high, the router can become harder and more dangerous to control.",
      "Peripheral speed is the distance the cutter edge travels and is measured in metres per second.",
      "The material being cut affects cutter speed because harder materials put more load on the cutter.",
      "Larger cuts increase strain on the router motor and can reduce cutter speed.",
      "Feeding the router too fast through the cut adds strain and lowers cutter speed.",
      "Sharp cutters help produce a better finish.",
      "More powerful routers can handle larger cutters, heavier cuts and longer use.",
      "As a general rule, small cutters run faster and large cutters run slower.",
      "Do not use cutters over 35 mm diameter in a hand-held router because they can become difficult and unsafe to control."
    ],
    "commonMistakes": [
      "Using a speed that is too high or too low for the cutter.",
      "Feeding the router too fast through the material.",
      "Using blunt cutters and expecting a good finish.",
      "Fitting oversized cutters in a hand-held router."
    ],
    "miniCheck": [
      {
        "question": "What can happen if the router cutter speed is too low?",
        "answer": "The finish can be poor."
      },
      {
        "question": "What is the general rule for cutter size and router speed?",
        "answer": "Small cutters run faster and large cutters run slower."
      },
      {
        "question": "What is the maximum cutter diameter stated for a hand-held router?",
        "answer": "35 mm."
      }
    ]
  },
  {
    "id": "power-tools-types-of-work-with-hand-held-routers",
    "title": "Work You Can Do with a Hand-Held Router",
    "topic": "Power tools",
    "topicOrder": 12,
    "keywords": ["hand-held router", "guide fence", "guide bush", "template", "router work"],
    "examFocus": [
      "Know common jobs carried out with a hand-held router",
      "Understand how fences, bearings and guide bushes guide the cut",
      "Recognise how jigs and templates improve accuracy"
    ],
    "keyPoints": [
      "A hand-held router can be used for many different cutting tasks.",
      "Common work includes edge profiling using fences and bearing-guided cutters.",
      "Routers can cut profiles and grooves using guide rails.",
      "They are used for worktop joints.",
      "They can cut door hinge recesses.",
      "They can be used for lock and letterbox openings.",
      "Routers can cut openings in worktops.",
      "They can produce circles and ellipses.",
      "They can also be used to form dovetail joints.",
      "When working along an edge, the cut can be guided by a fence or by the cutter bearing running against the material.",
      "A guide bush can be fitted into the router base plate.",
      "The guide bush follows the shape of a template or jig to control the cut accurately."
    ],
    "commonMistakes": [
      "Trying to guide the router freehand when a fence or template should be used.",
      "Using the wrong guide method for the job.",
      "Not using a guide bush with a template or jig.",
      "Assuming the router is only for edge shaping."
    ],
    "miniCheck": [
      {
        "question": "Name two jobs a hand-held router can do.",
        "answer": "Examples include edge profiling, grooves, worktop joints, hinge recesses, lock cuts or dovetails."
      },
      {
        "question": "What can guide the router along the edge of a board?",
        "answer": "A fence or the cutter bearing."
      },
      {
        "question": "What follows the template shape when using a jig with a router?",
        "answer": "The guide bush."
      }
    ]
  },
  {
    "id": "power-tools-router-table-feed-direction-and-safe-cutting",
    "title": "Router Table Feed Direction and Safe Cutting",
    "topic": "Power tools",
    "topicOrder": 13,
    "keywords": ["router table", "feed direction", "cutter centre line", "burn marks", "knots"],
    "examFocus": [
      "Know the correct feed direction on a router table",
      "Understand safe cutting limits in one pass",
      "Recognise problems caused by poor feeding technique or faulty timber"
    ],
    "keyPoints": [
      "When using a router table, feed the material into the direction of the revolving cutter.",
      "Never cut beyond the centre line of the cutter in one pass.",
      "Maximum cutting depth depends on the cutter size, the material and its condition.",
      "Small diameter cutters are at greater risk of breaking if cutting limits are exceeded.",
      "Loose or dead knots on the edge of the material can be thrown out by the cutter and cause injury.",
      "Feeding the router too slowly can leave burn marks on the finished surface.",
      "Burn marks are also known as dwell marks."
    ],
    "commonMistakes": [
      "Feeding the work the wrong way into the cutter.",
      "Trying to remove too much material in one pass.",
      "Cutting beyond the cutter centre line.",
      "Ignoring loose knots on the timber edge.",
      "Feeding too slowly and scorching the workpiece."
    ],
    "miniCheck": [
      {
        "question": "Which way should material be fed on a router table?",
        "answer": "Into the direction of the revolving cutter."
      },
      {
        "question": "Should you cut beyond the centre line of the cutter in one pass?",
        "answer": "No."
      },
      {
        "question": "What can happen if you feed the router too slowly?",
        "answer": "It can leave burn marks or dwell marks on the surface."
      }
    ]
  },
  {
    "id": "biscuit-and-domino-jointers",
    "title": "Biscuit Jointers and Domino Jointers",
    "topic": "Power tools",
    "topicOrder": 14,
    "keywords": ["biscuit jointer", "domino jointer", "loose tenon", "mortice", "jointing"],
    "examFocus": [
      "Know what jointers are used for",
      "Understand the difference between biscuit and domino systems",
      "Recognise why domino joints are often preferred"
    ],
    "keyPoints": [
      "Jointers are used to join materials when making frames, furniture, worktops and longer lengths.",
      "The two main types are biscuit jointers and domino jointers.",
      "Both types can be used for similar joining tasks.",
      "A biscuit jointer cuts matching grooves for oval biscuits.",
      "The biscuit fits into both grooves to help join the parts together.",
      "The groove is cut by a small grooving saw inside the machine.",
      "A domino jointer cuts a round-ended slot called a mortice.",
      "The joint is formed using a separate loose tenon called a domino.",
      "Domino jointers can handle a wider range of work.",
      "Domino joints are generally stronger and more accurate than biscuit joints.",
      "Domino jointers are valued where larger workshop machines are not available.",
      "Domino joints are commonly used for frames, furniture and worktop jointing."
    ],
    "commonMistakes": [
      "Confusing biscuits with domino loose tenons.",
      "Assuming biscuit joints are stronger than domino joints.",
      "Using the wrong jointer for the strength needed.",
      "Not understanding that a domino is a separate loose tenon."
    ],
    "miniCheck": [
      {
        "question": "What are the two main types of jointer?",
        "answer": "Biscuit jointer and domino jointer."
      },
      {
        "question": "Which type usually gives the stronger and more accurate joint?",
        "answer": "The domino jointer."
      },
      {
        "question": "What is a domino in this jointing system?",
        "answer": "A loose tenon that fits into a mortice."
      }
    ]
  },
  {
    "id": "power-tools-domino-vs-biscuit-jointer-comparison",
    "title": "Domino Jointer vs Biscuit Jointer",
    "topic": "Power tools",
    "topicOrder": 15,
    "keywords": ["domino jointer", "biscuit jointer", "joint strength", "loose tenon", "biscuit joint"],
    "examFocus": [
      "Understand the main differences between domino and biscuit jointers",
      "Know the advantages and limits of each system",
      "Recognise which jointer is better for strong jointing work"
    ],
    "keyPoints": [
      "A domino jointer uses a drill-type cutter and loose tenons in different sizes.",
      "Different domino thicknesses and lengths can be used to make stronger joints.",
      "A biscuit jointer uses a small grooving saw and oval biscuits.",
      "Biscuits come in limited sizes, so the joint strength is more restricted.",
      "Domino jointers can produce deeper, wider and thicker joints.",
      "These larger joints give more surface contact and more glue area.",
      "Domino jointers are suitable for frames, doors, worktops, furniture and other strong jointing work.",
      "Extra attachments can improve the accuracy and positioning of domino joints.",
      "Biscuit jointers have no such attachments and rely more on accurate marking out and positioning.",
      "Biscuit joints are mainly used for lighter work or for aligning two parts.",
      "A domino jointer is more versatile, but different cutter sizes may need to be changed.",
      "A biscuit jointer is quick to position and the cutter usually only needs changing for sharpening."
    ],
    "commonMistakes": [
      "Using a biscuit joint where a strong structural joint is needed.",
      "Assuming biscuits and dominos give the same joint strength.",
      "Forgetting that domino jointers may need cutter changes for different sizes.",
      "Relying on a biscuit jointer without careful marking out."
    ],
    "miniCheck": [
      {
        "question": "Which jointer usually gives the stronger joint?",
        "answer": "The domino jointer."
      },
      {
        "question": "Why are domino joints stronger?",
        "answer": "They allow deeper and larger joints with more surface contact and glue area."
      },
      {
        "question": "What is a biscuit jointer mainly useful for?",
        "answer": "Lighter jointing work and aligning two pieces."
      }
    ]
  },
  {
    "id": "power-tools-powered-nailers-types-and-safety",
    "title": "Powered Nailers: Types and Safety",
    "topic": "Power tools",
    "topicOrder": 16,
    "keywords": ["powered nailer", "first fix nailer", "second fix nailer", "framing nailer", "nail gun safety"],
    "examFocus": [
      "Know the main types of powered nailers",
      "Understand where first fix and second fix nailers are used",
      "Recognise key safety rules when using or maintaining nailers"
    ],
    "keyPoints": [
      "Powered nailers are often called nail guns.",
      "Small nailers are used for light fixings such as pins or staples in thin materials.",
      "The main construction types are first fix and second fix nailers.",
      "A first fix nailer is also called a framing nailer.",
      "First fix nailers fire heavy gauge nails from 51 mm to 90 mm long.",
      "They are used for roofing, stud partitions and heavier joinery work.",
      "Second fix nailers use lighter gauge nails from 16 mm to 63 mm long.",
      "The shorter second fix nails are often called brads.",
      "Second fix nailers are used for trim work such as skirting and architrave.",
      "Powered nailers can run on electricity, battery, gas or compressed air.",
      "Second fix nailers are usually square in shape, while first fix nailers are often angled.",
      "An angled nailer helps reach tight corners more easily.",
      "Before maintenance or clearing a jam, remove the power source first.",
      "Always wear suitable eye and ear protection when using powered nailers."
    ],
    "commonMistakes": [
      "Using the wrong nailer for the type of work.",
      "Trying to clear a jam without disconnecting the power source.",
      "Working without eye and ear protection.",
      "Using a second fix nailer for heavy structural fixing."
    ],
    "miniCheck": [
      {
        "question": "What is another name for a first fix nailer?",
        "answer": "A framing nailer."
      },
      {
        "question": "What type of work is a second fix nailer mainly used for?",
        "answer": "Trim work such as skirting and architrave."
      },
      {
        "question": "What must you do before maintenance or clearing a jam?",
        "answer": "Remove the power source."
      }
    ]
  },
  {
    "id": "power-tools-sanders-abrasive-grades-and-good-finish",
    "title": "Sanders, Abrasive Grades and Good Finish",
    "topic": "Power tools",
    "topicOrder": 17,
    "keywords": ["detail sander", "abrasive paper", "grit grades", "surface finish", "sanding dust"],
    "examFocus": [
      "Know what a detail sander is used for",
      "Understand abrasive paper grades and their uses",
      "Recognise good practice for achieving a quality sanded finish"
    ],
    "keyPoints": [
      "A detail sander is used for fine sanding and for working in tight or awkward areas.",
      "It usually has a small triangular or delta-shaped pad.",
      "The sanding pad moves in an oscillating action.",
      "Most sanding sheets are fixed using a hook-and-loop system.",
      "Abrasive paper is commonly made with aluminium oxide grit.",
      "Lower grit numbers are coarser and remove material faster.",
      "Higher grit numbers are finer and give a smoother finish.",
      "P60 to P80 is mainly used for rough work and stock removal.",
      "P100 to P120 is used for general fine work and finishing.",
      "P180 to P240 is used for very fine finishing, often on hardwood or polished work.",
      "The letter P means the grit grade follows an international standard.",
      "Abrasive paper can clog with dust and resin, especially on softwood.",
      "Clogged abrasive can often be cleaned with an eraser instead of being replaced.",
      "Keep the sanding pad flat and apply only light pressure.",
      "Use progressively finer grits to improve the finish.",
      "Always use dust extraction and a suitable dust mask where needed.",
      "Work with the grain where possible.",
      "Use a plane, not a sander, to remove large amounts of material."
    ],
    "commonMistakes": [
      "Using very coarse paper for finishing work.",
      "Pressing down too hard on the sander.",
      "Holding the sander in one place too long.",
      "Ignoring clogged abrasive paper.",
      "Trying to remove heavy stock with a sander instead of a plane."
    ],
    "miniCheck": [
      {
        "question": "What is a detail sander mainly used for?",
        "answer": "Fine sanding and reaching tight areas."
      },
      {
        "question": "Which is coarser, P60 or P120?",
        "answer": "P60."
      },
      {
        "question": "What should you do before changing to a new sanding sheet if it is only clogged?",
        "answer": "Clean it, for example with an eraser."
      }
    ]
  },
  {
    "id": "power-tools-oscillating-multi-tool-uses-and-limits",
    "title": "Oscillating Multi-Tool Uses and Limits",
    "topic": "Power tools",
    "topicOrder": 18,
    "keywords": ["multi-tool", "oscillating tool", "plunge cut", "tight spaces", "quick-change blade"],
    "examFocus": [
      "Know how an oscillating multi-tool works",
      "Recognise the types of work it can carry out",
      "Understand its main advantage and limitation"
    ],
    "keyPoints": [
      "An oscillating multi-tool is a versatile power tool that can cut and sand with different attachments.",
      "It works by vibrating the blade or accessory thousands of times per minute.",
      "Its compact size makes it useful in tight spaces.",
      "It can make accurate cuts where larger saws cannot reach.",
      "Different accessories allow it to saw timber, cut plasterboard and cut metal.",
      "It can also be used for plunge cuts, sanding and scraping.",
      "Many models have a tool-free quick-change system for changing blades.",
      "A main weakness is that blades can go blunt quite quickly.",
      "Blunt blades can leave a poorer finish and can burn the material.",
      "It is especially valued for restoration work, laminate flooring and tiling.",
      "It is also useful for new-build and general maintenance work."
    ],
    "commonMistakes": [
      "Using a blunt blade and expecting a clean finish.",
      "Using the wrong accessory for the material.",
      "Forcing the tool instead of letting the blade do the work.",
      "Assuming the tool is only useful for one type of task."
    ],
    "miniCheck": [
      {
        "question": "Why is an oscillating multi-tool useful on site?",
        "answer": "It can cut and sand accurately in tight spaces."
      },
      {
        "question": "Name two jobs an oscillating multi-tool can do.",
        "answer": "Examples include plunge cuts, sanding, scraping, cutting timber, plasterboard or metal."
      },
      {
        "question": "What is one main disadvantage of oscillating multi-tools?",
        "answer": "The blades become blunt quite quickly."
      }
    ]
  },
  {
    "id": "power-tools-scanners-voltage-pens-and-avoiding-hidden-services",
    "title": "Scanners, Voltage Pens and Hidden Services",
    "topic": "Power tools",
    "topicOrder": 19,
    "keywords": ["scanner", "voltage indicator pen", "hidden services", "service runs", "studwork"],
    "examFocus": [
      "Know how scanners and voltage pens are used",
      "Understand safe practice around hidden cables and pipes",
      "Recognise how to avoid damaging service runs when drilling or fixing"
    ],
    "keyPoints": [
      "Scanners are used to detect hidden services, metal and solid timber behind surfaces.",
      "Some scanners have different modes to help identify the type of material found.",
      "When a scanner finds something hidden, it gives a warning sound.",
      "A voltage indicator pen checks whether cables, switches or sockets are live.",
      "When power is present, the pen lights up and may also buzz.",
      "A voltage pen is only for locating live power, not for electrical work or adjustments.",
      "Cables from sockets and switches usually run vertically behind the wall surface.",
      "Socket wiring may run in a ring, especially in kitchens and often in older properties.",
      "Water and gas pipes usually run vertically or horizontally.",
      "Avoid drilling or fixing near likely service runs.",
      "If unsure, carefully remove a small section of surface material to check for hidden services.",
      "If services are present and cannot be moved safely, choose a different fixing position.",
      "Scanners can also help find studwork for stronger and more secure fixings.",
      "Solid backgrounds such as masonry or studs are better fixing points than plasterboard alone."
    ],
    "commonMistakes": [
      "Drilling near sockets or switches without checking for cables.",
      "Using a voltage pen as if it is suitable for electrical repair work.",
      "Ignoring the likely path of pipes and cables inside walls.",
      "Fixing only into plasterboard when a stronger background is available."
    ],
    "miniCheck": [
      {
        "question": "What does a scanner help detect behind a wall?",
        "answer": "Hidden services, metal and solid timber."
      },
      {
        "question": "Should a voltage indicator pen be used to make electrical adjustments?",
        "answer": "No."
      },
      {
        "question": "Where do cables usually run from sockets and switches?",
        "answer": "Vertically behind the wall surface."
      }
    ]
  },
  {
    "id": "power-tools-transport-storage-and-maintenance",
    "title": "Transport, Storage and Maintenance of Power Tools",
    "topic": "Power tools",
    "topicOrder": 20,
    "keywords": ["tool storage", "transporting tools", "PAT test", "maintenance", "blunt tooling"],
    "examFocus": [
      "Understand how power tools should be transported and stored",
      "Know the basic maintenance needed for power tools",
      "Recognise when tooling must be sharpened or replaced"
    ],
    "keyPoints": [
      "Power tools are most likely to be damaged during transport.",
      "Tools should be secured in transit to prevent damage from other equipment and materials.",
      "Many power tools come in purpose-made storage boxes for protection.",
      "Tool trolleys and storage chests can help with safe transport.",
      "Open shelving in vans can give quick access but may leave tools exposed to damage.",
      "Trailing leads, guards and cutting edges are especially at risk if tools are stored loosely.",
      "Cleaning, maintaining and storing tools properly saves time and money.",
      "Safe storage also helps keep tools ready for use.",
      "Power tools usually need little maintenance apart from visual safety checks and regular PAT testing.",
      "Always follow the manufacturer’s instructions for maintenance and service intervals.",
      "Tooling such as saw blades and drill bits must be kept sharp.",
      "Disposable cutters should be replaced when they become damaged or do not cut properly.",
      "Signs of worn or damaged tooling include burning, smoke, poor finish and difficult control.",
      "A blunt or damaged power tool is dangerous to use."
    ],
    "commonMistakes": [
      "Throwing tools loosely into a van without protection.",
      "Leaving cutting edges and leads exposed during transport.",
      "Ignoring regular safety checks and PAT testing.",
      "Continuing to use blunt or damaged blades and cutters."
    ],
    "miniCheck": [
      {
        "question": "When are power tools most likely to be damaged?",
        "answer": "During transport."
      },
      {
        "question": "What basic checks do power tools regularly need?",
        "answer": "Visual safety checks and PAT testing."
      },
      {
        "question": "What are signs that tooling needs sharpening or replacing?",
        "answer": "Burning, smoke, poor finish or the tool becoming hard to control."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-introduction-and-purpose",
    "title": "Why woodworking joints matter",
    "topic": "Produce woodworking joints",
    "topicOrder": 1,
    "keywords": ["woodworking joints", "frames", "loft hatch", "staircases", "roofs", "basic joint skills"],
    "examFocus": [
      "Understand why strong woodworking joints are important",
      "Know where woodworking joints are commonly used",
      "Recognise the need for both traditional skills and modern methods"
    ],
    "keyPoints": [
      "Carpenters and joiners use woodworking joints every day.",
      "Joints are needed in jobs such as roofs, staircases, frames and loft hatches.",
      "A joint must be strong enough for the job it is used for.",
      "Modern power tools and machinery speed up joint production.",
      "Basic hand skills and joint knowledge are still essential.",
      "To produce joints properly, you need to select timber, set out accurately, mark out correctly and cut carefully.",
      "This work also links to fitting hatch linings, skirtings and architraves."
    ],
    "commonMistakes": [
      "Relying on machines without understanding basic jointing methods.",
      "Using a joint that is not suitable for the job.",
      "Poor setting out or marking out before cutting."
    ],
    "miniCheck": [
      {
        "question": "Why must a woodworking joint suit the task?",
        "answer": "Because it must be strong enough for the job."
      },
      {
        "question": "Do modern tools replace basic jointing knowledge?",
        "answer": "No."
      },
      {
        "question": "Name two tasks where woodworking joints are used.",
        "answer": "Examples include roofs, staircases, frames and loft hatches."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-timber-selection-and-conversion",
    "title": "Selecting and understanding timber",
    "topic": "Produce woodworking joints",
    "topicOrder": 2,
    "keywords": ["timber selection", "durability", "workability", "softwood", "hardwood", "timber conversion"],
    "examFocus": [
      "Know how to choose suitable timber for woodworking joints",
      "Understand timber durability and workability",
      "Recognise basic timber conversion and grading information"
    ],
    "keyPoints": [
      "Timber is a natural material, so every piece is different.",
      "The tree species, shape and size affect colour, grain pattern and how easy the timber is to work.",
      "Structural timber, such as rafters and joists, should have fairly straight grain for strength and stability.",
      "Joinery timber may also be chosen for appearance and durability.",
      "Choosing the right timber helps produce stronger, longer-lasting work.",
      "Less durable timber should be treated with preservative to reduce rot.",
      "Timber durability is classified by how long it lasts when exposed to weather.",
      "Durability classes are: perishable 0 to 5 years, non-durable 5 to 10 years, moderately durable 10 to 15 years, durable 15 to 25 years, exceptionally durable over 25 years.",
      "Before sale, timber is felled, converted into sections and dried to a suitable moisture content.",
      "Softwoods such as spruce, fir and pine are widely used because they grow faster and are usually cheaper than hardwoods.",
      "At the sawmill, logs are debarked, sawn into sections and checked for quality, size and strength.",
      "Lower grade timber often has more knots, less straight grain and more defects."
    ],
    "commonMistakes": [
      "Choosing timber for appearance only and ignoring strength or durability.",
      "Using low-durability timber outside without treatment.",
      "Using poor quality timber with excessive defects for work needing strength and accuracy."
    ],
    "miniCheck": [
      {
        "question": "Why is straight grain important in structural timber?",
        "answer": "It helps maintain strength and shape under load."
      },
      {
        "question": "What should be done to less durable timber?",
        "answer": "Treat it with preservative."
      },
      {
        "question": "Which type of timber is commonly used in construction because it grows quickly?",
        "answer": "Softwood."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-common-timber-types",
    "title": "Common timbers used in joinery",
    "topic": "Produce woodworking joints",
    "topicOrder": 3,
    "keywords": ["softwood", "hardwood", "redwood", "whitewood", "oak", "sapele", "joinery timber"],
    "examFocus": [
      "Recognise common softwoods and hardwoods used in joinery",
      "Understand basic timber properties and uses",
      "Know which timbers suit internal or external work"
    ],
    "keyPoints": [
      "European redwood is a slow-grown softwood with a light cream to brown colour.",
      "European redwood machines well and is suitable for joinery work inside and outside.",
      "Yellow pine is a strong, moderately durable softwood with an open grain.",
      "Yellow pine is used for general joinery, including stairs and window boards.",
      "Whitewood is a fast-grown softwood with a cream-white colour.",
      "Whitewood is often used for stud walls, joists and rafters.",
      "Whitewood is non-durable, so it is mainly for internal use.",
      "Ash is a straight-grained hardwood that bends well.",
      "Ash is used for high-quality internal joinery, cabinets and sports equipment.",
      "Beech has a straight grain and fine texture and is used for furniture and internal joinery.",
      "Maple is hard, heavy and strong with a close grain.",
      "Maple is often used for flooring, furniture, worktops and shop fitting.",
      "Oak is moderately durable, works well by machine and glues well.",
      "Oak is used for flooring, skirtings, architraves and quality internal or external joinery.",
      "Sapele is a reddish-brown hardwood with fine texture and moderate durability.",
      "Sapele is used for internal joinery, external joinery and boat building."
    ],
    "commonMistakes": [
      "Using non-durable timber outside.",
      "Choosing timber without checking its strength, durability or intended use.",
      "Assuming all hardwoods are suitable for external work."
    ],
    "miniCheck": [
      {
        "question": "Which softwood is mainly for internal use because it is non-durable?",
        "answer": "Whitewood."
      },
      {
        "question": "Which hardwood is commonly used for skirtings and architraves?",
        "answer": "Oak."
      },
      {
        "question": "Which hardwood is known for bending well?",
        "answer": "Ash."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-tree-structure-and-treatment",
    "title": "Tree structure and timber treatment",
    "topic": "Produce woodworking joints",
    "topicOrder": 4,
    "keywords": ["heartwood", "sapwood", "pith", "growth rings", "cambium", "tanalised"],
    "examFocus": [
      "Identify the main parts of a tree",
      "Understand why timber treatment is important",
      "Know what tanalised timber means"
    ],
    "keyPoints": [
      "Some timbers suitable for outside work may still need preservative treatment.",
      "Preservative helps protect timber against rot.",
      "Preservative can be brushed on, sprayed, dipped or pressure treated.",
      "Pressure treatment is the most effective method.",
      "Timber that has been pressure treated is often called tanalised.",
      "The pith is the centre of the tree.",
      "Heartwood is the mature inner part of the tree and no longer grows.",
      "Sapwood is the living part that carries water and minerals from the roots upward.",
      "Growth rings show the tree's yearly growth.",
      "The cambium produces new wood and bark each year.",
      "The phloem, also called bast, is the inner bark that carries sugars and nutrients from the leaves.",
      "Some timber is steamed before seasoning to change its colour."
    ],
    "commonMistakes": [
      "Thinking exterior timber never needs treatment.",
      "Not recognising the difference between heartwood and sapwood.",
      "Confusing tanalised timber with untreated timber."
    ],
    "miniCheck": [
      {
        "question": "What is pressure-treated timber often called?",
        "answer": "Tanalised timber."
      },
      {
        "question": "Which part of the tree carries water and minerals upward?",
        "answer": "Sapwood."
      },
      {
        "question": "What does the cambium do?",
        "answer": "It produces new wood and bark each year."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-seasoning-defects",
    "title": "Common seasoning defects in timber",
    "topic": "Produce woodworking joints",
    "topicOrder": 5,
    "keywords": ["seasoning defects", "twisting", "cupping", "bowing", "springing", "case hardening", "dry rot"],
    "examFocus": [
      "Identify common defects caused during timber seasoning",
      "Understand what causes seasoning defects",
      "Recognise how defects affect timber use"
    ],
    "keyPoints": [
      "Seasoning defects happen when timber dries unevenly or too quickly.",
      "Twisting is caused by poor stacking during seasoning.",
      "A twisted board cannot be corrected once the defect has formed.",
      "Cupping happens when timber curls away from the centre of the trunk along its length.",
      "Springing is a curve along the edge of the timber while the face stays flat.",
      "Bowing is a curve along the face of the board rather than the edge.",
      "Case hardening happens when the outside dries too fast and moisture gets trapped inside.",
      "Splits and checks often form at the ends of boards as moisture is lost.",
      "Dry rot is a fungal attack that can develop when timber moisture content is above 20 percent.",
      "Dry rot timber may show fungus growth, white strands and a musty smell.",
      "Collapse, also called wash boarding, can happen when kiln drying is too fast."
    ],
    "commonMistakes": [
      "Using twisted or bowed timber without checking it first.",
      "Ignoring signs of dry rot or fungal attack.",
      "Drying timber too quickly during seasoning."
    ],
    "miniCheck": [
      {
        "question": "What causes twisting in timber?",
        "answer": "Poor stacking during seasoning."
      },
      {
        "question": "What is case hardening?",
        "answer": "When the outside dries too quickly and moisture stays trapped inside."
      },
      {
        "question": "At what moisture content can dry rot develop?",
        "answer": "Above 20 percent."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-handling-and-manufacturing-defects",
    "title": "Handling defects and foreign bodies",
    "topic": "Produce woodworking joints",
    "topicOrder": 6,
    "keywords": ["handling defects", "thunder shake", "manufacturing defects", "foreign bodies", "metal detector", "timber damage"],
    "examFocus": [
      "Recognise defects caused by handling and manufacture",
      "Understand the risks of foreign bodies in timber",
      "Know why timber should be checked before use"
    ],
    "keyPoints": [
      "Handling defects can happen before timber reaches the job.",
      "Thunder shake is a hairline fracture across the grain.",
      "Thunder shake can be caused by poor felling when the tree hits the ground badly.",
      "Timber can be damaged in transit if it is not properly supported and secured.",
      "Manufacturing defects can happen because of inaccurate machining or poor timber selection.",
      "Foreign bodies in timber include staples, nails, screws, grit and stones.",
      "Staples may be fixed to timber ends to stop splits opening further.",
      "Labels are sometimes attached to timber with staples.",
      "Grit and stones can get stuck in timber if it is placed on the ground.",
      "Recycled timber should be checked with a metal detector for hidden metal.",
      "Foreign bodies can damage tools and machinery.",
      "Loose metal or debris can become dangerous if dislodged during machining."
    ],
    "commonMistakes": [
      "Using timber without checking for hidden metal or debris.",
      "Failing to support timber properly during transport.",
      "Assuming recycled timber is free from nails or screws."
    ],
    "miniCheck": [
      {
        "question": "What is thunder shake?",
        "answer": "A hairline fracture across the grain."
      },
      {
        "question": "Why should recycled timber be scanned with a metal detector?",
        "answer": "To find hidden nails, screws or other metal."
      },
      {
        "question": "Why are foreign bodies in timber dangerous?",
        "answer": "They can damage tools and may fly out during machining."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-cutting-lists-and-setting-out-rods",
    "title": "Cutting lists and setting out rods",
    "topic": "Produce woodworking joints",
    "topicOrder": 7,
    "keywords": ["cutting list", "setting out rod", "nominal size", "finished size", "components", "profiles"],
    "examFocus": [
      "Understand the purpose of a cutting list",
      "Know how a setting out rod is used",
      "Recognise the difference between nominal and finished sizes"
    ],
    "keyPoints": [
      "A cutting list records each component, material, size and quantity needed for the job.",
      "The cutting list is used by the wood machinist to prepare timber.",
      "Nominal sizes are the rough sawn dimensions given before planing.",
      "Nominal sizes are usually 5 to 6 mm larger than the finished sizes.",
      "Finished sizes are the final dimensions after the timber has been planed straight, square and smooth.",
      "A setting out rod is used as a full-size reference for marking joints and profiles.",
      "Using a setting out rod helps keep repeated items the same size.",
      "A setting out rod also saves time when making more than one matching item.",
      "A profile is the shape formed on a timber section, such as a rebate or rounded edge.",
      "A smooth sheet material board is more accurate for a setting out rod than paper.",
      "Using sheet material avoids joining paper pieces together.",
      "Sheet material also avoids changes in size caused by humidity."
    ],
    "commonMistakes": [
      "Confusing nominal size with finished size.",
      "Marking out repeated items without using a setting out rod.",
      "Using unstable paper for detailed setting out."
    ],
    "miniCheck": [
      {
        "question": "What is a cutting list used for?",
        "answer": "To record the components, materials, sizes and quantities needed."
      },
      {
        "question": "How much bigger is nominal size usually than finished size?",
        "answer": "About 5 to 6 mm."
      },
      {
        "question": "Why is a setting out rod useful?",
        "answer": "It helps mark components accurately and keeps repeated items the same size."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-tools-for-marking-out",
    "title": "Tools used for marking out joints",
    "topic": "Produce woodworking joints",
    "topicOrder": 8,
    "keywords": ["marking out", "2H pencil", "tee square", "set square", "sliding bevel", "protractor"],
    "examFocus": [
      "Identify the main tools used for setting out",
      "Understand what each marking-out tool is used for",
      "Know why clear marking is important in joinery"
    ],
    "keyPoints": [
      "Marking out tools are used to set out joints and shapes accurately before cutting.",
      "A tape measure or ruler is used to measure lengths.",
      "A tee square is used to mark vertical lines.",
      "A pencil gauge and thumb rule are used to mark horizontal lines.",
      "An eraser is used to remove incorrect marks.",
      "A 2H pencil is preferred because it makes a clearer, finer line than a softer pencil.",
      "A 45 degree set square is used for 45 degree and 90 degree lines.",
      "A 60 degree and 30 degree set square is used for 60 degree, 30 degree and 90 degree lines.",
      "A straight edge is used to draw accurate straight lines.",
      "A sliding bevel is used to transfer angles.",
      "A protractor is used to measure and mark angles.",
      "A compass is used to draw circles and arcs.",
      "Dividers are used to divide spaces equally.",
      "Trammel heads and a beam are used to draw large circles and arcs."
    ],
    "commonMistakes": [
      "Using a soft pencil that produces thick, unclear lines.",
      "Using the wrong square for the angle needed.",
      "Marking out without checking measurements and lines carefully."
    ],
    "miniCheck": [
      {
        "question": "Why is a 2H pencil preferred for setting out?",
        "answer": "Because it produces a clearer line."
      },
      {
        "question": "What is a sliding bevel used for?",
        "answer": "To transfer angles."
      },
      {
        "question": "What are dividers used for?",
        "answer": "To divide spaces equally."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-sheet-material-selection",
    "title": "Choosing sheet materials for joinery work",
    "topic": "Produce woodworking joints",
    "topicOrder": 9,
    "keywords": ["sheet materials", "manufactured boards", "specification", "MR", "FR", "WBP", "building regulations"],
    "examFocus": [
      "Understand why sheet materials are used in joinery",
      "Know how to choose the correct board for the task",
      "Recognise common sheet material abbreviations"
    ],
    "keyPoints": [
      "Carpenters and joiners often use manufactured boards as well as solid timber.",
      "A common sheet size is 2440 mm by 1220 mm.",
      "Sheet materials are usually cheaper than solid wood.",
      "They are often more stable and easier to cut and fix.",
      "Some boards are suitable for internal use only, while others can be used externally.",
      "Using the wrong board can cause rot, delamination and staining.",
      "Incorrect materials may also fail to meet Building Regulations.",
      "The correct material should be identified in the specification or on the working drawings.",
      "MR means moisture-resistant and is suitable for humid areas such as kitchens and bathrooms.",
      "FR means fire-resistant and is used where fire protection is needed.",
      "WBP means weather- and boil-proof and is a plywood suitable for external use.",
      "MDF means medium density fibreboard.",
      "OSB means oriented strand board."
    ],
    "commonMistakes": [
      "Using internal-only boards in damp or external conditions.",
      "Ignoring the specification or working drawings.",
      "Confusing moisture-resistant boards with fire-resistant boards."
    ],
    "miniCheck": [
      {
        "question": "What does MR stand for?",
        "answer": "Moisture-resistant."
      },
      {
        "question": "Where should the correct sheet material be confirmed?",
        "answer": "In the specification or on the working drawings."
      },
      {
        "question": "What can happen if the wrong board is used?",
        "answer": "It can rot, delaminate, stain or fail regulations."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-common-manufactured-boards",
    "title": "Common manufactured boards and their uses",
    "topic": "Produce woodworking joints",
    "topicOrder": 10,
    "keywords": ["chipboard", "plywood", "MDF", "hardboard", "flexi ply", "engineered panels"],
    "examFocus": [
      "Identify common manufactured boards",
      "Know the main uses of different boards",
      "Understand which boards suit damp, curved or internal work"
    ],
    "keyPoints": [
      "Chipboard is made by bonding wood particles with heat and pressure.",
      "High-density chipboard is used for worktops, flooring and fire doors.",
      "Medium and normal grade chipboard is often used for kitchens and furniture.",
      "Standard chipboard swells and breaks down when wet, so MR chipboard is needed in damp conditions.",
      "Plywood is made from an odd number of veneers glued with each layer at right angles.",
      "More veneers usually mean a thicker and stronger board.",
      "WBP plywood can be used in wet areas if it is painted or stained.",
      "Marine plywood can resist full water exposure without delaminating.",
      "Flexi ply is designed to bend and is used for curved work.",
      "MDF is made from wood fibres bonded with synthetic resin.",
      "MDF has a smooth surface and is used for kitchens, furniture, staircases, skirtings and architraves.",
      "MDF is available in moisture-resistant and fire-resistant types.",
      "Flexible MDF has grooves cut into one face so it can bend for curved units.",
      "Hardboard is a lightweight, non-structural board mainly used internally for back panels and drawer bottoms.",
      "Laminated or engineered panels are made by gluing narrow timber pieces together to form a wide board.",
      "Engineered panels can be cut, planed, moulded and sanded like solid timber."
    ],
    "commonMistakes": [
      "Using standard chipboard where moisture is present.",
      "Using hardboard where structural strength is needed.",
      "Choosing a rigid board when a curved finish is required."
    ],
    "miniCheck": [
      {
        "question": "Which type of chipboard should be used in moist conditions?",
        "answer": "Moisture-resistant chipboard."
      },
      {
        "question": "What makes plywood strong?",
        "answer": "Its veneers are glued in layers at right angles."
      },
      {
        "question": "Which board is designed for curved work?",
        "answer": "Flexi ply or flexible MDF."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-halving-and-housing-joints",
    "title": "Halving joints and housing joints",
    "topic": "Produce woodworking joints",
    "topicOrder": 11,
    "keywords": ["halving joint", "lap joint", "housing joint", "through housing", "stopped housing", "tongued housing"],
    "examFocus": [
      "Recognise different types of halving joints",
      "Understand where halving and housing joints are used",
      "Know the basic form and purpose of a housing joint"
    ],
    "keyPoints": [
      "Halving joints are also called lap joints because one piece overlaps the other.",
      "Halving joints are used for lengthening timber and for framing work.",
      "Common uses include partition walls and wall plates for roofs and floors.",
      "Types of halving joint include corner, angled, tee, cross, dovetail and raked halving joints.",
      "A dovetail halving joint gives improved strength.",
      "Housing joints are used in door linings, loft hatches, shelving, staircases and sliding sash windows.",
      "A housing joint is made by cutting a shallow trench across the width of one timber piece.",
      "The housing is usually cut to one-third or one-half of the timber thickness, depending on the timber size.",
      "The matching piece fits into the housing at a right angle.",
      "Housing joints are fixed with wood adhesive and sometimes nails.",
      "A through housing runs across the full width of the timber.",
      "A stopped housing stops short of the edge so the joint is hidden.",
      "A shoulder or tongued housing has a shoulder on one side to help stop the joint pulling apart."
    ],
    "commonMistakes": [
      "Using the wrong halving joint for the job.",
      "Cutting the housing too deep or too shallow.",
      "Failing to fit the second piece tightly into the housing."
    ],
    "miniCheck": [
      {
        "question": "Why are halving joints also called lap joints?",
        "answer": "Because one part overlaps the other."
      },
      {
        "question": "What is a through housing joint?",
        "answer": "A housing cut across the full width of the timber."
      },
      {
        "question": "Which housing joint helps stop the corner from coming apart?",
        "answer": "A shoulder or tongued housing joint."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-mitre-and-mortice-tenon-joints",
    "title": "Mitre joints and mortice and tenon joints",
    "topic": "Produce woodworking joints",
    "topicOrder": 12,
    "keywords": ["mitre joint", "mortice and tenon", "beading", "architrave", "shooting board", "frame joints"],
    "examFocus": [
      "Understand the purpose of mitre joints",
      "Know how mitres are improved for accuracy and strength",
      "Recognise why mortice and tenon joints are widely used"
    ],
    "keyPoints": [
      "Mitre joints are used to continue mouldings or trims neatly around a corner.",
      "They are also used to form a 90 degree change in direction.",
      "Mitres are often used on beading, skirtings and architraves.",
      "A mitre hides the end grain and keeps the profile running neatly through the joint.",
      "Accurate mitres are difficult to cut by hand without a mitre box, mitre saw or chop saw.",
      "Most mitre joints rely on adhesive to hold them together.",
      "Mitres can be strengthened with nails, biscuits or wooden dowels.",
      "A shooting board can be used to trim a mitre accurately.",
      "A shooting board has a 45 degree back stop to suit the mitre angle.",
      "Mortice and tenon joints are very strong joints used in joinery.",
      "They are commonly used in doors, frames, windows and staircases.",
      "The tenon is the male part of the joint.",
      "The mortice is the female part of the joint.",
      "A basic mortice and tenon joint can be wedged and dowelled to increase strength."
    ],
    "commonMistakes": [
      "Cutting mitres inaccurately so the joint opens up.",
      "Relying on a mitre without enough fixing strength.",
      "Confusing the mortice with the tenon."
    ],
    "miniCheck": [
      {
        "question": "Why is a mitre joint used on mouldings and trims?",
        "answer": "To hide end grain and continue the profile neatly around a corner."
      },
      {
        "question": "What tool helps trim a mitre accurately?",
        "answer": "A shooting board."
      },
      {
        "question": "Which part of a mortice and tenon joint is the male part?",
        "answer": "The tenon."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-dovetail-marking-and-cutting",
    "title": "Marking out and cutting a dovetail joint",
    "topic": "Produce woodworking joints",
    "topicOrder": 13,
    "keywords": ["dovetail joint", "sliding bevel", "shoulder line", "pins", "waste", "dry fit"],
    "examFocus": [
      "Understand the basic steps for marking out a dovetail joint",
      "Know the correct order for cutting and fitting a dovetail",
      "Recognise the purpose of dry fitting before final assembly"
    ],
    "keyPoints": [
      "Set a sliding bevel to the correct dovetail angle, or use a dovetail template.",
      "Use a 1:6 ratio for softwood dovetails and 1:8 for hardwood dovetails.",
      "Mark the timber thickness on the end of the joint to form the shoulder line.",
      "Mark the dovetails in an alternating pattern.",
      "Clearly mark the waste sections before cutting.",
      "Hold the timber in a vice so one side of the dovetail is vertical.",
      "Use a fine-toothed dovetail saw to cut the cheeks.",
      "Turn the timber and repeat for the other side.",
      "Use a coping saw to remove the waste between the dovetails.",
      "Cut along the shoulder lines with a dovetail saw.",
      "Use a bevel edge chisel to pare the shoulder line neatly.",
      "Use the finished dovetails as a template to mark the pins on the second piece.",
      "Mark the pin depth and shoulder line, then cut the sockets in the same way.",
      "Assemble the joint with a mallet and a wood block to avoid damaging it.",
      "Each joint should be dry fitted before final gluing."
    ],
    "commonMistakes": [
      "Not marking the waste clearly before cutting.",
      "Cutting past the shoulder line.",
      "Skipping the dry fit before final assembly."
    ],
    "miniCheck": [
      {
        "question": "What ratio is used for dovetails in softwood?",
        "answer": "1:6."
      },
      {
        "question": "What should be marked before cutting so you know what to remove?",
        "answer": "The waste parts of the joint."
      },
      {
        "question": "Why is dry fitting done first?",
        "answer": "To check each joint and the overall frame before gluing."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-frame-assembly-and-adhesives",
    "title": "Frame assembly, adhesives and gluing up",
    "topic": "Produce woodworking joints",
    "topicOrder": 14,
    "keywords": ["wood adhesive", "PVA", "PU", "UF", "gluing up", "squaring rod", "horns"],
    "examFocus": [
      "Know the main stages of assembling and gluing a frame",
      "Recognise common wood adhesives and their uses",
      "Understand checks needed before a frame is finished"
    ],
    "keyPoints": [
      "After cutting the joints, assemble the frame without glue to check it against the setting out rod.",
      "Take the frame apart and sand the inside edges before final assembly.",
      "Use a suitable wood adhesive for the job, especially where moisture resistance is needed.",
      "PVA is a common adhesive used straight from the bottle.",
      "PVA dries clear and is available in interior and exterior grades.",
      "Excess PVA can be wiped away with a damp cloth before it stains the wood.",
      "PU adhesive forms a very strong bond and foams to fill gaps.",
      "PU is suitable for internal and external use.",
      "Excess PU should be left to cure before being removed with a chisel.",
      "UF adhesive is mixed from powder with water before use.",
      "UF is very strong and is often used for laminating curved work.",
      "For gluing up, place the frame on level bench bearers.",
      "Apply adhesive, assemble the frame with a mallet and pull the joints together with a sash clamp.",
      "Check the frame is square by comparing both diagonals with a squaring rod.",
      "Make sure the frame is not twisted before driving wedges into the mortices.",
      "Trim the wedges, remove the clamps and plane the joints flat.",
      "Cut off the horns after final assembly.",
      "Finish by sanding the frame and removing the sharp arris for a better finish.",
      "Always follow the manufacturer's safety instructions when using, storing and disposing of adhesives."
    ],
    "commonMistakes": [
      "Using an adhesive that is not suitable for the conditions.",
      "Not checking the frame for square before finishing.",
      "Removing excess PU glue before it has cured."
    ],
    "miniCheck": [
      {
        "question": "What tool is used to check that a frame is square?",
        "answer": "A squaring rod."
      },
      {
        "question": "Which adhesive foams to fill gaps in joints?",
        "answer": "PU adhesive."
      },
      {
        "question": "Why are horns left on a frame during assembly?",
        "answer": "To help strengthen the joints until final trimming."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-skirting-and-architrave-purpose",
    "title": "Purpose of skirting and architraves",
    "topic": "Produce woodworking joints",
    "topicOrder": 15,
    "keywords": ["skirting", "architrave", "margin", "expansion gap", "door lining", "jambs"],
    "examFocus": [
      "Understand the purpose of skirting and architraves",
      "Know why architraves are fitted before skirting",
      "Recognise the reason for leaving a margin on a door lining"
    ],
    "keyPoints": [
      "Skirting is fixed at the bottom of walls to protect them from damage.",
      "Skirting also hides expansion gaps left at floor level.",
      "It provides a neat finish between the wall and floor.",
      "Architraves are normally fitted before skirting boards.",
      "The skirting can then butt neatly into the architrave.",
      "Architraves run down the jambs of the door lining to the floor.",
      "The edge of the architrave is set back from the face of the lining to create a margin.",
      "A margin is usually about 6 to 9 mm wide.",
      "Larger architraves may need a wider margin.",
      "Margins allow hinges and other ironmongery to be recessed without affecting the architrave.",
      "Margins also help stop the door from binding.",
      "The profiled edge of the architrave should face towards the door opening.",
      "Top corners are mitred at 45 degrees so the profile continues neatly around the frame."
    ],
    "commonMistakes": [
      "Fitting skirting before architraves.",
      "Setting the architrave flush with the lining and leaving no margin.",
      "Facing the moulded edge the wrong way."
    ],
    "miniCheck": [
      {
        "question": "Why is skirting fitted at the bottom of walls?",
        "answer": "To protect the wall and hide expansion gaps."
      },
      {
        "question": "Why are architraves usually fitted before skirting?",
        "answer": "So the skirting can butt neatly against them."
      },
      {
        "question": "What is the gap around the lining called?",
        "answer": "The margin."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-fixing-architraves",
    "title": "Marking out and fixing architraves",
    "topic": "Produce woodworking joints",
    "topicOrder": 16,
    "keywords": ["architrave fixing", "combination square", "mitre", "head architrave", "leg architrave", "nail gun"],
    "examFocus": [
      "Know the tools used to mark out, cut and fix architraves",
      "Understand the sequence for fitting architraves",
      "Recognise good practice for fixing and hiding nail holes"
    ],
    "keyPoints": [
      "Tools used include a 2H pencil, combination square, rule, tape measure, sliding bevel, tenon saw, mitre box or mitre saw, block plane, claw hammer, nail punch or second fix nail gun, and PPE.",
      "Set the combination square to the required margin and mark the margin line around the door lining.",
      "Cut a 45 degree mitre on one end of the head architrave.",
      "Make sure the moulding faces towards the margin when fitted.",
      "Position the head architrave so its lower edge lines up with the margin line.",
      "Mark the opposite mitre, cut it and fix the head architrave in place.",
      "If fixing by hand, nails can be left slightly proud at first.",
      "If using a power mitre saw, grab adhesive can be applied and the architrave fixed with a nail gun.",
      "Fixings should be hidden by nailing through the fillet or quirk where the profile casts a shadow.",
      "Hold each leg architrave in place and mark the top of the fixed head on the back.",
      "Mark and cut the mitres on both leg architraves.",
      "Check the fit and plane the mitres if needed to get a tight joint.",
      "Glue and nail the leg architraves in position once the fit is correct.",
      "Fixings are commonly spaced 200 to 300 mm apart.",
      "Raised nails are punched below the surface before filling."
    ],
    "commonMistakes": [
      "Cutting the mitre the wrong way round.",
      "Not lining the architrave up with the margin.",
      "Leaving visible fixings in exposed parts of the profile."
    ],
    "miniCheck": [
      {
        "question": "What tool is used to mark an even margin around the lining?",
        "answer": "A combination square."
      },
      {
        "question": "At what angle are architrave corners usually mitred?",
        "answer": "45 degrees."
      },
      {
        "question": "Where should fixings be hidden on an architrave?",
        "answer": "Through the fillet or quirk."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-timber-shrinkage-and-distortion",
    "title": "Timber Shrinkage and Distortion",
    "topic": "Produce woodworking joints",
    "topicOrder": 1,
    "keywords": ["growth rings", "grain direction", "cupping", "diamonding", "moisture content"],
    "examFocus": [
      "Understand how timber conversion affects shrinkage",
      "Recognise how grain angle changes distortion",
      "Know why timber dries and moves"
    ],
    "keyPoints": [
      "How a tree trunk is sawn affects grain direction, strength and stability.",
      "Timber shrinks very little along its length.",
      "Shrinkage is greatest along the growth rings.",
      "Shrinkage is least across the growth rings.",
      "As timber dries, it can change shape and distort.",
      "Boards with grain at 45° or less are called tangential cut.",
      "Tangential cut boards tend to shrink away from the centre of the tree.",
      "This shrinkage can cause cupping.",
      "Boards with grain above 45° are called radial cut or quarter sawn.",
      "Freshly cut timber dries naturally until it reaches equilibrium moisture content.",
      "Equilibrium moisture content means the timber moisture matches the surrounding environment."
    ],
    "commonMistakes": [
      "Assuming timber stays the same shape after cutting.",
      "Ignoring the effect of grain angle on movement.",
      "Using timber without considering moisture content."
    ],
    "miniCheck": [
      {
        "question": "Which type of cut is more likely to cup?",
        "answer": "Tangential cut timber."
      },
      {
        "question": "What happens to moist timber after it is cut?",
        "answer": "It dries until it reaches equilibrium moisture content."
      },
      {
        "question": "Does timber shrink much along its length?",
        "answer": "No, shrinkage along the length is very small."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-timber-conversion-methods",
    "title": "Timber Conversion Methods",
    "topic": "Produce woodworking joints",
    "topicOrder": 2,
    "keywords": ["through and through", "quarter sawn", "boxed heart", "radial cut", "tangential cut"],
    "examFocus": [
      "Know the main timber conversion methods",
      "Compare strengths and weaknesses of each method",
      "Understand where different cuts are best used"
    ],
    "keyPoints": [
      "Through and through sawing is the simplest and cheapest conversion method.",
      "This method creates little waste.",
      "Boards cut near the centre are more likely to shrink and distort.",
      "Quarter sawn timber gives the best quality boards.",
      "Quarter sawing produces mostly radial cut timber.",
      "Quarter sawing creates more waste and takes longer to produce.",
      "This makes quarter sawn timber more expensive.",
      "Radial cut boards are less likely to distort than tangential cut boards.",
      "Radial cut timber is a good choice for high-quality joinery.",
      "Radial cut timber is not as strong as tangential cut timber, but it is harder wearing.",
      "This makes radial cut boards suitable for flooring.",
      "Tangential cut timber is the strongest.",
      "Tangential cut timber is preferred for joists and structural beams.",
      "Tangential boards often show an attractive flame figuring pattern on the face.",
      "When joining tangential boards, alternate the end grain pattern to reduce cupping and improve stability.",
      "If the centre of a tree is rotten or shaken, usable timber can still be cut around it.",
      "This method is called boxed heart and produces radial cut boards."
    ],
    "commonMistakes": [
      "Choosing quarter sawn timber when strength is the main priority.",
      "Joining tangential boards without alternating the end grain.",
      "Forgetting that higher-quality conversion methods usually create more waste and cost more."
    ],
    "miniCheck": [
      {
        "question": "Which conversion method is the simplest and most cost-effective?",
        "answer": "Through and through sawing."
      },
      {
        "question": "Which cut is best for superior joinery because it is less likely to distort?",
        "answer": "Radial cut timber."
      },
      {
        "question": "What is boxed heart used for?",
        "answer": "Cutting usable boards around a rotten or shaken core."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-timber-seasoning-basics",
    "title": "Why Timber Is Seasoned",
    "topic": "Produce woodworking joints",
    "topicOrder": 3,
    "keywords": ["seasoning", "moisture content", "green timber", "dry rot", "moisture meter"],
    "examFocus": [
      "Understand why timber is seasoned",
      "Know the moisture content needed for different uses",
      "Recognise how moisture affects timber performance"
    ],
    "keyPoints": [
      "Seasoning means drying timber to lower its moisture content.",
      "Timber should be dried below 20% moisture content to reduce the risk of dry rot.",
      "Timber that has not been dried is called green timber.",
      "Green timber can be easier to work because it is softer.",
      "Green oak is often used in timber-framed buildings because joints are easier to cut before the wood hardens.",
      "As green oak dries, it shrinks and can develop surface shakes.",
      "For outside construction work, timber does not always need seasoning because it will adjust to outdoor conditions naturally.",
      "Timber for internal carpentry and joinery is dried to make it lighter and easier to machine.",
      "Seasoned timber shrinks less after installation.",
      "Paints, stains and other finishes stick better to seasoned timber.",
      "Typical moisture levels are: structural timber 20% or less, external joinery 15–18%, internal timber 10–15%, and timber near heat sources 8–10%.",
      "A moisture meter checks timber moisture content by measuring electrical resistance between two metal pins."
    ],
    "commonMistakes": [
      "Using timber above 20% moisture content where dry conditions are required.",
      "Assuming green timber is ready for internal joinery.",
      "Ignoring the correct moisture content for the job."
    ],
    "miniCheck": [
      {
        "question": "What does seasoning do to timber?",
        "answer": "It reduces the moisture content."
      },
      {
        "question": "What is timber called if it has not been dried?",
        "answer": "Green timber."
      },
      {
        "question": "What moisture content is usually suitable for most internal timber work?",
        "answer": "10–15%."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-methods-of-seasoning-timber",
    "title": "Methods of Seasoning Timber",
    "topic": "Produce woodworking joints",
    "topicOrder": 4,
    "keywords": ["air drying", "kiln drying", "microwave vacuum seasoning", "piling sticks", "case hardening"],
    "examFocus": [
      "Know the main methods of seasoning timber",
      "Compare advantages and disadvantages of air and kiln drying",
      "Recognise defects caused by poor drying"
    ],
    "keyPoints": [
      "Timber can be seasoned by air drying, kiln drying, or microwave vacuum seasoning.",
      "Air drying is done by stacking timber in open-sided sheds.",
      "Piling sticks are placed between boards so air can move through the stack.",
      "Large boards are placed at the bottom of the stack for support.",
      "Air-dried timber is usually more stable.",
      "Air drying reduces the chance of defects such as shakes, splitting and twisting.",
      "The main disadvantage of air drying is the time it takes.",
      "Depending on the timber type and thickness, air drying can take months or even years.",
      "Kiln drying uses a temperature-controlled kiln to dry timber quickly.",
      "Timber is loaded into the kiln on trolleys.",
      "Heat removes moisture and the hot damp air is carried away through ventilation.",
      "Kiln drying can season timber in a few days, depending on the timber.",
      "A disadvantage of kiln drying is that timber may dry too fast.",
      "Drying too quickly can cause case hardening.",
      "Case hardening happens when the outer surfaces dry first and trap moisture in the middle.",
      "Case-hardened timber can be difficult to work and cut."
    ],
    "commonMistakes": [
      "Stacking timber without piling sticks.",
      "Choosing speed over stability without considering defects.",
      "Drying timber too quickly and causing case hardening."
    ],
    "miniCheck": [
      {
        "question": "Why are piling sticks used in air drying?",
        "answer": "To allow air to flow between the boards."
      },
      {
        "question": "Which seasoning method is the quickest?",
        "answer": "Kiln drying."
      },
      {
        "question": "What is case hardening?",
        "answer": "When the outer timber dries too fast and traps moisture in the centre."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-timber-sizes-and-finished-sections",
    "title": "Timber Sizes and Finished Sections",
    "topic": "Produce woodworking joints",
    "topicOrder": 5,
    "keywords": ["timber sizes", "PSE", "PAR", "CLS", "machined timber", "finished sizes"],
    "examFocus": [
      "Know common timber size ranges",
      "Understand how machining changes timber dimensions",
      "Recognise the meaning of PSE, PAR and CLS"
    ],
    "keyPoints": [
      "Sawn hardwoods are commonly supplied in widths from 100 mm to 550 mm.",
      "Hardwood lengths usually range from 2 metres to 4.9 metres.",
      "Common hardwood thicknesses include 26, 32, 38, 51, 65, 76 and 100 mm.",
      "Softwoods are commonly supplied in widths from 100 mm to 275 mm.",
      "Softwood lengths usually range from 1.8 metres to 7.2 metres in 300 mm steps.",
      "Common softwood thicknesses include 19, 25, 38, 50, 63, 75 and 100 mm.",
      "When sawn timber is machined flat, square and smooth, its thickness and width are usually reduced by 5 to 6 mm.",
      "PSE means planed square edged.",
      "The term PSE is also sometimes used for timber planed on all four sides.",
      "PAR means planed all round and should be used for timber planed on all four sides.",
      "CLS is timber planed smooth on all four sides with rounded corners.",
      "CLS is used a lot for structural and carcassing work because it is uniform and easier to handle.",
      "Common CLS sizes used in the UK are 38 × 63 mm, 38 × 89 mm, 38 × 140 mm, 38 × 184 mm, 38 × 235 mm and 38 × 285 mm."
    ],
    "commonMistakes": [
      "Forgetting that machined timber finishes smaller than its sawn size.",
      "Mixing up PSE and PAR.",
      "Assuming CLS only comes from Canada."
    ],
    "miniCheck": [
      {
        "question": "What usually happens to timber size after machining?",
        "answer": "It is reduced by about 5 to 6 mm in thickness and width."
      },
      {
        "question": "What does PAR mean?",
        "answer": "Planed all round."
      },
      {
        "question": "What feature makes CLS easier to handle?",
        "answer": "It is planed on all four sides and has rounded corners."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-stress-grading-and-timber-defects",
    "title": "Stress Grading and Timber Defects",
    "topic": "Produce woodworking joints",
    "topicOrder": 6,
    "keywords": ["stress grading", "structural timber", "C16", "C32", "knots", "waney edge"],
    "examFocus": [
      "Understand why structural timber is graded",
      "Know the grading marks for hardwoods and softwoods",
      "Recognise common timber defects and their causes"
    ],
    "keyPoints": [
      "Structural timbers are used where loads must be supported in a building.",
      "Examples include floor joists, rafters and partition walls.",
      "Timber used for structural work must be graded and should not contain major defects such as large splits or large knots.",
      "Timber can be stress graded by a trained inspector or by machine.",
      "Hardwoods are graded with the letter D followed by a number.",
      "A higher hardwood grade number means stronger timber.",
      "Softwoods are graded with the letter C followed by a number.",
      "Common softwood structural grades are C16 and C32.",
      "Live knots are natural defects formed where branches grew from the trunk.",
      "Dead knots develop where damaged or removed branches once drew sap, and these knots can loosen or fall out after conversion.",
      "Cup shakes happen when the annular rings separate, often because the tree has bent too much in strong winds.",
      "Sap ducts or sap pockets are growth defects often found in resinous timbers such as pine.",
      "After conversion, resin can leak from sap ducts.",
      "Waney edge is where bark remains on the edge of the board and shows the original shape of the trunk."
    ],
    "commonMistakes": [
      "Using ungraded timber for structural work.",
      "Thinking all knots are harmless in load-bearing timber.",
      "Missing defects such as waney edge or dead knots during selection."
    ],
    "miniCheck": [
      {
        "question": "What do the grades C16 and C32 refer to?",
        "answer": "Common structural grades for softwood."
      },
      {
        "question": "How are hardwoods marked for strength grading?",
        "answer": "With the letter D and a number."
      },
      {
        "question": "What is waney edge?",
        "answer": "Bark left on the edge of a board showing the original shape of the trunk."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-hand-tool-checks-and-responsibilities",
    "title": "Checking Hand Tools Before Use",
    "topic": "Produce woodworking joints",
    "topicOrder": 7,
    "keywords": ["hand tools", "inspection", "maintenance", "defective tools", "RIDDOR", "HSE"],
    "examFocus": [
      "Understand why hand tools must be checked",
      "Know employer and employee responsibilities",
      "Recognise when tools must be removed from use"
    ],
    "keyPoints": [
      "Hand tools used for woodworking joints must be checked and maintained regularly.",
      "Good maintenance helps keep tools safe and working properly.",
      "Blunt or damaged tools increase the risk of accidents.",
      "Employers must provide tools that are safe and kept in good condition.",
      "Employees must report damaged or faulty tools to a supervisor.",
      "Any tool with a fault that cannot be repaired must be labelled out of action.",
      "Unsafe tools must not be used.",
      "Carpenters and joiners should inspect hand tools before each use.",
      "Workers should be trained to spot faults and deal with minor repairs where appropriate.",
      "Cutting and planing tools need routine sharpening because edges wear down over time.",
      "Employers should keep records of maintenance carried out on tools and equipment.",
      "If a serious workplace accident is investigated, maintenance records may be checked."
    ],
    "commonMistakes": [
      "Using a tool without checking its condition first.",
      "Failing to report defective tools.",
      "Continuing to use a tool that should be taken out of action."
    ],
    "miniCheck": [
      {
        "question": "What should happen to a tool that cannot be repaired safely?",
        "answer": "It should be labelled out of action and not used."
      },
      {
        "question": "Who must report defective tools?",
        "answer": "The employee or user of the tool."
      },
      {
        "question": "Why do cutting tools need regular maintenance?",
        "answer": "Because their sharp edges wear down with use."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-common-hand-tool-faults-and-remedies",
    "title": "Common Hand Tool Faults and Fixes",
    "topic": "Produce woodworking joints",
    "topicOrder": 8,
    "keywords": ["chisels", "mallets", "handsaws", "hammers", "planes", "tool faults"],
    "examFocus": [
      "Recognise common faults in woodworking hand tools",
      "Know basic remedies for damaged tools",
      "Understand when a tool should be replaced"
    ],
    "keyPoints": [
      "A blunt chisel must be resharpened.",
      "A chipped or over-sharpened chisel edge must be reground and then sharpened again.",
      "A chisel with a split wooden handle should be taken out of use and replaced.",
      "A bent chisel should be replaced because straightening it can weaken it further.",
      "A timber mallet with a split head needs a new head or full replacement.",
      "If a mallet face is worn, it can be cut flat again unless this weakens the tool too much.",
      "A handsaw that jams in the cut may have lost its set.",
      "A reusable saw should be reset and sharpened if possible.",
      "A hardpoint saw that cannot be reset should be replaced.",
      "A saw with blunt teeth should be sharpened or replaced.",
      "A dirty hammer face can be cleaned and flattened with abrasive paper.",
      "A hammer with a loose head is unsafe and should be rehandled or replaced.",
      "A blunt plane iron must be sharpened.",
      "If a plane clogs with shavings, the cap iron may need adjusting closer to the cutting edge.",
      "A chipped plane iron must be reground and honed before use.",
      "If a plane cuts more on one side, adjust the iron so it projects evenly.",
      "Gouge marks from a plane can be caused by too much cut or a badly shaped edge."
    ],
    "commonMistakes": [
      "Hitting a wooden-handled chisel with a hammer instead of a mallet.",
      "Trying to keep using a bent or unsafe tool.",
      "Ignoring poor cutting performance instead of correcting the fault."
    ],
    "miniCheck": [
      {
        "question": "What should you do with a bent chisel?",
        "answer": "Replace it."
      },
      {
        "question": "What may cause a handsaw to jam in the kerf?",
        "answer": "The teeth have lost their set."
      },
      {
        "question": "What should you adjust if a plane keeps clogging with shavings?",
        "answer": "The cap iron."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-face-side-face-edge-and-frame-layout",
    "title": "Choosing Face Side and Face Edge",
    "topic": "Produce woodworking joints",
    "topicOrder": 9,
    "keywords": ["setting out rod", "face side", "face edge", "frame layout", "defects"],
    "examFocus": [
      "Understand how to prepare timber before marking out joints",
      "Know how to choose face side and face edge",
      "Recognise the correct layout of frame parts on a setting out rod"
    ],
    "keyPoints": [
      "Check each piece of timber for defects and slight imperfections before marking out.",
      "Place defects where they will be least visible if possible.",
      "Some defects may be removed later when rebates, grooves or mouldings are cut.",
      "Choose the best face and best edge first.",
      "Mark them clearly as the face side and face edge using a 2H pencil.",
      "Lay all four frame parts on the setting out rod before marking the joints.",
      "Keep the face sides facing up.",
      "Keep the face edges facing towards the centre of the rod.",
      "This layout shows the final assembled position of the frame.",
      "Once the parts are arranged correctly, do not change their position."
    ],
    "commonMistakes": [
      "Marking out before checking the timber for defects.",
      "Choosing the wrong face side or face edge.",
      "Moving frame parts after they have been arranged on the setting out rod."
    ],
    "miniCheck": [
      {
        "question": "What should you do before marking face side and face edge?",
        "answer": "Inspect the timber for defects and imperfections."
      },
      {
        "question": "Which way should the face sides point on the setting out rod?",
        "answer": "Upwards."
      },
      {
        "question": "Should the arranged frame parts be moved after layout?",
        "answer": "No."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-transferring-mortices-and-tenons",
    "title": "Marking Mortices, Tenons and Shoulders",
    "topic": "Produce woodworking joints",
    "topicOrder": 10,
    "keywords": ["mortice", "tenon", "shoulders", "try square", "jambs", "rails"],
    "examFocus": [
      "Know how mortice and tenon positions are transferred",
      "Understand how to use a try square correctly",
      "Recognise why marking must be taken from face side and face edge"
    ],
    "keyPoints": [
      "The side parts of a frame are called stiles when the rails fit between the top and bottom pieces.",
      "Line up one jamb with the setting out marks before transferring mortice positions onto the timber edge.",
      "Place the two jambs together as a pair with the face edge marks facing each other.",
      "Use a try square and 2H pencil to copy the mortice positions from the first jamb to the second.",
      "Transfer the lines around the timber carefully.",
      "Keep the stock of the try square tight against the face side or face edge when marking.",
      "This helps the lines meet correctly around the timber.",
      "Place the top or bottom rail on the rod and line it up with the setting out marks.",
      "Transfer the shoulder positions from the rod onto the rail.",
      "Put the top and bottom rails together as a pair with the face edges facing up.",
      "Use a try square and pencil to transfer the tenon positions across both rails.",
      "Mark shoulder lines squarely all the way around the ends of the timber.",
      "Shoulders add strength to the joint.",
      "Always mark from the face side and face edge to keep the joints accurate."
    ],
    "commonMistakes": [
      "Marking from different faces and edges.",
      "Not holding the try square firmly against the reference face.",
      "Failing to mark shoulders squarely around the timber."
    ],
    "miniCheck": [
      {
        "question": "What tool is used to transfer lines squarely around the timber?",
        "answer": "A try square."
      },
      {
        "question": "Why must marking always be taken from the face side and face edge?",
        "answer": "To keep the joints accurate and ensure they fit properly."
      },
      {
        "question": "What do shoulders do in a woodworking joint?",
        "answer": "They increase the strength of the joint."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-regulations-and-joint-types",
    "title": "Tool Safety Rules and Joint Categories",
    "topic": "Produce woodworking joints",
    "topicOrder": 11,
    "keywords": ["OSB", "HASAWA", "PUWER", "PPE", "COSHH", "woodworking joints"],
    "examFocus": [
      "Know key safety rules linked to woodworking hand tools",
      "Understand what affects the choice of joint",
      "Recognise the main classifications of woodworking joints"
    ],
    "keyPoints": [
      "OSB is a low-cost timber sheet material used for roofing, flooring and cladding.",
      "OSB is made from wood strands bonded with water-resistant resin.",
      "OSB must be sealed to protect it from weather.",
      "When using woodworking tools, important safety controls include HASAWA, PUWER and PPE regulations.",
      "COSHH applies when working with hazardous materials such as wood adhesives.",
      "Abrasive wheel safety rules apply when maintaining tools like chisels and planes.",
      "Vibration regulations apply to tools such as sanders.",
      "Noise regulations must be considered when using equipment that creates high sound levels.",
      "Environmental regulations also apply to woodworking tasks.",
      "A woodworking joint is the connection of two pieces of timber.",
      "Some joints rely on adhesive, while others use fixings such as nails, screws or bolts.",
      "The joint chosen depends on strength, toughness, flexibility and appearance.",
      "The material being joined also affects the type of joint used.",
      "Joints for solid timber can be different from those used for boards such as MDF and chipboard.",
      "More complex joints take longer to make and can increase the cost of a project.",
      "Woodworking joints are grouped into three main types: widening joints, lengthening joints and framing joints."
    ],
    "commonMistakes": [
      "Forgetting that adhesives are covered by COSHH.",
      "Choosing a joint without considering the material being joined.",
      "Ignoring the extra time and cost of more complex joints."
    ],
    "miniCheck": [
      {
        "question": "What does OSB need if it is exposed to weather?",
        "answer": "It must be sealed."
      },
      {
        "question": "Name the three main classifications of woodworking joints.",
        "answer": "Widening joints, lengthening joints and framing joints."
      },
      {
        "question": "What factors affect the choice of joint?",
        "answer": "Strength, toughness, flexibility, appearance and the material used."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-widening-joints-and-panel-stability",
    "title": "Widening Joints and Keeping Panels Flat",
    "topic": "Produce woodworking joints",
    "topicOrder": 12,
    "keywords": ["widening joints", "panels", "worktops", "tongue and groove", "loose tongue", "biscuit joint"],
    "examFocus": [
      "Understand what widening joints are used for",
      "Know how to improve panel stability",
      "Recognise common widening joint methods"
    ],
    "keyPoints": [
      "A widening joint joins timber side by side to make a wider board.",
      "Widening joints are used for items such as panels and worktops.",
      "Thin wide boards are less stable than thick narrow boards.",
      "Tangential cut boards are more likely to distort and cup.",
      "To help keep a panel flat, use narrower boards when making thin panels.",
      "Arrange the growth rings so they alternate in direction.",
      "A plain butt joint is the simplest and quickest widening joint.",
      "A plain butt joint can be difficult to keep flush while gluing and clamping.",
      "Tongue and groove improves alignment and adds strength.",
      "A disadvantage of tongue and groove is that material is lost when the tongue is formed.",
      "A loose tongue joint uses a separate thin strip of timber or plywood glued into grooves on both board edges.",
      "Loose tongue and groove is a more cost-effective method.",
      "Widening joints can also be made with dowels.",
      "A dowelling jointer is used to produce a dowel joint.",
      "A domino jointer is used to produce a domino joint.",
      "A biscuit jointer is used to produce a biscuit joint.",
      "A butt joint can be improved by rubbing the glued faces together so the adhesive spreads evenly and works into the grain."
    ],
    "commonMistakes": [
      "Using wide thin boards and expecting them to stay flat.",
      "Not alternating the direction of the growth rings.",
      "Choosing a plain butt joint without thinking about alignment."
    ],
    "miniCheck": [
      {
        "question": "What is a widening joint used for?",
        "answer": "To join boards side by side to make a wider panel or board."
      },
      {
        "question": "How should growth rings be arranged in a panel?",
        "answer": "They should alternate in direction."
      },
      {
        "question": "Which joint uses a separate strip fitted into grooves on both boards?",
        "answer": "A loose tongue joint."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-mortice-and-tenon-variations",
    "title": "Types of Mortice and Tenon Joints",
    "topic": "Produce woodworking joints",
    "topicOrder": 13,
    "keywords": ["mortice and tenon", "haunched tenon", "double tenon", "stub mortice and tenon", "wedges"],
    "examFocus": [
      "Recognise common mortice and tenon variations",
      "Understand why haunches, wedges and double tenons are used",
      "Know why some tenons are made blind"
    ],
    "keyPoints": [
      "The waste area is the part of the timber that is cut away to form the joint.",
      "A haunched mortice and tenon has part of the tenon removed.",
      "About one third of the tenon is usually removed in corner joints.",
      "The haunch helps strengthen the joint.",
      "The space left by the haunch allows wedges to be driven in.",
      "Wedges are glued and hammered in to tighten and strengthen the joint.",
      "A double tenon is used on wider timber.",
      "Double tenons help avoid weakening the timber.",
      "They also reduce problems caused by shrinkage in a wide single tenon.",
      "A stub mortice and tenon is a short tenon that does not go right through the timber.",
      "A stub mortice and tenon is also called a blind mortice and tenon.",
      "Blind joints are used to stop the end grain showing on the face of the work.",
      "Some joints may be shaped or scribed to fit over profiles or rebates."
    ],
    "commonMistakes": [
      "Using one wide tenon where a double tenon would be better.",
      "Forgetting that a haunch leaves room for wedges.",
      "Cutting a through tenon where the end grain should stay hidden."
    ],
    "miniCheck": [
      {
        "question": "Why is a haunch used on some mortice and tenon joints?",
        "answer": "To strengthen the joint and leave space for wedges."
      },
      {
        "question": "When are double tenons used?",
        "answer": "When wider timber is being jointed."
      },
      {
        "question": "What is another name for a stub mortice and tenon?",
        "answer": "A blind mortice and tenon."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-cutting-joints-safely-and-accurately",
    "title": "Cutting Joints Safely and in the Waste Area",
    "topic": "Produce woodworking joints",
    "topicOrder": 14,
    "keywords": ["rip sawing", "crosscutting", "waste area", "shoulders", "hatching", "bench vice"],
    "examFocus": [
      "Understand the two main saw cuts used when making joints",
      "Know why cuts must stay in the waste area",
      "Recognise safe ways to secure timber during jointing"
    ],
    "keyPoints": [
      "When making woodworking joints, you will use rip sawing and crosscutting.",
      "Rip sawing cuts along the grain.",
      "Crosscutting cuts across the grain.",
      "Sawing along the grain is usually harder than cutting across it.",
      "Always cut on the waste side of the marked line.",
      "You can remove more timber to improve the fit, but you cannot put timber back.",
      "Crosscutting forms the shoulders of the joint.",
      "Before cutting, check all marking out carefully.",
      "Mark the waste area clearly with hatching or crosses.",
      "Hatching is made with evenly spaced parallel lines.",
      "The lines are drawn at an angle.",
      "Timber must be secured before cutting so it cannot move.",
      "To hold timber safely, use equipment such as a vice, bench hook or clamp.",
      "Sharp tools are safer and work better than blunt tools.",
      "Blunt or damaged tools are more dangerous because they need extra force."
    ],
    "commonMistakes": [
      "Cutting on the wrong side of the line.",
      "Starting work without marking the waste area clearly.",
      "Trying to cut joints with loose timber or blunt tools."
    ],
    "miniCheck": [
      {
        "question": "Which saw cut goes along the grain?",
        "answer": "Rip sawing."
      },
      {
        "question": "Why must you cut in the waste area?",
        "answer": "Because timber can be removed for fitting, but it cannot be added back."
      },
      {
        "question": "What can you use to stop timber moving while cutting?",
        "answer": "A vice, bench hook or clamp."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-clean-up-rules-and-hatch-basics",
    "title": "Cleaning Up and Hatch Lining Basics",
    "topic": "Produce woodworking joints",
    "topicOrder": 15,
    "keywords": ["woodworking regulations", "waste disposal", "tool storage", "hatch lining", "loft hatch", "access opening"],
    "examFocus": [
      "Know the basic rules for clearing up after jointing work",
      "Understand what a hatch lining is used for",
      "Recognise key size and fitting points for loft hatches"
    ],
    "keyPoints": [
      "Clear away surplus materials and debris at the end of each task to reduce accidents.",
      "Reusable timber should go back into storage.",
      "Smaller timber offcuts should be recycled where possible.",
      "Materials that cannot be recycled must go into general waste.",
      "Clean tools after use before putting them away.",
      "Check tools for damage before storage.",
      "Damaged equipment must be removed from use and reported.",
      "A hatch lining is similar to a door lining.",
      "Hatches and door linings both use housing joints and are finished with architraves.",
      "Loft hatches are fitted between ceiling joists to give access to the loft.",
      "A loft hatch may have a removable panel or a hinged door.",
      "Downward-opening loft hatches are usually fitted with butt hinges so they do not fall out.",
      "They are commonly secured with a push latch or rim lock.",
      "Building Regulations should be checked for sound insulation, thermal insulation and fire resistance.",
      "A recommended minimum loft hatch opening for personal access is 530 mm × 530 mm.",
      "The hatch should be made smaller than the opening to allow fitting adjustment.",
      "A tolerance of at least 15 mm is needed between the opening size and the hatch size."
    ],
    "commonMistakes": [
      "Leaving waste and debris behind after the task.",
      "Storing damaged tools instead of reporting them.",
      "Making the hatch too tight for the opening."
    ],
    "miniCheck": [
      {
        "question": "Why should debris be cleared away after each task?",
        "answer": "To help prevent accidents."
      },
      {
        "question": "What is the recommended minimum loft hatch opening size for personal access?",
        "answer": "530 mm × 530 mm."
      },
      {
        "question": "How much tolerance should be left between the opening and the hatch?",
        "answer": "At least 15 mm."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-marking-out-and-making-a-hatch",
    "title": "Marking Out and Making a Hatch",
    "topic": "Produce woodworking joints",
    "topicOrder": 16,
    "keywords": ["hatch marking out", "housing joints", "tongued housing", "marking gauge", "break-out", "G clamp"],
    "examFocus": [
      "Understand the steps for marking out a hatch",
      "Know the basic method for cutting housing joints",
      "Recognise how to avoid damage when chiselling"
    ],
    "keyPoints": [
      "Mark the face side and face edge on every component first.",
      "Keep defects facing the outside of the finished hatch where possible.",
      "Use the setting out rod to transfer the housing joint positions onto the side and end pieces.",
      "Through housing joints can be used, but tongued housing joints are stronger.",
      "Pair the side and end pieces and clamp them together with a G clamp.",
      "Use a try square to transfer marks from one piece to the matching piece.",
      "Mark joint positions across the grain with the stock of the square held firmly against the face side and face edge.",
      "Set a marking gauge to the depth of the housing joint and mark this depth on the side pieces.",
      "If tongued housing joints are being used, mark the tongue thickness on the end pieces.",
      "Use a tenon saw to cut across the grain down to the gauge lines.",
      "Keep all saw cuts inside the waste area.",
      "Extra saw cuts in the waste make it easier to remove the waste with a chisel and mallet.",
      "Use a bevel edge chisel slightly smaller than the housing width.",
      "Chisel from both sides towards the centre of the joint.",
      "Working from both sides helps prevent break-out.",
      "Break-out is damage caused when a tool forces out material on the opposite face.",
      "When clamping a workpiece, place small timber blocks between the sash clamp and the work to avoid surface damage."
    ],
    "commonMistakes": [
      "Marking from the wrong reference face or edge.",
      "Cutting outside the waste area.",
      "Chiselling from one side only and causing break-out."
    ],
    "miniCheck": [
      {
        "question": "Which type of housing joint gives a stronger hatch joint?",
        "answer": "A tongued housing joint."
      },
      {
        "question": "Why should saw cuts stay inside the waste area?",
        "answer": "So the finished joint size stays accurate."
      },
      {
        "question": "How can break-out be reduced when chiselling?",
        "answer": "By working from both sides towards the centre."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-architrave-mitres-and-bisecting-angles",
    "title": "Architrave Mitres and Uneven Angles",
    "topic": "Produce woodworking joints",
    "topicOrder": 17,
    "keywords": ["architrave", "mitre joint", "bisecting angles", "sliding bevel", "MDF", "mitre adhesive"],
    "examFocus": [
      "Know how to fix architrave mitres correctly",
      "Understand how to deal with corners that are not square",
      "Recognise good practice when working with MDF and timber trims"
    ],
    "keyPoints": [
      "Do not nail too close to the ends of architraves because the timber may split.",
      "When fixing mitres by hand, drill a small pilot hole first or blunt the nail point.",
      "Mitres in MDF should not be nailed together because the fibres can split.",
      "A strong way to fix architrave mitres is to use quick-setting mitre adhesive.",
      "Mitres can then be nailed through the head to strengthen the joint and hide the fixing.",
      "Some corners are not square, such as stairs or loft spaces with angled ceilings.",
      "In these areas, the mitre angle must be found by bisecting the corner.",
      "Bisecting means dividing the angle into two equal parts.",
      "To find the mitre angle, mark the width of the trim on the wall from both directions.",
      "Where the lines cross, draw a line to the inside corner to create the bisected angle.",
      "Set a sliding bevel to this line.",
      "Transfer the angle from the sliding bevel onto the architrave to mark the mitre.",
      "The same method can be used when setting out skirting for obtuse angled walls."
    ],
    "commonMistakes": [
      "Nailing too close to the end of the architrave.",
      "Using nails in MDF mitres and causing the joint to split.",
      "Assuming every corner is a perfect 90 degrees."
    ],
    "miniCheck": [
      {
        "question": "Why should you avoid nailing near the end of an architrave?",
        "answer": "Because it may split the timber."
      },
      {
        "question": "What does bisecting an angle mean?",
        "answer": "Dividing the angle into two equal parts."
      },
      {
        "question": "Which tool is set to the bisected angle and transferred to the trim?",
        "answer": "A sliding bevel."
      }
    ]
  },
  {
    "id": "produce-woodworking-joints-fitting-skirting-joints",
    "title": "Skirting Joints and Fixing Methods",
    "topic": "Produce woodworking joints",
    "topicOrder": 18,
    "keywords": ["skirting", "scribed joint", "external mitre", "splayed heading joint", "false mitre", "block plane"],
    "examFocus": [
      "Know which joints are used for skirting",
      "Understand why internal and external corners are jointed differently",
      "Recognise good practice for cutting and fitting skirting"
    ],
    "keyPoints": [
      "After the architraves are fitted, the skirting can be installed.",
      "External corners in skirting should be mitred at 45 degrees.",
      "A mitre keeps the moulding running around the corner and hides the end grain.",
      "Mitres can be cut with a chop saw, mitre saw, mitre box or handsaw.",
      "A chop saw is preferred because it is fast and accurate.",
      "If a mitre does not close tightly, it can be dressed with a sharp block plane.",
      "Internal skirting corners should not usually be mitred.",
      "If internal mitres shrink, gaps can open and become visible.",
      "Internal corners should be scribed so one profile fits neatly over the other.",
      "A scribed joint is usually undercut slightly.",
      "Undercutting helps the front edge fit tightly while allowing for walls that are not perfectly square.",
      "Bullnose skirting should not normally be fully scribed because the top edge becomes weak.",
      "A false mitre can be used on bullnose skirting, with a mitred top and a scribed lower section.",
      "If one length of skirting is too short, use a splayed heading joint to extend it.",
      "A splayed heading joint is better than a plain butt joint for lengthening skirting.",
      "Lengthening joints should be glued, nailed and sanded flush.",
      "Cut the longest skirting lengths first so shorter offcuts can be used elsewhere and fewer lengthening joints are needed."
    ],
    "commonMistakes": [
      "Using mitres on internal corners instead of scribing them.",
      "Trying to scribe a full bullnose profile and weakening the edge.",
      "Cutting short lengths first and creating unnecessary joints."
    ],
    "miniCheck": [
      {
        "question": "What joint is used on external skirting corners?",
        "answer": "A 45 degree mitre joint."
      },
      {
        "question": "Why are internal corners usually scribed instead of mitred?",
        "answer": "Because mitres can open up and show gaps if the skirting shrinks."
      },
      {
        "question": "What is the best joint for lengthening skirting?",
        "answer": "A splayed heading joint."
      }
    ]
  },
{
"id": "produce-woodworking-joints-microwave-vacuum-seasoning",
"title": "Microwave Vacuum Seasoning",
"topic": "Produce woodworking joints",
"topicOrder": 1,
"keywords": ["microwave vacuum seasoning", "timber drying", "moisture removal", "seasoning defects", "rapid drying"],
"examFocus": [
"Know how microwave vacuum seasoning dries timber",
"Understand how it differs from air and kiln drying",
"Recognise why this method can reduce defects"
],
"keyPoints": [
"Microwave vacuum seasoning is a modern timber-drying method.",
"It dries timber in hydraulic pressure tanks within hours instead of days or weeks.",
"The process heats the inside and outside of the timber at the same time.",
"Moisture is removed by evaporation throughout the timber.",
"Air and kiln drying remove moisture from the outside towards the centre.",
"Rapid drying lowers the chance of seasoning defects."
],
"commonMistakes": [
"Thinking all seasoning methods dry timber in the same way.",
"Assuming microwave vacuum seasoning takes as long as kiln drying.",
"Forgetting that faster drying can help reduce defects."
],
"miniCheck": [
{
"question": "How quickly can microwave vacuum seasoning dry timber?",
"answer": "Within hours."
},
{
"question": "How does this method heat the timber?",
"answer": "It heats the inside and outside at the same time."
},
{
"question": "Why are defects less likely with this method?",
"answer": "Because the timber dries quickly."
}
]
},
{
"id": "produce-woodworking-joints-storing-and-protecting-timber",
"title": "Storing and Protecting Timber",
"topic": "Produce woodworking joints",
"topicOrder": 2,
"keywords": ["timber storage", "bearers", "moisture content", "second seasoning", "bleaching"],
"examFocus": [
"Understand how moisture affects timber movement",
"Know correct storage methods for timber and sheet materials",
"Recognise problems caused by poor storage"
],
"keyPoints": [
"Wet timber absorbs moisture and swells.",
"Dry timber loses moisture and shrinks.",
"Timber movement depends on the timber species and the surrounding conditions.",
"If timber moisture content does not match the air humidity, joints can gap, timber can swell, and wood can distort.",
"For internal work, timber should be unwrapped and stored flat on bearers with piling sticks in the room where it will be fitted.",
"This should be done for several weeks before fixing so the timber can reach equilibrium moisture content, also called second seasoning.",
"Workshop timber and sheet materials should be stored in racks, under cover, and protected from weather and damage.",
"Structural timber stored outside should be supported on bearers and covered with waterproof protection or shelter.",
"Poor storage can leave timber waterlogged, stained, heavy, and harder to cut.",
"Decorative timbers and sheet materials should be protected from direct sunlight to stop bleaching.",
"Timber should be stored in a secure area close to where it will be used."
],
"commonMistakes": [
"Leaving timber on the ground instead of on bearers.",
"Using internal timber before it has adjusted to the room conditions.",
"Exposing decorative timber to sunlight or weather.",
"Storing timber badly and causing swelling, staining, or distortion."
],
"miniCheck": [
{
"question": "What can happen to timber in a dry environment?",
"answer": "It can shrink."
},
{
"question": "Why is timber stored on bearers?",
"answer": "To keep it off the ground and stop it taking in moisture."
},
{
"question": "What is second seasoning?",
"answer": "Letting timber adjust to the room conditions before fixing."
}
]
},
{
"id": "produce-woodworking-joints-natural-defects-in-timber",
"title": "Natural Defects in Timber",
"topic": "Produce woodworking joints",
"topicOrder": 3,
"keywords": ["heart shake", "star shake", "pith", "sapwood", "timber defects"],
"examFocus": [
"Recognise common natural defects in timber",
"Understand what causes heart shake and star shake",
"Know the difference between pith and sapwood"
],
"keyPoints": [
"Heart shake is a single split that runs through the pith and heartwood.",
"It can be caused by poor seasoning or decay.",
"Star shake is made up of three or more splits spreading out from the centre of the tree.",
"Star shake can be caused by poor seasoning or by using an over-mature tree.",
"Sapwood is the newer outer growth of the tree.",
"Sapwood carries enriched sap up to the crown.",
"The pith is the centre of the tree.",
"Pith is sometimes softer and darker than the heartwood.",
"The crown is the top part of the tree where the branches grow."
],
"commonMistakes": [
"Mixing up heart shake and star shake.",
"Thinking sapwood is the centre of the tree.",
"Forgetting that poor seasoning can cause splitting defects."
],
"miniCheck": [
{
"question": "What is heart shake?",
"answer": "A single split running through the pith and heartwood."
},
{
"question": "What is star shake?",
"answer": "Three or more splits radiating from the centre of the tree."
},
{
"question": "What is sapwood?",
"answer": "The newer outer layer of growth that carries sap to the crown."
}
]
},
{
"id": "produce-woodworking-joints-blue-stain-sloping-grain-and-woodworm",
"title": "Blue Stain, Sloping Grain and Woodworm",
"topic": "Produce woodworking joints",
"topicOrder": 4,
"keywords": ["blue stain", "sloping grain", "woodworm", "insect infestation", "timber weakness"],
"examFocus": [
"Identify timber problems caused by fungi and insects",
"Understand how sloping grain affects timber",
"Know the signs and causes of woodworm attack"
],
"keyPoints": [
"Blue stain is a fungus that discolours sapwood with a blue-grey colour.",
"It does not rot the timber or reduce its strength.",
"Sloping grain happens when the grain runs towards the edge of the board.",
"This can be caused by the way the trunk was cut or by the natural shape of the tree.",
"Timber with sloping grain is weaker than straight-grained timber.",
"Sloping grain also makes planing by hand more difficult.",
"Woodworm is a general term for wood-boring larvae.",
"Main types include common furniture beetle, death watch beetle, house longhorn beetle and powder post beetle.",
"Adult female beetles lay eggs on the timber surface.",
"The larvae hatch, burrow into the wood, then develop and leave exit holes when the adult beetles emerge."
],
"commonMistakes": [
"Thinking blue stain weakens the timber.",
"Ignoring sloping grain when judging timber strength.",
"Missing exit holes as a sign of woodworm attack."
],
"miniCheck": [
{
"question": "Does blue stain weaken timber?",
"answer": "No, it discolours the sapwood but does not weaken it."
},
{
"question": "Why is sloping grain a problem?",
"answer": "It weakens the timber and makes hand planing harder."
},
{
"question": "What is one clear sign of woodworm?",
"answer": "Exit holes on the timber surface."
}
]
},
{
"id": "produce-woodworking-joints-tool-faults-and-remedies",
"title": "Common Tool Faults and Fixes",
"topic": "Produce woodworking joints",
"topicOrder": 5,
"keywords": ["tool faults", "tool maintenance", "plane faults", "drill bit faults", "tape measure faults"],
"examFocus": [
"Recognise common faults in hand tools",
"Know basic remedies for damaged or worn tools",
"Understand when a tool should be replaced"
],
"keyPoints": [
"A plane that does not cut may need the iron adjusted until it removes a fine shaving.",
"Surface rust on a plane can be removed with fine wire wool or abrasive paper, then wiped with a lightly oiled rag.",
"Blunt twist drill bits can be sharpened on a bench grinder.",
"Auger bits can be sharpened with a small triangular file.",
"A wobbling drill bit may be fitted wrongly in the chuck or could be bent.",
"A bent drill bit should be thrown away and replaced.",
"To prevent break out on the back face, clamp waste timber behind the workpiece or drill from both sides.",
"A damaged square that is no longer 90 degrees must be trued if possible or replaced.",
"A bent screwdriver or a splitting handle is unsafe and should be replaced.",
"A damaged slotted screwdriver tip can be reground, but other damaged tips should be replaced.",
"Gauge pins can be sharpened with a small needle file.",
"If a gauge stock wobbles on the stem, the stem may need replacing or the whole gauge replaced.",
"Tape measures with worn markings, a loose hook, a crease, or a failed recoil should be replaced.",
"A bent tape hook can be straightened carefully back into shape."
],
"commonMistakes": [
"Using blunt or damaged tools instead of repairing or replacing them.",
"Keeping unsafe screwdrivers with split handles.",
"Using a faulty tape measure and taking inaccurate readings.",
"Ignoring wobble in a drill bit."
],
"miniCheck": [
{
"question": "What should you do if a plane is not removing shavings?",
"answer": "Adjust the plane iron until it takes a fine shaving."
},
{
"question": "What can cause a drill bit to wobble?",
"answer": "It may be off-centre in the chuck or bent."
},
{
"question": "When should a tape measure be replaced?",
"answer": "When the markings are unclear, the hook is too loose, the tape is creased, or the recoil fails."
}
]
},
{
"id": "produce-woodworking-joints-working-drawings-and-setting-out-rods",
"title": "Working Drawings and Setting Out Rods",
"topic": "Produce woodworking joints",
"topicOrder": 6,
"keywords": ["working drawings", "setting out rod", "specification", "ironmongery", "marking out joints"],
"examFocus": [
"Understand why setting out rods are used",
"Know what information a setting out rod can include",
"Recognise the purpose of a specification"
],
"keyPoints": [
"Working drawings do not always give enough detail to make joinery items.",
"Joiners often produce full-size drawings called setting out rods.",
"Setting out rods can show component sections, joint details, profiles, mouldings, glazing details and panel details.",
"The rod should be checked for accuracy before work starts.",
"Finding mistakes at this stage is easier and cheaper than after cutting the timber.",
"Errors made after cutting can waste materials and cause delays.",
"A specification is a written document with extra information not shown on the drawings.",
"A specification may state the timber to use, the ironmongery needed and the finish required.",
"Ironmongery includes items such as locks, handles and hinges.",
"Routine joinery with square, standard sections may not need a rod for every item.",
"In routine joinery, joint and moulding positions can sometimes be marked directly onto prepared timber."
],
"commonMistakes": [
"Starting work without checking the setting out rod.",
"Relying only on working drawings when extra detail is needed.",
"Ignoring the specification and using the wrong materials or finish.",
"Cutting timber before errors have been found."
],
"miniCheck": [
{
"question": "Why is a setting out rod used?",
"answer": "To show full-size joinery details when working drawings do not give enough information."
},
{
"question": "What should happen before using a setting out rod?",
"answer": "It should be checked for accuracy."
},
{
"question": "What kind of information can a specification give?",
"answer": "Details such as timber type, ironmongery and finish."
}
]
},
{
"id": "produce-woodworking-joints-marking-out-tools",
"title": "Marking Out Tools for Woodworking Joints",
"topic": "Produce woodworking joints",
"topicOrder": 7,
"keywords": ["marking out tools", "marking gauge", "mortice gauge", "try square", "marking knife"],
"examFocus": [
"Identify common tools used to mark out woodworking joints",
"Know what each marking out tool is used for",
"Understand how tool choice affects marking accuracy"
],
"keyPoints": [
"After setting out, frame parts should be placed back on the rod to check all marks are correct before cutting.",
"A tape measure and rule are used to measure length, width and thickness accurately.",
"A marking gauge is used to mark a single line along the grain.",
"A mortice gauge is used to mark parallel lines along the grain.",
"A cutting gauge is used to score a single line across the grain.",
"A pencil gauge marks parallel lines without leaving a permanent mark.",
"2H pencils are recommended for joinery marking out.",
"A try square is used to mark square lines across the grain.",
"A combination square is used for 90 degree and 45 degree lines and its rule can also act as a pencil gauge.",
"A marking knife cuts the timber fibres to give accurate marks across the grain.",
"A box square or over square helps transfer lines around moulded timber.",
"A compass, dividers and trammels can also be used for setting out work."
],
"commonMistakes": [
"Cutting joints before rechecking the parts on the rod.",
"Using the wrong gauge for the type of line needed.",
"Using unclear marking methods that reduce accuracy.",
"Forgetting that a marking knife gives cleaner marks across the grain."
],
"miniCheck": [
{
"question": "What is a marking gauge used for?",
"answer": "Marking a single line along the grain."
},
{
"question": "Which tool marks parallel lines for a mortice?",
"answer": "A mortice gauge."
},
{
"question": "Why is a marking knife useful across the grain?",
"answer": "It cuts the fibres for a more accurate line."
}
]
},
{
"id": "produce-woodworking-joints-safe-marking-out-and-regulations",
"title": "Safe Marking Out and Regulations",
"topic": "Produce woodworking joints",
"topicOrder": 8,
"keywords": ["PUWER", "PPE", "safe working area", "trip hazards", "waste disposal"],
"examFocus": [
"Understand safety rules when marking out woodworking joints",
"Know the purpose of PUWER and PPE requirements",
"Recognise the importance of a clean and safe work area"
],
"keyPoints": [
"Even low-risk marking out tools must be used under safe working rules.",
"Employers must protect workers under the Provision and Use of Work Equipment Regulations (PUWER).",
"Hazardous tasks must be risk assessed.",
"Some tasks may require personal protective equipment under PPE regulations.",
"The working area should be kept free from trip hazards.",
"Noise from machinery should be controlled so the area remains safe to work in.",
"The air should be free from harmful dust and fumes.",
"Waste materials must be disposed of properly to avoid harming the environment.",
"Irresponsible waste disposal can lead to penalties for breaking environmental rules.",
"A safe workplace protects health, safety and wellbeing during marking out."
],
"commonMistakes": [
"Assuming marking out is risk free because only hand tools are used.",
"Working in areas with clutter or trip hazards.",
"Ignoring dust, fumes or noise from nearby machinery.",
"Disposing of waste carelessly."
],
"miniCheck": [
{
"question": "What does PUWER require employers to do?",
"answer": "Protect workers when using work equipment."
},
{
"question": "What should the marking out area be free from?",
"answer": "Trip hazards, harmful dust, fumes and excessive noise."
},
{
"question": "Why must waste be disposed of correctly?",
"answer": "To protect the environment and avoid penalties."
}
]
},
{
"id": "produce-woodworking-joints-lengthening-and-framing-joints",
"title": "Lengthening Joints and Framing Joints",
"topic": "Produce woodworking joints",
"topicOrder": 9,
"keywords": ["lengthening joints", "heading joints", "scarf joints", "framing joints", "non-structural joints"],
"examFocus": [
"Know the difference between non-structural and structural lengthening joints",
"Recognise where heading joints and scarf joints are used",
"Identify the main classes of framing joints"
],
"keyPoints": [
"Lengthening joints are used when timber needs joining along its length.",
"Common uses include handrails, skirting and flooring.",
"These joints are often non-structural because they do not carry loads.",
"Main heading joints for non-structural timber are butt, splayed, and tongue and groove joints.",
"Structural timbers such as ridge boards and purlins need stronger scarf joints.",
"Scarf joints are used where the timber must carry weight.",
"Some structural scarf joints need extra strength from bolts and metal plates.",
"Framing joints are used to make items such as windows, doors and cabinets.",
"Main framing joint groups are butt, bridle, dovetail, halving, housing, mitred, and mortice and tenon joints."
],
"commonMistakes": [
"Using a non-structural heading joint where a load-bearing joint is needed.",
"Forgetting that structural scarf joints may need extra strengthening.",
"Mixing up lengthening joints with framing joints."
],
"miniCheck": [
{
"question": "What are heading joints mainly used for?",
"answer": "Lengthening non-structural timber."
},
{
"question": "What type of joint is used for structural lengthening work?",
"answer": "A scarf joint."
},
{
"question": "Name one use of framing joints.",
"answer": "Making windows, doors or cabinets."
}
]
},
{
"id": "produce-woodworking-joints-butt-bridle-and-dovetail-joints",
"title": "Butt, Bridle and Dovetail Joints",
"topic": "Produce woodworking joints",
"topicOrder": 10,
"keywords": ["butt joint", "bridle joint", "dovetail joint", "through dovetail", "lapped dovetail"],
"examFocus": [
"Understand the basic uses of butt, bridle and dovetail joints",
"Know how butt joints are strengthened",
"Recognise the difference between through and lapped dovetails"
],
"keyPoints": [
"A basic butt joint usually joins two pieces at 90 degrees, but roof work may use angled butt joints to match the pitch.",
"Butt joints are widely used in walls, roofs and floors because they are quick and simple to cut.",
"Because butt joints are basic, they need strengthening with nails, screws or metal brackets.",
"In joinery, nails can be angled in a dovetail pattern to resist pulling apart.",
"In carpentry, a similar method is called skew nailing.",
"Bridle joints are similar to mortice and tenon joints but are open-ended.",
"Types of bridle joint include tee bridle, corner bridle and mitred bridle.",
"Mitred bridle joints help hide most of the end grain.",
"Bridle joints are used for door frames, furniture and cupboards.",
"Dovetail joints are used for strong, high-quality drawers in kitchens, units and furniture.",
"The two main types are through dovetails and lapped dovetails.",
"Through dovetails are often used at the back of drawers where the end grain is less visible.",
"Lapped dovetails are used at the front of drawers to hide the end grain.",
"Typical dovetail angles are 1:6 for softwood and 1:8 for hardwood, although some joiners use 1:7 for both.",
"A dovetail joint should only be assembled once for fitting and once for gluing, because repeated assembly makes it looser and weaker."
],
"commonMistakes": [
"Using a butt joint without proper strengthening.",
"Forgetting that bridle joints are open-ended.",
"Using the wrong dovetail type at the front or back of a drawer.",
"Assembling a dovetail joint too many times and weakening the fit."
],
"miniCheck": [
{
"question": "Why do butt joints need extra fixing?",
"answer": "Because they are simple joints and need strengthening."
},
{
"question": "What is the main difference between a bridle joint and a mortice and tenon joint?",
"answer": "A bridle joint is open-ended."
},
{
"question": "Which dovetail joint is usually used at the front of a drawer?",
"answer": "A lapped dovetail."
}
]
},
{
"id": "produce-woodworking-joints-ripsawing-crosscutting-and-housing",
"title": "Ripsawing, Crosscutting and Housing Joints",
"topic": "Produce woodworking joints",
"topicOrder": 11,
"keywords": ["ripsawing", "crosscutting", "housing joint", "cheeks", "shoulders"],
"examFocus": [
"Understand basic hand-saw techniques for forming joints",
"Know the difference between ripping and crosscutting",
"Recognise the main steps for cutting a housing joint"
],
"keyPoints": [
"Ripsawing cuts along the grain to form the cheeks of a joint.",
"The timber should be held in a vice at a slight angle to start the cut.",
"The first saw cut should begin in the waste area.",
"Saw down carefully to the shoulder lines and slow down near the end for control.",
"Turn the timber and repeat on the other side, then cut vertically while checking you do not go below the shoulder lines.",
"Crosscutting cuts across the grain to form the shoulders.",
"The timber should be held firmly against a bench hook or secured in a vice.",
"Start with light saw cuts, then complete the cut once the saw is guided safely in place.",
"Keep checking both sides so you do not cut below the marking lines or gauge lines.",
"A housing joint is made by sawing down to the gauge line, then making extra cuts in the waste to help remove it.",
"Waste is removed with a bevel edge chisel and mallet in small sections.",
"The joint is worked from both sides and finished flat, sometimes with a hand router for accuracy."
],
"commonMistakes": [
"Starting the saw cut outside the waste area.",
"Cutting below the shoulder or gauge lines.",
"Trying to remove too much waste at once with the chisel.",
"Not checking both sides of the timber while sawing."
],
"miniCheck": [
{
"question": "What does ripsawing form on a joint?",
"answer": "The cheeks."
},
{
"question": "What does crosscutting form on a joint?",
"answer": "The shoulders."
},
{
"question": "Why are extra saw cuts made in the waste of a housing joint?",
"answer": "To make the waste easier to remove."
}
]
},
{
"id": "produce-woodworking-joints-morticing-and-safe-cutting",
"title": "Morticing and Safe Cutting Practice",
"topic": "Produce woodworking joints",
"topicOrder": 12,
"keywords": ["morticing", "mortice chisel", "through mortice", "safe cutting", "marking lines"],
"examFocus": [
"Know the basic steps for cutting a mortice",
"Understand why a mortice chisel is used",
"Recognise safe practice when using sharp hand tools"
],
"keyPoints": [
"Mortices are often machine cut, but the marking out method stays the same whether cut by hand or machine.",
"A mortice chisel must be used because its square edges help produce an accurate mortice.",
"The workpiece must be fixed securely before cutting.",
"To cut a mortice, hold the chisel upright just inside the marking line.",
"Waste is chipped out by striking the chisel with a mallet about 10 to 12 mm into the timber.",
"This is repeated along the mortice and then worked towards the centre.",
"For a through mortice, the timber is turned over and the process is repeated from the other side.",
"The back edge can be made slightly longer at each end if wedges are needed.",
"When cutting joints, always keep your hand behind the cutting edge of the tool.",
"Standing in the correct position and checking the cut regularly helps keep the joint accurate and safe."
],
"commonMistakes": [
"Using the wrong chisel for morticing.",
"Failing to secure the timber properly before cutting.",
"Cutting straight on the line instead of just inside it.",
"Letting hands move in front of the cutting edge."
],
"miniCheck": [
{
"question": "Why is a mortice chisel used for this joint?",
"answer": "Because its square edges help cut an accurate mortice."
},
{
"question": "How is a through mortice completed?",
"answer": "By turning the timber over and cutting from the other side."
},
{
"question": "Where should your hand be when using sharp tools?",
"answer": "Behind the cutting edge."
}
]
},
{
"id": "produce-woodworking-joints-assembling-and-finishing-a-hatch",
"title": "Assembling and Finishing a Hatch",
"topic": "Produce woodworking joints",
"topicOrder": 13,
"keywords": ["dry fit", "wood adhesive", "countersunk screws", "pilot holes", "square and twist"],
"examFocus": [
"Know the main steps for assembling a hatch",
"Understand how to check a hatch for square and twist",
"Recognise why pilot holes and countersinking are needed"
],
"keyPoints": [
"If tongued housing joints are used, the tongues can be cut with a tenon saw and finished with a bevel edge chisel.",
"The hatch should be dry fitted before final fixing to check the joints and overall size.",
"Pencil and machine marks should be removed before adhesive is applied.",
"Adhesive is spread on each joint before the hatch is reassembled.",
"Sash clamps can be used to pull the joints tightly together.",
"Countersunk wood screws are used to secure the joints.",
"Pilot holes should be drilled first to help stop the timber splitting.",
"Any extra glue should be wiped away with a clean damp cloth.",
"A squaring rod is used to check the hatch is square.",
"The frame must also be checked for twist by comparing opposite edges.",
"If the joints are flush, the hatch can be planed and sanded for a clean finish.",
"Stops or beads are fixed around the inside face, and moulded beads should be mitred instead of butted.",
"The panel or door should fit with an even 2 mm clearance gap.",
"Arrises should be removed before completion to improve the finish and help paint stick better."
],
"commonMistakes": [
"Skipping the dry fit before gluing and fixing.",
"Forgetting pilot holes and causing the timber to split.",
"Not checking the hatch for square or twist.",
"Leaving glue, pencil or machining marks on the finished work."
],
"miniCheck": [
{
"question": "Why should a hatch be dry fitted first?",
"answer": "To check the joints fit and the overall size is correct."
},
{
"question": "Why are pilot holes drilled before screwing?",
"answer": "To reduce the risk of splitting the timber."
},
{
"question": "What clearance gap should be left around the panel or door?",
"answer": "2 mm."
}
]
},
{
"id": "produce-woodworking-joints-installing-a-hatch-safely",
"title": "Installing a Hatch Safely",
"topic": "Produce woodworking joints",
"topicOrder": 14,
"keywords": ["installing a hatch", "countersunk screws", "spirit level", "working at height", "architraves"],
"examFocus": [
"Know the basic steps for installing a hatch",
"Understand how the hatch is checked during fitting",
"Recognise key safety risks when installing overhead"
],
"keyPoints": [
"The hatch size must be checked against the ceiling opening before installation.",
"A timber loft hatch is usually fixed with countersunk screws above the stops, or the fixings can be hidden under temporary removed beading.",
"Fixing holes should be drilled and countersunk before lifting the hatch into place.",
"Partly inserting the screws first can make installation easier.",
"Extra help is recommended because fitting a loft hatch alone is difficult.",
"If the ceiling is plastered, the backs of the architraves should sit flush with the ceiling face.",
"If the ceiling is not plastered, the hatch lining should project 2 mm below the plasterboard.",
"The hatch should be held in place at the corners first, then checked with a spirit level to make sure it is not twisted.",
"Gaps behind the fixing points should be packed with plastic frame packers or timber wedges before final tightening.",
"The diagonal measurements should be checked to confirm the hatch is square.",
"Architraves are fitted after plastering to cover the joint between the wall or ceiling and the frame.",
"Installing a loft hatch is hazardous because it involves working at height and using tools above head level.",
"Safety goggles should be worn to protect the eyes from falling dust and debris."
],
"commonMistakes": [
"Trying to install the hatch without checking the opening size first.",
"Fixing the hatch fully before checking for level, square or twist.",
"Not packing gaps behind the fixing points.",
"Ignoring the risks of overhead work and falling debris."
],
"miniCheck": [
{
"question": "What should be checked before lifting the hatch into place?",
"answer": "That the hatch size matches the ceiling opening."
},
{
"question": "How do you check that the hatch is square?",
"answer": "By checking the diagonal measurements."
},
{
"question": "Why are safety goggles important when installing a hatch?",
"answer": "Because dust and debris can fall into your eyes."
}
]
},
{
"id": "produce-woodworking-joints-fixing-skirting-and-architraves",
"title": "Fixing Skirting and Architraves",
"topic": "Produce woodworking joints",
"topicOrder": 15,
"keywords": ["skirting", "architrave", "grab adhesive", "countersunk screws", "masonry fixings"],
"examFocus": [
"Know how skirting is fixed to different backgrounds",
"Understand when countersinking and counter-boring are used",
"Recognise safe fixing methods for timber and masonry"
],
"keyPoints": [
"Skirting can be fixed with grab adhesive and nails.",
"Nails may be driven with a nail gun or with oval nails and a claw hammer.",
"When fixing to brick or concrete block walls, holes must be drilled with an SDS hammer drill.",
"Masonry fixings can include plastic plugs and screws or hammer-in fixings.",
"If skirting will be painted, screw heads should be countersunk below the surface so they can be filled.",
"If skirting will be stained or given a clear finish, fixings should be counter-bored.",
"A timber pellet with matching grain can be glued into a counter-bored hole to hide the screw head.",
"Nail guns should not be used to fix skirting to masonry.",
"Using a nail gun on masonry can damage the tool, cause a misfire, or make nails bounce back dangerously."
],
"commonMistakes": [
"Using a nail gun on masonry walls.",
"Leaving visible screw heads on painted or clear-finished work.",
"Using the wrong fixing method for brick or concrete backgrounds.",
"Forgetting to hide fixings properly on finished joinery."
],
"miniCheck": [
{
"question": "What tool is used to drill fixing holes into masonry for skirting?",
"answer": "An SDS hammer drill."
},
{
"question": "Why are screw heads countersunk on painted skirting?",
"answer": "So they can be filled and hidden."
},
{
"question": "Why should a nail gun not be used on masonry?",
"answer": "Because it can damage the tool, misfire, or cause nails to bounce back."
}
]
},
{
"id": "produce-woodworking-joints-skirting-profiles-and-practical-standards",
"title": "Skirting Profiles and Practical Standards",
"topic": "Produce woodworking joints",
"topicOrder": 16,
"keywords": ["mouldings", "bull nose", "torus", "ogee", "setting out rod", "flush joints"],
"examFocus": [
"Recognise common skirting and architrave mouldings",
"Understand how moulding style relates to the building",
"Know the expected standard for practical woodworking joint tasks"
],
"keyPoints": [
"Skirting and architrave profiles usually match the style of the building.",
"New-build properties often use simpler mouldings because they are quicker to cut, easier to scribe and more cost-effective.",
"Traditional buildings often have deeper and more decorative mouldings.",
"Common profiles include bull nose, splayed, torus, ogee and grooved mouldings.",
"A practical jointing task may include drawing a setting out rod and marking out frame parts from it.",
"The work should use face side and face edge marks.",
"A range of setting out and marking out tools should be used accurately.",
"Joints should be made safely and kept free from gaps greater than 0.5 mm.",
"The finished frame should be checked to make sure it is flat and square.",
"Joints should be flush, the frame sanded, and sharp edges removed."
],
"commonMistakes": [
"Choosing mouldings without considering the building style.",
"Producing joints with visible gaps over the allowed limit.",
"Failing to check the frame for square and flatness.",
"Leaving joints proud or sharp edges on the finished frame."
],
"miniCheck": [
{
"question": "Why are simple mouldings often used in new-build homes?",
"answer": "Because they are easier to cut, quicker to fit and more cost-effective."
},
{
"question": "Name two common skirting or architrave profiles.",
"answer": "For example, bull nose and torus."
},
{
"question": "What gap size should woodworking joints stay within in the practical task?",
"answer": "No more than 0.5 mm."
}
]
},
{
  "id": "types-of-fixings-and-ironmongery-introduction-and-materials",
  "title": "Introduction to Fixings and Ironmongery",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 1,
  "keywords": ["fixings", "ironmongery", "ferrous metals", "non-ferrous metals", "stainless steel"],
  "examFocus": [
    "Know the difference between fixings and ironmongery",
    "Understand ferrous and non-ferrous metals",
    "Recognise where different metals are suitable"
  ],
  "keyPoints": [
    "Fixings include items such as nails, screws, adhesives and sealants.",
    "Ironmongery includes hardware such as hinges, handles and locks.",
    "Choosing the correct fixing or ironmongery affects both appearance and performance.",
    "Ferrous metals contain iron and can rust or stain.",
    "Iron and steel should not be used with acidic timbers like oak because they can mark the wood.",
    "Heavy-duty iron or cast iron is suitable for heavy doors, but cast iron can be brittle.",
    "Stainless steel contains iron but is highly resistant to rust and staining.",
    "Stainless steel is a good choice for damp areas and external work.",
    "Non-ferrous metals do not contain iron.",
    "Examples of non-ferrous metals include aluminium and brass.",
    "Non-ferrous metals resist rust and staining, so they are suitable for indoor and outdoor use.",
    "Brass and aluminium are softer metals and can be damaged more easily.",
    "Brass screws can snap if driven into hard timbers such as beech or oak."
  ],
  "commonMistakes": [
    "Using iron or steel with oak and causing staining.",
    "Choosing soft metals where stronger fixings are needed.",
    "Assuming all steel will rust easily, including stainless steel."
  ],
  "miniCheck": [
    {
      "question": "What is the difference between fixings and ironmongery?",
      "answer": "Fixings are items like screws and nails, while ironmongery includes hardware like hinges and handles."
    },
    {
      "question": "What does ferrous mean?",
      "answer": "It means the metal contains iron."
    },
    {
      "question": "Why is stainless steel often used outside or in damp places?",
      "answer": "Because it resists rusting and staining."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-nails",
  "title": "Common Nails and Their Uses",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 2,
  "keywords": ["nails", "lost head nail", "round head nail", "annular ring shank", "galvanised clout nail", "collated nails"],
  "examFocus": [
    "Identify common nail types",
    "Match nail types to their uses",
    "Understand why different nail designs are chosen"
  ],
  "keyPoints": [
    "Common fixing groups in carpentry and joinery include nails, screws, coach screws and bolts, wall plugs and cavity fixings, and adhesives.",
    "Loose nails are used less often today because many carpenters use powered nailers and collated nail strips.",
    "Cut clasp nails are also called floor brads.",
    "Cut clasp nails have a wedge shape with a blunt point to reduce timber splitting.",
    "Cut clasp nails are traditionally used for floorboards and door and window frames.",
    "Lost head nails have a small oval head that can be punched below the surface.",
    "Lost head nails are used where the nail head needs to be hidden, but they do not grip as strongly.",
    "Bright steel round head nails have a large flat head.",
    "Round head nails are used for general fixing where the head can remain visible.",
    "Their larger head gives better holding power than an oval nail.",
    "Annular ring shank nails have ridges on the shank to improve pull-out resistance.",
    "Galvanised clout nails have extra-large heads and a protective coating for external use.",
    "Galvanised clout nails are used for jobs such as roofing felt and tile lath.",
    "Collated nails are grouped in strips for use in nail guns.",
    "Collated nails can be ring shank or smooth shank, and used for both internal and external work."
  ],
  "commonMistakes": [
    "Using a lost head nail where strong holding power is needed.",
    "Choosing the wrong nail for external work.",
    "Ignoring the risk of splitting timber when fixing near edges."
  ],
  "miniCheck": [
    {
      "question": "Which nail is designed to be hidden below the timber surface?",
      "answer": "The lost head nail."
    },
    {
      "question": "Which nail gives extra pull-out resistance?",
      "answer": "The annular ring shank nail."
    },
    {
      "question": "What are galvanised clout nails commonly used for?",
      "answer": "External fixing such as roofing felt and tile lath."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-special-screws",
  "title": "Special Screws and Where They Are Used",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 3,
  "keywords": ["countersunk screws", "screw cups", "black japanned screws", "concrete screws", "brass screws"],
  "examFocus": [
    "Recognise common specialist screw types",
    "Know where each screw type is used",
    "Understand limits of brass and concrete screws"
  ],
  "keyPoints": [
    "Countersunk and raised head screws are often used to fix fittings such as door handles.",
    "These screws are commonly used with screw cups.",
    "Screw cups improve appearance and give a wider fixing area.",
    "Screw cups are often used on furniture and are available in brass or silver finishes.",
    "Black japanned screws are round-headed screws with a hard black lacquer finish.",
    "They are used with traditional black ironmongery.",
    "Black japanned screws are common in restoration work, period properties, and some latches and hinges.",
    "Concrete screws are a modern alternative to wood screws used with wall plugs.",
    "Concrete screws are useful where lining up a screw and wall plug is difficult, such as through PVCu doors and windows.",
    "Concrete screws do not need wall plugs.",
    "They do need the correct size pilot hole, as stated by the manufacturer.",
    "The screw thread cuts into the pre-drilled masonry hole to create a secure fixing.",
    "Brass screws resist corrosion well and are often used with brass ironmongery where the head will be visible.",
    "Brass screws can be used externally, but they are soft and weak.",
    "Brass screws can snap easily in hard timbers such as oak.",
    "Pilot holes and clearance holes must be the correct size when using brass screws."
  ],
  "commonMistakes": [
    "Using brass screws without pilot or clearance holes.",
    "Using the wrong screw where a decorative finish is needed.",
    "Assuming concrete screws can be fitted without pre-drilling."
  ],
  "miniCheck": [
    {
      "question": "Why are screw cups used with some screws?",
      "answer": "They improve appearance and provide a wider fixing area."
    },
    {
      "question": "Do concrete screws need wall plugs?",
      "answer": "No, but they do need the correct pilot hole."
    },
    {
      "question": "Why must extra care be taken with brass screws?",
      "answer": "Because they are soft and can break, especially in hard materials."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-screw-heads-and-bits",
  "title": "Screw Heads and Correct Screwdriver Bits",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 4,
  "keywords": ["screwdriver bits", "slotted screws", "Phillips", "Pozidriv", "pilot holes"],
  "examFocus": [
    "Match screwdriver bits to screw head types",
    "Understand why the correct bit matters",
    "Know key features of slotted, Phillips and Pozidriv screws"
  ],
  "keyPoints": [
    "Screwdriver bits must match the recess in the screw head.",
    "Using the wrong bit can damage the screw head.",
    "Damaged screw heads are harder to drive fully or remove.",
    "Damaged screw heads also make the finished work look poor.",
    "Common screw head types include Pozidriv, Phillips, slotted, Torx, square recess and hex.",
    "Slotted screws have a single slot and are mainly used with imperial screws and some ironmongery.",
    "Slotted screwdrivers can slip out easily and damage both the screw and surrounding surface.",
    "A slotted screw should be finished with the slot vertical.",
    "Phillips screw heads have a cross-shaped recess.",
    "Phillips screws give better grip than slotted screws and reduce slipping.",
    "Pozidriv is one of the most common screw head types.",
    "Pozidriv screws have two cross recesses, with the smaller one set at 45 degrees to the larger one.",
    "Pozidriv bits come in sizes 0 to 3.",
    "Size 2 is the most commonly used Pozidriv bit.",
    "When fitting brass screws, using a steel screw first can help form the thread before replacing it with the brass screw.",
    "Lubricants such as beeswax, petroleum jelly, furniture wax or candle wax can help drive brass screws in and reduce damage."
  ],
  "commonMistakes": [
    "Using the wrong screwdriver bit for the screw head.",
    "Letting a slotted screwdriver slip and mark the material.",
    "Driving brass screws dry into hard material without preparation."
  ],
  "miniCheck": [
    {
      "question": "Why should you use the correct screwdriver bit?",
      "answer": "To avoid damaging the screw head and to drive the screw properly."
    },
    {
      "question": "Which screw head type is most common?",
      "answer": "Pozidriv."
    },
    {
      "question": "How should a slotted screw be left when finished?",
      "answer": "With the slot running vertical."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-adhesives",
  "title": "Adhesives Used in Carpentry and Joinery",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 5,
  "keywords": ["PVA", "PU adhesive", "grab adhesive", "contact adhesive", "mitre adhesive", "fixing foam"],
  "examFocus": [
    "Identify common adhesive types",
    "Know where different adhesives are used",
    "Understand key safety points when using adhesives"
  ],
  "keyPoints": [
    "Carpenters and joiners use different adhesives depending on the job.",
    "Site work often uses faster-setting adhesives.",
    "Workshop joinery often uses slower-setting adhesives held under pressure with clamps.",
    "PVA is a water-based adhesive that dries as the water evaporates and is absorbed by the timber.",
    "PVA is available for internal use and in exterior grades for damp or wet conditions.",
    "PVA gives a strong bond and fills small gaps well.",
    "PVA dries clear but can leave marks if not cleaned off before staining or varnishing.",
    "PVA can react with some hardwoods and leave dark marks at the joint.",
    "PU adhesive forms a strong, water-resistant bond and fills gaps well.",
    "PU adhesive can be used on damp timber.",
    "PU glue expands as it cures, so the joint must be held tightly or it may push apart.",
    "Excess PU glue should be removed only after it has dried.",
    "UF adhesive is mixed with water before use and sets by chemical reaction.",
    "UF adhesive gives a strong water-resistant bond and is used for high-quality work because it does not stain timber.",
    "Grab adhesive is supplied in tubes or cartridges and is often used on site for bonding timber to walls.",
    "Grab adhesive is commonly used with skirting and architraves and can help deal with uneven walls.",
    "Contact adhesive is used for bonding laminates and edging strips to boards.",
    "It is applied to both surfaces, left until touch dry, then bonded instantly.",
    "Mitre adhesive is a fast two-part system used for mitred joints such as architraves, cornices and pelmets.",
    "Mitre adhesive can bond in around 10 to 15 seconds.",
    "Polyurethane fixing foam is used for fixing and sealing frames and linings.",
    "Fixing foam fills gaps, bonds to many surfaces and can offer sound, heat or fire performance depending on the grade.",
    "Always follow the manufacturer’s instructions and wear suitable hand protection when using adhesives."
  ],
  "commonMistakes": [
    "Wiping off PU adhesive before it has dried and spreading it further.",
    "Using mitre adhesive without proper care and getting it on skin.",
    "Leaving excess PVA on the timber before staining or varnishing."
  ],
  "miniCheck": [
    {
      "question": "Which adhesive is commonly used for laminates and edging strips?",
      "answer": "Contact adhesive."
    },
    {
      "question": "Why must PU adhesive joints be held firmly while drying?",
      "answer": "Because the adhesive foams and can force the joint apart."
    },
    {
      "question": "What should you always do when using adhesives?",
      "answer": "Follow the manufacturer’s instructions and wear suitable hand protection."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-ironmongery-and-hinges",
  "title": "Ironmongery, Schedules and Hinge Basics",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 6,
  "keywords": ["ironmongery", "ironmongery schedule", "hinges", "butt hinge", "door screws"],
  "examFocus": [
    "Know what ironmongery includes",
    "Understand the purpose of an ironmongery schedule",
    "Select suitable screw lengths for butt hinges"
  ],
  "keyPoints": [
    "Modern ironmongery is made in many materials, styles and finishes.",
    "Ironmongery can be grouped by location, such as door, window, gate or kitchen furniture.",
    "It can also be grouped by type, including hinges, locks and latches, handles and knobs, bolts and security devices, door closers and cabinet hardware.",
    "Large projects may use an ironmongery schedule.",
    "An ironmongery schedule lists the exact ironmongery required for each location.",
    "The schedule may also state where each item should be positioned.",
    "A butt hinge has two flat leaves that turn around a pin.",
    "Butt hinges are commonly used on internal and external timber doors.",
    "Hinges come in different sizes, materials and designs for different jobs.",
    "When choosing a hinge, you must also choose the correct screw size and type.",
    "For a 35 mm thick door, use screws around 25 mm to 32 mm long.",
    "For a 44 mm or 54 mm thick door, use screws around 32 mm to 40 mm long.",
    "The countersunk head of the screw must match the countersunk recess in the hinge.",
    "A correctly matched screw head helps the hinge fit properly and avoids poor fixing."
  ],
  "commonMistakes": [
    "Using the wrong screw length for the thickness of the door.",
    "Ignoring the ironmongery schedule on larger projects.",
    "Using screws whose heads do not match the hinge recess."
  ],
  "miniCheck": [
    {
      "question": "What is an ironmongery schedule used for?",
      "answer": "To list the exact ironmongery and positions needed on a project."
    },
    {
      "question": "What is a butt hinge commonly used for?",
      "answer": "Hanging internal and external timber doors."
    },
    {
      "question": "What screw length is suitable for a 35 mm door?",
      "answer": "Around 25 mm to 32 mm."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-mortice-locks-and-latches",
  "title": "Mortice Locks, Latches and Privacy Locks",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 7,
  "keywords": ["mortice lock", "mortice latch", "sash mortice lock", "privacy lock", "backset"],
  "examFocus": [
    "Know the difference between mortice locks and mortice latches",
    "Understand how security changes with lever numbers",
    "Recognise common uses of privacy and dead locks"
  ],
  "keyPoints": [
    "A mortice latch only keeps a door shut and cannot be locked.",
    "A mortice lock can latch the door and also lock it with a key.",
    "Mortice locks work using levers inside the lock case.",
    "The correct key lifts the levers to the right height so the bolt can move.",
    "More levers usually means better security because the lock is harder to pick.",
    "Three-lever and five-lever locks are the most common types.",
    "A mortice latch/lock is also called a sash mortice lock.",
    "A sash mortice lock combines a latch and a lock in one unit.",
    "Vertical versions suit most doors.",
    "Horizontal versions are mainly for doors with wide stiles or for use in the middle of a lock rail, often with doorknobs.",
    "Backset is the distance from the front face of the lock to the centre of the handle spindle, knob spindle or keyhole.",
    "Different backsets allow the handle or knob to sit closer to or further from the edge of the door.",
    "Reversible latches allow the lock to be used on left-hand and right-hand doors.",
    "A mortice dead lock has only a locking bolt and no latch.",
    "A dead lock keeps the door shut only when locked.",
    "Dead locks are used for extra security or on doors that should stay locked.",
    "Privacy locks are fitted to bathroom and toilet doors.",
    "Privacy locks can be released from outside in an emergency using a coin or flat screwdriver."
  ],
  "commonMistakes": [
    "Confusing a mortice latch with a mortice lock.",
    "Using a horizontal sash lock where the door stile is too narrow.",
    "Fitting a bathroom privacy lock without an emergency release."
  ],
  "miniCheck": [
    {
      "question": "What is the main difference between a mortice latch and a mortice lock?",
      "answer": "A mortice lock can be locked with a key, while a mortice latch only holds the door shut."
    },
    {
      "question": "What does backset mean?",
      "answer": "It is the distance from the face of the lock to the centre of the handle spindle, knob spindle or keyhole."
    },
    {
      "question": "Where are privacy locks normally used?",
      "answer": "On bathroom and toilet doors."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-other-locks-and-latches",
  "title": "Common Door Latches and Surface-Mounted Locks",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 8,
  "keywords": ["mortice latch", "tubular latch", "cylinder night latch", "rim lock", "handed lock"],
  "examFocus": [
    "Identify common latch and lock types",
    "Know where each type is used",
    "Understand the difference between mortice and rim fixing"
  ],
  "keyPoints": [
    "A mortice latch is mainly used on internal doors that do not need locking.",
    "The most common type is the tubular mortice latch.",
    "The latch closes into a striking plate fitted to the lining or frame.",
    "Mortice latches are operated by lever handles or doorknobs from either side of the door.",
    "They are available in different lengths and backsets.",
    "A cylinder night latch is mainly used on entrance doors in domestic properties.",
    "It is opened from outside with a key and from inside with a handle.",
    "The latch bolt closes into a keep fixed to the door jamb.",
    "Better-quality night latches may have a double-locking feature for extra security.",
    "When double locked from inside, the door cannot be opened from outside even with a key.",
    "Night latches are available with different backsets to suit narrow door stiles.",
    "A cylinder night latch is fitted through a hole bored in the door for the cylinder part.",
    "The night latch body is then fixed to the inside face of the door.",
    "A rim lock or rim latch is fixed to the face of the door surface.",
    "A mortice lock or latch is fitted into a mortice cut into the door.",
    "Rim locks are often used on ledged and braced doors because those doors may be too thin for mortice locks.",
    "Rim locks are common in period properties or where a traditional look is wanted.",
    "Rim locks are handed, so they must be chosen to suit the side of the door and its hanging."
  ],
  "commonMistakes": [
    "Using a rim lock without checking whether it is left-hand or right-hand.",
    "Fitting a mortice lock into a door that is too thin.",
    "Using an internal mortice latch where external security is needed."
  ],
  "miniCheck": [
    {
      "question": "What is a mortice latch mainly used for?",
      "answer": "Internal doors that need to close but do not need locking."
    },
    {
      "question": "Where is a cylinder night latch commonly used?",
      "answer": "On domestic entrance doors."
    },
    {
      "question": "What is the main difference between a rim lock and a mortice lock?",
      "answer": "A rim lock is fixed to the door face, while a mortice lock is fitted into the door."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-security-and-door-furniture",
  "title": "Security Fittings and Door Furniture",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 9,
  "keywords": ["rack bolt", "ratchet bolt", "escutcheon", "security viewer", "security chain"],
  "examFocus": [
    "Identify common security fittings used on doors",
    "Know the purpose of escutcheons, viewers and chains",
    "Understand how a rack or ratchet bolt works"
  ],
  "keyPoints": [
    "A rack or ratchet bolt is a type of deadbolt fitted into a hole bored in the edge of the door.",
    "It is operated by a key inserted through the escutcheon on the inside face of the door.",
    "As the key turns, it moves the bolt into or out of the frame.",
    "This allows the door to be secured or opened.",
    "An escutcheon gives a tidy finish around an exposed keyhole.",
    "It is often used with rim locks and deadlocks.",
    "An escutcheon also helps protect the door face around the keyhole.",
    "A security viewer lets the person inside see who is outside without opening the door.",
    "It is fitted through a hole in the door at a suitable height.",
    "A security viewer gives a wide-angle view.",
    "A security chain allows the door to open only a small amount.",
    "This helps the occupant speak to someone outside while keeping better security."
  ],
  "commonMistakes": [
    "Leaving an exposed keyhole without an escutcheon where one is needed.",
    "Fitting a security viewer at the wrong height.",
    "Assuming a security chain fully secures a door when it only limits opening."
  ],
  "miniCheck": [
    {
      "question": "What is the purpose of a rack or ratchet bolt?",
      "answer": "To secure a door using a deadbolt operated by a key."
    },
    {
      "question": "Why is an escutcheon used?",
      "answer": "To protect the area around a keyhole and give it a neat finish."
    },
    {
      "question": "What does a security chain do?",
      "answer": "It lets the door open slightly without allowing it to be opened fully."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-letter-plates-thresholds-and-vents",
  "title": "Letter Plates, Thresholds and Trickle Vents",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 10,
  "keywords": ["letter plate", "threshold", "silicone sealant", "rain deflector", "trickle vent"],
  "examFocus": [
    "Know where letter plates can be fitted",
    "Understand the purpose of thresholds",
    "Recognise why trickle vents are installed"
  ],
  "keyPoints": [
    "Letter plates are usually fitted in the centre of a door.",
    "If there is no middle rail, they can be fitted in the bottom rail.",
    "Smaller vertical letter plates can be fitted in the door stile.",
    "Letter plate openings were traditionally cut using drilled holes and a padsaw.",
    "They are now often cut using a jigsaw or a router with a jig.",
    "A threshold helps form a weatherproof seal between the bottom of the door and the cill.",
    "Most thresholds are made from aluminium with sealing strips.",
    "Thresholds can usually be cut to length with a hacksaw.",
    "They are commonly fitted on a bead of silicone sealant and then fixed to the cill.",
    "Some aluminium thresholds can be used with a matching rain deflector.",
    "A rain deflector helps direct water away from the bottom of the door.",
    "Trickle vents are fitted in doors and windows to provide background ventilation.",
    "Most trickle vents have internal panels that can be opened or closed.",
    "In some cases, trickle vents are required by Building Regulations."
  ],
  "commonMistakes": [
    "Placing a letter plate in the wrong part of the door.",
    "Fitting a threshold without proper sealing.",
    "Ignoring the need for trickle vents where regulations require them."
  ],
  "miniCheck": [
    {
      "question": "Where is a letter plate usually fitted?",
      "answer": "In the centre of the door."
    },
    {
      "question": "What is the job of a threshold?",
      "answer": "To help create a weatherproof seal at the bottom of the door."
    },
    {
      "question": "Why are trickle vents used?",
      "answer": "To provide ventilation through door or window frames."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-fitting-hinges",
  "title": "Fitting Butt Hinges Correctly",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 11,
  "keywords": ["butt hinge", "hinge recess", "pilot hole", "hinge drill bit", "most to the post"],
  "examFocus": [
    "Understand the final steps in fitting a butt hinge",
    "Know why pilot holes are needed",
    "Recognise how hinge drill bits improve accuracy"
  ],
  "keyPoints": [
    "Before fixing the hinge, clean the back edge of the recess and test the fit.",
    "The hinge should sit neatly in the recess before any screws are fitted.",
    "Pilot holes should be drilled before inserting screws.",
    "A pilot hole helps stop the timber splitting when screws are driven in.",
    "Using a hinge drill bit helps place the pilot hole in the centre of the hinge hole.",
    "This keeps the screw heads central in the countersunk holes.",
    "Correctly centred screws help the hinge sit flush and look tidy.",
    "Once the fit is correct and the pilot holes are drilled, the hinge can be fixed in place.",
    "The rule 'most to the post' helps with hinge fitting.",
    "This means the hinge leaf with the fewest moving parts near the knuckle is fixed to the door.",
    "For deeper hinge recesses, several shallow cuts can give a neater finish than one deep cut."
  ],
  "commonMistakes": [
    "Fixing the hinge before checking the recess fit properly.",
    "Driving screws without pilot holes and splitting the timber.",
    "Misaligning screws so the heads do not sit central and flush."
  ],
  "miniCheck": [
    {
      "question": "Why are pilot holes drilled before fixing a hinge?",
      "answer": "To reduce the risk of splitting the timber and help guide the screws."
    },
    {
      "question": "What is the benefit of a hinge drill bit?",
      "answer": "It centres the pilot holes so the screw heads sit neatly in the hinge."
    },
    {
      "question": "What does 'most to the post' remind you about?",
      "answer": "Which hinge leaf should be fixed to the door."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-installing-mortice-latches-and-locks",
  "title": "Installing a Mortice Latch or Lock",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 12,
  "keywords": ["mortice latch", "mortice lock", "spindle height", "backset", "mortice recess"],
  "examFocus": [
    "Know the basic steps for fitting a mortice latch or lock",
    "Understand key measurements used in setting out",
    "Recognise good practice when drilling and forming the mortice"
  ],
  "keyPoints": [
    "Fitting a mortice latch is similar to fitting a mortice latch/lock, but the lock version takes longer and needs extra holes.",
    "A mortice latch/lock needs a longer recess for the case and a hole for the key.",
    "The standard spindle height is 990 mm from the bottom of the door.",
    "When marking out, set the spindle height first on the lock stile.",
    "From that point, mark the backset, case height and the centre line for the mortice recess.",
    "The mortice recess centre line runs along the edge of the door.",
    "Spindle and key holes should be drilled from both sides of the door.",
    "Drilling from both sides helps reduce splintering and damage.",
    "The spindle hole needs enough clearance for the spindle to turn freely.",
    "A 20 mm drill bit is commonly used for the spindle hole.",
    "A large round hole is often used for the key opening because it is quicker, although some see it as poor practice.",
    "A traditional keyhole shape is formed using two holes and then finished with a padsaw and file.",
    "The mortice recess for the lock case is made by drilling a series of overlapping holes to the correct depth.",
    "Start with the two outer holes first, then drill towards the centre.",
    "The drill bit should be marked with tape or a depth stop used to control the depth.",
    "For a mortice latch, one hole just large enough for the latch may be enough.",
    "A mortice gauge can be used to mark the sides of the recess to give a clean guide for chiselling.",
    "Drilling the spindle and lock holes before the mortice recess helps prevent splintering into the recess."
  ],
  "commonMistakes": [
    "Marking the lock out without checking the spindle height first.",
    "Drilling all the way from one side and damaging the opposite face of the door.",
    "Cutting the mortice recess without controlling the depth."
  ],
  "miniCheck": [
    {
      "question": "What is the standard spindle height for a mortice latch or lock?",
      "answer": "990 mm from the bottom of the door."
    },
    {
      "question": "Why are spindle and key holes drilled from both sides of the door?",
      "answer": "To reduce splintering and damage."
    },
    {
      "question": "How is the lock case mortice usually started?",
      "answer": "By drilling a series of overlapping holes to the required depth."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-fitting-a-butt-hinge-task",
  "title": "Fitting a Butt Hinge: Tools, Steps and Good Practice",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 13,
  "keywords": ["butt hinge", "marking out", "hinge recess", "pilot holes", "risk assessment"],
  "examFocus": [
    "Know the basic process for fitting a butt hinge",
    "Identify the tools and equipment needed",
    "Understand safe working and good finishing standards"
  ],
  "keyPoints": [
    "Before starting, make sure you have permission from your tutor or trainer.",
    "Work to the risk assessment and follow health, safety and environmental rules.",
    "Wear the correct PPE for the task.",
    "The hinge position should be marked 150 mm from one end of the timber.",
    "Use a marking knife to mark the hinge location.",
    "Set the marking gauges to match the size of the hinge.",
    "Mark out the hinge position accurately without going past the marked lines.",
    "Use a suitable bevel edge chisel and mallet to cut the recess.",
    "The recess must be the correct size and depth for the hinge.",
    "Use the correct size drill bit to form pilot holes.",
    "Choose suitable screws for the hinge.",
    "Fix the hinge with the correct screwdriver.",
    "The hinge must be secure and fitted in the correct position.",
    "All work should be completed safely and neatly.",
    "When finished, leave the work area clean and store tools safely."
  ],
  "commonMistakes": [
    "Starting work without following the risk assessment.",
    "Marking beyond the hinge lines.",
    "Cutting the recess to the wrong depth or size.",
    "Using the wrong pilot hole, screw or screwdriver.",
    "Leaving the work area untidy after the task."
  ],
  "miniCheck": [
    {
      "question": "How far from the end should the hinge position be marked?",
      "answer": "150 mm from one end."
    },
    {
      "question": "Why are pilot holes needed before fixing the hinge?",
      "answer": "To help the screws go in correctly and reduce the risk of splitting the timber."
    },
    {
      "question": "What should you do when the task is finished?",
      "answer": "Leave the area clean and tidy and store tools safely."
    }
  ]
},
{
  "id": "types-of-fixings-and-ironmongery-key-revision-check",
  "title": "Quick Revision Check for Fixings and Ironmongery",
  "topic": "Types of fixings and ironmongery",
  "topicOrder": 14,
  "keywords": ["non-ferrous", "annular ring shank", "Torx", "mitre adhesive", "escutcheon"],
  "examFocus": [
    "Recall common materials, fixings and ironmongery terms",
    "Match products to their correct use",
    "Revise key points likely to appear in knowledge checks"
  ],
  "keyPoints": [
    "Brass is a non-ferrous metal.",
    "Annular ring shank nails have raised ridges on the shank.",
    "Torx screw heads are shaped like a six-pointed star.",
    "Mitre adhesive is a fast-setting adhesive used on mouldings such as architraves and cornices.",
    "Black japanned screws have a black lacquered finish.",
    "The phrase 'most to the post' is used when fitting butt hinges.",
    "An escutcheon is used to cover or finish around a keyhole.",
    "A mortice lock can lock a door, while a mortice latch only keeps it shut.",
    "A cylinder night latch is commonly used on entrance doors and is operated by a key outside and a handle inside.",
    "Ferrous metals contain iron and are more likely to rust or stain.",
    "Non-ferrous metals do not contain iron and are more resistant to rusting and staining."
  ],
  "commonMistakes": [
    "Confusing ferrous and non-ferrous metals.",
    "Mixing up a mortice lock with a night latch.",
    "Forgetting what an escutcheon is used for.",
    "Using the wrong name for star-shaped screw heads."
  ],
  "miniCheck": [
    {
      "question": "Which metal listed in the chapter is non-ferrous?",
      "answer": "Brass."
    },
    {
      "question": "Which nail has ridges around the shank?",
      "answer": "The annular ring shank nail."
    },
    {
      "question": "What does an escutcheon cover?",
      "answer": "A keyhole."
    }
  ]
},
  {
    "id": "types-of-fixings-and-ironmongery-nails-and-basic-screw-sizing",
    "title": "Nails and Basic Screw Sizing",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "masonry nails",
      "PVCu nail heads",
      "nail length rule",
      "screw sizing",
      "imperial gauge",
      "metric diameter"
    ],
    "examFocus": [
      "Identify common nail types and where they are used",
      "Understand the basic rule for choosing nail length",
      "Know how wood screw sizes are shown in imperial and metric"
    ],
    "keyPoints": [
      "Masonry nails are hardened for strength and used for fixing straight into masonry such as brick.",
      "PVCu covered nails are stainless steel and have annular rings on the shank for strong pull-out resistance.",
      "PVCu covered nails are commonly used when fixing PVCu items such as fascias and soffits.",
      "A good guide is to use a nail about 2.5 times the thickness of the material being fixed.",
      "Example: timber that is 20 mm thick would usually need a 50 mm nail.",
      "Screws come in different materials, sizes and head shapes, and different driver bits may be needed.",
      "Some screws are made to suit specific ironmongery, so the type can vary.",
      "In imperial screw sizes, the first number is the gauge, which shows thickness.",
      "In metric screw sizes, the first number is the screw diameter in millimetres.",
      "For both imperial and metric screws, a bigger first number means a thicker screw."
    ],
    "commonMistakes": [
      "Using a nail that is too short for the material thickness.",
      "Choosing nails without matching them to the material being fixed.",
      "Confusing imperial screw gauge with the screw diameter in inches.",
      "Assuming all screws use the same driver bit."
    ],
    "miniCheck": [
      {
        "question": "What are masonry nails mainly used for?",
        "answer": "Fixing directly into masonry such as brickwork."
      },
      {
        "question": "Why do PVCu covered nails hold well once fitted?",
        "answer": "Because the annular ring shank gives high pull-out resistance."
      },
      {
        "question": "What nail length would suit material that is 20 mm thick?",
        "answer": "About 50 mm."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-parts-of-a-screw-and-head-types",
    "title": "Parts of a Screw and Common Head Types",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "parts of a screw",
      "countersunk head",
      "raised head",
      "washer head",
      "round head",
      "bulge head"
    ],
    "examFocus": [
      "Recognise the main parts of a wood screw",
      "Understand how screw length is measured",
      "Identify common screw head types and their uses"
    ],
    "keyPoints": [
      "A wood screw has four main parts: head, shank, thread and tip.",
      "The second number in a screw size shows the screw length.",
      "Screw length is the part that goes into the timber or other material.",
      "The length does not include the raised section on raised or pan heads.",
      "A countersunk head is designed to finish flush or just below the timber surface.",
      "A double countersunk screw gives extra head strength and can make countersinking easier.",
      "A raised or pan style head has a tapered underside but stands above the surface as a decorative finish.",
      "Raised heads are often used with ironmongery such as lever handles on door locks.",
      "A washer head has a wide flat underside and is useful where a countersunk head could split the material.",
      "Round heads give a larger bearing surface and are often used with traditional black ironmongery and pocket screws.",
      "A bulge head is commonly used for drywall screws because its shape helps reduce damage to plasterboard paper."
    ],
    "commonMistakes": [
      "Using a countersunk screw where the material may split.",
      "Picking a decorative raised head when a flush finish is needed.",
      "Measuring screw length including the raised head.",
      "Using the wrong screw head type for plasterboard."
    ],
    "miniCheck": [
      {
        "question": "What are the four main parts of a wood screw?",
        "answer": "Head, shank, thread and tip."
      },
      {
        "question": "Which screw head is used when you want the screw to finish flush?",
        "answer": "A countersunk head."
      },
      {
        "question": "Why is a bulge head used on drywall screws?",
        "answer": "It helps reduce tearing of the plasterboard paper."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-screw-heads-and-driver-bits",
    "title": "Screw Head Types and Correct Driver Bits",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "Torx",
      "square recess",
      "Robertson screw",
      "hex screw",
      "driver bit sizes",
      "slippage"
    ],
    "examFocus": [
      "Identify common screw head designs",
      "Know where different screw heads are commonly used",
      "Understand why the correct driver bit matters"
    ],
    "keyPoints": [
      "Torx screws have a six-point star shape that gives strong grip and allows higher driving force.",
      "Torx heads are well suited to combi drills and impact drivers for quick fixing.",
      "Square recess screws are also called Robertson screws.",
      "Square recess screws have a square socket and matching tapered bit for a firm fit.",
      "Square recess screws are often used in furniture making and pocket screw systems.",
      "Hex screws have a six-sided recess and are driven with a hex bit or Allen key.",
      "Hex fixings are commonly used with nuts and washers and on some kitchen appliances.",
      "Using the correct bit shape and size helps stop the driver slipping out of the screw head.",
      "Small screws up to 3.0 mm usually need screwdriver size 0.",
      "3.5 mm screws usually need size 1, 4.0 to 4.5 mm screws need size 2, and 5.0 mm or larger need size 3."
    ],
    "commonMistakes": [
      "Using the wrong screwdriver bit shape for the screw head.",
      "Choosing the wrong bit size and causing the driver to slip.",
      "Assuming all screw heads can be driven the same way.",
      "Using a weak bit grip for fast power tool fixing."
    ],
    "miniCheck": [
      {
        "question": "Which screw head uses a six-point star shape?",
        "answer": "Torx."
      },
      {
        "question": "What is another name for a square recess screw?",
        "answer": "Robertson screw."
      },
      {
        "question": "Why is the correct driver bit important?",
        "answer": "It reduces slippage and makes driving easier."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-timber-pellets-and-coach-screws",
    "title": "Timber Pellets and Coach Screws",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "timber pellets",
      "concealed fixings",
      "counterbored hole",
      "grain direction",
      "coach screws",
      "clearance hole"
    ],
    "examFocus": [
      "Understand how screw heads can be hidden in quality timber work",
      "Know the basic steps for fitting timber pellets",
      "Recognise the purpose of coach screws"
    ],
    "keyPoints": [
      "In higher-quality work, visible screw heads may not be acceptable.",
      "Timber pellets are used to hide screw heads and give a neater finish.",
      "Pellets should match the timber type and the grain direction of the surrounding material.",
      "A counterbored hole is drilled so the screw can be tightened fully and still leave space above for the pellet.",
      "The timber pellet should sit deep enough in the hole, usually with at least 6 mm depth.",
      "After the screw is fully fixed, the pellet is glued into place.",
      "The pellet must be aligned so its grain runs the same way as the timber around it.",
      "Once the glue is dry, the pellet is trimmed flush and finished smooth with abrasive paper.",
      "Coach screws are heavy-duty fixings with a part-threaded shank and a large hex head.",
      "Coach screws are used for fixing heavy timbers or metal fittings to timber.",
      "A suitable clearance hole should always be drilled when using coach screws."
    ],
    "commonMistakes": [
      "Leaving visible screw heads where a high-quality finish is needed.",
      "Fitting the pellet with the grain running the wrong way.",
      "Not leaving enough depth above the screw head for the pellet.",
      "Using coach screws without drilling a proper clearance hole."
    ],
    "miniCheck": [
      {
        "question": "Why are timber pellets used?",
        "answer": "To hide screw heads and improve the finish."
      },
      {
        "question": "What should match when fitting a timber pellet?",
        "answer": "The grain direction of the pellet and the timber."
      },
      {
        "question": "What are coach screws mainly used for?",
        "answer": "Fixing heavy timbers or metalwork to timber."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-butt-hinges-and-basic-fitting",
    "title": "Butt Hinges and Basic Fitting Rules",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "butt hinge",
      "hinge leaf",
      "hinge knuckle",
      "hinge pin",
      "door frame",
      "recessed hinge"
    ],
    "examFocus": [
      "Identify the main parts of a butt hinge",
      "Understand the basic rules for fitting butt hinges",
      "Know how hinge position affects door movement"
    ],
    "keyPoints": [
      "A butt hinge has two leaves joined by a pin through the knuckles.",
      "Butt hinges are one of the most common hinge types used on doors.",
      "Both hinge leaves should be recessed equally into the door and frame.",
      "A small gap must be left between the leaves when the door is closed so the door can move freely.",
      "The knuckle should usually project slightly past the face of the door to give better clearance when opening.",
      "Butt hinges normally have an odd number of knuckles.",
      "The leaf with the most knuckles is usually fixed to the door frame.",
      "The leaf with fewer knuckles is usually fixed to the door.",
      "Using the correct screw head size helps stop the hinge from working loose or causing poor door movement.",
      "Brass butt hinges can wear at the knuckles, so washers may be fitted to reduce wear and squeaking."
    ],
    "commonMistakes": [
      "Not recessing both hinge leaves equally.",
      "Fixing the hinge so there is no gap for smooth movement.",
      "Putting the hinge leaf with the most knuckles on the door instead of the frame.",
      "Using the wrong screw head size for the hinge."
    ],
    "miniCheck": [
      {
        "question": "What are the two main parts joined by the pin on a butt hinge?",
        "answer": "The two leaves."
      },
      {
        "question": "Which butt hinge leaf usually goes on the frame?",
        "answer": "The leaf with the most knuckles."
      },
      {
        "question": "Why should a small gap be left between the hinge leaves?",
        "answer": "To help the door open and close without binding."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-common-hinge-types-and-uses",
    "title": "Common Hinge Types and Their Uses",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "ball race hinge",
      "loose pin butt hinge",
      "rising butt hinge",
      "parliament hinge",
      "flush hinge",
      "lift off hinge"
    ],
    "examFocus": [
      "Recognise common hinge types",
      "Know where different hinges are best used",
      "Understand key fitting limits and features"
    ],
    "keyPoints": [
      "Ball race butt hinges use ball bearings for smoother movement.",
      "Ball race hinges are durable and suitable for heavy doors.",
      "Loose pin butt hinges let the door be removed by taking out the pin.",
      "A loose pin hinge makes it easier to remove a door without taking the hinge off the frame or door.",
      "Loose pin butt hinges should not be used on outward-opening external doors.",
      "Lift off butt hinges allow a door to be lifted off when open and are handed for left or right opening doors.",
      "On lift off hinges, the long pin hinge is fitted at the bottom and the short pin hinge at the top.",
      "Rising butt hinges lift the door as it opens, helping clear uneven floors, mats or rugs.",
      "Rising butt hinges also give a self-closing action and are handed for door opening direction.",
      "Parliament hinges have wide leaves that let the door open back close to the wall.",
      "Flush hinges are for lightweight doors, furniture and access hatches.",
      "Flush hinges are quicker to fit because they sit on the surface and do not need recesses cut into the door and frame."
    ],
    "commonMistakes": [
      "Using a loose pin hinge on an outward-opening external door.",
      "Choosing the wrong hand of hinge for rising butt or lift off hinges.",
      "Using a flush hinge on a heavy door.",
      "Using the wrong hinge type when a door needs to fold back close to the wall."
    ],
    "miniCheck": [
      {
        "question": "Which hinge type is best for heavy doors and smooth action?",
        "answer": "A ball race butt hinge."
      },
      {
        "question": "Which hinge helps a door clear mats or uneven floors?",
        "answer": "A rising butt hinge."
      },
      {
        "question": "What are flush hinges mainly used for?",
        "answer": "Lightweight doors, furniture and access hatches."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-lock-types-and-uses",
    "title": "Common Lock Types and Their Uses",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "Euro pattern lock",
      "Euro cylinder",
      "digital lock",
      "code-operated lock",
      "thumb latch",
      "Suffolk latch"
    ],
    "examFocus": [
      "Identify common lock and latch types",
      "Understand where these ironmongery items are used",
      "Know the main features of each type"
    ],
    "keyPoints": [
      "Euro pattern mortice locks use a Euro cylinder section.",
      "With a Euro pattern lock, the key-operated part can be replaced without removing the full mortice lock.",
      "Digital code-operated locks give keyless entry.",
      "Code locks work by entering a number or letter code to release the lock.",
      "After the code is entered, the door is opened by turning a knob or handle.",
      "Digital and code-operated locks are used with deadlocking mortice latches or cylinder night latches.",
      "Hotels often use a card-operated version of this type of locking system.",
      "Thumb latches are commonly fitted to matchboard ledged and braced doors.",
      "Traditional thumb latches were made from mild steel by blacksmiths.",
      "Thumb latches are often finished in black japanned coating.",
      "Two well-known thumb latch styles are the Suffolk latch and the Norfolk latch."
    ],
    "commonMistakes": [
      "Replacing a full mortice lock when only the Euro cylinder section needs changing.",
      "Using the wrong lock type for the door style.",
      "Confusing thumb latches with modern key-operated locks.",
      "Choosing ironmongery by appearance only instead of function first."
    ],
    "miniCheck": [
      {
        "question": "What is the main benefit of a Euro pattern lock?",
        "answer": "The key-operated cylinder can be replaced without removing the whole lock."
      },
      {
        "question": "How is a digital code-operated lock opened?",
        "answer": "By entering the correct code and then turning a knob or handle."
      },
      {
        "question": "What type of door is a thumb latch often used on?",
        "answer": "A matchboard ledged and braced door."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-lock-fixing-positions-and-door-furniture",
    "title": "Lock Heights and Basic Door Furniture Rules",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "mortice latch",
      "cylinder night latch",
      "fixing positions",
      "door furniture",
      "door handles",
      "security"
    ],
    "examFocus": [
      "Know standard fixing positions for common locks",
      "Understand that lock positions may vary",
      "Recognise what is meant by door furniture"
    ],
    "keyPoints": [
      "Lock and latch fixing positions can vary by region or by workplace instructions.",
      "You should always check employer guidance or fitting instructions before choosing the exact position.",
      "A mortice latch or lock spindle is normally set at 990 mm from the floor.",
      "A cylinder night latch is usually fixed between 1200 mm and 1500 mm from the floor.",
      "When replacing doors, locks and latches may need to match the height of nearby doors.",
      "Entrance doors to private homes often need locks that meet British Standard BS 3621 for insurance purposes.",
      "Door furniture means ironmongery fixed to the face of a door.",
      "Examples of door furniture include handles, knobs, bolts and door closers.",
      "Door furniture comes in different materials, colours and styles.",
      "The choice of door furniture should be based on security and practicality before appearance."
    ],
    "commonMistakes": [
      "Fitting locks at a guessed height without checking instructions.",
      "Ignoring existing lock heights on nearby matching doors.",
      "Choosing door furniture for style before security or practicality.",
      "Assuming one lock height suits every job."
    ],
    "miniCheck": [
      {
        "question": "What is the standard height for a mortice latch or lock spindle?",
        "answer": "990 mm from the floor."
      },
      {
        "question": "What height range is used for a cylinder night latch?",
        "answer": "Between 1200 mm and 1500 mm from the floor."
      },
      {
        "question": "What does door furniture include?",
        "answer": "Items fixed to the face of the door, such as handles, knobs, bolts and door closers."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-door-furniture-and-its-purpose",
    "title": "Door Furniture and What It Does",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "weather seals",
      "door closer",
      "drawer runners",
      "plinth feet",
      "draughts",
      "soft close"
    ],
    "examFocus": [
      "Identify common types of door furniture and fittings",
      "Understand the purpose of each item",
      "Know basic fitting features for common ironmongery"
    ],
    "keyPoints": [
      "Weather seals are fitted to doors and windows to reduce draughts, water entry and heat loss.",
      "Weather seals are usually pushed into a machined groove in the frame.",
      "Door closers make doors shut by themselves.",
      "Door closers help control fire spread, draughts, sound and privacy.",
      "Overhead door closers are fixed at the top of the door or frame.",
      "Overhead closers work using a spring or hydraulic mechanism with an arm that pulls or pushes the door shut.",
      "Drawer runners come in different sizes and finishes to suit the unit.",
      "Standard drawer runners usually let the drawer open only part way, while full-extension runners give better access.",
      "Better-quality drawer runners may use ball bearings for smoother movement and soft-close action.",
      "Plinth feet are fitted under kitchen units so the height can be adjusted and the unit can be levelled.",
      "Plinth clips connect the plinth to the feet so it can be removed and refitted easily."
    ],
    "commonMistakes": [
      "Using the wrong type of weather seal for the frame position.",
      "Fitting a door closer without considering the door location and purpose.",
      "Choosing drawer runners that do not give enough access.",
      "Forgetting to level kitchen units with plinth feet."
    ],
    "miniCheck": [
      {
        "question": "What are weather seals designed to stop?",
        "answer": "Draughts, water ingress and heat loss."
      },
      {
        "question": "What is the main job of a door closer?",
        "answer": "To make the door close on its own."
      },
      {
        "question": "Why are plinth feet fitted to kitchen units?",
        "answer": "To adjust the height and level the unit."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-stages-of-fitting-doors-and-ironmongery",
    "title": "Stages of Fitting Doors and Ironmongery",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "fitting the door",
      "swinging the door",
      "installing ironmongery",
      "clearance gap",
      "leading edge",
      "door stages"
    ],
    "examFocus": [
      "Understand the main stages of hanging a door",
      "Know the typical clearance gaps for internal and external doors",
      "Recognise the order for fitting ironmongery correctly"
    ],
    "keyPoints": [
      "Doors are usually hung and finished in three stages: fit the door, swing the door, then install the ironmongery.",
      "Stage 1 is fitting the door to the opening by trimming it to size.",
      "Even a new door often needs some fitting before installation.",
      "A door may need a leading edge, which is a slight taper on the closing edge.",
      "Internal doors usually have a 2 mm gap at both sides and across the top.",
      "Internal doors usually have a 4 mm gap at the bottom.",
      "External doors usually have a 3 mm gap at both sides and across the top.",
      "Stage 2 is swinging the door by fitting the hinges and checking the door opens and closes properly.",
      "The door must move freely without binding or sticking.",
      "Stage 3 is installing the ironmongery, such as locks, latches and other fittings.",
      "Some manufacturers provide templates and fitting instructions to help with installation."
    ],
    "commonMistakes": [
      "Installing locks and fittings before the door is properly fitted.",
      "Leaving the wrong clearance gaps around the door.",
      "Forgetting to form a leading edge where needed.",
      "Fitting hinges without checking the door swings freely."
    ],
    "miniCheck": [
      {
        "question": "What are the three stages of hanging a door?",
        "answer": "Fit the door, swing the door, then install the ironmongery."
      },
      {
        "question": "What gap is usually left at the bottom of an internal door?",
        "answer": "4 mm."
      },
      {
        "question": "What should be checked after fitting the hinges?",
        "answer": "That the door opens and closes freely without binding."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-marking-out-and-cutting-a-mortice-lock",
    "title": "Marking Out and Cutting a Mortice Lock",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "mortice lock",
      "mortice latch",
      "paper template",
      "mortice gauge",
      "mortice recess",
      "forend"
    ],
    "examFocus": [
      "Understand the basic process for marking out a mortice latch or lock",
      "Know how the mortice recess is checked and cleaned",
      "Recognise the purpose of the forend recess"
    ],
    "keyPoints": [
      "Many locks and latches come with a paper template to help mark out the position on the door.",
      "A mortice gauge can be used to mark the sides of the mortice recess.",
      "The mortice recess must be cut to the correct size for the latch or lock body.",
      "After cutting, the recess should be cleaned out with suitable chisels.",
      "The latch or lock should be placed into the recess and checked for fit before final fixing.",
      "The outline of the forend is marked with a marking knife.",
      "After marking, the latch or lock is removed so the recess for the forend can be cut.",
      "The forend recess is formed with a suitable chisel.",
      "Once the recesses are correct, the latch or lock is fitted into the door."
    ],
    "commonMistakes": [
      "Not using the template or gauge to mark out accurately.",
      "Cutting the mortice recess to the wrong size.",
      "Failing to clean out the recess properly with chisels.",
      "Forgetting to mark and recess the forend before final fitting."
    ],
    "miniCheck": [
      {
        "question": "What can be used to help mark out a mortice lock on a door?",
        "answer": "A paper template."
      },
      {
        "question": "What tool is used to mark the sides of the mortice recess?",
        "answer": "A mortice gauge."
      },
      {
        "question": "Why is the forend marked before cutting its recess?",
        "answer": "So the recess can be cut to the correct shape and size."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-fitting-a-mortice-lock-and-door-handles",
    "title": "Fitting a Mortice Lock and Door Handles",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": [
      "mortice latch fitting",
      "forend marking",
      "door handles",
      "lever handles",
      "round furniture",
      "handle alignment"
    ],
    "examFocus": [
      "Know the final steps for fitting a mortice latch or lock",
      "Understand how the forend is fitted neatly",
      "Recognise the correct position for door handles"
    ],
    "keyPoints": [
      "After the mortice recess is cut, the latch or lock is inserted to check the fit.",
      "The forend is marked around with a marking knife before cutting the recess for it.",
      "The lock is removed before the forend recess is chopped out.",
      "A suitable chisel is used to form the forend recess.",
      "The latch or lock is then fitted into the door.",
      "Lever door handles are fixed on both sides of the door.",
      "If the lever backplate has straight sides, it should be fitted vertically.",
      "If the door furniture is round, the handle should be set level in a horizontal position."
    ],
    "commonMistakes": [
      "Fitting the lock before checking that the recess is the right size.",
      "Not marking the forend accurately before chiselling.",
      "Fixing straight-sided lever furniture out of line.",
      "Leaving round handle furniture out of level."
    ],
    "miniCheck": [
      {
        "question": "What should you do before cutting the forend recess?",
        "answer": "Mark around the forend with a marking knife."
      },
      {
        "question": "Where are lever door handles fitted?",
        "answer": "On both sides of the door."
      },
      {
        "question": "How should round handle furniture be positioned?",
        "answer": "With the handle horizontal."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-screw-threads-and-shanks",
    "title": "Screw Threads and Shanks",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 1,
    "keywords": ["screw thread", "shank", "part-threaded screw", "fully threaded screw", "clearance hole", "twin thread"],
    "examFocus": [
      "Understand how screw threads grip materials",
      "Know the difference between part-threaded and fully threaded screws",
      "Recognise when a clearance hole is needed"
    ],
    "keyPoints": [
      "The thread is the part of the screw that pulls it into the material.",
      "The shank is the main body of the screw.",
      "Some screws are fully threaded, while others have a plain section below the head.",
      "Part-threaded screws help pull the top piece tightly onto the lower piece.",
      "Fully threaded screws can stop materials pulling together properly if no clearance hole is drilled.",
      "A clearance hole is drilled through the top piece only and should be slightly wider than the screw diameter.",
      "Twin-thread screws drive in and out faster than single-thread screws.",
      "Twin-thread screws usually give a stronger hold but often cost more.",
      "Serrated threads cut through material more easily and need less force."
    ],
    "commonMistakes": [
      "Using fully threaded screws without a clearance hole in the top material.",
      "Choosing the wrong hole size for the screw.",
      "Assuming all screws pull materials together in the same way."
    ],
    "miniCheck": [
      {
        "question": "What does the thread of a screw do?",
        "answer": "It pulls or drives the screw into the material."
      },
      {
        "question": "Why is a clearance hole used?",
        "answer": "To let the screw pass through the top piece without binding."
      },
      {
        "question": "What is one advantage of a twin-thread screw?",
        "answer": "It drives faster and can hold more securely."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-screw-tips-and-types",
    "title": "Screw Tips and Common Screw Types",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 2,
    "keywords": ["self-cutting tip", "wood screw", "yellow passivated", "quicksilver screw", "stainless steel screw", "corrosion resistance"],
    "examFocus": [
      "Understand how modern screw tips reduce damage",
      "Know common screw materials",
      "Identify suitable uses for different wood screws"
    ],
    "keyPoints": [
      "The screw tip helps start the fixing process.",
      "Many modern screws have a self-cutting tip.",
      "A self-cutting tip cuts into the material as the screw is driven in.",
      "This makes the screw easier to insert and lowers the chance of splitting timber.",
      "This is especially useful near the ends of timber.",
      "Common screw materials include carbon steel, brass and stainless steel.",
      "Yellow passivated wood screws are general-purpose screws for interior and exterior use and resist corrosion.",
      "Quicksilver wood screws are zinc-coated carbon steel screws mainly used for interior work.",
      "Stainless steel wood screws are strong, resist corrosion well and suit damp areas inside or outside.",
      "Stainless steel screws do not react with acidic timbers such as oak, so they help prevent staining and corrosion."
    ],
    "commonMistakes": [
      "Using interior-grade screws for external work.",
      "Using the wrong screw in damp conditions.",
      "Ignoring the risk of timber splitting near the end of a piece."
    ],
    "miniCheck": [
      {
        "question": "What is the benefit of a self-cutting screw tip?",
        "answer": "It cuts into the material more easily and reduces splitting."
      },
      {
        "question": "Which screw type is mainly suited to interior work?",
        "answer": "Quicksilver wood screw."
      },
      {
        "question": "Why are stainless steel screws useful with oak?",
        "answer": "They do not react with the timber, so they avoid staining and corrosion."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-coach-bolts-and-connector-plates",
    "title": "Coach Bolts and Connector Plates",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 3,
    "keywords": ["coach bolt", "domed head", "square section", "nut and washer", "clearance hole", "dog tooth connector"],
    "examFocus": [
      "Identify the main features of a coach bolt",
      "Understand how coach bolts clamp materials together",
      "Know the purpose of dog tooth connector plates"
    ],
    "keyPoints": [
      "A coach bolt has a rounded or domed head.",
      "Below the head is a square section that helps stop the bolt turning.",
      "The shank is part-threaded and takes a nut and washer.",
      "A clearance hole is needed before fitting a coach bolt.",
      "Coach bolts are used to clamp two pieces of material tightly together.",
      "They are often used with dog tooth connector plates.",
      "The connector plate sits on the coach bolt between the two timbers.",
      "When tightened, the teeth bite into the timber.",
      "This helps stop the timbers slipping or twisting.",
      "Using a connector plate helps create a stronger joint."
    ],
    "commonMistakes": [
      "Forgetting to drill a clearance hole.",
      "Not using a washer and nut correctly.",
      "Leaving out the connector plate where extra grip is needed."
    ],
    "miniCheck": [
      {
        "question": "What shape is the head of a coach bolt?",
        "answer": "Rounded or domed."
      },
      {
        "question": "What helps stop a coach bolt from turning under the head?",
        "answer": "The square section beneath the head."
      },
      {
        "question": "What is the job of a dog tooth connector plate?",
        "answer": "It grips into the timber to reduce slipping and twisting."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-wall-plugs-and-cavity-fixings",
    "title": "Wall Plugs and Cavity Fixings",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 4,
    "keywords": ["wall plug", "nylon plug", "masonry", "cavity fixing", "plasterboard", "drywall anchor"],
    "examFocus": [
      "Understand why wall plugs are used in masonry",
      "Know how plug size matches drill size and screw size",
      "Recognise when a cavity fixing is needed instead of a wall plug"
    ],
    "keyPoints": [
      "Masonry is often porous and brittle, so wood screws alone do not grip well enough.",
      "Wall plugs are used with screws to fix items securely into masonry.",
      "Most wall plugs are now made from nylon.",
      "The drill bit size must match the wall plug size.",
      "Wall plugs are colour coded to help choose the right screw and hole size.",
      "In weak or brittle masonry, a slightly smaller hole may give a better fit.",
      "Yellow plugs suit 4.5 to 5 mm holes with 3 mm screws.",
      "Red plugs suit 5.5 to 6 mm holes with 3.5 to 4 mm screws.",
      "Brown plugs suit 6.5 to 7 mm holes with 4.5 or 5 mm screws.",
      "Blue plugs suit 7 to 8 mm holes with 5 or 6 mm screws.",
      "Standard nylon wall plugs are not suitable for hollow walls such as plasterboard partitions.",
      "Cavity fixings are designed for hollow walls because they spread the load over a larger area.",
      "Nylon expanding anchors are cheap and simple but not suitable for heavy loads.",
      "Metal expanding anchors can hold more weight but cost more and need a setting tool.",
      "Self-drilling plasterboard anchors are easy to fit without predrilling, but can damage plasterboard if overdriven.",
      "Gripit plasterboard fixings give a firm fixing for heavier use, but they are more expensive."
    ],
    "commonMistakes": [
      "Using a normal wall plug in a hollow plasterboard wall.",
      "Drilling the wrong size hole for the plug.",
      "Using self-drilling plasterboard fixings with too much force and stripping the board."
    ],
    "miniCheck": [
      {
        "question": "Why are wall plugs used in masonry?",
        "answer": "Because screws alone do not grip well enough in porous or brittle masonry."
      },
      {
        "question": "Which plug colour is commonly used with a 6.5 to 7 mm hole?",
        "answer": "Brown."
      },
      {
        "question": "Why is a cavity fixing used in plasterboard?",
        "answer": "Because it gives better holding power in hollow walls."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-hinges-and-their-uses",
    "title": "Common Hinges and Their Uses",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 5,
    "keywords": ["spring hinge", "tee hinge", "hook and band hinge", "concealed hinge", "soss hinge", "self-closing door"],
    "examFocus": [
      "Identify common hinge types",
      "Understand where different hinges are used",
      "Know the basic features of specialist hinges"
    ],
    "keyPoints": [
      "Spring hinges are used to make doors close by themselves.",
      "Single-action spring hinges open one way and self-close.",
      "Double-action spring hinges open both ways and can turn through 360 degrees.",
      "Double-action spring hinges have three leaves and adjustable tension.",
      "When fitting double-action spring hinges, a timber strip matching the door thickness is fixed to the frame edge to allow knuckle clearance.",
      "Double-action spring hinges are often used in public buildings and between kitchens and dining areas.",
      "Tee hinges are usually made from thin steel and are often black japanned or galvanised.",
      "Tee hinges are mainly used on matchboard doors and gates.",
      "Hook and band hinges are heavy-duty hinges used on garage doors, industrial doors and farm gates.",
      "Hook and band hinges are also used on framed, ledged and braced doors.",
      "Hook and band hinges may be straight or cranked and can include adjustment by threaded bolt.",
      "Concealed cupboard hinges are commonly used on kitchen unit doors.",
      "These hinges are useful on chipboard and MDF doors because screws do not hold well in the edges.",
      "A circular blind recess is bored into the inside face of the door to take the hinge.",
      "A common concealed hinge size is 35 mm, although 26 mm versions are also available.",
      "Some concealed hinges are basic, while others are fully adjustable and soft-close.",
      "Invisible hinges such as Soss hinges are hidden when the door is closed.",
      "Soss hinges can be used on flush doors and are suitable for internal, external, heavy-duty and fire doors."
    ],
    "commonMistakes": [
      "Using the wrong hinge for the door type or location.",
      "Forgetting to allow clearance for double-action spring hinge knuckles.",
      "Using edge fixings where board material does not hold screws well."
    ],
    "miniCheck": [
      {
        "question": "What is the main purpose of a spring hinge?",
        "answer": "To make a door self-close."
      },
      {
        "question": "Where are tee hinges mainly used?",
        "answer": "On matchboard doors and gates."
      },
      {
        "question": "Why are concealed hinges used on kitchen unit doors?",
        "answer": "Because chipboard and MDF do not hold screws well at the edges."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-selecting-hinges-and-lock-basics",
    "title": "Choosing Hinges and Basic Lock Information",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 6,
    "keywords": ["hinge selection", "door hinge positions", "fire door hinge", "mortice lock", "mortice latch", "rim lock"],
    "examFocus": [
      "Know how hinge size and quantity relate to door type",
      "Understand standard hinge positions",
      "Recognise the main categories of locks and latches"
    ],
    "keyPoints": [
      "Choosing the right hinge type and number helps a door work properly.",
      "If a door is not hung correctly, it can sag or drop over time.",
      "A dropped door may stop the lock or latch lining up properly.",
      "Lightweight internal doors often use one pair of 75 mm hinges.",
      "Some bathroom and en-suite doors may need three 75 mm hinges.",
      "35 mm thick timber doors are usually fitted with three 75 mm hinges.",
      "44 mm thick doors, both internal and external, are usually fitted with three 100 mm hinges.",
      "Fire doors are normally fitted with three fire-rated 100 mm hinges.",
      "Some fire doors may need different hinge positions or even four hinges, depending on size and certification.",
      "Standard hinge positions are 150 mm down from the top and 225 mm up from the bottom of the door.",
      "The centre hinge is normally set equally between the top and bottom hinges.",
      "On heavier doors, the middle hinge is often moved to 200 mm below the top hinge.",
      "Locks and latches are usually made from steel and come in finishes to match door furniture.",
      "Most locks and latches are morticed into the closing edge of the door.",
      "Rim locks are fitted to the face of the door instead of being recessed.",
      "The three main lock and latch groups are mortice latch or lock, mortice latches, and rim locks and latches."
    ],
    "commonMistakes": [
      "Using too few hinges for the door weight or thickness.",
      "Setting hinges in the wrong positions.",
      "Assuming all locks are fitted into the door edge."
    ],
    "miniCheck": [
      {
        "question": "How many 100 mm hinges are usually fitted to a 44 mm door?",
        "answer": "Three hinges."
      },
      {
        "question": "Where is the top hinge usually positioned?",
        "answer": "150 mm down from the top of the door."
      },
      {
        "question": "What are the three main categories of locks and latches?",
        "answer": "Mortice lock or latch, mortice latches, and rim locks and latches."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-door-handles-and-knobs",
    "title": "Door Handles and Knobs",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 7,
    "keywords": ["door furniture", "lever handle", "spindle", "mortice latch", "mortice lock", "door knob", "backset"],
    "examFocus": [
      "Understand the purpose of lever handle furniture",
      "Know how door handles are fitted",
      "Recognise when knobs are not suitable"
    ],
    "keyPoints": [
      "Door handles operate the latch so the door can open.",
      "A handle fits onto the spindle of the mortice latch or lock.",
      "The handle is then screwed to the face of the door.",
      "Lever handle furniture comes in many styles and finishes.",
      "Knobs were traditionally used with rim latches and rim locks.",
      "Knobs are now also used with some mortice latches and locks.",
      "Knobs should not be fitted to mortice latch or lock cases with a small backset.",
      "If the backset is too small, the knob sits too close to the door edge.",
      "This can cause your hand to catch the frame or lining when using the door."
    ],
    "commonMistakes": [
      "Fitting a knob too close to the edge of the door.",
      "Using knobs with a mortice latch or lock that has a small backset.",
      "Choosing door furniture without checking how it will operate the latch."
    ],
    "miniCheck": [
      {
        "question": "What does a door handle do?",
        "answer": "It operates the latch so the door can open."
      },
      {
        "question": "What part does the handle fit onto?",
        "answer": "The spindle of the mortice latch or lock."
      },
      {
        "question": "Why should knobs not be used with a small backset?",
        "answer": "Because the knob sits too near the door edge and your hand may catch the frame."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-bolts-and-emergency-door-furniture",
    "title": "Bolts and Emergency Door Furniture",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 8,
    "keywords": ["espagnolette bolt", "panic bolt", "panic latch", "barrel bolt", "tower bolt", "flush bolt", "multi-point locking"],
    "examFocus": [
      "Identify common bolt types and their uses",
      "Understand which fittings are used for emergency exits",
      "Know how flush bolts secure paired doors"
    ],
    "keyPoints": [
      "Espagnolette bolts are fitted into the lock stile of a door.",
      "They lock the door at several points along the stile for better security.",
      "They were first common on PVCu entrance doors but are also used on timber doors.",
      "Panic bolts and panic latches are fitted on the inside of emergency exit doors.",
      "They keep the door secured but allow fast escape in an emergency.",
      "Pressing the panic bar releases the top and bottom bolts from the frame keeps.",
      "Barrel bolts are usually used on doors and gates.",
      "Tower bolts are larger versions used on bigger doors and gates, such as garages and industrial units.",
      "Some bolts are called monkey tail bolts because of their long handle.",
      "Cranked or necked bolts are available for outward-opening doors and gates.",
      "Flush bolts are fitted into the edge of the door stile.",
      "Flush bolts are mainly used to secure one leaf of a pair of doors.",
      "A flush bolt is usually fitted at both the top and bottom of the door.",
      "Flush bolts are hidden when the door is closed and are only seen when it is open."
    ],
    "commonMistakes": [
      "Using the wrong bolt type for the size or purpose of the door.",
      "Not recognising that panic hardware is for emergency escape.",
      "Forgetting that flush bolts are used to secure one door in a pair."
    ],
    "miniCheck": [
      {
        "question": "What is the main benefit of an espagnolette bolt?",
        "answer": "It provides multi-point locking for better security."
      },
      {
        "question": "How is a panic bolt released in an emergency?",
        "answer": "By pushing the panic bar."
      },
      {
        "question": "Where are flush bolts usually fitted?",
        "answer": "At the top and bottom edge of one door in a pair."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-installation-guides-overview",
    "title": "Ironmongery Fitting Guides",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 9,
    "keywords": ["installation guide", "butt hinge", "mortice lock", "night latch", "letter plate", "escutcheon", "rack bolt"],
    "examFocus": [
      "Recognise common ironmongery items that need fitting guides",
      "Know which fittings are included in the general installation section",
      "Understand that correct fitting methods are important"
    ],
    "keyPoints": [
      "General fitting guides are used for common ironmongery items.",
      "The items listed include butt hinges.",
      "The guides also cover mortice latches and locks.",
      "Cylinder night latches are included in the fitting section.",
      "Letter plates are also covered.",
      "Escutcheons are included in the guide.",
      "Rack bolts are another item covered.",
      "Using the correct fitting method helps the ironmongery work properly."
    ],
    "commonMistakes": [
      "Treating all ironmongery as if it is fitted the same way.",
      "Ignoring the correct fitting guide for the item being installed.",
      "Missing out key steps when setting out fittings."
    ],
    "miniCheck": [
      {
        "question": "Name one item covered by the fitting guides.",
        "answer": "Butt hinge."
      },
      {
        "question": "Are letter plates included in the fitting guide section?",
        "answer": "Yes."
      },
      {
        "question": "Why is the correct fitting method important?",
        "answer": "Because it helps the ironmongery work properly."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-fitting-butt-hinges-to-standard-doors",
    "title": "Fitting Butt Hinges to Standard Doors",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 10,
    "keywords": ["butt hinge", "marking gauge", "hinge recess", "chisel", "door clearance", "marking knife"],
    "examFocus": [
      "Understand the basic process for marking and cutting hinge recesses",
      "Know standard hinge positions on a door",
      "Recognise safe chisel use during hinge fitting"
    ],
    "keyPoints": [
      "Secure the door firmly in a suitable stand with the hinge stile facing up.",
      "Mark the hinge position at 150 mm down from the top or 225 mm up from the bottom.",
      "Check that the hinge is being set out on the correct edge and face of the door.",
      "Use a marking knife to score accurately along both sides of the hinge.",
      "Set a marking gauge to the width of the hinge leaf and mark the recess width between the score lines.",
      "Set a second marking gauge to the thickness of one hinge leaf and mark the recess depth.",
      "If the hinge has a large knuckle, the recess may need to be slightly deeper to keep the correct 2 to 3 mm door clearance.",
      "Use a bevel edge chisel and mallet to cut down at each end of the recess.",
      "Keep the flat face of the chisel to the outside of the recess and hold the chisel vertical for a square cut.",
      "With the chisel at about 45 degrees, cut along the recess to lift the grain and make waste easier to remove.",
      "Pare the recess flat and clean to the gauge line depth.",
      "A slight slicing action can help produce a neater recess bottom.",
      "Keep both hands behind the cutting edge of the chisel during the work."
    ],
    "commonMistakes": [
      "Marking the hinge on the wrong edge of the door.",
      "Cutting the recess to the wrong depth.",
      "Forgetting to allow extra depth for wide hinge knuckles.",
      "Holding a hand behind the cutting area while using a chisel."
    ],
    "miniCheck": [
      {
        "question": "Where is a standard top hinge position marked?",
        "answer": "150 mm down from the top of the door."
      },
      {
        "question": "What tool is used to mark the depth of the hinge recess?",
        "answer": "A marking gauge."
      },
      {
        "question": "What is an important safety rule when using a chisel?",
        "answer": "Keep both hands behind the cutting edge."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-installing-a-cylinder-night-latch",
    "title": "Installing a Cylinder Night Latch",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 11,
    "keywords": ["cylinder night latch", "backset", "connector bar", "32 mm hole", "inward opening door", "door security"],
    "examFocus": [
      "Understand what a cylinder night latch is used for",
      "Know the main fitting steps for a cylinder night latch",
      "Recognise where this type of latch is commonly fitted"
    ],
    "keyPoints": [
      "A cylinder night latch is used where entry needs to be restricted but exit must stay easy.",
      "A key is needed to enter from outside when the door is shut.",
      "The door can be opened easily from the inside to leave.",
      "Cylinder night latches are usually fitted to inward-opening doors.",
      "They are common on domestic front doors and room doors opening in from a corridor.",
      "Many night latches come with a paper template and fitting instructions.",
      "The latch position is usually marked 1200 to 1500 mm up from the bottom of the door.",
      "The backset is the centre of the cylinder hole from the door edge.",
      "A typical backset is 40 mm or 60 mm.",
      "A 32 mm hole is drilled through the door, working from both sides.",
      "The cylinder is fitted from the outside of the door.",
      "The connector bar is cut 8 to 10 mm longer than the marked length.",
      "When fixing the cylinder, the key should sit vertically in the lock.",
      "The night latch body is then fixed onto the back plate."
    ],
    "commonMistakes": [
      "Fitting a night latch to the wrong type of door opening.",
      "Marking the wrong backset for the latch.",
      "Cutting the connector bar to the wrong length.",
      "Fixing the cylinder without checking the key sits vertical."
    ],
    "miniCheck": [
      {
        "question": "What is the main purpose of a cylinder night latch?",
        "answer": "To limit entry while still allowing easy exit from inside."
      },
      {
        "question": "What does backset mean on a night latch?",
        "answer": "The distance from the door edge to the centre of the cylinder hole."
      },
      {
        "question": "How large is the hole commonly drilled for the cylinder?",
        "answer": "32 mm."
      }
    ]
  },
  {
    "id": "types-of-fixings-and-ironmongery-installing-a-rack-bolt",
    "title": "Installing a Rack Bolt",
    "topic": "Types of fixings and ironmongery",
    "topicOrder": 12,
    "keywords": ["rack bolt", "barrel bolt", "faceplate", "escutcheon", "keep", "door clearance"],
    "examFocus": [
      "Understand where a rack bolt is used",
      "Know the main fitting steps for a rack bolt",
      "Recognise checks needed before final fixing"
    ],
    "keyPoints": [
      "Rack bolts are often used instead of barrel bolts when a surface bolt would not look suitable.",
      "Mark the rack bolt position on both faces of the door and on the door edge.",
      "Choose a position that leaves enough depth for the faceplate screws.",
      "The rack bolt must not weaken the door joints.",
      "Drill the key hole from both sides of the door with enough clearance.",
      "Drill the bolt hole into the edge of the door at the centre of the door thickness.",
      "Insert the rack bolt and mark around the faceplate.",
      "Use a mortice gauge to mark the sides of the recess.",
      "Cut the faceplate recess neatly with a chisel.",
      "Fit the rack bolt and screw it in place.",
      "Fit the key escutcheon after aligning it with the rack bolt.",
      "With the door shut, turn the key to mark the position for the keep.",
      "The keep is then recessed and fixed so the bolt locates correctly.",
      "Correct door clearance should be checked before fixing the rack bolt."
    ],
    "commonMistakes": [
      "Positioning the rack bolt where it weakens the door joint.",
      "Drilling the edge hole off centre.",
      "Fixing the keep before checking the bolt position with the door closed.",
      "Ignoring door clearance before installation."
    ],
    "miniCheck": [
      {
        "question": "Why might a rack bolt be used instead of a barrel bolt?",
        "answer": "Because it is less visible and neater on the door."
      },
      {
        "question": "Where should the bolt hole be drilled on the door edge?",
        "answer": "In the centre of the door thickness."
      },
      {
        "question": "What should be checked before fixing the rack bolt?",
        "answer": "That the door has the correct clearance."
      }
    ]
  },
  {
    "id": "hsw-hasawa-basics",
    "title": "Health and Safety at Work Act Basics",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "HASAWA",
      "HSWA",
      "health and safety law",
      "employer duties",
      "employee safety"
    ],
    "examFocus": [
      "Know why the Health and Safety at Work Act was introduced",
      "Understand the main purpose of HASAWA",
      "Recognise the key duties employers must meet"
    ],
    "keyPoints": [
      "Construction work has many hazards, so strong health and safety rules are needed.",
      "The Health and Safety at Work Act was introduced in 1974.",
      "This law protects workers and anyone affected by work activities.",
      "It was introduced because working conditions were poor and workplace deaths were too high.",
      "Employers must protect the health, safety and welfare of employees as far as reasonably practicable.",
      "Employers must provide safe equipment and safe working methods.",
      "Employers must make sure materials and substances are used, stored, handled and moved safely.",
      "Employers must give workers the right information, instruction, training and supervision.",
      "Employers must provide safe access into and out of the workplace.",
      "Employers must maintain a safe working environment with suitable welfare facilities."
    ],
    "commonMistakes": [
      "Thinking health and safety law only applies to employees.",
      "Assuming employers do not need to provide training or supervision.",
      "Ignoring the need for safe access, exits and welfare facilities."
    ],
    "miniCheck": [
      {
        "question": "When was the Health and Safety at Work Act introduced?",
        "answer": "1974."
      },
      {
        "question": "Who does this law protect?",
        "answer": "Workers and anyone affected by work activities."
      },
      {
        "question": "What must employers provide to help workers stay safe?",
        "answer": "Safe equipment, safe systems of work, training, supervision and a safe workplace."
      }
    ]
  },
  {
    "id": "hsw-cdm-and-asbestos-awareness",
    "title": "CDM Rules and Asbestos Awareness",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 2,
    "keywords": [
      "CDM 2015",
      "site induction",
      "worker duties",
      "asbestos",
      "risk assessment"
    ],
    "examFocus": [
      "Understand worker duties under CDM 2015",
      "Know why site rules and inductions are important",
      "Recognise what to do if asbestos is suspected"
    ],
    "keyPoints": [
      "CDM 2015 covers health, safety and welfare on all construction projects.",
      "Work must be planned so risks are removed or controlled from start to finish.",
      "The right people should do the right jobs at the right time.",
      "Construction work must involve co-operation and co-ordination.",
      "Workers must be given clear information about risks and control measures.",
      "Only carry out work you are trained and competent to do, unless supervised during training.",
      "Always follow site procedures and site rules.",
      "Learn the site hazards and controls during the site induction.",
      "Report any risk you find to your supervisor immediately.",
      "All asbestos work must be risk-assessed by a competent person.",
      "If you suspect asbestos, stop work and report it straight away."
    ],
    "commonMistakes": [
      "Starting work without understanding the site induction.",
      "Doing tasks without the right training or supervision.",
      "Continuing to work after finding suspected asbestos."
    ],
    "miniCheck": [
      {
        "question": "What should you do before carrying out a task on site?",
        "answer": "Make sure you have the right skills, knowledge, training and experience, or proper supervision."
      },
      {
        "question": "How do workers usually learn about site hazards and controls?",
        "answer": "At the site induction."
      },
      {
        "question": "What should you do if you suspect asbestos is present?",
        "answer": "Stop work and report it to your supervisor immediately."
      }
    ]
  },
  {
    "id": "hsw-employer-and-employee-responsibilities",
    "title": "Employer and Employee Safety Responsibilities",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 3,
    "keywords": [
      "employer liability insurance",
      "employee duties",
      "near miss",
      "control measures",
      "health and safety responsibilities"
    ],
    "examFocus": [
      "Understand employer duties to protect workers",
      "Know the main responsibilities of employees under health and safety law",
      "Recognise the importance of reporting hazards, accidents and near misses"
    ],
    "keyPoints": [
      "Employers must protect workers from injury and ill health at work.",
      "A serious accident can affect the injured worker and their family.",
      "If an employer is negligent, an injured worker may claim compensation.",
      "Businesses with employees must have employer’s liability insurance.",
      "The minimum insurance cover required is £5 million.",
      "Employers can be fined if they do not show a valid insurance certificate or do not have suitable insurance.",
      "Employers can provide health and safety pocket cards so workers can carry key safety information with them.",
      "Employees must take reasonable care of their own health and safety and that of others.",
      "Employees must work safely, follow company rules and report hazards, accidents and near misses.",
      "Employees must co-operate with safety measures such as wearing PPE and using dust extraction.",
      "Employees must not misuse or interfere with safety equipment, guards or scaffolding components.",
      "A near miss is an incident that could have caused harm but did not, and it should still be reported."
    ],
    "commonMistakes": [
      "Not reporting a near miss because no one was hurt.",
      "Removing PPE or ignoring safety controls.",
      "Tampering with guards, scaffolds or other safety equipment."
    ],
    "miniCheck": [
      {
        "question": "What is the minimum employer’s liability insurance cover required?",
        "answer": "£5 million."
      },
      {
        "question": "What should you do if you see a hazard, accident or near miss?",
        "answer": "Report it to your supervisor."
      },
      {
        "question": "Can you remove PPE or safety guards if you do not want to use them?",
        "answer": "No."
      }
    ]
  },
  {
    "id": "hsw-hse-role-and-safety-information",
    "title": "HSE Powers and Safety Information",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 4,
    "keywords": [
      "HSE",
      "prohibition notice",
      "improvement notice",
      "workplace inspection",
      "manufacturer instructions"
    ],
    "examFocus": [
      "Understand the role of the Health and Safety Executive",
      "Know what HSE inspectors can do during a workplace visit",
      "Recognise reliable sources of health and safety information"
    ],
    "keyPoints": [
      "The Health and Safety Executive is the government body that enforces workplace health and safety law.",
      "HSE inspectors can enter a workplace at a reasonable time without warning.",
      "They may inspect the site or investigate after a serious accident or incident.",
      "If work equipment or a process is dangerous, the HSE can stop the work immediately with a prohibition notice.",
      "If unsafe equipment cannot be made safe, the HSE can seize and destroy it.",
      "If the HSE visits your workplace, continue working unless your employer or the inspector tells you otherwise.",
      "An HSE visit does not always mean the law has been broken because some visits are routine.",
      "If the HSE finds problems, they may issue an improvement notice or take legal action.",
      "The HSE can charge employers for time spent investigating breaches and enforcing the law.",
      "Health and safety information can come from training, the HSE and manufacturer instructions.",
      "Manufacturers must provide information on how to use their products safely.",
      "If you use an unfamiliar power tool, check the manufacturer’s instructions before use."
    ],
    "commonMistakes": [
      "Assuming every HSE visit means the employer has broken the law.",
      "Using unfamiliar equipment without reading the instructions.",
      "Ignoring a dangerous situation that should stop work."
    ],
    "miniCheck": [
      {
        "question": "What government body enforces health and safety law at work?",
        "answer": "The Health and Safety Executive."
      },
      {
        "question": "What notice can stop dangerous work immediately?",
        "answer": "A prohibition notice."
      },
      {
        "question": "Where should you look for safe operating guidance on a new power tool?",
        "answer": "The manufacturer’s manual or instructions."
      }
    ]
  },
  {
    "id": "hsw-site-vehicle-and-groundwork-hazards",
    "title": "Site Vehicle and Groundwork Hazards",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 5,
    "keywords": [
      "construction vehicles",
      "pedestrian walkways",
      "excavation hazards",
      "buried services",
      "confined spaces"
    ],
    "examFocus": [
      "Recognise hazards from moving vehicles on site",
      "Understand the risks linked to digging and drilling",
      "Know why trenches and similar spaces are dangerous"
    ],
    "keyPoints": [
      "Construction sites often have vehicles delivering, moving or excavating materials.",
      "Safe pedestrian routes should separate people from moving vehicles.",
      "Digging and drilling are high-risk tasks and must be controlled properly.",
      "Only competent and authorised workers should carry out this type of work.",
      "Groundwork can strike buried gas pipes, water pipes or electrical cables if precautions are not taken.",
      "Some areas may contain unexploded bombs or old military ammunition.",
      "Deep trenches, holes and wells can collapse if they are not supported properly.",
      "These spaces can also fill with water.",
      "Deep ground openings are classed as confined spaces.",
      "Work in confined spaces should be avoided where possible."
    ],
    "commonMistakes": [
      "Walking too close to moving site vehicles.",
      "Drilling or digging without checking for buried services.",
      "Entering trenches or confined spaces without proper controls."
    ],
    "miniCheck": [
      {
        "question": "Why are pedestrian walkways used on construction sites?",
        "answer": "To keep people away from moving vehicles and reduce accidents."
      },
      {
        "question": "Who should carry out digging or drilling work on site?",
        "answer": "Competent and authorised people."
      },
      {
        "question": "What are two major risks in deep trenches?",
        "answer": "Collapse and flooding."
      }
    ]
  },
  {
    "id": "hsw-discovering-an-accident",
    "title": "What to Do When You Find an Accident",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 6,
    "keywords": [
      "first aider",
      "accident reporting",
      "emergency response",
      "unsafe conditions",
      "casualty assessment"
    ],
    "examFocus": [
      "Understand the first actions to take when an accident is discovered",
      "Know the duty to report accidents and unsafe conditions",
      "Recognise the importance of staying calm and assessing the situation"
    ],
    "keyPoints": [
      "Trained first aiders are available at work to treat casualties in an emergency.",
      "The first aider may not be the first person to find the accident.",
      "Everyone in the workplace should know how to respond when an accident happens.",
      "Employees have a legal duty to report accidents and unsafe conditions to their employer.",
      "If you find an accident, stay calm.",
      "Make a quick assessment of the situation before acting.",
      "Think about how serious the accident is.",
      "Check whether there are any witnesses who can help."
    ],
    "commonMistakes": [
      "Panicking instead of assessing the situation.",
      "Failing to report an accident or unsafe condition.",
      "Assuming only the first aider needs to know what to do."
    ],
    "miniCheck": [
      {
        "question": "Who can treat a casualty in an emergency at work?",
        "answer": "A trained first aider."
      },
      {
        "question": "What should you do first if you discover an accident?",
        "answer": "Stay calm and quickly assess the situation."
      },
      {
        "question": "Do employees have to report accidents and unsafe conditions?",
        "answer": "Yes."
      }
    ]
  },
  {
    "id": "hsw-hazardous-substances-asbestos-and-lead",
    "title": "Hazardous Substances: Asbestos and Lead",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 7,
    "keywords": [
      "asbestos",
      "lead",
      "hazardous materials",
      "Control of Asbestos Regulations",
      "CLAW regulations"
    ],
    "examFocus": [
      "Recognise the health risks linked to asbestos and lead",
      "Know what action to take if asbestos is suspected",
      "Understand how employers must protect workers from harmful substances"
    ],
    "keyPoints": [
      "Asbestos is a natural mineral once used in building materials because it resisted fire, was strong and did not rot.",
      "Breathing in asbestos fibres can cause lung disease and cancer.",
      "Asbestos was banned in the UK in 2000, but it may still be present in older buildings.",
      "If you suspect asbestos, stop work and report it to your supervisor immediately.",
      "Asbestos removal must only be carried out by trained and competent workers under controlled conditions.",
      "If your job could involve asbestos, your employer must provide training on how to identify it and what to do if it is found.",
      "Lead has been used for many years in roofing, plumbing and paint.",
      "Lead exposure can cause kidney damage, nerve damage and brain damage.",
      "The Control of Lead at Work Regulations require employers to prevent or control exposure to lead.",
      "Even if you do not work directly with these materials, you may still be exposed if they are present in your work area."
    ],
    "commonMistakes": [
      "Continuing work after finding suspected asbestos.",
      "Assuming asbestos is not present because a building looks modernised.",
      "Ignoring the health risks from lead because it is still legal to use."
    ],
    "miniCheck": [
      {
        "question": "What should you do if you think a material contains asbestos?",
        "answer": "Stop work and report it to your supervisor immediately."
      },
      {
        "question": "When was asbestos banned in the UK?",
        "answer": "2000."
      },
      {
        "question": "Name one serious health effect of lead exposure.",
        "answer": "Kidney damage, nerve damage or brain damage."
      }
    ]
  },
  {
    "id": "hsw-how-substances-cause-harm-and-basic-precautions",
    "title": "How Harmful Substances Spread and How to Stay Safe",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 8,
    "keywords": [
      "inhalation",
      "absorption",
      "ingestion",
      "cross-contamination",
      "housekeeping"
    ],
    "examFocus": [
      "Understand the main ways harmful substances can enter the body",
      "Know simple precautions that reduce health and safety risks",
      "Recognise the importance of hygiene and housekeeping on site"
    ],
    "keyPoints": [
      "Hazardous substances can harm the body in different ways.",
      "Inhalation means breathing in a harmful substance.",
      "Absorption means a substance passes through the skin.",
      "Exposure can also come from hazards such as loud noise or the Sun’s rays.",
      "Ingestion means swallowing a harmful substance.",
      "Cross-contamination happens when a substance spreads from one surface or object to another.",
      "Injection happens when a substance enters through broken skin such as cuts or grazes.",
      "Knowing how harm happens helps you choose the right precautions.",
      "Good housekeeping keeps the workplace clean, tidy and organised.",
      "Waste should not be allowed to build up and emergency escape routes must stay clear.",
      "Wash your hands before eating, drinking or smoking, and after using the toilet.",
      "This is especially important near animals, rivers, streams or waterlogged ground because of leptospirosis, also called Weil’s disease.",
      "Wearing gloves and washing hands helps reduce the risk of infection."
    ],
    "commonMistakes": [
      "Leaving waste materials where they create trip hazards.",
      "Blocking emergency escape routes.",
      "Eating or drinking without washing hands after working in contaminated areas."
    ],
    "miniCheck": [
      {
        "question": "What does inhalation mean?",
        "answer": "Breathing in a harmful substance."
      },
      {
        "question": "What is good housekeeping on site?",
        "answer": "Keeping the workplace clean, tidy and organised."
      },
      {
        "question": "Why should you wash your hands before eating or drinking on site?",
        "answer": "To stop germs, bacteria and harmful substances spreading into the body."
      }
    ]
  },
  {
    "id": "hsw-safety-sign-categories",
    "title": "Safety Sign Categories and What They Mean",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 9,
    "keywords": [
      "safety signs",
      "prohibition signs",
      "mandatory signs",
      "warning signs",
      "safe condition signs"
    ],
    "examFocus": [
      "Recognise the main categories of safety signs used in the UK",
      "Understand what action each type of sign requires",
      "Know why safety signs must be clear and not overused"
    ],
    "keyPoints": [
      "The Health and Safety (Safety Signs and Signals) Regulations 1996 set standard safety sign categories used in the UK.",
      "Prohibition signs tell you something must not be done.",
      "Mandatory signs tell you an action must be followed.",
      "Warning signs alert you to a hazard or danger.",
      "Safe condition signs show escape routes, first-aid points or assembly areas.",
      "Firefighting signs show the location of fire alarms, extinguishers and hoses.",
      "Safety signs are identified by their shape, colour and pictogram.",
      "Too many signs in one area can confuse workers and cause important signs to be ignored.",
      "Supplementary signs can be added to give extra help, such as arrows showing the direction of an escape route."
    ],
    "commonMistakes": [
      "Ignoring a sign because there are too many signs in one place.",
      "Not following the action shown on a mandatory sign.",
      "Failing to note escape routes, fire points or first-aid locations."
    ],
    "miniCheck": [
      {
        "question": "What does a prohibition sign mean?",
        "answer": "It tells you something must not be done."
      },
      {
        "question": "What type of sign shows escape routes or first-aid points?",
        "answer": "A safe condition sign."
      },
      {
        "question": "Why should employers avoid displaying too many safety signs?",
        "answer": "Because they can become confusing and be ignored."
      }
    ]
  },
  {
    "id": "hsw-coshh-symbols-and-chemical-safety",
    "title": "COSHH Symbols and Chemical Safety",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 10,
    "keywords": [
      "COSHH",
      "chemical symbols",
      "hazardous products",
      "chemical storage",
      "spillages"
    ],
    "examFocus": [
      "Recognise that COSHH symbols warn about hazardous substances",
      "Understand why chemical products must be stored and used safely",
      "Know that outdated harmful or irritant signs should not be used"
    ],
    "keyPoints": [
      "Some safety symbols are used under COSHH for chemical labelling and packaging.",
      "These symbols may appear on cleaning products and other hazardous substances.",
      "Examples include toxic, flammable, explosive, corrosive, oxidising and dangerous to the environment.",
      "Gas under pressure and long-term health hazard symbols also warn of serious risks.",
      "Hazardous products should be stored safely, especially away from heat and children.",
      "Chemicals must be used carefully and disposed of responsibly.",
      "Spillages should be dealt with safely to prevent harm to people and the environment.",
      "The old harmful or irritant warning sign is no longer used.",
      "Employers should now choose the most suitable current safety sign instead."
    ],
    "commonMistakes": [
      "Storing hazardous products near heat sources.",
      "Using chemical products without checking the warning symbols.",
      "Using outdated harmful or irritant signs instead of current approved signs."
    ],
    "miniCheck": [
      {
        "question": "What do COSHH symbols warn you about?",
        "answer": "Hazardous substances and chemical risks."
      },
      {
        "question": "Name one important rule for storing hazardous products.",
        "answer": "Keep them away from heat and young children."
      },
      {
        "question": "Should the old harmful or irritant warning sign still be used?",
        "answer": "No."
      }
    ]
  },
  {
    "id": "hsw-lifting-equipment-and-lules",
    "title": "Lifting Equipment Safety and Regulations",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 11,
    "keywords": [
      "LOLER",
      "PUWER",
      "lifting equipment",
      "competent person",
      "planned lifting operations"
    ],
    "examFocus": [
      "Understand the basic purpose of LOLER and PUWER",
      "Know how lifting equipment must be checked and managed",
      "Recognise that lifting operations must be planned and supervised"
    ],
    "keyPoints": [
      "Lifting equipment such as forklifts and loader cranes is covered by LOLER.",
      "People responsible for lifting equipment must make sure it is suitable for the job.",
      "All lifting equipment must be regularly examined by a competent person.",
      "Any defects must be recorded and reported to the person in charge.",
      "Lifting operations must be planned carefully and supervised properly.",
      "Only competent people should carry out lifting operations.",
      "Lifting aids and machinery are also classed as work equipment.",
      "Their use is also covered by PUWER.",
      "Mechanical lifting equipment helps move large or heavy loads more safely.",
      "You may not operate all lifting machines yourself, but you must understand the safety risks around them."
    ],
    "commonMistakes": [
      "Using lifting equipment that is not suitable for the task.",
      "Ignoring defects or failing to report them.",
      "Allowing lifting work to take place without planning or supervision."
    ],
    "miniCheck": [
      {
        "question": "What regulation covers lifting equipment such as forklifts and loader cranes?",
        "answer": "LOLER."
      },
      {
        "question": "Who must examine lifting equipment?",
        "answer": "A competent person."
      },
      {
        "question": "How should lifting operations be carried out?",
        "answer": "They must be planned, supervised and completed by competent people."
      }
    ]
  },
  {
    "id": "hsw-safe-manual-handling-and-lifting-aids",
    "title": "Safe Manual Handling and Lifting Aids",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 12,
    "keywords": [
      "manual handling",
      "kinetic lifting",
      "musculoskeletal disorders",
      "lifting aids",
      "safe lifting technique"
    ],
    "examFocus": [
      "Understand the risks linked to manual handling",
      "Know the steps for safe kinetic lifting",
      "Recognise when lifting aids should be used"
    ],
    "keyPoints": [
      "Using the body to move or carry loads is called kinetic lifting.",
      "Manual handling is a major cause of musculoskeletal injuries, especially back pain.",
      "Lifting aids should be considered whenever possible, not only when a load feels too heavy.",
      "Before lifting, plan your route and remove obstacles.",
      "Think about the load before lifting it.",
      "Check whether the load is safe, stable and evenly balanced.",
      "Crouch with your knees bent and get a good grip before lifting.",
      "Stand close to the load with your feet about shoulder-width apart.",
      "Lift smoothly, keep your back straight and hold the load close to your chest.",
      "Do not lift more than you can manage safely.",
      "When lowering the load, avoid sudden movement or twisting.",
      "Employers provide lifting aids to reduce manual handling injuries.",
      "You must be trained and competent before using lifting aids safely."
    ],
    "commonMistakes": [
      "Trying to lift manually when a lifting aid could be used.",
      "Lifting with a bent back or twisting while carrying a load.",
      "Not checking the route or the balance of the load before lifting."
    ],
    "miniCheck": [
      {
        "question": "What is kinetic lifting?",
        "answer": "Using the body to move, lift, lower, pull or carry objects."
      },
      {
        "question": "What injury is commonly linked to poor manual handling?",
        "answer": "Back pain and other musculoskeletal disorders."
      },
      {
        "question": "How should you hold a load during a safe lift?",
        "answer": "Keep it close to your chest and lift smoothly with a straight back."
      }
    ]
  },
  {
    "id": "hsw-mobile-tower-scaffold-safety",
    "title": "Mobile Tower Scaffold Safety",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 13,
    "keywords": [
      "mobile tower scaffold",
      "castors",
      "access hatch",
      "tower stability",
      "manufacturer instructions"
    ],
    "examFocus": [
      "Understand how a mobile tower scaffold should be used safely",
      "Recognise the main causes of tower instability",
      "Know the rules for access and movement of tower scaffolds"
    ],
    "keyPoints": [
      "Mobile tower scaffolds are supplied in kit form and must be assembled by a competent person.",
      "The tower must be erected and used following the manufacturer’s instructions.",
      "When in position, all four castors must be touching the floor.",
      "The castor brakes must be applied before use.",
      "The platform should be reached using the internal ladder system.",
      "Ladders must not be leaned against the outside of the tower because this can make it unstable.",
      "Workers climb through the tower using an access hatch in the platform.",
      "The access hatch should be closed as soon as it is safe to do so.",
      "A mobile tower scaffold must never be moved with people on the platform.",
      "A mobile tower scaffold must never be moved with materials on the platform."
    ],
    "commonMistakes": [
      "Using an external ladder against the tower.",
      "Leaving the access hatch open.",
      "Moving the tower while people or materials are still on it."
    ],
    "miniCheck": [
      {
        "question": "Who should erect a mobile tower scaffold?",
        "answer": "A competent person."
      },
      {
        "question": "How should the platform be accessed?",
        "answer": "By the internal ladder through the tower."
      },
      {
        "question": "Can a tower scaffold be moved with workers or materials on it?",
        "answer": "No."
      }
    ]
  },
  {
    "id": "hsw-tubular-scaffold-types-and-inspection",
    "title": "Tubular Scaffolds, Types and Inspection",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 14,
    "keywords": [
      "independent scaffold",
      "putlog scaffold",
      "scaffold inspection",
      "handover certificate",
      "guard rails"
    ],
    "examFocus": [
      "Recognise the two main types of tubular scaffolding",
      "Understand who is allowed to erect, alter or dismantle tubular scaffolds",
      "Know why inspections and handover certificates are important"
    ],
    "keyPoints": [
      "There are two main types of tubular scaffolding: independent and putlog.",
      "Independent scaffolding supports itself using standards, ledgers, transoms and braces.",
      "Scaffolds can have several working platforms called lifts.",
      "Putlog scaffolds are built into the brickwork as the wall is constructed.",
      "Putlogs are removed when the scaffold is dismantled and the holes are filled with mortar.",
      "Tubular scaffolding must only be erected, altered and dismantled by trained and competent scaffolders.",
      "After erection, the scaffolder inspects the scaffold and issues a handover certificate.",
      "The handover certificate confirms the scaffold is safe to use.",
      "Scaffolds are inspected again at regular intervals, often every week.",
      "Extra inspections may be needed after bad weather if stability could be affected.",
      "Scaffolds should include safety features such as guard rails and toe boards to help prevent falls and falling materials."
    ],
    "commonMistakes": [
      "Using a scaffold before it has been handed over as safe.",
      "Assuming regular inspections are not needed after erection.",
      "Ignoring the need for extra checks after adverse weather."
    ],
    "miniCheck": [
      {
        "question": "What are the two main forms of tubular scaffolding?",
        "answer": "Independent and putlog."
      },
      {
        "question": "Who can erect, alter or take down tubular scaffolding?",
        "answer": "Trained and competent scaffolders."
      },
      {
        "question": "What confirms a scaffold is safe to use after erection?",
        "answer": "A handover certificate."
      }
    ]
  },
  {
    "id": "hsw-power-tool-storage-and-security",
    "title": "Power Tool Storage and Site Security",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 15,
    "keywords": [
      "power tools",
      "tool storage",
      "site security",
      "secure storage",
      "work vehicles"
    ],
    "examFocus": [
      "Understand how power tools should be stored safely",
      "Recognise why power tools must not be left unattended",
      "Know good practice for keeping tools secure and protected"
    ],
    "keyPoints": [
      "Power tools are often stolen from sites and workshops.",
      "When not in use, power tools must be stored in a dry and secure place.",
      "Power tools should never be left unattended.",
      "A work vehicle may be suitable for daytime storage.",
      "A work vehicle is not recommended for overnight storage.",
      "Storage boxes can help protect tools from theft and damage.",
      "Stackable storage boxes help keep tools secure and organised during transport and storage."
    ],
    "commonMistakes": [
      "Leaving power tools unattended on site.",
      "Storing tools in insecure or damp locations.",
      "Keeping power tools in a vehicle overnight."
    ],
    "miniCheck": [
      {
        "question": "Where should power tools be kept when not in use?",
        "answer": "In a dry and secure location."
      },
      {
        "question": "Should power tools be left unattended?",
        "answer": "No."
      },
      {
        "question": "Is a work vehicle recommended for overnight power tool storage?",
        "answer": "No."
      }
    ]
  },
  {
    "id": "hsw-ppe-rules-and-types",
    "title": "PPE Rules and Common Types",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 16,
    "keywords": [
      "PPE",
      "Personal Protective Equipment at Work Regulations",
      "PUWER",
      "employer duties",
      "employee duties"
    ],
    "examFocus": [
      "Understand when PPE should be used",
      "Know employer and employee duties for PPE",
      "Recognise common types of PPE and the hazards they protect against"
    ],
    "keyPoints": [
      "PPE must be provided when a risk cannot be controlled in another way.",
      "PPE is a last line of protection.",
      "The Personal Protective Equipment at Work Regulations 1992 cover the provision, suitability, maintenance and use of PPE.",
      "Employers must check that PPE is suitable for controlling the risk.",
      "Employers must provide PPE free of charge and replace it when needed.",
      "Employers must give workers information, instruction and training on correct PPE use.",
      "Employers must make sure PPE is used properly and looked after.",
      "Employees must wear PPE as trained and instructed.",
      "Employees must not misuse PPE and must store it correctly when not in use.",
      "Employees must report lost or damaged PPE.",
      "PPE is also covered by PUWER, so it must be safe, maintained and checked before use.",
      "PPE must be fitted and used correctly or it may not protect you properly.",
      "Examples of PPE include high-visibility clothing, harnesses, ear defenders, ear plugs, safety goggles, visors, safety boots and knee pads."
    ],
    "commonMistakes": [
      "Thinking PPE should be the first control measure instead of the last.",
      "Wearing PPE incorrectly or without training.",
      "Failing to report damaged or missing PPE."
    ],
    "miniCheck": [
      {
        "question": "When should PPE be used?",
        "answer": "When a risk cannot be controlled in another way."
      },
      {
        "question": "Who must provide PPE free of charge?",
        "answer": "The employer."
      },
      {
        "question": "What should you do if your PPE is damaged or lost?",
        "answer": "Report it."
      }
    ]
  },
  {
    "id": "hsw-fire-extinguishers-and-safe-use",
    "title": "Fire Extinguishers and Safe Use",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 17,
    "keywords": [
      "fire extinguisher",
      "CO2 extinguisher",
      "dry powder extinguisher",
      "water extinguisher",
      "foam extinguisher"
    ],
    "examFocus": [
      "Recognise the main types of fire extinguishers",
      "Know which extinguisher matches each type of fire",
      "Understand the dangers of using the wrong extinguisher"
    ],
    "keyPoints": [
      "Fire extinguishers are for small fires or for clearing a safe escape route.",
      "Extinguishers must stay in their correct positions and remain easy to reach.",
      "Fire extinguishers must never be used to wedge doors open.",
      "If workers may need to use extinguishers, the employer must provide training.",
      "Different extinguishers are designed for different fire types.",
      "Using the wrong extinguisher can make a fire worse.",
      "Water extinguishers are used on wood, paper, textiles and similar solid materials.",
      "Foam extinguishers are used on solid materials and flammable liquids.",
      "CO2 extinguishers are used on flammable liquids, flammable gases and electrical fires.",
      "Dry powder extinguishers are used on solid materials, flammable liquids, flammable gases, flammable metals and electrical fires.",
      "Water and foam extinguishers must not be used on electrical fires because they conduct electricity.",
      "Water must never be used on a hot oil fire because it can cause a fireball."
    ],
    "commonMistakes": [
      "Using an extinguisher without training.",
      "Choosing the wrong extinguisher for the fire.",
      "Using water or foam on an electrical fire."
    ],
    "miniCheck": [
      {
        "question": "What are fire extinguishers mainly used for?",
        "answer": "Small fires or to clear a safe exit route."
      },
      {
        "question": "Which extinguisher can be used on electrical fires?",
        "answer": "CO2 or dry powder."
      },
      {
        "question": "Should water be used on a hot oil fire?",
        "answer": "No."
      }
    ]
  },
  {
    "id": "hsw-fire-extinguisher-location-and-emergency-awareness",
    "title": "Fire Extinguisher Location and Emergency Awareness",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 18,
    "keywords": [
      "fire safety",
      "extinguisher location",
      "emergency training",
      "safe exit",
      "fire response"
    ],
    "examFocus": [
      "Understand why extinguisher location matters",
      "Know basic rules for extinguisher access and storage",
      "Recognise the need for fire safety training"
    ],
    "keyPoints": [
      "Fire extinguishers are placed where they are most likely to be needed.",
      "They should always stay accessible in case of emergency.",
      "Blocked or moved extinguishers can delay emergency action.",
      "Extinguishers are part of fire safety arrangements in the workplace.",
      "They should only be used when it is safe to do so.",
      "Training helps workers use extinguishers correctly in an emergency.",
      "Knowing the fire risks in the workplace helps workers respond more safely.",
      "The wrong action during a fire can increase danger instead of reducing it."
    ],
    "commonMistakes": [
      "Blocking access to extinguishers.",
      "Moving extinguishers from their set positions.",
      "Using an extinguisher without knowing whether it is safe or suitable."
    ],
    "miniCheck": [
      {
        "question": "Why must fire extinguishers stay in their set locations?",
        "answer": "So they can be found and used quickly in an emergency."
      },
      {
        "question": "Should access to extinguishers always be kept clear?",
        "answer": "Yes."
      },
      {
        "question": "What should employers provide if workers may need to use extinguishers?",
        "answer": "Training."
      }
    ]
  },
  {
    "id": "hsw-control-of-hazardous-substances-and-manual-handling",
    "title": "Hazardous Substances and Manual Handling",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["COSHH", "hazardous substances", "manual handling", "MHOR", "risk assessment", "PPE"],
    "examFocus": [
      "Understand how hazardous substances are controlled at work",
      "Know the main steps for reducing manual handling injuries",
      "Recognise employer duties for training, control measures and monitoring"
    ],
    "keyPoints": [
      "COSHH requires employers to control substances that can damage health.",
      "Examples of hazardous substances include materials such as hardwood dust.",
      "Risks must be assessed before work starts.",
      "Measures must be put in place to prevent or reduce harm, including suitable PPE where needed.",
      "Workers must be given training, instructions and clear information.",
      "Health checks or monitoring may be needed when exposure could affect health.",
      "Emergency arrangements must be prepared for hazardous situations.",
      "MHOR aims to reduce injuries caused by lifting, carrying or moving items incorrectly.",
      "Manual handling should be avoided where possible, such as using mechanical equipment instead of lifting by hand.",
      "If lifting cannot be avoided, the task must be assessed.",
      "Risk can be reduced by making loads smaller or easier to handle."
    ],
    "commonMistakes": [
      "Lifting materials by hand when safer equipment could be used.",
      "Ignoring the health risks from dust or other harmful substances.",
      "Using PPE without proper training or instruction.",
      "Carrying loads that should be split into smaller parts."
    ],
    "miniCheck": [
      {
        "question": "What does COSHH require employers to do first?",
        "answer": "Assess the health risks from hazardous substances."
      },
      {
        "question": "What should happen before workers use harmful substances or PPE?",
        "answer": "They should receive training, instruction and information."
      },
      {
        "question": "What is the first choice under manual handling rules?",
        "answer": "Avoid manual handling if it is reasonably possible."
      }
    ]
  },
  {
    "id": "hsw-work-equipment-reporting-ppe-and-site-safety-regulations",
    "title": "Equipment, PPE and Key Safety Regulations",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["PUWER", "RIDDOR", "PPE", "WAHR", "LOLER", "noise", "vibration", "electrical safety"],
    "examFocus": [
      "Know the purpose of key construction health and safety regulations",
      "Understand safe use of equipment, PPE and access equipment",
      "Recognise reporting duties and risks from noise, vibration and lifting work"
    ],
    "keyPoints": [
      "PUWER says work equipment must be suitable, safe, maintained and inspected.",
      "Equipment must only be used by people who are trained and properly instructed.",
      "Safety features must be fitted where needed, such as emergency stop controls.",
      "RIDDOR requires certain serious injuries, work-related diseases and dangerous near misses to be reported.",
      "PPE should only be relied on when risks cannot be controlled well enough by other methods.",
      "PPE must be suitable for the job, used correctly, stored properly and kept in good condition.",
      "WAHR applies to all work at height and requires proper planning, risk assessment and suitable access equipment.",
      "Workers must take care of themselves and others, and cooperate with their employer.",
      "Noise at work must be assessed and controlled to protect hearing.",
      "Employers must provide information and training at 80 dB, hearing protection at 85 dB, and must not expose workers above 87 dB after protection is considered.",
      "Vibration exposure must be assessed and controlled to reduce the risk of hand-arm vibration syndrome.",
      "Electrical work should only be carried out by trained and competent people.",
      "LOLER requires lifting operations to be planned, supervised and carried out safely by competent people.",
      "Tinnitus is a permanent ringing in the ears that can be caused by long-term noise exposure."
    ],
    "commonMistakes": [
      "Using machinery without training or proper checks.",
      "Treating PPE as the first solution instead of controlling the risk in other ways.",
      "Working at height without planning or suitable access equipment.",
      "Ignoring noise or vibration exposure over time.",
      "Allowing lifting operations without supervision or competent workers."
    ],
    "miniCheck": [
      {
        "question": "Under PUWER, who should use work equipment?",
        "answer": "Only people who are trained, instructed and informed."
      },
      {
        "question": "What must be reported under RIDDOR?",
        "answer": "Specified serious accidents, occupational diseases and dangerous occurrences."
      },
      {
        "question": "What is tinnitus?",
        "answer": "A permanent ringing in the ears caused by hearing damage."
      }
    ]
  },
  {
    "id": "hsw-health-and-safety-organisations-and-support",
    "title": "Health and Safety Organisations and Industry Support",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["HSE", "CITB", "BSI", "RoSPA", "IOSH", "British Safety Council", "RSPH", "health and safety support"],
    "examFocus": [
      "Recognise key organisations linked to health and safety in construction",
      "Understand where workers and employers can get guidance and support",
      "Know the role of industry bodies in training, standards and safe working"
    ],
    "keyPoints": [
      "There are several organisations that provide health and safety advice, guidance, training and standards.",
      "The HSE is a main source of workplace health and safety information.",
      "The CITB supports construction with training, qualifications, careers and industry standards.",
      "The CSCS scheme was developed through CITB to help show that workers have the right health and safety knowledge for their role.",
      "The British Safety Council helps improve workplace safety and health awareness.",
      "BSI produces standards that support safe and consistent working practices.",
      "IOSH is linked to occupational safety and health knowledge and professional support.",
      "RoSPA promotes accident prevention and safer working environments.",
      "RSPH supports public health knowledge, which connects to health and wellbeing at work.",
      "Workers and employers should use trusted organisations for up-to-date safety information and guidance."
    ],
    "commonMistakes": [
      "Not using recognised health and safety organisations for guidance.",
      "Assuming site safety knowledge is the same on every project.",
      "Ignoring the value of approved training and recognised standards."
    ],
    "miniCheck": [
      {
        "question": "Which organisation is a main source of workplace health and safety information?",
        "answer": "The HSE."
      },
      {
        "question": "What does CITB support in construction?",
        "answer": "Training, qualifications, careers and standards."
      },
      {
        "question": "What is the purpose of the CSCS scheme?",
        "answer": "To show that workers have suitable health and safety knowledge for their role."
      }
    ]
  },
  {
    "id": "hsw-site-inductions-toolbox-talks-and-accident-reporting",
    "title": "Site Inductions, Toolbox Talks and Accident Reporting",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["site induction", "toolbox talk", "CSCS card", "accident reporting", "near miss", "site rules", "emergency procedures"],
    "examFocus": [
      "Understand why site inductions are essential before starting work",
      "Know what information is usually covered in inductions and toolbox talks",
      "Recognise the importance of reporting accidents and near misses"
    ],
    "keyPoints": [
      "Employers must give workers health and safety information and instructions.",
      "You should receive an induction before starting at a new workplace.",
      "Inductions are especially important when a site or workshop is unfamiliar.",
      "Construction sites change as work progresses, so risks can change from day to day.",
      "A site induction may cover welfare facilities, first aid, vehicle routes, site rules, PPE and emergency procedures.",
      "It can also include smoking areas, alcohol and drugs policy, environmental issues and site security.",
      "Members of the public must be protected from construction work, often by fencing and sign-in systems.",
      "Some sites require a valid CSCS card or similar card before entry.",
      "A CSCS card shows identity, safety awareness and relevant qualifications.",
      "Toolbox talks are short training sessions used to explain changes, new risks or safety updates.",
      "Toolbox talks may be given for topics such as new equipment or ladder safety after a near miss.",
      "All accidents and near misses must be reported to a supervisor and recorded."
    ],
    "commonMistakes": [
      "Starting work without paying attention to the induction.",
      "Assuming the same hazards apply on every site.",
      "Ignoring toolbox talks because they are brief.",
      "Failing to report a near miss or accident.",
      "Turning up without the required site card or PPE."
    ],
    "miniCheck": [
      {
        "question": "Why is a site induction important when you start somewhere new?",
        "answer": "Because the workplace is unfamiliar and you may not know the hazards."
      },
      {
        "question": "What is a toolbox talk?",
        "answer": "A short safety briefing used to explain updates, risks or changes at work."
      },
      {
        "question": "What must you do if there is an accident or near miss?",
        "answer": "Report it to your supervisor and make sure it is recorded."
      }
    ]
  },
  {
    "id": "hsw-emergency-action-and-first-aid-arrangements",
    "title": "Emergency Action and First Aid on Site",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["emergency procedures", "first aider", "first aid kit", "casualty", "site induction", "emergency services"],
    "examFocus": [
      "Understand what to check first after an accident",
      "Know when to call for help and who should give first aid",
      "Recognise the purpose of first aiders and first aid provision"
    ],
    "keyPoints": [
      "After an accident, first check what happened and whether the area is safe.",
      "Think about dangers to yourself and others before helping.",
      "Check for ongoing hazards, such as electricity still being live or more materials falling from height.",
      "Act quickly and call for help and a first aider straight away.",
      "Do not give first aid unless you are trained or told what to do by the emergency services.",
      "Employers should appoint someone to contact the emergency services with the accident details and site location.",
      "Everyone should know the company emergency procedure and their role in it.",
      "A first aider’s job is to preserve life, stop the casualty getting worse and support recovery until emergency services arrive.",
      "First aiders are not doctors and cannot hand out medicines from the first aid box.",
      "Employers must assess first aid needs based on the type of work, the number of workers and how spread out they are.",
      "Remote or mobile work may need extra first aid kits and more first aid cover.",
      "Site induction should tell you who the first aiders are, how to contact them and where the first aid kits are kept.",
      "A nominated person should check that first aid kits stay stocked and in the correct place."
    ],
    "commonMistakes": [
      "Rushing in without checking if the area is safe.",
      "Trying to give first aid without training.",
      "Not knowing who the first aider is or where the kit is kept.",
      "Forgetting that extra first aid cover may be needed in remote work areas."
    ],
    "miniCheck": [
      {
        "question": "What should you check before helping an injured person?",
        "answer": "That the area is safe for you and others."
      },
      {
        "question": "Who should give first aid?",
        "answer": "A trained first aider, or someone directed by the emergency services."
      },
      {
        "question": "What should your induction tell you about first aid?",
        "answer": "Who the first aiders are, how to contact them and where the first aid kits are."
      }
    ]
  },
  {
    "id": "hsw-accident-book-reporting-and-investigation",
    "title": "Accident Book, Reporting and Investigation",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["accident book", "BI 510", "RIDDOR", "HSE", "accident reporting", "investigation", "witness"],
    "examFocus": [
      "Know why accidents must be reported and recorded",
      "Understand what the accident book is used for",
      "Recognise who may be involved after a serious accident"
    ],
    "keyPoints": [
      "All workplace accidents that cause injury should be reported and recorded.",
      "The accident book, known as BI 510, is used to record workplace injuries.",
      "It is usually kept near the first aid kit so it can be completed quickly after an accident.",
      "The report can be completed by the first aider, the injured person or a witness.",
      "Completed accident records must be removed from the book and stored safely for at least three years.",
      "Accident records help employers spot repeated problems over time.",
      "If patterns appear, employers should deal with the cause and give extra training where needed.",
      "People involved after an accident may include first aiders, managers, supervisors and emergency services.",
      "Many serious accidents and dangerous occurrences must be reported under RIDDOR.",
      "The HSE may investigate serious incidents and speak to employers, managers, workers and witnesses.",
      "The HSE can isolate part of a workplace or, in serious cases, shut down the whole site.",
      "Poor health and safety performance can damage production, reputation, staffing and future work."
    ],
    "commonMistakes": [
      "Failing to record an accident as soon as possible.",
      "Treating accident records as paperwork instead of using them to prevent repeat incidents.",
      "Not reporting serious incidents that fall under RIDDOR.",
      "Ignoring the wider impact a serious accident can have on the site and employer."
    ],
    "miniCheck": [
      {
        "question": "What is the accident book used for?",
        "answer": "To report and record workplace accidents that cause injury."
      },
      {
        "question": "How long must completed accident records be stored?",
        "answer": "At least three years."
      },
      {
        "question": "Who may investigate a serious workplace accident?",
        "answer": "The HSE."
      }
    ]
  },
  {
    "id": "hsw-skin-protection-coshh-and-hazardous-substances",
    "title": "Skin Protection, Sun Safety and Hazardous Substances",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["sun safety", "UV rays", "SPF", "UVA", "COSHH", "safety data sheet", "chemical spill", "dermatitis"],
    "examFocus": [
      "Understand how outdoor work can affect skin health",
      "Know how COSHH helps control hazardous substances",
      "Recognise the purpose of safety data sheets and spill kits"
    ],
    "keyPoints": [
      "Working outside in strong sun can cause sunburn and may increase the risk of skin cancer.",
      "Some sites do not allow shorts or too much exposed skin for safety reasons.",
      "Workers in hot weather should be protected with high-factor sun cream and regular drinking water.",
      "Recommended sun cream is SPF 30 or above with strong UVA protection.",
      "Materials such as wood dust and resins can remove natural oils from the skin.",
      "Damaged skin can become dry, cracked and sore, and may lead to dermatitis.",
      "Barrier cream can help protect hands when gloves cannot be worn.",
      "COSHH covers substances that can harm health during use, transport, handling, storage and disposal.",
      "Manufacturers must provide safety information for hazardous products in a safety data sheet.",
      "Employers use safety data sheets when completing risk assessments.",
      "A COSHH assessment explains the risks from a substance and how to work with it safely.",
      "Chemical spills must be cleaned up using the correct method and suitable spill kit.",
      "Some cleaning products can react dangerously with chemicals, so the wrong cleanup method can create more risk.",
      "Asbestos is not covered by COSHH because it has separate regulations."
    ],
    "commonMistakes": [
      "Working in strong sun without enough skin protection.",
      "Not drinking enough water when working in hot weather.",
      "Ignoring skin damage caused by dust, resins or chemicals.",
      "Using the wrong materials to clean a chemical spill.",
      "Confusing safety data sheets with optional guidance instead of essential safety information."
    ],
    "miniCheck": [
      {
        "question": "What sun cream standard is recommended for outdoor construction work?",
        "answer": "SPF 30 or higher with a UVA rating of 4 or 5."
      },
      {
        "question": "What skin condition can develop if the skin loses its natural oils?",
        "answer": "Dermatitis."
      },
      {
        "question": "What document gives safety information for hazardous products?",
        "answer": "A safety data sheet."
      }
    ]
  },
  {
    "id": "hsw-power-tools-vibration-and-special-hazards",
    "title": "Power Tools, Vibration and High-Risk Work",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["power tools", "vibration", "HAVS", "vibration white finger", "electrocution", "portable tools", "Explosives Regulations"],
    "examFocus": [
      "Recognise the main hazards linked to portable power tools",
      "Understand the health risks caused by vibration",
      "Know how employers and workers reduce vibration-related harm"
    ],
    "keyPoints": [
      "Construction work includes more than building new structures and can also involve demolition.",
      "Explosives may sometimes be used in demolition, but only by trained and qualified workers following strict rules.",
      "Portable power tools can cause injuries from blades, cutters, electricity and vibration.",
      "Tools connected to mains electricity can cause serious burns or electrocution if they are damaged or used incorrectly.",
      "Some tools, such as sanders, jigsaws and multi-tools, create vibration during use.",
      "Long exposure to vibration can damage muscles, ligaments and nerves.",
      "Vibration can lead to hand-arm vibration syndrome, also called HAVS or vibration white finger.",
      "Early warning signs include tingling, numbness, reduced finger feeling and weaker grip strength.",
      "Poor circulation caused by vibration can make fingers lose colour.",
      "Taking regular breaks helps reduce exposure to vibration.",
      "Anti-vibration gloves can help lower the risk of injury.",
      "Cold and damp conditions can make vibration damage worse.",
      "Employers must follow the Control of Vibration at Work Regulations to protect workers.",
      "This includes checking vibration levels from tools and limiting how long they are used.",
      "Poorly maintained tools can produce more vibration, so regular servicing is important.",
      "Modern tools are often designed to reduce vibration levels."
    ],
    "commonMistakes": [
      "Using vibrating tools for too long without a break.",
      "Ignoring early signs such as numbness or tingling in the fingers.",
      "Using poorly maintained power tools.",
      "Working with vibrating tools in cold, damp conditions without extra care.",
      "Assuming only sharp blades are dangerous and overlooking electrical or vibration risks."
    ],
    "miniCheck": [
      {
        "question": "What does HAVS stand for?",
        "answer": "Hand-arm vibration syndrome."
      },
      {
        "question": "Name one early sign of vibration damage.",
        "answer": "Tingling, numbness or loss of feeling in the fingers."
      },
      {
        "question": "How can vibration risk be reduced when using power tools?",
        "answer": "Take regular breaks, use anti-vibration gloves and keep tools well maintained."
      }
    ]
  },
  {
    "id": "hsw-welfare-facilities-on-construction-sites",
    "title": "Welfare Facilities on Site",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["welfare facilities", "CDM", "toilets", "drinking water", "washing facilities", "changing rooms", "rest areas"],
    "examFocus": [
      "Know the minimum welfare facilities required on construction sites",
      "Understand what employers must provide under CDM",
      "Recognise why welfare standards matter for health, hygiene and comfort"
    ],
    "keyPoints": [
      "Employers must provide basic welfare facilities for workers.",
      "Joinery workshops usually have fixed facilities, but site welfare can be harder to manage because workers are spread out and the workforce changes.",
      "Under CDM, construction sites must have minimum welfare facilities.",
      "Toilets must be clean, ventilated, well lit and maintained.",
      "Toilet paper must be provided, and women’s toilets need suitable sanitary waste disposal.",
      "Where men and women share facilities, separate lockable rooms must be available.",
      "A fresh supply of drinking water must be provided in suitable places on site.",
      "Drinking water must be clearly marked and protected from contamination.",
      "Cups must be supplied unless the water comes from a suitable drinking fountain.",
      "Washing facilities must include basins for hands, forearms and face.",
      "Workers should have hot and cold running water where possible, plus soap and a way to dry hands.",
      "Washing facilities should be near toilets and changing rooms where needed.",
      "Showers must be provided if the work is especially dirty.",
      "Changing rooms with lockers must be available when workers need specialist clothing or cannot change elsewhere.",
      "Changing rooms should include seating and a way to dry clothing.",
      "Rest areas must have enough tables and seats with backs for the number of workers using them.",
      "Workers must be able to boil water and prepare and eat meals.",
      "Rest areas should be kept at a comfortable temperature.",
      "Pregnant workers and nursing mothers must have somewhere to rest lying down."
    ],
    "commonMistakes": [
      "Using welfare areas that are not kept clean or maintained.",
      "Drinking from water supplies that are not clearly marked as safe.",
      "Ignoring the need for changing or washing facilities after dirty work.",
      "Assuming workshop welfare rules are the same as site welfare needs."
    ],
    "miniCheck": [
      {
        "question": "What law requires minimum welfare facilities on construction sites?",
        "answer": "The Construction (Design and Management) Regulations."
      },
      {
        "question": "What must be clearly labelled on site?",
        "answer": "Drinking water."
      },
      {
        "question": "When must showers be provided?",
        "answer": "When the work is particularly dirty."
      }
    ]
  },
  {
    "id": "hsw-noise-hazards-and-hearing-protection",
    "title": "Noise Hazards and Hearing Protection",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["noise", "hearing loss", "ear defenders", "ear plugs", "Control of Noise at Work Regulations", "temporary hearing loss", "permanent hearing loss"],
    "examFocus": [
      "Understand how noise can affect health and safety at work",
      "Know common sources of harmful noise in construction",
      "Recognise how employers should reduce or control noise exposure"
    ],
    "keyPoints": [
      "Noise at work is a hazard that can damage health.",
      "Noise means unwanted or harmful sound.",
      "Construction workers are often exposed to loud machinery and powered tools.",
      "Nail guns and hammering can create sudden impact or explosive noise that damages the inner ear.",
      "Hearing loss can be temporary after working in noisy conditions.",
      "Very loud or sudden sounds can also cause permanent hearing damage.",
      "Repeated temporary hearing loss should not be ignored because it can lead to more serious problems.",
      "Noise can also distract workers and reduce concentration.",
      "Loud working environments may affect balance, which is especially dangerous when working at height or using tools.",
      "Employers should remove the source of noise where possible.",
      "If noise cannot be removed, quieter tools or equipment should be used.",
      "Noise can also be controlled by barriers, warning signs and limiting the time workers are exposed.",
      "Hearing protection such as ear defenders or ear plugs may be needed as part of control measures."
    ],
    "commonMistakes": [
      "Ignoring temporary hearing loss after noisy work.",
      "Working around loud tools without suitable hearing protection.",
      "Assuming noise only affects hearing and not concentration or balance.",
      "Staying too long in noisy areas when exposure time should be limited."
    ],
    "miniCheck": [
      {
        "question": "What is noise in the workplace?",
        "answer": "An unwanted or harmful sound."
      },
      {
        "question": "Name one effect noise can have besides hearing damage.",
        "answer": "Loss of concentration or balance problems."
      },
      {
        "question": "How can employers reduce noise exposure?",
        "answer": "Remove the noise source, use quieter equipment, or isolate the area and limit exposure time."
      }
    ]
  },
  {
    "id": "hsw-working-at-height-and-legal-duties",
    "title": "Working at Height and Safety Duties",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["working at height", "WAHR", "falls", "competent workers", "planning", "supervision", "PUWER"],
    "examFocus": [
      "Understand what counts as working at height",
      "Know the main legal duties for safe work at height",
      "Recognise how risks can be avoided or reduced before work starts"
    ],
    "keyPoints": [
      "Working at height means any work where a fall could cause injury.",
      "This includes falls above ground level and into openings below ground level.",
      "Examples include unloading from a lorry or working next to a hole in the ground.",
      "Falls from height are still a major cause of injuries and deaths in construction.",
      "Common accidents include falls from ladders and through fragile surfaces such as old roofs.",
      "Under WAHR, work at height must be planned, supervised and carried out by competent people.",
      "Before starting, check whether the task can be done another way to avoid the height risk.",
      "Some jobs can be completed safely from ground level with the right planning and equipment.",
      "Using equipment such as a drone for roof inspection can remove the need to work at height.",
      "Workers must take reasonable care of themselves and others.",
      "Workers must also cooperate with their employer so safety duties can be met.",
      "Any equipment used for work at height must also meet PUWER requirements.",
      "This means the equipment must be suitable, safe, maintained and used by trained people."
    ],
    "commonMistakes": [
      "Starting work at height without planning the task properly.",
      "Using height access when the job could be done safely from the ground.",
      "Letting untrained or inexperienced workers use access equipment.",
      "Ignoring fragile surfaces or openings that could cause a fall."
    ],
    "miniCheck": [
      {
        "question": "What does working at height mean?",
        "answer": "Any work where a fall could cause personal injury."
      },
      {
        "question": "What must employers do before work at height begins?",
        "answer": "Make sure it is planned, supervised and done by competent people."
      },
      {
        "question": "How can some height risks be removed completely?",
        "answer": "By doing the task another way, such as from ground level with different equipment."
      }
    ]
  },
  {
    "id": "hsw-access-equipment-selection-and-ladder-safety",
    "title": "Choosing Access Equipment and Using Ladders Safely",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["access equipment", "ladders", "step ladders", "75 degrees", "1:4 ratio", "fibreglass ladder", "electrical hazards"],
    "examFocus": [
      "Know what affects the choice of access equipment",
      "Understand the main safety points for ladder use",
      "Recognise the limits and hazards of different ladder types"
    ],
    "keyPoints": [
      "Access equipment is any equipment used to help a person work safely at height.",
      "The right equipment depends on the task, load, number of users, weather and ground conditions.",
      "You must also consider training and extra hazards such as water, asbestos or live power lines.",
      "Ladders and step ladders carry a high risk of falling.",
      "They should only be used when safer equipment is not reasonable or when the task is short.",
      "The HSE recommends ladder use for tasks lasting no more than 30 minutes at a time.",
      "Wooden pole ladders are now uncommon because they are heavy and easily damaged.",
      "Aluminium ladders are lighter and stronger than wood.",
      "Aluminium ladders can be dangerous near overhead electrical cables because they conduct electricity.",
      "Fibreglass ladders do not conduct electricity, so they are preferred for electrical work.",
      "A leaning ladder should be set at 75 degrees.",
      "This is the same as a 1 to 4 ratio, meaning the ladder goes out 1 unit at the base for every 4 units up.",
      "Painted access equipment should be avoided because paint may hide defects."
    ],
    "commonMistakes": [
      "Using a ladder when safer access equipment should be used instead.",
      "Choosing access equipment without checking weather or ground conditions.",
      "Using aluminium ladders near overhead electrical cables.",
      "Setting a leaning ladder at the wrong angle.",
      "Using painted equipment that could be hiding damage."
    ],
    "miniCheck": [
      {
        "question": "What should you consider before choosing access equipment?",
        "answer": "The task, load, number of users, weather, ground conditions, training and other hazards."
      },
      {
        "question": "When should ladders generally be used?",
        "answer": "Only when safer equipment is not reasonable or for short tasks of up to 30 minutes."
      },
      {
        "question": "What is the correct angle for a leaning ladder?",
        "answer": "75 degrees, or a 1 to 4 ratio."
      }
    ]
  },
  {
    "id": "hsw-fall-protection-and-safe-scaffold-practice",
    "title": "Fall Protection and Safe Scaffold Practice",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["guardrails", "toe boards", "scaffold", "harness", "lanyard", "safety netting", "debris chute"],
    "examFocus": [
      "Understand how edge protection reduces the risk of falls",
      "Know how materials should be controlled when working at height",
      "Recognise when extra fall protection may be needed"
    ],
    "keyPoints": [
      "Guardrails are fitted around work platforms to reduce the chance of falling.",
      "Guardrails are placed 950 mm above the platform.",
      "Toe boards are used to stop tools and materials falling from the edge.",
      "Intermediate rails are fitted between the handrail and toe board.",
      "The gap between rails should be no more than 470 mm.",
      "A risk assessment may require a harness and lanyard as extra fall protection.",
      "A harness and lanyard are forms of PPE used to stop a worker falling from height.",
      "Waste materials must never be thrown from scaffold or platforms to the ground below.",
      "Debris should be sent down safely using a chute into a skip.",
      "Netting can be placed over a skip to reduce the risk from falling waste.",
      "Safety netting and airbags may be installed where people are working at height.",
      "Safety netting and airbags do not stop falls happening, but they can reduce the seriousness of injuries.",
      "Workers should never jump onto safety netting or airbags."
    ],
    "commonMistakes": [
      "Throwing waste over the side of a scaffold.",
      "Working at height without the required edge protection.",
      "Assuming safety netting stops falls instead of only reducing injury.",
      "Not using a harness and lanyard when the risk assessment requires it."
    ],
    "miniCheck": [
      {
        "question": "What is the purpose of a toe board?",
        "answer": "To stop materials or tools falling from the platform edge."
      },
      {
        "question": "What should be used instead of throwing debris from height?",
        "answer": "A chute into a skip."
      },
      {
        "question": "Do safety nets prevent falls?",
        "answer": "No, they reduce the severity of injury if a fall happens."
      }
    ]
  },
  {
    "id": "hsw-electrical-equipment-and-safe-power-use",
    "title": "Electrical Equipment and Safe Power Use",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["electrical safety", "110V", "transformer", "RCD", "PAT", "power tools", "electrocution"],
    "examFocus": [
      "Understand the main electrical risks in construction and joinery",
      "Know why 110 V supplies and transformers are used on site",
      "Recognise the checks needed before using electrical tools"
    ],
    "keyPoints": [
      "Construction workers often use electrical tools and may also face hazards from hidden cables and overhead power lines.",
      "Electric shock from workplace electrical equipment can cause serious injury or death.",
      "The normal UK domestic supply is 230 to 240 volts.",
      "Construction sites and joinery workshops commonly use 110-volt supplies to reduce the severity of electrical accidents.",
      "110-volt tools are powered through a transformer that reduces the voltage from a 230 to 240-volt supply.",
      "Transformers are kept close to the main supply to keep the higher-voltage lead as short as possible.",
      "Extension leads and tools should be routed above head height or away from walkways.",
      "Power can also be supplied safely from overhead points, such as suspended power cubes in workshops.",
      "Using pneumatic tools can reduce electrical risk because they use compressed air instead of electricity.",
      "Construction plugs and sockets are tougher than domestic ones and are designed to resist dirt and moisture.",
      "If 110 volts cannot be used, an RCD can provide extra protection by cutting off the electricity when a fault is detected.",
      "RCDs should be tested before use and reset if needed.",
      "Trailing leads across walkways should be covered with a cable protector to reduce trip risks.",
      "Electrical equipment must be kept in a safe condition under the Electricity at Work Regulations.",
      "Before checking a tool, isolate it from the power supply.",
      "Inspect the plug for damage, missing parts or loose pins.",
      "Check the lead for cuts, exposed wires, weak connections or signs of internal wire damage.",
      "Inspect the body of the tool for cracks, missing parts and faulty guards.",
      "Make sure switches work properly and move freely.",
      "Check that blades, cutters or discs are correct for the job, sharp and free from defects.",
      "Some electrical faults cannot be found by visual inspection alone.",
      "Portable appliance testing, known as PAT, is used by competent people to check tools are safe."
    ],
    "commonMistakes": [
      "Using damaged tools or leads without checking them first.",
      "Running leads across walkways without protection.",
      "Forgetting to test an RCD before use.",
      "Assuming 110 volts removes all electrical danger.",
      "Inspecting or handling a tool before isolating it from the supply."
    ],
    "miniCheck": [
      {
        "question": "Why are 110-volt tools commonly used on site?",
        "answer": "They reduce the severity of electrical accidents while still powering the equipment."
      },
      {
        "question": "What does an RCD do?",
        "answer": "It cuts off the electricity when it detects a fault."
      },
      {
        "question": "What should you do first before checking an electrical tool?",
        "answer": "Isolate it from the power supply."
      }
    ]
  },
  {
    "id": "hsw-ppe-and-rpe-for-body-protection",
    "title": "PPE and RPE for Body Protection",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["PPE", "RPE", "silica dust", "respirator", "face-fit testing", "hard hat", "gloves"],
    "examFocus": [
      "Understand how PPE protects different parts of the body",
      "Know when respiratory protective equipment is needed",
      "Recognise why correct fit and compatibility matter"
    ],
    "keyPoints": [
      "Different types of PPE protect different parts of the body from different hazards.",
      "Hands and arms may need protection from splinters, sharp edges, vibration, heat, cold and chemicals.",
      "Hand and arm protection can include barrier cream, cut-resistant gloves, anti-vibration gloves, gauntlets and protective sleeves.",
      "The head may need protection from falling objects, knocks and machinery.",
      "Head protection can include a hard hat, bump cap or hair net.",
      "The lungs need protection from contaminated air such as wood dust, silica dust or asbestos, and from low-oxygen environments.",
      "Respiratory protection is called RPE.",
      "RPE can include dust masks, half-face respirators, full-face respirators, powered respirators and breathing apparatus.",
      "Skin may need protection from sunlight and chemicals.",
      "Skin protection can include sunscreen and clothing that covers exposed skin.",
      "Silica dust from materials such as concrete, rock and sand can seriously damage the lungs if proper controls are not used.",
      "RPE must be face-fit tested to make sure it seals properly to the face.",
      "Facial hair, glasses and badly adjusted straps can break the seal and let harmful dust in.",
      "If a proper seal cannot be achieved, another protection method must be used or the task must not go ahead.",
      "Workers may need to wear several items of PPE at once, so the equipment must work safely together.",
      "If standard earmuffs do not fit properly with a hard hat, safer options include attached ear defenders or ear plugs.",
      "If you are unsure which PPE to use, you must ask your supervisor."
    ],
    "commonMistakes": [
      "Using the wrong PPE for the hazard.",
      "Wearing RPE without a proper face fit.",
      "Ignoring how facial hair or glasses can affect the seal on a mask.",
      "Using PPE items together that reduce each other’s protection.",
      "Thinking dust is harmless when it can cause serious lung disease."
    ],
    "miniCheck": [
      {
        "question": "What does RPE stand for?",
        "answer": "Respiratory protective equipment."
      },
      {
        "question": "Why is face-fit testing important?",
        "answer": "It checks that the mask forms a proper seal and stops harmful dust getting in."
      },
      {
        "question": "What can stop RPE sealing properly?",
        "answer": "Facial hair, glasses or poorly adjusted straps."
      }
    ]
  },
  {
    "id": "hsw-importance-storage-and-checking-of-ppe",
    "title": "Importance, Storage and Checking of PPE",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": ["PPE rules", "damaged PPE", "CE mark", "storage", "supervisor", "safety equipment"],
    "examFocus": [
      "Understand why PPE must be worn in the workplace",
      "Know how PPE should be stored and checked",
      "Recognise the importance of reporting lost or damaged PPE"
    ],
    "keyPoints": [
      "PPE is worn to reduce the risk of injury, illness and long-term health problems.",
      "Workers may be required to wear PPE because it is a legal requirement and a site or workshop rule.",
      "Proper PPE can prevent serious injury and may save lives.",
      "If PPE does not fit properly or becomes uncomfortable, it should be reported to a supervisor.",
      "PPE not in use should be stored in the correct place, such as a cupboard or locker.",
      "Stored PPE should be kept clean, dry and ready for future use.",
      "PPE left outside or on work benches can become damaged, dirty, contaminated or lost.",
      "Employers should train workers to choose suitable PPE, use it correctly and spot faults.",
      "Although employers provide PPE, workers are responsible for checking it before use.",
      "Any lost, damaged or missing PPE must be reported straight away so it can be replaced.",
      "PPE supplied by employers must be in good condition.",
      "UK law requires employer-provided PPE to meet European standards and carry the CE mark.",
      "PPE that does not meet the right standard or has been neglected may not give full protection in an accident."
    ],
    "commonMistakes": [
      "Wearing PPE that does not fit properly.",
      "Leaving PPE exposed to weather, dirt or damage.",
      "Using damaged PPE instead of reporting it.",
      "Assuming the employer checks every item before each use.",
      "Using PPE that may not meet the required safety standard."
    ],
    "miniCheck": [
      {
        "question": "Who is responsible for checking PPE before use?",
        "answer": "The worker using it."
      },
      {
        "question": "What should you do if PPE is damaged or missing?",
        "answer": "Report it to your supervisor immediately."
      },
      {
        "question": "What mark should approved PPE display?",
        "answer": "The CE mark."
      }
    ]
  },
  {
    "id": "hsw-employer-duties-safe-workplace",
    "title": "Employer Duties for a Safe Workplace",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "employer responsibilities",
      "safe workplace",
      "training",
      "supervision",
      "PPE"
    ],
    "examFocus": [
      "Understand what an employer must provide",
      "Know why training and supervision matter",
      "Recognise the employer’s duty to provide PPE"
    ],
    "keyPoints": [
      "Employers must provide a safe place to work.",
      "Workers must be given clear information, training and the right equipment to work safely.",
      "New or inexperienced workers must be supervised until they can do the job safely on their own.",
      "A hazard is anything that could cause harm.",
      "Employers must protect workers from hazards in the workplace.",
      "If a task needs personal protective equipment, the employer must provide it free of charge.",
      "Common PPE includes safety boots, high-visibility clothing and hard hats.",
      "Damaged or worn PPE should be replaced by the employer, but workers must look after it properly."
    ],
    "commonMistakes": [
      "Starting work without proper instruction or supervision.",
      "Using damaged PPE or not reporting it.",
      "Thinking PPE must be bought by the worker."
    ],
    "miniCheck": [
      {
        "question": "What must an employer provide to help you work safely?",
        "answer": "A safe workplace, training, information, supervision and the right equipment."
      },
      {
        "question": "Who must provide required PPE?",
        "answer": "The employer."
      },
      {
        "question": "What is a hazard?",
        "answer": "Anything with the potential to cause harm."
      }
    ]
  },
  {
    "id": "hsw-risk-assessments-and-safety-information",
    "title": "Risk Assessments and Safety Information",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "risk assessment",
      "hazards",
      "CDM regulations",
      "safety poster",
      "health and safety law"
    ],
    "examFocus": [
      "Understand why risk assessments are used",
      "Know when risk assessments must be written down",
      "Recognise the importance of workplace health and safety information"
    ],
    "keyPoints": [
      "Employers must assess important workplace hazards using a risk assessment.",
      "A risk assessment identifies dangers, who could be harmed and what controls are needed.",
      "If an employer has five or more employees, risk assessments must be written down and kept.",
      "Risk controls should reduce danger as much as reasonably possible.",
      "Construction work must be planned and organised with health, safety and welfare in mind, whatever the size of the job.",
      "Risk assessments can identify hazards linked to specific tasks, such as noise from cutting equipment.",
      "Employers must display health and safety information at work or give workers an approved leaflet.",
      "Workplace safety information explains what employers must do, what workers must do and what to do if there is a problem."
    ],
    "commonMistakes": [
      "Starting work without checking the main hazards.",
      "Failing to record risk assessments when required.",
      "Ignoring health and safety information displayed at work."
    ],
    "miniCheck": [
      {
        "question": "What document is used to assess important workplace hazards?",
        "answer": "A risk assessment."
      },
      {
        "question": "When must a risk assessment be written down?",
        "answer": "When the employer has five or more employees."
      },
      {
        "question": "What three main things does workplace safety information explain?",
        "answer": "What employers must do, what workers must do and what to do if there is a problem."
      }
    ]
  },
  {
    "id": "hsw-riddor-and-reporting-serious-incidents",
    "title": "RIDDOR and Reporting Serious Incidents",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "RIDDOR",
      "accident reporting",
      "serious incidents",
      "HSE",
      "occupational disease"
    ],
    "examFocus": [
      "Understand which incidents must be reported",
      "Know the difference between minor injuries and reportable incidents",
      "Recognise when the HSE must be informed"
    ],
    "keyPoints": [
      "Employers must record workplace accidents and investigate the causes to help stop them happening again.",
      "Accident records are also needed for insurance and compensation claims.",
      "Serious injuries, diseases and dangerous events must be reported to the HSE under RIDDOR.",
      "Minor injuries, such as small cuts, are usually treated by a first aider and entered in the first aid book.",
      "Even small cuts must be cleaned and covered to prevent infection.",
      "Reportable incidents include deaths, specified serious injuries, certain work-related diseases and dangerous occurrences.",
      "If a worker cannot do their normal job or is off work for more than seven consecutive days after a work injury, this must be reported.",
      "Deaths, specified injuries, hospital treatment for non-workers and dangerous occurrences must be reported without delay.",
      "Injuries causing more than seven days off work must be reported within 15 days."
    ],
    "commonMistakes": [
      "Treating a serious incident as if it only needs entering in the first aid book.",
      "Failing to report over-seven-day injuries.",
      "Not understanding that dangerous occurrences must also be reported."
    ],
    "miniCheck": [
      {
        "question": "What law covers reporting serious workplace injuries, diseases and dangerous events?",
        "answer": "RIDDOR."
      },
      {
        "question": "When must an injury that causes more than seven days off work be reported?",
        "answer": "Within 15 days."
      },
      {
        "question": "Who must serious reportable incidents be reported to?",
        "answer": "The HSE."
      }
    ]
  },
  {
    "id": "hsw-major-workplace-incidents-and-common-causes",
    "title": "Major Workplace Incidents and Common Causes",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "major incidents",
      "construction hazards",
      "poor housekeeping",
      "site security",
      "falls from height"
    ],
    "examFocus": [
      "Recognise common major hazards in construction",
      "Understand how poor housekeeping increases risk",
      "Know the main cause of fatal accidents in construction"
    ],
    "keyPoints": [
      "Construction sites and workshops can have different hazards, so risks must be checked for each workplace.",
      "Employers must identify major hazards and take action to protect workers.",
      "Poor housekeeping creates trip hazards and allows waste to build up.",
      "Built-up waste increases the chance of fire.",
      "Good site security helps stop unauthorised people entering the workplace.",
      "Perimeter fencing or hoarding should be used as a basic way to control access.",
      "Common serious incidents include fires, contact with electricity, being struck by vehicles or objects, and collapse or overturning incidents.",
      "Falls from height are the biggest cause of fatal accidents in construction."
    ],
    "commonMistakes": [
      "Leaving waste and materials lying around.",
      "Ignoring site security and access control.",
      "Underestimating the danger of working at height."
    ],
    "miniCheck": [
      {
        "question": "What can poor housekeeping cause?",
        "answer": "Trip hazards and a build-up of waste that can increase fire risk."
      },
      {
        "question": "What basic security measure should restrict access to site?",
        "answer": "Perimeter fencing or hoarding."
      },
      {
        "question": "What is the biggest cause of fatal accidents in construction?",
        "answer": "Falls from height."
      }
    ]
  },
  {
    "id": "hsw-risk-assessments-method-statements-and-rams",
    "title": "Risk Assessments, Method Statements and RAMS",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "risk assessment",
      "method statement",
      "RAMS",
      "significant hazards",
      "workplace safety"
    ],
    "examFocus": [
      "Understand the purpose of a risk assessment",
      "Know the five main steps of a risk assessment",
      "Recognise what method statements and RAMS are"
    ],
    "keyPoints": [
      "Workplace risks can change as building work moves on.",
      "Changing conditions such as flooding, strong wind, snow and extreme heat can affect safety.",
      "Employers must assess and record significant workplace hazards in a risk assessment.",
      "The five steps are: identify hazards, identify who may be harmed, evaluate the risk, record findings and review the assessment regularly.",
      "Risk assessments are a legal duty, even when control measures are already in place.",
      "A method statement explains how a job will be carried out safely.",
      "Many construction sites require both risk assessments and method statements.",
      "The term RAMS means risk assessments and method statements."
    ],
    "commonMistakes": [
      "Thinking a risk assessment is not needed because the job already seems safe.",
      "Forgetting that site conditions can change during the project.",
      "Confusing a risk assessment with a method statement."
    ],
    "miniCheck": [
      {
        "question": "What does RAMS stand for?",
        "answer": "Risk assessments and method statements."
      },
      {
        "question": "Name one of the five steps in a risk assessment.",
        "answer": "Identify hazards, identify who may be harmed, evaluate risk, record findings or review the assessment."
      },
      {
        "question": "What does a method statement explain?",
        "answer": "How a job will be done safely."
      }
    ]
  },
  {
    "id": "hsw-health-hazards-dust-noise-and-safe-controls",
    "title": "Health Hazards: Dust, Noise and Safe Controls",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "dust hazards",
      "hearing loss",
      "LEV",
      "PPE",
      "health hazards"
    ],
    "examFocus": [
      "Recognise long-term health hazards in construction",
      "Understand how dust can be controlled",
      "Know why PPE is not the first control option"
    ],
    "keyPoints": [
      "Some hazards cause harm slowly and may not be noticed until permanent damage is done.",
      "Slips, trips and falls cause accidents, but health hazards can also seriously damage workers over time.",
      "Dust from concrete, stone, rock and some timbers can damage the lungs and cause disease.",
      "The safest control is to avoid creating dust by using a safer method of work.",
      "Dust can also be controlled with local exhaust ventilation (LEV) or extraction systems on fixed machines.",
      "PPE should only be considered after other control methods have been looked at first.",
      "PPE mainly protects the person wearing it, not others nearby.",
      "Hearing loss can affect young workers as well as older workers and often builds up over time."
    ],
    "commonMistakes": [
      "Doing a quick task without the correct safety precautions.",
      "Relying on PPE before trying better control methods.",
      "Ignoring dust and noise because the damage is not immediate."
    ],
    "miniCheck": [
      {
        "question": "What can dust from materials like concrete and timber cause?",
        "answer": "Lung damage and disease."
      },
      {
        "question": "What does LEV do?",
        "answer": "It removes dust at the source."
      },
      {
        "question": "Why is PPE not the first choice of control?",
        "answer": "Because it mainly protects the wearer and not other people nearby."
      }
    ]
  },
  {
    "id": "hsw-ppe-and-safe-storage-of-materials",
    "title": "PPE and Safe Storage of Materials",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "PPE",
      "hard hat",
      "high-visibility clothing",
      "safe storage",
      "COSHH cupboard"
    ],
    "examFocus": [
      "Know the common minimum PPE used on construction sites",
      "Understand why materials must be stored correctly",
      "Recognise safe storage rules for hazardous substances"
    ],
    "keyPoints": [
      "Most construction sites require a basic level of PPE for everyone entering the site.",
      "This usually includes a hard hat, high-visibility vest, steel toe-capped boots, eye protection and gloves.",
      "Each item of PPE protects against specific risks such as falling objects, moving vehicles, crushed toes, flying particles and harmful substances.",
      "Materials should be delivered when needed so they do not create clutter, become damaged or get stolen.",
      "Building materials are usually stored in a designated area with safe vehicle access and separate pedestrian walkways.",
      "Valuable items should be kept in secure lockable storage.",
      "Materials with an expiry date should be used in order, with the oldest stock used first.",
      "Combustible and hazardous materials must be stored safely, securely and in a well-ventilated area.",
      "Hazardous substances should be stored as instructed by the manufacturer and kept to a minimum.",
      "Small amounts of hazardous substances may be kept in a COSHH cupboard, and spills must be cleaned up straight away.",
      "Substances that could react with each other must be stored separately."
    ],
    "commonMistakes": [
      "Entering site without the required PPE.",
      "Leaving materials where they block access or can be damaged.",
      "Storing chemicals together when they could react.",
      "Not rotating stock with a shelf life."
    ],
    "miniCheck": [
      {
        "question": "Name two common items of minimum PPE on a construction site.",
        "answer": "Examples include a hard hat, high-visibility vest, steel toe-capped boots, eye protection or gloves."
      },
      {
        "question": "What is stock rotation?",
        "answer": "Using the oldest materials first to avoid waste."
      },
      {
        "question": "Where are small quantities of hazardous substances often stored?",
        "answer": "In a COSHH cupboard."
      }
    ]
  },
  {
    "id": "hsw-waste-control-and-safety-signs",
    "title": "Waste Control and Safety Signs",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "waste control",
      "recycling",
      "segregation",
      "safety signs",
      "site notices"
    ],
    "examFocus": [
      "Understand why waste must be controlled on site",
      "Know the benefits of reducing, reusing and recycling materials",
      "Recognise why safety signs are used in the workplace"
    ],
    "keyPoints": [
      "Waste from construction can harm the environment, so materials should be used carefully.",
      "Alternative materials with lower environmental impact, such as sustainably sourced timber, should be considered.",
      "Burning waste on site can be dangerous and can cause air pollution.",
      "Sending waste to landfill should be avoided where possible.",
      "The best approach is to reduce waste, reuse materials and recycle what is left.",
      "Waste should be separated into different bins or skips so it can be reused or recycled more easily.",
      "Careless waste disposal can pollute land and water and harm wildlife.",
      "Large amounts of waste must not be allowed to build up because they increase fire risk.",
      "Safety signs, notices and posters are used to give clear health and safety information.",
      "Employers must display safety signs when a significant risk still remains after other safety measures have been taken."
    ],
    "commonMistakes": [
      "Mixing all waste together instead of separating it.",
      "Letting rubbish build up around the workplace.",
      "Ignoring safety signs and notices.",
      "Burning waste without proper control."
    ],
    "miniCheck": [
      {
        "question": "What is the best way to deal with waste materials on site?",
        "answer": "Reduce waste, reuse materials and recycle what remains."
      },
      {
        "question": "Why should waste be segregated into different skips or bins?",
        "answer": "So it can be reused or recycled more easily and disposed of safely."
      },
      {
        "question": "When should safety signs be displayed?",
        "answer": "When a significant risk still remains after other control measures are in place."
      }
    ]
  },
  {
    "id": "hsw-drugs-alcohol-and-medication-at-work",
    "title": "Drugs, Alcohol and Medication at Work",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "drugs at work",
      "alcohol at work",
      "medication",
      "fitness for work",
      "workplace safety"
    ],
    "examFocus": [
      "Understand why drugs and alcohol are a workplace safety risk",
      "Know the signs that a worker may be under the influence",
      "Recognise the need to tell an employer about medication that could affect safe working"
    ],
    "keyPoints": [
      "Employees must take reasonable care of their own health and safety and the safety of others.",
      "Drugs and alcohol can affect judgement, reactions and safe use of tools, machinery and equipment.",
      "The effects of drugs and alcohol can last for hours and may stay in the body for several days.",
      "Warning signs can include slow reactions, poor punctuality, lower productivity, risk-taking, anxiety and unusual behaviour.",
      "Many employers ban drugs and alcohol at work and may carry out testing.",
      "These rules are especially important where workers use plant, lifting equipment or other high-risk machinery.",
      "Illegal drugs can lead to removal from site, loss of work and possible arrest.",
      "If a worker under the influence causes an accident, they may face prosecution.",
      "Prescribed medication is not illegal, but workers must tell their employer if it could affect driving, machinery use or emergency treatment."
    ],
    "commonMistakes": [
      "Thinking drugs or alcohol only affect safety for a short time.",
      "Coming to work impaired and using machinery.",
      "Not informing an employer about medication that may affect safe working."
    ],
    "miniCheck": [
      {
        "question": "Why are drugs and alcohol dangerous in construction work?",
        "answer": "They affect judgement, reaction time and the safe use of tools and machinery."
      },
      {
        "question": "Can employers have rules and testing for drugs and alcohol?",
        "answer": "Yes."
      },
      {
        "question": "What should you do if prescribed medication may affect your ability to work safely?",
        "answer": "Inform your employer."
      }
    ]
  },
  {
    "id": "hsw-manual-handling-risk-factors",
    "title": "Manual Handling Risk Factors",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "manual handling",
      "manual handling assessment",
      "MSDs",
      "lifting aids",
      "load handling"
    ],
    "examFocus": [
      "Understand what manual handling means",
      "Know what a manual handling assessment must consider",
      "Recognise how manual handling injuries can be reduced"
    ],
    "keyPoints": [
      "Manual handling includes pushing, pulling, lifting, carrying and lowering loads.",
      "Manual handling can cause workplace injuries, including strains and musculoskeletal disorders.",
      "If manual handling cannot be avoided, the task must be assessed to reduce the risk of injury.",
      "The task should be checked to see whether machinery or lifting aids can be used instead.",
      "The person doing the task must be capable of doing it and have the right training and information.",
      "The load must be checked for weight, size, shape, stability, sharp edges and centre of gravity.",
      "The load may need to be split into smaller parts or lifted by more than one person.",
      "The environment must be safe, including ground conditions, weather, carrying distance and a clear route."
    ],
    "commonMistakes": [
      "Lifting loads without assessing the task first.",
      "Trying to move heavy or awkward loads alone.",
      "Ignoring route hazards, weather or unstable ground.",
      "Not using lifting aids when they are available."
    ],
    "miniCheck": [
      {
        "question": "What is manual handling?",
        "answer": "Pushing, pulling, lifting, carrying or lowering a load."
      },
      {
        "question": "What should be considered before lifting a load?",
        "answer": "The task, the person, the load and the environment."
      },
      {
        "question": "Give one example of a lifting aid.",
        "answer": "A wheelbarrow or a sack truck."
      }
    ]
  },
  {
    "id": "hsw-safe-use-of-ladders-and-stepladders",
    "title": "Safe Use of Ladders and Stepladders",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "ladders",
      "stepladders",
      "working at height",
      "ladder safety",
      "access equipment"
    ],
    "examFocus": [
      "Understand how ladders should be secured and used safely",
      "Know the main safety checks before using ladders or stepladders",
      "Recognise unsafe ladder practices"
    ],
    "keyPoints": [
      "Ladders should be tied at the top whenever possible and secured at the bottom to stop them slipping.",
      "A leaning ladder should rest against a strong surface, not fragile parts such as guttering.",
      "Never use a ladder with damaged or missing parts, including worn or missing non-slip feet.",
      "Ladders should extend far enough above the landing point to provide a safe handhold.",
      "Users should avoid overreaching while on a ladder.",
      "Stepladders must be fully opened and locked in position before use.",
      "Do not work from the side of a stepladder because this can make it unstable.",
      "Do not stand on the top steps of a stepladder.",
      "Access equipment must be used, checked and maintained in line with the manufacturer’s instructions.",
      "Even low-level equipment such as hop-ups still carries risk and must be used carefully."
    ],
    "commonMistakes": [
      "Using a ladder that is not secured properly.",
      "Resting a ladder on weak or fragile surfaces.",
      "Overreaching from a ladder or stepladder.",
      "Using damaged access equipment.",
      "Standing on the top steps of a stepladder."
    ],
    "miniCheck": [
      {
        "question": "Where should a ladder be secured whenever possible?",
        "answer": "At the top and also secured at the bottom."
      },
      {
        "question": "Should a ladder be rested against guttering?",
        "answer": "No, because it is a fragile and unstable surface."
      },
      {
        "question": "Why is overreaching dangerous on a ladder?",
        "answer": "It can make the ladder unstable and increase the chance of falling."
      }
    ]
  },
  {
    "id": "hsw-podiums-and-work-platform-safety",
    "title": "Podiums and Work Platform Safety",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "podiums",
      "work platforms",
      "tower scaffold",
      "guard rails",
      "toe boards"
    ],
    "examFocus": [
      "Recognise safer alternatives to ladders for low-level work",
      "Know the main types of work platform",
      "Understand the purpose of guard rails, toe boards and brick guards"
    ],
    "keyPoints": [
      "Podiums are often a safer option than stepladders for low-level access work.",
      "A podium has a small platform and guard rail to help prevent falls.",
      "The gate on a podium helps keep the user safely enclosed while working.",
      "Work platforms allow people to work with both hands free.",
      "Platforms also provide short-term space for tools and materials.",
      "Common work platforms include trestles, mobile tower scaffolds and scaffolding.",
      "Mobile tower scaffolds are used for lighter work over short periods and can be moved on castors.",
      "If there is a risk of falling, the platform should have a handrail, intermediate rail and toe board.",
      "Toe boards stop tools and materials from being kicked or knocked off the edge.",
      "If stored materials rise above the toe board, a brick guard is used to close the gap for extra protection."
    ],
    "commonMistakes": [
      "Using a stepladder when a safer podium or platform is more suitable.",
      "Working from a platform without proper edge protection.",
      "Leaving materials where they can fall from the platform.",
      "Ignoring the need for toe boards or brick guards."
    ],
    "miniCheck": [
      {
        "question": "Why is a podium safer than a stepladder for some low-level tasks?",
        "answer": "It has a platform and guard rail that help prevent falls."
      },
      {
        "question": "Name one type of work platform.",
        "answer": "Trestles, a mobile tower scaffold or scaffolding."
      },
      {
        "question": "What is the purpose of a toe board?",
        "answer": "To stop materials and tools from falling off the platform."
      }
    ]
  },
  {
    "id": "hsw-pat-testing-and-safe-systems-of-work",
    "title": "PAT Testing and Safe Systems of Work",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "PAT testing",
      "electrical safety",
      "safe system of work",
      "method statement",
      "power tools"
    ],
    "examFocus": [
      "Understand the purpose of PAT testing",
      "Know what to do if a tool is out of test or fails inspection",
      "Recognise when a safe system of work is needed"
    ],
    "keyPoints": [
      "Power tools should be checked to make sure they are electrically safe.",
      "Tested tools are marked with a label showing who tested them and when the test was done.",
      "If a tool fails the test, it must be taken out of use straight away.",
      "Unsafe tools should be marked for repair or disposal.",
      "Power tools used on construction sites are commonly PAT tested every 3 months.",
      "If a PAT label is out of date, stop using the tool and report it to your supervisor.",
      "When equipment above 110 V is used, a safe system of work should be in place.",
      "A safe system of work looks at the people, equipment and substances involved, then checks the hazards and risks.",
      "A method statement can then explain the safest way to carry out the task.",
      "Written safe systems are preferred because they are clear and can be checked again later."
    ],
    "commonMistakes": [
      "Using a tool with an out-of-date PAT label.",
      "Continuing to use a tool that has failed a test.",
      "Using higher-voltage equipment without a clear safe system of work."
    ],
    "miniCheck": [
      {
        "question": "What should you do if a power tool PAT label is out of date?",
        "answer": "Stop using it and report it to your supervisor."
      },
      {
        "question": "What happens to tools that fail a PAT test?",
        "answer": "They must be taken out of service immediately."
      },
      {
        "question": "Why is a written safe system of work preferred?",
        "answer": "Because it is clear and can be referred to later."
      }
    ]
  },
  {
    "id": "hsw-electrical-tool-safety-and-storage",
    "title": "Electrical Tool Safety and Storage",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "electrical tools",
      "double insulated",
      "battery tools",
      "generator safety",
      "tool storage"
    ],
    "examFocus": [
      "Recognise key dangers linked to electrical equipment",
      "Understand why battery tools can be safer",
      "Know how electrical tools should be stored and handled"
    ],
    "keyPoints": [
      "Generators produce toxic exhaust fumes and should be used in well-ventilated areas, ideally outdoors.",
      "Power tool leads contain wires that carry electricity through the tool safely.",
      "The earth wire is the safety wire and helps protect the user if a fault develops.",
      "Double-insulated tools do not need an earth wire because their design stops the casing becoming live.",
      "You should not repair plugs or replace cables at work unless you are a qualified electrician.",
      "Battery-powered tools are safer than mains-powered tools because they usually operate at a much lower voltage.",
      "Battery tools also remove the risk of trailing leads when working.",
      "Charging units still use mains electricity and must be used safely in a proper charging area.",
      "Power tools and leads should be stored clear of walkways to stop trip hazards.",
      "Tools must never be carried or lowered by the lead because this can damage the connections.",
      "Tools should be cleaned and checked after use for wear, damage or missing parts."
    ],
    "commonMistakes": [
      "Using generators in confined or poorly ventilated spaces.",
      "Trying to repair plugs or cables without the right qualification.",
      "Leaving leads across walkways.",
      "Carrying tools by their cables.",
      "Failing to inspect tools after use."
    ],
    "miniCheck": [
      {
        "question": "Why should generators be used outdoors or in well-ventilated areas?",
        "answer": "Because they produce toxic exhaust fumes."
      },
      {
        "question": "Why are battery-powered tools often safer?",
        "answer": "They use lower voltage and do not have trailing leads."
      },
      {
        "question": "How should power tools be moved?",
        "answer": "By holding the tool itself, not by the lead."
      }
    ]
  },
  {
    "id": "hsw-causes-of-fire-and-fire-prevention",
    "title": "Causes of Fire and Fire Prevention",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "causes of fire",
      "fire triangle",
      "fire prevention",
      "fire spread",
      "fire risk assessment"
    ],
    "examFocus": [
      "Understand what is needed for a fire to start",
      "Know common causes of fire in construction",
      "Recognise basic methods of fire prevention"
    ],
    "keyPoints": [
      "Many workplace fires can be prevented by following basic fire safety rules.",
      "Arson is a major cause of fire, so good site security is important.",
      "Faulty tools, damaged equipment and badly installed electrical systems can start fires.",
      "Employers or the responsible person must complete a fire risk assessment.",
      "A fire needs three things to burn: heat, fuel and oxygen.",
      "If one part of the fire triangle is removed, the fire will go out.",
      "Fire can spread by direct burning, convection, conduction and radiation.",
      "Good housekeeping helps prevent fires by removing waste that could act as fuel.",
      "Fire prevention includes safe storage of flammable materials, controlling hot work, clearing spills and keeping escape routes clear.",
      "Unsafe fire risks should be reported to a supervisor immediately."
    ],
    "commonMistakes": [
      "Letting waste build up in work areas.",
      "Blocking fire doors or escape routes.",
      "Ignoring faulty electrical tools or unsafe conditions.",
      "Storing flammable materials carelessly."
    ],
    "miniCheck": [
      {
        "question": "What three things are needed for a fire to burn?",
        "answer": "Heat, fuel and oxygen."
      },
      {
        "question": "What is the purpose of a fire risk assessment?",
        "answer": "To identify fire hazards, people at risk and the controls needed."
      },
      {
        "question": "Give one way to help prevent fires on site.",
        "answer": "Keep work areas tidy, store flammable materials safely or keep escape routes clear."
      }
    ]
  },
  {
    "id": "hsw-actions-to-take-on-discovering-a-fire",
    "title": "Actions to Take on Discovering a Fire",
    "topic": "Health, safety and welfare in construction",
    "topicOrder": 1,
    "keywords": [
      "fire emergency",
      "raise the alarm",
      "assembly point",
      "escape route",
      "fire action"
    ],
    "examFocus": [
      "Know the correct steps to follow when a fire is discovered",
      "Understand why assembly points matter",
      "Recognise the importance of following fire action signs"
    ],
    "keyPoints": [
      "Workers must know how to raise the alarm, where to escape and where to assemble.",
      "Fire action notices explain the emergency procedure and should be followed.",
      "If you discover a fire, raise the alarm using the system used by your workplace.",
      "Warn other people nearby about the danger.",
      "Leave the building by the nearest emergency escape route.",
      "Do not stop to collect personal belongings.",
      "Go straight to the correct assembly point and stay there.",
      "Do not leave until you have been accounted for and given instructions.",
      "Do not go back into the building until authorised.",
      "If it is safe, close doors behind you to help slow the spread of fire."
    ],
    "commonMistakes": [
      "Delaying evacuation to collect belongings.",
      "Going to the wrong assembly point.",
      "Leaving before being accounted for.",
      "Re-entering the building without permission."
    ],
    "miniCheck": [
      {
        "question": "What should you do first if you discover a fire?",
        "answer": "Raise the alarm."
      },
      {
        "question": "Should you stop to collect your belongings during evacuation?",
        "answer": "No."
      },
      {
        "question": "Why must you go to the correct assembly point?",
        "answer": "So everyone can be accounted for quickly and safely."
      }
    ]
  }
]