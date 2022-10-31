import * as React from "react"
import Layout from '../components/layout'
import { HeroComp } from '../components/hero'
import { TextSection } from "../components/textSection"
import { ProductSlider } from "../components/product-slider"
import { ProductCard } from "../components/product-card"

const IndexPage = () => {
  return (
    <Layout>
      <HeroComp />
      <TextSection />
      <ProductSlider>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </ProductSlider>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
