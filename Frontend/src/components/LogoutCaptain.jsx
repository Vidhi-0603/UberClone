import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logoutCaptain } from "../api/captainAuth.api.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LogoutCaptain = (props) => {
  const logoutRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const data = await logoutCaptain();
    console.log(data, "logout done!");
    navigate("/");
  };

  useGSAP(
    function () {
      if (props.confirmRidePopUpPanelOpen) {
        gsap.to(logoutRef.current, {
          zIndex: 0,
        });
        
      } else {
        gsap.to(logoutRef.current, {
          zIndex: 50,
        });
        
      }
    },
    [props.confirmRidePopUpPanelOpen]
  );
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

export default LogoutCaptain;
