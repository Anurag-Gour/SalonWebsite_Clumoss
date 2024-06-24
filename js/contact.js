document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

function validatePhoneInput(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
}

window.onload = function() {
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', validatePhoneInput);
};