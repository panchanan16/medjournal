"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { entityCore } from "@/config/api.config";
import { useState } from "react";
import { DollarSign, Globe, LoaderCircleIcon } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function HandleStripePaymentForm({ clientSecret, setMessage }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isReady, setIsReady] = useState(true);
  const [isPaying, setIsPaying] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPaying(true);

    if (!stripe || (!elements && !clientSecret)) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setIsPaying(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment_confirm`,
      },
      redirect: "always",
    });

    setIsPaying(false);

    if (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  if (clientSecret) {
    return (
      <form onSubmit={handleSubmit} className="mt-10">
        <PaymentElement onReady={() => setIsReady(false)} />
        <button
          disabled={isReady}
          className="bg-black text-white p-3 rounded-lg w-full mt-5 flex justify-center cursor-pointer"
        >
          {isPaying ? <LoaderCircleIcon className="animate-spin" /> : "Pay Now"}
        </button>
      </form>
    );
  }
}

function StripePayement() {
  const [selectedAmount, setSelectedAmount] = useState("0.00");
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState(null);
  const [isProceed, setIsProceed] = useState(false);
  const { user } = useAuth();

  console.log(user);

  const generateClientSecret = async () => {
    try {
      setIsProceed(true);
      if (!user) {
        throw new Error("You need to Logged in to make a Payment");
      }
      const response = await fetch(`${entityCore}/stripe/payment/create`, {
        method: "POST",
        body: JSON.stringify({ amount: selectedAmount, email: user.email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const keyObject = await response.json();

      if (keyObject && keyObject.status) {
        setIsProceed(false);
        return setClientSecret(keyObject.clientSecret);
      }
      setIsProceed(false);
      throw new Error("Something Went Wrong! please try again.");
    } catch (error) {
      setIsProceed(false);
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-8 h-8 text-white" />
          <h2 className="text-xl font-bold text-white">Foreign Authors</h2>
        </div>
        <p className="text-red-100 text-sm">
          Pay online in USD (amazon pay, Credit Card, Debit Card)
        </p>
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
          onClick={generateClientSecret}
          className="w-full flex justify-center bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          {isProceed ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            `Proceed - $ ${selectedAmount} USD`
          )}
        </button>
        <p className="mt-8 text-red-700 mx-auto bg-red-50 text-center rounded-2xl p-1">
          {message && message}
        </p>
        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <HandleStripePaymentForm
              clientSecret={clientSecret}
              setMessage={setMessage}
            />
          </Elements>
        )}

        {/* Instructions */}
        <div className="bg-red-50 p-3 mt-10 rounded-xl border-l-4 border-red-500">
          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
            Payment Instructions:
          </h4>
          <ol className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="bg-red-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center font-bold flex-shrink-0">
                1
              </span>
              <span className="text-sm">
                Please select required Payment Option and Fee and enter amount
                (Eg- 50 or 75 or 100 as required)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="bg-red-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center font-bold flex-shrink-0">
                2
              </span>
              <span className="text-sm">
                Click add to Cart and proceed for required payment option
              </span>
            </li>
            <li className="flex gap-3">
              <span className="bg-red-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center font-bold flex-shrink-0">
                3
              </span>
              <span className="text-sm">
                Select the Check out (For Credit Card or debit Card Option)
                otherwise you can check out with PayPal.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default StripePayement;
