const toggle = document.getElementById('toggleBtn');
const header = document.querySelector('nav ul');



toggle.addEventListener('change', function () {
    header.classList.toggle('slide', this.checked);
});

