import React from "react";

const ExperiencieData = ({date,title,description})=> {
  return (
    <>
      <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-blue-600 "></div>
      <time className="mb-1 text-md font-normal leading-none text-blue-600">
      {date}
      </time>
      <h3 className="text-xl font-semibold text-white mt-2">
      {title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-200 text-pretty">
      {description}
      </p>
    </>
  );
};

export default ExperiencieData;
