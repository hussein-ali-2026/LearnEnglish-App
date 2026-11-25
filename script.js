// متغيرات عامة للمنصة
let currentLevel = "A1";
let filteredWords = [];
let currentIndex = 0;
let learnedWords = [];

// استرجاع البيانات المحفوظة من localStorage
let hardWordsDetailed = JSON.parse(localStorage.getItem("hardWordsDetailed")) || [];
let levelprogress = JSON.parse(localStorage.getItem("levelprogress")) || {};

// اختيار المستوى وفتح شاشة التعلم
function selectLevel(level) {
    currentLevel = level;

    // تصفية الكلمات حسب المستوى المختار
    filteredWords = WardsData.filter(function (item) {
        return item.level && (item.level.includes(level) || item.level === level);
    });

    if (filteredWords.length === 0) {
        alert("عذراً، لم تقم بإضافة كلمات لهذا المستوى أو المادة (" + level + ") بعد.");
        return;
    }

    // استرجاع آخر كلمة وصل لها المستخدم في هذا المستوى
    if (levelprogress[level] !== undefined && levelprogress[level] < filteredWords.length) {
        currentIndex = levelprogress[level];
    } else {
        currentIndex = 0;
    }

    // إعادة تعبئة الكلمات المتعلمة حتى الكلمة الحالية
    learnedWords = [];
    for (let i = 0; i <= currentIndex; i++) {
        if (!learnedWords.includes(filteredWords[i].word)) {
            learnedWords.push(filteredWords[i].word);
        }
    }

    document.getElementById("level-selection-screen").style.display = "none";
    document.getElementById("app-main-screen").style.display = "block";

    updateLevelTitle(level);
    displayWord();
}

// تغيير عنوان المستوى في الواجهة
function updateLevelTitle(level) {
    let displayTitle = level;

    if (level === "A1") displayTitle = "مستوى A1 (المبتدئ الأساسي)";
    else if (level === "A2") displayTitle = "مستوى A2 (المبتدئ المتقدم)";
    else if (level === "B1") displayTitle = "مستوى B1 (المتوسط)";
    else if (level === "B2") displayTitle = "مستوى B2 (المتوسط المتقدم)";
    else if (level === "IT-Database") displayTitle = "مفاهيم قواعد البيانات 🗄️";
    else if (level === "IT-OOP") displayTitle = "برمجة الكائنات (OOP) 🧩";
    else if (level === "IT-Architecture") displayTitle = "بنية وتنظيم الحاسوب 🖥️";

    document.getElementById("current-level").innerText = displayTitle;
}

// الرجوع إلى شاشة اختيار المستويات
function goBackToLevels() {
    document.getElementById("app-main-screen").style.display = "none";
    document.getElementById("level-selection-screen").style.display = "block";
}

// نطق الكلمة أو الجملة باستخدام ميزة المتصفح الصوتية
function speakText(text) {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("المتصفح لا يدعم النطق الصوتي");
    }
}

