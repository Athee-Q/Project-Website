import clsx from "clsx";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import Link from "next/link";
import React, { ReactNode, forwardRef } from "react";

interface Style {
  solid: string;
  outline: string;
}

interface ButtonProps {
  variant?: keyof Style; // Use keyof Style to specify allowed variants
  className?: string;
  href?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const style = {
  solid:
    "upprercase items-center justify-center rounded-lg py-2 px-4 text-[16px] font-semibold bg-gradient-to-r from-red-500 to-amber-500 text-gray-100 hover:outline hover:outline-red-400",
  outline:
    "uppercase items-center justify-center rounded-lg py-2 px-4 text-[16px] font-semibold outline outline-gray-500 text-gray-500 hover:bg-black hover:text-gray-50",
};
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "solid", className, children, type, href, onClick },
  ref
) {
  className = clsx(
    style[variant],
    className
  );
  return href ? (
    <Link href={href} className={className} onClick={onClick}>{children}</Link>
  ) : (
    <button ref={ref} className={className} type={type} onClick={onClick}>{children}</button>
  );
});

export default Button;
