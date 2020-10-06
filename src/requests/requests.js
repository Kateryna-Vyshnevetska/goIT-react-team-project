import axios from "axios";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";

export const changeUserPassword = (token, newPassword) => {
  axios
    .post(
      "/auth/updatePassword",
      {
        headers: {
          Authorization: token,
        },
      },
      newPassword
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

export const createHabbits = async () => {
  await axios
    .post(
      "/habits",
      {
        name: "some",
        planningTime: "some",
        iteration: "Some ",
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

export const updateCigarettesInfo = async (arr, startedAt, token) => {
  try {
    await axios
      .post(
        `/users/updateCigarettes`,
        {
          startedAt: startedAt,
          data: arr,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((dataReg) => {
        // dispatch(
        //   addUserCigarettes({
        //     startedAt: startedAt,
        //     data: arr,
        //   })
        // );
      });
  } catch (error) {
    console.log(error);
  }
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
