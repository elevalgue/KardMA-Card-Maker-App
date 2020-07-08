"use strict";

// GENERAR URL DE LA TARJETA
const responseURL = document.querySelector(".response");

function sendData(ev) {
  ev.preventDefault();
  sendRequest(infoPerson);
}

function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
      twitterContainer.classList.remove("hidden");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  const child = document.querySelector('.child');
  if (result.success) {
    responseURL.innerHTML =
      "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";

    const tweet = 'Hola Adalaber, aquí tienes tu tarjeta de presentación!';
    twitterButton.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?url=${tweet} ${result.cardURL}`
    );
    twitterButton.setAttribute("target", "_blank");
    twitterButton.appendChild(child);
  } else {
    responseURL.innerHTML = "ERROR:" + result.error;
  }
}

//LOCAL STORAGE
const recoverInfo = () => {
  const local = localStorage.getItem("infoPerson");
  const dataLocal = JSON.parse(local);
  if (dataLocal !== null) {
    infoPerson.fullName = dataLocal.name;
    fullName.value = dataLocal.name;
    handleUpdateFullName();

    //repetir esta estructura de código con el resto

    job.value = dataLocal.job;
    email.value = dataLocal.email;
    phone.value = dataLocal.phone;
    infoPerson.photo = dataLocal.photo; /*ESTO ES LO QUE DA ERROR*/
    linkedIn.value = dataLocal.linkedin;
    gitHub.value = dataLocal.github;
  }
};
recoverInfo();
