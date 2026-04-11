import React from 'react';
    
const Button = ({ variant = "bg-yellow-500", children = "Click Me", type = "button" }) => {
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md text-white ${variant} hover:bg-gray-700`}
    >
      {children}
    </button>
  );
};

export default Button;