emailjs.init('slRI1EEIK1fwKJkd_')

const btn = document.getElementById('button');

   document.getElementById('form')
      .addEventListener('submit', function (event) {
         event.preventDefault();

         btn.value = 'Enviando...';

         const serviceID = 'default_service';
         const templateID = 'template_3xsvwkj';

         emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
               btn.value = 'Enviar mensaje';
               alert('Mensaje enviado correctamente, te contestare en menos de 24h. Gracias por la confianza.¡Ten un muy buen dia!');
            }, (err) => {
               btn.value = 'Enviar mensaje';
               alert(JSON.stringify(err));
            });
      });