import React from 'react';
import { StateManager } from './StateManager/Store'
import { Theme } from './theme';
import { createMovieList } from './Features/MovieList/createMovieList';
import { Header } from './Features/Header/Header'
import { DataService } from './DataService'

export default () => {
  const MovieList = createMovieList({ DataService })
  return (
    <StateManager>
      <Theme>
        <header>
          <Header />
        </header>
        <main>
          <MovieList />
        </main>
      </Theme>
    </StateManager>
  )
}
