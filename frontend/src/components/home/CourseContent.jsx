import React from "react";

const CourseContent = () => {
  const modules = [
    {
      title: "Module 1: Foundations",
      lessons: 8,
      description:
        "Build a strong foundation with basic grammar and essential vocabulary.",
    },
    {
      title: "Module 2: Everyday Conversations",
      lessons: 12,
      description:
        "Master common phrases and expressions for daily interactions.",
    },
    {
      title: "Module 3: Professional Communication",
      lessons: 10,
      description:
        "Excel in workplace English with business vocabulary and email etiquette.",
    },
    {
      title: "Module 4: Advanced Fluency",
      lessons: 10,
      description:
        "Develop natural speech patterns and handle complex conversations.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Course Content
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to take you from basic to
            advanced fluency through practical, real-world lessons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-800">
                  {module.title}
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {module.lessons} lessons
                </span>
              </div>
              <p className="text-slate-600 mb-6">{module.description}</p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                View Lessons →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
