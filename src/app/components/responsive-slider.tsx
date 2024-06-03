"use client"; // <===== REQUIRED

import "swiper/css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function ResponsiveSlider() {
  let arrayData = [
    { id: 1, name: "Namık Kemal Mezarı ve Anıtı", location: "Bolayır" },
    { id: 2, name: "Gazi Süleyman Paşa Türbesi", location: "Bolayır" },
    { id: 3, name: "Çanakkale Şehitler Anıtı", location: "Çanakkale" },
    { id: 4, name: "Truva Antik Kenti (Troia)", location: "Çanakkale" },
    { id: 5, name: "Çimenlik Kalesi", location: "Çanakkale" },
    { id: 6, name: "Kilitbahir Kalesi", location: "Çanakkale" },
    { id: 7, name: "Aynalı Çarşı", location: "Çanakkale" },
    {
      id: 8,
      name: "Gelibolu Yarımadası Tarihi Milli Parkı",
      location: "Gelibolu",
    },
    { id: 9, name: "Anzak Koyu", location: "Gelibolu" },
    { id: 10, name: "Conk Bayırı", location: "Gelibolu" },
    { id: 11, name: "Seddülbahir Kalesi", location: "Gelibolu" },
  ];

  return (
    <div className="slider-container bg-white flex flex-row justify-center self-center lg:my-16 md:px-16 md:my-12 my-16 py-16">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {arrayData.map((element): React.JSX.Element => {
          return (
            <SwiperSlide key={element.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
                <Image
                  src={`/assets/images/items/${element.id}.png`}
                  width={500}
                  height={500}
                  sizes="100vw"
                  className="w-full h-auto min-h-96 min-w-96"
                  alt={"test"}
                />
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <div className="absolute bottom-0  text-center w-full bg-gradient-to-t from-black/50 from-50%  pt-8 pb-2">
                  <span className="mb-2 ">{element.name}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
