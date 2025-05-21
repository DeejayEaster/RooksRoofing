import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
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
    ? projects.slice(0, 6) 
    : projects.filter(project => project.category === activeFilter).slice(0, 6);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Recent Projects</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Take a look at some of our recently completed roofing projects. We take pride in our quality workmanship and attention to detail.
          </p>
        </div>
        
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button variant="default" className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center">
              View Our Project Gallery <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
