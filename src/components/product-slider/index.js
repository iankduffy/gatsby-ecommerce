/**
 * To mark a component as client side, you add the "use client" directive.
 * @see {@link https://github.com/reactjs/rfcs/blob/serverconventions-rfc2/text/0000-server-module-conventions.md}
 */
'use client';
import React, { useRef, useState } from 'react';
// import { scrollRightByOne, scrollLeftByOne } from './utilis';

export function ProductSlider({ children }) {
  const slider = useRef(null);
  const [state, setState] = useState(0);

  console.log('Here the slider')

  const getCurrentSlideWidth = (sliderRef) => {
    if (sliderRef.current) {
      const slides = Array.from(sliderRef.current.children);
      return slides.length > 0 ? slides[0].offsetWidth : 500;
    }
  };

  const scrollRightByOne = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += getCurrentSlideWidth(sliderRef);
    }
  };

  const scrollLeftByOne = (sliderRef) => {
    if (sliderRef) {
      sliderRef.current.scrollLeft -= getCurrentSlideWidth(sliderRef);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="flex justify-between ">
        <h3>
          Slider Title{' '}
          <button onClick={() => setState((prev) => prev + 1)}>{state}</button>
        </h3>
        <div className="grid gap-5 grid-cols-2">
          <button
            className="{styles.sliderBtn}"
            onClick={() => scrollLeftByOne(slider)}
          >
            Back Button
          </button>
          <button className="" onClick={() => scrollRightByOne(slider)}>
            Forwards Button
          </button>
        </div>
      </div>
      <div
        ref={slider}
        className="flex w-full overflow-x-auto duration-500 snap-x snap-start scroll-smooth flex-nowrap gap-5"
      >
        {children}
      </div>
    </section>
  );
}
