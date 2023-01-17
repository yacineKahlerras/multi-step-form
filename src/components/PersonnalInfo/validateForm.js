const fieldEmptyErrorMsg = "This Field is Required";
const wrongFormatErrorMsg = "Wrong Format";

function validateForm(name, setName, email, setEmail, phone, setPhone) {
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

export default validateForm;
