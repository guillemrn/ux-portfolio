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
    Sparkles,
    Plus,
    Heart
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
                        <span className="absolute font-serif text-lg font-black text-brand-cream">{score}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sans text-[10px] font-black uppercase text-brand-accent tracking-wider">Puntuación</span>
                        <span className="font-serif text-sm text-brand-cream font-medium">Riesgo Moderado</span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 bg-white/5 rounded-xl p-1 border border-white/5">
                    {(['alerts', 'rights', 'savings'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-1.5 text-center rounded-lg font-sans text-[9px] uppercase tracking-wider font-black transition-all cursor-none ${activeTab === tab ? 'bg-brand-accent text-brand-dark' : 'text-brand-cream/60 hover:text-brand-cream'}`}
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
                                        className="w-full px-4 py-3 flex items-center justify-between font-sans text-[10px] text-brand-cream font-bold cursor-none"
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
                            <span className="font-serif text-3xl font-black text-brand-accent tracking-tighter">$350 USD</span>
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

// ==========================================
// 2. MATERNAR INTERACTIVE WIDGETS
// ==========================================

// Maternar Interactive Support Triangle
const MaternarTriangle: React.FC = () => {
    const [selectedPillar, setSelectedPillar] = useState<'material' | 'emotional' | 'professional'>('material');

    const pillars = {
        material: {
            title: 'Apoyo Material',
            subtitle: 'Donaciones con Dignidad',
            desc: 'Intercambio seguro de ropa, cunas y juguetes en perfecto estado. Un diseño que elimina el estigma y la vergüenza, transformando el acto de donación en una conexión de respeto mutuo.'
        },
        emotional: {
            title: 'Apoyo Emocional',
            subtitle: 'Red contra el Aislamiento',
            desc: 'Círculos comunitarios locales guiados y apoyo entre madres. Rompe la soledad del primer año, ofreciendo un refugio seguro para compartir experiencias reales sin ser juzgadas.'
        },
        professional: {
            title: 'Apoyo Profesional',
            subtitle: 'Independencia Financiera',
            desc: 'Espacio para que las madres ofrezcan servicios profesionales y de autoempleo de manera asíncrona, promoviendo su desarrollo profesional compatible con la crianza.'
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-6 bg-brand-cream border border-brand-cream-dark/20 rounded-3xl gap-8 shadow-md relative text-left">
            <div className="absolute top-4 left-4 font-sans text-[8px] uppercase tracking-widest font-black text-brand-dark/50">
                Ecosistema de Apoyo Maternar / Pilares
            </div>

            {/* Interactive Triangle Graphic */}
            <div className="relative w-48 h-48 flex items-center justify-center mt-4">
                <svg className="absolute w-full h-full text-brand-dark/10" viewBox="0 0 100 100">
                    <polygon points="50,15 15,75 85,75" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                </svg>

                {/* Material Pillar Node */}
                <button
                    onClick={() => setSelectedPillar('material')}
                    className={`absolute top-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 cursor-none ${selectedPillar === 'material' ? 'bg-brand-dark border-brand-accent text-brand-accent scale-110 shadow-lg' : 'bg-white border-brand-dark/10 text-brand-dark hover:border-brand-dark/30'}`}
                    style={{ transform: 'translateY(-20%)' }}
                    aria-label="Pillar material"
                >
                    <Plus size={16} />
                </button>

                {/* Emotional Pillar Node */}
                <button
                    onClick={() => setSelectedPillar('emotional')}
                    className={`absolute bottom-0 left-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 cursor-none ${selectedPillar === 'emotional' ? 'bg-brand-dark border-brand-accent text-brand-accent scale-110 shadow-lg' : 'bg-white border-brand-dark/10 text-brand-dark hover:border-brand-dark/30'}`}
                    style={{ transform: 'translate(-20%, 20%)' }}
                    aria-label="Pillar emotional"
                >
                    <Heart size={16} />
                </button>

                {/* Professional Pillar Node */}
                <button
                    onClick={() => setSelectedPillar('professional')}
                    className={`absolute bottom-0 right-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 cursor-none ${selectedPillar === 'professional' ? 'bg-brand-dark border-brand-accent text-brand-accent scale-110 shadow-lg' : 'bg-white border-brand-dark/10 text-brand-dark hover:border-brand-dark/30'}`}
                    style={{ transform: 'translate(20%, 20%)' }}
                    aria-label="Pillar professional"
                >
                    <Users size={16} />
                </button>

                <div className="font-serif text-sm font-black text-brand-dark select-none text-center">
                    MATERNAR
                </div>
            </div>

            {/* Selected Pillar Card */}
            <div className="w-full bg-white p-6 rounded-2xl border border-brand-cream-dark/20 flex flex-col gap-2 min-h-[140px]">
                <span className="font-sans text-[9px] uppercase tracking-widest font-black text-brand-accent">{pillars[selectedPillar].subtitle}</span>
                <h4 className="font-serif text-xl font-bold text-brand-dark">{pillars[selectedPillar].title}</h4>
                <p className="font-sans text-sm text-brand-dark/70 leading-relaxed mt-2">
                    {pillars[selectedPillar].desc}
                </p>
            </div>
        </div>
    );
};

// Maternar Flow Simulator
const MaternarFlows: React.FC = () => {
    const [role, setRole] = useState<'donadora' | 'receptora'>('donadora');

    const steps = role === 'donadora' ? [
        { label: 'Publicación Ágil', detail: 'Sube foto y estado del artículo en menos de 1 minuto.' },
        { label: 'Filtro Empático', detail: 'Acepta solicitudes basadas en la cercanía y conexión de empatía.' },
        { label: 'Entrega Segura', detail: 'Coordinación en un Punto de Encuentro Seguro verificado.' }
    ] : [
        { label: 'Búsqueda Digna', detail: 'Visualiza artículos sin listas cargadas de vergüenza.' },
        { label: 'Solicitud Confidencial', detail: 'Explica tu necesidad de forma privada al donante.' },
        { label: 'Protocolo de Seguridad', detail: 'Recibe tu artículo de manera respetuosa en puntos seguros.' }
    ];

    return (
        <div className="w-full flex flex-col p-6 bg-brand-dark text-brand-cream rounded-3xl gap-6 shadow-lg border border-brand-dark/20 text-left">
            <div className="flex items-center justify-between">
                <span className="font-sans text-[8px] uppercase tracking-widest font-black text-brand-accent">Empathetic Flow / Dos Canales</span>
                <div className="flex bg-white/5 p-1 rounded-full border border-white/5">
                    <button
                        onClick={() => setRole('donadora')}
                        className={`px-3 py-1 rounded-full font-sans text-[9px] uppercase tracking-wider font-black transition-all cursor-none ${role === 'donadora' ? 'bg-brand-accent text-brand-dark' : 'text-brand-cream/65'}`}
                    >
                        Donadora
                    </button>
                    <button
                        onClick={() => setRole('receptora')}
                        className={`px-3 py-1 rounded-full font-sans text-[9px] uppercase tracking-wider font-black transition-all cursor-none ${role === 'receptora' ? 'bg-brand-accent text-brand-dark' : 'text-brand-cream/65'}`}
                    >
                        Receptora
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent font-sans text-[10px] font-black shrink-0 mt-0.5">
                            {i + 1}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans text-xs font-black text-brand-cream uppercase tracking-wider">{step.label}</span>
                            <span className="font-sans text-xs text-white/70 leading-relaxed mt-1">{step.detail}</span>
                        </div>
                    </div>
                ))}
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
                    className={`px-4 py-1.5 rounded-full font-sans text-[9px] uppercase tracking-wider font-black transition-all cursor-none ${theme === 'before' ? 'bg-brand-dark text-white' : 'text-brand-dark/60'}`}
                >
                    Antes (Táctico)
                </button>
                <button
                    onClick={() => setTheme('after')}
                    className={`px-4 py-1.5 rounded-full font-sans text-[9px] uppercase tracking-wider font-black transition-all cursor-none ${theme === 'after' ? 'bg-brand-dark text-white' : 'text-brand-dark/60'}`}
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
                            Conversión B2B: 1.2% (Rebote Elevado)
                        </div>
                    </>
                ) : (
                    <>
                        <motion.button
                            onClick={handleClick}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-brand-dark hover:bg-brand-dark/95 border border-brand-accent/25 text-brand-accent rounded-full font-sans text-xs font-black uppercase tracking-widest cursor-none shadow-lg shadow-brand-accent/10 flex items-center gap-2 relative group overflow-hidden"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping absolute left-4" />
                            <span className="pl-4">Optimizar Eficiencia Energética Ahora</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <span className="font-sans text-[9px] text-brand-dark/50 -mt-2">Cotización Técnica Asíncrona sin Compromiso en 24 Horas</span>
                        <div className="flex items-center gap-1.5 text-brand-accent font-sans text-[10px] font-black uppercase tracking-wider mt-1">
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                            Conversión B2B: 4.8% (4x Multiplicado)
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
                                    <span className="font-serif text-lg font-black text-brand-dark">¡Solicitud Simulada!</span>
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
                <div className="flex flex-col gap-1.5 border-l-2 border-red-500/50 pl-4">
                    <span className="font-sans text-[9px] uppercase tracking-widest font-black text-red-500">Antigua Estructura (Catálogo Opaco)</span>
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
        const timer = setTimeout(() => setScore(99), 600);
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
                        <span className="absolute font-serif text-2xl font-black text-brand-cream">{score}</span>
                    </div>
                    <span className="font-sans text-[10px] font-black uppercase text-brand-dark tracking-wider">Performance</span>
                </div>

                {/* Audit points */}
                <div className="flex flex-col gap-3 font-sans text-xs">
                    <div className="flex items-center gap-2 text-brand-dark/80">
                        <CheckCircle size={14} className="text-brand-accent shrink-0" />
                        <span>Core Web Vitals Impecables (LCP &lt; 1.2s)</span>
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
                    <span className="font-serif text-xl font-bold text-brand-cream">{invited}</span>
                    <span className="font-sans text-[8px] uppercase tracking-widest font-black text-white/50 mt-1">Invitados</span>
                </div>
                <div className="bg-brand-accent/10 p-3 rounded-xl border border-brand-accent/20 flex flex-col text-center">
                    <span className="font-serif text-xl font-bold text-brand-accent">{confirmed}</span>
                    <span className="font-sans text-[8px] uppercase tracking-widest font-black text-brand-accent mt-1">RSVP Sí</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col text-center">
                    <span className="font-serif text-xl font-bold text-brand-cream">${savings}</span>
                    <span className="font-sans text-[8px] uppercase tracking-widest font-black text-white/50 mt-1">Ahorrado</span>
                </div>
            </div>

            {/* QR validation mockup */}
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] font-black uppercase text-brand-accent">Escanear Invitación QR</span>
                    <button
                        onClick={handleConfirm}
                        className="px-3 py-1 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark rounded-full font-sans text-[9px] uppercase tracking-wider font-black cursor-none"
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
        subtitle: "Rediseño estratégico enfocado en transformar un catálogo industrial en una herramienta de generación de leads y optimización SEO.",
        heroImage: "/projects/ecovis/b2b-leads.png",
        overview: "Ecovis México, empresa especializada en el diseño y manufactura de soluciones energéticas industriales, me contactó inicialmente para una mejora táctica en su blog. Tras realizar una Auditoría UX profunda, identifiqué que el sitio enfrentaba un reto mayor:",
        problem: "un lenguaje excesivamente técnico y una navegación inconsistente que generaban fricción y no lograban convertir el tráfico B2B en prospectos reales.",
        metadata: {
            Industry: "Industrial / Energía",
            "My Role": "Product Designer",
            Deliverables: "UX Audit, Arquitectura de Información, UI/UX, CRO, SEO Técnico",
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
                title: "01 User Persona Focalizada",
                desc: "Trabajamos en definir al cliente ideal industrial para alinear el lenguaje y diseño, comunicando valor (eficiencia energética, seguridad) en los primeros segundos.",
                visual: <EcovisCroToggle />
            },
            {
                icon: <Layout size={20} />,
                title: "02 Arquitectura de Información",
                desc: "Diseñé un flujo global intuitivo que guía al usuario corporativo sin confusiones hacia la toma de contacto, reduciendo pasos innecesarios.",
                visual: <EcovisIaTree />
            },
            {
                icon: <Zap size={20} />,
                title: "03 Optimización de CTAs y CRO",
                desc: "Reemplazamos botones genéricos por micro-copy persuasivo diseñado para capturar la intención de compra del sector B2B de forma asíncrona.",
                image: "/projects/ecovis/contact-footer.png"
            },
            {
                icon: <BarChart size={20} />,
                title: "04 SEO y Rendimiento Técnico",
                desc: "Estructuración técnica semántica para asegurar el posicionamiento orgánico en un nicho altamente competitivo y velocidad instantánea.",
                visual: <EcovisSeoMetrics />
            }
        ],
        outcomes: [
            { text: "Aumento tangible del 1.2% al 4.8% en la captación de leads cualificados.", icon: <TrendingUp size={24} /> },
            { text: "Transformación de catálogo pasivo a herramienta activa de generación de leads.", icon: <Zap size={24} /> },
            { text: "Mejora radical en el posicionamiento orgánico (SEO) y de la marca corporativa.", icon: <CheckCircle size={24} /> }
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
        subtitle: "Pivote estratégico de una app de donaciones transaccionales a un ecosistema de apoyo para resolver la soledad materna.",
        heroImage: "/projects/maternar/Home - Dark theme.png",
        overview: "Identifiqué una doble oportunidad en la experiencia de las madres primerizas: por un lado, la acumulación de artículos de bebé y, por otro, la falta de canales seguros y dignos para donarlos o recibirlos.",
        problem: "Mi hipótesis inicial era una plataforma transaccional de donaciones. Sin embargo, la investigación cualitativa reveló un problema de raíz mucho más profundo y urgente:",
        metadata: {
            Industry: "Social / HealthTech",
            "My Role": "Product Designer & Líder de Proyecto",
            Deliverables: "UX Strategy, User Research, Prototyping",
            Timeline: "3 Meses"
        },
        pivot: {
            hypothesis: "Desarrollar una aplicación puramente transaccional para donación ágil de artículos de bebé usados.",
            insight: "Las madres experimentan una abrumadora soledad y pérdida de identidad individual. Su mayor necesidad no es recibir objetos, sino la contención y el apoyo comunitario.",
            solution: "Crear un ecosistema con tres pilares entrelazados: apoyo material (donaciones), emocional (redes locales comunitarias) y profesional (independencia financiera)."
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
                title: "01 Investigación y Descubrimiento",
                desc: "Inicié una fase de investigación cualitativa con entrevistas a profundidad para entender las necesidades emocionales reales más allá de lo puramente material.",
                visual: <MaternarFlows />
            },
            {
                icon: <Target size={20} />,
                title: "02 Insight Clave y Redefinición",
                desc: "Descubrí que la mayor necesidad no era recibir artículos, sino pertenecer a una comunidad de apoyo que las entendiera y fortaleciera emocionalmente.",
                visual: <MaternarTriangle />
            },
            {
                icon: <Zap size={20} />,
                title: "03 Pivote: Ecosistema de Apoyo",
                desc: "La visión evolucionó a un ecosistema basado en tres pilares: apoyo material (donaciones), apoyo emocional (comunidad) y apoyo profesional (independencia financiera).",
                image: "/projects/maternar/Onboarding - Step 1.png"
            },
            {
                icon: <Layout size={20} />,
                title: "04 Diseño y Prototipado Figma",
                desc: "Diseñé dos perfiles flexibles permitiendo a cada madre donar, recibir, conectar y ofrecer servicios, eliminando estigmas y fomentando el empoderamiento.",
                image: "/projects/maternar/Home.png"
            }
        ],
        outcomes: [
            { text: "Validación de una solución empática para la soledad materna extrema.", icon: <TrendingUp size={24} /> },
            { text: "Diseño de perfiles flexibles y polifacéticos (Donadora/Receptora en una app).", icon: <Layout size={24} /> },
            { text: "Fomento del empoderamiento y rol activo en la comunidad social.", icon: <Users size={24} /> }
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
                desc: "Diseñando la extensión de Chrome bajo la restricción técnica de 400x600px; transformando cláusulas abusivas y riesgos de IP en alertas críticas (🚨/⚠️), un Trust Score y un Dashboard de Ahorro.",
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
                image: "/projects/trustlens/hero.png"
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

// ==========================================
// INTERACTIVE PROCESS BOARD COMPONENT
// ==========================================
const ProcessBoard: React.FC<{
    process: ProjectData['process'];
    onImageClick: (image: { src: string; title: string }) => void;
}> = ({ process, onImageClick }) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="w-full flex flex-col gap-12 my-12 relative z-20">
            {/* Header section */}
            <div className="flex flex-col gap-2 text-center items-center mb-6">
                <span className="font-sans text-brand-accent text-xs tracking-[0.25em] font-black uppercase">
                    03 / PROCESO DE DISEÑO TÉCNICO
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark tracking-tighter mt-2">
                    Ingeniería & Flujo del Producto<span className="text-brand-accent">.</span>
                </h2>
            </div>

            {/* Split Board layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[500px]">
                {/* Left side: Editorial Navigator Stepper */}
                <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
                    {process.map((step, idx) => {
                        const isActive = activeStep === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveStep(idx)}
                                className={`w-full text-left p-6 rounded-3xl border transition-all duration-500 cursor-none flex flex-col gap-2 relative overflow-hidden ${isActive ? 'bg-brand-cream border-brand-accent/40 shadow-[0_12px_32px_rgba(41,208,103,0.06)]' : 'bg-transparent border-transparent hover:bg-brand-cream/20 hover:border-brand-cream-dark/10'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border font-sans text-xs font-black transition-all duration-500 ${isActive ? 'bg-brand-dark border-brand-accent text-brand-accent' : 'bg-brand-cream-dark/20 border-brand-dark/5 text-brand-dark/60'}`}>
                                        {idx + 1}
                                    </div>
                                    <span className={`font-serif text-xl tracking-tight transition-all duration-300 ${isActive ? 'text-brand-dark font-black' : 'text-brand-dark/70 font-semibold'}`}>
                                        {step.title}
                                    </span>
                                </div>
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.p
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="font-sans text-brand-dark/80 text-sm leading-relaxed mt-2 pl-13 overflow-hidden"
                                        >
                                            {step.desc}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </button>
                        );
                    })}
                </div>

                {/* Right side: Active Visual Artifact Stage */}
                <div className="lg:col-span-7 bg-brand-cream/25 border border-brand-cream-dark/10 rounded-[2.5rem] p-6 md:p-8 flex items-center justify-center relative overflow-hidden min-h-[420px] shadow-sm">
                    {/* Subtle grid line backdrop */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-brand-dark) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, scale: 0.96, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -15 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full flex items-center justify-center"
                        >
                            {process[activeStep].visual ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    {process[activeStep].visual}
                                </div>
                            ) : process[activeStep].image ? (
                                <button
                                    className="relative block w-full aspect-video md:aspect-4/3 rounded-2xl overflow-hidden border border-brand-cream-dark/10 hover:border-brand-accent/40 shadow-lg hover:shadow-[0_20px_40px_rgba(41,208,103,0.06)] transition-all duration-500 cursor-none group outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                                    onClick={() => onImageClick({ src: process[activeStep].image as string, title: process[activeStep].title })}
                                    aria-label={`View larger image of ${process[activeStep].title}`}
                                >
                                    <img
                                        src={process[activeStep].image}
                                        alt={process[activeStep].title}
                                        className={`w-full h-full ${process[activeStep].image?.toLowerCase().includes('trustlens') || process[activeStep].image?.toLowerCase().includes('maternar') ? 'object-contain p-8 bg-brand-dark/95' : 'object-cover'} transition-transform duration-700 group-hover:scale-[1.03]`}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://placehold.co/1280x720/1a1a1b/e9e3d5?text=${encodeURIComponent('En construcción...')}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500" />
                                </button>
                            ) : (
                                <div className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-brand-dark/20">
                                    Visualización Técnica {activeStep + 1}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export const CaseStudy: React.FC<{
    id: string;
    onImageClick: (image: { src: string; title: string }) => void;
}> = ({ id, onImageClick }) => {
    const project = PROJECTS_DATA[id] || PROJECTS_DATA["ecovis"];
    const [activePersona, setActivePersona] = useState(0);

    // Dynamic drop cap parsing
    const firstLetter = project.overview.charAt(0);
    const restOfOverview = project.overview.slice(1);

    return (
        <div className="w-full bg-white select-none">
            <article className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-36 pb-40">

                {/* 1. The Context (Asymmetric Editorial Layout) */}
                <motion.section
                    data-theme="light"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="font-sans text-brand-accent text-xs tracking-[0.25em] font-black uppercase">
                                01 / EL CONTEXTO Y PROPÓSITO
                            </span>
                            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight tracking-tighter">
                                El Reto y la Situación<span className="text-brand-accent">.</span>
                            </h2>
                        </div>
                        
                        <div className="relative">
                            <p className="font-sans text-brand-dark/85 text-lg md:text-xl leading-relaxed">
                                <span className="float-left text-brand-dark font-serif text-6xl md:text-7xl lg:text-8xl font-black mr-4 leading-[0.8] mt-1 border-r border-brand-accent/20 pr-3 text-brand-dark">
                                    {firstLetter}
                                </span>
                                {restOfOverview} <span className="text-brand-dark font-black">{project.problem}</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Editorial Sidebar Quote Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-4 bg-brand-cream p-8 rounded-3xl border border-brand-cream-dark/15 flex flex-col gap-4 text-left relative overflow-hidden"
                    >
                        <div className="w-8 h-8 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-dark">
                            <Target size={14} />
                        </div>
                        <span className="font-sans text-[9px] uppercase tracking-widest font-black text-brand-dark/50">FOCO PRINCIPAL</span>
                        <h4 className="font-serif text-lg font-bold text-brand-dark">Estrategia de Solución</h4>
                        <p className="font-sans text-xs text-brand-dark/70 leading-relaxed">
                            Alinear la arquitectura de datos y la interfaz visual hacia el dolor real del usuario B2B o del consumidor creativo final.
                        </p>
                    </motion.div>
                </motion.section>

                {/* 2. The Strategic Pivot (High-Fidelity Storytelling Element) */}
                {project.pivot && (
                    <motion.section
                        data-theme="light"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="w-full flex flex-col gap-10 border-t border-b border-brand-dark/10 py-16"
                    >
                        <div className="flex flex-col gap-2 text-center items-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/15 border border-brand-accent/35 text-brand-dark font-sans font-black text-[9px] uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                                STRATEGIC DISCOVERY & PIVOT
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl text-brand-dark tracking-tighter mt-3">
                                Descubrimiento y Redefinición de Ruta
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6">
                            {/* Hypothesis */}
                            <div className="bg-brand-cream/30 p-8 rounded-3xl border border-brand-cream-dark/10 flex flex-col gap-3 relative">
                                <span className="font-sans text-[8px] uppercase tracking-[0.2em] font-black text-red-500 bg-red-500/10 px-3 py-1 rounded-full max-w-fit">Hipótesis Inicial</span>
                                <p className="font-sans text-sm text-brand-dark/75 leading-relaxed mt-2">
                                    "{project.pivot.hypothesis}"
                                </p>
                            </div>

                            {/* Research Insight */}
                            <div className="bg-brand-dark p-8 rounded-3xl border border-brand-accent/20 flex flex-col gap-3 relative shadow-lg">
                                <span className="font-sans text-[8px] uppercase tracking-[0.2em] font-black text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full max-w-fit">Insight de Investigación</span>
                                <p className="font-sans text-sm text-brand-cream/85 leading-relaxed mt-2 italic">
                                    "{project.pivot.insight}"
                                </p>
                            </div>

                            {/* Validated Solution */}
                            <div className="bg-brand-cream/30 p-8 rounded-3xl border border-brand-cream-dark/10 flex flex-col gap-3 relative">
                                <span className="font-sans text-[8px] uppercase tracking-[0.2em] font-black text-brand-dark bg-brand-dark/10 px-3 py-1 rounded-full max-w-fit">Solución Validada</span>
                                <p className="font-sans text-sm text-brand-dark/75 leading-relaxed mt-2">
                                    "{project.pivot.solution}"
                                </p>
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* 3. The User Persona (Interactive Empathy Section - Dark) */}
                <motion.section
                    data-theme="dark"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-screen relative left-1/2 ml-[-50vw] bg-brand-dark py-24 md:py-32 px-6"
                >
                    <div className="max-w-5xl mx-auto flex flex-col gap-16">
                        <div className="flex flex-col gap-4 text-center items-center">
                            <span className="font-sans text-brand-accent text-xs tracking-[0.25em] font-black uppercase">
                                02 / EMPATÍA DE USUARIO
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-cream tracking-tighter mt-2">
                                Entendiendo la Necesidad<span className="text-brand-accent">.</span>
                            </h2>
                        </div>

                        {/* Interactive Switcher for Personas if more than 1 */}
                        {project.personas.length > 1 && (
                            <div className="flex justify-center bg-white/5 p-1 rounded-full max-w-xs mx-auto border border-white/5">
                                {project.personas.map((persona, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActivePersona(idx)}
                                        className={`flex-1 py-2 text-center rounded-full font-sans text-[9px] uppercase tracking-wider font-black transition-all cursor-none ${activePersona === idx ? 'bg-brand-accent text-brand-dark' : 'text-brand-cream/60 hover:text-brand-cream'}`}
                                    >
                                        {persona.name.split(' ')[0]}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePersona}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white/5 rounded-[2.5rem] p-8 md:p-14 flex flex-col gap-10 border border-white/10 hover:border-brand-accent/20 transition-all duration-500 relative overflow-hidden"
                                >
                                    {/* Large background decorative quote mark */}
                                    <span className="absolute right-10 top-6 font-serif text-[10rem] text-brand-accent/5 font-black select-none pointer-events-none">
                                        “
                                    </span>

                                    <div className="flex flex-col gap-4">
                                        <h3 className="font-serif text-3xl md:text-4xl text-brand-cream leading-tight">
                                            {project.personas[activePersona].name}
                                        </h3>
                                        <p className="font-sans text-brand-accent text-xs uppercase tracking-widest font-black">
                                            {project.personas[activePersona].role}
                                        </p>
                                        {project.personas[activePersona].phrase && (
                                            <p className="font-serif text-xl md:text-2xl text-brand-cream/90 italic leading-relaxed max-w-3xl mt-4 border-l-2 border-brand-accent/50 pl-6">
                                                "{project.personas[activePersona].phrase}"
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-10 mt-4">
                                        <div className="flex flex-col gap-4">
                                            <span className="font-sans text-brand-cream/30 text-xs tracking-[0.2em] font-bold uppercase relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-brand-accent">
                                                Objetivos y Metas
                                            </span>
                                            <p className="font-sans text-brand-cream/80 text-sm md:text-base leading-relaxed">
                                                {project.personas[activePersona].goals}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <span className="font-sans text-brand-cream/30 text-xs tracking-[0.2em] font-bold uppercase relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-[#ff4d4d]">
                                                Frustraciones y Fricciones
                                            </span>
                                            <p className="font-sans text-brand-cream/80 text-sm md:text-base leading-relaxed">
                                                {project.personas[activePersona].frustrations}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.section>

                {/* 4. The Process (COMPLETELY REDESIGNED: Split Workspace Board) */}
                <motion.section
                    data-theme="light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative z-10"
                >
                    <ProcessBoard process={project.process} onImageClick={onImageClick} />
                </motion.section>

                {/* 4.5 UI Showcase Gallery (NEW SECTION) */}
                {project.gallery && project.gallery.length > 0 && (
                    <motion.section
                        data-theme="light"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="w-full flex flex-col gap-12 border-t border-brand-dark/10 pt-24"
                    >
                        <div className="flex flex-col gap-2 text-center items-center">
                            <span className="font-sans text-brand-accent text-xs tracking-[0.25em] font-black uppercase">
                                04 / GALERÍA DE ALTA FIDELIDAD
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark tracking-tighter mt-2">
                                UI & Detalles de Interfaz<span className="text-brand-accent">.</span>
                            </h2>
                            <p className="font-sans text-brand-dark/60 text-base max-w-lg mt-2 leading-relaxed text-center">
                                Explora las pantallas de producción, componentes e interacciones clave de este proyecto. Haz clic en las tarjetas para ampliar.
                            </p>
                        </div>

                        {/* Gallery Horizontal Slide Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
                            {project.gallery.map((item, idx) => (
                                <motion.button
                                    key={idx}
                                    variants={fadeInUp}
                                    onClick={() => onImageClick({ src: item.image, title: item.title })}
                                    className="flex flex-col text-left bg-brand-cream/15 rounded-[2rem] border border-brand-cream-dark/10 p-4 hover:border-brand-accent/40 hover:shadow-[0_16px_32px_rgba(41,208,103,0.05)] transition-all duration-500 cursor-none group outline-none focus-visible:ring-2 focus-visible:ring-brand-accent w-full"
                                    aria-label={`Ver pantalla completa: ${item.title}`}
                                >
                                    <div className={`w-full ${item.aspectRatio === 'portrait' ? 'aspect-[2/3]' : 'aspect-video'} rounded-2xl overflow-hidden bg-brand-cream-dark/20 relative border border-brand-dark/5`}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            loading="lazy"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://placehold.co/800x450/052E1C/ECE5D5?text=${encodeURIComponent(item.title)}`;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors duration-500" />
                                    </div>
                                    <div className="flex flex-col mt-4 px-2 pb-2">
                                        <span className="font-sans text-[8px] uppercase tracking-[0.25em] font-black text-brand-accent mb-1.5">{item.category}</span>
                                        <h4 className="font-serif text-lg font-bold text-brand-dark leading-tight">{item.title}</h4>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* 5. The Impact (Premium Metrics) */}
                <div data-theme="dark" className="w-screen relative left-1/2 ml-[-50vw] bg-brand-dark py-32 md:py-40 px-6">
                    <div className="max-w-5xl mx-auto flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent font-sans font-black text-[9px] uppercase tracking-widest mb-4 shadow-[0_4px_16px_rgba(41,208,103,0.15)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                            05 / VALOR Y RESULTADOS
                        </div>
                        <h2 className="font-serif text-4xl md:text-6xl text-brand-cream tracking-tighter mb-20 text-center leading-tight">
                            Resultados Clave de Negocio<span className="text-brand-accent">.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
                            {project.outcomes.map((outcome, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    className="flex flex-col items-start text-left gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-accent/30 hover:shadow-[0_16px_32px_rgba(41,208,103,0.04)] transition-all duration-500 w-full relative overflow-hidden"
                                >
                                    <div className="text-brand-accent bg-white/5 p-4 rounded-2xl border border-white/5">
                                        {React.isValidElement(outcome.icon) ? React.cloneElement(outcome.icon as React.ReactElement<{ size?: number, strokeWidth?: number }>, { size: 28, strokeWidth: 1.5 }) : outcome.icon}
                                    </div>
                                    <span className="font-sans text-brand-cream text-base md:text-lg leading-relaxed font-semibold">
                                        {outcome.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 6. Testimonial - Luxury Editorial Monograph style */}
                <motion.section
                    data-theme="light"
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full max-w-5xl mx-auto bg-brand-cream p-12 md:p-20 rounded-4xl border border-brand-cream-dark/15 hover:border-brand-accent/20 transition-all duration-500 flex flex-col items-center text-center gap-8 relative overflow-hidden"
                >
                    <span className="font-serif text-8xl text-brand-accent/25 absolute left-10 top-6 select-none font-bold">
                        “
                    </span>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/35 text-brand-dark font-sans font-black text-[9px] uppercase tracking-widest shadow-[0_4px_16px_rgba(41,208,103,0.08)] mb-2 relative z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                        VALIDACIÓN Y COMENTARIO
                    </div>
                    
                    <h3 className="font-serif text-xl md:text-3xl lg:text-3xl text-brand-dark leading-[1.35] tracking-tight italic max-w-4xl font-normal relative z-10">
                        "{project.testimonial.text.replace(/"/g, '')}"
                    </h3>
                    
                    <div className="flex flex-col items-center gap-1 mt-4 relative z-10">
                        <span className="font-sans text-[10px] tracking-[0.25em] font-black uppercase text-brand-dark">
                            {project.testimonial.author}
                        </span>
                        <span className="font-serif text-brand-accent font-medium text-lg italic mt-1">
                            {project.testimonial.company}
                        </span>
                    </div>
                </motion.section>
            </article>
        </div>
    );
};
