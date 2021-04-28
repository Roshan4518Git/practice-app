/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";
export const UserContext = createContext({ user: null });
export default  () => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email } = user;
        setuser({
          displayName,
          email,
        });
      }
    });
  }, []);
  return (
    // eslint-disable-next-line no-undef
    <UserContext.Provider value={user}></UserContext.Provider>
  );
};