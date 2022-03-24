let p = document.getElementsByTagName('p');


let textBefore = p.textContent
p.textContent = "Encore 5 min et c'est bon, sauf si vous êtes lents muahahahahah";

let textAfter = p.textContent

let div = document.getElementsByTagName('div')[0];
console.log(div);

div.innerHTML = "<p>"+textBefore+"</p>";
console.log(div)

div.innerHTML += "<p>" +textAfter+ "</p>";

let textVictoire = "je suis un boss";

div.innerHTML = "<p>" +textVictoire+ "</p>";
div.textContent = "";
console.log(div)

for(let i = 0; i < 28; i++){
    div.innerHTML += "<p>" +textVictoire+ "</p>";
    
}
// function creerParagraphe(){
    // div.innerHTML += "<p>" +textVictoire+ "</p>";
// 
// for(let i = 0; i < 28; i++){
    // creerParagraph();
    // let div = document.creatElement('div')[0];
// console.log(div);

// let h1 = document.getElementsByTagName('h1');

// let titre = h1.textContent
// h1.textContent = "je fabrique de l'HTML en JS";
