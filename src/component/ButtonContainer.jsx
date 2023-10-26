import React, { useRef } from "react";
import { Button } from "reactstrap";

const ButtonContainer = React.memo(({ name = "", handleChange }) => {
  const renders = useRef(0);
  console.log("renders ", renders.current++);

  return (
    <Button
      color="primary"
      onClick={() => {
        handleChange(name);
      }}
    >
      Click {name}
    </Button>
  );
});

export default ButtonContainer;
