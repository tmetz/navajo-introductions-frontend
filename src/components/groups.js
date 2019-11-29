class Groups {
    constructor() {
        this.groups = []
        this.adapter = new ClanGroupsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadGroups()
    }

    initBindingsAndEventListeners() {
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
        //const groupsString = this.groups.map(group => group.renderButton()).join('')
        const buttons = this.groups.map(group => group.renderButton())
        buttons.forEach(button => {
            this.groupsContainer.appendChild(button)
        }) 
    }

}