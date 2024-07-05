import React from "react";

interface ButtonProps {
  text: string;
  className: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <div
      className={`bg-primaryColor px-4 py-2 rounded-md  text-center ${className} `}
    >
      {text}
    </div>
  );
};

export default Button;
