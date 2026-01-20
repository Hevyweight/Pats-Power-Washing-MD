// components/service/BeforeAfterGallery.tsx
import Image from "next/image"

export default function BeforeAfterGallery({
  images
}: {
  images: Array<{ before: string; after: string; caption: string }>
}) {
  return (
    <section className="section py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Real Results
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {images.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="relative aspect-square">
                <Image 
                  src={item.before} 
                  alt="Before" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  Before
                </div>
              </div>
              <div className="relative aspect-square">
                <Image 
                  src={item.after} 
                  alt="After" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  After
                </div>
              </div>
            </div>
            <p className="p-4 text-center text-slate-600">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}