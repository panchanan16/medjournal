"use client"

import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Loader2, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

const PaymentConfirmation = () => {
    const [paymentStatus, setPaymentStatus] = useState('processing'); // 'processing', 'success', 'failed'
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams()

    // Simulate payment confirmation process
    const confirmPayment = async (paymentIntentId) => {
        setLoading(true);
        setPaymentStatus('processing');
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

        try {
            const { paymentIntent, error: stripeError } = await stripe.retrievePaymentIntent(paymentIntentId);
            // console.log(paymentIntent)
            if (stripeError) {
                throw new Error(stripeError.message)
            }
            if (paymentIntent) {
                switch (paymentIntent.status) {
                    case 'succeeded':
                        setPaymentStatus('success');
                        setPaymentDetails({
                            id: paymentIntent.id,
                            amount: paymentIntent.amount,
                            currency: 'usd',
                            created: new Date(paymentIntent.created * 1000).toDateString(),
                        });;
                        break;
                    case 'processing':
                        setPaymentStatus('processing');
                        break;
                    case 'requires_payment_method':
                        setPaymentStatus('failed');
                        setPaymentDetails({
                            error: 'Payment failed. Please try again.'
                        });

                        break;
                    default:
                        setSuccess('unknown');
                }
            } else {
                setPaymentStatus('failed');
                setPaymentDetails({
                    error: 'Your payment was declined. Please try a different payment method.'
                });
            }
        } catch (error) {
            setPaymentStatus('failed');
            setPaymentDetails({
                error: 'Network error. Please check your connection and try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const paymentIntentId = searchParams.get('payment_intent_client_secret');
        if (paymentIntentId) {
            confirmPayment(paymentIntentId);
        }
    }, []);

    const StatusIcon = () => {
        switch (paymentStatus) {
            case 'processing':
                return <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />;
            case 'success':
                return <CheckCircle className="w-16 h-16 text-green-500" />;
            case 'failed':
                return <XCircle className="w-16 h-16 text-red-500" />;
            default:
                return <CreditCard className="w-16 h-16 text-gray-400" />;
        }
    };

    const getStatusMessage = () => {
        switch (paymentStatus) {
            case 'processing':
                return {
                    title: 'Processing Payment...',
                    subtitle: 'Please wait while we confirm your payment',
                    bgColor: 'bg-blue-50',
                    borderColor: 'border-blue-200'
                };
            case 'success':
                return {
                    title: 'Payment Successful!',
                    subtitle: 'Thank you for your payment. Your transaction has been completed.',
                    bgColor: 'bg-green-50',
                    borderColor: 'border-green-200'
                };
            case 'failed':
                return {
                    title: 'Payment Failed',
                    subtitle: 'There was an issue processing your payment.',
                    bgColor: 'bg-red-50',
                    borderColor: 'border-red-200'
                };
            default:
                return {
                    title: 'Ready to Process',
                    subtitle: 'Click the button below to simulate payment confirmation',
                    bgColor: 'bg-gray-50',
                    borderColor: 'border-gray-200'
                };
        }
    };

    const statusInfo = getStatusMessage();

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Main Status Card */}
                <div className={`${statusInfo.bgColor} ${statusInfo.borderColor} border-2 rounded-lg p-8 text-center shadow-lg`}>
                    <div className="flex justify-center mb-6">
                        <StatusIcon />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {statusInfo.title}
                    </h1>

                    <p className="text-gray-600 mb-6">
                        {statusInfo.subtitle}
                    </p>

                    {/* Payment Details */}
                    {paymentStatus === 'success' && paymentDetails && (
                        <div className="bg-white rounded-lg p-4 mb-6 text-left">
                            <h3 className="font-semibold text-gray-900 mb-3">Payment Details</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Transaction ID:</span>
                                    <span className="font-mono text-gray-900">{paymentDetails.id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Amount:</span>
                                    <span className="font-semibold text-gray-900">
                                        ${(paymentDetails.amount / 100).toFixed(2)} {paymentDetails.currency.toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Date:</span>
                                    <span className="text-gray-900">
                                        {new Date(paymentDetails.created).toLocaleDateString('en-US')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error Details */}
                    {paymentStatus === 'failed' && paymentDetails?.error && (
                        <div className="bg-white rounded-lg p-4 mb-6 text-left">
                            <h3 className="font-semibold text-red-900 mb-2">Error Details</h3>
                            <p className="text-red-700 text-sm">{paymentDetails.error}</p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-3">
                        {paymentStatus === 'success' && (
                            <Link href={`/`}>
                                <button
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Continue to Home
                                </button>
                            </Link>
                        )}

                        {paymentStatus === 'failed' && (
                            <Link href={'/online_payments'} className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                                <button disabled={loading}>
                                    {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                                    Try Again
                                </button>
                            </Link>
                        )}

                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        Need help? <Link href="/about/contact_us" className="text-blue-600 hover:underline">Contact Support</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PaymentConfirmation;