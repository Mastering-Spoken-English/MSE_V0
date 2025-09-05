import React from "react";

const Failure = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <svg
            className="w-16 h-16 text-red-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Failed
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          We're sorry, but your payment could not be processed. Please try again
          or contact our support team for assistance.
        </p>

        {/* Contact Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Need Help? Contact Us
          </h2>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-gray-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Email:
                </span>
              </div>
              <a
                href="mailto:speakmasterteam@gmail.com"
                className="text-blue-600 underline font-medium hover:text-blue-800 transition-colors"
              >
                speakmasterteam@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-gray-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Phone:
                </span>
              </div>
              <a
                href="tel:9019562849"
                className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                9019562849
              </a>
            </div>
          </div>
        </div>


        {/* Additional Info */}
        <p className="text-xs text-gray-500 mt-6">
          Our support team is available 24/7 to help resolve any payment issues.
        </p>
      </div>
    </div>
  );
};

export default Failure;
