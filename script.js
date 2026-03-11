/*

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://qvtetshqaduhkolyogay.supabase.co'
const supabaseAnonKey = 'sb_publishable_k-76HV2z9s2290hRI_H-Hg_OI-0vz8-'

const supabase = createClient(supabaseUrl, supabaseAnonKey)
*/
const PARAGRAPHS = {
    english: {
        beginner: [
            "the quick brown fox jumps over the lazy dog",
            "typing is a fun skill to learn for everyone",
            "a simple sentence with easy words to type on the keyboard",
            "cat dog bird fish apple banana cherry orange grapes",
            "hello world this is a basic test for beginners it has simple words"
        ],
        intermediate: [
            "Technology is evolving at a rapid pace, changing the way we live, work, and communicate.",
            "Nature offers a profound sense of peace and tranquility. Walking through a dense forest.",
            "Learning to code opens up a world of opportunities. It empowers you to build creative solutions.",
            "Space exploration has always fascinated humanity. Looking up at the night sky, we wonder.",
            "A journey of a thousand miles begins with a single step. Success is not achieved overnight, but through consistent effort."
        ],
        advanced: [
            "In physics, E=mc^2 states that energy & mass are interchangeable! Is it 100% accurate? Yes.",
            "The const function() { let x = 42; return x * 3.14159; } requires precise keystrokes.",
            "\"To be, or not to be, that is the question:\" - Hamlet, Act III, Scene 1.",
            "HTTP/1.1 200 OK \r\n Content-Type: application/json \r\n { \"status\": \"success\", \"code\": 200 }",
            "Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word in the English dictionary (45 letters)."
        ]
    },
    hindi: {
        beginner: ["नमस्ते दुनिया", "यह एक सरल वाक्य है", "मुझे टाइपिंग करना पसंद है", "आम केला सेब अंगूर", "आप कैसे हैं"],
        intermediate: ["प्रौद्योगिकी तेज गति से विकसित हो रही है।", "प्रकृति शांति और सुकून का एक गहरा अनुभव प्रदान करती है।", "कोडिंग सीखना अवसरों की एक दुनिया खोलता है।", "अंतरिक्ष अन्वेषण ने हमेशा मानवता को आकर्षित किया है।"],
        advanced: ["क्वांटम कंप्यूटिंग और कृत्रिम बुद्धिमत्ता भविष्य के लिए अनंत संभावनाएं रखते हैं।", "Pneumonoultramicroscopicsilicovolcanoconiosis एक बहुत लंबा शब्द है।", "भौतिकी में ऊर्जा और द्रव्यमान विनिमेय हैं।", "एक हजार मील की यात्रा एक कदम से शुरू होती है।"]
    },
    chinese: {
        beginner: ["你 好 世 界", "这 是 一 个 简 单 的 句 子", "我 喜 欢 打 字", "苹 果 香 蕉 樱 桃", "你 叫 什 么 名 字"],
        intermediate: ["技 术 正 在 以 惊 人 的 速 度 发 展 ， 改 变 了 我 们 的 生 活 方 式 。", "大 自 然 提 供 了 一 种 深 刻 的 宁 静 感 。", "学 习 编 程 打 开 了 充 满 机 遇 的 世 界 。", "太 空 探 索 一 直 让 人 类 着 迷 。"],
        advanced: ["量 子 计 算 和 人 工 智 能 为 未 来 带 来 了 无 限 的 可 能 性 。", "在 物 理 学 中 ， 能 量 和 质 量 是 可 以 互 换 的 ！", "千 里 之 行 ， 始 于 足 下 。", "这 是 一 个 非 常 复 杂 的 打 字 测 试 。"]
    },
    japanese: {
        beginner: ["こ ん に ち は 世 界", "こ れ は 簡 単 な 文 で す", "タ イ ピ ン グ が 好 き で す", "り ん ご ば な な さ く ら ん ぼ", "お 元 気 で す か"],
        intermediate: ["テ ク ノ ロ ジ ー は 急 速 に 進 歩 し て お り 、 私 た ち の 生 活 を 変 え て い ま す 。", "自 然 は 深 い 安 ら ぎ を 与 え て く れ ま す 。", "プ ロ グ ラ ミ ン グ を 学 ぶ こ と は 、 機 会 の 世 界 を 開 き ま す 。", "宇 宙 探 査 は 常 に 人 類 を 魅 了 し て き ま し た 。"],
        advanced: ["量 子 コ ン ピ ュ ー テ ィ ン グ と 人 工 知 能 は 未 来 に 無 限 の 可 能 性 を 秘 め て い ま す 。", "物 理 学 で は 、 エ ネ ル ギ ー と 質 量 は 互 換 性 が あ り ま す ！", "千 里 の 道 も 一 歩 か ら 。", "こ れ は 非 常 に 複 雑 な タ イ ピ ン グ テ ス ト で す 。"]
    },
    arabic: {
        beginner: ["مرحبا بالعالم", "هذه جملة بسيطة", "أنا أحب الطباعة", "تفاحة موزة كرز", "كيف حالك اليوم"],
        intermediate: ["تتطور التكنولوجيا بوتيرة سريعة لتغيير الطريقة التي نعيش بها.", "توفر الطبيعة إحساسًا عميقًا بالسلام والهدوء.", "تعلم البرمجة يفتح عالماً من الفرص.", "استكشاف الفضاء لطالما أسر البشرية."],
        advanced: ["الحوسبة الكمومية والذكاء الاصطناعي يحملان إمكانيات لا حصر لها للمستقبل.", "في الفيزياء، الطاقة والكتلة قابلتان للتبادل!", "رحلة الألف ميل تبدأ بخطوة واحدة.", "هذا اختبار طباعة معقد للغاية للمحترفين."]
    },
    german: {
        beginner: ["hallo welt", "das ist ein einfacher satz", "ich tippe gerne", "apfel banane kirsche", "wie geht es dir"],
        intermediate: ["Die Technologie entwickelt sich rasant und verändert unser Leben, Arbeiten und Kommunizieren.", "Die Natur bietet ein tiefes Gefühl von Frieden und Ruhe. Ein Spaziergang durch einen dichten Wald.", "Das Erlernen des Programmierens eröffnet eine Welt voller Möglichkeiten.", "Die Erforschung des Weltraums hat die Menschheit schon immer fasziniert."],
        advanced: ["Quantencomputing und künstliche Intelligenz bieten unendliche Möglichkeiten für die Zukunft.", "In der Physik besagt E=mc^2, dass Energie und Masse austauschbar sind!", "Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.", "Dies ist ein sehr komplexer Tipptest für Fortgeschrittene."]
    },
    french: {
        beginner: ["bonjour le monde", "c'est une phrase simple", "j'aime taper", "pomme banane cerise", "comment allez vous"],
        intermediate: ["La technologie évolue à un rythme rapide, changeant notre façon de vivre.", "La nature offre un profond sentiment de paix et de tranquillité.", "Apprendre à coder ouvre un monde d'opportunités.", "L'exploration spatiale a toujours fasciné l'humanité."],
        advanced: ["L'informatique quantique et l'intelligence artificielle offrent des possibilités infinies pour l'avenir.", "En physique, E=mc^2 stipule que l'énergie et la masse sont interchangeables !", "Un voyage de mille kilomètres commence par un seul pas.", "Ceci est un test de frappe très complexe pour les professionnels."]
    },
    korean: {
        beginner: ["안 녕 하 세 요 세 계", "이 것 은 간 단 한 문 장 입 니 다", "나 는 타 이 핑 을 좋 아 한 다", "사 과 바 나 나 체 리", "오 늘 기 분 이 어 때 요"],
        intermediate: ["기 술 은 빠 르 게 발 전 하 여 우 리 의 생 활 방 식 을 바 꾸 고 있 습 니 다 .", "자 연 은 깊 은 평 화 와 평 온 함 을 제 공 합 니 다 .", "코 딩 을 배 우 면 기 회 의 세 계 가 열 립 니 다 .", "우 주 탐 사 는 항 상 인 류 를 매 료 시 켰 습 니 다 ."],
        advanced: ["양 자 컴 퓨 팅 과 인 공 지 능 은 미 래 에 무 한 한 가 능 성 을 제 시 합 니 다 .", "물 리 학 에 서 E=mc^2 는 에 너 지 와 질 량 이 상 호 교 환 가 능 하 다 는 것 을 나 타 냅 니 다 !", "천 리 길 도 한 걸 음 부 터 .", "이 것 은 전 문 가 를 위 한 매 우 복 잡 한 타 이 핑 테 스 트 입 니 다 ."]
    }
};

