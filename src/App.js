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
      <h1 className="text-center">React Reuseable Modal</h1>
      <section className="main ">
        <div className="left-side  card  p-5">
          <h3 className="">React Single Modal</h3>
          <ButtonContainer name="Main Button" handleChange={handleSelectItem} />
        </div>
        <div className="right-side  card p-5 ">
          <h3 className="text-center">React Multiple Modal</h3>
          <div className="right-side-wrapper">
            {buttonDetails.map((item, i) => (
              <ButtonContainer
                key={item}
                name={`Button ${item}`}
                handleChange={handleSelectItem}
              />
            ))}
          </div>
        </div>
      </section>

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
