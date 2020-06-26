//CREO UN OBJETO VACIO PARA CADA PERSONA
'use strict';
let infoPerson ={
  colorSelected:0,
  name:'',
  job:'',
  /*addImg:'',*/
  email:'',
  telephone:'',
  linkedIn:'',
  gitHub:''
};

//SELECCIONAMOS TODOS LOS INPUTS Y RESET BUTTON
const resetButton = document.querySelector('.reset__button-js');
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

//METE EL VALOR DE LOS INPUTS EN EL OBJETO
function valueInput(){
  infoPerson.name = fullName.value;
  infoPerson.job = job.value;
  /*infoPerson.addImg = selectImagen.value;*/
  infoPerson.email = email.value;
  infoPerson.telephone = Number(telephone.value);
  infoPerson.linkedIn = linkedIn.value;
  infoPerson.gitHub = gitHub.value;
}

//LISTENERS
fullName.addEventListener('keyup', valueInput);
job.addEventListener('keyup', valueInput);
/*selectImagen.addEventListener('change', valueInput);*/
email.addEventListener('keyup', valueInput);
telephone.addEventListener('keyup', valueInput);
linkedIn.addEventListener('keyup', valueInput);
gitHub.addEventListener('keyup', valueInput);

//FUNCION PARA RESETEAR FORMULARIO
function resetForm(){
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

resetButton.addEventListener('click', resetForm);