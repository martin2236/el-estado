export function crearAgradecimiento(){
    const div = document.createElement("div")
    div.classList.add("container")
    div.innerHTML = `
    <p class="p2" >Toda la información que nos brindaste es muy importante</p>
   
    <boton-el id="relleno" href="/index" class="link" >De nada</boton-el>
    
    `
    return div
}