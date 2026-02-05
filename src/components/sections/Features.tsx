import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Heart, 
  Thermometer, 
  Moon, 
  Sun, 
  Wind, 
  Footprints, 
  Mic, 
  ScanLine,
  X,
  Play,
  Activity,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [simulationActive, setSimulationActive] = useState(false);

  const features = [
    {
      icon: Heart,
      title: "Heart Rate & SpO₂",
      description: "Continuous cardiac monitoring with blood oxygen levels",
      color: "from-rose-500 to-pink-500",
      detailedInfo: "Advanced photoplethysmography (PPG) sensors provide real-time heart rate monitoring and blood oxygen saturation levels. AI algorithms detect irregular heartbeats and potential cardiac anomalies.",
      simulation: {
        type: "heartRate",
        data: [72, 75, 78, 74, 76, 73, 77, 75]
      }
    },
    {
      icon: Thermometer,
      title: "Body Temperature",
      description: "Real-time thermal tracking for fever detection",
      color: "from-orange-500 to-amber-500",
      detailedInfo: "Infrared thermal sensors continuously monitor body temperature with ±0.1°C accuracy. Automatic fever alerts and trend analysis help detect early signs of illness.",
      simulation: {
        type: "temperature",
        data: [98.6, 98.7, 98.5, 98.8, 99.1, 99.3, 99.0, 98.9]
      }
    },
    {
      icon: Moon,
      title: "Sleep & Stress",
      description: "HRV analysis with AI-powered stress detection",
      color: "from-indigo-500 to-purple-500",
      detailedInfo: "Heart Rate Variability (HRV) analysis combined with movement sensors track sleep quality and stress levels. Machine learning algorithms provide personalized insights.",
      simulation: {
        type: "sleep",
        data: ["Deep", "Light", "REM", "Light", "Deep", "REM", "Light", "Awake"]
      }
    },
    {
      icon: Sun,
      title: "UV Exposure Alerts",
      description: "Protection warnings for harmful sun radiation",
      color: "from-yellow-500 to-orange-500",
      detailedInfo: "UV sensors measure real-time ultraviolet radiation levels and provide personalized sun protection recommendations based on your skin type and exposure history.",
      simulation: {
        type: "uv",
        data: [2, 4, 6, 8, 9, 7, 5, 3]
      }
    },
    {
      icon: Wind,
      title: "Air Quality",
      description: "Environmental monitoring for pollutants and allergens",
      color: "from-emerald-500 to-teal-500",
      detailedInfo: "Multi-sensor array detects PM2.5, PM10, VOCs, and common allergens. Real-time air quality index with health recommendations for sensitive individuals.",
      simulation: {
        type: "airQuality",
        data: [45, 52, 38, 41, 55, 48, 42, 39]
      }
    },
    {
      icon: Footprints,
      title: "Activity & Fall Detection",
      description: "Movement tracking with emergency fall alerts",
      color: "from-blue-500 to-cyan-500",
      detailedInfo: "3-axis accelerometer and gyroscope track daily activities and detect sudden falls. Automatic emergency alerts sent to designated contacts within 30 seconds.",
      simulation: {
        type: "activity",
        data: [1200, 2500, 4800, 6200, 7500, 8900, 9200, 9800]
      }
    },
    {
      icon: Mic,
      title: "Voice Emergency",
      description: "Hands-free activation for SOS situations",
      color: "from-red-500 to-rose-500",
      detailedInfo: "Always-listening voice activation responds to emergency keywords in multiple languages. Instant connection to emergency services with GPS location sharing.",
      simulation: {
        type: "voice",
        data: ["Listening...", "Keyword Detected", "Processing...", "Emergency Alert Sent"]
      }
    },
    {
      icon: ScanLine,
      title: "X-Ray & MRI Viewing",
      description: "Medical scan visualization via hologram mode",
      color: "from-cyan-500 to-teal-500",
      detailedInfo: "Holographic display technology projects 3D medical scans in mid-air. Compatible with DICOM files from major medical imaging systems for portable diagnostics.",
      simulation: {
        type: "scan",
        data: ["Loading Scan...", "Processing DICOM", "Rendering 3D Model", "Hologram Ready"]
      }
    },
  ];

  const startSimulation = () => {
    setSimulationActive(!simulationActive);
  };

  const renderSimulation = (feature: typeof features[0]) => {
    if (!simulationActive) return null;

    switch (feature.simulation.type) {
      case "heartRate":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
                  <div className="absolute inset-0 w-8 h-8 bg-rose-500/20 rounded-full animate-ping"></div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-500">{feature.simulation.data[Math.floor(Date.now() / 500) % feature.simulation.data.length]} BPM</div>
                  <div className="text-sm text-muted-foreground">Heart Rate</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-500">98%</div>
                <div className="text-sm text-muted-foreground">SpO₂</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Heart Rate Variability</span>
                <span className="text-green-500">Normal</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-1 h-16">
              {Array.from({length: 8}).map((_, i) => (
                <div key={i} className="bg-rose-500/20 rounded flex items-end">
                  <div 
                    className="w-full bg-rose-500 rounded animate-bounce" 
                    style={{
                      height: `${30 + Math.sin((Date.now() / 200) + i) * 20}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        );
      case "temperature":
        const currentTemp = feature.simulation.data[Math.floor(Date.now() / 800) % feature.simulation.data.length];
        const tempPercent = ((currentTemp - 96) / 6) * 100;
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-muted relative overflow-hidden">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 via-orange-500 to-yellow-500 transition-all duration-500"
                    style={{height: `${tempPercent}%`}}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{currentTemp}°F</div>
                      <Thermometer className="w-6 h-6 mx-auto mt-1 text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="glass-card p-3 rounded-lg">
                <div className="text-lg font-bold text-blue-500">96.8°F</div>
                <div className="text-xs text-muted-foreground">Min Today</div>
              </div>
              <div className="glass-card p-3 rounded-lg">
                <div className="text-lg font-bold text-green-500">Normal</div>
                <div className="text-xs text-muted-foreground">Status</div>
              </div>
              <div className="glass-card p-3 rounded-lg">
                <div className="text-lg font-bold text-orange-500">99.1°F</div>
                <div className="text-xs text-muted-foreground">Max Today</div>
              </div>
            </div>
          </div>
        );
      case "activity":
        const currentSteps = feature.simulation.data[Math.floor(Date.now() / 600) % feature.simulation.data.length];
        const stepGoal = 10000;
        const stepPercent = (currentSteps / stepGoal) * 100;
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted" />
                  <circle 
                    cx="50" cy="50" r="45" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="none" 
                    className="text-blue-500"
                    strokeDasharray={`${stepPercent * 2.83} 283`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{currentSteps.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">steps</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Footprints className="w-6 h-6 mx-auto mb-1 text-blue-500" />
                <div className="text-sm font-semibold">{Math.round(currentSteps * 0.0005 * 10) / 10} mi</div>
                <div className="text-xs text-muted-foreground">Distance</div>
              </div>
              <div className="text-center">
                <Activity className="w-6 h-6 mx-auto mb-1 text-green-500" />
                <div className="text-sm font-semibold">{Math.round(currentSteps * 0.04)} cal</div>
                <div className="text-xs text-muted-foreground">Calories</div>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 mx-auto mb-1 text-yellow-500" />
                <div className="text-sm font-semibold">{Math.round(stepPercent)}%</div>
                <div className="text-xs text-muted-foreground">Goal</div>
              </div>
            </div>
          </div>
        );
      case "sleep":
        const sleepStages = ["Deep", "Light", "REM", "Awake"];
        const currentStage = sleepStages[Math.floor(Date.now() / 1000) % sleepStages.length];
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Moon className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
              <div className="text-2xl font-bold mb-2">Sleep Analysis</div>
              <div className="text-lg text-indigo-500">Current: {currentStage} Sleep</div>
            </div>
            <div className="grid grid-cols-4 gap-2 h-20">
              {Array.from({length: 24}).map((_, i) => {
                const height = Math.random() * 60 + 20;
                const colors = ["bg-indigo-600", "bg-blue-500", "bg-purple-500", "bg-gray-500"];
                const colorIndex = Math.floor(Math.random() * colors.length);
                return (
                  <div key={i} className="flex items-end">
                    <div 
                      className={`w-full ${colors[colorIndex]} rounded-sm animate-pulse`}
                      style={{height: `${height}%`, animationDelay: `${i * 0.1}s`}}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-4 gap-4 text-center text-sm">
              <div>
                <div className="w-4 h-4 bg-indigo-600 rounded mx-auto mb-1"></div>
                <div className="font-semibold">2h 15m</div>
                <div className="text-xs text-muted-foreground">Deep</div>
              </div>
              <div>
                <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-1"></div>
                <div className="font-semibold">3h 45m</div>
                <div className="text-xs text-muted-foreground">Light</div>
              </div>
              <div>
                <div className="w-4 h-4 bg-purple-500 rounded mx-auto mb-1"></div>
                <div className="font-semibold">1h 30m</div>
                <div className="text-xs text-muted-foreground">REM</div>
              </div>
              <div>
                <div className="w-4 h-4 bg-gray-500 rounded mx-auto mb-1"></div>
                <div className="font-semibold">20m</div>
                <div className="text-xs text-muted-foreground">Awake</div>
              </div>
            </div>
          </div>
        );
      case "uv":
        const uvIndex = feature.simulation.data[Math.floor(Date.now() / 700) % feature.simulation.data.length];
        const uvColor = uvIndex <= 2 ? "text-green-500" : uvIndex <= 5 ? "text-yellow-500" : uvIndex <= 7 ? "text-orange-500" : "text-red-500";
        const uvLevel = uvIndex <= 2 ? "Low" : uvIndex <= 5 ? "Moderate" : uvIndex <= 7 ? "High" : "Very High";
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Sun className="w-12 h-12 mx-auto mb-4 text-yellow-500 animate-spin" style={{animationDuration: '3s'}} />
              <div className={`text-3xl font-bold ${uvColor}`}>UV Index: {uvIndex}</div>
              <div className={`text-lg ${uvColor}`}>{uvLevel} Risk</div>
            </div>
            <div className="relative h-4 bg-muted rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-500"></div>
              <div 
                className="absolute top-0 w-2 h-full bg-white border-2 border-gray-800 rounded-full transition-all duration-500"
                style={{left: `${(uvIndex / 11) * 100}%`}}
              ></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-blue-500">SPF 30+</div>
                <div className="text-xs text-muted-foreground">Recommended</div>
              </div>
              <div className="glass-card p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-orange-500">15 min</div>
                <div className="text-xs text-muted-foreground">Safe Exposure</div>
              </div>
            </div>
          </div>
        );
      case "airQuality":
        const aqi = feature.simulation.data[Math.floor(Date.now() / 900) % feature.simulation.data.length];
        const aqiColor = aqi <= 50 ? "text-green-500" : aqi <= 100 ? "text-yellow-500" : "text-red-500";
        const aqiLevel = aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : "Unhealthy";
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Wind className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
              <div className={`text-3xl font-bold ${aqiColor}`}>AQI: {aqi}</div>
              <div className={`text-lg ${aqiColor}`}>{aqiLevel}</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">PM2.5</span>
                <div className="flex-1 mx-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '35%'}}></div>
                </div>
                <span className="text-sm font-semibold">12 μg/m³</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">PM10</span>
                <div className="flex-1 mx-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full animate-pulse" style={{width: '45%'}}></div>
                </div>
                <span className="text-sm font-semibold">28 μg/m³</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">O₃</span>
                <div className="flex-1 mx-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{width: '25%'}}></div>
                </div>
                <span className="text-sm font-semibold">65 μg/m³</span>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="relative">
                <Zap className="w-12 h-12 text-primary animate-pulse" />
                <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold mb-2">Feature Active</div>
              <div className="text-muted-foreground">Monitoring in real-time...</div>
            </div>
            <div className="space-y-2">
              {feature.simulation.data.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 glass-card rounded animate-pulse" style={{animationDelay: `${i * 0.2}s`}}>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for comprehensive health monitoring in one device
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedFeature(i)}
            >
              <div 
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-4 group-hover:shadow-lg transition-shadow`}
              >
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-card max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setSelectedFeature(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${features[selectedFeature].color} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    {(() => {
                      const IconComponent = features[selectedFeature].icon;
                      return <IconComponent className="w-8 h-8 text-foreground" />;
                    })()}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{features[selectedFeature].title}</h3>
                <p className="text-muted-foreground mb-4">{features[selectedFeature].detailedInfo}</p>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Live Simulation</h4>
                  <Button
                    onClick={startSimulation}
                    className="flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    {simulationActive ? "Stop Demo" : "Start Demo"}
                  </Button>
                </div>
                
                <div className="min-h-[200px] glass-card p-6 rounded-lg">
                  {simulationActive ? (
                    renderSimulation(features[selectedFeature])
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Click "Start Demo" to see this feature in action
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Features;
