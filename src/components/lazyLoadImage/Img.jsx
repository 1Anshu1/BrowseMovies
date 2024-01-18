import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            src={src}
            className={className || ''}
            effect='blur'
        />
    )
}

export default Img
