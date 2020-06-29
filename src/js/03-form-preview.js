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