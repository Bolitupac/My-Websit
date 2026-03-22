/* ================================================
   NANBOL FELIX DASSAK — portfolio.js (Classic Page)
   Dark/Light Toggle · Nav · Hire Modal · Fog-of-scroll
   ================================================ */

// ── THEME ─────────────────────────────────────────
let theme = 'dark';

function applyTheme(t) {
    theme = t;
    document.documentElement.setAttribute('data-theme', t);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = t === 'dark' ? '☀ Light' : '🌙 Dark';
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
});

// ── HAMBURGER NAV ─────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });
}

// ── SMOOTH SCROLL (accounting for floating nav height) ────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navOffset = 90; // floating nav ~60px + 16px top + 14px buffer
            const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ── ACTIVE NAV LINK ───────────────────────────────
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
});

// ── HIRE MODAL ────────────────────────────────────
const hireModal = document.getElementById('hire-modal');
const modalClose = document.getElementById('modal-close');

function openModal() {
    if (!hireModal) return;
    hireModal.classList.add('active');
    hireModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    if (!hireModal) return;
    hireModal.classList.remove('active');
    hireModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelectorAll('.hire-trigger').forEach(btn => btn.addEventListener('click', openModal));
if (modalClose) modalClose.addEventListener('click', closeModal);
if (hireModal) {
    hireModal.addEventListener('click', e => { if (e.target === hireModal) closeModal(); });
}
window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && hireModal?.classList.contains('active')) closeModal();
});

// ── FADE-IN OBSERVER ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
        '.glass, .project-card, .skill-card, .exp-card, .contact-card, .stats-float-item, .current-focus, .prai-feature-card'
    ).forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

    // ── BUTTON RIPPLE ─────────────────────────────
    document.querySelectorAll('.btn-primary, .btn-ghost, .btn-accent, .btn-execute').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.cssText = [
                'position:absolute',
                'border-radius:50%',
                'pointer-events:none',
                `width:${size}px`,
                `height:${size}px`,
                `left:${e.clientX - rect.left - size / 2}px`,
                `top:${e.clientY - rect.top - size / 2}px`,
                'background:rgba(255,255,255,0.25)',
                'transform:scale(0)',
                'animation:ripplePop 0.55s linear',
            ].join(';');
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 560);
        });
    });
});

// inject ripple keyframes
const ks = document.createElement('style');
ks.textContent = `@keyframes ripplePop { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(ks);

console.log('Portfolio classic page loaded. n8n canvas visual theme active.');
