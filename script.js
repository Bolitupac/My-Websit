/* ================================================
   NANBOL FELIX DASSAK — Portfolio JS Engine
   Pure Vanilla JS | No build tools required
   ================================================ */

// ── DATA ──────────────────────────────────────────

const legacyProjects = [
    {
        name: "One Chance, Mossy Escape",
        role: "Godot 2D Platformer",
        description: "A fast-paced 2D platformer built in Godot with tight movement, responsive collisions, and a focus on replayability.",
        tech: ["Godot Engine", "2D Platformer", "Game Jam"],
        link: "https://youtu.be/55nEclETN2Q",
    },
    {
        name: "Mobile Bank App",
        role: "React Native / Expo",
        description: "A functional prank banking application with an OPay-inspired UI, built to practice mobile UI systems and state handling.",
        tech: ["React Native", "Expo", "UI Prototyping"],
        link: "https://github.com/Bolitupac",
    },
    {
        name: "Foober",
        role: "Food Ordering Website",
        description: "A school-based food ordering platform designed for the deaf and mute community with Paystack integration.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        link: "https://github.com/Bolitupac/Foober",
    },
    {
        name: "Army Website",
        role: "Concept Web Project",
        description: "A conceptual project for a proposed special rapid-response force, featuring a multi-page layout and security-focused storytelling.",
        tech: ["HTML", "CSS", "JavaScript", "Python"],
        link: "https://github.com/Bolitupac/army-website",
    },
];

const featuredProjects = [
    {
        name: "PR-AI AUDITOR",
        role: "AI Code Review Platform",
        description: "A live audit environment for pull requests, using LLM-guided feedback to transform noisy diffs into actionable engineering review.",
        status: "STATUS: IN DEVELOPMENT (ACTIVE)",
        tech: ["Laravel", "OpenAI API", "Monaco Editor", "Diff2HTML"],
        link: "https://pr-ai.onrender.com/auditor",
        kind: "super",
    },
    {
        name: "TAROK NURSES MGMT SYSTEM",
        role: "Healthcare CRUD Platform",
        description: "Digitalizing healthcare records for the Tarok community with secure data management.",
        tech: ["Native PHP", "MySQL", "CRUD Systems", "Admin Workflows"],
        kind: "super",
    },
    {
        name: "WARDROBE PLANNER AI",
        role: "AI Mobile Side Project",
        description: "Using computer vision and LLMs to analyze personal style and plan daily outfits automatically.",
        tech: ["React Native", "Computer Vision", "LLMs", "Mobile UX"],
        kind: "super",
    },
];

const currentFocus = [
    "AI Automation",
    "AI Development",
    "Backend Development",
    "n8n Orchestration",
    "OpenAI Tooling",
];

const archiveCards = [
    ...featuredProjects,
    ...legacyProjects,
    {
        name: "PULL Test",
        role: "Frontend Logic Sandbox",
        description: "A local JavaScript sandbox for testing interactive logic and UI experiments before rolling them into bigger builds.",
        tech: ["JavaScript", "HTML", "CSS"],
    },
    {
        name: "Workflow Experiments",
        role: "Automation Studies",
        description: "Internal flow experiments around AI agents, prompt orchestration, and system design patterns being migrated into the public portfolio.",
        tech: ["Automation", "Prompt Design", "Workflow UX"],
    },
    {
        name: "Backend Utility Builds",
        role: "Private/Internal",
        description: "Smaller backend services and utility scripts used for learning, prototyping, and operational tooling across personal and internship work.",
        tech: ["Python", "PHP", "APIs", "Data Handling"],
    },
];

