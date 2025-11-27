import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/userAuth.api.js";
import { UserDataContext } from "../context/UserContext.jsx";
import { AuthContext } from "../auth/AuthProvider.jsx";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { setUser } = useContext(UserDataContext);
  const { setRole } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      firstname,
      lastname,
      email,
      password,
    };

    const data = await registerUser(newUser);
    setUser(data.user);
    setRole(data.role);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    navigate("/home");
  };

  return (
    <>
      {/* Mobile Layout (default) */}
      <div className="md:hidden p-5 flex border flex-col justify-between h-screen">
        <div>
          

          <hr />
          <div className="text-center text-2xl mt-3 text-red-900 font-bold mb-3">
            User Register
          </div>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="mb-5"
          >
            <div className="my-1">
              <label htmlFor="firstname">
                <h3 className="text-lg font-semibold mb-2">Enter Name</h3>
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  placeholder="Firstname"
                  className="border rounded w-1/2 p-2 text-lg bg-[#eeeeee]"
                />
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  placeholder="Lastname"
                  className="border rounded w-1/2 p-2 text-lg bg-[#eeeeee]"
                />
              </div>
            </div>
            <hr />
            <div className="my-1">
              <label htmlFor="email">
                <h2 className="text-lg font-semibold mb-2">Enter email</h2>
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
            <div className="mb-5">
              <label htmlFor="password">
                <h2 className="text-lg font-semibold mb-2">Enter password</h2>
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
            <hr />
            <div className="text-center mb-3">
              <button className="bg-red-900 w-full hover:bg-red-800 rounded text-white text-lg font-base px-6 py-2 transition-all duration-200 hover:scale-105 shadow-lg">
                Create account
              </button>
            </div>
            <div className="flex items-center justify-start text-sm">
              <h3>Already have an account?</h3>
              <Link to="/user-login" className="ml-5 font-bold text-red-800">
                Sign In
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
        <div className="flex flex-col justify-center items-center w-full py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            
            

            {/* Register Form Container */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-red-900 mb-2">
                  User Register
                </h1>
                <p className="text-gray-600">
                  Create your account to get started with Uber.
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
                    htmlFor="firstname"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
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
                      className="w-1/2 px-4 py-3 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                    <input
                      type="text"
                      id="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required
                      placeholder="Lastname"
                      className="w-1/2 px-4 py-3 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-gray-700 mb-2"
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
                  Create account
                </button>

                <div className="text-center">
                  <span className="text-gray-600">
                    Already have an account?
                  </span>
                  <Link
                    to="/user-login"
                    className="ml-2 font-bold text-red-800 hover:text-red-700 transition-colors duration-200"
                  >
                    Sign In
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

export default UserRegister;
