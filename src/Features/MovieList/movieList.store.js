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

    default:
      return state;
  }
}

export const movieListActions = {
  setMovies: payload => ({
    type: 'setMovies',
    payload
  }),
}