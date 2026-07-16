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

// ── CHATBOT ENGINE ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const fabBtn = document.getElementById('fab-btn');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    if (!chatWindow || !fabBtn) return;

    // Toggle chat window
    fabBtn.addEventListener('click', () => {
        const isHidden = chatWindow.getAttribute('aria-hidden') === 'true';
        chatWindow.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
        chatWindow.classList.toggle('active', isHidden);
        if (isHidden) {
            chatInput.focus();
        }
    });

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatWindow.setAttribute('aria-hidden', 'true');
            chatWindow.classList.remove('active');
        });
    }

    const assistantAnswers = {
        "default": "I'm Nanbol's AI Assistant. You can ask me about his projects (PR-AI Auditor, Tarok Nurses System, Mossy Escape), experience (GDG Babcock, NNPC, PICTDA), or skills!",
        "pr-ai": "PR-AI Auditor is Nanbol's flagship project. It's an AI-powered code review platform built using Laravel, OpenAI API, Monaco Editor, and Diff2HTML. It reduces manual code review time by up to 80% with precise line-level feedback.",
        "gdg": "Nanbol is the Technical Co-lead at GDG on Campus Babcock (July 2026 – Present). He co-leads the dev team to build and ship campus projects, using project management, technical leadership, and Git collaboration skills.",
        "nnpc": "Nanbol was an AI & Automation intern at NNPC Limited (Feb 2026 – June 2026), where he built internal AI agents and automated workflows with n8n and OpenAI integrations.",
        "pictda": "Nanbol interned at Plateau State ICT Development Agency (PICTDA) from Jan 2026 to Feb 2026, focusing on Django, Flask, and robust government-level backend systems.",
        "skills": "Nanbol's core skills include:\n- Backend: Python, Django, Flask, PHP, Laravel, REST APIs\n- AI & Automation: n8n workflows, OpenAI Integration, LLM Tooling\n- Data & Tools: MySQL, phpMyAdmin, Brevo, Git, Linux (Ubuntu)",
        "contact": "You can connect with Nanbol via:\n- Email: nanboldassak2@gmail.com\n- GitHub: github.com/Bolitupac\n- LinkedIn: linkedin.com/in/nanbol-dassak-444090292\n- X: x.com/bolitupac"
    };

    function getAIResponse(query) {
        const q = query.toLowerCase();
        if (q.includes("pr-ai") || q.includes("auditor")) return assistantAnswers["pr-ai"];
        if (q.includes("gdg") || q.includes("campus") || q.includes("co-lead") || q.includes("colead")) return assistantAnswers["gdg"];
        if (q.includes("nnpc") || q.includes("petroleum")) return assistantAnswers["nnpc"];
        if (q.includes("pictda") || q.includes("plateau")) return assistantAnswers["pictda"];
        if (q.includes("skills") || q.includes("languages") || q.includes("tech") || q.includes("stack") || q.includes("framework")) return assistantAnswers["skills"];
        if (q.includes("contact") || q.includes("email") || q.includes("social") || q.includes("hire") || q.includes("reach")) return assistantAnswers["contact"];
        return assistantAnswers["default"];
    }

    function appendMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `chat-msg ${sender}`;
        msg.textContent = text;
        chatMessages.appendChild(msg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        chatInput.value = '';

        // Typing indicator
        const typing = document.createElement('div');
        typing.className = 'chat-msg system typing';
        typing.textContent = 'Typing...';
        chatMessages.appendChild(typing);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            typing.remove();
            const reply = getAIResponse(text);
            appendMessage(reply, 'system');
        }, 600);
    }

    if (chatSend) {
        chatSend.addEventListener('click', handleSend);
    }
    if (chatInput) {
        chatInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') handleSend();
        });
    }

    // Quick replies
    document.querySelectorAll('.quick-reply-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const query = this.getAttribute('data-query');
            if (query) {
                appendMessage(query, 'user');
                const reply = getAIResponse(query);
                setTimeout(() => appendMessage(reply, 'system'), 300);
            }
        });
    });
});

console.log('Portfolio classic page loaded. NFD theme active.');
