import React, { createContext, useContext, useReducer } from 'react';
// This is the Data Layer
export const StateContext = createContext();
// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);