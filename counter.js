
function increment(){
    let counter = document.getElementById("value").innerText;
    counter = parseInt(counter) + 1
    document.getElementById("value").innerText = counter;
}

function decrement(){
    let counter = document.getElementById("value").innerText;
    if (counter == 0){
        alert("Passengers cannot be nagative");
    }
    else{
        counter -= 1;
    }
    document.getElementById("value").innerText = counter;
}

function save(){
    let counter = document.getElementById("value").innerText
    document.getElementById("previous").innerText += " -"+String(counter)
    document.getElementById("value").innerText = 0    
}
 