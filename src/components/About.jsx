import React from "react";
import '../styles.css/About.css';
import minhaFoto from '../assets/eu.png';

export default function About() {
return (
    <section className="main-container">
      {/* Criamos esta div para agrupar todo o conteúdo de texto */}
    <div className="content-text">
        <h2>👋 Olá! Sou estudante de Programação</h2>
        <p>
        Sou o <strong>Gustavo João Cardoso</strong>, Desenvolvedor Fullstack em formação, 
        atualmente estudando <strong>React, Node.js e Bancos de Dados</strong>. 
        Focado em criar soluções eficientes e aprender novas tecnologias todos os dias.
        </p>
        
        <div className="btn-section">
        <a href="#projetos" className="btn-project">
            Ver meus projetos
        </a>

        <a href="https://github.com/DevCardosu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github">
            Meu Github
        </a>
        </div>
    </div>

    <div className="content-right">
        <img 
        src={minhaFoto} 
        alt="Foto do Gustavo João Cardoso" 
        className="profile-img" 
        />
    </div>
    </section>
);
}