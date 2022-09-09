// Acortadores codigo
const _ = (selector) => document.querySelector(selector);
const $ = (selector) => document.getElementById(selector);
// Variables de los botones
const botonAbout = _("#boton-about");
const botonTech = _("#boton-tech");
const botonWork = _("#boton-work");
const botonContact = _("#boton-contact");

// Variables del contenido
const aboutContent = _("#about-content");
const techContent = _("#tech-content");
const workContent = _("#work-content");
const contactContent = _("#contact-content");

//Iconos del sistema
botonAbout.addEventListener("click", () => {
  const iconoAboutBox = new WinBox({
    title: "ABOUT",
    width: "100%",
    height: "100%",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("rgba(0, 0, 0, 0.85)");
    },
    onblur: function () {
      this.setBackground("#464646");
    },
  });
});
botonTech.addEventListener("click", () => {
  const iconoTechBox = new WinBox({
    title: "TECHNOLOGIES",
    width: "100%",
    height: "100%",
    mount: techContent,
    onfocus: function () {
      this.setBackground("rgba(0, 0, 0, 0.85)");
    },
    onblur: function () {
      this.setBackground("#464646");
    },
  });
});
botonWork.addEventListener("click", () => {
  const iconoWorkBox = new WinBox({
    title: "PROJECTS",
    width: "100%",
    height: "100%",
    mount: workContent,
    onfocus: function () {
      this.setBackground("rgba(0, 0, 0, 0.85)");
    },
    onblur: function () {
      this.setBackground("#464646");
    },
  });
});
botonContact.addEventListener("click", () => {
  const iconoContactBox = new WinBox({
    title: "CONTACT",
    width: "100%",
    height: "100%",
    mount: contactContent,
    onfocus: function () {
      this.setBackground("rgba(0, 0, 0, 0.85)");
    },
    onblur: function () {
      this.setBackground("#464646");
    },
  });
});

//Aqui programamos el reloj digital de la interfaz principal.
function actual() {
  fecha = new Date(); //Actualizar fecha.
  hora = fecha.getHours(); //hora actual
  minuto = fecha.getMinutes(); //minuto actual
  segundo = fecha.getSeconds(); //segundo actual
  if (hora < 10) {
    //dos cifras para la hora
    hora = "0" + hora;
  }
  if (minuto < 10) {
    //dos cifras para el minuto
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    //dos cifras para el segundo
    segundo = "0" + segundo;
  }
  //devolver los datos:
  mireloj = hora + " : " + minuto + " : " + segundo;
  return mireloj;
}

function actualizar() {
  //función del temporizador
  mihora = actual(); //recoger hora actual
  mireloj = $("reloj"); //buscar elemento reloj
  mireloj.innerHTML = mihora; //incluir hora en elemento
}
setInterval(actualizar, 1000); //iniciar temporizador