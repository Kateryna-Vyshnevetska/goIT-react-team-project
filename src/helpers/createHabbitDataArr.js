import moment from "moment";

export const createHabbitDataArr = (habbits) => {
  const addOneDay = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      const newDataFormat = moment(newData);
      arr.push(newDataFormat.format());
    }
  };

  const addTwoDays = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 2));
      const newDataFormat = moment(newData);
      arr.push(newDataFormat.format());
    }
  };

  const MonWedFri = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      if (
        new Date(newData).getDay() === 1 ||
        new Date(newData).getDay() === 3 ||
        new Date(newData).getDay() === 5
      ) {
        const newDataFormat = moment(newData);
        arr.push(newDataFormat.format());
      }
    }
  };
  const TueThuSat = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      if (
        new Date(newData).getDay() === 2 ||
        new Date(newData).getDay() === 4 ||
        new Date(newData).getDay() === 6
      ) {
        const newDataFormat = moment(newData);
        arr.push(newDataFormat.format());
      }
    }
  };

  const data = habbits.planningTime.slice(0, 67);
  const datanew = new Date(data);
  let arr = [];
  if (habbits.iteration == 1) {
    arr.push(moment(datanew).format());
    addOneDay(data, arr);
    return { habitId: habbits._id, dates: arr };
  }
  if (habbits.iteration == 2) {
    arr.push(moment(datanew).format());
    addTwoDays(data, arr);
    return { habitId: habbits._id, dates: arr };
  }
  if (habbits.iteration == 3) {
    arr.push(moment(datanew).format());
    MonWedFri(data, arr);
    return { habitId: habbits._id, dates: arr };
  }

  if (habbits.iteration == 4) {
    arr.push(moment(datanew).format());
    TueThuSat(data, arr);
    return { habitId: habbits._id, dates: arr };
  }
};
