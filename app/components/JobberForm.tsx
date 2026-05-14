"use client";

import { useEffect } from "react";

export default function JobberForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "9b374c6f-63f6-43ea-8b26-34fbc28a4679-2195092");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/9b374c6f-63f6-43ea-8b26-34fbc28a4679/public/work_request/embedded_work_request_form?form_id=2195092");
    document.body.appendChild(script);

    // Watch for Jobber's confirmation message in the DOM
    const observer = new MutationObserver(() => {
      const confirmed = document.querySelector("#9b374c6f-63f6-43ea-8b26-34fbc28a4679-2195092")
        ?.textContent
        ?.includes("confirmed");
      if (confirmed) {
        const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
        if (fbq) {
          fbq("track", "Lead");
          observer.disconnect();
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        media="screen"
      />
      <div id="9b374c6f-63f6-43ea-8b26-34fbc28a4679-2195092" />
    </>
  );
}