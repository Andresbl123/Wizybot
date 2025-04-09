import { JSX } from "react";

export interface HeaderProps {
  user?: JSX.Element | JSX.Element[];
  estatus: string;
  title: string;
}

export function Header(props: HeaderProps) {
  const { user, estatus, title } = props;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div className="flex items-center space-x-2">
          {user}
          <span className={`text-sm ${estatus}`}>{estatus}</span>
        </div>
      </div>
    </header>
  );
}
