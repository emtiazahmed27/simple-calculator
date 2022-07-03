//getting elements
const numpad=document.querySelectorAll(".numpad"), 
disp=document.querySelector(".display-section"),
operator=document.querySelectorAll(".operator");

for(let i=0; i<numpad.length; i++){
    numpad[i].addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case "Clear":
                disp.innerText="";
                disp.style.color="#1e272e";
                break;
            case "Del":
                if(disp.innerText!=""){
                    disp.innerText=disp.innerText.slice(0,-1);
                    disp.style.color="#1e272e";
                }
                break;
            case "=":
                try{
                    //evaluating operation 
                    disp.innerText=eval(disp.innerText);
                    disp.style.color="#1e272e";
                }catch{
                    disp.innerText="Error!";
                    disp.style.color="#ff5e57"; 
                    setTimeout(()=>{
                        window.location.reload();
                    },1000)
                }
                break;
            default:
                disp.innerText+=e.target.innerText;
                disp.style.color="#1e272e";
        }
    })        
}


