import React from "react"

const mainImage = {
  alt: 'main image',
  url: 'photo-1501183638710-841dd1904471',
};

const sideImages = [
  {
    alt: 'side 1 image',
    url: 'photo-1600486913747-55e5470d6f40',
  },
  {
    alt: 'side 2 image',
    url: 'photo-1600486913747-55e5470d6f40',
  },
  {
    alt: 'side 3 image',
    url: 'photo-1600486913747-55e5470d6f40',
  },
  {
    alt: 'side 4 image',
    url: 'photo-1600486913747-55e5470d6f40',
  },
];

const myLoader = (src, width, height, quality) => {
  return `https://images.unsplash.com/${src}?w=${width}&h=${height}&q=${
    quality || 75
  }&auto=format&fit=crop`;
};

export function HeroComp() {
  console.log('Here the hero')
  return (
    <section className="lg:grid grid-cols-3 mb-5">
      <div className="col-span-2 w-full overflow-hidden">
        <img
          src={myLoader(mainImage.url, 1140, 600)}
          className='w-full hover:scale-105 duration-500'
        />
      </div>
      <div className="grid grid-cols-2">
        {sideImages.map((image) => {
          return (
            <div className='overflow-hidden' key={image.alt}>
              <img
                src={myLoader(image.url, 400, 250)}
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}