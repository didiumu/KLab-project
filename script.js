
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelector('.btn-first').addEventListener('click', function (e) {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = "cv.pdf"; 
    link.download = "Umutoni_Mariette_CV.pdf";
    link.click();
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Your message has been sent successfully!");
    this.reset();
});

