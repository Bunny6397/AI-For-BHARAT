import { motion } from "framer-motion";
import { 
  Brain, 
  HeartPulse, 
  BedDouble, 
  PersonStanding, 
  ShieldAlert, 
  Eye, 
  TrendingUp 
} from "lucide-react";
import aiBrainImage from "@/assets/ai-brain.jpeg";

const AIIntelligence = () => {
  const capabilities = [
    {
      icon: HeartPulse,
      title: "Stress Detection",
      description: "Analyzes HRV & motion patterns to identify stress levels",
    },
    {
      icon: BedDouble,
      title: "Sleep Quality Analysis",
      description: "Deep insights into sleep stages and recovery patterns",
    },
    {
      icon: PersonStanding,
      title: "Activity Recognition",
      description: "Identifies activities and predicts potential falls",
    },
    {
      icon: ShieldAlert,
      title: "Health Anomaly Detection",
      description: "Spots irregular patterns before they become critical",
    },
    {
      icon: Eye,
      title: "Medical Scan Viewing",
      description: "Computer vision for viewing X-rays and MRI scans",
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "AI-powered health forecasting and risk warnings",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Powered by AI</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              The Intelligence Behind{" "}
              <span className="gradient-text glow-text">VitaLens</span>
            </h2>

            <p className="text-muted-foreground mb-8">
              Our advanced AI models continuously analyze your health data to provide 
              personalized insights, early warnings, and actionable recommendations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <cap.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm mb-1">{cap.title}</h4>
                    <p className="text-xs text-muted-foreground">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl rounded-full scale-75" />
              
              {/* Main AI Brain Ecosystem Image */}
              <img
                src={aiBrainImage}
                alt="VitaLens AI Intelligence System"
                className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating feature indicators */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-8 -left-6 glass-card p-3 glow-box"
              >
                <Brain className="w-6 h-6 text-cyan-500 mb-1" />
                <div className="text-xs font-mono text-cyan-500">AI Brain</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/4 -right-6 glass-card p-3 glow-box"
              >
                <HeartPulse className="w-6 h-6 text-rose-500 mb-1" />
                <div className="text-xs font-mono text-rose-500">Health AI</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-1/4 -left-6 glass-card p-3 glow-box"
              >
                <BedDouble className="w-6 h-6 text-indigo-500 mb-1" />
                <div className="text-xs font-mono text-indigo-500">Sleep AI</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-8 -right-6 glass-card p-3 glow-box"
              >
                <Eye className="w-6 h-6 text-purple-500 mb-1" />
                <div className="text-xs font-mono text-purple-500">Vision AI</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIIntelligence;
