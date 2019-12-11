class ClansAdapter {
    constructor() {
        this.baseURL = 'https://navajo-introductions-api.herokuapp.com/api/v1/clan_groups/'
    }

    getClans(groupID) {
        return fetch(this.baseURL + `${groupID}`).then(res => res.json())
    }
}