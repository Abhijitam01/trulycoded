import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-black text-accent">404</h1>
        <p className="mb-8 text-xl text-neutral-600 dark:text-neutral-400">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="btn-primary"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
