import React from 'react'
import Home from './Home'
import TopAiring from './routes/TopAiring';
import AnimeInfo from './components/AnimeInfo';
import RecentAnime from './routes/RecentAnime'
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search';
import AnimeVideo from './routes/AnimeVideo';


function App() {
  return (
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topairing" element={<TopAiring />} />
        <Route  path="/animeinfo/:infos" element={<AnimeInfo/>}/>
        <Route  path="/recentanimes" element={<RecentAnime/>}/>
        <Route  path="/search/:animes" element={<Search/>}/>
        <Route  path="/anime-ep/:id" element={<AnimeVideo/>}/>
      </Routes>
    
  )
}

export default App