import { crearFooter } from "./customs-el/footer"
import { crearInput } from "./customs-el/inputs"
import { crearNav } from "./customs-el/nav"
import { crearButtons } from "./customs-el/buttons"
import { goTo } from "./router/router"
import { Router } from "./router/router"

function main(){
crearButtons()
crearNav()
crearFooter()
crearInput()
const links = document.querySelector(".relleno")
links.addEventListener("click",function(e){
    e.preventDefault()
    const ruta =this.getAttribute("href")
    goTo(ruta)
})

window.addEventListener("load",()=>{
    Router(location.pathname)
})
}
main()