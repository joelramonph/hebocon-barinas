'use client';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Bot, 
  Lightbulb, 
  ChevronLeft, 
  Zap, 
  Hammer, 
  Recycle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const robotsInspiracion = [
  {
    id: 1,
    nombre: "El Valiente de Cartón",
    src: "https://i.imgur.com/8tGkFqM.jpg", 
    descripcion: "Un ejemplo brillante de cómo la estructura no necesita ser de metal para ser funcional. Pura ingeniería de cartón.",
    tech: "Ingenio: Nivel 1"
  },
  {
    id: 2,
    nombre: "Franken-Bot 3000",
    src: "https://i.imgur.com/4zKxTqE.jpg",
    descripcion: "Dando una segunda vida a componentes electrónicos olvidados. La esencia del reciclaje creativo.",
    tech: "Reciclaje Activo"
  },
  {
    id: 3,
    nombre: "Explorador de Vibración",
    src: "https://i.imgur.com/9P7o3kF.jpg",
    descripcion: "Demuestra que el movimiento puede surgir de las formas más simples y sorprendentes.",
    tech: "Mecánica Simple"
  },
  {
    id: 4,
    nombre: "Ciclón de Tapas",
    src: "https://i.imgur.com/Lq5M9zX.jpg",
    descripcion: "Ruedas hechas con tapas de refresco. Una lección de resolución de problemas con lo que hay a mano.",
    tech: "Low-Tech Real"
  }
];

export default function Inspiracion() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      
      {/* NAVBAR */}
      <nav className="p-6 border-b-4 border-black bg-white flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Bot size={32} className="text-blue-600" />
          <span className="font-black text-2xl uppercase italic tracking-tighter">
            Hebocon <span className="text-blue-600">Barinas</span>
          </span>
        </div>
        <Link href="/" className="bg-yellow-400 border-2 border-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-xs md:text-base">
          VOLVER AL INICIO
        </Link>
      </nav>

      <div className="p-6 md:p-12 lg:px-24 max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 font-black uppercase italic mb-8 hover:text-blue-600 transition-colors group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Inicio
          </Link>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none mb-6">
            Galería de <br /> <span className="text-blue-600">Ingenio Puro</span>
          </h1>
          <div className="bg-yellow-300 border-4 border-black p-4 inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            <p className="font-black uppercase italic text-sm md:text-xl flex items-center gap-2">
              <Sparkles size={24} className="text-blue-600" /> El arte de crear con lo que tienes a mano
            </p>
          </div>
        </header>

        {/* BANNER DE MOTIVACIÓN */}
        <section className="bg-blue-600 text-white border-4 border-black p-8 mb-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <Recycle className="absolute -right-4 -bottom-4 opacity-20 rotate-12 text-white" size={150} />
          <h2 className="text-3xl font-black uppercase italic mb-4 flex items-center gap-3 text-yellow-400">
            ¿Ves chatarra? Nosotros vemos potencial
          </h2>
          <p className="font-bold text-lg leading-relaxed italic relative z-10 max-w-2xl text-blue-50">
            En Hebocon Barinas, la verdadera victoria es la curiosidad. Inspírate en estos prototipos que demuestran que con cartón, silicona y una buena idea, cualquier joven puede ser un inventor.
          </p>
        </section>

        {/* GRID DE ROBOTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {robotsInspiracion.map((robot) => (
            <div 
              key={robot.id} 
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all overflow-hidden"
            >
              <div className="relative aspect-video border-b-4 border-black grayscale group-hover:grayscale-0 transition-all">
                <Image 
                  src={robot.src} 
                  alt={robot.nombre}
                  fill
                  className="object-cover"
                  unoptimized 
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 font-black uppercase italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs">
                  {robot.tech}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-3xl font-black uppercase italic mb-3 flex items-center gap-2">
                  <Hammer className="text-blue-600" size={24} /> {robot.nombre}
                </h3>
                <p className="font-bold text-stone-600 uppercase text-sm leading-tight italic border-l-4 border-blue-600 pl-4">
                  {robot.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-24 text-center">
          <div className="bg-white border-4 border-black p-12 shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] inline-block max-w-2xl">
            <h2 className="text-4xl font-black uppercase italic mb-6">¿Tienes una idea en mente?</h2>
            <Link href="/registro" className="bg-blue-600 text-white border-4 border-black px-8 py-4 font-black text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 justify-center group uppercase italic text-center">
              COMIENZA TU PROYECTO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t-4 border-black p-10 mt-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Bot className="text-blue-600" size={24} />
              <span className="font-black uppercase italic tracking-tighter text-xl text-blue-600">USICA STEAM</span>
            </div>
            <p className="font-bold text-stone-500 text-sm uppercase leading-tight">Ciencia y Tecnología para el futuro de Barinas</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="font-black uppercase italic text-sm mb-1 text-stone-400">Coach del Evento</p>
            <p className="font-black uppercase italic text-xl">Joel Parra</p>
          </div>
        </div>
      </footer>
    </main>
  );
}