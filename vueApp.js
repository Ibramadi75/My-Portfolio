const vm = Vue.createApp({
    data() {
        return {
            i: 0,
            breakPoint1:0,
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
                  title: "J'ai réalisé un site pour restaurant adaptatif clefs en main",
                  urlTravaux: "trv01.html",
                },
                {
                  id: 1,
                  title: "Mon stage chez All My Com",
                  urlTravaux: "trv02.html",
                },
                {
                  id: 2,
                  title: "J'ai réalisé un site qui permet de consulter le cours des différentes cryptomonnaies en direct",
                  urlTravaux: "trv01.html",
                }
            ],
            socialMedias: [
                {
                    id: 0,
                    label: 'github',
                    url: 'https://github.com/Ibramadi75',
                    iconUrl: 'github.png'
                },
                {
                    id: 1,
                    label: 'linkedin',
                    url: 'https://www.linkedin.com/in/ibrahim-madi-374ab3227/',
                    iconUrl: 'linkedin.png'
                },
                {
                    id: 2,
                    label: 'email',
                    url: 'mailto:ibrahim75madi@gmail.com',
                    iconUrl: 'email.png'
                }
            ],
            screenWidth: $(document).width(),
            screenHeight: $(document).height()
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
                    let el = 'travauxSeeMore';
                    $('#' + el).css('animation-delay', value + 'ms')
                }else if(this.headerItems[3].isSelected){
                    let value = 0;
                    for(let i = 0; i < 10; i++){
                        let el = 'veille' + i;
                        $('#' + el).css('animation-delay', value + 'ms')
                        value += 100;
                    }
                }
                else if(this.headerItems[4].isSelected){
                    let value = 0;
                    for(let i = 0; i < 10; i++){
                        let el = 'socialMedia' + i;
                        $('#' + el).css('animation-delay', value + 'ms')
                        value += 100;
                    }
                }
              }, "10")
        },
        // getting data from the api
        getApi(){
            axios
            .get("monJson.json")
            .then(
                (reponse) => {(this.veilles = reponse.data  )}
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }
    },
    beforeMount(){
        this.getApi(),
        console.log('this.screenHeight : ' + this.screenHeight),
        console.log('this.screenWidth : ' + this.screenWidth)
    }
}).mount('#app')
