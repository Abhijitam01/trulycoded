"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  sizes = "100vw",
  placeholder = "empty",
  blurDataURL,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate optimized image URL (you can integrate with your image service)
  const getOptimizedSrc = (originalSrc: string) => {
    // Example: Cloudinary optimization
    if (originalSrc.includes("cloudinary.com")) {
      const baseUrl = originalSrc.split("/upload/")[0];
      const publicId = originalSrc.split("/upload/")[1];
      return `${baseUrl}/upload/w_auto,c_scale,q_${quality},f_auto/${publicId}`;
    }

    // Example: Next.js Image Optimization
    if (originalSrc.includes("_next/image")) {
      return originalSrc;
    }

    // Example: Custom image service
    if (originalSrc.includes("your-image-service.com")) {
      return `${originalSrc}?w=${width}&h=${height}&q=${quality}&f=webp`;
    }

    // Fallback to original
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  // Generate WebP fallback
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes("_next/image") || originalSrc.includes("cloudinary.com")) {
      return originalSrc; // Already optimized
    }
    return originalSrc; // You can add WebP conversion logic here
  };

  const webpSrc = getWebPSrc(src);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder/Blur */}
      {placeholder === "blur" && blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: `url(${blurDataURL})` }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && placeholder === "empty" && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <div className="text-center">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-sm">Failed to load image</div>
          </div>
        </div>
      )}

      {/* Optimized Image */}
      <picture>
        {/* WebP source for modern browsers */}
        <source
          srcSet={webpSrc}
          type="image/webp"
          sizes={sizes}
        />
        
        {/* Fallback image */}
        <motion.img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </picture>

      {/* Performance hint for critical images */}
      {priority && (
        <link
          rel="preload"
          as="image"
          href={optimizedSrc}
          type="image/webp"
        />
      )}
    </div>
  );
};

export default OptimizedImage;
