import React, { useState } from "react";

const Accordion = ({ title, content, backgroundC }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border m-4 p-4 ${backgroundC} rounded-xl border-gray-300`}>
        {isOpen && (
        <div className="px-6 pb-4 text-gray-600">
          <p>{content}</p>
        </div>
      )}
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full py-4 px-6 text-left"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <span className="text-2xl text-gray-500">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      
    </div>
  );
};

export default Accordion;
