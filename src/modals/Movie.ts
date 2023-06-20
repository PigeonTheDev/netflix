import { TitleType } from "./TitleType";
import { primaryImage } from "./primaryImage";

export type Movie = {
  _id: string;
  id: string;
  primaryImage: primaryImage;
  titleType: TitleType;
  titleText: {
    text: string;
    __typename: string;
  };
  releaseYear: {
    year: number;
    endYear?: number;
    __typename: string;
  };
  releaseDate?: number;
};
