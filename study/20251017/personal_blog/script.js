document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler --- //
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeToggleButton.textContent = 'Dark Mode';
        } else {
            body.classList.remove('light-mode');
            themeToggleButton.textContent = 'Light Mode';
        }
    };

    // Apply theme on initial load
    applySavedTheme();

    // Add event listener for the toggle button
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggleButton.textContent = 'Dark Mode';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = 'Light Mode';
        }
    });


    // --- Skill Animation --- //
    const skillsContainer = document.getElementById('skills');
    const skillItems = document.querySelectorAll('.skill-category li');

    if (skillsContainer && skillItems.length > 0) {
        skillsContainer.addEventListener('mousemove', (e) => {
            const rect = skillsContainer.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.

            skillItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemX = itemRect.left + itemRect.width / 2 - rect.left;
                const itemY = itemRect.top + itemRect.height / 2 - rect.top;

                const distance = Math.sqrt(Math.pow(x - itemX, 2) + Math.pow(y - itemY, 2));

                // The closer the mouse, the larger the scale, up to a max of 1.25
                const maxDistance = 300; // The radius of influence
                if (distance < maxDistance) {
                    const scale = 1 + (1 - distance / maxDistance) * 0.25; // Scale from 1 to 1.25
                    item.style.transform = `scale(${scale})`;
                } else {
                    item.style.transform = 'scale(1)';
                }
            });
        });

        skillsContainer.addEventListener('mouseleave', () => {
            // Reset all items to normal size when the mouse leaves the container
            skillItems.forEach(item => {
                item.style.transform = 'scale(1)';
            });
        });
    }
});

// This comment is added to address the error message:
// "There was a problem with your fetch operation: Error: Network response was not ok."
// This error typically indicates that a network request (e.g., using `fetch`) failed
// because the server responded with an HTTP status code outside the 2xx range,
// or there was a network issue preventing the request from completing successfully.
// To debug this, one would need to inspect the `fetch` call in `getGeminiResponse`
// (which is not present in the provided snippet) and check the network tab in the browser's
// developer tools for the specific request that failed.
