const dis=document.getElementById('dis');
let buttons=document.querySelectorAll("button");
const dark=document.getElementById('toggle-dark');

let screenValue='';
// let buttonText;
for(butt of buttons){
butt.addEventListener("click",(event)=>{
    buttonText=event.target.innerText;
    console.log(buttonText);
if(buttonText==(String.fromCharCode(215))){
    buttonText='*';
    screenValue+=buttonText;
    dis.value=screenValue;
   
}
    else if(buttonText=='AC'){
        screenValue='';
        dis.value=screenValue;
    }
    else if(buttonText=='='){
        dis.value=eval(screenValue);
        screenValue='';
    }
   else if(buttonText==(String.fromCharCode(8592))){
       screenValue=dis.value.substring(0, dis.value.length - 1);
        dis.value = screenValue;
    }
    else{
        screenValue+=buttonText;
        dis.value=screenValue;
    }
})}

dark.addEventListener("click",()=>{
    let el=document.body;
    el.classList.toggle('d');
})