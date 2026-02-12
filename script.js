document.addEventListener('DOMContentLoaded', () => {
    
    // ===== INITIAL LOAD ANIMATION =====
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // ===== NAVIGATION SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // ===== SCROLL REVEAL ANIMATIONS =====
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, parseInt(delay));
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    scrollRevealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ===== MOBILE MENU (Shoji Door) =====
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const openMenu = () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    };

    menuToggle?.addEventListener('click', openMenu);
    menuClose?.addEventListener('click', closeMenu);
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on overlay click
    mobileMenu?.addEventListener('click', (e) => {
        if (e.target === mobileMenu) closeMenu();
    });

    // ===== WAITLIST MODAL =====
    const waitlistModal = document.getElementById('waitlistModal');
    const waitlistForm = document.getElementById('waitlistForm');
    const successMessage = document.getElementById('successMessage');

    window.openModal = () => {
        waitlistModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = () => {
        waitlistModal.classList.remove('active');
        document.body.style.overflow = '';
        // Reset form after close animation
        setTimeout(() => {
            if (successMessage && !successMessage.classList.contains('hidden')) {
                waitlistForm.style.display = 'block';
                successMessage.classList.add('hidden');
                waitlistForm.reset();
            }
        }, 400);
    };

    // Modal triggers
    document.getElementById('openWaitlist')?.addEventListener('click', openModal);
    document.getElementById('heroWaitlist')?.addEventListener('click', openModal);
    document.getElementById('dojoWaitlist')?.addEventListener('click', openModal);
    document.getElementById('mobileWaitlist')?.addEventListener('click', () => {
        closeMenu();
        setTimeout(openModal, 300);
    });
    document.getElementById('closeModal')?.addEventListener('click', closeModal);

    // Close modal on overlay click
    waitlistModal?.addEventListener('click', (e) => {
        if (e.target === waitlistModal) closeModal();
    });

    // Form submission
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = waitlistForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            const formData = new FormData(waitlistForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    waitlistForm.style.display = 'none';
                    successMessage.classList.remove('hidden');
                } else {
                    throw new Error(data.message || 'Submission failed');
                }
            } catch (error) {
                console.error('Form error:', error);
                btn.innerText = originalText;
                btn.disabled = false;
                alert('Failed to submit. Please try again.');
            }
        });
    }

    // ===== AGENT MODAL DATA =====
    const agentData = {
        shogun: {
            name: 'SHOGUN',
            title: 'Supreme Commander',
            tagline: 'The Master Strategist. Perfect Synchronization Across All Forces.',
            description: 'Shogun is the orchestrator of your AI team. It analyzes your intent, understands context, delegates tasks to specialist agents, and synthesizes their outputs into cohesive results. Think of Shogun as your AI production manager who knows exactly which agent to deploy for every challenge.',
            capabilities: [
                'Natural language intent analysis',
                'Multi-agent task delegation and coordination',
                'Context maintenance across complex projects',
                'Output synthesis and quality control',
                'Workflow optimization and routing',
                'Priority management and deadline awareness',
                'Cross-agent communication and handoffs',
                'Real-time adaptation to changing requirements'
            ],
            whoItHelps: [
                { type: 'Solo Creators', use: 'Manage entire production pipelines without hiring—Shogun delegates design to Hana, code to Ryu, copy to Aiko automatically' },
                { type: 'Production Teams', use: 'Coordinate multiple simultaneous projects, ensuring the right specialist handles each task' },
                { type: 'Agencies', use: 'Scale client delivery without expanding headcount—Shogun manages AI teams for dozens of projects in parallel' },
                { type: 'Filmmakers', use: 'Orchestrate pre-production, production, and post workflows with AI agents handling scripts, schedules, and assets' },
                { type: 'Game Studios', use: 'Coordinate design docs, code architecture, art pipelines, and marketing—all synchronized through Shogun' },
                { type: 'Authors & Publishers', use: 'Manage editing, formatting, cover design, marketing copy, and distribution simultaneously' }
            ]
        },
        ryu: {
            name: 'RYU',
            title: 'The Dragon • Security & Code',
            tagline: 'Power Incarnate. Master of All Development Elements.',
            description: 'Ryu is your full-stack development powerhouse. From frontend interfaces to backend architectures, from database optimization to security hardening—Ryu builds it all with precision and elegance.',
            capabilities: [
                'Full-stack development (React, Vue, Node, Python, Go)',
                'API design and microservices architecture',
                'Database optimization (SQL, NoSQL, graph databases)',
                'Security auditing and penetration testing',
                'CI/CD pipeline automation',
                'Performance optimization and scaling',
                'Code review and refactoring',
                'Technical documentation'
            ],
            whoItHelps: [
                { type: 'Game Designers', use: 'Build game engines, tools, and multiplayer backends' },
                { type: 'Filmmakers', use: 'Develop custom editing tools, asset management systems, and render farms' },
                { type: 'App Developers', use: 'Architect scalable mobile and web applications from concept to production' },
                { type: 'SaaS Founders', use: 'Build secure, enterprise-grade platforms with automated deployment' },
                { type: 'Technical Writers', use: 'Generate comprehensive API documentation and code examples' },
                { type: 'Agencies', use: 'Rapidly prototype and deploy client projects across any tech stack' }
            ]
        },
        akira: {
            name: 'AKIRA',
            title: 'Bright & Clear • Data & Strategy',
            tagline: 'Illumination Through Chaos. Pattern Recognition at Scale.',
            description: 'Akira transforms data into actionable intelligence. From market research to audience analytics, from competitive positioning to growth forecasting—Akira sees what others miss and charts the path forward.',
            capabilities: [
                'Market research and competitive analysis',
                'Audience segmentation and persona development',
                'Data visualization and dashboard creation',
                'Predictive analytics and trend forecasting',
                'A/B testing strategy and statistical analysis',
                'Business intelligence reporting',
                'Growth modeling and revenue projections',
                'Strategic planning and roadmap development'
            ],
            whoItHelps: [
                { type: 'Content Creators', use: 'Analyze audience behavior, optimize posting schedules, identify viral opportunities' },
                { type: 'Photographers', use: 'Research trending visual styles, price competitively, target ideal clients' },
                { type: 'Musicians', use: 'Track streaming analytics, identify growth markets, plan tour routes' },
                { type: 'Authors & Writers', use: 'Research genre trends, analyze reader preferences, optimize book launches' },
                { type: 'Marketing Agencies', use: 'Build data-driven campaigns with measurable ROI predictions' },
                { type: 'E-commerce Brands', use: 'Optimize pricing, inventory, and seasonal strategies based on market signals' }
            ]
        },
        hana: {
            name: 'HANA',
            title: 'The Flower • Creative & Design',
            tagline: 'Delicate Strength. Beauty With Purpose.',
            description: 'Hana is your creative design partner. From brand identity to UI/UX, from motion graphics to visual storytelling—Hana transforms pixels into experiences that captivate and convert.',
            capabilities: [
                'Brand identity and visual systems design',
                'UI/UX design for web and mobile applications',
                'Motion graphics and animation',
                'Print and digital marketing materials',
                'Iconography and illustration',
                'Typography and layout design',
                'Design system creation and documentation',
                'Accessibility compliance (WCAG AA/AAA)'
            ],
            whoItHelps: [
                { type: 'Filmmakers', use: 'Design title sequences, promotional materials, festival submissions' },
                { type: 'Game Designers', use: 'Create character concepts, UI overlays, branding assets' },
                { type: 'Photographers', use: 'Build portfolio sites, design logos, create client deliverable templates' },
                { type: 'Musicians', use: 'Design album covers, tour posters, social media assets' },
                { type: 'Authors', use: 'Create book covers, author websites, promotional graphics' },
                { type: 'Startups', use: 'Develop complete brand identities from scratch with design systems' }
            ]
        },
        kaito: {
            name: 'KAITO',
            title: 'Ocean Navigator • Operations',
            tagline: 'Guides Through Complexity. Safe Harbor Guaranteed.',
            description: 'Kaito orchestrates projects from chaos to completion. From sprint planning to resource allocation, from deadline management to team coordination—Kaito ensures nothing falls through the cracks.',
            capabilities: [
                'Project planning and timeline creation',
                'Resource allocation and capacity planning',
                'Task delegation and dependency mapping',
                'Risk assessment and mitigation strategies',
                'Team coordination and status reporting',
                'Workflow automation and optimization',
                'Budget tracking and cost management',
                'Stakeholder communication templates'
            ],
            whoItHelps: [
                { type: 'Film Productions', use: 'Manage shoot schedules, crew coordination, equipment tracking, post-production workflows' },
                { type: 'Agencies', use: 'Juggle multiple client projects, prevent scope creep, optimize billable hours' },
                { type: 'Event Producers', use: 'Coordinate vendors, timelines, budgets across complex live productions' },
                { type: 'Podcast Networks', use: 'Schedule recordings, manage guest coordination, track episode pipelines' },
                { type: 'Creative Teams', use: 'Balance creative work with operational deadlines across distributed teams' },
                { type: 'Solo Entrepreneurs', use: 'Stay organized across multiple revenue streams without dropping balls' }
            ]
        },
        aiko: {
            name: 'AIKO',
            title: 'Beloved Connection • Communications',
            tagline: 'Harmony Through Words. Bridges Built, Hearts Won.',
            description: 'Aiko transforms thoughts into resonant messages. From brand messaging to email campaigns, from social media to technical documentation—Aiko ensures your words land with precision and power.',
            capabilities: [
                'Brand messaging and voice development',
                'Copywriting for web, email, and social',
                'Content strategy and editorial calendars',
                'SEO optimization and keyword research',
                'Technical documentation and user guides',
                'Press releases and media pitches',
                'Social media management and engagement',
                'Email campaign design and A/B testing'
            ],
            whoItHelps: [
                { type: 'Authors & Poets', use: 'Craft compelling book descriptions, author bios, and marketing copy that sells' },
                { type: 'Musicians', use: 'Write press releases, social captions, Spotify bios that build fan connection' },
                { type: 'Filmmakers', use: 'Create festival submissions, pitch decks, and promotional content that gets noticed' },
                { type: 'Photographers', use: 'Develop portfolio descriptions, client proposals, and brand stories that convert' },
                { type: 'SaaS Companies', use: 'Build knowledge bases, onboarding emails, and product announcements that reduce churn' },
                { type: 'Nonprofits', use: 'Craft grant applications, donor communications, and impact reports that secure funding' }
            ]
        }
    };

    // ===== AGENT MODAL =====
    const agentModal = document.getElementById('agentModal');
    const agentModalContent = document.getElementById('agentModalContent');

    window.openAgentModal = (agentId) => {
        const agent = agentData[agentId];
        if (!agent) return;

        const content = `
            <div class="agent-modal-header">
                <h2>${agent.name}</h2>
                <div class="agent-modal-title">${agent.title}</div>
                <p class="agent-modal-tagline">${agent.tagline}</p>
            </div>
            <div class="agent-modal-body">
                <p class="agent-modal-desc">${agent.description}</p>
                
                <h3>Core Capabilities</h3>
                <ul class="capabilities-list">
                    ${agent.capabilities.map(cap => `<li>${cap}</li>`).join('')}
                </ul>
                
                <h3>Who ${agent.name} Helps</h3>
                <div class="who-helps-grid">
                    ${agent.whoItHelps.map(item => `
                        <div class="who-helps-card">
                            <h4>${item.type}</h4>
                            <p>${item.use}</p>
                        </div>
                    `).join('')}
                </div>
                
                <button class="btn-primary" onclick="closeAgentModal(); openModal();">JOIN THE WAITLIST</button>
            </div>
        `;

        agentModalContent.innerHTML = content;
        agentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeAgentModal = () => {
        agentModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.getElementById('closeAgentModal')?.addEventListener('click', closeAgentModal);
    
    agentModal?.addEventListener('click', (e) => {
        if (e.target === agentModal) closeAgentModal();
    });

    // ===== KEYBOARD NAVIGATION =====
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (agentModal?.classList.contains('active')) {
                closeAgentModal();
            } else if (waitlistModal?.classList.contains('active')) {
                closeModal();
            } else if (mobileMenu?.classList.contains('active')) {
                closeMenu();
            }
        }
    });

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== INK SPREAD EFFECT ON AGENT CARDS =====
    const agentCards = document.querySelectorAll('.agent-card');
    
    agentCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    console.log('Cyber Ronin Quest — Initialized');
});