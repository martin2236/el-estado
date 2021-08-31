import { crearFooter } from "./customs-el/footer"
import { crearNav } from "./customs-el/nav"
import { goTo } from "./router/router"
import { router } from "./router/router"
import { CrearFormularioGrande } from "./components/form-option-comp"

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
crearNav()
crearFooter()
CrearFormularioGrande()
estado.setState({nombre:""})



window.addEventListener("load",()=>{
    router(location.pathname)
})
}
main()