const addOneDay = (data, arr) => {
  const datanew = new Date(data);
  while (arr.length < 21) {
    const newData = new Date(datanew.setDate(datanew.getDate() + 1));
    arr.push(newData);
  }
};

const addTwoDays = (data, arr) => {
  const datanew = new Date(data);
  while (arr.length < 21) {
    const newData = new Date(datanew.setDate(datanew.getDate() + 2));
    arr.push(newData);
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
      arr.push(newData);
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
      arr.push(newData);
    }
  }
};
