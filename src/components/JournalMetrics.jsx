import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function JournalMetrics() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Journal Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-red-700 mb-2">45%</h3>
            <p className="text-gray-700">Acceptance Rate</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-orange-700 mb-2">10 days</h3>
            <p className="text-gray-700">Time to first decision</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-amber-700 mb-2">
              20-45 days
            </h3>
            <p className="text-gray-700">Review time</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-green-700 mb-2">60 days</h3>
            <p className="text-gray-700">Acceptance to publication</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/metrics"
            className="inline-flex items-center text-red-700 hover:text-red-800 font-medium"
          >
            View all insights
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JournalMetrics;
