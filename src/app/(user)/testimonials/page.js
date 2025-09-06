import { Quote, ArrowRight, Heart } from 'lucide-react'
import Link from 'next/link'
import TestimonialSection from '@/components/TestimonialSection'
import { _GET } from '@/request/request'

export default async function TestimonialsPage() {

  const testimonis = await _GET(`testimonial/readAll`, 'core')

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
      <TestimonialSection testimonials={testimonis ? testimonis : []} />

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
            <Link href={'/submit_article'}>
              <button className="group bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-red-50 transition-all duration-300 hover:scale-110 transform shadow-2xl hover:shadow-white/25">
                <span className="flex items-center space-x-3">
                  <span>Submit Articles</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}