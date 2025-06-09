import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Roofing Services</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Rooks Roofing provides comprehensive roofing solutions for residential and commercial properties throughout North Georgia. With our team of experienced professionals, we deliver quality workmanship and exceptional customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="text-center my-12">
          <Link href="/services">
            <Button variant="default" className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center">
              View All Services <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
