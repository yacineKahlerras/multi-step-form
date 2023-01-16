import React, { useState } from "react";

function PersonnalInfo(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, sePphone] = useState();

  const fieldsInfo = [
    {
      label: "Name",
    },
  ];

  return (
    <div className="bg-White drop-shadow-lg rounded-2xl p-5 pt-7 w-[90%] m-auto text-MarineBlue">
      <h1 className="text-2xl font-bold ">Personnal Info</h1>
      <p className="text-CoolGray">
        Please provide your name, email address, and phone number.
      </p>
      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" placeholder=" e.g. stephenking@lorem.com" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>

        <button type="button">Next Step</button>
      </form>
    </div>
  );
}

export default PersonnalInfo;
