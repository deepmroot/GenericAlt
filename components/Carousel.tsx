
import React, { forwardRef, useRef, HTMLAttributes } from "react";
import { motion } from "framer-motion";

// Simplified utility for merging Tailwind classes
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Define the type for a single carousel item
export interface CarouselItem {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

// Props for the CarouselCard component
interface CarouselCardProps {
  item: CarouselItem;
}

// The individual card component with hover animation
const CarouselCard = forwardRef<HTMLDivElement, CarouselCardProps>(({ item }, ref) => (
  <motion.div
    ref={ref}
    className="relative flex-shrink-0 w-[350px] snap-start"
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="bg-[#f5ffe0] rounded-[2rem] overflow-hidden border-2 border-gray-200">
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="w-full h-[400px] object-cover"
      />
    </div>
    <div className="mt-4">
      <h3 className="font-bold text-2xl text-gray-900">{item.title}</h3>
      <p className="text-[#f5ffe0] mt-1 text-lg">{item.description}</p>
    </div>
  </motion.div>
));
CarouselCard.displayName = "CarouselCard";

// Props for the Carousel component
export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  items: CarouselItem[];
}

// The main carousel component with scroll functionality
const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ items, className, ...props }, ref) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = 400;
        current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <div
        ref={scrollContainerRef}
        className={cn("flex space-x-8 overflow-x-auto overflow-y-visible pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth", className)}
        {...props}
      >
        {/* Add invisible spacer at the start */}
        <div className="flex-shrink-0" style={{ width: '400px' }} />

        {items.map((item) => (
          <CarouselCard key={item.id} item={item} />
        ))}

        {/* Add invisible spacer at the end */}
        <div className="flex-shrink-0" style={{ width: '400px' }} />
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

export default Carousel;
