import React, { useState, useEffect } from "react";
import { Settings, Lightbulb, CheckCircle, Lock, ChevronDown, ChevronUp } from "lucide-react";
import type { Lesson as TemaLesson } from "../data/temas";

interface Lesson {
  title: string;
  duration: string;
  description?: string;
  completed: boolean;
  locked: boolean;
  index: number;
}

type Props = {
  area: string; // Ej: "Tema 1"
  lessons: TemaLesson[];
  onBack: () => void;
};

export default function CourseView({ area, lessons: initialLessons, onBack }: Props) {
  const temaId = parseInt(area.replace("Tema ", ""), 10);
  const storageKey = `preparar-tema-${temaId}`;

  const [titulo, setTitulo] = useState(area);
  const [prerequisitos, setPrerequisitos] = useState("Colocar Pre-requisitos en esta área");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  // Cargar desde localStorage si existe
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTitulo(parsed.titulo || area);
        setPrerequisitos(parsed.prerequisitos || "Colocar Pre-requisitos en esta área");
        if (parsed.lessons) {
          const enriched = parsed.lessons.map((l: any, i: number) => ({
            ...l,
            completed: l.completed ?? false,
            locked: l.locked ?? (i !== 0),
          }));
          setLessons(enriched);
        }
      } catch (e) {
        console.error("Error leyendo tema desde localStorage", e);
      }
    } else {
      const enriched = initialLessons.map((l, i) => ({
        ...l,
        completed: false,
        locked: i !== 0,
      }));
      setLessons(enriched);
    }
  }, [storageKey, area, initialLessons]);

  // Guardar progreso en localStorage
  useEffect(() => {
    if (lessons.length > 0) {
      const data = { titulo, prerequisitos, lessons };
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  }, [lessons, titulo, prerequisitos, storageKey]);

  const toggleLesson = (index: number) => {
    setExpanded(expanded === index ? null : index);

    setLessons((prev) =>
      prev.map((lesson) => {
        if (lesson.index === index) {
          return { ...lesson, completed: true, locked: false };
        }
        if (lesson.index === index + 1) {
          return { ...lesson, locked: false };
        }
        return lesson;
      })
    );
  };

  const completedCount = lessons.filter((l) => l.completed).length;
  const total = lessons.length;
  const progress = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  // 🔑 Separar número de tema y título
  const [temaNumero, tituloTexto] = titulo.split(":").map((t) => t.trim());

  return (
    <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
      {/* Botón Volver */}
      <div className="mb-4">
        <button
          onClick={onBack}
          className="mb-4 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:text-[#FEA723] transition-colors duration-300 cursor-pointer"
        >
          ← Volver
        </button>
      </div>

      {/* Encabezado con tema y título separados */}
        <section className="mb-6 bg-[#FEA723] rounded-2xl"> 
          <div className="bg-[#FEA723] text-white p-6 rounded-lg flex flex-col items-center gap-2 shadow-md">
            {/* Icono y número del tema centrados en la misma fila */}
            <div className="flex flex-row items-center justify-center gap-3">
              <Settings size={32} strokeWidth={2.5} className="text-white" />
              <h2 className="text-lg font-bold">{temaNumero}</h2>
            </div>
            {/* Título debajo, también centrado */}
            <p className="text-xl italic text-center">{tituloTexto}</p>
          </div>
        </section>

      {/* Pre-requisitos */}
      <section className="mb-6">
        <div className="border border-[#FEA723] bg-[#ffddba] p-6 rounded-lg shadow-md flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <Lightbulb size={28} strokeWidth={2.5} className="text-[#FEA723]" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Pre-requisitos</h2>
              <p className="text-sm text-gray-600">{prerequisitos}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de progreso */}
      <section>
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{completedCount} de {total} completadas</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#FEA723] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Lecciones */}
      <section className="mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Instrucciones del curso</h2>
          <ul className="space-y-4">
            {lessons.map((lesson) => (
              <li key={lesson.index} className="border-b pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {lesson.completed ? (
                      <CheckCircle size={22} className="text-green-500" />
                    ) : lesson.locked ? (
                      <Lock size={20} className="text-gray-500" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-400 rounded-full" />
                    )}
                    <h3 className="text-lg font-semibold text-gray-700">
                      {lesson.title}{" "}
                      <span
                        className={`text-sm font-medium ${
                          lesson.completed ? "text-blue-600" : "text-gray-500"
                        }`}
                      >
                        – {lesson.duration}
                      </span>
                    </h3>
                  </div>
                  {!lesson.locked && (
                    <button
                      onClick={() => toggleLesson(lesson.index)}
                      className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    >
                      {expanded === lesson.index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  )}
                </div>

                {/* Cortina */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    expanded === lesson.index
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-600">{lesson.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Licencia */}
      <section>
        <div className="border border-[#ffb23e] bg-[#ffb23e] p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-2">Licencia</h2>
          <p className="text-sm text-white">
            Creative Commons License – Attribution 4.0 International (CC BY 4.0)
          </p>
        </div>
      </section>
    </div>
  );
}
