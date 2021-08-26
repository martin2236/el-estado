import { crearFooter } from "./customs-el/footer"
import { crearInput } from "./customs-el/inputs"
import { crearNav } from "./customs-el/nav"
import { crearButtons } from "./customs-el/buttons"
import { goTo } from "./router/router"
import { router } from "./router/router"
import { crearIndex } from "./components/index-comp"

import { crearFormulario } from "./customs-el/form"
import { estado } from "./estado"


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
crearFormulario()
crearButtons()
crearNav()
crearFooter()
crearInput()
estado.setState({nombre:""})



window.addEventListener("load",()=>{
    router(location.pathname)
})
}
main()