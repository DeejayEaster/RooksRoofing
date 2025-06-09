import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://img1.wsimg.com/isteam/ip/a9a1642d-cce6-474b-90f5-d93403a610c4/9190EC3D-4F53-4168-9258-780CFD74AB09.jpeg" 
                alt="Rooks Roofing Team" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-primary text-white p-4 rounded-full mr-4">
                    <i className="fas fa-award text-3xl"></i>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-bold text-lg">5 Stars</p>
                    <p className="text-neutral-600">on Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">North Georgia's Most Trusted Roofing Company</h2>
            <p className="text-neutral-600 mb-6">
Rooks Roofing & Exteriors is a family-owned team proudly serving Northwest Georgia. Licensed craftsmen deliver precision installs, while our in-house insurance specialists streamline every claim—turning potential headaches into a seamless, stress-free experience.            </p>
            <p className="text-neutral-600 mb-12">
              Our team of experienced professionals is dedicated to delivering the highest quality roofing solutions for residential and commercial properties. We use only the finest materials and latest techniques to ensure that your roof is built to last.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <i className="fas fa-certificate text-primary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold text-neutral-800">Licensed & Insured</h4>
                  <p className="text-neutral-600 text-sm">Fully compliant with all regulations</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-users text-primary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold text-neutral-800">Expert Team</h4>
                  <p className="text-neutral-600 text-sm">Skilled and certified professionals</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-tools text-primary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold text-neutral-800">Quality Materials</h4>
                  <p className="text-neutral-600 text-sm">Premium products from trusted brands</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-hand-holding-heart text-primary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold text-neutral-800">Customer Focused</h4>
                  <p className="text-neutral-600 text-sm">We prioritize your satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/about">
                <Button variant="default" className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition duration-300 text-center">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/about#team">
                <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-md transition duration-300 text-center">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
