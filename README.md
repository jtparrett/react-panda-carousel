# React Panda Carousel
A naturally fluid and responsive Carousel component for React DOM.

Build with hooks, compatible with React `v16.8` and higher.

```
import Carousel from "react-panda-carousel";

const App = () => (
  <Carousel
    arrows={true}
    dots={false}
    slidesToShow={1}
    slidesToScroll={1}
  >
    <img src={...} />
    <img src={...} />
    <img src={...} />
    <img src={...} />
    <img src={...} />
  </Carousel>
)

```

## Configuration Props
```
  slidesToShow: <number> (default: 1)
  slidesToScroll: <number> (default: 1)
  arrows: <bool> (default: true)
  dots: <bool> (default: false)
  responsive: <array>
```

## Component Override Props
```
  WrapperComponent: <func>
  TrackComponent: <func>
  ItemComponent: <func>
  SliderComponent: <func>
  NextArrowComponent: <func>
  PreviousArrowComponent: <func>
  DotListComponent: <func>
  DotItemComponent: <func>
```

## The Responsive Prop
```
  <Carousel
    dots={true} // default
    responsive={[
      {
        breakpoint: 500,
        options: {
          dots: false
        }
      },{
        breakpoint: 300,
        options: {
          dots: true,
          slidesToScroll: 1
        }
      }
    ]}
  >
    {...}
  </Carousel>
```