// عرض بيانات الكلمة الحالية في البطاقة
function displayWord() {
    if (filteredWords.length === 0) return;

    let currentData = filteredWords[currentIndex];

    if (!learnedWords.includes(currentData.word)) {
        learnedWords.push(currentData.word);
    }

    let cardElement = document.getElementById("word-card");
    cardElement.innerHTML = `
        <div style="margin-top: 12px;">
            <button id="save-hard-btn" style="background: #ffeaa7; color: #d35400; border: 1px solid #fdcb6e; border-radius: 10px; padding: 6px 14px; font-size: 0.85rem; cursor: pointer; font-weight: bold; transition: 0.2s;">
                ⭐ حفظ في الكلمات الصعبة (<span id="hard-count">${hardWordsDetailed.length}</span>)
            </button>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 5px;">
            <span id="prev-word-btn" style="cursor: pointer; font-size: 1.4rem; color: #b2bec3; padding: 0 10px;" title="الكلمة السابقة"><</span>
            <h2 style="font-size: 2.2rem; color: #6c5ce7; margin: 0;">${currentData.word}</h2>
            <span id="next-word-btn" style="cursor: pointer; font-size: 1.4rem; color: #b2bec3; padding: 0 10px;" title="الكلمة التالية">></span>
            <button id="speak-word-btn" title="استمع لنطق الكلمة" style="background: #6c5ce7; color: white; border: none; border-radius: 50%; width: 38px; height: 38px; cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(108, 92, 231, 0.3);">
                🔊
            </button>
        </div>
      
        <p style="font-size: 1.3rem; color: #2d3436; font-weight: bold; margin-bottom: 12px;">${currentData.translation}</p>
      
        <div style="background: #e3f2fd; padding: 12px 16px; border-radius: 14px; display: inline-block; width: 100%;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 6px;">
                <p style="font-size: 0.95rem; color: #0984e3; font-weight: bold; margin: 0; direction: ltr;">مثال: ${currentData.example}</p>
                <button id="speak-example-btn" title="استمع للجملة" style="background: #0984e3; color: white; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; font-size: 0.8rem; display: flex; align-items: center; justify-content: center;">
                    🔊
                </button>
            </div>
            <p style="font-size: 0.85rem; color: #546e7a; margin: 0;">الترجمة: ${currentData.exampleTranslation}</p>
        </div>

        <div style="margin-top: 15px; text-align: center;">
            <label style="font-size: 0.85rem; color: #636e7a; display: block; margin-bottom: 6px;">اكتب الكلمة للتمرن على الإملاء:</label>
            <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                <input type="text" id="practice-input" placeholder="اكتب هنا..."
                    style="font-size: 1.1rem; text-align: center; padding: 8px 12px; border: 2px solid #cbd5e1; border-radius: 10px; width: 65%; outline: none; color: #2d3436;" autocomplete="off">
               
                <button id="check-spelling-btn" style="background: #0984e3; color: white; border: none; border-radius: 10px; padding: 9px 14px; font-size: 0.9rem; cursor: pointer; font-weight: bold;">تحقق</button>
            </div>
            <p id="spelling-feedback" style="font-size: 0.85rem; font-weight: bold; margin-top: 6px; height: 18px;"></p>
        </div>
    `;

    // ربط الأحداث بالأزرار والحقول بعد رسم البطاقة
    document.getElementById("save-hard-btn").addEventListener("click", saveHardWord);
    document.getElementById("prev-word-btn").addEventListener("click", prevWord);
    document.getElementById("next-word-btn").addEventListener("click", nextWord);
    document.getElementById("speak-word-btn").addEventListener("click", function () {
        speakText(currentData.word);
    });
    document.getElementById("speak-example-btn").addEventListener("click", function () {
        speakText(currentData.example);
    });

    let practiceInput = document.getElementById("practice-input");
    practiceInput.addEventListener("input", function () {
        // السماح بالحروف الإنجليزية والمسافات والشرطة فقط
        this.value = this.value.replace(/[^a-zA-Z\s-]/g, "");
    });
    practiceInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkSpellingAnswer(currentData.word);
        }
    });

    document.getElementById("check-spelling-btn").addEventListener("click", function () {
        checkSpellingAnswer(currentData.word);
    });

    // تحديث عداد الكلمات المتعلمة
    document.getElementById("words-count").innerText = learnedWords.length;

    // حفظ تقدم المستخدم في localStorage
    levelprogress[currentLevel] = currentIndex;
    localStorage.setItem("levelprogress", JSON.stringify(levelprogress));
}

// الكلمة التالية
function nextWord() {
    currentIndex++;
    if (currentIndex >= filteredWords.length) {
        currentIndex = 0;
    }
    displayWord();
}

// الكلمة السابقة
function prevWord() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = filteredWords.length - 1;
    }
    displayWord();
}

// التحقق من كتابة الكلمة
function checkSpellingAnswer(correctWord) {
    let inputField = document.getElementById("practice-input");
    let feedback = document.getElementById("spelling-feedback");

    let typedValue = inputField.value.trim().toLowerCase();
    let targetValue = correctWord.trim().toLowerCase();

    if (typedValue === targetValue) {
        inputField.style.borderColor = "#00b894";
        inputField.style.backgroundColor = "#e6fffa";
        feedback.style.color = "#00b894";
        feedback.innerText = "أحسنت! إجابة صحيحة 👏✨";

        setTimeout(function () {
            inputField.value = "";
            inputField.style.borderColor = "#cbd5e1";
            inputField.style.backgroundColor = "#ffffff";
            feedback.innerText = "";
            nextWord();
        }, 1200);
    } else {
        inputField.style.borderColor = "#d63031";
        inputField.style.backgroundColor = "#fff5f5";
        feedback.style.color = "#d63031";
        feedback.innerText = "خطأ، حاول مرة أخرى ❌";
    }
}

