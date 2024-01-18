import React from 'react'
import './style.scss'
import { useSelector } from 'react-redux'




const Genres = ({ genre }) => {


    console.log(genre)
    const genreList = useSelector((state) => state.home.genres)

    // console.log(genreList)

    if (genre.length === 1) {
        return (
            <div className="genres">
                <div className="genre">{genreList[genre[0]]}</div>
            </div>
        )
    } else {
        return (
            <div className='genres'>
                <div className="genre">{genreList[genre[0]]}</div>
                <div className="genre">{genreList[genre[1]]}</div>
            </div>
        )
    }
}

export default Genres


