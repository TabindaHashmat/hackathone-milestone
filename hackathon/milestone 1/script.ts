const toggleButton = document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
    const skills = document.getElementById('skills') as HTMLElement | null;

    if (toggleButton && skills) {
        // Optional: Set initial state (e.g., hide the skills section by default)
        skills.style.display = 'block'; // Change to 'none' if you want it hidden by default

        toggleButton.addEventListener('click', () => {
            // Toggle visibility
            skills.style.display = skills.style.display === 'none' || skills.style.display === '' ? 'block' : 'none';
        });
    } else {
        console.error('Toggle button or skills section not found.');
    }
});
