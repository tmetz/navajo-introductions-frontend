const app = new App()

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const currentClan = document.getElementById(data);
    currentClan.classList.add("dragged")
    ev.target.appendChild(currentClan);
}