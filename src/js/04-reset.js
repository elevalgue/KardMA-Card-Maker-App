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

//PINTAR PALETA DE COLORES PREVIEW

function addColorPreview(event){
  const currentTarget = event.currentTarget;
  if(currentTarget.classList.contains('.color1-js')){
    infoPerson.colorSelected = 1;
  }else if(currentTarget.classList.contains('.color2-js')){
    infoPerson.colorSelected = 2;
  }else if(currentTarget.classList.contains('.color3-js')){
    infoPerson.colorSelected = 3;
  }
}

function selectedPalette() {
  if (infoPerson.colorSelected === 1 || infoPerson.colorSelected === 0) {
    infoPerson.colorSelected = 1;
    document.querySelector('.color1-js').checked = true;
  } else if (infoPerson.colorSelected === 2) {
    infoPerson.colorSelected = 2;
    document.querySelector('.color2-js').checked = true;
  } else if (infoPerson.colorSelected === 3) {
    infoPerson.colorSelected = 3;
    document.querySelector('.color3-js').checked = true;
  }
}

function choosePalette(){
  addColorPreview();
  selectedPalette();
}

paletteA.addEventListener('change', choosePalette);
paletteB.addEventListener('change', choosePalette);
paletteC.addEventListener('change', choosePalette);