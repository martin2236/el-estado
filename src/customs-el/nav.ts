export function crearNav(){
    class NavEl extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            var shadow = this.attachShadow({mode: 'open'});
            const d = document
            const div = d.createElement("div")
            div.textContent = "Un titulo"
            div.classList.add("nav")
            const style = document.createElement('style');
            style.innerHTML=`
            .nav{
                height:60px;
                width:100%;
                font-size:30px;
                display:flex;
                justify-content:center;
                align-items:center;
                background: #FF8282;
            }
            `
            shadow.appendChild(div)
            div.appendChild(style)
        }
    }
    customElements.define("nav-el",NavEl)
}