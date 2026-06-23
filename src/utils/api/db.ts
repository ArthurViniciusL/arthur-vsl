const projects = [
    {
        id: 1089729998,
        name: "task-flow-back",
        description: "projects.description.task-flow-back",
        github: "https://github.com/ArthurViniciusL/task-flow-back",
        stacks: ["java", "spring boot", "jpa", "swagger", "hibernate", "actuator", "lombok", "rest api", "postgresql"]
    },
    {
        id: 1090677144,
        name: "task-flow-front",
        description: "projects.description.task-flow-front",
        github: "https://github.com/ArthurViniciusL/task-flow-front",
        stacks: ["typescript", "react", "vite", "tailwindcss", "tanstack router", "ai"]
    },
    {
        id: 723524777,
        name: "config-my-debian",
        description: "projects.description.config-my-debian",
        github: "https://github.com/ArthurViniciusL/config-my-debian",
        stacks: ["shell", "linux", "automation"]
    },
    {
        id: 826852439,
        name: "arthur-vsl",
        description: "projects.description.arthur-vsl",
        github: "https://github.com/ArthurViniciusL/arthur-vsl",
        stacks: ["typescript", "react", "vite", "tailwindcss", "tanstack router"]
    },
    {
        id: 1013967600,
        name: "products-api",
        description: "projects.description.products-api",
        github: "https://github.com/ArthurViniciusL/products-api",
        stacks: ["java", "spring boot", "jpa", "swagger", "actuator", "lombok", "rest api", "postgresql", "hibernate"]
    },
    {
        id: 1012175555,
        name: "todo-api",
        description: "projects.description.todo-api",
        github: "https://github.com/ArthurViniciusL/todo-api",
        stacks: ["java", "spring boot", "jpa", "swagger", "actuator", "lombok", "rest api", "postgresql"]
    },
    {
        id: 632620847,
        name: "arthurviniciusl",
        description: "projects.description.arthurviniciusl",
        github: "https://github.com/ArthurViniciusL/arthurviniciusl",
        stacks: ["markdown"]
    },
    {
        id: 871252720,
        name: "art-css",
        description: "projects.description.art-css",
        github: "https://github.com/ArthurViniciusL/art-css",
        stacks: ["css", "design system"]
    },
    {
        id: 991706155,
        name: "art-and-may",
        description: "projects.description.art-and-may",
        github: "https://github.com/ArthurViniciusL/art-and-may",
        stacks: ["typescript", "react", "vite", "tailwindcss"]
    },
    {
        id: 983609663,
        name: "bug-report",
        description: "projects.description.bug-report",
        github: "https://github.com/ArthurViniciusL/bug-report",
        stacks: ["vue.js", "javascript"]
    },
    {
        id: 901612683,
        name: "munin-app",
        description: "projects.description.munin-app",
        github: "https://github.com/ArthurViniciusL/munin-app",
        stacks: ["typescript", "react", "vite", "tailwindcss", "tanstack router"]
    },
    {
        id: 964649693,
        name: "stripe-api-p1",
        description: "projects.description.stripe-api-p1",
        github: "https://github.com/ArthurViniciusL/stripe-api-p1",
        stacks: ["stripe", "rest api"]
    },
    {
        id: 807775479,
        name: "EVE",
        description: "projects.description.EVE",
        github: "https://github.com/ArthurViniciusL/EVE",
        stacks: ["javascript", "docker", "cloud"]
    },
    {
        id: 864620958,
        name: "Gerencia-de-BD",
        description: "projects.description.Gerencia-de-BD",
        github: "https://github.com/ArthurViniciusL/Gerencia-de-BD",
        stacks: ["mongodb", "nosql", "database"]
    },
    {
        id: 878016591,
        name: "monitoria-front-end-2024",
        description: "projects.description.monitoria-front-end-2024",
        github: "https://github.com/ArthurViniciusL/monitoria-front-end-2024",
        stacks: ["html", "css", "javascript"]
    },
    {
        id: 845282393,
        name: "improve-next-app",
        description: "projects.description.improve-next-app",
        github: "https://github.com/ArthurViniciusL/improve-next-app",
        stacks: ["shell", "next.js", "linux", "automação"]
    },
    {
        id: 860686550,
        name: "BASIC-GIT-AND-GITHUB-GUIDE",
        description: "projects.description.BASIC-GIT-AND-GITHUB-GUIDE",
        github: "https://github.com/ArthurViniciusL/BASIC-GIT-AND-GITHUB-GUIDE",
        stacks: ["git", "github"]
    },
    {
        id: 830603469,
        name: "User-adm",
        description: "projects.description.User-adm",
        github: "https://github.com/ArthurViniciusL/User-adm",
        stacks: ["typescript", "react", "vite", "tailwindcss", "tanstack router"]
    },
    {
        id: 529893080,
        name: "arthur-vs-lucena",
        description: "projects.description.arthur-vs-lucena",
        github: "https://github.com/ArthurViniciusL/arthur-vs-lucena",
        stacks: ["html", "css", "javascript"]
    },
    {
        id: 767047952,
        name: "FACULDADE-RESUMOS",
        description: "projects.description.FACULDADE-RESUMOS",
        github: "https://github.com/ArthurViniciusL/FACULDADE-RESUMOS",
        stacks: ["shell", "markdown"]
    },
    {
        id: 797907713,
        name: "REACT-JS-CONTEUDOS",
        description: "projects.description.REACT-JS-CONTEUDOS",
        github: "https://github.com/ArthurViniciusL/REACT-JS-CONTEUDOS",
        stacks: ["react", "javascript"]
    },
    {
        id: 797799237,
        name: "REACT-CARDS-VIEW",
        description: "projects.description.REACT-CARDS-VIEW",
        github: "https://github.com/ArthurViniciusL/REACT-CARDS-VIEW",
        stacks: ["react", "javascript"]
    },
    {
        id: 781128052,
        name: "Sweet-Home-Firefox",
        description: "projects.description.Sweet-Home-Firefox",
        github: "https://github.com/ArthurViniciusL/Sweet-Home-Firefox",
        stacks: ["html", "css",  "javascript"]
    },
    {
        id: 751510510,
        name: "CRUD-ANGULAR",
        description: "projects.description.CRUD-ANGULAR",
        github: "https://github.com/ArthurViniciusL/CRUD-ANGULAR",
        stacks: ["angular", "typescript", "json server"]
    },
    {
        id: 733561874,
        name: "TYPESCRIPT-ESTUDOS",
        description: "projects.description.TYPESCRIPT-ESTUDOS",
        github: "https://github.com/ArthurViniciusL/TYPESCRIPT-ESTUDOS",
        stacks: ["typescript"]
    },
    {
        id: 710814004,
        name: "write-me-app",
        description: "projects.description.write-me-app",
        github: "https://github.com/ArthurViniciusL/write-me-app",
        stacks: ["java", "spring boot", "jpa", "swagger", "actuator", "lombok", "rest api", "postgresql", "websocket", "html", "css", "javascript"]
    },
    {
        id: 616506375,
        name: "DESIGN-PATTERNS-JAVA",
        description: "projects.description.DESIGN-PATTERNS-JAVA",
        github: "https://github.com/ArthurViniciusL/DESIGN-PATTERNS-JAVA",
        stacks: ["java", "spring boot", "jpa", "swagger", "actuator", "lombok", "rest api", "postgresql", "design patterns"]
    },
    {
        id: 510453880,
        name: "crud-python",
        description: "projects.description.crud-python",
        github: "https://github.com/ArthurViniciusL/crud-python",
        stacks: ["python"]
    },
    {
        id: 591015189,
        name: "JAVA",
        description: "projects.description.JAVA",
        github: "https://github.com/ArthurViniciusL/JAVA",
        stacks: ["java", "spring boot", "jpa", "swagger", "actuator", "lombok", "rest api", "postgresql"]
    },
    {
        id: 589701646,
        name: "FRONT-END-PROJECTS",
        description: "projects.description.FRONT-END-PROJECTS",
        github: "https://github.com/ArthurViniciusL/FRONT-END-PROJECTS",
        stacks: ["html", "css", "javascript"]
    },
    {
        id: 589711207,
        name: "PYTHON",
        description: "projects.description.PYTHON",
        github: "https://github.com/ArthurViniciusL/PYTHON",
        stacks: ["python"]
    },
    {
        id: 589711564,
        name: "C-LANGUAGE",
        description: "projects.description.C-LANGUAGE",
        github: "https://github.com/ArthurViniciusL/C-LANGUAGE",
        stacks: ["c"]
    },
    {
        id: 515791373,
        name: "JAVASCRIPT",
        description: "projects.description.JAVASCRIPT",
        github: "https://github.com/ArthurViniciusL/JAVASCRIPT",
        stacks: ["javascript"]
    },
    {
        id: 452427838,
        name: "HTML-and-CSS",
        description: "projects.description.HTML-and-CSS",
        github: "https://github.com/ArthurViniciusL/HTML-CSS",
        stacks: ["html", "css"]
    },
    {
        id: 540621583,
        name: "processos-projeto-so",
        description: "projects.description.processos-projeto-so",
        github: "https://github.com/ArthurViniciusL/processos-projeto-so",
        stacks: ["java", "spring boot", "jpa", "swagger", "actuator", "lombok", "rest api", "postgresql", "OS"]
    },
    {
        id: 533046375,
        name: "copiador-de-arquivos",
        description: "projects.description.copiador-de-arquivos",
        github: "https://github.com/ArthurViniciusL/copiador-de-arquivos",
        stacks: ["java", "spring boot", "jpa", "swagger", "actuator", "lombok", "rest api", "postgresql", "threads", "OS"]
    }
];

export default projects;
