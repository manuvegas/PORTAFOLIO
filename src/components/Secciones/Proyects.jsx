import React from "react";
import ReactJs from "../Icons/ReactJs";
import Js from "../Icons/Js";
import Tailwind from "../Icons/Tailwind";
import Html from "../Icons/Html";

const Icons = {
  REACT: {
    icon: <ReactJs className={"size-6"} />,
    name: "React",
    class: "bg-sky-700 text-black font-semibold",
  },
  JS: {
    icon: <Js className={"size-6"} />,
    name: "JavaScript",
    class: "bg-yellow-500 text-black font-semibold",
  },
  TAILWIND: {
    icon: <Tailwind className={"size-6"} />,
    name: "Tailwindcss",
    class: "bg-sky-500 text-black font-semibold",
  },
  HTML: {
    icon: <Html className={"size-6"} />,
    name: "HTML5",
    class: "bg-orange-600 text-black font-semibold",
  },
};

const proyectos = [
  {
    title: "Catalogo de ropa -Forest Text",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque quo at voluptate consectetur cupiditate, ipsa culpa doloremque, tempora sapiente dolor alias adipisci consequatur? Doloremque sunt molestiae quaerat eius nihil.",
    link: "#",
    github: "#",
    image: "../Proyects/proyect1.jpg",
    tags: ["REACT", "JS", "TAILWIND", "HTML"],
  },
  {
    title: "E-commers(Emprendimiento personal)",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque quo at voluptate consectetur cupiditate, ipsa culpa doloremque, tempora sapiente dolor alias adipisci consequatur? Doloremque sunt molestiae quaerat eius nihil.",
    link: "#",
    github: "#",
    image: "../Proyects/proyect1.jpg",
    tags: ["REACT", "JS", "TAILWIND", "HTML"],
  },
];

const Proyectos = () => {
  return (
    <>
      {proyectos.map(({ image, title, description, tags }, index) => (
        <article key={index} className="mt-5">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">{title}</h3>
          <p className="text-md sm:text-lg mb-4 text-pretty">{description}</p>
          <ul className="flex flex-row gap-x-4 mb-5 flex-wrap gap-3">
            {Array.isArray(tags) &&
              tags.map((tagName, index) => {
                const icon = Icons[tagName]; // Obtener el objeto de icono correspondiente
                if (icon) {
                  return (
                    <li key={index}>
                      <span
                        className={`flex gap-x-1 rounded-full text-sm items-center py-1 px-2 ${icon.class}`}
                      >
                        {icon.icon} {/* Renderizar el icono */}
                        {icon.name} {/* Mostrar el nombre del icono */}
                      </span>
                    </li>
                  );
                }
              })}
          </ul>
          <img
            src={image}
            alt={`imagen del proyecto ${title}`}
            className="rounded shadow-2xl shadow-white/10"
          />
        </article>
      ))}
    </>
  );
};

export default Proyectos;
