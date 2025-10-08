import React from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9779816245996?text=Hi%20Eden%2C%20I%20want%20to%20book%20a%20tattoo%20session"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <Image
        src="assets/logos/WhatsApp.svg"
        alt="Chat with Eden tattoo Nepal"
        width={56}
        height={56}
        priority
      />
    </a>
  );
};

export default WhatsAppButton;
