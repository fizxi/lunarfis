/* ==========================================================================
   LUNARFIS — script.js
   All content below is placeholder data. Edit the arrays in DATA to update
   members, projects, activities, gallery items and achievements.
   ========================================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Reusable subtle gradient "visual fills" so nothing depends on external
   images — easy to swap for real photos later by replacing the element's
   background with an <img>. */
const VISUAL_FILLS = [
  'linear-gradient(135deg,#1a2540,#0b0f1a)',
  'linear-gradient(135deg,#243256,#101828)',
  'linear-gradient(135deg,#2c3a5c,#0d1220)',
  'linear-gradient(135deg,#182136,#060810)',
  'linear-gradient(135deg,#334469,#0f1626)',
  'linear-gradient(135deg,#1f2c4a,#0a0d16)'
];
function fillFor(i){ return VISUAL_FILLS[i % VISUAL_FILLS.length]; }

/* ==========================================================================
   DATA
   ========================================================================== */
const DATA = {
  members: [
    { name: 'Alden Rasyid', role: 'Pendiri', desc: 'Memulai LUNARFIS dengan ide sederhana: membangun hal-hal yang layak dibanggakan.', socials: ['ig','gh','yt'] },
    { name: 'Kirana Ayu', role: 'Ketua', desc: 'Menjaga tim tetap selaras, termotivasi, dan bergerak ke arah yang sama.', socials: ['ig','tt'] },
    { name: 'Bregas Nara', role: 'Pengembang', desc: 'Mengubah ide menjadi kode yang berjalan, satu commit demi satu commit.', socials: ['gh','ig'] },
    { name: 'Sania Dewi', role: 'Desainer', desc: 'Membentuk tampilan dan nuansa dari setiap karya LUNARFIS.', socials: ['ig','tt'] },
    { name: 'Rafif Aditya', role: 'Kreator Konten', desc: 'Menceritakan kisah LUNARFIS lewat video, foto, dan tulisan.', socials: ['ig','yt'] },
    { name: 'Naia Putri', role: 'Periset', desc: 'Menggali detail agar kelompok ini membangun sesuatu di atas fondasi yang kuat.', socials: ['gh','ig'] },
    { name: 'Farrel Wibowo', role: 'Editor', desc: 'Menyempurnakan setiap tulisan dan rekaman sebelum dipublikasikan.', socials: ['yt','ig'] },
    { name: 'Zahra Larasati', role: 'Anggota', desc: 'Membawa energi dan ide segar di setiap sesi LUNARFIS.', socials: ['ig','tt'] }
  ],

  projects: [
    { name: 'LunarWeb', category: 'Pengembangan Web', desc: 'Sebuah proyek situs web modern yang dibuat oleh tim LUNARFIS.' },
    { name: 'Digital Archive', category: 'Sistem Informasi', desc: 'Sebuah platform digital untuk mengelola informasi dan sumber daya kreatif.' },
    { name: 'Creative Lab', category: 'Eksperimental', desc: 'Ruang eksperimen untuk menjelajahi ide dan teknologi baru.' },
    { name: 'Nightframe', category: 'Penyuntingan Video', desc: 'Serial video pendek yang mendokumentasikan proses kelompok ini.' },
    { name: 'Orbit Notes', category: 'Alat Produktivitas', desc: 'Aplikasi pencatat minimalis yang dibuat untuk sesi kerja fokus di malam hari.' },
    { name: 'Studio Type', category: 'Desain Grafis', desc: 'Sistem identitas visual yang mengeksplorasi tipografi, grid, dan gerakan.' },
    { name: 'LunarPlays', category: 'Komunitas Game', desc: 'Server dan turnamen game internal tempat anggota LUNARFIS main bareng dan bertanding.' }
  ],

  activities: [
    { title: 'Pengembangan Web', desc: 'Membangun situs dan aplikasi web dari ide hingga rilis.', icon: 'code' },
    { title: 'Pemrograman', desc: 'Melatih logika dan pemecahan masalah lewat proyek nyata.', icon: 'terminal' },
    { title: 'Desain Grafis', desc: 'Merancang visual, tata letak, dan sistem identitas.', icon: 'layers' },
    { title: 'Penyuntingan Video', desc: 'Mengolah rekaman menjadi cerita yang layak ditonton.', icon: 'film' },
    { title: 'Riset', desc: 'Mempelajari alat, tren, dan teknologi baru.', icon: 'search' },
    { title: 'Proyek Sekolah', desc: 'Menerapkan apa yang kami bangun ke tugas kelas nyata.', icon: 'book' },
    { title: 'Diskusi Tim', desc: 'Membahas ide sebelum mengubahnya menjadi rencana.', icon: 'chat' },
    { title: 'Eksperimen Kreatif', desc: 'Mencoba hal-hal tanpa hasil yang pasti, hanya karena rasa ingin tahu.', icon: 'spark' },
    { title: 'Gaming Bareng', desc: 'Main game bersama untuk seru-seruan sekaligus mempererat tim.', icon: 'gamepad' },
    { title: 'Turnamen Game', desc: 'Mengikuti dan menggelar kompetisi game antar anggota maupun komunitas lain.', icon: 'trophy' }
  ],

  gallery: [
    { label: 'Tim', tall: true },
    { label: 'Proyek', tall: false },
    { label: 'Kegiatan', tall: true },
    { label: 'Acara', tall: false },
    { label: 'Di Balik Layar', tall: false },
    { label: 'Tim', tall: false },
    { label: 'Proyek', tall: true },
    { label: 'Kegiatan', tall: false },
    { label: 'Acara', tall: true },
    { label: 'Di Balik Layar', tall: false },
    { label: 'Tim', tall: false },
    { label: 'Proyek', tall: false },
    { label: 'Gaming', tall: true },
    { label: 'Gaming', tall: false }
  ],

  achievements: [
    { title: 'Kompetisi Pengembangan Web', year: '2026', category: 'Kompetisi', desc: 'Berpartisipasi dalam kompetisi teknologi dan pengembangan web.' },
    { title: 'Penghargaan Proyek Kreatif Terbaik', year: '2025', category: 'Penghargaan', desc: 'Diakui atas proyek orisinal yang memadukan desain dan kode.' },
    { title: 'Pameran Teknologi Regional', year: '2025', category: 'Pameran', desc: 'Mempresentasikan proyek LUNARFIS di pameran teknologi tingkat regional.' },
    { title: 'Program Inovasi Sekolah', year: '2024', category: 'Program', desc: 'Terpilih untuk mengikuti inisiatif inovasi tingkat sekolah.' },
    { title: 'Fitur Kolaborasi Komunitas', year: '2024', category: 'Fitur', desc: 'Ditampilkan atas kerja sama dengan komunitas pelajar lain.' },
    { title: 'Juara Turnamen Game Antar Komunitas', year: '2026', category: 'Gaming', desc: 'Meraih juara dalam turnamen game yang diadakan bersama komunitas lain.' }
  ]
};