let selectedTime = 0;
let selectedDifficulty = 'intermediate';
let selectedLanguage = 'english';

const state = {
    words: [],
    timer: null,
    isPlaying: false,
    isFinished: false,
    typedCharacters: 0,
    correctCharacters: 0,
    incorrectCharacters: 0,
    wordIndex: 0,
    letterIndex: 0,
    startTime: 0,
    cursorTimeout: null,
    linesScrolled: 0,
    secondsPassed: 0
};

function formatTime(seconds) {
    if (seconds === 0 && selectedTime === 0) return '0s';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m > 0) return `${m}m ${s < 10 ? '0' : ''}${s}s`;
    return `${s}s`;
}

// DOM Elements
const typeArea = document.getElementById('typing-area');
const cursor = document.getElementById('cursor');
const timeEl = document.getElementById('time');
const liveWpmEl = document.getElementById('live-wpm');
const liveAccEl = document.getElementById('live-acc');
const hiddenInput = document.getElementById('hidden-input');
const instructionEl = document.querySelector('.instruction');
const doneBtn = document.getElementById('done-btn');
const restartBtn = document.getElementById('restart-btn');
const historyBtn = document.getElementById('history-btn');
const historyScreen = document.getElementById('history-screen');
const closeHistoryBtn = document.getElementById('close-history-btn');
const historyList = document.getElementById('history-list');

