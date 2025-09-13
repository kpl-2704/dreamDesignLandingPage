import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Ruler, Palette, Hammer, Home, Wrench } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "2D & 3D Planning",
      description:
        "Comprehensive architectural plans with detailed 2D drawings and realistic 3D visualizations to bring your vision to life.",
      features: [
        "Floor Plans",
        "3D Renderings",
        "Elevation Drawings",
        "Section Views",
      ],
      image:
        "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-07-12%20at%202.04.10%20PM%20(1).jpeg?updatedAt=1757753583287",
    },
    {
      icon: Palette,
      title: "Interior Design",
      description:
        "Creative interior design solutions that combine functionality with aesthetics for residential and commercial spaces.",
      features: [
        "Space Planning",
        "Color Schemes",
        "Furniture Selection",
        "Lighting Design",
      ],
      image:
        "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-09-13%20at%202.57.01%20PM.jpeg?updatedAt=1757755700733",
    },
    {
      icon: Ruler,
      title: "Layout Design",
      description:
        "Optimized layout designs that maximize space utilization while ensuring proper flow and functionality.",
      features: [
        "Space Optimization",
        "Traffic Flow",
        "Zoning Plans",
        "Site Analysis",
      ],
      image:
        "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-09-13%20at%203.09.00%20PM.jpeg?updatedAt=1757756394592",
    },
    {
      icon: Hammer,
      title: "Construction Services",
      description:
        "Complete construction services from foundation to finishing, including material procurement and project management.",
      features: [
        "Material Supply",
        "Project Management",
        "Quality Control",
        "Timely Delivery",
      ],
      image:
        "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-09-13%20at%203.09.01%20PM.jpeg?updatedAt=1757756394466",
    },
    {
      icon: Home,
      title: "Residential Projects",
      description:
        "Specialized in residential construction including homes, apartments, and renovation projects.",
      features: ["New Construction", "Renovations", "Extensions", "Remodeling"],
      image:
        "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-07-12%20at%202.04.14%20PM.jpeg?updatedAt=1757753583139",
    },
    {
      icon: Wrench,
      title: "Commercial Projects",
      description:
        "Professional commercial construction services for offices, retail spaces, and industrial buildings.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Industrial Units",
      ],
      image:
        "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-09-13%20at%202.57.00%20PM.jpeg?updatedAt=1757755700914",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From concept to completion, we provide comprehensive construction
            and architecture services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-[90%] h-[90%] object-fill  hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
