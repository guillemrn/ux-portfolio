import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center pointer-events-none select-none">
            {/* Container for floating elements */}
            <div className="relative w-full max-w-lg aspect-square">

                {/* Code Snippet Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-10 right-0 z-20"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-brand-dark/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 w-[280px] md:w-[320px]"
                    >
                        <div className="flex gap-1.5 mb-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <pre className="font-mono text-[10px] md:text-xs text-brand-cream/90 leading-relaxed overflow-hidden">
                            <code className="block">
                                <span className="text-brand-accent">import</span> {'{'} motion {'}'} <span className="text-brand-accent">from</span> <span className="text-brand-accent">"framer-motion"</span>;{'\n\n'}
                                <span className="text-brand-accent">function</span> <span className="text-brand-cream">Portfolio</span>() {'{'}{'\n'}
                                {'  '}<span className="text-brand-accent">return</span> ({'\n'}
                                {'    '}&lt;<span className="text-brand-accent">main</span>&gt;{'\n'}
                                {'      '}&lt;<span className="text-brand-accent">Projects</span> /&gt;{'\n'}
                                {'    '}&lt;/<span className="text-brand-accent">main</span>&gt;{'\n'}
                                {'  '});{'\n'}
                                {'}'}
                            </code>
                        </pre>
                    </motion.div>
                </motion.div>

                {/* Chart/Graph Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute bottom-10 left-0 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="bg-brand-cream rounded-2xl p-6 shadow-xl border border-brand-dark/5 w-[240px] md:w-[280px]"
                    >
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold mb-1">Growth Index</p>
                                <p className="text-2xl font-serif text-brand-dark">98.4%</p>
                            </div>
                            <div className="text-brand-accent text-xs font-bold font-sans">+12.5%</div>
                        </div>
                        <div className="flex items-end gap-2 h-16">
                            {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                                    className="flex-1 bg-brand-dark/10 rounded-t-sm relative overflow-hidden"
                                >
                                    <motion.div
                                        animate={{ height: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        className="absolute bottom-0 left-0 w-full bg-brand-accent/30"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Floating status toggle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                >
                    <motion.div
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="bg-brand-accent text-brand-dark px-6 py-3 rounded-full shadow-lg shadow-brand-accent/30 flex items-center gap-3 font-sans font-black text-[10px] uppercase tracking-widest whitespace-nowrap"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-dark animate-pulse" />
                        Available for Projects
                    </motion.div>
                </motion.div>

                {/* Abstract Geometry */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-brand-accent/20 animate-spin-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-brand-dark/5 rotate-45" />
                </div>

            </div>
        </div>
    );
};
