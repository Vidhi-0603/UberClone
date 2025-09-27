import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LookingForDriver from "./LookingForDriver";

const SelectedRidePanel = (props) => {
  const isLookingForDriverRef = useRef(null);

  useGSAP(
    function () {
      if (props.ConfirmRide) {
        gsap.to(isLookingForDriverRef.current, {
          display: "block",
        });
      } else {
        gsap.to(isLookingForDriverRef.current, {
          display: "none",
        });
      }
    },
    [props.ConfirmRide]
  );

  return (
    <div>
      {!props.ConfirmRide ? (
        <h3 className="text-xl font-medium text-center mb-3">
          Searching ride nearby...
        </h3>
      ) : (
        <div ref={isLookingForDriverRef} className="">
          <LookingForDriver />
        </div>
      )}

      <h5
        ref={props.SelectedRidePanelCloseRef}
        onClick={() => {
          props.setSelectedRidePanelOpen(false);
        }}
        className="absolute right-6 top-6 text-xl opacity-0"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex flex-col justify-between items-center">
        {/* image */}
        <div className="my-3">
          {props.vehicleType === "Car" ? (
            <img
              className="h-18"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY8AdbzbAMTo8-CVmbJ83KmL0zMdus0ugWNUMePGgoZVIs7qXn4eQgxhvFkYhjaqK30o&usqp=CAU"
              alt="uber car"
            />
          ) : props.vehicleType === "Motorcycle" ? (
            <img
              className="h-18"
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
              alt="uber moto"
            />
          ) : (
            <img
              className="h-18"
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
              alt="uber auto"
            />
          )}
        </div>

        {/* details */}
        <div className="w-full text-lg my-2">
          <div className="flex items-center justify-start py-2 px-3 gap-5 border-y-1 border-gray-300 rounded">
            <i className="ri-map-pin-fill"></i>
            <div className="text-lg">
              <h4 className="font-medium">{props.pickup}</h4>
            </div>
          </div>
          <div className="flex items-center justify-start py-2 px-3 gap-5 border-b-1 border-gray-300 rounded">
            <i className="ri-square-fill"></i>
            <div className="text-lg">
              <h4 className="font-medium ">{props.destination}</h4>
            </div>
          </div>
          <div className="flex items-center justify-start py-3 px-3 gap-5 border-b-1 border-gray-300 rounded">
            <i className="ri-bank-card-2-fill"></i>
            <div className="text-lg">
              <h4 className="font-medium">
                &#8377; {props.fare[props.vehicleType]}
              </h4>
            </div>
          </div>
        </div>

        {/* confirm button */}
        <div>
          {!props.ConfirmRide ? (
            <button
              className="bg-red-800 px-4 py-1 rounded-full text-white"
              onClick={() => {
                props.createRide();
              }}
            >
              Confirm Ride
            </button>
          ) : (
            <button
              className="bg-red-800 px-4 py-1 rounded-full text-white"
              onClick={() => {
                props.setConfirmRide(false);
              }}
            >
              Cancel Ride
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedRidePanel;
