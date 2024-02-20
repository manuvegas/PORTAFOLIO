import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-10  max-w-[740px] mx-auto">
      <img
        src="../imgs/TRAVIS.png"
        alt="Foto"
        className="rounded-full w-10 h-10 ml-1 lg:ml-0"
      />

      <nav className="flex flex-row gap-x-3 opacity-90 sm:gap-x-7 lg:text-xl me-3 sm:me-7 text-sm sm:text-xl">
        <Link to="/">Inicio</Link>
        <Link to="/#experiencia">Sobre mi</Link>
        <Link to="Proyectos">Proyectos</Link>
        <Link to="Contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
