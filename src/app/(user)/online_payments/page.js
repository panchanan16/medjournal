"use client"

import React, { useState } from 'react';
import { CreditCard, DollarSign, Globe, MapPin, ChevronDown, Shield, Check } from 'lucide-react';
import StripePayement from '@/components/payments/StripePayement';
import RazorpayPayment from '@/components/payments/RazorpayPayment';


export default function PaymentUI() {

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-2">
            Choose Your Payment Method
          </h1>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Secure and convenient payment options for authors worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Foreign Authors Section */}
          <StripePayement />
          {/* Indian Authors Section */}
          <RazorpayPayment />
          
        </div>

        {/* Footer */}
        <div className="text-center mt-12 p-3 bg-white rounded-2xl shadow-lg">
          <p className="text-gray-600">
            <Shield className="w-5 h-5 inline mr-2 text-green-600" />
            All payments are secured with industry-standard encryption
          </p>
        </div>
      </div>
    </div>
  );
}