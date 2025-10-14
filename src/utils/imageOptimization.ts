// Image optimization utilities
export const getOptimizedImageUrl = (originalUrl: string, quality: 'low' | 'medium' | 'high' = 'medium'): string => {
  // For now, return the original URL
  // In production, you would use a service like Cloudinary, ImageKit, or Next.js Image Optimization
  return originalUrl;
};

// Performance monitoring
export const measureImageLoadTime = (src: string): Promise<number> => {
  const startTime = performance.now();
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Image ${src} loaded in ${loadTime.toFixed(2)}ms`);
      resolve(loadTime);
    };
    img.onerror = reject;
    img.src = src;
  });
};

export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = url;
  });
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch preload images
export const preloadImages = async (urls: string[]): Promise<void> => {
  const promises = urls.slice(0, 6).map(url => preloadImage(url)); // Only preload first 6 images
  await Promise.allSettled(promises);
};
