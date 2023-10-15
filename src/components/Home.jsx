import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Home = ({ username, email }) => {
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="bg-slate-400 bg-opacity-50 p-10 rounded-lg mx-5">
        <Link to="/login">
          <button className="w-full text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-md text-base px-5 py-2 text-center">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="w-full my-5 text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-md text-base px-5 py-2 text-center">
            Signup
          </button>
        </Link>

        {username && email ? (
          <div className="text-lg bg-white rounded p-2 px-5 mb-4 font-medium">
            <h1>Welcome <i className="font-bold">{username}</i></h1>
            <h2>You authenticated with email id: <i className="font-bold">{email}</i></h2>
          </div>
        ) : (
          <h3 className="text-gray-800 font-bold mb-4 text-lg bg-white text-center rounded p-2">You haven't authenticated yet. Please Login!!!</h3>
        )}

        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 border-2 w-full text-white font-medium text rounded-md py-2 px-5"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Home;
