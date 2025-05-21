import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="bg-white rounded-lg overflow-hidden shadow-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-64 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button 
            variant="secondary" 
            className="bg-white text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md font-medium transition"
          >
            View Project
          </Button>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-bold text-neutral-800 mb-2">{project.title}</h3>
        <p className="text-neutral-600 text-sm mb-3">{project.description}</p>
        <div className="flex items-center text-sm text-neutral-500">
          <span className="bg-neutral-100 px-3 py-1 rounded-full">{project.category}</span>
          <span className="mx-2">•</span>
          <span>{project.date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
