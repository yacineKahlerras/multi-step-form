import React, { useContext, useState } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import validateForm from "./validateForm";
import FormInputs from "./FormInputs";
import StepContext from "@/utils/contexts/stepContext";

function PersonnalInfo() {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });

  const { setStep } = useContext(StepContext);

  const fieldsInfo = [
    {
      label: "Name",
      onChange: (e) =>
        setName((oldValue) => ({ ...oldValue, value: e.target.value })),
      error: name.error,
      placeholder: "e.g. Stephen King",
    },
    {
      label: "Email Address",
      onChange: (e) =>
        setEmail((oldValue) => ({ ...oldValue, value: e.target.value })),
      error: email.error,
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      label: "Phone Number",
      onChange: (e) =>
        setPhone((oldValue) => ({ ...oldValue, value: e.target.value })),
      error: phone.error,
      placeholder: "e.g. +1 234 567 890",
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
    }
  }

  return (
    <div>
      <div className="bg-White drop-shadow-lg rounded-lg p-5 pt-7 w-[90%] m-auto text-MarineBlue relative top-[-5rem]">
        <h1 className="text-xl font-bold mb-2">Personnal Info</h1>
        <p className="text-CoolGray text-sm mb-3">
          Please provide your name, email address, and phone number.
        </p>
        <form className="flex flex-col gap-3">
          <FormInputs fieldsInfo={fieldsInfo} />
        </form>
      </div>

      <FooterNav checkInfo={checkInfo} />
    </div>
  );
}

export default PersonnalInfo;
