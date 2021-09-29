import { useState } from "react";
import "./NavItems.css";
import { Choices } from "./Choice";

const NavItems = () => {
  const [route, routeSetter] = useState(1);

  const handleChange = (e) => {
    console.log(e.target);
  };
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
                textDecoration: `${
                  route === item.choiceNo ? "underline" : "none"
                }`,
              }}
              onClick={() => {
                routeSetter(item.choiceNo);
              }}
            >
              {item.choice}
            </a>
          );
        })}
      </div>
      <div className="navItems">
        {Choices.map((item) => {
          return (
            <div id={item.choiceNo}>
              <p className="choiceHeading">{item.choice}</p>

              {item.options.map((option) => {
                return (
                  <div className="options">
                    <input
                      type={item.optionsType === "Radio" ? "Radio" : "Checkbox"}
                      className="inputRadio"
                      name={item.choiceNo}
                      onClick={handleChange}
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
    </>
  );
};

export default NavItems;
