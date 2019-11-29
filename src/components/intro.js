class Intro {
    constructor() {
        this.adapter = new ClanAdapter()
    }

    constructIntro() {
        const motherClanID = document.getElementById("mother").childNodes[0].id.slice(5)
        const fatherClanID = document.getElementById("father").childNodes[0].id.slice(5)
        const maternalGrandpaClanID = document.getElementById("maternal-grandpa").childNodes[0].id.slice(5)
        const paternalGrandpaClanID = document.getElementById("paternal-grandpa").childNodes[0].id.slice(5)
        const clanStrings = []
        this.adapter
        .getClan(motherClanID)
        .then(clan => {
            clanStrings[0] = clan.dine_bizaad_name + ' nishłį́'
        })
        this.adapter
        .getClan(fatherClanID)
        .then(clan => {
            clanStrings[1] = clan.dine_bizaad_name + ' bashishchiin'
        })
        this.adapter
        .getClan(maternalGrandpaClanID)
        .then(clan => {
            clanStrings[2] = clan.dine_bizaad_name + ' dashicheii'
        })
        this.adapter
        .getClan(paternalGrandpaClanID)
        .then(clan => {
            clanStrings[3] = clan.dine_bizaad_name + ' dashinalí'
        })
        console.log(clanStrings)
    }

}

/*

Yá’át’ééh (Hello). 
Then they move into their name.

Shí éí (name) yinishyé (I am called ... ) 

*/