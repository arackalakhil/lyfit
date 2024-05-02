const scriptURL = 'https://script.google.com/macros/s/AKfycbz9U6qdOD56VNhdfXz1_MpamUZmKYRbihOHRZS6bzCIRIS5XsnT1A_cAvBawJOvj3ggKg/exec';
const form = document.forms['contact-form1'];
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
