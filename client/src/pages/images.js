import React from 'react'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';

function ImageSlider() {
    const pic= useSelector(state => state.bagReducer.image)

    return (
        <div>

            <Carousel autoplay>
                {pic.map((image,index) => (
                    <div key={index}>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={`/aa/bagPic/${image}`} alt="bagImage" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
} 

export default  ImageSlider