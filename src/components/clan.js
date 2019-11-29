class Clan {

    constructor(clanJSON) {
        this.english_name = clanJSON.english_name
        this.dine_bizaad_name = clanJSON.dine_bizaad_name
        this.id = clanJSON.id
    }

    renderClan() {
        const clanPlaceHolder = document.createElement('div')
        clanPlaceHolder.setAttribute("id", "placeholder-" + this.id)
        clanPlaceHolder.addEventListener('drop', drop)
        clanPlaceHolder.addEventListener('dragover', allowDrop)
        clanPlaceHolder.className = 'clan-drag'
        const clanSpan = document.createElement('div')
        clanSpan.setAttribute("id", "clan-" + this.id)
        clanSpan.setAttribute("draggable", true) 
        clanSpan.addEventListener('dragstart', drag)
        clanSpan.innerHTML = `${this.dine_bizaad_name} <br> (${this.english_name})`
        clanPlaceHolder.appendChild(clanSpan)
        return clanPlaceHolder
    }

    drag(event) {
        event.dataTransfer.setData("text", event.target.id)
    }


}