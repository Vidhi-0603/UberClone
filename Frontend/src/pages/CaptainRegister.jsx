import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { registerCaptain } from "../api/captainAuth.api";
import { AuthContext } from "../auth/AuthProvider";

const CaptainRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [type, setType] = useState("Car");
  const [capacity, setCapacity] = useState(0);

  const { setCaptain } = useContext(CaptainDataContext);
  const { setRole } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = {
      firstname,
      lastname,
      email,
      password,
      color,
      plate,
      type,
      capacity,
    };

    const data = await registerCaptain(newCaptain);

    setCaptain(data.captain);
    setRole(data.role);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setColor("");
    setCapacity("");
    setType("");
    setPlate("");

    navigate("/captainhome");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg mx-auto">
        

        {/* Registration Form Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 mb-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-red-900 mb-2">
              Captain Register
            </h1>
            <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
              Join as a captain and start earning with Uber
            </p>
          </div>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="space-y-6"
          >
            {/* Name Section */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Enter Name
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  placeholder="Firstname"
                  className="w-1/2 px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Lastname"
                  className="w-1/2 px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Email Section */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700 mb-3"
              >
                Enter email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email@example.com"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Password Section */}
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-semibold text-gray-700 mb-3"
              >
                Enter password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password here"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Vehicle Section */}
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-3">
                Vehicle Information
              </p>

              {/* Vehicle Color and Plate */}
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                  placeholder="Vehicle color"
                  className="w-1/2 px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
                <input
                  type="text"
                  id="plate"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  required
                  placeholder="Plate number"
                  className="w-1/2 px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Vehicle Capacity and Type */}
              <div className="flex gap-3">
                <input
                  type="number"
                  id="capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  required
                  placeholder="Capacity (e.g., 5)"
                  className="w-1/2 px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
                <select
                  id="type"
                  className="w-1/2 px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="Car">Car</option>
                  <option value="Motorcycle">Motorcycle</option>
                  <option value="Auto">Auto</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-900 hover:bg-red-800 text-white text-lg sm:text-xl font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
            >
              Create account
            </button>

            {/* Sign In Link */}
            <div className="text-center text-sm sm:text-base">
              <span className="text-gray-600">Already have an account?</span>
              <Link
                to="/captain-login"
                className="ml-2 font-bold text-red-800 hover:text-red-700 transition-colors duration-200"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>

        {/* User Login Link */}
        <div className="text-center">
          <Link
            to="/user-login"
            className="inline-block w-full bg-red-900 hover:bg-red-800 text-white text-lg sm:text-xl font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
          >
            Sign In as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainRegister;
