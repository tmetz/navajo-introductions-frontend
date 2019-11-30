class ClansAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/api/v1/clan_groups/'
    }

    getClans(groupID) {
        return fetch(this.baseURL + `${groupID}`).then(res => res.json())
    }
}