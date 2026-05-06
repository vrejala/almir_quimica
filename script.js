'use strict';

/* ============================================================
   QUIZ DATA
   ============================================================ */
const QUESTIONS = [
  {
    text: 'Qual é o seu objetivo principal agora?',
    subtitle: 'Seja honesto, isso vai definir o caminho certo para você.',
    options: [
      { value: 'enem',  icon: '🎯', title: 'Passar no ENEM em 2026',          desc: 'Quero entrar numa universidade pública' },
      { value: 'med',   icon: '🩺', title: 'Passar em Medicina',               desc: 'Meu sonho é cursar Medicina nas melhores faculdades' },
      { value: 'base',  icon: '📚', title: 'Melhorar minha nota em Química',   desc: 'Tô com dificuldade e quero entender de vez' },
      { value: 'retry', icon: '🔁', title: 'Nova tentativa, já fiz o ENEM',   desc: 'Quero resultados melhores desta vez' },
    ],
  },
  {
    text: 'Quando você vê alguém sendo aprovado em Medicina, você pensa:',
    subtitle: 'Seja honesto, essa resposta revela muito sobre onde você está agora.',
    options: [
      { value: 'believe',   icon: '💪', title: 'Eu também consigo',                              desc: 'Tenho convicção que meu caminho é esse' },
      { value: 'far',       icon: '😔', title: 'Ainda estou longe disso',                        desc: 'Parece um objetivo difícil de alcançar' },
      { value: 'uncertain', icon: '🤔', title: 'Estou tentando, mas não sei se estou no caminho', desc: 'Faço minha parte, mas a dúvida bate às vezes' },
      { value: 'strategy',  icon: '🧭', title: 'Preciso estudar de forma mais estratégica',      desc: 'Sei que consigo, mas falta o método certo' },
    ],
  },
  {
    text: 'Como você se sente em relação à Química hoje?',
    subtitle: 'Sem julgamentos, essa resposta vai te ajudar muito.',
    options: [
      { value: 'zero',  icon: '😰', title: 'Trava total, não entendo nada',        desc: 'Quando vejo a matéria, bate aquele desespero' },
      { value: 'mid',   icon: '😕', title: 'Entendo um pouco, mas travo nas contas', desc: 'A teoria vai, mas os cálculos me perdem' },
      { value: 'apply', icon: '🤔', title: 'Entendo a teoria, mas erro nas provas',  desc: 'Estudo bastante, mas na hora H erro' },
      { value: 'ok',    icon: '💪', title: 'Tenho uma base razoável',               desc: 'Só preciso de método e foco no que cai' },
    ],
  },
  {
    text: 'Quanto tempo você dedica aos estudos de Química por semana?',
    subtitle: 'Média real, não o ideal que você gostaria de estudar.',
    options: [
      { value: 't0', icon: '😬', title: 'Quase nenhum, menos de 1 hora', desc: 'Fica difícil encaixar na rotina' },
      { value: 't1', icon: '📖', title: 'Entre 1 e 3 horas',             desc: 'Estudo quando dá, mas poderia ser mais constante' },
      { value: 't2', icon: '⏰', title: 'Entre 3 e 6 horas',             desc: 'Tenho uma rotina, mas sinto que poderia render mais' },
      { value: 't3', icon: '🔥', title: 'Mais de 6 horas',               desc: 'Estudo bastante, mas o resultado não tá aparecendo' },
    ],
  },
  {
    text: 'Qual dessas situações mais te identifica quando estuda?',
    subtitle: 'Aquela que mais acontece no seu dia a dia.',
    options: [
      { value: 'video',  icon: '🎥', title: 'Assisto a videoaulas e não fixo nada', desc: 'Parece que entra por um ouvido e sai pelo outro' },
      { value: 'pdf',    icon: '📄', title: 'Acumulo PDFs e apostilas, mas raramente leio',    desc: 'Arquivo tudo, mas a leitura não acontece' },
      { value: 'lost',   icon: '😵', title: 'Estudo sozinho e não sei se estou no caminho',     desc: 'Falta alguém para direcionar' },
      { value: 'method', icon: '✅', title: 'Sigo um método, mas preciso de mais',           desc: 'Tenho disciplina, mas falta profundidade' },
    ],
  },
  {
    text: 'O ENEM ou vestibular que você vai fazer é daqui a quanto tempo?',
    subtitle: 'Isso vai definir a urgência do seu plano.',
    options: [
      { value: 'urgent',   icon: '🚨', title: 'Menos de 3 meses',            desc: 'Preciso de resultado rápido agora' },
      { value: 'mid_time', icon: '📅', title: 'Entre 3 e 6 meses',           desc: 'Tenho um tempo razoável, mas não posso perder' },
      { value: 'long',     icon: '📆', title: 'Mais de 6 meses',             desc: 'Ainda tenho tempo para construir uma base sólida' },
      { value: 'undef',    icon: '🤷', title: 'Ainda não decidi a data',     desc: 'Estou me organizando antes de definir' },
    ],
  },
  {
    text: 'O que mais te trava nos estudos de Química?',
    subtitle: 'Escolha o principal, o que faz você travar de verdade.',
    options: [
      { value: 'calc',    icon: '🧮', title: 'Os cálculos e as fórmulas de Química',           desc: 'Estequiometria, mol, concentração, travei aqui' },
      { value: 'theory',  icon: '🧪', title: 'A teoria e os conceitos',          desc: 'Ligação química, funções, reações, tudo parece abstrato' },
      { value: 'interp',  icon: '📝', title: 'Interpretar as questões de MED',  desc: 'Sei a matéria mas não entendo o que a prova pede' },
      { value: 'anxiety', icon: '🧠', title: 'Ansiedade e nervosismo',       desc: 'Quando bate o nervoso, tudo que estudei some' },
    ],
  },
  {
    text: 'Se você pudesse mudar uma coisa hoje nos seus estudos de Química, o que mais faria diferença?',
    subtitle: 'Aquela mudança que faria você evoluir mais rápido.',
    options: [
      { value: 'plan',     icon: '🗺️', title: 'Saber exatamente o que estudar',         desc: 'Sem perder tempo com o que quase não cai' },
      { value: 'teacher',  icon: '👨‍🏫', title: 'Ter alguém que explique de forma simples', desc: 'Sem fazer Química parecer impossível' },
      { value: 'material', icon: '🎯', title: 'Focar no que realmente cai nas provas',   desc: 'Mais estratégia, menos enrolação' },
      { value: 'support',  icon: '🤝', title: 'Ter acompanhamento quando eu travar',      desc: 'Sem ficar perdido(a) estudando sozinho(a)' },
    ],
  },
];

