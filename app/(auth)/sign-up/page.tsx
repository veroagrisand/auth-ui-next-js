"use client"
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="bg-pageBg h-screen flex justify-center items-center">
      <aside className="bg-slate-600 w-full max-w-sm p-4 md:p-6 rounded-md shadow-sm bg-opacity-15">
        <h1 className="text-white font-bold text-center mb-4">Sign Up</h1>
        <form action="">
          <input
            type="text"
            name=""
            placeholder="Full Name"
            className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name=""
            placeholder="Email Address"
            className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-md mt-2"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              placeholder="Password"
              className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-md mt-2"
            />
            <span
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash size={18} color="#666" />
              ) : (
                <FaEye size={18} color="#666" />
              )}
            </span>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name=""
              placeholder="Confirm Password"
              className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-md mt-2"
            />
            <span
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={18} color="#666" />
              ) : (
                <FaEye size={18} color="#666" />
              )}
            </span>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-full mt-4"
          >
            Sign Up
          </button>
          <div className="text-center mt-2">
            <a href="/sign-in" className="text-xs text-white hover:text-gray-600">
              Already have an account?
            </a>
          </div>
        </form>
      </aside>
    </main>
  );
};

export default SignUpForm;