// ===============================
// ARUVERSE 2.0 – MAIN JAVASCRIPT
// ===============================

// ---------- CONFIGURATION (EDIT THIS) ----------
const CONFIG = {
  // Your names and pet names
  couple: { user1: 'Tejaswi', user2: 'Aru' },
  petNames: ['Aruuu', 'Biwi', 'Jaan', 'Darling', 'Bachaa', 'Puwali'],
  secretPassword: 'aru',

  // Mood responses (based on her psychology)
  moodMessages: {
    notokay: [
      "Aru… tu thik hai na? Main hoon yahan, chup chaap. Jab bolna chahe, main sunne ke liye hoon. ❤️",
      "Kuch bhi ho, main tere saath hoon. Rona hai toh ro le, main sambhal loonga. 🥺",
      "Tujhe andar kuch lag raha hai… main samajh sakta hoon. Take your time, main kahin nahi jaa raha."
    ],
    angry: [
      "Gussa hai? Haq hai tujhe. Par itna jaanti hai na… main hamesha wapas aata hoon. Jab mann kare, baat kar lenge. 😌",
      "Mujhe pata hai tu gussa hai aur bolti nahi. Par main samajh raha hoon. Aur main yahin hoon, jab tu ready ho.",
      "Thoda aur gussa kar le, fir thandak ho jayegi. Main wait karunga. ❤️"
    ],
    silent: [
      "Theek hai… main yahin hoon. Jab bolna ho tab aana. Main jaa nahi raha. ❤️",
      "Khamoshi bhi samajh aati hai mujhe. Tu apna time le, main hoon yahan.",
      "Na bol, main rehne dunga. Bas itna jaanti rah… tu akeli nahi hai."
    ],
    miss: [
      "Main bhi tujhe miss kar raha hoon, har waqt. Jaise saans bina adhoori ho. 💭",
      "Tu yaad aati hai, har roz. Aur main muskuraye bina nahi reh paata.",
      "Aaja mil le thoda… yahin, in baaton mein. 💖"
    ]
  },

  // Food messages
  foodMessages: {
    egg: "Egg without you = incomplete 😏\nTujhse milke pura hota hai sab kuch.",
    rasmalai: "Rasmalai se bhi zyada sweet tu hai 💖\nAur nahi maanegi toh bhi sach hai.",
    biryani: "Biryani + Tu = perfect life 😍\nDono cheezein ek saath milti nahi, par tu mil gayi – life set!",
    icecream: "Ice cream bhi tujhe dekh ke pighal jaye 🍦\nPar main nahi pighalta, pakka hoon tere liye."
  },

  // Open When... letters
  openWhen: {
    ignored: "Jab lage ki main ignore kar raha hoon…\nSach kahun? Ho sakta hai main busy hoon, par tujhe kabhi ignore nahi kar sakta. Tum mere priority list mein top pe ho. Bas thoda sabr rakh, main wapas aaunga. ❤️",
    angryAtMe: "Jab mujh par gussa ho…\nMujhe pata hai tu bolti nahi, par main samajh leta hoon. Agar maine kuch galat kiya hai toh sorry… lekin itna bata de ki main sudhaar sakoon. I'm not perfect, but I'm always learning – for you.",
    overthinking: "Jab overthink kar rahi ho…\nRuk. Saans le. Main hoon na. Tere saath hoon, tere liye hoon. Jo bhi soch rahi hai, woh utna scary nahi jitna lagta hai. Main hoon saath, har kadam.",
    missMe: "Jab meri yaad bahut aaye…\nYeh padh: 'Main bhi tujhe miss kar raha hoon, is waqt bhi. Teri awaz, teri hansi, teri woh choti choti batein… sab yaad aa raha hai. Jaldi milte hain.' 💫"
  },

  // Teasing lines
  teaseLines: [
    "Drama queen activated 👑😂",
    "Jealous ho aur bolti bhi nahi 😏",
    "Gussa bhi cute lagta hai tujhe 😌",
    "Tu hoti hai toh din bana deti hai",
    "Thoda aur naraz ho ja, dekh leta hoon kaise manau 😉",
    "Bachpan se hi naughty thi na? Ab bhi wahi ho 😄",
    "Aru = Cute + Angry combo 😏❤️",
    "Thoda kam gussa kiya karo madam 😌"
  ],

  // Apology
  apology: "05-03-2026 — 12:18 AM 💔\nUs raat tum royi thi meri wajah se. Aur us pal maine decide kiya ki tumhe kabhi hurt nahi hone dunga. I'm sorry for that night, and I'll spend my life making sure you smile more than you cry. ❤️",

  // Poetry (your own shayari)
  poems: [
    "Tum meri zindagi ka hissa nahi…\nPuri kahani ho. ❤️",
    "Maine dekha use ek nazar bhar ke…\nPar uski nazar mein kabhi main na tha.\nIsmein koi kasoor nahi uska…\nUski zindagi mein kabhi main na tha.",
    "Chupke chupke khwabon mein tera aana hota hai…\nJaise chandni raat mein kisi sitare ka muskaraana hota hai.",
    "Tum jab tak na muskurao…\nChain nahi aata mujhe.\nMuskura do… bas itna kaafi hai.",
    "महोब्बत की हथेली पर जुनून का जाम रख दूंगा,\nअगर बेटी हुई मेरी तुम्हारा नाम रख दूंगा..!!",
    "I won't say I'll never make you cry,\nBut I'll make you smile before your tears get dry."
  ],

  // Funny Q&A (editable)
  funnyQA: [
    { question: "Do you love me? 😏", options: ["Haa", "Haa haa", "Haa haa haa", "Obviously!"] },
    { question: "Who is the cutest?", options: ["Me", "You", "Both", "Aruuu"] },
    { question: "What's my favourite thing about you?", options: ["Your smile", "Your anger", "Your cuteness", "Everything"] },
    { question: "Should I tease you more?", options: ["Yes", "Haa", "Please", "No (lie)"] }
  ],

  // Daily messages (one per day of year)
  dailyMessages: [
    "You are the best thing that ever happened to me 💖",
    "I still get butterflies when I see your name pop up 🦋",
    "You're my today and all of my tomorrows 🌅",
    "I love you more than coffee ☕ (and that's huge)",
    "Every love story is beautiful, but ours is my favorite 📖",
    "You're the reason I believe in soulmates ✨",
    "I'd choose you in every lifetime 💫",
    "You make my heart smile 😊",
    "I'm so lucky to have you in my life 🍀",
    "You're my favourite hello and hardest goodbye 💕"
  ],

  // Surprise messages
  surprises: [
    "🌹 I love you more than pizza (and that's saying a lot)",
    "🐻 You're my teddy bear",
    "☁️ I'd pick you over sleep any day",
    "🍦 You make my heart melt like ice cream",
    "✨ You're the reason I believe in fairytales",
    "💭 I daydream about you every afternoon",
    "🍀 You're my lucky charm",
    "🌟 Even in another galaxy, I'd find you"
  ]
};

