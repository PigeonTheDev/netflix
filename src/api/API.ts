import axios from "axios";
import { GenreMovie } from "../modals/GenreMovies";
import { Movie } from "../modals/Movie";

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
  getTitles = async (params?: any): Promise<Movie[]> => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles",
      params: params,
      headers: headers,
    };
    return axios
      .request<{ results: Movie[] }>(options)
      .then((response) => response.data.results.filter((result) => result.primaryImage !== null))
      .catch((error) => {
        console.error(error);
        throw error.message;
      });
  };

  getGenres = async (): Promise<string[]> => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
      headers: headers,
    };

    //const response = await axios.request(options);
    //return response.data;
    return axios
      .request<{ results: string[] }>(options)
      .then((response) => response.data.results)
      .catch((error) => {
        console.error(error);
        throw error.message;
      });
  };
  /*  getTitleTypes = async () => {
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
  }; */

  getRating = async (id: string) => {
    const options = {
      method: "GET",
      url: `https://moviesdatabase.p.rapidapi.com/titles/${id}/ratings`,
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
    genreCombo: async (titleType?: string): Promise<GenreMovie[]> => {
      return this.getGenres().then(async (genres) => {
        const newGenres = genres.filter((genre: string) => {
          return genre !== null;
        });

        //1. yöntem
        /*  const result: GenreMovie[] = [];
        for (let i = 0; i < newGenres.length; i++) {
          const genre = newGenres[i];
          const movies: Movie[] = await this.getTitles({ genre, limit: "50" });
          result.push({ genre, movies });
        }
        console.log(result);
        return result; */

        //2. yöntem
        const promises: Promise<GenreMovie>[] = [];

        newGenres.forEach((genre) => {
          const promise: Promise<GenreMovie> = this.getTitles({ genre, limit: "25", titleType }).then((movies) => ({ genre, movies }));
          promises.push(promise);
        });
        const result = await Promise.all(promises);
        return result;
      });
    },
  };
}

export default api;
