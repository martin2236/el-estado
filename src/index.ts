import { crearFooter } from "./customs-el/footer"
import { crearInput } from "./customs-el/inputs"
import { crearNav } from "./customs-el/nav"
import { crearButtons } from "./customs-el/buttons"
import { goTo } from "./router/router"
import { router } from "./router/router"

export function processLinks(container){
    const els = document.querySelectorAll(".link")
        for (const link of els){
        link.addEventListener("click",function(e){
            e.preventDefault()
            var ruta = this.getAttribute("href")
            goTo(ruta)
        })
    }
}

function main(){
crearButtons()
crearNav()
crearFooter()
crearInput()

const contenedor = document.querySelectorAll(".contenedor")
processLinks(contenedor)
window.addEventListener("load",()=>{
    router(location.pathname)
})
}
main()