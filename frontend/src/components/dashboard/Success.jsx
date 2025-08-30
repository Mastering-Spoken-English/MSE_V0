import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="text-green-600 text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Payment Successful
        </h1>
        <p className="text-lg font-medium text-gray-800 mb-2">
          You are now enrolled!
        </p>
        <p className="text-gray-600">
          You will receive access to your course within 24 hours. <br />
          If not, please contact : 1234567890
          .
        </p>
      </div>
    </div>
  );
};

export default Success;
