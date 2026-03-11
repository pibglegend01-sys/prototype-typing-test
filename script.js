const supabaseUrl = 'https://qvtetshqaduhkolyogay.supabase.co';
const supabaseAnonKey = 'sb_publishable_k-76HV2z9s2290hRI_H-Hg_OI-0vz8-';
const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

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
            "HTTP/1.1 200 OK \\r\\n Content-Type: application/json \\r\\n { \"status\": \"success\", \"code\": 200 }",
            "Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word in the English dictionary (45 letters)."
        ]
    },
    hindi: {
        beginner: ["namaste duniya", "yah ek saral vaakya hai", "mujhe typing karna pasand hai", "aam kela seb angoor", "aap kaise hain"],
        intermediate: ["praudyogiki tez gati se viksit ho rahi hai.", "prakriti shaanti aur sukoon ka ek gahra anubhav pradaan karti hai.", "coding seekhna avasaron ki ek duniya kholata hai.", "antariksh anveshann ne hamesha manavata ko aakarshit kiya hai."],
        advanced: ["quantum computing aur kritrim buddhimatta bhavishya ke liye anant sambhavanaen rakhte hain.", "bhautiki mein oorja aur dravyamaan vinimey hain.", "ek hazaar meel ki yatra ek kadam se shuru hoti hai."]
    },
    chinese: {
        beginner: ["ni hao shi jie", "zhe shi yi ge jian dan de ju zi", "wo xi huan da zi", "ping guo xiang jiao ying tao", "ni jiao shen me ming zi"],
        intermediate: ["ji shu zheng zai yi jing ren de su du fa zhan.", "da zi ran ti gong le yi zhong shen ke de ning jing gan.", "xue xi bian cheng da kai le chong man ji yu de shi jie.", "tai kong tan suo yi zhi rang ren lei zhao mi."],
        advanced: ["liang zi ji suan he ren gong zhi neng wei wei lai dai lai le wu xian de ke neng xing.", "zai wu li xue zhong neng liang he zhi liang shi ke yi hu huan de.", "qian li zhi xing shi yu zu xia.", "zhe shi yi ge fei chang fu za de da zi ce shi."]
    },
    japanese: {
        beginner: ["konnichiwa sekai", "kore wa kantan na bun desu", "taipingu ga suki desu", "ringo banana sakuranbo", "ogenki desu ka"],
        intermediate: ["tekunoroji wa kyuusoku ni shinpo shite ori watashitachi no seikatsu wo kaete imasu.", "shizen wa fukai yasuragi wo ataete kuremasu.", "puroguramingu wo manabu koto wa kikai no sekai wo hirakimasu.", "uchuu tansa wa tsuneni jinrui wo miryou shite kimashita."],
        advanced: ["ryoushi konpyuutingu to jinkou chinou wa mirai ni mugen no kanousei wo himete imasu.", "butsurigaku dewa enerugii to shitsuryou wa gokansei ga arimasu.", "senri no michi mo ippo kara.", "kore wa hijou ni fukuzatsu na taipingu tesuto desu."]
    },
    arabic: {
        beginner: ["marhaba bil alam", "hadhihi jumla basita", "ana uhibb altibaa", "tufaha mawza karaz", "kayf halak alyawm"],
        intermediate: ["tatawwar altaknulujia biwatira sariea litaghyir altariqa allati naish biha.", "tufir altabiea ihsasan amiqan bialsalam walhudua.", "taallum albarmaja yaftah aalaman min alfuras.", "istikshaf alfadaa latalama asar albashariya."],
        advanced: ["alhawsaba alkamumiya waldhakaau alaistinaeiu yahmilan imkaniaat la hasr laha lilmustaqbal.", "fi alfiziaau altaaqa walkutla qabilatan liltabaduli.", "rihlat alalif mil tabdaa bikhatwa wahida.", "hadha ikhtibar tibaea muaqqad lilghaya lilmuhtarifin."]
    },
    german: {
        beginner: ["hallo welt", "das ist ein einfacher satz", "ich tippe gerne", "apfel banane kirsche", "wie geht es dir"],
        intermediate: ["Die Technologie entwickelt sich rasant und veraendert unser Leben, Arbeiten und Kommunizieren.", "Die Natur bietet ein tiefes Gefuehl von Frieden und Ruhe. Ein Spaziergang durch einen dichten Wald.", "Das Erlernen des Programmierens eroeffnet eine Welt voller Moeglichkeiten.", "Die Erforschung des Weltraums hat die Menschheit schon immer fasziniert."],
        advanced: ["Quantencomputing und kuenstliche Intelligenz bieten unendliche Moeglichkeiten fuer die Zukunft.", "In der Physik besagt E=mc^2, dass Energie und Masse austauschbar sind!", "Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.", "Dies ist ein sehr komplexer Tipptest fuer Fortgeschrittene."]
    },
    french: {
        beginner: ["bonjour le monde", "c'est une phrase simple", "j'aime taper", "pomme banane cerise", "comment allez vous"],
        intermediate: ["La technologie evolue a un rythme rapide, changeant notre facon de vivre.", "La nature offre un profond sentiment de paix et de tranquillite.", "Apprendre a coder ouvre un monde d'opportunites.", "L'exploration spatiale a toujours fascine l'humanite."],
        advanced: ["L'informatique quantique et l'intelligence artificielle offrent des possibilites infinies pour l'avenir.", "En physique, E=mc^2 stipule que l'energie et la masse sont interchangeables !", "Un voyage de mille kilometres commence par un seul pas.", "Ceci est un test de frappe tres complexe pour les professionnels."]
    },
    korean: {
        beginner: ["annyeonghaseyo segye", "igeos-eun gandanhan munjang-ibnida", "na-neun taiping-eul joh-ahanda", "sagwa banana cheli", "oneul gibun-i eottae-yo"],
        intermediate: ["gisul-eun ppaleuge baljeonhayeo uli-ui saenghwal bangsig-eul bakkugo issseubnida.", "jayeon-eun gip-eun pyeonghwawa pyeong-onham-eul jegong habnida.", "koding-eul baeumyeon gihoe-ui segyega yeollibnida.", "uju tamsa-neun hangsang illyu-leul maelyosikeyossseubnida."],
        advanced: ["yangja keompyuting-gwa in-gong jineung-eun milae-e muhan-han ganeungseong-eul jesihamnida.", "mulrihag-eseo E=mc^2 neun eneoji-wa jilyang-i sangho gyohwan ganeunghadaneun geos-eul natanaemnida!", "cheonli gildo han geol-eum buteo.", "igeos-eun jeonmunga-leul wihan maeu bogjabhan taiping teseuteu ibnida."]
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

let currentUser = null;
let currentUserId = null;

// Hydrate session immediately on page load
(async function initSession() {
    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session && session.user) {
            currentUser = session.user.user_metadata?.username || session.user.email;
            currentUserId = session.user.id;
            document.getElementById('login-btn').classList.add('hidden');
            logoutBtn.classList.remove('hidden');
            console.log('[Session] Restored session for:', currentUser);
        } else {
            console.log('[Session] No active session found.');
        }
    } catch (err) {
        console.error('[Session] Error fetching session:', err);
    }
})();

