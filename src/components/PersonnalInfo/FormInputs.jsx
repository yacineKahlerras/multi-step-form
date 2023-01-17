import React from "react";

function FormInputs(props) {
  const { fieldsInfo } = props;

  return fieldsInfo.map((fieldInfo, index) => {
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
}

export default FormInputs;
