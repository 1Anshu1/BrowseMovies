import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'

import { useFetch } from '../../../hooks/useFetch'
import Genres from '../../../components/genres/Genres'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Img'
import CircleRating from '../../../components/circleRating/CircleRating'


const DetailsBanner = () => {

    let { url } = useSelector((state) => state.home)
    // console.log(url)

    let { mediaType, id } = useParams()
    // console.log(mediaType, id)

    let { data, loading } = useFetch(`/${mediaType}/${id}`)
    console.log(data)

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div>
            <div className="details-banner">
                <Img className='details-bannerImg' src={`${url}/original/${data?.backdrop_path}`} />
            </div>
            <div className="opacity-layer"></div>
            <ContentWrapper>

                <div className="details-bannerSection">
                    <Img src={`${url}/original/${data?.poster_path}`} />

                    <div className="details-right">
                        <div className="details-title">{`${data?.title} (${dayjs(data?.release_date).format('YYYY')})`}</div>
                        <div className="details-tagline">{data?.tagline}</div>
                        {/* <Genres genre={data?.genres} /> */}

                        <div className="details-rating">
                            <CircleRating rating={data?.vote_average.toFixed(1)} />

                        </div>

                        <div className="details-overview">Overview</div>
                        <div className="details-overview-text">{data?.overview}</div>
                        <div className="details-stats">
                            <div className="label1">Status:
                                <span className='details-stat'>{data?.status}</span>
                            </div>
                            <div className="label1">Release Date:
                                <span className='details-stat'>{dayjs(data?.release_date).format('MMM DD, YYYY')}</span>
                            </div>
                            <div className="label1">Runtime:
                                <span className='details-stat'>{toHoursAndMinutes(data?.runtime)}</span>
                            </div>
                        </div>
                        <div className="label">Director:
                            <span className='details-stat'>{data?.title}</span></div>
                        <div className="label">Writer:
                            <span className='details-stat'>{data?.title}</span>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default DetailsBanner
