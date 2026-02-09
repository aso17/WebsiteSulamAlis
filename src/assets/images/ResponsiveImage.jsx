// ResponsiveImage.jsx
import React from "react";

// PERBAIKAN: Gunakan '**' agar glob mencari ke semua sub-folder di dalam OptimizeImage
const images = import.meta.glob("./OptimizeImage/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const optimizeImages = {};
Object.keys(images).forEach((path) => {
  const fileName = path.split("/").pop();
  const cleanName = fileName.replace(/\.[^/.]+$/, "");
  optimizeImages[cleanName] = images[path];
});

const ResponsiveImage = ({
  baseName,
  alt = "Image",
  width,
  height,
  className = "",
  priority = false,
}) => {
  const small = optimizeImages[`${baseName}-small`];
  const medium = optimizeImages[`${baseName}-medium`];
  const large = optimizeImages[`${baseName}-large`];
  const fallback = optimizeImages[baseName];

  if (!large && !fallback) {
    console.warn(
      `Image "${baseName}" not found in OptimizeImage or its subfolders.`,
    );
    return null;
  }

  return (
    <img
      src={medium || large || fallback}
      srcSet={
        large
          ? `
        ${small} 480w,
        ${medium} 768w,
        ${large} 1280w
      `
          : undefined
      }
      sizes="
        (max-width: 640px) 100vw,
        (max-width: 1024px) 100vw,
        100vw
      "
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"}
      className={className}
    />
  );
};

export default ResponsiveImage;