const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardScreen = document.getElementById('leaderboard-screen');
const closeLeaderboardBtn = document.getElementById('close-leaderboard-btn');
const leaderboardList = document.getElementById('leaderboard-list');

const loginBtn = document.getElementById('login-btn');
const loginScreen = document.getElementById('login-screen');
const closeLoginBtn = document.getElementById('close-login-btn');
const submitLoginBtn = document.getElementById('submit-login-btn');
const toggleLoginModeBtn = document.getElementById('toggle-login-mode');
const logoutBtn = document.getElementById('logout-btn');

let currentUser = localStorage.getItem('typingUser') || null;
let isLoginMode = true;

const resultScreen = document.getElementById('result-screen');
const finalWpmEl = document.getElementById('final-wpm');
const finalAccEl = document.getElementById('final-acc');
const grossWpmEl = document.getElementById('gross-wpm');
const finalCorrectKeysEl = document.getElementById('final-correct-keys');
const finalIncorrectKeysEl = document.getElementById('final-incorrect-keys');
const tryAgainBtn = document.getElementById('try-again-btn');

function getParagraphWords(minWords) {
    const list = [];
    const pList = PARAGRAPHS[selectedLanguage][selectedDifficulty];
    while (list.length < minWords) {
        const paragraph = pList[Math.floor(Math.random() * pList.length)];
        const words = paragraph.split(" ");
        list.push(...words);
    }
    return list;
}

function initTest() {
    state.words = getParagraphWords(2000); // load plenty of words
    state.isPlaying = false;
    state.isFinished = false;
    state.typedCharacters = 0;
    state.correctCharacters = 0;
    state.incorrectCharacters = 0;
    state.wordIndex = 0;
    state.letterIndex = 0;
    state.linesScrolled = 0;
    state.secondsPassed = 0;
    clearInterval(state.timer);
    
    timeEl.innerHTML = selectedTime === 0 ? "&infin;" : formatTime(selectedTime);
    liveWpmEl.innerText = "0";
    liveAccEl.innerText = "100%";
    typeArea.style.transform = `translateY(0)`; // Reset scrolling
    
    instructionEl.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    historyScreen.classList.add('hidden');
    leaderboardScreen.classList.add('hidden');
    loginScreen.classList.add('hidden');
    
    if (selectedTime === 0) {
        doneBtn.classList.remove('hidden');
    } else {
        doneBtn.classList.add('hidden');
    }
    
    renderWords();
    focusInput();
    
    // Slight delay to allow layout calculation for cursor
    setTimeout(updateCursorPosition, 10);
}

