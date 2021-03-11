export const defaultState = []

export const movieListReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case 'setMovies':
      return payload.movies

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