// script.js - NEET 2026 with Filters, Search & Random Topic

// ==================== COMPLETE DATA (same as before, but shortened for brevity) ====================
// (I'm including the full data from the previous version. To save space here, I'll indicate it's the same.)
// In your actual file, paste the full problemData array from the previous answer.
// It should contain all Physics, Chemistry, Biology topics with subject, chapter, topic, difficulty, resources.

// For completeness, I'll include a shortened version here, but you must use the full data from the previous response.

const problemData = [ 
    // ========== BIOLOGY ==========
    { subject: "Biology", chapter: "Diversity", topic: "The Living World", difficulty: "easy", resources: { notes: "https://ncert.nic.in/ncerts/l/kebo101.pdf", video: "https://www.youtube.com/results?search_query=the+living+world+NEET" } },
    { subject: "Biology", chapter: "Diversity", topic: "Biological Classification", difficulty: "medium", resources: { notes: "https://ncert.nic.in/ncerts/l/kebo102.pdf", video: "https://www.youtube.com/results?search_query=biological+classification+NEET" } },
    { subject: "Biology", chapter: "Diversity", topic: "Plant Kingdom", difficulty: "medium", resources: { notes: "https://ncert.nic.in/ncerts/l/kebo103.pdf", video: "https://www.youtube.com/results?search_query=plant+kingdom+NEET" } },
    { subject: "Biology", chapter: "Diversity", topic: "Animal Kingdom", difficulty: "hard", resources: { notes: "https://ncert.nic.in/ncerts/l/kebo104.pdf", video: "https://www.youtube.com/results?search_query=animal+kingdom+NEET" } },
    // ... (include all topics from previous version) ...
    // ========== CHEMISTRY ==========
    { subject: "Chemistry", chapter: "Basic Concepts", topic: "Some Basic Concepts of Chemistry", difficulty: "easy", resources: { notes: "https://ncert.nic.in/ncerts/l/kech101.pdf", video: "https://www.youtube.com/results?search_query=some+basic+concepts+of+chemistry+NEET" } },
    // ... etc ...
    // ========== PHYSICS ==========
    { subject: "Physics", chapter: "Units & Measurements", topic: "Physical World and Measurement", difficulty: "easy", resources: { notes: "https://ncert.nic.in/ncerts/l/keph101.pdf", video: "https://www.youtube.com/results?search_query=units+and+measurements+NEET" } },
    // ... etc ...
];

// ==================== END OF DATA ====================

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
        // Subject filter
        if (subject !== 'all' && item.subject !== subject) return false;
        
        // Difficulty filter
        if (difficulty !== 'all' && item.difficulty !== difficulty) return false;
        
        // Search filter (in topic or chapter)
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
    
    // Update filter info
    filterInfo.textContent = `Showing ${filteredData.length} of ${problemData.length} topics`;
    
    // Generate table rows
    tableBody.innerHTML = '';
    filteredData.forEach((item, index) => {
        // We need to find the original index to link with solvedStatus
        const originalIndex = problemData.findIndex(p => 
            p.subject === item.subject && p.topic === item.topic && p.chapter === item.chapter
        );
        
        const row = document.createElement('tr');
        
        // Status cell
        const statusCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'status-checkbox';
        checkbox.dataset.index = originalIndex; // Store original index
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
    
    // Update total count (always full dataset)
    totalCountEl.textContent = problemData.length;
    updateProgressDisplay();
}

// ----- Update progress (called when checkbox changes) -----
function updateProgress() {
    // Rebuild solvedStatus from all checkboxes (they have dataset.index)
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
    // Find all unfinished topics (where solvedStatus is false or undefined)
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
    
    // Find the row in the current filtered table that corresponds to this topic
    // and highlight it
    const rows = tableBody.querySelectorAll('tr');
    for (let row of rows) {
        // Get topic name from the row (third cell)
        const topicCell = row.cells[2];
        if (topicCell && topicCell.textContent === randomTopic.topic) {
            // Check also subject to be safe
            const subjectCell = row.cells[1].textContent;
            if (subjectCell === randomTopic.subject) {
                row.classList.add('highlight-row');
                setTimeout(() => row.classList.remove('highlight-row'), 1500);
                // Scroll to row
                row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                break;
            }
        }
    }
    
    // Also show an alert with the topic name
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