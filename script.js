// ------------------ THEME ------------------
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀" : "🌙";
});

// ------------------ DATA ------------------
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

let chapters = JSON.parse(localStorage.getItem("neetData")) || defaultChapters;

const chapterContainer = document.getElementById("chapterContainer");

// ------------------ SAVE ------------------
function saveData() {
    localStorage.setItem("neetData", JSON.stringify(chapters));
}

// ------------------ DASHBOARD ------------------
function updateDashboard() {
    const subjects = ["Biology", "Physics", "Chemistry"];

    subjects.forEach(subject => {
        const subjectChapters = chapters.filter(c => c.subject === subject);
        const completed = subjectChapters.filter(c => c.ncertDone).length;
        const percent = subjectChapters.length === 0
            ? 0
            : Math.round((completed / subjectChapters.length) * 100);

        const idPrefix = subject.substring(0, 3).toLowerCase();

        document.getElementById(idPrefix + "Progress").style.width = percent + "%";
        document.getElementById(idPrefix + "Percent").textContent = percent + "%";
    });
}

// ------------------ RENDER ------------------
function renderChapters() {
    chapterContainer.innerHTML = "";

    chapters.forEach((chapter, index) => {

        const accuracy = chapter.pyqTotal === 0
            ? 0
            : Math.round((chapter.pyqSolved / chapter.pyqTotal) * 100);

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

        // Checkbox
        const checkbox = card.querySelector("input");
        checkbox.addEventListener("change", () => {
            chapters[index].ncertDone = checkbox.checked;
            saveData();
            updateDashboard();
        });

        // PYQ Button
        const solveBtn = card.querySelector(".solveBtn");
        solveBtn.addEventListener("click", () => {
            chapters[index].pyqSolved += 10;

            if (chapters[index].pyqSolved > chapters[index].pyqTotal) {
                chapters[index].pyqSolved = chapters[index].pyqTotal;
            }

            saveData();
            renderChapters();
        });

        // Revision Button
        const revBtn = card.querySelector(".revBtn");
        revBtn.addEventListener("click", () => {
            chapters[index].revision += 1;
            saveData();
            renderChapters();
        });

        chapterContainer.appendChild(card);
    });

    updateDashboard();
}

// Initial render
renderChapters();