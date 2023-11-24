class ReferenciasNavbar extends HTMLElement{
    constructor(){
        super();
    
    const shadow = this.attachShadow({ mode: "open"});
    shadow.appendChild(biuld());
    shadow.appendChild(style());

    }
    biuld(){
        const raiz = document.createElement("div");
        raiz.setAttribute("class", "raiz");


        const referencia = document.createElement("div");
        referencia.setAttribute("class", "sessao1");
        referencia.setAttribute("referencia", this.getAttribute("referencia"));

        raiz.appendChild(referencia);


        const lado = document.createElement("div");
        lado.setAttribute("class", "lado");
        lado.setAttribute("lado", ) , this.getAttribute("lado");
        raiz.appendChild(lado);


        const titulo = document.createElement("div");
        titulo.setAttribute("class", "titulo");
        titulo.textContent = this.getAttribute("titulo");

        raiz.appendChild(titulo);

        const paragrafo = document.createElement("span");
        paragrafo.setAttribute("class", "span");
        paragrafo.textContent = this.getAttribute("paragrafo");

        raiz.appendChild(paragrafo);


        


    }
}
customElements.define("Referencias-Navbar", ReferenciasNavbar );
