const Button = ({children = "Click Me",type = "button",variant = "primary",className = "", onClick = () => {}}) => {
  const variants = {
    primary: "bg-purple-400 hover:bg-purple-500 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md transition ${variants[variant]} ${className}`} onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;