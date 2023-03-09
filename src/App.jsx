import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Details from './pages/trendingDetails/Details'
import PlaylistDetail from "./pages/playlistDetails/Details"
import ChartsDetail from "./pages/chartsDetails/Details"
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'


const App = () => {
  const { url } = useSelector((state) => state.home)

  const dispatch = useDispatch()

  useEffect(() => {
    apiTesting()
  }, [])

  const apiTesting = () => {
    fetchDataFromApi('/modules?language=hindi,english').then((response) => {
      dispatch(getApiConfiguration(response))
    })
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trending/:id" element={<Details />} />
        <Route path="playlist/:id" element={<PlaylistDetail/>} />
        <Route path="charts/:id" element={<ChartsDetail/>} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
