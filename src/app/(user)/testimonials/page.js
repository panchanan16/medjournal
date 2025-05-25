'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ArrowLeft, ArrowRight, Heart, BookOpen, PenTool } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Creative Writer",
    avatar: "SC",
    rating: 5,
    text: "This journal has completely transformed my writing routine. The intuitive interface and beautiful design make it a joy to use every day. I've never been more consistent with my journaling!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Student",
    avatar: "MJ",
    rating: 5,
    text: "As someone who struggled with traditional paper journals, this digital solution is perfect. The search functionality and tags help me organize my thoughts like never before.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Life Coach",
    avatar: "ER",
    rating: 5,
    text: "I recommend this journal to all my clients. The mood tracking and reflection prompts have helped them develop better self-awareness and emotional intelligence.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Entrepreneur",
    avatar: "DK",
    rating: 5,
    text: "The goal tracking feature is incredible. Being able to document my journey and see my progress over time has been invaluable for my personal and professional growth.",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Therapist",
    avatar: "AP",
    rating: 5,
    text: "This journal strikes the perfect balance between simplicity and functionality. My patients love how easy it is to use while still offering powerful features for deep reflection.",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Artist",
    avatar: "JW",
    rating: 5,
    text: "The ability to add sketches and photos to my entries has made this journal truly unique. It's become my creative sanctuary where ideas come to life.",
    date: "1 month ago"
  }
]

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Header */}
      <div className="text-black py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-6">
            <Quote className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold mb-4">What Our Users Say</h1>
          <p className="text-xl text-red-800 max-w-2xl mx-auto">
            Discover how our journal has transformed the lives of thousands of writers, 
            thinkers, and dreamers around the world.
          </p>
        </div>
      </div>


      {/* Featured Testimonial */}
      <div className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
            
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-red-300 mx-auto mb-6" />
              <div className="text-lg md:text-lg text-gray-800 leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </div>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-800 text-lg mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-red-600 font-semibold text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
              
              <div className="text-gray-500 text-sm">
                {testimonials[currentTestimonial].date}
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
                      setCurrentTestimonial(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-red-600 w-8'
                        : 'bg-red-200 hover:bg-red-400'
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

      {/* Enhanced CTA Section */}
      <div className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-8 backdrop-blur-sm">
            <Heart className="w-10 h-10 text-red-200" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of writers who have discovered the power of digital journaling. 
            Transform your thoughts into growth, one entry at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-red-50 transition-all duration-300 hover:scale-110 transform shadow-2xl hover:shadow-white/25">
              <span className="flex items-center space-x-3">
                <span>Submit Articles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}