// src/utils/browserCompat.js
export const isOldBrowser = () => {
    const ua = navigator.userAgent;
    const isIE = ua.indexOf('MSIE') !== -1 || ua.indexOf('Trident') !== -1;
    const isOldChrome = /Chrome\/([0-9]+)/.test(ua) && parseInt(RegExp.$1) < 50;
    const isOldFirefox = /Firefox\/([0-9]+)/.test(ua) && parseInt(RegExp.$1) < 52;
    
    return isIE || isOldChrome || isOldFirefox;
  };
  
  // Add to your main App.jsx
 
    
    // ... rest of your app
