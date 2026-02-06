import { motion } from "framer-motion";
import { Glasses, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Technology", path: "/technology" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Shop", path: "/pricing" },
    { name: "Contact", path: "/contact" }
  ];
  
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Glasses className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-xl gradient-text">VitaLens</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" asChild>
              <Link to="/">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden py-4 space-y-4"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block transition-colors ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" size="default" className="w-full" asChild>
              <Link to="/">Get Started</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
