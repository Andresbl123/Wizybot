import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    // Base styles
    let variantClasses = "";
    let sizeClasses = "";

    // Variant styles
    switch (variant) {
      case "primary":
        variantClasses =
          "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500";
        break;
      case "secondary":
        variantClasses =
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500";
        break;
      case "outline":
        variantClasses =
          "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-500";
        break;
    }

    // Size styles
    switch (size) {
      case "sm":
        sizeClasses = "text-xs px-2 py-1";
        break;
      case "md":
        sizeClasses = "text-sm px-4 py-2";
        break;
      case "lg":
        sizeClasses = "text-base px-6 py-3";
        break;
    }

    return (
      <button
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses} ${sizeClasses} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
