import { motion } from "framer-motion";
import { Heart, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, link: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, link: "https://facebook.com", label: "Facebook" },
    { icon: Mail, link: "mailto:wedding@shwetapushkar.com", label: "Email" },
  ];

  return (
    <footer className="relative py-16 px-4 bg-gradient-romantic overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-foreground"
            initial={{ y: "100vh", x: `${Math.random() * 100}vw` }}
            animate={{ 
              y: "-20vh",
              x: `${Math.random() * 100}vw`,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2.5,
            }}
          >
            <Heart size={32} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Couple's names */}
          <div>
            <h3 className="text-5xl md:text-6xl font-script text-primary-foreground mb-4">
              Shweta & Pushkar
            </h3>
            <p className="text-xl text-primary-foreground/90">
              Nov 23, 2025
            </p>
          </div>

          {/* Hashtag */}
          {/* <div className="py-6">
            <p className="text-2xl font-serif text-primary-foreground mb-2">
              Share your moments with us
            </p>
            <p className="text-3xl font-script text-primary-foreground/90">
              #ShwetaWedsPushkar2025
            </p>
          </div> */}

          {/* Social Links */}
          {/* <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon size={24} className="text-primary-foreground" />
                </motion.a>
              );
            })}
          </div> */}

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex-1 h-px bg-primary-foreground/30" />
            <Heart size={20} className="text-primary-foreground" fill="currentColor" />
            <div className="flex-1 h-px bg-primary-foreground/30" />
          </div>

          {/* Closing message */}
          <div>
            <p className="text-lg text-primary-foreground/90 mb-2">
              With love and gratitude
            </p>
            <p className="text-2xl font-script text-primary-foreground">
              We can't wait to celebrate with you ❤️
            </p>
          </div>

          {/* Contact */}
          {/* <div className="pt-6">
            <p className="text-sm text-primary-foreground/80">
              For any queries, reach us at{" "}
              <a 
                href="mailto:wedding@shwetapushkar.com" 
                className="underline hover:text-primary-foreground transition-colors"
              >
                wedding@shwetapushkar.com
              </a>
            </p>
          </div> */}

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">
              © 2025 Shweta & Pushkar. Made with love and joy.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
