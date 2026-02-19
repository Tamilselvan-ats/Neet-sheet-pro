// ----------------------------
// THEME TOGGLE
// ----------------------------
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});

// ----------------------------
// DATA SYSTEM
// ----------------------------

// Default Chapters
const defaultChapters = [
    {
        id: 1,
        subject: "Biology",
        name: "Human Physiology",
        ncertDone: false,
        pyqSolved: 0,
        pyqTotal: 150,
        revision: 0
    },
    {
        id: 2,
        subject: "Physics",
        name: "Thermodynamics",
        ncertDone: false,
        pyqSolved: 0,
        pyqTotal: 120,
        revision: 0
    },
    {
        id: 3,
        subject: "Chemistry",
        name: "Organic Chemistry Basics",
        ncertDone: false,
        pyqSolved: 0,
        pyqTotal: 100,
        revision: 0
    }
];

// Load from LocalStorage or use default
let chapters = JSON.parse(localStorage.getItem("neetData")) || defaultChapters;

const chapterContainer = document.getElementById("chapterContainer");

// ----------------------------
// SAVE FUNCTION
// ----------------------------
function saveData() {
    localStorage.setItem("neetData", JSON.stringify(chapters));
}

// ----------------------------
// CALCULATE SUBJECT PROGRESS
// ----------------------------
function updateDashboard() {
    const subjects = ["Biology", "Physics", "Chemistry"];

    subjects.forEach(subject => {
        const subjectChapters = chapters.filter(c => c.subject === subject);
        const completed = subjectChapters.filter(c => c.ncertDone).length;
        const percent = subjectChapters.length === 0 ? 0 :
            Math.round((completed / subjectChapters.length) * 100);

        document.getElementById(subject.toLowerCase().slice(0,3) + "Progress").style.width = percent + "%";
        document.getElementById(subject.toLowerCase().slice(0,3) + "Percent").textContent = percent + "%";
    });
}

// ----------------------------
// RENDER CHAPTERS
// ----------------------------
function renderChapters() {
    chapterContainer.innerHTML = "";

    chapters.forEach(chapter => {
        const accuracy = chapter.pyqTotal === 0 ? 0 :
            Math.round((chapter.pyqSolved / chapter.pyqTotal) * 100);

        let borderColor = "green";
        if (accuracy < 70) borderColor = "red";
        else if (accuracy < 85) borderColor = "orange";

        const card = document.createElement("div");
        card.className = "chapter-card";
        card.style.borderLeft = `6px solid ${borderColor}`;

        card.innerHTML = `
            <h3>${chapter.name}</h3>
            <p>Subject: ${chapter.subject}</p>
            
            <label>
                <input type="checkbox" ${chapter.ncertDone ? "checked" : ""}>
                NCERT Done
            </label>

            <p>PYQ: ${chapter.pyqSolved} / ${chapter.pyqTotal}</p>
            <button class="solveBtn">+10 PYQ</button>

            <p>Revision: ${chapter.revision}</p>
            <button class="revBtn">+ Revision</button>
        `;

        // NCERT Toggle
        card.querySelector("input").addEventListener("change", (e) => {
            chapter.ncertDone = e.target.checked;
            saveData();
            updateDashboard();
        });

        // Add PYQ
        card.querySelector(".solveBtn").addEventListener("click", () => {
            chapter.pyqSolved += 10;
            if (chapter.pyqSolved > chapter.pyqTotal)
                chapter.pyqSolved = chapter.pyqTotal;

            saveData();
            renderChapters();
        });

        // Add Revision
        card.querySelector(".revBtn").addEventListener("click", () => {
            chapter.revision += 1;
            saveData();
            renderChapters();
        });

        chapterContainer.appendChild(card);
    });

    updateDashboard();
}

// Initial Render
renderChapters();
