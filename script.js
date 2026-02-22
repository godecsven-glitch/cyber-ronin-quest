(function () {
    'use strict';

    /* ── GSAP setup ──────────────────────────────────────────────────────── */
    var hasGSAP = typeof gsap !== 'undefined';
    if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    /* ── NAVBAR ──────────────────────────────────────────────────────────── */
    var navbar   = document.getElementById('navbar');
    var navBrand = document.getElementById('nav-brand');
    var navLinks = document.getElementById('nav-links');
    var navCta   = document.getElementById('nav-cta');

    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY > window.innerHeight * 0.8;
        if (scrolled) {
            navbar.classList.add('scrolled');
            navBrand.style.color = '#111111';
            navLinks.style.color = 'rgba(17,17,17,0.7)';
            navCta.style.background = '#111111';
        } else {
            navbar.classList.remove('scrolled');
            navBrand.style.color = '#F5F3EE';
            navLinks.style.color = 'rgba(245,243,238,0.8)';
            navCta.style.background = '#E63B2E';
        }
    }, { passive: true });

    /* ── HERO ANIMATION ──────────────────────────────────────────────────── */
    if (hasGSAP) {
        var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.to('.hero-line-1', { y: 0, opacity: 1, duration: 1,   delay: 0.2 })
          .to('.hero-line-2', { y: 0, opacity: 1, duration: 1.2 }, '-=0.6')
          .to('.hero-sub',    { y: 0, opacity: 1, duration: 0.8 }, '-=0.8')
          .to('.hero-cta',    { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');
    } else {
        ['.hero-line-1', '.hero-line-2', '.hero-sub', '.hero-cta'].forEach(function (s) {
            var el = document.querySelector(s);
            if (el) { el.style.opacity = '1'; el.style.transform = 'none'; }
        });
    }

    /* ── SHUFFLER CARD ───────────────────────────────────────────────────── */
    var shufflerTrack = document.getElementById('shuffler-track');
    var shufflerItems = shufflerTrack ? shufflerTrack.querySelectorAll('.shuffler-item') : [];
    var shufflerIndex = 0;

    if (shufflerTrack) {
        setInterval(function () {
            shufflerIndex = (shufflerIndex + 1) % 3;
            shufflerTrack.style.transform = 'translateY(-' + (shufflerIndex * 64) + 'px)';
            shufflerItems.forEach(function (span, i) {
                span.style.color = i === shufflerIndex ? '#E63B2E' : 'rgba(17,17,17,0.2)';
            });
        }, 3000);
    }

    /* ── TYPEWRITER CARD ─────────────────────────────────────────────────── */
    var typeEl = document.getElementById('typewriter-text');
    if (typeEl) {
        var twMessages = [
            'CS_V1: DRAFT_CREATED...',
            'CS_V1: LOCKED...',
            'PDF: DOWNLOADED...',
            'CS_V2: NEW_REVISION...',
            'CS_V2: MARKED_SENT...'
        ];
        var twMsgIdx = 0, twCharIdx = 0;

        function typeStep() {
            var msg = twMessages[twMsgIdx];
            if (twCharIdx < msg.length) {
                typeEl.textContent += msg[twCharIdx];
                twCharIdx++;
                setTimeout(typeStep, 50);
            } else {
                setTimeout(function () {
                    typeEl.textContent = '';
                    twCharIdx = 0;
                    twMsgIdx  = (twMsgIdx + 1) % twMessages.length;
                    typeStep();
                }, 2000);
            }
        }
        typeStep();
    }

    /* ── SCHEDULER CARD ──────────────────────────────────────────────────── */
    var dayCells    = document.querySelectorAll('.day-cell');
    var schedCursor = document.getElementById('sched-cursor');
    var schedLabel  = document.getElementById('sched-label');
    var gridWrapper = document.getElementById('day-grid-wrapper');

    function setCursorPos(cellIdx) {
        if (!schedCursor || !gridWrapper || dayCells.length === 0) return;
        var cell = dayCells[cellIdx];
        if (!cell) return;
        var cellLeft = cell.offsetLeft + cell.offsetWidth  / 2;
        var cellTop  = cell.offsetTop  + cell.offsetHeight / 2;
        schedCursor.style.left = cellLeft + 'px';
        schedCursor.style.top  = cellTop  + 'px';
    }

    function runSchedSequence() {
        if (!schedCursor) return;
        setTimeout(function () {
            schedCursor.style.opacity = '1';
            setCursorPos(3);
        }, 300);
        setTimeout(function () {
            dayCells.forEach(function (c, i) { c.classList.toggle('active', i === 3); });
        }, 1100);
        setTimeout(function () {
            setCursorPos(6);
            schedLabel.style.opacity = '1';
        }, 1900);
        setTimeout(function () {
            schedCursor.style.opacity = '0';
            schedLabel.style.opacity  = '0';
            dayCells.forEach(function (c) { c.classList.remove('active'); });
        }, 3200);
    }

    if (schedCursor) {
        runSchedSequence();
        setInterval(runSchedSequence, 4200);
    }

    /* ── PHILOSOPHY SCROLL ANIMATION ─────────────────────────────────────── */
    if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
        document.querySelectorAll('.philosophy-line').forEach(function (el, i) {
            gsap.from(el, {
                scrollTrigger: { trigger: '#philosophy', start: 'top 65%' },
                y: 40, opacity: 0, duration: 1, delay: i * 0.15, ease: 'power3.out'
            });
        });
    }

    /* ── WORKFLOW CANVAS ANIMATIONS ──────────────────────────────────────── */
    document.querySelectorAll('.workflow-canvas').forEach(function (canvas) {
        var ctx  = canvas.getContext('2d');
        var anim = canvas.getAttribute('data-anim');
        var time = 0;

        function resize() {
            canvas.width  = canvas.offsetWidth  * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
        resize();
        window.addEventListener('resize', resize, { passive: true });

        function draw() {
            var w = canvas.offsetWidth;
            var h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);

            if (anim === 'helix') {
                for (var i = 0; i < 3; i++) {
                    var radius = 40 + i * 25;
                    ctx.strokeStyle = 'rgba(230,59,46,0.3)';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(w / 2, h / 2, radius, 0, Math.PI * 2);
                    ctx.stroke();
                    var angle = time * 0.001 + (i * Math.PI / 3);
                    var x = w / 2 + Math.cos(angle) * radius;
                    var y = h / 2 + Math.sin(angle) * radius;
                    ctx.fillStyle = '#E63B2E';
                    ctx.beginPath();
                    ctx.arc(x, y, 4, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if (anim === 'scan') {
                ctx.fillStyle = 'rgba(230,59,46,0.1)';
                for (var sx = 20; sx < w; sx += 30) {
                    for (var sy = 20; sy < h; sy += 30) {
                        ctx.fillRect(sx - 1, sy - 1, 2, 2);
                    }
                }
                var scanX = 20 + (time * 0.1) % (w - 40);
                ctx.strokeStyle = '#E63B2E';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(scanX, 0);
                ctx.lineTo(scanX, h);
                ctx.stroke();
                var grad = ctx.createLinearGradient(scanX - 20, 0, scanX + 20, 0);
                grad.addColorStop(0,   'rgba(230,59,46,0)');
                grad.addColorStop(0.5, 'rgba(230,59,46,0.3)');
                grad.addColorStop(1,   'rgba(230,59,46,0)');
                ctx.fillStyle = grad;
                ctx.fillRect(scanX - 20, 0, 40, h);
            } else if (anim === 'wave') {
                ctx.strokeStyle = '#E63B2E';
                ctx.lineWidth = 3;
                ctx.beginPath();
                for (var wx = 0; wx < w; wx++) {
                    var wy = h / 2 + Math.sin((wx + time) * 0.02) * 30 * Math.sin(time * 0.001);
                    wx === 0 ? ctx.moveTo(wx, wy) : ctx.lineTo(wx, wy);
                }
                ctx.stroke();
                ctx.strokeStyle = 'rgba(230,59,46,0.3)';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                for (var wx2 = 0; wx2 < w; wx2++) {
                    var wy2 = h / 2 + Math.cos((wx2 + time) * 0.015) * 20;
                    wx2 === 0 ? ctx.moveTo(wx2, wy2) : ctx.lineTo(wx2, wy2);
                }
                ctx.stroke();
            }

            time += 16;
            requestAnimationFrame(draw);
        }
        draw();
    });

    /* ── WORKFLOW STICKY SCALE/BLUR EFFECT ───────────────────────────────── */
    var wfCards = Array.prototype.slice.call(document.querySelectorAll('.protocol-card'));

    window.addEventListener('scroll', function () {
        wfCards.forEach(function (card, i) {
            if (i === wfCards.length - 1) return;
            var next = wfCards[i + 1];
            if (!next) return;
            var nextTop  = next.getBoundingClientRect().top;
            var progress = Math.max(0, Math.min(1, (window.innerHeight - nextTop) / window.innerHeight));
            if (progress > 0) {
                card.style.transform = 'scale(' + (1 - progress * 0.1) + ')';
                card.style.filter    = 'blur(' + (progress * 20) + 'px)';
                card.style.opacity   = String(1 - progress * 0.5);
            } else {
                card.style.transform = '';
                card.style.filter    = '';
                card.style.opacity   = '';
            }
        });
    }, { passive: true });

    /* ── EXPANSION ANIMATION ─────────────────────────────────────────────── */
    if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
        document.querySelectorAll('.expansion-line').forEach(function (el, i) {
            gsap.from(el, {
                scrollTrigger: { trigger: '#expansion', start: 'top 65%' },
                y: 40, opacity: 0, duration: 1, delay: i * 0.2, ease: 'power3.out'
            });
        });
    }

    /* ── PRICING ANIMATION ───────────────────────────────────────────────── */
    if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
        document.querySelectorAll('.pricing-card').forEach(function (card, i) {
            gsap.from(card, {
                scrollTrigger: { trigger: '#pricing', start: 'top 70%' },
                y: 60, opacity: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out'
            });
        });
    }

    /* ── FEATURES CARDS SCROLL-IN ────────────────────────────────────────── */
    if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
        ['#shuffler-card', '#typewriter-card', '#scheduler-card'].forEach(function (sel, i) {
            gsap.from(sel, {
                scrollTrigger: { trigger: sel, start: 'top 82%' },
                y: 40, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out'
            });
        });
    }

}());
