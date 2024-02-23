import React from "react";
import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";
import Instagram from "../Icons/Instagram";

const Contacto = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-bold underline">Puedes contactarme conmigo por:</h3>
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
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="rounded-full border border-white/10 flex justify-center items-center py-1 px-2  md:py-2 md:px-4 bg-white/5 text-xs md:text-base hover:scale-110 hover:bg-white/10 transition"
          >
            <Instagram className={"size-4 lg:size-6 me-2"} />
            Instagram
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Contacto;
