import { useState } from "react";
import "./NavItems.css";
import { Choices } from "./Choice";

const NavItems = () => {
  const [route, routeSetter] = useState("choice1");
  const [userInput, setUserInput] = useState({
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    choice6: "",
    choice7: [],
    choice8: [],
  });

  const handleRadio = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleCheckbox = (e) => {
    const { name, value } = e.target;
    const isPresent = userInput[name].find((item) => item === value);
    if (isPresent) {
      setUserInput({
        ...userInput,
        [name]: userInput[name].filter((item) => item !== value),
      });
    } else {
      setUserInput({ ...userInput, [name]: [...userInput[name], value] });
    }
  };
  function handleAdd() {
    console.log(userInput);
  }

  return (
    <>
      <div className="navContainer">
        {Choices.map((item) => {
          return (
            <a
              className="navBarItem"
              href={"#" + item.choiceNo}
              style={{
                color: `${route === item.choiceNo ? "#000" : "#93959f"}`,
              }}
              onClick={() => {
                routeSetter(item.choiceNo);
              }}
              key={item.choiceNo}
            >
              {item.choice}
            </a>
          );
        })}
      </div>
      <div className="navItems">
        {Choices.map((item) => {
          return (
            <div id={item.choiceNo} key={item.choiceNo}>
              <p className="choiceHeading">{item.choice}</p>

              {item.options.map((option) => {
                return (
                  <div className="options" key={option}>
                    <input
                      type={item.optionsType === "Radio" ? "Radio" : "Checkbox"}
                      className="inputRadio"
                      name={item.choiceNo}
                      onChange={
                        item.optionsType === "Radio"
                          ? handleRadio
                          : handleCheckbox
                      }
                      value={option}
                    />
                    <label className="itemLabel" htmlFor="choice1">
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="modalBottom">
        <div className="totalItem">
          <span>Total: Rs.371/-</span>
          <span onClick={handleAdd}>ADD ITEM</span>
        </div>
      </div>
    </>
  );
};

export default NavItems;
