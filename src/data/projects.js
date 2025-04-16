import { TAGS } from "./tags";

export const PROJECTS = [
  {
    current: "Justo ahora",
    title: "Stride",
    description:
      "Stride es una app en desarrollo para planificar rutinas de ejercicio y alimentación, con herramientas de análisis personalizadas. Actualmente, existe un prototipo funcional que permite crear y seguir rutinas, no incluye la función de chat. El objetivo es ayudar a los usuarios a alcanzar sus metas de salud mientras se conectan con una comunidad motivada.",
    image: "/stride.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
    href: "https://fitracker-h0at.onrender.com/",
  },
  {
    date: "Mar 31 2025",
    title: "Chocolate Factory",
    description:
      "Administra tu propia chocolatería en este juego de gestión de recursos. Optimiza la producción, innova con nuevas recetas y expande tu negocio. Actualmente, estamos puliendo una nueva versión del juego, incorporando el feedback recibido de los jugadores, mejorando la jugabilidad y realizando algunos cambios estéticos para una experiencia más fluida y atractiva.",
    image: "/factory.jpg",
    tags: [TAGS.UNITY, TAGS.CSHARP, TAGS.BLENDER],
    href: "https://epaezrubio.itch.io/chocolate-factory-tycoon",
  },
  {
    date: "Sep 14 2024",
    title: "LabKeeper",
    description:
      "Un desafiante juego de estrategia donde debes gestionar un laboratorio y protegerlo de amenazas externas. Investiga nuevas tecnologías, refuerza la seguridad y equilibra recursos para sobrevivir.",
    image: "/labkeeper.jpg",
    tags: [TAGS.UNITY, TAGS.CSHARP],
    href: "https://larzt.itch.io/labkeeper",
  },
  {
    date: "Nov 11 2024",
    title: "Harmonious Growth",
    description:
      "Un giro innovador al clásico 'Juego de la Vida' de Conway. Expande tu ecosistema con nuevas reglas, utiliza un mazo de cartas estratégico y observa cómo evolucionan las dinámicas de crecimiento.",
    image: "/growth.jpg",
    tags: [TAGS.UNITY, TAGS.CSHARP],
    href: "https://epaezrubio.itch.io/harmonious-growth",
  },
];
