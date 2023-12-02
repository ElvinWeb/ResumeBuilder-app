// regex for validation
const strRegex = /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;

$(document).ready(function () {
  $(".repeater").repeater({
    initEmpty: false,
    defaultValue: {
      "text-input": "",
    },
    show: function () {
      $(this).slideDown();
    },
    hide: function () {
      $(this).slideUp(deleteElement);
      setTimeout(() => {
        generateCV();
      }, 500);
    },
    isFirstItemUndeletable: true,
  });
});

const cvForm = document.getElementById("cv-form");
let firstNameElem = cvForm.firstname,
  lastNameElem = cvForm.lastname,
  middleNameElem = cvForm.middlename,
  imageElem = cvForm.image,
  designationElem = cvForm.designation,
  AddressElem = cvForm.address,
  EmailElem = cvForm.email,
  PhoneElem = cvForm.phoneno,
  SummaryElem = cvForm.summary;

const getUserInputs = () => {
  console.log(
    firstNameElem.value,
    lastNameElem.value,
    middleNameElem.value,
    imageElem.value,
    designationElem.value,
    AddressElem.value,
    PhoneElem.value,
    PhoneElem.value,
    SummaryElem.value
  );
};

const generateCV = () => {
  let userData = getUserInputs();
};
