import React from "react";
import "./addNewCardModal.css";
import { BasicInput } from "../../BasicInput/BasicInput";
import modalBackDrop from "../../../components/modalBackDrop/ModalBackDrop";

const AddNewCard = () => {
  return (
    <>
      <div className="addNewCard-head">
        <h2 className="addNewCard-title">Введите данные ващой карты</h2>
        <form>
          <BasicInput
            forLabel={"name"}
            type={"number"}
            id={"number"}
            labelText={"Номер Карты"}
            labelWidth={"125px"}
            inputWidth={"345px"}
            placeholder={"Введите номер"}
          />
          <BasicInput
            forLabel={"name"}
            type={"number"}
            id={"number"}
            labelText={"Истечение срока"}
            labelWidth={"125px"}
            inputWidth={"125px"}
            placeholder={"__/__"}
          />
          <div className="addNewCard-Buttons">
            <button type="submit" className="addNewCard-btn">
              Отмена
            </button>
            <button type="submit" className="addNewCard-btnSave">
              Сохранить
            </button>
          </div>

          <button
            // onClick={() => close()}
            className="addNewCard-modalCloseBtn"
          ></button>
        </form>
      </div>
    </>
  );
};

export default modalBackDrop(AddNewCard);
