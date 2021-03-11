import { useActions } from "./useActions";
import {
  defaultState as movieListDefault,
  movieListReducer,
  movieListActions,
} from '../Features/MovieList/movieList.store'

export const initialState = {
  movieList: movieListDefault,
}

export const reducer = ({ movieList }, action) => {
  return {
    movieList: movieListReducer(movieList, action),
  }
}

const useMovieListActions = dispatch => useActions(dispatch, movieListActions)

export const useMyActions = dispatch => ({
  movieList: useMovieListActions(dispatch),
})
