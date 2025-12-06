import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02] hover:border-primary/20 cursor-pointer",
        className,
      )}
    >
      <div className="transition-transform duration-300 group-hover/bento:scale-105">
        {header}
      </div>
      <div className="transition-all duration-300 group-hover/bento:translate-x-2 group-hover/bento:translate-y-[-2px] text-center">
        <div className="flex justify-center mb-3">
          <div className="transition-colors duration-300 group-hover/bento:text-primary">
            {icon}
          </div>
        </div>
        <div className="mt-2 mb-2 font-sans font-semibold text-foreground transition-colors duration-300 group-hover/bento:text-primary text-center">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-muted-foreground transition-colors duration-300 group-hover/bento:text-foreground/80 text-center leading-relaxed">
          {description}
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100 pointer-events-none"></div>
    </div>
  );
};


