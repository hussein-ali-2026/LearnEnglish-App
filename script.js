let currentLevel = 'A1';
let filteredWords = [];
let currentIndex = 0;
const learnedWords = new Set();
const hardWordsDetailed = [];
const levelprogress = {}; // لحفظ آخر index لكل مستوى

// =========================================================
// 1. دالة اختيار المستوى والتحول لشاشة التعلم
// =========================================================
function selectLevel(level) {
    currentLevel = level;

    // تصفية الكلمات الخاصة بالمستوى أو التخصص المختار
    filteredWords = WardsData.filter(item => item.level && (item.level.includes(level) || item.level === level));

    if (filteredWords.length === 0) {
        alert(`عذراً، لم تقم بإضافة كلمات لهذا المستوى أو المادة (${level}) بعد.`);
        return;
    }

    currentIndex = levelprogress[level] !== undefined ? levelprogress[level] : 0;
    if (currentIndex >= filteredWords.length) currentIndex = 0;

    learnedWords.clear();
    for (let i = 0; i <= currentIndex && i < filteredWords.length; i++) {
        learnedWords.add(filteredWords[i].word);
    }

    // إظهار وإخفاء الشاشات
    document.getElementById("level-selection-screen").style.display = "none";
    document.getElementById("app-main-screen").style.display = "block";

    updateLevelTitle(level);
    displayWord();
}

// تخصيص العنوان الظاهر في الشاشة
function updateLevelTitle(level) {
    let displayTitle = level;
    if (level === 'A1') displayTitle = "مستوى A1 (المبتدئ الأساسي)";
    else if (level === 'A2') displayTitle = "مستوى A2 (المبتدئ المتقدم)";
    else if (level === 'B1') displayTitle = "مستوى B1 (المتوسط)";
    else if (level === 'B2') displayTitle = "مستوى B2 (المتوسط المتقدم)";
    else if (level === 'IT-Database') displayTitle = "مفاهيم قواعد البيانات 🗄️";
    else if (level === 'IT-OOP') displayTitle = "برمجة الكائنات (OOP) 🧩";
    else if (level === 'IT-Architecture') displayTitle = "بنية وتنظيم الحاسوب 🖥️";

    document.getElementById("current-level").innerText = displayTitle;
}

// دالة العودة لقائمة المستويات
function goBackToLevels() {
    document.getElementById("app-main-screen").style.display = "none";
    document.getElementById("level-selection-screen").style.display = "block";
}

// =========================================================
// 2. دالة النطق الصوتي السريع (Text-To-Speech)
// =========================================================
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // إيقاف أي صوت سابق لمنع التعليق
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("النطق غير مدعوم في هذا المتصفح.");
    }
}

// =========================================================
// 3. دالة عرض الكلمة الحالية
// =========================================================
function displayWord() {
    if (filteredWords.length === 0) return;

    const currentData = filteredWords[currentIndex];
    learnedWords.add(currentData.word);

    const cardElement = document.getElementById("word-card");
    cardElement.innerHTML = `
        <div style="margin-top: 12px;">
            <button onclick="saveHardWord()" style="background: #ffeaa7; color: #d35400; border: 1px solid #fdcb6e; border-radius: 10px; padding: 6px 14px; font-size: 0.85rem; cursor: pointer; font-weight: bold; transition: 0.2s;">
                ⭐ حفظ في الكلمات الصعبة (<span id="hard-count">${hardWordsDetailed.length}</span>)
            </button>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 5px;">
            <span onclick="prevWord()" style="cursor: pointer; font-size: 1.4rem; color: #b2bec3; padding: 0 10px;" title="الكلمة السابقة"><</span>
            <h2 style="font-size: 2.2rem; color: #6c5ce7; margin: 0;">${currentData.word}</h2>
            <span onclick="nextWord()" style="cursor: pointer; font-size: 1.4rem; color: #b2bec3; padding: 0 10px;" title="الكلمة التالية">></span>
            <button onclick="speakText('${currentData.word}')" title="استمع لنطق الكلمة" style="background: #6c5ce7; color: white; border: none; border-radius: 50%; width: 38px; height: 38px; cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(108, 92, 231, 0.3);">
                🔊
            </button>
        </div>
      
        <p style="font-size: 1.3rem; color: #2d3436; font-weight: bold; margin-bottom: 12px;">${currentData.translation}</p>
      
        <div style="background: #e3f2fd; padding: 12px 16px; border-radius: 14px; display: inline-block; width: 100%;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 6px;">
                <p style="font-size: 0.95rem; color: #0984e3; font-weight: bold; margin: 0; direction: ltr;">مثال: ${currentData.example}</p>
                <button onclick="speakText('${currentData.example.replace(/'/g, "\\'")}')" title="استمع للجملة" style="background: #0984e3; color: white; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; font-size: 0.8rem; display: flex; align-items: center; justify-content: center;">
                    🔊
                </button>
            </div>
            <p style="font-size: 0.85rem; color: #546e7a; margin: 0;">الترجمة: ${currentData.exampleTranslation}</p>
        </div>

        <div style="margin-top: 15px; text-align: center;">
            <label style="font-size: 0.85rem; color: #636e7a; display: block; margin-bottom: 6px;">اكتب الكلمة للتمرن على الإملاء:</label>
            <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                <input type="text" id="practice-input" placeholder="اكتب هنا..." onkeydown="if(event.key === 'Enter') checkSpellingAnswer('${currentData.word}')" style="font-size: 1.1rem; text-align: center; padding: 8px 12px; border: 2px solid #cbd5e1; border-radius: 10px; width: 65%; outline: none; color: #2d3436;" autocomplete="off">
                <button onclick="checkSpellingAnswer('${currentData.word}')" style="background: #0984e3; color: white; border: none; border-radius: 10px; padding: 9px 14px; font-size: 0.9rem; cursor: pointer; font-weight: bold;">تحقق</button>
            </div>
            <p id="spelling-feedback" style="font-size: 0.85rem; font-weight: bold; margin-top: 6px; height: 18px;"></p>
        </div>
    `;

    document.getElementById("words-count").innerText = learnedWords.size;
    levelprogress[currentLevel] = currentIndex;
}

