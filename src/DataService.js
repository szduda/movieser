export const DataService = {
  fetchMovies: async ({ searchTerm }) => {
    if (!searchTerm) return []
    try {
      const res = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=a8d23117`)
      const data = await res.json()
      return data.Search
    } catch (error) {
      console.log('fetch error')
    }

  }
  // fetchMovies: () => [
  //   {
  //     "Title": "The Shawshank Redemption",
  //     "Year": "1994",
  //     "Runtime": "142 min",
  //     "Genre": "Drama",
  //     "Director": "Frank Darabont",
  //     "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
  //     "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  //   },
  //   {
  //     "Title": "Into the Wild",
  //     "Year": "2007",
  //     "Runtime": "148 min",
  //     "Genre": "Adventure, Biography, Drama",
  //     "Director": "Sean Penn",
  //     "Actors": "Emile Hirsch, Marcia Gay Harden, William Hurt, Jena Malone",
  //     "Plot": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 \
  //             savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters \
  //             that shape his life.",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_SX300.jpg"
  //   }
  // ]
}
