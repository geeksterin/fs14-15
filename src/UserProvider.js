import { createContext, useState } from "react";

import React from "react";

export const UserContext = createContext(); // empty box or context

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Joy",
    age: 22,
  });

  const [theme, setTheme] = useState("white");
  console.log("children", children);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
