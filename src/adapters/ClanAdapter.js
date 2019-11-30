class ClanAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/api/v1/clans/'
    }

    updateClanCount(clanID) {
        let configurationObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        
        return fetch(this.baseURL + `${clanID}`, configurationObject).then(res => res.json()
        )
    }
}