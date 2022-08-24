const vm = Vue.createApp({
    data() {
        return {
            i: 0,
            headerItems: [
                {
                    label : "Accueil",
                    isSelected : false,
                    urlImg : "home.png",
                    backgroundColor: "#e2e2e2"
                },
                {
                    label : "Travaux",
                    isSelected : false,
                    urlImg : "working.png",
                    backgroundColor: "#ECF7E8"
                },{
                    label : "Compétences",
                    isSelected : false,
                    urlImg : "skills.png",
                    backgroundColor: "#E8EBF7"
                },{
                    label : "Veille",
                    isSelected : false,
                    urlImg : "la-technologie.png",
                    backgroundColor: "#F2E8F7"
                },{
                    label : "Contact",
                    isSelected : false,
                    urlImg : "contacts.png",
                    backgroundColor: "#F7E8E8"
                }
            ],
            headerItemsAllFalse : true,
            mesTravaux : [
                {
                  id: 0,
                  title: "J'ai réalisé la maquette d'un site de NFT",
                  urlTravaux: "trv00.html",
                },
                {
                  id: 1,
                  title: "J'ai réalisé un site pour restaurant adaptatif clefs en main",
                  urlTravaux: "trv01.html",
                },
                {
                  id: 2,
                  title: "Une liste de mes CheatSheets perso, maintenues et mises à jours régulièrement par mes soins",
                  urlTravaux: "trv02.html",
                },
                {
                  id: 3,
                  title: "J'ai réalisé un site qui permet de consulter le cours des différentes cryptomonnaies en direct",
                  urlTravaux: "trv01.html",
                },
            ],
            socialMedias: [
                {
                    label: 'github',
                    url: 'https://github.com/Ibramadi75'
                },
                {
                    label: 'email',
                    url: 'mailto:ibrahim75madi@gmail.com'
                }
            ],
            mesVeilles: [
                {
                    id:0,
                    title: 'Les nouveautés de Php 8.2',
                    pageUrl: 'Veille-Php.html',
                    iconUrl: 'php.png',
                    lastUpdated: new Date()
                },
                {
                    id:1,
                    title: 'Php',
                    pageUrl: 'Veille-Php.html',
                    iconUrl: '',
                    lastUpdated: new Date()
                },
                {
                    id:2,
                    title: 'Php',
                    pageUrl: 'Veille-Php.html',
                    iconUrl: '',
                    lastUpdated: new Date()
                }
            ]
        }
    },
    methods:{
        MenuItemSelected(item){
            for (let i in this.headerItems) {
                isSelected = this.headerItems[i].isSelected;
                label = this.headerItems[i].label;
                if (item == label){
                    if (!this.headerItems[i].isSelected){
                        for (let i in this.headerItems){
                            this.headerItems[i].isSelected = false,
                            this.headerItemsAllFalse = true
                        }
                        this.headerItems[i].isSelected = true,
                        this.headerItemsAllFalse = false,
                        $("#img0").attr("src", "images/" + this.headerItems[i].urlImg),
                        $("body").css("background-color", this.headerItems[i].backgroundColor)
                    }
                    
                }
            }
            // lancer l'animation de délai pour la catégorie 'travaux' 
            setTimeout(() => {
                if(this.headerItems[1].isSelected){
                    let value = 0;
                    for(let i in this.mesTravaux){
                        let el = 'travaux' + i;
                        $('#' + el).css('animation-delay', value + 'ms')
                        value += 100;
                    }
                }else if(this.headerItems[3].isSelected){
                    let value = 0;
                    for(let i in this.mesTravaux){
                        let el = 'veille' + i;
                        $('#' + el).css('animation-delay', value + 'ms')
                        value += 100;
                    }
                }
              }, "10")
        }
    },
    mounted(){
        
    }
}).mount('#app')