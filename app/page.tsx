"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Inter } from "next/font/google";
import { 
  Hourglass, Trash2, Settings, TrendingDown, 
  AlertTriangle, Frown, Filter 
} from "lucide-react";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

// --- COMPONENTES VISUAIS ---

// 1. CARD TILT (Leve e performático)
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`relative transition-all duration-300 ${className}`}
        >
            {children}
            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
        </motion.div>
    );
};

// 2. BOTÃO PREMIUM (CSS Puro - Zero Lag)
const PremiumButton = ({ children, href, className, variant = "primary" }: { children: React.ReactNode; href: string; className?: string, variant?: "primary" | "secondary" }) => {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${className} relative overflow-hidden flex items-center justify-center`}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
        )}
      </motion.a>
    );
};

// --- PÁGINA ---

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const heroTitleVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, delay: delay, ease: [0.25, 0.4, 0.25, 1] }
    })
  };

  return (
    <main className={`min-h-screen bg-[#030303] text-white overflow-x-hidden selection:bg-cyan-500/30 ${inter.className}`}>
      
      {/* BACKGROUND FX */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-150px] left-[-100px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#0072FF] blur-[80px] md:blur-[100px] opacity-20 mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[-100px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-[#00C6FF] blur-[80px] md:blur-[100px] opacity-20 mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-cyan-500/[0.05] blur-3xl" />
      </div>

      {/* --- HEADER (FULL WIDTH / EXTREMIDADES) --- */}
      {/* Tirei o Header de dentro do container restritivo para garantir que ocupe a largura total */}
      <div className="relative z-20 w-full px-5 md:px-8 py-6">
        <nav className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
            {/* ESQUERDA: LOGO */}
            <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.5}} className="flex items-center gap-3 text-xl md:text-2xl font-bold tracking-tight">
                <div className="relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden shadow-inner-sm">
                    <Filter className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 fill-cyan-400/20 relative z-10 transform rotate-180" strokeWidth={1.5} />
                </div>
                FILTRA
            </motion.div>

            {/* DIREITA: BOTÃO ANÁLISE */}
            <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.5}}>
                <PremiumButton 
                    variant="secondary"
                    href="https://wa.me/5544997302097" 
                    className="inline-block border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                    <span className="md:hidden">Análise</span>
                    <span className="hidden md:inline">Análise do Negócio</span>
                </PremiumButton>
            </motion.div>
        </nav>
      </div>

      {/* CONTAINER DO CONTEÚDO PRINCIPAL (Mais centralizado) */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-8">
        
        {/* HERO */}
        <section className="text-center py-16 md:py-32 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-8 ring-1 ring-white/5"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <span className="text-xs md:text-sm text-white/70 tracking-wide uppercase font-medium">
              Filtra Assessoria
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8">
            <motion.div custom={0.1} initial="hidden" animate="visible" variants={heroTitleVariant} className="text-white block mb-1 drop-shadow-2xl">
                Nós Entregamos
            </motion.div>
            <motion.div custom={0.3} initial="hidden" animate="visible" variants={heroTitleVariant} className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-cyan-300 drop-shadow-lg pb-2">
                Clientes Prontos
            </motion.div>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-base md:text-xl text-white/50 mb-10 md:mb-12 max-w-2xl leading-relaxed font-light mx-auto px-4">
            Sua equipe de vendas merece leads qualificados. Encontramos, qualificamos e agendamos reuniões com quem realmente quer comprar.
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.8, y:20 }} animate={{ opacity: 1, scale: 1, y:0 }} transition={{ delay: 0.8, type: "spring" }} className="w-full md:w-auto px-4">
            <PremiumButton 
              variant="primary"
              href="https://wa.me/5544997302097" 
              className="group w-full md:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-shadow duration-300"
            >
               <span className="flex items-center gap-2">
                 Quero Escalar Minhas Vendas
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </span>
            </PremiumButton>
          </motion.div>
        </section>
      </div>

      {/* BARRA SEPARADORA */}
      <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative z-10 border-y border-white/[0.08] bg-black/30 py-6 md:py-8 mb-20 md:mb-24 backdrop-blur-sm">
        <div className="max-w-[1100px] mx-auto px-5 text-center">
          <p className="text-[#9CA3AF] text-base md:text-lg tracking-wide">
            A FILTRA é uma <strong className="text-white">assessoria de crescimento</strong>. Não uma agência tradicional.
          </p>
        </div>
      </motion.div>

      {/* DORES */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-5 mb-24 md:mb-32">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            O quanto sua empresa perde com <span className="text-cyan-400 inline-block">vendas "quase lá"</span>?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-[#9CA3AF] text-base md:text-lg font-light">
            Sua área comercial está jogando dinheiro fora:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            { icon: Hourglass, title: "Vendedor na Triagem", text: "Seu Vendedor, pago para fechar, está sobrecarregado triando contatos. Paga-se caro por fechamento, recebe-se triagem." },
            { icon: Trash2, title: "Leads Baratos e Ruins", text: "Comprar listas ou apostar em \"leads\" que nunca fecham é um buraco negro. Você paga pouco, mas perde tempo." },
            { icon: Settings, title: "Processos Quebrados", text: "Agências jogam a responsabilidade da qualificação para o cliente. Nós assumimos essa falha. A qualidade é nossa." },
            { icon: TrendingDown, title: "Métricas de Vaidade", text: "Cliques e curtidas não pagam as contas. Nós focamos em Reuniões com quem compra e dinheiro no seu caixa." },
            { icon: AlertTriangle, title: "Crescimento Caótico", text: "Acelerar o tráfego sem um filtro de vendas eficaz é sabotar sua operação. Garantimos que sua máquina aguente." },
            { icon: Frown, title: "Time Desmotivado", text: "Seu time cansa de correr atrás de curiosos. Nós protegemos seus melhores vendedores, entregando apenas leads prontos." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}>
                <TiltCard className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 h-full group">
                    <item.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed font-light">{item.text}</p>
                </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TIMELINE MÉTODO */}
      <div className="relative z-10 max-w-[800px] mx-auto px-5 mb-24 md:mb-32">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-bold mb-2">O Método FILTRA</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-[#9CA3AF] font-light">Como transformamos curiosos em vendas.</motion.p>
        </div>
        <div className="relative">
          <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true, margin: "0px 0px -200px 0px" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute left-[20px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-white/10 via-cyan-400 to-white/10 -translate-x-1/2 z-0" />
          {[
            { num: "1", title: "Encontramos o Cliente", text: "Ferramentas e estratégias avançadas para encontrar quem precisa do seu produto." },
            { num: "2", title: "Qualificamos para Você", text: "Conversamos, tiramos dúvidas e garantimos que só os clientes certos cheguem até você.", highlight: true },
            { num: "3", title: "Reunião: É Só Vender", text: "Agendamos na agenda do Closer. Ele recebe tudo pronto: resumo, dores e como fechar." }
          ].map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2, type:"spring" }} className="relative z-10 flex flex-col md:items-center mb-12 md:mb-16 last:mb-0 pl-12 md:pl-0">
              <div className="absolute left-[0px] md:left-1/2 md:-ml-[30px] w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-[#030303] border border-white/10 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 md:-mt-8">
                 <span className="relative z-10">{step.num}</span>
                 {step.highlight && <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ping" />}
              </div>
              <div className={`mt-0 md:mt-10 bg-[#0a0a0c] border ${step.highlight ? 'border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.1)]' : 'border-white/[0.08]'} p-6 md:p-10 rounded-2xl md:rounded-3xl w-full text-left md:text-center shadow-xl`}>
                <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 ${step.highlight ? 'text-cyan-400' : 'text-white'}`}>
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed font-light">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- OFFER CARD COM LUZ DUPLA (DOUBLE BEAM FIX) --- */}
      <div className="relative z-10 max-w-[800px] mx-auto px-5 mb-20 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="relative group rounded-2xl md:rounded-3xl overflow-hidden bg-[#0a0a0c]"
        >
          {/* LUZ DUPLA GIRATÓRIA:
              Usa 'animate-spin-slow' para girar.
              'bg-double-beam' cria duas pontas de luz ciano opostas.
          */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%] animate-spin-slow opacity-100 z-0 bg-double-beam" />

          {/* CAPA PRETA PARA COBRIR O CENTRO */}
          <div className="absolute inset-[1px] bg-[#050505] rounded-2xl md:rounded-3xl z-10" />

          {/* CONTEÚDO DO CARD */}
          <div className="relative z-20 p-6 md:p-10 text-center rounded-2xl md:rounded-3xl h-full w-full">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-500/[0.05] to-transparent pointer-events-none rounded-2xl md:rounded-3xl" />

            <div className="relative z-10">
                <div className="inline-block bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 md:mb-8">
                    Plano Aceleração
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Assessoria de Crescimento</h2>
                
                <ul className="inline-block text-left space-y-4 mb-8 md:mb-10 text-[#9CA3AF] font-light text-sm md:text-base">
                    <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Gestão de Tráfego Pago Estratégico</li>
                    <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Criação de Anúncios e Conteúdo</li>
                    <li className="flex items-center gap-3 text-white font-medium bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 text-xs md:text-base shadow-inner"><span className="text-cyan-400">★</span> SDR Dedicado (Pré-vendas)</li>
                    <li className="flex items-center gap-3 text-white font-medium bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 text-xs md:text-base shadow-inner"><span className="text-cyan-400">★</span> Qualificação humana de leads</li>
                    <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Agendamento direto na agenda</li>
                </ul>

                <div className="w-full">
                    <PremiumButton variant="primary" href="https://wa.me/5544997302097" className="block w-full bg-white text-black py-3 md:py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20 text-sm md:text-base">
                      Aplicar para análise
                    </PremiumButton>
                </div>
            </div>
          </div>
        </motion.div>

        {/* CTA FINAL */}
        <div className="text-center mt-12 md:mt-16 mb-8 md:mb-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tight">
            Sua próxima grande venda está perdida<br className="hidden md:block" /> no meio dos curiosos.
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <PremiumButton variant="primary" href="https://wa.me/5544997302097" className="inline-block bg-white text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-wide hover:bg-cyan-400 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Agendar Minha Análise
            </PremiumButton>
          </motion.div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/[0.08] py-8 md:py-12 text-center text-[#9CA3AF] text-xs md:text-sm font-light">
        <p className="opacity-50">FILTRA © 2025. Todos os direitos reservados.</p>
      </footer>

      {/* --- ESTILOS GLOBAIS --- */}
      <style jsx global>{`
        /* Rotação */
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        /* Gradiente Duplo (180 graus de diferença) */
        .bg-double-beam {
            background: conic-gradient(
                from 0deg, 
                transparent 0deg, 
                transparent 80deg, 
                #22d3ee 100deg, /* Luz 1 */
                transparent 120deg, 
                transparent 260deg, 
                #22d3ee 280deg, /* Luz 2 (oposta) */
                transparent 300deg, 
                transparent 360deg
            );
        }
      `}</style>
    </main>
  );
}