var toggleButton = document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skills = document.getElementById('skills');
    if (toggleButton && skills) {
        // Optional: Set initial state (e.g., hide the skills section by default)
        skills.style.display = 'block'; // Change to 'none' if you want it hidden by default
        toggleButton.addEventListener('click', function () {
            // Toggle visibility
            skills.style.display = skills.style.display === 'none' || skills.style.display === '' ? 'block' : 'none';
        });
    }
    else {
        console.error('Toggle button or skills section not found.');
    }
});
