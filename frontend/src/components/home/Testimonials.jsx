import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      content:
        "This course completely transformed how I speak English. I went from being hesitant to speak in meetings to confidently leading discussions with international clients.",
      avatar: "R",
    },
    {
      name: "Priya Patel",
      role: "MBA Student",
      content:
        "The audio-visual approach made learning so much easier. I could actually hear the pronunciation while reading the text, which helped me improve my accent significantly.",
      avatar: "P",
    },
    {
      name: "Vikram Singh",
      role: "Marketing Manager",
      content:
        "I've tried many English courses before, but this is the first one that actually helped me think in English rather than translating from my native language.",
      avatar: "V",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from our students who have transformed their English speaking
            abilities with our course.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
