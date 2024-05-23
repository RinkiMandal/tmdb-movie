import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiNzNiYjU2N2NkOWJkNmFlOTlkYWU5ZmYwY2M4ZCIsInN1YiI6IjY0YzM3MTIzZDg2MWFmMDEzOTA5ZWMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDObKfK0PhaeExa5E4_wnzyseUpblDYjAcGgPdI3Luc'
      },
});

export default instance;
