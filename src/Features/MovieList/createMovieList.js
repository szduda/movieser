import React, { useEffect, useRef } from 'react'
import { useStore } from '../../StateManager/Store'
import { MovieList } from './MovieList'

export const createMovieList = ({ DataService }) => {
  const useMovieListContext = () => {
    const { state, actions } = useStore()
    const { movieList: movies } = state

    const fetchMovies = useRef(DataService.fetchMovies)
    const setMovies = useRef(actions.movieList.setMovies)

    useEffect(() => {
      setMovies.current({ movies: fetchMovies.current() })
    }, [fetchMovies, setMovies])

    return { movies }
  }

  return () => <MovieList {...{ useMovieListContext }} />
}
