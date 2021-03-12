export const DataService: DataServiceType = {
  fetchMovies: async ({ searchTerm, page = 1 }: FetchMoviesArgs) => {
    if (!searchTerm) return { movies: [], total: 0 }

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&page=${page}&apikey=a8d23117`)
      const data = await res.json()
      if (data.Response === 'True')
        return { movies: data.Search, total: data.totalResults }
      else return { movies: [], total: 0, error: data.Error }
    } catch (error) {
      console.log('fetch error')
      return { movies: [], total: 0, error: 'Error while fetching data' }
    }
  }
}

type FetchMoviesArgs = {
  searchTerm: string,
  page: number
}

export type DataServiceType = {
  fetchMovies: (props: FetchMoviesArgs) => Promise<{
    movies: Array<any>,
    total: number,
    error?: string
  }>
}