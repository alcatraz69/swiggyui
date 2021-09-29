import "./popup.css";

const popup = ({ closeModal }) => {
  return (
    <>
      <div className="modalContainer">
        <div className="popupModal">
          <div className="modalHead">
            <div>
              <div>Customize “BFF Veg Sub Combo (15 cm, 6 Inch)”</div>
              <div>Rs 371</div>
            </div>
            <div className="modalClose" onClick={closeModal}>
              X
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default popup;
