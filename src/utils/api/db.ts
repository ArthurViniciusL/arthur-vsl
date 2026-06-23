const projects = [
    {
        id: 1089729998,
        name: "task-flow-back",
        description: "Back-end REST API do Task Flow, aplicação de gerenciamento de tarefas construída com Java e Spring Boot.",
        github: "https://github.com/ArthurViniciusL/task-flow-back",
        stacks: ["Java", "Spring Boot", "REST API"]
    },
    {
        id: 1090677144,
        name: "task-flow-front",
        description: "Front-end web do Task Flow, aplicação de gerenciamento de tarefas construída com TypeScript e React.",
        github: "https://github.com/ArthurViniciusL/task-flow-front",
        stacks: ["TypeScript", "React", "Frontend"]
    },
    {
        id: 723524777,
        name: "config-my-debian",
        description: "Conjunto de scripts Shell para automação e configuração do ambiente Debian/Linux.",
        github: "https://github.com/ArthurViniciusL/config-my-debian",
        stacks: ["Shell", "Linux", "Debian", "Automação"]
    },
    {
        id: 826852439,
        name: "arthur-vsl",
        description: "Site pessoal e portfólio construído com React, TypeScript, Vite e TailwindCSS.",
        github: "https://github.com/ArthurViniciusL/arthur-vsl",
        stacks: ["TypeScript", "React", "Vite", "TailwindCSS", "TanStack Router"]
    },
    {
        id: 1013967600,
        name: "products-api",
        description: "API REST de produtos com modelagem complexa, DTOs, validações, JPA/Hibernate e banco relacional. Construída com Spring Boot 3, Lombok e MapStruct.",
        github: "https://github.com/ArthurViniciusL/products-api",
        stacks: ["Java", "Spring Boot", "JPA", "Hibernate", "Lombok", "MapStruct", "REST API"]
    },
    {
        id: 1012175555,
        name: "todo-api",
        description: "Projeto de estudo focado em Spring Boot: conceitos, boas práticas e funcionalidades do framework aplicadas a uma API de tarefas (To-Do).",
        github: "https://github.com/ArthurViniciusL/todo-api",
        stacks: ["Java", "Spring Boot", "REST API"]
    },
    {
        id: 632620847,
        name: "arthurviniciusl",
        description: "Repositório de perfil do GitHub com README de apresentação profissional.",
        github: "https://github.com/ArthurViniciusL/arthurviniciusl",
        stacks: ["Markdown"]
    },
    {
        id: 871252720,
        name: "art-css",
        description: "Coleção pessoal de classes CSS reunindo padrões de design reutilizáveis para projetos front-end.",
        github: "https://github.com/ArthurViniciusL/art-css",
        stacks: ["CSS", "Design System"]
    },
    {
        id: 991706155,
        name: "art-and-may",
        description: "Aplicação web interativa criada como presente de Dia dos Namorados, construída com React e TypeScript.",
        github: "https://github.com/ArthurViniciusL/art-and-may",
        stacks: ["TypeScript", "React", "Frontend"]
    },
    {
        id: 983609663,
        name: "bug-report",
        description: "Sistema de reporte de bugs desenvolvido com Vue.js para a disciplina de Programação Web.",
        github: "https://github.com/ArthurViniciusL/bug-report",
        stacks: ["Vue.js", "JavaScript", "Frontend"]
    },
    {
        id: 901612683,
        name: "munin-app",
        description: "Aplicação interna de compartilhamento de imagens para o MAC Museum Store, construída com React e TypeScript.",
        github: "https://github.com/ArthurViniciusL/munin-app",
        stacks: ["TypeScript", "React", "Frontend"]
    },
    {
        id: 964649693,
        name: "stripe-api-p1",
        description: "Projeto acadêmico de integração com a API do Stripe para a disciplina de Tópicos Avançados em Programação.",
        github: "https://github.com/ArthurViniciusL/stripe-api-p1",
        stacks: ["Stripe API", "REST API"]
    },
    {
        id: 807775479,
        name: "EVE",
        description: "Gerenciador de arquivos baseado em nuvem com Docker, desenvolvido para a disciplina de Desenvolvimento de Sistemas de Informação.",
        github: "https://github.com/ArthurViniciusL/EVE",
        stacks: ["JavaScript", "Docker", "Cloud"]
    },
    {
        id: 864620958,
        name: "Gerencia-de-BD",
        description: "Resumo do conteúdo prático da disciplina de MongoDB: consultas, agregações e modelagem de dados NoSQL.",
        github: "https://github.com/ArthurViniciusL/Gerencia-de-BD",
        stacks: ["MongoDB", "NoSQL", "Database"]
    },
    {
        id: 878016591,
        name: "monitoria-front-end-2024",
        description: "Material de apoio para a monitoria da disciplina de Desenvolvimento Web e Front-End (2024).",
        github: "https://github.com/ArthurViniciusL/monitoria-front-end-2024",
        stacks: ["HTML", "CSS", "JavaScript", "Frontend", "Educação"]
    },
    {
        id: 845282393,
        name: "improve-next-app",
        description: "Script Shell para automatizar etapas de configuração em projetos Next.js no Linux.",
        github: "https://github.com/ArthurViniciusL/improve-next-app",
        stacks: ["Shell", "Next.js", "Linux", "Automação"]
    },
    {
        id: 860686550,
        name: "BASIC-GIT-AND-GITHUB-GUIDE",
        description: "Material didático sobre Git e GitHub para o curso de Front-End: comandos essenciais, fluxos de trabalho e boas práticas.",
        github: "https://github.com/ArthurViniciusL/BASIC-GIT-AND-GITHUB-GUIDE",
        stacks: ["Git", "GitHub", "Educação"]
    },
    {
        id: 830603469,
        name: "User-adm",
        description: "Painel administrativo de usuários com operações CRUD, desenvolvido como teste técnico para a Reliance.",
        github: "https://github.com/ArthurViniciusL/User-adm",
        stacks: ["TypeScript", "React", "CRUD", "Admin Panel"]
    },
    {
        id: 529893080,
        name: "arthur-vs-lucena",
        description: "Versão anterior do site pessoal, construída com HTML, CSS e JavaScript.",
        github: "https://github.com/ArthurViniciusL/arthur-vs-lucena",
        stacks: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 767047952,
        name: "FACULDADE-RESUMOS",
        description: "Coleção de resumos das disciplinas da faculdade organizados por período e matéria.",
        github: "https://github.com/ArthurViniciusL/FACULDADE-RESUMOS",
        stacks: ["Shell", "Markdown", "Educação"]
    },
    {
        id: 797907713,
        name: "REACT-JS-CONTEUDOS",
        description: "Anotações e material de estudo sobre React.js: conceitos fundamentais, hooks, estado e ciclo de vida.",
        github: "https://github.com/ArthurViniciusL/REACT-JS-CONTEUDOS",
        stacks: ["React", "JavaScript", "Educação"]
    },
    {
        id: 797799237,
        name: "REACT-CARDS-VIEW",
        description: "Projeto de visualização em cards construído com React para praticar componentização, props e estado.",
        github: "https://github.com/ArthurViniciusL/REACT-CARDS-VIEW",
        stacks: ["React", "JavaScript", "Frontend"]
    },
    {
        id: 781128052,
        name: "Sweet-Home-Firefox",
        description: "Página inicial personalizada para o Firefox, construída com React como parte do ciclo de aprendizado da biblioteca.",
        github: "https://github.com/ArthurViniciusL/Sweet-Home-Firefox",
        stacks: ["React", "JavaScript", "Firefox", "Frontend"]
    },
    {
        id: 751510510,
        name: "CRUD-ANGULAR",
        description: "Sistema CRUD construído com Angular 12 e JSON Server como back-end simulado, desenvolvido para prática dos fundamentos do framework.",
        github: "https://github.com/ArthurViniciusL/CRUD-ANGULAR",
        stacks: ["Angular", "TypeScript", "JSON Server", "CRUD"]
    },
    {
        id: 733561874,
        name: "TYPESCRIPT-ESTUDOS",
        description: "Coletânea de anotações e exercícios do aprendizado de TypeScript: tipos, interfaces, generics e utilitários.",
        github: "https://github.com/ArthurViniciusL/TYPESCRIPT-ESTUDOS",
        stacks: ["TypeScript", "Educação"]
    },
    {
        id: 710814004,
        name: "write-me-app",
        description: "Aplicação de chat em tempo real para a disciplina de Sistemas Distribuídos, implementada em Java.",
        github: "https://github.com/ArthurViniciusL/write-me-app",
        stacks: ["Java", "Chat", "Sistemas Distribuídos"]
    },
    {
        id: 616506375,
        name: "DESIGN-PATTERNS-JAVA",
        description: "Demonstração prática dos principais padrões de projeto (Design Patterns) implementados em Java.",
        github: "https://github.com/ArthurViniciusL/DESIGN-PATTERNS-JAVA",
        stacks: ["Java", "Design Patterns", "Educação"]
    },
    {
        id: 510453880,
        name: "crud-python",
        description: "Sistema CRUD em Python para gerenciamento de notas escolares com operações de criação, leitura, atualização e remoção.",
        github: "https://github.com/ArthurViniciusL/crud-python",
        stacks: ["Python", "CRUD"]
    },
    {
        id: 591015189,
        name: "JAVA",
        description: "Material completo de estudos em Java: fundamentos da linguagem, orientação a objetos, coleções e APIs.",
        github: "https://github.com/ArthurViniciusL/JAVA",
        stacks: ["Java", "Educação"]
    },
    {
        id: 589701646,
        name: "FRONT-END-PROJECTS",
        description: "Projetos simples para prática da tríade Front-End: HTML, CSS e JavaScript puros.",
        github: "https://github.com/ArthurViniciusL/FRONT-END-PROJECTS",
        stacks: ["HTML", "CSS", "JavaScript", "Frontend"]
    },
    {
        id: 589711207,
        name: "PYTHON",
        description: "Conjunto de exercícios resolvidos para prática da linguagem Python: estruturas de dados, funções e módulos.",
        github: "https://github.com/ArthurViniciusL/PYTHON",
        stacks: ["Python", "Educação"]
    },
    {
        id: 589711564,
        name: "C-LANGUAGE",
        description: "Exercícios de introdução à linguagem C: ponteiros, alocação dinâmica, estruturas e algoritmos básicos.",
        github: "https://github.com/ArthurViniciusL/C-LANGUAGE",
        stacks: ["C", "Educação"]
    },
    {
        id: 515791373,
        name: "JAVASCRIPT",
        description: "Exercícios e anotações do aprendizado de JavaScript: ES6+, manipulação do DOM e programação assíncrona.",
        github: "https://github.com/ArthurViniciusL/JAVASCRIPT",
        stacks: ["JavaScript", "Educação"]
    },
    {
        id: 452427838,
        name: "HTML-CSS",
        description: "Exercícios práticos de HTML5 e CSS3: semântica, layouts responsivos e estilização moderna.",
        github: "https://github.com/ArthurViniciusL/HTML-CSS",
        stacks: ["HTML", "CSS", "Educação"]
    },
    {
        id: 540621583,
        name: "processos-projeto-so",
        description: "Projeto acadêmico sobre processos e threads em Java para a disciplina de Sistemas Operacionais.",
        github: "https://github.com/ArthurViniciusL/processos-projeto-so",
        stacks: ["Java", "Sistemas Operacionais"]
    },
    {
        id: 533046375,
        name: "copiador-de-arquivos",
        description: "Implementação de cópia de arquivos utilizando chamadas de sistema e threads em Java, com benchmark de desempenho em 10 rodadas para a disciplina de Sistemas Operacionais.",
        github: "https://github.com/ArthurViniciusL/copiador-de-arquivos",
        stacks: ["Java", "Threads", "Sistemas Operacionais"]
    }
];

export default projects;
