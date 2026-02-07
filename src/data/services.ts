export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  highlights: string[];
  deliverables?: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "plant-engineering",
    title: "Plant Engineering Design & Detailing",
    shortTitle: "Plant Engineering Design",
    description:
      "We provide Concept, Basic, and Detailed Engineering across multiple disciplines, ensuring seamless coordination and compliance with project and client standards.",
    highlights: [
      "Constructible layouts aligned with site realities",
      "Strong interdisciplinary coordination to reduce clashes",
      "Efficient resource utilization through right-sized engineering teams",
    ],
    deliverables: [
      "Plot plans and general arrangements",
      "Equipment layouts and arrangements",
      "Civil, structural, and architectural coordination drawings",
      "HVAC, electrical, and instrumentation layouts (coordination level)",
      "Interdisciplinary design coordination and clash resolution",
      "Construction-ready 2D drawings derived from approved models",
    ],
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
    title: "Piping Engineering",
    shortTitle: "Piping Engineering",
    description:
      "Our piping services are driven by safety, operability, maintainability, and constructability, supported by strong EPC execution experience.",
    highlights: [
      "Safe and operable designs compliant with codes and standards",
      "Execution-focused routing to minimize site changes",
      "Reduced rework and construction delays through accurate deliverables",
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
    id: "qaqc",
    title: "Quality Assurance & Quality Control (QA/QC)",
    shortTitle: "QA/QC",
    description:
      "Quality is embedded into every deliverable at Futunir Global Pvt Ltd through a structured three-level review system.",
    highlights: [
      "Originator Check — Self-verification against design intent, standards, and inputs",
      "Checker Review — Independent technical and coordination review, compliance with codes and client specifications",
      "Project Lead Approval — Final validation for constructability, completeness, and client readiness",
    ],
    deliverables: [],
    image: "service-qaqc",
  },
];
