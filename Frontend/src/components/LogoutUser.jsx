import React, { useRef } from "react";
import { logoutUser } from "../api/userAuth.api";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const LogoutUser = (props) => {
  const logoutRef = useRef(null);
  const navigate = useNavigate();
 useGSAP(
   function () {
     if (props.panelOpen) {
       gsap.to(logoutRef.current, {
         zIndex: 0,
       });
     } else {
       gsap.to(logoutRef.current, {
         zIndex: 10,
       });
     }
   },
   [props.panelOpen]
 );
  const handleLogout = async () => {
    const data = await logoutUser();
    console.log(data, "logout done!");
    navigate("/");
  };

  return (
    <>
      <img
        className="w-16"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <button
        ref={logoutRef}
        type="button"
        className="bg-red-700 text-white px-2 py-1 rounded z-50"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default LogoutUser;
