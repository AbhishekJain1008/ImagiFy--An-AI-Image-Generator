import React from "react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    // background will be blur when the form is open
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop:backdrop-blur-md bg-black/60 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Sign Up
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.client_icon} alt="" className="h-3.5 w-3.5" />
          <input
            className="outline-none text-sm"
            type="text"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.email_icon} alt="" />
          <input
            className="outline-none text-sm"
            type="email"
            placeholder="Email id"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.lock_icon} alt="" />
          <input
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
