import React from "react";

const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white">
    <div className="relative w-40 h-32 overflow-hidden">
      {/* Road */}
      <div className="absolute bottom-0 w-full h-1 bg-gray-300"></div>

      {/* Car */}
      <img
        src="https://images.vexels.com/media/users/3/154661/isolated/preview/7288653d1853bbc9f5e2a844ffadb763-luxury-car-side-view-silhouette.png"
        alt="Car"
        className="absolute bottom-2 left-[-60px] w-16 animate-[carSlide_4s_linear_infinite]"
      />

      {/* Bike */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9_b3fx3waJTzSpbeuFXbwUU-eT0YL6NtYQ&s"
        alt="Bike"
        className="absolute bottom-8 left-[-60px] w-12 animate-[bikeSlide_4s_linear_infinite]"
      />
    </div>

    <p className="mt-6 text-gray-700 text-lg font-medium">
      Finding your ride...
    </p>

    {/* Tailwind keyframes */}
    <style>
      {`
        @keyframes carSlide {
          0% { transform: translateX(0); opacity: 1; }
          40% { transform: translateX(100px); opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 0; transform: translateX(0); }
        }

        @keyframes bikeSlide {
          0%, 40% { opacity: 0; transform: translateX(0); }
          50% { opacity: 1; }
          90% { transform: translateX(100px); opacity: 1; }
          100% { opacity: 0; transform: translateX(0); }
        }
      `}
    </style>
  </div>
);

export default Loader;