function renderWords() {
    // Keep the cursor but clear the words
    const children = Array.from(typeArea.children);
    children.forEach(child => {
        if(child.id !== 'cursor') typeArea.removeChild(child);
    });
    
    state.words.forEach((word, wIdx) => {
        const wordEl = document.createElement('div');
        wordEl.classList.add('word');
        wordEl.dataset.index = wIdx;
        
        [...word].forEach((letter, lIdx) => {
            const letterEl = document.createElement('span');
            letterEl.classList.add('letter');
            letterEl.innerText = letter;
            wordEl.appendChild(letterEl);
        });
        
        typeArea.appendChild(wordEl);
    });
}

function focusInput() {
    if (document.activeElement && document.activeElement !== hiddenInput) {
        document.activeElement.blur();
    }
    hiddenInput.value = '';
    hiddenInput.focus({ preventScroll: true });
}

document.addEventListener('keydown', (e) => {
    if(state.isFinished) return;
    
    // Ignore meta keys
    if(e.ctrlKey || e.metaKey || e.altKey || e.key.length > 1 && e.key !== 'Backspace' && e.key !== ' ') {
        return;
    }

    if (!state.isPlaying && e.key !== 'Escape') {
        startTimer();
    }
    
    instructionEl.classList.add('hidden');
    hiddenInput.focus({ preventScroll: true });
    cursor.classList.add('typing');
    // Remove typing class after a short delay for blink effect to resume when stopped typing
    clearTimeout(state.cursorTimeout);
    state.cursorTimeout = setTimeout(() => cursor.classList.remove('typing'), 500);

    const activeWordEl = document.querySelector(`.word[data-index="${state.wordIndex}"]`);
    const letters = activeWordEl.querySelectorAll('.letter');
    const expectedLetter = state.words[state.wordIndex][state.letterIndex];

    if (e.key === 'Backspace') {
        if (state.letterIndex > 0) {
            state.letterIndex--;
            const letterEl = letters[state.letterIndex];
            
            if(letterEl.classList.contains('extra')) {
                letterEl.remove();
            } else {
                if(letterEl.classList.contains('incorrect')) state.incorrectCharacters--;
                if(letterEl.classList.contains('correct')) state.correctCharacters--;
                
                letterEl.classList.remove('correct', 'incorrect');
                state.typedCharacters--;
            }
        } else if (state.wordIndex > 0) {
            // Move to previous word
            const prevWordEl = document.querySelector(`.word[data-index="${state.wordIndex - 1}"]`);
            
            // Only allow backspace if word had error
            const prevLetters = prevWordEl.querySelectorAll('.letter');
            let hasError = false;
            prevLetters.forEach(l => {
                if(l.classList.contains('incorrect') || l.classList.contains('extra') || (!l.classList.contains('correct'))) {
                    hasError = true;
                }
            });
            
            if (hasError) {
                state.wordIndex--;
                prevWordEl.classList.remove('error-border');
                state.letterIndex = prevLetters.length;
            }
        }
    } else if (e.key === ' ') {
        // Space pressed
        if (state.letterIndex > 0 || state.wordIndex > 0) {
            // Check if current word has errors
            let hasError = false;
            letters.forEach(l => {
                if(!l.classList.contains('correct') && !l.classList.contains('extra')) {
                    if (l.innerText !== ' ') hasError = true;
                }
                if(l.classList.contains('incorrect') || l.classList.contains('extra')) hasError = true;
            });
            if (state.letterIndex < state.words[state.wordIndex].length) {
                hasError = true;
            }

            if(hasError) {
                activeWordEl.classList.add('error-border');
            } else {
                activeWordEl.classList.remove('error-border');
            }
            
            state.wordIndex++;
            state.letterIndex = 0;
            state.typedCharacters++; // Count space as a typed char
            state.correctCharacters++;
            updateLiveStats();
            
            handleScroll();
            
            if (state.wordIndex >= state.words.length) {
                endTest();
            }
        }
    } else {
        // Handle letter typed
        if (state.letterIndex < state.words[state.wordIndex].length) {
            // Normal letter
            const letterEl = letters[state.letterIndex];
            state.typedCharacters++;
            if (e.key === expectedLetter) {
                letterEl.classList.add('correct');
                state.correctCharacters++;
            } else {
                letterEl.classList.add('incorrect');
                state.incorrectCharacters++;
            }
            state.letterIndex++;
        } else if (state.letterIndex < state.words[state.wordIndex].length + 10) {
            // Extra letters (limit to 10 extra)
            const extraLetter = document.createElement('span');
            extraLetter.classList.add('letter', 'extra');
            extraLetter.innerText = e.key;
            activeWordEl.appendChild(extraLetter);
            state.letterIndex++;
            state.typedCharacters++;
            state.incorrectCharacters++;
        }
        updateLiveStats();
    }
    
    updateCursorPosition();
});

