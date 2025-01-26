import React from 'react'
import "./App.css"
import TopNavbar from './components/top-navbar';
import MiddleNavbar from './components/middle-navbar';
import ButtonNavbar from "./components/bottom-navbar"
import HeroSectionSlider from './components/hero-section-slider';

export default function App() {
  return (
    <div className='space-y-4'>
      <TopNavbar></TopNavbar>
      <MiddleNavbar></MiddleNavbar>
      <ButtonNavbar></ButtonNavbar>
      <hr className='text-gray-200' />
      <HeroSectionSlider></HeroSectionSlider>
    </div >
  )
}
