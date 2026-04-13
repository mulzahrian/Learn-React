const Card = ({ children, className }) => {
  return (
    <div className={`w-full max-w-xs ${className} rounded-2xl shadow-lg p-6`}>
      {children}
    </div>
  );
};

export default Card;