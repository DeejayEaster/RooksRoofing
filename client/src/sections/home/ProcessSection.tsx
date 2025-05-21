import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  // Process steps
  const processSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Contact us to schedule a free consultation and estimate for your roofing project.",
      icon: "fas fa-phone-alt"
    },
    {
      number: 2,
      title: "Inspection",
      description: "Our team will thoroughly inspect your roof and provide a detailed assessment.",
      icon: "fas fa-clipboard-list"
    },
    {
      number: 3,
      title: "Proposal",
      description: "We'll provide a clear, detailed proposal with transparent pricing and timeline.",
      icon: "fas fa-file-contract"
    },
    {
      number: 4,
      title: "Execution",
      description: "Our skilled team completes your project with quality workmanship and attention to detail.",
      icon: "fas fa-hammer"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Simple Process</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            We make getting your roof repaired or replaced easy with our straightforward process. From initial consultation to final inspection, we're with you every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-4xl font-bold">{step.number}</span>
                </div>
                <div className="absolute top-0 right-0 bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                  <i className={`${step.icon} text-white`}></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button variant="destructive" className="bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center">
              Schedule Your Consultation <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
