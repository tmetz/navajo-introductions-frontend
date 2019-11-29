class Group {
    constructor(groupJSON) {
        this.id = groupJSON.id
        this.name = groupJSON.name
        this.color = groupJSON.color
        this.clans = []
    }

    renderButton() {
        return `
        <label class="btn btn-secondary" style="background-color: ${this.color}; color: #ffffb3">
            <input type="radio" name="groups" id="${this.id}" autocomplete="off">${this.id}
        </label>
        `
    }
}