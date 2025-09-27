import React from 'react'

const VehiclePanel = (props) => {
  
  return (
    <div>
      <h3 className="text-2xl font-semibold underline mb-3">Pick Your Ride</h3>
      <h5
        ref={props.vehiclePanelCloseRef}
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="absolute right-6 top-6 text-2xl opacity-0"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <div
        onClick={() => {
          props.setSelectedRidePanelOpen(true);
          props.selectVehicle("Car");
        }}
        className="flex items-center mb-3 border-2 border-gray-400 p-2 rounded-xl justify-between"
      >
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY8AdbzbAMTo8-CVmbJ83KmL0zMdus0ugWNUMePGgoZVIs7qXn4eQgxhvFkYhjaqK30o&usqp=CAU"
          alt="uber car"
        />
        <div className="w-1/2">
          <h5 className="font-medium">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h5>
          <h6 className="text-xs">2 mins away</h6>
          <p className="text-xs">Affordable, compact rides.</p>
        </div>
        <h2 className="font-bold">&#8377;{props.fare.Car}</h2>
      </div>

      <div
        onClick={() => {
          props.setSelectedRidePanelOpen(true);
          props.selectVehicle("Motorcycle");
        }}
        className="flex items-center mb-3 border-2 border-gray-400 p-2 rounded-xl justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
          alt="uber car"
        />
        <div className="w-1/2 ">
          <h5 className="font-medium">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h5>
          <h6 className="text-xs">3 mins away</h6>
          <p className="text-xs">Affordable, motorcycle rides.</p>
        </div>
        <h2 className="font-bold">&#8377;{props.fare.Motorcycle}</h2>
      </div>

      <div
        onClick={() => {
          props.setSelectedRidePanelOpen(true);
          props.selectVehicle("Auto");
        }}
        className="flex items-center mb-3 border-2 border-gray-400 p-2 rounded-xl justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          alt="uber car"
        />
        <div className="w-1/2 ">
          <h5 className="font-medium">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h5>
          <h6 className="text-xs">5 mins away</h6>
          <p className="text-xs">Affordable, auto rides.</p>
        </div>
        <h2 className="font-bold">&#8377;{props.fare.Auto}</h2>
      </div>
    </div>
  );
}

export default VehiclePanel