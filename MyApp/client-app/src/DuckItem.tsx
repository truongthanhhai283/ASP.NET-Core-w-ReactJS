import React from "react";
import { IDuck } from "./demo";

interface Props {
  duck: IDuck;
}

const DuckItem = ({duck}: Props) => {
  return (
    <>
      <div key={duck.name}>
        <span>{duck.name}</span>
        <button onClick={() => duck.makeSound(duck.name + "quack")}>
          Make Sound
        </button>
      </div>
    </>
  );
};

export default DuckItem;
