import React, { useState } from "react";
import "./addNewCardModal.css";
import { BasicInput } from "../../BasicInput/BasicInput";
import modalBackDrop from "../../../components/modalBackDrop/ModalBackDrop";
import { addCardInfo } from "../../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../../redux/selectors";

const AddNewCard = ({ close }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const cardInfo = {
    number: cardNumber,
    timeExpiration: expirationDate,
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addCardInfo(cardInfo, authToken(state)));
    setCardNumber("");
    setExpirationDate("");
    close();
  };

  return (
    <>
      <div className="addNewCard-head">
        <h2 className="addNewCard-title">Введите данные вашей карты</h2>
        <form onSubmit={handleSubmit}>
          <BasicInput
            forLabel={"name"}
            id={"number"}
            labelText={"Номер Карты"}
            labelWidth={"125px"}
            inputWidth={"345px"}
            placeholder={"Введите номер"}
            value={cardNumber}
            handleChange={(evt) => setCardNumber(evt.target.value)}
          />
          <BasicInput
            forLabel={"name"}
            id={"number"}
            labelText={"Истечение срока"}
            labelWidth={"125px"}
            inputWidth={"125px"}
            placeholder={"__/__"}
            value={expirationDate}
            handleChange={(evt) => setExpirationDate(evt.target.value)}
          />
          <div className="addNewCard-Buttons">
            <button
              type="submit"
              className="addNewCard-btn"
              onClick={() => close()}
            >
              Отмена
            </button>
            <button type="submit" className="addNewCard-btnSave">
              Сохранить
            </button>
          </div>

          <button
            onClick={() => close()}
            className="addNewCard-modalCloseBtn"
          ></button>
        </form>
      </div>
    </>
  );
};

export default modalBackDrop(AddNewCard);
