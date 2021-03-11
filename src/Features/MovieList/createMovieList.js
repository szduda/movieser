import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../../StateManager/Store'
import { MovieList } from './MovieList'

const PAGE_SIZE = 10

export const createMovieList = ({ DataService }) => {
  const useMovieListContext = () => {
    const { state, actions } = useStore()
    const { searchResults, searchTerm, page, total } = state.movieList
    const { setPage } = actions.movieList

    const [busy, setBusy] = useState(true)

    const fetchMovies = useRef(DataService.fetchMovies)
    const setMovies = useRef(actions.movieList.setMovies)

    useEffect(() => {
      const asyncEff = async () => {
        setBusy(true)
        const { movies, total } = await fetchMovies.current({ searchTerm, page })
        setMovies.current({ movies, total })
        setBusy(false)
      }
      asyncEff()
    }, [fetchMovies, setMovies, searchTerm, page])

    console.log('szd', searchResults)
    return {
      movies: searchResults || [],
      searchTerm,
      busy,
      nextPage: () => page * PAGE_SIZE < total && setPage(page + 1),
    }
  }

  return () => <MovieList {...{ useMovieListContext }} />
}
