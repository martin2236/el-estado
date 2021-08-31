import { estado } from "../estado"
export function crearForm(){
    const div = document.createElement("div")
    div.classList.add("container")
    div.innerHTML = `
    
    <p> Hola </p>
    <formulario-grande></formulario-grande>
   
    `
    return div
}