const contactLinks = [
    { label: "Email",    value: "nanboldassak2@gmail.com",                      href: "mailto:nanboldassak2@gmail.com" },
    { label: "Upwork",   value: "upwork.com/freelancers/~01fee90c3712a0d94f",   href: "https://www.upwork.com/freelancers/~01fee90c3712a0d94f" },
    { label: "Kwork",    value: "kwork.com/user/nanboldassak2",                 href: "https://kwork.com/user/nanboldassak2" },
    { label: "LinkedIn", value: "linkedin.com/in/nanbol-dassak-444090292",       href: "https://linkedin.com/in/nanbol-dassak-444090292" },
    { label: "GitHub",   value: "github.com/Bolitupac",                         href: "https://github.com/Bolitupac" },
    { label: "X",        value: "x.com/bolitupac",                              href: "https://x.com/bolitupac" },
    { label: "Telegram", value: "t.me/Bolitupac",                               href: "https://t.me/Bolitupac" },
];

// ── NODE DEFINITIONS ──────────────────────────────

const nodeBlueprints = [
    {
        id: "start",
        label: "Start",
        title: "AI ENGINEER & AUTOMATION ARCHITECT",
        type: "entry",
        meta: "Identity Node",
        description: "Nanbol Felix Dassak builds AI-driven systems, backend products, and automation workflows with an operator mindset. The portfolio is structured as an execution graph rather than a static timeline.",
        tags: ["Automation Canvas", "OpenAI Tooling", "Backend Systems"],
        panel: {
            heading: "Profile Rebrand",
            body: "Updated from the earlier software-engineer/game-dev framing into a focused AI and automation identity while retaining the original education, project, and contact history.",
        },
    },
    {
        id: "pictda",
        label: "PICTDA Internship",
        title: "Plateau State ICT Development Agency",
        type: "experience",
        meta: "Jan 2026 – Feb 2026",
        description: "Focus on building robust backend systems and government-level web infrastructure.",
        tags: ["Government Tech", "Backend Systems", "Internship"],
        panel: {
            heading: "Execution Scope",
            body: "This phase sharpened production habits around Python frameworks, web delivery, and practical infrastructure thinking inside a public-sector environment.",
        },
    },
    {
        id: "nnpc",
        label: "NNPC Internship",
        title: "NNPC Limited",
        type: "experience",
        meta: "Feb 2026 – June 2026",
        description: "Architecting internal AI agents and automated enterprise workflows to optimize operations.",
        tags: ["Enterprise AI", "Internal Agents", "Workflow Automation"],
        panel: {
            heading: "Enterprise Focus",
            body: "The internship focused on orchestrated automation, AI tooling, and operational systems designed for internal use at enterprise scale.",
        },
    },
    {
        id: "gdg",
        label: "GDG Co-Lead",
        title: "GDG on Campus Babcock",
        type: "experience",
        meta: "July 2026 – Present",
        description: "Co-leading the developer community and core dev team, coordinating sprints, and shipping web products.",
        tags: ["Project Management", "Technical Leadership", "Git Collaboration", "Community"],
        panel: {
            heading: "Technical Leadership",
            body: "Co-leading the developer community and core engineering team. Coordinating sprints, managing project lifecycles, assigning features, and architecting web products to drive technical growth and ship products within the campus community.",
        },
    },
    {
        id: "django",
        label: "Skill",
        title: "Django",
        type: "skill",
        meta: "Backend Stack",
        description: "Used to design durable server-side systems, structure business logic, and ship maintainable web infrastructure.",
        tags: ["Python", "Backend", "Web Apps"],
    },
    {
        id: "flask",
        label: "Skill",
        title: "Flask",
        type: "skill",
        meta: "Backend Stack",
        description: "Useful for lightweight services, prototypes, and custom automation endpoints that need speed and flexibility.",
        tags: ["Python", "APIs", "Prototyping"],
    },
    {
        id: "python",
        label: "Skill",
        title: "Python",
        type: "skill",
        meta: "Core Language",
        description: "The main engine for automation logic, backend services, AI integrations, and experimentation across projects.",
        tags: ["Automation", "AI", "Backend"],
    },
    {
        id: "webdev",
        label: "Skill",
        title: "Web Development",
        type: "skill",
        meta: "Delivery Layer",
        description: "Frontend and backend execution across portfolio sites, CRUD systems, dashboards, and product interfaces.",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
        id: "n8n",
        label: "Automation",
        title: "n8n Workflows",
        type: "automation",
        meta: "Orchestration",
        description: "Workflow-first system design inspired by visual automation canvases, event chaining, and node-based execution.",
        tags: ["Orchestration", "Visual Logic", "Ops"],
    },
    {
        id: "ai-automation",
        label: "Automation",
        title: "AI Automation",
        type: "automation",
        meta: "Current Focus",
        description: "Combining model capabilities with triggers, context, and business rules to reduce manual operational steps.",
        tags: ["Agents", "Workflows", "Operations"],
    },
    {
        id: "openai",
        label: "Automation",
        title: "OpenAI Integration",
        type: "automation",
        meta: "Tooling Layer",
        description: "Building interfaces and prompts that embed LLM capability inside real products instead of demos.",
        tags: ["LLMs", "Prompting", "API Design"],
    },
    {
        id: "tooldev",
        label: "Automation",
        title: "AI Tool Development",
        type: "automation",
        meta: "Product Layer",
        description: "Internal tools, agent experiences, and review systems that package AI into repeatable engineering workflows.",
        tags: ["Product Thinking", "Internal Tools", "AI UX"],
    },
    {
        id: "prai",
        label: "Super Node",
        title: "PR-AI AUDITOR",
        type: "project",
        meta: "Top Priority",
        description: featuredProjects[0].description,
        tags: featuredProjects[0].tech,
        link: featuredProjects[0].link,
        status: featuredProjects[0].status,
    },
    {
        id: "tarok",
        label: "Super Node",
        title: "TAROK NURSES MGMT SYSTEM",
        type: "project",
        meta: "Healthcare Systems",
        description: featuredProjects[1].description,
        tags: featuredProjects[1].tech,
    },
    {
        id: "wardrobe",
        label: "Super Node",
        title: "WARDROBE PLANNER AI",
        type: "project",
        meta: "AI Mobile Side Project",
        description: featuredProjects[2].description,
        tags: featuredProjects[2].tech,
    },
    {
        id: "archive",
        label: "Archive",
        title: "View 10+ More Projects",
        type: "archive",
        meta: "Legacy Portfolio Migration",
        description: "Opens the archive overlay containing the named projects recovered from the original site plus active local builds being migrated into the new workflow portfolio.",
        tags: ["Legacy Work", "Original Projects", "Migration"],
    },
    {
        id: "focus",
        label: "Focus",
        title: "Current Focus",
        type: "focus",
        meta: "Now Building",
        description: "AI Automation, AI Development, Backend Development, n8n Orchestration, and OpenAI Tooling are positioned as the active execution lane.",
        tags: currentFocus,
    },
    {
        id: "award",
        label: "Milestone",
        title: "GAME JAM WINNER",
        type: "award",
        meta: "Clash of Devs 2.0",
        description: "Winner of Clash of Devs 2.0 Game Jam Nigeria, preserved as a major milestone node with a trophy glow.",
        tags: ["Achievement", "Game Development", "Creative Execution"],
    },
    {
        id: "contact",
        label: "Contact",
        title: "Follow + Hire",
        type: "contact",
        meta: "Property Links",
        description: "Legacy contact details from the original site are retained here and in the side panel for quick action.",
        tags: ["Email", "GitHub", "LinkedIn", "X"],
    },
];

