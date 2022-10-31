export const scrollRightByOne = (sliderRef) => {
  if (sliderRef.current) {
    sliderRef.current.scrollLeft += getCurrentSlideWidth(sliderRef)
  }
}

export const scrollLeftByOne = (sliderRef) => {
  if (sliderRef) {
    sliderRef.current.scrollLeft -= getCurrentSlideWidth(sliderRef)
  }
}

export const getCurrentSlideWidth = (sliderRef) => {
  if (sliderRef.current) {
    const slides = Array.from(sliderRef.current.children)
    return slides.length > 0 ? slides[0].offsetWidth : 500
  }
}