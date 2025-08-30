import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Master Spoken English with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Unlock your potential with our comprehensive audio-visual e-book
                course designed to make you a fluent English speaker.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/payments"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Start Learning Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <a
                href="#features"
                className="group bg-white/80 backdrop-blur-sm text-slate-800 border-2 border-slate-200 text-center px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:border-blue-200"
              >
                Explore Features
              </a>
            </div>

            {/* Stats or highlights */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">1000+</div>
                <div className="text-sm text-slate-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">98%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">4.9★</div>
                <div className="text-sm text-slate-600">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>

            {/* Main card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 group-hover:shadow-3xl transition-all duration-300">
              <div className="rounded-2xl overflow-hidden relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10"></div>

                <div className="w-full h-80 overflow-hidden rounded-2xl">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-400 rounded-full shadow-lg animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {/* Badge */}
              <div className="absolute -top-3 left-8 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Premium Course
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
