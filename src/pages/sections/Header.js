import { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("<Frontend Developer />");
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
