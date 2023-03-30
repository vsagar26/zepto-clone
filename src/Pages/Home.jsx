import React from 'react'
import { ExploreByCategories, Hero, ExploreNewCategories, HowItWorks } from '../components'
import Loading from '../components/LoadingComponent/ProductLoading'


function Home() {

  return (
    <>
        <Hero/>
        <ExploreByCategories/>
        <ExploreNewCategories/>
        <HowItWorks/>
        <Loading/>
    </>
  )
}

export default Home