function handleScroll() {
    const activeWordEl = document.querySelector(`.word[data-index="${state.wordIndex}"]`);
    if(activeWordEl) {
        // Hardcoded approx line height ~45px
        // If offset is greater than 80, we are on the 3rd line, we should scroll
        if(activeWordEl.offsetTop > 85) {
            // Determine line index implicitly
            const linesToScroll = Math.floor(activeWordEl.offsetTop / 45) - 1; 
            if(linesToScroll > state.linesScrolled) {
                state.linesScrolled = linesToScroll;
                // scroll down
                typeArea.style.transform = `translateY(-${state.linesScrolled * 45}px)`;
            }
        }
    }
}


function updateCursorPosition() {
    if(state.isFinished) return;
    const activeWordEl = document.querySelector(`.word[data-index="${state.wordIndex}"]`);
    if(!activeWordEl) return;
    
    const letters = activeWordEl.querySelectorAll('.letter');
    
    let left = 0;
    let top = 0;

    if (state.letterIndex === 0) {
        left = activeWordEl.offsetLeft;
        top = activeWordEl.offsetTop;
    } else {
        const lastLetterEl = letters[state.letterIndex - 1];
        if(lastLetterEl) {
            left = activeWordEl.offsetLeft + lastLetterEl.offsetLeft + lastLetterEl.offsetWidth;
            top = activeWordEl.offsetTop + lastLetterEl.offsetTop;
        }
    }

    cursor.style.left = `${left}px`;
    cursor.style.top = `${top + 4}px`; // slight vertical offset
}

function startTimer() {
    state.isPlaying = true;
    state.startTime = Date.now();
    state.secondsPassed = 0;
    state.timer = setInterval(() => {
        state.secondsPassed++;
        
        if (selectedTime > 0) {
            const timeLeft = selectedTime - state.secondsPassed;
            timeEl.innerText = formatTime(timeLeft);
            if (timeLeft <= 0) {
                endTest();
            }
        } else {
            timeEl.innerText = formatTime(state.secondsPassed);
        }
        updateLiveStats();
    }, 1000);
}

function updateLiveStats() {
    if(!state.isPlaying) return;
    
    const timeElapsed = (Date.now() - state.startTime) / 60000; // in minutes
    if (timeElapsed <= 0) return;
    
    // Accuracy
    let acc = 100;
    if (state.typedCharacters > 0) {
        acc = Math.round((state.correctCharacters / state.typedCharacters) * 100);
    }
    liveAccEl.innerText = `${acc}%`;
    
    // WPM
    // Standard WPM: (characters / 5) / time
    const grossWpm = Math.round((state.typedCharacters / 5) / timeElapsed);
    const uncorrectedErrors = state.incorrectCharacters; // Basic metric
    let netWpm = Math.round(grossWpm - (uncorrectedErrors / timeElapsed));
    
    if (netWpm < 0) netWpm = 0;
    if (!isFinite(netWpm)) netWpm = 0;
    
    liveWpmEl.innerText = netWpm;
}

