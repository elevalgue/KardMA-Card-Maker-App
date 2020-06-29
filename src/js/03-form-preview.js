// FUNCION PARA RELLENAR PREVIEW -- NAME
function handleUpdateFullName() {
  const fullNameFilled = fullName.value;
  if (fullName.value === "") {
    previewFullName.innerHTML = "Nombre Apellido";
  } else {
    previewFullName.innerHTML = fullNameFilled;
  }
}

// FUNCION PARA RELLENAR PREVIEW -- JOB
function handleUpdateJob() {
  const jobFilled = job.value;
  if (job.value === "") {
    previewJob.innerHTML = "Front-end developer";
  } else {
    previewJob.innerHTML = jobFilled;
  }
}

// FUNCION PARA RELLENAR PREVIEW -- EMAIL
function handleUpdateEmail() {
  const emailFilled = email.value;
  return (previewEmail.href = "mailto:" + emailFilled);
}

// FUNCION PARA RELLENAR PREVIEW -- TELEFONO
function handleUpdateTelephone() {
  const telephoneFilled = telephone.value;
  return (previewTelephone.href = "tel:" + telephoneFilled);
}

// FUNCION PARA RELLENAR PREVIEW -- LINKEDIN
function handleUpdateLinkedIn() {
  const linkedInFilled = linkedIn.value;
  return (previewLinkedIn.href = linkedInFilled);
}

// FUNCION PARA RELLENAR PREVIEW -- GITHUB
function handleUpdateGitHub() {
  const gitHubFilled = gitHub.value;
  return (previewGitHub.href = gitHubFilled);
}

// LISTENERS
fullName.addEventListener("keyup", handleUpdateFullName);
job.addEventListener("keyup", handleUpdateJob);
email.addEventListener("keyup", handleUpdateEmail);
telephone.addEventListener("keyup", handleUpdateTelephone);
linkedIn.addEventListener("keyup", handleUpdateLinkedIn);
gitHub.addEventListener("keyup", handleUpdateGitHub);
