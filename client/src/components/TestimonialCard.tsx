import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  return (
    <Card className={`flex-shrink-0 p-6 bg-neutral-50 rounded-xl shadow-md ${className}`}>
      <CardContent className="p-0 flex flex-col h-full">
        <div className="text-yellow-400 flex mb-4">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`fas ${i < testimonial.rating ? 'fa-star' : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? 'fa-star-half-alt' : 'fa-star'}`}></i>
          ))}
        </div>
        <p className="text-neutral-700 italic mb-6 flex-grow">{testimonial.text}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-neutral-300 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-xl">{testimonial.initials}</span>
          </div>
          <div>
            <h4 className="font-bold text-neutral-800">{testimonial.name}</h4>
            <p className="text-neutral-600 text-sm">{testimonial.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
