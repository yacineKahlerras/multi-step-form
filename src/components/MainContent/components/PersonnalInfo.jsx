import React, { useState } from "react";
import FooterNav from "./FooterNav";

function PersonnalInfo(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, sePphone] = useState();

  const fieldsInfo = [
    {
      label: "Name",
      value: name,
      placeholder: "e.g. Stephen King",
    },
    {
      label: "Email Address",
      value: email,
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      label: "Phone Number",
      value: phone,
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  const formElements = fieldsInfo.map((fieldInfo, index) => {
    return (
      <div key={index} className="grid">
        <label className="font-medium text-sm">{fieldInfo.label}</label>
        <input
          type="text"
          placeholder={fieldInfo.placeholder}
          value={fieldInfo.value}
          className="font-normal text-sm border border-LightGray rounded-md py-2 px-3"
        />
      </div>
    );
  });

  return (
    <div>
      <div className="bg-White drop-shadow-lg rounded-lg p-5 pt-7 w-[90%] m-auto text-MarineBlue relative top-[-5rem]">
        <h1 className="text-xl font-bold mb-2">Personnal Info</h1>
        <p className="text-CoolGray text-sm mb-3">
          Please provide your name, email address, and phone number.
        </p>
        <form className="grid gap-3 justify-start align-middle">
          {formElements}
        </form>
      </div>

      <FooterNav />
    </div>
  );
}

export default PersonnalInfo;
