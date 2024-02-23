import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0  w-full z-10 bg-dark">
      <div className="flex justify-between items-center py-5 max-w-[740px] mx-auto">
        <img
          src="../imgs/TRAVIS.png"
          alt="Foto"
          className="rounded-full w-12 h-12 ml-1 lg:ml-0 sm:w-14 sm:h-14"
        />

        <nav className="flex flex-row gap-x-3 opacity-90 sm:gap-x-7 lg:text-xl me-3 sm:me-7 text-sm sm:text-xl">
          <a href="#Inicio">Inicio</a>
          <a href="#sobreMi">Sobre mi</a>
          <a href="#Proyectos">Proyectos</a>
          <a href="#Contactos">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
