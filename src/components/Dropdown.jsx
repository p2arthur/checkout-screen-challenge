import { useState, useEffect, useRef } from "react";

import Panel from "./Panel";
import { FiChevronDown } from "react-icons/fi";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  //(Checking click location)
  //1 - Define a reference to the main div of the Dropdown component
  const refDiv = useRef();

  //2 - useEffect to create an eventHandler for when the user clicks outside of the Refered element (Dropdown)
  useEffect(() => {
    //3 - Define an eventHandler when the component is first rendered to check if the click happened inside or outside of the referred element
    const documentClickHandler = (event) => {
      if (!refDiv.current.contains(event.target)) setIsOpen(false);
    };

    //4 - Add an eventlistener to the document element whenever the component gets first rendered
    document.addEventListener("click", documentClickHandler);
    //5 - Define a cleanup function to remove the event listener in case the component is deleted
    return () => document.removeEventListener("click", documentClickHandler);
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  const renderedOption = options.map((option) => {
    return (
      <Panel
        key={option.value}
        onClick={() => handleOptionClick(option.value)}
        className=" p-3 hover:bg-sky-600 border-b-2 border-sky-700"
      >
        {option.label}
      </Panel>
    );
  });

  return (
    <div ref={refDiv} className="relative w-1/3 justify-between content-center">
      <Panel onClick={handleClick} className="flex justify-between">
        {value ? value : "Select"} <FiChevronDown />
      </Panel>
      {isOpen && (
        <div className="w-full absolute top-full">{renderedOption}</div>
      )}
    </div>
  );
}

export default Dropdown;
