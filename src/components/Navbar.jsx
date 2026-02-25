import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, GraduationCap, Code2, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "About", to: "/about", icon: User },
  { label: "Education", to: "/Education", icon: GraduationCap },
  { label: "Skills", to: "/Skills", icon: Code2 },
  { label: "Contact", to: "/Contact", icon: Mail },
];

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:flex flex-col w-56 min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-2xl"
      >
        <div className="px-6 py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2"
          >
            <span className="text-2xl font-bold">T</span>
          </motion.div>
          <p className="text-center text-sm text-blue-200 mt-1">Portfolio</p>
        </div>

        <ul className="flex flex-col gap-1 px-3 flex-1">
          {navItems.map(({ label, to, icon: Icon }, i) => {
            const active = location.pathname === to;
            return (
              <motion.li
                key={label}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i + 0.4, duration: 0.4 }}
              >
                <Link to={to}>
                  <div
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      active
                        ? "bg-white text-blue-700 shadow-md"
                        : "text-blue-100 hover:bg-white/15"
                    )}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"
                      />
                    )}
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <div className="px-6 py-6 text-center text-xs text-blue-300">
          © 2024 Thiraphat
        </div>
      </motion.nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-blue-700 text-white flex items-center justify-between px-4 py-3 shadow-lg">
        <span className="font-bold text-lg">Thiraphat</span>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-14 left-0 right-0 z-40 bg-blue-700 text-white shadow-xl"
        >
          <ul className="flex flex-col gap-1 p-3">
            {navItems.map(({ label, to, icon: Icon }) => (
              <li key={label}>
                <Link to={to} onClick={() => setMobileOpen(false)}>
                  <div className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium",
                    location.pathname === to ? "bg-white text-blue-700" : "hover:bg-white/15"
                  )}>
                    <Icon size={18} />
                    <span>{label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;

