export const metadata = { title: "Gallery & Videos | Pat’s Power Washing" };

type MediaItem = {
  type: "video" | "image";
  src: string;
  poster?: string;
  caption: string;
  aspect?: "9/16" | "16/9";
};

const media: MediaItem[] = [
  {
    type: "video",
    src: "/videos/driveway-portrait.mp4",
    poster: "/videos/driveway-portrait-poster.jpg",
    caption: "Driveway refresh — Silver Spring, MD",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/siding-landscape.mp4",
    poster: "/videos/siding-landscape-poster.jpg",
    caption: "Siding makeover — Alexandria, VA",
    aspect: "16/9",
  },
  {
    type: "image",
    src: "/gallery/deck-after.jpg",
    caption: "Deck cleaning — Arlington, VA",
    aspect: "16/9",
  },
  {
    type: "video",
    src: "/videos/storefront-portrait.mp4",
    poster: "/videos/storefront-portrait-poster.jpg",
    caption: "Storefront entryway — DC",
    aspect: "9/16",
  },
];

export default function GalleryPage() {
  return (
    <div className="section py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Gallery & Videos</h1>
      <p className="mt-4 text-slate-700">
        Real before/afters and short clips from DMV jobs. More on Instagram:{" "}
        <a
          className="underline text-brand-primary"
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/patspowerwashing_dmv"
        >
          @patspowerwashing_dmv
        </a>
        .
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {media.map((m, idx) => (
          <figure
            key={idx}
            className="rounded-2xl border border-slate-100 bg-white p-3 shadow"
          >
            <div
              className="rounded-xl overflow-hidden bg-black/10"
              style={{
                aspectRatio: m.aspect === "9/16" ? "9 / 16" : "16 / 9",
                maxHeight: m.aspect === "9/16" ? "28rem" : "22rem",
              }}
            >
              {m.type === "video" ? (
                <video
                  className="h-full w-full object-cover"
                  src={m.src}
                  poster={m.poster}
                  playsInline
                  webkit-playsinline="true"
                  muted
                  controls
                  preload="metadata"
                >
                  <source src={m.src} type="video/mp4" />
                  {/* Optionally add .mov as a fallback:
                  <source src={m.src.replace(".mp4", ".mov")} type="video/quicktime" />
                  */}
                </video>
              ) : (
                // Images for before/after if you want them
                // Prefer next/image if you want optimization, but plain <img> is fine here
                <img
                  src={m.src}
                  alt={m.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            <figcaption className="mt-2 text-sm text-slate-700">{m.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
