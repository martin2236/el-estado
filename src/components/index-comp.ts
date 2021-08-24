export function crearIndex(){
    const div = document.createElement("div")
    div.classList.add("container")
    div.innerHTML = `
    <H1 class="h1">Te doy la bienvenida a mi site</H1>
    <p class="p" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Veniam consequuntur iure voluptas quia accusantium voluptatum
    aspernatur provident et repudiandae quam veritatis,
    libero porro sit beatae laboriosam a aut consequatur quidem?
    </p> 

    <p class="p2" >Para continuar ingresa tu nombre</p>
    <input-el class="simple">Nombre</input-el>
    <boton-el href="/src/form" class="relleno" >Continuar</boton-el>
    
    `
    return div
}