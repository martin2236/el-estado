import { estado } from "../estado"
export function crearForm(){
    const div = document.createElement("div")
    div.classList.add("container")
    div.innerHTML = `
    <h1 class="h1">Hola ${estado.getState().nombre} </h1> 
    <p class="p2">Necesitamos algunos datos más</p>
    <formulario-grande></formulario-grande>
   
    `
    return div
}