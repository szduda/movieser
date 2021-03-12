import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { initialState, reducer, useMyActions, StoreType } from './store.config'

export const StateContext = createContext<any>({});

export const StateProvider = ({ reducer, initialState, children }: { reducer: any, initialState: any, children: ReactNode }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const StateManager = (props: any) => (
  <StateProvider  {...{ initialState, reducer, ...props }} />
)

export const useStore = (): StoreType => {
  const [state, dispatch] = useContext(StateContext)
  return {
    state,
    actions: useMyActions(dispatch),
  }
}

export default StateManager