// ── LAYOUT ────────────────────────────────────────

const nodePositionsDesktop = {
    start:          { x: 90,   y: 110,  w: 260, h: 152 },
    pictda:         { x: 370,  y: 260,  w: 310, h: 180 },
    django:         { x: 760,  y: 110,  w: 190, h: 122 },
    flask:          { x: 760,  y: 250,  w: 190, h: 122 },
    python:         { x: 760,  y: 390,  w: 190, h: 122 },
    webdev:         { x: 760,  y: 530,  w: 190, h: 122 },
    nnpc:           { x: 1030, y: 260,  w: 330, h: 180 },
    gdg:            { x: 1030, y: 500,  w: 330, h: 180 },
    n8n:            { x: 1450, y: 90,   w: 210, h: 122 },
    "ai-automation":{ x: 1450, y: 240,  w: 210, h: 122 },
    openai:         { x: 1450, y: 390,  w: 210, h: 122 },
    tooldev:        { x: 1450, y: 540,  w: 210, h: 122 },
    prai:           { x: 460,  y: 780,  w: 370, h: 260 },
    tarok:          { x: 870,  y: 760,  w: 320, h: 200 },
    wardrobe:       { x: 1230, y: 820,  w: 330, h: 210 },
    archive:        { x: 90,   y: 900,  w: 280, h: 156 },
    focus:          { x: 80,   y: 500,  w: 300, h: 206 },
    award:          { x: 60,   y: 720,  w: 300, h: 148 },
    contact:        { x: 1230, y: 1070, w: 330, h: 164 },
};

