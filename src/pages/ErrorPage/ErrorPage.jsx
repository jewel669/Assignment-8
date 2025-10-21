import React from "react";
import errorImg from "../../../src/assets/App-Error.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)] py-10">
      <img
        src={errorImg}
        alt="404 Error"
        className="w-72 md:w-96 mb-6"
      />
      <h1 className="text-5xl font-bold text-[#632ee3] mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops, page not found!</h2>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-6 py-3 font-semibold rounded-md text-white bg-gradient-to-r from-[#632ee3] to-[#9F62F2] hover:from-[#4b22c8] hover:to-[#7f4cf0]"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
