'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  title,
  subtitle,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-12 md:py-16 lg:py-24', className)} {...props}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-800">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-lg text-gray-800">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