const ICONS = {
  code: '<path d="M17 8l6 8-6 8M15 8l-6 8 6 8" stroke-linecap="round" stroke-linejoin="round"/>',
  terminal: '<rect x="6" y="8" width="28" height="24" rx="3"/><path d="M12 16l6 4-6 4M22 24h6" stroke-linecap="round"/>',
  layers: '<path d="M20 6 6 14l14 8 14-8-14-8Z"/><path d="M6 22l14 8 14-8M6 28l14 8 14-8"/>',
  film: '<rect x="6" y="9" width="28" height="22" rx="2"/><path d="M6 15h28M6 25h28M13 9v6M13 25v6M27 9v6M27 25v6"/>',
  search: '<circle cx="17" cy="17" r="10"/><path d="M25 25l7 7" stroke-linecap="round"/>',
  book: '<path d="M6 8h11c2.2 0 4 1.8 4 4v20c0-2.2-1.8-4-4-4H6V8Z"/><path d="M34 8H23c-2.2 0-4 1.8-4 4v20c0-2.2 1.8-4 4-4h11V8Z"/>',
  chat: '<path d="M6 10h28v16H16l-6 6V26H6V10Z" stroke-linejoin="round"/>',
  spark: '<path d="M20 6l3 11 11 3-11 3-3 11-3-11-11-3 11-3 3-11Z" stroke-linejoin="round"/>',
  gamepad: '<rect x="5" y="15" width="30" height="16" rx="8"/><path d="M13 19v8M9 23h8" stroke-linecap="round"/><circle cx="26" cy="20" r="1.6" fill="currentColor" stroke="none"/><circle cx="30" cy="24" r="1.6" fill="currentColor" stroke="none"/>',
  trophy: '<path d="M12 8h16v8a8 8 0 0 1-16 0V8Z"/><path d="M12 10H7a5 5 0 0 0 5 7M28 10h5a5 5 0 0 1-5 7"/><path d="M20 24v6M14 34h12M17 30h6" stroke-linecap="round"/>'
};

const SOCIAL_ICON_SVG = {
  ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  tt: '<path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 4c.5 2.5 2 4 5 4.3"/>',
  gh: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  yt: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.5v5l4.5-2.5Z" fill="currentColor" stroke="none"/>',
  dc: '<rect x="4" y="6" width="16" height="12" rx="5"/><circle cx="9" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.2" fill="currentColor" stroke="none"/>'
};

function initials(name){
  return name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
}

/* ==========================================================================
   RENDER: Members
   ========================================================================== */
