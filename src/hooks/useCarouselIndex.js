import { useState } from "react";

const useCarouselIndex = (totalSlides, slidesToShow, slidesToScroll) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const maxSlideIndex = totalSlides - slidesToShow;

  const incrementIndex = () => {
    setSlideIndex(Math.min(slideIndex + slidesToScroll, maxSlideIndex));
  };

  const decrementIndex = () => {
    setSlideIndex(Math.max(0, slideIndex - slidesToScroll));
  };

  const goToIndex = index => {
    setSlideIndex(Math.min(index, maxSlideIndex));
  };

  return { slideIndex, incrementIndex, decrementIndex, goToIndex };
};

export default useCarouselIndex;
