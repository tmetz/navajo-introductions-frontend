class Groups {
    constructor() {
        this.groups = []
        this.adapter = new ClanGroupsAdapter()
        this.initBindings()
        this.fetchAndLoadGroups()
    }

    initBindings() {
        this.groupsContainer = document.getElementById('clan-groups-container')
    }

    fetchAndLoadGroups() {
        this.adapter
        .getGroups()
        .then(groups => {
            groups.forEach(group => this.groups.push(new Group(group)))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const buttons = this.groups.map(group => group.renderButton())
        buttons.forEach(button => {
            this.groupsContainer.appendChild(button)
        }) 
    }

}