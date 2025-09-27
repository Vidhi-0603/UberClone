// AuthProvider.js
//to get the role of user: user or captain

import { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null); // { role }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get("/me");
        setRole(res.data.role);
        console.log(res.data.role);
        
      } catch {
        setRole(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ role, setRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
