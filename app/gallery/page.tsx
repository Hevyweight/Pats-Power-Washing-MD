import ElfsightInstagramFeed from "../components/ElfsightInstagramFeed";

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
    caption: "Back steps cleaning — Bowie, MD",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/sidewalk.mp4",
    poster: "/videos/siding-landscape-poster.jpg",
    caption: "Sidewalk and walkway cleaning — Arlington, VA",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/wood_steps.mp4",
    poster: "/videos/driveway-portrait-poster.jpg",
    caption: "Wood steps soft wash — Silver Spring, MD",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/storefront-portrait.mp4",
    poster: "/videos/storefront-portrait-poster.jpg",
    caption: "Storefront entryway cleaning — Washington, DC",
    aspect: "9/16",
  },
  // When you have photos ready, you can drop them in like:
  // {
  //   type: "image",
  //   src: "/images/gallery/house-wash-before-after.jpg",
  //   caption: "House wash transformation — Laurel, MD",
  //   aspect: "16/9",
  // },
];

export default function GalleryPage() {
  return (
    <div className="section">
      {/* Instagram feed from Elfsight */}
      <section className="">
        <ElfsightInstagramFeed />
      </section>
    </div>
  );
}