// الانتقال للكلمة التالية
function nextWord() {
    currentIndex++;
    if (currentIndex >= filteredWords.length) {
        currentIndex = 0; // العودة للأولى عند النهاية
    }
    displayWord();
}

// الانتقال للكلمة السابقة
function prevWord() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = filteredWords.length - 1; // الذهاب للأخيرة عند تجاوز البداية
    }
    displayWord();
}

// =========================================================
// 4. التحقق من الإملاء والكتابة
// =========================================================
function checkSpellingAnswer(correctWord) {
    const inputField = document.getElementById("practice-input");
    const feedback = document.getElementById("spelling-feedback");
    if (!inputField || !feedback) return;

    const typedValue = inputField.value.trim();

    if (typedValue.toLowerCase() === correctWord.toLowerCase()) {
        inputField.style.borderColor = "#00b894";
        inputField.style.backgroundColor = "#e6fffa";
        feedback.style.color = "#00b894";
        feedback.innerText = "أحسنت! إجابة صحيحة 👏✨";

        setTimeout(() => {
            inputField.value = "";
            inputField.style.borderColor = "#cbd5e1";
            inputField.style.backgroundColor = "#ffffff";
            feedback.innerText = "";
            nextWord(); // الانتقال التلقائي للكلمة التالية
        }, 1200);
    } else {
        inputField.style.borderColor = "#d63031";
        inputField.style.backgroundColor = "#fff5f5";
        feedback.style.color = "#d63031";
        feedback.innerText = "خطأ، حاول مرة أخرى ❌";
    }
}

// =========================================================
// 5. إدارة الكلمات الصعبة
// =========================================================
function saveHardWord() {
    if (!filteredWords || filteredWords.length === 0) return;
    const currentData = filteredWords[currentIndex];

    if (!hardWordsDetailed.some(item => item.word === currentData.word)) {
        hardWordsDetailed.push(currentData);
        const countEl = document.getElementById("hard-count");
        if (countEl) countEl.innerText = hardWordsDetailed.length;
        alert(`⭐ تم حفظ "${currentData.word}" بنجاح في الكلمات الصعبة!`);
    } else {
        alert("هذه الكلمة موجودة مسبقاً في قائمة الكلمات الصعبة.");
    }
}

function openHardWordsPage() {
    document.getElementById("app-main-screen").style.display = "none";
    document.getElementById("level-selection-screen").style.display = "none";
    document.getElementById("hard-words-screen").style.display = "block";
    renderHardWordsList();
}

function closeHardWordsPage() {
    document.getElementById("hard-words-screen").style.display = "none";
    document.getElementById("app-main-screen").style.display = "block";
}

function renderHardWordsList() {
    const container = document.getElementById("hard-words-list-container");
    if (!container) return;

    if (hardWordsDetailed.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #94a3b8; font-size: 0.9rem; padding: 15px;">لا توجد كلمات صعبة محفوظة حالياً.</p>`;
        return;
    }

    let htmlContent = "";
    hardWordsDetailed.forEach((item, index) => {
        htmlContent += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; border-bottom: 1px solid #f1f5f9; background: #fff; border-radius: 8px; margin-bottom: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button onclick="removeHardWord(${index})" style="background: #fee2e2; color: #dc2626; border: none; border-radius: 6px; padding: 4px 8px; font-size: 0.75rem; cursor: pointer; font-weight: bold;">❌ حذف</button>
                    <div>
                        <span style="font-weight: bold; color: #1e293b; font-size: 0.95rem;">${index + 1}. ${item.word}</span>
                        <span style="color: #64748b; font-size: 0.85rem; margin-right: 6px;">(${item.translation})</span>
                    </div>
                </div>
                <div>
                    <span style="background: #eef2ff; color: #4f46e5; font-size: 0.75rem; padding: 3px 6px; border-radius: 6px; font-weight: bold;">${item.level || 'عام'}</span>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function removeHardWord(index) {
    if (index > -1 && index < hardWordsDetailed.length) {
        hardWordsDetailed.splice(index, 1);
        renderHardWordsList();
        const countEl = document.getElementById("hard-count");
        if (countEl) countEl.innerText = hardWordsDetailed.length;
    }
}

function saveNotificationSettings() {
    const intervalVal = document.getElementById("spaced-interval").value;
    alert(`✅ تم حفظ إعدادات الإشعارات بنجاح!\n- تكرار المراجعة: بعد ${intervalVal} أيام.`);
}