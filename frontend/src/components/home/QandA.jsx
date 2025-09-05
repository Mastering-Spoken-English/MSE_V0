import React from "react";

const QandA = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 pb-4 border-b-2 border-blue-500">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {/* Q1: Bulk Orders */}
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Q1: How can I place a bulk order?
            </h3>
            <div className="text-gray-600">
              <p className="mb-2">
                For bulk orders, please call us directly at:
              </p>
              <a
                href="tel:1234567890"
                className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                9019562849
              </a>
              <p className="mt-2 text-sm">
                Our team will assist you with pricing and quantities.
              </p>
            </div>
          </div>

          {/* Q2: Email Confirmation */}
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Q2: When will I receive confirmation of my order?
            </h3>
            <div className="text-gray-600">
              <p className="mb-3">
                You will receive an email confirmation within
                <span className="bg-yellow-100 px-2 py-1 rounded font-semibold text-yellow-800 mx-1">
                  24 hours
                </span>
                of placing your order.
                <br/>

                 If not, contact us at{" "}
                <a
                  href="mailto:speakmasterteam@gmail.com"
                  className="text-blue-600 underline font-medium"
                >
                  speakmasterteam@gmail.com
                </a>
                .
              </p>

              <div className="flex items-center bg-red-50 p-3 rounded-md border-l-4 border-red-400">
                <svg
                  className="w-5 h-5 text-red-500 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-700 font-medium">
                  Please check your spam folder if you don't see the email in
                  your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QandA;
