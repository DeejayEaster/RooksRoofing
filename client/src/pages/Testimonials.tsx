import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Client Testimonials | Rooks Roofing</title>
        <meta 
          name="description" 
          content="Read what our satisfied customers have to say about Rooks Roofing's services. Discover why we're Central Oregon's most trusted roofing company."
        />
        <meta property="og:title" content="Client Testimonials | Rooks Roofing" />
        <meta property="og:description" content="Read what our satisfied customers have to say about Rooks Roofing's services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rooksroofing.com/testimonials" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h1>
          <p className="text-white text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Don't just take our word for it. Here's what our satisfied customers have to say about our roofing services.
          </p>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">What Our Clients Say</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              We're proud of the reputation we've built over the years. These testimonials reflect our commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Ratings & Reviews */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Ratings</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              We're highly rated across multiple platforms. Check out our reviews and see why our customers choose Rooks Roofing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Google Reviews</h3>
              <div className="text-yellow-400 flex justify-center mb-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-2xl font-bold text-neutral-800 mb-2">4.9/5</p>
              <p className="text-neutral-600 mb-4">Based on 120+ reviews</p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition font-medium"
              >
                Read Reviews <i className="fas fa-external-link-alt ml-1"></i>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Yelp</h3>
              <div className="text-yellow-400 flex justify-center mb-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="text-2xl font-bold text-neutral-800 mb-2">4.7/5</p>
              <p className="text-neutral-600 mb-4">Based on 85+ reviews</p>
              <a 
                href="https://yelp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition font-medium"
              >
                Read Reviews <i className="fas fa-external-link-alt ml-1"></i>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Angie's List</h3>
              <div className="text-yellow-400 flex justify-center mb-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-2xl font-bold text-neutral-800 mb-2">4.8/5</p>
              <p className="text-neutral-600 mb-4">Based on 70+ reviews</p>
              <a 
                href="https://angieslist.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition font-medium"
              >
                Read Reviews <i className="fas fa-external-link-alt ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leave a Review CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-6">Are You a Satisfied Customer?</h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-3xl mx-auto">
            If you've had a positive experience with Rooks Roofing, we'd love to hear about it! Your review helps other homeowners and businesses find us and learn about our services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white font-medium transition duration-300">
              <i className="fab fa-google mr-2"></i> Review on Google
            </Button>
            <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white font-medium transition duration-300">
              <i className="fab fa-yelp mr-2"></i> Review on Yelp
            </Button>
            <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white font-medium transition duration-300">
              <i className="fas fa-list-alt mr-2"></i> Review on Angie's List
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Our Service?</h2>
          <p className="text-white text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join our long list of satisfied customers. Contact us today to schedule your free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="secondary" className="bg-white hover:bg-neutral-100 text-primary font-bold py-3 px-8 rounded-md transition duration-300">
              Get a Free Estimate
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
