import DarkThemeContext from "@/utils/contexts/DarkThemeContext";
import React from "react";
import { useContext } from "react";

function FormInputs(props) {
  const { fieldsInfo } = props;
  const { darkTheme } = useContext(DarkThemeContext);

  return fieldsInfo.map((fieldInfo, index) => {
    return (
      <div key={index} className="grid">
        <div className="flex justify-between items-center">
          <label className="font-medium">{fieldInfo.label}</label>
          <small className="text-StrawberryRed text-xs font-medium">
            {fieldInfo.error}
          </small>
        </div>
        <input
          type="text"
          placeholder={fieldInfo.placeholder}
          defaultValue={fieldInfo.value}
          onChange={fieldInfo.onChange}
          className={`font-normal border border-LightGray rounded-md py-2 px-3
          ${darkTheme ? "text-White" : ""}`}
        />
      </div>
    );
  });
}

export default FormInputs;
