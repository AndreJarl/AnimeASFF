import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroTopAiring from './components/HeroTopAiring'
import TopAiring from './routes/TopAiring'
import HeroRecent from './components/HeroRecent'
import AnimeEpisode from './components/AnimeEpisode'
import Hero from './components/Hero'





function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <HeroTopAiring/>
    <HeroRecent/>
    <Footer/>
    </div>
  )
}

export default Home