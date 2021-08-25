export function crearForm(){
    const div = document.createElement("div")
    div.classList.add("container")
    div.innerHTML = `
    <p class = "h1"> necesitamos algunos datos más </p>
    <input-el class="simple">Email</input-el>
    <input-el class="simple">Comida favorita</input-el>
    <input-el class="select"></input-el>
    <boton-el id="relleno"  href="/agradecimiento" class="link">Continuar</boton-el>
    <boton-el id="vacio"  href="/src/" class="link" >Volver</boton-el>
    `
    return div
}