// Listen to Supabase Auth state changes (handles login/logout in real-time)
supabase.auth.onAuthStateChange((event, session) => {
    if (session && session.user) {
        currentUser = session.user.user_metadata?.username || session.user.email;
        currentUserId = session.user.id;
        document.getElementById('login-btn').classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        console.log('[Auth] State changed:', event, '- User:', currentUser);
    } else {
        currentUser = null;
        currentUserId = null;
        document.getElementById('login-btn').classList.remove('hidden');
        logoutBtn.classList.add('hidden');
        console.log('[Auth] State changed:', event, '- Signed out');
    }
});

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
    state.words = getParagraphWords(2000);
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
    typeArea.style.transform = `translateY(0)`;
    
    instructionEl.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    historyScreen.classList.add('hidden');
    leaderboardScreen.classList.add('hidden');
    
    if (selectedTime === 0) {
        doneBtn.classList.remove('hidden');
    } else {
        doneBtn.classList.add('hidden');
    }
    
    renderWords();
    focusInput();
    setTimeout(updateCursorPosition, 10);
}

function renderWords() {
    const children = Array.from(typeArea.children);
    children.forEach(child => {
        if(child.id !== 'cursor') typeArea.removeChild(child);
    });
    
    state.words.forEach((word, wIdx) => {
        const wordEl = document.createElement('div');
        wordEl.classList.add('word');
        wordEl.dataset.index = wIdx;
        [...word].forEach((letter) => {
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
    if(e.ctrlKey || e.metaKey || e.altKey || e.key.length > 1 && e.key !== 'Backspace' && e.key !== ' ') return;

    if (!state.isPlaying && e.key !== 'Escape') startTimer();
    
    instructionEl.classList.add('hidden');
    hiddenInput.focus({ preventScroll: true });
    cursor.classList.add('typing');
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
            const prevWordEl = document.querySelector(`.word[data-index="${state.wordIndex - 1}"]`);
            const prevLetters = prevWordEl.querySelectorAll('.letter');
            let hasError = false;
            prevLetters.forEach(l => {
                if(l.classList.contains('incorrect') || l.classList.contains('extra') || (!l.classList.contains('correct'))) hasError = true;
            });
            if (hasError) {
                state.wordIndex--;
                prevWordEl.classList.remove('error-border');
                state.letterIndex = prevLetters.length;
            }
        }
    } else if (e.key === ' ') {
        if (state.letterIndex > 0 || state.wordIndex > 0) {
            let hasError = false;
            letters.forEach(l => {
                if(!l.classList.contains('correct') && !l.classList.contains('extra')) {
                    if (l.innerText !== ' ') hasError = true;
                }
                if(l.classList.contains('incorrect') || l.classList.contains('extra')) hasError = true;
            });
            if (state.letterIndex < state.words[state.wordIndex].length) hasError = true;
            if(hasError) { activeWordEl.classList.add('error-border'); } else { activeWordEl.classList.remove('error-border'); }
            state.wordIndex++;
            state.letterIndex = 0;
            state.typedCharacters++;
            state.correctCharacters++;
            updateLiveStats();
            handleScroll();
            if (state.wordIndex >= state.words.length) endTest();
        }
    } else {
        if (state.letterIndex < state.words[state.wordIndex].length) {
            const letterEl = letters[state.letterIndex];
            state.typedCharacters++;
            if (e.key === expectedLetter) { letterEl.classList.add('correct'); state.correctCharacters++; }
            else { letterEl.classList.add('incorrect'); state.incorrectCharacters++; }
            state.letterIndex++;
        } else if (state.letterIndex < state.words[state.wordIndex].length + 10) {
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
        if(activeWordEl.offsetTop > 85) {
            const linesToScroll = Math.floor(activeWordEl.offsetTop / 45) - 1; 
            if(linesToScroll > state.linesScrolled) {
                state.linesScrolled = linesToScroll;
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
    let left = 0, top = 0;
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
    cursor.style.top = `${top + 4}px`;
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
            if (timeLeft <= 0) endTest();
        } else {
            timeEl.innerText = formatTime(state.secondsPassed);
        }
        updateLiveStats();
    }, 1000);
}

function updateLiveStats() {
    if(!state.isPlaying) return;
    const timeElapsed = (Date.now() - state.startTime) / 60000;
    if (timeElapsed <= 0) return;
    let acc = 100;
    if (state.typedCharacters > 0) acc = Math.round((state.correctCharacters / state.typedCharacters) * 100);
    liveAccEl.innerText = `${acc}%`;
    const grossWpm = Math.round((state.typedCharacters / 5) / timeElapsed);
    let netWpm = Math.round(grossWpm - (state.incorrectCharacters / timeElapsed));
    if (netWpm < 0) netWpm = 0;
    if (!isFinite(netWpm)) netWpm = 0;
    liveWpmEl.innerText = netWpm;
}

function endTest() {
    clearInterval(state.timer);
    state.isPlaying = false;
    state.isFinished = true;
    let timeElapsed = state.secondsPassed / 60;
    if (timeElapsed === 0) timeElapsed = (Date.now() - state.startTime) / 60000;
    if (timeElapsed === 0) timeElapsed = 0.01;
    const grossWpm = Math.round((state.typedCharacters / 5) / timeElapsed);
    let totalUncorrected = 0;
    document.querySelectorAll('.word').forEach((w, index) => {
        if(index > state.wordIndex) return;
        const incCount = w.querySelectorAll('.letter.incorrect').length + w.querySelectorAll('.letter.extra').length;
        let missedCount = 0;
        if(index < state.wordIndex) missedCount = w.querySelectorAll('.letter:not(.correct):not(.incorrect):not(.extra)').length;
        totalUncorrected += incCount + missedCount;
    });
    let netWpm = Math.round(grossWpm - (totalUncorrected / timeElapsed));
    if (netWpm < 0) netWpm = 0;
    let acc = 100;
    if (state.typedCharacters > 0) acc = Math.round((state.correctCharacters / state.typedCharacters) * 100);
    
    const history = JSON.parse(localStorage.getItem('typingHistory') || '[]');
    history.unshift({ date: new Date().toLocaleString(), wpm: netWpm, acc: acc, mode: `${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} | ${selectedTime === 0 ? 'No Limit' : `${selectedTime / 60}m`} | ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}` });
    if (history.length > 20) history.pop();
    localStorage.setItem('typingHistory', JSON.stringify(history));

    // Save score to Supabase leaderboard if user is logged in
    if (currentUser && currentUserId && netWpm > 0) {
        console.log('[Score] Saving score for', currentUser, '| WPM:', netWpm, '| Acc:', acc);
        supabase.from('leaderboard').insert([{ user_id: currentUserId, username: currentUser, wpm: netWpm, accuracy: acc, duration: selectedTime }])
        .then(({ data, error }) => {
            if (error) console.error('[Score] Error saving score:', error.message, error.details, error.hint);
            else console.log('[Score] Score saved successfully!');
        });
    } else if (!currentUser) {
        console.log('[Score] Skipping save - user not logged in.');
    }

    finalWpmEl.innerText = netWpm;
    grossWpmEl.innerText = grossWpm;
    finalAccEl.innerText = `${acc}%`;
    finalCorrectKeysEl.innerText = state.correctCharacters;
    finalIncorrectKeysEl.innerText = totalUncorrected;
    resultScreen.classList.remove('hidden');
    hiddenInput.blur();
}

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
            el.innerHTML = `<div class="date">${item.date} <br> <span style="font-size: 0.75rem; color: var(--text-secondary);">Mode: ${item.mode}</span></div><div class="stats"><div class="stat"><span class="stat-val">${item.wpm}</span><span class="stat-label">WPM</span></div><div class="stat"><span class="stat-val">${item.acc}%</span><span class="stat-label">ACC</span></div></div>`;
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
        const { data, error } = await supabase.from('leaderboard').select('username, wpm, accuracy').order('wpm', { ascending: false }).limit(10);
        if (error) throw error;
        leaderboardList.innerHTML = '';
        if(data.length === 0) {
            leaderboardList.innerHTML = '<p style="text-align:center; color: var(--text-secondary);">No scores yet.</p>';
        } else {
            data.forEach((item, index) => {
                const el = document.createElement('div');
                el.className = 'history-item';
                el.innerHTML = `<div class="leaderboard-rank">#${index+1}</div><div class="leaderboard-user">${item.username}</div><div class="stats"><div class="stat"><span class="stat-val">${item.wpm}</span><span class="stat-label">WPM</span></div><div class="stat"><span class="stat-val">${item.accuracy}%</span><span class="stat-label">ACC</span></div></div>`;
                leaderboardList.appendChild(el);
            });
        }
    } catch (e) {
        console.error(e);
        leaderboardList.innerHTML = '<p style="text-align:center; color: var(--incorrect-color);">Error loading leaderboard.</p>';
    }
}

function openLogin() { state.isPlaying = false; clearInterval(state.timer); updateLoginUI(); loginScreen.classList.remove('hidden'); }

restartBtn.addEventListener('click', () => initTest());
doneBtn.addEventListener('click', () => endTest());
tryAgainBtn.addEventListener('click', () => initTest());
historyBtn.addEventListener('click', openHistory);
closeHistoryBtn.addEventListener('click', () => { historyScreen.classList.add('hidden'); initTest(); });
leaderboardBtn.addEventListener('click', openLeaderboard);
closeLeaderboardBtn.addEventListener('click', () => { leaderboardScreen.classList.add('hidden'); initTest(); });
logoutBtn.addEventListener('click', async () => { await supabase.auth.signOut(); });

function enforceFocus(e) {
    if(!state.isFinished && resultScreen.classList.contains('hidden') && historyScreen.classList.contains('hidden') && leaderboardScreen.classList.contains('hidden')) {
        if (!e.target.closest('button') && !e.target.closest('select') && !e.target.closest('option') && !e.target.closest('a')) focusInput();
    }
}

document.addEventListener('click', enforceFocus);
document.addEventListener('touchstart', enforceFocus, {passive: true});

document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active')); e.target.classList.add('active'); selectedTime = parseInt(e.target.dataset.time); e.target.blur(); initTest(); focusInput(); });
});
document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active')); e.target.classList.add('active'); selectedDifficulty = e.target.dataset.diff; e.target.blur(); initTest(); focusInput(); });
});
document.getElementById('language-select').addEventListener('change', (e) => { selectedLanguage = e.target.value; e.target.blur(); initTest(); focusInput(); });

initTest();
window.addEventListener('resize', () => updateCursorPosition());
