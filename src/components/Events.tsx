import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Palette, Music, Heart, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    icon: Palette,
    title: "Seemanti pujan",
    date: "Nov 22, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Maa Vaishno Palace, Beed",
    dress: "Traditional Yellow Attire",
    description: "A vibrant celebration with turmeric paste, blessings, and lots of laughter!",
    color: "bg-secondary/20",
  },
  {
    icon: Palette,
    title: "Haldi Ceremony",
    date: "December 13, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Maa Vaishno Palace, Beed",
    dress: "Traditional Yellow Attire",
    description: "A vibrant celebration with turmeric paste, blessings, and lots of laughter!",
    color: "bg-secondary/20",
  },
  {
    icon: Music,
    title: "Sangeet Night",
    date: "December 14, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Maa Vaishno Palace, Beed",
    dress: "Colorful Indian Ethnic Wear",
    description: "Dance the night away with music, performances, and celebration!",
    color: "bg-accent/20",
  },
  {
    icon: Heart,
    title: "Wedding Ceremony",
    date: "Nov 23, 2025",
    time: "12:41 PM",
    location: "Maa Vaishno Palace, Beed",
    dress: "Traditional Formal Indian Attire",
    description: "The sacred union of two souls, blessed by family and friends.",
    color: "bg-primary/20",
  },
];

const Events = () => {
  const addToCalendar = (event: typeof events[0]) => {
    // Google Calendar link format
    const startDate = event.date.replace(/,/g, '').split(' ').reverse().join('-');
    const title = encodeURIComponent(event.title);
    const location = encodeURIComponent(event.location);
    const details = encodeURIComponent(event.description);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${startDate}&location=${location}&details=${details}`;
    window.open(url, '_blank');
  };

  return (
    <section id="events" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
            Wedding Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating multiple days of love, laughter, and traditions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`${event.color} border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300 h-full`}>
                  <div className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="p-4 bg-gradient-romantic rounded-2xl shadow-soft">
                        <Icon size={32} className="text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {event.dress}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-3xl font-serif text-foreground mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-foreground">
                        <Calendar size={20} className="text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Clock size={20} className="text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-3 text-foreground">
                        <MapPin size={20} className="text-primary mt-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => addToCalendar(event)}
                      variant="outline"
                      className="w-full border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
