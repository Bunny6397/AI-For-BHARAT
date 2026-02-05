import { motion } from "framer-motion";
import { Radio, Glasses, Smartphone, Cloud, Bell } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Radio,
      title: "Sensors",
      description: "Collect real-time body & environmental data",
    },
    {
      icon: Glasses,
      title: "Smart Glasses",
      description: "Process data inside VitaLens device",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Display live health dashboard",
    },
    {
      icon: Cloud,
      title: "AI Cloud",
      description: "Analyze patterns & detect risks",
    },
    {
      icon: Bell,
      title: "Alerts",
      description: "Notify users, caregivers & doctors",
    },
  ];

  return (
    <section className="py-24 relative section-glow">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A seamless flow from sensors to actionable health insights
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 text-center group hover:glow-box transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow (hidden on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-primary -translate-y-1/2 z-10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8"
        >
          <h3 className="font-semibold text-xl mb-6 text-center">The Process</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              "Sensors collect real-time body & environmental data",
              "Data is processed inside VitaLens glasses",
              "Mobile app displays live health dashboard",
              "AI cloud analyzes patterns & risks",
              "Alerts are sent to users, caregivers, or doctors",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
