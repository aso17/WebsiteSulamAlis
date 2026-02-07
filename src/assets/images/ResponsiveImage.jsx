// ResponsiveImage.jsx
import React from "react";
const images = import.meta.glob("./OptimizeImage/*.{png,jpg,jpeg,webp}", {
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
  const medium = optimizeImages[`${baseName}-medium`];
  const large = optimizeImages[`${baseName}-large`];
  const small = optimizeImages[`${baseName}-small`];

  if (!large) {
    console.warn(`Image "${baseName}" not found.`);
    return null;
  }

  return (
    <img
      src={large}
      srcSet={`${small} 480w, ${medium} 768w, ${large} 1200w`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
};

export default ResponsiveImage;
