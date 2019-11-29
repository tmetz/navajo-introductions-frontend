class ClanAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/api/v1/clans/'
    }

    getClan(clanID) {
        return fetch(this.baseURL + `${clanID}`).then(res => res.json()
        )
    }
}