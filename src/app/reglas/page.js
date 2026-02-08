'use client';
import { 
  Bot, 
  ShieldAlert, 
  Zap, 
  Timer, 
  Scale, 
  ChevronLeft, 
  Trophy,
  Hammer
} from 'lucide-react';
import Link from 'next/link';

export default function Reglas() {
  const reglas = [
    {
      icon: <Timer className="text-blue-600" size={32} />,
      titulo: "Tiempo de Combate",
      desc: "Cada combate dura máximo 1 minuto. Si nadie gana, pierde el robot que se haya movido menos."
    },
    {
      icon: <Scale className="text-blue-600" size={32} />,
      titulo: "Peso y Medidas",
      desc: "Máximo 1kg de peso y 50x50cm de base. La altura es libre (puedes usar el límite del techo)."
    },
    {
      icon: <ShieldAlert className="text-blue-600" size={32} />,
      titulo: "Prohibido Armas",
      desc: "Nada de taladros o fuego. El objetivo es empujar, no destruir violentamente."
    },
    {
      icon: <Zap className="text-blue-600" size={32} />,
      titulo: "Criterio de Victoria",
      desc: "Gana el que saque al oponente del ring o si el oponente se vuelca por sí solo."
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col text-black">
      {/* Contenido Principal */}
      <div className="flex-grow p-6 md:p-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 font-black uppercase italic mb-8 hover:text-blue-600 transition-colors group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
          </Link>

          <header className="mb-12">
            <h1 className="text-6xl font-black uppercase italic leading-none mb-4">Reglamento Oficial</h1>
            <div className="bg-yellow-400 border-4 border-black p-4 inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black uppercase italic text-sm">Hebocon Barinas 2026: La victoria es accidental</p>
            </div>
          </header>

          {/* LA REGLA DE ORO: PENALIZACIÓN POR EXCELENCIA TÉCNICA */}
          <section className="bg-red-600 text-white border-4 border-black p-8 mb-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <ShieldAlert className="absolute -right-4 -top-4 opacity-20 rotate-12" size={120} />
            <h2 className="text-3xl font-black uppercase italic mb-4 flex items-center gap-3">
              ⚠ Penalización por Excelencia
            </h2>
            <p className="font-bold text-lg leading-relaxed italic relative z-10">
              ¡Cuidado! Si el juez decide que tu robot es "demasiado bueno" o tecnológicamente avanzado, recibirás puntos negativos. Hebocon premia la imperfección y la creatividad con materiales reciclados.
            </p>
          </section>

          {/* Cuadrícula de Reglas Técnicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {reglas.map((regla, index) => (
              <div key={index} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className="mb-4">{regla.icon}</div>
                <h3 className="text-2xl font-black uppercase italic mb-2">{regla.titulo}</h3>
                <p className="font-bold text-stone-600 uppercase text-sm leading-tight">{regla.desc}</p>
              </div>
            ))}
          </div>

          {/* PREMIO HEBOI */}
          <section className="bg-zinc-900 text-white border-4 border-black p-10 mb-12 shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] relative">
            <Trophy className="text-yellow-400 mb-4" size={48} />
            <h2 className="text-4xl font-black uppercase italic mb-4">El Premio Heboi</h2>
            <p className="font-bold text-lg italic text-stone-300">
              Es el honor más alto. Se otorga al robot que, aunque haya perdido todos los combates, demostró la mayor ingenuidad, carisma y técnica "pobre" durante el evento.
            </p>
          </section>
        </div>
      </div>

      {/* FOOTER PERSONALIZADO */}
      <footer className="bg-white border-t-4 border-black p-10 mt-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Bot className="text-blue-600" size={24} />
              <span className="font-black uppercase italic tracking-tighter text-xl">Onda Robótica</span>
            </div>
            <p className="font-bold text-stone-500 text-sm uppercase">Fomentando la educación STEAM en Barinas</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="font-black uppercase italic text-sm mb-1">Diseñado por Joel Parra</p>
            <p className="font-bold text-blue-600 text-xs uppercase tracking-widest">Desarrollador Web & Coach STEAM</p>
          </div>
        </div>
      </footer>
    </main>
  );
}