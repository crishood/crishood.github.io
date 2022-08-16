import { useState, useEffect } from "react";

const Header = () => {
  const titles = [
    "<Frontend Developer />",
    "<Beatmaker />",
    "<Creator />",
    "<Multimedia Engineer />",
    "<M a g o de los beats />",
    "<Ninja />",
    "<Fullstack Developer />",
    "<Developer />",
  ];
  const [title, setTitle] = useState(titles[0]);
  let index = 2;
  const randomTitle = () => {
    setInterval(function () {
      index = Math.floor(Math.random() * 8);
      setTitle(titles[index]);
    }, 1000);
  };

  useEffect(() => {
    randomTitle();
  }, []);

  return (
    <header>
      <h1 data-text={title} className="hero glitch layers">
        <span>{title}</span>
      </h1>
    </header>
  );
};

export default Header;
