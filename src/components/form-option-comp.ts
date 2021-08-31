import { estado } from "../estado"
export function CrearFormularioGrande(){
    class FormGrande extends HTMLElement{
        shadow:ShadowRoot
        nombre:string
        constructor(){
            super()
            this.shadow = this.attachShadow({mode:'open'})
            this.render()
            estado.subscribe(()=>{
                this.render()
            })
            const ultimoEstado = estado.getState()
            this.nombre = ultimoEstado.nombre || ""
        }
        render(){
            const d = document
            
            const label2 = d.createElement("label")
            label2.classList.add("label")
            label2.textContent = "Alguna de estas tres opciones"

            const select = d.createElement("select")
            select.classList.add("select")

            const option1 = d.createElement("option")
            option1.classList.add("piedra")
            option1.textContent = "piedra"
            
            const option2 = d.createElement("option")
            option2.classList.add("papel")
            option2.textContent = "papel"

            const option3 = d.createElement("option")
            option3.classList.add("tijera")
            option3.textContent = "tijera"

            const style = document.createElement('style');
            style.innerHTML=`
            .simple{
                display:inline;
                width:312px;
            }
            .label{
                width:312px;
                display: inline;
                font-size: 18px;
            }
            .input{
                display: block;
                height:55px;
                width:312px;
                border-radius:4px;
                border:2px solid #000;
                font-size:16px;
            }
            .select{
                display: block;
                height:55px;
                width:312px;
                border-radius:4px;
                border:2px solid #000;
                font-size:16px;
            }
           .piedra,
           .papel,
           .tijera{
           max-width:312px;
           }
            .label2{
                width:312px;
                display: inline;
                font-size: 18px;
            }
            `
           
               this.shadow.appendChild(select)
                select.appendChild(label2)
                select.appendChild(style)
                select.appendChild(option1)
                select.appendChild(option2)
                select.appendChild(option3)
            }
          
        }
        customElements.define("formulario-grande",FormGrande)
    }
    