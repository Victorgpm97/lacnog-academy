import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Lesson } from "../data/temas";

type Props = {
  tema: number;
  onBack: () => void;
  onDeleteTema: (temaId: number) => void;
};

export default function PrepararTemaView({ tema, onBack, onDeleteTema }: Props) {
  const storageKey = `preparar-tema-${tema}`;

  const [titulo, setTitulo] = useState(`Tema ${tema}: Bases sólidas de la web y JS`);
  const [prerequisitos, setPrerequisitos] = useState("Colocar Pre-requisitos en esta área");
  const [lessons, setLessons] = useState<Omit<Lesson, "completed" | "locked">[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  // Cargar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setTitulo(parsed.titulo || titulo);
      setPrerequisitos(parsed.prerequisitos || prerequisitos);
      setLessons(parsed.lessons || []);
    } else {
      setLessons([
        {
          title: "HTML semántico y accesibilidad",
          duration: "20 min",
          description: "En esta lección aprenderemos sobre la importancia del HTML semántico…",
          index: 1,
        },
        {
          title: "CSS moderno: Flex, Grid y utilidades",
          duration: "20 min",
          description: "Aprenderás a usar Flexbox y Grid para crear layouts modernos…",
          index: 2,
        },
        {
          title: "JavaScript ES6+ imprescindible",
          duration: "30 min",
          description: "Exploraremos las características modernas de ES6+: arrow functions, destructuring, módulos, async/await y más.",
          index: 3,
        },
      ]);
    }
  }, []);

  // Guardar en localStorage
  const saveAll = () => {
    const data = { titulo, prerequisitos, lessons };
    localStorage.setItem(storageKey, JSON.stringify(data));
    alert("✅ Cambios guardados correctamente");
  };

  // 🔑 Separar número de tema y título
  const [temaNumero, tituloTexto] = titulo.split(":").map((t) => t.trim());

  const toggleLesson = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
      {/* Header */}
      <button
        onClick={onBack}
        className="mb-4 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:text-[#FEA723] transition-colors duration-300 cursor-pointer"
      >
        ← Volver
      </button>

      {/* Título */}
      <section className="mb-6 flex flex-col bg-[#FEA723] p-6 rounded-lg shadow-md max-w-3xl mx-auto"> 
        <div className="bg-[#FEA723] text-white p-6 rounded-lg flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-bold">{temaNumero}</h2>
          <p className="text-3xl font-bold text-center">{tituloTexto}</p>
        </div>
      </section> 

      {/* Pre-requisitos */}
      <section className="mb-6">
        <div className="mb-6 flex flex-col border-[#FEA723] bg-[#ffbd58] p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Pre-requisitos
          </h2>
          <p className="text-sm text-gray-900 rounded p-3">
            {prerequisitos}
          </p>
        </div>
      </section>

      {/* Lecciones en cortina (solo lectura) */}
      <section className="mb-6">
        <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Instrucciones del curso</h2>
          <ul className="space-y-4">
            {lessons.map((lesson) => (
              <li key={lesson.index} className="border-b pb-3">
                {/* Cabecera de la cortina */}
                <div
                  className="flex justify-between items-center p-3 cursor-pointer"
                  onClick={() => toggleLesson(lesson.index)}
                >
                  <h3 className="text-lg font-semibold text-gray-700">
                    {lesson.title}{" "}
                    <span className="text-sm text-gray-500">– {lesson.duration}</span>
                  </h3>
                  {expanded === lesson.index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>

                {/* Contenido de la cortina */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    expanded === lesson.index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden p-3">
                    <p className="text-sm text-gray-600">{lesson.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Botón de guardar y eliminar */}
      <div className="flex justify-end items-center w-80 gap-4">
        <button
          onClick={saveAll}
          className="text-[#FEA723] px-6 py-2 rounded-md font-medium hover:text-[#ffb956] transition-colors duration-300 cursor-pointer hidden"
        >
          Guardar
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(storageKey);
            onDeleteTema(tema);
          }}
          className="text-red-500 px-6 py-2 rounded-md font-medium hover:text-red-300 transition-colors duration-300 cursor-pointer hidden"
        >
          Eliminar
        </button>
      </div>

      {/* Licencia */}
      <section>
        <div className="border border-[#ffb23e] bg-[#eda33e] p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-4">
          <h2 className="text-lg font-semibold text-white mb-2">Licencia</h2>
          <p className="text-sm text-white">
            Creative Commons License – Attribution 4.0 International (CC BY 4.0)
          </p>
        </div>
      </section>
    </div>
  );
}
