import React, { useState } from "react";
import { ArcadeEmbed } from "./ArcadeEmbed";

type Props = {
  onBack: () => void;
};

export default function ProfesorIntroCard({ onBack }: Props) {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:text-[#FEA723] transition-colors duration-300 cursor-pointer"
      >
        ← Volver
      </button>

      {/* Título */}
      <section className="mb-6">
        <div className="bg-[#FEA723] text-white p-8 rounded-2xl shadow-md flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold text-center">
            Introducción a la ruta de aprendizaje para profesores / Instructores
          </h2>
        </div>
      </section>

      {/* Pre-requisitos */}
      <section className="mb-6">
        <div className="flex flex-col border-[#FEA723] bg-[#ffbd58] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pre-requisitos</h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-900">
            <li className="flex items-center gap-2">
              1) Crear o tener una cuenta en{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 flex items-center gap-1"
              >
                GitHub
                <svg
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  className="octicon octicon-mark-github"
                >
                  <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436..."></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center gap-2">
              2) Crear una cuenta de usuario en{" "}
              <a
                href="https://roadmap.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900"
              >
                roadmap.sh
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Instrucciones */}
      <section className="mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Instrucciones para conectarse a la ruta de aprendizaje
          </h2>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Ver tutorial</h3>
            <span className="text-sm text-gray-500">(5 Min)</span>
          </div>
        <div className="flex justify-center">
        <button
            onClick={() => setShowTutorial(true)}
            className="bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
            Ver tutorial
        </button>
        </div>


          {showTutorial && <ArcadeEmbed onClose={() => setShowTutorial(false)} />}
        </div>
      </section>
    </div>
  );
}
