export function crearFooter(){
    class Footer extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            var shadow = this.attachShadow({mode: 'open'});
            const d = document
            const div = d.createElement("div")
            div.textContent = "footer"
            div.classList.add("nav")
            const style = document.createElement('style');
            style.innerHTML=`
            .nav{
                height:233px;
                width:100%;
                font-size:30px;
                display:flex;
                justify-content:center;
                align-items:center;
                background: #FFA0EA;

            }
            `
            shadow.appendChild(div)
            div.appendChild(style)
        }
    }
    customElements.define("footer-el",Footer)
}