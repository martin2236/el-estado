import { estado } from "../estado";
import { goTo } from "../router/router";
export function crearFormulario(){
   
    class Form extends HTMLElement{
        shadow:ShadowRoot;
        
        constructor(){
            super()
            this.shadow = this.attachShadow({mode: 'open'});
             this.render()
          
        estado.subscribe(()=>{
          this.syncWithState()
        })
       
        }
        syncWithState(){ 
            const ultimoEstado = estado.getState()
            this.render()
        }

        render(){
            
            const d = document
            const form = d.createElement("form")
            form.classList.add("form")
            form.setAttribute("href","/form")

            const label = d.createElement("label")
            label.classList.add("label")
            label.textContent = "Nombre"
           
            const input =d.createElement("input")
            input.classList.add("input")
            input.setAttribute("type","text")
            input.setAttribute("name","nombre")
            input.setAttribute("placeholder",`Ingresa tu nombre`)

            const BTNLleno = d.createElement("button")
            BTNLleno.textContent = "Continuar"
            BTNLleno.setAttribute("href","")
            BTNLleno.setAttribute("class","relleno")

            const style = document.createElement('style');
            style.innerHTML=`
            .form{
                display:flex;
                flex-direction:column;
                width:312px;
              justify-content:center

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
                margin-bottom:16px;
            }
            .relleno{
                height:55px;
                width:312px;
                font-size:22px;
                border-radius:4px;
                background: #9CBBE9;
                text-decoration:none;
                color:#000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            `
           this.shadow.appendChild(form)
            form.appendChild(style)
             form.appendChild(label)
            form.appendChild(input)
            form.appendChild(BTNLleno)

            const formulario = this.shadow.querySelector(".form")
            formulario.addEventListener("submit",(e:any)=>{
                    e.preventDefault()
                   // console.log(e.target.nombre.value)
                    estado.setState({...estado.getState(),
                        nombre: e.target.nombre.value
                    })
                    const lastState =  estado.getState()
                    console.log(lastState)
                    
                    const ruta =e.target.getAttribute("href")
                    goTo(ruta)
            })
        }
    }
    customElements.define("formulario-el",Form)
}