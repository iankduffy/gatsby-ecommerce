import React, { useRef } from 'react'
import { scrollRightByOne, scrollLeftByOne } from './utilis'

export function ProductSlider({children}) {
  const slider = useRef(null)

  return (
    <section className='container mx-auto'>
      <div className="flex justify-between ">
        <h3>Slider Title</h3>
        <div className='grid gap-5 grid-cols-2'>
          <button className='{styles.sliderBtn}' onClick={() => scrollLeftByOne(slider)}>
            Back Button
          </button>
          <button className='' onClick={() => scrollRightByOne(slider)}>
            Forwards Button
          </button>
        </div>
      </div>
      <div ref={slider} className='flex w-full overflow-x-auto duration-500 snap-x snap-start scroll-smooth flex-nowrap gap-5'>
        {children}
      </div>
    </section>
  )
}