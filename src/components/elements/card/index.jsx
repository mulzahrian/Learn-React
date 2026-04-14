const Card = ({
  children,
  className = "",
  title,
  footer,
}) => {
  return (
    <div className={`w-full max-w-xs bg-white rounded-2xl shadow-sm p-5 ${className}`}>
      {title && (
        <h2 className="text-gray-500 text-sm mb-2">{title}</h2>
      )}
      <div>{children}</div>
      {footer && (
        <div className="mt-4 pt-3 border-t text-sm text-gray-500">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;