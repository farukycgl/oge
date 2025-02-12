import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SliderSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (
    <div className='flex justify-center m-20 bg-amber-500'>
    <Slider {...settings}>
        <div className="flex justify-center items-center bg-gray-300" style={{ height: '400px' }}>
            <h3 className='text-red-500'>selam</h3>
        </div>
        <div className="flex justify-center items-center bg-gray-300" style={{ height: '400px' }}>
            <h3>2</h3>
        </div>
        <div className="flex justify-center items-center bg-gray-300" style={{ height: '400px' }}>
            <h3>3</h3>
        </div>
    </Slider>
</div>
  )
}

export default SliderSection;