import Link from "next/link";
import { Circle } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#030303]/60 backdrop-blur-md">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600">
          <Circle className="w-5 h-5 text-white fill-white/20" />
        </div>
        <span className="text-lg font-bold tracking-wide text-white">
          FILTRA
        </span>
      </div>

      {/* Links do Menu (Desktop) */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <Link href="#" className="hover:text-cyan-400 transition-colors">
          Como funciona
        </Link>
        <Link href="#" className="hover:text-cyan-400 transition-colors">
          Casos de Sucesso
        </Link>
        <Link href="#" className="hover:text-cyan-400 transition-colors">
          Sobre nós
        </Link>
      </div>

      {/* Botão de Ação */}
      <button className="px-5 py-2 text-sm font-semibold text-[#030303] bg-white rounded-full hover:bg-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
        Agendar Reunião
      </button>
    </nav>
  );
}