const PROFILES = {
  med_high: {
    badgeClass: 'profile-badge--blue',
    badgeLabel: 'Candidato a Medicina',
    title: 'Você tem o perfil certo, falta o método correto',
    desc: 'Seu objetivo é claro e sua motivação é alta. O que está faltando é uma preparação especializada que fale a língua dos vestibulares de Medicina. Com o direcionamento certo, sua aprovação está muito mais perto do que parece.',
    diagnosis: [
      { label: 'Motivação',        pct: 92, color: 'green' },
      { label: 'Base de Química',  pct: 48, color: 'amber' },
      { label: 'Método',           pct: 35, color: 'red'   },
      { label: 'Foco no conteúdo', pct: 40, color: 'amber' },
    ],
    product: {
      badge: 'Ideal para você',
      name: 'Extensivo de Química para Medicina — Premium',
      desc: 'Aulas semanais ao vivo, material completo impresso na sua casa, simulados das principais bancas (FUVEST, UNICAMP, UERJ, VUNESP) e plantão de dúvidas direto com o Prof. Almir.',
      price: 'R$ 2.850',
      installments: 'ou 12x de R$ 294,76',
      url: 'https://almirvieiraquimica.com.br/medicina/',
      cta: 'Quero garantir minha vaga',
    },
    altProduct: {
      badge: 'Alternativa',
      name: 'Extensivo de Química para Medicina — Prime',
      desc: 'Versão digital completa com aulas ao vivo e simulados.',
      price: 'R$ 1.780',
      installments: 'ou 12x de R$ 184,09',
      url: 'https://almirvieiraquimica.com.br/medicina/',
      cta: 'Conhecer o plano Prime',
    },
  },
  enem_focus: {
    badgeClass: 'profile-badge--green',
    badgeLabel: 'Foco no ENEM 2026',
    title: 'Você tem potencial, só precisa de método e foco',
    desc: `Você tem potencial, só precisa de método e foco. A maioria dos erros no ENEM não acontece por falta de esforço, acontece por falta de método. Você estuda, se dedica, mas sente que poderia render muito mais.
    E isso tem um motivo claro.
    Sem estratégia, o estudo não vira acerto de prova.
    Quando você aprende a estudar do jeito certo, com direção e foco no que a banca realmente cobra, sua nota em Química começa a subir de verdade e isso impacta diretamente sua média geral.`,
    diagnosis: [
      { label: 'Motivação',        pct: 78, color: 'green' },
      { label: 'Base de Química',  pct: 42, color: 'amber' },
      { label: 'Método',           pct: 38, color: 'red'   },
      { label: 'Foco no conteúdo', pct: 55, color: 'amber' },
    ],
    product: {
      badge: 'Ideal para você',
      name: 'Extensivo de Química ENEM 2026',
      desc: 'Aulas ao vivo mensais, apostila digital com 15 capítulos, listas de questões do ENEM de 2019 a 2025 e revisão pré-ENEM em outubro e novembro. Tudo que você precisa até o dia da prova.',
      price: 'R$ 697',
      installments: 'ou 12x de R$ 72,09',
      url: 'https://almirvieiraquimica.com.br/extensivo-de-quimica/',
      cta: 'Quero garantir minha vaga',
    },
    altProduct: {
      badge: 'Alternativa',
      name: 'Apostila de Química ENEM 2026',
      desc: '+138 páginas com os temas mais cobrados. Acesso imediato.',
      price: 'R$ 127',
      installments: 'à vista',
      url: 'https://ebook.almirvieiraquimica.com.br/',
      cta: 'Começar pela apostila',
    },
  },
  base_build: {
    badgeClass: 'profile-badge--amber',
    badgeLabel: 'Construindo a Base',
    title: 'Toda aprovação começa pelo começo, e isso é bom',
    desc: 'Você ainda está construindo sua base, e reconhecer isso é o primeiro passo mais inteligente que existe. Quem constrói uma base sólida em Química tem desempenho superior na reta final. Não é tarde, é a hora certa.',
    diagnosis: [
      { label: 'Motivação',        pct: 65, color: 'amber' },
      { label: 'Base de Química',  pct: 22, color: 'red'   },
      { label: 'Método',           pct: 28, color: 'red'   },
      { label: 'Foco no conteúdo', pct: 30, color: 'red'   },
    ],
    product: {
      badge: 'Ideal para você',
      name: 'Mapas Mentais de Química — 1º Ano',
      desc: 'Comece pelos conceitos fundamentais com mapas visuais organizados. O ponto de partida ideal para quem está no começo da jornada.',
      price: 'R$ 47',
      installments: 'acesso imediato',
      url: 'https://ebook.almirvieiraquimica.com.br/mapas-mentais/',
      cta: 'Quero começar agora',
    },
    altProduct: {
      badge: 'Alternativa',
      name: 'Apostila de Química ENEM 2026',
      desc: 'Para avançar logo para o nível ENEM com mais estrutura.',
      price: 'R$ 127',
      installments: 'à vista',
      url: 'https://ebook.almirvieiraquimica.com.br/',
      cta: 'Conhecer a apostila',
    },
  },
};

