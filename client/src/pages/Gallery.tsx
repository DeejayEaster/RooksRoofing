import { useState } from "react";
import { Helmet } from "react-helmet";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function Gallery() {
  // Filter state
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Filter categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "repairs", name: "Repairs" },
    { id: "installation", name: "Installation" }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Project Gallery | Rooks Roofing</title>
        <meta 
          name="description" 
          content="Explore our portfolio of residential and commercial roofing projects throughout North Georgia. View our recent roof installations, repairs, and renovations."
        />
        <meta property="og:title" content="Project Gallery | Rooks Roofing" />
        <meta property="og:description" content="Explore our portfolio of residential and commercial roofing projects throughout North Georgia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rooksroofing.com/gallery" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Project Gallery</h1>
          <p className="text-white text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Explore our portfolio of residential and commercial roofing projects throughout North Georgia.
          </p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Recent Projects</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Take a look at some of our recently completed roofing projects. We take pride in our quality workmanship and attention to detail.
            </p>
          </div>
          
          {/* Filter buttons */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center space-x-2 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`mt-2 ${
                    activeFilter === category.id
                      ? "bg-primary text-white"
                      : "bg-white text-neutral-700 hover:bg-neutral-100"
                  } px-5 py-2 rounded-md font-medium transition`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-neutral-700 mb-2">No projects found</h3>
              <p className="text-neutral-600">
                Try selecting a different category or check back later for new projects.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Ready to Start Your Project?</h2>
          <p className="text-neutral-600 text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation for your roofing project. Our team is ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/contact" 
              className="bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Get a Free Estimate
            </a>
            <a 
              href="/services" 
              className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
