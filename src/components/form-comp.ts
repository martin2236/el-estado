export function crearForm(){
    const div = document.createElement("div")
    div.classList.add("container")
    div.innerHTML = `
    <nav-el></nav-el>
    <p class = "h1"> necesitamos algunos datos más </p>
    <input-el class="simple">Email</input-el>
    <input-el class="simple">Comida favorita</input-el>
    <input-el class="select"></input-el>
    <boton-el  href="/src/agradecimiento" class="relleno">Continuar</boton-el>
    <boton-el  href="/src/" class="vacio" >Volver</boton-el>
    <footer-el></footer-el>
    `
    return div
}