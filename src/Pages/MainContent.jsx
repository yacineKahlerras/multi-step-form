import StepContext from "@/utils/contexts/stepContext";
import React, { useContext, useState } from "react";
import PersonnalInfo from "@/components/PersonnalInfo/PersonnalInfo.jsx";
import Plan from "@/components/Plan/Plan";
import UserData from "@/utils/contexts/UserData";
import AddOns from "@/components/AddOns/AddOns";
import { defaultPersonnalInfo } from "@/utils/data/data";
import FinishingUp from "@/components/FinishingUp/FinishingUp";
import ThankYou from "@/components/ThankYou/ThankYou";
import moonIcon from "@/assets/images/darkTheme/moon-stars.svg";
import sunIcon from "@/assets/images/darkTheme/sun.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect } from "react";
import { useRef } from "react";

function MainContent() {
  const { step } = useContext(StepContext);
  const [userInfo, setUserInfo] = useState(defaultPersonnalInfo);
  const [billingPlan, setBillingPlan] = useState({
    index: 0,
    billingPer: "month",
  });
  const [addOnIndexes, setAddOnIndexes] = useState(new Set([0, 1]));
  const swiperRef = useRef();

  const data = {
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    billingPlan: billingPlan,
    setBillingPlan: setBillingPlan,
    addOnIndexes: addOnIndexes,
    setAddOnIndexes: setAddOnIndexes,
  };

  const stepPages = [
    <PersonnalInfo />,
    <Plan />,
    <AddOns />,
    <FinishingUp />,
    <ThankYou />,
  ];

  function Elements() {
    return stepPages.map((page, index) => {
      return (
        <SwiperSlide key={index} className="flex justify-center">
          {page}
        </SwiperSlide>
      );
    });
  }

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.slideTo(step);
  }, [step]);

  return (
    <UserData.Provider value={data}>
      <div
        className="w-screen h-full md:h-auto md:max-w-[33rem] md:flex 
        md:justify-center md:overflow-hidden relative"
      >
        <Swiper
          ref={swiperRef}
          allowTouchMove={false}
          initialSlide={0}
          centeredSlides={true}
          spaceBetween={100}
          slidesPerView={1}
          speed={800}
          className="h-full !overflow-visible md:!overflow-hidden"
        >
          {Elements()}
        </Swiper>

        {/* dark mode toggle */}
        <li className="flex gap-2 items-end absolute top-2 right-2">
          <span
            className={`w-10 md:w-7 aspect-square grid content-center 
          text-center rounded-full md:text-xs transition-all`}
          >
            <img src={sunIcon} className="w-7 invert" alt="theme" />
          </span>
        </li>
      </div>
    </UserData.Provider>
  );
}

export default MainContent;
