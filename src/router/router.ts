import { processLinks } from ".."
import { crearForm } from "../components/form-comp"
import { crearIndex } from "../components/index-comp"

export function Router(path){
   
const routes = [
    {
        path: /\/src\/form/,
        funcion:crearForm
    },
    {
        path:/src\//,
        funcion: crearIndex
    }
]

for(const r of routes){
        if (r.path.test(path)){
        const el = r.funcion()
         const contenedor = document.querySelector(".contenedor") 
            if(contenedor.firstChild){
                contenedor.innerHTML = ""
                contenedor.appendChild(el)
                const continuar = document.querySelector(".relleno")
                const volver = document.querySelector(".vacio")
                //processLinks(continuar)
                //processLinks(volver)
            }
        }
    }
}
export function goTo(path){
console.log(path)
history.pushState({},"",path)
}