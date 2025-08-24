document.addEventListener('DOMContentLoaded', function() {

    // --- Countdown Timer ---
    function startCountdown() {
        const countdownElement = document.getElementById('countdown-timer');
        if (!countdownElement) return;

        // Set timer to end at midnight
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

        function updateTimer() {
            const currentTime = new Date();
            const timeLeft = midnight - currentTime;

            if (timeLeft <= 0) {
                countdownElement.innerHTML = "¡La oferta ha terminado!";
                return;
            }

            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        }

        setInterval(updateTimer, 1000);
        updateTimer();
    }
    
    startCountdown();


    // --- Accordion Functionality ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            
            // Toggle active class for arrow rotation
            header.classList.toggle('active');

            if (content.style.maxHeight) {
                // Collapse the accordion
                content.style.maxHeight = null;
            } else {
                // Expand the accordion
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

});
