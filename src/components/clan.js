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
        const clanDiv = document.createElement('div')
        clanDiv.className = 'clan-div'
        clanDiv.setAttribute("id", "clan-" + this.id)
        clanDiv.setAttribute("name", this.dine_bizaad_name)
        clanDiv.setAttribute("draggable", true) 
        clanDiv.addEventListener('dragstart', drag)
        clanDiv.innerHTML = `${this.dine_bizaad_name} <br> (${this.english_name})`
        clanPlaceHolder.appendChild(clanDiv)
        return clanPlaceHolder
    }


}