// ---------- GLOBAL VARIABLES ----------
let roomUser = 'default';
let roomData = null;
let mediaRecorder;
let audioChunks = [];
let currentTheme = 'pink';
let gameInterval = null;

// ---------- INITIALISATION ----------
document.addEventListener('DOMContentLoaded', () => {
  // Get room from URL
  const urlParams = new URLSearchParams(window.location.search);
  roomUser = urlParams.get('user') || 'default';
  const storageKey = `aruverse_${roomUser}`;

  // Load or create room data
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      roomData = JSON.parse(saved);
    } else {
      roomData = {
        petNames: CONFIG.petNames,
        secretPassword: CONFIG.secretPassword,
        coupleNames: CONFIG.couple,
        gallery: [],
        galleryTags: {},
        secretLetter: "💌 my dearest... every day with you is a dream. you are my forever. i love you more than all the stars. 💌",
        messages: [],
        quizQuestions: CONFIG.funnyQA,
        romanticLines: CONFIG.romanticLines || [],
        dailyMessageIndex: 0
      };
    }
  } catch (e) {
    console.warn("localStorage error, using defaults", e);
    roomData = {
      petNames: CONFIG.petNames,
      secretPassword: CONFIG.secretPassword,
      coupleNames: CONFIG.couple,
      gallery: [],
      galleryTags: {},
      secretLetter: "💌 my dearest... every day with you is a dream. you are my forever. i love you more than all the stars. 💌",
      messages: [],
      quizQuestions: CONFIG.funnyQA,
      romanticLines: [],
      dailyMessageIndex: 0
    };
  }

  // Save helper
  window.saveRoomData = function() {
    try {
      localStorage.setItem(`aruverse_${roomUser}`, JSON.stringify(roomData));
    } catch (e) {}
  };

  // Update UI with room data
  document.getElementById('roomInfo').innerHTML = `✨ your private room: <strong>${roomUser}</strong> ✨ <br> <small>share this link to keep the magic</small>`;
  document.getElementById('partnerName').textContent = roomData.coupleNames.user2;

  // Set daily message
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const dailyIndex = dayOfYear % CONFIG.dailyMessages.length;
  document.getElementById('dailyMessage').textContent = CONFIG.dailyMessages[dailyIndex];

  // Render funny Q&A
  renderQA();

  // Load gallery
  loadGallery();

  // Create floating hearts
  createFloatingHearts();

  // Attach food card listeners
  document.querySelectorAll('.food-card').forEach(card => {
    card.addEventListener('click', () => {
      const food = card.dataset.food;
      showPopup(CONFIG.foodMessages[food] || "Mmm, delicious!");
    });
  });
});

