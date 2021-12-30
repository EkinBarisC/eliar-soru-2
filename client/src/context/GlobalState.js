import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  machines: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getMachines() {
    try {
      const res = await axios.get("http://localhost:4000/getUpdated");
      dispatch({
        type: "GET_MACHINES",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "MACHINE_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        machines: state.machines,
        error: state.error,
        loading: state.loading,
        getMachines,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
