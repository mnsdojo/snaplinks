import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";
import StatsComingSoon from "@/components/global/stats-coming-soon";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              One Link to Share
              <span className="text-primary"> Everything</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Create your personalized link hub in minutes. Share your content,
              social profiles, and more with a single link that looks great
              everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg">
                Create Your SnapLink
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="h-12 px-8 text-lg">
                See Examples
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="relative rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur p-2">
            <img
              src="/api/placeholder/1200/600"
              alt="SnapLinks Preview"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsComingSoon />

      {/* CTA Section */}
      <div className="bg-muted/50 py-24">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Create Your SnapLink?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of creators, influencers, and professionals who use
            SnapLinks to share their content.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg">
            Get Started for Free
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
