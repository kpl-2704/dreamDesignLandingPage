"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `*New Lead from Dream Design 3D Website*

*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Location:* ${formData.location}
*Project Details:* ${formData.message || "Not specified"}

*Generated on:* ${new Date().toLocaleString()}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // WhatsApp API URL
      const whatsappURL = `https://wa.me/918237872906?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappURL, "_blank");

      toast({
        title: "Redirecting to WhatsApp!",
        description:
          "Your inquiry details have been prepared. Complete the process by sending the message on WhatsApp.",
      });

      // Clear form after successful submission
      setFormData({ name: "", mobile: "", location: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Start Your Dream Project Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get a free consultation and quote for your construction or
            architecture project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">Get Free Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24
                hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your city/area"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Preparing WhatsApp Message..."
                  ) : (
                    <>
                      Send via WhatsApp
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us directly for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+91 8237872906</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">
                      dreamdesign008@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Service Areas</div>
                    <div className="text-muted-foreground">
                      Pan India Coverage
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Why Choose Dream Design 3D?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    Free consultation and project estimation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    4+ years of industry experience
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    Complete project management
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    Quality materials and workmanship
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    On-time project delivery guarantee
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
