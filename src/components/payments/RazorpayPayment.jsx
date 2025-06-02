"use client";

import { entityCore } from "@/config/api.config";
import { useAuth } from "@/context/AuthContext";
import { _POST } from "@/request/post_request";
import { DollarSign, LoaderCircleIcon, MapPin, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RazorpayPayment() {
  const [selectedAmount, setSelectedAmount] = useState("0.00");
  const [message, setMessage] = useState(null);
  const [isProceed, setIsProceed] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    setIsProceed(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    try {
      if (!user) {
        throw new Error("You need to Logged in to make a Payment");
      }
      const response = await fetch(`${entityCore}/razorpay/payment/create`, {
        method: "POST",
        body: JSON.stringify({ amount: selectedAmount }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const paymentOrder = await response.json();

      if (paymentOrder && paymentOrder.status) {
        setIsProceed(false);
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          amount: paymentOrder.order.amount.toString(),
          currency: paymentOrder.order.currency,
          name: "Your Company",
          description: "Test Transaction",
          order_id: paymentOrder.order.id,
          handler: async function (response) {
            const data = {
              orderId: paymentOrder.order.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };

            const result = await _POST(
              "razorpay/payment/verify",
              data,
              "POST",
              null,
              "core"
            );
            if (result) {
              router.push(
                `/payment_confirm?payment_ref=${data.razorpayPaymentId}&amount=${paymentOrder.order.amount}`
              );
            }
          },
          prefill: {
            name: "Your Name",
            email: "your.email@example.com",
            contact: "9999999999",
          },
          theme: { color: "#61dafb" },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        setIsProceed(false);
        throw new Error("Something Went Wrong! please try again.");
      }
    } catch (error) {
      setIsProceed(false);
      console.log(error);
      alert(error.message);
    }
  }

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
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-red-600" />
            Processing Fees
          </h3>

          <div className="relative">
            <input
              type="text"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
              className="w-full p-2 border-2 border-red-200 rounded-xl text-lg font-semibold bg-white focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 appearance-none cursor-pointer"
            />
          </div>
        </div>
        <button
          onClick={displayRazorpay}
          className="w-full cursor-pointer flex justify-center bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          {isProceed ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            ` Proceed - ₹ ${selectedAmount} with Razorpay`
          )}
        </button>

        {/* PayUmoney Payment Gateway */}
        <div className="bg-gradient-to-br mt-5 from-gray-50 to-white p-4 rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 cursor-pointer group">
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
