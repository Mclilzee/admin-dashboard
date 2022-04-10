import {createCard} from "./assets/DOM/projectCard.js";

const projectsContainer = document.querySelector(".projects-cards-container");

function addCardToProjects(title, text) {
    projectsContainer.appendChild(createCard(title, text));
}

addCardToProjects("Super Cool Project", "This Project is a sumup of using Grid for layout, with some extra styling wiht CSS")
addCardToProjects("Less Cool Project", "This project is great, but it lacks the flexibility of dynamic and interaction of other projects that i worked on")
addCardToProjects("Impossible App", "This App doesn't include any database to, everything so far here is just static")
addCardToProjects("Easy Peasy App", "It allowance prevailed enjoyment in it. Calling observe for who pressed raising his.")
addCardToProjects("Ad Blocker", "Terminated principles sentiments of no pianoforte if projection impossible. Horses pulled nature favour number yet highly his has old. Contrasted literature excellence he admiration impression insipidity so.")
addCardToProjects("Money Maker", "Oh he decisively impression attachment friendship so if everything. Whose her enjoy chief new young. Felicity if ye required likewise so doubtful. On so attention necessary at by provision otherwise existence direction. ")