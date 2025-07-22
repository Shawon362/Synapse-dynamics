const CommonButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        bg-gradient-to-r from-cyan-500 to-blue-500 
        text-white font-semibold rounded-lg 
        py-3 px-6
        transition-all duration-300 ease-in-out 
        hover:bg-gradient-to-l hover:shadow-lg hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CommonButton;