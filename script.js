document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".content-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("data-target");

            // Hide all sections
            sections.forEach(section => section.classList.remove("active"));

            // Show the selected section
            document.getElementById(targetId).classList.add("active");
        });
    });
});
