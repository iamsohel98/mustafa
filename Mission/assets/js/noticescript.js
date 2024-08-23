// JavaScript to handle any dynamic content or interactive features

// Example: Closing modal when clicking outside of it
document.addEventListener('click', function (event) {
    if (event.target.matches('.modal')) {
        let modal = bootstrap.Modal.getInstance(event.target);
        modal.hide();
    }
}, false);
