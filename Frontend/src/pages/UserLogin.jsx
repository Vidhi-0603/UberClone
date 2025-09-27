import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userAuth.api.js";
import { AuthContext } from "../auth/AuthProvider.jsx";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState({});
  const { setUser } = useContext(UserDataContext);
  const { setRole } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const data = await loginUser(userData);
    setUser(data.user);
    setRole(data.role);
    setEmail("");
    setPassword("");
    navigate("/home", { replace: true });
  };

  return (
    <>
      {/* Mobile Layout (default) */}
      <div className="md:hidden p-8 flex border flex-col justify-between h-screen">
        <div>
          <Link to="/">
            <img
              className="w-16 bg-transparent mb-5"
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
              alt="Uber Logo"
            />
          </Link>

          <div className="text-center text-3xl text-red-900 font-bold mb-5">
            User Login
          </div>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="mb-5"
          >
            <div className="my-2">
              <label htmlFor="email">
                <h2 className="text-xl font-semibold mb-4">
                  What's your Email
                </h2>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                email
                placeholder="email@example.com"
                className="border rounded p-2 w-full text-lg bg-[#eeeeee]"
              />
            </div>
            <div className="mb-7">
              <label htmlFor="password">
                <h2 className="text-xl font-semibold mb-4">Enter password</h2>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password here"
                className="border rounded p-2 w-full text-lg bg-[#eeeeee]"
              />
            </div>
            <div className="text-center mb-5">
              <button className="bg-red-900 w-full hover:bg-red-800 rounded text-white text-xl font-base px-6 py-2 transition-all duration-200 hover:scale-105 shadow-lg">
                Sign In
              </button>
            </div>
            <div className="flex items-center justify-start text-lg">
              <h2>New to Uber?</h2>
              <Link to="/user-register" className="ml-5 font-bold text-red-800">
                Register
              </Link>
            </div>
          </form>
        </div>

        <div className="bg-red-900 w-full hover:bg-red-800 rounded text-white text-center text-xl font-base px-4 py-1 transition-all duration-200 hover:scale-105 shadow-lg">
          <Link to="/captain-login">Sign In as Captain</Link>
        </div>
      </div>

      {/* Tablet and Desktop Layout (md and up) */}
      <div className="hidden md:flex min-h-screen bg-gray-50">
        <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            {/* Logo */}
            <div className="text-center">
              <Link to="/">
                <img
                  className="mx-auto w-20 bg-transparent mb-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                  alt="Uber Logo"
                />
              </Link>
            </div>

            {/* Login Form Container */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-red-900 mb-2">
                  User Login
                </h1>
                <p className="text-gray-600">
                  Welcome back! Please sign in to your account.
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
                    className="block text-lg font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-lg font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-900 hover:bg-red-800 text-white text-xl font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Sign In
                </button>

                <div className="text-center">
                  <span className="text-gray-600">New to Uber?</span>
                  <Link
                    to="/user-register"
                    className="ml-2 font-bold text-red-800 hover:text-red-700 transition-colors duration-200"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>

            {/* Captain Login Link */}
            <div className="text-center">
              <Link
                to="/captain-login"
                className="inline-block w-full max-w-sm bg-red-900 hover:bg-red-800 text-white text-xl font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Sign In as Captain
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
