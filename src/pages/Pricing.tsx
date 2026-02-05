import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹2,399",
      description: "Perfect for individuals",
      features: ["Basic eye health analysis", "Monthly reports", "Email support"]
    },
    {
      name: "Pro",
      price: "₹6,499",
      description: "For healthcare professionals",
      features: ["Advanced AI analysis", "Real-time monitoring", "Priority support", "Custom reports"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For healthcare institutions",
      features: ["Full platform access", "API integration", "24/7 support", "Custom deployment"]
    }
  ];

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your eye health monitoring needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`glass-card ${index === 1 ? 'border-primary' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold gradient-text">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={index === 1 ? "hero" : "outline"} className="w-full">
                    Buy Now
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