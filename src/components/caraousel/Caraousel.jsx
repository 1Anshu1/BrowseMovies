import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, } from "react-icons/bs";
import Img from '../lazyLoadImage/Img';
import PosterFallback from "../../assets/no-poster.png";
import './style.scss'

import CircleRating from '../circleRating/CircleRating';
import Genres from '../genres/Genres';

const Caraousel = ({ data, loading, endPoint }) => {

    const { url } = useSelector((state) => state.home)
    const navigate = useNavigate()
    const carouselContainer = useRef();


    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };


    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="caraouselItems">
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill
                className="carouselRighttNav arrow"
                onClick={() => navigation("right")}
            />

            {loading ?

                (<div className="loadingSkeleton caraousel">
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                </div>)

                :

                (
                    <div className="caraousel" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? `${url}original/${item.poster_path}`
                                : PosterFallback;
                            return (
                                <div
                                    key={item.id}
                                    className='card'
                                    onClick={() => navigate(`/${item.media_type || endPoint}/${item.id}`)}
                                >
                                    <div className="card-poster">
                                        <Img src={posterUrl} />
                                        <CircleRating rating={item.vote_average.toFixed(1)} />

                                        <Genres genre={item.genre_ids} />
                                    </div>
                                    <div className="card-details">
                                        <div className='card-movie-title'>{item.title || item.name}</div>
                                        <div className="card-movie-date">{dayjs(item.release_date || item.first_air_date).format('MMM DD, YYYY')}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default Caraousel
