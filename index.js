/**
 * Preston Jay Susanto - Elite Portfolio Engine
 * Engineered for performance, accessibility, and credibility.
 */

const APP_DATA = {
    roles: [
        "Computer Science Student",
        "Software Engineer",
        "Accessibility Innovator",
        "Hackathon Builder",
        "Early College Entrant"
    ],
    journey: [
        { year: "2009 — 2021", loc: "Indonesia 🇮🇩", title: "Foundations", desc: "12 years of childhood & early education. Bilingual development." },
        { year: "2021 — 2024", loc: "Australia 🇦🇺", title: "Acceleration", desc: "Wesley College. Founded Hack Clubs. Captain of 3 sports teams." },
        { year: "Early 2025", loc: "China 🇨🇳", title: "Immersion", desc: "Intensive Mandarin Chinese at Wendao School (4 months)." },
        { year: "Aug 2025 — Present", loc: "USA 🇺🇸", title: "Impact", desc: "CS Major @ DVC. GDG Officer. 4.0 GPA verified." }
    ],
    projects: [
        { title: "Access for All", type: "Hackathon Winner", site: "#", desc: "ValleyHacks accessibility-first software prototype for color blindness & dyslexia. Built in < 48hrs." },
        { title: "Aiko Matcha", type: "E-Commerce", site: "https://www.aikomatcha.com.au", desc: "Official retail site developer. Focus on clean UX and premium brand performance." },
        { title: "AGS Honor Society", type: "Official Portal", site: "https://dvcags.wixstudio.com/honor-society", desc: "Webmaster for the Diablo Valley College honors chapter. Built for scalability." },
        { title: "Wosado Australia", type: "Retail Hub", site: "https://wosadoaustralia.com.au", desc: "Lead creator of the digital platform for the international beauty brand." },
        { title: "Wesley Hack Club", type: "Educational", site: "https://wesley.hackclub.com", desc: "Founder and developer of the community's primary hub. Inspired 20+ students." },
        { title: "Banyan Vanilla", type: "Brand Design", site: "https://www.banyanvanilla.com.au", desc: "Editor and maintainer of premium export digital presence." }
    ],
    awards: {
        "2024": [
            { title: "Gold Endeavour Award", desc: "Exceptional effort across all subjects and curricular areas." },
            { title: "Academic Excellence", desc: "Earned 10 A grades across the whole academic year." },
            { title: "Computer Science Prize", desc: "Top academic achievement in CS curriculum." },
            { title: "Duke of Edinburgh Bronze", desc: "Resilience, leadership, and service program completion." },
            { title: "Honour Cert (English)", desc: "Outstanding academic progress." }
        ],
        "2023": [
            { title: "Academic Excellence", desc: "Earned 10 A grades across the full academic year." },
            { title: "Gold Endeavour Award", desc: "Sustained high effort distinction in all subjects." },
            { title: "Chinese Language Prize", desc: "Top performer in language studies." }
        ],
        "2022": [
            { title: "Head of College Award", desc: "Top-tier academic standing in college." },
            { title: "Basketball Wesley Award", desc: "Character, skill, and team discipline." },
            { title: "SRC Award", desc: "Student Representative Council service." }
        ],
        "2021": [
            { title: "Endeavour Award", desc: "Consistent discipline and effort recognition." }
        ]
    },
    leadership: [
        { year: "2025", role: "GDG Software Officer", org: "Google Developer Group", impact: "Onboarded 20+ active student developers." },
        { year: "2025", role: "AGS Webmaster", org: "Alpha Gamma Sigma Honors", impact: "Digital infrastructure & accessibility lead." },
        { year: "2024", role: "Hack Club Founder", org: "Wesley College Australia", impact: "Inspired 20+ students to start coding." },
        { year: "2021-2024", role: "3x Team Captain", org: "Basketball, Soccer, Volleyball", impact: "Led teams to successful competitive seasons." }
    ],
    certs: [
        { name: "Sending Professional Emails", id: "NDIxMDI2", issuer: "Google x NexusEdge", date: "Sep 2025" },
        { name: "Intro to LLMs and Responsible AI", id: "NDIxMDA1", issuer: "Google x NexusEdge", date: "Sep 2025" },
        { name: "Introduction to Generative AI", id: "NDIwNjE5", issuer: "Google x NexusEdge", date: "Sep 2025" },
        { name: "Building Apps & Media with Google AI Studio", id: "NDIxMDYx", issuer: "Google x NexusEdge", date: "Sep 2025" },
        { name: "Professional Barista", id: "Verified", issuer: "2025-2028 Valid", date: "Jan 2025" }
    ]
};

