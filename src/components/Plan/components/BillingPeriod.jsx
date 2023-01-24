import React from "react";
import { useContext } from "react";
import UserData from "@/utils/contexts/UserData";

function BillingPeriod(props) {
  const { billingPlan, setBillingPlan } = useContext(UserData);

  const activeMonthStyle =
    billingPlan.billingPer == "month" ? "" : "text-CoolGray";
  const activeYearStyle =
    billingPlan.billingPer == "year" ? "" : "text-CoolGray";

  function toggleChange(e) {
    setBillingPlan((oldValue) => ({
      ...oldValue,
      billingPer: oldValue.billingPer === "month" ? "year" : "month",
    }));
  }

  return (
    <div className="bg-Magnolia flex justify-center items-center gap-3 py-4 rounded-lg text-sm">
      <span className={`capitalize font-bold ${activeMonthStyle} duration-700`}>
        monthly
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onChange={() => toggleChange()}
          checked={billingPlan.billingPer !== "month"}
          type="checkbox"
          className="sr-only peer"
        />
        <div className="billing-toggle-switch"></div>
      </label>
      <span
        className={`capitalize font-bold ${activeYearStyle} transition-all duration-700`}
      >
        yearly
      </span>
    </div>
  );
}

export default BillingPeriod;
