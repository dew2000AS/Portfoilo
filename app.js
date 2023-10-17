// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all control buttons
    const controlButtons = document.querySelectorAll(".control");

    // Add click event listeners to each control button
    controlButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Get the data-id attribute to determine the target section
            const targetSectionId = this.getAttribute("data-id");

            // Remove the "active" class from the currently active section
            const activeSection = document.querySelector(".active");
            if (activeSection) {
                activeSection.classList.remove("active");
            }

            // Add the "active" class to the target section
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add("active");
            }

            // Remove the "active-btn" class from the currently active button
            const activeButton = document.querySelector(".active-btn");
            if (activeButton) {
                activeButton.classList.remove("active-btn");
            }

            // Add the "active-btn" class to the clicked button
            this.classList.add("active-btn");
        });
    });
});
