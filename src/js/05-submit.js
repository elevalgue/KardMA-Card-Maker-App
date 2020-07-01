//LISTENERS
fullName.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
job.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
/*selectImagen.addEventListener('change', () => { valueInput; validateForm; });*/
email.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
telephone.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
linkedIn.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
gitHub.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
resetButton.addEventListener('click', resetForm);

// FUNCIÓN PARA VALIDAR EL FORMULARIO:

function validateForm() {
  if (
    infoPerson.name.length < 1 ||
    infoPerson.job.length < 1 ||
    // infoPerson.addImg.length < 1 ||
    infoPerson.email.length < 1 ||
    infoPerson.telephone.length < 1 ||
    infoPerson.linkedIn.length < 1 ||
    infoPerson.gitHub.length < 1
  ) {
    submitButton.setAttribute('disabled', 'disabled');
  } else {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('cursor__btn__submit');
  }
}


