"use client"; // <===== REQUIRED

import "swiper/css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
    <div className="slider-container  flex flex-row justify-center self-center my-16 px-16">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {arrayData.map((element): React.JSX.Element => {
          return (
            <SwiperSlide>
              <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
                <Image
                  src={`/assets/images/items/${element.id}.png`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt={"test"}
                />
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                  <div className="absolute bottom-0  text-center w-full bg-gradient-to-t from-black/50 from-50%  pt-8 pb-2"> 
                  <span className="mb-2 ">
                    {element.name}

                  </span>
                  </div>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
