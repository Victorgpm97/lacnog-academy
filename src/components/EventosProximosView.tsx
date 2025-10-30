import React, { useState } from "react";
import { eventosProximos } from "./eventosProximos";
import { CalendarDays, Clock, Users, Brain } from "lucide-react";

export default function EventosProximosView() {
  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const total = eventosProximos.length;

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + visibleCount) % total);
      setAnimating(false);
    }, 300); // duración de animación
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev - visibleCount + total) % total);
      setAnimating(false);
    }, 300);
  };
  

  const eventosVisibles = Array.from({ length: visibleCount }, (_, i) => {
    const index = (startIndex + i) % total;
    return eventosProximos[index];
  });

  return (
    <section className="relative px-6 py-8">
      {/* Botones laterales */}
      <button
        onClick={handlePrev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 cursor-pointer"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 cursor-pointer"
      >
        →
      </button>

      {/* Grid con animación */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-300 ease-in-out ${
            animating ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"
          }`}
        >
        {eventosVisibles.map((evento) => (
          <a
            key={evento.id}
            href={`/eventos/${evento.id}`}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-[250px]"

          >
            <div className={`bg-linear-to-r ${evento.fondo} p-4 text-white`}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${evento.fondo} flex items-center justify-center`}>
                  {evento.icono === "brain" ? <Brain size={22} /> : <Users size={22} />}
                </div>
                <h3 className="text-lg font-bold">{evento.titulo}</h3>
              </div>
              <p className="text-sm">{evento.subtitulo}</p>
              <div className="mt-2 flex gap-4 text-xs text-white/90">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{evento.tiempo}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays size={14} />
                  <span className="capitalize">{evento.tipo}</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 flex flex-col justify-between h-full">
              <p className="text-[#4E5059]">{evento.descripcion}</p>
              <div className="mt-0.5">
                <span className="text-sm text-[#FEA723] font-medium hover:underline">Ver más detalles →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
