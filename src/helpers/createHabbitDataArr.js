import React, { useState } from "react";

export const CreateHabbitDataArr = () => {
  const [data, setdata] = useState("");
  const [dataArrOneDay, setdataArrOneDay] = useState([]);
  const [dataArrTwoDays, setdataArrTwoDays] = useState([]);
  const [dataArrMonWedFri, setdataArrMonWedFri] = useState([]);
  const [dataArrTueThuSat, setdataArrTueThuSat] = useState([]);

  let arrOneDay = [];
  let arrTwoDays = [];
  let arrMonWedFri = [];
  let arrTueThuSat = [];

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(data);
    const datanew = new Date(data);

    arrOneDay.push(datanew.toLocaleDateString("en-GB"));
    arrTwoDays.push(datanew.toLocaleDateString("en-GB"));
    arrMonWedFri.push(datanew.toLocaleDateString("en-GB"));
    arrTueThuSat.push(datanew.toLocaleDateString("en-GB"));

    await addOneDay(data);
    await addTwoDays(data);
    await MonWedFri(data);
    await TueThuSat(data);

    setdataArrOneDay(arrOneDay);
    setdataArrTwoDays(arrTwoDays);
    setdataArrMonWedFri(arrMonWedFri);
    setdataArrTueThuSat(arrTueThuSat);
  };

  const addOneDay = (data) => {
    const datanew = new Date(data);
    while (arrOneDay.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      arrOneDay.push(newData.toLocaleDateString("en-GB"));
    }
  };

  const addTwoDays = (data) => {
    const datanew = new Date(data);
    while (arrTwoDays.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 2));
      arrTwoDays.push(newData.toLocaleDateString("en-GB"));
    }
  };

  const MonWedFri = (data) => {
    const datanew = new Date(data);
    while (arrMonWedFri.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      if (
        new Date(newData).getDay() === 1 ||
        new Date(newData).getDay() === 3 ||
        new Date(newData).getDay() === 5
      ) {
        console.log(new Date(newData).getDay());
        arrMonWedFri.push(newData.toLocaleDateString("en-GB"));
      }
    }
  };
  const TueThuSat = (data) => {
    const datanew = new Date(data);
    while (arrTueThuSat.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      if (
        new Date(newData).getDay() === 2 ||
        new Date(newData).getDay() === 4 ||
        new Date(newData).getDay() === 6
      ) {
        console.log(new Date(newData).getDay());
        arrTueThuSat.push(newData.toLocaleDateString("en-GB"));
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          Выберите дату:
          <input
            type="date"
            name="calendar"
            onChange={({ target: { value } }) => setdata(value)}
          ></input>
          <input type="submit" value="Отправить"></input>
        </p>
      </form>
    </>
  );
};
