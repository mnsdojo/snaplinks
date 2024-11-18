import React from "react";

function Stats() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10M+</div>
            <div className="text-muted-foreground">Monthly Clicks</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
