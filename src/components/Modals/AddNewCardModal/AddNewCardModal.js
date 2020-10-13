import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./addNewCardModal.css";
import { BasicInputMasked } from "../../BasicInput/BasicInputMasked";
import modalBackDrop from "../../../components/modalBackDrop/ModalBackDrop";
import { addCardInfo } from "../../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../../redux/selectors";

const AddNewCard = ({ close }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const [checkError, setCheckError] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const cardInfo = {
    number: cardNumber,
    timeExpiration: expirationDate,
  };

  const onSubmit = (evt) => {
    const check = expirationDate.split("/");
    if (Number(check[0]) <= 12 && Number(check[1]) >= 20) {
      dispatch(addCardInfo(cardInfo, authToken(state)));
      setCardNumber("");
      setExpirationDate("");
      setCheckError(false);
      close();
    } else {
      setCheckError(true);
    }
  };

  return (
    <>
      <div className="addNewCard-head">
        <h2 className="addNewCard-title">Введите данные вашей карты</h2>
        <form className="formCard" onSubmit={handleSubmit(onSubmit)}>
          <BasicInputMasked
            forLabel={"name"}
            id={"number"}
            labelText={"Номер Карты"}
            labelWidth={"125px"}
            inputWidth={"345px"}
            name={"number"}
            placeholder={"Введите номер"}
            value={cardNumber}
            mask={"9999 9999 9999 9999"}
            maskChar={null}
            handleChange={(evt) => setCardNumber(evt.target.value)}
          />
          <p className={"errorMessageMaskNumb"}>
            {errors.number || errors.timePass ? "Неверный номер карты" : null}
          </p>
          <BasicInputMasked
            forLabel={"name"}
            name={"timePass"}
            id={"number"}
            labelText={"Истечение срока"}
            labelWidth={"125px"}
            inputWidth={"125px"}
            placeholder={"__/__"}
            mask={"99/99"}
            maskChar={null}
            value={expirationDate}
            handleChange={(evt) => setExpirationDate(evt.target.value)}
          />
          {checkError && (
            <p className="errorMessageMaskDate">Неверный формат даты</p>
          )}
          <div className="addNewCard-Buttons">
            <button className="addNewCard-btn" onClick={() => close()}>
              Отмена
            </button>
            <button
              disabled={cardNumber.length < 19 || expirationDate.length < 5}
              type="submit"
              className="addNewCard-btnSave"
            >
              Сохранить
            </button>
          </div>
        </form>
        <button
          onClick={() => close()}
          className="addNewCard-modalCloseBtn"
        ></button>
      </div>
    </>
  );
};

export default modalBackDrop(AddNewCard);
