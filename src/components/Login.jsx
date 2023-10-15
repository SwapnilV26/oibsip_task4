import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";


const Login = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Authenticated successfully");
      navigate("/");
    } catch (error) {
      toast.error("Email or Password is incorrect");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url(./assets/bg-img.jpg)] bg-cover bg-no-repeat">
      <div className="py-6 px-10 bg-white rounded-md lg:w-[30%]">
        <div className="flex flex-col justify-center items-center">
          <span className="text-center font-semibold mb-5 mt-2 text-3xl text-indigo-500 underline tracking-tighter">
            Login here
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-lg font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
              placeholder="Enter email here..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-lg font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              placeholder="Enter password here..."
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded focus:ring-blue-600 focus:border-blue-600 block w-full p-2 "
              required
            />
          </div>

          <button className="w-full mt-6 mb-3 text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-md text-base px-5 py-2 text-center">
            Login
          </button>
          <hr />
          <p className="text-base mt-1 text-center font-normal text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-500 hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login