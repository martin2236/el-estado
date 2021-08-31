import { crearForm } from "../components/form-comp"

export function router(path){
    const rutas = [
        {
            path:/\/form/,
            funcion:crearForm
        },
      
    ]
    for(const r of rutas){
        if (r.path.test(path)){
         const el =  r.funcion()
         const contenedor = document.querySelector(".contenedor")
         if (contenedor.firstChild){
            contenedor.firstChild.remove()
         }
         contenedor.appendChild(el)

        }
    }
}

export function goTo(path){
    history.pushState({},"",path)
}