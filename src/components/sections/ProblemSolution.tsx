import { motion } from "framer-motion";
import { AlertTriangle, Clock, BrainCircuit, Glasses, Activity, Bell } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Lack of Continuous Monitoring",
      description: "Traditional devices only measure vitals during visits",
    },
    {
      icon: Clock,
      title: "Delayed Emergency Detection",
      description: "Critical conditions often go unnoticed until too late",
    },
    {
      icon: BrainCircuit,
      title: "Limited Wearable Intelligence",
      description: "Basic fitness trackers lack advanced health insights",
    },
  ];

  const solutions = [
    {
      icon: Glasses,
      title: "VitaLens Smart Glasses",
      description: "AI + advanced biosensors in sleek eyewear",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Continuous tracking of vitals and environment",
    },
    {
      icon: Bell,
      title: "Instant Emergency Alerts",
      description: "Immediate notifications for health risks",
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
            The Problem We're <span className="gradient-text">Solving</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Current healthcare monitoring has critical gaps that put lives at risk
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-destructive rounded-full" />
              <span className="text-destructive font-semibold uppercase tracking-wider text-sm">The Problem</span>
            </div>

            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex gap-4 group hover:border-destructive/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="gradient-text font-semibold uppercase tracking-wider text-sm">The Solution</span>
            </div>

            {solutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex gap-4 group hover:border-primary/30 transition-colors gradient-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
