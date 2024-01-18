import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { fetchDataFromApi } from './utils/app.js'
import { getApiConfigurations, getGenres } from './features/homeSlice.js'


import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import SearchResult from './pages/searchResults/SearchResult.jsx'
import Details from './pages/details/Details.jsx'


const App = () => {

  const dispatch = useDispatch()


  async function fetchConfigureApi() {
    try {
      let data = await fetchDataFromApi("configuration")
      dispatch(getApiConfigurations(data.images.secure_base_url))
    } catch (error) {
      console.log(error)
    }
  }


  const fetchGenres = async () => {
    let genresList = {}
    try {
      let movieGenres = await fetchDataFromApi(`genre/movie/list`)
      let tvGenres = await fetchDataFromApi(`genre/tv/list`)

      movieGenres.genres.forEach((item) => {
        genresList[item.id] = item.name
      })

      tvGenres.genres.forEach((item) => {
        genresList[item.id] = item.name
      })

      dispatch(getGenres(genresList))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    fetchConfigureApi()
    fetchGenres()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/:mediaType/:id' element={<Details />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App