const nodePositionsMobile = {
    start:          { x: 20, y: 40,   w: 320, h: 150 },
    pictda:         { x: 20, y: 240,  w: 320, h: 168 },
    django:         { x: 20, y: 440,  w: 320, h: 108 },
    flask:          { x: 20, y: 574,  w: 320, h: 108 },
    python:         { x: 20, y: 708,  w: 320, h: 108 },
    webdev:         { x: 20, y: 842,  w: 320, h: 108 },
    nnpc:           { x: 20, y: 986,  w: 320, h: 174 },
    gdg:            { x: 20, y: 1180, w: 320, h: 174 },
    n8n:            { x: 20, y: 1388, w: 320, h: 108 },
    "ai-automation":{ x: 20, y: 1522, w: 320, h: 108 },
    openai:         { x: 20, y: 1656, w: 320, h: 108 },
    tooldev:        { x: 20, y: 1790, w: 320, h: 108 },
    focus:          { x: 20, y: 1934, w: 320, h: 182 },
    award:          { x: 20, y: 2150, w: 320, h: 132 },
    prai:           { x: 20, y: 2316, w: 320, h: 258 },
    tarok:          { x: 20, y: 2606, w: 320, h: 190 },
    wardrobe:       { x: 20, y: 2832, w: 320, h: 190 },
    archive:        { x: 20, y: 3058, w: 320, h: 150 },
    contact:        { x: 20, y: 3242, w: 320, h: 156 },
};

const connections = [
    ["start",   "pictda",        "accent"],
    ["pictda",  "django",        "accent"],
    ["pictda",  "flask",         "accent"],
    ["pictda",  "python",        "accent"],
    ["pictda",  "webdev",        "accent"],
    ["python",  "nnpc",          "accent2"],
    ["webdev",  "nnpc",          "accent2"],
    ["nnpc",    "gdg",           "accent"],
    ["gdg",     "n8n",           "accent2"],
    ["gdg",     "ai-automation", "accent2"],
    ["gdg",     "openai",        "accent2"],
    ["gdg",     "tooldev",       "accent2"],
    ["focus",   "prai",          "accent2"],
    ["focus",   "tarok",         "accent"],
    ["focus",   "wardrobe",      "accent2"],
    ["award",   "prai",          "accent"],
    ["archive", "prai",          "accent"],
    ["prai",    "contact",       "accent"],
    ["wardrobe","contact",       "accent2"],
];

// ── STATE ─────────────────────────────────────────

let theme        = "dark";
let selectedNode = "prai";
let archiveOpen  = false;
let isMobile     = window.innerWidth < 900;
let viewport     = { x: 40, y: 30, scale: 1 };
let dragging     = false;
let dragStart    = { x: 0, y: 0, vx: 0, vy: 0 };

// ── HELPERS ───────────────────────────────────────

function getPos() { return isMobile ? nodePositionsMobile : nodePositionsDesktop; }
function getNode(id) { return nodeBlueprints.find(n => n.id === id); }

function colorFor(tone) {
    if (tone === "accent2") {
        return theme === "dark" ? "rgba(140,79,255,0.9)" : "rgba(140,79,255,0.72)";
    }
    return "rgba(234,75,113,0.95)";
}

