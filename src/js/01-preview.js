"use strict";

//CREO UN OBJETO VACIO PARA CADA PERSONA -- copiado para poder usarlo
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

//SELECCIONAMOS TODOS LOS INPUTS -- copiado para poder usarlo
const fullName = document.querySelector(".fullName-js");
const job = document.querySelector(".job-js");
/*const selectImagen = document.querySelector('.addImage-js');*/
const email = document.querySelector(".email-js");
const telephone = document.querySelector(".telephone-js");
const linkedIn = document.querySelector(".linkedIn-js");
const gitHub = document.querySelector(".gitHub-js");

//SELECCIONAMOS LOS ELEMENTOS DEL PREVIEW -- nuevo para mostrar los valores del objeto
const previewFullName = document.querySelector(".previewFullName-js");
const previewJob = document.querySelector(".previewJob-js");
const previewTelephone = document.querySelector(".previewTelephone-js");
const previewEmail = document.querySelector(".previewEmail-js");
const previewLinkedIn = document.querySelector(".previewLinkedIn-js");
const previewGitHub = document.querySelector(".previewGitHub-js");

//METE EL VALOR DE LOS INPUTS EN EL OBJETO -- copiado para poder usarlo

//FUNCIONES PARA RELLENAR FULLNAME
function valueInputName() {
  return (infoPerson.name = fullName.value);
}

function resultFullName(fullNameFilled) {
  if (fullName.value === "") {
    previewFullName.innerHTML = "Nombre Apellido";
  } else {
    previewFullName.innerHTML = fullNameFilled;
  }
}

function handleInputFullName() {
  const fullNameFilled = valueInputName();
  resultFullName(fullNameFilled);
}

//FUNCIONES PARA RELLENAR JOB

function valueInputJob() {
  return (infoPerson.job = job.value);
}

function resultJob(jobFilled) {
  if (job.value === "") {
    previewJob.innerHTML = "Front-end developer";
    console.log("errror");
  } else {
    previewJob.innerHTML = jobFilled;
  }
}

function handleInputJob() {
  const jobFilled = valueInputJob();
  resultJob(jobFilled);
}

//LISTENERS -- copiado para poder usarlo
fullName.addEventListener("keyup", handleInputFullName);
job.addEventListener("keyup", handleInputJob);
