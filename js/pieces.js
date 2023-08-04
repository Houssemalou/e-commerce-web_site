const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} dt`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        const botton =document.createElement("button");
        if(article.nom=="Ampoule LED" )
        {botton.setAttribute("class" , "btn-1");
         botton.setAttribute("value" , article.nom);} 
        else if(article.nom=="Plaquettes de frein (x4)")
        {botton.setAttribute("class" , "btn-2");
         botton.setAttribute("value" , article.nom)}
        else if(article.nom=="Ampoule boîte à gants")
         {botton.setAttribute("class" , "btn-3");
          botton.setAttribute("value" , article.nom);}
        else if(article.nom=="Liquide de frein" )
          {botton.setAttribute("class" , "btn-4");
           botton.setAttribute("value" , article.nom);}
        else if(article.nom=="Balai d'essuie-glace" )
           {botton.setAttribute("class" , "btn-5");
            botton.setAttribute("value" , article.nom);}
        botton.style.backgroundColor="black";
        botton.style.color="white";
        botton.innerText="acheter";
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        pieceElement.appendChild(botton);
        
    
     }
}

genererPieces(pieces);

 //gestion des bouttons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
    
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});


const noms = pieces.map(piece => piece.nom);
for(let i = noms.length -1 ; i >= 0; i--){
    if(pieces[i].disponibilite == false){
        noms.splice(i,1);
    }
}
const p1 = document.createElement('p');
p1.innerText = "Pièces disponibles :";
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
document.querySelector(".disponible")
    .appendChild(p1).appendChild(abordablesElements);
   



/*const disponiblesElement = document.createElement('ul');

for(let i=0 ; i < nomsDisponibles.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
    disponiblesElement.appendChild(nomElement);
}

const pElementDisponible = document.createElement('p');
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector(".disponibles").appendChild(pElementDisponible).appendChild(disponiblesElement);*/

const inputPrixMax = document.querySelector(".max-prix");
inputPrixMax.addEventListener('input', function(){
    const piecesFiltrees2 = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees2);  
});
let total=0;
const liste2 = document.createElement("ul");
const acheter = document.querySelector(".btn-1")
const total1= document.createElement("p");
acheter.addEventListener('click', function(){
    const elt =document.createElement("li");
    elt.innerText="Ampoule LED";
    document.querySelector(".panier").appendChild(liste2).appendChild(elt);
    total+=60;
    total1.innerText=total+"dt";
    document.querySelector(".tot").appendChild(total1);
    
    
});
const acheter1 = document.querySelector(".btn-2")
acheter1.addEventListener('click', function(){
    const elt =document.createElement("li");
    elt.innerText="Plaquettes de frein (x4)";
    document.querySelector(".panier").appendChild(liste2).appendChild(elt);
    total+=40;
    total1.innerText=total+"dt";
    document.querySelector(".tot").appendChild(total1);

});
const acheter2 = document.querySelector(".btn-3")
acheter2.addEventListener('click', function(){
    const elt =document.createElement("li");
    elt.innerText="Ampoule boîte à gants";
    document.querySelector(".panier").appendChild(liste2).appendChild(elt);
    total+=5.49;
    total1.innerText=total+"dt";
    document.querySelector(".tot").appendChild(total1);
    
});
const acheter3 = document.querySelector(".btn-4")
acheter3.addEventListener('click', function(){
    const elt =document.createElement("li");
    elt.innerText="Liquide de frein";
    document.querySelector(".panier").appendChild(liste2).appendChild(elt);
    total+=9.60;
    total1.innerText=total+"dt";
    document.querySelector(".tot").appendChild(total1);
});
const acheter4 = document.querySelector(".btn-5")
acheter4.addEventListener('click', function(){
    const elt =document.createElement("li");
    elt.innerText="Balai d'essuie-glace";
    document.querySelector(".panier").appendChild(liste2).appendChild(elt);
    total+=29.10;
    total1.innerText=total+"dt";
    document.querySelector(".tot").appendChild(total1);
});
document.querySelector(".hhhh").addEventListener('click',function(event){
    event.preventDefault();
    alert("demande est bien recu");
});






  
         


