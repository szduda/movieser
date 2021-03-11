import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../../StateManager/Store'
import { MovieList } from './MovieList'

const PAGE_SIZE = 10

export const createMovieList = ({ DataService }) => {
  const useMovieListContext = () => {
    const { state, actions } = useStore()
    const { searchResults, searchTerm, page, total } = state.movieList
    const { setPage } = actions.movieList

    const [busy, setBusy] = useState(false)
    const [error, setError] = useState(null)

    const fetchMovies = useRef(DataService.fetchMovies)
    const setMovies = useRef(actions.movieList.setMovies)

    useEffect(() => {
      if (!searchTerm || searchTerm.length < 3)
        return

      const asyncEff = async () => {
        setBusy(true)
        const { movies, total, error } = await fetchMovies.current({
          searchTerm: searchTerm.trim(),
          page
        })
        setMovies.current({ movies, total })
        setError(error)
        setBusy(false)
      }
      asyncEff()
    }, [fetchMovies, setMovies, searchTerm, page])

    return {
      movies: searchResults || [],
      searchTerm,
      busy,
      error,
      nextPage: page * PAGE_SIZE < total && (() => setPage(page + 1)),
    }
  }

  return () => <MovieList {...{ useMovieListContext }} />
}
