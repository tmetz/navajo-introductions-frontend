class Group {
    constructor(groupJSON) {
        this.id = groupJSON.id
        this.name = groupJSON.name
        this.color = groupJSON.color
        this.clans = []
        this.adapter = new ClansAdapter()
    }

    renderButton() {
        const button = document.createElement('label')
        const radio = document.createElement('input')
        radio.setAttribute("type", "radio")
        radio.setAttribute("name", "groups")
        radio.setAttribute("autocomplete", "off")
        radio.addEventListener('click', this.fetchAndLoadClans.bind(this))
        radio.setAttribute("id", this.id)
        button.innerHTML = `${this.id}`
        button.className = 'btn btn-secondary'
        button.style.color = "#ffffb3"
        button.style.backgroundColor = `"${this.color}"`
        button.appendChild(radio)
        return button
    }

    fetchAndLoadClans(event) {
        this.adapter
        .getClans(event.target.id)
        .then(group => {
            group.clans.forEach(clan => this.clans.push(clan))
        })
        .then(() => {
            this.render()  
        })  
    }

    render() {

    }

}