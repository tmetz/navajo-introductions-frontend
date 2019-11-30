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

        const visitorName = document.getElementById("visitor-name").value

        const clanStringsDine = []
        const clanStringsEnglish = []

        clanStringsDine[0] = 'Yá’át’ééh.<br>  Shí éí ' + visitorName + ' yinishyé.<br>'

        clanStringsDine[1] = motherClanName + ' nishłį́. <br>'

        clanStringsDine[2] = fatherClanName + ' bashishchiin. <br>'
        

        clanStringsDine[3] = maternalGrandpaClanName + ' dashicheii. <br>'
        
        clanStringsDine[4] = paternalGrandpaClanName + ' dashinalí. <br>'

        clanStringsEnglish[0] = 'Hello.<br>  I am called [My name is] ' + visitorName + '.<br>'

        clanStringsEnglish[1] = 'I am ' + motherClanName + '. <br>'

        clanStringsEnglish[2] = 'I am born for ' + fatherClanName + '.<br>'
        

        clanStringsEnglish[3] = 'My maternal grandfather is ' + maternalGrandpaClanName + '. <br>'
        
        clanStringsEnglish[4] = 'My paternal grandfather is ' + paternalGrandpaClanName + '. <br>'

        const clanStringDine = clanStringsDine.join(' ')
        const clanStringEnglish = clanStringsEnglish.join(' ')
        this.clansContainer.style.backgroundColor = "#ffffff"
        this.clansContainer.innerHTML = `${clanStringDine} <br><br> ${clanStringEnglish}`
    }

}
