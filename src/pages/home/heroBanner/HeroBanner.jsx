import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.scss'

import { useFetch } from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'



const HeroBanner = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [background, setBackground] = useState('')

    const { data, loading } = useFetch("/movie/upcoming")

    const { url } = useSelector((state) => state.home)

    const searchQueryHandler = (e) => {
        if (e.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`)

        }
        if (e.type === 'click' && query.length > 0) {
            navigate(`/search/${query}`)

        }


    }

    useEffect(() => {
        let bg = url + 'original' + data?.results[Math.floor(Math.random() * 20)].backdrop_path

        setBackground(bg)

    }, [data])

    return (
        <div className='heroBanner'>
            {!loading && <Img src={background} />}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="wrapper">
                    <span className='title1'>Welcome.</span>

                    <span className='title2'>Millions of movies, TV shows and people to discover. Explore Now.</span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder='Search for a movie or tv show....' onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button onClick={searchQueryHandler}>Search</button>
                    </div>

                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner
