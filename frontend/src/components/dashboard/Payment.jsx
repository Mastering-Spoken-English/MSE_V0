// Payment.jsx
import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  // Fixed course data (only 1 course)
  const courseData = {
    courseTitle: "Mastering Spoken English",
    courseDescription:
      "Learn spoken English from basics to advanced with lifetime access.",
    courseThumbnail: Logo, // replace with real image path
    coursePrice: 199,
    discount: 0,
    educator: {
      name: "Mastering Spoken English",
      imageUrl: Logo, // replace with real image path
    },
  };

  // State for user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all your details before proceeding.");
      return;
    }

    try {
      // Step 1: Create order with backend
      const orderResponse = await fetch(`${API_BASE_URL}/api/payment/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // sending user details
      });

      const orderData = await orderResponse.json();
      console.log("Order Response:", orderData);

      if (!orderData.success) {
        alert("Error creating order: " + (orderData.error || "Unknown error"));
        return;
      }

      // Step 2: Initialize Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // from .env
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Spoken English LMS",
        description: `Purchase ${courseData.courseTitle}`,
        order_id: orderData.order.id,
        handler: async function (response) {
          try {
            const verifyResponse = await fetch(
              `${API_BASE_URL}/api/payment/verify`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                }),
              }
            );

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              navigate("/success"); // ✅ Redirect on success
            } else {
              navigate("/failure"); // ❌ Redirect on verification failure
            }
          } catch (error) {
            console.error("Verification error:", error);
            navigate("/failure"); // ❌ Redirect on error
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Error initiating payment");
    }
  };

  const finalPrice = (
    courseData.coursePrice -
    (courseData.discount * courseData.coursePrice) / 100
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Complete Your Purchase
          </h1>
          <p className="text-gray-600">
            You're one step away from starting your learning journey
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          {/* Course Preview Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full flex flex-col h-full">
            <div className="relative">
              <img
                src={courseData.courseThumbnail}
                alt={courseData.courseTitle}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {courseData.courseTitle}
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {courseData.courseDescription}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                <img
                  src={courseData.educator.imageUrl}
                  alt={courseData.educator.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium text-gray-800">
                    {courseData.educator.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col h-full">
            {/* User Form */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Your Details
              </h2>
              <p className="text-gray-600 mb-4">
                Please provide your details to continue
              </p>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 mb-3 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 mb-3 rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 mb-3 rounded-lg"
              />
            </div>

            {/* Price Summary */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Payment Summary
              </h2>
              <p className="text-gray-600">Review your order details</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Course Price</span>
                <span className="font-medium">₹{courseData.coursePrice}</span>
              </div>
              {courseData.discount > 0 && (
                <>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">
                      Discount ({courseData.discount}%)
                    </span>
                    <span className="text-green-600 font-medium">
                      -₹
                      {(
                        (courseData.discount * courseData.coursePrice) /
                        100
                      ).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200"></div>
                </>
              )}
              <div className="flex justify-between items-center py-2">
                <span className="text-lg font-semibold text-gray-800">
                  Total Amount
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  ₹{finalPrice}
                </span>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl mt-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
                Pay ₹{finalPrice} Now
              </div>
            </button>

            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Secured by Razorpay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
