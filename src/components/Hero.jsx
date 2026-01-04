import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const particlesContainerRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [tagIndex, setTagIndex] = useState(0);
    const [textStyle, setTextStyle] = useState({ opacity: 1, transform: 'translateY(0)' });

    const taglines = [
        "Ignite Your Skills. Inspire Your Future.",
        "Where Innovation Meets Imagination.",
        "Learn, Compete & Evolve."
    ];

    // Particles Logic (Honey-Tech Hexagonal Energy Grid)
    useEffect(() => {
        const container = particlesContainerRef.current;
        if (!container) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        container.innerHTML = '';
        container.appendChild(canvas);

        let animationFrameId;
        const mouse = { x: null, y: null, radius: 200 };
        const gridSize = 65;

        let traces = [];
        let particles = [];
        const themeColors = ['#7d9eebff', '#2563eb', '#0ea5e9', '#38bdf8', '#1e293b', '#64748b'];
        const techSymbols = [
            '∑', '∏', '√', 'λ', 'Ω', 'Δ', '∇', 'θ',
            '0xFA', '0xFF', 'ptr', 'ref', 'val', 'ptr*',
            'bit', 'byte', 'null', 'void', 'int', 'bool',
            'GND', 'VCC', 'CLK', 'MOS', 'GATE', 'BUS',
            '⊕', '⊗', '⊥', '⊢', '⊨', '≡', '≈',
            '⌬', '⬢', '⬡', '⬣', '⧉', '⬟'
        ];

        const resize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        };

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        const drawGrid = () => {
            ctx.save();
            ctx.lineWidth = 1.2;

            const cols = Math.ceil(canvas.width / gridSize);
            const rows = Math.ceil(canvas.height / gridSize);

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    let x = i * gridSize;
                    let y = j * gridSize;

                    let opacity = 0.15;
                    let offsetX = 0;
                    let offsetY = 0;

                    // Mouse Magnetic Distortion
                    if (mouse.x !== null && mouse.y !== null) {
                        const dx = mouse.x - x;
                        const dy = mouse.y - y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < mouse.radius) {
                            // Pull grid points slightly towards mouse
                            const force = (mouse.radius - dist) / mouse.radius;
                            offsetX = dx * force * 0.2;
                            offsetY = dy * force * 0.2;
                            opacity = 0.15 + force * 0.45;

                            // Glowing Node at intersection
                            ctx.fillStyle = `rgba(0, 242, 254, ${opacity * 1.8})`;
                            ctx.beginPath();
                            ctx.arc(x + offsetX, y + offsetY, 2.5, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }

                    const px = x + offsetX;
                    const py = y + offsetY;

                    // Horizontal Line (with perspective)
                    if (i < cols) {
                        const nextX = (i + 1) * gridSize;
                        const ndx = mouse.x - nextX;
                        const ndy = mouse.y - y;
                        const ndist = Math.sqrt(ndx * ndx + ndy * ndy);
                        const nForce = ndist < mouse.radius ? (mouse.radius - ndist) / mouse.radius : 0;
                        const nOffX = ndist < mouse.radius ? ndx * nForce * 0.2 : 0;
                        const nOffY = ndist < mouse.radius ? ndy * nForce * 0.2 : 0;

                        ctx.strokeStyle = `rgba(100, 116, 139, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(px, py);
                        ctx.lineTo(nextX + nOffX, y + nOffY);
                        ctx.stroke();
                    }

                    // Vertical Line (with perspective)
                    if (j < rows) {
                        const nextY = (j + 1) * gridSize;
                        const ndx = mouse.x - x;
                        const ndy = mouse.y - nextY;
                        const ndist = Math.sqrt(ndx * ndx + ndy * ndy);
                        const nForce = ndist < mouse.radius ? (mouse.radius - ndist) / mouse.radius : 0;
                        const nOffX = ndist < mouse.radius ? ndx * nForce * 0.2 : 0;
                        const nOffY = ndist < mouse.radius ? ndy * nForce * 0.2 : 0;

                        ctx.strokeStyle = `rgba(100, 116, 139, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(px, py);
                        ctx.lineTo(x + nOffX, nextY + nOffY);
                        ctx.stroke();
                    }
                }
            }
            ctx.restore();
        };

        const createTrace = () => {
            const col = Math.floor(Math.random() * (canvas.width / gridSize));
            const row = Math.floor(Math.random() * (canvas.height / gridSize));

            traces.push({
                x: col * gridSize,
                y: row * gridSize,
                dir: Math.floor(Math.random() * 4), // 0:R, 1:D, 2:L, 3:U
                color: themeColors[Math.floor(Math.random() * themeColors.length)],
                life: 100,
                speed: 3
            });
        };

        class DataParticle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Type: 0 = Node, 1 = Data Packet (Rect), 2 = System Word
                this.type = Math.floor(Math.random() * 3);
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 1.0;
                this.speedY = (Math.random() - 0.5) * 1.0;
                this.color = themeColors[Math.floor(Math.random() * themeColors.length)];
                this.opacity = Math.random() * 0.3 + 0.15;
                this.symbol = techSymbols[Math.floor(Math.random() * techSymbols.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Subtle Mouse Repulsion
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x -= dx * force * 0.03;
                        this.y -= dy * force * 0.03;
                    }
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = this.color;

                if (this.type === 0) { // Node
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                } else if (this.type === 1) { // Data Packet
                    ctx.fillRect(this.x, this.y, this.size * 4, this.size);
                } else { // System Word
                    ctx.font = `600 9px Orbitron`;
                    ctx.fillText(this.symbol, this.x, this.y);
                }

                ctx.restore();
            }
        }

        const connectParticles = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.save();
                        ctx.globalAlpha = (1 - dist / 120) * 0.15;
                        ctx.strokeStyle = '#000000ff';
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 50; i++) {
                particles.push(new DataParticle());
            }
        };

        const drawCursorField = (time) => {
            if (mouse.x === null || mouse.y === null) return;

            ctx.save();
            // Glow Aura - Layered Holographic Effect
            const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
            grad.addColorStop(0, 'rgba(211, 204, 204, 0.8)');     // Bright Plasma Core
            grad.addColorStop(0.3, 'rgba(0, 242, 254, 0.15)');  // Inner Glow
            grad.addColorStop(0.7, 'rgba(0, 242, 254, 0.05)');  // Outer Diffusion
            grad.addColorStop(1, 'rgba(20, 243, 255, 0)');        // Total Fade

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
            ctx.fill();

            // Tactical Ring
            ctx.strokeStyle = 'rgba(91, 11, 11, 0.81)';
            ctx.setLineDash([5, 15]);
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 50 + Math.sin(time * 0.005) * 5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        };

        const animate = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Draw Digital Pulse traces 
            if (traces.length < 20 && Math.random() > 0.95) createTrace();

            traces.forEach((t, index) => {
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = t.color;
                ctx.globalAlpha = t.life / 100;
                ctx.lineWidth = 2.5;
                ctx.shadowBlur = 12;
                ctx.shadowColor = t.color;

                ctx.moveTo(t.x, t.y);

                if (t.dir === 0) t.x += t.speed;
                else if (t.dir === 1) t.y += t.speed;
                else if (t.dir === 2) t.x -= t.speed;
                else if (t.dir === 3) t.y -= t.speed;

                ctx.lineTo(t.x, t.y);
                ctx.stroke();
                ctx.restore();

                t.life -= 0.6;
                // Change direction only at grid junctions
                if (Math.abs(t.x % gridSize) < t.speed && Math.abs(t.y % gridSize) < t.speed) {
                    t.x = Math.round(t.x / gridSize) * gridSize;
                    t.y = Math.round(t.y / gridSize) * gridSize;
                    if (Math.random() > 0.7) t.dir = Math.floor(Math.random() * 4);
                }

                if (t.life <= 0) traces.splice(index, 1);
            });

            // 2. Draw Silicon Square Grid with Magnetic Distortion
            drawGrid();

            // 3. Draw Branded Watermark
            ctx.save();
            ctx.globalAlpha = 0.03;
            ctx.font = 'bold 120px Orbitron';
            ctx.fillStyle = '#000000ff';
            ctx.textAlign = 'center';
            ctx.fillText('MARKUS26', canvas.width / 2, canvas.height / 2 + 50);
            ctx.restore();

            // 4. Draw Cursor Field Effects
            drawCursorField(time);

            // 5. Draw and Update Data Particles
            connectParticles();
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        initParticles();
        animate(0);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Rotating Text Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setTextStyle({ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' });

            setTimeout(() => {
                setTagIndex(prev => (prev + 1) % taglines.length);
                setTextStyle({ opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease' });
            }, 500);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    // Countdown Logic
    useEffect(() => {

        const eventDate = new Date("January 24, 2026 09:00:00").getTime();

        const timer = setInterval(() => {
            const now = Date.now();
            const diff = eventDate - now;
            if (diff <= 0) return;

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const fmt = (val) => val.toString().padStart(2, "0");

    return (
        <section id="hero">
            <div id="particles-container" ref={particlesContainerRef}></div>

            <div className="container hero-content">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-7 text-center text-lg-start">

                        <div className="dept-pill-container">
                            <div className="dept-pill">
                                Dept. of Computer Technology - PG · Intra-Department Symposium 2026
                            </div>
                        </div>

                        <h1 className="hero-title">Mark Us – 26</h1>

                        <h3 className="hero-subtitle">
                            Intra College One-Day Symposium | March 15, 2026
                        </h3>

                        <div className="rotating-text-wrapper">
                            <span id="rotating-text" style={textStyle}>
                                {taglines[tagIndex]}
                            </span>
                        </div>

                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                            <a href="#events" className="btn btn-glow">Register Now</a>
                            <a href="#events" className="btn btn-glow">View Events</a>
                        </div>
                    </div>

                    {/* Desktop timer */}
                    <div className="col-lg-5 d-none d-lg-flex justify-content-center">
                        <div className="countdown-card text-center">
                            <h5 className="countdown-title">Event Starts In</h5>

                            <div className="countdown">
                                <div><span id="days">{fmt(timeLeft.days)}</span><small>Days</small></div>
                                <div><span id="hours">{fmt(timeLeft.hours)}</span><small>Hours</small></div>
                                <div><span id="minutes">{fmt(timeLeft.minutes)}</span><small>Minutes</small></div>
                                <div><span id="seconds">{fmt(timeLeft.seconds)}</span><small>Seconds</small></div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile timer */}
                    <div className="countdown-card text-center mt-4 d-block d-lg-none">
                        <h5 className="countdown-title">Event Starts In</h5>

                        <div className="countdown">
                            <div><span id="days-m">{fmt(timeLeft.days)}</span><small>Days</small></div>
                            <div><span id="hours-m">{fmt(timeLeft.hours)}</span><small>Hours</small></div>
                            <div><span id="minutes-m">{fmt(timeLeft.minutes)}</span><small>Minutes</small></div>
                            <div><span id="seconds-m">{fmt(timeLeft.seconds)}</span><small>Seconds</small></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
