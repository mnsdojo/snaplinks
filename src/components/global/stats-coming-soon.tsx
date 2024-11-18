import React from "react";
import { LineChart, Timer, Users } from "lucide-react";

const StatsComingSoon = () => {
  return (
    <div className="relative overflow-hidden py-24 bg-muted/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-6 gap-4 p-4 opacity-5">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="aspect-square bg-primary rounded-lg" />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Title Section */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
              Analytics & Stats
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Powerful insights coming to your SnapLinks profile
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Timer className="w-5 h-5" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>

          {/* Feature Preview */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Visitor Analytics",
                description: "Track profile visits and engagement metrics",
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Click Statistics",
                description: "Monitor link performance and click-through rates",
              },
              {
                icon: <Timer className="w-8 h-8" />,
                title: "Real-time Data",
                description: "View your stats as they happen, updated live",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <p className="text-lg text-muted-foreground mb-4">
              Want to be notified when stats are available?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComingSoon;