/* ============================================================
   APP STATE
   ============================================================ */
const appState = {
  currentScreen: 'intro',
  currentQuestion: 0,
  answers: [],
  selectedValue: null,
  profile: null,
  userData: { name: '', email: '' },
  transitioning: false,
};

/* ============================================================
   PARTICLE CANVAS
   ============================================================ */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let rafHandle = null;
const isMobile = () => window.matchMedia('(max-width: 599px)').matches;

function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: 2 + Math.random() * 6,
    opacity: 0.05 + Math.random() * 0.12,
    shape: Math.random() > 0.5 ? 'circle' : 'hexagon',
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.005,
  };
}

function initParticles(count) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(createParticle());
  }
}

function drawHexagon(c, x, y, r, rotation) {
  c.save();
  c.translate(x, y);
  c.rotate(rotation);
  c.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const px = r * Math.cos(angle);
    const py = r * Math.sin(angle);
    if (i === 0) c.moveTo(px, py);
    else c.lineTo(px, py);
  }
  c.closePath();
  c.fill();
  c.restore();
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotSpeed;

    // wrap edges
    if (p.x < -20) p.x = canvas.width + 20;
    if (p.x > canvas.width + 20) p.x = -20;
    if (p.y < -20) p.y = canvas.height + 20;
    if (p.y > canvas.height + 20) p.y = -20;

    ctx.fillStyle = `rgba(29, 158, 117, ${p.opacity})`;

    if (p.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    } else {
      drawHexagon(ctx, p.x, p.y, p.radius, p.rotation);
    }
  }

  rafHandle = requestAnimationFrame(animateParticles);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles(isMobile() ? 20 : 40);
}