// ---------- ENTRY & MUSIC ----------
document.getElementById('enterBtn').addEventListener('click', () => {
  document.getElementById('entry').style.display = 'none';
  document.getElementById('main').style.display = 'block';
  const music = document.getElementById('bgMusic');
  music.play().catch(() => {});
  document.getElementById('musicToggle').innerHTML = '<i class="fas fa-pause"></i>';
});

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');
  if (music.paused) {
    music.play();
    btn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    music.pause();
    btn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

// ---------- THEME SWITCHER ----------
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    document.body.classList.remove('theme-night', 'theme-funny');
    if (theme === 'night') document.body.classList.add('theme-night');
    else if (theme === 'funny') document.body.classList.add('theme-funny');
    currentTheme = theme;
  });
});

// ---------- FLOATING HEARTS ----------
function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  for (let i = 0; i < 20; i++) {
    let span = document.createElement('span');
    span.innerHTML = ['❤️','💖','💘','💕','💓','💗'][Math.floor(Math.random()*6)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (Math.random() * 5 + 6) + 's';
    span.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    container.appendChild(span);
  }
}

// ---------- POPUP ----------
function showPopup(message) {
  document.getElementById('popupMessage').innerText = message;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

// ---------- MOOD HANDLER ----------
function handleMood(type) {
  const messages = CONFIG.moodMessages[type];
  if (messages) {
    const idx = Math.floor(Math.random() * messages.length);
    showPopup(messages[idx]);
  }
}

// ---------- FUNNY Q&A (EDITABLE) ----------
function renderQA() {
  const container = document.getElementById('qaContainer');
  let html = '';
  roomData.quizQuestions.forEach((qa, idx) => {
    html += `<div class="qa-item" data-idx="${idx}">
      <div class="qa-question">${qa.question}</div>
      <div class="qa-options">`;
    qa.options.forEach((opt, optIdx) => {
      html += `<span class="qa-option" onclick="answerQA(${idx}, ${optIdx})">${opt}</span>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}

function answerQA(qIdx, optIdx) {
  const question = roomData.quizQuestions[qIdx].question;
  const answer = roomData.quizQuestions[qIdx].options[optIdx];
  showPopup(`You chose: "${answer}" 😏\n(That's my girl!)`);
}

function editQA() {
  let newQA = [];
  for (let i = 0; i < roomData.quizQuestions.length; i++) {
    let q = prompt(`Edit question ${i+1}:`, roomData.quizQuestions[i].question);
    if (q === null) return;
    let opts = [];
    for (let j = 0; j < 4; j++) {
      let opt = prompt(`Option ${j+1}:`, roomData.quizQuestions[i].options[j]);
      if (opt === null) return;
      opts.push(opt);
    }
    newQA.push({ question: q, options: opts });
  }
  roomData.quizQuestions = newQA;
  saveRoomData();
  renderQA();
  showPopup("Q&A updated! ✅");
}

// ---------- OPEN WHEN ----------
function openWhen(key) {
  showPopup(CONFIG.openWhen[key] || "I'm here for you always ❤️");
}

// ---------- POETRY ----------
function showRandomPoem() {
  const idx = Math.floor(Math.random() * CONFIG.poems.length);
  document.getElementById('poetryDisplay').textContent = CONFIG.poems[idx];
}

// ---------- APOLOGY ----------
function showApology() {
  showPopup(CONFIG.apology);
}

// ---------- TEASING AI ----------
function teaseMe() {
  const idx = Math.floor(Math.random() * CONFIG.teaseLines.length);
  showPopup(CONFIG.teaseLines[idx]);
}

// ---------- GALLERY (with tags) ----------
const imageUpload = document.getElementById('imageUpload');
imageUpload.addEventListener('change', function(e) {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(ev) {
      const imgData = ev.target.result;
      roomData.gallery.push(imgData);
      roomData.galleryTags[imgData] = "New photo 📸"; // default tag
      saveRoomData();
      loadGallery();
    };
    reader.readAsDataURL(file);
  });
});

function loadGallery() {
  const galleryDiv = document.getElementById('gallery');
  galleryDiv.innerHTML = '';
  roomData.gallery.forEach((src, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${src}" alt="memory" onclick="editTag('${src}')">
                       <div class="gallery-tag" onclick="editTag('${src}')">${roomData.galleryTags[src] || 'Add tag'}</div>`;
    galleryDiv.appendChild(item);
  });
}

function editTag(src) {
  const newTag = prompt("Enter a tag for this photo:", roomData.galleryTags[src] || "");
  if (newTag !== null) {
    roomData.galleryTags[src] = newTag;
    saveRoomData();
    loadGallery();
  }
}

// ---------- GAMES ----------
function startMemoryGame() {
  if (roomData.gallery.length < 4) {
    showPopup("Add at least 4 photos first!");
    return;
  }
  const gameArea = document.getElementById('gameArea');
  gameArea.style.display = 'block';
  gameArea.innerHTML = '<h3>🧠 Memory Match</h3><div class="game-board" id="memoryBoard"></div>';
  const board = document.getElementById('memoryBoard');
  let cards = [];
  let selected = [];
  let matched = 0;

  // Use up to 8 photos (duplicate to make pairs)
  let images = roomData.gallery.slice(0, 8);
  while (images.length < 8) images = images.concat(images.slice(0, 8 - images.length));
  images = images.slice(0, 8);
  let deck = [...images, ...images];
  deck.sort(() => Math.random() - 0.5);

  deck.forEach((src, idx) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.src = src;
    card.dataset.index = idx;
    card.addEventListener('click', () => {
      if (card.classList.contains('flipped') || card.classList.contains('matched') || selected.length === 2) return;
      card.classList.add('flipped');
      card.style.backgroundImage = `url(${src})`;
      selected.push(card);
      if (selected.length === 2) {
        if (selected[0].dataset.src === selected[1].dataset.src) {
          selected.forEach(c => { c.classList.add('matched'); c.style.visibility = 'hidden'; });
          matched += 2;
          if (matched === deck.length) {
            showPopup("🎉 You won! You have a great memory!");
            gameArea.style.display = 'none';
          }
          selected = [];
        } else {
          setTimeout(() => {
            selected.forEach(c => {
              c.classList.remove('flipped');
              c.style.backgroundImage = '';
            });
            selected = [];
          }, 1000);
        }
      }
    });
    board.appendChild(card);
  });
}

function startHeartsGame() {
  const gameArea = document.getElementById('gameArea');
  gameArea.style.display = 'block';
  gameArea.innerHTML = '<h3>❤️ Catch the Hearts</h3><div class="hearts-game" id="heartsGame"></div><p>Score: <span id="heartScore">0</span></p>';
  const heartsGame = document.getElementById('heartsGame');
  const scoreSpan = document.getElementById('heartScore');
  let score = 0;

  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 90 + '%';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
    heart.addEventListener('click', () => {
      score++;
      scoreSpan.textContent = score;
      heart.remove();
    });
    heartsGame.appendChild(heart);
    setTimeout(() => { if (heart.parentNode) heart.remove(); }, 4000);
  }, 700);
  // Stop after 30 seconds
  setTimeout(() => { clearInterval(gameInterval); gameArea.style.display = 'none'; }, 30000);
}

// ---------- SECRET DIARY ----------
function unlockDiary() {
  const pwd = document.getElementById('diaryPassword').value.toLowerCase();
  if (pwd === roomData.secretPassword) {
    document.getElementById('diaryMessage').textContent = roomData.secretLetter;
  } else {
    showPopup("Wrong password! Hint: one of the pet names.");
  }
}

// ---------- VOICE RECORDER ----------
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const playback = document.getElementById('voicePlayback');
        playback.src = audioUrl;
        playback.style.display = 'block';
        document.getElementById('voiceStatus').textContent = '✅ Voice recorded! Press play 💕';
        document.getElementById('playRecord').disabled = false;
        audioChunks = [];
      };
    })
    .catch(err => document.getElementById('voiceStatus').textContent = '🎤 Need mic access');
}

document.getElementById('startRecord').addEventListener('click', () => {
  if (!mediaRecorder) return;
  audioChunks = [];
  mediaRecorder.start();
  document.getElementById('startRecord').disabled = true;
  document.getElementById('stopRecord').disabled = false;
  document.getElementById('playRecord').disabled = true;
  document.getElementById('voiceStatus').textContent = '🔴 Recording...';
  document.getElementById('voicePlayback').style.display = 'none';
});

document.getElementById('stopRecord').addEventListener('click', () => {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    document.getElementById('startRecord').disabled = false;
    document.getElementById('stopRecord').disabled = true;
  }
});

document.getElementById('playRecord').addEventListener('click', () => {
  document.getElementById('voicePlayback').play();
});

// ---------- SURPRISE GENERATOR ----------
function surprise() {
  const idx = Math.floor(Math.random() * CONFIG.surprises.length);
  document.getElementById('surpriseMessage').textContent = '🎀 ' + CONFIG.surprises[idx];
}

// ---------- ANIMATED CHARACTER ----------
document.getElementById('character').addEventListener('click', () => {
  const msgs = ["I love you 💖", "You're my favorite", "Tap again!", "😘", "Be mine always"];
  showPopup(msgs[Math.floor(Math.random() * msgs.length)]);
});

// ---------- ADDITIONAL: SETTINGS (optional) ----------
// You can add more features here...