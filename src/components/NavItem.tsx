import React from "react";

interface NavItemProps {
    href: string;
    text: string;
  }

  const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
    return (
      <a
        className="rounded p-1 px-3 font-semibold hover:bg-sky-700 text-sky-50 transition duration-500"
        href={href}
      >
        {text}
      </a>
    );
  };
  
  export default NavItem;
  