// ── CANVAS BOARD SIZE ─────────────────────────────

function boardSize() {
    return isMobile ? { w: 360, h: 3460 } : { w: 1750, h: 1300 };
}

// ── RENDER NODES ─────────────────────────────────

function buildNodeCard(node) {
    const pos  = getPos()[node.id];
    if (!pos) return null;

    const el   = document.createElement("div");
    el.className = `node-card${node.id === selectedNode ? " selected" : ""}${node.type === "award" ? " glow-award" : ""}`;
    el.id = `node-${node.id}`;
    el.style.cssText = `left:${pos.x}px;top:${pos.y}px;width:${pos.w}px;height:${pos.h}px;`;
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", node.title);

    // ── badge row
    const labelRow = document.createElement("div");
    labelRow.className = "node-card-label";

    const badge = document.createElement("span");
    badge.className = "node-badge";
    badge.textContent = node.label;
    labelRow.appendChild(badge);

    // extra icons
    if (node.id === "start") {
        const dot = document.createElement("span");
        dot.style.cssText = "width:12px;height:12px;border-radius:50%;background:var(--accent);box-shadow:0 0 18px rgba(234,75,113,0.9);display:inline-block;";
        labelRow.appendChild(dot);
    }
    if (node.id === "award")   { const ic = document.createElement("span"); ic.textContent = "🏆"; ic.style.fontSize="18px"; labelRow.appendChild(ic); }
    if (node.id === "contact") { const ic = document.createElement("span"); ic.textContent = "@";  ic.style.fontSize="18px"; labelRow.appendChild(ic); }
    el.appendChild(labelRow);

    // ── header
    const header = document.createElement("div");
    header.className = "node-card-header";

    if (node.id === "pictda") {
        const org = document.createElement("span");
        org.className = "org-badge-green";
        org.textContent = "PG";
        header.appendChild(org);
    }
    if (node.id === "nnpc") {
        const org = document.createElement("span");
        org.className = "org-badge-nnpc";
        ["#26d07c","#ffca6a","#ff5a5a"].forEach(c => {
            const dot = document.createElement("span");
            dot.className = "nnpc-dot";
            dot.style.background = c;
            org.appendChild(dot);
        });
        header.appendChild(org);
    }

    const title = document.createElement("h3");
    title.className = `node-card-title${node.type === "project" ? " large" : ""}`;
    title.textContent = node.title;
    header.appendChild(title);
    el.appendChild(header);

    // ── meta
    const meta = document.createElement("p");
    meta.className = "node-card-meta";
    meta.textContent = node.meta;
    el.appendChild(meta);

    // ── description
    const desc = document.createElement("p");
    desc.className = "node-card-body";
    const maxChars = node.type === "project" || node.type === "archive" ? 200 : 90;
    desc.textContent = node.description.slice(0, maxChars) + (node.description.length > maxChars ? "…" : "");
    el.appendChild(desc);

    // ── status badge
    if (node.status) {
        const s = document.createElement("span");
        s.className = "node-status";
        s.textContent = node.status;
        el.appendChild(s);
    }

    // ── diff mini preview for prai
    if (node.id === "prai") {
        const dm = document.createElement("div");
        dm.className = "diff-mini";
        dm.innerHTML = `
          <div class="diff-mini-col">Messy PR</div>
          <div class="diff-mini-col ai">AI Audit ✓</div>
        `;
        el.appendChild(dm);
    }

    // ── events
    el.addEventListener("click", () => selectNode(node.id));
    el.addEventListener("keydown", e => { if (e.key==="Enter"||e.key===" ") selectNode(node.id); });

    return el;
}

function renderNodes() {
    const board = document.getElementById("canvas-board");
    board.innerHTML = "";
    nodeBlueprints.forEach(node => {
        const el = buildNodeCard(node);
        if (el) board.appendChild(el);
    });
}

// ── CONNECTORS ────────────────────────────────────

