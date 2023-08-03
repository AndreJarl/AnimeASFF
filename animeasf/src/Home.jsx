import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroTopAiring from './components/HeroTopAiring'
import TopAiring from './routes/TopAiring'
import HeroRecent from './components/HeroRecent'
import AnimeEpisode from './components/AnimeEpisode'





function Home() {
  return (
    <div>
    <Navbar/>
    <HeroTopAiring/>
    <HeroRecent/>
    <Footer/>
    </div>
  )
}

export default Home