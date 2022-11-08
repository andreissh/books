import React from "react";

type SelectProps = {
  onSelectChange: (arg: string) => void;
  options: string[];
};

const Select: React.FC<SelectProps> = ({ onSelectChange, options }) => {
  return (
    <>
      <select
        className="basis-2/3 rounded focus:outline-none cursor-pointer"
        onChange={(e) => onSelectChange(e.target.value)}
      >
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </>
  );
};

export default Select;
