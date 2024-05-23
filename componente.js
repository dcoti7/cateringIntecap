
//Función reutilizar header
document.addEventListener("DOMContentLoaded", function
(){
    const headercontainer = document.querySelector("#header-container");
    fetch("header.html")
    .then(respuesta => {
        if (!respuesta.ok){
            throw new Error ("La respuesta no fue la correcta");
        }
        return respuesta.text();
    })
    .then (datos => {
        headercontainer.innerHTML = datos;
    })
});

//Function reutilizar footer
document.addEventListener("DOMContentLoaded", function
(){
    const footercontainer = document.querySelector("#footer-container");
    fetch("footer.html")
    .then(respuesta => {
        if (!respuesta.ok){
            throw new Error ("La respuesta no fue la correcta");
        }
        return respuesta.text();
    })
    .then (datos => {
        footercontainer.innerHTML = datos;
    })
});