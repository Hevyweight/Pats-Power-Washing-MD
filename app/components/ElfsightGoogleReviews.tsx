"use client";

import { useEffect } from "react";

type Props = {
  appId?: string; // optional
};

export default function ElfsightGoogleReviews({
  appId = "elfsight-app-d1d17d3b-2923-4803-bdb8-0f372bbe5129",
}: Readonly<Props>) {
  useEffect(() => {
    if (
      document.querySelector(
        'script[src="https://static.elfsight.com/platform/platform.js"]',
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.setAttribute("data-use-service-core", "");
    document.body.appendChild(script);
  }, []);

  return <div className={appId} />;
}
