"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { preloadImages } from "../utils/imageOptimization";

const categories = ["All", "Workshop", "Seminar", "Event"];

// Skeleton loading component
const ImageSkeleton = ({ aspectRatio }: { aspectRatio: string }) => (
  <div className={`${aspectRatio} w-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 text-gray-600">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        </svg>
      </div>
    </div>
  </div>
);

// Optimized image component with intersection observer
const OptimizedImage = ({ image, index }: { image: any; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading with better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '100px', // Load images earlier for smoother experience
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div ref={imgRef} className="relative overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800 group mb-4 break-inside-avoid">
      <div className={`${image.aspectRatio || "aspect-square"} w-full`}>
        {/* Show skeleton while loading */}
        {!isLoaded && !hasError && (
          <ImageSkeleton aspectRatio={image.aspectRatio || "aspect-square"} />
        )}

        {/* Show actual image when in view */}
        {isInView && !hasError && (
          <img
            src={image.url}
            alt={image.alt}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-105`}
            style={{ display: isLoaded ? 'block' : 'none' }}
          />
        )}

        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20 dark:from-gray-800 dark:to-gray-900">
            <div className="relative">
              <svg 
                className="w-8 h-8 text-gray-400 dark:text-gray-500" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-3 bg-yellow-400 rounded-sm opacity-80">
                <svg 
                  className="w-3 h-2 text-yellow-600 ml-0.5 mt-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Featured item content for specific items */}
        {index === 5 && isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-semibold text-sm mb-1">Tech Talk</h3>
              <p className="text-gray-300 text-xs line-clamp-2">
                Glimpses from previous editions
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Hover overlay */}
      {isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
          <p className="text-sm font-medium text-white line-clamp-1">
            {image.alt || image.category}
          </p>
        </div>
      )}
    </div>
  );
};

const galleryImagesData = [
  // Workshop - Using smaller JPEG files first for faster loading
  { url: "/assets/Memories/111.jpeg", aspectRatio: "aspect-square", category: "Workshop", alt: "Team Collaboration", priority: true },
  { url: "/assets/Memories/112.jpeg", aspectRatio: "aspect-video", category: "Workshop", alt: "Presentation Session", priority: true },
  { url: "/assets/Memories/113.jpeg", aspectRatio: "aspect-[3/2]", category: "Workshop", alt: "Interactive Workshop", priority: true },
  { url: "/assets/Memories/114.jpeg", aspectRatio: "aspect-square", category: "Workshop", alt: "Hands-on Training" },
  { url: "/assets/Memories/1.JPG", aspectRatio: "aspect-video", category: "Workshop", alt: "Group Discussion" },
  // Seminar
  { url: "/assets/Memories/2.JPG", aspectRatio: "aspect-[2/2]", category: "Seminar", alt: "Guest Speaker" },
  { url: "/assets/Memories/3.JPG", aspectRatio: "aspect-[2/2.4]", category: "Seminar", alt: "Audience View" },
  { url: "/assets/Memories/4.JPG", aspectRatio: "aspect-[4/5]", category: "Seminar", alt: "Panel Discussion" },
  { url: "/assets/Memories/5.JPG", aspectRatio: "aspect-[2/3]", category: "Seminar", alt: "Keynote Address" },
  // Event
  { url: "/assets/Memories/6.JPG", aspectRatio: "aspect-square", category: "Event", alt: "Networking" },
  { url: "/assets/Memories/7.JPG", aspectRatio: "aspect-[3/4]", category: "Event", alt: "Product Launch" },
  { url: "/assets/Memories/8.JPG", aspectRatio: "aspect-[2/2]", category: "Event", alt: "Award Ceremony" },
  { url: "/assets/Memories/9.JPG", aspectRatio: "aspect-square", category: "Event", alt: "Celebration" },
  { url: "/assets/Memories/10.JPG", aspectRatio: "aspect-video", category: "Event", alt: "Concert" },
  { url: "/assets/Memories/1.JPG", aspectRatio: "aspect-[2/3]", category: "Event", alt: "Staff Party" },
  { url: "/assets/Memories/2.JPG", aspectRatio: "aspect-square", category: "Event", alt: "Team Photo" },
  { url: "/assets/Memories/3.JPG", aspectRatio: "aspect-[2/2]", category: "Event", alt: "Exhibition" },
  { url: "/assets/Memories/4.JPG", aspectRatio: "aspect-square", category: "Event", alt: "Meeting" },
  { url: "/assets/Memories/5.JPG", aspectRatio: "aspect-[5/4]", category: "Event", alt: "Reception" },
  { url: "/assets/Memories/6.JPG", aspectRatio: "aspect-square", category: "Event", alt: "Outdoor Event" },
  { url: "/assets/Memories/7.JPG", aspectRatio: "aspect-video", category: "Event", alt: "Fireworks" },
  { url: "/assets/Memories/8.JPG", aspectRatio: "aspect-square", category: "Event", alt: "Dinner" },
  { url: "/assets/Memories/9.JPG", aspectRatio: "aspect-[3/4]", category: "Event", alt: "Welcome" },
  { url: "/assets/Memories/10.JPG", aspectRatio: "aspect-[3/4]", category: "Event", alt: "Welcome" },
];

// Button component with dark mode support
const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full 
      ${
        active
          ? "text-white bg-indigo-600 shadow-lg"
          : "text-gray-700 bg-gray-100 hover:bg-indigo-50 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      }`}
  >
    {children}
    {active && (
      <motion.div
        layoutId="underline"
        className="absolute inset-0 rounded-full bg-indigo-600 -z-10"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    )}
  </button>
);

export default function EventGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isPreloading, setIsPreloading] = useState(true);

  const filteredImages = useMemo(
    () =>
      activeFilter === "All"
        ? galleryImagesData
        : galleryImagesData.filter((img) => img.category === activeFilter),
    [activeFilter]
  );

  // Preload critical images on component mount
  useEffect(() => {
    const preloadCriticalImages = async () => {
      try {
        // Preload priority images first (smaller JPEG files)
        const priorityImages = galleryImagesData
          .filter(img => img.priority)
          .map(img => img.url);
        
        // Then preload first few regular images
        const regularImages = galleryImagesData
          .filter(img => !img.priority)
          .slice(0, 3)
          .map(img => img.url);
        
        const allCriticalImages = [...priorityImages, ...regularImages];
        await preloadImages(allCriticalImages);
      } catch (error) {
        console.warn('Failed to preload some images:', error);
      } finally {
        setIsPreloading(false);
      }
    };

    preloadCriticalImages();
  }, []);

  return (
    <section className="py-16 bg-black text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="text-white">Event </span>
            <span className="bg-gradient-to-r from-purple-500 to-teal-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Glimpses from previous editions
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>

        {/* Loading Indicator */}
        {isPreloading && (
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              <span>Loading gallery...</span>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {!isPreloading && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredImages.length > 0 ? (
                filteredImages.map((image, index) => (
                  <motion.div
                    key={image.url}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="flex"
                  >
                    <OptimizedImage image={image} index={index} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400 text-lg">
                  No images found for the "{activeFilter}" category.
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
