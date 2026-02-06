import { motion, AnimatePresence } from "framer-motion";
import { Radio, Glasses, Smartphone, Cloud, Bell, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const HowItWorks = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const steps = [
    {
      icon: Radio,
      title: "Sensors",
      description: "Collect real-time body & environmental data",
      simulation: {
        title: "Sensor Data Collection",
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Heart Rate", value: "72", unit: "BPM", color: "text-red-500" },
                { label: "SpO₂", value: "98", unit: "%", color: "text-blue-500" },
                { label: "Temperature", value: "36.8", unit: "°C", color: "text-orange-500" },
                { label: "AQI", value: "45", unit: "Good", color: "text-green-500" },
              ].map((sensor, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <div className="text-sm text-muted-foreground mb-2">{sensor.label}</div>
                  <div className={`text-3xl font-bold ${sensor.color}`}>{sensor.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{sensor.unit}</div>
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center text-sm text-primary"
            >
              📡 Collecting data in real-time...
            </motion.div>
          </div>
        ),
      },
    },
    {
      icon: Glasses,
      title: "Smart Glasses",
      description: "Process data inside VitaLens device",
      simulation: {
        title: "Smart Glasses Processing",
        content: (
          <div className="space-y-4">
            <div className="relative h-48 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-primary/30 border-t-primary rounded-full"
              />
              <div className="absolute text-center">
                <Glasses className="w-12 h-12 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Processing...</div>
              </div>
            </div>
            <div className="space-y-2">
              {["Filtering sensor data", "Running algorithms", "Detecting patterns"].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.3 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Display live health dashboard",
      simulation: {
        title: "Mobile App Dashboard",
        content: (
          <div className="space-y-4">
            <div className="glass-card p-4 border-2 border-primary/20 rounded-3xl max-w-xs mx-auto">
              <div className="text-center mb-4">
                <div className="text-sm font-semibold mb-2">VitaLens Dashboard</div>
                <div className="text-xs text-muted-foreground">Live Health Monitoring</div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "❤️", label: "Heart Rate", value: "72 BPM", status: "Normal" },
                  { icon: "🫁", label: "SpO₂", value: "98%", status: "Good" },
                  { icon: "😌", label: "Stress", value: "Low", status: "Relaxed" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center justify-between p-2 bg-background/50 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-xs font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.status}</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold gradient-text">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      icon: Cloud,
      title: "AI Cloud",
      description: "Analyze patterns & detect risks",
      simulation: {
        title: "AI Cloud Analysis",
        content: (
          <div className="space-y-4">
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Cloud className="w-20 h-20 text-primary mx-auto mb-4" />
              </motion.div>
              <div className="text-sm font-semibold mb-4">AI Processing Data</div>
            </div>
            <div className="space-y-2">
              {[
                { label: "Pattern Recognition", progress: 95 },
                { label: "Risk Assessment", progress: 88 },
                { label: "Anomaly Detection", progress: 92 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="space-y-1"
                >
                  <div className="flex justify-between text-xs">
                    <span>{item.label}</span>
                    <span className="text-primary">{item.progress}%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
    },
    {
      icon: Bell,
      title: "Alerts",
      description: "Notify users, caregivers & doctors",
      simulation: {
        title: "Alert System",
        content: (
          <div className="space-y-4">
            {[
              { type: "Success", icon: "✅", message: "All vitals normal", color: "border-green-500" },
              { type: "Warning", icon: "⚠️", message: "High stress detected", color: "border-yellow-500" },
              { type: "Alert", icon: "🚨", message: "Emergency: Fall detected!", color: "border-red-500" },
            ].map((alert, i) => (
              <motion.div
                key={i}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.3 }}
                className={`glass-card p-4 border-l-4 ${alert.color}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{alert.icon}</span>
                  <div>
                    <div className="font-semibold text-sm">{alert.type}</div>
                    <div className="text-xs text-muted-foreground">{alert.message}</div>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-center text-xs text-muted-foreground"
            >
              Notifications sent to all connected devices
            </motion.div>
          </div>
        ),
      },
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
                <div className="glass-card p-6 text-center group hover:glow-box transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedStep(i)}
                >
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

      <Dialog open={selectedStep !== null} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="glass-card max-w-2xl">
          {selectedStep !== null && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold gradient-text">
                  {steps[selectedStep].simulation.title}
                </h3>
              </div>
              <div className="mt-4">
                {steps[selectedStep].simulation.content}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HowItWorks;
