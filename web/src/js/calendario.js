var dias = document.getElementsByClassName("dia");
console.log(dias.length);
for (var i = 0; i < dias.length; i++) {
    dias[i].addEventListener("click", function () {
        this.classList.toggle("seleccionado");
        var contenido = document.getElementsByClassName("dia").textContent;
        console.log(contenido);
    });
}