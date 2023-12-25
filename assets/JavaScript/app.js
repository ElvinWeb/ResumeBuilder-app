// regex for validation
const strRegex = /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;
let navbar = document.querySelector(".navbar");

//form reader
$(document).ready(function () {
  $(".repeater").repeater({
    initEmpty: false,
    defaultValue: {
      "text-input": "",
    },
    show: function () {
      $(this).slideDown();
    },
    hide: function (deleteElement) {
      $(this).slideUp(deleteElement);
      setTimeout(() => {
        generateCV();
      }, 500);
    },
    isFirstItemUndeletable: true,
  });
});
window.addEventListener("scroll", function () {
  navbar.classList[window.scrollY > 50 ? "add" : "remove"]("sticky");
});

const cvForm = document.getElementById("cv-form");
const validType = {
  TEXT: "text",
  TEXT_EMP: "text_emp",
  EMAIL: "email",
  DIGIT: "digit",
  PHONENO: "phoneno",
  ANY: "any",
};
let firstNameElem = cvForm.firstname,
  lastNameElem = cvForm.lastname,
  middleNameElem = cvForm.middlename,
  imageElem = cvForm.image,
  designationElem = cvForm.designation,
  addressElem = cvForm.address,
  emailElem = cvForm.email,
  phoneElem = cvForm.phoneno,
  summaryElem = cvForm.summary;

let nameDsp = document.getElementById("fullname_dsp"),
  imageDsp = document.getElementById("image_dsp"),
  phonenoDsp = document.getElementById("phoneno_dsp"),
  emailDsp = document.getElementById("email_dsp"),
  addressDsp = document.getElementById("address_dsp"),
  designationDsp = document.getElementById("designation_dsp"),
  summaryDsp = document.getElementById("summary_dsp"),
  projectsDsp = document.getElementById("projects_dsp"),
  achievementsDsp = document.getElementById("achievements_dsp"),
  skillsDsp = document.getElementById("skills_dsp"),
  educationsDsp = document.getElementById("educations_dsp"),
  experiencesDsp = document.getElementById("experiences_dsp"),
  languagesDsp = document.getElementById("languages_dsp");

const fetchValues = (attrs, ...nodeLists) => {
  let elemsAttrsCount = nodeLists.length;
  let elemsDataCount = nodeLists[0].length;
  let tempDataArr = [];
  console.log(elemsAttrsCount, elemsDataCount);
  for (let i = 0; i < elemsDataCount; i++) {
    let dataObj = {};
    for (let j = 0; j < elemsAttrsCount; j++) {
      dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
    }
    tempDataArr.push(dataObj);
  }
  return tempDataArr;
};

