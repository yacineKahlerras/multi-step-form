import React from "react";

function Plan(props) {
  return (
    <div>
      <div className="card-component">
        <h1 className="card-header">Personnal Info</h1>
        <p className="text-CoolGray text-sm mb-3">
          Please provide your name, email address, and phone number.
        </p>
        <form className="flex flex-col gap-3">
          {/* <FormInputs fieldsInfo={fieldsInfo} /> */}
        </form>
      </div>

      {/* <FooterNav checkInfo={checkInfo} /> */}
    </div>
  );
}

export default Plan;
