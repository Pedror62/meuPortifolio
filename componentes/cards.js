class CardsNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const raiz = document.createElement("div");
        raiz.setAttribute("class", "raiz");

        const cardAll = document.createElement("div");
        cardAll.setAttribute("class", "cards");
        cardAll.setAttribute("cardAll", this.getAttribute("cardAll"));

        cardAll.appendChild(raiz)

        const image = document.createElement("img");
        image.src =
            this.getAttribute("photo") || "https://pt-static.z-dn.net/files/df2/0d5fc72cd47762b23a4a2064880ce0fd.jpg";
        image.alt = "projeto";
        image.setAttribute("class", "photo");

        raiz.appendChild(image)

        const titulo = document.createElement("h1");
        titulo.setAttribute("class", "h1");
        titulo.textContent = this.getAttribute('chamada')

        raiz.appendChild(titulo);


        const paragrafe = document.createElement("span");
        paragrafe.setAttribute("class", "span");
        paragrafe.textContent = this.getAttribute("paragrafo");

        raiz.appendChild(paragrafe);


        const bnt = document.createElement('a');
        bnt.textContent = this.getAttribute("title");
        bnt.href = this.getAttribute("url-link");
        bnt.textContent = `Verificar`

        raiz.appendChild(bnt);




        return raiz;
    }
    style() {
        const style = document.createElement("style");
        style.textContent = `
        *{
            margin:0;
            padding:0;
            font-family: 'Roboto', sans-serif;
        
        }/* Cards */
        .photo{
            height: 183px;
            width: 293px;
            align-items: center;
            border-radius: 0px 0px 18px 17px;
            -webkit-border-radius: 0px 0px 18px 17px;
            -moz-border-radius: 0px 0px 18px 17px;
            box-shadow: -3px 17px 19px -12px rgba(0,0,0,0.75);
                -webkit-box-shadow: -3px 17px 19px -12px rgba(0,0,0,0.75);
                -moz-box-shadow: -3px 17px 19px -12px rgba(0,0,0,0.75);
        }
            
    }
           
        .raiz{
            width: 263px;
            height: 310px;        
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        
       
        span{                
            height: 183px;
            width: 247px;
            padding-top: -3rem;
            align-items: center;
            display: flex;
            height: -11px;
            margin-left: auto;
            margin-right: auto;
                    width: 95%;
            font-weight: 700;
            font-size: 19px;
            
        }


        a{         
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            padding: 15px 15px;
            margin-bottom: 21px;
            margin-left: 2rem;
            display: inline-block;
            padding: 10px 20px;
            background-color: #ffa500; 
             color: #000; 
            text-decoration: none; 
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 18px;
            transition: 0.5s ease-in-out;


            
             }     
                
             a:hover{
                box-shadow: -3px 17px 19px -12px rgba(0,0,0,0.75);
                -webkit-box-shadow: -3px 17px 19px -12px rgba(0,0,0,0.75);
                -moz-box-shadow: -3px 17px 19px -12px rgba(0,0,0,0.75);
             }
           
      
      
            
        }
     
        `;
        return style;
    }







}



customElements.define("card-news", CardsNews);