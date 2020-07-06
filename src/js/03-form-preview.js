'use strict';

//FUNCIONES PARA RELLENAR FULLNAME
function valueInputName() {
  return (infoPerson.name = fullName.value);
}
function resultFullName(fullNameFilled) {
  if (fullName.value === "") {
    previewFullName.innerHTML = "Nombre Apellido";
  }
}
// FUNCION PARA RELLENAR PREVIEW -- NAME
function handleUpdateFullName() {
  const fullNameFilled = fullName.value;
  if (fullName.value === '') {
    previewFullName.innerHTML = 'Nombre Apellido';
  } else {
    previewFullName.innerHTML = fullNameFilled;
  }
}
function handleInputFullName() {
  const fullNameFilled = valueInputName();
  resultFullName(fullNameFilled);
}
//FUNCIONES PARA RELLENAR JOB
// function valueInputJob() {
//   return (infoPerson.job = job.value);
// }
// function resultJob(jobFilled) {
//   if (job.value === "") {
//     previewJob.innerHTML = "Front-end developer";
//   }
// }

// FUNCION PARA RELLENAR PREVIEW -- JOB
function handleUpdateJob() {
  // guardamos en el objeto principal
  infoPerson.job = job.value;
  previewJob.innerHTML = infoPerson.job === ''
    ? 'Front-end developer'
    : infoPerson.job;
}

// function handleInputJob() {
//   const jobFilled = valueInputJob();
//   resultJob(jobFilled);
// }

// job.addEventListener("keyup", handleInputJob);

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

//CAMBIAR LOS COLORES CON LAS PALETAS
function changeColors(event){
  previewCard.classList.remove('palette1-js');
  previewCard.classList.remove('palette2-js');
  previewCard.classList.remove('palette3-js');
  infoPerson.palette = Number(event.target.value);
  previewCard.classList.add(`palette${infoPerson.palette}-js`);
}
for (const palette of palettes){
  palette.addEventListener('change', changeColors);
}
