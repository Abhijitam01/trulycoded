"use client";
import React, { Suspense } from "react";
import { motion } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const DefaultFallback = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-4 p-8"
  >
    <Skeleton className="h-8 w-3/4 mx-auto" />
    <Skeleton className="h-4 w-1/2 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  </motion.div>
);

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <DefaultFallback />,
  className 
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

export default LazyWrapper;
