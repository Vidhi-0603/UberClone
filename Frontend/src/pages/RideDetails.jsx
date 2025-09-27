import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { RideDataContext } from "../context/RideContext";

const RideDetails = () => {
    const location = useLocation();
  const { destinationData } = location.state || {}; 

  const { rideData, setRideData } = useContext(RideDataContext);
  
  const resetRideData = () => {
    setRideData({});
  }
  return (
    <div>
      <div className="p-6 mt-5">
        <h3 className="text-2xl font-semibold mb-5">Ride Details</h3>
        <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4">
          <div className="flex items-center gap-3 ">
            <img
              className="h-12 rounded-full object-cover w-12"
              src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
              alt=""
            />
            <h2 className="text-lg font-medium">
              {rideData?.user?.fullname?.firstname +
                " " +
                rideData?.user?.fullname?.lastname}
            </h2>
          </div>
          <h5 className="text-lg font-semibold">
            {destinationData?.distance.text}
          </h5>
          <h5 className="text-lg font-semibold">
            {destinationData?.duration.text}
          </h5>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-user-fill"></i>
              <div>
                <p className="text-md -mt-1 font-medium text-gray-600">{rideData?.pickup}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <p className="text-md -mt-1 font-medium text-gray-600">
                  {rideData?.destination}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{rideData?.fare} </h3>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full">
            <Link
              to="/captainhome"
              onClick={resetRideData}
              className="w-full mt-5 flex  text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
