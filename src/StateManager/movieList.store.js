export const defaultState = {
  searchTerm: '',
  searchResults: [],
  total: 0,
  page: 1
}
export const movieListReducer = (state, action) => {
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
  setMovies: payload => ({
    type: 'setMovies',
    payload
  }),
  setSearchTerm: payload => ({
    type: 'setSearchTerm',
    payload
  }),
  setPage: payload => ({
    type: 'setPage',
    payload
  })
}