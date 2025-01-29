import React from 'react'
import "./App.css"
import TopNavbar from './components/top-navbar';
import MiddleNavbar from './components/middle-navbar';
import ButtonNavbar from "./components/bottom-navbar"
import HeroSectionSlider from './components/hero-section-slider';
import FeaturesCategoriesSection from './components/features-categories-section';
import BannerSection from './components/banner-section';
import PopulaeProductSection from './components/popular-product-section';
import AssignmenttOne from './components/assignment-1';
import AssignmentTwo from './components/assignment-2';

export default function App() {
  return (
    <div className='space-y-4'>
      <TopNavbar></TopNavbar>
      <MiddleNavbar></MiddleNavbar>
      <ButtonNavbar></ButtonNavbar>
      <hr className='text-gray-200' />
      <HeroSectionSlider></HeroSectionSlider>
      <FeaturesCategoriesSection></FeaturesCategoriesSection>
      <BannerSection></BannerSection>
      <PopulaeProductSection></PopulaeProductSection>


      {/* <AssignmentTwo></AssignmentTwo>
      <AssignmenttOne></AssignmenttOne> */}
    </div >
  )
}
