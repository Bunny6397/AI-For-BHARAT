import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Cpu } from "lucide-react";
import demoVideo from "@/assets/demo-video.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,200,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">Next-Gen Healthcare Technology</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              <span className="text-foreground">See Your Health</span>
              <br />
              <span className="gradient-text glow-text">In Real Time</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Smart glasses that continuously monitor vital signs, environment, and emergencies 
              using AI and advanced sensors — bringing real-time healthcare to your vision.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="heroOutline" size="xl">
                <Download className="w-5 h-5" />
                Download App
              </Button>
              <Button variant="heroOutline" size="xl">
                <Cpu className="w-5 h-5" />
                Explore Technology
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "99.8%", label: "Accuracy" },
                { value: "24/7", label: "Monitoring" },
                { value: "<1s", label: "Alert Time" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full scale-75" />
              
              <video
                src={demoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
              />

              {/* Floating data points */}
              {[
                { label: "Heart Rate", value: "72 BPM", position: "top-10 left-0" },
                { label: "SpO₂", value: "98%", position: "top-1/4 right-0" },
                { label: "Stress Level", value: "Low", position: "bottom-1/4 left-0" },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className={`absolute ${point.position} glass-card px-4 py-2 glow-box`}
                >
                  <div className="text-xs text-muted-foreground">{point.label}</div>
                  <div className="text-sm font-semibold gradient-text">{point.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
