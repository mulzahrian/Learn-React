import React from 'react';
    
const Button = ({ className = "bg-yellow-500", children = "Click Me", type = "button" }) => {
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md text-white ${className} hover:bg-purple-900`}
    >
      {children}
    </button>
  );
};

export default Button;