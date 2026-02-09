export interface ServiceDiscipline {
  name: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  highlights: string[];
  deliverables?: string[];
  disciplines?: ServiceDiscipline[];
  whyChooseUs?: string[];
  closingStatement?: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "multi-discipline-engineering",
    title: "Multi-Discipline Engineering Services",
    shortTitle: "Multi-Discipline Engineering",
    description:
      "We deliver Concept, Basic, and Detailed Engineering across multiple disciplines, ensuring fully coordinated designs that meet client standards and are ready for construction. Our focus is on constructability, efficiency, and seamless collaboration across all engineering domains.",
    highlights: [
      "Constructible Designs: Layouts aligned with real site conditions for smooth execution",
      "Interdisciplinary Coordination: Minimized clashes through proactive collaboration",
      "Optimized Resources: Right-sized engineering teams for cost-effective project delivery",
    ],
    disciplines: [
      {
        name: "Process Engineering",
        items: [
          "Process Flow Diagrams (PFDs) & Piping & Instrumentation Diagrams (P&IDs)",
          "Equipment specifications and datasheets",
          "Sizing and capacity calculations for equipment, piping, and process systems",
          "Study of process systems to optimize performance, safety, and reliability",
        ],
      },
      {
        name: "Mechanical Engineering",
        items: [
          "Equipment sizing and thickness calculations, including stress and load analysis",
          "Piping layouts, supports and HVAC system design and study",
          "Equipment layouts and General arrangement drawings",
        ],
      },
      {
        name: "Electrical & Instrumentation (E&I) Engineering",
        items: [
          "Electrical load lists and distribution layouts",
          "Cable routing, tray layouts, and instrumentation panel arrangements",
          "Coordination with mechanical and process systems for clash-free design",
        ],
      },
      {
        name: "Civil & Structural Engineering",
        items: [
          "Structural foundations, steel, and concrete designs",
          "Civil site layouts, grading, and architectural drawings",
          "Coordination with mechanical, process, and E&I teams for seamless construction",
        ],
      },
      {
        name: "Deliverables Across Disciplines",
        items: [
          "Interdisciplinary clash detection and resolution",
          "Construction-ready 2D drawings from approved models",
          "Designs fully compliant with project and client standards",
        ],
      },
    ],
    closingStatement:
      "Our multi-discipline engineering services ensure practical, integrated, and construction-ready solutions that keep your projects on time and on budget.",
    image: "service-plant-engineering",
  },
  {
    id: "3d-modelling",
    title: "3D Modelling & 2D Drafting (Software Agnostic)",
    shortTitle: "3D Modelling & 2D Drafting",
    description:
      "We specialize in high-accuracy 3D modelling and precise 2D drafting across all major engineering and BIM platforms, aligned with client-specific workflows for all industries.",
    highlights: [
      "Faster project ramp-up with minimal learning curve",
      "Consistent quality across platforms and projects",
      "Reduced rework through coordinated, construction-ready outputs",
      "Optimized engineering cost through remote execution and standard workflows",
    ],
    deliverables: [
      "Intelligent 3D models for coordination and constructability",
      "Model-driven 2D drawing extraction",
      "Client standard templates and layer conventions",
      "Coordinated, clash-free design outputs",
    ],
    image: "service-3d-modelling",
  },
  {
    id: "piping-engineering",
    title: "Piping Design Engineering",
    shortTitle: "Piping Design Engineering",
    description:
      "We are specialized in piping design that combines safety, efficiency, and constructability. Our designs are built for smooth operations, easy maintenance, and real-world constructability, backed by years of hands-on EPC execution experience.",
    highlights: [
      "Safe and reliable systems designed to meet industry standards",
      "Optimized layouts for operational efficiency and minimal field conflicts",
      "Constructible designs that reduce rework and accelerate project timelines",
    ],
    deliverables: [
      "Piping layout and routing studies",
      "Equipment nozzle orientation and interface coordination",
      "Line lists and piping material specifications",
      "Piping isometric drawings",
      "Material take offs",
      "Pipe support philosophy and support coordination",
      "Stress analysis and documentation",
      "Constructability, operability, and maintenance reviews",
    ],
    image: "service-piping",
  },
  {
    id: "bim-digital-engineering",
    title: "BIM & Digital Engineering",
    shortTitle: "BIM & Digital Engineering",
    description:
      "We enable digital project execution through structured BIM workflows and model-based coordination, ensuring accuracy, transparency, and seamless interdisciplinary collaboration throughout the project lifecycle.",
    highlights: [
      "Client-specific Levels of Detail (LOD)",
      "Early clash detection reducing downstream costs",
      "Controlled change management and transparent updates",
    ],
    deliverables: [
      "Development of 3D BIM models with client-specific Levels of Detail (LOD)",
      "BIM coordination and clash detection across all disciplines",
      "Model-based interdisciplinary design reviews",
      "Preparation and implementation of client-specific BIM Execution Plans (BEP)",
      "Design change management and controlled model updates",
    ],
    image: "service-bim",
  },
  {
    id: "as-built-documentation",
    title: "As-Built Documentation & Reality Capture",
    shortTitle: "As-Built Documentation",
    description:
      "We provide comprehensive as-built documentation services using advanced 3D laser scanning and reality capture technologies to support operating facilities, brownfield projects, and revamp studies.",
    highlights: [
      "Accurate capture of existing conditions",
      "Engineering-grade digital twins",
      "Cost-effective planning for revamps and expansions",
    ],
    deliverables: [
      "3D laser scanning at site to capture accurate existing conditions",
      "Point cloud processing, validation, and management",
      "Development of engineering-grade 3D models from laser scan data",
      "Creation of digital twins representing true as-built conditions",
      "Model development in client-specified software platforms and formats",
      "Extraction of as-built drawings and documents aligned with client standards",
    ],
    image: "service-asbuilt",
  },
  {
    id: "quality-commitment",
    title: "Futunir Global Quality Commitment",
    shortTitle: "Quality Commitment",
    description:
      "At Futunir Global Pvt Ltd, quality is not just a process, it's a commitment. Every deliverable we produce is guided by our dedication to safety, reliability, compliance and constructability, ensuring our clients receive engineering solutions they can trust.",
    highlights: [
      "Originator Check: Each engineer performs a self-verification of their work against design intent, project inputs and applicable standards. Ensures accuracy and adherence from the earliest stage of design.",
      "Checker Review: An independent technical and coordination review is conducted to ensure compliance with codes, client specifications and interdisciplinary requirements. Helps identify and resolve potential issues early, reducing risk of rework.",
      "Project Lead Approval: The project lead performs the final validation confirming constructability, completeness and client readiness. Guarantees deliverables are ready for seamless execution in the field.",
    ],
    whyChooseUs: [
      "Reliable and error-free designs that reduce rework and site issues",
      "Full compliance with client and regulatory standards",
      "Confidence in every stage of the project from concept to construction",
    ],
    closingStatement:
      "At Futunir Global, our Quality Commitment ensures that every project we undertake reflects engineering excellence, precision and practical constructability, giving our clients solutions they can depend on.",
    deliverables: [],
    image: "service-qaqc",
  },
];
