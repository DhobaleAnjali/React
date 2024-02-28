import { useState } from "react";
// import { Link } from "react-router-dom";

const FoodCarousal = (props) => {
  const { foodData } = props;
  console.log(props);
  console.log(foodData);

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 6; // Adjust based on your requirement

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Ensure the carousel moves forward by one and wraps if at the end
      return (prevIndex + 1) % foodData.length;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Move backward by one, wrapping to the end if at the start
      return (prevIndex - 1 + foodData.length) % foodData.length;
    });
  };

  // Display images starting from currentIndex and wrap around the array to show visibleImagesCount images
  const visibleItems = [];
  for (let i = 0; i < visibleImagesCount; i++) {
    const itemIndex = (currentIndex + i) % foodData.length;
    visibleItems.push(foodData[itemIndex]);
  }

  return (
    <div className="relative w-full">
      <div className="flex gap-2 overflow-hidden justify-center">
        {visibleItems.map((data, index) => (
          <img
            key={index}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${
              data.imageId ? data.imageId : data.info.cloudinaryImageId
            }`}
            alt={`Food item ${index + 1}`}
            className={
              data.imageId
                ? "block w-1/6 h-56 object-cover"
                : "block w-40 rounded-full h-40"
            }
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg flex items-center justify-center text-lg font-bold"
        aria-label="Previous"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg flex items-center justify-center text-lg font-bold"
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export const BrandFoodCarousal = (FoodCarousal) => {
  return (props) => {
    return (
      <div>
        <FoodCarousal {...props} />
      </div>
    );
  };
};

export default FoodCarousal;
