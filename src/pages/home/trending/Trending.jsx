import React, { useEffect, useState } from 'react'

import SwitchTab from '../../../components/switchTabs/SwitchTab'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import { useFetch } from '../../../hooks/useFetch'
import Caraousel from '../../../components/caraousel/Caraousel'


const Trending = () => {



    const [endPoint, setEndPoint] = useState('day')

    const { loading, data } = useFetch(`trending/all/${endPoint}`)


    const onTabChange = () => {
        (endPoint === 'day') ? setEndPoint('week') : setEndPoint('day')
    }

    return (
        <div className="section">
            <ContentWrapper>
                <div className='caraouselSection'>
                    <span className="caraouselTitle">Trending</span>
                    <SwitchTab data={['Day', 'Week']} onTabChange={onTabChange} />
                </div>
                <Caraousel data={data?.results} loading={loading} endPoint={endPoint} />
            </ContentWrapper>
        </div>
    )
}

export default Trending
