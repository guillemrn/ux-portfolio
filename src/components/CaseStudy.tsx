import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Target,
    TrendingUp,
    CheckCircle,
    Users,
    Search,
    Layout,
    Zap,
    BarChart,
    Shield,
    ArrowRight,
    AlertTriangle,
    Cpu,
    Database,
    Sparkles
} from 'lucide-react';

// Animation Variants
const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
};

const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.96 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
};

// ==========================================
// 1. TRUSTLENS INTERACTIVE WIDGETS
// ==========================================

// TrustLens Chrome Extension Simulator
const TrustLensExtensionSim: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'alerts' | 'rights' | 'savings'>('alerts');
    const [score, setScore] = useState(0);
    const [expandedAlert, setExpandedAlert] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setScore(68);
        }, 855);
        return () => clearTimeout(timer);
    }, []);

    const alerts = [
        { id: 1, title: 'Renovación Automática Oculta', type: 'danger', desc: 'Se te cobrarán $49 USD/mes tras 3 días de prueba gratuita sin previo aviso.' },
        { id: 2, title: 'Cesión Total de Contenidos', type: 'warning', desc: 'Concedes licencia perpetua, irrevocable y sublicenciable de todos tus diseños.' }
    ];

    const rights = [
        { title: 'Jurisdicción del Contrato', value: 'Delaware, EE.UU. (Dificulta reclamos legales)' },
        { title: 'Modificación Unilateral', value: 'Pueden cambiar precios en cualquier momento sin avisar' }
    ];

    return (
        <div className="w-full max-w-[340px] h-[480px] bg-brand-dark rounded-3xl border border-brand-accent/20 flex flex-col overflow-hidden text-left shadow-2xl relative">
            {/* Header bar */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-brand-accent/20 flex items-center justify-center border border-brand-accent/30">
                        <Shield size={12} className="text-brand-accent" />
                    </div>
                    <span className="font-sans text-[11px] font-black uppercase tracking-wider text-brand-cream">TrustLens AI</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            </div>

            {/* Content URL Info */}
            <div className="px-5 py-3 bg-white/2 flex items-center gap-1.5 border-b border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span className="font-sans text-[9px] font-bold text-white/50 truncate">
                    Analizando: pdf-generator-ai.com/terms
                </span>
            </div>

            {/* Extension Core */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5">
                {/* Score Widget */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                            <path
                                className="text-white/10"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <motion.path
                                className="text-brand-accent"
                                strokeWidth="3"
                                strokeDasharray={`${score}, 100`}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                initial={{ strokeDasharray: "0, 100" }}
                                animate={{ strokeDasharray: `${score}, 100` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </svg>
                        <span className="absolute font-sans text-lg font-black text-brand-cream">{score}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sans text-[10px] font-black uppercase text-brand-accent tracking-wider">Puntuación</span>
                        <span className="font-sans text-sm text-brand-cream font-medium">Riesgo Moderado</span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 bg-white/5 rounded-xl p-1 border border-white/5">
                    {(['alerts', 'rights', 'savings'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-1.5 text-center rounded-lg font-sans text-[9px] uppercase tracking-wider font-black transition-all ${activeTab === tab ? 'bg-brand-accent text-brand-dark' : 'text-brand-cream/60 hover:text-brand-cream'}`}
                        >
                            {tab === 'alerts' ? 'Alertas' : tab === 'rights' ? 'Cláusulas' : 'Ahorro'}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div className="flex-1">
                    {activeTab === 'alerts' && (
                        <div className="flex flex-col gap-3">
                            {alerts.map((item) => (
                                <div key={item.id} className="bg-white/5 rounded-xl border border-white/5 overflow-hidden transition-all duration-300">
                                    <button
                                        onClick={() => setExpandedAlert(expandedAlert === item.id ? null : item.id)}
                                        className="w-full px-4 py-3 flex items-center justify-between font-sans text-[10px] text-brand-cream font-bold"
                                    >
                                        <div className="flex items-center gap-2">
                                            <AlertTriangle size={12} className={item.type === 'danger' ? 'text-red-500' : 'text-yellow-500'} />
                                            <span>{item.title}</span>
                                        </div>
                                        <span className="text-[10px] text-brand-accent">{expandedAlert === item.id ? '−' : '+'}</span>
                                    </button>
                                    <AnimatePresence>
                                        {expandedAlert === item.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-4 pb-3 pt-1 border-t border-white/5 font-sans text-[10px] text-white/70 leading-relaxed"
                                            >
                                                {item.desc}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'rights' && (
                        <div className="flex flex-col gap-3 font-sans text-[10px]">
                            {rights.map((item, i) => (
                                <div key={i} className="bg-white/2 p-3.5 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <span className="font-black text-brand-accent uppercase tracking-wider text-[8px]">{item.title}</span>
                                    <span className="text-white/80">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'savings' && (
                        <div className="flex flex-col items-center justify-center py-6 text-center gap-2">
                            <span className="font-sans text-3xl font-black text-brand-accent tracking-tighter">$350 USD</span>
                            <span className="font-sans text-[10px] font-black uppercase text-brand-cream/50 tracking-wider">Ahorro Estimado Evitado</span>
                            <p className="font-sans text-[9px] text-white/60 max-w-[200px] leading-relaxed mt-2">
                                Evitado mediante la detección de suscripciones trampa y cláusulas abusivas en 6 productos evaluados.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// TrustLens Architecture Flowchart
const TrustLensFlowchart: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center p-6 bg-brand-dark/95 border border-brand-accent/20 rounded-3xl gap-6 shadow-xl text-left relative min-h-[300px]">
            <div className="absolute top-4 left-4 font-sans text-[8px] uppercase tracking-widest font-black text-brand-accent">
                Visual Core Engine / Arquitectura
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg relative">
                {/* Node 1 */}
                <div className="flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-2xl w-full md:w-1/3 text-center">
                    <Cpu size={20} className="text-brand-accent mb-2" />
                    <span className="font-sans text-[10px] font-black uppercase text-brand-cream">Extensión URL</span>
                    <span className="font-sans text-[9px] text-white/50 mt-1">Usuario navega</span>
                </div>

                <div className="text-brand-accent font-black hidden md:block">→</div>

                {/* Node 2 */}
                <div className="flex flex-col items-center p-3 bg-brand-accent/10 border border-brand-accent/30 rounded-2xl w-full md:w-1/3 text-center relative overflow-hidden">
                    <Database size={20} className="text-brand-accent mb-2" />
                    <span className="font-sans text-[10px] font-black uppercase text-brand-cream">Supabase Cache</span>
                    <span className="font-sans text-[9px] text-brand-accent mt-1">¿Existe en caché?</span>
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                </div>

                <div className="text-brand-accent font-black hidden md:block">→</div>

                {/* Node 3 */}
                <div className="flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-2xl w-full md:w-1/3 text-center">
                    <Sparkles size={20} className="text-yellow-400 mb-2" />
                    <span className="font-sans text-[10px] font-black uppercase text-brand-cream">AI Parser</span>
                    <span className="font-sans text-[9px] text-white/50 mt-1">Cálculo de Score JSON</span>
                </div>
            </div>

            <div className="w-full bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="font-sans text-[10px] text-white/80 leading-relaxed">
                    <strong className="text-brand-accent">Ventaja Estratégica:</strong> Para evitar el retardo y costo de analizar 50 páginas mediante LLM en cada carga, la arquitectura consulta primero un hash indexado en Supabase. Si existe, entrega el <span className="text-brand-accent">Trust Score al instante</span>.
                </p>
            </div>
        </div>
    );
};

// TrustLens Landing Page Lead Simulator
const TrustLensLandingSim: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [subscribers, setSubscribers] = useState(142);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() && email.includes('@')) {
            setSubmitted(true);
            setSubscribers(prev => prev + 1);
            setTimeout(() => {
                setSubmitted(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <div className="w-full flex flex-col p-6 bg-brand-dark border border-brand-accent/20 rounded-3xl gap-5 shadow-xl text-left relative min-h-[300px] justify-between">
            <div className="absolute top-4 left-4 font-sans text-[8px] uppercase tracking-widest font-black text-brand-accent">
                Next.js Landing / Simulación Captura Leads
            </div>

            <div className="flex flex-col gap-3 mt-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-accent/15 border border-brand-accent/35 text-brand-accent font-sans font-bold text-[8px] uppercase tracking-widest max-w-fit">
                    <span className="w-1 h-1 rounded-full bg-brand-accent animate-pulse" />
                    Validación temprana
                </div>
                <h4 className="font-sans text-lg text-brand-cream font-bold leading-tight">
                    Traduce la "letra chica" del software a insights claros
                </h4>
                <p className="font-sans text-[10px] text-white/60 leading-relaxed">
                    Evita suscripciones trampa y protege tus activos digitales con el detector de cláusulas con Inteligencia Artificial.
                </p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col gap-3">
                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center py-2"
                    >
                        <span className="w-6 h-6 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent font-bold text-xs mb-1.5">✓</span>
                        <span className="font-sans text-[10px] font-bold text-brand-cream">¡Te has registrado con éxito!</span>
                        <span className="font-sans text-[8px] text-white/55 mt-0.5">Te avisaremos tan pronto liberemos la Beta.</span>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
                        <input
                            type="email"
                            placeholder="Tu correo..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-3 py-2 bg-brand-dark/80 border border-white/10 rounded-lg font-sans text-[10px] text-brand-cream placeholder-white/35 focus:outline-none focus:border-brand-accent/40"
                        />
                        <button
                            type="submit"
                            className="px-3 py-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-sans text-[9px] uppercase tracking-wider font-black rounded-lg transition-colors shrink-0"
                        >
                            Unirse
                        </button>
                    </form>
                )}
            </div>

            <div className="flex items-center justify-between text-[8px] font-sans text-white/45 px-1">
                <span>Comunidad Early Adopters</span>
                <span className="font-bold text-brand-accent uppercase tracking-wider">
                    {subscribers} registrados
                </span>
            </div>
        </div>
    );
};

// ==========================================
// 3. ECOVIS MEXICOM WIDGETS
// ==========================================

// Ecovis CRO Before/After Toggle
const EcovisCroToggle: React.FC = () => {
    const [theme, setTheme] = useState<'before' | 'after'>('after');
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (theme === 'after') {
            setClicked(true);
            setTimeout(() => setClicked(false), 2000);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-6 bg-brand-cream border border-brand-cream-dark/20 rounded-3xl gap-6 shadow-md text-left relative">
            <div className="absolute top-4 left-4 font-sans text-[8px] uppercase tracking-widest font-black text-brand-dark/50">
                Experimento CRO / CTA Microcopy
            </div>

            {/* Split Switcher */}
            <div className="flex bg-brand-dark/5 p-1 rounded-full border border-brand-dark/5 mt-4">
                <button
                    onClick={() => setTheme('before')}
                    className={`px-4 py-1.5 rounded-full font-sans text-[9px] uppercase tracking-wider font-black transition-all ${theme === 'before' ? 'bg-brand-dark text-white' : 'text-brand-dark/60'}`}
                >
                    Antes (Táctico)
                </button>
                <button
                    onClick={() => setTheme('after')}
                    className={`px-4 py-1.5 rounded-full font-sans text-[9px] uppercase tracking-wider font-black transition-all ${theme === 'after' ? 'bg-brand-dark text-white' : 'text-brand-dark/60'}`}
                >
                    Después (Optimizado)
                </button>
            </div>

            {/* Button Simulator */}
            <div className="w-full bg-white p-8 rounded-2xl border border-brand-cream-dark/15 flex flex-col items-center text-center gap-4 min-h-[160px] justify-center relative">
                {theme === 'before' ? (
                    <>
                        <button className="px-6 py-3.5 bg-gray-200 border border-gray-300 rounded-lg text-gray-700 font-sans text-xs font-semibold uppercase tracking-wider pointer-events-none">
                            Nuestros Servicios Industriales
                        </button>
                        <div className="flex items-center gap-1.5 text-red-600 font-sans text-[10px] font-black uppercase tracking-wider mt-2">
                            <span className="w-2 h-2 rounded-full bg-red-600" />
                            Baja intención de contacto
                        </div>
                    </>
                ) : (
                    <>
                        <motion.button
                            onClick={handleClick}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-brand-dark hover:bg-brand-dark/95 border border-brand-accent/25 text-brand-accent rounded-full font-sans text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-accent/10 flex items-center gap-2 relative group overflow-hidden"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping absolute left-4" />
                            <span className="pl-4">Optimizar Eficiencia Energética Ahora</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <span className="font-sans text-[9px] text-brand-dark/50 -mt-2">Cotización Técnica Asíncrona sin Compromiso en 24 Horas</span>
                        <div className="flex items-center gap-1.5 text-brand-accent font-sans text-[10px] font-black uppercase tracking-wider mt-1">
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                            Mayor claridad para contactar
                        </div>

                        {/* Confetti Animation Sim */}
                        <AnimatePresence>
                            {clicked && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-brand-cream/90 flex flex-col items-center justify-center rounded-2xl p-4 border border-brand-accent/35"
                                >
                                    <Sparkles className="text-brand-accent mb-2" size={24} />
                                    <span className="font-sans text-lg font-black text-brand-dark">¡Solicitud Simulada!</span>
                                    <span className="font-sans text-[10px] text-brand-dark/70 mt-1">Evidencia real del impacto de CRO.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </div>
        </div>
    );
};

// Ecovis Navigation IA structure
const EcovisIaTree: React.FC = () => {
    return (
        <div className="w-full flex flex-col p-6 bg-brand-dark text-brand-cream rounded-3xl gap-4 shadow-lg border border-brand-dark/20 text-left min-h-[300px] justify-between relative">
            <div className="absolute top-4 left-4 font-sans text-[8px] uppercase tracking-widest font-black text-brand-accent">
                Arquitectura de Información / Sitemap
            </div>

            <div className="flex flex-col gap-6 mt-8">
                {/* Old IA */}
                <div className="flex flex-col gap-1.5 border-l-2 border-rose-300/40 pl-4">
                    <span className="font-sans text-[9px] uppercase tracking-widest font-black text-rose-300">Antigua Estructura (Catálogo Opaco)</span>
                    <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                        Inicio → Modelos HXM-300 → Especificaciones PDF → Contáctenos (Sin valor previo ni flujo lógico).
                    </p>
                </div>

                {/* New IA */}
                <div className="flex flex-col gap-1.5 border-l-2 border-brand-accent pl-4">
                    <span className="font-sans text-[9px] uppercase tracking-widest font-black text-brand-accent">Nueva Arquitectura Editorial</span>
                    <div className="flex flex-col gap-2 font-sans text-[11px] text-white/80 mt-1">
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            <span>1. Propuesta de Valor Editorial (Ahorros energéticos)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            <span>2. Categorización Inteligente (Sistemas de Combustión vs Ahorro)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            <span>3. Flujo CRO Secuencial (Cotización guiada por micro-copy)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/5 mt-2">
                <span className="font-sans text-[10px] text-brand-accent leading-relaxed">
                    ✓ Navegación limpia y rápida que reduce el ciclo de ventas B2B corporativo.
                </span>
            </div>
        </div>
    );
};

// Ecovis SEO Metrics Dial
const EcovisSeoMetrics: React.FC = () => {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setScore(92), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center p-6 bg-brand-cream border border-brand-cream-dark/20 rounded-3xl gap-6 shadow-md text-left relative">
            <div className="absolute top-4 left-4 font-sans text-[8px] uppercase tracking-widest font-black text-brand-dark/50">
                SEO & Rendimiento Técnico
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center mt-6">
                {/* Lighthouse Dial */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative w-24 h-24 flex items-center justify-center bg-brand-dark rounded-full shadow-lg border border-brand-accent/20">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                            <circle
                                className="text-white/5"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="none"
                                r="16"
                                cx="18"
                                cy="18"
                            />
                            <motion.circle
                                className="text-brand-accent"
                                strokeWidth="3"
                                strokeDasharray="100"
                                strokeDashoffset={100 - score}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                r="16"
                                cx="18"
                                cy="18"
                                initial={{ strokeDashoffset: 100 }}
                                animate={{ strokeDashoffset: 100 - score }}
                                transition={{ duration: 1.8, ease: "easeOut" }}
                            />
                        </svg>
                        <span className="absolute font-sans text-2xl font-black text-brand-cream">{score}</span>
                    </div>
                    <span className="font-sans text-[10px] font-black uppercase text-brand-dark tracking-wider">Performance</span>
                </div>

                {/* Audit points */}
                <div className="flex flex-col gap-3 font-sans text-xs">
                    <div className="flex items-center gap-2 text-brand-dark/80">
                        <CheckCircle size={14} className="text-brand-accent shrink-0" />
                        <span>Rendimiento y estructura técnica optimizados</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-dark/80">
                        <CheckCircle size={14} className="text-brand-accent shrink-0" />
                        <span>Estructuración Semántica SEO Completa</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-dark/80">
                        <CheckCircle size={14} className="text-brand-accent shrink-0" />
                        <span>Código Estático Optimizado para Móviles</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ==========================================
// 4. INVITACIONES SAAS INTERACTIVE WIDGET
// ==========================================

const InvitacionesSaasSim: React.FC = () => {
    const invited = 120;
    const [confirmed, setConfirmed] = useState(84);
    const [savings, setSavings] = useState(360);

    const handleConfirm = () => {
        if (confirmed < invited) {
            setConfirmed(prev => prev + 1);
            setSavings(prev => prev + 15); // $15 per plate saved typical B2B estimation
        }
    };

    return (
        <div className="w-full flex flex-col p-6 bg-brand-dark text-brand-cream rounded-3xl gap-6 shadow-xl border border-brand-accent/20 text-left min-h-[300px] justify-between relative">
            <div className="absolute top-4 left-4 font-sans text-[8px] uppercase tracking-widest font-black text-brand-accent">
                Logística Móvil SaaS / Dashboard
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col text-center">
                    <span className="font-sans text-xl font-bold text-brand-cream">{invited}</span>
                    <span className="font-sans text-[8px] uppercase tracking-widest font-black text-white/50 mt-1">Invitados</span>
                </div>
                <div className="bg-brand-accent/10 p-3 rounded-xl border border-brand-accent/20 flex flex-col text-center">
                    <span className="font-sans text-xl font-bold text-brand-accent">{confirmed}</span>
                    <span className="font-sans text-[8px] uppercase tracking-widest font-black text-brand-accent mt-1">RSVP Sí</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col text-center">
                    <span className="font-sans text-xl font-bold text-brand-cream">${savings}</span>
                    <span className="font-sans text-[8px] uppercase tracking-widest font-black text-white/50 mt-1">Ahorrado</span>
                </div>
            </div>

            {/* QR validation mockup */}
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] font-black uppercase text-brand-accent">Escanear Invitación QR</span>
                    <button
                        onClick={handleConfirm}
                        className="px-3 py-1 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark rounded-full font-sans text-[9px] uppercase tracking-wider font-black"
                    >
                        Confirmar Entrada
                    </button>
                </div>
                <div className="w-full bg-brand-dark border border-white/10 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="font-sans text-[10px] font-bold text-brand-cream">Familia Pérez G.</span>
                        <span className="font-sans text-[8px] text-white/50 mt-0.5">Pases Autorizados: 4</span>
                    </div>
                    <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                        <div className="w-5 h-5 bg-brand-dark" style={{ backgroundImage: 'radial-gradient(black 3px, transparent 3px)', backgroundSize: '6px 6px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// ==========================================
// PROJECT DATA DEFINITION
// ==========================================

interface ProjectData {
    title: string;
    subtitle: string;
    heroImage: string;
    overview: string;
    problem: string;
    metadata: Record<string, string>;
    personas: {
        name: string;
        role: string;
        goals: string;
        frustrations: string;
        phrase?: string;
    }[];
    process: {
        icon: React.ReactNode;
        title: string;
        desc: string;
        image?: string;
        visual?: React.ReactNode;
    }[];
    outcomes: {
        text: string;
        icon: React.ReactNode;
        visualWidget?: React.ReactNode;
    }[];
    testimonial: {
        title: string;
        text: string;
        author: string;
        authorInitials: string;
        company: string;
    };
    liveUrl?: string;
    pivot?: {
        hypothesis: string;
        insight: string;
        solution: string;
    };
    gallery?: {
        image: string;
        title: string;
        category: string;
        aspectRatio?: 'video' | 'portrait' | 'square';
    }[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const PROJECTS_DATA: Record<string, ProjectData> = {
    "ecovis": {
        title: "Ecovis México: Optimizando la Conversión B2B",
        subtitle: "Sector Industrial",
        heroImage: "/projects/ecovis/b2b-leads.png",
        overview: "Ecovis México, empresa especializada en el diseño y manufactura de soluciones energéticas industriales, me contactó inicialmente para una mejora táctica en su blog. Tras realizar una Auditoría UX profunda, identifiqué que el sitio enfrentaba un reto mayor:",
        problem: "un lenguaje excesivamente técnico y una navegación inconsistente que generaban fricción y no lograban convertir el tráfico B2B en prospectos reales.",
        metadata: {
            Industry: "Industrial / Energía",
            "My Role": "Lead Product Designer",
            Deliverables: "UX Audit, Arquitectura de Información, UI/UX, CRO (Optimización de Tasa de Conversión), SEO Técnico",
            Timeline: "Sprint Ágil"
        },
        pivot: {
            hypothesis: "El cliente corporativo busca catálogos técnicos masivos y especificaciones duras en formato PDF.",
            insight: "Los directores de compras B2B buscan validar la viabilidad energética de forma extremadamente rápida, sin fricciones en los primeros 10 segundos.",
            solution: "Simplificar la propuesta de valor hacia el ahorro de costos y eficiencia, implementando flujos de contacto optimizados (CRO) y SEO semántico."
        },
        personas: [
            {
                name: "Comprador Industrial",
                role: "Director de Operaciones / Compras B2B",
                phrase: "Necesito validar la viabilidad técnica y cotizar rápidamente sin perder tiempo en sitemaps obsoletos.",
                goals: "Encontrar soluciones de eficiencia energética y seguridad rápidamente. Evaluar viabilidad técnica sin fricciones.",
                frustrations: "Sitios web que parecen catálogos estáticos. Fricción excesiva para contactar a ventas o solicitar cotizaciones."
            }
        ],
        process: [
            {
                icon: <Search size={20} />,
                title: "01 Definición del User Persona",
                desc: "Trabajamos en definir al cliente ideal industrial para alinear el lenguaje y diseño, comunicando valor (eficiencia energética, seguridad) en los primeros segundos.",
                image: "/projects/ecovis/ecovis-hero.png"
            },
            {
                icon: <Layout size={20} />,
                title: "02 Arquitectura de Información y Navegación",
                desc: "Diseñé un flujo global intuitivo que guía al usuario corporativo sin confusiones hacia la toma de contacto.",
                visual: <EcovisIaTree />
            },
            {
                icon: <Zap size={20} />,
                title: "03 Optimización de CTAs y Conversión",
                desc: "Reemplazamos botones genéricos por micro-copy persuasivo diseñado para capturar la intención de compra del sector B2B.",
                visual: <EcovisCroToggle />
            },
            {
                icon: <BarChart size={20} />,
                title: "04 SEO y Rendimiento",
                desc: "Estructuración técnica para asegurar el posicionamiento orgánico en un nicho altamente competitivo.",
                visual: <EcovisSeoMetrics />
            }
        ],
        outcomes: [
            { text: "Aumento tangible en la captación de leads cualificados.", icon: <TrendingUp size={24} /> },
            { text: "Transformación de catálogo a herramienta de generación de leads.", icon: <Zap size={24} /> },
            { text: "Mejora en el posicionamiento orgánico (SEO) y de la marca corporativa.", icon: <CheckCircle size={24} /> }
        ],
        testimonial: {
            title: "Validación del Negocio",
            text: "\"Guillermo nos apoyó con el rediseño con un enfoque estratégico y muy profesional. Su visión nos permitió transformar la plataforma en un sitio funcional con mejor experiencia de usuario y optimizar el SEO. Lo más importante: hemos notado un aumento real en la llegada de prospectos cualificados. Su capacidad para entender necesidades, proponer soluciones y ejecutar con eficiencia hizo el proceso muy fluido.\"",
            author: "Estefanía",
            authorInitials: "E",
            company: "Ecovis México"
        },
        liveUrl: "https://ecovismexico.com",
        gallery: [
            { image: "/projects/ecovis/ecovis-hero.png", title: "Propuesta de Valor Principal B2B", category: "UI Landing" },
            { image: "/projects/ecovis/navbar.png", title: "Sitemap y Flujo de Máquinas", category: "Arquitectura" },
            { image: "/projects/ecovis/contact-footer.png", title: "Formulario de Registro Optimizado", category: "Conversión (CRO)" }
        ]
    },
    "maternar": {
        title: "Maternar: Diseñando una Red de Apoyo para Madres",
        subtitle: "De app de donaciones a ecosistema de apoyo para la soledad materna.",
        heroImage: "/projects/maternar/Home - Dark theme.png",
        overview: "La oportunidad inicial parecía material: madres con artículos de bebé en buen estado y otras madres sin canales seguros para recibirlos.",
        problem: "La investigación mostró algo más profundo: las redes existentes resolvían objetos, pero no dignidad, seguridad ni pertenencia.",
        metadata: {
            Industry: "Social / HealthTech",
            "My Role": "Product Designer & Líder de Proyecto",
            Deliverables: "UX Strategy, User Research, Prototyping",
            Timeline: "3 Meses"
        },
        pivot: {
            hypothesis: "Una plataforma centralizada de donaciones seguras podía mejorar el bienestar material de la comunidad.",
            insight: "El problema real no era material, sino emocional y social: soledad, vulnerabilidad y pérdida de identidad tras la maternidad.",
            solution: "Redefinir Maternar como ecosistema de apoyo: material, emocional y profesional."
        },
        personas: [
            {
                name: "Ana (Receptora)",
                role: "Estado mental: Necesidad de seguridad y dignidad.",
                phrase: "Quiero darle lo mejor a mi bebé, pero mi presupuesto es muy ajustado ahora. Busco una mano amiga sin sentirme juzgada.",
                goals: "Encontrar artículos específicos de forma gratuita y en buen estado. Sentirse segura y respetada. Conectar de manera digna. Coordinar la entrega de forma privada.",
                frustrations: "La Vergüenza y el Estigma (miedo a ser juzgada). La Seguridad Personal (temor a lugares desconocidos). El Rechazo y la Desilusión."
            },
            {
                name: "Gabriela (Donadora)",
                role: "Estado mental: Deseo de impacto real y eficiencia.",
                phrase: "Tengo ropa, cuna y juguetes que mi hijo ya no usa. Quiero que de verdad le sirvan a alguien que los necesite.",
                goals: "Publicar artículos de forma rápida y sencilla. Sentir que su donación tiene un impacto real. Asegurarse de que los objetos van a manos correctas.",
                frustrations: "Pérdida de Tiempo (gente que no se presenta). Desconfianza y Seguridad. Abuso del Sistema (posible reventa)."
            }
        ],
        process: [
            {
                icon: <Search size={20} />,
                title: "01 Investigación cualitativa",
                desc: "Las entrevistas validaron el valor emocional de donar, pero revelaron una urgencia mayor: muchas madres necesitaban sentirse acompañadas y comprendidas.",
                image: "/projects/maternar/Home - Dark theme.png"
            },
            {
                icon: <Target size={20} />,
                title: "02 Pivote estratégico",
                desc: "La visión cambió de intercambio de artículos a una red donde pedir, donar, conectar y ofrecer servicios pudiera suceder sin estigma.",
                image: "/projects/maternar/Onboarding - Step 1.png"
            },
            {
                icon: <Zap size={20} />,
                title: "03 Prototipo en Figma",
                desc: "El prototipo permitió probar una solución multifacética: apoyo material, comunidad emocional y espacios para independencia profesional.",
                image: "/projects/maternar/Home.png"
            }
        ],
        outcomes: [
            { text: "El caso dejó de centrarse en objetos y pasó a resolver pertenencia, seguridad y apoyo.", icon: <TrendingUp size={24} /> },
            { text: "El prototipo validó perfiles flexibles: donar, recibir, conectar y ofrecer servicios.", icon: <Layout size={24} /> },
            { text: "La propuesta redujo el estigma al convertir la ayuda en participación activa dentro de una comunidad.", icon: <Users size={24} /> }
        ],
        testimonial: {
            title: "Impacto Social",
            text: "\"La maternidad no se diseñó para vivirse en aislamiento. Maternar evolucionó para ser el ecosistema donde el apoyo material y la contención emocional por fin se encuentran.\"",
            author: "Comunidad Maternar",
            authorInitials: "M",
            company: "Fundación Maternar"
        },
        liveUrl: "https://www.figma.com/design/GhQLTFzQK0UhUEKPfbTqH6/Maternar?node-id=75-1673&t=XbszKEceXJpW8dre-1",
        gallery: [
            { image: "/projects/maternar/Home - Dark theme.png", title: "Pantalla de Inicio (Dark)", category: "UI Principal", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Home.png", title: "Pantalla de Inicio (Light)", category: "UI Principal", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Articulos.png", title: "Listado de Artículos", category: "UI Listado", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Detalle del Artículo.png", title: "Detalle del Artículo", category: "UI Detalle", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Detalle del Artículo - Dark theme.png", title: "Detalle del Artículo (Dark)", category: "UI Detalle", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Onboarding - Step 1.png", title: "Onboarding - Paso 1", category: "UI Onboarding", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Onboarding - Step 2.png", title: "Onboarding - Paso 2", category: "UI Onboarding", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Onboarding - Step 3.png", title: "Onboarding - Paso 3", category: "UI Onboarding", aspectRatio: 'portrait' }
        ]
    },
    "invitaciones-digitales": {
        title: "Invitaciones Digitales: Gestión Estratégica de Eventos",
        subtitle: "SaaS DFY y Mobile-First enfocado en optimizar el RSVP y erradicar el caos de la logística y los invitados sorpresa.",
        heroImage: "/projects/events-saas.png",
        overview: "El proyecto nació de una necesidad personal al organizar el cumpleaños de mi hija. Al investigar el mercado, descubrí una industria arcaica y llena de fricción: procesos manuales, pagos lentos y confirmaciones desorganizadas.",
        problem: "Las soluciones existentes competían solo por estética, pero fallaban catastróficamente en la Experiencia de Usuario (UX) y la logística real, lo que inspiró un modelo de negocio asíncrono y escalable.",
        metadata: {
            Industry: "SaaS / EventTech",
            "My Role": "Lead Product Designer & Founder",
            Deliverables: "Product Strategy, Análisis Competitivo, Flujos de Usuario, UI Mobile-First, E-commerce Integration",
            Timeline: "Founder Vision"
        },
        pivot: {
            hypothesis: "Competir en el mercado a base de plantillas de diseño visual e invitaciones estáticas.",
            insight: "El dolor real de los anfitriones de eventos radica en la ineficiencia logística: WhatsApps de ida y vuelta para RSVP, invitados extra no planificados y desperdicio financiero de platillos.",
            solution: "Un ecosistema de gestión asíncrona que automatiza la base de datos de RSVP, control de platillos e introduce validación por código QR."
        },
        personas: [
            {
                name: "Anfitrión del Evento",
                role: "Organizador / Padre de familia",
                phrase: "El verdadero dolor no es el diseño estético de la invitación, es la pesadilla logística que viene después.",
                goals: "Evitar pagar platillos de invitados que no asisten (ahorro real). Tener un control absoluto de quién entra al evento. Eliminar el ida y vuelta de cotizaciones.",
                frustrations: "Perseguir confirmaciones por WhatsApp de forma manual. Estrés por invitados \"colados\". Falta de transparencia en precios de proveedores."
            }
        ],
        process: [
            {
                icon: <Target size={20} />,
                title: "01 Análisis e Insight de Negocio",
                desc: "Realicé un análisis profundo asistido por IA, descubriendo que el producto debía evolucionar de un 'gasto estético' a una 'inversión de ahorro' logística.",
                visual: <InvitacionesSaasSim />
            },
            {
                icon: <CheckCircle size={20} />,
                title: "02 Solución UX: Flujo \"Done-For-You\"",
                desc: "Diseñé un sistema sin fricción con Checkout transparente y 3 Tiers de precios validados, eliminando por completo la necesidad de reuniones innecesarias.",
                image: "/projects/events-saas.png"
            },
            {
                icon: <Zap size={20} />,
                title: "03 Onboarding Automatizado",
                desc: "Tras el pago, implementé un formulario optimizado que recolecta datos del evento en minutos, permitiendo entregas estandarizadas en menos de 48 horas.",
                image: "/projects/ecovis/contact-footer.png"
            },
            {
                icon: <Layout size={20} />,
                title: "04 Logística Mobile-First y QR",
                desc: "Implementé una lógica estricta de base de datos para RSVP y validación por QR en puerta, resolviendo el problema #1 de los eventos sociales.",
                image: "/projects/ecovis/navbar.png"
            }
        ],
        outcomes: [
            { text: "Flujo DFY 100% asíncrono, escalable y sin reuniones.", icon: <Zap size={24} /> },
            { text: "Control exacto de pases y validación QR en puerta del salón.", icon: <Target size={24} /> },
            { text: "Transformación de gasto puramente estético a inversión financiera de ahorro real.", icon: <TrendingUp size={24} /> }
        ],
        testimonial: {
            title: "Visión de Producto",
            text: "\"Al asumir el rol de Founder y Product Designer, aprendí que la estética atrae, pero la eliminación de la fricción logística es lo que verdaderamente retiene y convierte. El éxito no fue el diseño de la invitación, sino convertirla en una herramienta de gestión estratégica.\"",
            author: "Guillermo Moreno",
            authorInitials: "GM",
            company: "Founder & Lead Designer"
        },
        liveUrl: "https://events-saas-demo.com",
        gallery: [
            { image: "/projects/events-saas.png", title: "Vista Móvil de la Invitación Logística", category: "Diseño Mobile" },
            { image: "/projects/ecovis/contact-footer.png", title: "Formulario Automatizado de Reserva", category: "UI Flow" }
        ]
    },
    "trustlens": {
        title: "TrustLens: De \"punto ciego\" legal a escudo financiero con IA",
        subtitle: "Extensión de Chrome impulsada por IA que traduce términos de servicio complejos en alertas de IP y suscripciones abusivas.",
        heroImage: "/projects/trustlens/hero.png",
        overview: "Millones de usuarios aceptan Términos de Servicio (ToS) de 50 páginas sin leerlos. A los usuarios no les asusta el uso de datos en apps famosas, les aterra el \"Salvaje Oeste\" del internet (nuevas apps de IA, SaaS independientes)",
        problem: "donde exponen su dinero (renovaciones automáticas ocultas) y su propiedad intelectual (derechos sobre su trabajo) sin saberlo.",
        metadata: {
            Industry: "LegalTech / AI SaaS",
            "My Role": "Product Designer & Builder",
            Deliverables: "AI Engineering, Chrome Extension",
            Timeline: "MVP (Build in Public)"
        },
        pivot: {
            hypothesis: "Desarrollar una extensión para proteger la privacidad general de datos contra gigantes como Google y Facebook.",
            insight: "Los usuarios creativos y early adopters están dispuestos a compartir datos con marcas conocidas, pero temen perder propiedad intelectual (IP) o ser estafados por micro-cobros en nuevas herramientas independientes.",
            solution: "Crear un detector ágil de micro-cláusulas enfocado en cláusulas de IP, políticas de reembolso secreto y suscripciones ocultas, con alertas visuales rápidas y un Trust Score."
        },
        personas: [
            {
                name: "Usuario de SaaS / Creador Digital",
                role: "Early Adopter / Trabajador Digital",
                phrase: "Pruebo nuevas herramientas de IA y SaaS constantemente, pero nunca leo los ToS. Temo perder mi dinero por suscripciones trampa o que la plataforma se adueñue de mis diseños.",
                goals: "Proteger el capital contra suscripciones abusivas u ocultas. Asegurar la propiedad intelectual y el copyright del trabajo que sube a herramientas de terceros.",
                frustrations: "Términos y condiciones incomprensibles de 50 páginas. Falta de tiempo. Miedo a perder derechos intelectuales por un engaño escondido en la jerga."
            }
        ],
        process: [
            {
                icon: <Search size={20} />,
                title: "01 Pivot: De Privacidad a Activos",
                desc: "Originalmente enfocado en la privacidad contra las Big Tech, descubrí que el dolor real radica en las 'Trampas Financieras' y el 'Robo de IP' al probar nuevas apps.",
                visual: <TrustLensExtensionSim />
            },
            {
                icon: <Layout size={20} />,
                title: "02 Escudo Digital ante la Letra Chiquita",
                desc: "Diseñando la extensión de Chrome bajo la restricción técnica de 400x600px; transformando cláusulas abusivas y riesgos de IP en alertas críticas, un Trust Score y un Dashboard de Ahorro.",
                image: "/projects/trustlens/TrustLens - v1.0.png"
            },
            {
                icon: <Zap size={20} />,
                title: "03 El Motor Detrás de la Magia",
                desc: "Para lograr procesar miles de palabras sin congelar la futura extensión, estoy implementando una arquitectura por fragmentos con resultados almacenados en Supabase. Esto evitará llamadas innecesarias a la IA, asegurando que el usuario reciba su Trust Score al instante y sin tiempos de carga frustrantes.",
                visual: <TrustLensFlowchart />
            },
            {
                icon: <Users size={20} />,
                title: "04 Validación #BuildInPublic",
                desc: "Lanzamiento y validación temprana en comunidades tech. Creación de landing page con Next.js + Tailwind enfocada en captar leads y recolectar feedback de early adopters.",
                visual: <TrustLensLandingSim />
            }
        ],
        outcomes: [
            { text: "Lanzamiento y validación del MVP funcional con la comunidad indie.", icon: <CheckCircle size={24} /> },
            { text: "Arquitectura híbrida escalable con Supabase y de salida determinista.", icon: <Zap size={24} /> },
            { text: "Reducción radical de la fricción cognitiva al probar nuevos SaaS.", icon: <TrendingUp size={24} /> }
        ],
        testimonial: {
            title: "Visión del Founder",
            text: "\"TrustLens demuestra cómo la IA puede devolverle el poder al usuario. Mi objetivo fue transformar documentos diseñados para confundir en herramientas de protección financiera y creativa, probando que viabilidad técnica y ética van de la mano.\"",
            author: "Guillermo Moreno",
            authorInitials: "GM",
            company: "Product Builder"
        },
        liveUrl: "https://www.gettrustlens.com/",
        gallery: [
            { image: "/projects/trustlens/TrustLens - v1.0.png", title: "Dashboard - Estado Principal", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Skeleton.png", title: "Carga - Animación de Skeleton", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Empty state.png", title: "Búsqueda - Estado Vacío", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Low risk.png", title: "Análisis - Riesgo Bajo", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Low risk - Opened.png", title: "Detalle - Riesgo Bajo Abierto", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Medium risk.png", title: "Análisis - Riesgo Medio", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Medium risk - Opened.png", title: "Detalle - Riesgo Medio Abierto", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - High risk.png", title: "Análisis - Riesgo Alto", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - High risk - Opened.png", title: "Detalle - Riesgo Alto Abierto", category: "Chrome UI", aspectRatio: 'portrait' }
        ]
    }
};

const cleanStepTitle = (title: string) => title.replace(/^\d+\s*/, '').trim();

const ProcessBoard: React.FC<{
    process: ProjectData['process'];
}> = ({ process }) => {
    return (
        <div className="border-y border-brand-cream/10">
            {process.map((step, idx) => (
                <div
                    key={step.title}
                    className="grid gap-4 border-b border-brand-cream/10 py-5 last:border-b-0 md:grid-cols-[56px_1fr]"
                >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-cream/7 text-brand-accent">
                        {React.isValidElement(step.icon) ? React.cloneElement(step.icon as React.ReactElement<{ size?: number, strokeWidth?: number }>, { size: 16, strokeWidth: 1.9 }) : step.icon}
                    </span>
                    <div>
                        <p className="text-sm font-semibold text-brand-accent">{String(idx + 1).padStart(2, '0')}</p>
                        <h3 className="mt-1 text-2xl font-semibold leading-tight tracking-[-0.03em] text-brand-cream">
                            {cleanStepTitle(step.title)}
                        </h3>
                        <p className="mt-3 max-w-3xl text-base leading-7 text-brand-cream-dark">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const CaseStudy: React.FC<{
    id: string;
    onImageClick: (image: { src: string; title: string }) => void;
}> = ({ id, onImageClick }) => {
    const project = PROJECTS_DATA[id] || PROJECTS_DATA.ecovis;
    const keyGallery = project.gallery?.slice(0, 3) || [];

    return (
        <div className="w-full bg-brand-dark">
            <article className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 pb-20 sm:px-6 md:px-10 lg:px-12">
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-80px' }}
                    className="max-w-4xl"
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                            El reto real detrás de la pantalla.
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-cream-dark">
                            {project.overview} <strong className="font-semibold text-brand-cream">{project.problem}</strong>
                        </p>
                    </motion.div>
                </motion.section>

                {project.pivot && (
                    <motion.section
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid gap-6"
                    >
                        <div className="max-w-3xl">
                            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                                La decisión que cambió el enfoque.
                            </h2>
                        </div>

                        <div className="grid gap-0 border-y border-brand-cream/10">
                            {[
                                ['Hipótesis', project.pivot.hypothesis],
                                ['Insight', project.pivot.insight],
                                ['Solución', project.pivot.solution]
                            ].map(([label, text]) => (
                                <motion.div
                                    key={label}
                                    variants={fadeInUp}
                                    className="grid gap-3 border-b border-brand-cream/10 py-5 last:border-b-0 md:grid-cols-[160px_1fr]"
                                >
                                    <p className="text-sm font-semibold text-brand-accent">{label}</p>
                                    <p className="text-base leading-7 text-brand-cream-dark">{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="grid gap-8"
                >
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                            Cómo se tomó forma.
                        </h2>
                    </div>
                    <ProcessBoard process={project.process} />
                </motion.section>

                {keyGallery.length > 0 && (
                    <motion.section
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid gap-8"
                    >
                        <div className="grid gap-5 lg:grid-cols-[0.7fr_1fr] lg:items-end">
                            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                                Evidencia visual.
                            </h2>
                            <p className="max-w-2xl text-base leading-7 text-brand-cream-dark lg:justify-self-end">
                                Las pantallas necesarias para entender la solución. Se pueden abrir para inspeccionar detalle.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {keyGallery.map((item, idx) => (
                                <motion.button
                                    key={`${item.image}-${idx}`}
                                    variants={fadeInUp}
                                    type="button"
                                    onClick={() => onImageClick({ src: item.image, title: item.title })}
                                    className="group relative aspect-[4/5] min-h-[320px] overflow-hidden rounded-2xl border border-brand-cream/10 bg-brand-panel text-left transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/35 sm:min-h-0"
                                    aria-label={`Ampliar pantalla: ${item.title}`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.035]"
                                        loading="lazy"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://placehold.co/900x700/07100c/e8efe7?text=${encodeURIComponent(item.title)}`;
                                        }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-dark via-brand-dark/78 to-transparent p-4 pt-16">
                                        <p className="text-xs font-semibold text-brand-accent">{item.category}</p>
                                        <h3 className="mt-1 overflow-hidden text-base font-semibold leading-tight tracking-[-0.02em] text-brand-cream [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.section>
                )}

                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid gap-8"
                >
                    <div className="grid gap-0 border-y border-brand-cream/10">
                        {project.outcomes.map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="grid gap-4 border-b border-brand-cream/10 py-5 last:border-b-0 md:grid-cols-[140px_1fr]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent text-brand-dark">
                                    {React.isValidElement(outcome.icon) ? React.cloneElement(outcome.icon as React.ReactElement<{ size?: number, strokeWidth?: number }>, { size: 22, strokeWidth: 2 }) : outcome.icon}
                                </div>
                                <p className="text-base font-semibold leading-7 text-brand-cream">{outcome.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-80px' }}
                    className="border-t border-brand-accent/30 pt-8"
                >
                    <p className="max-w-5xl text-2xl font-semibold leading-[1.18] tracking-[-0.03em] text-brand-cream md:text-3xl">
                        “{project.testimonial.text.replace(/"/g, '')}”
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-sm font-semibold text-brand-dark">
                            {project.testimonial.authorInitials}
                        </div>
                        <div>
                            <p className="font-semibold text-brand-cream">{project.testimonial.author}</p>
                            <p className="text-sm text-brand-cream-dark">{project.testimonial.company}</p>
                        </div>
                    </div>
                </motion.section>
            </article>
        </div>
    );
};
