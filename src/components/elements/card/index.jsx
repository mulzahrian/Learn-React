const Card = ({ children, colors }) => {
  return (
    <div className={`w-full max-w-xs ${colors} rounded-2xl shadow-lg p-6`}>
      {children}
    </div>
  );
};

export default Card;