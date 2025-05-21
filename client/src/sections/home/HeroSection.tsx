import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 font-montserrat">Quality Roofing Services You Can Trust</h1>
          <p className="text-white text-xl mb-8 font-opensans">Providing top-notch residential and commercial roofing solutions throughout Central Oregon since 1995.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button variant="destructive" className="bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 text-center">
                Free Estimate
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" className="bg-white hover:bg-neutral-100 text-primary font-bold py-3 px-8 rounded-md transition duration-300 text-center">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center">
              <i className="fas fa-medal text-primary text-3xl mr-3"></i>
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-star text-primary text-3xl mr-3"></i>
              <span className="font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock text-primary text-3xl mr-3"></i>
              <span className="font-medium">25+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-primary text-3xl mr-3"></i>
              <span className="font-medium">Quality Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
