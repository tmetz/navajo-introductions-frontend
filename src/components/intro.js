class Intro {
    constructor() {
        this.clansContainer = document.getElementById('clan-view-container')
    }

    constructIntro() {
        const motherClanID = document.getElementById("mother").childNodes[0].id.slice(5)
        const fatherClanID = document.getElementById("father").childNodes[0].id.slice(5)
        const maternalGrandpaClanID = document.getElementById("maternal-grandpa").childNodes[0].id.slice(5)
        const paternalGrandpaClanID = document.getElementById("paternal-grandpa").childNodes[0].id.slice(5)

        const motherClanName = document.getElementById("mother").childNodes[0].attributes["name"].value
        const fatherClanName = document.getElementById("father").childNodes[0].attributes["name"].value
        const maternalGrandpaClanName = document.getElementById("maternal-grandpa").childNodes[0].attributes["name"].value
        const paternalGrandpaClanName = document.getElementById("paternal-grandpa").childNodes[0].attributes["name"].value

        const clanStrings = []

        clanStrings[0] = 'Yá’át’ééh.  Shí éí '

        clanStrings[1] = motherClanName + ' nishłį́'

        clanStrings[2] = fatherClanName + ' bashishchiin'
        

        clanStrings[3] = maternalGrandpaClanName + ' dashicheii'
        
        clanStrings[4] = paternalGrandpaClanName + ' dashinalí'
        
        console.log(clanStrings)
        const clanString = clanStrings.join(' ')
        console.log(clanString)
        this.clansContainer.style.backgroundColor = "#ffffff"
        this.clansContainer.innerHTML = `${clanString}`
    }

}

/*

 (Hello). 

 (name) yinishyé (I am called ... ) 

*/