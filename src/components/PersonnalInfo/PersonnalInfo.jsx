import React, { useContext, useState } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import validateForm from "./components/validateForm";
import FormInputs from "./components/FormInputs";
import StepContext from "@/utils/contexts/stepContext";
import UserData from "@/utils/contexts/UserData";
import SectionNav from "../FooterNav/SectionNav";
import { useSwiper } from "swiper/react";

function PersonnalInfo() {
  const { setStep } = useContext(StepContext);
  const { userInfo, setUserInfo, NextSlide } = useContext(UserData);

  const [name, setName] = useState({ value: userInfo.name, error: "" });
  const [email, setEmail] = useState({
    value: userInfo.email,
    error: "",
  });
  const [phone, setPhone] = useState({ value: userInfo.phone, error: "" });

  const fieldsInfo = [
    {
      label: "Name",
      onChange: (e) =>
        setName((oldValue) => ({ ...oldValue, value: e.target.value })),
      error: name.error,
      placeholder: "e.g. Stephen King",
      value: name.value,
    },
    {
      label: "Email Address",
      onChange: (e) =>
        setEmail((oldValue) => ({ ...oldValue, value: e.target.value })),
      error: email.error,
      placeholder: "e.g. stephenking@lorem.com",
      value: email.value,
    },
    {
      label: "Phone Number",
      onChange: (e) =>
        setPhone((oldValue) => ({ ...oldValue, value: e.target.value })),
      error: phone.error,
      placeholder: "e.g. +1 234 567 890",
      value: phone.value,
    },
  ];

  function checkInfo() {
    const formValid = validateForm(
      name,
      setName,
      email,
      setEmail,
      phone,
      setPhone
    );
    if (formValid) {
      setStep((oldStep) => oldStep + 1);
      setUserInfo({ name: name.value, email: email.value, phone: phone.value });
    }
  }

  return (
    <div className="sub-card">
      <div className="card-component">
        <h1 className="card-header">Personnal Info</h1>
        <p className="text-CoolGray mb-3">
          Please provide your name, email address, and phone number.
        </p>
        <form className="flex flex-col gap-3">
          <FormInputs fieldsInfo={fieldsInfo} />
        </form>
        <SectionNav checkInfo={checkInfo} />
      </div>

      <FooterNav checkInfo={checkInfo} />
    </div>
  );
}

export default PersonnalInfo;
