import moment from "moment";

export const createMainHabbitDataArr = (createAt) => {
  const addOneDay = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      const newDataFormat = moment(newData);
      arr.push(newDataFormat.format());
    }
  };

  const data = createAt;
  const datanew = new Date(data);
  let arr = [];

  arr.push(moment(datanew).format());
  addOneDay(data, arr);
  return arr;
};
