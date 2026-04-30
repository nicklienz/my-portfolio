export function ImageGallery() {
  const images = [
    { src: "/images/portrait.jpeg", alt: "me" }
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="group relative overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800 aspect-square"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-[150px] w-[100px] object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}