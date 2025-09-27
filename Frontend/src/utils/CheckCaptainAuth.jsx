import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import axiosInstance from "./axiosInstance.js";

const CheckCaptainAuth = ({ children }) => {
  const { role, loading: authLoading } = useContext(AuthContext);
  const {  setCaptain } = useContext(CaptainDataContext);  

  useEffect(() => {
      const fetchCaptain = async () => {
        try {
          if (role === "captain") {
            const { data } = await axiosInstance.get("/captain/profile");
            console.log(data.captain,"captainnnn");
            
            setCaptain(data.captain);
          }
        } catch (err) {
          console.error("Failed to fetch profile:", err);
        }
      };
  
      fetchCaptain();
  }, [role, setCaptain]);
  

  if (authLoading) return <p>Loading...</p>;

  if (!role || role !== "captain") {
    return <Navigate to="/captain-login" replace />;
  }
  return <>{children}</>;
};

export default CheckCaptainAuth;
