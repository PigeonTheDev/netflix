import axios from "axios";

/* interface Options {
  method: string;
  url: string;
  params?: any;
  headers?: {
    "X-RapidAPI-Key": "c8593b9ee9msh6bf6978f9be3b7fp171736jsn8e61c8accc56";
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com";
  };
} */

const headers = { "X-RapidAPI-Key": "c8593b9ee9msh6bf6978f9be3b7fp171736jsn8e61c8accc56", "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com" };

class api {
  getTitles = async (params?: any) => {
    try {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles",
        params: params,
        headers: headers,
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  getGenres = async () => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
      headers: headers,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  getTitleTypes = async () => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/utils/titleTypes",
      headers: headers,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  combo = {
    genreCombo: async () => {
      this.getGenres()
        .then((genresPromise) => genresPromise.data.results)
        .then((genres) =>
          genres.map((genre: string) =>
            this.getTitles({ genre: `${genre}`, limit: "50" }).then((movies) => {
              return { genre: genre, movies: movies.data.results };
            })
          )
        );
    },
  };
}

export default api;
