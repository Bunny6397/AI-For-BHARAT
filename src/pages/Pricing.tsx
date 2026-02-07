import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();
  const plans = [
    {
      name: "VitaLens Care",
      edition: "Elderly Edition",
      price: "Contact for Pricing",
      description: "Perfect for elderly care and monitoring",
      features: [
        "Heart Rate & SpO₂ Monitoring",
        "Sleep + Fall Detection",
        "SOS Alert with GPS & Caregiver Notification"
      ],
      buttonText: "Buy Care Edition"
    },
    {
      name: "VitaLens Focus",
      edition: "Student & Professional Edition",
      price: "Contact for Pricing",
      description: "For students and professionals",
      features: [
        "Stress & burnout tracking (HRV-based)",
        "Sleep schedule reminders",
        "UV & AQI wellness alerts"
      ],
      buttonText: "Buy Focus Edition"
    },
    {
      name: "VitaLens AirGuard",
      edition: "Respiratory Safety Edition",
      price: "Contact for Pricing",
      description: "For respiratory health monitoring",
      features: [
        "Real-time AQI / PM2.5 monitoring",
        "Pollution exposure tracking",
        "Respiratory risk alerts (Asthma/COPD support)"
      ],
      buttonText: "Buy AirGuard Edition"
    },
    {
      name: "VitaLens MedAssist",
      edition: "Clinical Edition",
      price: "Contact for Pricing",
      description: "For healthcare professionals and patients",
      features: [
        "Medical report & scan assistance via app",
        "Medicine scanning + reminders",
        "Remote patient monitoring support"
      ],
      buttonText: "Buy MedAssist Edition"
    }
  ];

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              VitaLens Editions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect edition for your health monitoring needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={plan.name} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm font-semibold">{plan.edition}</CardDescription>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                  <div className="text-2xl font-bold gradient-text mt-2">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/checkout?edition=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}`)}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Pricing;