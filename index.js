const toggleButton = document.getElementById ("toggle-button");

const sideBar = document.getElementById ("side-bar");

toggleButton.addEventListener("click", show);

function show () {
    sideBar.classList.toggle("active")
}
/*quand on clic sur toggle-button, on ajoute la class "active" à notre élément. Cette class apparait dans la console au clic puis disparait au 2e clic*/

/*Enlever la side-bar quand on clic sur le main content*/
const content = document.querySelector (".content");

content.addEventListener ("click", () =>{
    sideBar.classList.remove ("active")
})
