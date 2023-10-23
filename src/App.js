import { useState } from "react";
import { Button } from "reactstrap";
import "./App.css";
import ModalContainer from "./component/ModalContainer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="App container">
      <h1>React Modal </h1>
      <Button color="primary" onClick={handleChange}>
        Click Me
      </Button>

      <ModalContainer isOpen={isOpen} handleChange={handleChange} />
    </div>
  );
}

export default App;
