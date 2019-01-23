particlesJS.load('particles', 'resources/particles.json', function() {
    console.log('particles loaded');
});

fetch("nav.html")
    .then(response => response.text())
    .then(html => {
        document.querySelector("#nav-container").innerHTML = html;
        window.mdc.autoInit();
        setupTopBar();
    });