function renderMembers(){
  const grid = document.getElementById('memberGrid');
  grid.innerHTML = DATA.members.map((m, i) => `
    <article class="member-card">
      <div class="member-card__photo" style="background:${fillFor(i)}">
        <div class="avatar-orb">${initials(m.name)}</div>
      </div>
      <div class="member-card__body">
        <h3 class="member-card__name">${m.name}</h3>
        <p class="member-card__role">${m.role}</p>
        <p class="member-card__desc">${m.desc}</p>
        <div class="member-card__social">
          ${m.socials.map(s => `<a href="#" aria-label="${s}"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6">${SOCIAL_ICON_SVG[s]}</svg></a>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   RENDER: Projects
   ========================================================================== */
function renderProjects(){
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = DATA.projects.map((p, i) => `
    <article class="project-card">
      <div class="project-card__visual">
        <div class="visual-fill" style="background:${fillFor(i)};width:100%;height:100%"></div>
      </div>
      <div class="project-card__body">
        <p class="project-card__category">${p.category}</p>
        <h3 class="project-card__title">${p.name}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <a href="#" class="project-card__link">Lihat Proyek
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   RENDER: Activities
   ========================================================================== */
function renderActivities(){
  const grid = document.getElementById('activityGrid');
  grid.innerHTML = DATA.activities.map(a => `
    <article class="activity-card">
      <span class="activity-card__icon">
        <svg viewBox="0 0 40 40" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5">${ICONS[a.icon]}</svg>
      </span>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
    </article>
  `).join('');
}

/* ==========================================================================
   RENDER: Gallery
   ========================================================================== */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = DATA.gallery.map((g, i) => `
    <figure class="gallery__item" data-category="${g.label}" data-index="${i}">
      <div class="visual-fill" style="background:${fillFor(i)};height:${g.tall ? 260 : 170}px"></div>
    </figure>
  `).join('');

  grid.querySelectorAll('.gallery__item').forEach(item => {
    item.setAttribute('data-label', item.dataset.category);
    item.addEventListener('click', () => openLightbox(item));
  });
}

/* ==========================================================================
   RENDER: Achievements
   ========================================================================== */
function renderAchievements(){
  const grid = document.getElementById('achievementGrid');
  grid.innerHTML = DATA.achievements.map(a => `
    <article class="achievement-card">
      <div class="achievement-card__top">
        <span class="achievement-card__year">${a.year}</span>
        <span class="achievement-card__category">${a.category}</span>
      </div>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
    </article>
  `).join('');
}

/* ==========================================================================
   Gallery filter
   ========================================================================== */
function initGalleryFilter(){
  const buttons = document.querySelectorAll('.filter-btn');
  const items = () => document.querySelectorAll('.gallery__item');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items().forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });
}

/* ==========================================================================
   Lightbox
   ========================================================================== */
function openLightbox(item){
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const fill = item.querySelector('.visual-fill').style.background;

  img.style.background = fill;
  caption.textContent = `LUNARFIS \u2014 ${item.dataset.category}`;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function initLightbox(){
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ==========================================================================
   Navbar: scroll state, active link, mobile menu
   ========================================================================== */
function initNavbar(){
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = Array.from(document.querySelectorAll('section[id]'));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => spy.observe(s));
}

/* ==========================================================================
   Reveal on scroll
   ========================================================================== */
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  if (prefersReducedMotion){
    els.forEach(el => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Counter animation
   ========================================================================== */
function initCounters(){
  const counters = document.querySelectorAll('.stat__number');
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    if (prefersReducedMotion){ el.textContent = target; return; }
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ==========================================================================
   Starfield background (hero canvas)
   ========================================================================== */
function initStarfield(){
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let w, h, dpr;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.parentElement.offsetWidth;
    h = canvas.parentElement.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round((w * h) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2,
      base: Math.random() * 0.5 + 0.25,
      speed: Math.random() * 0.015 + 0.004,
      phase: Math.random() * Math.PI * 2
    }));
  }

  let t = 0;
  function draw(){
    ctx.clearRect(0, 0, w, h);
    t += 1;
    stars.forEach(s => {
      const twinkle = prefersReducedMotion ? s.base : s.base + Math.sin(t * s.speed + s.phase) * 0.35;
      ctx.beginPath();
      ctx.fillStyle = `rgba(230,236,250,${Math.max(twinkle, 0.05)})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

/* ==========================================================================
   Cursor glow (desktop pointer only)
   ========================================================================== */
function initCursorGlow(){
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const glow = document.querySelector('.cursor-glow');
  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

/* ==========================================================================
   Contact form (client-side only demo)
   ========================================================================== */
function initContactForm(){
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', e => {
    e.preventDefault();
    note.textContent = 'Terima kasih — pesan Anda telah tercatat. Ganti fungsi ini dengan backend atau layanan formulir Anda sendiri.';
    form.reset();
  });
}

/* ==========================================================================
   Init
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderMembers();
  renderProjects();
  renderActivities();
  renderGallery();
  renderAchievements();

  initNavbar();
  initGalleryFilter();
  initLightbox();
  initReveal();
  initCounters();
  initStarfield();
  initCursorGlow();
  initContactForm();
});