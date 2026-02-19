// script.js – Complete NEET 2026 data with working resource links

const problemData = [
    // ========== BIOLOGY – Class 11 ==========
    { topic: "The Living World", problem: "Taxonomic categories, tools", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo1=0-16", video: "https://www.youtube.com/results?search_query=NEET+The+Living+World" } },
    { topic: "Biological Classification", problem: "Five kingdoms, viruses, lichens", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo2=0-10", video: "https://www.youtube.com/results?search_query=NEET+Biological+Classification" } },
    { topic: "Plant Kingdom", problem: "Algae, bryophytes, pteridophytes, gymnosperms", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo3=0-12", video: "https://www.youtube.com/results?search_query=NEET+Plant+Kingdom" } },
    { topic: "Animal Kingdom", problem: "Phylum classification, examples", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo4=0-16", video: "https://www.youtube.com/results?search_query=NEET+Animal+Kingdom" } },
    { topic: "Morphology of Flowering Plants", problem: "Root, stem, leaf, inflorescence", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo5=0-14", video: "https://www.youtube.com/results?search_query=NEET+Morphology+of+Flowering+Plants" } },
    { topic: "Anatomy of Flowering Plants", problem: "Tissues, tissue systems", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo6=0-12", video: "https://www.youtube.com/results?search_query=NEET+Anatomy+of+Flowering+Plants" } },
    { topic: "Structural Organisation in Animals", problem: "Epithelial, connective, muscular tissues", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo7=0-14", video: "https://www.youtube.com/results?search_query=NEET+Structural+Organisation+in+Animals" } },
    { topic: "Cell: The Unit of Life", problem: "Cell theory, prokaryotic vs eukaryotic", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo8=0-12", video: "https://www.youtube.com/results?search_query=NEET+Cell+The+Unit+of+Life" } },
    { topic: "Biomolecules", problem: "Proteins, enzymes, carbohydrates, lipids", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo9=0-14", video: "https://www.youtube.com/results?search_query=NEET+Biomolecules" } },
    { topic: "Cell Cycle & Cell Division", problem: "Mitosis, meiosis, significance", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo10=0-10", video: "https://www.youtube.com/results?search_query=NEET+Cell+Cycle+and+Division" } },
    { topic: "Transport in Plants", problem: "Water potential, osmosis, transpiration", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo11=0-14", video: "https://www.youtube.com/results?search_query=NEET+Transport+in+Plants" } },
    { topic: "Mineral Nutrition", problem: "Essential elements, deficiency, nitrogen cycle", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo12=0-12", video: "https://www.youtube.com/results?search_query=NEET+Mineral+Nutrition" } },
    { topic: "Photosynthesis in Higher Plants", problem: "Light reaction, Calvin cycle, C4 plants", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo13=0-16", video: "https://www.youtube.com/results?search_query=NEET+Photosynthesis" } },
    { topic: "Respiration in Plants", problem: "Glycolysis, Krebs cycle, ETS", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo14=0-12", video: "https://www.youtube.com/results?search_query=NEET+Respiration+in+Plants" } },
    { topic: "Plant Growth & Development", problem: "Phytohormones, photoperiodism", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo15=0-14", video: "https://www.youtube.com/results?search_query=NEET+Plant+Growth+and+Development" } },
    { topic: "Digestion & Absorption", problem: "Alimentary canal, digestive glands", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo16=0-14", video: "https://www.youtube.com/results?search_query=NEET+Digestion+and+Absorption" } },
    { topic: "Breathing & Exchange of Gases", problem: "Mechanism of breathing, gas transport", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo17=0-12", video: "https://www.youtube.com/results?search_query=NEET+Breathing+and+Exchange+of+Gases" } },
    { topic: "Body Fluids & Circulation", problem: "Blood, lymph, cardiac cycle, ECG", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo18=0-16", video: "https://www.youtube.com/results?search_query=NEET+Body+Fluids+and+Circulation" } },
    { topic: "Excretory Products & Elimination", problem: "Nephron, urine formation", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo19=0-14", video: "https://www.youtube.com/results?search_query=NEET+Excretory+Products" } },
    { topic: "Locomotion & Movement", problem: "Skeletal system, joints, muscles", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo20=0-14", video: "https://www.youtube.com/results?search_query=NEET+Locomotion+and+Movement" } },
    { topic: "Neural Control & Coordination", problem: "Neuron, CNS, reflex action", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo21=0-14", video: "https://www.youtube.com/results?search_query=NEET+Neural+Control+and+Coordination" } },
    { topic: "Chemical Coordination & Integration", problem: "Endocrine glands, hormones", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kebo22=0-14", video: "https://www.youtube.com/results?search_query=NEET+Chemical+Coordination" } },

    // ========== BIOLOGY – Class 12 ==========
    { topic: "Reproduction in Organisms", problem: "Asexual & sexual reproduction", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo1=0-12", video: "https://www.youtube.com/results?search_query=NEET+Reproduction+in+Organisms" } },
    { topic: "Sexual Reproduction in Flowering Plants", problem: "Structure of flower, pollination, fertilisation", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo2=0-14", video: "https://www.youtube.com/results?search_query=NEET+Sexual+Reproduction+in+Flowering+Plants" } },
    { topic: "Human Reproduction", problem: "Male & female reproductive systems, gametogenesis", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo3=0-14", video: "https://www.youtube.com/results?search_query=NEET+Human+Reproduction" } },
    { topic: "Reproductive Health", problem: "Contraception, STD, assisted reproductive technologies", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo4=0-10", video: "https://www.youtube.com/results?search_query=NEET+Reproductive+Health" } },
    { topic: "Principles of Inheritance & Variation", problem: "Mendelian genetics, chromosomal disorders", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo5=0-20", video: "https://www.youtube.com/results?search_query=NEET+Principles+of+Inheritance" } },
    { topic: "Molecular Basis of Inheritance", problem: "DNA replication, transcription, translation", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo6=0-18", video: "https://www.youtube.com/results?search_query=NEET+Molecular+Basis+of+Inheritance" } },
    { topic: "Evolution", problem: "Theories, evidence, human evolution", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo7=0-14", video: "https://www.youtube.com/results?search_query=NEET+Evolution" } },
    { topic: "Human Health & Disease", problem: "Pathogens, immunity, cancer, AIDS", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo8=0-18", video: "https://www.youtube.com/results?search_query=NEET+Human+Health+and+Disease" } },
    { topic: "Strategies for Enhancement in Food Production", problem: "Animal husbandry, plant breeding", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo9=0-12", video: "https://www.youtube.com/results?search_query=NEET+Strategies+for+Enhancement+in+Food+Production" } },
    { topic: "Microbes in Human Welfare", problem: "Microbes in household, industry, sewage treatment", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo10=0-12", video: "https://www.youtube.com/results?search_query=NEET+Microbes+in+Human+Welfare" } },
    { topic: "Biotechnology: Principles & Processes", problem: "Tools, techniques, cloning vectors", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo11=0-16", video: "https://www.youtube.com/results?search_query=NEET+Biotechnology+Principles+and+Processes" } },
    { topic: "Biotechnology & its Applications", problem: "Transgenic animals, gene therapy, molecular diagnosis", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo12=0-14", video: "https://www.youtube.com/results?search_query=NEET+Biotechnology+Applications" } },
    { topic: "Organisms & Populations", problem: "Ecology, population interactions", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo13=0-16", video: "https://www.youtube.com/results?search_query=NEET+Organisms+and+Populations" } },
    { topic: "Ecosystem", problem: "Structure, function, productivity, decomposition", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo14=0-12", video: "https://www.youtube.com/results?search_query=NEET+Ecosystem" } },
    { topic: "Biodiversity & Conservation", problem: "Patterns, importance, conservation methods", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo15=0-12", video: "https://www.youtube.com/results?search_query=NEET+Biodiversity+and+Conservation" } },
    { topic: "Environmental Issues", problem: "Pollution, greenhouse effect, ozone depletion", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lebo16=0-16", video: "https://www.youtube.com/results?search_query=NEET+Environmental+Issues" } },

    // ========== CHEMISTRY – Class 11 ==========
    { topic: "Some Basic Concepts of Chemistry", problem: "Mole concept, stoichiometry, limiting reagent", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech1=0-10", video: "https://www.youtube.com/results?search_query=NEET+Some+Basic+Concepts+of+Chemistry" } },
    { topic: "Structure of Atom", problem: "Quantum numbers, electronic configuration", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech2=0-18", video: "https://www.youtube.com/results?search_query=NEET+Structure+of+Atom" } },
    { topic: "Classification of Elements & Periodicity", problem: "Periodic trends, s,p,d,f blocks", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech3=0-16", video: "https://www.youtube.com/results?search_query=NEET+Classification+of+Elements" } },
    { topic: "Chemical Bonding & Molecular Structure", problem: "VSEPR, hybridisation, MOT", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech4=0-20", video: "https://www.youtube.com/results?search_query=NEET+Chemical+Bonding" } },
    { topic: "Thermodynamics", problem: "First law, enthalpy, Hess's law", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech5=0-16", video: "https://www.youtube.com/results?search_query=NEET+Thermodynamics+Chemistry" } },
    { topic: "Equilibrium", problem: "Chemical equilibrium, Le Chatelier's principle", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech6=0-20", video: "https://www.youtube.com/results?search_query=NEET+Chemical+Equilibrium" } },
    { topic: "Redox Reactions", problem: "Oxidation number, balancing reactions", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech7=0-12", video: "https://www.youtube.com/results?search_query=NEET+Redox+Reactions" } },
    { topic: "Organic Chemistry – Basic Principles", problem: "GOC, resonance, hyperconjugation", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech8=0-18", video: "https://www.youtube.com/results?search_query=NEET+General+Organic+Chemistry" } },
    { topic: "Hydrocarbons", problem: "Alkanes, alkenes, alkynes, aromatic compounds", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?kech9=0-22", video: "https://www.youtube.com/results?search_query=NEET+Hydrocarbons" } },

    // ========== CHEMISTRY – Class 12 ==========
    { topic: "Solid State", problem: "Crystal lattices, unit cells, defects", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech1=0-12", video: "https://www.youtube.com/results?search_query=NEET+Solid+State" } },
    { topic: "Solutions", problem: "Concentration, colligative properties, Raoult's law", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech2=0-16", video: "https://www.youtube.com/results?search_query=NEET+Solutions+Chemistry" } },
    { topic: "Electrochemistry", problem: "Galvanic cells, Nernst equation, conductance", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech3=0-18", video: "https://www.youtube.com/results?search_query=NEET+Electrochemistry" } },
    { topic: "Chemical Kinetics", problem: "Rate laws, order, half-life, Arrhenius equation", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech4=0-14", video: "https://www.youtube.com/results?search_query=NEET+Chemical+Kinetics" } },
    { topic: "Surface Chemistry", problem: "Adsorption, catalysis, colloids", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech5=0-12", video: "https://www.youtube.com/results?search_query=NEET+Surface+Chemistry" } },
    { topic: "p-Block Elements", problem: "Groups 15,16,17,18 compounds", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech6=0-20", video: "https://www.youtube.com/results?search_query=NEET+p+Block+Elements" } },
    { topic: "d- & f-Block Elements", problem: "Transition elements, lanthanoids, actinoids", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech7=0-16", video: "https://www.youtube.com/results?search_query=NEET+d+and+f+Block+Elements" } },
    { topic: "Coordination Compounds", problem: "Werner's theory, nomenclature, isomerism", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech8=0-18", video: "https://www.youtube.com/results?search_query=NEET+Coordination+Compounds" } },
    { topic: "Haloalkanes & Haloarenes", problem: "Nucleophilic substitution, elimination", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech9=0-16", video: "https://www.youtube.com/results?search_query=NEET+Haloalkanes+and+Haloarenes" } },
    { topic: "Alcohols, Phenols & Ethers", problem: "Preparation, properties, reactions", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech10=0-18", video: "https://www.youtube.com/results?search_query=NEET+Alcohols+Phenols+and+Ethers" } },
    { topic: "Aldehydes, Ketones & Carboxylic Acids", problem: "Carbonyl compounds, reactions", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech11=0-22", video: "https://www.youtube.com/results?search_query=NEET+Aldehydes+Ketones+Carboxylic+Acids" } },
    { topic: "Amines", problem: "Preparation, basicity, diazonium salts", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech12=0-14", video: "https://www.youtube.com/results?search_query=NEET+Amines" } },
    { topic: "Biomolecules (Chemistry)", problem: "Carbohydrates, proteins, vitamins, nucleic acids", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech13=0-16", video: "https://www.youtube.com/results?search_query=NEET+Biomolecules+Chemistry" } },
    { topic: "Polymers", problem: "Types, polymerisation, biodegradable polymers", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech14=0-10", video: "https://www.youtube.com/results?search_query=NEET+Polymers" } },
    { topic: "Chemistry in Everyday Life", problem: "Drugs, chemicals in food, cleansing agents", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?lech15=0-10", video: "https://www.youtube.com/results?search_query=NEET+Chemistry+in+Everyday+Life" } },

    // ========== PHYSICS – Class 11 ==========
    { topic: "Physical World & Measurement", problem: "Units, dimensions, errors", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph1=0-8", video: "https://www.youtube.com/results?search_query=NEET+Units+and+Dimensions" } },
    { topic: "Kinematics", problem: "Motion in 1D & 2D, projectile motion", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph2=0-16", video: "https://www.youtube.com/results?search_query=NEET+Kinematics" } },
    { topic: "Laws of Motion", problem: "Newton's laws, friction, circular motion", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph3=0-18", video: "https://www.youtube.com/results?search_query=NEET+Laws+of+Motion" } },
    { topic: "Work, Energy & Power", problem: "Work-energy theorem, conservation of energy", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph4=0-14", video: "https://www.youtube.com/results?search_query=NEET+Work+Energy+Power" } },
    { topic: "System of Particles & Rotational Motion", problem: "COM, torque, angular momentum", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph5=0-20", video: "https://www.youtube.com/results?search_query=NEET+Rigid+Body+Dynamics" } },
    { topic: "Gravitation", problem: "Kepler's laws, satellite motion", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph6=0-14", video: "https://www.youtube.com/results?search_query=NEET+Gravitation" } },
    { topic: "Mechanical Properties of Solids", problem: "Elasticity, Young's modulus", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph7=0-12", video: "https://www.youtube.com/results?search_query=NEET+Mechanical+Properties+of+Solids" } },
    { topic: "Mechanical Properties of Fluids", problem: "Pressure, viscosity, surface tension", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph8=0-18", video: "https://www.youtube.com/results?search_query=NEET+Fluid+Mechanics" } },
    { topic: "Thermal Properties of Matter", problem: "Calorimetry, heat transfer", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph9=0-16", video: "https://www.youtube.com/results?search_query=NEET+Thermal+Properties+of+Matter" } },
    { topic: "Thermodynamics (Physics)", problem: "Laws of thermodynamics, heat engines", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph10=0-14", video: "https://www.youtube.com/results?search_query=NEET+Thermodynamics+Physics" } },
    { topic: "Kinetic Theory of Gases", problem: "Ideal gas equation, RMS speed", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph11=0-12", video: "https://www.youtube.com/results?search_query=NEET+Kinetic+Theory+of+Gases" } },
    { topic: "Oscillations", problem: "SHM, spring-mass, pendulum", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph12=0-16", video: "https://www.youtube.com/results?search_query=NEET+Oscillations" } },
    { topic: "Waves", problem: "Wave equation, standing waves, Doppler effect", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?keph13=0-18", video: "https://www.youtube.com/results?search_query=NEET+Waves+Physics" } },

    // ========== PHYSICS – Class 12 ==========
    { topic: "Electric Charges & Fields", problem: "Coulomb's law, electric field, Gauss's law", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph1=0-16", video: "https://www.youtube.com/results?search_query=NEET+Electric+Charges+and+Fields" } },
    { topic: "Electrostatic Potential & Capacitance", problem: "Potential, capacitors, energy stored", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph2=0-18", video: "https://www.youtube.com/results?search_query=NEET+Electrostatic+Potential+and+Capacitance" } },
    { topic: "Current Electricity", problem: "Ohm's law, Kirchhoff's rules, Wheatstone bridge", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph3=0-18", video: "https://www.youtube.com/results?search_query=NEET+Current+Electricity" } },
    { topic: "Moving Charges & Magnetism", problem: "Biot-Savart, Ampere's law, force on charge", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph4=0-20", video: "https://www.youtube.com/results?search_query=NEET+Magnetic+Effects+of+Current" } },
    { topic: "Magnetism & Matter", problem: "Magnetic materials, earth's magnetism", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph5=0-14", video: "https://www.youtube.com/results?search_query=NEET+Magnetism+and+Matter" } },
    { topic: "Electromagnetic Induction", problem: "Faraday's law, Lenz's law, inductance", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph6=0-16", video: "https://www.youtube.com/results?search_query=NEET+Electromagnetic+Induction" } },
    { topic: "Alternating Current", problem: "AC circuits, impedance, resonance", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph7=0-16", video: "https://www.youtube.com/results?search_query=NEET+Alternating+Current" } },
    { topic: "Electromagnetic Waves", problem: "Properties, spectrum, displacement current", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph8=0-10", video: "https://www.youtube.com/results?search_query=NEET+Electromagnetic+Waves" } },
    { topic: "Ray Optics & Optical Instruments", problem: "Reflection, refraction, lenses, microscopes", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph9=0-24", video: "https://www.youtube.com/results?search_query=NEET+Ray+Optics" } },
    { topic: "Wave Optics", problem: "Interference, diffraction, polarisation", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph10=0-16", video: "https://www.youtube.com/results?search_query=NEET+Wave+Optics" } },
    { topic: "Dual Nature of Radiation & Matter", problem: "Photoelectric effect, de Broglie wavelength", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph11=0-14", video: "https://www.youtube.com/results?search_query=NEET+Dual+Nature+of+Matter" } },
    { topic: "Atoms", problem: "Rutherford model, Bohr model, atomic spectra", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph12=0-14", video: "https://www.youtube.com/results?search_query=NEET+Atoms" } },
    { topic: "Nuclei", problem: "Radioactivity, nuclear fission & fusion", difficulty: "medium",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph13=0-14", video: "https://www.youtube.com/results?search_query=NEET+Nuclei" } },
    { topic: "Semiconductor Electronics", problem: "Diodes, transistors, logic gates", difficulty: "hard",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph14=0-20", video: "https://www.youtube.com/results?search_query=NEET+Semiconductor" } },
    { topic: "Communication Systems", problem: "Modulation, bandwidth, propagation", difficulty: "easy",
      resources: { notes: "https://ncert.nic.in/textbook.php?leph15=0-10", video: "https://www.youtube.com/results?search_query=NEET+Communication+Systems" } },
];

// ----- Render & Progress Logic -----
const tableBody = document.getElementById('table-body');
const totalCountEl = document.getElementById('total-count');
const solvedCountEl = document.getElementById('solved-count');
const progressPercentageEl = document.getElementById('progress-percentage');
const progressFill = document.getElementById('progress-fill');

let solvedStatus = JSON.parse(localStorage.getItem('neetSheetProgress')) || {};

function renderTable() {
    tableBody.innerHTML = '';
    problemData.forEach((item, index) => {
        const row = document.createElement('tr');

        // Status cell
        const statusCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'status-checkbox';
        checkbox.dataset.index = index;
        checkbox.checked = solvedStatus[index] || false;
        checkbox.addEventListener('change', updateProgress);
        statusCell.appendChild(checkbox);

        // Topic cell
        const topicCell = document.createElement('td');
        topicCell.className = 'topic-name';
        topicCell.textContent = item.topic;

        // Problem cell
        const problemCell = document.createElement('td');
        problemCell.textContent = item.problem;

        // Difficulty cell
        const diffCell = document.createElement('td');
        const diffSpan = document.createElement('span');
        diffSpan.className = `difficulty ${item.difficulty}`;
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
        row.appendChild(topicCell);
        row.appendChild(problemCell);
        row.appendChild(diffCell);
        row.appendChild(resourceCell);
        tableBody.appendChild(row);
    });

    totalCountEl.textContent = problemData.length;
    updateProgressDisplay();
}

function updateProgress() {
    document.querySelectorAll('.status-checkbox').forEach(checkbox => {
        solvedStatus[checkbox.dataset.index] = checkbox.checked;
    });
    localStorage.setItem('neetSheetProgress', JSON.stringify(solvedStatus));
    updateProgressDisplay();
}

function updateProgressDisplay() {
    const solvedCount = Object.values(solvedStatus).filter(v => v).length;
    const total = problemData.length;
    const percentage = total ? Math.round((solvedCount / total) * 100) : 0;
    solvedCountEl.textContent = solvedCount;
    progressPercentageEl.textContent = percentage + '%';
    progressFill.style.width = percentage + '%';
}

// Start the app
renderTable();