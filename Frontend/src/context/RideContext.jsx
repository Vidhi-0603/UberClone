import React, { createContext, useState } from 'react'

export const RideDataContext = createContext();

const RideContext = ({ children }) => {
    
    const [rideData, setRideData] = useState({});

  return (
      <RideDataContext.Provider value={{ rideData, setRideData }}>
        {children}
      </RideDataContext.Provider>
    );
}

export default RideContext