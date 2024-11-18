import React from "react";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-foreground">
              SnapLinks
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