// حفظ الكلمة الحالية في قائمة الكلمات الصعبة
function saveHardWord() {
    if (filteredWords.length === 0) return;

    let currentData = filteredWords[currentIndex];
    let alreadySaved = hardWordsDetailed.some(function (item) {
        return item.word === currentData.word;
    });

    if (!alreadySaved) {
        hardWordsDetailed.push(currentData);
        localStorage.setItem("hardWordsDetailed", JSON.stringify(hardWordsDetailed));

        let countEl = document.getElementById("hard-count");
        if (countEl) countEl.innerText = hardWordsDetailed.length;

        alert('⭐ تم حفظ "' + currentData.word + '" بنجاح في الكلمات الصعبة!');
    } else {
        alert("هذه الكلمة موجودة مسبقاً في قائمة الكلمات الصعبة.");
    }
}

// فتح صفحة الكلمات الصعبة
function openHardWordsPage() {
    document.getElementById("app-main-screen").style.display = "none";
    document.getElementById("level-selection-screen").style.display = "none";
    document.getElementById("hard-words-screen").style.display = "block";
    renderHardWordsList();
}

// إغلاق صفحة الكلمات الصعبة والعودة للتعلم
function closeHardWordsPage() {
    document.getElementById("hard-words-screen").style.display = "none";
    document.getElementById("app-main-screen").style.display = "block";
}

// عرض قائمة الكلمات الصعبة
function renderHardWordsList() {
    let container = document.getElementById("hard-words-list-container");

    if (hardWordsDetailed.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #94a3b8; font-size: 0.9rem; padding: 15px;">لا توجد كلمات صعبة محفوظة حالياً.</p>`;
        return;
    }

    let htmlContent = "";
    for (let i = 0; i < hardWordsDetailed.length; i++) {
        let item = hardWordsDetailed[i];
        htmlContent += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; border-bottom: 1px solid #f1f5f9; background: #fff; border-radius: 8px; margin-bottom: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button class="delete-hard-btn" data-index="${i}" style="background: #fee2e2; color: #dc2626; border: none; border-radius: 6px; padding: 4px 8px; font-size: 0.75rem; cursor: pointer; font-weight: bold;">❌ حذف</button>
                    <div>
                        <span style="font-weight: bold; color: #1e293b; font-size: 0.95rem;">${i + 1}. ${item.word}</span>
                        <span style="color: #64748b; font-size: 0.85rem; margin-right: 6px;">(${item.translation})</span>
                    </div>
                </div>
                <div>
                    <span style="background: #eef2ff; color: #4f46e5; font-size: 0.75rem; padding: 3px 6px; border-radius: 6px; font-weight: bold;">${item.level || "عام"}</span>
                </div>
            </div>
        `;
    }

    container.innerHTML = htmlContent;

    // ربط أزرار الحذف بعد رسم القائمة
    let deleteButtons = container.querySelectorAll(".delete-hard-btn");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function () {
            let idx = Number(this.getAttribute("data-index"));
            removeHardWord(idx);
        });
    }
}

// حذف كلمة من الكلمات الصعبة
function removeHardWord(index) {
    if (index > -1 && index < hardWordsDetailed.length) {
        hardWordsDetailed.splice(index, 1);
        localStorage.setItem("hardWordsDetailed", JSON.stringify(hardWordsDetailed));
        renderHardWordsList();

        let countEl = document.getElementById("hard-count");
        if (countEl) countEl.innerText = hardWordsDetailed.length;
    }
}

// حفظ إعدادات المراجعة والإشعارات
function saveNotificationSettings() {
    let intervalVal = document.getElementById("spaced-interval").value;
    alert("✅ تم حفظ إعدادات الإشعارات بنجاح!\n- تكرار المراجعة: بعد " + intervalVal + " أيام.");
}
