import { createContext, useReducer, useContext } from "react";
import actions from "./constants/actions";
const initialState = {
  user: {
    details: null,
    token: null,
  },
};

const AppContext = createContext(initialState);

/**
 * Reducer function to manage state updates
 * @param {Object} state - Current state
 * @param {Object} action - Action object containing type and payload
 * @params {string} action.type - Type of action to perform
 * @params {any} action.payload - Data associated with the action: user: {details,token}
 * @returns {Object} New state after applying the action
 */
const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_USER: {
      return {
        ...state,
        user: actions.payload,
      };
    }
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
