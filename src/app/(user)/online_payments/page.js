"use client"

import React, { useState } from 'react';
import { CreditCard, DollarSign, Globe, MapPin, ChevronDown, Shield, Check } from 'lucide-react';

export default function PaymentUI() {
  const [selectedAmount, setSelectedAmount] = useState('25.00');
  const [selectedPayment, setSelectedPayment] = useState('paypal');

  const amounts = [
    { value: '25.00', label: '$25.00 USD' },
    { value: '50.00', label: '$50.00 USD' },
    { value: '75.00', label: '$75.00 USD' },
    { value: '100.00', label: '$100.00 USD' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Payment Method
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Secure and convenient payment options for authors worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Foreign Authors Section */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Foreign Authors</h2>
              </div>
              <p className="text-red-100 text-lg">
                Pay online in USD (PayPal, Credit Card, Debit Card)
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-red-600" />
                  Processing Fees
                </h3>
                
                <div className="relative">
                  <select 
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(e.target.value)}
                    className="w-full p-4 border-2 border-red-200 rounded-xl text-lg font-semibold bg-white focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    {amounts.map((amount) => (
                      <option key={amount.value} value={amount.value}>
                        {amount.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-600 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {/* PayPal Option */}
                <div 
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedPayment === 'paypal' 
                      ? 'border-red-500 bg-red-50 shadow-lg' 
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                  }`}
                  onClick={() => setSelectedPayment('paypal')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">PayPal</span>
                      </div>
                      <span className="font-semibold text-gray-800">PayPal</span>
                    </div>
                    {selectedPayment === 'paypal' && (
                      <Check className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </div>

                {/* Credit/Debit Card Option */}
                <div 
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedPayment === 'card' 
                      ? 'border-red-500 bg-red-50 shadow-lg' 
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                  }`}
                  onClick={() => setSelectedPayment('card')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-12 h-12 p-2 bg-gray-800 text-white rounded-lg" />
                      <span className="font-semibold text-gray-800">Debit or Credit Card</span>
                    </div>
                    {selectedPayment === 'card' && (
                      <Check className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500 mb-6">
                Powered by PayPal
              </div>

              {/* Instructions */}
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Payment Instructions:</h4>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span>Please select required Payment Option and Fee and enter amount (Eg- 50 or 75 or 100 as required)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span>Click add to Cart and proceed for required payment option</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span>Select the Check out (For Credit Card or debit Card Option) otherwise you can check out with PayPal.</span>
                  </li>
                </ol>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg">
                Add to Cart - ${selectedAmount} USD
              </button>
            </div>
          </div>

          {/* Indian Authors Section */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Indian Authors</h2>
              </div>
              <p className="text-red-100 text-lg">
                Pay online in INR using PayUmoney
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  PayUmoney
                </h3>
                <p className="text-red-600 text-lg font-medium mb-6">
                  Click on the image
                </p>
              </div>

              {/* PayUmoney Payment Gateway */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 cursor-pointer group">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-semibold text-gray-800">Payment Secured by</span>
                    <span className="text-2xl font-bold text-blue-600">PayUmoney</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-200">
                    <div className="h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">VISA</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-200">
                    <div className="h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Maestro</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-200">
                    <div className="h-8 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">MasterCard</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-200 col-span-2 sm:col-span-1">
                    <div className="h-8 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Net Banking</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">Secure payments powered by PayUmoney</p>
                  <div className="inline-flex items-center gap-2 text-green-600">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">SSL Secured</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg">
                Proceed with PayUmoney
              </button>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">Secure</span>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <CreditCard className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">Multiple Options</span>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Check className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 p-6 bg-white rounded-2xl shadow-lg">
          <p className="text-gray-600">
            <Shield className="w-5 h-5 inline mr-2 text-green-600" />
            All payments are secured with industry-standard encryption
          </p>
        </div>
      </div>
    </div>
  );
}