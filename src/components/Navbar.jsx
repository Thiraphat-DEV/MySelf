import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Education", to: "/education" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
          Thiraphat<span className="text-indigo-500">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {navItems.map(({ label, to }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={label}
                to={to}
                className={cn(
                  "relative px-4 py-1.5 text-sm transition-colors duration-150",
                  active
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-px bg-indigo-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <nav className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-0.5">
              {navItems.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded text-sm transition-colors",
                    location.pathname === to
                      ? "text-foreground font-medium bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

