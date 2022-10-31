import React from "react"

const menu = [
  {
    url: '/mens', 
    text: 'Mens'
  },
  {
    url: '/womens', 
    text: 'Womens'
  },
  {
    url: '/kids', 
    text: 'Kids'
  },  
  {
    url: '/Home', 
    text: 'Home'
  }
]


export function Header() {
  return (
    <header className='bg-slate-300'>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img src='/icon.png' alt='Store Logo' loading='eager' className='h-20 p-3'/>
        <nav>
          <ul className="flex gap-10">{menu.map((item) => {
          return (
            <li key={item.url}>{item.text}</li>
          )
          })}</ul>
        </nav>
        <div>Ecommerce Nav here</div>
      </div>
    </header>
  )
}