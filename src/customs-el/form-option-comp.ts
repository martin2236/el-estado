import { estado } from "../estado"
import { goTo } from "../router/router"
export function CrearFormularioGrande(){
    class FormGrande extends HTMLElement{
        shadow:ShadowRoot
       
        constructor(){
            super()
            this.shadow = this.attachShadow({mode:'open'})
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

            const labelE = d.createElement("label")
            labelE.classList.add("label")
             labelE.textContent = "Email"

            const inputE =d.createElement("input")
            inputE.classList.add("input")
            inputE.setAttribute("type","text")
            inputE.setAttribute("name","email")

            const labelC = d.createElement("label")
            labelC.classList.add("label")
            labelC.textContent = "Comida favorita"

            const inputC =d.createElement("input")
            inputC.classList.add("input")
            inputC.setAttribute("type","text")
            inputC.setAttribute("name","comida")

            const label2 = d.createElement("label")
            label2.classList.add("label")
            label2.textContent = "Alguna de estas tres opciones"

            const select = d.createElement("select")
            select.classList.add("select")
            select.setAttribute("name","select")

            const option1 = d.createElement("option")
            option1.classList.add("opcion")
            option1.textContent = "piedra"
            
            const option2 = d.createElement("option")
            option2.classList.add("opcion")
            option2.textContent = "papel"

            const option3 = d.createElement("option")
            option3.classList.add("opcion")
            option3.textContent = "tijera"

            const BTNLleno = d.createElement("button")
            BTNLleno.textContent = "Enviar"
            BTNLleno.setAttribute("class","relleno")

            const style = document.createElement('style');
            style.innerHTML=`


            .form{
                display:flex;
                flex-direction:column;
                width:312px;
              justify-content:center
            }
           
            .input,
            .select{
                display: block;
                height:55px;
                width:312px;
                border-radius:4px;
                border:2px solid #000;
                font-size:16px;
                margin-bottom:40px;
            }
            .opcion{
           width:312px;
           }
            .label2, 
            .labelE,
            .labelC{
                width:312px;
                display: inline;
                font-size: 18px;
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
                form.appendChild(labelE)
                form.appendChild(inputE)
                form.appendChild(labelC)
                form.appendChild(inputC)
                form.appendChild(label2)
                form.appendChild(select)
                select.appendChild(style)
                select.appendChild(option1)
                select.appendChild(option2)
                select.appendChild(option3)
                form.appendChild(BTNLleno)

                const formulario = this.shadow.querySelector(".form")
                formulario.addEventListener("submit",(e:any)=>{
                        e.preventDefault()
                        estado.setState({...estado.getState(),
                            email: e.target.email.value,
                            comida: e.target.comida.value,
                            opcion: e.target.select.value
                        })
                        const lastState =  estado.getState()
                        console.log(lastState)
                })
            }
          
        }
        customElements.define("formulario-grande",FormGrande)
    }
    