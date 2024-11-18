import React from "react";
import Accordion from "./Accordion"; // Import the Accordion component

const AccordionList = () => {
  const data = [
    {
      title: "01 Consultation",
      // backgroundC : customGreen,
      content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "02 Research and Strategy Development",
      content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    
  ];

  return (
    <div className="container max-w mx-auto mt-10">
      {data.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default AccordionList;
