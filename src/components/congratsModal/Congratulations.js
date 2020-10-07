import React, { useState } from "react";
import congratsPicture from "../../images/congratsPicture/congratulations.png";
import style from "./Congratulations.module.css";
import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import CustomHabitModal from "../Modals/CustomHabitModal/CustomHabitModal";

const Congratulations = ({ name, close }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalEmpty, setIsShowModalEmpty] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const showModalEmpty = () => {
    setIsShowModalEmpty(true);
  };

  return (
    <>
      <div id="home" className={style.congratulationWrapper}>
        <div>
          <h2 className={style.congratulationTitle}>Поздравляем!</h2>
          <p className={style.congratulationText}>
            Вы успешно освоили привычку и стали на шаг ближе к своей цели.
          </p>
        </div>
        <div>
          <img src={congratsPicture} alt="congratulations" width="450" height="320" />
        </div>
        <div className={style.congratsBtnWrapper}>
          <button onClick={() => showModal()} className={style.buttonTransparent}>
            Повторить
          </button>
          <button onClick={() => showModalEmpty()} className={style.buttonTransparent}>
            Добавить новую
          </button>
        </div>
        <button onClick={() => close()} className={style.modalBodyButtonclose}></button>
      </div>
      {isShowModal && <CustomHabitModal textOfHabit={name} close={close} />}
      {isShowModalEmpty && <CustomHabitModal close={close} />}
    </>
  );
};

export default modalBackDrop(Congratulations);
