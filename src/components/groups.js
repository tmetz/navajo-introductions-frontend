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
            groups.forEach(group => this.groups.push(group))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const groupsContainer = document.getElementById('clan-groups-container')
        groupsContainer.innerHTML='eferfe'
        
    }
}