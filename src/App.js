import { useCallback, useMemo, useState } from "react";
import "./App.css";
import ButtonContainer from "./component/ButtonContainer";
import ModalContainer from "./component/ModalContainer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const buttonDetails = [1, 2, 3, 4, 5];

  const handleSelectItem = useCallback(
    (item = "") => {
      if (item) {
        setSelectedItem(item);
        setIsOpen(true);
      } else {
        setSelectedItem(null);
        setIsOpen(false);
      }
    },
    [setIsOpen, setSelectedItem]
  );

  return (
    <div className="App container">
      <h1>React Modal</h1>
      <div className="d-flex gap-1">
        <ButtonContainer name="Main Button" handleChange={handleSelectItem} />

        {buttonDetails.map((item, i) => (
          <ButtonContainer
            key={item}
            name={`Button ${item}`}
            handleChange={handleSelectItem}
          />
        ))}
      </div>

      <ModalContainer
        key={selectedItem}
        name={`Modal ${selectedItem}`}
        isOpen={isOpen}
        handleChange={handleSelectItem}
      />
    </div>
  );
}

export default App;
