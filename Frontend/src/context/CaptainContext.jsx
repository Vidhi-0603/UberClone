import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const { role } = useContext(AuthContext);

  return (
    <div>
      <CaptainDataContext.Provider
        value={{ captain, setCaptain, role }}
      >
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
};

export default CaptainContext;