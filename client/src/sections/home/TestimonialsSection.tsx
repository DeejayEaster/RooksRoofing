import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Display testimonials (4 at a time for carousel effect)
  const displayedTestimonials = testimonials.slice(0, 4);
  
  // Next and previous handlers
  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? displayedTestimonials.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === displayedTestimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">What Our Clients Say</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our roofing services.
          </p>
        </div>
        
        <div className="relative">
          <div className="carousel flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 scrollbar-hide">
            {displayedTestimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-6 bg-neutral-50 rounded-xl shadow-md"
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {displayedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-primary" : "bg-neutral-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 hidden md:block">
            <Button 
              variant="outline"
              onClick={handlePrevious}
              className="bg-white p-3 rounded-full shadow-md text-primary hover:text-white hover:bg-primary transition"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden md:block">
            <Button 
              variant="outline"
              onClick={handleNext}
              className="bg-white p-3 rounded-full shadow-md text-primary hover:text-white hover:bg-primary transition"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/testimonials">
            <a className="text-primary hover:text-secondary font-bold transition duration-300 inline-flex items-center">
              Read More Testimonials <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
