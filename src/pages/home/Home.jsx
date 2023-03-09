import React from 'react'

import Charts from './charts/Charts'
import HeroBanner from './heroBanner/HeroBanner'
import PlayList from './playList/PlayList'
import "./style.scss"
import Trending from "./trending/Trending"
const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <PlayList/>
      <Charts/>
    </div>
  )
}

export default Home