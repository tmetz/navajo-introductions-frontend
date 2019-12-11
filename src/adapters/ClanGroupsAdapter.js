// adapter is the same as a service.  Its job is to communicate
// with the API

class ClanGroupsAdapter {
    constructor() {
        this.baseURL = 'https://navajo-introductions-api.herokuapp.com/api/v1/clan_groups'
    }

    getGroups() {
        return fetch(this.baseURL).then(res => res.json())
    }
}


