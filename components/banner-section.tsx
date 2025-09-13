"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";

const bannerImages = [
  {
    src: "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-07-12%20at%202.04.10%20PM%20(1).jpeg?updatedAt=1757753583287",
    alt: "Modern luxury villa with contemporary architecture",
  },
  {
    src: "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-07-12%20at%202.04.12%20PM.jpeg?updatedAt=1757753589344",
    alt: "Construction site with workers and building materials",
  },
  {
    src: "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-07-12%20at%202.04.08%20PM%20(2).jpeg?updatedAt=1757753583214",
    alt: "Modern office building with glass facade",
  },
  {
    src: "https://ik.imagekit.io/q4tgpuqzs/WhatsApp%20Unknown%202025-09-13%20at%202.22.09%20PM/WhatsApp%20Image%202025-07-12%20at%202.04.14%20PM.jpeg?updatedAt=1757753583139",
    alt: "Modern living room interior with elegant furniture",
  },
];

export function BannerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const handleConsultation = () => {
    const message =
      "Hi! I'm interested in getting a free consultation for my construction/architecture project. Please provide more details.";
    const whatsappUrl = `https://wa.me/918237872906?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative h-[90vh] mt-10 overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-[90%]">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className=""
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Transform Your Vision Into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            Professional Construction & Architecture Services by Dream Design 3D
          </p>
          <Button
            onClick={handleConsultation}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Free Consultation
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
