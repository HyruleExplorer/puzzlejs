"use strict";

var level = 0;
var scatola1 = document.getElementById("box1");
var scatola2 = document.getElementById("box2");
var scatola3 = document.getElementById("box3");
var scatola4 = document.getElementById("box4");
var scatola5 = document.getElementById("box5");
var scatola6 = document.getElementById("box6");
var scatola7 = document.getElementById("box7");
var scatola8 = document.getElementById("box8");
var scatola9 = document.getElementById("box9");

var scatola1Clone = scatola1.cloneNode("false");
var scatola2Clone = scatola2.cloneNode("false");
var scatola3Clone = scatola3.cloneNode("false");
var scatola4Clone = scatola4.cloneNode("false");
var scatola5Clone = scatola5.cloneNode("false");
var scatola6Clone = scatola6.cloneNode("false");
var scatola7Clone = scatola7.cloneNode("false");
var scatola8Clone = scatola8.cloneNode("false");
var scatola9Clone = scatola9.cloneNode("false");

var scatole = [scatola1,scatola2,scatola3,scatola4,scatola5,scatola6,scatola7,scatola8,scatola9];
var scatoleCloni =
    [scatola1Clone,scatola2Clone,scatola3Clone,scatola4Clone,scatola5Clone,scatola6Clone,scatola7Clone,scatola8Clone,scatola9Clone];

var attached = false;

function veil() {
    var map1 = document.getElementById("map1");
    var map2 = document.getElementById("map2");
    var msg = document.getElementById("messaggio");
    map1.style.backgroundImage = "";
    map2.style.backgroundImage = "";
    msg.innerHTML = "";
}
function unveil() {
    var map1 = document.getElementById("map1");
    var map2 = document.getElementById("map2");
    map1.style.backgroundImage = "url(img/puzzle"+level+".png)";
    map2.style.backgroundImage = "url(img/puzzle"+level+".png)";
}
function unveilTimed(){
    unveil();
    window.setTimeout("veil();", 5000);
    var msg = document.getElementById("messaggio");
    window.setTimeout(function() {msg.innerHTML=' ';}, 5000);
    window.setTimeout(function() {msg.innerHTML='1';}, 4000);
    window.setTimeout(function() {msg.innerHTML='2';}, 3000);
    window.setTimeout(function() {msg.innerHTML='3';}, 2000);
    window.setTimeout(function() {msg.innerHTML='4';}, 1000);
    window.setTimeout(function() {msg.innerHTML='5';}, 0);
}


function checkPuzzle() {

    var msg = document.getElementById("messaggio");
    if(level<=3)
    {
        if( scatola1.style.left>="504" && scatola1.style.left<="520" && scatola1.style.top>="248" && scatola1.style.top<="264"
            && scatola2.style.left>="568" && scatola2.style.left<="584" && scatola2.style.top>="248" && scatola2.style.top<="264"
                && scatola3.style.left>="504" && scatola3.style.left<="520" && scatola3.style.top>="312" && scatola3.style.top<="328"
                    && scatola4.style.left>="568" && scatola4.style.left<="584" && scatola4.style.top>="312" && scatola4.style.top<="328" )
        {
            msg.innerHTML = "Bravo! Hai completato il Puzzle!";
            msg.style.color = "green";
            resetPiecesSoft();
            unveil();
        }
        else
        {
            msg.innerHTML = "Prova ancora!";
            msg.style.color = "red";
        }
    }
    else if(level>=4)
    {
        if(    scatola1.style.left>="504" && scatola1.style.left<="520" && scatola1.style.top>="248" && scatola1.style.top<="264"
            && scatola2.style.left>="568" && scatola2.style.left<="584" && scatola2.style.top>="248" && scatola2.style.top<="264"
            && scatola3.style.left>="632" && scatola3.style.left<="648" && scatola3.style.top>="248" && scatola3.style.top<="264"
                && scatola4.style.left>="504" && scatola4.style.left<="520" && scatola4.style.top>="312" && scatola4.style.top<="328"
                && scatola5.style.left>="568" && scatola5.style.left<="584" && scatola5.style.top>="312" && scatola5.style.top<="328"
                && scatola6.style.left>="632" && scatola6.style.left<="648" && scatola6.style.top>="312" && scatola6.style.top<="328"
                    && scatola7.style.left>="504" && scatola7.style.left<="520" && scatola7.style.top>="376" && scatola7.style.top<="392"
                    && scatola8.style.left>="568" && scatola8.style.left<="584" && scatola8.style.top>="376" && scatola8.style.top<="392"
                    && scatola9.style.left>="632" && scatola9.style.left<="648" && scatola9.style.top>="376" && scatola9.style.top<="392"
          )
        {
            msg.innerHTML = "Bravo! Hai completato il Puzzle!";
            msg.style.color = "green";
            resetPiecesSoft();
            unveil();
        }
        else
        {
            msg.innerHTML = "Prova ancora!";
            msg.style.color = "red";
        }
    }
    console.log("check puzzle: "+msg.innerHTML+". Livello: "+level);

}

