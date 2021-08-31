import { crearFooter } from "./customs-el/footer"
import { crearNav } from "./customs-el/nav"
import { goTo } from "./router/router"
import { router } from "./router/router"
import { CrearFormularioGrande } from "./customs-el/form-option-comp"

import { crearFormulario } from "./customs-el/form"
import { estado } from "./estado"



function main(){
crearFormulario()
crearNav()
crearFooter()
CrearFormularioGrande()

const lastState =  estado.getState()
console.log(lastState)

window.addEventListener("load",()=>{
    router(location.pathname)
})
}
main()