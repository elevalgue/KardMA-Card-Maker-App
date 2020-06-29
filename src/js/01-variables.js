"use strict";
//OBJETO
let infoPerson = {
  colorSelected: 0,
  name: "",
  job: "",
  /*addImg:'',*/
  email: "",
  telephone: "",
  linkedIn: "",
  gitHub: "",
};

//VARIABLES
const resetButton = document.querySelector(".reset__button-js");
const submitButton = document.querySelector(".article__share__button");
const paletteA = document.querySelector(".color1-js");
const paletteB = document.querySelector(".color2-js");
const paletteC = document.querySelector(".color3-js");
const fullName = document.querySelector(".fullName-js");
const job = document.querySelector(".job-js");
/*const selectImagen = document.querySelector('.addImage-js');*/
const email = document.querySelector(".email-js");
const telephone = document.querySelector(".telephone-js");
const linkedIn = document.querySelector(".linkedIn-js");
const gitHub = document.querySelector(".gitHub-js");
const previewFullName = document.querySelector(".previewFullName-js");
const previewJob = document.querySelector(".previewJob-js");
const previewTelephone = document.querySelector(".previewTelephone-js");
const previewEmail = document.querySelector(".previewEmail-js");
const previewLinkedIn = document.querySelector(".previewLinkedIn-js");
const previewGitHub = document.querySelector(".previewGitHub-js");
const previewIcon1 = document.querySelector(".previewIconBorder1-js");
const previewIcon2 = document.querySelector(".previewIconBorder2-js");
const previewIcon3 = document.querySelector(".previewIconBorder3-js");
const previewIcon4 = document.querySelector(".previewIconBorder4-js");

//METE EL VALOR DE LOS INPUTS EN EL OBJETO
function valueInput() {
  infoPerson.name = fullName.value;
  infoPerson.job = job.value;
  /*infoPerson.addImg = selectImagen.value;*/
  infoPerson.email = email.value;
  infoPerson.telephone = Number(telephone.value);
  infoPerson.linkedIn = linkedIn.value;
  infoPerson.gitHub = gitHub.value;
}

//LISTENERS
fullName.addEventListener("keyup", valueInput);
job.addEventListener("keyup", valueInput);
/*selectImagen.addEventListener('change', valueInput);*/
email.addEventListener("keyup", valueInput);
telephone.addEventListener("keyup", valueInput);
linkedIn.addEventListener("keyup", valueInput);
gitHub.addEventListener("keyup", valueInput);
