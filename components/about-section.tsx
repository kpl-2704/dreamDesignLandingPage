import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              About Dream Design 3D
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              With over a decade of experience in construction and architecture,
              Dream Design 3D has been transforming spaces and bringing
              architectural visions to life. We specialize in comprehensive
              design and construction services that combine creativity with
              technical expertise.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Our team is committed to delivering exceptional results that
              exceed client expectations while maintaining the highest standards
              of quality and professionalism.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">Quality Assured</div>
                  <div className="text-sm text-muted-foreground">
                    Premium materials & workmanship
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">Expert Team</div>
                  <div className="text-sm text-muted-foreground">
                    Skilled professionals
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">On-Time Delivery</div>
                  <div className="text-sm text-muted-foreground">
                    Project completion guarantee
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">Licensed & Insured</div>
                  <div className="text-sm text-muted-foreground">
                    Fully certified services
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-primary text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/professional-architect-with-blueprints-and-constru.jpg"
                  alt="Professional Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-0 relative z-10">
                <h3 className="text-2xl font-bold mb-4">Meet Our Founder</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-lg font-semibold">Bhavesh Ingle</div>
                    <div className="opacity-90">Founder & Lead Engineer</div>
                  </div>
                  <p className="opacity-90 text-pretty">
                    With extensive experience in construction and architecture,
                    Bhavesh leads our team with a vision to create exceptional
                    spaces that blend functionality with aesthetic appeal.
                  </p>
                  <div className="pt-4 border-t border-primary-foreground/20">
                    <div className="text-sm opacity-90">Direct Contact</div>
                    <div className="text-lg font-semibold">+91 8237872906</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
