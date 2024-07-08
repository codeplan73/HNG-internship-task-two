"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(link)}
      className="w-full text-white py-3 rounded-sm text-sm bg-primaryColor"
    >
      {text}
    </button>
  );
};

export default Button;
