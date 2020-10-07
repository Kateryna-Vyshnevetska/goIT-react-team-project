import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./addNewCardModal.css";
import { BasicInput } from "../../BasicInput/BasicInput";
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
          <BasicInput
            register={register({
              minLength: 16,
              maxLength: 16,
              pattern: /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
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
            handleChange={(evt) => setCardNumber(evt.target.value)}
          />
          <BasicInput
            ref={register({
              pattern: /[0-9]{4}/,
              minLength: 4,
              maxLength: 4,
              required: true,
            })}
            forLabel={"name"}
            name={"timePass"}
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
