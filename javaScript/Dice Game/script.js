function start(){
    console.log("Game started");

    document.getElementById("rolldice1").disabled = false;
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;
}
function restart()
{
    window.location.reload();
}
function p1Play()
{
    console.log("Player1Playing");
    let score = Number(document.getElementById("p1Score").innerText);

    const DF = Math.floor(Math.random()*6)+1;

    // switch(DF){
    //     case 1: document.getElementById("p1dice").src = ""
    // }
    
    
    if(DF === 6){
        document.getElementById("rolldice1").disabled = true;
        document.getElementById("rolldice2").disabled = false;
    }else{
        score = score + DF;
        document.getElementById("p1Score").innerText = score;
    }
    
}
function p2Play()
{
    console.log("Player2Playing");
    let score = Number(document.getElementById("p2Score").innerText);

    const DF = Math.floor(Math.random()*6)+1;

    // shortCut of SwitchCase
    // document.getElementById("p1dice").src = `./`

    if(DF === 6){
        document.getElementById("rolldice1").disabled = false;
        document.getElementById("rolldice2").disabled = true;
    }else{
        score = score + DF;
        document.getElementById("p2Score").innerText = score;
    }  
}