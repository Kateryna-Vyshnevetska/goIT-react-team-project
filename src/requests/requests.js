import axios from "axios";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";

const registration = () => {
  axios
    .post("/auth/registration", {
      email: "qwert23y@gmail.com",
      password: "Qwerty123",
    })
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const login = () => {
  axios
    .post("/auth/login", {
      email: "qwerty@gmail.com",
      password: "Qwerty123",
    })
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const passChange = () => {
  axios
    .post(
      "/auth/updatePassword",
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
        },
      },
      {
        password: "NewPassword123",
        confirmPassword: "NewPassword123",
      }
    )
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const getHabbits = async () => {
  await axios
    .get("/habits", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
      },
    })
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const createHabbits = async () => {
  await axios
    .post(
      "/habits",
      {
        name: "My Habit",
        planningTime: "plan time",
        iteration: "Some iteration",
      },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
        },
      }
    )
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const deleteHabbits = async () => {
  //id будет в самой привычке
  await axios
    .delete(`/habits/:habitId`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
      },
    })
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const updateHabbits = async () => {
  await axios
    .patch(
      `/habits`,
      {
        id: "5f7447143a574400173b9293",
        name: "New name of habit",
        data: [],
      },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
        },
      }
    )
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const updateQuizeInfo = async () => {
  await axios
    .post(
      `/users/updateQuizInfo`,
      {
        smokeYears: 1,
        cigarettePerDay: 2,
        cigarettePerTime: 3,
        cigarettePackPrice: 5,
      },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
        },
      }
    )
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const updateCigarettesInfo = async () => {
  await axios
    .post(
      `/users/updateCigarettes`,
      {
        startedAt: "2020-09-14T09:11:03.448Z",
        data: [12, null],
      },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
        },
      }
    )
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};
const addPaymentCard = async () => {
  await axios
    .post(
      `/users/addPayment`,
      {
        number: "4549568721099231",
        timeExpiration: "02/22",
      },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
        },
      }
    )
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};

const updateSubscription = async () => {
  await axios
    .post(
      `/users/updateSubscription`,
      {
        plan: "name of plan",
      },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzQzZDQwM2E1NzQ0MDAxNzNiOTI5MCIsImlhdCI6MTYwMTQ1NTc2NiwiZXhwIjoxNjAyMDYwNTY2fQ.PDCcQieHi5omGlXVf3TXogcUmug-nfV3buqF-taAFx0",
        },
      }
    )
    .then((response) => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
};
