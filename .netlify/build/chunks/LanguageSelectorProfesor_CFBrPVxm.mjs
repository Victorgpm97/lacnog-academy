import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Settings, Lightbulb, CheckCircle, Lock, ChevronUp, ChevronDown, X, UserRoundPen, GraduationCap } from 'lucide-react';

function CourseView({ area, lessons: initialLessons, onBack }) {
  const temaId = parseInt(area.replace("Tema ", ""), 10);
  const storageKey = `preparar-tema-${temaId}`;
  const [titulo, setTitulo] = useState(area);
  const [prerequisitos, setPrerequisitos] = useState("Colocar Pre-requisitos en esta área");
  const [lessons, setLessons] = useState([]);
  const [expanded, setExpanded] = useState(null);
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTitulo(parsed.titulo || area);
        setPrerequisitos(parsed.prerequisitos || "Colocar Pre-requisitos en esta área");
        if (parsed.lessons) {
          const enriched = parsed.lessons.map((l, i) => ({
            ...l,
            completed: l.completed ?? false,
            locked: l.locked ?? i !== 0
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
        locked: i !== 0
      }));
      setLessons(enriched);
    }
  }, [storageKey, area, initialLessons]);
  useEffect(() => {
    if (lessons.length > 0) {
      const data = { titulo, prerequisitos, lessons };
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  }, [lessons, titulo, prerequisitos, storageKey]);
  const toggleLesson = (index) => {
    setExpanded(expanded === index ? null : index);
    setLessons(
      (prev) => prev.map((lesson) => {
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
  const progress = total > 0 ? Math.round(completedCount / total * 100) : 0;
  const [temaNumero, tituloTexto] = titulo.split(":").map((t) => t.trim());
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onBack,
        className: "mb-4 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:text-[#FEA723] transition-colors duration-300 cursor-pointer",
        children: "← Volver"
      }
    ) }),
    /* @__PURE__ */ jsx("section", { className: "mb-6 bg-[#FEA723] rounded-2xl", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#FEA723] text-white p-6 rounded-lg flex flex-col items-center gap-2 shadow-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Settings, { size: 32, strokeWidth: 2.5, className: "text-white" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold", children: temaNumero })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl italic text-center", children: tituloTexto })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mb-6", children: /* @__PURE__ */ jsx("div", { className: "border border-[#FEA723] bg-[#ffddba] p-6 rounded-lg shadow-md flex items-center justify-between max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Lightbulb, { size: 28, strokeWidth: 2.5, className: "text-[#FEA723]" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-800", children: "Pre-requisitos" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: prerequisitos })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-gray-600 mb-1", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          completedCount,
          " de ",
          total,
          " completadas"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          progress,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-[#FEA723] h-2 rounded-full transition-all duration-500",
          style: { width: `${progress}%` }
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mb-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-800 mb-4", children: "Instrucciones del curso" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: lessons.map((lesson) => /* @__PURE__ */ jsxs("li", { className: "border-b pb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            lesson.completed ? /* @__PURE__ */ jsx(CheckCircle, { size: 22, className: "text-green-500" }) : lesson.locked ? /* @__PURE__ */ jsx(Lock, { size: 20, className: "text-gray-500" }) : /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-gray-400 rounded-full" }),
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-gray-700", children: [
              lesson.title,
              " ",
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: `text-sm font-medium ${lesson.completed ? "text-blue-600" : "text-gray-500"}`,
                  children: [
                    "– ",
                    lesson.duration
                  ]
                }
              )
            ] })
          ] }),
          !lesson.locked && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => toggleLesson(lesson.index),
              className: "text-gray-600 hover:text-gray-800 cursor-pointer",
              children: expanded === lesson.index ? /* @__PURE__ */ jsx(ChevronUp, { size: 20 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `grid transition-all duration-500 ease-in-out ${expanded === lesson.index ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`,
            children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: lesson.description }) })
          }
        )
      ] }, lesson.index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "border border-[#ffb23e] bg-[#ffb23e] p-6 rounded-lg shadow-md max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-white mb-2", children: "Licencia" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-white", children: "Creative Commons License – Attribution 4.0 International (CC BY 4.0)" })
    ] }) })
  ] });
}

