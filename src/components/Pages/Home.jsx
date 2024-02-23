import React from "react";
import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";
import Experiencie from "../Secciones/Experiencie";

import Proyects from "../Secciones/Proyects";
import AboutMe from "../Secciones/AboutMe";
import Contacto from "../Secciones/Contacto";

const Home = () => {
  return (
    <>
      <main className="px-4">
        <section className="max-w-[740px] mx-auto py-32 pb-32" id="Inicio">
          <h1 className="text-white text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
            Hey,soy Manu Vegas
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl opacity-80 text-pretty max-w-[740px]">
            Desarrolador Front-End.{" "}
            <span className="text-blue-600 font-semibold">
              De Buenos Aires, Argentina
            </span>
            . Especializado en crear paginas web unicas para tu empresa.
          </h2>
          <nav className="flex gap-4 pt-3 flex-wrap">
            <a
              href="https://github.com/manuvegas"
              target="_blank"
              className="rounded-full border border-white/10 flex justify-center items-center py-1 px-2  md:py-2 md:px-4 bg-white/5 text-xs md:text-base hover:scale-110 hover:bg-white/10 transition"
            >
              <GitHub className={"size-4 lg:size-6 me-2"} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emanuel-vegas-5b946029b/"
              target="_blank"
              className="rounded-full border border-white/10 flex justify-center items-center py-1 px-2  md:py-2 md:px-4 bg-white/5 text-xs md:text-base hover:scale-110 hover:bg-white/10 transition"
            >
              <LinkedIn className={"size-4 lg:size-6 me-2"} />
              LinkedIn
            </a>
            <a
              href="mailto:vegasemanuel@hotmail.com"
              target="_blank"
              className="rounded-full border border-white/10 flex justify-center items-center py-1 px-2  md:py-2 md:px-4 bg-white/5 text-xs md:text-base hover:scale-110 hover:bg-white/10 transition"
            >
              <Email className={"size-4 lg:size-6 me-2"} />
              Vegasemanuel@hotmail.com
            </a>
          </nav>
        </section>
        <section className="max-w-[740px] mx-auto pb-24">
          <h2 className="text-3xl font-bold mb-6 flex gpa-x-2 items-center">
            Experiencia Laboral
          </h2>
          <Experiencie />
        </section>
        <section className="max-w-[740px] mx-auto pb-24" id="Proyectos">
          <h2 className="text-3xl font-bold flex items-center">Proyectos</h2>
          <Proyects />
        </section>
        <section className="max-w-[740px] mx-auto pb-24" id="sobreMi">
          <h2 className="text-3xl font-bold flex items-center">Sobre mi</h2>
          <AboutMe />
        </section>
        <section className="max-w-[740px] mx-auto pb-4" id="Contactos">
          <h2 className="text-3xl font-bold flex items-center">Contactos</h2>
          <Contacto />
        </section>
      </main>
    </>
  );
};

export default Home;
