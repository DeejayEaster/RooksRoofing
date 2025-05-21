import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="service-card bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-all duration-300">
      <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-3">{service.title}</h3>
        <p className="text-neutral-600 mb-4">{service.description}</p>
        <ul className="mb-6 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-primary mt-1 mr-2"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={`/services/${service.slug}`}>
          <a className="text-primary font-semibold hover:text-secondary transition duration-300 flex items-center">
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}
