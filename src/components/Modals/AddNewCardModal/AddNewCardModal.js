import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./addNewCardModal.css";
import { BasicInput } from "../../BasicInput/BasicInput";
import { BasicInputMasked } from "../../BasicInput/BasicInputMasked";

import modalBackDrop from "../../../components/modalBackDrop/ModalBackDrop";
import { addCardInfo } from "../../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../../redux/selectors";
import style from "../CustomHabitModal/CustomHabitModal.module.css";

const AddNewCard = ({ close }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const { register, errors, handleSubmit } = useForm();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const cardInfo = {
    number: cardNumber,
    timeExpiration: expirationDate,
  };

  const onSubmit = (evt) => {
    // evt.preventDefault();
    dispatch(addCardInfo(cardInfo, authToken(state)));
    setCardNumber("");
    setExpirationDate("");
    close();
  };

  return (
    <>
      <div className="addNewCard-head">
        <h2 className="addNewCard-title">Введите данные ващой карты</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={style.errorMessage}>
            {errors.number || errors.timePass
              ? "Введите правильные данные"
              : null}
          </p>
          <BasicInputMasked
            register={register({
              minLength: 19,
              maxLength: 19,
              required: true,
            })}
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
          <BasicInputMasked
            register={register({
              minLength: 5,
              maxLength: 5,
              required: true,
            })}
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
