class Groups {
    constructor() {
        this.groups = []
        this.adapter = new ClanGroupsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadGroups()
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
        const groupsString = this.groups.map(group => `${group.name}<br>`).join('')
        const groupsContainer = document.getElementById('clan-groups-container')
        groupsContainer.innerHTML = `
            ${groupsString}
        `
        
    }
}