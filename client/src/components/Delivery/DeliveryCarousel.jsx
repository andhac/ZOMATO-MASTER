import React from "react";
import Slider from "react-slick";

// components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DeliveryCarousel() {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/3400685/f7cba4eb53968ea0ffcf3eb85d878b28.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      title: "THAL",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
      title: "Cake",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/06a/af146087e76aed8c0baa90a84a6f206a.jpg",
      title: "Sagu",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-xl mb-4 font-semibold">
        Inspitation for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default DeliveryCarousel;