import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles route-level scroll restoration and hash navigation.
 * Ensures new pages load at the top while hash anchor links correctly target sections.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Hash navigation target (e.g., /#projects)
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Direct route navigation (e.g., /resume, /projects/supplynest)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, hash]);

  return null;
};
