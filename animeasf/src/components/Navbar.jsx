import React , {useState, useEffect} from 'react'
import { FcSearch } from 'react-icons/fc';
import { BsMoonFill } from 'react-icons/BS';
import { FaGithubAlt, FaUserCircle } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import axios from "axios";



function Navbar() {

 const [animes, setAnime] = useState("");


 const Search = () =>{
     setAnime("");
     
 }



  
  return (
    <div className='bg-black fixed w-full lg:flex lg:items-center lg:justify-center text-white lg:h-24'>
       <div className="lg:flex lg:items-center lg:justify-center lg:gap-20 ">   
            
                <div className="lg:flex lg:items-center lg:justify-center lg:gap-10 ">
                <Link to="/"  style={{textDecoration: 'none', color: 'white'}}>
                  <h1 className='lg:text-4xl font-bold '>ANIMEASF</h1></Link>
                    <ul className='lg:flex lg:items-center lg:justify-center lg:gap-4  lg:font-semibold cursor-pointer'>
                      <Link to="/topairing" style={{textDecoration: 'none', color: 'white'}}>
                        <li className='hover:text-gray-500'>Trending</li>
                      </Link>
                      <Link to="/recentanimes" style={{textDecoration: 'none', color: 'white'}}>
                        <li className='hover:text-gray-500'>Recent</li>
                        </Link>
                    </ul>
                </div>

                <div className='lg:flex lg:items-center lg:border lg:border-white lg:h-10 lg:p-3 cursor-pointer lg:rounded-lg bg-black '> 
                    <input className='lg:w-60 lg:h-5 border-0 bg-black' style={{ outline: 'none', color: 'white'}}
                     type="text" placeholder='search anime' value={animes}
                    onChange={(event)=> setAnime(event.target.value)}/>
                    {animes.trim() !== "" ? 
                    ( <Link to = {`/search/${animes}`} onClick={Search} ><h2 className='lg:text-2xl '>
                      <FcSearch /></h2></Link>)
                     : (<h2 className='lg:text-2xl '><FcSearch /></h2>)}
                </div>

                <div className='lg:flex lg:items-center lg:gap-5 lg:text-2xl '>
                    <h2 className='cursor-pointer'><BsMoonFill/></h2> 
                    <h2 className='cursor-pointer'><FaGithubAlt/></h2> 
                    <h2 className='cursor-pointer'><FaUserCircle/></h2> 
                </div>

         </div>

         <div className='mobileSearchContainer' style={{display: 'none'}}> 
                    <input style={{ outline: 'none'}} type="text" placeholder='search anime' value={animes}
                    onChange={(event)=> setAnime(event.target.value)}/>
                    {animes.trim() !== "" ? 
                    ( <Link to = {`/search/${animes}`} onClick={Search} ><h2><FcSearch /></h2></Link>)
                     : (<h2><FcSearch /></h2>)}
                </div>
    </div>
  )
}

export default Navbar;