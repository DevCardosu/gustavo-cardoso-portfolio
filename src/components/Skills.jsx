import React from "react";
import '../styles.css/Skills.css'

export default function Skills() {
    return (
        <section className="skills-section">
    <div className="quote-container">
        <h2>"Transformando a curiosidade em código e soluções reais."</h2>
        <p className="subtitle">Minhas Habilidades: O Conhecimento e a Experiência</p>
    </div>

    <div className="skills-grid">
        <div className="skills-group">
        <h3 className="group-title tech">Habilidades Técnicas:</h3>
        <p>Java, React, Node.js, React Native.</p>
        <p>JavaScript (ES6+), TypeScript, SQL (PostgreSQL).</p>
        <p>HTML5, CSS3, Git, GitHub, NPM.</p>
        </div>

        <div className="skills-group">
        <h3 className="group-title soft">Habilidades Comportamentais:</h3>
        <p><strong>Adaptabilidade:</strong> Transição ágil entre o curso técnico no SENAI (iniciado em 2025) e o inicio de graduação em ADS no ano de 2026.</p>
        <p><strong>Foco em Resultados:</strong> Experiência prática atendendo clientes reais como freelancer para barbearias e lanchonetes.</p>
        <p><strong>Resolução de Problemas:</strong> Capacidade de desenvolver sistemas complexos do zero, como o TechShop MVP.</p>
        </div>
    </div>

    <div className="contact-cta">
        <p>Se quiser saber mais ou tiver uma vaga que combine comigo:</p>
        <a href="https://wa.me/48992045316" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
        Fale comigo no WhatsApp
        </a>
    </div>
    </section>
    )
}