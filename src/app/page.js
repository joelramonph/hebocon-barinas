'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Bot,
  Zap,
  Shield,
  Rocket,
  MapPin,
  Calendar,
  Instagram,
  Github,
  Mail,
  MessageCircle,
  ScrollText,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  // --- LÓGICA DEL CONTADOR ---
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date('2026-04-25T09:00:00'); // Fecha del evento

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          min: Math.floor((difference / 1000 / 60) % 60),
          seg: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Navbar Simple */}
      <nav className="p-6 border-b-4 border-black bg-white flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Bot size={32} className="text-blue-600" />
          <span className="font-black text-2xl uppercase italic tracking-tighter">
            Hebocon <span className="text-blue-600">Barinas</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/reglas" className="hidden md:block font-black uppercase italic hover:text-blue-600 transition-colors">
            Reglas
          </Link>
          <Link href="/registro" className="bg-yellow-400 border-2 border-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-xs md:text-base">
            OBTENER MI PASE
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 text-center bg-white border-b-4 border-black">
        <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-none mb-6">
          ¡Chatarra <br /> <span className="text-blue-600">al Poder!</span>
        </h1>
        <p className="text-xl md:text-2xl font-bold bg-yellow-300 inline-block px-4 py-1 border-2 border-black -rotate-1 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          25 DE ABRIL - CASAPRO, BARINAS, VENEZUELA
        </p>

        {/* --- CONTADOR DINÁMICO --- */}
        {isMounted && (
          <div className="flex justify-center gap-3 md:gap-6 mb-12">
            {[
              { label: 'Días', val: timeLeft.dias },
              { label: 'Hrs', val: timeLeft.horas },
              { label: 'Min', val: timeLeft.min },
              { label: 'Seg', val: timeLeft.seg },
            ].map((unit, i) => (
              <div key={i} className="bg-white border-4 border-black p-2 md:p-4 min-w-[70px] md:min-w-[100px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-2xl md:text-4xl font-black text-blue-600 leading-none">{unit.val}</div>
                <div className="text-[10px] md:text-xs font-black uppercase italic text-stone-400 mt-1">{unit.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* BOTONES DE ACCIÓN PRINCIPALES */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <Link href="/registro" className="bg-blue-600 text-white border-4 border-black px-8 py-4 font-black text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 justify-center group">
            OBTENER MI PASE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link href="/reglas" className="bg-white text-black border-4 border-black px-8 py-4 font-black text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 justify-center">
            <ScrollText size={32} /> VER REGLAS
          </Link>
        </div>
      </header>

      {/* SECCIÓN DE INTRODUCCIÓN / ABOUT */}
      <section className="py-20 px-6 bg-blue-50 border-b-4 border-black text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 flex items-center gap-3">
            <span className="bg-blue-600 text-white px-3 py-1 text-2xl md:text-4xl">¿Qué es Hebocon Barinas?</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl font-bold leading-relaxed">
            <p>
              Hebocon es la celebración del <span className="underline decoration-blue-600 decoration-4 text-blue-700">ingenio creativo sin límites.</span>
            </p>
            <p>
              Aquí no buscamos la perfección de un laboratorio de la NASA, sino la magia de la improvisación técnica. Es un espacio donde el cartón, los juguetes viejos y los componentes electrónicos reciclados cobran vida para enfrentarse en una arena de sana diversión.
            </p>

            <div className="bg-white border-4 border-black p-6 rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-2xl font-black uppercase mb-4 text-red-600">Convocatoria 2026:</h4>
              <p className="italic text-gray-700">
                En esta edición contaremos con la participación de **8 equipos** representando a **2 instituciones aliadas**, reuniendo a jóvenes creadores listos para demostrar que la robótica es para todos.
              </p>
            </div>

            <p className="mt-8 italic">
              Para los niños y jóvenes de Barinas, esta es una oportunidad única de iniciarse en la robótica educativa y resolución de problemas de una forma épica.
            </p>
          </div>
        </div>
      </section>

      {/* Secciones de Información */}
      <section className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black border-b-4 border-black">
        <div className="p-12 flex flex-col items-center text-center">
          <Zap size={48} className="mb-4 text-blue-600" />
          <h3 className="text-xl font-black uppercase">Low-Tech</h3>
          <p className="font-bold text-stone-500 uppercase text-xs">Usa cartón, motores viejos y mucha cinta.</p>
        </div>
        <div className="p-12 flex flex-col items-center text-center bg-stone-100">
          <Shield size={48} className="mb-4 text-green-600" />
          <h3 className="text-xl font-black uppercase">Seguridad</h3>
          <p className="font-bold text-stone-500 uppercase text-xs">Lentes obligatorios. Protegemos a los inventores.</p>
        </div>
        <div className="p-12 flex flex-col items-center text-center">
          <Rocket size={48} className="mb-4 text-red-600" />
          <h3 className="text-xl font-black uppercase">Diversión</h3>
          <p className="font-bold text-stone-500 uppercase text-xs">El error es parte del show.</p>
        </div>
      </section>

      {/* SECCIÓN DE PATROCINADORES */}
      <section className="py-16 px-6 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-black uppercase italic mb-12 inline-block border-b-8 border-yellow-400">
            Aliados que apuestan al Ingenio
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center">
            {/* USICA */}
            <Link 
              href="https://www.instagram.com/usica.ve"
              target="_blank"
              rel="noopener noreferrer"
              className="block group border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all aspect-video relative overflow-hidden"
            >
              <span className="absolute top-0 left-0 bg-blue-600 text-white z-20 font-black uppercase italic border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-[8px] px-1.5 py-0.5 border-b-2 border-r-2 md:text-xs md:px-3 md:py-1 md:border-b-4 md:border-r-4">
                Organizador-USICA
              </span>
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all flex items-center justify-center">
                <Image src="/logos/logoUsica.PNG" alt="USICA" fill className="object-contain p-2 transition-transform group-hover:scale-110" />
              </div>
            </Link>

            {/* CASAPRO */}
            <Link 
              href="https://www.instagram.com/casaprove"
              target="_blank"
              rel="noopener noreferrer"
              className="block group border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all aspect-video relative overflow-hidden"
            >
              <span className="absolute top-0 left-0 bg-blue-600 text-white z-20 font-black uppercase italic border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-[8px] px-1.5 py-0.5 border-b-2 border-r-2 md:text-xs md:px-3 md:py-1 md:border-b-4 md:border-r-4">
                Sede-CASAPRO
              </span>
              <div className="relative w-full h-full grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all flex items-center justify-center">
                <Image src="/logos/logoCasapro.jpg" alt="CasaPro" fill className="object-contain p-2 transition-transform group-hover:scale-110" />
              </div>
            </Link>

            <div className="border-4 border-dashed border-zinc-300 p-8 flex flex-col items-center justify-center text-zinc-400 aspect-video group hover:border-black hover:text-black transition-colors">
              <span className="font-black uppercase italic text-sm text-stone-200">Sponsor STEAM</span>
            </div>

            <div className="border-4 border-dashed border-zinc-300 p-8 flex flex-col items-center justify-center text-zinc-400 aspect-video group hover:border-black hover:text-black transition-colors">
              <span className="font-black uppercase italic text-sm text-stone-200">Tu Marca Aquí</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 border-2 border-white">
                  <Bot size={24} className="text-white" />
                </div>
                <span className="font-black text-2xl uppercase italic tracking-tighter">
                  Hebocon <span className="text-blue-600">Barinas</span>
                </span>
              </div>
              <p className="font-bold text-gray-400 leading-tight uppercase text-xs">
                La competencia de robótica donde el reciclaje es protagonista.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-yellow-400 font-black uppercase italic text-xl">¿Cuándo y Dónde?</h4>
              <div className="space-y-2 font-bold italic">
                <p className="flex items-center gap-2 text-stone-300"><Calendar size={20} className="text-blue-600" /> 25 de Abril, 2026</p>
                <p className="flex items-center gap-2 text-stone-300"><MapPin size={20} className="text-blue-600" /> Casapro, Barinas</p>
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-blue-600 font-black uppercase italic text-xl">Conéctate</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://www.instagram.com/usica.ve" className="p-3 bg-white text-black border-2 border-white hover:bg-yellow-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-3 bg-white text-black border-2 border-white hover:bg-blue-600 hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </a>
                <a href="https://github.com/joelramonph" className="p-3 bg-white text-black border-2 border-white hover:bg-gray-800 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
              </div>
              <div className="pt-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Coach STEAM</p>
                <p className="font-black uppercase italic text-xl">Joel Parra</p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-gray-700 tracking-widest uppercase">
            <p>© 2026 HEBOCON BARINAS. TODOS LOS DERECHOS RESERVADOS.</p>
            <div className="flex gap-6">
              <Link href="/reglas" className="hover:text-white transition-colors">Reglamento</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}