// script.js
const problemData = [
    // Biology - Class 11
    { topic: "The Living World", problem: "Taxonomic Categories & Tools", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Biological Classification", problem: "Kingdom Fungi & Protists", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Plant Kingdom", problem: "Algae & Bryophytes Life Cycles", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Animal Kingdom", problem: "Phylum Porifera to Echinodermata", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Morphology of Flowering Plants", problem: "Root, Stem & Leaf Modifications", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Anatomy of Flowering Plants", problem: "Tissue Systems (Permanent & Meristematic)", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Structural Organisation in Animals", problem: "Epithelial & Connective Tissues", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Cell: The Unit of Life", problem: "Prokaryotic vs Eukaryotic Cell", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Biomolecules", problem: "Enzymes: Mechanism & Inhibition", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Cell Cycle & Division", problem: "Mitosis & Meiosis Phases", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Transport in Plants", problem: "Water Potential & Plasmolysis", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Mineral Nutrition", problem: "Essential Elements & Hydroponics", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Photosynthesis in Higher Plants", problem: "Light Reaction (Cyclic & Non-cyclic)", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Respiration in Plants", problem: "Glycolysis & Krebs Cycle", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Plant Growth & Development", problem: "Phytohormones & Their Effects", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Digestion & Absorption", problem: "Alimentary Canal & Digestive Glands", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Breathing & Exchange of Gases", problem: "Transport of Oxygen & CO2", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Body Fluids & Circulation", problem: "Cardiac Cycle & ECG", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Excretory Products & Elimination", problem: "Nephron Structure & Urine Formation", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Locomotion & Movement", problem: "Skeletal System & Joints", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Neural Control & Coordination", problem: "Neuron & Nerve Impulse", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Chemical Coordination & Integration", problem: "Endocrine Glands & Hormones", difficulty: "medium", resources: { notes: "#", video: "#" } },

    // Chemistry - Class 11
    { topic: "Some Basic Concepts of Chemistry", problem: "Mole Concept & Stoichiometry", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Structure of Atom", problem: "Quantum Numbers & Electronic Config.", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Classification of Elements", problem: "Periodic Trends (Ionisation, Electronegativity)", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Chemical Bonding", problem: "VSEPR Theory & Hybridisation", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Thermodynamics", problem: "First Law & Enthalpy Calculations", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Equilibrium", problem: "Ionic Equilibrium (pH & Buffer)", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Redox Reactions", problem: "Oxidation Number & Balancing", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Organic Chemistry - Basic Principles", problem: "GOC (Electronic Effects)", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Hydrocarbons", problem: "Alkane, Alkene & Alkyne Reactions", difficulty: "hard", resources: { notes: "#", video: "#" } },

    // Physics - Class 11
    { topic: "Physical World & Measurement", problem: "Units & Dimensions (Error Analysis)", difficulty: "easy", resources: { notes: "#", video: "#" } },
    { topic: "Kinematics", problem: "Motion in 1D & 2D (Projectile)", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Laws of Motion", problem: "Friction & Dynamics of Circular Motion", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Work, Energy & Power", problem: "Work-Energy Theorem & Conservation", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "System of Particles & Rotational Motion", problem: "Moment of Inertia & Torque", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Gravitation", problem: "Kepler's Laws & Satellite Energy", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Mechanical Properties of Solids", problem: "Young's Modulus & Stress-Strain", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Mechanical Properties of Fluids", problem: "Bernoulli's Principle & Viscosity", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Thermal Properties of Matter", problem: "Calorimetry & Heat Transfer", difficulty: "hard", resources: { notes: "#", video: "#" } },
    { topic: "Thermodynamics (Physics)", problem: "Heat Engines & Second Law", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Kinetic Theory of Gases", problem: "Ideal Gas Equation & RMS Speed", difficulty: "medium", resources: { notes: "#", video: "#" } },
    { topic: "Oscillations & Waves", problem: "Simple Harmonic Motion (Spring/Pendulum)", difficulty: "hard", resources: { notes: "#", video: "#" } },
    
    // Add more for Class 12 similarly (Electrochemistry, Ray Optics, Genetics, etc.)
];

const tableBody = document.getElementById('table-body');
const totalCountEl = document.getElementById('total-count');
const solvedCountEl = document.getElementById('solved-count');
const progressPercentageEl = document.getElementById('progress-percentage');
const progressFill = document.getElementById('progress-fill');

// Load saved progress from localStorage
let solvedStatus = JSON.parse(localStorage.getItem('neetSheetProgress')) || {};

function renderTable() {
    tableBody.innerHTML = '';
    problemData.forEach((item, index) => {
        const row = document.createElement('tr');
        
        // Status Cell
        const statusCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'status-checkbox';
        checkbox.dataset.index = index;
        checkbox.checked = solvedStatus[index] || false;
        checkbox.addEventListener('change', updateProgress);
        statusCell.appendChild(checkbox);
        
        // Topic Cell
        const topicCell = document.createElement('td');
        topicCell.className = 'topic-name';
        topicCell.textContent = item.topic;
        
        // Problem Cell
        const problemCell = document.createElement('td');
        problemCell.textContent = item.problem;
        
        // Difficulty Cell
        const diffCell = document.createElement('td');
        const diffSpan = document.createElement('span');
        diffSpan.className = `difficulty ${item.difficulty}`;
        diffSpan.textContent = item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1);
        diffCell.appendChild(diffSpan);
        
        // Resources Cell
        const resourceCell = document.createElement('td');
        if (item.resources.notes) {
            const notesLink = document.createElement('a');
            notesLink.href = item.resources.notes;
            notesLink.className = 'resource-link';
            notesLink.textContent = 'Notes';
            notesLink.target = '_blank';
            resourceCell.appendChild(notesLink);
        }
        if (item.resources.video) {
            const videoLink = document.createElement('a');
            videoLink.href = item.resources.video;
            videoLink.className = 'resource-link';
            videoLink.textContent = 'Video';
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
    // Update the solvedStatus object
    document.querySelectorAll('.status-checkbox').forEach(checkbox => {
        solvedStatus[checkbox.dataset.index] = checkbox.checked;
    });
    
    // Save to localStorage
    localStorage.setItem('neetSheetProgress', JSON.stringify(solvedStatus));
    
    // Update display
    updateProgressDisplay();
}

function updateProgressDisplay() {
    const solvedCount = Object.values(solvedStatus).filter(value => value).length;
    const total = problemData.length;
    const percentage = total > 0 ? Math.round((solvedCount / total) * 100) : 0;
    
    solvedCountEl.textContent = solvedCount;
    progressPercentageEl.textContent = percentage + '%';
    progressFill.style.width = percentage + '%';
}

// Initial render
renderTable();