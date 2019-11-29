class Clan {

    constructor(clanJSON) {
        this.english_name = clanJSON.english_name
        this.dine_bizaad_name = clanJSON.dine_bizaad_name
        this.id = clanJSON.id
    }

    renderClan() {
        const clanSpan = document.createElement('span')
        clanSpan.className = 'clan-drag'
        clanSpan.setAttribute("draggable", true) 
        clanSpan.addEventListener('dragstart', this.drag)
        //ondragstart="drag(event)"
        clanSpan.innerHTML = `${this.dine_bizaad_name}`
        return clanSpan
    }

    drag(event) {
        event.dataTransfer.setData("text", event.target.id)
    }


}