/* ============================================================
   SCREEN MANAGEMENT
   ============================================================ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const next = document.getElementById(id);
  next.classList.add('active');
  next.scrollTop = 0;
  appState.currentScreen = id;
}

/* ============================================================
   QUESTION RENDERING
   ============================================================ */
function renderQuestion(animate = true) {
  const q = QUESTIONS[appState.currentQuestion];
  const card = document.getElementById('question-card');
  const grid = document.getElementById('option-grid');

  // Update decorative number
  const numStr = String(appState.currentQuestion + 1).padStart(2, '0');
  document.getElementById('question-num-deco').textContent = numStr;

  // Update question text
  document.getElementById('question-text').textContent = q.text;
  document.getElementById('question-subtitle').textContent = q.subtitle;

  // Update progress bar
  const pct = ((appState.currentQuestion + 1) / QUESTIONS.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';

  // Update counter
  animateCounterFlip(appState.currentQuestion + 1);

  // Update "Next" button text
  const btnNext = document.getElementById('btn-next');
  btnNext.disabled = true;
  btnNext.innerHTML = appState.currentQuestion === QUESTIONS.length - 1
    ? 'Ver meu resultado 🎯'
    : 'Próxima pergunta <span class="btn-arrow">→</span>';

  // Reset selection
  appState.selectedValue = null;

  // Build option cards
  grid.innerHTML = '';
  q.options.forEach(opt => {
    const card = document.createElement('button');
    card.className = 'option-card';
    card.type = 'button';
    card.dataset.value = opt.value;

    const iconEl = document.createElement('span');
    iconEl.className = 'option-card__icon';
    iconEl.textContent = opt.icon;
    iconEl.setAttribute('aria-hidden', 'true');

    const content = document.createElement('span');
    content.className = 'option-card__content';

    const title = document.createElement('span');
    title.className = 'option-card__title';
    title.textContent = opt.title;

    const desc = document.createElement('span');
    desc.className = 'option-card__desc';
    desc.textContent = opt.desc;

    content.appendChild(title);
    content.appendChild(desc);
    card.appendChild(iconEl);
    card.appendChild(content);

    card.addEventListener('click', () => selectOption(opt.value, card));
    grid.appendChild(card);
  });

  // Slide-enter animation
  if (animate) {
    card.classList.remove('slide-exit');
    card.classList.add('slide-enter');
    card.addEventListener('animationend', () => {
      card.classList.remove('slide-enter');
      appState.transitioning = false;
    }, { once: true });
  }
}

/* ============================================================
   COUNTER FLIP ANIMATION
   ============================================================ */
function animateCounterFlip(newNum) {
  const display = document.getElementById('counter-display');
  display.classList.add('exit-up');
  display.addEventListener('animationend', () => {
    display.textContent = newNum;
    display.classList.remove('exit-up');
    display.classList.add('enter-from-down');
    display.addEventListener('animationend', () => {
      display.classList.remove('enter-from-down');
    }, { once: true });
  }, { once: true });
}

/* ============================================================
   OPTION SELECTION
   ============================================================ */
function selectOption(value, cardEl) {
  appState.selectedValue = value;

  // Clear all selected states
  document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));

  // Select clicked card
  cardEl.classList.add('selected');

  // Enable Next button with bounce animation
  const btnNext = document.getElementById('btn-next');
  const wasDisabled = btnNext.disabled;
  btnNext.disabled = false;
  if (wasDisabled) {
    btnNext.classList.remove('cta-btn--enabled-anim');
    // Trigger reflow to restart animation
    void btnNext.offsetWidth;
    btnNext.classList.add('cta-btn--enabled-anim');
    btnNext.addEventListener('animationend', () => {
      btnNext.classList.remove('cta-btn--enabled-anim');
    }, { once: true });
  }
}

