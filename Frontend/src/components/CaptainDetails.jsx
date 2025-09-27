import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainDetails = () => {
  const { captain, loading } = useContext(CaptainDataContext);
  if (loading) return <p>Loading captain...</p>;
  if (!captain) return <p>No captain data found</p>;

  return (
    
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">
            {captain?.fullname?.firstname + " " + captain?.fullname?.lastname}
          </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">{ captain?.vehicle?.plate}</h4>
        </div>
      </div>
  );
};

export default CaptainDetails;
