import React from "react";
import '../styles.css/Projects.css'

export default function Projects() {
return (
    <section id="projetos" className="projects-section">
        <h2>E-commerce MVP</h2>
        <p>O TechShop MVP é um e-commerce full-stack desenvolvido com Node.js, Express e PostgreSQL para consolidar estudos em ADS. Focado em segurança, utiliza JWT, Bcryptjs para senhas e cookies HTTP-only para garantir uma autenticação robusta. Implementa Controle de Acesso (RBAC), distinguindo permissões entre Clientes e Vendedores através de middlewares customizados. Possui CRUD completo de produtos com sistema de upload de imagens integrado via Multer e armazenamento local. Oferece busca dinâmica no catálogo utilizando filtros ILIKE para consultas eficientes em tempo real no banco de dados. A interface é responsiva e minimalista, utilizando EJS para renderização dinâmica e lógica de sessão global otimizada. O projeto demonstra competências técnicas essenciais para a busca de uma vaga de estágio em desenvolvimento Full-Stack.</p>
        <a href="https://github.com/DevCardosu/ecommerce-nodejs-postgresql-auth.git">Repositório</a>

        <h2>Gerador de senhas em Javascript</h2>
        <p>Aplicação web em JavaScript puro focada em lógica de programação e manipulação do DOM.
        Gera senhas seguras e aleatórias, permitindo que o usuário personalize o tamanho desejado.
        Construído com HTML5 e CSS3, apresentando uma interface responsiva e minimalista.
        Pratica fundamentos essenciais para quem busca uma vaga de estágio em programação.
        Demonstra habilidade em tratar entradas de usuário e atualizar a interface em tempo real.
        Consolida a base técnica necessária para sua evolução como Desenvolvedor Full-Stack.</p>
        <a href="https://github.com/DevCardosu/password-generator.git">Repositório</a>

        <h2>Jogo de usuários em Typescript</h2>
        <p>Sistema de gerenciamento desenvolvido em TypeScript com foco em tipagem estática e organização de código.
        Implementa fluxos de jogo como início de partidas, estados de vitória de personagens e ganho de coins.
        Conta com lógica de permissões onde usuários podem ser promovidos a administradores ou banidos do sistema.
        Utiliza Node.js para estruturar a lógica de backend, aplicando interfaces para garantir a segurança dos dados.
        Consolida o uso de tecnologias modernas para criar sistemas escaláveis e fáceis de manter.
        Demonstra domínio em lógica de programação e no tratamento de diferentes perfis de usuários em uma aplicação.</p>

        <h2>Gerenciador de tarefas em React</h2>
        <p>Aplicação de gerenciamento de tarefas desenvolvida com React, focada em componentização e gerenciamento de estado.
        Permite adicionar, listar e remover tarefas através de uma interface simples e intuitiva.
        Utiliza JavaScript (ES6+), HTML5 e CSS3 para garantir uma experiência de usuário moderna e fluida.
        Pratica conceitos fundamentais como hooks e props, essenciais para a organização de código no ecossistema React.
        Demonstra competência técnica para uma vaga de estágio em programação, lidando com dados dinâmicos no front-end.
        Reforça sua base em desenvolvimento full-stack, complementando seus projetos de backend e banco de dados.</p>

        <h2>Aplicativo de Receitas em React Native</h2>
        <p>Aplicativo de receitas desenvolvido com React Native, focado em desenvolvimento mobile multiplataforma e performance.
        Permite a organização e visualização de receitas através de uma interface intuitiva e otimizada para o usuário.
        Explora conceitos essenciais de navegação, hooks do React e estilização flexível para diferentes tamanhos de tela.
        Projeto desenvolvido para aplicar os conhecimentos adquiridos no curso de Análise e Desenvolvimento de Sistemas em dispositivos móveis.
        Demonstra versatilidade técnica para vagas de estágio, comprovando competência além do desenvolvimento web.
        Reforça o perfil de Desenvolvedor Full-Stack capaz de atuar em múltiplos ecossistemas de tecnologia.</p>

        <h2>Cátalogo de Cortes para barbearia</h2>
        <p>Website institucional e catálogo de serviços desenvolvido como freelancer para uma barbearia local.
        Apresenta um catálogo visual de cortes, focado em atrair novos clientes através de uma interface moderna e intuitiva.
        Desenvolvido com HTML5, CSS3 e JavaScript, garantindo uma navegação fluida e excelente performance.
        Possui design totalmente responsivo, permitindo que os clientes acessem os modelos de corte e contatos diretamente pelo celular.
        Projeto entregue para um cliente real, demonstrando responsabilidade profissional e capacidade de transformar requisitos de negócio em soluções técnicas.
        Comprova experiência prática no mercado, sendo um diferencial estratégico na busca por uma vaga de estágio em programação.</p>
    </section>
);
}
