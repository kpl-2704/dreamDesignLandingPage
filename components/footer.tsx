import { Building2, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <Building2 className="h-8 w-8" /> */}
              <img
                className="h-16 w-20"
                src="https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/LOGO%2001.png?updatedAt=1757756809830"
              />
              <span className="text-2xl font-bold">Dream Design 3D</span>
            </div>
            <p className="text-background/80 text-pretty">
              Professional construction and architecture services bringing your
              dream spaces to life with quality, creativity, and expertise.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>2D & 3D Architectural Planning</li>
              <li>Interior Design Solutions</li>
              <li>Layout & Space Planning</li>
              <li>Complete Construction Services</li>
              <li>Material Supply & Management</li>
              <li>Project Consultation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+91 8237872906</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>dreamdesign008@gmail.com</span>
              </div>
              <div className="text-background/80">
                <div className="font-semibold">Bhavesh Ingle</div>
                <div>Founder & Lead Engineer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>
            &copy; 2024 Dream Design 3D. All rights reserved. | Professional
            Construction & Architecture Services
          </p>
        </div>
      </div>
    </footer>
  );
}
