import React from 'react'
import { useStore } from '../../StateManager/Store'
import { Header } from './Header'

export const createHeader = () => {
  const useHeaderContext = () => {
    const { state, actions } = useStore()
    const { searchTerm } = state.movieList

    return {
      searchTerm,
      search: (term: string) => actions.movieList.setSearchTerm({ term })
    }
  }

  return () => <Header {...{ useHeaderContext }} />
}
