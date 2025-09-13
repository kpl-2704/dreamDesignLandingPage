"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Ruler, Palette, Hammer } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Transform Your <span className="text-primary">Dream Space</span>{" "}
                Into Reality
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Professional construction and architecture services including
                2D/3D planning, interior design, layout design, and complete
                construction with materials.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={scrollToContact}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Services
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src="https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-07-12%20at%202.04.09%20PM.jpeg?updatedAt=1757753588641"
                alt="Dream Design 3D Projects"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border">
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">3D Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed 3D architectural plans
                  </p>
                </div>
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border">
                  <Palette className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="font-semibold mb-2">Interior Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Beautiful interior solutions
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border">
                  <Ruler className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Layout Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized space planning
                  </p>
                </div>
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border">
                  <Hammer className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="font-semibold mb-2">Construction</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete construction services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
