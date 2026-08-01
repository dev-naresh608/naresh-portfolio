export const projectsData = [
  {
    id: "01",
    slug: "supplynest",
    name: "SupplyNest",
    subtitle: "Invora Platform",
    tagline: "Enterprise Distribution & Inventory Management System",
    description:
      "A domain-oriented inventory and supply chain tracking system featuring strict Role-Based Access Control (RBAC), multi-module backend isolation, and complete transactional audit logging.",
    longDescription:
      "SupplyNest (Invora Platform) was architected to address complex operational logistics in inventory distribution. It decouples business logic into modular backend services—Authentication, Inventory, Product Management, Role Authorization, and Stock Transactions—ensuring clear boundaries and independent maintainability.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React",
      "Vite",
      "Zod",
      "Cloudinary",
      "Winston",
    ],
    github: "https://github.com/dev-naresh608/supplyNest",
    demo: null,
    hasCaseStudy: true,
    caseStudyUrl: "/projects/supplynest",
    featured: true,
    highlights: [
      {
        title: "Modular Domain Architecture",
        detail:
          "Strict separation into decoupled backend modules: Auth, Inventory, Products, RBAC, and Transactions.",
      },
      {
        title: "Granular RBAC",
        detail:
          "Hierarchical permissions tailored across SuperAdmin, Admin, Manager, and Staff roles.",
      },
      {
        title: "Defense-in-Depth Security",
        detail:
          "JWT authentication via HTTP-only secure cookies, bcrypt password hashing, API rate limiting, and Helmet headers.",
      },
      {
        title: "Observability & Auditability",
        detail:
          "Structured error and transaction logging with Winston; full audit trail for stock movements.",
      },
    ],
    architectureNodes: [
      { name: "Auth Module", type: "JWT / Cookie", status: "Secure" },
      { name: "RBAC Engine", type: "Middleware", status: "Active" },
      { name: "Stock Ledger", type: "Atomic Docs", status: "Audited" },
      { name: "Media Service", type: "Cloudinary", status: "External" },
    ],
  },
  {
    id: "02",
    slug: "edgesync",
    name: "EdgeSync",
    subtitle: "Distributed Systems Prototype",
    tagline:
      "Geographically Separated Edge Content Routing & Failover Architecture",
    description:
      "An experimental exploration of distributed content delivery concepts, health-checked request routing, automated retry/fallback mechanisms, and inter-node security.",
    longDescription:
      "edgeSync explores core distributed systems primitives. Designed to simulate multi-region request handling, it investigates how edge routing nodes evaluate upstream origin latency, manage automated failover under simulated server failures, and authenticate inter-node traffic securely.",
    stack: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "HTTP Routing",
      "Distributed Concepts",
      "REST APIs",
    ],
    github: "https://github.com/dev-naresh608",
    demo: null,
    hasCaseStudy: false,
    caseStudyUrl: null,
    featured: true,
    highlights: [
      {
        title: "Multi-Node Routing",
        detail:
          "Simulates geographical server distribution to route client requests dynamically.",
      },
      {
        title: "Automated Failover",
        detail:
          "Health checking and defensive retry/fallback handling when upstream nodes experience downtime.",
      },
      {
        title: "Inter-Node Security",
        detail:
          "Internal server authorization tokens validating requests between edge components.",
      },
    ],
    architectureNodes: [
      { name: "Client Gateway", type: "Proxy Router", status: "Active" },
      { name: "Edge Node A", type: "Simulated EU", status: "Healthy" },
      { name: "Edge Node B", type: "Simulated US", status: "Fallback" },
      { name: "Health Checker", type: "Heartbeat", status: "Polling" },
    ],
  },
  {
    id: "03",
    slug: "novexa",
    name: "Novexa",
    subtitle: "Multi-Vendor Commerce Engine",
    tagline:
      "Multi-Role E-Commerce Platform for Customers, Sellers, and Drivers",
    description:
      "A comprehensive commerce platform handling multi-domain business workflows including vendor product management, cart calculations, order state transitions, and role-specific UI workflows.",
    longDescription:
      "Novexa was built to handle complex multi-actor commerce operations. It unifies distinct workflows for Customers (browsing, cart, orders), Sellers (inventory management, store metrics), Drivers (fulfillment tracking), and Admins (system moderation) backed by a relational MongoDB schema structure.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "JWT",
    ],
    github: "https://github.com/dev-naresh608",
    demo: null,
    hasCaseStudy: false,
    caseStudyUrl: null,
    featured: true,
    highlights: [
      {
        title: "Quad-Role Workflows",
        detail:
          "Tailored APIs and user interfaces for Customers, Sellers, Drivers, and Administrators.",
      },
      {
        title: "Order Lifecycle Engine",
        detail:
          "Stateful order processing from cart checkout through seller dispatch and driver delivery.",
      },
      {
        title: "Relational Modeling in Document DB",
        detail:
          "Normalized Mongo schema relationships linking stores, products, carts, and user profiles.",
      },
    ],
    architectureNodes: [
      { name: "Customer Portal", type: "React App", status: "Active" },
      { name: "Seller Hub", type: "React App", status: "Active" },
      { name: "Order Pipeline", type: "State Machine", status: "Transaction" },
      { name: "Driver Dispatch", type: "REST API", status: "Active" },
    ],
  },
];
