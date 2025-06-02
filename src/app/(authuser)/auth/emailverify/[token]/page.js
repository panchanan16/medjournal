"use client"

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { _GET } from '@/request/request';
import { entityCore } from '@/config/api.config';

const VerifyEmail = () => {
  const router = useRouter();
  const [showAnimation, setShowAnimation] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [status, setStatus] = useState('loading'); // Start with loading
  const [message, setMessage] = useState('Verifying your email address...');

  const { token } = useParams()

  useEffect(() => {
    // Start entrance animation immediately
    setTimeout(() => setShowAnimation(true), 100);
    setTimeout(() => setShowContent(true), 300);

    if (token) {
      verifyToken(token);
    } else {
      setTimeout(() => {
        setStatus('error');
        setMessage('Invalid verification link. No token provided.');
      }, 1000);
    }
  }, [token]);

  const verifyToken = async (token) => {
    try {
      const response = await fetch(`${entityCore}/auth/verifyemail`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      const data = await response.json();

      if (response.ok && data.status) {
        setStatus('success');
        setMessage('Your email has been verified successfully!');
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(data.data.user));
      } else {
        setStatus(data.expired ? 'expired' : 'error');
        setMessage(data.message || 'Verification failed. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  const handleContinue = () => {
    router.push('/login');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  const handleRetry = () => {
    router.push('/resend-verification');
  };

  // Loading Component
  const LoadingAnimation = () => (
    <div className="mb-8">
      {/* Pulsing Email Icon */}
      <div className={`w-24 h-24 mx-auto mb-6 relative transform transition-all duration-1000 ${showAnimation ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
        }`}>
        <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center relative overflow-hidden">
          {/* Animated Rings */}
          <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-30 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border-4 border-white border-opacity-20 animate-ping animation-delay-200"></div>

          {/* Email Icon */}
          <svg className="w-10 h-10 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
      </div>

      {/* Loading Text */}
      <h1 className={`text-3xl font-bold text-blue-600 mb-4 transform transition-all duration-700 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
        Verifying Email...
      </h1>

      {/* Loading Dots */}
      <div className={`flex justify-center space-x-2 mb-4 transform transition-all duration-700 delay-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  );

  // Success Component
  const SuccessAnimation = () => (
    <div className="mb-8">
      {/* Animated Checkmark Circle */}
      <div className={`w-24 h-24 mx-auto mb-6 relative transform transition-all duration-1000 ${status === 'success' ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
        }`}>
        <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center relative overflow-hidden">
          {/* Ripple Effect */}
          <div className={`absolute inset-0 bg-green-300 rounded-full transform transition-all duration-1500 ${status === 'success' ? 'scale-150 opacity-0' : 'scale-0 opacity-100'
            }`}></div>

          {/* Checkmark */}
          <svg
            className={`w-12 h-12 text-white transform transition-all duration-700 delay-300 ${status === 'success' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          >
            <path
              d="M20 6L9 17l-5-5"
              className="animate-draw"
              style={{
                strokeDasharray: '20',
                strokeDashoffset: status === 'success' ? '0' : '20',
                transition: 'stroke-dashoffset 0.8s ease-in-out 0.5s'
              }}
            />
          </svg>
        </div>
      </div>

      {/* Success Text */}
      <h1 className={`text-3xl font-bold text-green-600 mb-4 transform transition-all duration-700 delay-500 ${status === 'success' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
        Verified Successfully! 🎉
      </h1>
    </div>
  );

  // Error Component
  const ErrorAnimation = () => (
    <div className="mb-8">
      <div className={`w-24 h-24 mx-auto mb-6 bg-red-500 rounded-full flex items-center justify-center transform transition-all duration-1000 ${(status === 'error' || status === 'expired') ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
        }`}>
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          {status === 'expired' ? (
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          )}
        </svg>
      </div>
      <h1 className={`text-3xl font-bold ${status === 'expired' ? 'text-yellow-600' : 'text-red-600'} mb-4 transform transition-all duration-700 delay-300 ${(status === 'error' || status === 'expired') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
        {status === 'expired' ? 'Link Expired' : 'Verification Failed'}
      </h1>
    </div>
  );

  return (
    <>
      <div className={`min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden transition-all duration-1000`}>
        {/* Main Content */}
        <div className={`max-w-md w-full bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center transform transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'
          } relative z-10`}>

          {/* Dynamic Content based on Status */}
          {status === 'loading' && <LoadingAnimation />}
          {status === 'success' && <SuccessAnimation />}
          {(status === 'error' || status === 'expired') && <ErrorAnimation />}

          {/* Message */}
          <p className={`text-gray-700 text-lg mb-8 leading-relaxed transform transition-all duration-700 ${status === 'loading' ? 'delay-900' : 'delay-700'
            } ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
            {message}
          </p>

          {/* Action Buttons - Only show after verification is complete */}
          {status !== 'loading' && (
            <div className="space-y-4">
              {status === 'success' && (
                <>
                  <button
                    onClick={handleContinue}
                    className={`w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${status === 'success' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    style={{ transitionDelay: '1.0s' }}
                  >
                    Continue to Login →
                  </button>
                  <button
                    onClick={handleGoHome}
                    className={`w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-xl transition-all duration-300 ${status === 'success' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    style={{ transitionDelay: '1.2s' }}
                  >
                    Go to Homepage
                  </button>
                </>
              )}

              {(status === 'error' || status === 'expired') && (
                <>
                  <button
                    onClick={handleRetry}
                    className={`w-full bg-gradient-to-r ${status === 'error' ? 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' : 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                      } text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${(status === 'error' || status === 'expired') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    style={{ transitionDelay: '0.5s' }}
                  >
                    Resend Verification Email
                  </button>
                  <button
                    onClick={handleGoHome}
                    className={`w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-xl transition-all duration-300 ${(status === 'error' || status === 'expired') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    style={{ transitionDelay: '0.7s' }}
                  >
                    Go to Homepage
                  </button>
                </>
              )}
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          animation: draw 0.8s ease-in-out 0.5s forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  );
};

export default VerifyEmail;