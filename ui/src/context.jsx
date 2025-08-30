import { createContext, useReducer, useContext } from "react";

const initialState = {
  // To add
};

const AppContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

// App Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the context
export const useAppContext = () => useContext(AppContext);
