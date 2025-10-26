let input= document.getElementById("input");
let buttons= document.querySelectorAll("button");
let string="";
let btn = Array.from(buttons);
btn.forEach(buttons=>{
    buttons.addEventListener('click',(element)=>{
        if(element.target.innerHTML ==="="){
            try{
                string= eval(string);
            input.value=string;
            }catch{
                string= "Error";
            input.value=string;
            }
        }else if(element.target.innerHTML==="AC"){
            string="";
            input.value= string;
        }else if(element.target.innerHTML==="X"){
            string= string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string += element.target.innerHTML;
            input.value=string;
        }
    } )
})