function PrepararTemaView({ tema, onBack, onDeleteTema }) {
  const storageKey = `preparar-tema-${tema}`;
  const [titulo, setTitulo] = useState(`Tema ${tema}: Bases sólidas de la web y JS`);
  const [prerequisitos, setPrerequisitos] = useState("Colocar Pre-requisitos en esta área");
  const [lessons, setLessons] = useState([]);
  const [expanded, setExpanded] = useState(null);
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
          index: 1
        },
        {
          title: "CSS moderno: Flex, Grid y utilidades",
          duration: "20 min",
          description: "Aprenderás a usar Flexbox y Grid para crear layouts modernos…",
          index: 2
        },
        {
          title: "JavaScript ES6+ imprescindible",
          duration: "30 min",
          description: "Exploraremos las características modernas de ES6+: arrow functions, destructuring, módulos, async/await y más.",
          index: 3
        }
      ]);
    }
  }, []);
  const saveAll = () => {
    const data = { titulo, prerequisitos, lessons };
    localStorage.setItem(storageKey, JSON.stringify(data));
    alert("✅ Cambios guardados correctamente");
  };
  const [temaNumero, tituloTexto] = titulo.split(":").map((t) => t.trim());
  const toggleLesson = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onBack,
        className: "mb-4 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:text-[#FEA723] transition-colors duration-300 cursor-pointer",
        children: "← Volver"
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "mb-6 flex flex-col bg-[#FEA723] p-6 rounded-lg shadow-md max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#FEA723] text-white p-6 rounded-lg flex flex-col justify-center items-center gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: temaNumero }),
      /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-center", children: tituloTexto })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mb-6", children: /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-col border-[#FEA723] bg-[#ffbd58] p-6 rounded-lg shadow-md max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Pre-requisitos" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-900 rounded p-3", children: prerequisitos })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mb-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg max-w-3xl mx-auto shadow-md", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-800 mb-4", children: "Instrucciones del curso" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: lessons.map((lesson) => /* @__PURE__ */ jsxs("li", { className: "border-b pb-3", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex justify-between items-center p-3 cursor-pointer",
            onClick: () => toggleLesson(lesson.index),
            children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-gray-700", children: [
                lesson.title,
                " ",
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
                  "– ",
                  lesson.duration
                ] })
              ] }),
              expanded === lesson.index ? /* @__PURE__ */ jsx(ChevronUp, { size: 20 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 20 })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `grid transition-all duration-500 ease-in-out ${expanded === lesson.index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
            children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden p-3", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: lesson.description }) })
          }
        )
      ] }, lesson.index)) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center w-80 gap-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: saveAll,
          className: "text-[#FEA723] px-6 py-2 rounded-md font-medium hover:text-[#ffb956] transition-colors duration-300 cursor-pointer hidden",
          children: "Guardar"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            localStorage.removeItem(storageKey);
            onDeleteTema(tema);
          },
          className: "text-red-500 px-6 py-2 rounded-md font-medium hover:text-red-300 transition-colors duration-300 cursor-pointer hidden",
          children: "Eliminar"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "border border-[#ffb23e] bg-[#eda33e] p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-white mb-2", children: "Licencia" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-white", children: "Creative Commons License – Attribution 4.0 International (CC BY 4.0)" })
    ] }) })
  ] });
}

function ModalRolSelector({ onClose, onSelectRole }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 backdrop-blur-sm z-40" }),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 w-full max-w-sm shadow-lg animate-fadeIn relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onClose,
          className: "absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer",
          children: /* @__PURE__ */ jsx(X, { size: 20 })
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center mb-2 text-[#FEA723]", children: "¡Bienvenido!" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-gray-700 mb-6", children: "Selecciona tu rol" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 p-4", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              onSelectRole("profesor");
              onClose();
            },
            className: "flex items-center justify-center gap-2 px-3 py-2 bg-[#fde0be] text-[#323232] rounded-lg hover:bg-[#ffb764] hover:scale-110 transition-transform duration-300 text-sm cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(UserRoundPen, { size: 20 }),
              "Profesor o Instructor",
              /* @__PURE__ */ jsx(UserRoundPen, { size: 20 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              onSelectRole("estudiante");
              onClose();
            },
            className: "flex items-center justify-center gap-2 px-3 py-2 bg-[#fde0be] text-[#323232] rounded-lg hover:bg-[#ffb764] hover:scale-110 transition-transform duration-300 text-sm cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(GraduationCap, { size: 20 }),
              "Estudiante o Profesional",
              /* @__PURE__ */ jsx(GraduationCap, { size: 20 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onClose,
          className: "text-sm text-gray-500 hover:underline cursor-pointer",
          children: "Cancelar"
        }
      ) })
    ] }) })
  ] });
}

const temas = {
  1: [
    {
      title: "HTML semántico y accesibilidad",
      duration: "20 min",
      description: "En esta lección aprenderemos sobre la importancia del HTML semántico...",
      completed: false,
      locked: false,
      index: 1
    },
    {
      title: "CSS moderno: Flex, Grid y utilidades",
      duration: "20 min",
      description: "Aprenderás a usar Flexbox y Grid para crear layouts modernos...",
      completed: false,
      locked: true,
      index: 2
    },
    {
      title: "JavaScript ES6+ imprescindible",
      duration: "30 min",
      description: "Exploraremos las características modernas de ES6+: arrow functions, destructuring, módulos, async/await y más.",
      completed: false,
      locked: true,
      index: 3
    }
  ],
  2: [
    {
      title: "POO en Java",
      duration: "25 min",
      description: "Conceptos de clases, objetos, herencia y polimorfismo.",
      completed: false,
      locked: false,
      index: 1
    },
    {
      title: "Colecciones en Java",
      duration: "20 min",
      description: "Uso de listas, mapas y sets en Java.",
      completed: false,
      locked: true,
      index: 2
    }
  ],
  3: [
    {
      title: "Fundamentos de Python",
      duration: "20 min",
      description: "Sintaxis básica, variables y tipos de datos en Python.",
      completed: false,
      locked: false,
      index: 1
    },
    {
      title: "Estructuras de control",
      duration: "20 min",
      description: "Condicionales, bucles y control de flujo en Python.",
      completed: false,
      locked: true,
      index: 2
    }
  ],
  4: [
    {
      title: "Introducción a Bases de Datos",
      duration: "25 min",
      description: "Conceptos básicos de SQL y modelado de datos.",
      completed: false,
      locked: false,
      index: 1
    },
    {
      title: "Consultas avanzadas",
      duration: "30 min",
      description: "JOINs, subconsultas y optimización de queries.",
      completed: false,
      locked: true,
      index: 2
    }
  ]
};

function LanguageSelector() {
  const [role, setRole] = useState(null);
  const [preparandoTema, setPreparandoTema] = useState(null);
  const [viewingCourse, setViewingCourse] = useState(null);
  const [showRolModal, setShowRolModal] = useState(false);
  const [temasDisponibles, setTemasDisponibles] = useState([]);
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
      setTemasDisponibles([1, 2, 3, 4]);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("temasDisponibles", JSON.stringify(temasDisponibles));
  }, [temasDisponibles]);
  const handleSelectRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem("userRole", newRole);
    setShowRolModal(false);
  };
  const handleTemaClick = (tema) => {
    if (role === "profesor") {
      setPreparandoTema({ tema });
    } else {
      setViewingCourse(tema);
    }
  };
  const handleAgregarTema = () => {
    const nuevo = temasDisponibles.length > 0 ? Math.max(...temasDisponibles) + 1 : 1;
    setTemasDisponibles([...temasDisponibles, nuevo]);
    setPreparandoTema({ tema: nuevo });
  };
  if (preparandoTema) {
    return /* @__PURE__ */ jsx(
      PrepararTemaView,
      {
        tema: preparandoTema.tema,
        onBack: () => setPreparandoTema(null),
        onDeleteTema: (temaId) => {
          setTemasDisponibles((prev) => prev.filter((t) => t !== temaId));
          setPreparandoTema(null);
        }
      }
    );
  }
  if (viewingCourse !== null) {
    return /* @__PURE__ */ jsx(
      CourseView,
      {
        area: `Tema ${viewingCourse}`,
        lessons: temas[viewingCourse],
        onBack: () => setViewingCourse(null)
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg max-w-6xl mx-auto mt-10", children: [
    showRolModal && /* @__PURE__ */ jsx(
      ModalRolSelector,
      {
        onClose: () => setShowRolModal(false),
        onSelectRole: handleSelectRole
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-amber-100 p-4 rounded-lg shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#FEA723] text-5xl font-bold mb-2", children: temasDisponibles.length }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-700", children: "Temas Disponibles" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-amber-100 p-4 rounded-lg shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center py-2 gap-4 mb-2", children: [
          /* @__PURE__ */ jsx("img", { src: "/logos/java-logo.png", alt: "Java", className: "w-9 h-9 object-contain" }),
          /* @__PURE__ */ jsx("img", { src: "/logos/python-logo.png", alt: "Python", className: "w-9 h-9 object-contain" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-700", children: "Lenguajes" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-amber-100 p-4 rounded-lg shadow-sm py-8", children: [
        /* @__PURE__ */ jsx("img", { src: "/icons/books-stack.png", alt: "Formato autoasistido", className: "w-8 h-8 mx-auto mb-2" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-700", children: "Formato autoasistido" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setShowRolModal(true),
        className: "bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-110 transition-transform duration-300 cursor-pointer",
        children: "Cambiar Rol"
      }
    ) }),
    role === "profesor" || role === "estudiante" ? /* @__PURE__ */ jsx("div", { className: "bg-orange-200 rounded-lg shadow-sm mt-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-6", children: temasDisponibles.map((tema) => {
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
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-amber-50 rounded-lg p-4 flex flex-col justify-between hover:scale-102 -translate-y-1 transition-transform animate-slide-up duration-300 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: titulo }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Reglas conceptuales fundamentales y desarrollo e implementación de procesos de aprendizaje." }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleTemaClick(tema),
                className: "bg-[#FEA723] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FE9E1B] hover:scale-102 transition-transform duration-300 cursor-pointer",
                children: role === "profesor" ? "Comenzar Recorrido" : "Ver Tema"
              }
            )
          ]
        },
        tema
      );
    }) }) }) : /* @__PURE__ */ jsx("div", { className: "text-center text-gray-500 mt-6", children: "Cargando rol…" }),
    role === "profesor" && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleAgregarTema,
        className: "text-[#FEA723] px-6 py-2 mt-6 rounded-md font-medium hover:text-[#FE9E1B] transition cursor-pointer hidden",
        children: "+ Agregar Tema"
      }
    )
  ] });
}

export { LanguageSelector as L };
