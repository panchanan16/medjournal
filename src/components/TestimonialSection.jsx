"use client";

import { BASE_URL } from "@/config/api.config";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

function TestimonialSection({ testimonials }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <div className="py-20 bg-gradient-to-r from-red-600 to-red-700">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-red-600"></div>

          <div className="text-center mb-8">
            <Quote className="w-12 h-12 text-red-300 mx-auto mb-6" />
            <div className="text-lg md:text-lg text-gray-800 leading-relaxed mb-8">
              "{testimonials[currentTestimonial].user_comment}"
            </div>

            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-24 h-24 overflow-hidden bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white">
                <img className="w-full h-full object-cover" src={`${BASE_URL}${testimonials[currentTestimonial].user_img}`} alt={testimonials[currentTestimonial].user_name} />
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-800 text-lg mb-1">
                  {testimonials[currentTestimonial].user_name}
                </div>
                <div className="text-red-600 font-semibold text-sm">
                  {testimonials[currentTestimonial].designation}
                </div>
                <div className="text-gray-500 font-medium text-xs">
                  {testimonials[currentTestimonial].university}
                </div>
              </div>
            </div>

            <div className="text-gray-500 text-sm">
              Posted On {new Date(testimonials[currentTestimonial].posted_on).toLocaleDateString('en-US')}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-red-100 hover:bg-red-600 text-red-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-red-600 w-8"
                      : "bg-red-200 hover:bg-red-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-red-100 hover:bg-red-600 text-red-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
