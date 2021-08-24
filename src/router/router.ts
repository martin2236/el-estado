import { crearForm } from "../components/form-comp"

export function Router(path){
   
const routes = [
    {
        path: /\/src\/form/,
        funcion:crearForm
    },
   
]

for(const r of routes){
        if (r.path.test(path)){
        const el = r.funcion()
         const contenedor = document.querySelector(".contenedor") 
            if(contenedor.firstChild){
                contenedor.innerHTML = ""
                contenedor.appendChild(el)
                const links = document.querySelector(".vacio")
                links.addEventListener("click",function(e){
                    e.preventDefault()
                })
            }
        }
    }
}
export function goTo(path){
    console.log(path)
history.pushState({},"",path)
}