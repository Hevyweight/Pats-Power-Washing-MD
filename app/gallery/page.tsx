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
    src: "/videos/back_steps.mp4",
    poster: "/videos/driveway-portrait-poster.jpg",
    caption: "Driveway cleaning & stain removal — Silver Spring, MD",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/sidewalk.mp4",
    poster: "/videos/siding-landscape-poster.jpg",
    caption: "Soft-wash siding refresh — Alexandria, VA",
    aspect: "9/16",
  },
  {
   type: "video",
    src: "/videos/wood_steps.mp4",
    poster: "/videos/driveway-portrait-poster.jpg",
    caption: "Driveway cleaning & stain removal — Silver Spring, MD",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/storefront-portrait.mp4",
    poster: "/videos/storefront-portrait-poster.jpg",
    caption: "Storefront entryway cleaning — Washington, DC",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/storefront-portrait.mp4",
    poster: "/videos/storefront-portrait-poster.jpg",
    caption: "Storefront entryway cleaning — Washington, DC",
    aspect: "9/16",

  },
  
];

export default function GalleryPage() {
  return (
    <div className="section py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
          Gallery &amp; Project Videos
        </h1>
        <p className="mt-4 text-slate-700">
          View real projects completed across the DMV — from house washing and driveway
          cleaning to patios and storefronts. These videos and photos show the kind of
          results you can expect when you schedule exterior cleaning with Pat&apos;s
          Power Washing.
        </p>
        <p className="mt-2 text-slate-700">
          For more transformations, follow us on Instagram:&nbsp;
          <a
            className="underline text-brand-primary font-medium"
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/patspowerwashing_dmv"
          >
            @patspowerwashing_dmv
          </a>
          .
        </p>
      </header>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {media.map((m, idx) => (
          <figure
            key={idx}
            className="rounded-2xl border border-slate-100 bg-white p-3 shadow-soft flex flex-col"
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
                  muted
                  controls
                  autoPlay
                  preload="metadata"
                >
                  <source src={m.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={m.src}
                  alt={m.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            <figcaption className="mt-3 text-sm text-slate-700">
              {m.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