function endTest() {
    clearInterval(state.timer);
    state.isPlaying = false;
    state.isFinished = true;
    
    // Final Calculations
    let timeElapsed = state.secondsPassed / 60;
    if (timeElapsed === 0) timeElapsed = (Date.now() - state.startTime) / 60000;
    if (timeElapsed === 0) timeElapsed = 0.01;
    
    const grossWpm = Math.round((state.typedCharacters / 5) / timeElapsed);
    
    // Count exact uncorrected errors across all typed words
    let totalUncorrected = 0;
    document.querySelectorAll('.word').forEach((w, index) => {
        if(index > state.wordIndex) return; // ignore unreached words
        const incCount = w.querySelectorAll('.letter.incorrect').length + w.querySelectorAll('.letter.extra').length;
        // if user missed letters in word
        let missedCount = 0;
        if(index < state.wordIndex) {
            missedCount = w.querySelectorAll('.letter:not(.correct):not(.incorrect):not(.extra)').length;
        }
        totalUncorrected += incCount + missedCount;
    });

    let netWpm = Math.round(grossWpm - (totalUncorrected / timeElapsed));
    if (netWpm < 0) netWpm = 0;
    
    let acc = 100;
    if (state.typedCharacters > 0) {
        acc = Math.round((state.correctCharacters / state.typedCharacters) * 100);
    }
    
    // Update history
    const history = JSON.parse(localStorage.getItem('typingHistory') || '[]');
    history.unshift({
        date: new Date().toLocaleString(),
        wpm: netWpm,
        acc: acc,
        mode: `${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} | ${selectedTime === 0 ? 'No Limit' : `${selectedTime / 60}m`} | ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}`
    });
    if (history.length > 20) history.pop(); // Keep top 20
    localStorage.setItem('typingHistory', JSON.stringify(history));

    if (currentUser && netWpm > 0) {
        fetch('/api/score', {
            method: 'POST',
            body: JSON.stringify({
                username: currentUser,
                wpm: netWpm,
                acc: acc,
                mode: `${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} | ${selectedTime === 0 ? 'No Limit' : `${selectedTime / 60}m`} | ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}`
            })
        }).catch(e => console.error(e));
    }

    // Update UI
    finalWpmEl.innerText = netWpm;
    grossWpmEl.innerText = grossWpm;
    finalAccEl.innerText = `${acc}%`;
    finalCorrectKeysEl.innerText = state.correctCharacters;
    finalIncorrectKeysEl.innerText = totalUncorrected;
    
    resultScreen.classList.remove('hidden');
    hiddenInput.blur();
}

// History Functions
function openHistory() {
    state.isPlaying = false;
    clearInterval(state.timer);
    
    const history = JSON.parse(localStorage.getItem('typingHistory') || '[]');
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyList.innerHTML = '<p style="text-align:center; color: var(--text-secondary);">No history yet.</p>';
    } else {
        history.forEach(item => {
            const el = document.createElement('div');
            el.className = 'history-item';
            el.innerHTML = `
                <div class="date">${item.date} <br> <span style="font-size: 0.75rem; color: var(--text-secondary);">Mode: ${item.mode}</span></div>
                <div class="stats">
                    <div class="stat">
                        <span class="stat-val">${item.wpm}</span>
                        <span class="stat-label">WPM</span>
                    </div>
                    <div class="stat">
                        <span class="stat-val">${item.acc}%</span>
                        <span class="stat-label">ACC</span>
                    </div>
                </div>
            `;
            historyList.appendChild(el);
        });
    }
    historyScreen.classList.remove('hidden');
}

async function openLeaderboard() {
    state.isPlaying = false;
    clearInterval(state.timer);
    
    leaderboardList.innerHTML = '<p style="text-align:center; color: var(--text-secondary);">Loading...</p>';
    leaderboardScreen.classList.remove('hidden');
    
    try {
        const res = await fetch('/api/leaderboard');
        const data = await res.json();
        leaderboardList.innerHTML = '';
        if(data.length === 0) {
            leaderboardList.innerHTML = '<p style="text-align:center; color: var(--text-secondary);">No scores yet.</p>';
        } else {
            data.forEach((item, index) => {
                const el = document.createElement('div');
                el.className = 'history-item';
                el.innerHTML = `
                    <div class="leaderboard-rank">#${index+1}</div>
                    <div class="leaderboard-user">${item.username}</div>
                    <div class="stats">
                        <div class="stat">
                            <span class="stat-val">${item.wpm}</span>
                            <span class="stat-label">WPM</span>
                        </div>
                        <div class="stat">
                            <span class="stat-val">${item.acc}%</span>
                            <span class="stat-label">ACC</span>
                        </div>
                    </div>
                `;
                leaderboardList.appendChild(el);
            });
        }
    } catch (e) {
        leaderboardList.innerHTML = '<p style="text-align:center; color: var(--incorrect-color);">Error loading leaderboard.</p>';
    }
}

