import { crearForm } from "../components/form-comp"
import { crearAgradecimiento } from "../components/agradecimiento-comp"
import { crearIndex } from "../components/index-comp"
import { processLinks } from ".."

export function router(path){
    const rutas = [
        {
            path:/\/form/,
            funcion:crearForm
        },
        {
            path:/\/agradecimiento/,
            funcion: crearAgradecimiento
        },
        {
            path:/\/index/,
            function: crearIndex
        }
    ]
    for(const r of rutas){
        if (r.path.test(path)){
         const el =  r.funcion()
         const contenedor = document.querySelector(".contenedor")
         if (contenedor.firstChild){
             contenedor.firstChild.remove()
         }
         contenedor.appendChild(el)
         processLinks(contenedor)
        }
    }
}

export function goTo(path){
    history.pushState({},"",path)
}