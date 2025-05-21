import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="https://rooksroofing.com/wp-content/uploads/2023/08/rooks-roofing-logo.png" 
              alt="Rooks Roofing Logo" 
              className="h-14 mb-4 bg-white p-2 rounded"
            />
            <p className="text-neutral-300 mb-6">
              Central Oregon's most trusted roofing company since 1995. Providing quality roofing services for residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-neutral-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/residential">
                  <a className="text-neutral-300 hover:text-white transition">Residential Roofing</a>
                </Link>
              </li>
              <li>
                <Link href="/services/commercial">
                  <a className="text-neutral-300 hover:text-white transition">Commercial Roofing</a>
                </Link>
              </li>
              <li>
                <Link href="/services/repairs">
                  <a className="text-neutral-300 hover:text-white transition">Roof Repairs</a>
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance">
                  <a className="text-neutral-300 hover:text-white transition">Roof Maintenance</a>
                </Link>
              </li>
              <li>
                <Link href="/services/inspections">
                  <a className="text-neutral-300 hover:text-white transition">Roof Inspections</a>
                </Link>
              </li>
              <li>
                <Link href="/services/gutters">
                  <a className="text-neutral-300 hover:text-white transition">Gutter Services</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-neutral-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-neutral-300 hover:text-white transition">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-neutral-300 hover:text-white transition">Project Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/testimonials">
                  <a className="text-neutral-300 hover:text-white transition">Testimonials</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-neutral-300 hover:text-white transition">FAQs</a>
                </Link>
              </li>
              <li>
                <Link href="/financing">
                  <a className="text-neutral-300 hover:text-white transition">Financing Options</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-neutral-300 hover:text-white transition">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-neutral-700 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-neutral-300">1234 Roofing Way<br/>Bend, OR 97701</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-secondary"></i>
                <a href="tel:+15415551234" className="text-neutral-300 hover:text-white transition">(541) 555-1234</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-secondary"></i>
                <a href="mailto:info@rooksroofing.com" className="text-neutral-300 hover:text-white transition">info@rooksroofing.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-secondary"></i>
                <span className="text-neutral-300">Mon-Fri: 8AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-neutral-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Rooks Roofing. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="/privacy">
              <a className="text-neutral-400 hover:text-white transition mb-2 md:mb-0">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="text-neutral-400 hover:text-white transition mb-2 md:mb-0">Terms of Service</a>
            </Link>
            <Link href="/sitemap">
              <a className="text-neutral-400 hover:text-white transition mb-2 md:mb-0">Sitemap</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