function updateLoginUI() {
    if (currentUser) {
        document.getElementById('logged-in-user-display').style.display = 'block';
        document.querySelector('#logged-in-user-display span').innerText = currentUser;
        logoutBtn.classList.remove('hidden');
        submitLoginBtn.classList.add('hidden');
        document.getElementById('login-username-container').style.display = 'none';
        document.getElementById('login-password-container').style.display = 'none';
        document.getElementById('login-toggle-container').style.display = 'none';
        document.getElementById('login-title').innerText = 'Profile';
    } else {
        document.getElementById('logged-in-user-display').style.display = 'none';
        logoutBtn.classList.add('hidden');
        submitLoginBtn.classList.remove('hidden');
        document.getElementById('login-username-container').style.display = 'block';
        document.getElementById('login-password-container').style.display = 'block';
        document.getElementById('login-toggle-container').style.display = 'block';
        document.getElementById('login-title').innerText = isLoginMode ? 'Login' : 'Sign Up';
        document.getElementById('login-toggle-text').innerText = isLoginMode ? "Don't have an account? " : "Already have an account? ";
        toggleLoginModeBtn.innerText = isLoginMode ? "Sign Up" : "Login";
    }
}

function openLogin() {
    state.isPlaying = false;
    clearInterval(state.timer);
    updateLoginUI();
    loginScreen.classList.remove('hidden');
}

// Event Listeners
restartBtn.addEventListener('click', () => {
    initTest();
});
doneBtn.addEventListener('click', () => {
    endTest();
});
tryAgainBtn.addEventListener('click', () => {
    initTest();
});
historyBtn.addEventListener('click', openHistory);
closeHistoryBtn.addEventListener('click', () => {
    historyScreen.classList.add('hidden');
    initTest();
});

leaderboardBtn.addEventListener('click', openLeaderboard);
closeLeaderboardBtn.addEventListener('click', () => {
    leaderboardScreen.classList.add('hidden');
    initTest();
});

loginBtn.addEventListener('click', openLogin);
closeLoginBtn.addEventListener('click', () => {
    loginScreen.classList.add('hidden');
    initTest();
});

toggleLoginModeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    updateLoginUI();
});

submitLoginBtn.addEventListener('click', async () => {
    const user = document.getElementById('login-username').value;
    const pass = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');
    errorEl.innerText = '';
    
    if(!user || !pass) {
        errorEl.innerText = 'Please fill out all fields.';
        return;
    }
    
    submitLoginBtn.disabled = true;
    try {
        const res = await fetch(isLoginMode ? '/api/login' : '/api/signup', {
            method: 'POST',
            body: JSON.stringify({username: user, password: pass})
        });
        const data = await res.json();
        
        if (data.success) {
            currentUser = data.username;
            localStorage.setItem('typingUser', currentUser);
            updateLoginUI();
            setTimeout(() => {
                loginScreen.classList.add('hidden');
                initTest();
            }, 1000);
        } else {
            errorEl.innerText = data.message || 'Error occurred.';
        }
    } catch(e) {
        errorEl.innerText = 'Network error.';
    }
    submitLoginBtn.disabled = false;
});

logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('typingUser');
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    updateLoginUI();
});

function enforceFocus(e) {
    if(!state.isFinished && resultScreen.classList.contains('hidden') && historyScreen.classList.contains('hidden') && leaderboardScreen.classList.contains('hidden') && loginScreen.classList.contains('hidden')) {
        // Prevent focusing if we are clicking a button or dropdown
        if (!e.target.closest('button') && !e.target.closest('select') && !e.target.closest('option')) {
            focusInput();
        }
    }
}

document.addEventListener('click', enforceFocus);
document.addEventListener('touchstart', enforceFocus, {passive: true});

// Mode Selector Events
document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedTime = parseInt(e.target.dataset.time);
        e.target.blur();
        initTest();
        focusInput();
    });
});
document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedDifficulty = e.target.dataset.diff;
        e.target.blur();
        initTest();
        focusInput();
    });
});
document.getElementById('language-select').addEventListener('change', (e) => {
    selectedLanguage = e.target.value;
    e.target.blur();
    initTest();
    focusInput();
});

// Initial setup
initTest();

// Handle window resize dynamically adjusting word blocks 
window.addEventListener('resize', () => {
    updateCursorPosition();
});