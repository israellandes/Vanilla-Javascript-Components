document.addEventListener('DOMContentLoaded', function() {
    var openBtn = document.querySelector('#openBtn');
    var closeBtn = document.querySelector('#closeBtn');
    var overlay = document.querySelector('#overlay');
    var sidebar = document.querySelector('#sidebar');

    // Open sidebar
    openBtn.addEventListener('click', function() {
        sidebar.classList.add('open');
        overlay.classList.add('open');
    });

    // Close sidebar with close button
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    });

    // Close sidebar by clicking outside
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    });
});
