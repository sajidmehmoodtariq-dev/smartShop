import React from "react";

const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 duration-300 py-2.5 px-8 rounded-full relative z-10 font-semibold shadow-sm shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30`}
    >
      {text}
    </button>
  );
};

export default Button;
