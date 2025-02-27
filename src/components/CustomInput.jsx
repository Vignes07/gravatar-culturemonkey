import React from "react";

function CustomInput({
  type,
  id,
  name,
  required,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-2"
      placeholder={placeholder}
    />
  );
}

export default CustomInput;
