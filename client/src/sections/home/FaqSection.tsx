import { Link } from "wouter";
import FaqItem from "@/components/FaqItem";

export default function FaqSection() {
  // FAQ items
  const faqItems = [
    {
      id: 1,
      question: "How long does a typical roof replacement take?",
      answer: "The duration of a roof replacement depends on several factors, including the size and complexity of your roof, the materials being used, and weather conditions. For an average residential home, a complete roof replacement typically takes 2-4 days. Commercial projects may take longer depending on the scope of work."
    },
    {
      id: 2,
      question: "Do you offer warranties on your roofing work?",
      answer: "Yes, we stand behind our work with comprehensive warranties. We offer a 10-year workmanship warranty on all new roof installations, which covers any issues related to our installation. Additionally, the roofing materials we use come with manufacturer warranties, which can range from 25 years to lifetime coverage, depending on the product."
    },
    {
      id: 3,
      question: "How do I know if I need a roof repair or a complete replacement?",
      answer: "Several factors determine whether a repair or replacement is more appropriate. These include the age of your roof, the extent of damage, and the overall condition of your roofing system. Generally, if your roof is over 20 years old and experiencing multiple issues, a replacement might be more cost-effective in the long run. Our professional inspectors can assess your roof's condition and provide a recommendation based on their findings."
    },
    {
      id: 4,
      question: "Do you work with insurance claims for roof damage?",
      answer: "Yes, we have extensive experience working with insurance companies on storm damage claims. Our team can help you navigate the insurance claims process, including documenting damage, providing detailed estimates, and communicating directly with your insurance adjuster to ensure you receive the coverage you're entitled to for your roof damage."
    },
    {
      id: 5,
      question: "What roofing materials do you recommend for North Georgia's climate?",
      answer: "For North Georgia's climate, which experiences significant temperature variations, heavy snowfall, and occasional high winds, we typically recommend architectural asphalt shingles, metal roofing, or composite materials. These options provide excellent durability, weather resistance, and insulation properties. The best choice depends on your specific needs, budget, and aesthetic preferences. During your consultation, we can discuss the advantages of each material for your particular situation."
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Find answers to some of the most common questions about our roofing services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item) => (
            <FaqItem key={item.id} faq={item} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/faq">
            <a className="text-primary hover:text-secondary font-bold transition duration-300 inline-flex items-center">
              View All FAQs <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
