"use client";

import { MapPin, Shield } from "lucide-react";

function RazorpayPayment() {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-5">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-8 h-8 text-white" />
          <h2 className="text-xl font-bold text-white">Indian Authors</h2>
        </div>
        <p className="text-red-100 text-sm">Pay online in INR using RAZORPAY</p>
      </div>

      <div className="p-3 sm:p-5">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Razorpay</h3>
        </div>

        {/* PayUmoney Payment Gateway */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 cursor-pointer group">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-lg font-semibold text-gray-800">
                Payment Secured by
              </span>
              <span className="text-2xl font-bold text-blue-600">Razorpay</span>
            </div>
          </div>

          <div>
            <img src="/r.png" className="mx-auto" />
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg">
            Proceed with Razorpay
          </button>
        </div>

        <div className="text-center mt-5">
          <p className="text-gray-600 mb-4">
            Secure payments powered by RazorPay
          </p>
          <div className="inline-flex items-center gap-2 text-green-600">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">SSL Secured</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RazorpayPayment;
