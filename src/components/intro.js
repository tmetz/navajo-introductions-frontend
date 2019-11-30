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
            this.adapter.updateClanCount(id)
        });
    }

    copyToClipboard(event) {
        const text = document.getElementById("clanTextArea")
        text.select()
        text.setSelectionRange(0, 99999)
        document.execCommand("copy")
        alert("Copied to clipboard")
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

        clanStringsDine[0] = 'Yá’át’ééh.\nShí éí ' + visitorName.value + ' yinishyé.\n'
        clanStringsDine[1] = motherClanName + ' nishłį́. \n'
        clanStringsDine[2] = fatherClanName + ' bashishchiin. \n'
        clanStringsDine[3] = maternalGrandpaClanName + ' dashicheii, áádóó \n'
        clanStringsDine[4] = paternalGrandpaClanName + ' dashinalí. \n'


        clanStringsEnglish[0] = 'Hello.\nI am called [My name is] ' + visitorName.value + '.\n'
        clanStringsEnglish[1] = 'I am from ' + motherClanName + '. \n'
        clanStringsEnglish[2] = 'I am born for ' + fatherClanName + '.\n'
        clanStringsEnglish[3] = 'My maternal grandfather is from ' + maternalGrandpaClanName + ', and \n'
        clanStringsEnglish[4] = 'My paternal grandfather is from ' + paternalGrandpaClanName + '. \n'

        const clanStringDine = clanStringsDine.join('')
        const clanStringEnglish = clanStringsEnglish.join('')
        this.clansContainer.style.backgroundColor = "#ffffff"
        this.clansContainer.innerHTML = `
            <textarea rows = "15" cols = "35" id = "clanTextArea">${clanStringDine} \n${clanStringEnglish}
            </textarea><br><br>`

        const button = document.createElement('button')
        button.innerText = "Copy text"
        button.className = 'btn btn-secondary btn-sm'
        button.addEventListener('click', this.copyToClipboard.bind(this))
        this.clansContainer.appendChild(button)
        visitorName.value = ''
    }

}
