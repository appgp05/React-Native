import { Movie } from "../models/Movie";

export type RootStackParamList = {
    MovieList: undefined;
    MovieDetails: {movie: Movie};
    Home: undefined;
    Settings: undefined;
    Favorite: undefined;
}