function changeLevel(myLevel) {

    level = myLevel;
    var map1 = document.getElementById("map1");
    var map2 = document.getElementById("map2");
    map1.style.backgroundImage = "";
    map2.style.backgroundImage = "";

    console.log("change level. Livello: "+level);
    if(level<=3)
    {
        resetPieces(level);
        scatola1.style.backgroundImage = "url(img/ul"+level+".png)";
        scatola2.style.backgroundImage = "url(img/ur"+level+".png)";
        scatola3.style.backgroundImage = "url(img/dl"+level+".png)";
        scatola4.style.backgroundImage = "url(img/dr"+level+".png)";
    }
    else if(level>3)
    {
        resetPieces(level);
        scatola1.style.backgroundImage = "url(img/"+level+"_"+"1.png)";
        scatola2.style.backgroundImage = "url(img/"+level+"_"+"2.png)";
        scatola3.style.backgroundImage = "url(img/"+level+"_"+"3.png)";
        scatola4.style.backgroundImage = "url(img/"+level+"_"+"4.png)";
        scatola5.style.backgroundImage = "url(img/"+level+"_"+"5.png)";
        scatola6.style.backgroundImage = "url(img/"+level+"_"+"6.png)";
        scatola7.style.backgroundImage = "url(img/"+level+"_"+"7.png)";
        scatola8.style.backgroundImage = "url(img/"+level+"_"+"8.png)";
        scatola9.style.backgroundImage = "url(img/"+level+"_"+"9.png)";
    }

}

function myListener(event,element) {
    if(attached){
        element.style.left = (event.clientX - 32);
        element.style.top = (event.clientY - 32);
        element.removeEventListener('mousemove', function(e){ myListener(e,element); } );
        //console.log("elemento trascinato: "+element.innerHTML);
        //element.innerHTML = (element.style.left+"-"+element.style.top);
    }
    else
        return;
}

function trascinaStart(event,element) {
    attached = true;
    element.addEventListener('mousemove', function(e){ myListener(e,element); } );
    //console.log("trascinaStart...");
}

function trascinaEnd(event,element,clone) {
    attached = false;

    element.removeEventListener('mousemove', function(e){ myListener(e,element); } );

    element.removeEventListener("mousedown", function(e){ trascinaStart(e,element); } );
    element.removeEventListener("mouseup", function(e){ trascinaStart(e,element); } );

    clone.style.left = element.style.left;
    clone.style.top = element.style.top;
    clone.style.zIndex = 100;
    element.parentNode.replaceChild(clone,element);
    clone.parentNode.replaceChild(element,clone);
    console.log("trascinaEnd!");
}

function resetPiecesSoft() {

    scatola1.style.left = 530;
    scatola1.style.top = 128;

    scatola3.style.left = 530 + 64;
    scatola3.style.top = 128;

    scatola2.style.left = 530 + 128;
    scatola2.style.top = 128;

    scatola4.style.left = 530 + 192;
    scatola4.style.top = 128;

    scatola5.style.left = 530 - 64;
    scatola5.style.top = 128;

    scatola6.style.left = 530 - 128;
    scatola6.style.top = 128;

    scatola7.style.left = 530 - 192;
    scatola7.style.top = 128;

    scatola8.style.left = 530 + 320;
    scatola8.style.top = 128;

    scatola9.style.left = 530 + 256;
    scatola9.style.top = 128;
}

function resetPieces(level) {
    var i = 0;
    var map1 = document.getElementById("map1");
    var map2 = document.getElementById("map2");

    console.log("reset pieces. Livello: "+level);
    if(level>3){
        map1.style.visibility = "hidden";
        map2.style.visibility = "visible";
        for(i=0; i < scatole.length; ++i) {
            scatole[i].style.visibility = "visible";
        }
    } else if(level<=3) {
        map1.style.visibility = "visible";
        map2.style.visibility = "hidden";
        for(i=4; i < scatole.length; ++i) {
            scatole[i].style.visibility = "hidden";
        }
    }

    resetPiecesSoft();

    var msg = document.getElementById("messaggio");
    msg.innerHTML = "";
}


function start() {

    var myLevel = level;
    changeLevel(myLevel);
    resetPieces(myLevel);
    var i=0;
    console.log("Puzzle partito. Livello: "+myLevel)
    //debugger;

    function myAddEventListener(i) {
        scatole[i].addEventListener( "mousedown", function(e) { trascinaStart(e,scatole[i]); } );
        scatole[i].addEventListener( "mouseup", function(e) { trascinaEnd(e, scatole[i], scatoleCloni[i]); } );
    }

    for(i=0;i<scatole.length;i++){
        myAddEventListener(i);
    }
};

window.onload = start();
