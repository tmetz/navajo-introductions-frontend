class Groups {
    constructor() {
        this.groups = []
        this.adapter = new ClanGroupsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadGroups()
    }

    fetchAndLoadGroups() {
        this.adapter.getGroups().then(groups => {
            console.log(groups)
        })
    }
}