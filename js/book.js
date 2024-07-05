document.addEventListener('DOMContentLoaded', function() {
    const hourSelect = document.getElementById('hour');
    const minuteSelect = document.getElementById('minute');

    // Populate hours (1-12)
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i < 10 ? '0' + i : i;
        option.textContent = i;
        hourSelect.appendChild(option);
    }

    // Populate minutes (0, 5, 10, ..., 55)
    for (let i = 0; i < 60; i += 5) {
        const option = document.createElement('option');
        option.value = i < 10 ? '0' + i : i;
        option.textContent = option.value;
        minuteSelect.appendChild(option);
    }
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('bookingForm').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
});

document.getElementById('hour').addEventListener('change', function() {
        var hour = this.value;
        var ampm = document.getElementById('ampm');

        if (hour.includes('p')) {
            ampm.value = 'PM';
            this.value = hour.replace('p', '');
        } else {
            ampm.value = 'AM';
        }
    });