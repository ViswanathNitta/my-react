import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'

const Prerequisites = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="What to learn before React?" text="To learn React, one must have good knowledge of HTML, CSS, JavaScript. Moreover React is Javascript Library. So it is required to have JavaScript knowledge." />
      <Footer />
    </div>
  )
}

export default Prerequisites