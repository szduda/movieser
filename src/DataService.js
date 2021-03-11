export const DataService = {
  fetchMovies: async ({ searchTerm, page = 1 }) => {
    if (!searchTerm) return { movies: [], total: 0 }

    try {
      const res = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&p=${page}&apikey=a8d23117`)
      const data = await res.json()
      if(data.Response === 'True') 
        return { movies: data.Search, total: data.totalResults }
        else return {movies: [], total: 0, error: data.Error}
    } catch (error) {
      console.log('fetch error')
      return { movies: [], total: 0, error: 'Error while fetching data' }
    }
  }
}
