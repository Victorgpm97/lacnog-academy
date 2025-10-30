import React, { useState, useEffect } from "react";
import CourseView from "../components/CourseView";
import TemaView from "../components/TemaView";
import ModalRolSelector from "./ModalRolSelector";
//import PrepararTemaView from "./PrepararTemaView";
import { temas } from "../data/temas";

export default function LanguageSelector() {
  const [role, setRole] = useState<"profesor" | "estudiante" | null>(null);
  const [preparandoTema, setPreparandoTema] = useState<{ tema: number } | null>(null);
  const [viewingCourse, setViewingCourse] = useState<number | null>(null);
  const [showRolModal, setShowRolModal] = useState(false);
  const [temasDisponibles, setTemasDisponibles] = useState<number[]>([]);

  // Cargar rol y lista de temas desde localStorage
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole")?.trim().toLowerCase();
    if (storedRole === "profesor" || storedRole === "estudiante") {
      setRole(storedRole);
    } else {
      setShowRolModal(true);
    }

    const storedTemas = localStorage.getItem("temasDisponibles");
    if (storedTemas) {
      setTemasDisponibles(JSON.parse(storedTemas));
    } else {
      setTemasDisponibles([1, 2, 3, 4]); // inicial por defecto
    }
  }, []);

  // Guardar lista de temas en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("temasDisponibles", JSON.stringify(temasDisponibles));
  }, [temasDisponibles]);

  const handleSelectRole = (newRole: "profesor" | "estudiante") => {
    setRole(newRole);
    localStorage.setItem("userRole", newRole);
    setShowRolModal(false);
  };

  const handleTemaClick = (tema: number) => {
    if (role === "profesor") {
      setPreparandoTema({ tema });
    } else {
      setViewingCourse(tema);
    }
  };

  const handleAgregarTema = () => {
    const nuevo = temasDisponibles.length > 0 ? Math.max(...temasDisponibles) + 1 : 1;
    setTemasDisponibles([...temasDisponibles, nuevo]);
    setPreparandoTema({ tema: nuevo }); // redirige directo a PrepararTemaView
  };

    // Vista de CourseView (estudiante)
  if (preparandoTema) {
    return (
      <TemaView
        tema={preparandoTema.tema}
        onBack={() => setPreparandoTema(null)}
        onDeleteTema={(temaId) => {
          setTemasDisponibles((prev) => prev.filter((t) => t !== temaId));
          setPreparandoTema(null);
        }}
      />
    );
  }

  // Vista de PrepararTema (profesor)
//  if (preparandoTema) {
//    return (
//      <PrepararTemaView
//        tema={preparandoTema.tema}
//        onBack={() => setPreparandoTema(null)}
//        onDeleteTema={(temaId) => {
//          setTemasDisponibles((prev) => prev.filter((t) => t !== temaId));
//          setPreparandoTema(null);
//        }}
//      />
//    );
//  }

  // Vista de CourseView (estudiante)
  if (viewingCourse !== null) {
    return (
      <CourseView
        area={`Tema ${viewingCourse}`}
        lessons={temas[viewingCourse]}
        onBack={() => setViewingCourse(null)}
      />
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg max-w-6xl mx-auto mt-10">
      {/* Modal de rol */}
      {showRolModal && (
        <ModalRolSelector
          onClose={() => setShowRolModal(false)}
          onSelectRole={handleSelectRole}
        />
      )}

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-amber-100 p-4 rounded-lg shadow-sm">
          <div className="text-[#FEA723] text-5xl font-bold mb-2">
            {temasDisponibles.length}
          </div>
          <h3 className="text-lg font-semibold text-gray-700">Temas Disponibles</h3>
        </div>
        <div className="bg-amber-100 p-4 rounded-lg shadow-sm">
          <div className="flex justify-center items-center py-2 gap-4 mb-2">
            <img src="/logos/java-logo.png" alt="Java" className="w-9 h-9 object-contain" />
            <img src="/logos/python-logo.png" alt="Python" className="w-9 h-9 object-contain" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">Lenguajes</h3>
        </div>
        <div className="bg-amber-100 p-4 rounded-lg shadow-sm py-8">
          <img src="/icons/books-stack.png" alt="Formato autoasistido" className="w-8 h-8 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-gray-700">Formato autoasistido</h3>
        </div>
      </div>

      {/* Botón para cambiar rol */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowRolModal(true)}
          className="bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          Cambiar Rol
        </button>
      </div>

      {/* Temas */}
      {(role === "profesor" || role === "estudiante") ? (
        <div className="bg-orange-200 rounded-lg shadow-sm mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            {temasDisponibles.map((tema) => {
              // Leer título guardado en localStorage
              const saved = localStorage.getItem(`preparar-tema-${tema}`);
              let titulo = `Tema ${tema}`;
              if (saved) {
                try {
                  const parsed = JSON.parse(saved);
                  if (parsed.titulo) titulo = parsed.titulo;
                } catch (e) {
                  console.error("Error leyendo tema", e);
                }
              }

              return (
                <div
                  key={tema}
                  className="bg-amber-50 rounded-lg p-4 flex flex-col justify-between hover:scale-102 -translate-y-1 transition-transform animate-slide-up duration-300 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{titulo}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Reglas conceptuales fundamentales y desarrollo e implementación de procesos de aprendizaje.
                  </p>
                  <button
                    onClick={() => handleTemaClick(tema)}
                    className="bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-102 transition-transform duration-300 cursor-pointer"
                  >
                    {role === "profesor" ? "Comenzar Recorrido" : "Ver Tema"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-6">Cargando rol…</div>
      )}

      {/* Botón Agregar Tema (solo profesor) */}
      {role === "profesor" && (
        <button
          onClick={handleAgregarTema}
          className="text-[#FEA723] px-6 py-2 mt-6 rounded-md font-medium hover:text-[#FE9E1B] transition cursor-pointer hidden"
        >
          + Agregar Tema
        </button>
      )}
    </div>
  );
}
