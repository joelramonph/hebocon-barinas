'use client';
import { supabase } from '../../lib/supabase';
import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { 
  Bot, 
  Ticket, 
  ArrowRight, 
  Mail, 
  MessageCircle, 
  User, 
  Users, 
  Download, 
  CheckCircle, 
  ChevronLeft 
} from 'lucide-react';
import Link from 'next/link';

export default function Registro() {
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [cargando, setCargando] = useState(false);
  const ticketRef = useRef(null);

  // Función para capturar el ticket y descargarlo
  const handleDownload = async () => {
    if (ticketRef.current === null) return;
    
    try {
      const dataUrl = await toPng(ticketRef.current, { 
        cacheBust: true,
        backgroundColor: '#f5f5f4', 
      });
      const link = document.createElement('a');
      link.download = `pase-hebocon-${nombre.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error al generar la imagen:', err);
    }
  };

  // FUNCIÓN DE REGISTRO EN SUPABASE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    const formData = new FormData(e.currentTarget);
    
    const datosRegistro = {
      nombre: nombre,
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      interes: formData.get('interes'),
      marketing_consent: formData.get('marketing') === 'on'
    };

    try {
      const { error } = await supabase
        .from('registros_hebocon')
        .insert([datosRegistro]);

      if (error) throw error;

      // Si todo sale bien, mostramos el pase
      setEnviado(true);
    } catch (error) {
      console.error('Error guardando en Supabase:', error.message);
      alert('¡Ups! Hubo un error al guardar tus datos. Revisa la consola de Ubuntu.');
    } finally {
      setCargando(false);
    }
  };

  // --- VISTA DE ÉXITO (EL PASE) ---
  if (enviado) {
    return (
      <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 text-black">
        <div className="max-w-2xl w-full animate-in fade-in zoom-in duration-500">
          
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 border-2 border-green-600 p-2 rounded-full mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h2 className="text-3xl font-black uppercase italic">¡Registro Exitoso!</h2>
            <p className="font-bold text-stone-500 uppercase">Descarga tu pase y muéstralo en la entrada.</p>
          </div>

          <div className="p-4 bg-stone-50" ref={ticketRef}>
            <div className="bg-yellow-400 border-4 border-black p-1 flex flex-col md:flex-row shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black border-dashed bg-white flex-grow relative">
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-stone-50 border-4 border-black rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-stone-50 border-4 border-black rounded-full"></div>
                
                <div className="flex items-center gap-2 mb-6">
                  <Bot className="text-blue-600" size={28} />
                  <span className="font-black uppercase italic text-sm tracking-tighter">Hebocon Barinas 2026</span>
                </div>
                
                <h3 className="text-5xl font-black uppercase italic leading-none mb-6">PASE OFICIAL</h3>
                
                <div className="space-y-3 font-black uppercase text-sm italic">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs text-black">Invitado Especial:</span>
                    <span className="text-xl text-blue-600">{nombre || 'Explorador STEAM'}</span>
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <span className="text-gray-400 text-xs text-black">Fecha:</span>
                      <p className="text-black">07 MARZO</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs text-black">Lugar:</span>
                      <p className="text-black">Barinas, VEN</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 text-white p-6 flex flex-col items-center justify-center min-w-[140px]">
                <Ticket size={48} className="text-yellow-400 mb-4" />
                <span className="[writing-mode:vertical-lr] font-black uppercase tracking-[0.3em] text-2xl rotate-180">
                  #HB-2026
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center px-4">
            <button 
              onClick={handleDownload}
              className="bg-blue-600 text-white px-8 py-4 border-4 border-black font-black uppercase italic flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <Download size={24} /> Guardar en Galería
            </button>
            
            <Link href="/" className="bg-white text-black px-8 py-4 border-4 border-black font-black uppercase italic flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              <ChevronLeft size={20} /> Volver
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // --- VISTA DEL FORMULARIO ---
  return (
    <main className="min-h-screen bg-stone-50 p-6 md:p-12 lg:p-24 text-black">
      <div className="max-w-3xl mx-auto">
        
        {/* BOTÓN VOLVER AL INICIO (NUEVO) */}
        <Link href="/" className="inline-flex items-center gap-2 font-black uppercase italic mb-8 hover:text-blue-600 transition-colors group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
        </Link>

        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
          
          <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 font-black uppercase italic border-4 border-black -rotate-2">
            8 Equipos en Arena
          </div>

          <header className="mb-10">
            <h2 className="text-5xl font-black uppercase italic leading-none mb-4">Registro</h2>
            <p className="font-bold text-stone-500 uppercase tracking-tight">Completa tus datos para recibir el pase de entrada.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col gap-2">
              <label className="font-black uppercase flex items-center gap-2 text-sm italic">
                <User size={18} className="text-blue-600" /> Nombre Completo
              </label>
              <input 
                required
                name="nombre"
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="border-4 border-black p-4 text-lg font-bold focus:bg-yellow-50 outline-none transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none" 
                placeholder="Ej: Joel Parra"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-black uppercase flex items-center gap-2 text-sm italic text-black">
                  <Mail size={18} className="text-blue-600" /> E-mail
                </label>
                <input 
                  required
                  name="email"
                  type="email" 
                  className="border-4 border-black p-4 font-bold focus:bg-yellow-50 outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none" 
                  placeholder="hola@ejemplo.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-black uppercase flex items-center gap-2 text-sm italic text-black">
                  <MessageCircle size={18} className="text-blue-600" /> WhatsApp
                </label>
                <input 
                  required
                  name="whatsapp"
                  type="tel" 
                  className="border-4 border-black p-4 font-bold focus:bg-yellow-50 outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none" 
                  placeholder="0424-7000000"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase flex items-center gap-2 text-sm italic text-black">
                <Users size={18} className="text-blue-600" /> ¿Qué te trae a Hebocon?
              </label>
              <select name="interes" className="border-4 border-black p-4 bg-white font-black uppercase outline-none cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none appearance-none">
                <option value="espectador">Quiero ser espectador</option>
                <option value="mentor">Soy mentor de un equipo</option>
                <option value="patrocinador">Quiero patrocinar el evento</option>
                <option value="prensa">Prensa / Medios</option>
              </select>
            </div>

            <div className="bg-yellow-50 border-4 border-black p-6 mt-10 relative">
              <div className="absolute -top-3 left-4 bg-black text-white text-[10px] px-2 py-0.5 font-black uppercase">Importante</div>
              <label className="flex items-start gap-4 cursor-pointer">
                <input 
                  name="marketing"
                  type="checkbox" 
                  className="w-8 h-8 border-4 border-black accent-blue-600 cursor-pointer"
                  defaultChecked
                />
                <span className="font-bold text-sm leading-tight italic">
                  ¡Me apunto! Deseo recibir invitaciones exclusivas para los próximos <span className="text-blue-600 uppercase font-black">Talleres de Robótica e IA</span> del Profe Joel Parra USICA.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={cargando}
              className="w-full bg-blue-600 text-white text-3xl font-black py-6 border-4 border-black hover:bg-yellow-400 hover:text-black transition-all shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-4 group disabled:opacity-50"
            >
              {cargando ? 'REGISTRANDO...' : 'OBTENER MI PASE'} 
              {!cargando && <ArrowRight className="group-hover:translate-x-3 transition-transform" />}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}