import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Plane, Train } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Venue = () => {
  return (
    <section id="venue" className="py-20 px-4 bg-gradient-elegant">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
            Venue & Directions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your way to our celebration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glassmorphism overflow-hidden shadow-elegant border-primary/20 h-full">
              <div className="relative h-96 bg-muted">
                <iframe
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=maa%20Vaishnav%20palace%20beed&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <div className="flex items-start gap-3 text-foreground">
                    <MapPin size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-serif mb-1">Maa Vaishnav Palace Beed</h3>
                      <p className="text-sm text-muted-foreground">
                        Vipra Nagar, Beed, Maharashtra 431122
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Button
                  onClick={() => window.open('https://maps.app.goo.gl/nmuKM3ychJqWv6LD8', '_blank')}
                  className="w-full bg-gradient-romantic hover:opacity-90 text-primary-foreground"
                >
                  <Navigation size={20} className="mr-2" />
                  Get Directions
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Travel Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glassmorphism shadow-elegant border-primary/20 h-full">
              <div className="p-8 space-y-6">
                <h3 className="text-3xl font-serif text-foreground">How to Reach</h3>
                
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-3 w-full p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                    <Car size={24} className="text-primary" />
                    <span className="text-lg font-medium text-foreground">By Car</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 p-4 text-muted-foreground">
                    Maa Vaishnav Palace is conveniently accessible by road. Visitors traveling by car can easily reach the venue, and ample parking is available on-site. From Beed city center, it takes approximately 10–15 minutes to reach the location via Ambajogai Road.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-3 w-full p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                    <Train size={24} className="text-primary" />
                    <span className="text-lg font-medium text-foreground">By Train</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 p-4 text-muted-foreground">
                    The nearest railway station is Parli Vaijnath Railway Station, located about 60 km from Beed. From the station, you can hire a taxi or use bus services to reach Maa Vaishnav Palace.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-3 w-full p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                    <Plane size={24} className="text-primary" />
                    <span className="text-lg font-medium text-foreground">By Flight</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 p-4 text-muted-foreground">
                    The nearest airport is Aurangabad Airport, situated approximately 135 km from Beed. It takes around 3–3.5 hours by car or taxi to reach the venue from the airport.
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
