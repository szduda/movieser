export const defaultState = {
  searchTerm: '',
  searchResults: [],
  total: 0,
  page: 1
}

export type MovieListType = {
  searchTerm: string,
  searchResults: Array<any>,
  total: number,
  page: number
}

export const movieListReducer = (state: MovieListType, action: any) => {
  const { payload, type } = action

  switch (type) {
    case 'setMovies':
      return {
        ...state,
        searchResults: payload.movies,
        total: payload.total
      }
    case 'setSearchTerm':
      return {
        ...state,
        searchTerm: payload.term,
        page: 1
      }
    case 'setPage':
      return {
        ...state,
        page: payload
      }

    default:
      return state;
  }
}

export const movieListActions = {
  setMovies: (payload: { movies: Array<any>, total: number }) => ({
    type: 'setMovies',
    payload
  }),
  setSearchTerm: (payload: { term: string }) => ({
    type: 'setSearchTerm',
    payload
  }),
  setPage: (payload: number) => ({
    type: 'setPage',
    payload
  })
}