import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-elegant opacity-60" />
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            initial={{ y: "100vh", x: `${Math.random() * 100}vw` }}
            animate={{ 
              y: "-20vh",
              x: `${Math.random() * 100}vw`,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          >
            <Heart size={24 + Math.random() * 24} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-script text-gradient-romantic mb-4 animate-pulse-soft">
            Shweta ❤️ Pushkar
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl font-serif text-foreground">
            Together with their families
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground">
            invite you to celebrate their wedding
          </p>
          
          <div className="py-6">
            <p className="text-3xl md:text-4xl font-serif text-foreground mb-2">
              Nov 23, 2025
            </p>
            <p className="text-xl text-muted-foreground">
              12:41 PM 
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Maa Vaishno Palace, Beed
            </p>
          </div>
        </motion.div>
{/* 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button
            size="lg"
            className="bg-gradient-romantic hover:opacity-90 transition-opacity text-primary-foreground text-lg px-8 py-6 rounded-full shadow-elegant"
            onClick={() => scrollToSection("rsvp")}
          >
            RSVP Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glassmorphism text-lg px-8 py-6 rounded-full border-2 border-primary/30 hover:border-primary/50 transition-all"
            onClick={() => scrollToSection("events")}
          >
            View Events
          </Button>
        </motion.div> */}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-2 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
