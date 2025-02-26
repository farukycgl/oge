import React from 'react'
import Team from '../components/aboutPage/Team'
import AboutUs from '../components/aboutPage/AboutUs'
import Brands from '../components/shopPage/Brands'
import BrandsHeader from '../components/aboutPage/BrandsHeader'
import BottomSection from '../components/aboutPage/BottomSection'

const AboutPage = () => {
  return (
    <div className=''>
      <AboutUs />
      <Team />
      <BrandsHeader />
      <Brands />
      <BottomSection />
    </div>
  )
}

export default AboutPage