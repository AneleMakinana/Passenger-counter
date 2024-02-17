let count = 0;

document.getElementById("add-btn").onclick = function add(){
    count+=1;
    document.getElementById("count-el").innerHTML = count;
}

document.getElementById("reset-btn").onclick = function reset(){
    count=0;
    document.getElementById("count-el").innerHTML = count;
}

document.getElementById("save-btn").onclick = function save(){
    count=count + " - ";
    document.getElementById("save-el").innerHTML += count;
}