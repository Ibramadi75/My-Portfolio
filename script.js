let body = document.querySelector("body");
let image = document.getElementById("img0");
let lside = document.getElementById("lside");

$(image).css("right", "15vw");
$("#lside").css("left", "12vw");
$("#img0").attr("src", "images/home.png");

let everHappened = false;

$("#accueil").mouseenter(function () {
  $(body).css("background-color", "#e2e2e2");
  $("*").css("color", "black");
  for (i = 0; i <= 10; i++) {
    $("#img" + i).attr("src", "images/home.png");
  }

  $("#lside").html(`<h3>Bienvenue sur mon portfolio</h3>
  <p>Je suis Ibrahim, étudiant en informatique et futur développeur web.</p>
  <div id='frise'>
      <div id='chronologie'>
          <div class='barProgress'>

          </div>
          <div class='circle'>

          </div>
          <div class='bar'>

          </div>
          <div class='circle'>

          </div>
      </div>  
      <div id='event'>
          <p style='font-size:16px; margin-top:90px; margin-bottom:80px;'> 
              <span style='font-size:18px; font-weight:bold;'>BTS Services Informatiques aux Organisations</span> 2021-2023, LGT Louis Armand, Spécialité Solution Logiciel, Application
          </p>
          <p style='font-size:16px; margin-bottom:20px;'>
              <span style='font-size:18px; font-weight:bold;'>Baccalauréat général</span> 2020-2021, Lycée Emmanuel Mounier, Spécialité Mathématique, Sciences Économiques et sociale, Science et Vie de la Terre
          </p>
      </div>
  </div>`);

  $("#lside").css("opacity", "1");
});

$("#travaux").mouseenter(function () {
  $(body).css("background-color", "#DAEAF1");

  $("#img0").attr("src", "images/working.png");
  $("#img0").css("opacity", "1");

  mesTravaux = [
    {
      id: 0,
      title: "J'ai réalisé la maquette d'un site de NFT",
      link: "mesTravaux/trv00.html",
    },
    {
      id: 1,
      title: "J'ai réalisé un site pour restaurant adaptatif clefs en main",
      link: "mesTravaux/trv01.html",
    },
    {
      id: 2,
      title: "Une liste de mes CheatSheets perso, maintenues et mises à jours régulièrement par mes soins",
      link: "mesTravaux/trv02.html",
    },
    {
      id: 3,
      title: "J'ai réalisé un site qui permet de consulter le cours des différentes cryptomonnaies en direct",
      link: "mesTravaux/trv01.html",
    },
  ];

  $("#lside").html("<ul>");

  mesTravaux.forEach((travail, index) => {
    $("#lside").append(
      `
    <a href=''><li>
      ` +
        travail.title +
        `
      <img src="images/next.png" style='max-width:15px;position:absolute;right:70px;margin-left:20px;'></li></a>
    `
    );
    console.log(travail);
  });
  $("#lside").append("</ul>");
});

$("#skills").mouseenter(function () {
  $(body).css("background-color", "#f4fde4");

  $("#img0").attr("src", "images/skills.png");
  $("#img0").css("opacity", "1");

  $("#lside").html(`
    <h3 class="list-heading">Les languages web</h3>
            <ul class="compUl">
                <li>Html&Css <div  id="htmlcss-barlevel" class="barLevel">
                    <div class="barLevelQuarter"></div>
                    <div class="barLevelQuarter"></div>
                    <div class="barLevelQuarter"></div>
                    <div class="last-barLevelQuarter barLevelQuarter"></div>
                </div></li>
                <li>JavaScript<div  id="javascript-barlevel" class="barLevel">
                    <div class="barLevelQuarter"></div>
                    <div class="barLevelQuarter"></div>
                    <div class="barLevelQuarter"></div>
                    <div class="last-barLevelQuarter barLevelQuarter"></div>
                </div></li>
            </ul>
            <h3 class="list-heading">Les frameworks</h3>
            <ul class="compUl">
                <li>VueJs <div  id="vueJs-barlevel" class="barLevel">
                    <div class="barLevelQuarter"></div>
                    <div class="barLevelQuarter"></div>
                    <div class="barLevelQuarter"></div>
                    <div class="last-barLevelQuarter barLevelQuarter"></div>
                </div></li>
                <li>JQuery<div  id="jQuery-barlevel" class="barLevel">
                    <div class="barLevelQuarter"></div>
                    <div class="barLevelQuarter"></div>
                    <div class="barLevelQuarter"></div>
                    <div class="last-barLevelQuarter barLevelQuarter"></div>
                </div></li>
            </ul>
            <h4 class="list-heading">Autres compétences :</h4>
            <ul>
                <li>GIT</li>
                <li>Python</li>
                <li>Wordpress (Divi)</li>
                <li>C#</li>
                <li id="write-bar">|</li>
            </ul>
    `);
    if(everHappened) {
      $('#lside').append(`
      <style>
            #htmlcss-barlevel::before{
                animation:none;
            }
            #javascript-barlevel::before{
              animation:none;
            }
            #jQuery-barlevel::before{
              animation:none;
            }
            #vueJs-barlevel::before{
              animation:none;
            }
            </style>
      `)
    }
    everHappened = true;
});

$("#veille").mouseenter(function () {
  $(body).css("background-color", "#DBDFFD");

  for (i = 0; i <= 10; i++) {
    $("#img" + i).attr("src", "images/la-technologie.png");
    $("#img" + i).css("opacity", "1");
  }

});

$("#contact").mouseenter(function () {
  $(body).css("background-color", "#c1eef9");

  for (i = 0; i <= 10; i++) {
    $("#img" + i).attr("src", "images/contacts.png");
    $("#img" + i).css("opacity", "1");
  }
});
