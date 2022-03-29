window.addEventListener("load", init);

function init () {
    tabla();
}

function ID (elem) {
    return document.getElementById(elem);
}

function $ (elem) {
    return document.querySelectorAll(elem);
}

function tabla () {
    var txt="";
    for (let i = 1; i <= 64; i++) {
            txt += '<div style="background-color:black;" "></div>';
            txt += '<div></div>';
            }
            
        }
        ID("container").innerHTML=txt;

    }