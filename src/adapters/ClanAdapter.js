class ClanAdapter {
    constructor() {
        this.baseURL = 'https://navajo-introductions-api.herokuapp.com/api/v1/clans/'
    }

    updateClanCount(clanID) {
        let configurationObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        
        return fetch(this.baseURL + clanID, configurationObject)
        .then(res => res.json())
    }

    getTop() {
        return fetch(this.baseURL + 'top').then(res => res.json())
    }
}