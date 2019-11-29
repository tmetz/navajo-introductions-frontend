class Intro {
    constructor() {
        this.adapter = new ClanAdapter()
    }

    constructIntro() {
        const motherClanID = document.getElementById("mother").childNodes[0].id.slice(5)
        const clanStrings = []
        this.adapter
        .getClan(motherClanID)
        .then(clan => {
            clanStrings.push(clan.dine_bizaad_name + ' nishłį́')
        })
        console.log(clanStrings)
    }

}

/*

Yá’át’ééh (Hello). 
Then they move into their name.

Shí éí (name) yinishyé (I am called ... )
Father's clan bashishchiin

Maternal grandfather's clan dashicheii

Paternal grandfather's clan dashinalí
*/