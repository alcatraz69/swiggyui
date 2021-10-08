import { useState, useEffect } from "react";
import "./NavItems.css";
import { Choices } from "./Choice";

const NavItems = () => {
  const [route, routeSetter] = useState("choice1");
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useState({
    choice1: "Mexican Patty",
    choice2: "Chatpata Chana",
    choice3: "",
    choice4: "",
    choice5: "",
    choice6: "",
    choice7: [],
    choice8: [],
  });

  useEffect(() => {
    if (error === true) {
      debugger;
      (function () {
        setTimeout(() => {
          setError(false);
        }, 2000);
      })();
    }
  }, [error]);

  const handleRadio = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { name, value } = e.target;
    const isPresent = userInput[name].find((item) => item === value);
    let keys = Object.keys(userInput);
    if (isPresent) {
      setUserInput({
        ...userInput,
        [name]: userInput[name].filter((item) => item !== value),
      });
    } else {
      if (name === keys[6]) {
        if (userInput.choice7.length >= 3) {
          console.log(userInput.choice7);
          setError(true);
          return;
        } else {
          setUserInput({ ...userInput, [name]: [...userInput[name], value] });
        }
      } else {
        setUserInput({ ...userInput, [name]: [...userInput[name], value] });
      }
    }
  };

  function handleAdd() {
    alert(
      `Hello!\nYour Sub with ${userInput.choice1} ${userInput.choice2} ${userInput.choice3} ${userInput.choice4} ${userInput.choice5} ${userInput.choice6} ${userInput.choice7} ${userInput.choice8} is getting ready! :)`
    );
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
                fontWeight: `${route === item.choiceNo ? "500" : "400"}`,
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
                      checked={
                        item.optionsType === "Radio"
                          ? userInput[item.choiceNo] === option
                          : null
                      }
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

      <div
        className="errorText"
        style={{ display: error === true ? "block" : "none" }}
      >
        You can select a maximum of 3 Sauces Any (3).
      </div>

      <div className="modalBottom">
        <p className="subSelected">
          {userInput.choice1}, {userInput.choice2}
        </p>
        <div className="totalItem">
          <span>Total: Rs.371/-</span>
          <span onClick={handleAdd} className="addItemBtn">
            ADD ITEM
          </span>
        </div>
      </div>
    </>
  );
};

export default NavItems;
