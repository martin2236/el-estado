export function crearButtons(){
    class ButtonEl extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const clase = this.getAttribute("id")
            const valor = this.textContent
            var shadow = this.attachShadow({mode: 'open'});
            const d = document
            const BTNLleno = d.createElement("a")
            BTNLleno.textContent = valor
            BTNLleno.setAttribute("href","")
            BTNLleno.setAttribute("id","relleno")

            const BTNVacio = d.createElement("a")
             BTNVacio.textContent = valor
            BTNLleno.setAttribute("href","")
            BTNVacio.setAttribute("id","vacio")
            
            const style = document.createElement('style');
            style.innerHTML=`
            #relleno{
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
            #vacio{
                height:55px;
                width:312px;
                font-size:22px;
                border-radius:4px;
                display: flex;
                align-items: center;
                justify-content: center;
                backgrounf:#fff;
                border:2px solid #000;
                text-decoration:none;
                color:#000;
            }
            `
            if (clase == "relleno"){
            shadow.appendChild(BTNLleno)
            BTNLleno.appendChild(style)
            } else if(clase == "vacio"){
                shadow.appendChild(BTNVacio)
                BTNVacio.appendChild(style)
            }
            
        }
    }
    customElements.define("boton-el",ButtonEl)
}