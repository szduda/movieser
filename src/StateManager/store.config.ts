import { useActions } from "./useActions";
import {
  defaultState as movieListDefault,
  movieListReducer,
  movieListActions,
  MovieListType,
} from './movieList.store'

export const initialState = {
  movieList: movieListDefault,
}

export const reducer = ({ movieList }: { movieList: MovieListType }, action: { payload: any, type: string }) => ({
  movieList: movieListReducer(movieList, action),
})

const useMovieListActions = (dispatch: Function) => useActions(dispatch, movieListActions)

export const useMyActions = (dispatch: Function) => ({
  movieList: useMovieListActions(dispatch),
})

export type StoreType = {
  state: {
    movieList: MovieListType
  },
  actions: {
    movieList: any
  }
}