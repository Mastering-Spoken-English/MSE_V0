import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Failure from "./components/dashboard/Failure";
import Payment from "./components/dashboard/Payment";
import Success from "./components/dashboard/Success";
import AboutUs from "./components/home/AboutUs";
import CTA from "./components/home/CTA";
import Features from "./components/home/Features";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Navbar from "./components/home/Navbar";
import QandA from "./components/home/QandA";
import Testimonials from "./components/home/Testimonials";

// Home Page Component
const HomePage = () => {
  // Redirect authenticated users to their dashboard

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <Testimonials />
      <CTA />
      <QandA />
      <Footer />
      {/* Authentication Modals */}
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />

        {/* Protected General Routes (any authenticated user) */}
        <Route path="/payments" element={<Payment />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Failure" element={<Failure />} />

        {/* Catch-all route for 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-gray-600 mb-4">Page not found</p>
                <a href="/" className="text-blue-600 hover:underline">
                  Go back home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
