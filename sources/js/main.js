var piz = document.getElementById('p-izquierda');
var pder = document.getElementById('p-derecha');

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 1500) {
        piz.classList.add('show');
        pder.classList.add('show');
    }
})
