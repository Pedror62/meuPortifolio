class MeuComponente extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
  
     

      // Criar o elemento button-click
    //   const buttonClickElement = document.createElement("button-click");
    //   buttonClickElement.setAttribute("btn", "Ir para o site");
    //   buttonClickElement.setAttribute("url", "https://www.example.com");
  
    //   shadow.appendChild(buttonClickElement);
    }
  }





// style() {
//     const style = document.createElement("style");
//     style.textContent = `
//         .botoes {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//         }
    
//         .btn {
//           padding: 10px 20px;
//           background-color: #007bff;
//           color: #fff;
//           text-decoration: none;
//           border-radius: 5px;
//           font-size: 16px;
//           cursor: pointer;
//         }
//       `;
     
    
//         return style;




customElements.define("meu-componente", MeuComponente);
