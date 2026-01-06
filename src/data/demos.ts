export type Demo = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  status: "planned" | "live";
};

export const demos: Demo[] = [
  {
    title: "Realtime Portfolio API",
    description: "Spring Boot backend with a Next.js dashboard UI.",
    stack: ["Spring Boot", "PostgreSQL", "Next.js"],
    href: "/demos/realtime-portfolio-api",
    status: "planned",
  },
  {
    title: "AI Demo Gallery",
    description: "Showcase interactive AI demo cards with live endpoints.",
    stack: ["Spring Boot", "Next.js"],
    href: "/demos/ai-demo-gallery",
    status: "planned",
  },
  {
    title: "Design Systems Playground",
    description: "Reusable component library previews built in Next.js.",
    stack: ["Next.js"],
    href: "/demos/design-systems-playground",
    status: "planned",
  },
];
