"use client";

import { useEffect } from "react";

export default function ElfsightInstagramFeed() {
  useEffect(() => {
    // Don’t add the script twice if it's already there
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"], script[src="https://static.elfsight.com/platform/platform.js"]'
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.setAttribute("data-use-service-core", "");
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-7dbb6721-ab99-4752-bac7-2d20dca7fdb6"
      data-elfsight-app-lazy
    />
  );
}
