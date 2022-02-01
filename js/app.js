var number = 20;

function eleMaker (name, val, hurt){
    var ele = document.createElement( "div");
    ele.innerHTML=name;
    ele.addEventListener("click", function(){
        increase(val);
        })
    document.body.querySelector(".main").appendChild(ele);
}

function increase (val){
    number=number-val;
    document.body.querySelector(".number").innerHTML=number;
}

document.body.querySelector(".clicker").addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".damage").innerHTML="";
    document.body.querySelector(".number").innerHTML=number;
    eleMaker("Let's Get Nuts!", 4);

});

document.body.querySelector(".clicker2").addEventListener("click", function(){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".number").innerHTML=number;
    eleMaker("When will they let me die?", 2);
});

document.body.querySelector(".clicker3").addEventListener("click", function(){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".number").innerHTML=number;
    eleMaker("Great Lakes Avengers Assemble!", 2);
});

document.body.querySelector(".clicker4").addEventListener("click", function(){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".number").innerHTML=number;
    eleMaker("Come right in...for pain!", 2);
});


