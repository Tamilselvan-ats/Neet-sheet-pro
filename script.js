// script.js - Complete NEET 2026 with ALL topics + Filters + Search + Random Topic 

// ==================== COMPLETE NEET 2026 TOPICS ====================
const problemData = [
    // ========== BIOLOGY - Class 11 (22 Topics) ==========
    // Unit 1: Diversity of Living Organisms
    { subject: "Biology", chapter: "Diversity in Living World", topic: "The Living World", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo101.pdf", video: "https://www.youtube.com/results?search_query=the+living+world+NEET+one+shot" } },
    { subject: "Biology", chapter: "Diversity in Living World", topic: "Biological Classification", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo102.pdf", video: "https://www.youtube.com/results?search_query=biological+classification+NEET+one+shot" } },
    { subject: "Biology", chapter: "Diversity in Living World", topic: "Plant Kingdom", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo103.pdf", video: "https://www.youtube.com/results?search_query=plant+kingdom+NEET+one+shot" } },
    { subject: "Biology", chapter: "Diversity in Living World", topic: "Animal Kingdom", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo104.pdf", video: "https://www.youtube.com/results?search_query=animal+kingdom+NEET+one+shot" } },
    
    // Unit 2: Structural Organisation in Plants and Animals
    { subject: "Biology", chapter: "Structural Organisation", topic: "Morphology of Flowering Plants", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo105.pdf", video: "https://www.youtube.com/results?search_query=morphology+of+flowering+plants+NEET" } },
    { subject: "Biology", chapter: "Structural Organisation", topic: "Anatomy of Flowering Plants", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo106.pdf", video: "https://www.youtube.com/results?search_query=anatomy+of+flowering+plants+NEET" } },
    { subject: "Biology", chapter: "Structural Organisation", topic: "Structural Organisation in Animals", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo107.pdf", video: "https://www.youtube.com/results?search_query=structural+organisation+in+animals+NEET" } },
    
    // Unit 3: Cell Structure and Function
    { subject: "Biology", chapter: "Cell Biology", topic: "Cell: The Unit of Life", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo108.pdf", video: "https://www.youtube.com/results?search_query=cell+the+unit+of+life+NEET" } },
    { subject: "Biology", chapter: "Cell Biology", topic: "Biomolecules", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo109.pdf", video: "https://www.youtube.com/results?search_query=biomolecules+NEET+one+shot" } },
    { subject: "Biology", chapter: "Cell Biology", topic: "Cell Cycle and Cell Division", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo110.pdf", video: "https://www.youtube.com/results?search_query=cell+cycle+and+division+NEET" } },
    
    // Unit 4: Plant Physiology
    { subject: "Biology", chapter: "Plant Physiology", topic: "Transport in Plants", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo111.pdf", video: "https://www.youtube.com/results?search_query=transport+in+plants+NEET" } },
    { subject: "Biology", chapter: "Plant Physiology", topic: "Mineral Nutrition", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo112.pdf", video: "https://www.youtube.com/results?search_query=mineral+nutrition+NEET" } },
    { subject: "Biology", chapter: "Plant Physiology", topic: "Photosynthesis in Higher Plants", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo113.pdf", video: "https://www.youtube.com/results?search_query=photosynthesis+NEET+one+shot" } },
    { subject: "Biology", chapter: "Plant Physiology", topic: "Respiration in Plants", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo114.pdf", video: "https://www.youtube.com/results?search_query=respiration+in+plants+NEET" } },
    { subject: "Biology", chapter: "Plant Physiology", topic: "Plant Growth and Development", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo115.pdf", video: "https://www.youtube.com/results?search_query=plant+growth+and+development+NEET" } },
    
    // Unit 5: Human Physiology
    { subject: "Biology", chapter: "Human Physiology", topic: "Digestion and Absorption", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo116.pdf", video: "https://www.youtube.com/results?search_query=digestion+and+absorption+NEET" } },
    { subject: "Biology", chapter: "Human Physiology", topic: "Breathing and Exchange of Gases", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo117.pdf", video: "https://www.youtube.com/results?search_query=breathing+and+exchange+of+gases+NEET" } },
    { subject: "Biology", chapter: "Human Physiology", topic: "Body Fluids and Circulation", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo118.pdf", video: "https://www.youtube.com/results?search_query=body+fluids+and+circulation+NEET" } },
    { subject: "Biology", chapter: "Human Physiology", topic: "Excretory Products and Their Elimination", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo119.pdf", video: "https://www.youtube.com/results?search_query=excretory+products+NEET" } },
    { subject: "Biology", chapter: "Human Physiology", topic: "Locomotion and Movement", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo120.pdf", video: "https://www.youtube.com/results?search_query=locomotion+and+movement+NEET" } },
    { subject: "Biology", chapter: "Human Physiology", topic: "Neural Control and Coordination", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo121.pdf", video: "https://www.youtube.com/results?search_query=neural+control+and+coordination+NEET" } },
    { subject: "Biology", chapter: "Human Physiology", topic: "Chemical Coordination and Integration", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kebo122.pdf", video: "https://www.youtube.com/results?search_query=chemical+coordination+NEET" } }, 

    // ========== BIOLOGY - Class 12 (16 Topics) ==========
    // Unit 6: Reproduction
    { subject: "Biology", chapter: "Reproduction", topic: "Reproduction in Organisms", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo101.pdf", video: "https://www.youtube.com/results?search_query=reproduction+in+organisms+NEET" } },
    { subject: "Biology", chapter: "Reproduction", topic: "Sexual Reproduction in Flowering Plants", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo102.pdf", video: "https://www.youtube.com/results?search_query=sexual+reproduction+in+flowering+plants+NEET" } },
    { subject: "Biology", chapter: "Reproduction", topic: "Human Reproduction", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo103.pdf", video: "https://www.youtube.com/results?search_query=human+reproduction+NEET+one+shot" } },
    { subject: "Biology", chapter: "Reproduction", topic: "Reproductive Health", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo104.pdf", video: "https://www.youtube.com/results?search_query=reproductive+health+NEET" } },
    
    // Unit 7: Genetics and Evolution
    { subject: "Biology", chapter: "Genetics and Evolution", topic: "Principles of Inheritance and Variation", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo105.pdf", video: "https://www.youtube.com/results?search_query=principles+of+inheritance+NEET" } },
    { subject: "Biology", chapter: "Genetics and Evolution", topic: "Molecular Basis of Inheritance", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo106.pdf", video: "https://www.youtube.com/results?search_query=molecular+basis+of+inheritance+NEET" } },
    { subject: "Biology", chapter: "Genetics and Evolution", topic: "Evolution", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo107.pdf", video: "https://www.youtube.com/results?search_query=evolution+NEET" } },
    
    // Unit 8: Biology in Human Welfare
    { subject: "Biology", chapter: "Biology in Human Welfare", topic: "Human Health and Disease", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo108.pdf", video: "https://www.youtube.com/results?search_query=human+health+and+disease+NEET" } },
    { subject: "Biology", chapter: "Biology in Human Welfare", topic: "Strategies for Enhancement in Food Production", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo109.pdf", video: "https://www.youtube.com/results?search_query=food+production+strategies+NEET" } },
    { subject: "Biology", chapter: "Biology in Human Welfare", topic: "Microbes in Human Welfare", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo110.pdf", video: "https://www.youtube.com/results?search_query=microbes+in+human+welfare+NEET" } },
    
    // Unit 9: Biotechnology
    { subject: "Biology", chapter: "Biotechnology", topic: "Biotechnology: Principles and Processes", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo111.pdf", video: "https://www.youtube.com/results?search_query=biotechnology+principles+and+processes+NEET" } },
    { subject: "Biology", chapter: "Biotechnology", topic: "Biotechnology and its Applications", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo112.pdf", video: "https://www.youtube.com/results?search_query=biotechnology+applications+NEET" } },
    
    // Unit 10: Ecology
    { subject: "Biology", chapter: "Ecology", topic: "Organisms and Populations", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo113.pdf", video: "https://www.youtube.com/results?search_query=organisms+and+populations+NEET" } },
    { subject: "Biology", chapter: "Ecology", topic: "Ecosystem", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo114.pdf", video: "https://www.youtube.com/results?search_query=ecosystem+NEET" } },
    { subject: "Biology", chapter: "Ecology", topic: "Biodiversity and Conservation", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo115.pdf", video: "https://www.youtube.com/results?search_query=biodiversity+and+conservation+NEET" } },
    { subject: "Biology", chapter: "Ecology", topic: "Environmental Issues", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lebo116.pdf", video: "https://www.youtube.com/results?search_query=environmental+issues+NEET" } }, 

    // ========== CHEMISTRY - Class 11 (9 Topics) ==========
    { subject: "Chemistry", chapter: "Some Basic Concepts", topic: "Some Basic Concepts of Chemistry", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech101.pdf", video: "https://www.youtube.com/results?search_query=some+basic+concepts+of+chemistry+NEET" } },
    { subject: "Chemistry", chapter: "Atomic Structure", topic: "Structure of Atom", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech102.pdf", video: "https://www.youtube.com/results?search_query=structure+of+atom+NEET+one+shot" } },
    { subject: "Chemistry", chapter: "Periodic Table", topic: "Classification of Elements and Periodicity", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech103.pdf", video: "https://www.youtube.com/results?search_query=periodic+table+NEET" } },
    { subject: "Chemistry", chapter: "Chemical Bonding", topic: "Chemical Bonding and Molecular Structure", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech104.pdf", video: "https://www.youtube.com/results?search_query=chemical+bonding+NEET+one+shot" } },
    { subject: "Chemistry", chapter: "Thermodynamics", topic: "Thermodynamics", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech105.pdf", video: "https://www.youtube.com/results?search_query=thermodynamics+chemistry+NEET" } },
    { subject: "Chemistry", chapter: "Equilibrium", topic: "Equilibrium", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech106.pdf", video: "https://www.youtube.com/results?search_query=chemical+equilibrium+NEET" } },
    { subject: "Chemistry", chapter: "Redox Reactions", topic: "Redox Reactions", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech107.pdf", video: "https://www.youtube.com/results?search_query=redox+reactions+NEET" } },
    { subject: "Chemistry", chapter: "Organic Chemistry", topic: "Organic Chemistry - Basic Principles", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech108.pdf", video: "https://www.youtube.com/results?search_query=general+organic+chemistry+NEET" } },
    { subject: "Chemistry", chapter: "Hydrocarbons", topic: "Hydrocarbons", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/kech109.pdf", video: "https://www.youtube.com/results?search_query=hydrocarbons+NEET+one+shot" } }, 

    // ========== CHEMISTRY - Class 12 (15 Topics) ==========
    { subject: "Chemistry", chapter: "Solid State", topic: "The Solid State", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech101.pdf", video: "https://www.youtube.com/results?search_query=solid+state+NEET" } },
    { subject: "Chemistry", chapter: "Solutions", topic: "Solutions", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech102.pdf", video: "https://www.youtube.com/results?search_query=solutions+chemistry+NEET" } },
    { subject: "Chemistry", chapter: "Electrochemistry", topic: "Electrochemistry", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech103.pdf", video: "https://www.youtube.com/results?search_query=electrochemistry+NEET+one+shot" } },
    { subject: "Chemistry", chapter: "Chemical Kinetics", topic: "Chemical Kinetics", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech104.pdf", video: "https://www.youtube.com/results?search_query=chemical+kinetics+NEET" } },
    { subject: "Chemistry", chapter: "Surface Chemistry", topic: "Surface Chemistry", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech105.pdf", video: "https://www.youtube.com/results?search_query=surface+chemistry+NEET" } },
    { subject: "Chemistry", chapter: "p-Block Elements", topic: "p-Block Elements", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech106.pdf", video: "https://www.youtube.com/results?search_query=p+block+elements+NEET" } },
    { subject: "Chemistry", chapter: "d and f Block Elements", topic: "d and f Block Elements", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech107.pdf", video: "https://www.youtube.com/results?search_query=d+and+f+block+elements+NEET" } },
    { subject: "Chemistry", chapter: "Coordination Compounds", topic: "Coordination Compounds", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech108.pdf", video: "https://www.youtube.com/results?search_query=coordination+compounds+NEET+one+shot" } },
    { subject: "Chemistry", chapter: "Haloalkanes", topic: "Haloalkanes and Haloarenes", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech109.pdf", video: "https://www.youtube.com/results?search_query=haloalkanes+and+haloarenes+NEET" } },
    { subject: "Chemistry", chapter: "Alcohols", topic: "Alcohols, Phenols and Ethers", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech110.pdf", video: "https://www.youtube.com/results?search_query=alcohols+phenols+and+ethers+NEET" } },
    { subject: "Chemistry", chapter: "Aldehydes", topic: "Aldehydes, Ketones and Carboxylic Acids", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech111.pdf", video: "https://www.youtube.com/results?search_query=aldehydes+ketones+carboxylic+acids+NEET" } },
    { subject: "Chemistry", chapter: "Amines", topic: "Amines", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech112.pdf", video: "https://www.youtube.com/results?search_query=amines+NEET" } },
    { subject: "Chemistry", chapter: "Biomolecules", topic: "Biomolecules", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech113.pdf", video: "https://www.youtube.com/results?search_query=biomolecules+chemistry+NEET" } },
    { subject: "Chemistry", chapter: "Polymers", topic: "Polymers", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech114.pdf", video: "https://www.youtube.com/results?search_query=polymers+NEET" } },
    { subject: "Chemistry", chapter: "Everyday Life", topic: "Chemistry in Everyday Life", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/lech115.pdf", video: "https://www.youtube.com/results?search_query=chemistry+in+everyday+life+NEET" } }, 

    // ========== PHYSICS - Class 11 (14 Topics) ==========
    { subject: "Physics", chapter: "Physical World", topic: "Physical World and Measurement", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph101.pdf", video: "https://www.youtube.com/results?search_query=units+and+measurements+NEET" } },
    { subject: "Physics", chapter: "Kinematics", topic: "Motion in a Straight Line", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph102.pdf", video: "https://www.youtube.com/results?search_query=motion+in+a+straight+line+NEET" } },
    { subject: "Physics", chapter: "Kinematics", topic: "Motion in a Plane", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph103.pdf", video: "https://www.youtube.com/results?search_query=motion+in+a+plane+NEET" } },
    { subject: "Physics", chapter: "Laws of Motion", topic: "Laws of Motion", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph104.pdf", video: "https://www.youtube.com/results?search_query=laws+of+motion+NEET+one+shot" } },
    { subject: "Physics", chapter: "Work, Energy & Power", topic: "Work, Energy and Power", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph105.pdf", video: "https://www.youtube.com/results?search_query=work+energy+and+power+NEET" } },
    { subject: "Physics", chapter: "Rotational Motion", topic: "System of Particles and Rotational Motion", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph106.pdf", video: "https://www.youtube.com/results?search_query=rotational+motion+NEET+one+shot" } },
    { subject: "Physics", chapter: "Gravitation", topic: "Gravitation", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph107.pdf", video: "https://www.youtube.com/results?search_query=gravitation+NEET" } },
    { subject: "Physics", chapter: "Properties of Matter", topic: "Mechanical Properties of Solids", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph108.pdf", video: "https://www.youtube.com/results?search_query=mechanical+properties+of+solids+NEET" } },
    { subject: "Physics", chapter: "Properties of Matter", topic: "Mechanical Properties of Fluids", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph109.pdf", video: "https://www.youtube.com/results?search_query=mechanical+properties+of+fluids+NEET" } },
    { subject: "Physics", chapter: "Thermal Physics", topic: "Thermal Properties of Matter", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph110.pdf", video: "https://www.youtube.com/results?search_query=thermal+properties+of+matter+NEET" } },
    { subject: "Physics", chapter: "Thermodynamics", topic: "Thermodynamics", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph111.pdf", video: "https://www.youtube.com/results?search_query=thermodynamics+physics+NEET" } },
    { subject: "Physics", chapter: "Kinetic Theory", topic: "Kinetic Theory", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph112.pdf", video: "https://www.youtube.com/results?search_query=kinetic+theory+NEET" } },
    { subject: "Physics", chapter: "Oscillations", topic: "Oscillations", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph113.pdf", video: "https://www.youtube.com/results?search_query=oscillations+NEET" } },
    { subject: "Physics", chapter: "Waves", topic: "Waves", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/keph114.pdf", video: "https://www.youtube.com/results?search_query=waves+physics+NEET" } }, 

    // ========== PHYSICS - Class 12 (14 Topics) ==========
    { subject: "Physics", chapter: "Electrostatics", topic: "Electric Charges and Fields", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph101.pdf", video: "https://www.youtube.com/results?search_query=electric+charges+and+fields+NEET" } },
    { subject: "Physics", chapter: "Electrostatics", topic: "Electrostatic Potential and Capacitance", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph102.pdf", video: "https://www.youtube.com/results?search_query=electrostatic+potential+and+capacitance+NEET" } },
    { subject: "Physics", chapter: "Current Electricity", topic: "Current Electricity", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph103.pdf", video: "https://www.youtube.com/results?search_query=current+electricity+NEET+one+shot" } },
    { subject: "Physics", chapter: "Magnetism", topic: "Moving Charges and Magnetism", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph104.pdf", video: "https://www.youtube.com/results?search_query=moving+charges+and+magnetism+NEET" } },
    { subject: "Physics", chapter: "Magnetism", topic: "Magnetism and Matter", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph105.pdf", video: "https://www.youtube.com/results?search_query=magnetism+and+matter+NEET" } },
    { subject: "Physics", chapter: "Electromagnetic Induction", topic: "Electromagnetic Induction", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph106.pdf", video: "https://www.youtube.com/results?search_query=electromagnetic+induction+NEET" } },
    { subject: "Physics", chapter: "Alternating Current", topic: "Alternating Current", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph107.pdf", video: "https://www.youtube.com/results?search_query=alternating+current+NEET" } },
    { subject: "Physics", chapter: "EM Waves", topic: "Electromagnetic Waves", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph108.pdf", video: "https://www.youtube.com/results?search_query=electromagnetic+waves+NEET" } },
    { subject: "Physics", chapter: "Optics", topic: "Ray Optics and Optical Instruments", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph109.pdf", video: "https://www.youtube.com/results?search_query=ray+optics+NEET+one+shot" } },
    { subject: "Physics", chapter: "Optics", topic: "Wave Optics", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph110.pdf", video: "https://www.youtube.com/results?search_query=wave+optics+NEET" } },
    { subject: "Physics", chapter: "Modern Physics", topic: "Dual Nature of Radiation and Matter", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph111.pdf", video: "https://www.youtube.com/results?search_query=dual+nature+of+radiation+and+matter+NEET" } },
    { subject: "Physics", chapter: "Modern Physics", topic: "Atoms", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph112.pdf", video: "https://www.youtube.com/results?search_query=atoms+physics+NEET" } },
    { subject: "Physics", chapter: "Modern Physics", topic: "Nuclei", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph113.pdf", video: "https://www.youtube.com/results?search_query=nuclei+physics+NEET" } },
    { subject: "Physics", chapter: "Semiconductors", topic: "Semiconductor Electronics", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph114.pdf", video: "https://www.youtube.com/results?search_query=semiconductor+NEET+one+shot" } },
    { subject: "Physics", chapter: "Communication", topic: "Communication Systems", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook/pdf/leph115.pdf", video: "https://www.youtube.com/results?search_query=communication+systems+NEET" } }
]; 

// ==================== END OF COMPLETE DATA ==================== 

// ----- DOM Elements -----
const tableBody = document.getElementById('table-body');
const totalCountEl = document.getElementById('total-count');
const solvedCountEl = document.getElementById('solved-count');
const progressPercentageEl = document.getElementById('progress-percentage');
const progressFill = document.getElementById('progress-fill');
const subjectFilter = document.getElementById('subjectFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const searchInput = document.getElementById('searchInput');
const randomTopicBtn = document.getElementById('randomTopicBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const filterInfo = document.getElementById('filterInfo'); 

// ----- State -----
let solvedStatus = JSON.parse(localStorage.getItem('neetSheetProgress')) || {}; 

// ----- Helper: Get filtered data based on current filters -----
function getFilteredData() {
    const subject = subjectFilter.value;
    const difficulty = difficultyFilter.value;
    const searchTerm = searchInput.value.trim().toLowerCase(); 

    return problemData.filter(item => {
        if (subject !== 'all' && item.subject !== subject) return false;
        if (difficulty !== 'all' && item.difficulty !== difficulty) return false;
        if (searchTerm) {
            return item.topic.toLowerCase().includes(searchTerm) || 
                   item.chapter.toLowerCase().includes(searchTerm);
        }
        return true;
    });
} 

// ----- Render table with current filters -----
function renderTable() {
    const filteredData = getFilteredData();
    
    filterInfo.textContent = `Showing ${filteredData.length} of ${problemData.length} topics`;
    
    tableBody.innerHTML = '';
    filteredData.forEach((item, index) => {
        const originalIndex = problemData.findIndex(p => 
            p.subject === item.subject && p.topic === item.topic && p.chapter === item.chapter
        );
        
        const row = document.createElement('tr');
        
        // Status cell
        const statusCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'status-checkbox';
        checkbox.dataset.index = originalIndex;
        checkbox.checked = solvedStatus[originalIndex] || false;
        checkbox.addEventListener('change', updateProgress);
        statusCell.appendChild(checkbox);
        
        // Subject cell with badge
        const subjectCell = document.createElement('td');
        const subjectSpan = document.createElement('span');
        subjectSpan.className = `subject-badge ${item.subject.toLowerCase()}`;
        subjectSpan.textContent = item.subject;
        subjectCell.appendChild(subjectSpan);
        
        // Topic cell
        const topicCell = document.createElement('td');
        topicCell.className = 'topic-name';
        topicCell.textContent = item.topic;
        
        // Chapter cell
        const chapterCell = document.createElement('td');
        chapterCell.className = 'chapter-name';
        chapterCell.textContent = item.chapter;
        
        // Difficulty cell with badge
        const diffCell = document.createElement('td');
        const diffSpan = document.createElement('span');
        diffSpan.className = `difficulty-badge ${item.difficulty}`;
        diffSpan.textContent = item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1);
        diffCell.appendChild(diffSpan);
        
        // Resources cell
        const resourceCell = document.createElement('td');
        if (item.resources.notes) {
            const notesLink = document.createElement('a');
            notesLink.href = item.resources.notes;
            notesLink.className = 'resource-link notes';
            notesLink.textContent = '📄 Notes';
            notesLink.target = '_blank';
            resourceCell.appendChild(notesLink);
        }
        if (item.resources.video) {
            const videoLink = document.createElement('a');
            videoLink.href = item.resources.video;
            videoLink.className = 'resource-link video';
            videoLink.textContent = '🎥 Video';
            videoLink.target = '_blank';
            resourceCell.appendChild(videoLink);
        }
        
        row.appendChild(statusCell);
        row.appendChild(subjectCell);
        row.appendChild(topicCell);
        row.appendChild(chapterCell);
        row.appendChild(diffCell);
        row.appendChild(resourceCell);
        
        tableBody.appendChild(row);
    });
    
    totalCountEl.textContent = problemData.length;
    updateProgressDisplay();
} 

// ----- Update progress (called when checkbox changes) -----
function updateProgress() {
    document.querySelectorAll('.status-checkbox').forEach(checkbox => {
        solvedStatus[checkbox.dataset.index] = checkbox.checked;
    });
    localStorage.setItem('neetSheetProgress', JSON.stringify(solvedStatus));
    updateProgressDisplay();
} 

// ----- Update progress stats (based on full dataset) -----
function updateProgressDisplay() {
    const solvedCount = Object.values(solvedStatus).filter(v => v).length;
    const total = problemData.length;
    const percentage = total ? Math.round((solvedCount / total) * 100) : 0;
    
    solvedCountEl.textContent = solvedCount;
    progressPercentageEl.textContent = percentage + '%';
    progressFill.style.width = percentage + '%';
} 

// ----- Random unfinished topic picker -----
function pickRandomTopic() {
    const unfinishedIndices = [];
    problemData.forEach((_, idx) => {
        if (!solvedStatus[idx]) unfinishedIndices.push(idx);
    });
    
    if (unfinishedIndices.length === 0) {
        alert('🎉 Congratulations! You have completed all topics!');
        return;
    }
    
    const randomIndex = unfinishedIndices[Math.floor(Math.random() * unfinishedIndices.length)];
    const randomTopic = problemData[randomIndex];
    
    const rows = tableBody.querySelectorAll('tr');
    for (let row of rows) {
        const topicCell = row.cells[2];
        if (topicCell && topicCell.textContent === randomTopic.topic) {
            const subjectCell = row.cells[1].textContent;
            if (subjectCell === randomTopic.subject) {
                row.classList.add('highlight-row');
                setTimeout(() => row.classList.remove('highlight-row'), 1500);
                row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                break;
            }
        }
    }
    
    alert(`🎯 Revise: ${randomTopic.topic} (${randomTopic.subject} - ${randomTopic.chapter})`);
} 

// ----- Reset all filters to default -----
function resetFilters() {
    subjectFilter.value = 'all';
    difficultyFilter.value = 'all';
    searchInput.value = '';
    renderTable();
} 

// ----- Event listeners -----
subjectFilter.addEventListener('change', renderTable);
difficultyFilter.addEventListener('change', renderTable);
searchInput.addEventListener('input', renderTable);
resetFiltersBtn.addEventListener('click', resetFilters);
randomTopicBtn.addEventListener('click', pickRandomTopic); 

// Initial render
renderTable();