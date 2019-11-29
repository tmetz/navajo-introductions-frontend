class Clan {

    constructor(clanJSON) {
        this.english_name = clanJSON.english_name
        this.dine_bizaad_name = clanJSON.dine_bizaad_name
        this.id = clanJSON.id
    }

    renderClan() {
        const clanSpan = document.createElement('div')
        clanSpan.className = 'clan-drag'
        clanSpan.setAttribute("id", this.id)
        clanSpan.setAttribute("draggable", true) 
        clanSpan.addEventListener('dragstart', drag)
        clanSpan.addEventListener('ondrop', drop)
        clanSpan.addEventListener('ondragover', allowDrop)
        //ondragstart="drag(event)"
        clanSpan.innerHTML = `${this.dine_bizaad_name} <br> (${this.english_name})`
        return clanSpan
    }

    drag(event) {
        event.dataTransfer.setData("text", event.target.id)
    }


}