import React from "react";
import { Button } from "reactstrap";

const ButtonContainer = ({ name = "", handleChange }) => {
  console.log({ name });
  return (
    <Button color="primary" onClick={handleChange}>
      Click {name}
    </Button>
  );
};

export default ButtonContainer;
