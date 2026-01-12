import React from "react";
import '../styles.css/Header.css'

export default function Header () {
    return (
        <header className="header">
            <p className="logo">Gustavo João Cardoso</p>
            <nav>
                <ul className="nav-links">
                    <li><a href="#trajetoria">Minha Trajetória</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}