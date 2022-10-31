import React from "react"

export function ProductCard() {
  return (
    <div className="w-72 flex-none">
      <img src='https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' className="w-full"/>
      <h3 className="text-xl font-bold mt-3">Product Title</h3>
      <p>Lorem Ipsum</p>
    </div> 
  )
}