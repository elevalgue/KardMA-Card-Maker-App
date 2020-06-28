//CREO UN OBJETO VACIO PARA CADA PERSONA
'use strict';

let infoPerson = {
  colorSelected: 0,
  name: '',
  job: '',
  /*addImg: '',*/
  email: '',
  telephone: '',
  linkedIn: '',
  gitHub: '',
};

//SELECCIONAMOS TODOS LOS INPUTS Y BUTTONS
const resetButton = document.querySelector('.reset__button-js');
const submitButton = document.querySelector('.article__share__button');

/*const paletteA = document.querySelector('.color1-js');
const paletteB = document.querySelector('.color2-js');
const paletteC = document.querySelector('.color3-js');*/
const fullName = document.querySelector('.fullName-js');
const job = document.querySelector('.job-js');
/*const selectImagen = document.querySelector('.addImage-js');*/
const email = document.querySelector('.email-js');
const telephone = document.querySelector('.telephone-js');
const linkedIn = document.querySelector('.linkedIn-js');
const gitHub = document.querySelector('.gitHub-js');

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

//METE EL VALOR DE LOS INPUTS EN EL OBJETO
function valueInput() {
  infoPerson.name = fullName.value;
  infoPerson.job = job.value;
  /*infoPerson.addImg = selectImagen.value;*/
  infoPerson.email = email.value;
  infoPerson.telephone = Number(telephone.value);
  infoPerson.linkedIn = linkedIn.value;
  infoPerson.gitHub = gitHub.value;

  // AQUÍ IRÍA LA FUNCIÓN PARA ACTUALIZAR LA TARJETA
}

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
  }
}

//FUNCION PARA RESETEAR FORMULARIO
function resetForm() {
  infoPerson.colorSelected = 0;
  infoPerson.name = '';
  infoPerson.job = '';
  infoPerson.addImg = '';
  infoPerson.email = '';
  infoPerson.telephone = '';
  infoPerson.linkedIn = '';
  infoPerson.gitHub = '';
  fullName.value = '';
  job.value = '';
  /*selectImagen.value = '';*/
  email.value = '';
  telephone.value = '';
  linkedIn.value = '';
  gitHub.value = '';
}
