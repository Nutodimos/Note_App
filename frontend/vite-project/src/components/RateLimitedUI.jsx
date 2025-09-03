import React from "react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Rate Limit Exceeded</h2>
        <p className="text-gray-700 mb-4">
          You have exceeded the allowed number of requests. Please wait a moment
          before trying again.
        </p>
        <p className="text-gray-500 text-sm">
          Wait a few seconds and try again.
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUI;
