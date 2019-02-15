import React from "react";
import PropTypes from "prop-types";

// Hooks
import useResponsiveOptions from "./hooks/useResponsiveOptions";
import useCarouselIndex from "./hooks/useCarouselIndex";

// Components
import WrapperComponent from "./components/Wrapper";
import TrackComponent from "./components/Track";
import SliderComponent from "./components/Slider";
import ItemComponent from "./components/Item";
import NextArrowComponent from "./components/NextArrow";
import PreviousArrowComponent from "./components/PreviousArrow";
import DotListComponent from "./components/DotList";
import DotItemComponent from "./components/DotItem";

// Render
const Carousel = ({
  children,
  responsive,
  WrapperComponent,
  TrackComponent,
  SliderComponent,
  ItemComponent,
  NextArrowComponent,
  PreviousArrowComponent,
  DotListComponent,
  DotItemComponent,
  ...defaultOptions
}) => {
  const childrenAsArray = React.Children.toArray(children);
  const { slidesToScroll, slidesToShow, arrows, dots } = useResponsiveOptions(
    defaultOptions,
    responsive
  );
  const {
    incrementIndex,
    decrementIndex,
    slideIndex,
    goToIndex
  } = useCarouselIndex(childrenAsArray.length, slidesToShow, slidesToScroll);
  const slideWidth = 100 / slidesToShow + "%";
  const transform = slideIndex * 100;

  return (
    <WrapperComponent>
      <TrackComponent>
        <SliderComponent
          width={slideWidth}
          transform={`translate3d(-${transform}%, 0, 0)`}
        >
          {childrenAsArray.map((child, i) => (
            <ItemComponent key={i}>{child}</ItemComponent>
          ))}
        </SliderComponent>
      </TrackComponent>

      {arrows && (
        <>
          <PreviousArrowComponent slideToPrevious={decrementIndex} />
          <NextArrowComponent slideToNext={incrementIndex} />
        </>
      )}

      {dots && (
        <DotListComponent>
          {childrenAsArray.map((_, i) => (
            <DotItemComponent
              key={i}
              value={i + 1}
              slideToIndex={() => goToIndex(i)}
            />
          ))}
        </DotListComponent>
      )}
    </WrapperComponent>
  );
};

Carousel.defaultProps = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  WrapperComponent,
  TrackComponent,
  ItemComponent,
  SliderComponent,
  NextArrowComponent,
  PreviousArrowComponent,
  DotListComponent,
  DotItemComponent
};

Carousel.propTypes = {
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  arrows: PropTypes.bool,
  dots: PropTypes.bool,
  WrapperComponent: PropTypes.func,
  TrackComponent: PropTypes.func,
  ItemComponent: PropTypes.func,
  SliderComponent: PropTypes.func,
  NextArrowComponent: PropTypes.func,
  PreviousArrowComponent: PropTypes.func,
  DotListComponent: PropTypes.func,
  DotItemComponent: PropTypes.func
};

export default Carousel;
