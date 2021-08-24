export function crearInput(){
    class InputEl extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){

            const clase = this.classList.value
            const tipo = this.textContent
            
           var shadow = this.attachShadow({mode: 'open'});
            const d = document
            const div = d.createElement("div")
            div.classList.add("simple")
           
            const label = d.createElement("label")
            label.classList.add("label")
            label.textContent = tipo
           
            const input =d.createElement("input")
            input.classList.add("input")
            input.setAttribute("placeholder",`Ingresa tu ${tipo.toLocaleLowerCase()}`)

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
            if(clase == "simple"){
                shadow.appendChild(div)
                div.appendChild(label)
                div.appendChild(input)
                div.appendChild(style)
            } else if (clase == "select"){
                shadow.appendChild(select)
                select.appendChild(label2)
                select.appendChild(style)
                select.appendChild(option1)
                select.appendChild(option2)
                select.appendChild(option3)
            }
          
        }
    }
    customElements.define("input-el",InputEl)
}