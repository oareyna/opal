clicks = "😊"
let x=0


document.getElementById("_count").innerHTML = clicks

function clicked(){
    clicks= clicks+"❤️"
    x+=1
    /*
    if (x>0) {
        greeting = hi
    }
    */
    document.getElementById("_count").innerHTML = clicks
}

function clickaroo(){
    clicks= clicks+"🐈"
    document.getElementById("_count").innerHTML = clicks
}
function clickaloo(){
    clicks= clicks+"🐔"
    document.getElementById("_count").innerHTML = clicks
}

function clickapoo(){
    clicks= clicks+"🐶"
    document.getElementById("_count").innerHTML = clicks
}
