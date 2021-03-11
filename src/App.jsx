import React from 'react';
import { StateManager } from './StateManager/Store'
import { Theme } from './theme';
import { createMovieList } from './Features/MovieList/createMovieList';
import { createHeader } from './Features/Header/createHeader'
import { DataService } from './DataService'

export default () => {
  const MovieList = createMovieList({ DataService })
  const Header = createHeader()
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
