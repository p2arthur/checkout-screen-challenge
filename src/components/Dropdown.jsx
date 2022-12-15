import { useState } from "react";

import Panel from "./Panel";
import { FiChevronDown } from "react-icons/fi";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(true);

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
    <div className="relative w-1/3 justify-between content-center">
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
