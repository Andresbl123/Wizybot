import { type InputHTMLAttributes, forwardRef } from "react";

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-black text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Textfield.displayName = "Textfield";

export { Textfield };
