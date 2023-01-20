import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";

export const defaultPersonnalInfo = {
  name: "Stephen King",
  email: "stephenking@lorem.com",
  phone: "+1234567890",
};

export const plansInfo = [
  { name: "arcade", priceMonth: 9, icon: arcadeIcon },
  { name: "advanced", priceMonth: 12, icon: advancedIcon },
  { name: "pro", priceMonth: 15, icon: proIcon },
];

export const addOnInfo = [
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
    monthlyPrice: 1,
  },
  {
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    monthlyPrice: 2,
  },
  {
    title: "Customizable Profile",
    subtitle: "Custom theme on your profile",
    monthlyPrice: 2,
  },
];
