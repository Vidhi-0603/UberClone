import React from "react";
import { ArrowRight, MapPin, Clock, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden relative h-screen w-full overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Logo with glow effect */}
          <div className="mt-8 ml-7">
            <div className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl">
              <img
                className="w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber Logo"
              />
            </div>
          </div>

          {/* Bottom CTA with glassmorphism */}
          <div className="bg-white/10 backdrop-blur-xl text-white py-8 px-6 rounded-t-[3rem] border-t border-white/20 shadow-2xl">
            <div className="space-y-4 mb-6">
              <h3 className="font-bold text-3xl tracking-tight">
                Your Journey Begins Here
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Experience premium rides at your fingertips. Fast, safe, and
                always reliable.
              </p>
            </div>

            <Link
              to="/user-login"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl text-lg font-bold px-8 py-4 w-full inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
            >
              Continue
              <ArrowRight className="w-6 h-6" />
            </Link>

            {/* Feature badges */}
            <div className="flex gap-4 mt-6 justify-center">
              <div className="flex items-center gap-1 text-xs text-white/70">
                <Clock className="w-4 h-4" />
                <span>24/7</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-white/70">
                <Shield className="w-4 h-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-white/70">
                <MapPin className="w-4 h-4" />
                <span>Anywhere</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden h-screen lg:flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="w-[85%] max-w-7xl relative z-10">
          <div className="bg-white/10 my-10 backdrop-blur-xl rounded-[xl] shadow-2xl overflow-hidden border border-white/20">
            <div className="flex">
              {/* Left Section - Text and Button */}
              <div className="flex-1 flex flex-col justify-center p-10 relative">
                {/* Decorative element */}
                <div className="absolute top-8 right-8 opacity-20">
                  <Sparkles className="w-16 h-16 text-yellow-300 animate-pulse" />
                </div>

                <div className="mb-5">
                  <div className="inline-block p-2 bg-grey-500 backdrop-blur-md rounded-xl shadow-xl">
                    <img
                      className="w-32"
                      src="https://images.vexels.com/media/users/3/154661/isolated/preview/7288653d1853bbc9f5e2a844ffadb763-luxury-car-side-view-silhouette.png"
                      alt="Car Logo"
                    />
                  </div>
                </div>

                <div className="space-y-4 text-white">
                  <div className="space-y-2">
                    <h3 className="font-bold text-6xl leading-tight bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                      Ride into the Future
                    </h3>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed max-w-md">
                    Experience next-generation transportation. Premium rides,
                    instant booking, and unmatched comfort await you.
                  </p>

                  {/* Feature grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <Clock className="w-8 h-8 mb-2 text-purple-400" />
                      <p className="text-sm font-semibold">24/7 Service</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <Shield className="w-8 h-8 mb-2 text-blue-400" />
                      <p className="text-sm font-semibold">Safe & Secure</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <MapPin className="w-8 h-8 mb-2 text-pink-400" />
                      <p className="text-sm font-semibold">Track Live</p>
                    </div>
                  </div>

                  <Link
                    to="/user-login"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl text-xl font-bold px-10 py-4 inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/50 mt-6 group"
                  >
                    Continue Your Journey
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Section - Image with overlay */}
              <div className="flex-1 min-h-[700px] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ride background"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-900/20 to-purple-900/40"></div> */}

                {/* Floating stats */}
                {/* <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                  <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                    <p className="text-3xl font-bold text-white">500K+</p>
                    <p className="text-sm text-white/70">Happy Riders</p>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                    <p className="text-3xl font-bold text-white">4.9★</p>
                    <p className="text-sm text-white/70">Rating</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
