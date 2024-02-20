import React from "react";

const Footer = () => {
  return (
    <footer class="max-w-[740px] rounded-lg shadow mx-auto my-8 flex">
      <div class="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between text-sm sm:text-lg">
        <span class=" text-white sm:text-center">
          © 2024 
          <a href="https://flowbite.com/" class="hover:underline">
            ManuVegas™
          </a>
        </span>
        <ul class="flex flex-wrap items-center mt-3  font-medium text-white sm:mt-0">
          <li>
            <a href="#" class="hover:font-bold me-4 md:me-6">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" class="hover:font-bold me-4 md:me-6">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#" class="hover:font-bold me-4 md:me-6">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#" class="hover:font-bold">
              Contactos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
