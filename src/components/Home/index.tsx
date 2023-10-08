import React, { ReactElement, useState, useEffect } from "react";
type Props = {
  children: ReactElement[];
  state: {
    age: number;
    name: string;
  };
};

export default function Home({ children, state }: Props) {
  const [age, setAge] = useState(0);
  const handleClick = () => {
    setAge((prevAge) => prevAge + 1);
  };

  return (
    <div className="home">
      {children.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
      <div>
        <p>{age}</p>
        <button onClick={handleClick}>点击加一</button>
      </div>
    </div>
  );
}
