import React from "react";
import Child from "./Child";

const Button = () => {
  return (
    <div>
      <Button>
        <Child />
      </Button>
    </div>
  );
};

export default Button;
