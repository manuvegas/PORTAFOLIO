import React from "react";

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src="../imgs/TRAVIS.png"
            alt="Manu Vegas"
            className="rounded-lg h-full object-cover"
          />
        </div>
        <div>
          <p className="text-md mb-4 text-pretty">
            Me llamo Emanuel.
            <b>Tengo 20 años y nací en Buenos Aires, Argentina.</b> Comencé en
            la programación en la UTN, especialmente interesado en el   
            <span className="text-sky-700 font-semibold mx-1">
              Desarrollo Web Full Stack Developer
            </span>
            lo que me dio algunos conocimientos de <b>Back End</b>. Sin embargo,
            decidí seguir el camino del <b>Front End</b>, fascinado por la
            creación de experiencias visuales cautivadoras en la web.
          </p>
          <p className="text-md text-pretty">
            Cuando no estoy codeando, suelo tocar la guitarra o jugar
            videojuegos, actividades que me ayudan a desconectar y a encontrar
            paz en medio de la rutina diaria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
