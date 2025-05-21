import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-primary hover:bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </Button>
  );
}
