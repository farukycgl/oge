// SliderSection.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SliderSection = () => {
  const sliderData = [
    {
      bgImage: "/images/slider-hero1.jpg",
      title: "NEW COLLECTION",
      subtitle: "SUMMER 2020",
      description: "We know how large objects will act, but things on a small scale."
    },
    {
      bgImage: "/images/slider-hero2.jpg",
      title: "NEW ARRIVALS",
      subtitle: "WINTER 2020",
      description: "We know how large objects will act, but things on a small scale."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative">
            {/* Mobile tasarım */}
            <div className="md:hidden">
              <div 
                className="h-[calc(100vh-80px)] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                  <span className="text-sm tracking-wider mb-3 text-white">{slide.subtitle}</span>
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <span className="text-sm mb-8 max-w-xs text-white">{slide.description}</span>
                  <button className="bg-green-500 hover:bg-green-600 transition-colors text-white px-10 py-3 rounded-md font-medium">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop tasarım */}
            <div 
              className="hidden md:block w-full relative bg-cover bg-center bg-no-repeat" 
              style={{ 
                height: 'calc(100vh - 80px)',
                backgroundImage: `url(${slide.bgImage})`
              }}
            >
              <div className="absolute inset-0 bg-black/20">
                <div className="container mx-auto h-full flex items-center">
                  <div className="flex flex-col w-1/2 text-white pl-20 gap-4">
                    <span className="text-sm tracking-wider mb-4 text-white">{slide.subtitle}</span>
                    <h2 className="text-6xl font-bold mb-6">{slide.title}</h2>
                    <span className="text-lg mb-8 max-w-md">{slide.description}</span>
                    <button className="w-fit bg-green-500 hover:bg-green-600 transition-colors text-white px-12 py-4 rounded-md text-lg font-medium">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white  p-2 rounded-full"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

export default SliderSection;
