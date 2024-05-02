const scriptURL = 'https://script.google.com/macros/s/AKfycbz9U6qdOD56VNhdfXz1_MpamUZmKYRbihOHRZS6bzCIRIS5XsnT1A_cAvBawJOvj3ggKg/exec'
const form = document.forms['contact-form1']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! We’ll take a closer look." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})