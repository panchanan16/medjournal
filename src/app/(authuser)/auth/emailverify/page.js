"use client"

import React, { useEffect, useState } from 'react';
import { Mail, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'


export default function EmailVerificationPage() {
    const { user } = useAuth()
    const [isResending, setIsResending] = useState(false);
    const [resendSuccess, setResendSuccess] = useState(false);
    const router = useRouter()

    const handleResendEmail = async () => {
        setIsResending(true);
        // Simulate API call
        setTimeout(() => {
            setIsResending(false);
            setResendSuccess(true);
            setTimeout(() => setResendSuccess(false), 3000);
        }, 2000);
    };

    console.log(user)

    useEffect(() => {
        const token = Cookies.get('token')
        if (!token) {
            return router.replace('/login')
        } else if (token && user && user.isEmailVerified) {
            return router.replace('/auth/user')
        }
    }, [user])



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Verify Your Email
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
                    </p>
                </div>

                {/* Email Display */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Email sent to:</p>
                            <p className="font-medium text-gray-900 break-all">{user && user.email}</p>
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                {resendSuccess && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <p className="text-green-800 text-sm">
                                Verification email sent successfully!
                            </p>
                        </div>
                    </div>
                )}

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">Can't find the email?</p>
                            <ul className="space-y-1 text-blue-700">
                                <li>• Check your spam or junk folder</li>
                                <li>• Make sure the email address is correct</li>
                                <li>• Wait a few minutes for the email to arrive</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={handleResendEmail}
                        disabled={isResending}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                        {isResending ? (
                            <>
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <Mail className="w-4 h-4" />
                                <span>Resend Verification Email</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}