class Clan {

    constructor(clanJSON) {
        this.english_name = clanJSON.english_name
        this.dine_bizaad_name = clanJSON.dine_bizaad_name
        this.id = clanJSON.id
    }

    renderClan() {
        const clanSpan = document.createElement('p')
        clanSpan.innerHTML = `${this.dine_bizaad_name}`
        return clanSpan
    }


}