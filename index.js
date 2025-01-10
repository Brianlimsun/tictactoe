let btn1=document.querySelector(".b1");
let btn2=document.querySelector(".b2");
let btn3=document.querySelector(".b3");
let btn4=document.querySelector(".b4");
let btn5=document.querySelector(".b5");
let btn6=document.querySelector(".b6");
let btn7=document.querySelector(".b7");
let btn8=document.querySelector(".b8");
let btn9=document.querySelector(".b9");
let heading=document.querySelector(".title");
let reset=document.querySelector(".reset");
let chance= "X";
function  changeChance(){
    if(chance=="X"){
        chance="O";
    }else{
        chance="X"
    }
}
btn1.onclick=function(){
    btn1.innerText=chance;
    btn1.onclick=null;
    checkWin();
    changeChance();
}
btn2.onclick=function(){
    btn2.innerText=chance;
    btn2.onclick=null;
    checkWin();
    changeChance();
}

btn3.onclick=function(){
    btn3.innerText=chance;
    btn3.onclick=null;
    checkWin();
    changeChance();
}
btn4.onclick=function(){
    btn4.innerText=chance;
    btn4.onclick=null;
    checkWin();
    changeChance();
}
btn5.onclick=function(){
    btn5.innerText=chance;
    btn5.onclick=null;
    checkWin();
    changeChance();
}
btn6.onclick=function(){
    btn6.innerText=chance;
    btn6.onclick=null;
    checkWin();
    changeChance();
}
btn7.onclick=function(){
    btn7.innerText=chance;
    btn7.onclick=null;
    checkWin();
    changeChance();
}
btn8.onclick=function(){
    btn8.innerText=chance;
    btn8.onclick=null;
    checkWin();
    changeChance();
}
btn9.onclick=function(){
    btn9.innerText=chance;
    btn9.onclick=null;
    checkWin();
    changeChance();
}
reset.onclick=function(){
    location.reload();
}
function disable(){
    btn1.onclick=null;
    btn2.onclick=null;
    btn3.onclick=null;
    btn4.onclick=null;
    btn5.onclick=null;
    btn6.onclick=null;
    btn7.onclick=null;
    btn8.onclick=null;
    btn9.onclick=null;
}
function checkWin(){
    if(btn1.innerText==btn2.innerText&&
    btn1.innerText==btn3.innerText&&
    btn1.innerText!=''){
        heading.innerText=chance+ " Wins!";
        disable();
        reset.style.visibility='inherit';   
    }
    if(btn4.innerText==btn5.innerText&&
        btn4.innerText==btn6.innerText&&
        btn4.innerText!=''){
            heading.innerText=chance+ " Wins!";
            disable();
            reset.style.visibility='inherit';  
        }
    if(btn7.innerText==btn8.innerText&&
        btn7.innerText==btn9.innerText&&
        btn7.innerText!=''){
            heading.innerText=chance+ " Wins!";
            disable();
            reset.style.visibility='inherit';  
        }
    if(btn1.innerText==btn4.innerText&&
        btn1.innerText==btn7.innerText&&
        btn1.innerText!=''){
            heading.innerText=chance+ " Wins!";
            disable();
            reset.style.visibility='inherit';
        }
    if(btn2.innerText==btn5.innerText&&
    btn2.innerText==btn8.innerText&&
    btn2.innerText!=''){
        heading.innerText=chance+ " Wins!";
        disable();
        reset.style.visibility='inherit'; 
    }
    if(btn3.innerText==btn6.innerText&&
        btn3.innerText==btn9.innerText&&
        btn3.innerText!=''){
            heading.innerText=chance+ " Wins!";
            disable();
            reset.style.visibility='inherit';  
        }
    if(btn1.innerText==btn5.innerText&&
        btn1.innerText==btn9.innerText&&
        btn1.innerText!=''){
            heading.innerText=chance+ " Wins!";
            disable();
            reset.style.visibility='inherit'; 
        }
    if(btn3.innerText==btn5.innerText&&
        btn3.innerText==btn7.innerText&&
        btn3.innerText!=''){
            heading.innerText=chance+ " Wins!";
            disable();
            reset.style.visibility='inherit';
        }
    if(btn1.innerHTML!=''&&
        btn2.innerHTML!=''&&
        btn3.innerHTML!=''&&
        btn4.innerHTML!=''&&
        btn5.innerHTML!=''&&
        btn6.innerHTML!=''&&
        btn7.innerHTML!=''&&
        btn8.innerHTML!=''&&
        btn9.innerHTML!=''
    ){
        heading.innerText="Game Draw";
        reset.style.visibility='inherit';  
    }
}