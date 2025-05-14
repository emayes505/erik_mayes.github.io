window.addEventListener('load', () => {
    // Delay for video to appear and play
    setTimeout(() => {
        const video = document.getElementById('logo');
        if (video) {
            video.style.display = 'block';  // Show the video
            video.play();                   // Start playing
        }
    }, 1000); // Delay in milliseconds for video (1 second)

    // Delay for #header to appear
    setTimeout(() => {
        const header = document.getElementById('header');
        if (header) {
            header.style.display = 'block';  // Show the header with navigation
        }
    }, 2500); // Delay in milliseconds for #header (2.5 seconds)

    // Display navigation tabs one by one
    setTimeout(() => {
        const navItems = document.querySelectorAll('nav ul li');
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, index * 300); 
        });
    }, 2800); // Base delay before starting the sequence (3.3 seconds)
});