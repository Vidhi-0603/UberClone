import React, { useContext, useRef, useState } from "react";
import LogoutCaptain from "../components/LogoutCaptain.jsx";
import CaptainDetails from "../components/CaptainDetails.jsx";
import RidePopUp from "../components/RidePopUp.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp.jsx";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import { SocketDataContext } from "../context/SocketContext.jsx";
import axiosInstance from "../utils/axiosInstance.js";
import CaptainMap from "../components/CaptainMap.jsx";
import { RideDataContext } from "../context/RideContext.jsx";

const CaptainHome = () => {
  const [ridePopUpPanelOpen, setRidePopUpPanelOpen] = useState(false);
  const [confirmRidePopUpPanelOpen, setConfirmRidePopUpPanelOpen] =
    useState(false);
  // const [ride, setRide] = useState(null);
  const [pickupData, setPickupData] = useState(null);
  const [destinationData, setDestinationData] = useState(null);
  const [isRiding, setIsRiding] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmridePopUpPanelRef = useRef(null);

  const { socket } = useContext(SocketDataContext);
  const { captain } = useContext(CaptainDataContext);
  const { setRideData } = useContext(RideDataContext);

  // useEffect(() => {
  //   if (!captain) return;

  //   socket.emit("join", {
  //     userId: captain._id,
  //     userType: "captain",
  //   });

  //   const updateLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         socket.emit("update-location-captain", {
  //           userId: captain._id,
  //           location: {
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           },
  //         });
  //       });
  //     }
  //   };

  //   const locationInterval = setInterval(updateLocation, 10000);
  //   updateLocation();
  // }, [socket, captain]);

  socket.on("new-ride", async (data) => {
    console.log(data);

    const distanceTime = await axiosInstance.get("maps/get-distance-time", {
      params: { origin: data.pickup, destination: data.destination },
    });

    console.log(distanceTime.data);
    setPickupData(distanceTime.data.pickupDistance);
    setDestinationData(distanceTime.data.destinationDistance);

    setRideData(data);
    setRidePopUpPanelOpen(true);
  });

  // Mobile & Tablet animations (< 1024px)
  useGSAP(
    function () {
      if (window.innerWidth < 1024) {
        if (ridePopUpPanelOpen) {
          gsap.to(ridePopUpPanelRef.current, {
            transform: "translateY(0)",
          });
        } else {
          gsap.to(ridePopUpPanelRef.current, {
            transform: "translateY(100%)",
          });
        }
      }
    },
    [ridePopUpPanelOpen]
  );

  useGSAP(
    function () {
      if (window.innerWidth < 1024) {
        if (confirmRidePopUpPanelOpen) {
          gsap.to(confirmridePopUpPanelRef.current, {
            transform: "translateY(0)",
          });
        } else {
          gsap.to(confirmridePopUpPanelRef.current, {
            transform: "translateY(100%)",
          });
        }
      }
    },
    [confirmRidePopUpPanelOpen]
  );

  async function confirmRide(rideData) {
    const response = await axiosInstance.post("/ride/confirm", {
      rideId: rideData._id,
      captainId: captain._id,
    });

    if (response.status === 200) {
      setRideData(response.data);
      setIsRiding(true);
      setRidePopUpPanelOpen(false);
      setConfirmRidePopUpPanelOpen(false);
    }
  }

  // Determine which panel content to show on desktop
  const getCurrentPanelContent = () => {
    if (confirmRidePopUpPanelOpen) {
      return (
        <ConfirmRidePopUp
          confirmRide={confirmRide}
          pickupData={pickupData}
          destinationData={destinationData}
          setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen}
          confirmRidePopUpPanelOpen={confirmRidePopUpPanelOpen}
          setRidePopUpPanelOpen={setRidePopUpPanelOpen}
        />
      );
    }
    if (ridePopUpPanelOpen) {
      return (
        <RidePopUp
          pickupData={pickupData}
          destinationData={destinationData}
          setRidePopUpPanelOpen={setRidePopUpPanelOpen}
          ridePopUpPanelOpen={ridePopUpPanelOpen}
          setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen}
        />
      );
    }
    return <CaptainDetails />;
  };

  return (
    <>
      {/* Mobile & Tablet Layout (< 1024px) */}
      <div className="h-screen relative overflow-hidden lg:hidden">
        {/* Header */}
        <div className="flex w-full p-2 items-center justify-between absolute top-0 z-10">
          <LogoutCaptain
            confirmRidePopUpPanelOpen={confirmRidePopUpPanelOpen}
          />
        </div>

        {/* Map */}
        <div className="h-screen w-screen">
          {!isRiding && <CaptainMap captain={captain} />}
        </div>

        {/* Default Captain Details Panel */}
        <div className="p-6 lg:p-8 bg-white absolute bottom-0 w-full">
          <CaptainDetails />
        </div>

        {/* Mobile Ride Pop Up Panel */}
        <div
          ref={ridePopUpPanelRef}
          className="p-6 bg-white absolute translate-y-full bottom-0 w-full z-20"
        >
          <RidePopUp
            pickupData={pickupData}
            destinationData={destinationData}
            setRidePopUpPanelOpen={setRidePopUpPanelOpen}
            ridePopUpPanelOpen={ridePopUpPanelOpen}
            setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen}
          />
        </div>

        {/* Mobile Confirm Ride Pop Up Panel */}
        <div
          ref={confirmridePopUpPanelRef}
          className="p-6 bg-white h-screen absolute translate-y-full bottom-0 w-full z-30"
        >
          <ConfirmRidePopUp
            confirmRide={confirmRide}
            pickupData={pickupData}
            destinationData={destinationData}
            setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen}
            confirmRidePopUpPanelOpen={confirmRidePopUpPanelOpen}
            setRidePopUpPanelOpen={setRidePopUpPanelOpen}
          />
        </div>
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:flex h-screen relative overflow-hidden">
        {/* Header for Desktop - Full Width */}
        <div className="absolute top-0 left-0 right-0 z-10 flex w-full p-4 items-center justify-between pointer-events-none">
          <div className="flex w-full items-center justify-center gap-15 pointer-events-auto">
            <LogoutCaptain
              confirmRidePopUpPanelOpen={confirmRidePopUpPanelOpen}
            />
          </div>
        </div>

        {/* Left Side - Map */}
        <div className="flex-1 relative">
          <div className="h-full w-full">
            {!isRiding && <CaptainMap captain={captain} />}
          </div>
        </div>

        {/* Right Side - Panels */}
        <div className="w-full lg:w-96 xl:w-[450px] 2xl:w-[500px] bg-white shadow-lg overflow-hidden flex flex-col">
          {/* Dynamic Panel Content */}
          <div className="flex-1 p-6 overflow-auto">
            {getCurrentPanelContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaptainHome;
