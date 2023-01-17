import React, { useState } from "react";
import FooterNav from "./FooterNav";

function PersonnalInfo(props) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });

  const fieldEmptyErrorMsg = "This Field is Required";
  const wrongFormatErrorMsg = "Wrong Format";

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

  const formElements = fieldsInfo.map((fieldInfo, index) => {
    return (
      <div key={index} className="grid">
        <div className="flex justify-between items-center">
          <label className="font-medium text-sm">{fieldInfo.label}</label>
          <small className="text-StrawberryRed text-xs font-medium">
            {fieldInfo.error}
          </small>
        </div>
        <input
          type="text"
          placeholder={fieldInfo.placeholder}
          onChange={fieldInfo.onChange}
          className=" font-normal text-sm border border-LightGray rounded-md py-2 px-3"
        />
      </div>
    );
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
  };

  function checkInfo() {
    //name
    if (!name.value) {
      setName((oldName) => ({ ...oldName, error: fieldEmptyErrorMsg }));
    } else {
      setName((oldName) => ({ ...oldName, error: "" }));
    }

    // email
    if (!email.value) {
      setEmail((oldName) => ({ ...oldName, error: fieldEmptyErrorMsg }));
    } else if (!validateEmail(email.value)) {
      setEmail((oldValue) => ({ ...oldValue, error: wrongFormatErrorMsg }));
    } else {
      setEmail((oldName) => ({ ...oldName, error: "" }));
    }

    //phone
    if (!phone.value) {
      setPhone((oldValue) => ({ ...oldValue, error: fieldEmptyErrorMsg }));
    } else if (!validatePhone(phone.value)) {
      setPhone((oldValue) => ({ ...oldValue, error: wrongFormatErrorMsg }));
    } else {
      setPhone((oldName) => ({ ...oldName, error: "" }));
    }
  }

  return (
    <div>
      <div className="bg-White drop-shadow-lg rounded-lg p-5 pt-7 w-[90%] m-auto text-MarineBlue relative top-[-5rem]">
        <h1 className="text-xl font-bold mb-2">Personnal Info</h1>
        <p className="text-CoolGray text-sm mb-3">
          Please provide your name, email address, and phone number.
        </p>
        <form className="flex flex-col gap-3">{formElements}</form>
      </div>

      <FooterNav checkInfo={checkInfo} />
    </div>
  );
}

export default PersonnalInfo;
