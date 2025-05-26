"use client"

import { useState } from 'react';
import { Mail, Copy, Check, FileText } from 'lucide-react';

export function FastProcess() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('faspublication@farmcline.es');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const steps = [
    {
      number: 1,
      text: "Immediate acknowledgement of manuscript within",
      highlight: "12 hours",
      color: "green",
      bgColor: "from-green-50 to-transparent",
      borderColor: "border-green-400",
      badgeColor: "bg-green-600",
      highlightColor: "text-green-700"
    },
    {
      number: 2,
      text: "Acceptance letter after urgent review within",
      highlight: "1 day",
      color: "green",
      bgColor: "from-green-50 to-transparent",
      borderColor: "border-green-400",
      badgeColor: "bg-green-600",
      highlightColor: "text-green-700"
    },
    {
      number: 3,
      text: "Gallery Proof within",
      highlight: "1 day",
      extraText: "after Payment and",
      color: "green",
      bgColor: "from-green-50 to-transparent",
      borderColor: "border-green-400",
      badgeColor: "bg-green-600",
      highlightColor: "text-green-700"
    },
    {
      number: 4,
      text: "Immediate Publication within",
      highlight: "1 day",
      extraText: "after Gallery Proof confirmation by author",
      color: "green",
      bgColor: "from-green-50 to-transparent",
      borderColor: "border-green-400",
      badgeColor: "bg-green-600",
      highlightColor: "text-green-700"
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className='text-sm max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-100'>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <h2 className='text-2xl font-bold text-blue-700'>Fast Process</h2>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          You can submit your Manuscript to the following email. Please mention the Journal name to which manuscript is submitting.
        </p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Note:
          </h3>
          <ol className='list-none space-y-2'>
            {steps.map((step) => (
              <li 
                key={step.number}
                className={`flex items-start gap-4 p-3 bg-gradient-to-r ${step.bgColor} rounded-lg border-l-4 ${step.borderColor} transition-all duration-200`}
              >
                <span className={`flex-shrink-0 w-5 h-5 ${step.badgeColor} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm`}>
                  {step.number}
                </span>
                <span className="text-gray-700 leading-relaxed">
                  {step.text} <strong className={step.highlightColor}>{step.highlight}</strong>
                  {step.extraText && ` ${step.extraText}`}
                </span>
              </li>
            ))}
          </ol>
        </div>
        
        <div className='bg-gradient-to-r from-blue-100 to-blue-50 p-3 text-blue-800 rounded-xl border border-blue-200 shadow-sm'>
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-6 h-6 text-blue-600" />
            <span className="font-mono text-lg font-medium">faspublication@farmcline.es</span>
            <button 
              onClick={copyEmail}
              className="ml-2 p-2 hover:bg-blue-200 rounded-full transition-all duration-200 hover:scale-110 active:scale-95" 
              title={copied ? 'Copied!' : 'Copy email'}
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          {copied && (
            <div className="text-center mt-2 text-sm text-green-700 font-medium animate-pulse">
              Email copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export function NormalProcess() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('submission@farmcline.es');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const steps = [
    {
      number: 1,
      text: "Acknowledgement of manuscript submission within",
      highlight: "24-48 hours",
      color: "green",
      bgColor: "from-green-50 to-transparent",
      borderColor: "border-green-400",
      badgeColor: "bg-green-600",
      highlightColor: "text-green-700"
    },
    {
      number: 2,
      text: "Acceptance letter after review Process which takes",
      highlight: "5-7 days",
      color: "green",
      bgColor: "from-green-50 to-transparent",
      borderColor: "border-green-400",
      badgeColor: "bg-green-600",
      highlightColor: "text-green-700"
    },
    {
      number: 3,
      text: "Gallery Proof within after",
      highlight: "7 days",
      extraText: "after Payment and",
      color: "green",
      bgColor: "from-green-50 to-transparent",
      borderColor: "border-green-400",
      badgeColor: "bg-green-600",
      highlightColor: "text-green-700"
    },
    {
      number: 4,
      text: "Monthly Publication Online and Print",
      highlight: "",
      color: "green",
      bgColor: "from-green-50 to-transparent",
      borderColor: "border-green-400",
      badgeColor: "bg-green-600",
      highlightColor: "text-green-700"
    }
  ];

  return (
    <div className="bg-gray-50 mt-10">
      <div className='text-sm max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-100'>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <h2 className='text-2xl font-bold text-blue-700'>Normal Process</h2>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          You can submit your Manuscript to the following email. Please mention the Journal name to which manuscript is submitting.
        </p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Note:
          </h3>
          <ol className='list-none space-y-2'>
            {steps.map((step) => (
              <li 
                key={step.number}
                className={`flex items-start gap-4 p-3 bg-gradient-to-r ${step.bgColor} rounded-lg border-l-4 ${step.borderColor} transition-all duration-200`}
              >
                <span className={`flex-shrink-0 w-5 h-5 ${step.badgeColor} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm`}>
                  {step.number}
                </span>
                <span className="text-gray-700 leading-relaxed">
                  {step.text} <strong className={step.highlightColor}>{step.highlight}</strong>
                  {step.extraText && ` ${step.extraText}`}
                </span>
              </li>
            ))}
          </ol>
        </div>
        
        <div className='bg-gradient-to-r from-blue-100 to-blue-50 p-3 text-blue-800 rounded-xl border border-blue-200 shadow-sm'>
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-6 h-6 text-blue-600" />
            <span className="font-mono text-lg font-medium">submission@farmcline.es</span>
            <button 
              onClick={copyEmail}
              className="ml-2 p-2 hover:bg-blue-200 rounded-full transition-all duration-200 hover:scale-110 active:scale-95" 
              title={copied ? 'Copied!' : 'Copy email'}
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          {copied && (
            <div className="text-center mt-2 text-sm text-green-700 font-medium animate-pulse">
              Email copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

