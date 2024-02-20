import React from "react";
import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";
import Experiencie from "../Secciones/Experiencie";
import SectionContainer from "../ComponentsUI/SectionContainer";
import Footer from "../Footer/Footer";
import Proyects from "../Secciones/Proyects";


const Home = () => {
  return (
    <>
      <main className="px-4">
        <SectionContainer className={"py-32 pb-32"}>
          <h1 className="text-white text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
            Hey,soy Manu Vegas
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl opacity-80 text-pretty max-w-[740px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            delectus necessitatibus vitae optio. Aut inventore natus laborum
            tenetur vero atque eos ut accusamus. Tempora nulla excepturi quis
            exercitationem magni perspiciatis?
          </h2>
          <nav className="flex gap-4 pt-3 flex-wrap">
            <a
              href=""
              className="rounded-full border border-white/10 flex justify-center items-center py-1 px-2  md:py-2 md:px-4 bg-white/5 text-xs md:text-base hover:scale-110 hover:bg-white/10 transition"
            >
              <GitHub className={"size-4 lg:size-6"}/>
              GitHub
            </a>
            <a
              href=""
              className="rounded-full border border-white/10 flex justify-center items-center py-1 px-2  md:py-2 md:px-4 bg-white/5 text-xs md:text-base hover:scale-110 hover:bg-white/10 transition"
            >
              <LinkedIn className={"size-4 lg:size-6"}/>
              LinkedIn
            </a>
            <a
              href=""
              className="rounded-full border border-white/10 flex justify-center items-center py-1 px-2  md:py-2 md:px-4 bg-white/5 text-xs md:text-base hover:scale-110 hover:bg-white/10 transition"
            >
              <Email className={"size-4 lg:size-6"}/>
              Vegasemanuel@hotmail.com
            </a>
          </nav>
        </SectionContainer>
        <SectionContainer id="experiencia">
          <h2 className="text-3xl font-bold mb-6 flex gpa-x-2 items-center">
            Experiencia Laboral
          </h2>
          <Experiencie />
        </SectionContainer>
        <SectionContainer id="experiencia">
          <h2 className="text-3xl font-bold flex items-center">
            Proyectos
          </h2>
          <Proyects/>
        </SectionContainer>

        <Footer />
      </main>
    </>
  );
};

export default Home;