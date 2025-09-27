import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { loginCaptain } from "../api/captainAuth.api";
import { AuthContext } from "../auth/AuthProvider";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const { setRole } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = {
      email,
      password,
    };

    const data = await loginCaptain(newCaptain);
    setCaptain(data.captain);
    setRole(data.role);
    setEmail("");
    setPassword("");
    navigate("/captainhome", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link to="/">
            <img
              className="mx-auto w-16 sm:w-20 bg-transparent"
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
              alt="Uber Logo"
            />
          </Link>
        </div>

        {/* Login Form Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-red-900 mb-2">
              Captain Login
            </h1>
            <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
              Welcome back, Captain! Please sign in to your account.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4"
              >
                What's your Email
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

            <div>
              <label
                htmlFor="password"
                className="block text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4"
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

            <button
              type="submit"
              className="w-full bg-red-900 hover:bg-red-800 text-white text-lg sm:text-xl font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
            >
              Sign In
            </button>

            <div className="text-center text-sm sm:text-base">
              <span className="text-gray-600">New to Uber?</span>
              <Link
                to="/captain-register"
                className="ml-2 font-bold text-red-800 hover:text-red-700 transition-colors duration-200"
              >
                Register
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

export default CaptainLogin;