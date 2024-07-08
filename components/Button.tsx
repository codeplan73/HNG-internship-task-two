"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
}

const Button = ({ text, link, className }: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(link)}
      className={`w-full text-white py-3 rounded-sm text-sm bg-primaryColor ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
