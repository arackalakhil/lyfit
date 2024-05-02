const scriptURL = 'https://script.google.com/macros/s/AKfycbx2nwrBe8Ldvc9IVNV23fmpSk-X_uHH7aeNfYR8iYD_Oqc90bowK0MIDb51FzaIEyih/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! We will contact you soon."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})