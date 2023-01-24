import StepContext from "@/utils/contexts/stepContext";
import React, { useContext, useState } from "react";
import PersonnalInfo from "@/components/PersonnalInfo/PersonnalInfo.jsx";
import Plan from "@/components/Plan/Plan";
import UserData from "@/utils/contexts/UserData";
import AddOns from "@/components/AddOns/AddOns";
import { defaultPersonnalInfo } from "@/utils/data/data";
import FinishingUp from "@/components/FinishingUp/FinishingUp";
import ThankYou from "@/components/ThankYou/ThankYou";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
    <div className="max-w-xl md:w-full md:max-w-xl md:flex md:justify-center overflow-hidden">
      <UserData.Provider value={data}>
        <Swiper
          ref={swiperRef}
          allowTouchMove={false}
          initialSlide={0}
          centeredSlides={true}
          spaceBetween={100}
          slidesPerView={1}
          speed={800}
        >
          {Elements()}
        </Swiper>
      </UserData.Provider>
    </div>
  );
}

export default MainContent;
