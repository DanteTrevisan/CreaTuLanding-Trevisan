import React from "react";

interface AuthorProps {
  author: string;
}

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <p className="">
      Sitio creado por{" "}
      <a className="text-pink-400"  target="_blank">
        {author}
      </a>{" "}
      2024.
    </p>
  );
};

export default Author;