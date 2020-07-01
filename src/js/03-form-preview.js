<<<<<<< HEAD
"use strict";

//FUNCIONES PARA RELLENAR FULLNAME
function valueInputName() {
  return (infoPerson.name = fullName.value);
}
function resultFullName(fullNameFilled) {
  if (fullName.value === "") {
    previewFullName.innerHTML = "Nombre Apellido";
=======
// FUNCION PARA RELLENAR PREVIEW -- NAME
function handleUpdateFullName() {
  const fullNameFilled = fullName.value;
  if (fullName.value === '') {
    previewFullName.innerHTML = 'Nombre Apellido';
>>>>>>> 0289b0bed0744a691ba8f71a65dab5d6977f455b
  } else {
    previewFullName.innerHTML = fullNameFilled;
  }
}
<<<<<<< HEAD
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
=======

// FUNCION PARA RELLENAR PREVIEW -- JOB
function handleUpdateJob() {
  const jobFilled = job.value;
  if (job.value === '') {
    previewJob.innerHTML = 'Front-end developer';
>>>>>>> 0289b0bed0744a691ba8f71a65dab5d6977f455b
  } else {
    previewJob.innerHTML = jobFilled;
  }
}
<<<<<<< HEAD
function handleInputJob() {
  const jobFilled = valueInputJob();
  resultJob(jobFilled);
}
//LISTENERS -- copiado para poder usarlo
fullName.addEventListener("keyup", handleInputFullName);
job.addEventListener("keyup", handleInputJob);
=======

// FUNCION PARA RELLENAR PREVIEW -- EMAIL
function handleUpdateEmail() {
  const emailFilled = email.value;
  return (previewEmail.href = 'mailto:' + emailFilled);
}

// FUNCION PARA RELLENAR PREVIEW -- TELEFONO
function handleUpdateTelephone() {
  const telephoneFilled = telephone.value;
  return (previewTelephone.href = 'tel:' + telephoneFilled);
}

// FUNCION PARA RELLENAR PREVIEW -- LINKEDIN
function handleUpdateLinkedIn() {
  const linkedInFilled = linkedIn.value;
  return (previewLinkedIn.href = `https://www.linkedin.com/in/${linkedInFilled}`);
}

// FUNCION PARA RELLENAR PREVIEW -- GITHUB
function handleUpdateGitHub() {
  const gitHubFilled = gitHub.value;
  return (previewGitHub.href = `https://github.com/${gitHubFilled}`);
}

// LISTENERS
fullName.addEventListener('keyup', handleUpdateFullName);
job.addEventListener('keyup', handleUpdateJob);
email.addEventListener('keyup', handleUpdateEmail);
telephone.addEventListener('keyup', handleUpdateTelephone);
linkedIn.addEventListener('keyup', handleUpdateLinkedIn);
gitHub.addEventListener('keyup', handleUpdateGitHub);

//añadir clase con colores
previewFullName.classList.add('pallete1-color', 'pallete1-borderLeft');
previewJob.classList.add('pallete1-borderLeft');
previewIcon1.classList.add('pallete1-color', 'pallete1-border');
previewIcon2.classList.add('pallete1-color', 'pallete1-border');
previewIcon3.classList.add('pallete1-color', 'pallete1-border');
previewIcon4.classList.add('pallete1-color', 'pallete1-border');

// function changeColorPreview() {
//   if (infoPerson.colorSelected === 1 || infoPerson.colorSelected === 0) {
//     previewFullName.classList.add("pallete1-color", "pallete1-borderLeft");
//     previewJob.classList.add("pallete1-borderLeft");
//     previewIcon1.classList.add("pallete1-color", "pallete1-border");
//     previewIcon2.classList.add("pallete1-color", "pallete1-border");
//     previewIcon3.classList.add("pallete1-color", "pallete1-border");
//     previewIcon4.classList.add("pallete1-color", "pallete1-border");
//     console.log("cambia el color");
//   } else {
//     console.log("cambia a otro color");
//   }
// }
>>>>>>> 0289b0bed0744a691ba8f71a65dab5d6977f455b
