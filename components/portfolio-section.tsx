import { Card, CardContent } from "@/components/ui/card"

export function PortfolioSection() {
  const projects = [
    {
      title: "Modern Residential Villa",
      category: "Residential",
      image: "/modern-luxury-villa-with-contemporary-architecture.jpg",
      description: "Complete 3D planning and construction of a luxury villa with modern amenities",
    },
    {
      title: "Contemporary Interior Design",
      category: "Interior Design",
      image: "/modern-living-room-interior-with-elegant-furniture.jpg",
      description: "Sophisticated interior design for residential spaces with premium finishes",
    },
    {
      title: "Commercial Office Complex",
      category: "Commercial",
      image: "/modern-office-building-with-glass-facade-and-profe.jpg",
      description: "Large-scale commercial construction with modern architectural elements",
    },
    {
      title: "Luxury Bedroom Design",
      category: "Interior Design",
      image: "/luxury-bedroom-interior-with-modern-furniture-and-.jpg",
      description: "Premium bedroom interior design with custom furniture and lighting solutions",
    },
    {
      title: "Construction Site Management",
      category: "Construction",
      image: "/construction-site-with-workers-and-building-materi.jpg",
      description: "Professional construction management with quality materials and skilled workforce",
    },
    {
      title: "3D Architectural Visualization",
      category: "3D Planning",
      image: "/3d-architectural-rendering-of-modern-building-with.jpg",
      description: "Detailed 3D architectural plans and visualizations for client presentations",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our portfolio of successful construction and design projects across various categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
