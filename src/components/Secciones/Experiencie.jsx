import React from "react";
import ExperiencieData from "./ExperiencieData";

const experiencie = [
  {
    date: "Actualmente...",
    title: "Practicando/Estudiando",
    description:
      "¡En mi día a día, me encuentro inmerso en un emocionante viaje de aprendizaje y práctica en el mundo del desarrollo web! Aunque actualmente no estoy trabajando como desarrollador front-end, estoy dedicando mi tiempo y energía a perfeccionar mis habilidades.Mi objetivo es ampliar mi conocimiento y poder prepararme para futura oportunidades y desafios que me permitan ser un desarrolador Front End altamente capacitado y exitoso",
  },
  {
    date: "5 de Enero 2023",
    title: "Catalogo Forest-Text",
    description:
      'El desarrollo del catálogo de ropa "Forest-Tex" es un proyecto en el que implementé un sistema de navegación fluido y una disposición de contenido intuitiva para permitir a los usuarios explorar fácilmente la colección y descubrir los productos que mejor se adapten a su estilo y preferencias.React y Tailwind fueron las herramientas principales que utilicé para construir la estructura, el diseño y la funcionalidad del catálogo.',
  },
];

const Experiencie = () => {
  return (
    <ol className="relative border-s border-blue-300 ml-2">
      {experiencie.map((exp, index) => (
        <li key={index} className="mb-10 ms-4">
          <ExperiencieData {...exp} />
        </li>
      ))}
    </ol>
  );
};

export default Experiencie;
