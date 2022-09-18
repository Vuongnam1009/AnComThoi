import { useReducer, useMemo } from "react";
import Context from "./Context";
import authReducer, { initialLoginState } from "./reducer";
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialLoginState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
