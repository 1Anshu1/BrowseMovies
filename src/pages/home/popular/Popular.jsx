import React, { useEffect, useState } from 'react'


import SwitchTab from '../../../components/switchTabs/SwitchTab'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import { useFetch } from '../../../hooks/useFetch'
import Caraousel from '../../../components/caraousel/Caraousel'


const Popular = () => {



    const [endPoint, setEndPoint] = useState('movie')

    const { loading, data } = useFetch(`${endPoint}/popular`)


    const onTabChange = () => {
        (endPoint === 'movie') ? setEndPoint('tv') : setEndPoint('movie')
    }

    return (
        <div className="section">
            <ContentWrapper>
                <div className='caraouselSection'>
                    <span className="caraouselTitle">What's Popular</span>
                    <SwitchTab data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
                </div>
                <Caraousel data={data?.results} loading={loading} endPoint={endPoint} />
            </ContentWrapper>
        </div>
    )
}

export default Popular
