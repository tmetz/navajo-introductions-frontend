class Group {
    constructor(groupJSON) {
        this.id = groupJSON.id
        this.name = groupJSON.name
        this.color = groupJSON.color
        this.clans = []
    }

    renderButton() {
        return `${this.name}<br>`
    }
}