import React from "react";
import useCarouselIndex from "hooks/useCarouselIndex";
import { mount } from "enzyme";

const TestComponent = ({totalSlides, slidesToShow, slidesToScroll}) => {
  const {
    incrementIndex,
    decrementIndex,
    slideIndex,
    goToIndex
  } = useCarouselIndex(totalSlides, slidesToShow, slidesToScroll);
  return (
    <>
      <button id="increment" onClick={incrementIndex}></button>
      <button id="decrement" onClick={decrementIndex}></button>
      <button id="gotoslide" onClick={() => goToIndex(4)}></button>
      <span id="output">{slideIndex}</span>
    </>
  );
}

describe('Carousel Index Hook', () => {

  const wrapper = mount(<TestComponent totalSlides={10} slidesToShow={2} slidesToScroll={2} />)
  const output = wrapper.find('#output');
  const increment = wrapper.find('#increment');
  const decrement = wrapper.find('#decrement');
  const gotoslide = wrapper.find('#gotoslide');

  it('increments the slide', () => {
    expect(output.text()).toBe('0');
    increment.simulate('click');
    expect(output.text()).toBe('2');
  });

  it('decrements the slide', () => {
    expect(output.text()).toBe('2');
    decrement.simulate('click');
    expect(output.text()).toBe('0');
  });

  it('goes to the slide', () => {
    expect(output.text()).toBe('0');
    gotoslide.simulate('click');
    expect(output.text()).toBe('4');
  });

});
