class ClanGroupsAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/api/v1/clan_groups'
    }

    getGroups() {
        return fetch(this.baseURL).then(res => res.json()
        )
    }
}

adapter = new ClanGroupsAdapter()

const groups = adapter.getGroups()

