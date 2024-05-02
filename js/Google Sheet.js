const scriptURL = 'https://script.google.com/macros/s/AKfycbx2nwrBe8Ldvc9IVNV23fmpSk-X_uHH7aeNfYR8iYD_Oqc90bowK0MIDb51FzaIEyih/exec'

const form = document.forms['contact-form'];
const loadingOverlay = document.getElementById('loading-overlay');

form.addEventListener('submit', e => {
    e.preventDefault();
    loadingOverlay.style.display = 'block'; // Show loading overlay

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        loadingOverlay.style.display = 'none'; // Hide loading overlay
        alert("Thank you! We’ll take a closer look.");
        window.location.reload();
    })
    .catch(error => {
        loadingOverlay.style.display = 'none'; // Hide loading overlay
        console.error('Error!', error.message);
    });
});
