import React from "react"
import { Header } from "../header"

export default function Layout({ children }) {
  return (
    <div className="bg-white text-black">
      <Header/>
      {children}
    </div>
  )
}