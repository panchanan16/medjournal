"use client"

import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const propertyId = '676aaf5449e2fd8dfefd0be2';
    const widgetId = '1ifsbpp0c'; 

    // Check if Tawk_API already exists to avoid duplicate loading
    if (typeof window !== 'undefined' && !window.Tawk_API) {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      // Append to head
      document.head.appendChild(script);
      
      // Optional: Add event listeners
      window.Tawk_API.onLoad = function() {
        console.log('Tawk.to widget loaded');
      };
      
      window.Tawk_API.onStatusChange = function(status) {
        console.log('Tawk.to status:', status);
      };
    }
    
    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.Tawk_API) {
        window.Tawk_API.hideWidget();
      }
    };
  }, []);

  return null; 
};

export default ChatBot;