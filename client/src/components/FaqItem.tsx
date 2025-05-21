import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FaqItemProps {
  faq: {
    id: number;
    question: string;
    answer: string;
  };
}

export default function FaqItem({ faq }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-left"
      >
        <h3 className="text-lg font-bold text-neutral-800">{faq.question}</h3>
        <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'} text-primary`}></i>
      </Button>
      
      {isOpen && (
        <div className="bg-white px-5 pb-5 rounded-b-lg">
          <p className="text-neutral-600">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
