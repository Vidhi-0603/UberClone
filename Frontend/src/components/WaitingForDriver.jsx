import React, { useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RideDataContext } from "../context/RideContext";

const WaitingForDriver = (props) => {
  const { rideData } = useContext(RideDataContext);
  useGSAP(
    function () {
      if (props.waitingForDriverPanelOpen) {
        gsap.to(props.WaitingForDriverPanelRef.current, {
          transform: "translateY(0)",
        });
        gsap.to(props.WaitingForDriverPanelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(props.WaitingForDriverPanelRef.current, {
          transform: "translateY(80%)",
        });
        gsap.to(props.WaitingForDriverPanelCloseRef.current, {
          opacity: 1,
        });
      }
    },
    [props.waitingForDriverPanelOpen]
  );

  return (
    <div>
      <h3 className="text-xl font-medium border-b-2 border-gray-300 rounded-full pb-2 text-center mb-3">
        Waiting For Driver...
      </h3>

      <h5
        ref={props.WaitingForDriverPanelCloseRef}
        onClick={() => {
          props.setWaitingForDriverPanelOpen(!props.waitingForDriverPanelOpen);
        }}
        className="absolute right-6 top-6 text-xl opacity-0"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex flex-col justify-between items-center">
        {/* vehicle and Driver details */}
        <div className="my-3 flex items-center justify-between w-full px-5 py-2">
          <img
            className="h-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY8AdbzbAMTo8-CVmbJ83KmL0zMdus0ugWNUMePGgoZVIs7qXn4eQgxhvFkYhjaqK30o&usqp=CAU"
            alt="uber car"
          />
          <div className="">
            <h3 className="text-3xl font-medium">
              {rideData?.captain?.fullname?.firstname +
                " " +
                rideData?.captain?.fullname?.lastname}
            </h3>
            <h5 className="text-2xl font-base">
              {rideData?.captain?.vehicle?.plate}
            </h5>
            <p>{rideData?.captain?.vehicle?.color}</p>
          </div>
        </div>

        {/* destination and fare details */}
        <div className="w-full text-lg my-2">
          <div className="flex items-center justify-start py-2 px-3 gap-5 border-y-1 border-gray-300 rounded">
            <i className="ri-map-pin-fill"></i>
            <div className="text-lg">
              <h4 className="font-base">{rideData?.pickup}</h4>
            </div>
          </div>
          <div className="flex items-center justify-start py-2 px-3 gap-5 border-b-1 border-gray-300 rounded">
            <i class="ri-square-fill"></i>
            <div className="text-lg">
              <h4 className="font-base">{rideData?.destination}</h4>
            </div>
          </div>
          <div className="flex items-center justify-start py-3 px-3 gap-5 border-b-1 border-gray-300 rounded">
            <i class="ri-bank-card-2-fill"></i>
            <div className="text-lg">
              <h4 className="font-bold">&#8377; {rideData?.fare}</h4>
            </div>
          </div>
        </div>

        <div className="text-lg font-medium py-4">
          Share this OTP with Captain: <span className="text-red-600">{rideData?.otp}</span>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
