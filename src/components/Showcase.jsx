import { useState } from "react";

const Showcase = () => {
  const [name, setName] = useState("Brad");

  return <h1>Hello {name}</h1>;
};

export default Showcase;