/* ============================================================
   ADVANCE QUESTION
   ============================================================ */
function advanceQuestion() {
  if (appState.transitioning || appState.selectedValue === null) return;

  appState.transitioning = true;
  appState.answers[appState.currentQuestion] = appState.selectedValue;

  const card = document.getElementById('question-card');
  card.classList.add('slide-exit');

  card.addEventListener('animationend', () => {
    card.classList.remove('slide-exit');

    if (appState.currentQuestion < QUESTIONS.length - 1) {
      appState.currentQuestion++;
      renderQuestion(true);
    } else {
      appState.transitioning = false;
      showResultWithLoading();
    }
  }, { once: true });
}

/* ============================================================
   EMAIL SCREEN
   ============================================================ */
function initEmailScreen() {
  const nameInput = document.getElementById('input-name');
  const emailInput = document.getElementById('input-email');
  const submitBtn = document.getElementById('btn-see-result');

  function checkFields() {
    submitBtn.disabled = !(nameInput.value.trim() && emailInput.value.trim());
  }

  nameInput.addEventListener('input', checkFields);
  emailInput.addEventListener('input', checkFields);

  document.getElementById('email-form').addEventListener('submit', e => {
    e.preventDefault();
    appState.userData.name = nameInput.value.trim();
    appState.userData.email = emailInput.value.trim();
    showResultWithLoading();
  });

  document.getElementById('btn-skip').addEventListener('click', e => {
    e.preventDefault();
    showResultWithLoading();
  });
}

function showResultWithLoading() {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.add('active');

  setTimeout(() => {
    overlay.classList.remove('active');
    appState.profile = calcProfile(appState.answers);
    renderResult();
    showScreen('screen-result');
    triggerConfetti();
  }, 1500);
}

/* ============================================================
   PROFILE CALCULATION
   ============================================================ */
function calcProfile(answers) {
  const obj   = answers[0];
  const nivel = answers[1];
  if (obj === 'med') return 'med_high';
  if (nivel === 'zero' && obj !== 'retry') return 'base_build';
  return 'enem_focus';
}

/* ============================================================
   RESULT RENDERING
   ============================================================ */
