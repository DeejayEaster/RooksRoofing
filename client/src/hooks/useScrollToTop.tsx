import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Custom hook that scrolls the window to the top when the route changes
 */
export function useScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}