const getUserInputs = () => {
  let achievementsTitleElem = document.querySelectorAll(".achieve_title"),
    achievementsDescriptionElem = document.querySelectorAll(
      ".achieve_description"
    );

  let expTitleElem = document.querySelectorAll(".exp_title"),
    expOrganizationElem = document.querySelectorAll(".exp_organization"),
    expLocationElem = document.querySelectorAll(".exp_location"),
    expStartDateElem = document.querySelectorAll(".exp_start_date"),
    expEndDateElem = document.querySelectorAll(".exp_end_date"),
    expDescriptionElem = document.querySelectorAll(".exp_description");

  let eduSchoolElem = document.querySelectorAll(".edu_school"),
    eduDegreeElem = document.querySelectorAll(".edu_degree"),
    eduCityElem = document.querySelectorAll(".edu_city"),
    eduStartDateElem = document.querySelectorAll(".edu_start_date"),
    eduGraduationDateElem = document.querySelectorAll(".edu_graduation_date"),
    eduDescriptionElem = document.querySelectorAll(".edu_description");

  let projTitleElem = document.querySelectorAll(".proj_title"),
    projLinkElem = document.querySelectorAll(".proj_link"),
    projDescriptionElem = document.querySelectorAll(".proj_description");

  let skillElem = document.querySelectorAll(".skill");
  let languageElem = document.querySelectorAll(".language");

  firstNameElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.TEXT, "First Name")
  );
  lastNameElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.TEXT, "Last Name")
  );
  middleNameElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.TEXT_EMP, "Middle Name")
  );
  phoneElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.PHONENO, "Phone Number")
  );
  emailElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.EMAIL, "Email")
  );
  addressElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.ANY, "Address")
  );
  designationElem.addEventListener("keyup", (e) =>
    validateFormData(e.target, validType.TEXT, "Designation")
  );

  achievementsTitleElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Title")
    )
  );
  achievementsDescriptionElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Description")
    )
  );
  expTitleElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Title")
    )
  );
  expOrganizationElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Organization")
    )
  );
  expLocationElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Location")
    )
  );
  expStartDateElem.forEach((input) =>
    input.addEventListener("blur", (e) =>
      validateFormData(e.target, validType.ANY, "Start Date")
    )
  );
  expEndDateElem.forEach((input) =>
    input.addEventListener("blur", (e) =>
      validateFormData(e.target, validType.ANY, "End Date")
    )
  );
  expDescriptionElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "Description")
    )
  );
  eduSchoolElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.ANY, "School")
    )
  );
  eduCityElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.TEXT, "City")
    )
  );
  eduStartDateElem.forEach((input) =>
    input.addEventListener("blur", (e) =>
      validateFormData(e.target, validType.ANY, "Start Date")
    )
  );
  eduGraduationDateElem.forEach((input) =>
    input.addEventListener("blur", (e) =>
      validateFormData(e.target, validType.ANY, "Graduation Date")
    )
  );
  eduDescriptionElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.TEXT, "Discription")
    )
  );

  projTitleElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.TEXT, "Title")
    )
  );
  projLinkElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.TEXT, "Link")
    )
  );
  projDescriptionElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.TEXT, "Description")
    )
  );
  skillElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.TEXT, "skill")
    )
  );
  languageElem.forEach((input) =>
    input.addEventListener("keyup", (e) =>
      validateFormData(e.target, validType.TEXT, "language")
    )
  );

  return {
    firstname: firstNameElem.value,
    lastname: lastNameElem.value,
    middlename: middleNameElem.value,
    designation: designationElem.value,
    address: addressElem.value,
    email: emailElem.value,
    phoneno: phoneElem.value,
    summary: summaryElem.value,
    achievements: fetchValues(
      ["achieve_title", "achieve_description"],
      achievementsTitleElem,
      achievementsDescriptionElem
    ),
    experiences: fetchValues(
      [
        "exp_title",
        "exp_organization",
        "exp_location",
        "exp_start_date",
        "exp_end_date",
        "exp_description",
      ],
      expTitleElem,
      expOrganizationElem,
      expLocationElem,
      expStartDateElem,
      expEndDateElem,
      expDescriptionElem
    ),
    educations: fetchValues(
      [
        "edu_school",
        "edu_degree",
        "edu_city",
        "edu_start_date",
        "edu_graduation_date",
        "edu_description",
      ],
      eduSchoolElem,
      eduDegreeElem,
      eduCityElem,
      eduStartDateElem,
      eduGraduationDateElem,
      eduDescriptionElem
    ),
    projects: fetchValues(
      ["proj_title", "proj_link", "proj_description"],
      projTitleElem,
      projLinkElem,
      projDescriptionElem
    ),
    skills: fetchValues(["skill"], skillElem),
    languages: fetchValues(["language"], languageElem),
  };
};
const validateFormData = (elem, elemType, elemName) => {
  if (elemType == validType.TEXT) {
    if (!strRegex.test(elem.value) || elem.value.trim().length == 0) {
      addErrMsg(elem, elemName);
    } else {
      removeErrMsg(elem, elemName);
    }
  }

  if (elemType == validType.TEXT_EMP) {
    if (!strRegex.test(elem.value) || elem.value.trim().length == 0) {
      addErrMsg(elem, elemName);
    } else {
      removeErrMsg(elem, elemName);
    }
  }

  if (elemType == validType.EMAIL) {
    if (!emailRegex.test(elem.value) || elem.value.trim().length == 0) {
      addErrMsg(elem, elemName);
    } else {
      removeErrMsg(elem, elemName);
    }
  }

  if (elemType == validType.PHONENO) {
    if (!digitRegex.test(elem.value) || elem.value.trim().length == 0) {
      addErrMsg(elem, elemName);
    } else {
      removeErrMsg(elem, elemName);
    }
  }

  if (elemType == validType.ANY) {
    if (elem.value.trim().length == 0) {
      addErrMsg(elem, elemName);
    } else {
      removeErrMsg(elem, elemName);
    }
  }
};

function addErrMsg(formElem, formElemName) {
  formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}
function removeErrMsg(formElem) {
  formElem.nextElementSibling.innerHTML = "";
}

const showListData = (listData, listContainer) => {
  listContainer.innerHTML = "";
  listData.forEach((listItem) => {
    let itemElem = document.createElement("div");
    itemElem.classList.add("preview-item");

    for (const item of listItem) {
      let subItemElem = document.createElement("span");
      subItemElem.classList.add("preview-item-val");
      subItemElem.innerHTML = `${listItem[item]}`;
      itemElem.appendChild(subItemElem);
    }

    listContainer.appendChild(itemElem);
  });
};

const displayCV = (userData) => {
  nameDsp.innerHTML = `${userData.firstname} ${userData.middlename} ${userData.lastname}`;
  phonenoDsp.innerHTML = userData.phoneElem;
  emailDsp.innerHTML = userData.emailElem;
  addressDsp.innerHTML = userData.addressElem;
  designationDsp.innerHTML = userData.designationElem;
  summaryDsp.innerHTML = userData.summaryElem;

  showListData(userData.projects, projectsDsp);
  showListData(userData.achievements, achievementsDsp);
  showListData(userData.skills, skillsDsp);
  showListData(userData.educations, educationsDsp);
  showListData(userData.experiences, experiencesDsp);
  showListData(userData.languages, languagesDsp);
};

const generateCV = () => {
  let userData = getUserInputs();
  displayCV(userData);
  console.log(userData);
};

function previewImage() {
  let reader = new FileReader();
  reader.readAsDataURL(imageElem.files[0]);

  reader.onload = (ofevent) => {
    imageDsp.src = ofevent.target.result;
  };
}
// print CV
function printCV() {
  window.print();
}
