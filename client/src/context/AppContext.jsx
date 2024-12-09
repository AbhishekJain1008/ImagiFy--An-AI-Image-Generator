// from this we pass the props to the buycredit.jsx file so here the prop is user

import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // check whether the user is loggin or logout user
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
