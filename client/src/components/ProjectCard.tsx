import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const next = () =>
    setSlide((i) => (i + 1) % project.images.length);
  const prev = () =>
    setSlide((i) =>
      i === 0 ? project.images.length - 1 : i - 1
    );

  return (
    <>
      {/* CARD */}
      <Card
        className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setSlide(0);
          setOpen(true);
        }}
      >
        <div className="relative overflow-hidden">
          <img
            src={
              isHovered && project.images[1]
                ? project.images[1]
                : project.images[0]
            }
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-neutral-800 mb-1">
            {project.title}
          </h3>
          <p className="text-neutral-600 text-sm line-clamp-3 mb-3">
            {project.description}
          </p>
          <div className="flex items-center text-sm text-neutral-500">
            <span className="bg-neutral-100 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="mx-2">•</span>
            <span>{project.date}</span>
          </div>
        </CardContent>
      </Card>

      {/* MODAL / IMAGE SLIDER */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-4xl">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 z-10 bg-black/50 p-1 rounded-full text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="relative w-full max-h-[80vh]">
            <img
              src={project.images[slide]}
              alt={`${project.title} – slide ${slide + 1}`}
              className="w-full max-h-[80vh] object-contain"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}