import React from "react";

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} SnapLinks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
