export type Lesson = {
  title: string;
  duration: string;
  description: string;
  completed: boolean;
  locked: boolean;
  index: number;
};

export const temas: Record<number, Lesson[]> = {
  1: [
    {
      title: "HTML semántico y accesibilidad",
      duration: "20 min",
      description:
        "En esta lección aprenderemos sobre la importancia del HTML semántico...",
      completed: false,
      locked: false,
      index: 1,
    },
    {
      title: "CSS moderno: Flex, Grid y utilidades",
      duration: "20 min",
      description:
        "Aprenderás a usar Flexbox y Grid para crear layouts modernos...",
      completed: false,
      locked: true,
      index: 2,
    },
    {
      title: "JavaScript ES6+ imprescindible",
      duration: "30 min",
      description:
        "Exploraremos las características modernas de ES6+: arrow functions, destructuring, módulos, async/await y más.",
      completed: false,
      locked: true,
      index: 3,
    },
  ],
  2: [
    {
      title: "POO en Java",
      duration: "25 min",
      description: "Conceptos de clases, objetos, herencia y polimorfismo.",
      completed: false,
      locked: false,
      index: 1,
    },
    {
      title: "Colecciones en Java",
      duration: "20 min",
      description: "Uso de listas, mapas y sets en Java.",
      completed: false,
      locked: true,
      index: 2,
    },
  ],
  3: [
    {
      title: "Fundamentos de Python",
      duration: "20 min",
      description: "Sintaxis básica, variables y tipos de datos en Python.",
      completed: false,
      locked: false,
      index: 1,
    },
    {
      title: "Estructuras de control",
      duration: "20 min",
      description: "Condicionales, bucles y control de flujo en Python.",
      completed: false,
      locked: true,
      index: 2,
    },
  ],
  4: [
    {
      title: "Introducción a Bases de Datos",
      duration: "25 min",
      description: "Conceptos básicos de SQL y modelado de datos.",
      completed: false,
      locked: false,
      index: 1,
    },
    {
      title: "Consultas avanzadas",
      duration: "30 min",
      description: "JOINs, subconsultas y optimización de queries.",
      completed: false,
      locked: true,
      index: 2,
    },
  ],
};
