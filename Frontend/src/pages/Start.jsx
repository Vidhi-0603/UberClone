import React from "react";
import { Car, MapPin, Clock, Shield, ChevronRight } from "lucide-react";

export default function RideHailingLanding() {
  const handleContinue = () => {
    window.location.href = "/user-login";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">RideNow</span>
            </div>

            <div className="flex items-center">
              <button
                onClick={handleContinue}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Ride, <span className="text-red-600">Anytime</span>,
                Anywhere
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience seamless transportation at your fingertips. Safe,
                reliable, and affordable rides whenever you need them.
              </p>
              <button
                onClick={handleContinue}
                className="group bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition inline-flex items-center space-x-2"
              >
                <span>Continue to Login</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 shadow-xl">
                <Car className="h-64 w-64 mx-auto text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-red-600">RideNow</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Pickup
              </h3>
              <p className="text-gray-600">
                Set your location and get matched with nearby drivers instantly.
                Track your ride in real-time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast Service
              </h3>
              <p className="text-gray-600">
                Average pickup time of under 5 minutes. We value your time and
                get you moving quickly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Safe & Secure
              </h3>
              <p className="text-gray-600">
                All drivers are verified and rated. Your safety is our top
                priority with 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            How It <span className="text-red-600">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Request a Ride
              </h3>
              <p className="text-gray-600">
                Enter your destination and request a ride with just a few taps.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get Matched
              </h3>
              <p className="text-gray-600">
                We'll connect you with a nearby driver and show their arrival
                time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enjoy Your Ride
              </h3>
              <p className="text-gray-600">
                Sit back, relax, and enjoy a comfortable ride to your
                destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-50 mb-8">
            Join thousands of riders who trust RideNow for their daily commute
          </p>
          <button
            onClick={handleContinue}
            className="group bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center space-x-2"
          >
            <span>Continue to Login</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold">RideNow</span>
          </div>
          <p className="text-gray-400 text-lg mb-6">
            Connecting People, Simplifying Journeys
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              &copy; 2024 RideNow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
