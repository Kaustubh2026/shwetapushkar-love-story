import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import couple1 from "@/assets/sp.jpg";
import couple2 from "@/assets/sp2.jpg";
import couple3 from "@/assets/sp3.jpg";
import couple4 from "@/assets/sp4.jpg";
import couple5 from "@/assets/sp5.jpg";
import couple6 from "@/assets/sp6.jpg";
import rings from "@/assets/rings.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: couple1, alt: "Shweta & Pushkar at sunset" },
  // { src: sp2, alt: "Shweta & Pushkar at sunset" },
  { src: couple2, alt: "Shweta & Pushkar at sunset" },
  { src: couple3, alt: "Shweta & Pushkar at sunset" },
  { src: couple4, alt: "Shweta & Pushkar at sunset" },
  // { src: rings, alt: "Wedding rings" },
  { src: couple5, alt: "Walking on the beach" },
    { src: couple6, alt: "Walking on the beach" },
  // { src: heroBg, alt: "Beautiful flowers" },
  // { src: couple1, alt: "Romantic moment" },
  // { src: couple2, alt: "Love story" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Moments we've treasured, memories we'll cherish forever
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-elegant"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-romantic opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-lg font-serif bg-foreground/20 backdrop-blur-sm px-6 py-2 rounded-full">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-background hover:text-primary transition-colors p-2"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-glow"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