function renderResult() {
  const p = PROFILES[appState.profile];

  // Badge
  const badge = document.getElementById('profile-badge');
  badge.className = 'profile-badge ' + p.badgeClass;
  badge.textContent = p.badgeLabel;

  // Title & description
  document.getElementById('result-title').textContent = p.title;
  document.getElementById('result-desc').textContent  = p.desc;

  // Diagnosis bars
  const diagList = document.getElementById('diag-list');
  diagList.innerHTML = '';
  p.diagnosis.forEach((d, i) => {
    const item = document.createElement('div');
    item.className = 'diag-item';

    const header = document.createElement('div');
    header.className = 'diag-item__header';

    const label = document.createElement('span');
    label.className = 'diag-item__label';
    label.textContent = d.label;

    const pctEl = document.createElement('span');
    pctEl.className = 'diag-item__pct';
    pctEl.style.color = d.color === 'green' ? 'var(--green)' : d.color === 'amber' ? 'var(--amber)' : 'var(--red)';
    pctEl.textContent = d.pct + '%';

    header.appendChild(label);
    header.appendChild(pctEl);

    const track = document.createElement('div');
    track.className = 'diag-item__track';

    const fill = document.createElement('div');
    fill.className = 'diag-item__fill diag-item__fill--' + d.color;
    fill.style.width = '0%';
    fill.dataset.targetPct = d.pct;

    track.appendChild(fill);
    item.appendChild(header);
    item.appendChild(track);
    diagList.appendChild(item);
  });

  // Build product cards
  buildProductCard(document.getElementById('product-primary'), p.product, true);
  buildProductCard(document.getElementById('product-alt'), p.altProduct, false);

  // Animate bars after a short delay (confetti + entrance)
  setTimeout(() => {
    const fills = diagList.querySelectorAll('.diag-item__fill');
    fills.forEach((fill, i) => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          fill.style.width = fill.dataset.targetPct + '%';
        });
      }, i * 150);
    });
  }, 600);

  // Animate product cards
  setTimeout(() => {
    document.getElementById('product-primary').classList.add('visible');
    document.getElementById('product-alt').classList.add('visible');
  }, 400);
}

function buildProductCard(el, data, isPrimary) {
  el.innerHTML = '';

  const badge = document.createElement('span');
  badge.className = 'product-card__badge';
  badge.textContent = data.badge;

  const name = document.createElement('h3');
  name.className = 'product-card__name';
  name.textContent = data.name;

  const desc = document.createElement('p');
  desc.className = 'product-card__desc';
  desc.textContent = data.desc;

  const btn = document.createElement('a');
  btn.className = isPrimary ? 'cta-btn cta-btn--primary' : 'cta-btn cta-btn--outline';
  btn.href = data.url;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.innerHTML = data.cta + ' <span class="btn-arrow">→</span>';

  el.appendChild(badge);
  el.appendChild(name);
  el.appendChild(desc);
  el.appendChild(btn);
}

/* ============================================================
   CONFETTI
   ============================================================ */
function triggerConfetti() {
  if (typeof confetti === 'undefined') return;

  const duration = 2000;
  const end = Date.now() + duration;

  const colors = ['#1D9E75', '#5DCAA5', '#F0F0F0', '#EF9F27', '#E1F5EE'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* ============================================================
   RETAKE QUIZ
   ============================================================ */
function retakeQuiz() {
  appState.currentScreen = 'intro';
  appState.currentQuestion = 0;
  appState.answers = [];
  appState.selectedValue = null;
  appState.profile = null;
  appState.userData = { name: '', email: '' };
  appState.transitioning = false;

  // Reset email form
  document.getElementById('input-name').value = '';
  document.getElementById('input-email').value = '';
  document.getElementById('btn-see-result').disabled = true;
  document.getElementById('loading-overlay').classList.remove('active');

  // Reset result screen
  document.getElementById('product-primary').classList.remove('visible');
  document.getElementById('product-alt').classList.remove('visible');

  showScreen('screen-intro');
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  // Canvas
  resizeCanvas();
  animateParticles();
  window.addEventListener('resize', resizeCanvas);

  // Intro screen
  document.getElementById('btn-start').addEventListener('click', () => {
    showScreen('screen-question');
    renderQuestion(false);
    // Trigger initial enter animation manually
    const card = document.getElementById('question-card');
    card.classList.add('slide-enter');
    card.addEventListener('animationend', () => {
      card.classList.remove('slide-enter');
    }, { once: true });
  });

  // Question screen — Next button
  document.getElementById('btn-next').addEventListener('click', advanceQuestion);

  // Email screen
  initEmailScreen();

  // Result screen — retake link
  document.getElementById('btn-retake').addEventListener('click', e => {
    e.preventDefault();
    retakeQuiz();
  });
}

document.addEventListener('DOMContentLoaded', init);
