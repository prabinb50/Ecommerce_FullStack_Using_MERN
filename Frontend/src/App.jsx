import React from 'react'
import "./App.css"
import HeroSectionSlider from './components/hero-section-slider';
import FeaturesCategoriesSection from './components/features-categories-section';
import BannerSection from './components/banner-section';
import PopularProductSection from './components/popular-product-section';
import PromoCategoryCards from './components/promo-category-cards';
import ServiceHighlights from './components/service-highlights';

export default function App() {
  return (
    <div className='space-y-2'>
      <HeroSectionSlider></HeroSectionSlider>
      <FeaturesCategoriesSection></FeaturesCategoriesSection>
      <BannerSection></BannerSection>
      <PopularProductSection></PopularProductSection>
      <PromoCategoryCards></PromoCategoryCards>
      {/* <hr className='w-11/12 mx-auto border-gray-300 mt-10' /> */}
      <ServiceHighlights></ServiceHighlights>
    </div >
  )
}
