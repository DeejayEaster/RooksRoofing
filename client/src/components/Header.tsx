import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "../assets/rooks-logo-final.png"; // Adjust the path as necessary

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [location] = useLocation();
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services", hasDropdown: true },
    { title: "About Us", path: "/about" },
    { title: "Gallery", path: "/gallery" },
    { title: "Testimonials", path: "/testimonials" },
    { title: "Contact", path: "/contact" }
  ];

  // Service submenu items
  const serviceItems = [
    { title: "Residential Roofing", path: "/services/residential" },
    { title: "Commercial Roofing", path: "/services/commercial" },
    { title: "Roof Repairs", path: "/services/repairs" },
    { title: "Roof Maintenance", path: "/services/maintenance" },
    { title: "Roof Inspections", path: "/services/inspections" },
  ];

  // Check if a link is active
  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <img 
                  src={logo} 
                  alt="Rooks Roofing Logo" 
                  className="h-24"
                />
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <DropdownMenu 
                  key={link.title}
                  open={isServiceDropdownOpen}
                  onOpenChange={setIsServiceDropdownOpen}
                >
                  <DropdownMenuTrigger 
                    className={`text-neutral-800 hover:text-primary font-medium transition duration-200 flex items-center ${isActive(link.path) ? 'text-primary' : ''}`}
                  >
                    {link.title} <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {serviceItems.map((service) => (
                      <DropdownMenuItem key={service.title} asChild>
                        <Link href={service.path}>
                          <a className="w-full block px-4 py-2 text-sm text-neutral-700 hover:bg-primary hover:text-white">
                            {service.title}
                          </a>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={link.title} href={link.path}>
                  <a className={`text-neutral-800 hover:text-primary font-medium transition duration-200 ${isActive(link.path) ? 'text-primary' : ''}`}>
                    {link.title}
                  </a>
                </Link>
              )
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="destructive" className="border border-amber-400 bg-white text-amber-500 font-bold py-2 px-6 rounded-md transition duration-300 inline-flex items-center hover:bg-amber-400 hover:text-black">
                <i className="fas fa-phone-alt mr-2"></i> Get a Quote
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-neutral-800 hover:text-primary focus:outline-none">
                <i className="fas fa-bars text-2xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden w-[80vw] sm:max-w-sm">
              <div className="flex flex-col h-full py-6">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.title}>
                      {link.hasDropdown ? (
                        <div className="space-y-2">
                          <button 
                            onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                            className="w-full text-left py-2 text-neutral-800 hover:text-primary flex justify-between items-center font-medium"
                          >
                            {link.title} 
                            <i className={`fas fa-chevron-${isServiceDropdownOpen ? 'up' : 'down'} text-xs`}></i>
                          </button>
                          
                          {isServiceDropdownOpen && (
                            <div className="pl-4 space-y-2">
                              {serviceItems.map((service) => (
                                <Link key={service.title} href={service.path}>
                                  <a className="block py-2 text-sm text-neutral-700 hover:text-primary">
                                    {service.title}
                                  </a>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link href={link.path}>
                          <a className={`block py-2 text-neutral-800 hover:text-primary font-medium ${isActive(link.path) ? 'text-primary' : ''}`}>
                            {link.title}
                          </a>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                
                <div className="mt-auto pt-6">
                  <Link href="/contact">
                    <Button variant="destructive" className="w-full text-white font-bold py-2 px-4 rounded-md">
                      <i className="fas fa-phone-alt mr-2"></i> Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