function renderApp() {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = `
        <nav id="navbar" class="fixed top-0 w-full z-50 py-6 transition-all duration-300 px-6">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm shadow-lg">P</div>
                    <span class="font-bold tracking-tight text-slate-800 hidden sm:block">Preston Jay Susanto</span>
                </div>
                <div class="flex items-center gap-6">
                    <div class="hidden md:flex gap-6 text-sm font-semibold text-slate-500">
                        <a href="#about" class="nav-link hover:text-blue-600">Journey</a>
                        <a href="#projects" class="nav-link hover:text-blue-600">Work</a>
                        <a href="#awards" class="nav-link hover:text-blue-600">Awards</a>
                        <a href="#leadership" class="nav-link hover:text-blue-600">Leadership</a>
                    </div>
                    <button id="toggle-proof" class="text-[10px] px-4 py-2 rounded-full font-bold uppercase tracking-widest bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all">
                        Proof Mode
                    </button>
                </div>
            </div>
        </nav>

        <section id="hero" class="min-h-screen flex items-center pt-24 px-6">
            <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
                <div class="reveal">
                    <div class="flex gap-2 mb-6">
                        <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">📍 San Francisco Bay Area</span>
                        <span class="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">GPA 4.0 Verified</span>
                    </div>
                    <h1 class="hero-title text-6xl md:text-8xl font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
                        Future-Ready <br/> <span class="text-blue-600">Engineer.</span>
                    </h1>
                    <div class="h-10 overflow-hidden mb-10 relative">
                        <div id="role-container" class="role-animate space-y-0 transition-transform duration-700">
                            ${APP_DATA.roles.map(r => `<div class="h-10 flex items-center text-xl md:text-2xl font-semibold text-slate-400 font-mono italic">${r}</div>`).join('')}
                        </div>
                    </div>
                    <p class="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
                        Computer Science student at <span class="text-slate-900 font-bold">DVC</span>. Entering college early, maintaining <span class="text-slate-900 font-bold">4.0 distinction</span> with a global perspective spanning 16+ years.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#projects" class="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all hover:shadow-2xl hover:-translate-y-1 text-center">View Projects</a>
                        <a href="mailto:prestonjaysusanto@gmail.com" class="px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-blue-400 transition-all text-center">Contact Me</a>
                    </div>
                    <div class="mt-12 pt-12 border-t border-slate-100 flex gap-12 grayscale hover:grayscale-0 transition-all">
                        <div class="flex flex-col"><span class="text-2xl font-black">4</span><span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nations</span></div>
                        <div class="flex flex-col"><span class="text-2xl font-black">4.0</span><span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GPA</span></div>
                        <div class="flex flex-col"><span class="text-2xl font-black">20+</span><span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mentored</span></div>
                    </div>
                </div>
                <div class="hidden lg:block reveal" style="transition-delay: 200ms">
                    <div class="relative p-10 bg-white border border-slate-100 rounded-[3.5rem] shadow-2xl overflow-hidden">
                        <div class="absolute top-0 right-0 p-8">
                            <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                        <h3 class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">Credibility Verification</h3>
                        <div class="space-y-6">
                            ${APP_DATA.certs.slice(0, 3).map(c => `
                                <div class="flex gap-4 pb-4 border-b border-slate-50">
                                    <div class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xs italic">G</div>
                                    <div>
                                        <div class="font-bold text-sm">${c.name}</div>
                                        <div class="text-[10px] text-slate-400 font-mono">ID: ${c.id}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="py-32 bg-slate-50 px-6">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-black mb-16 reveal">The Global Journey</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${APP_DATA.journey.map((item, i) => `
                        <div class="p-8 bg-white border border-slate-100 rounded-3xl proof-element transition-all reveal" style="transition-delay: ${i * 100}ms">
                            <div class="font-mono text-[10px] font-bold text-slate-300 mb-2 uppercase">${item.year}</div>
                            <div class="text-2xl font-black mb-1">${item.loc}</div>
                            <h3 class="font-bold text-blue-600 mb-4 text-xs uppercase tracking-widest">${item.title}</h3>
                            <p class="text-sm text-slate-500 leading-relaxed">${item.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section id="projects" class="py-32 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <h2 class="text-4xl md:text-5xl font-black reveal">Digital Portfolio</h2>
                    <p class="text-slate-500 max-w-sm reveal">Professional websites and technical prototypes spanning 3 continents.</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${APP_DATA.projects.map((p, i) => `
                        <a href="${p.site}" target="_blank" class="block bg-white p-8 rounded-3xl border border-slate-200 card-hover reveal" style="transition-delay: ${i * 50}ms">
                            <div class="flex justify-between items-start mb-6">
                                <span class="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full tracking-widest">${p.type}</span>
                                <span class="text-slate-300 group-hover:text-blue-600 transition-colors">↗</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-3">${p.title}</h3>
                            <p class="text-sm text-slate-500 mb-6 leading-relaxed h-12 overflow-hidden">${p.desc}</p>
                            <span class="text-xs font-bold text-slate-400">Launch Project</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>

        <section id="awards" class="py-32 bg-white px-6">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-black mb-20 reveal">Awards & Honors</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    ${Object.entries(APP_DATA.awards).sort((a,b) => b[0] - a[0]).map(([year, list]) => `
                        <div class="reveal">
                            <div class="text-6xl font-black text-slate-100 border-b-4 border-slate-50 pb-2 mb-8">${year}</div>
                            <div class="space-y-8">
                                ${list.map(a => `
                                    <div class="proof-element border-l-2 border-slate-100 pl-4 py-1 transition-all">
                                        <div class="font-bold text-sm text-slate-800 mb-1 leading-tight">${a.title}</div>
                                        <div class="text-[10px] text-slate-400 leading-tight font-bold uppercase tracking-wider">${a.desc}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section id="leadership" class="py-32 bg-slate-900 text-white px-6">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 class="text-4xl md:text-5xl font-black mb-12 reveal">Leadership <br/> & Scale.</h2>
                        <div class="space-y-12">
                            ${APP_DATA.leadership.map((l, i) => `
                                <div class="reveal group" style="transition-delay: ${i * 100}ms">
                                    <div class="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-1">${l.org}</div>
                                    <div class="text-xl font-bold group-hover:translate-x-2 transition-transform">${l.role}</div>
                                    <p class="text-slate-400 text-sm mt-2">${l.impact}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] relative overflow-hidden reveal">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
                        <h3 class="text-2xl font-bold mb-6">Mentorship Ripple Effect</h3>
                        <p class="text-slate-400 text-lg leading-relaxed italic mb-8">
                            "Founded the Hack Club and coached Middle School Socratic Societies, inspiring 20+ students minimum per organization to engage with technical and critical disciplines."
                        </p>
                        <div class="grid grid-cols-2 gap-8">
                           <div>
                              <div class="text-4xl font-black mb-2">20+</div>
                              <div class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Students Mentored</div>
                           </div>
                           <div>
                              <div class="text-4xl font-black mb-2">3x</div>
                              <div class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Captaincy Roles</div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="certs" class="py-32 bg-slate-50 px-6">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-black mb-16 reveal">Licenses & Certifications</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${APP_DATA.certs.map((c, i) => `
                        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm reveal flex flex-col justify-between" style="transition-delay: ${i * 50}ms">
                            <div>
                                <div class="flex items-center gap-4 mb-4">
                                    <div class="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs">G</div>
                                    <div>
                                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${c.issuer}</div>
                                        <div class="text-[10px] text-slate-300 font-mono">${c.date}</div>
                                    </div>
                                </div>
                                <h3 class="font-bold text-slate-800 mb-4 leading-tight">${c.name}</h3>
                            </div>
                            <div class="text-[10px] font-mono text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded w-fit">Credential ID: ${c.id}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <footer id="contact" class="py-32 bg-slate-900 text-white px-6">
            <div class="max-w-7xl mx-auto text-center">
                <h2 class="text-4xl md:text-6xl font-black mb-12 reveal">Let's build impact together.</h2>
                <div class="flex flex-wrap justify-center gap-6 mb-24 reveal">
                    <a href="mailto:prestonjaysusanto@gmail.com" class="p-8 bg-white/5 border border-white/10 rounded-3xl min-w-[300px] flex-1 hover:bg-blue-600/10 transition-all">
                        <div class="text-[10px] font-bold uppercase text-slate-500 mb-2">Primary Email</div>
                        <div class="text-xl font-bold">prestonjaysusanto@gmail.com</div>
                    </a>
                    <a href="tel:+19254570055" class="p-8 bg-white/5 border border-white/10 rounded-3xl min-w-[300px] flex-1 hover:bg-emerald-600/10 transition-all">
                        <div class="text-[10px] font-bold uppercase text-slate-500 mb-2">Direct Phone</div>
                        <div class="text-xl font-bold">+1 (925) 457-0055</div>
                    </a>
                </div>
                <div class="flex justify-center gap-12 text-slate-500 font-bold uppercase text-xs tracking-widest reveal">
                    <a href="https://github.com/ShadowEsu" target="_blank" class="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/preston-jay-susanto-3a589534b/" target="_blank" class="hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="https://instagram.com/preston_susanto" target="_blank" class="hover:text-pink-400 transition-colors">Instagram</a>
                </div>
                <div class="mt-24 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
                    Preston Jay Susanto &copy; 2025 // Global Technical Portfolio
                </div>
            </div>
        </footer>
    `;

    initInteractions();
}

function initInteractions() {
    // 1. Role Rotator
    let roleIdx = 0;
    const roleCont = document.getElementById('role-container');
    if (roleCont) {
        setInterval(() => {
            roleIdx = (roleIdx + 1) % APP_DATA.roles.length;
            roleCont.style.transform = `translateY(-${roleIdx * 2.5}rem)`;
        }, 3000);
    }

    // 2. Navbar Scroll Style
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 40) {
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4', 'border-b', 'border-slate-100');
                navbar.classList.remove('py-6');
            } else {
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4', 'border-b', 'border-slate-100');
                navbar.classList.add('py-6');
            }
        }
    });

    // 3. Reveal Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. Proof Toggle
    let proofActive = false;
    const toggleBtn = document.getElementById('toggle-proof');
    if (toggleBtn) {
        toggleBtn.onclick = () => {
            proofActive = !proofActive;
            document.body.classList.toggle('proof-active', proofActive);
            toggleBtn.textContent = proofActive ? 'Proof Verified ✓' : 'Proof Mode';
            toggleBtn.classList.toggle('bg-emerald-600', proofActive);
            toggleBtn.classList.toggle('text-white', proofActive);
        };
    }

    // 5. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.onclick = (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        };
    });
}

// Ensure the render happens after DOM is fully ready
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', renderApp);
} else {
    renderApp();
}