function buildConnectors() {
    const svg = document.getElementById("connector-svg");
    svg.innerHTML = "";
    const pos = getPos();

    connections.forEach(([from, to, tone], idx) => {
        const s = pos[from];
        const e = pos[to];
        if (!s || !e) return;

        const sx = s.x + s.w;
        const sy = s.y + s.h / 2;
        const ex = e.x;
        const ey = e.y + e.h / 2;
        const mx = sx + (ex - sx) / 2;
        const color = colorFor(tone);
        const d = `M${sx},${sy} C${mx},${sy} ${mx},${ey} ${ex},${ey}`;

        // static path
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", color);
        path.setAttribute("stroke-width", "2.5");
        path.setAttribute("stroke-linecap", "round");
        path.style.opacity = "0";
        svg.appendChild(path);

        // animate path draw
        const pathLen = path.getTotalLength ? path.getTotalLength() : 400;
        path.style.strokeDasharray  = pathLen;
        path.style.strokeDashoffset = pathLen;
        path.style.transition = `stroke-dashoffset 1.1s ease ${idx * 0.045}s, opacity 0.4s ease ${idx * 0.045}s`;
        requestAnimationFrame(() => {
            path.style.opacity = "0.78";
            path.style.strokeDashoffset = "0";
        });

        // pulse dot
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("r", "4.5");
        circle.setAttribute("fill", color);
        svg.appendChild(circle);

        // animate pulse dot along path
        const dur = 2.8;
        const delay = idx * 0.18;

        function animateCircle() {
            const start = performance.now() + delay * 1000;
            function frame(now) {
                const elapsed = (now - start) / 1000;
                if (elapsed < 0) { requestAnimationFrame(frame); return; }
                const t = (elapsed % (dur + 0.2)) / dur;
                if (t >= 0 && t <= 1 && path.getTotalLength) {
                    const len = path.getTotalLength();
                    const pt  = path.getPointAtLength(t * len);
                    circle.setAttribute("cx", pt.x);
                    circle.setAttribute("cy", pt.y);
                    // fade in/out
                    const fadeZone = 0.08;
                    let opacity = 1;
                    if (t < fadeZone)        opacity = t / fadeZone;
                    else if (t > 1-fadeZone) opacity = (1 - t) / fadeZone;
                    circle.style.opacity = opacity;
                } else {
                    circle.style.opacity = 0;
                }
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
        }
        animateCircle();
    });
}

// ── PROPERTY PANEL ────────────────────────────────

function renderPropertyPanel(nodeId) {
    const node = getNode(nodeId);
    if (!node) return;

    document.getElementById("pp-label").textContent  = node.label;
    document.getElementById("pp-title").textContent  = node.title;
    document.getElementById("pp-meta").textContent   = node.meta;

    const execBtn = document.getElementById("pp-execute-btn");
    if (node.type === "project" && node.link) {
        execBtn.href = node.link;
        execBtn.style.display = "inline-flex";
    } else {
        execBtn.style.display = "none";
    }

    const body = document.getElementById("pp-body");
    body.style.opacity = "0";
    body.style.transform = "translateY(10px)";
    body.style.transition = "opacity 0.25s ease, transform 0.25s ease";

    let html = "";

    // status
    if (node.status) {
        html += `<div class="pp-status">${node.status}</div>`;
    }

    // description
    html += `<p class="pp-desc">${node.description}</p>`;

    // diff preview for prai
    if (node.id === "prai") {
        html += `
        <div class="diff-preview">
          <div class="diff-preview-header">
            <div>
              <span class="node-badge" style="color:var(--accent);">Live Preview</span>
              <h4>Monaco-style static code diff demo</h4>
            </div>
            <span class="node-badge">PR-AI</span>
          </div>
          <div class="diff-cols">
            <div class="diff-col">
              <div class="diff-col-title">Messy Pull Request</div>
              <pre><code><span class="line-remove">- function auditPR(data){</span>
<span class="line-remove">-   if(!data)return;</span>
<span class="line-remove">-   console.log(data)</span>
<span class="line-remove">-   let msg = "looks ok";</span>
<span class="line-remove">-   return msg;</span>
<span class="line-remove">- }</span></code></pre>
            </div>
            <div class="diff-col">
              <div class="diff-col-title">AI-Audited Version</div>
              <pre><code><span class="line-add">+ function auditPullRequest(payload) {</span>
<span class="line-note">+   if (!payload) throw new Error("Missing payload");</span>
<span class="line-add">+   const summary = buildAuditSummary(payload);</span>
<span class="line-add">+   return { status: "reviewed", summary };</span>
<span class="line-add">+ }</span></code></pre>
            </div>
          </div>
        </div>`;
    }

    // panel block
    if (node.panel) {
        html += `
        <div class="pp-block">
          <p class="pp-block-title" style="color:var(--accent);">${node.panel.heading}</p>
          <p class="pp-block-body">${node.panel.body}</p>
        </div>`;
    }

    // tags
    html += `
    <div class="pp-block">
      <p class="pp-block-title" style="color:var(--muted);">Tech / Properties</p>
      <div class="tags-row">${node.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}</div>
    </div>`;

    // legacy projects snippet
    html += `
    <div class="pp-block">
      <p class="pp-block-title" style="color:var(--muted);">Retained Original Site Data</p>
      ${legacyProjects.slice(0, 2).map(p => `
        <div style="margin-top:10px;border:1px solid var(--line-soft);border-radius:12px;padding:10px 12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <strong style="font-size:13px;">${p.name}</strong>
            <span style="font-family:var(--font-mono);font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.12em;">${p.role}</span>
          </div>
          <p style="font-size:11px;line-height:1.7;color:var(--muted);margin-top:6px;">${p.description}</p>
        </div>
      `).join("")}
    </div>`;

    // contact links
    html += `
    <div class="pp-block">
      <p class="pp-block-title" style="color:var(--muted);">Contact Properties</p>
      <div class="contact-links">
        ${contactLinks.map(l => `
          <a href="${l.href}" ${l.href.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'} class="contact-link-row">
            <span>${l.label}</span><span>${l.value}</span>
          </a>
        `).join("")}
      </div>
    </div>`;

    body.innerHTML = html;

    requestAnimationFrame(() => {
        body.style.opacity = "1";
        body.style.transform = "translateY(0)";
    });
}

// ── SELECT NODE ───────────────────────────────────

function selectNode(id) {
    selectedNode = id;

    // update card classes
    document.querySelectorAll(".node-card").forEach(el => {
        el.classList.remove("selected");
    });
    const target = document.getElementById(`node-${id}`);
    if (target) target.classList.add("selected");

    renderPropertyPanel(id);

    if (id === "archive") openArchive();
}

// ── PAN / ZOOM ────────────────────────────────────

function applyViewport() {
    const board = document.getElementById("canvas-board");
    const svg   = document.getElementById("connector-svg");
    const bs = boardSize();
    board.style.width  = bs.w + "px";
    board.style.height = bs.h + "px";
    if (!isMobile) {
        board.style.transform = `translate3d(${viewport.x}px,${viewport.y}px,0) scale(${viewport.scale})`;
        svg.style.transform   = `translate3d(${viewport.x}px,${viewport.y}px,0) scale(${viewport.scale})`;
    } else {
        board.style.transform = "none";
        svg.style.transform   = "none";
    }
}

function updateScaleBadge() {
    const b = document.getElementById("canvas-scale-badge");
    if (b) b.textContent = isMobile ? "Mobile Linear Flow" : "Pan Canvas";
}

function updateThemeBadge() {
    const b = document.getElementById("canvas-theme-badge");
    if (b) b.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
}

// ── ARCHIVE OVERLAY ───────────────────────────────

function openArchive() {
    const overlay = document.getElementById("archive-overlay");
    const grid    = document.getElementById("archive-grid");

    grid.innerHTML = archiveCards.map((p, i) => `
      <div class="archive-card" style="animation-delay:${i * 0.04}s;">
        <span class="node-badge">${p.kind === "super" ? "Super Node" : "Archive Card"}</span>
        <div class="archive-card-header">
          <div>
            <div class="archive-card-name">${p.name}</div>
            <div class="archive-card-role">${p.role}</div>
          </div>
          ${p.link ? `<a href="${p.link}" target="_blank" rel="noreferrer" class="archive-card-link">Open ↗</a>` : ""}
        </div>
        <p class="archive-card-desc">${p.description}</p>
        <div class="archive-card-tags">${(p.tech || []).map(t => `<span class="archive-card-tag">${t}</span>`).join("")}</div>
      </div>
    `).join("");

    overlay.style.display = "flex";
    archiveOpen = true;
}

function closeArchive() {
    document.getElementById("archive-overlay").style.display = "none";
    archiveOpen = false;
}

// ── THEME TOGGLE ──────────────────────────────────

function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "Switch to Light" : "Switch to Dark";
    updateThemeBadge();
    // rebuild connectors so colors update
    buildConnectors();
}

// ── FULL RENDER ───────────────────────────────────

function fullRender() {
    isMobile = window.innerWidth < 900;
    const wrap = document.getElementById("canvas-wrap");
    if (isMobile) {
        wrap.style.minHeight = "2800px";
        const hintBottom = document.getElementById("canvas-hint-bottom");
        if (hintBottom) hintBottom.textContent = "Mobile mode — vertical linear flow with connector lines.";
        viewport = { x: 0, y: 0, scale: 1 };
    } else {
        wrap.style.minHeight = "900px";
        const hintBottom = document.getElementById("canvas-hint-bottom");
        if (hintBottom) hintBottom.textContent = "Drag to pan";
    }
    applyViewport();
    renderNodes();
    buildConnectors();
    updateScaleBadge();
    updateThemeBadge();
    renderPropertyPanel(selectedNode);
}

// ── EVENT LISTENERS ───────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
    // initial render
    fullRender();

    // theme
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

    // archive
    document.getElementById("archive-close").addEventListener("click", closeArchive);
    document.getElementById("archive-overlay").addEventListener("click", e => {
        if (e.target === document.getElementById("archive-overlay")) closeArchive();
    });

    // pan
    const wrap = document.getElementById("canvas-wrap");
    wrap.addEventListener("mousedown", e => {
        if (isMobile) return;
        if (e.target.closest("button") || e.target.closest("a") || e.target.closest(".node-card")) return;
        dragging = true;
        dragStart = { x: e.clientX, y: e.clientY, vx: viewport.x, vy: viewport.y };
        wrap.style.cursor = "grabbing";
    });
    document.addEventListener("mousemove", e => {
        if (!dragging) return;
        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;
        viewport.x = dragStart.vx + dx;
        viewport.y = dragStart.vy + dy;
        applyViewport();
    });
    document.addEventListener("mouseup", () => {
        dragging = false;
        if (!isMobile) wrap.style.cursor = "grab";
    });

    // zoom disabled — pan only

    // touch pan (mobile)
    let lastTouch = null;
    wrap.addEventListener("touchstart", e => { lastTouch = e.touches[0]; }, { passive: true });
    wrap.addEventListener("touchmove", e => {
        if (!lastTouch || isMobile) return;
        const t = e.touches[0];
        viewport.x += t.clientX - lastTouch.clientX;
        viewport.y += t.clientY - lastTouch.clientY;
        lastTouch = t;
        applyViewport();
    }, { passive: true });
    wrap.addEventListener("touchend", () => { lastTouch = null; });

    // resize
    window.addEventListener("resize", () => {
        const wasMobile = isMobile;
        isMobile = window.innerWidth < 900;
        if (wasMobile !== isMobile) {
            if (!isMobile) viewport = { x: 40, y: 30, scale: 1 };
            fullRender();
        }
    });

    // close archive with Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && archiveOpen) closeArchive();
    });
});
