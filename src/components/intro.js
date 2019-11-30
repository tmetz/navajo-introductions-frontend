class Intro {
    constructor() {
        this.clansContainer = document.getElementById('clan-view-container')
        this.topClansContainer = document.getElementById('top-clans')
        this.adapter = new ClanAdapter()
        this.fetchAndLoadTopClans()
    }

    fetchAndLoadTopClans() {
        const topClans = []
        this.adapter.getTop()
        .then(clans => {
            clans.forEach(clan => topClans.push(clan.dine_bizaad_name + ' (' + clan.english_name + ')<br>'))
        })
        .then(() => {
            this.topClansContainer.innerHTML = topClans.join(' ')  
        })
    }

    updateClanStats(clanIDs) {
        clanIDs.forEach(id => {
            this.adapter.updateClanCount(id).then(resp => {
                console.log(resp)
            })
        });
    }

    constructIntro() {
        const clanIDs = []
        clanIDs[0] = document.getElementById("mother").childNodes[0].id.slice(5)
        clanIDs[1] = document.getElementById("father").childNodes[0].id.slice(5)
        clanIDs[2] = document.getElementById("maternal-grandpa").childNodes[0].id.slice(5)
        clanIDs[3] = document.getElementById("paternal-grandpa").childNodes[0].id.slice(5)

        this.updateClanStats(clanIDs)
        this.fetchAndLoadTopClans()

        const motherClanName = document.getElementById("mother").childNodes[0].attributes["name"].value
        const fatherClanName = document.getElementById("father").childNodes[0].attributes["name"].value
        const maternalGrandpaClanName = document.getElementById("maternal-grandpa").childNodes[0].attributes["name"].value
        const paternalGrandpaClanName = document.getElementById("paternal-grandpa").childNodes[0].attributes["name"].value

        const visitorName = document.getElementById("visitor-name")

        const clanStringsDine = []
        const clanStringsEnglish = []

        clanStringsDine[0] = 'Yá’át’ééh.<br>  Shí éí ' + visitorName.value + ' yinishyé.<br>'

        clanStringsDine[1] = motherClanName + ' nishłį́. <br>'

        clanStringsDine[2] = fatherClanName + ' bashishchiin. <br>'
        
        clanStringsDine[3] = maternalGrandpaClanName + ' dashicheii, áádóó  <br>'
        
        clanStringsDine[4] = paternalGrandpaClanName + ' dashinalí. <br>'


        clanStringsEnglish[0] = 'Hello.<br>  I am called [My name is] ' + visitorName.value + '.<br>'

        clanStringsEnglish[1] = 'I am from ' + motherClanName + '. <br>'

        clanStringsEnglish[2] = 'I am born for ' + fatherClanName + '.<br>'

        clanStringsEnglish[3] = 'My maternal grandfather is from ' + maternalGrandpaClanName + ', and <br>'
        
        clanStringsEnglish[4] = 'My paternal grandfather is from ' + paternalGrandpaClanName + '. <br>'

        const clanStringDine = clanStringsDine.join(' ')
        const clanStringEnglish = clanStringsEnglish.join(' ')
        this.clansContainer.style.backgroundColor = "#ffffff"
        this.clansContainer.innerHTML = `${clanStringDine} <br><br> ${clanStringEnglish}`
        visitorName.value = ''
    }

}
