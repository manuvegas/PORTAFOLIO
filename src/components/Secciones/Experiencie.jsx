import React from "react";
import ExperiencieData from "./ExperiencieData";

const experiencie = [
  {
    date: "Actualmente...",
    title:"Practicando/Estudiando",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque quo at voluptate consectetur cupiditate, ipsa culpa doloremque, tempora sapiente dolor alias adipisci consequatur? Doloremque sunt molestiae quaerat eius nihil.",
  }

];

const Experiencie = () => {
  return (
    <ol className="relative border-s border-blue-300 ml-2">
      {experiencie.map((exp,index) => (
        <li key={index} className="mb-10 ms-4">
          <ExperiencieData {...exp} />
        </li>
      ))}
    </ol>
  );
};

export default Experiencie;
