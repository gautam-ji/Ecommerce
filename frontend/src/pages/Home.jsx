import React from 'react'
import Hero from '../components/Hero'
import LatestConnection from '../components/LatestConnection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestConnection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home