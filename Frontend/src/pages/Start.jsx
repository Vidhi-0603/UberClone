import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-screen w-full flex flex-col justify-between">
        <img
          className="w-16 mt-5 ml-7 bg-transparent"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <div className="bg-black text-white text-center py-5 px-5">
          <h3 className="mb-3 font-semibold text-2xl">Get started with Uber</h3>
          <Link
            to="/user-login"
            className="bg-red-900 rounded text-xl font-bold px-8 py-3 inline-flex items-center gap-2 hover:bg-red-800 transition-colors"
          >
            Continue
            <ArrowRight className="w-7 h-7 pt-1" />
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-3/4 max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex">
          {/* Left Section - Text and Button */}
          <div className="flex-1 flex flex-col justify-center p-12 bg-black text-white">
            <div className="mb-8">
              <img
                className="w-20 mb-8"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber Logo"
              />
            </div>

            <div className="space-y-8">
              <h3 className="font-semibold text-4xl lg:text-5xl leading-tight">
                Get started with Uber
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Your ride is just a tap away. Experience seamless transportation
                with our reliable service that connects you to your destination.
              </p>

              <Link
                to="/user-login"
                className="bg-red-900 hover:bg-red-800 rounded-xl text-xl font-bold px-12 py-4 inline-flex items-center gap-3 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Continue
                <ArrowRight className="w-6 h-6 pt-1" />
              </Link>
            </div>
          </div>

          {/* Right Section - Background Image */}
          <div className="flex-1 min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Uber background"
              className="w-full h-full object-cover"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
