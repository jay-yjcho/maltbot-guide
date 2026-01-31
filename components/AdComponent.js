import { useEffect } from 'react';

const AdComponent = ({ slot, format = "auto", responsive = "true", style = {} }) => {
  useEffect(() => {
    try {
      // Only run on client side
      if (typeof window !== 'undefined' && window.googletag && window.googletag.pubads) {
        // Refresh ads when component mounts
        (window.googletag.pubads().refresh && window.googletag.pubads().refresh()) || 
        window.googletag.pubads().display('/6355737/MaltBot-Guide/' + slot);
      }
    } catch (e) {
      console.log("Ad script not loaded yet");
    }
  }, [slot]);

  return (
    <div className="ad-container my-6 flex justify-center">
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXX"  // Replace with actual publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
    </div>
  );
};

export default AdComponent;