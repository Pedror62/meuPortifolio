const el = document.querySelector("#text");
const text = "Desenvolvedor  Web";
const interval = 100;
function showText(el, text, interval){

    const char = text.split("").reverse();

 const typer = setInterval(()=>{
    
    if(!char.length){
        return clearInterval(typer);
    }
    const next= char.pop();
    el.innerHTML += next;

 }, interval);
}

showText(el, text, interval);

// function screti9(elemento) {
//     const textwhirt = elemento.innerHTML.split('');
//     elemento.innerHTML = ' ';
//     testeArray.forEach((letra, i) => {
//         setTimeout(() => elemento.innerHTML += letra, 75 * i);
//     });

// }
    
// const el = document.querySelector("h1");
// screti9(text);