// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

// Sample Chapter Render (Test)
const chapterContainer = document.getElementById("chapterContainer");

const sampleChapters = [
    { subject: "Biology", name: "Human Physiology" },
    { subject: "Physics", name: "Thermodynamics" },
    { subject: "Chemistry", name: "Organic Chemistry Basics" }
];

sampleChapters.forEach(chapter => {
    const card = document.createElement("div");
    card.className = "chapter-card";
    card.innerHTML = `
        <h3>${chapter.name}</h3>
        <p>Subject: ${chapter.subject}</p>
        <label>
            <input type="checkbox"> NCERT Done
        </label>
    `;
    chapterContainer.appendChild(card);
});