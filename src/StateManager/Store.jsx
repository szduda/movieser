import React, { createContext, useContext, useReducer } from 'react';
import { initialState, reducer, useMyActions } from './store.config'

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const StateManager = props => (
  <StateProvider  {...{ initialState, reducer, ...props }} />
)

export const useStore = () => {
  const [state, dispatch] = useContext(StateContext)
  return {
    state,
    actions: useMyActions(dispatch),
  }
}

export default StateManager
