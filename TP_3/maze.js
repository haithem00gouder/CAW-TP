var begin = false ;
let sChecked = false;
let isLoser = false;
let isWinned = false;



function changecolor(){
    if (sChecked && !isLoser && !isWinned) {
        isLoser = true;
        var x= document.getElementsByClassName("boundary");
        var i;
        for(i=0;i<x.length;i++){
            x[i].style.backgroundColor="red";
        }
        document.getElementById('status').textContent = "You lose :( "
        setTimeout(() => {
            alert("hhhh loser");
        })
        sChecked = true ;
    }
}

function restart(){
    isWinned = false;
    sChecked = true;
    begin = true ;
    
    document.getElementById('status').textContent = "Move your mouse over the &apos;S&apos; to begin. "
    document.getElementById('status').style.color = "black"
    document.body.style.cursor="grab";
    var x= document.getElementsByClassName("boundary");
    var i;
    for(i=0;i<x.length;i++){
        x[i].style.backgroundColor="#eeeeee";
    }
    isLoser = false;
    
}

function win() {
    if (begin && !isLoser) {
        isWinned = true;
        document.getElementById('status').textContent = "You won :) "
        setTimeout(() => {
           // alert("congratulations you won");
        })
        begin = false ;
    } else {
        document.getElementById('status').textContent = "hhhhhh sharper "
        //alert("hhhh sharper");
    }
    
}


const boundaries = document.querySelectorAll(".boundary");
boundaries.forEach(boundary => {
    boundary.addEventListener("mouseover", changecolor);
});

document.getElementById("end").addEventListener("click", win);
document.getElementById("start").addEventListener("click", restart);


