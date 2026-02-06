import { Glasses } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Glasses className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl gradient-text">VitaLens</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-foreground transition-colors">Privacy</button>
            <button onClick={() => setShowTerms(true)} className="hover:text-foreground transition-colors">Terms</button>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 VitaLens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
      <DialogContent className="glass-card max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p><strong>Last Updated:</strong> February 2025</p>
          
          <div>
            <h3 className="text-foreground font-semibold mb-2">1. Information We Collect</h3>
            <p>VitaLens collects health data including heart rate, SpO₂, temperature, and environmental data to provide real-time health monitoring services.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">2. How We Use Your Data</h3>
            <p>Your health data is used to provide personalized insights, detect anomalies, and send alerts. We use AI to analyze patterns and improve our services.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">3. Data Security</h3>
            <p>We implement industry-standard encryption and security measures to protect your sensitive health information.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">4. Data Sharing</h3>
            <p>We do not sell your personal health data. Data may be shared with healthcare providers only with your explicit consent.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">5. Your Rights</h3>
            <p>You have the right to access, modify, or delete your data at any time through your account settings.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">6. Contact Us</h3>
            <p>For privacy concerns, contact us at privacy@vitalens.in</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    <Dialog open={showTerms} onOpenChange={setShowTerms}>
      <DialogContent className="glass-card max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Terms of Service</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p><strong>Last Updated:</strong> February 2025</p>
          
          <div>
            <h3 className="text-foreground font-semibold mb-2">1. Acceptance of Terms</h3>
            <p>By using VitaLens smart glasses and services, you agree to these terms and conditions.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">2. Medical Disclaimer</h3>
            <p>VitaLens is a health monitoring device and should not replace professional medical advice. Always consult healthcare professionals for medical decisions.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">3. Device Usage</h3>
            <p>Users must follow device instructions and safety guidelines. VitaLens is not responsible for misuse or improper handling of the device.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">4. Service Availability</h3>
            <p>We strive for 24/7 service availability but do not guarantee uninterrupted access. Maintenance and updates may cause temporary disruptions.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">5. Warranty</h3>
            <p>VitaLens devices come with a 1-year limited warranty covering manufacturing defects. Warranty does not cover damage from misuse.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">6. Limitation of Liability</h3>
            <p>VitaLens is not liable for any indirect, incidental, or consequential damages arising from device use.</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">7. Changes to Terms</h3>
            <p>We reserve the right to modify these terms. Users will be notified of significant changes.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default Footer;
