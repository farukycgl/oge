// SliderSection.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Kaydırma için < ve > butonları
    prevArrow: <div className="slick-prev">{"<"}</div>,
    nextArrow: <div className="slick-next">{">"}</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true, // Mobilde oklar da gösterilsin
        },
      },
    ],
  };

  return (
    <section className="py-6 px-4">
      <Slider {...settings}>
        {/* 3 adet resim kullanıyoruz */}
        <div>
          <img 
            src="https://picsum.photos/600/400?random=1" 
            alt="Slider Image 1" 
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        <div>
          <img 
            src="https://picsum.photos/600/400?random=2" 
            alt="Slider Image 2" 
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        <div>
          <img 
            src="https://picsum.photos/600/400?random=3" 
            alt="Slider Image 3" 
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
      </Slider>
    </section>
  );
};

export default SliderSection;
