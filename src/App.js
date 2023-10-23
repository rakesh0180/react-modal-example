import { useCallback, useState } from "react";
import "./App.css";
import ButtonContainer from "./component/ButtonContainer";
import ModalContainer from "./component/ModalContainer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState({});
  const [buttonDetails] = useState([1, 2, 3, 4, 5]);

  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeMultiple = useCallback(
    (item, i) => {
      const key = `${item}+${i}`;
      console.log("🚀 ~ file: App.js:80 ~ App ~ key:", key);
      setIsOpen1((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    },
    [setIsOpen1]
  );
  console.log(isOpen1);
  return (
    <div className="App container">
      <h1>React Modal </h1>
      <div className="d-flex gap-1">
        <ButtonContainer name="Main Button" handleChange={handleChange} />

        {buttonDetails.map((item, i) => (
          <>
            <ButtonContainer
              key={i}
              name={`Button ${item}`}
              handleChange={() => {
                handleChangeMultiple(item, i);
              }}
            />
            <ModalContainer
              key={i}
              name={`Modal ${item}`}
              isOpen={isOpen1[`${item}+${i}`]}
              handleChange={() => {
                handleChangeMultiple(item, i);
              }}
            />
          </>
        ))}
      </div>

      <ModalContainer isOpen={isOpen} handleChange={handleChange} />
    </div>
  );
}

export default App;
