import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Roofing Services | Rooks Roofing</title>
        <meta 
          name="description" 
          content="Explore our comprehensive roofing services including residential and commercial roofing, repairs, maintenance, inspections, and gutter services throughout North Georgia."
        />
        <meta property="og:title" content="Our Roofing Services | Rooks Roofing" />
        <meta property="og:description" content="Comprehensive roofing services including residential and commercial roofing, repairs, maintenance, inspections, and gutter services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rooksroofing.com/services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Roofing Services</h1>
          <p className="text-white text-xl max-w-3xl mx-auto mb-8 opacity-90">
            We provide comprehensive roofing solutions for residential and commercial properties throughout North Georgia.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Comprehensive Roofing Solutions</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              With over 25 years of experience, our team delivers quality workmanship and exceptional customer service for all your roofing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="default" className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center">
              Contact Us For Details <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Why Choose Rooks Roofing?</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              When you choose Rooks Roofing, you're choosing quality, reliability, and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-medal text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Experience & Expertise</h3>
              <p className="text-neutral-600">
                With over 25 years in the industry, we have the knowledge and skills to handle any roofing project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-tools text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Quality Materials</h3>
              <p className="text-neutral-600">
                We use only the highest quality materials from trusted manufacturers to ensure durability and longevity.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Satisfaction Guaranteed</h3>
              <p className="text-neutral-600">
                We stand behind our work with comprehensive warranties and a commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us today to schedule a free consultation and estimate for your roofing project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="secondary" className="bg-white hover:bg-neutral-100 text-primary font-bold py-3 px-8 rounded-md transition duration-300">
              Free Estimate
            </Button>
            <Button variant="outline" className="border border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-md transition duration-300">
              <i className="fas fa-phone-alt mr-2"></i> Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
