import { useState } from "react";
import "./Itemcard.css";
import Popup from "../popup/popup";

const Itemcard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="itemCardContainer">
        <h1>Recommended</h1>
        <div className="itemCard">
          <div className="itemDetails">
            <p>BFF Veg Sub Combo (15 cm, 6 Inch)</p>
            <p>Rs 371</p>
            <p className="offerText">
              Buy any two 6" veg sub & get 2 cookie free
            </p>
          </div>
          <div className="addBtn" onClick={openModal}>
            ADD
          </div>
        </div>
        <hr />
      </div>
      {isOpen && <Popup closeModal={openModal} />}
    </>
  );
};

export default Itemcard;
